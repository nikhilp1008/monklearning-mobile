import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2, Topic 03: Functions, pp. 120–129 of the Class 11 Mathematics
 * Master Reference (October 2026 edition), word for word, with the supplement's
 * "Addendum to Subtopic 03: Finding the Range" (pp. 146–152) slotted in where
 * the book says to read it (decision 8): Procedure E closes the "Key procedures
 * and logical framework" part, after Procedure D; Examples 6 and 7 close the
 * worked examples, after Example 5. The addendum's heading and its reading
 * instruction (p. 146) are not copied.
 * The topic opens with its "Exam Relevance:" box as a part of its own, then is
 * split at its Sections 1 to 8.
 * The topic's own unnumbered "Figure 1" (the vertical line test, p. 121) and
 * "Figure 2" (graphs of six standard functions, p. 123) are m11-02-03-d1 and
 * m11-02-03-d2, each where the book prints it; Figure 2.5 (caption p. 149,
 * drawn p. 150) is shown inside Example 6, which calls it. All are redrawn in
 * lib/diagrams/mathematics-11-02.ts.
 * Every fraction is stacked (<frac>); the under-brace "p inputs" follows its
 * product in brackets.
 */
export const TOPICS: Topic[] = [
  // ──────────────── Topic 03 · pp. 120–129, with pp. 146–152 ────────────────
  {
    n: '03',
    title: 'Functions',
    kalam: 'A function is a relation with discipline.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'A guaranteed scorer. CBSE Boards lifts direct 1–3 mark questions on “is this a function?”, domain/range, and the standard function definitions and graphs. JEE Main loves the counting fact (<i>q</i><sup><i>p</i></sup> functions) and domain-finding for radicals and rational expressions. (The mapping-classification layer (one-one, onto, bijective, composition, inverse) is Class 12 material (Additional topic G previews composition); here we install the engine.)',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'You’ve already met <b>relations</b>: any highlighted slice of <i>A</i> × <i>B</i>. A <b>function</b> is a relation with discipline. It is a relation that obeys two strict promises, and those two promises are the whole idea.',
      },
      {
        t: 'p',
        html: 'Think of a snack vending machine. Each button (input) is wired to deliver <b>exactly one</b> product (output). Two things are guaranteed: press a button and you always get something (no dead buttons), and you get one definite item, never “maybe a samosa, maybe a Frooti.” A function <i>f</i> from <i>A</i> to <i>B</i> is exactly this machine: every element of <i>A</i> (every button) is connected to <b>one and only one</b> element of <i>B</i>.',
      },
      {
        t: 'p',
        html: 'Formally, a <b>function</b> <i>f</i> : <i>A</i> → <i>B</i> is a relation from <i>A</i> to <i>B</i> in which<br>1. <b>every</b> element of <i>A</i> has an image in <i>B</i> (no input is left unmapped), and<br>2. <b>no</b> element of <i>A</i> has more than one image (each input gives a single output).',
      },
      {
        t: 'p',
        html: 'Compare this with an ordinary relation, which is free to skip elements of <i>A</i> and free to send one element to several places. A function forbids both. So <b>every function is a relation, but most relations are not functions.</b>',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture the Mumbai dabbawala system. Each tiffin (input) must be delivered to exactly one office address (output). A tiffin with no address is a failure (violates promise 1); a tiffin tagged with two addresses is chaos (violates promise 2). The delivery assignment is a function precisely because it avoids both disasters. Crucially, two different tiffins are perfectly allowed to go to the same office: many inputs sharing one output is fine. What’s forbidden is one input splitting into many outputs.',
      },
      {
        t: 'p',
        html: 'The notation <i>y</i> = <i>f</i>(<i>x</i>) reads “<i>y</i> is the image of <i>x</i> under <i>f</i>.” We call <i>x</i> the <b>independent variable</b>, <i>y</i> the <b>dependent variable</b>, and <i>f</i>(<i>x</i>) the <b>value of <i>f</i> at <i>x</i></b>.',
      },
      {
        t: 'p',
        html: 'The three companions from relations sharpen here:<br>• <b>Domain</b> = <i>A</i>: for a function, the domain is the entire set <i>A</i> (promise 1 forces every element to be used).<br>• <b>Codomain</b> = <i>B</i>: the declared target.<br>• <b>Range</b> = {<i>f</i>(<i>x</i>) ∶ <i>x</i> ∈ <i>A</i>}: the set of images actually produced; still Range ⊆ Codomain.',
      },
      {
        t: 'p',
        html: 'For functions on real numbers, there’s a beautiful visual test. Draw the graph; then the <b>vertical line test</b>: if every vertical line meets the graph in <b>at most one point</b>, the graph is a function (each <i>x</i> gives one <i>y</i>). A circle fails it (a vertical line cuts it twice: one <i>x</i>, two <i>y</i>’s), which is why <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 25 is a relation but not a function.',
      },
      { t: 'fig', id: 'm11-02-03-d1' },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b><br>• <b>Domain must be the whole of <i>A</i>.</b> If even one element of <i>A</i> has no image, it isn’t a function on <i>A</i>; it’s only a function on the smaller set of mapped elements.<br>• <b>Single-valued is non-negotiable.</b> √<i>x</i> as “±” is not a function; the function √ returns the non-negative root only.<br>• <b>Many-to-one is allowed; one-to-many is banned.</b> Several inputs may share an output.<br>• <b>Real function caveat:</b> when a rule like <i>f</i>(<i>x</i>) = <frac><num>1</num><den><i>x</i></den></frac> is given without a stated domain, the domain is taken to be all real <i>x</i> for which the rule makes sense (the natural domain), here ℝ ∖ {0}.',
      },

      { t: 'part', title: 'Key definitions, formulas and notation' },
      {
        t: 'p',
        html: 'The key quantities to track are <b>memberships, images, and cardinalities:</b> what lies in the domain, where each input goes, and how many functions exist.',
      },
      {
        t: 'p',
        html: '<b>Function.</b> <i>f</i> : <i>A</i> → <i>B</i> is a function ⟺ <i>f</i> ⊆ <i>A</i> × <i>B</i> with every <i>a</i> ∈ <i>A</i> appearing as the first coordinate of exactly one pair.<br>Domain(<i>f</i>) = <i>A</i>, Codomain(<i>f</i>) = <i>B</i>, Range(<i>f</i>) = {<i>f</i>(<i>x</i>) ∶ <i>x</i> ∈ <i>A</i>} ⊆ <i>B</i>',
      },
      {
        t: 'p',
        html: '<b>Real function / real-valued function.</b> If Range(<i>f</i>) ⊆ ℝ, <i>f</i> is <b>real-valued</b>; if additionally the domain ⊆ ℝ, <i>f</i> is a <b>real function</b>.',
      },
      {
        t: 'p',
        html: '<b>Equality of functions.</b> Two functions <i>f</i> and <i>g</i> are <b>equal</b> (written <i>f</i> = <i>g</i>) if and only if they have the same domain <b>and</b> <i>f</i>(<i>x</i>) = <i>g</i>(<i>x</i>) for every <i>x</i> in that domain. The same rule on a different domain gives a different function: e.g. <i>f</i>(<i>x</i>) = <i>x</i> on ℝ and <i>g</i>(<i>x</i>) = <i>x</i> on [0, 1] are not equal.',
      },
      {
        t: 'p',
        html: '<b>Number of functions.</b> If <i>n</i>(<i>A</i>) = <i>p</i> and <i>n</i>(<i>B</i>) = <i>q</i>, each of the <i>p</i> inputs independently chooses one of <i>q</i> outputs:',
      },
      {
        t: 'formula',
        kicker: 'Number of functions',
        main: 'Number of functions from <i>A</i> to <i>B</i> = <i>q</i><sup><i>p</i></sup> = (<i>n</i>(<i>B</i>))<sup><i>n</i>(<i>A</i>)</sup>',
        legend: ['<i>p</i> = number of elements of <i>A</i>, <i>n</i>(<i>A</i>)', '<i>q</i> = number of elements of <i>B</i>, <i>n</i>(<i>B</i>)'],
        note: null,
      },
      {
        t: 'p',
        html: '(Contrast: number of relations was 2<sup><i>pq</i></sup>. Functions are far fewer.)',
      },
      {
        t: 'table',
        title: 'The standard real functions (Class 11 zoo)',
        head: ['Function', 'Rule', 'Domain', 'Range'],
        rows: [
          ['Identity', '<i>f</i>(<i>x</i>) = <i>x</i>', 'ℝ', 'ℝ'],
          ['Constant', '<i>f</i>(<i>x</i>) = <i>c</i>', 'ℝ', '{<i>c</i>}'],
          ['Polynomial', '<i>f</i>(<i>x</i>) = <i>a</i><sub>0</sub> + <i>a</i><sub>1</sub><i>x</i> + ⋯ + <i>a</i><sub><i>n</i></sub><i>x</i><sup><i>n</i></sup>', 'ℝ', 'depends on degree'],
          ['Rational', '<i>f</i>(<i>x</i>) = <frac><num><i>p</i>(<i>x</i>)</num><den><i>q</i>(<i>x</i>)</den></frac>', 'ℝ ∖ {<i>x</i> ∶ <i>q</i>(<i>x</i>) = 0}', 'depends'],
          ['Modulus', '<i>f</i>(<i>x</i>) = |<i>x</i>|', 'ℝ', '[0, ∞)'],
          ['Signum', '<i>f</i>(<i>x</i>) = <frac><num>|<i>x</i>|</num><den><i>x</i></den></frac> for <i>x</i> ≠ 0, 0 for <i>x</i> = 0', 'ℝ', '{−1, 0, 1}'],
          ['Greatest integer', '<i>f</i>(<i>x</i>) = [<i>x</i>] (largest integer ≤ <i>x</i>)', 'ℝ', 'ℤ'],
        ],
      },
      {
        t: 'p',
        html: '<b>Graphs of the standard functions</b><br>A function’s graph is its fingerprint: once you can picture it, the domain and range fall out by inspection. These six (every function in the table except the rational function, whose graph varies with <i>p</i>(<i>x</i>) and <i>q</i>(<i>x</i>)) are the ones every Class 11 student must be able to sketch on sight.',
      },
      { t: 'fig', id: 'm11-02-03-d2' },
      {
        t: 'p',
        html: '• <b>Identity</b> <i>f</i>(<i>x</i>) = <i>x</i><b>:</b> the 45° line through the origin. Every input maps to itself; domain ℝ, range ℝ.<br>• <b>Constant</b> <i>f</i>(<i>x</i>) = <i>c</i><b>:</b> a horizontal line at height <i>c</i>. Every input lands on the single value <i>c</i>; range {<i>c</i>}.<br>• <b>Modulus</b> <i>f</i>(<i>x</i>) = |<i>x</i>|<b>:</b> a symmetric “V” with its vertex at the origin. It never dips below the <i>x</i>-axis, so the range is [0, ∞).<br>• <b>Signum</b> sgn(<i>x</i>)<b>:</b> three flat pieces (−1 for <i>x</i> < 0, 0 at <i>x</i> = 0, +1 for <i>x</i> > 0) with jumps at the origin (open circles where a value is not taken, the filled dot where it is). Range {−1, 0, 1}.<br>• <b>Greatest integer</b> <i>f</i>(<i>x</i>) = [<i>x</i>]<b>:</b> a left-closed staircase. On each interval [<i>n</i>, <i>n</i> + 1) the value is the integer <i>n</i>; the filled dot (included) sits at the left, the open dot (excluded) at the right. Range ℤ.<br>• <b>Polynomial</b> <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup><b>:</b> an upward parabola with vertex at the origin. Its range is [0, ∞) because a square is never negative. But an even-degree polynomial can go negative: <i>x</i><sup>2</sup> − 1 does on (−1, 1). Its range is never ℝ.',
      },
      {
        t: 'p',
        html: '<b>Reading domain and range off a graph.</b> Project the curve onto the axes: the shadow it casts on the <b><i>x</i>-axis is the domain</b> (every <i>x</i>-value the graph covers), and the shadow on the <b><i>y</i>-axis is the range</b> (every <i>y</i>-value it attains). The vertical line test first confirms the picture is a function at all.',
      },
      {
        t: 'p',
        html: '(JEE companion, beyond the Class 11 core: the <b>fractional part</b> {<i>x</i>} = <i>x</i> − [<i>x</i>] strips off the integer part of <i>x</i>; it is a sawtooth with range [0, 1) and is studied alongside [<i>x</i>] in the Class 12 / JEE function toolkit.)',
      },
      {
        t: 'p',
        html: '<b>Algebra of real functions</b><br>For real functions <i>f</i>, <i>g</i> and scalar <i>α</i>:',
      },
      {
        t: 'formula',
        kicker: 'Algebra of real functions',
        main: '(<i>f</i> ± <i>g</i>)(<i>x</i>) = <i>f</i>(<i>x</i>) ± <i>g</i>(<i>x</i>)<br>(<i>fg</i>)(<i>x</i>) = <i>f</i>(<i>x</i>) <i>g</i>(<i>x</i>)<br>(<i>αf</i>)(<i>x</i>) = <i>α</i> <i>f</i>(<i>x</i>)<br>(<frac><num><i>f</i></num><den><i>g</i></den></frac>)(<i>x</i>) = <frac><num><i>f</i>(<i>x</i>)</num><den><i>g</i>(<i>x</i>)</den></frac>, wherever <i>g</i>(<i>x</i>) ≠ 0',
        legend: ['<i>f</i>, <i>g</i> = real functions', '<i>α</i> = a scalar (real number)', '<i>x</i> = a point of the common domain'],
        note: null,
      },
      {
        t: 'p',
        html: 'Domains: Dom(<i>f</i> ± <i>g</i>) = Dom(<i>fg</i>) = Dom(<i>f</i>) ∩ Dom(<i>g</i>); and Dom(<frac><num><i>f</i></num><den><i>g</i></den></frac>) = (Dom(<i>f</i>) ∩ Dom(<i>g</i>)) ∖ {<i>x</i> ∶ <i>g</i>(<i>x</i>) = 0}.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: 'Procedure A: Is a given relation a function?',
        steps: [
          '<b>Promise 1 (totality):</b> check every element of <i>A</i> appears as a first coordinate. A missing input ⇒ not a function on <i>A</i>.',
          '<b>Promise 2 (single-valued):</b> check no first coordinate is repeated with different second coordinates. A repeat like (3, 5) and (3, 8) ⇒ not a function.',
          '<b>Graphs:</b> apply the <b>vertical line test</b>: at most one intersection per vertical line.',
        ],
      },
      { t: 'p', html: 'Work through the “danger sources” and intersect the surviving sets:' },
      {
        t: 'proc',
        title: 'Procedure B: Finding the (natural) domain of a real function',
        steps: [
          '<b>Denominators</b> must be non-zero ⇒ exclude roots of the denominator.',
          '<b>Even roots</b> (square roots, fourth roots, …) need a <b>non-negative</b> radicand ⇒ solve (inside) ≥ 0.',
          '<b>Combine:</b> if several conditions apply, the domain is their <b>intersection</b> (all conditions must hold at once).',
        ],
      },
      {
        t: 'p',
        html: '<b>Why intersect?</b> The rule must be simultaneously valid at every step; a value surviving one hurdle but failing another is still excluded.',
      },
      {
        t: 'proc',
        title: 'Procedure C: Algebra of functions and their domains',
        steps: [
          'Compute the new rule: add/subtract/multiply/divide the formulas.',
          'For <i>f</i> ± <i>g</i> and <i>fg</i>: domain = Dom(<i>f</i>) ∩ Dom(<i>g</i>) (both must be defined to combine them).',
          'For <frac><num><i>f</i></num><den><i>g</i></den></frac>: take that intersection <b>and then remove</b> every point where <i>g</i>(<i>x</i>) = 0 (can’t divide by zero). This extra removal is the step students forget.',
        ],
      },
      { t: 'p', html: '<b>Procedure D: Counting functions (<i>q</i><sup><i>p</i></sup> logic)</b>' },
      {
        t: 'p',
        html: 'Each of the <i>p</i> domain elements must be assigned exactly one of the <i>q</i> codomain values, and the choices are independent. By the multiplication principle:<br><i>q</i> × <i>q</i> × ⋯ × <i>q</i> (<i>p</i> inputs) = <i>q</i><sup><i>p</i></sup>.',
      },
      {
        t: 'p',
        html: 'There’s no “yes/no per pair” here (that gave 2<sup><i>pq</i></sup> for relations); instead it’s “one choice of output per input,” which is why the base is <i>q</i> and the exponent is <i>p</i>. ■',
      },
      // Procedure E: the supplement's range addendum, pp. 146–149.
      { t: 'p', html: '<b>Procedure E: Finding the Range of a Real Function</b>' },
      {
        t: 'p',
        html: 'Procedure B taught you to ask “<b>which <i>x</i> are legal?</b>” That gives the domain. The range asks the mirror question: “<b>which <i>y</i> actually get produced?</b>” Domain is a question about inputs and is answered by hunting for illegal operations. Range is a question about outputs and is answered by a completely different move:',
      },
      {
        t: 'p',
        html: '<b>A value <i>y</i> lies in the range of <i>f</i> if and only if the equation <i>y</i> = <i>f</i>(<i>x</i>) has at least one solution <i>x</i> inside the domain of <i>f</i>.</b>',
      },
      { t: 'p', html: 'Everything below is that one sentence, applied with different algebra.' },
      {
        t: 'p',
        html: '<b>Step 0: Find the domain first.</b> Every range method secretly asks “does a legal <i>x</i> exist?”, and you cannot answer that until you know which <i>x</i> are legal. (<b>Why:</b> a <i>y</i> produced only by an <i>x</i> that the domain excludes is not in the range.)',
      },
      { t: 'p', html: '<b>Step 1: Choose the method from the shape of <i>f</i>.</b>' },
      {
        t: 'table',
        title: null,
        head: ['Shape of <i>f</i>(<i>x</i>)', 'Method', 'Core move'],
        rows: [
          [
            'Linear rational <frac><num><i>ax</i> + <i>b</i></num><den><i>cx</i> + <i>d</i></den></frac>',
            'Inversion',
            'Solve for <i>x</i> in terms of <i>y</i>; exclude the <i>y</i> that makes the solution fail',
          ],
          [
            '<frac><num><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i></num><den><i>dx</i><sup>2</sup> + <i>ex</i> + <i>f</i></den></frac>',
            'Discriminant',
            'Cross-multiply to a quadratic in <i>x</i>; impose <i>D</i> ≥ 0',
          ],
          [
            'Quadratic, or quadratic buried inside a root or a denominator',
            'Completing the square',
            'Rewrite as <i>a</i>(<i>x</i> − <i>h</i>)<sup>2</sup> + <i>k</i> and read off the reachable values',
          ],
          [
            'Bounded ingredient (sin, cos, |<i>x</i>|, <i>x</i><sup>2</sup>) or a sum <i>t</i> + <frac><num>1</num><den><i>t</i></den></frac>',
            'Boundedness / AM–GM',
            'Bound the ingredient first, then propagate the bound through the outer operations',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Step 2 (Method 1: inversion and realisability).</b> Put <i>y</i> = <i>f</i>(<i>x</i>) and solve the equation for <i>x</i>, obtaining <i>x</i> = <i>g</i>(<i>y</i>). The range is the set of <i>y</i> for which <i>g</i>(<i>y</i>) is (i) a real number and (ii) an element of the domain of <i>f</i>. (<b>Why:</b> this is the defining sentence made literal: you are exhibiting the <i>x</i> that produces <i>y</i>.)',
      },
      {
        t: 'p',
        html: '<b>Illustration.</b> For <i>f</i>(<i>x</i>) = <frac><num>2<i>x</i> + 3</num><den><i>x</i> − 1</den></frac> with domain ℝ ∖ {1}: from <i>y</i>(<i>x</i> − 1) = 2<i>x</i> + 3 we get <i>x</i>(<i>y</i> − 2) = <i>y</i> + 3, so <i>x</i> = <frac><num><i>y</i> + 3</num><den><i>y</i> − 2</den></frac>. This is real exactly when <i>y</i> ≠ 2, and it is never equal to 1 (that would need <i>y</i> + 3 = <i>y</i> − 2). Hence the range is ℝ ∖ {2}.',
      },
      {
        t: 'p',
        html: '<b>Step 3 (Method 2: the discriminant method).</b> For <i>y</i> = <frac><num><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i></num><den><i>dx</i><sup>2</sup> + <i>ex</i> + <i>f</i></den></frac>, cross-multiply and collect powers of <i>x</i>:<br>(<i>a</i> − <i>yd</i>) <i>x</i><sup>2</sup> + (<i>b</i> − <i>ye</i>) <i>x</i> + (<i>c</i> − <i>yf</i>) = 0.<br>Then:',
      },
      {
        t: 'p',
        html: '1. <b>Handle the degenerate value separately.</b> If <i>a</i> − <i>yd</i> = 0, i.e. <i>y</i> = <frac><num><i>a</i></num><den><i>d</i></den></frac>, the equation is no longer quadratic and the discriminant test does not apply. Substitute that <i>y</i> back by hand and see whether a real <i>x</i> exists. (<b>Why:</b> this single value of <i>y</i> is where students lose the mark, and it can land on either side: sometimes it belongs to the range, sometimes it does not.)<br>2. <b>For all other</b> <i>y</i>, a real <i>x</i> exists if and only if the discriminant is non-negative:<br><i>D</i> = (<i>b</i> − <i>ye</i>)<sup>2</sup> − 4(<i>a</i> − <i>yd</i>)(<i>c</i> − <i>yf</i>) ≥ 0.<br>Solve this inequality in <i>y</i>; that inequality <b>is</b> the range, subject to the next check. (<b>Why:</b> a quadratic with real coefficients has a real root exactly when <i>D</i> ≥ 0.)<br>3. <b>Check the root is in the domain.</b> If the numerator and denominator share a real root, the graph has a hole and the corresponding <i>y</i> must be removed by hand. (<b>Why:</b> the discriminant only certifies that some real <i>x</i> solves the cleared equation; it does not check that <i>x</i> was legal in the original fraction.)',
      },
      {
        t: 'p',
        html: '<b>Illustration of the hole.</b> <i>f</i>(<i>x</i>) = <frac><num><i>x</i><sup>2</sup> − 4</num><den><i>x</i> − 2</den></frac> equals <i>x</i> + 2 for every <i>x</i> ≠ 2, so its range is ℝ ∖ {4}, not ℝ. Cancelling without recording the excluded point is what loses the {4}.',
      },
      {
        t: 'p',
        html: '<b>Step 4 (Method 3: completing the square).</b> Write the quadratic as <i>a</i>(<i>x</i> − <i>h</i>)<sup>2</sup> + <i>k</i>. Since (<i>x</i> − <i>h</i>)<sup>2</sup> ranges over [0, ∞) and attains every value there:<br><i>a</i> > 0 ⇒ range = [<i>k</i>, ∞), <i>a</i> < 0 ⇒ range = (−∞, <i>k</i>].<br>(<b>Why:</b> a square is non-negative and unbounded above, and multiplying by <i>a</i> either preserves or reverses that.) Then propagate through whatever wraps the quadratic (a reciprocal, a square root, a modulus) one operation at a time.',
      },
      {
        t: 'p',
        html: '<b>Illustration.</b> <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 4<i>x</i> + 7 = (<i>x</i> − 2)<sup>2</sup> + 3 has range [3, ∞). Consequently <i>g</i>(<i>x</i>) = <frac><num>1</num><den><i>x</i><sup>2</sup> − 4<i>x</i> + 7</den></frac> has range (0, <frac><num>1</num><den>3</den></frac>]: as the denominator sweeps [3, ∞), its reciprocal sweeps (0, <frac><num>1</num><den>3</den></frac>], hitting <frac><num>1</num><den>3</den></frac> at <i>x</i> = 2 and approaching 0 without reaching it. Note that a quadratic’s range is <b>not</b> automatically [0, ∞): that is true only for a perfect square <i>a</i>(<i>x</i> − <i>h</i>)<sup>2</sup> with <i>a</i> > 0, not for quadratics in general.',
      },
      {
        t: 'p',
        html: '<b>Step 5 (Method 4: boundedness and AM–GM).</b> When <i>f</i> is built from an ingredient whose range you already know, bound the ingredient and push the bound outwards.<br>• <b>Bounded trigonometric ingredient.</b> sin <i>θ</i> and cos <i>θ</i> take every value in [−1, 1]. So for <i>f</i>(<i>x</i>) = <frac><num>1</num><den>2 − sin 3<i>x</i></den></frac>: as <i>x</i> runs over ℝ, 3<i>x</i> runs over ℝ, so sin 3<i>x</i> attains every value in [−1, 1]; hence 2 − sin 3<i>x</i> attains every value in [1, 3], and the reciprocal attains every value in [<frac><num>1</num><den>3</den></frac>, 1].<br>• <b>AM–GM.</b> For <i>t</i> > 0, <i>t</i> + <frac><num>1</num><den><i>t</i></den></frac> ≥ 2 with equality exactly at <i>t</i> = 1, and the expression is unbounded above, so its range on (0, ∞) is [2, ∞). For <i>t</i> < 0 the same argument applied to −<i>t</i> gives (−∞, −2]. Combined range on ℝ ∖ {0}: (−∞, −2] ∪ [2, ∞).',
      },
      {
        t: 'p',
        html: '(<b>Why AM–GM earns its place:</b> it converts a range question into a single sharp inequality plus an equality case, which is far faster than a discriminant when the expression is a sum of reciprocal terms.)',
      },
      {
        t: 'p',
        html: '<b>Step 6: Confirm the endpoints are attained.</b> An inequality such as <i>y</i> ≤ <frac><num>1</num><den>2</den></frac> tells you the range is contained in (−∞, <frac><num>1</num><den>2</den></frac>]; it does not by itself tell you <frac><num>1</num><den>2</den></frac> is reached. Solve <i>f</i>(<i>x</i>) = <frac><num>1</num><den>2</den></frac> and produce the <i>x</i>. (<b>Why:</b> this is what decides a square bracket against a round one, and it is where most of the lost marks live.)',
      },
      {
        t: 'p',
        html: '<b>Step 7: Respect a restricted domain.</b> If the question supplies a domain smaller than the natural one, none of the above may be used blindly. For <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> the range is [0, ∞) on ℝ but [1, 9] on [1, 3]. (<b>Why:</b> the defining sentence requires a solution <b>inside the domain</b>; shrinking the domain can only shrink the range.)',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Let <i>A</i> = {1, 2, 3, 4} and <i>B</i> = {2, 3, 5, 7}. Determine whether <i>R</i> = {(1, 2), (2, 3), (3, 2), (4, 5)} is a function from <i>A</i> to <i>B</i>. If so, state its domain and range.',
        steps: [
          '<b>Promise 1 (totality):</b> the first coordinates are 1, 2, 3, 4: every element of <i>A</i> is present. ✓ <b>Promise 2 (single-valued):</b> no first coordinate repeats, so no input has two images. ✓ (The output 2 is shared by inputs 1 and 3: that’s many-to-one, which is perfectly allowed.)',
          'Hence <i>R</i> <b>is a function</b>.<br>• <b>Domain</b> = <i>A</i> = {1, 2, 3, 4}<br>• <b>Range</b> = {2, 3, 5} (distinct images; note 7 ∈ <i>B</i> is never hit, so it’s in the codomain but not the range). ■',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: '<i>A</i> has 3 elements and <i>B</i> has 4 elements. How many functions can be defined from <i>A</i> to <i>B</i>?',
        steps: [
          '<b>The trap.</b> Three reflex wrong answers compete: 2<sup>3×4</sup> = 4096 (that’s relations, not functions), 3<sup>4</sup> = 81 (base and exponent swapped: assigning sets backwards), and 3 × 4 = 12 (just the pair count). The correct base is the number of choices per input = <i>q</i>, and the exponent is the number of inputs = <i>p</i>.',
          '<b>Speed move.</b> Functions = <i>q</i><sup><i>p</i></sup> = 4<sup>3</sup>.',
          'Mnemonic to kill the swap: “each input picks an output” → outputs are the <b>base</b> (<i>q</i>), inputs are the <b>exponent</b> (<i>p</i>). ■',
        ],
        ans: '4<sup>3</sup> = 64.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Find the natural domain of the real function<br><i>f</i>(<i>x</i>) = <frac><num>√(<i>x</i> − 2)</num><den><i>x</i> − 5</den></frac>.',
        steps: [
          'Two danger sources must hold simultaneously (Procedure B):<br>• <b>Square root:</b> <i>x</i> − 2 ≥ 0 ⇒ <i>x</i> ≥ 2, i.e. <i>x</i> ∈ [2, ∞).<br>• <b>Denominator:</b> <i>x</i> − 5 ≠ 0 ⇒ <i>x</i> ≠ 5.',
          'Intersect: Domain = [2, ∞) ∖ {5} = [2, 5) ∪ (5, ∞).',
          'The point <i>x</i> = 2 stays in (the square root is 0 there, which is fine: only the denominator can’t be zero); <i>x</i> = 5 is punched out. ■',
        ],
        ans: 'Domain = [2, ∞) ∖ {5} = [2, 5) ∪ (5, ∞).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Let <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> and <i>g</i>(<i>x</i>) = √(4 − <i>x</i><sup>2</sup>). Find (<i>f</i> + <i>g</i>)(<i>x</i>), (<i>fg</i>)(<i>x</i>), and (<frac><num><i>f</i></num><den><i>g</i></den></frac>)(<i>x</i>), and state the <b>exact domain</b> of each.',
        steps: [
          'This is where careless domain bookkeeping costs marks. First pin down the individual domains:<br>• Dom(<i>f</i>) = ℝ (polynomial).<br>• Dom(<i>g</i>): need 4 − <i>x</i><sup>2</sup> ≥ 0 ⇒ <i>x</i><sup>2</sup> ≤ 4 ⇒ <i>x</i> ∈ [−2, 2].',
          '<b>Sum:</b> (<i>f</i> + <i>g</i>)(<i>x</i>) = <i>x</i><sup>2</sup> + √(4 − <i>x</i><sup>2</sup>). Domain = ℝ ∩ [−2, 2] = [−2, 2].',
          '<b>Product:</b> (<i>fg</i>)(<i>x</i>) = <i>x</i><sup>2</sup>√(4 − <i>x</i><sup>2</sup>). Domain = ℝ ∩ [−2, 2] = [−2, 2].',
          '<b>Quotient:</b> (<frac><num><i>f</i></num><den><i>g</i></den></frac>)(<i>x</i>) = <frac><num><i>x</i><sup>2</sup></num><den>√(4 − <i>x</i><sup>2</sup>)</den></frac>. Start from [−2, 2], then remove the points where <i>g</i>(<i>x</i>) = 0. Now √(4 − <i>x</i><sup>2</sup>) = 0 at <i>x</i> = ±2, so both endpoints are punched out:<br>Dom(<frac><num><i>f</i></num><den><i>g</i></den></frac>) = (−2, 2).',
          'The deep point: <i>f</i> + <i>g</i> and <i>fg</i> keep the closed interval, but the quotient <b>must</b> shed the zeros of <i>g</i>, opening it to (−2, 2). Forgetting to exclude ±2 is the single most common error here. ■',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE / JEE Main: Graph Reading',
        q: 'Consider <i>f</i>(<i>x</i>) = |<i>x</i> − 2|, <i>x</i> ∈ ℝ. (a) Describe its graph. (b) State its domain and range. (c) Find <i>f</i>(5). (d) Solve <i>f</i>(<i>x</i>) = 3.',
        steps: [
          'This is the modulus graph from the zoo, shifted. <b>(a)</b> |<i>x</i>| is a “V” with vertex at the origin; replacing <i>x</i> by <i>x</i> − 2 slides the whole V <b>right by 2</b>, so <i>f</i>(<i>x</i>) = |<i>x</i> − 2| is a V with vertex at (2, 0), arms rising with slopes ±1. <b>(b)</b> Project onto the axes: the graph spans all <i>x</i>, so <b>domain</b> = ℝ; it never drops below the <i>x</i>-axis and touches 0 at <i>x</i> = 2, so <b>range</b> = [0, ∞). <b>(c)</b> <i>f</i>(5) = |5 − 2| = |3| = 3. <b>(d)</b> |<i>x</i> − 2| = 3 ⇒ <i>x</i> − 2 = 3 or <i>x</i> − 2 = −3 ⇒ <i>x</i> = 5 or <i>x</i> = −1. The two solutions are the two points on the V at height 3: exactly what the graph predicts (a horizontal line <i>y</i> = 3 cuts the V twice). ■',
        ],
        ans: '',
      },
      // Examples 6 and 7: the supplement's range addendum, pp. 148–152.
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Find the range of (a) <i>f</i>(<i>x</i>) = <frac><num><i>x</i></num><den>1 + <i>x</i><sup>2</sup></den></frac>, <i>x</i> ∈ ℝ, and (b) <i>g</i>(<i>x</i>) = <frac><num>1</num><den>2 − sin 3<i>x</i></den></frac>, <i>x</i> ∈ ℝ.',
        fig: 'm11-02-fig-2.5',
        steps: [
          '<b>(a)</b> <b>Domain first.</b> The denominator 1 + <i>x</i><sup>2</sup> ≥ 1 > 0 for every real <i>x</i>, so the domain is all of ℝ and there are no excluded points to worry about later.',
          'Put <i>y</i> = <frac><num><i>x</i></num><den>1 + <i>x</i><sup>2</sup></den></frac> and clear the fraction:<br><i>y</i>(1 + <i>x</i><sup>2</sup>) = <i>x</i> ⟹ <i>yx</i><sup>2</sup> − <i>x</i> + <i>y</i> = 0.',
          '<b>Degenerate value.</b> The coefficient of <i>x</i><sup>2</sup> vanishes when <i>y</i> = 0. Handle it by hand: the equation becomes −<i>x</i> = 0, so <i>x</i> = 0, and indeed <i>f</i>(0) = <frac><num>0</num><den>1</den></frac> = 0. So <i>y</i> = 0 <b>is in the range.</b>',
          '<b>All other <i>y</i>.</b> For <i>y</i> ≠ 0 this is a genuine quadratic in <i>x</i>, and a real <i>x</i> exists exactly when<br><i>D</i> = (−1)<sup>2</sup> − 4 · <i>y</i> · <i>y</i> = 1 − 4<i>y</i><sup>2</sup> ≥ 0 ⟹ <i>y</i><sup>2</sup> ≤ <frac><num>1</num><den>4</den></frac> ⟹ −<frac><num>1</num><den>2</den></frac> ≤ <i>y</i> ≤ <frac><num>1</num><den>2</den></frac>.',
          '<b>Domain check.</b> The denominator 1 + <i>x</i><sup>2</sup> has no real zeros at all, so no solution <i>x</i> can be illegal: no values need removing.',
          'Combining the degenerate case with the rest: Range(<i>f</i>) = [−<frac><num>1</num><den>2</den></frac>, <frac><num>1</num><den>2</den></frac>].',
          '<b>Endpoint check (Step 6).</b> At <i>y</i> = <frac><num>1</num><den>2</den></frac>: <frac><num>1</num><den>2</den></frac><i>x</i><sup>2</sup> − <i>x</i> + <frac><num>1</num><den>2</den></frac> = 0 ⇒ <i>x</i><sup>2</sup> − 2<i>x</i> + 1 = 0 ⇒ <i>x</i> = 1, and <i>f</i>(1) = <frac><num>1</num><den>2</den></frac>. At <i>y</i> = −<frac><num>1</num><den>2</den></frac>: similarly <i>x</i> = −1 and <i>f</i>(−1) = −<frac><num>1</num><den>2</den></frac>. Both endpoints are attained, so the brackets are closed.',
          '<b>Independent cross-check by AM–GM.</b> For <i>x</i> > 0, divide numerator and denominator by <i>x</i>:<br><i>f</i>(<i>x</i>) = <frac><num>1</num><den><i>x</i> + <frac><num>1</num><den><i>x</i></den></frac></den></frac> ≤ <frac><num>1</num><den>2</den></frac>,<br>since <i>x</i> + <frac><num>1</num><den><i>x</i></den></frac> ≥ 2 by AM–GM, with equality at <i>x</i> = 1. For <i>x</i> < 0 the same computation gives <i>f</i>(<i>x</i>) ≥ −<frac><num>1</num><den>2</den></frac>, and <i>f</i>(0) = 0. Two independent methods, one answer.',
          '<b>(b)</b> <b>Domain first.</b> sin 3<i>x</i> ≤ 1 < 2, so 2 − sin 3<i>x</i> ≥ 1 > 0 and never vanishes. Domain = ℝ.',
          'Now propagate the bound outwards, one operation at a time (Method 4):<br>1. As <i>x</i> runs over ℝ, so does 3<i>x</i>; hence sin 3<i>x</i> attains <b>every</b> value in [−1, 1].<br>2. Multiplying by −1 and adding 2 is a decreasing map, so 2 − sin 3<i>x</i> attains every value in [2 − 1, 2 + 1] = [1, 3].<br>3. On [1, 3] the reciprocal <i>t</i> ↦ <frac><num>1</num><den><i>t</i></den></frac> is decreasing and continuous, so <frac><num>1</num><den>2 − sin 3<i>x</i></den></frac> attains every value in [<frac><num>1</num><den>3</den></frac>, 1].',
          '<b>Endpoint check.</b> The maximum 1 occurs where sin 3<i>x</i> = 1, e.g. 3<i>x</i> = <frac><num>π</num><den>2</den></frac>, i.e. <i>x</i> = <frac><num>π</num><den>6</den></frac>: <i>g</i>(<frac><num>π</num><den>6</den></frac>) = <frac><num>1</num><den>2 − 1</den></frac> = 1. The minimum <frac><num>1</num><den>3</den></frac> occurs where sin 3<i>x</i> = −1, e.g. <i>x</i> = <frac><num>π</num><den>2</den></frac>: <i>g</i>(<frac><num>π</num><den>2</den></frac>) = <frac><num>1</num><den>2 + 1</den></frac> = <frac><num>1</num><den>3</den></frac>. Both attained. ■',
        ],
        ans: '(a) Range(<i>f</i>) = [−<frac><num>1</num><den>2</den></frac>, <frac><num>1</num><den>2</den></frac>]; (b) Range(<i>g</i>) = [<frac><num>1</num><den>3</den></frac>, 1]',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Find the range of the real function<br><i>f</i>(<i>x</i>) = <frac><num><i>x</i><sup>2</sup> + <i>x</i> + 1</num><den><i>x</i><sup>2</sup> + <i>x</i> − 1</den></frac>.',
        steps: [
          'This is the full discriminant method with every trap armed: a degenerate <i>y</i>, a domain with excluded points, and endpoints that must be tested.',
          '<b>Step 0: Domain.</b> The denominator vanishes when <i>x</i><sup>2</sup> + <i>x</i> − 1 = 0, i.e. <i>x</i> = <frac><num>−1 ± √5</num><den>2</den></frac>. So<br>Dom(<i>f</i>) = ℝ ∖ {<frac><num>−1 + √5</num><den>2</den></frac>, <frac><num>−1 − √5</num><den>2</den></frac>}.',
          '<b>Step 1: Clear the fraction.</b> Put <i>y</i> = <i>f</i>(<i>x</i>):<br><i>y</i>(<i>x</i><sup>2</sup> + <i>x</i> − 1) = <i>x</i><sup>2</sup> + <i>x</i> + 1 ⟹ (<i>y</i> − 1)<i>x</i><sup>2</sup> + (<i>y</i> − 1)<i>x</i> − (<i>y</i> + 1) = 0. (∗)',
          '<b>Step 2: The degenerate value <i>y</i> = 1.</b> The coefficient of <i>x</i><sup>2</sup> is <i>y</i> − 1, which vanishes at <i>y</i> = 1. Substituting <i>y</i> = 1 into (∗) leaves −2 = 0, an impossibility, so <b>no real <i>x</i> gives</b> <i>f</i>(<i>x</i>) = 1, and <i>y</i> = 1 is excluded from the range.<br>This is visible directly: <i>f</i>(<i>x</i>) = 1 would require <i>x</i><sup>2</sup> + <i>x</i> + 1 = <i>x</i><sup>2</sup> + <i>x</i> − 1, i.e. 1 = −1.',
          '<b>Step 3: Discriminant for <i>y</i> ≠ 1.</b> From (∗),<br><i>D</i> = (<i>y</i> − 1)<sup>2</sup> − 4(<i>y</i> − 1)(−(<i>y</i> + 1)) = (<i>y</i> − 1)<sup>2</sup> + 4(<i>y</i> − 1)(<i>y</i> + 1).<br>Factor out (<i>y</i> − 1):<br><i>D</i> = (<i>y</i> − 1)[(<i>y</i> − 1) + 4(<i>y</i> + 1)] = (<i>y</i> − 1)(5<i>y</i> + 3).<br>A real <i>x</i> exists exactly when <i>D</i> ≥ 0:<br>(<i>y</i> − 1)(5<i>y</i> + 3) ≥ 0 ⟹ <i>y</i> ≤ −<frac><num>3</num><den>5</den></frac> or <i>y</i> ≥ 1.<br>Removing the excluded <i>y</i> = 1 from Step 2:<br>Range(<i>f</i>) ⊆ (−∞, −<frac><num>3</num><den>5</den></frac>] ∪ (1, ∞).',
          '<b>Step 4: Domain check (the step that is usually skipped).</b> Could a <i>y</i> in that set be produced only by an <i>x</i> that is a root of the denominator? If <i>x</i><sup>2</sup> + <i>x</i> − 1 = 0, then the numerator is <i>x</i><sup>2</sup> + <i>x</i> + 1 = (<i>x</i><sup>2</sup> + <i>x</i> − 1) + 2 = 0 + 2 = 2 ≠ 0. Numerator and denominator therefore share <b>no</b> real root, so every solution of (∗) is a legal input and nothing further is removed.',
          '<b>Step 5: Endpoint check.</b> Is −<frac><num>3</num><den>5</den></frac> attained? Set <i>y</i> = −<frac><num>3</num><den>5</den></frac> in (∗):<br>(−<frac><num>8</num><den>5</den></frac>) <i>x</i><sup>2</sup> + (−<frac><num>8</num><den>5</den></frac>) <i>x</i> − <frac><num>2</num><den>5</den></frac> = 0 ⟹ 8<i>x</i><sup>2</sup> + 8<i>x</i> + 2 = 0 ⟹ 2(2<i>x</i> + 1)<sup>2</sup> = 0 ⟹ <i>x</i> = −<frac><num>1</num><den>2</den></frac>.<br>Verify directly:<br><i>f</i>(−<frac><num>1</num><den>2</den></frac>) = <frac><num><frac><num>1</num><den>4</den></frac> − <frac><num>1</num><den>2</den></frac> + 1</num><den><frac><num>1</num><den>4</den></frac> − <frac><num>1</num><den>2</den></frac> − 1</den></frac> = <frac><num><frac><num>3</num><den>4</den></frac></num><den>−<frac><num>5</num><den>4</den></frac></den></frac> = −<frac><num>3</num><den>5</den></frac>. ✓<br>So −<frac><num>3</num><den>5</den></frac> is genuinely attained and its bracket is closed, while 1 is never attained and its bracket is open.',
          '<b>Independent cross-check by substitution.</b> Put <i>t</i> = <i>x</i><sup>2</sup> + <i>x</i> = (<i>x</i> + <frac><num>1</num><den>2</den></frac>)<sup>2</sup> − <frac><num>1</num><den>4</den></frac>. As <i>x</i> runs over ℝ, <i>t</i> attains every value in [−<frac><num>1</num><den>4</den></frac>, ∞), and <i>t</i> = 1 must be excluded (it is exactly the condition <i>x</i><sup>2</sup> + <i>x</i> − 1 = 0). Then<br><i>f</i> = <frac><num><i>t</i> + 1</num><den><i>t</i> − 1</den></frac> = 1 + <frac><num>2</num><den><i>t</i> − 1</den></frac>.<br>• For <i>t</i> ∈ [−<frac><num>1</num><den>4</den></frac>, 1): <i>t</i> − 1 ∈ [−<frac><num>5</num><den>4</den></frac>, 0), so <frac><num>2</num><den><i>t</i> − 1</den></frac> ∈ (−∞, −<frac><num>8</num><den>5</den></frac>], giving <i>f</i> ∈ (−∞, −<frac><num>3</num><den>5</den></frac>].<br>• For <i>t</i> ∈ (1, ∞): <i>t</i> − 1 ∈ (0, ∞), so <frac><num>2</num><den><i>t</i> − 1</den></frac> ∈ (0, ∞), giving <i>f</i> ∈ (1, ∞).',
          'The union is (−∞, −<frac><num>3</num><den>5</den></frac>] ∪ (1, ∞): the same answer, reached without a discriminant. When an Advanced-level range answer matters, running the second method is cheap insurance. ■',
        ],
        ans: 'Range(<i>f</i>) = (−∞, −<frac><num>3</num><den>5</den></frac>] ∪ (1, ∞)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Is <i>R</i> = {(1, 1), (2, 1), (3, 1)} a function from {1, 2, 3} to {1, 2}? State its domain and range.',
            a: 'Yes (each input has exactly one image: a constant assignment); domain = {1, 2, 3}, range = {1}.',
          },
          {
            q: '[CBSE] For <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> with domain {−2, −1, 0, 1, 2}, write <i>f</i> in roster form and find its range.',
            a: '<i>f</i> = {(−2, 4), (−1, 1), (0, 0), (1, 1), (2, 4)}; range = {0, 1, 4}.',
          },
          {
            q: '[JEE Main] How many functions can be defined from a set of 4 elements to a set of 3 elements?',
            a: '3<sup>4</sup> = 81.',
          },
          {
            q: '[JEE Main] Find the natural domain of <i>f</i>(<i>x</i>) = <frac><num>1</num><den>√(9 − <i>x</i><sup>2</sup>)</den></frac>.',
            a: 'Need 9 − <i>x</i><sup>2</sup> > 0 (strict, since it’s under a root and in a denominator) ⇒ <i>x</i> ∈ (−3, 3).',
          },
          {
            q: '[JEE Advanced] Let <i>f</i>(<i>x</i>) = <i>x</i> + 1 and <i>g</i>(<i>x</i>) = 2<i>x</i> − 3, both on ℝ. Find (<frac><num><i>f</i></num><den><i>g</i></den></frac>)(<i>x</i>) and its domain.',
            a: '<frac><num><i>x</i> + 1</num><den>2<i>x</i> − 3</den></frac>, domain = ℝ ∖ {<frac><num>3</num><den>2</den></frac>}.',
          },
          {
            q: '[CBSE] For the greatest-integer function <i>f</i>(<i>x</i>) = [<i>x</i>], evaluate <i>f</i>(−1.5), <i>f</i>(2), and <i>f</i>(3.9), and state the range of <i>f</i>.',
            a: '[−1.5] = −2 (greatest integer <b>not exceeding</b> −1.5), [2] = 2, [3.9] = 3; range = ℤ.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which of the following relations is a function from <i>A</i> = {1, 2, 3} to <i>B</i> = {<i>a</i>, <i>b</i>}?',
        opts: [
          { label: '{(1, <i>a</i>), (2, <i>b</i>), (3, <i>a</i>)}', nudge: null },
          {
            label: '{(1, <i>a</i>), (1, <i>b</i>), (2, <i>a</i>), (3, <i>b</i>)}',
            nudge: '<b>(b)</b> input 1 maps to both <i>a</i> and <i>b</i>: violates single-valuedness (one-to-many).',
          },
          { label: '{(1, <i>a</i>), (2, <i>b</i>)}', nudge: '<b>(c)</b> input 3 has no image: violates totality.' },
          {
            label: '{(1, <i>a</i>), (2, <i>b</i>), (3, <i>a</i>), (3, <i>b</i>)}',
            nudge: '<b>(d)</b> input 3 maps to both <i>a</i> and <i>b</i>: one-to-many again.',
          },
        ],
        correct: 0,
        solution: 'Every element of <i>A</i> has exactly one image. (Inputs 1 and 3 share image <i>a</i>: allowed.) The trap is treating “every output appears” as the requirement; the requirement is on inputs.',
      },
      {
        t: 'mcq',
        q: 'The natural domain of <i>f</i>(<i>x</i>) = √(<i>x</i> − 4) is',
        opts: [
          { label: 'ℝ', nudge: '<b>(a)</b> ignores the radical constraint entirely.' },
          {
            label: '(4, ∞)',
            nudge: '<b>(b)</b> wrongly excludes <i>x</i> = 4: a strict-vs-non-strict slip; square roots allow the radicand to be 0.',
          },
          { label: '[4, ∞)', nudge: null },
          { label: '(−∞, 4]', nudge: '<b>(d)</b> solves the inequality the wrong way (<i>x</i> ≤ 4).' },
        ],
        correct: 2,
        solution: 'Need <i>x</i> − 4 ≥ 0 ⇒ <i>x</i> ≥ 4; equality is allowed since √0 = 0 is defined.',
      },
      {
        t: 'mcq',
        q: 'The number of functions from a set with 2 elements to a set with 5 elements is',
        opts: [
          { label: '7', nudge: '<b>(a)</b> 7 = 2 + 5, an addition slip.' },
          { label: '10', nudge: '<b>(b)</b> 10 = 2 × 5, the pair count.' },
          { label: '25', nudge: null },
          {
            label: '32',
            nudge: '<b>(d)</b> 32 = 2<sup>5</sup>: base and exponent swapped (would count functions the other way, 5 → 2 set).',
          },
        ],
        correct: 2,
        solution: 'Functions = <i>q</i><sup><i>p</i></sup> = 5<sup>2</sup> = 25.',
      },
      {
        t: 'mcq',
        q: 'The range of the function <i>f</i>(<i>x</i>) = |<i>x</i>|, <i>x</i> ∈ ℝ, is',
        opts: [
          { label: 'ℝ', nudge: '<b>(a)</b> forgets that |<i>x</i>| never returns a negative.' },
          { label: '(0, ∞)', nudge: '<b>(b)</b> wrongly excludes 0 (but |0| = 0 is achieved).' },
          { label: '[0, ∞)', nudge: null },
          {
            label: '{−1, 0, 1}',
            nudge: '<b>(d)</b> is the range of the <b>signum</b> function: a classic mix-up between modulus and signum.',
          },
        ],
        correct: 2,
        solution: '|<i>x</i>| ≥ 0 for all real <i>x</i>, and every non-negative value is attained (e.g. |0| = 0, |3| = 3).',
      },
      {
        t: 'mcq',
        q: 'For the greatest-integer function <i>f</i>(<i>x</i>) = [<i>x</i>], which statement is correct?',
        opts: [
          {
            label: '[2.3] = 3',
            nudge: '<b>(a)</b> [2.3] = 2, not 3: students round up; the function rounds down (towards −∞).',
          },
          {
            label: '[−2.3] = −2',
            nudge: '<b>(b)</b> −2 > −2.3, so −2 is too big; the classic negative-number trap (thinking [−2.3] = −2 by “dropping the decimal”).',
          },
          { label: '[−2.3] = −3', nudge: null },
          { label: 'the range of [<i>x</i>] is ℝ', nudge: '<b>(d)</b> the range is ℤ (only integer outputs), not all of ℝ.' },
        ],
        correct: 2,
        solution: '[<i>x</i>] is the greatest integer <b>not exceeding</b> <i>x</i>; the integers ≤ −2.3 are …, −4, −3, and the greatest of them is −3.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Checking the wrong side for “function.”</b> The rule constrains inputs (each domain element → one image), <b>not</b> outputs. Many inputs sharing an output is fine; one input with two outputs is fatal. Don’t reject a function just because some codomain element is unused or repeated.',
          '<b><i>q</i><sup><i>p</i></sup> vs 2<sup><i>pq</i></sup>, and base/exponent swap.</b> Relations = 2<sup><i>pq</i></sup>; functions = <i>q</i><sup><i>p</i></sup> with <b>outputs as base, inputs as exponent</b>. Swapping them (<i>p</i><sup><i>q</i></sup>) is the most-tested distractor (the book’s estimate from past papers, not official figures).',
          '<b>Strict vs non-strict in domains.</b> Square roots allow the radicand = 0 (closed bracket); denominators forbid = 0 (open). When a radical sits in a denominator (e.g. <frac><num>1</num><den>√·</den></frac>), the inside must be > 0, strictly.',
          '<b>Forgetting to exclude zeros of <i>g</i> in <frac><num><i>f</i></num><den><i>g</i></den></frac>.</b> Dom(<frac><num><i>f</i></num><den><i>g</i></den></frac>) is the intersection of domains minus the zeros of the denominator function. Endpoints that survive in <i>f</i> + <i>g</i> often vanish in <frac><num><i>f</i></num><den><i>g</i></den></frac>.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed).</b> For domains, scan the formula for exactly two flags, “is anything under an even root?” (set ≥ 0, or > 0 if also in a denominator) and “is anything in a denominator?” (set ≠ 0), then intersect. For counting, lock the chant “outputs to the power of inputs” (<i>q</i><sup><i>p</i></sup>) so you never swap. And remember the signum/modulus range pair: {−1, 0, 1} vs [0, ∞); examiners swap these constantly (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Definition',
            note: '<i>f</i> : <i>A</i> → <i>B</i> is a relation where every <i>a</i> ∈ <i>A</i> has <b>exactly one</b> image. (Every input used; single-valued.) Every function is a relation; not conversely.',
          },
          {
            f: '<b>Domain</b> = <i>A</i> (all of it); <b>Codomain</b> = <i>B</i>; <b>Range</b> = {<i>f</i>(<i>x</i>)} ⊆ <i>B</i>. Vertical line test for graphs.',
            note: '',
          },
          {
            f: 'Count',
            note: 'functions from <i>A</i> to <i>B</i> = <i>q</i><sup><i>p</i></sup> = (<i>n</i>(<i>B</i>))<sup><i>n</i>(<i>A</i>)</sup>. (Relations were 2<sup><i>pq</i></sup>.)',
          },
          {
            f: 'Standard ranges',
            note: 'modulus → [0, ∞); signum → {−1, 0, 1}; constant → {<i>c</i>}; greatest integer [<i>x</i>] → ℤ.',
          },
          {
            f: 'Domain rules',
            note: 'denominator ≠ 0; even-root radicand ≥ 0 (or > 0 if under a root in a denominator); <b>intersect</b> all conditions.',
          },
          {
            f: 'Algebra',
            note: 'Dom(<i>f</i> ± <i>g</i>) = Dom(<i>fg</i>) = Dom(<i>f</i>) ∩ Dom(<i>g</i>); Dom(<frac><num><i>f</i></num><den><i>g</i></den></frac>) = that ∖ {<i>g</i> = 0}.',
          },
        ],
        aids: [
          '“Vending machine: one button, one snack” → single-valued.',
          '“Outputs to the power of inputs” → <i>q</i><sup><i>p</i></sup>, never <i>p</i><sup><i>q</i></sup>.',
          '“Root closes, denominator opens” → ≥ 0 vs ≠ 0.',
          '“<frac><num><i>f</i></num><den><i>g</i></den></frac> kicks out <i>g</i> = 0” → don’t forget the extra exclusion.',
        ],
      },
    ],
  },
];
