import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Topics 03 and 04: pp. 41–56 of the Class 11 Mathematics Master
 * Reference (October 2026 edition), word for word, each split at its Exam
 * Relevance box and its Sections 1 to 8.
 *
 *   Topic 03  Venn Diagrams and Set Operations              pp. 41–48
 *   Topic 04  Cardinality of Unions and Practical Problems  pp. 49–56
 *
 * Figure 1.3, the four regions of two circles (caption p. 41, drawn p. 42),
 * sits in "Concept intuition" after the paragraph that names the four
 * regions, where the book prints its caption. Figure 1.4, the intervals of
 * Example 3 on a number line (caption p. 45, drawn p. 46), is shown inside
 * that worked example. Figure 1.5, the eight regions of three circles
 * (caption p. 50, drawn p. 51), follows the inclusion–exclusion paragraph.
 * All three are redrawn in lib/diagrams/mathematics-11-01.ts. These pages
 * print no fractions.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 41–48 ─────────────────────────
  {
    n: '03',
    title: 'Venn Diagrams and Set Operations',
    kalam: 'Draw the universe as a rectangle and each set as a circle inside it.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'Bread-and-butter marks across every exam. CBSE Boards ask 2–3 mark questions on computing <i>A</i> ∪ <i>B</i>, <i>A</i> ∩ <i>B</i>, <i>A</i> − <i>B</i>, <i>A</i>′ or proving an identity / shading a Venn diagram. JEE Main tests simplification of set expressions and <b>De Morgan’s laws</b>, often disguised inside logic or probability. The operations on intervals are the silent machinery behind every domain-of-a-function problem in JEE Advanced calculus.',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Think of two WhatsApp broadcast lists on your phone: <b>Family</b> (<i>A</i>) and <b>Office</b> (<i>B</i>). All your saved contacts together form the universal set <i>U</i>. Every set operation is just a way of asking a membership question about these two lists.<br>• <b>Union</b> <i>A</i> ∪ <i>B</i>: everyone who is in Family <b>or</b> Office (or both). If you wanted to broadcast a wedding invite to both circles, you’d message <i>A</i> ∪ <i>B</i>. The word to burn into memory is <b>or</b> (the inclusive or: “both” counts).<br>• <b>Intersection</b> <i>A</i> ∩ <i>B</i>: everyone who is in <b>both</b> lists, like a cousin who also happens to be a colleague. The keyword is <b>and</b>.<br>• <b>Difference</b> <i>A</i> − <i>B</i>: those in Family but <b>not</b> in Office. Note this is one-directional: <i>B</i> − <i>A</i> (in Office but not Family) is a completely different group. Subtraction of sets, like subtraction of numbers, is <b>not</b> commutative.<br>• <b>Complement</b> <i>A</i>′: everyone in your contacts who is <b>not</b> in Family. Complement always answers “everyone else,” so it only makes sense once you’ve fixed the universe <i>U</i>. Change <i>U</i> and <i>A</i>′ changes with it.<br>• <b>Symmetric difference</b> <i>A</i> △ <i>B</i>: those in <b>exactly one</b> of the two lists, never both. These are the people who attended only one of two functions. Formally <i>A</i> △ <i>B</i> = (<i>A</i> − <i>B</i>) ∪ (<i>B</i> − <i>A</i>).',
      },
      {
        t: 'p',
        html: 'When two lists share nobody, say <b>Family</b> and <b>Strangers</b>, we call them <b>disjoint</b>: <i>A</i> ∩ <i>B</i> = ∅.',
      },
      {
        t: 'p',
        html: 'The reason <b>Venn diagrams</b> are so powerful is that they turn all this bookkeeping into a picture. Draw the universe as a rectangle and each set as a circle inside it. Two overlapping circles carve the rectangle into exactly <b>four regions</b>: only <i>A</i>, only <i>B</i>, both (<i>A</i> ∩ <i>B</i>), and neither (outside both). Every element of <i>U</i> lands in exactly one of these four.',
      },
      { t: 'fig', id: 'm11-01-fig-1.3' },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Once you see those four regions, every operation is simply a choice of which regions to shade. Union shades three regions (everything but “neither”); intersection shades only the lens; difference <i>A</i> − <i>B</i> shades only the “only <i>A</i>” crescent; complement <i>A</i>′ shades everything outside circle <i>A</i>. You never have to memorise the operations; you just shade.',
      },
      {
        t: 'p',
        html: 'This picture also makes <b>De Morgan’s laws</b> obvious. “Not in (Family or Office)” means you’re outside both circles, i.e. not in Family <b>and</b> not in Office. In symbols, (<i>A</i> ∪ <i>B</i>)′ = <i>A</i>′ ∩ <i>B</i>′. Flipping a “union-then-complement” turns the or into an and. Likewise (<i>A</i> ∩ <i>B</i>)′ = <i>A</i>′ ∪ <i>B</i>′.',
      },
      {
        t: 'p',
        html: '<b>Edge cases & where students slip (the “fine print”):</b><br>• <i>A</i> − <i>B</i> ≠ <i>B</i> − <i>A</i> in general: order matters for difference (and for complement direction).<br>• Complement is meaningless without a stated universe <i>U</i>; <i>A</i>′ depends entirely on <i>U</i>.<br>• <i>A</i> ∪ <i>A</i> = <i>A</i> and <i>A</i> ∩ <i>A</i> = <i>A</i> (idempotent): combining a set with itself changes nothing.<br>• Disjoint (<i>A</i> ∩ <i>B</i> = ∅) is not the same as complementary (<i>A</i> ∩ <i>B</i> = ∅ <b>and</b> <i>A</i> ∪ <i>B</i> = <i>U</i>).',
      },

      { t: 'part', title: 'Key definitions, notation and laws' },
      {
        t: 'table',
        title: null,
        head: ['Operation', 'Set-builder definition', 'Read as'],
        rows: [
          ['Union', '<i>A</i> ∪ <i>B</i> = {<i>x</i> ∶ <i>x</i> ∈ <i>A</i> or <i>x</i> ∈ <i>B</i>}', 'A cup B'],
          ['Intersection', '<i>A</i> ∩ <i>B</i> = {<i>x</i> ∶ <i>x</i> ∈ <i>A</i> and <i>x</i> ∈ <i>B</i>}', 'A cap B'],
          ['Difference', '<i>A</i> − <i>B</i> = {<i>x</i> ∶ <i>x</i> ∈ <i>A</i> and <i>x</i> ∉ <i>B</i>}', 'A minus B'],
          ['Complement', '<i>A</i>′ = {<i>x</i> ∶ <i>x</i> ∈ <i>U</i> and <i>x</i> ∉ <i>A</i>} = <i>U</i> − <i>A</i>', 'A complement'],
          ['Symmetric difference', '<i>A</i> △ <i>B</i> = (<i>A</i> − <i>B</i>) ∪ (<i>B</i> − <i>A</i>)', 'A sym-diff B'],
          ['Disjoint', '<i>A</i> ∩ <i>B</i> = ∅', 'A, B disjoint'],
        ],
      },
      { t: 'p', html: '<b>The laws of set algebra</b> (all provable by element-chasing or by shading):' },
      {
        t: 'formula',
        kicker: 'Commutative',
        main: '<i>A</i> ∪ <i>B</i> = <i>B</i> ∪ <i>A</i><br><i>A</i> ∩ <i>B</i> = <i>B</i> ∩ <i>A</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Associative',
        main: '(<i>A</i> ∪ <i>B</i>) ∪ <i>C</i> = <i>A</i> ∪ (<i>B</i> ∪ <i>C</i>)<br>(<i>A</i> ∩ <i>B</i>) ∩ <i>C</i> = <i>A</i> ∩ (<i>B</i> ∩ <i>C</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Distributive',
        main: '<i>A</i> ∩ (<i>B</i> ∪ <i>C</i>) = (<i>A</i> ∩ <i>B</i>) ∪ (<i>A</i> ∩ <i>C</i>)<br><i>A</i> ∪ (<i>B</i> ∩ <i>C</i>) = (<i>A</i> ∪ <i>B</i>) ∩ (<i>A</i> ∪ <i>C</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Idempotent',
        main: '<i>A</i> ∪ <i>A</i> = <i>A</i><br><i>A</i> ∩ <i>A</i> = <i>A</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Identity / Domination',
        main: '<i>A</i> ∪ ∅ = <i>A</i><br><i>A</i> ∩ <i>U</i> = <i>A</i><br><i>A</i> ∪ <i>U</i> = <i>U</i><br><i>A</i> ∩ ∅ = ∅',
        legend: ['<i>U</i> = universal set'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Complement',
        main: '<i>A</i> ∪ <i>A</i>′ = <i>U</i><br><i>A</i> ∩ <i>A</i>′ = ∅<br>(<i>A</i>′)′ = <i>A</i><br><i>U</i>′ = ∅<br>∅′ = <i>U</i>',
        legend: ['<i>U</i> = universal set', '<i>A</i>′ = complement of <i>A</i>, <i>U</i> − <i>A</i>'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'De Morgan',
        main: '(<i>A</i> ∪ <i>B</i>)′ = <i>A</i>′ ∩ <i>B</i>′<br>(<i>A</i> ∩ <i>B</i>)′ = <i>A</i>′ ∪ <i>B</i>′',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Two-set cardinality formula (the bridge to practical problems)',
        main: '<i>n</i>(<i>A</i> ∪ <i>B</i>) = <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i>)',
        legend: ['<i>n</i>(<i>X</i>) = number of elements of a finite set <i>X</i>'],
        note: 'for finite sets <i>A</i> and <i>B</i>',
      },

      { t: 'part', title: 'Derivation and key procedures' },
      { t: 'p', html: '<b>Derivation 1: De Morgan’s law (<i>A</i> ∪ <i>B</i>)′ = <i>A</i>′ ∩ <i>B</i>′ by element-chasing.</b>' },
      {
        t: 'p',
        html: 'We show the two sides have exactly the same elements by tracking an arbitrary element <i>x</i>:<br><i>x</i> ∈ (<i>A</i> ∪ <i>B</i>)′ ⟺ <i>x</i> ∉ (<i>A</i> ∪ <i>B</i>) ⟺ NOT(<i>x</i> ∈ <i>A</i> or <i>x</i> ∈ <i>B</i>)<br>⟺ (<i>x</i> ∉ <i>A</i>) and (<i>x</i> ∉ <i>B</i>) ⟺ (<i>x</i> ∈ <i>A</i>′) and (<i>x</i> ∈ <i>B</i>′) ⟺ <i>x</i> ∈ <i>A</i>′ ∩ <i>B</i>′.<br>Every step is a logical iff, so the two sets have exactly the same elements. <b>Why this is the gold-standard method:</b> the negation of “or” is “and”; that single logical fact is the whole law. Shading a Venn diagram illustrates it, but element-chasing proves it.',
      },
      { t: 'p', html: '<b>Derivation 2: why <i>n</i>(<i>A</i> ∪ <i>B</i>) = <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i>).</b>' },
      {
        t: 'p',
        html: 'Picture the two-circle Venn diagram. If you simply add <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>), every element in the overlap <i>A</i> ∩ <i>B</i> has been counted <b>twice</b>: once as part of <i>A</i>, once as part of <i>B</i>. To correct the double-count, subtract the overlap once:<br><i>n</i>(<i>A</i> ∪ <i>B</i>) = <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) (overlap counted twice) − <i>n</i>(<i>A</i> ∩ <i>B</i>) (remove one copy).<br>When <i>A</i> and <i>B</i> are disjoint, <i>n</i>(<i>A</i> ∩ <i>B</i>) = 0 and the formula collapses to <i>n</i>(<i>A</i> ∪ <i>B</i>) = <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>).',
      },
      {
        t: 'p',
        html: '<b>Procedure A: shade a compound expression on a Venn diagram.</b> Work inside-out: shade the innermost bracket first, then apply the outer operation. For <i>A</i>′ ∩ <i>B</i>: first shade outside <i>A</i>, then keep only the part of that shading lying inside <i>B</i>. <b>Why:</b> operations nest exactly like arithmetic; respect the brackets.',
      },
      {
        t: 'p',
        html: '<b>Procedure B: simplify a set expression using the laws.</b> Treat ∪ like +, ∩ like ×, and complement like negation; apply distributive and De Morgan laws, then collapse with identity/complement laws (e.g. <i>A</i> ∩ <i>A</i>′ = ∅). <b>Why:</b> set algebra is a genuine algebra; most rewrite moves from numbers carry over, but not all: ∪ also distributes over ∩, and <i>A</i> ∪ <i>A</i> = <i>A</i> ∩ <i>A</i> = <i>A</i>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Let <i>U</i> = {1, 2, …, 10}, <i>A</i> = {2, 4, 6, 8}, <i>B</i> = {1, 2, 3, 4, 5}. Find <i>A</i> ∪ <i>B</i>, <i>A</i> ∩ <i>B</i>, <i>A</i> − <i>B</i>, <i>A</i>′, and <i>A</i> △ <i>B</i>.',
        steps: [
          '<i>A</i> ∪ <i>B</i> = {1, 2, 3, 4, 5, 6, 8} (everything in either)',
          '<i>A</i> ∩ <i>B</i> = {2, 4} (common to both)',
          '<i>A</i> − <i>B</i> = {6, 8} (in <i>A</i>, not in <i>B</i>)',
          '<i>A</i>′ = <i>U</i> − <i>A</i> = {1, 3, 5, 7, 9, 10}',
          '<i>B</i> − <i>A</i> = {1, 3, 5}, so <i>A</i> △ <i>B</i> = (<i>A</i> − <i>B</i>) ∪ (<i>B</i> − <i>A</i>) = {6, 8} ∪ {1, 3, 5} = {1, 3, 5, 6, 8}.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: 'Simplify (<i>A</i> − <i>B</i>) ∪ (<i>A</i> ∩ <i>B</i>).',
        steps: [
          '<b>Speed move: shade, don’t grind.</b> (<i>A</i> − <i>B</i>) is the “only <i>A</i>” crescent; (<i>A</i> ∩ <i>B</i>) is the lens. Together they fill the entire circle <i>A</i>:<br>(<i>A</i> − <i>B</i>) ∪ (<i>A</i> ∩ <i>B</i>) = <i>A</i>.',
          '<b>Algebraic confirmation:</b> <i>A</i> − <i>B</i> = <i>A</i> ∩ <i>B</i>′, so (<i>A</i> ∩ <i>B</i>′) ∪ (<i>A</i> ∩ <i>B</i>) = <i>A</i> ∩ (<i>B</i>′ ∪ <i>B</i>) = <i>A</i> ∩ <i>U</i> = <i>A</i>.',
          '<b>The trap:</b> students rush to <i>A</i> ∪ <i>B</i> (over-shading into <i>B</i>) or <i>A</i> ∩ <i>B</i> (under-shading). The crescent-plus-lens picture instantly gives <i>A</i>, a 5-second answer if you visualise the regions.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        fig: 'm11-01-fig-1.4',
        q: 'Over the universe ℝ, let <i>A</i> = [−2, 5) and <i>B</i> = (1, 8]. Find <i>A</i> ∩ <i>B</i>, <i>A</i> ∪ <i>B</i>, and <i>A</i> − <i>B</i>.',
        steps: [
          'This links interval notation to operations; endpoints are where marks are won or lost.',
          '<i>A</i> ∩ <i>B</i>: numbers in both. Left edge is the larger lower bound: 1 (open, since <i>B</i> excludes it). Right edge is the smaller upper bound: 5 (open, since <i>A</i> excludes it). <i>A</i> ∩ <i>B</i> = (1, 5).',
          '<i>A</i> ∪ <i>B</i>: numbers in either. Left edge −2 (closed, from <i>A</i>); right edge 8 (closed, from <i>B</i>). <i>A</i> ∪ <i>B</i> = [−2, 8].',
          '<i>A</i> − <i>B</i>: in <i>A</i> but not in <i>B</i>. <i>B</i> starts just above 1, so <i>A</i> − <i>B</i> runs from −2 up to and <b>including</b> 1 (since 1 ∉ <i>B</i>, it survives): <i>A</i> − <i>B</i> = [−2, 1].',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'Prove that the two standard definitions of symmetric difference agree:<br>(<i>A</i> ∪ <i>B</i>) − (<i>A</i> ∩ <i>B</i>) = (<i>A</i> − <i>B</i>) ∪ (<i>B</i> − <i>A</i>).',
        steps: [
          'Element-chase. Take any <i>x</i>:<br><i>x</i> ∈ (<i>A</i> ∪ <i>B</i>) − (<i>A</i> ∩ <i>B</i>) ⟺ (<i>x</i> ∈ <i>A</i> or <i>x</i> ∈ <i>B</i>) and NOT(<i>x</i> ∈ <i>A</i> and <i>x</i> ∈ <i>B</i>).',
          'The condition “(in at least one) and (not in both)” is precisely “in <b>exactly one</b> of <i>A</i>, <i>B</i>.” That splits into two mutually exclusive cases:<br>(<i>x</i> ∈ <i>A</i> and <i>x</i> ∉ <i>B</i>) or (<i>x</i> ∈ <i>B</i> and <i>x</i> ∉ <i>A</i>),<br>which is exactly <i>x</i> ∈ (<i>A</i> − <i>B</i>) or <i>x</i> ∈ (<i>B</i> − <i>A</i>), i.e. <i>x</i> ∈ (<i>A</i> − <i>B</i>) ∪ (<i>B</i> − <i>A</i>). Since every step is an iff, the two sets are equal. ■',
          'The insight: symmetric difference is the formal name for the everyday phrase “one or the other but not both.”',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] With <i>U</i> = {<i>x</i> ∈ ℕ ∶ <i>x</i> ≤ 9}, <i>A</i> = {1, 2, 3, 4}, <i>B</i> = {3, 4, 5, 6}, find <i>A</i>′, <i>B</i> − <i>A</i>, and <i>A</i> △ <i>B</i>.',
            a: '<i>A</i>′ = {5, 6, 7, 8, 9}; <i>B</i> − <i>A</i> = {5, 6}; <i>A</i> △ <i>B</i> = {1, 2, 5, 6}.',
          },
          {
            q: '[JEE Main] Simplify (<i>A</i>′ ∩ <i>B</i>′)′ using De Morgan’s law.',
            a: '<i>A</i> ∪ <i>B</i> (since (<i>A</i>′ ∩ <i>B</i>′)′ = (<i>A</i>′)′ ∪ (<i>B</i>′)′ = <i>A</i> ∪ <i>B</i>).',
          },
          {
            q: '[JEE Main] Over ℝ, find (−∞, 3] ∩ (0, ∞) in interval form.',
            a: '(0, 3].',
          },
          {
            q: '[JEE Advanced] Prove (<i>A</i> − <i>B</i>) ∩ (<i>A</i> − <i>C</i>) = <i>A</i> − (<i>B</i> ∪ <i>C</i>).',
            a: 'Element-chase: <i>x</i> ∈ LHS ⟺ <i>x</i> ∈ <i>A</i>, <i>x</i> ∉ <i>B</i>, <i>x</i> ∉ <i>C</i> ⟺ <i>x</i> ∈ <i>A</i>, <i>x</i> ∉ (<i>B</i> ∪ <i>C</i>) ⟺ <i>x</i> ∈ RHS.',
          },
          {
            q: '[JEE Advanced] Simplify <i>A</i> ∩ (<i>A</i> ∪ <i>B</i>) and <i>A</i> ∪ (<i>A</i> ∩ <i>B</i>) (the <b>absorption laws</b>) and justify each in one line.',
            a: '<i>A</i> ∩ (<i>A</i> ∪ <i>B</i>) = <i>A</i>, since <i>A</i> ⊆ <i>A</i> ∪ <i>B</i>; <i>A</i> ∪ (<i>A</i> ∩ <i>B</i>) = <i>A</i>, since <i>A</i> ∩ <i>B</i> ⊆ <i>A</i>.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: '(<i>A</i> ∪ <i>B</i>)′ is equal to:',
        opts: [
          { label: '<i>A</i>′ ∪ <i>B</i>′', nudge: '<b>(A)</b> applies the wrong De Morgan form; that’s (<i>A</i> ∩ <i>B</i>)′.' },
          { label: '<i>A</i>′ ∩ <i>B</i>′', nudge: null },
          { label: '<i>A</i>′ − <i>B</i>′', nudge: '<b>(C)</b> invents a difference rule that doesn’t exist.' },
          { label: '<i>A</i> ∩ <i>B</i>', nudge: '<b>(D)</b> confuses “outside both circles” with “the overlap.”' },
        ],
        correct: 1,
        solution: 'De Morgan: the complement of a union is the intersection of the complements. The fix: complement turns ∪ into ∩, every time.',
      },
      {
        t: 'mcq',
        q: 'If <i>A</i> = {1, 2, 3} and <i>B</i> = {3, 4, 5}, then <i>A</i> − <i>B</i> equals:',
        opts: [
          { label: '{4, 5}', nudge: '<b>(A)</b> computes <i>B</i> − <i>A</i> instead: the commutativity trap.' },
          { label: '{3}', nudge: '<b>(B)</b> gives <i>A</i> ∩ <i>B</i>.' },
          { label: '{1, 2}', nudge: null },
          { label: '{1, 2, 4, 5}', nudge: '<b>(D)</b> gives the symmetric difference <i>A</i> △ <i>B</i>.' },
        ],
        correct: 2,
        solution: 'Elements in <i>A</i> but not in <i>B</i>: 1 and 2 (3 is excluded because it’s also in <i>B</i>). Each is a different operation a careless reader substitutes for difference.',
      },
      {
        t: 'mcq',
        q: 'For any set <i>A</i> with universe <i>U</i>, <i>A</i> ∩ <i>A</i>′ equals:',
        opts: [
          {
            label: '<i>U</i>',
            nudge: '<b>(A)</b> is the result of <i>A</i> ∪ <i>A</i>′ (the union fills the universe): the classic union/intersection swap.',
          },
          { label: '<i>A</i>', nudge: '<b>(B)</b> ignores the contradiction entirely.' },
          { label: '∅', nudge: null },
          { label: '<i>A</i>′', nudge: '<b>(D)</b> ignores the contradiction entirely.' },
        ],
        correct: 2,
        solution: 'No element can be both in <i>A</i> and outside <i>A</i>, so the intersection is empty. Anchor: <i>A</i> and <i>A</i>′ are disjoint by definition.',
      },
      {
        t: 'mcq',
        q: 'If <i>A</i> ⊆ <i>B</i>, then <i>A</i> ∪ <i>B</i> equals:',
        opts: [
          { label: '<i>A</i>', nudge: '<b>(A)</b> reverses the roles; that would be <i>A</i> ∩ <i>B</i> = <i>A</i> under the same hypothesis.' },
          { label: '<i>B</i>', nudge: null },
          { label: '∅', nudge: '<b>(C)</b> is baseless.' },
          { label: '<i>A</i> ∩ <i>B</i>', nudge: '<b>(D)</b> confuses union with intersection.' },
        ],
        correct: 1,
        solution: 'If every element of <i>A</i> is already in <i>B</i>, throwing <i>A</i> into the union adds nothing new, so <i>A</i> ∪ <i>B</i> = <i>B</i>. Visualise: a circle <i>A</i> sitting inside circle <i>B</i>. Their union is just <i>B</i>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Treating difference as commutative.</b> <i>A</i> − <i>B</i> ≠ <i>B</i> − <i>A</i>. Always read which set is the “source” and which is being removed.',
          '<b>Swapping the two De Morgan forms.</b> (<i>A</i> ∪ <i>B</i>)′ = <i>A</i>′ ∩ <i>B</i>′ (union → intersection); (<i>A</i> ∩ <i>B</i>)′ = <i>A</i>′ ∪ <i>B</i>′. The operation flips.',
          '<b>Forgetting to fix the universe before taking a complement.</b> <i>A</i>′ is undefined until <i>U</i> is stated; the answer changes with <i>U</i>.',
          '<b>Endpoint errors in interval operations.</b> For ∩, take the tighter bound at each end, with the bracket of the interval it comes from (an endpoint both share stays only if both include it); for ∪ (of overlapping intervals), the looser bound at each end, with its own bracket (a shared endpoint stays if either includes it).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any expression in two sets, draw the four-region Venn once and <b>shade</b>. Shading is faster and far less error-prone than juggling laws, and it instantly catches whether your algebra landed on <i>A</i>, <i>A</i> ∪ <i>B</i>, or <i>A</i> ∩ <i>B</i>.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Union</b> ∪ = “or” (inclusive). <b>Intersection</b> ∩ = “and”. <b>Difference</b> <i>A</i> − <i>B</i> = <i>A</i> ∩ <i>B</i>′. <b>Complement</b> <i>A</i>′ = <i>U</i> − <i>A</i>.',
            note: '',
          },
          {
            f: 'Symmetric difference',
            note: '<i>A</i> △ <i>B</i> = (<i>A</i> − <i>B</i>) ∪ (<i>B</i> − <i>A</i>) = (<i>A</i> ∪ <i>B</i>) − (<i>A</i> ∩ <i>B</i>).',
          },
          {
            f: 'De Morgan',
            note: '(<i>A</i> ∪ <i>B</i>)′ = <i>A</i>′ ∩ <i>B</i>′ and (<i>A</i> ∩ <i>B</i>)′ = <i>A</i>′ ∪ <i>B</i>′: the operation flips.',
          },
          { f: 'Complement laws', note: '<i>A</i> ∪ <i>A</i>′ = <i>U</i>, <i>A</i> ∩ <i>A</i>′ = ∅, (<i>A</i>′)′ = <i>A</i>.' },
          {
            f: '<b>Disjoint:</b> <i>A</i> ∩ <i>B</i> = ∅. <b>Cardinality:</b> <i>n</i>(<i>A</i> ∪ <i>B</i>) = <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i>).',
            note: '',
          },
          { f: 'Intervals', note: '∩ → tighter bound at each end, keeping that interval’s bracket (a shared end is closed only if closed in both); ∪ → looser bounds.' },
        ],
        aids: ['“Cup = or, cap = and.”', '“De Morgan flips the sign: complement a union, get an intersection.”', '“When stuck, shade the Venn.”'],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 49–56 ─────────────────────────
  {
    n: '04',
    title: 'Cardinality of Unions and Practical Problems',
    kalam: 'Don’t memorise long formulas; label the regions.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'One of the highest-yield, most predictable scoring topics in the whole chapter. CBSE Boards almost always carry a 3–4 mark word problem on two or three sets (the book’s estimate from past papers, not official figures). JEE Main features inclusion–exclusion both as standalone counting and woven into Probability and Permutations. JEE Advanced pushes into fine partitions of a three-set Venn diagram (exactly one, exactly two, at least two) and problems where the three-way overlap is the unknown you must solve for.',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Suppose a coaching batch has 70 students enrolled in Physics and 50 in Chemistry. How many students are enrolled in at least one of the two subjects? The tempting answer is 70 + 50 = 120, but that is almost always wrong, because some students take <b>both</b>. When you counted the 70 Physics students you already swept up the both-subject students, and when you counted the 50 Chemistry students you counted those same people a <b>second time</b>.',
      },
      {
        t: 'p',
        html: 'That single observation is the heart of this entire topic. Adding two sets double-counts their overlap, so to get the true size of the union you add the two sizes and then <b>subtract the overlap once</b> to undo the double-count:<br><i>n</i>(<i>A</i> ∪ <i>B</i>) = <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i>).',
      },
      {
        t: 'p',
        html: 'Now scale up to three subjects: Physics (<i>A</i>), Chemistry (<i>B</i>), Mathematics (<i>C</i>). Building the count honestly, region by region, forces a beautiful alternating pattern:<br>1. <b>Add</b> the three individual sizes: <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) + <i>n</i>(<i>C</i>). But now every two-way overlap has been counted twice and the central three-way overlap has been counted three times.<br>2. <b>Subtract</b> the three pairwise overlaps: − <i>n</i>(<i>A</i> ∩ <i>B</i>) − <i>n</i>(<i>B</i> ∩ <i>C</i>) − <i>n</i>(<i>C</i> ∩ <i>A</i>). This fixes the two-way regions, but watch the centre: the triple overlap was added 3 times, then subtracted 3 times (it sits inside all three pairwise overlaps), so right now it is counted <b>zero</b> times.<br>3. <b>Add</b> the triple overlap back <b>once</b>: + <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>).',
      },
      {
        t: 'formula',
        kicker: 'Inclusion–exclusion principle (three sets)',
        main: '<i>n</i>(<i>A</i> ∪ <i>B</i> ∪ <i>C</i>) = <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) + <i>n</i>(<i>C</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i>) − <i>n</i>(<i>B</i> ∩ <i>C</i>) − <i>n</i>(<i>C</i> ∩ <i>A</i>) + <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>)',
        legend: ['<i>n</i>(<i>X</i>) = number of elements of a finite set <i>X</i>'],
        note: null,
      },
      {
        t: 'p',
        html: 'The signs alternate +, −, + (include, exclude, include), which is exactly why the rule is called the <b>inclusion–exclusion principle</b>.',
      },
      { t: 'fig', id: 'm11-01-fig-1.5' },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Don’t memorise long formulas; label the regions. A three-circle Venn has exactly seven enclosed regions; give each a letter, fill the <b>centre first</b> and work <b>outward</b>, and every word problem collapses into simple addition and subtraction. The formulas are just bookkeeping for what the picture already shows.',
      },
      {
        t: 'p',
        html: '<b>Edge cases & where students slip (the “fine print”):</b><br>• <b>“or” means union, “and” means intersection.</b> “Students taking Physics or Chemistry” is <i>A</i> ∪ <i>B</i>; “and” is <i>A</i> ∩ <i>B</i>.<br>• <b>“At least one” vs “none”.</b> Those in none of the sets are the complement of the union: <i>n</i>(<i>U</i>) − <i>n</i>(<i>A</i> ∪ <i>B</i> ∪ <i>C</i>). They are outside every circle.<br>• <b>“Only <i>A</i>” vs “<i>A</i>”.</b> “Only <i>A</i>” is the crescent <i>A</i> minus its overlaps; plain “<i>A</i>” includes every overlap. Mixing these up is the single most common word-problem error.<br>• <b>Data can be inconsistent.</b> If a computed union exceeds the universe (<i>n</i>(<i>A</i> ∪ <i>B</i>) > <i>n</i>(<i>U</i>)), the given numbers are contradictory; a legitimate exam answer is “the data is impossible.”',
      },

      { t: 'part', title: 'Key definitions, notation and formulas' },
      {
        t: 'p',
        html: '(No dimensional formulae here; these are pure counting identities. What matters is reading each phrase into the right region.)',
      },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'Meaning', 'Formula'],
        rows: [
          ['Two-set union', 'elements in <i>A</i> or <i>B</i>', '<i>n</i>(<i>A</i> ∪ <i>B</i>) = <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i>)'],
          [
            'Three-set union',
            'elements in <i>A</i>, <i>B</i>, or <i>C</i>',
            '<i>n</i>(<i>A</i> ∪ <i>B</i> ∪ <i>C</i>) = ∑ <i>n</i>(<i>A</i>) − ∑ <i>n</i>(<i>A</i> ∩ <i>B</i>) + <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>)',
          ],
          ['Disjoint union', 'no overlap', '<i>n</i>(<i>A</i> ∪ <i>B</i>) = <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) when <i>A</i> ∩ <i>B</i> = ∅'],
          ['None (neither)', 'outside every set', '<i>n</i>(<i>U</i>) − <i>n</i>(<i>A</i> ∪ <i>B</i> ∪ <i>C</i>)'],
          ['Only <i>A</i> (two sets)', 'in <i>A</i>, not in <i>B</i>', '<i>n</i>(<i>A</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i>)'],
          [
            'Exactly one (three sets)',
            'in precisely one set',
            '∑ <i>n</i>(<i>A</i>) − 2∑ <i>n</i>(<i>A</i> ∩ <i>B</i>) + 3<i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>)',
          ],
          ['Exactly two (three sets)', 'in precisely two sets', '∑ <i>n</i>(<i>A</i> ∩ <i>B</i>) − 3<i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>)'],
          ['At least two (three sets)', 'in two or more sets', '∑ <i>n</i>(<i>A</i> ∩ <i>B</i>) − 2<i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>)'],
        ],
      },
      {
        t: 'p',
        html: 'Here the shorthand ∑ <i>n</i>(<i>A</i>) = <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) + <i>n</i>(<i>C</i>) and ∑ <i>n</i>(<i>A</i> ∩ <i>B</i>) = <i>n</i>(<i>A</i> ∩ <i>B</i>) + <i>n</i>(<i>B</i> ∩ <i>C</i>) + <i>n</i>(<i>C</i> ∩ <i>A</i>).',
      },
      {
        t: 'formula',
        kicker: 'Two partition identities worth internalising',
        main: '<i>n</i>(<i>A</i> ∪ <i>B</i> ∪ <i>C</i>) = <i>E</i><sub>1</sub> + <i>E</i><sub>2</sub> + <i>E</i><sub>3</sub><br><i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) + <i>n</i>(<i>C</i>) = <i>E</i><sub>1</sub> + 2<i>E</i><sub>2</sub> + 3<i>E</i><sub>3</sub>',
        legend: [
          '<i>E</i><sub>1</sub> = count in exactly one set',
          '<i>E</i><sub>2</sub> = count in exactly two sets',
          '<i>E</i><sub>3</sub> = count in all three sets',
        ],
        note: 'They turn hard problems into linear equations. The first says the union is the sum of its disjoint regions; the second says each element is counted once per set it belongs to.',
      },

      { t: 'part', title: 'Derivation and key procedures' },
      { t: 'p', html: '<b>Derivation: the three-set formula from the two-set formula.</b>' },
      {
        t: 'p',
        html: 'Treat <i>B</i> ∪ <i>C</i> as a single set and apply the two-set rule to <i>A</i> and (<i>B</i> ∪ <i>C</i>):<br><i>n</i>(<i>A</i> ∪ (<i>B</i> ∪ <i>C</i>)) = <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i> ∪ <i>C</i>) − <i>n</i>(<i>A</i> ∩ (<i>B</i> ∪ <i>C</i>)).<br>Expand <i>n</i>(<i>B</i> ∪ <i>C</i>) = <i>n</i>(<i>B</i>) + <i>n</i>(<i>C</i>) − <i>n</i>(<i>B</i> ∩ <i>C</i>). For the last term, distribute the intersection over the union:<br><i>A</i> ∩ (<i>B</i> ∪ <i>C</i>) = (<i>A</i> ∩ <i>B</i>) ∪ (<i>A</i> ∩ <i>C</i>),<br>so, by the two-set rule again,<br><i>n</i>(<i>A</i> ∩ (<i>B</i> ∪ <i>C</i>)) = <i>n</i>(<i>A</i> ∩ <i>B</i>) + <i>n</i>(<i>A</i> ∩ <i>C</i>) − <i>n</i>((<i>A</i> ∩ <i>B</i>) ∩ (<i>A</i> ∩ <i>C</i>)) = <i>n</i>(<i>A</i> ∩ <i>B</i>) + <i>n</i>(<i>A</i> ∩ <i>C</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>),<br>using (<i>A</i> ∩ <i>B</i>) ∩ (<i>A</i> ∩ <i>C</i>) = <i>A</i> ∩ <i>B</i> ∩ <i>C</i>. Substituting everything back and collecting terms gives the alternating formula. <b>Why this matters:</b> the three-set rule is not a new axiom to memorise; it is the two-set rule applied repeatedly, which is exactly why the pattern extends to any number of sets.',
      },
      {
        t: 'p',
        html: '<b>Derivation: the “exactly two” count.</b> Each pairwise overlap <i>n</i>(<i>A</i> ∩ <i>B</i>) contains both the people in only <i>A</i> and <i>B</i> and the people in all three. Summing the three pairwise overlaps therefore counts every “exactly two” person once, but counts each “all three” person <b>three</b> times (once in each pairwise overlap). Removing those extra copies (three each, but we want them counted zero times here) means subtracting 3<i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>):<br><i>E</i><sub>2</sub> = ∑ <i>n</i>(<i>A</i> ∩ <i>B</i>) − 3<i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>).<br>(For at least two, we want the centre counted once, not zero, so we subtract only 2<i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>).)',
      },
      {
        t: 'proc',
        title: 'Procedure A: the Venn region method (fastest for fully-specified data)',
        steps: [
          'Draw three overlapping circles in a rectangle <i>U</i>.',
          'Fill the <b>centre</b> <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>) first.',
          'For each pairwise region, subtract the centre: “only <i>A</i> and <i>B</i>” = <i>n</i>(<i>A</i> ∩ <i>B</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>).',
          'For each single region, subtract its two adjoining pairwise regions and the centre from <i>n</i>(<i>A</i>).',
          'The “none” region = <i>n</i>(<i>U</i>) − (sum of all seven inner regions). <b>Why inside-out:</b> every outer region is defined by removing the inner regions it contains, so the centre must be known before anything around it.',
        ],
      },
      {
        t: 'p',
        html: '<b>Procedure B: the algebraic method (fastest when an overlap is unknown).</b> Translate the question into set language, write the relevant inclusion–exclusion identity (or the two partition identities), and solve for the unknown term. Use this when the three-way overlap or a missing total is what you are asked to find.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'In a batch of 120 students, 70 are enrolled in Physics and 50 in Chemistry; 30 are enrolled in both. Find the number enrolled in (i) at least one of the two subjects, (ii) Physics only, (iii) neither subject.',
        steps: [
          'Let <i>P</i> and <i>C</i> be the two subject sets. Given <i>n</i>(<i>U</i>) = 120, <i>n</i>(<i>P</i>) = 70, <i>n</i>(<i>C</i>) = 50, <i>n</i>(<i>P</i> ∩ <i>C</i>) = 30.',
          '<b>(i)</b> <i>n</i>(<i>P</i> ∪ <i>C</i>) = <i>n</i>(<i>P</i>) + <i>n</i>(<i>C</i>) − <i>n</i>(<i>P</i> ∩ <i>C</i>) = 70 + 50 − 30',
          '<b>(ii)</b> Physics only = <i>n</i>(<i>P</i>) − <i>n</i>(<i>P</i> ∩ <i>C</i>) = 70 − 30',
          '<b>(iii)</b> Neither = <i>n</i>(<i>U</i>) − <i>n</i>(<i>P</i> ∪ <i>C</i>) = 120 − 90',
        ],
        ans: '(i) 90; (ii) 40; (iii) 30',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: 'In a hostel of 80 students, 60 subscribe to a tea service and 35 to a coffee service. If every student subscribes to at least one of the two, how many subscribe to both?',
        steps: [
          '<b>Speed move: read “at least one” as union = total.</b> Since everyone takes at least one service, <i>n</i>(tea ∪ coffee) = 80. Rearranging the two-set formula for the overlap:<br><i>n</i>(both) = <i>n</i>(tea) + <i>n</i>(coffee) − <i>n</i>(union) = 60 + 35 − 80',
          '<b>The trap:</b> students who don’t register “at least one ⇒ union = 80” get stuck with two unknowns. The phrase “every student subscribes to at least one” is the whole key: it hands you the union for free. The decoy instinct is to compute 60 + 35 = 95 and panic that it exceeds 80; that excess is the double-counted overlap.',
        ],
        ans: '15',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'A sports survey of 200 students finds: 100 play cricket, 80 play football, 65 play hockey; 40 play cricket and football, 30 football and hockey, 35 cricket and hockey, and 20 play all three. Find the number who play (i) at least one sport, (ii) exactly two sports, (iii) no sport.',
        steps: [
          'Let <i>C</i>, <i>F</i>, <i>H</i> be the three sets. ∑ <i>n</i> = 100 + 80 + 65 = 245; ∑ pairwise = 40 + 30 + 35 = 105; triple = 20.',
          '<b>(i)</b> <i>n</i>(<i>C</i> ∪ <i>F</i> ∪ <i>H</i>) = 245 − 105 + 20',
          '<b>(ii)</b> Exactly two = ∑ <i>n</i>(<i>C</i> ∩ <i>F</i>) − 3<i>n</i>(<i>C</i> ∩ <i>F</i> ∩ <i>H</i>) = 105 − 3(20) = 105 − 60',
          '<b>(iii)</b> No sport = <i>n</i>(<i>U</i>) − <i>n</i>(<i>C</i> ∪ <i>F</i> ∪ <i>H</i>) = 200 − 160',
        ],
        ans: '(i) 160; (ii) 45; (iii) 40',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'In a colony of 150 residents, every resident speaks at least one of Hindi, English, or Tamil. 100 speak Hindi, 70 English, and 55 Tamil. If exactly 25 residents speak precisely two of the three languages, how many speak all three?',
        steps: [
          'This is a solve-for-the-unknown problem, so use the <b>partition identities</b>. Let <i>E</i><sub>1</sub>, <i>E</i><sub>2</sub>, <i>E</i><sub>3</sub> be the counts speaking exactly one, exactly two, all three. Given: union = 150 (everyone speaks ≥ 1), ∑ <i>n</i> = 100 + 70 + 55 = 225, and <i>E</i><sub>2</sub> = 25.',
          'From the two identities:<br><i>E</i><sub>1</sub> + <i>E</i><sub>2</sub> + <i>E</i><sub>3</sub> = 150 ⇒ <i>E</i><sub>1</sub> + 25 + <i>E</i><sub>3</sub> = 150,<br><i>E</i><sub>1</sub> + 2<i>E</i><sub>2</sub> + 3<i>E</i><sub>3</sub> = 225 ⇒ <i>E</i><sub>1</sub> + 50 + 3<i>E</i><sub>3</sub> = 225.',
          'Subtract the first from the second: (50 − 25) + (3<i>E</i><sub>3</sub> − <i>E</i><sub>3</sub>) = 225 − 150, i.e. 25 + 2<i>E</i><sub>3</sub> = 75 ⇒ <i>E</i><sub>3</sub> = 25.',
          '(<b>Check:</b> <i>E</i><sub>3</sub> = 25, <i>E</i><sub>2</sub> = 25 ⇒ <i>E</i><sub>1</sub> = 100; union = 100 + 25 + 25 = 150 ✓ and ∑ <i>n</i> = 100 + 2(25) + 3(25) = 225 ✓.) The lesson: when the three-way overlap is unknown, the two partition identities give two equations; pure algebra finishes the job without ever drawing the diagram.',
        ],
        ans: '25 residents speak all three languages.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] In a class of 60 students, 35 passed Mathematics and 40 passed Physics; 25 passed both. How many passed at least one subject, and how many failed both?',
            a: 'At least one = 35 + 40 − 25 = 50; failed both = 60 − 50 = 10.',
          },
          {
            q: '[JEE Main] A survey of 100 people reports 72 like tea, 55 like coffee, and 20 like both. Is this data consistent? Justify.',
            a: '<b>Inconsistent.</b> <i>n</i>(tea ∪ coffee) = 72 + 55 − 20 = 107 > 100 = <i>n</i>(<i>U</i>). The union cannot exceed the total surveyed, so the figures are contradictory.',
          },
          {
            q: '[JEE Main] Among 250 commuters, 140 use buses, 100 use the metro, 75 use autos; 60 use bus and metro, 40 metro and auto, 45 bus and auto, and 25 use all three. How many use none of the three?',
            a: 'Union = 140 + 100 + 75 − 60 − 40 − 45 + 25 = 315 − 145 + 25 = 195; none = 250 − 195 = 55.',
          },
          {
            q: '[JEE Advanced] In a town survey of 500 families, 280 read newspaper X, 210 read Y, 150 read Z; 100 read X and Y, 60 read Y and Z, 70 read X and Z, and 40 read all three. Find the number of families that read (i) exactly one newspaper, (ii) at least two newspapers.',
            a: 'Exactly one = (280 + 210 + 150) − 2(100 + 60 + 70) + 3(40) = 640 − 460 + 120 = 300; at least two = (100 + 60 + 70) − 2(40) = 230 − 80 = 150.',
          },
          {
            q: '[JEE Advanced] In a group of 100 people, each likes at least one of three desserts. 60 like A, 50 like B, 40 like C, and 10 like all three. How many like exactly two desserts?',
            a: 'Union = 100, ∑ <i>n</i> = 150, all three = 10. From ∑ <i>n</i> − union = <i>E</i><sub>2</sub> + 2<i>E</i><sub>3</sub>: 150 − 100 = <i>E</i><sub>2</sub> + 2(10) ⇒ <i>E</i><sub>2</sub> = 30. So 30 like exactly two.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'If <i>n</i>(<i>A</i>) = 25, <i>n</i>(<i>B</i>) = 18, and <i>n</i>(<i>A</i> ∪ <i>B</i>) = 35, then <i>n</i>(<i>A</i> ∩ <i>B</i>) is:',
        opts: [
          { label: '43', nudge: '<b>(A)</b> is <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) with no subtraction: the double-count left uncorrected.' },
          { label: '8', nudge: null },
          { label: '10', nudge: '<b>(C)</b> comes from subtracting the wrong pair of quantities.' },
          { label: '17', nudge: '<b>(D)</b> comes from subtracting the wrong pair of quantities.' },
        ],
        correct: 1,
        solution: 'Rearrange the two-set formula: <i>n</i>(<i>A</i> ∩ <i>B</i>) = <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) − <i>n</i>(<i>A</i> ∪ <i>B</i>) = 25 + 18 − 35 = 8. Anchor: the overlap is “sum of parts minus the union.”',
      },
      {
        t: 'mcq',
        q: 'For three sets, the number of elements belonging to <b>exactly two</b> of them is:',
        opts: [
          { label: '∑ <i>n</i>(<i>A</i> ∩ <i>B</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>)', nudge: '<b>(A)</b> subtracts the centre only once: counts it twice over.' },
          {
            label: '∑ <i>n</i>(<i>A</i> ∩ <i>B</i>) − 2<i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>)',
            nudge: '<b>(B)</b> is the formula for at least two (centre kept once, not zero).',
          },
          { label: '∑ <i>n</i>(<i>A</i> ∩ <i>B</i>) − 3<i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>)', nudge: null },
          { label: '∑ <i>n</i>(<i>A</i> ∩ <i>B</i>) + <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>)', nudge: '<b>(D)</b> double-counts the centre further.' },
        ],
        correct: 2,
        solution: 'Each pairwise overlap counts the all-three group once, so summing all three pairwise overlaps counts that centre three times; remove all three copies to leave only the “exactly two” regions. The deciding question is always “how many times do I want the centre counted?”: exactly-two → zero, at-least-two → once.',
      },
      {
        t: 'mcq',
        q: 'In two sets with <i>n</i>(<i>A</i>) = 40 and <i>n</i>(<i>A</i> ∩ <i>B</i>) = 15, the number of elements in <b>“<i>A</i> only”</b> is:',
        opts: [
          { label: '40', nudge: '<b>(A)</b> reports all of <i>A</i>, ignoring “only.”' },
          { label: '55', nudge: '<b>(B)</b> adds instead of subtracting.' },
          { label: '25', nudge: null },
          { label: '15', nudge: '<b>(D)</b> reports the overlap itself.' },
        ],
        correct: 2,
        solution: '“<i>A</i> only” excludes the shared part: <i>n</i>(<i>A</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i>) = 40 − 15 = 25. The trap word is <b>only</b>: it always means “remove the overlaps.”',
      },
      {
        t: 'mcq',
        q: 'In the inclusion–exclusion formula for <i>n</i>(<i>A</i> ∪ <i>B</i> ∪ <i>C</i>), the term <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>) appears with which sign and why?',
        opts: [
          { label: 'subtracted once, to remove the centre', nudge: '<b>(A)</b> gets the sign backwards.' },
          {
            label: 'added once, because it is added in the three singles (+3) then removed in the three pairwise overlaps (−3), leaving it uncounted',
            nudge: null,
          },
          { label: 'added three times', nudge: '<b>(C)</b> ignores the cancellation from the pairwise subtractions.' },
          { label: 'it does not appear', nudge: '<b>(D)</b> forgets the centre is part of the union and must be counted exactly once.' },
        ],
        correct: 1,
        solution: 'The centre lies in all three single sets (+3) and in all three pairwise overlaps (−3), so before the final term it is counted 3 − 3 = 0 times; adding it once restores it. This net-count reasoning is the whole logic of the alternating signs.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting to subtract the overlap.</b> <i>n</i>(<i>A</i> ∪ <i>B</i>) = <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) is correct only for disjoint sets. With any overlap you must subtract <i>n</i>(<i>A</i> ∩ <i>B</i>).',
          '<b>Confusing “only <i>A</i>” with “<i>A</i>”.</b> “Only” strips out every overlap; plain “<i>A</i>” keeps them. Re-read the question and underline “only,” “exactly,” “at least,” “neither” before computing.',
          '<b>Mis-signing the three-way term.</b> In the union formula it is <b>added</b>; the alternating pattern is +singles − pairs + triple.',
          '<b>Treating “exactly two” and “at least two” as the same.</b> They differ by exactly one copy of the centre: subtract 3<i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>) for exactly two, 2<i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>) for at least two.',
          '<b>Not sanity-checking against the universe.</b> If a region comes out negative, or the union exceeds <i>n</i>(<i>U</i>), the data is inconsistent; say so rather than forcing an answer.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any fully-specified three-set problem, draw the Venn and <b>fill the centre first, then work outward</b>. Every “only,” “exactly,” and “at least” answer can then be read straight off the labelled regions: no formula recall under exam pressure, and negative regions instantly expose bad data.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Two sets',
            note: '<i>n</i>(<i>A</i> ∪ <i>B</i>) = <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i>); “only <i>A</i>” = <i>n</i>(<i>A</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i>).',
          },
          {
            f: 'Three sets',
            note: '<i>n</i>(<i>A</i> ∪ <i>B</i> ∪ <i>C</i>) = ∑ <i>n</i>(<i>A</i>) − ∑ <i>n</i>(<i>A</i> ∩ <i>B</i>) + <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>) (include – exclude – include).',
          },
          { f: 'None / neither', note: '<i>n</i>(<i>U</i>) − <i>n</i>(union).' },
          { f: 'Exactly one', note: '∑ <i>n</i>(<i>A</i>) − 2∑ <i>n</i>(<i>A</i> ∩ <i>B</i>) + 3<i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>).' },
          {
            f: '<b>Exactly two:</b> ∑ <i>n</i>(<i>A</i> ∩ <i>B</i>) − 3<i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>). <b>At least two:</b> ∑ <i>n</i>(<i>A</i> ∩ <i>B</i>) − 2<i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>).',
            note: '',
          },
          {
            f: 'Partition identities',
            note: 'union = <i>E</i><sub>1</sub> + <i>E</i><sub>2</sub> + <i>E</i><sub>3</sub>; ∑ <i>n</i>(<i>A</i>) = <i>E</i><sub>1</sub> + 2<i>E</i><sub>2</sub> + 3<i>E</i><sub>3</sub> (use when an overlap is unknown).',
          },
        ],
        aids: [
          '“Or = union, and = intersection, only = drop the overlaps.”',
          '“Include, exclude, include”: the signs for one, two, three sets.',
          '“Fill the centre first, then count outward.”',
          '“Exactly-two kills the centre thrice; at-least-two only twice.”',
        ],
      },
    ],
  },
];
