import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2, Additional Topics F to H, word for word from the Class 11 Mathematics
 * Master Reference (October 2026 edition): "Chapter 2: Relations and Functions —
 * Additional Topics" (pp. 153–176), its first three addenda. Its opening text and
 * table (p. 153, under the heading, which is not copied) are set at the head of
 * Additional topic F's Introduction, with "Subtopic 0N", "the Supplement" and
 * "Addendum X" named as the app names them. Then F The vertical line test, stated
 * properly (pp. 154–157; its answers end at the top of p. 157), G Composition of
 * functions and the domain of a composite (pp. 157–160; its answers end at the top
 * of p. 160) and H Even and odd functions, and the work they save (pp. 160–164; its
 * answers end on p. 164, where Addendum I begins: another file).
 *
 * The book keeps its letters (decision 9): Procedures F, G, H and Worked Examples
 * 8 to 13 continue the chapter's lettering and numbering. Each addendum's parts
 * follow its own run-in headings: the opening "Extends …" line is the
 * Introduction, then Method, Worked examples, Practice (H also has "Why any of this
 * saves work: the four payoffs" as a part of its own). Each prints its answers in
 * one block after its practice questions; each is set as that question's answer.
 * Each addendum's own figure ("Figure 1", "Figure 2", "Figure 3") is unnumbered in
 * the chapter's scheme: m11-02-F-d1 (p. 155), m11-02-G-d1 (p. 158) and
 * m11-02-H-d1 (p. 162), each shown where the book prints it. Every fraction is
 * stacked (<frac>); one inside a power (x^(1/3)) keeps its slash. A function
 * defined in clauses (a brace in the book) is written one clause per line.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic F · pp. 153–157 ─────────────────────────
  {
    n: 'F',
    title: 'The vertical line test, stated properly',
    extra: true,
    kalam: 'A relation can have enormous gaps and still be a perfectly good function on what is left.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topics 01–04 (Topic 03 with its Procedure E and Examples 6–7) cover the whole NCERT syllabus for this chapter: Cartesian products, relations and their counts, the definition of a function, the standard function zoo, natural domains, the algebra of real functions, the range of a real function, and the reflexive/symmetric/transitive machinery.',
      },
      {
        t: 'p',
        html: 'What remains is not syllabus: it is the toolkit layer that JEE builds on top of this chapter and never re-teaches. Six items, all of them assumed knowledge by the time Limits, Continuity and Definite Integrals arrive:',
      },
      {
        t: 'table',
        title: null,
        head: ['Additional topic', 'Topic', 'Read after'],
        rows: [
          ['Additional topic F', 'The vertical line test, stated so it survives a follow-up question', 'Topic 03, Procedure A'],
          ['Additional topic G', 'Composition of functions and the domain of a composite', 'Topic 03, Procedure C'],
          ['Additional topic H', 'Even and odd functions, and the work they save', 'Topic 03, Procedure E'],
          ['Additional topic I', 'Periodicity of algebraic (non-trigonometric) functions', 'Additional topic H'],
          ['Additional topic J', 'Graph transformations of the standard function library', 'Topic 03, Key definitions, formulas and notation'],
          ['Additional topic K', 'Functional equations solvable at Class-11 level', 'Additional topic H'],
        ],
      },
      {
        t: 'p',
        html: 'Procedure lettering continues from Procedure E of Topic 03.',
      },
      {
        t: 'p',
        html: '<b>Deliberately not covered here:</b> one-one, onto and bijective functions, and the inverse function. Topic 03 defers those, and they belong with the Class 12 Chapter 1 treatment where CBSE actually examines them. Composition is included despite the same deferral because JEE examines domains of composites alongside this chapter and because Additional topics H, I and K all lean on it.',
      },
      {
        t: 'p',
        html: 'Extends Topic 03’s Concept intuition part and its Key procedures and logical framework part, Procedure A step 3.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'The chapter gives you the test as a picture: “if every vertical line meets the graph at most once, it is a function.” That sentence is true but it hides two separate conditions, and an examiner who asks “at most once, or exactly once?” will collect the mark. Here is the version that answers back.',
      },
      {
        t: 'p',
        html: '<b>Procedure F: The vertical line test.</b> Let <i>S</i> ⊆ ℝ × ℝ be any relation on ℝ: a curve, a roster of pairs, or the solution set of an equation in <i>x</i> and <i>y</i>. For a real number <i>a</i>, write<br><i>V</i><sub><i>a</i></sub> = {(<i>a</i>, <i>y</i>) ∶ <i>y</i> ∈ ℝ}, <i>m</i>(<i>a</i>) = <i>n</i>(<i>S</i> ∩ <i>V</i><sub><i>a</i></sub>),<br>so <i>V</i><sub><i>a</i></sub> is the vertical line <i>x</i> = <i>a</i> and <i>m</i>(<i>a</i>) counts how many points of <i>S</i> lie on it. Three verdicts, and only three:',
      },
      {
        t: 'p',
        html: '1. <b>If <i>m</i>(<i>a</i>) ≤ 1 for every real <i>a</i>,</b> then <i>S</i> is a function. Its domain is <i>D</i> = {<i>a</i> ∈ ℝ ∶ <i>m</i>(<i>a</i>) = 1}, the shadow of <i>S</i> on the <i>x</i>-axis, and its rule is “<i>f</i>(<i>a</i>) = the one <i>y</i> on that line”.<br>2. <b>If a set <i>A</i> is declared in advance and <i>m</i>(<i>a</i>) = 1 for every <i>a</i> ∈ <i>A</i>,</b> then <i>S</i> is a function on <i>A</i>. This is the two-promise definition of Topic 03 restated: <i>m</i>(<i>a</i>) ≥ 1 is totality, <i>m</i>(<i>a</i>) ≤ 1 is single-valuedness.<br>3. <b>If <i>m</i>(<i>a</i>) ≥ 2 for even one <i>a</i>,</b> then <i>S</i> is not a function of <i>x</i>. One witness settles it; you never have to check the other lines.',
      },
      {
        t: 'p',
        html: 'The point most often missed: <i>m</i>(<i>a</i>) = 0 <b>is not a fault.</b> It says only that <i>a</i> is outside the domain. A relation can have enormous gaps and still be a perfectly good function on what is left. Only <i>m</i>(<i>a</i>) ≥ 2, one input carrying two outputs, is fatal.',
      },
      {
        t: 'p',
        html: '<b>How to run the test with no picture.</b> Hold <i>x</i> fixed at a general value, solve the defining equation for <i>y</i>, and count real solutions. An even power of <i>y</i>, a |<i>y</i>|, or a ± is the usual source of a second solution.',
      },
      {
        t: 'p',
        html: '<b>How to run it on a piecewise definition.</b> A rule given in clauses is a function precisely when the clauses agree wherever their intervals overlap. Where two clauses claim the same <i>x</i> and disagree, that single <i>x</i> has <i>m</i>(<i>x</i>) = 2 and the whole thing collapses.',
      },
      { t: 'fig', id: 'm11-02-F-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'The relation <i>f</i> is defined by<br><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup>, 0 ≤ <i>x</i> ≤ 3<br><i>f</i>(<i>x</i>) = 3<i>x</i>, 3 ≤ <i>x</i> ≤ 10<br>and the relation <i>g</i> is defined by<br><i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup>, 0 ≤ <i>x</i> ≤ 2<br><i>g</i>(<i>x</i>) = 3<i>x</i>, 2 ≤ <i>x</i> ≤ 10.<br>Show that <i>f</i> is a function and <i>g</i> is not.',
        steps: [
          'Both definitions have overlapping clauses (the two intervals share an endpoint), so run the overlap check, which is exactly the vertical line test at that shared point.',
          '<b>For <i>f</i>:</b> the clauses overlap only at <i>x</i> = 3. Clause one gives 3<sup>2</sup> = 9; clause two gives 3 · 3 = 9. They agree, so <i>m</i>(3) = 1. Everywhere else on [0, 10] exactly one clause applies and each clause is single-valued, so <i>m</i>(<i>a</i>) = 1 for every <i>a</i> ∈ [0, 10]. By verdict 2, <i>f</i> is a function on [0, 10].',
          '<b>For <i>g</i>:</b> the clauses overlap at <i>x</i> = 2. Clause one gives 2<sup>2</sup> = 4; clause two gives 3 · 2 = 6. Both (2, 4) and (2, 6) belong to <i>g</i>, so <i>m</i>(2) = 2. By verdict 3, <i>g</i> is not a function.',
          'Note how little work verdict 3 costs: one point, two numbers, done. You never look at the other ten units of the interval.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'For each of the following, decide whether it defines <i>y</i> as a function of <i>x</i>. When it does, give the domain and the range.<br>(a) <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 25<br>(b) <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 25 with <i>y</i> ≥ 0<br>(c) <i>x</i> = <i>y</i><sup>3</sup><br>(d) 2<i>x</i> + 3|<i>y</i>| = 6<br>(e) <i>x</i><sup>2</sup> = 4<i>y</i><br>(f) |<i>x</i>| + |<i>y</i>| = 1',
        steps: [
          'In each case fix <i>x</i> and count the real <i>y</i>.',
          '<b>(a)</b> <i>y</i><sup>2</sup> = 25 − <i>x</i><sup>2</sup>. For −5 < <i>x</i> < 5 the right side is positive, so there are two real solutions <i>y</i> = ±√(25 − <i>x</i><sup>2</sup>). Taking <i>x</i> = 3 as the witness, <i>y</i> = 4 and <i>y</i> = −4, so <i>m</i>(3) = 2. <b>Not a function.</b>',
          '<b>(b)</b> Now <i>y</i> = +√(25 − <i>x</i><sup>2</sup>) only, and the negative root is barred by <i>y</i> ≥ 0. For |<i>x</i>| ≤ 5 there is exactly one <i>y</i>; for |<i>x</i>| > 5 there is none. <b>A function</b>, domain [−5, 5], range [0, 5]. This is the whole lesson of the additional topic in one line: the same curve becomes a function the moment you cut it so that no vertical line is met twice.',
          '<b>(c)</b> <i>y</i><sup>3</sup> = <i>x</i> has exactly one real root for every real <i>x</i>, namely <i>y</i> = <i>x</i><sup>1/3</sup> (the other two cube roots are non-real). <b>A function</b>, domain ℝ, range ℝ. Contrast (a): a lone odd power of <i>y</i>, as in <i>x</i> = <i>y</i><sup>3</sup>, never creates a second real solution (<i>x</i> = <i>y</i><sup>3</sup> − <i>y</i> can: <i>x</i> = 0 gives <i>y</i> = 0, ±1).',
          '<b>(d)</b> 3|<i>y</i>| = 6 − 2<i>x</i>, so |<i>y</i>| = <frac><num>6 − 2<i>x</i></num><den>3</den></frac>. For <i>x</i> < 3 the right side is positive and <i>y</i> = ±<frac><num>6 − 2<i>x</i></num><den>3</den></frac> gives two values; at <i>x</i> = 0 these are <i>y</i> = 2 and <i>y</i> = −2. <b>Not a function.</b>',
          '<b>(e)</b> <i>y</i> = <frac><num><i>x</i><sup>2</sup></num><den>4</den></frac>, one value for every real <i>x</i>. <b>A function</b>, domain ℝ, range [0, ∞). The square is on <i>x</i>, not on <i>y</i>: it restricts the range, not the count.',
          '<b>(f)</b> |<i>y</i>| = 1 − |<i>x</i>|. For |<i>x</i>| < 1 this gives two values of <i>y</i>; at <i>x</i> = 0, <i>y</i> = ±1. <b>Not a function.</b>',
          'The pattern to carry away: an even power of <i>y</i>, a |<i>y</i>|, or a ± attached to <i>y</i> is what breaks the test. Anything done to <i>x</i> alone (squares, moduli, floors) only reshapes the domain and range.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Does <i>y</i><sup>2</sup> = 4<i>x</i> define <i>y</i> as a function of <i>x</i>?',
            a: 'No. At <i>x</i> = 1, <i>y</i> = ±2.',
          },
          {
            q: 'Does <i>y</i> = |<i>x</i>| − <i>x</i> define a function? Give its range.',
            a: 'Yes. It equals 0 for <i>x</i> ≥ 0 and −2<i>x</i> for <i>x</i> < 0; range [0, ∞).',
          },
          {
            q: 'Does <i>x</i> = <i>y</i><sup>2</sup> + 1 with <i>y</i> ≥ 0 define <i>y</i> as a function of <i>x</i>? Give domain and range.',
            a: 'Yes: <i>y</i> = √(<i>x</i> − 1). Domain [1, ∞), range [0, ∞).',
          },
          {
            q: 'Is<br><i>h</i>(<i>x</i>) = 2<i>x</i> + 1, <i>x</i> ≤ 1<br><i>h</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 2, <i>x</i> ≥ 1<br>a function?',
            a: 'Yes. The clauses overlap only at <i>x</i> = 1, where both give 3.',
          },
          {
            q: 'Is<br><i>p</i>(<i>x</i>) = <i>x</i> + 2, 0 ≤ <i>x</i> ≤ 4<br><i>p</i>(<i>x</i>) = 3<i>x</i> − 5, 4 ≤ <i>x</i> ≤ 9<br>a function?',
            a: 'No. At <i>x</i> = 4 the clauses give 6 and 7.',
          },
          {
            q: 'Is <i>y</i> = sgn(<i>x</i><sup>2</sup> + 1) a function? Give its range.',
            a: 'Yes, and it is the constant function 1, because <i>x</i><sup>2</sup> + 1 > 0 for every real <i>x</i>. Range {1}. (The trap is answering {−1, 0, 1} from memory of the signum range.)',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic G · pp. 157–160 ─────────────────────────
  {
    n: 'G',
    title: 'Composition of functions and the domain of a composite',
    extra: true,
    kalam: 'The inner function acts first, even though it is written second.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 03’s Key procedures and logical framework part; read it after Procedure C.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Topic 03 taught you to combine two functions by arithmetic: <i>f</i> + <i>g</i>, <i>fg</i>, <frac><num><i>f</i></num><den><i>g</i></den></frac>. There is a fifth way to combine them that is not arithmetic at all: feed the output of one into the input of the other.',
      },
      {
        t: 'formula',
        kicker: 'Composite function',
        main: '(<i>g</i> ∘ <i>f</i>)(<i>x</i>) = <i>g</i>(<i>f</i>(<i>x</i>))',
        legend: ['<i>f</i> = the inner function (applied first)', '<i>g</i> = the outer function (applied to <i>f</i>(<i>x</i>))'],
        note: 'Read “<i>g</i> of <i>f</i> of <i>x</i>”, or “<i>g</i> after <i>f</i>”.',
      },
      {
        t: 'p',
        html: 'The inner function acts first, even though it is written second. That reversal is the source of half the errors on the topic.',
      },
      { t: 'p', html: '<b>Definition of the domain: the only formula you need.</b>' },
      {
        t: 'formula',
        kicker: 'Domain of a composite',
        main: 'Dom(<i>g</i> ∘ <i>f</i>) = {<i>x</i> ∈ Dom(<i>f</i>) ∶ <i>f</i>(<i>x</i>) ∈ Dom(<i>g</i>)}',
        legend: ['<i>f</i> = the inner function (applied first)', '<i>g</i> = the outer function (applied to <i>f</i>(<i>x</i>))'],
        note: null,
      },
      {
        t: 'p',
        html: 'Every symbol earns its place. <i>x</i> must be legal for <i>f</i>, because <i>f</i> runs first; and the number <i>f</i>(<i>x</i>) that comes out must be legal for <i>g</i>, because <i>g</i> runs on it.',
      },
      {
        t: 'proc',
        title: 'Procedure G: Composite and its domain',
        steps: [
          '<b>Write down Dom(<i>f</i>) and Dom(<i>g</i>) separately</b> using Procedure B (denominators non-zero, even radicands non-negative).',
          '<b>Impose the membership condition</b> <i>f</i>(<i>x</i>) ∈ Dom(<i>g</i>) and solve it as an inequality or exclusion in <i>x</i>.',
          '<b>Intersect</b> with Dom(<i>f</i>). That intersection is the answer.',
          '<b>Only now simplify the formula.</b> (Why this order: simplification can heal a defect that the definition says must stay. (√<i>x</i>)<sup>2</sup> simplifies to <i>x</i>, whose natural domain is all of ℝ, but <i>x</i> had to survive √· first. Reading the domain off the simplified formula is the single most-punished error in this topic (the book’s estimate from past papers, not official figures).)',
        ],
      },
      {
        t: 'p',
        html: '<b>Three properties.</b><br>• <b>Not commutative:</b> <i>g</i> ∘ <i>f</i> ≠ <i>f</i> ∘ <i>g</i> in general: different formulas, and often different domains too.<br>• <b>Associative:</b> <i>f</i> ∘ (<i>g</i> ∘ <i>h</i>) = (<i>f</i> ∘ <i>g</i>) ∘ <i>h</i> whenever both sides are defined, so <i>f</i> ∘ <i>g</i> ∘ <i>h</i> is unambiguous.<br>• <b>Identity:</b> with <i>I</i>(<i>x</i>) = <i>x</i> on ℝ, <i>f</i> ∘ <i>I</i> = <i>I</i> ∘ <i>f</i> = <i>f</i> on Dom(<i>f</i>).',
      },
      { t: 'fig', id: 'm11-02-G-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: 'Let <i>f</i>(<i>x</i>) = √<i>x</i> and <i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup>. Find <i>g</i> ∘ <i>f</i> and <i>f</i> ∘ <i>g</i>, each with its exact domain. Are the two composites equal?',
        steps: [
          '<b>The trap.</b> The reflex answer is “(√<i>x</i>)<sup>2</sup> = <i>x</i> and √(<i>x</i><sup>2</sup>) = <i>x</i>, so both composites are the identity and <i>g</i> ∘ <i>f</i> = <i>f</i> ∘ <i>g</i>.” Both halves of that sentence are wrong, for two different reasons, and the second one is wrong even as a formula.',
          'Dom(<i>f</i>) = [0, ∞) and Dom(<i>g</i>) = ℝ.',
          '<b><i>g</i> ∘ <i>f</i>.</b> Domain first: <i>x</i> ∈ [0, ∞), and <i>f</i>(<i>x</i>) = √<i>x</i> must lie in Dom(<i>g</i>) = ℝ, which costs nothing. So Dom(<i>g</i> ∘ <i>f</i>) = [0, ∞). Formula: (<i>g</i> ∘ <i>f</i>)(<i>x</i>) = (√<i>x</i>)<sup>2</sup> = <i>x</i>. So <i>g</i> ∘ <i>f</i> is the identity <b>restricted to</b> [0, ∞), not the identity on ℝ.',
          '<b><i>f</i> ∘ <i>g</i>.</b> Domain first: <i>x</i> ∈ ℝ, and <i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup> must lie in Dom(<i>f</i>) = [0, ∞), which is automatic since squares are non-negative. So Dom(<i>f</i> ∘ <i>g</i>) = ℝ. Formula: (<i>f</i> ∘ <i>g</i>)(<i>x</i>) = √(<i>x</i><sup>2</sup>) = |<i>x</i>|, <b>not</b> <i>x</i>: the square root returns the non-negative root, as Topic 03 warned.',
          '<b>Are they equal?</b> No, on both counts. Equality of functions (Topic 03’s Key definitions, formulas and notation part) demands the same domain and the same values, and here the domains differ ([0, ∞) against ℝ) and the values differ too: at <i>x</i> = −4, (<i>f</i> ∘ <i>g</i>)(−4) = 4 while (<i>g</i> ∘ <i>f</i>)(−4) is not even defined.',
        ],
        ans: '(<i>g</i> ∘ <i>f</i>)(<i>x</i>) = <i>x</i> on [0, ∞); (<i>f</i> ∘ <i>g</i>)(<i>x</i>) = |<i>x</i>| on ℝ; they agree on [0, ∞) and nowhere else.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Let <i>f</i>(<i>x</i>) = <frac><num>1</num><den>1 − <i>x</i></den></frac>. Write <i>f</i><sup>2</sup> = <i>f</i> ∘ <i>f</i> and <i>f</i><sup>3</sup> = <i>f</i> ∘ <i>f</i> ∘ <i>f</i>. Find <i>f</i><sup>3</sup> and its domain, and hence evaluate <i>f</i><sup>2026</sup>(2).',
        steps: [
          '<b>Step 0: domain of <i>f</i>.</b> Dom(<i>f</i>) = ℝ ∖ {1}.',
          '<b>Step 1: <i>f</i><sup>2</sup>.</b> Domain: need <i>x</i> ≠ 1, and need <i>f</i>(<i>x</i>) ≠ 1. Now <frac><num>1</num><den>1 − <i>x</i></den></frac> = 1 forces 1 − <i>x</i> = 1, i.e. <i>x</i> = 0. So Dom(<i>f</i><sup>2</sup>) = ℝ ∖ {0, 1}. Formula:<br><i>f</i><sup>2</sup>(<i>x</i>) = <frac><num>1</num><den>1 − <frac><num>1</num><den>1 − <i>x</i></den></frac></den></frac> = <frac><num>1</num><den><frac><num>(1 − <i>x</i>) − 1</num><den>1 − <i>x</i></den></frac></den></frac> = <frac><num>1 − <i>x</i></num><den>−<i>x</i></den></frac> = <frac><num><i>x</i> − 1</num><den><i>x</i></den></frac>.',
          '<b>Step 2: <i>f</i><sup>3</sup>.</b> Domain: need <i>x</i> ∈ Dom(<i>f</i><sup>2</sup>) and <i>f</i><sup>2</sup>(<i>x</i>) ≠ 1. But <frac><num><i>x</i> − 1</num><den><i>x</i></den></frac> = 1 forces −1 = 0, which never happens, so nothing further is removed and Dom(<i>f</i><sup>3</sup>) = ℝ ∖ {0, 1}. Formula:<br><i>f</i><sup>3</sup>(<i>x</i>) = <frac><num>1</num><den>1 − <frac><num><i>x</i> − 1</num><den><i>x</i></den></frac></den></frac> = <frac><num>1</num><den><frac><num><i>x</i> − (<i>x</i> − 1)</num><den><i>x</i></den></frac></den></frac> = <frac><num>1</num><den><frac><num>1</num><den><i>x</i></den></frac></den></frac> = <i>x</i>.',
          'So <i>f</i><sup>3</sup> <b>is the identity on</b> ℝ ∖ {0, 1}: iterating <i>f</i> cycles every legal input with period 3.',
          '<b>Step 3: the high power.</b> Since <i>f</i><sup>3</sup> = <i>I</i> on ℝ ∖ {0, 1}, we get <i>f</i><sup>3<i>k</i></sup> = <i>I</i>, <i>f</i><sup>3<i>k</i>+1</sup> = <i>f</i> and <i>f</i><sup>3<i>k</i>+2</sup> = <i>f</i><sup>2</sup> there. Now 2026 = 3 × 675 + 1, so <i>f</i><sup>2026</sup> = <i>f</i> on ℝ ∖ {0, 1}, and<br><i>f</i><sup>2026</sup>(2) = <i>f</i>(2) = <frac><num>1</num><den>1 − 2</den></frac> = −1.',
          '<b>Check by walking the cycle:</b> 2 → −1 → <frac><num>1</num><den>2</den></frac> → 2, a 3-cycle, confirming both <i>f</i><sup>3</sup> = <i>I</i> and the value.',
          'The structural lesson is worth more than the number: the domain shrank once, from ℝ ∖ {1} to ℝ ∖ {0, 1}, and then stopped. Composites lose points only while new inputs are still being blocked; once the cycle closes, the domain is stable.',
        ],
        ans: '<i>f</i><sup>3</sup>(<i>x</i>) = <i>x</i> on ℝ ∖ {0, 1}; <i>f</i><sup>2026</sup>(2) = −1.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '<i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 1, <i>g</i>(<i>x</i>) = √<i>x</i>. Find <i>g</i> ∘ <i>f</i> and <i>f</i> ∘ <i>g</i> with exact domains.',
            a: '(<i>g</i> ∘ <i>f</i>)(<i>x</i>) = √(<i>x</i><sup>2</sup> − 1), domain (−∞, −1] ∪ [1, ∞); (<i>f</i> ∘ <i>g</i>)(<i>x</i>) = <i>x</i> − 1, domain [0, ∞), <b>not</b> ℝ.',
          },
          {
            q: '<i>f</i>(<i>x</i>) = <frac><num>1</num><den><i>x</i></den></frac>, <i>g</i>(<i>x</i>) = <i>x</i> + 3. Find <i>g</i> ∘ <i>f</i> and <i>f</i> ∘ <i>g</i> with exact domains.',
            a: '(<i>g</i> ∘ <i>f</i>)(<i>x</i>) = <frac><num>1</num><den><i>x</i></den></frac> + 3 = <frac><num>1 + 3<i>x</i></num><den><i>x</i></den></frac>, domain ℝ ∖ {0}; (<i>f</i> ∘ <i>g</i>)(<i>x</i>) = <frac><num>1</num><den><i>x</i> + 3</den></frac>, domain ℝ ∖ {−3}.',
          },
          {
            q: '<i>f</i>(<i>x</i>) = 2<i>x</i> + 1, <i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup>. Solve (<i>g</i> ∘ <i>f</i>)(<i>x</i>) = (<i>f</i> ∘ <i>g</i>)(<i>x</i>).',
            a: '(2<i>x</i> + 1)<sup>2</sup> = 2<i>x</i><sup>2</sup> + 1 ⇒ 2<i>x</i><sup>2</sup> + 4<i>x</i> = 0 ⇒ <i>x</i> = 0 or <i>x</i> = −2.',
          },
          {
            q: '<i>f</i>(<i>x</i>) = <frac><num><i>x</i></num><den><i>x</i> − 1</den></frac>. Find <i>f</i> ∘ <i>f</i> and its domain.',
            a: '(<i>f</i> ∘ <i>f</i>)(<i>x</i>) = <i>x</i>, domain ℝ ∖ {1}. (Nothing extra is removed: <frac><num><i>x</i></num><den><i>x</i> − 1</den></frac> = 1 has no solution.)',
          },
          {
            q: '<i>f</i>(<i>x</i>) = √(<i>x</i> − 1), <i>g</i>(<i>x</i>) = <frac><num>1</num><den><i>x</i> − 3</den></frac>. Find Dom(<i>g</i> ∘ <i>f</i>) and Dom(<i>f</i> ∘ <i>g</i>).',
            a: 'Dom(<i>g</i> ∘ <i>f</i>) = [1, ∞) ∖ {10} (need <i>x</i> ≥ 1 and √(<i>x</i> − 1) ≠ 3); Dom(<i>f</i> ∘ <i>g</i>) = (3, 4] (need <i>x</i> ≠ 3 and <frac><num>1</num><den><i>x</i> − 3</den></frac> ≥ 1).',
          },
          {
            q: '<i>f</i>(<i>x</i>) = [<i>x</i>] (greatest integer) and <i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup>. Evaluate (<i>g</i> ∘ <i>f</i>)(2.7) and (<i>f</i> ∘ <i>g</i>)(2.7).',
            a: '(<i>g</i> ∘ <i>f</i>)(2.7) = [2.7]<sup>2</sup> = 2<sup>2</sup> = 4; (<i>f</i> ∘ <i>g</i>)(2.7) = [7.29] = 7. A clean numerical demonstration that order matters.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic H · pp. 160–164 ─────────────────────────
  {
    n: 'H',
    title: 'Even and odd functions, and the work they save',
    extra: true,
    kalam: 'The classification costs three lines and repays them many times.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 03’s Key definitions, formulas and notation part, and pairs with Procedure E of Topic 03.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'A great many functions on the JEE syllabus are built symmetrically about the origin, and spotting that symmetry lets you throw away half of every domain, range and sketching problem. The classification costs three lines and repays them many times.',
      },
      {
        t: 'p',
        html: '<b>Precondition: a symmetric domain.</b> Before you compute anything, check that <i>x</i> ∈ <i>D</i> ⇒ −<i>x</i> ∈ <i>D</i>. If the domain is not symmetric about 0, the function is <b>neither even nor odd</b>, whatever the formula looks like. <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> on [1, 3] is neither.',
      },
      { t: 'p', html: '<b>Definitions.</b> For <i>f</i> with a domain <i>D</i> symmetric about 0:' },
      {
        t: 'formula',
        kicker: 'Even and odd functions',
        main: '<i>f</i> is even ⟺ <i>f</i>(−<i>x</i>) = <i>f</i>(<i>x</i>) for all <i>x</i> ∈ <i>D</i><br><i>f</i> is odd ⟺ <i>f</i>(−<i>x</i>) = −<i>f</i>(<i>x</i>) for all <i>x</i> ∈ <i>D</i>',
        legend: ['<i>f</i> = a function with domain <i>D</i>', '<i>D</i> = a domain symmetric about 0'],
        note: null,
      },
      {
        t: 'p',
        html: 'Most functions are neither. “Neither” is a legitimate and common answer.',
      },
      {
        t: 'p',
        html: '<b>Immediate consequences.</b><br>• <b>Graph symmetry.</b> <i>f</i> even ⟺ the graph is unchanged by reflection in the <i>y</i>-axis. <i>f</i> odd ⟺ the graph is unchanged by a half-turn (180° rotation) about the origin.<br>• <b>If <i>f</i> is odd and 0 ∈ <i>D</i>, then <i>f</i>(0) = 0.</b> Put <i>x</i> = 0: <i>f</i>(0) = −<i>f</i>(0), so 2<i>f</i>(0) = 0. An odd function defined at the origin must pass through it.<br>• <b>The only function that is both</b> even and odd is the zero function on a symmetric domain: <i>f</i>(<i>x</i>) = <i>f</i>(−<i>x</i>) = −<i>f</i>(<i>x</i>) forces <i>f</i>(<i>x</i>) = 0.<br>• <i>f</i>(|<i>x</i>|) <b>is always even</b>, whatever <i>f</i> is, because |−<i>x</i>| = |<i>x</i>|.',
      },
      {
        t: 'proc',
        title: 'Procedure H: The three-line test',
        steps: [
          'Check the domain is symmetric about 0. If not, stop: neither.',
          'Compute <i>f</i>(−<i>x</i>) and simplify.',
          'Compare. Equal to <i>f</i>(<i>x</i>): even. Equal to −<i>f</i>(<i>x</i>): odd. Neither: produce one value of <i>x</i> at which both comparisons fail, and say so. (Why one witness suffices: both definitions are universally quantified, so a single failing <i>x</i> destroys them.)',
        ],
      },
      {
        t: 'p',
        html: '<b>The algebra of parity.</b> Assume <i>f</i> and <i>g</i> share a symmetric domain.',
      },
      {
        t: 'table',
        title: null,
        head: ['<i>f</i>', '<i>g</i>', '<i>f</i> ± <i>g</i>', '<i>fg</i>', '<frac><num><i>f</i></num><den><i>g</i></den></frac>', '<i>f</i> ∘ <i>g</i>'],
        rows: [
          ['even', 'even', 'even', 'even', 'even', 'even'],
          ['odd', 'odd', 'odd', '<b>even</b>', '<b>even</b>', 'odd'],
          ['even', 'odd', 'neither, in general', 'odd', 'odd', '<b>even</b>'],
          ['odd', 'even', 'neither, in general', 'odd', 'odd', '<b>even</b>'],
        ],
      },
      {
        t: 'p',
        html: 'Two entries deserve staring at. <b>Odd times odd is even</b>: the two sign flips cancel, exactly as (−<i>x</i>)(−<i>x</i>) = <i>x</i><sup>2</sup>. And in a composite <b>look at the inner function first</b>: if the inner function is even, the composite is even no matter what the outer one is; if the inner is odd, the composite copies the parity of the outer.',
      },
      {
        t: 'p',
        html: '<b>The even-odd decomposition.</b> Every <i>f</i> on a symmetric domain splits, in exactly one way, as an even part plus an odd part:',
      },
      {
        t: 'formula',
        kicker: 'Even-odd decomposition',
        main: '<i>f</i>(<i>x</i>) = <i>f</i><sub>e</sub>(<i>x</i>) + <i>f</i><sub>o</sub>(<i>x</i>)<br><i>f</i><sub>e</sub>(<i>x</i>) = <frac><num><i>f</i>(<i>x</i>) + <i>f</i>(−<i>x</i>)</num><den>2</den></frac><br><i>f</i><sub>o</sub>(<i>x</i>) = <frac><num><i>f</i>(<i>x</i>) − <i>f</i>(−<i>x</i>)</num><den>2</den></frac>',
        legend: [
          '<i>f</i> = any function on a domain symmetric about 0',
          '<i>f</i><sub>e</sub> = the even part',
          '<i>f</i><sub>o</sub> = the odd part',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'Add the two fractions and the <i>f</i>(−<i>x</i>) terms cancel, which proves existence; replacing <i>x</i> by −<i>x</i> in each piece confirms the labels.',
      },

      { t: 'part', title: 'Why any of this saves work: the four payoffs' },
      {
        t: 'p',
        html: '1. <b>Sketching.</b> Draw an even function on [0, ∞) only, then reflect in the <i>y</i>-axis. Draw an odd function on [0, ∞) only, then half-turn about the origin. Half the plotting, none of the risk.<br>2. <b>Range of an even function</b> equals its range on the non-negative half of the domain. The negative half contributes nothing new.<br>3. <b>Range of an odd function is symmetric about</b> 0: <i>y</i> is attained ⟺ −<i>y</i> is attained. So compute the range on [0, ∞) and reflect it through 0. This is the biggest single saving in the whole additional topic, and the second solved example below uses it.<br>4. <b>Roots.</b> The solution set of <i>f</i>(<i>x</i>) = 0 is symmetric about 0 for both even and odd <i>f</i>, and an odd <i>f</i> defined at 0 always has <i>x</i> = 0 among its roots.',
      },
      { t: 'fig', id: 'm11-02-H-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE / JEE Main Level',
        q: 'Classify each as even, odd, or neither, with a one-line reason.<br>(a) <i>f</i>(<i>x</i>) = <i>x</i><sup>4</sup> − 3<i>x</i><sup>2</sup> + 1<br>(b) <i>f</i>(<i>x</i>) = <i>x</i>|<i>x</i>|<br>(c) <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> + <i>x</i><sup>2</sup><br>(d) <i>f</i>(<i>x</i>) = √(1 + <i>x</i> + <i>x</i><sup>2</sup>) − √(1 − <i>x</i> + <i>x</i><sup>2</sup>)<br>(e) <i>f</i>(<i>x</i>) = [<i>x</i>] + [−<i>x</i>]<br>(f) <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> on the domain [1, 3]',
        steps: [
          '<b>(a) Even.</b> Only even powers of <i>x</i> appear, so <i>f</i>(−<i>x</i>) = <i>x</i><sup>4</sup> − 3<i>x</i><sup>2</sup> + 1 = <i>f</i>(<i>x</i>). (The constant 1 is 1 · <i>x</i><sup>0</sup>, an even power; constants never break evenness.)',
          '<b>(b) Odd.</b> <i>f</i>(−<i>x</i>) = (−<i>x</i>)|−<i>x</i>| = −<i>x</i>|<i>x</i>| = −<i>f</i>(<i>x</i>). This is the standard “odd times even is odd” entry: <i>x</i> is odd, |<i>x</i>| is even.',
          '<b>(c) Neither.</b> <i>f</i>(−<i>x</i>) = −<i>x</i><sup>3</sup> + <i>x</i><sup>2</sup>. Witness <i>x</i> = 1: <i>f</i>(1) = 2, <i>f</i>(−1) = 0, and 0 is neither 2 nor −2. A sum of an odd term and an even term is the archetypal “neither”.',
          '<b>(d) Odd.</b> First the domain: 1 + <i>x</i> + <i>x</i><sup>2</sup> has discriminant 1 − 4 = −3 < 0 and positive leading coefficient, so it is positive for every real <i>x</i>; the same for 1 − <i>x</i> + <i>x</i><sup>2</sup>. Hence <i>D</i> = ℝ, which is symmetric. Now replacing <i>x</i> by −<i>x</i> swaps the two radicands:<br><i>f</i>(−<i>x</i>) = √(1 − <i>x</i> + <i>x</i><sup>2</sup>) − √(1 + <i>x</i> + <i>x</i><sup>2</sup>) = −<i>f</i>(<i>x</i>).',
          '<b>(e) Even.</b> <i>f</i>(−<i>x</i>) = [−<i>x</i>] + [<i>x</i>] = <i>f</i>(<i>x</i>): the two terms simply trade places. (Worth computing a value or two: <i>f</i>(2.3) = 2 + (−3) = −1 and <i>f</i>(3) = 3 + (−3) = 0. So <i>f</i> is 0 at integers and −1 everywhere else, which is visibly symmetric.) This one catches students who try to argue from “[<i>x</i>] is neither even nor odd”, which is true and irrelevant.',
          '<b>(f) Neither.</b> The domain [1, 3] is not symmetric about 0: 1 ∈ <i>D</i> but −1 ∉ <i>D</i>, so <i>f</i>(−1) does not exist and neither definition can even be tested. The formula being <i>x</i><sup>2</sup> is a red herring.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Find the range of <i>f</i>(<i>x</i>) = √(<i>x</i><sup>2</sup> + <i>x</i> + 1) − √(<i>x</i><sup>2</sup> − <i>x</i> + 1), <i>x</i> ∈ ℝ.',
        steps: [
          'This is a Procedure E range problem that oddness cuts in half.',
          '<b>Step 0: domain.</b> Both discriminants are 1 − 4 = −3 < 0 with positive leading coefficients, so both radicands are positive for every real <i>x</i>. <i>D</i> = ℝ.',
          '<b>Step 1: exploit parity.</b> By the previous solved example, part (d), <i>f</i> is odd. Payoff 3 (in the Why any of this saves work part) therefore applies: <b>the range is symmetric about</b> 0, so it is enough to find the range on [0, ∞) and reflect. That halves the algebra.',
          '<b>Step 2: rationalise.</b> Multiply and divide by the conjugate. With <i>A</i> = √(<i>x</i><sup>2</sup> + <i>x</i> + 1) and <i>B</i> = √(<i>x</i><sup>2</sup> − <i>x</i> + 1) (both positive),<br><i>f</i>(<i>x</i>) = <frac><num><i>A</i><sup>2</sup> − <i>B</i><sup>2</sup></num><den><i>A</i> + <i>B</i></den></frac> = <frac><num>(<i>x</i><sup>2</sup> + <i>x</i> + 1) − (<i>x</i><sup>2</sup> − <i>x</i> + 1)</num><den><i>A</i> + <i>B</i></den></frac> = <frac><num>2<i>x</i></num><den><i>A</i> + <i>B</i></den></frac>.<br>Immediately <i>f</i>(0) = 0 and <i>f</i>(<i>x</i>) > 0 for <i>x</i> > 0.',
          '<b>Step 3: the upper bound.</b> Claim: <i>f</i>(<i>x</i>) < 1 for every <i>x</i> > 0, i.e. <i>A</i> + <i>B</i> > 2<i>x</i>. Since both sides are positive, square:<br>(<i>A</i> + <i>B</i>)<sup>2</sup> = <i>A</i><sup>2</sup> + <i>B</i><sup>2</sup> + 2<i>AB</i> = (2<i>x</i><sup>2</sup> + 2) + 2√((<i>x</i><sup>2</sup> + <i>x</i> + 1)(<i>x</i><sup>2</sup> − <i>x</i> + 1)) = 2<i>x</i><sup>2</sup> + 2 + 2√(<i>x</i><sup>4</sup> + <i>x</i><sup>2</sup> + 1).<br>Now (<i>x</i><sup>4</sup> + <i>x</i><sup>2</sup> + 1) − (<i>x</i><sup>2</sup> − 1)<sup>2</sup> = 3<i>x</i><sup>2</sup> > 0 for <i>x</i> ≠ 0, so √(<i>x</i><sup>4</sup> + <i>x</i><sup>2</sup> + 1) > |<i>x</i><sup>2</sup> − 1| ≥ <i>x</i><sup>2</sup> − 1. Therefore<br>(<i>A</i> + <i>B</i>)<sup>2</sup> > 2<i>x</i><sup>2</sup> + 2 + 2(<i>x</i><sup>2</sup> − 1) = 4<i>x</i><sup>2</sup> = (2<i>x</i>)<sup>2</sup>,<br>giving <i>A</i> + <i>B</i> > 2<i>x</i> and hence 0 ≤ <i>f</i>(<i>x</i>) < 1 on [0, ∞).',
          '<b>Step 4: attainment.</b> <i>f</i> is continuous on [0, ∞) with <i>f</i>(0) = 0, and as <i>x</i> grows <i>A</i> + <i>B</i> approaches 2<i>x</i>, so <i>f</i>(<i>x</i>) climbs towards 1: numerically <i>f</i>(1) = √3 − 1 ≈ 0.7321, <i>f</i>(5) ≈ 0.9852, <i>f</i>(100) ≈ 0.99996. Every value between 0 and 1 is therefore taken somewhere on [0, ∞), while 1 itself is not (Step 3 made the inequality strict). Range on [0, ∞) is [0, 1).',
          '<b>Step 5: reflect.</b> By oddness, the range on (−∞, 0] is (−1, 0]. Hence Range(<i>f</i>) = (−1, 1).',
          'Both brackets are open (an endpoint check in the sense of Step 6 of Procedure E) because <i>f</i>(<i>x</i>) = 1 would need <i>A</i> + <i>B</i> = 2<i>x</i>, which Step 3 forbids.',
          '<b>Cost of not spotting the parity:</b> you would have to run Steps 2–4 twice, once on each half, with the sign of <i>x</i> flipping through every inequality. That is where the errors live.',
        ],
        ans: 'Range(<i>f</i>) = (−1, 1)',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Classify <i>f</i>(<i>x</i>) = <i>x</i><sup>5</sup> − 3<i>x</i><sup>3</sup> + 7<i>x</i>.',
            a: 'Odd.',
          },
          {
            q: 'Classify <i>f</i>(<i>x</i>) = |<i>x</i> + 1| + |<i>x</i> − 1|.',
            a: 'Even.',
          },
          {
            q: 'Classify <i>f</i>(<i>x</i>) = |<i>x</i> + 1| − |<i>x</i> − 1|.',
            a: 'Odd.',
          },
          {
            q: 'Classify <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + <i>x</i><sup>4</sup> + 1.',
            a: 'Even.',
          },
          {
            q: 'Classify <i>f</i>(<i>x</i>) = <frac><num><i>x</i></num><den><i>x</i><sup>2</sup> − 4</den></frac> (state the domain first).',
            a: 'Domain ℝ ∖ {−2, 2}, which is symmetric; odd (odd over even).',
          },
          {
            q: 'Classify <i>f</i>(<i>x</i>) = (<i>x</i> + 1)<sup>2</sup>.',
            a: 'Neither. (<i>f</i>(1) = 4, <i>f</i>(−1) = 0.)',
          },
          {
            q: 'Write <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup> − 2<i>x</i> + 5 as the sum of an even and an odd function.',
            a: 'Even part 3<i>x</i><sup>2</sup> + 5; odd part <i>x</i><sup>3</sup> − 2<i>x</i>.',
          },
          {
            q: '<i>f</i> is odd and <i>f</i>(3) = 7. Find <i>f</i>(−3) and <i>f</i>(0).',
            a: '<i>f</i>(−3) = −7 and <i>f</i>(0) = 0.',
          },
          {
            q: 'Use parity to find the range of <i>g</i>(<i>x</i>) = <i>x</i>|<i>x</i>| on ℝ.',
            a: '<i>g</i> is odd. On [0, ∞) it equals <i>x</i><sup>2</sup>, with range [0, ∞); reflecting gives (−∞, 0] on the other half. Range = ℝ.',
          },
        ],
      },
    ],
  },
];
