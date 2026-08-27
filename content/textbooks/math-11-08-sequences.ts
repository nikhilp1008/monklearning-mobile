/**
 * Chapter 08 · Sequences and Series. Mathematics, Class 11.
 *
 * Restructured from pages 583 to 683 of the Drona Class 11 Mathematics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md,
 * following math-11-01-sets.ts and math-11-03-trigonometry.ts for voice and
 * density.
 *
 * The source is three documents stacked: a typeset chapter of eight units, a
 * Round 1 Supplement (Unit 9 on growth, decay and the product of a GP, plus
 * Addenda A to E) and a Round 2 Addendum (F and G). Six topics is the schema's
 * ceiling, so the supplementary material is folded into the topic it belongs
 * to rather than given topics of its own:
 *
 *   - Unit 9 sits inside Topic 03. Compound interest, depreciation and the
 *     product identity P²Rⁿ = Sⁿ are all statements about a GP, and the source
 *     itself says the unit "reads as an extension of Unit 3".
 *   - Addendum F (recovering aₙ from Sₙ, the three recurrence shapes, limits of
 *     recursive sequences) sits inside Topic 01, which is where the source
 *     places it: it completes Unit 1's unfinished Procedure 4.
 *   - Addendum G (AM-GM as an optimisation engine) sits inside Topic 04 next to
 *     the A ≥ G ≥ H chain it is built on, and Addendum A (mixed AP-GP-HP chain
 *     problems) sits there too, since every step of a chain problem is one of
 *     the three middle-term equations that topic installs.
 *   - Addenda B, C, D and E (alternating-sign series, products two at a time,
 *     Σr⁴, and the method of differences when the differences form a GP) all
 *     sit inside Topic 05, which is the unit each of them extends.
 *   - Units 6 and 8 share Topic 06. Both are "the term is not a polynomial in
 *     n, so Unit 7 does not apply", and both are solved by rewriting the sum so
 *     that almost everything cancels.
 *
 * Two arithmetic slips in the source, flagged here for whoever goes back to it.
 * Its Unit 3 Example 4 (AIEEE 2008: the first two terms of a GP sum to 12, the
 * third and fourth sum to 48, terms alternately signed) prints the first term
 * as −4, but a(1 + r) = 12 with r = −2 gives a = −12, which is also the
 * official answer. And its Unit 4 practice answer for "insert 3 HMs between 2
 * and 1/2" divides the reciprocal range into three gaps rather than four;
 * Topic 04 uses the source's own Example 4 instead, four HMs between 1 and 1/6,
 * which comes out clean.
 *
 * The exam hook is authored once, on topic 1, with a bold heading per topic,
 * because the reader renders `hook` only there.
 *
 * Six `diagram` blocks, all of the parameterised kinds: three `plot` and three
 * `numberline`. Chips and captions render as plain text, not markup, so they
 * carry no inline tags and use Unicode sub/superscripts instead.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch08Sequences: Chapter = {
  "chapter": "08",
  "title": "Sequences and Series",
  "subject": "Mathematics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Sequences, Series and Sigma",
      "chip": "01 GENERAL TERM",
      "kalam": "feed in the position, get out the term",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Sequences, Series and Sigma</b><br>Rarely tested on its own, silently assumed everywhere. CBSE Boards ask you to write the first few terms from a general term, or to read a general term off a pattern, as 1–2 mark items, and “the sum of <i>n</i> terms is <i>S</i><sub>n</sub> = …, find <i>a</i><sub>n</sub>” is a reliable short answer. JEE Main almost never asks it in isolation, but every AP, GP, AGP and special-series question assumes you can move fluently between the pattern, the general term and the sum. JEE Advanced turns recurrences, nested radicals and continued fractions into fixed-point problems, and the whole difficulty is knowing which root to keep.<br><br><b>02 · Arithmetic Progressions</b><br>Almost guaranteed on the boards. Expect one 2–3 mark short answer (find a term, find <i>n</i>, find the sum) and often a 5-mark word problem on savings, seating or production; the derivation of <i>S</i><sub>n</sub> is a named, directly askable board derivation. JEE Main runs 1–2 questions a paper, favouring ratio-of-sums setups and the <i>S</i><sub>n</sub> = <i>An</i><sup>2</sup> + <i>Bn</i> characterisation. JEE Advanced rarely lets AP stand alone: it turns up fused with logarithms or, in 2019, with set theory, where three APs were intersected as sets.<br><br><b>03 · Geometric Progressions and Growth</b><br>One of the two most heavily tested ideas in the chapter. CBSE reliably sets a short answer on the <i>n</i>th term, the sum or the GM, plus a 5-mark compound-interest, depreciation or bacterial-doubling problem; both the <i>S</i><sub>n</sub> derivation and <i>S</i><sub>∞</sub> are named results. JEE Main asks 1–2 questions on sum to infinity, recurring decimals and <i>b</i><sup>2</sup> = <i>ac</i>, and the identity <i>P</i><sup>2</sup><i>R</i><sup>n</sup> = <i>S</i><sup>n</sup> reappears almost every cycle. JEE Advanced pushes it into nested-figure areas and loan-drawdown problems. <b>The single most punished error in the chapter is writing <i>a</i>/(1 − <i>r</i>) without checking |<i>r</i>| < 1.</b><br><br><b>04 · Harmonic Progression and the Three Means</b><br>The signature board question is <b>“the AM of two numbers is 10 and their GM is 8, find the numbers”</b>, solved through a quadratic, worth 2–3 marks. JEE Main likes “the <i>p</i>th term of an HP is <i>q</i> and the <i>q</i>th is <i>p</i>”, and uses AM ≥ GM as its standard one-line minimum for <i>x</i> + <i>k</i>/<i>x</i>. JEE Advanced wants the full chain <i>A</i> ≥ <i>G</i> ≥ <i>H</i> with its equality condition, weighted AM-GM optimisation, and chain problems that mix all three progressions.<br><br><b>05 · Special Series and Sigma Machinery</b><br>The computational engine of the chapter. CBSE asks you to sum a series like 3 + 7 + 13 + 21 + … or 2 · 4 + 4 · 6 + 6 · 8 + … to <i>n</i> terms for 5 marks, and the derivations of Σ<i>n</i><sup>2</sup> and Σ<i>n</i><sup>3</sup> are named askable results. JEE Main is good for one question a paper; 2020 asked Σ(1 + 2 + ⋯ + <i>k</i>) outright. JEE Advanced adds alternating-sign sums, the identity 9<i>S</i><sub>2</sub><sup>2</sup> = <i>S</i><sub>3</sub>(1 + 8<i>S</i><sub>1</sub>) and the occasional Σ<i>r</i><sup>4</sup>.<br><br><b>06 · Arithmetico-Geometric and Telescoping Series</b><br>Outside the core NCERT board syllabus apart from the Σ1/(<i>r</i>(<i>r</i> + 1)) miscellaneous exercise, and heavily used above it. JEE Main returns to the sum to infinity of 1 + 2<i>x</i> + 3<i>x</i><sup>2</sup> + … and to telescoping sums such as 1/(1 · 4) + 1/(4 · 7) + … almost every year. JEE Advanced hides an AGP inside a harder problem, or asks for a sum that only collapses after partial fractions, rationalising or the <i>V</i><sub>n</sub> method. One technique each: multiply by <i>r</i> and subtract, or write the term as a difference."
        },
        {
          "t": "p",
          "html": "A <b>sequence</b> is an ordered list of numbers that follows a rule. House numbers down one side of a street, the dates of every Sunday this year, the runs scored in each over of a match. What makes it a sequence rather than a heap is that <b>position matters</b>: there is a first term, a second term, a third, and each sits in a fixed slot."
        },
        {
          "t": "p",
          "html": "Say that more precisely and the whole chapter opens up. A sequence is a <b>function whose inputs are the counting numbers</b> 1, 2, 3, … Feed in the position <i>n</i>, get out the term <i>a</i><sub>n</sub>. That single habit, treating the term as a function of its position, is what lets you say “an AP is a straight line” and “a GP is an exponential” later, and it is why a sequence with no formula is still a perfectly good sequence."
        },
        {
          "t": "p",
          "html": "A <b>series</b> is what you get when you stop listing the terms and start adding them up. The sequence 1, 2, 3, 4 becomes the series 1 + 2 + 3 + 4. Watch a match on television: the runs in each over form the sequence, and the score displayed after <i>n</i> overs is the series. Sequences are about the terms, series are about the running total, and confusing <i>a</i><sub>n</sub> with <i>S</i><sub>n</sub> is the root of more AP and GP slips than any other single error."
        },
        {
          "t": "think",
          "html": "position in, term out. that is all a sequence is. and a series is the same list with the reading changed from “what is the fourth term” to “what have i collected so far”."
        },
        {
          "t": "def",
          "term": "Sequence",
          "html": "A function <i>a</i> : ℕ → ℝ, or from a subset of ℕ. Its values <i>a</i><sub>1</sub>, <i>a</i><sub>2</sub>, <i>a</i><sub>3</sub>, … are the <b>terms</b>, and <i>a</i><sub>n</sub> is the <b>general term</b> or <i>n</i>th term. A sequence is <b>not</b> its set of values: 1, 1, 2 is a perfectly good sequence, but as a set it would collapse to {1, 2} and lose both the order and the repetition."
        },
        {
          "t": "def",
          "term": "Series",
          "html": "The sum of the terms of a sequence, <i>a</i><sub>1</sub> + <i>a</i><sub>2</sub> + ⋯ + <i>a</i><sub>n</sub>, written Σ. A <b>finite</b> series stops; an <b>infinite</b> series continues without end, and whether it has a value at all is a separate question the chapter answers only for a GP. The sum of the first <i>n</i> terms is written <i>S</i><sub>n</sub> and is itself a sequence, one term for each <i>n</i>."
        },
        {
          "t": "defgrid",
          "title": "The vocabulary, locked chapter-wide",
          "rows": [
            {
              "k": "Finite · infinite",
              "v": "finitely many terms <i>a</i><sub>1</sub>, …, <i>a</i><sub>m</sub> · unending <i>a</i><sub>1</sub>, <i>a</i><sub>2</sub>, <i>a</i><sub>3</sub>, …"
            },
            {
              "k": "Explicit rule",
              "v": "a formula for <i>a</i><sub>n</sub> directly, e.g. <i>a</i><sub>n</sub> = 2<i>n</i> − 1 gives 1, 3, 5, 7, …"
            },
            {
              "k": "Recursive rule",
              "v": "each term from earlier ones plus seeds, e.g. <i>a</i><sub>1</sub> = <i>a</i><sub>2</sub> = 1, <i>a</i><sub>n</sub> = <i>a</i><sub>n−1</sub> + <i>a</i><sub>n−2</sub>"
            },
            {
              "k": "<i>a</i><sub>n</sub> versus <i>S</i><sub>n</sub>",
              "v": "the <i>n</i>th term versus the sum of the first <i>n</i> terms. Never the same object."
            },
            {
              "k": "Partial range",
              "v": "Σ from <i>m</i> to <i>n</i> equals Σ from 1 to <i>n</i> minus Σ from 1 to <i>m</i> − 1"
            },
            {
              "k": "General term",
              "v": "must hold for <b>all</b> <i>n</i>. A pattern fitted to three terms is a conjecture until the rule is stated."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "SIGMA NOTATION AND ITS THREE RULES",
          "tag": "shorthand for addition, nothing more",
          "main": "Σ<sub>k=1</sub><sup>n</sup> a<sub>k</sub> = a<sub>1</sub> + a<sub>2</sub> + ⋯ + a<sub>n</sub>",
          "legend": [
            "Σ(<i>a</i><sub>k</sub> + <i>b</i><sub>k</sub>) = Σ<i>a</i><sub>k</sub> + Σ<i>b</i><sub>k</sub>, provided both run over the same index range",
            "Σ<i>c a</i><sub>k</sub> = <i>c</i> Σ<i>a</i><sub>k</sub>, a constant slides out through the sum",
            "Σ<i>c</i> = <i>cn</i>, because a constant added <i>n</i> times is <i>cn</i>, not <i>c</i>"
          ],
          "note": "The lower limit need not be 1. When it is not, do not bend the standard formulas: compute Σ from 1 to n and subtract Σ from 1 to m − 1. Expanding a small Σ by hand is never a waste of time when you are unsure."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · A SEQUENCE IS A FUNCTION OF ITS POSITION",
          "mathChips": true,
          "chips": ["aₙ = 2n − 1", "aₙ = n(n + 2)", "aₙ = (n² − 1)/(n² + 1)"],
          "captions": [
            "Position along the horizontal axis, term up the vertical. The dots are the sequence 1, 3, 5, 7, 9, 11 and the dashed curve is the function y = 2x − 1 they were read off. Only the whole-number inputs exist, which is why a sequence is a row of dots and never a continuous line.",
            "The same reading for 3, 8, 15, 24, 35. First differences 5, 7, 9, 11 grow by a constant 2, so the dots sit on a parabola and the general term is quadratic. Differences constant means linear, second differences constant means quadratic: that is the whole pattern-reading rule.",
            "Here the dots creep towards the soft line y = 1 without ever arriving. Numerator and denominator both grow like n², so the ratio settles at 1. Reading a sequence as a function is what makes a question about its long-run behaviour askable at all."
          ],
          "frames": [
            {
              "x": [0, 7],
              "y": [0, 12.5],
              "curves": [{ "c": "poly", "coeffs": [-1, 2], "soft": true, "dash": true }],
              "points": [
                { "x": 1, "y": 1, "label": "a₁" },
                { "x": 2, "y": 3 },
                { "x": 3, "y": 5 },
                { "x": 4, "y": 7 },
                { "x": 5, "y": 9 },
                { "x": 6, "y": 11, "label": "a₆" }
              ]
            },
            {
              "x": [0, 6],
              "y": [0, 40],
              "curves": [{ "c": "poly", "coeffs": [0, 2, 1], "soft": true, "dash": true }],
              "points": [
                { "x": 1, "y": 3, "label": "3" },
                { "x": 2, "y": 8 },
                { "x": 3, "y": 15 },
                { "x": 4, "y": 24 },
                { "x": 5, "y": 35, "label": "35" }
              ]
            },
            {
              "x": [0, 11],
              "y": [0, 1.25],
              "curves": [{ "c": "line", "m": 0, "k": 1, "soft": true, "dash": true }],
              "points": [
                { "x": 1, "y": 0 },
                { "x": 2, "y": 0.6 },
                { "x": 3, "y": 0.8 },
                { "x": 4, "y": 0.882 },
                { "x": 5, "y": 0.923 },
                { "x": 6, "y": 0.946 },
                { "x": 8, "y": 0.969 },
                { "x": 10, "y": 0.98 }
              ],
              "labels": [{ "x": 8.5, "y": 1.13, "text": "terms approach 1", "soft": true }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "RECOVERING THE TERM FROM THE SUM",
          "tag": "one subtraction, one test",
          "main": "a<sub>1</sub> = S<sub>1</sub> · a<sub>n</sub> = S<sub>n</sub> − S<sub>n−1</sub> (n ≥ 2)",
          "legend": [
            "the sum of the first <i>n</i> terms minus the sum of the first <i>n</i> − 1 leaves exactly the <i>n</i>th term",
            "there is no <i>S</i><sub>0</sub>, so the subtraction is illegal at <i>n</i> = 1 and <i>a</i><sub>1</sub> must be read off separately",
            "always test the <i>n</i> ≥ 2 formula at <i>n</i> = 1: if it reproduces <i>S</i><sub>1</sub>, one formula covers every term"
          ],
          "note": "Nothing here needs S<sub>n</sub> to be a polynomial. The same subtraction works on S<sub>n</sub> = 3<sup>n</sup> − 1 and on S<sub>n</sub> = n/(n + 1). Two diagnostics fall out: the sequence is an AP from its first term exactly when S<sub>n</sub> is quadratic with zero constant term, and a GP from its first term exactly when S<sub>n</sub> has the shape λ(r<sup>n</sup> − 1)."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · AN AFFINE RECURRENCE IS A GP IN DISGUISE, TAP A LINE",
          "steps": [
            {
              "eq": "a<sub>n+1</sub> = p a<sub>n</sub> + q, with p ≠ 1",
              "why": "The shape that covers almost every recurrence Class 11 and JEE Main ask about. Unfolding it by hand gives terms but never a closed form, which is where students stall."
            },
            {
              "eq": "find the fixed point: L = pL + q ⇒ L = q / (1 − p)",
              "why": "L is the one value the recurrence leaves alone: feed L in, L comes back out. It exists whenever p ≠ 1, which is exactly the case being treated."
            },
            {
              "eq": "measure from L instead of from 0: put b<sub>n</sub> = a<sub>n</sub> − L",
              "why": "The recurrence is not about the terms, it is about their distance from L. Shifting the origin is the entire trick."
            },
            {
              "eq": "b<sub>n+1</sub> = (p a<sub>n</sub> + q) − (pL + q) = p(a<sub>n</sub> − L) = p b<sub>n</sub>",
              "why": "The constant q cancels against itself, because L was chosen to make it. What is left is a plain GP with common ratio p."
            },
            {
              "eq": "a<sub>n</sub> = (a<sub>1</sub> − L)p<sup>n−1</sup> + L",
              "why": "The nth term of that GP, shifted back. Read the shape: every affine recurrence produces a power plus a constant, so if an option list has nothing of that form you have misread the recurrence. It also settles the limit: a<sub>n</sub> → L if and only if |p| < 1, the same threshold that governs S<sub>∞</sub> for a GP."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Reading a pattern into a general term",
          "steps": [
            "<b>Write the position under each term first.</b> Every question in this chapter is “what does the term do as a function of <i>n</i>”, and you cannot answer it without <i>n</i> written down.",
            "<b>Take first differences.</b> Constant ⇒ <i>a</i><sub>n</sub> is linear, <i>a</i><sub>n</sub> = <i>An</i> + <i>B</i>, and the sequence is an AP with <i>d</i> = <i>A</i>.",
            "<b>Take second differences.</b> Constant ⇒ <i>a</i><sub>n</sub> is quadratic. Fit <i>An</i><sup>2</sup> + <i>Bn</i> + <i>C</i> to the first three terms.",
            "<b>Take ratios.</b> Constant ⇒ the sequence is a GP and <i>a</i><sub>n</sub> carries an exponential <i>r</i><sup>n</sup>. Differences in GP also force an exponential, never a polynomial.",
            "<b>Verify on a term you did not use.</b> A rule fitted to three terms and checked on none is a guess. This one line is the difference between a general term and a coincidence."
          ]
        },
        {
          "t": "proc",
          "title": "When the sequence arrives indirectly",
          "steps": [
            "<b>Given <i>S</i><sub>n</sub>.</b> Subtract: <i>a</i><sub>n</sub> = <i>S</i><sub>n</sub> − <i>S</i><sub>n−1</sub> for <i>n</i> ≥ 2, then compute <i>a</i><sub>1</sub> = <i>S</i><sub>1</sub> and test the formula at <i>n</i> = 1. If it fails, the answer is genuinely two-piece and you must say so.",
            "<b>Given <i>a</i><sub>n+1</sub> = <i>a</i><sub>n</sub> + <i>f</i>(<i>n</i>).</b> Telescope: <i>a</i><sub>n</sub> = <i>a</i><sub>1</sub> + Σ<i>f</i>(<i>k</i>) for <i>k</i> = 1 to <i>n</i> − 1, then sum the right side with the tools of Topic 05.",
            "<b>Given <i>a</i><sub>n+1</sub> = <i>p a</i><sub>n</sub> + <i>q</i>.</b> Find the fixed point <i>L</i> = <i>q</i>/(1 − <i>p</i>) and write <i>a</i><sub>n</sub> = (<i>a</i><sub>1</sub> − <i>L</i>)<i>p</i><sup>n−1</sup> + <i>L</i>.",
            "<b>Given an infinite radical or fraction.</b> Build the recursion, then set <i>L</i> = <i>f</i>(<i>L</i>) and solve. This equation says what the limit <i>must</i> be <i>if</i> one exists; it never proves one does.",
            "<b>Kill the wrong root on grounds, not on taste.</b> Positivity, an upper bound, monotonicity: name the reason. Every one of these fixed-point equations is a quadratic with two roots, and the mark is for rejecting one of them properly."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Write the first four terms of the sequence <i>a</i><sub>n</sub> = (2<i>n</i> − 3)/4.",
          "steps": [
            "Substitute <i>n</i> = 1, 2, 3, 4 in turn. There is nothing more to it: the general term is a machine and you are feeding it positions.",
            "(2 − 3)/4 = −1/4, (4 − 3)/4 = 1/4, (6 − 3)/4 = 3/4, (8 − 3)/4 = 5/4.",
            "Notice the terms rise by a constant 1/2, so this is an AP with <i>d</i> = 1/2, a preview of Topic 02."
          ],
          "ans": "−1/4, 1/4, 3/4, 5/4"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A series has <i>S</i><sub>n</sub> = 3<sup>n</sup> − 1. Find <i>a</i><sub>n</sub> and name the progression.",
          "steps": [
            "For <i>n</i> ≥ 2: <i>a</i><sub>n</sub> = (3<sup>n</sup> − 1) − (3<sup>n−1</sup> − 1) = 3<sup>n−1</sup>(3 − 1) = 2 · 3<sup>n−1</sup>.",
            "Test at <i>n</i> = 1: the formula gives 2, and <i>a</i><sub>1</sub> = <i>S</i><sub>1</sub> = 3 − 1 = 2. They agree, so one formula covers every term.",
            "That is a GP with <i>a</i> = 2 and <i>r</i> = 3. Nothing in the method needed <i>S</i><sub>n</sub> to be a polynomial."
          ],
          "ans": "a<sub>n</sub> = 2 · 3<sup>n−1</sup>, a GP"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find a closed form for <i>a</i><sub>1</sub> = 2, <i>a</i><sub>n</sub> = 3<i>a</i><sub>n−1</sub> + 1.",
          "steps": [
            "Affine shape with <i>p</i> = 3, <i>q</i> = 1. Fixed point <i>L</i> = 1/(1 − 3) = −1/2.",
            "<i>a</i><sub>1</sub> − <i>L</i> = 2 + 1/2 = 5/2, so <i>a</i><sub>n</sub> = (5/2)3<sup>n−1</sup> − 1/2.",
            "Check against the unfolded terms 2, 7, 22, 67, 202: (5 − 1)/2 = 2, (15 − 1)/2 = 7, (45 − 1)/2 = 22. ✓"
          ],
          "ans": "a<sub>n</sub> = (5 · 3<sup>n−1</sup> − 1)/2"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Evaluate the nested radical √(6 + √(6 + √(6 + ⋯))), justifying that it exists.",
          "steps": [
            "Build the recursion: <i>a</i><sub>1</sub> = √6 and <i>a</i><sub>n+1</sub> = √(6 + <i>a</i><sub>n</sub>). The value asked for is the limit.",
            "Bounded above: if <i>a</i><sub>n</sub> < 3 then <i>a</i><sub>n+1</sub> = √(6 + <i>a</i><sub>n</sub>) < √9 = 3, and <i>a</i><sub>1</sub> = √6 < 3, so every term is below 3.",
            "Increasing: <i>a</i><sub>n+1</sub> > <i>a</i><sub>n</sub> is equivalent to (<i>a</i><sub>n</sub> − 3)(<i>a</i><sub>n</sub> + 2) < 0, true for 0 < <i>a</i><sub>n</sub> < 3. Increasing and bounded above, so it converges.",
            "Now pass to the limit: <i>L</i><sup>2</sup> = 6 + <i>L</i> gives (<i>L</i> − 3)(<i>L</i> + 2) = 0. Every term is positive, so −2 is rejected on grounds."
          ],
          "ans": "the radical equals 3"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Write the first three terms of <i>a</i><sub>n</sub> = (−1)<sup>n−1</sup> 5<sup>n+1</sup>.",
              "a": "n = 1: (+1)5² = 25. n = 2: (−1)5³ = −125. n = 3: (+1)5⁴ = 625. The sign factor alternates, it does not grow."
            },
            {
              "q": "[CBSE] A series has <i>S</i><sub>n</sub> = 5<i>n</i><sup>2</sup> + 3<i>n</i>. Find <i>a</i><sub>n</sub> and say whether the series is an AP from its first term.",
              "a": "For n ≥ 2, aₙ = (5n² + 3n) − (5(n−1)² + 3(n−1)) = 10n − 2. At n = 1 that gives 8, and S₁ = 8 too, so one formula covers everything. Yes, an AP with a = 8, d = 10: the constant term of Sₙ is zero."
            },
            {
              "q": "[CBSE] A series has <i>S</i><sub>n</sub> = <i>n</i><sup>2</sup> + 5. Find <i>a</i><sub>1</sub>, find <i>a</i><sub>n</sub> for <i>n</i> ≥ 2, and write the first four terms.",
              "a": "a₁ = S₁ = 6. For n ≥ 2, aₙ = n² − (n−1)² = 2n − 1, which gives 3 at n = 1 and does not match. Terms: 6, 3, 5, 7. Not an AP, and the constant 5 in Sₙ is exactly what breaks it."
            },
            {
              "q": "[JEE Main] Find the closed form of <i>a</i><sub>1</sub> = 1, <i>a</i><sub>n+1</sub> = 4<i>a</i><sub>n</sub> + 3, and hence <i>a</i><sub>5</sub>.",
              "a": "L = 3/(1 − 4) = −1, so aₙ = (1 + 1)4ⁿ⁻¹ − 1 = 2 · 4ⁿ⁻¹ − 1. Then a₅ = 2(256) − 1 = 511."
            },
            {
              "q": "[JEE Main] A series has <i>S</i><sub>n</sub> = <i>n</i>/(<i>n</i> + 1). Find <i>a</i><sub>n</sub>.",
              "a": "aₙ = n/(n+1) − (n−1)/n = [n² − (n−1)(n+1)]/(n(n+1)) = 1/(n(n+1)), valid at n = 1 as well. This is the telescoping series of Topic 06 read backwards."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The general term of 2, 5, 10, 17, 26, … is:",
          "correct": 0,
          "opts": [
            {
              "label": "<i>n</i><sup>2</sup> + 1",
              "nudge": null
            },
            {
              "label": "2<i>n</i> + 1",
              "nudge": "A linear term forces constant first differences. Here they are 3, 5, 7, 9, which grow, so no linear rule can fit."
            },
            {
              "label": "<i>n</i><sup>2</sup> + <i>n</i>",
              "nudge": "Right degree, wrong constant: this gives 2, 6, 12 and already fails at n = 2. Checking one term past the fit would have caught it."
            },
            {
              "label": "3<i>n</i> − 1",
              "nudge": "Matches only the second term. Fitting a rule to one lucky value is the classic pattern-overfit."
            }
          ],
          "solution": "The terms are 1 + 1, 4 + 1, 9 + 1, 16 + 1, 25 + 1, so a<sub>n</sub> = n<sup>2</sup> + 1. Second differences are constant at 2, which is the signature of a quadratic general term."
        },
        {
          "t": "mcq",
          "q": "Σ<sub>k=1</sub><sup>3</sup> <i>k</i>(<i>k</i> + 1) equals:",
          "correct": 2,
          "opts": [
            {
              "label": "1 + 2 + 3 = 6",
              "nudge": "This sums the index k and ignores the summand k(k + 1) written next to it."
            },
            {
              "label": "1 + 4 + 9 = 14",
              "nudge": "This sums k², reading the product k(k + 1) as if the second factor were another k."
            },
            {
              "label": "2 + 6 + 12 = 20",
              "nudge": null
            },
            {
              "label": "2 + 6 + 12 + 20 = 40",
              "nudge": "One term too many: the upper limit is 3, so k stops at 3 and there is no k = 4 term."
            }
          ],
          "solution": "Substitute each index in the summand and add: 1 · 2 + 2 · 3 + 3 · 4 = 2 + 6 + 12 = 20. Reading the index range and the summand exactly is the entire skill here."
        },
        {
          "q": "A series has <i>S</i><sub>n</sub> = <i>n</i><sup>2</sup> + 2<i>n</i> + 3. Its first term is:",
          "t": "mcq",
          "correct": 1,
          "opts": [
            {
              "label": "3",
              "nudge": "This uses the n ≥ 2 formula a<sub>n</sub> = 2n + 1 at n = 1, which is exactly the step the method forbids: there is no S<sub>0</sub> to subtract."
            },
            {
              "label": "6",
              "nudge": null
            },
            {
              "label": "5",
              "nudge": "That is a<sub>2</sub>, from the n ≥ 2 formula at n = 2. The question asks for the first term."
            },
            {
              "label": "1",
              "nudge": "This reads the leading coefficient of S<sub>n</sub> rather than evaluating it. S<sub>1</sub> is a number, not a coefficient."
            }
          ],
          "solution": "a<sub>1</sub> = S<sub>1</sub> = 1 + 2 + 3 = 6, read straight off the definition. For n ≥ 2 the subtraction gives a<sub>n</sub> = 2n + 1, which disagrees at n = 1, so the sequence is genuinely two-piece: 6, 5, 7, 9, 11, … The non-zero constant 3 in S<sub>n</sub> is what breaks it."
        },
        {
          "t": "mcq",
          "q": "Let <i>a</i><sub>1</sub> = 3 and <i>a</i><sub>n+1</sub> = 3<i>a</i><sub>n</sub> − 4. Then <i>a</i><sub>n</sub> as <i>n</i> grows:",
          "correct": 3,
          "opts": [
            {
              "label": "tends to 2",
              "nudge": "This solves L = 3L − 4 and stops. That equation says what the limit would have to be if one existed; it never shows that one does."
            },
            {
              "label": "tends to 3",
              "nudge": "3 is the first term, not a fixed point: feed 3 in and 5 comes out, so the sequence has already left."
            },
            {
              "label": "tends to 0",
              "nudge": "Nothing here shrinks. Every term is bigger than the one before, since a<sub>2</sub> = 5 > a<sub>1</sub> = 3 and the gap is multiplied by 3 each step."
            },
            {
              "label": "does not tend to a limit",
              "nudge": null
            }
          ],
          "solution": "Fixed point L = −4/(1 − 3) = 2, and a<sub>1</sub> − L = 1, so a<sub>n</sub> = 3<sup>n−1</sup> + 2, which runs away to infinity. The distance to the fixed point is multiplied by p = 3 every step, and convergence needs |p| < 1. This is the same threshold as |r| < 1 for a GP's sum to infinity, in a different disguise."
        },
        {
          "t": "mistakes",
          "items": [
            "Confusing <b><i>a</i><sub>n</sub> with <i>S</i><sub>n</sub></b>. The <i>n</i>th term and the sum of the first <i>n</i> terms are different objects, and almost every AP and GP slip downstream traces back to this one.",
            "Using <b><i>a</i><sub>n</sub> = <i>S</i><sub>n</sub> − <i>S</i><sub>n−1</sub> at <i>n</i> = 1</b>. There is no <i>S</i><sub>0</sub>. Compute <i>a</i><sub>1</sub> = <i>S</i><sub>1</sub> separately, then test whether the general formula happens to agree.",
            "Declaring a general term from three terms without checking a fourth. A pattern is a <b>conjecture</b> until the rule holds for every <i>n</i>.",
            "Misreading the limits of Σ. Starting at 1 when the sum starts at 2, or running one term past the upper limit, changes the answer and costs the whole mark.",
            "Treating a sequence as a <b>set</b>. Order and repetition are the point: 1, 1, 2 is not {1, 2}.",
            "Quoting <i>L</i> = <i>f</i>(<i>L</i>) as a limit without checking that a limit exists. A fixed point can be one the terms run away from."
          ]
        },
        {
          "t": "protip",
          "html": "always write the general term first, then decide what to do with it: list, sum, or test for AP or GP. and when a question hands you <i>S</i><sub>n</sub>, subtract, then check the formula at <i>n</i> = 1 before you write anything down. it costs five seconds and it is where the mark is."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "a : ℕ → ℝ, terms a₁, a₂, …",
              "note": "position in, term out"
            },
            {
              "f": "Σ from 1 to n of a_k = a₁ + ⋯ + a_n",
              "note": "series is the running total, not the terms"
            },
            {
              "f": "Σ(a+b) = Σa + Σb · Σca = cΣa · Σc = cn",
              "note": "same index range on every piece"
            },
            {
              "f": "a<sub>1</sub> = S<sub>1</sub> · a<sub>n</sub> = S<sub>n</sub> − S<sub>n−1</sub>, n ≥ 2",
              "note": "then test the formula at n = 1"
            },
            {
              "f": "a<sub>n+1</sub> = p a<sub>n</sub> + q ⇒ a<sub>n</sub> = (a<sub>1</sub> − L)p<sup>n−1</sup> + L",
              "note": "L = q/(1 − p), converges iff |p| < 1"
            }
          ],
          "aids": [
            "“term first, then decide what to do with it”",
            "“no S zero, so read a₁ off by hand”"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Arithmetic Progressions",
      "chip": "02 AP",
      "kalam": "same step every time, so a straight line",
      "blocks": [
        {
          "t": "p",
          "html": "An arithmetic progression is the mathematics of <b>adding the same step, over and over</b>. Picture a staircase where every step is exactly the same height. You start at floor level <i>a</i>. Each step lifts you by the same amount <i>d</i>. After one step you are at <i>a</i> + <i>d</i>, after two at <i>a</i> + 2<i>d</i>, after (<i>n</i> − 1) steps at <i>a</i> + (<i>n</i> − 1)<i>d</i>. That last expression <b>is</b> the <i>n</i>th-term formula, and you have derived it by climbing."
        },
        {
          "t": "p",
          "html": "The single defining property is that <b>the gap between consecutive terms never changes</b>. That constant gap is the <b>common difference</b> <i>d</i> = <i>a</i><sub>2</sub> − <i>a</i><sub>1</sub> = <i>a</i><sub>3</sub> − <i>a</i><sub>2</sub> = ⋯ Everyday examples are everywhere: an auto fare of ₹25 for the first kilometre and ₹15 for each one after; a cinema whose front row seats 20 and every row behind seats 2 more; a monthly saving of ₹500 that goes up by ₹50 each month."
        },
        {
          "t": "p",
          "html": "Install one image early and most of this topic becomes obvious: <b>an AP is linear</b>. Plot <i>a</i><sub>n</sub> against <i>n</i> and you get points on a straight line of slope <i>d</i>. Equidistant terms averaging out, three-term symmetry, the sum coming out quadratic: these are not five separate facts to memorise, they are five facts about straight lines wearing different clothes."
        },
        {
          "t": "think",
          "html": "a is where you start, d is the size of one step, and (n − 1) is how many steps you have actually taken. the off-by-one is not a rule, it is a count: the first term costs you no steps at all."
        },
        {
          "t": "def",
          "term": "Arithmetic progression",
          "html": "A sequence <i>a</i><sub>1</sub>, <i>a</i><sub>2</sub>, <i>a</i><sub>3</sub>, … is an <b>AP</b> if <i>a</i><sub>k</sub> − <i>a</i><sub>k−1</sub> = <i>d</i>, the same constant, for every <i>k</i> ≥ 2. <b><i>d</i> may be any real number</b>: positive gives an increasing AP, negative a decreasing one, zero a constant one. Never quietly assume <i>d</i> > 0, because “find the first negative term” questions live entirely in the case you would have ruled out."
        },
        {
          "t": "defgrid",
          "title": "Notation, fixed for the rest of the chapter",
          "rows": [
            {
              "k": "<i>a</i>",
              "v": "the first term, also written <i>a</i><sub>1</sub>"
            },
            {
              "k": "<i>d</i>",
              "v": "the common difference, any real number"
            },
            {
              "k": "<i>a</i><sub>n</sub>",
              "v": "the <i>n</i>th term. JEE texts also write <i>t</i><sub>n</sub> or <i>T</i><sub>n</sub>"
            },
            {
              "k": "<i>S</i><sub>n</sub> · <i>l</i>",
              "v": "the sum of the first <i>n</i> terms · the last term"
            },
            {
              "k": "<i>A</i><sub>1</sub>, …, <i>A</i><sub>m</sub>",
              "v": "arithmetic means inserted between two given numbers"
            },
            {
              "k": "<i>n</i> ∈ ℕ",
              "v": "every formula counts whole terms. A fractional or negative <i>n</i> from your algebra means “no such term”, not a term."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE TWO CORE FORMULAS",
          "tag": "one term, one sum",
          "main": "a<sub>n</sub> = a + (n − 1)d",
          "legend": [
            "counting from the end instead: <i>a</i>′<sub>n</sub> = <i>l</i> − (<i>n</i> − 1)<i>d</i>, useful when the last term is the one you are given",
            "<i>S</i><sub>n</sub> = (<i>n</i>/2)[2<i>a</i> + (<i>n</i> − 1)<i>d</i>] = (<i>n</i>/2)(<i>a</i> + <i>l</i>)",
            "the second form is faster whenever the last term is known or can be paired off"
          ],
          "note": "The most frequent error in the whole chapter is writing a + nd for the nth term. Say “n minus one” out loud every time: the first term has taken no steps."
        },
        {
          "t": "formula",
          "kicker": "ARITHMETIC MEANS",
          "tag": "the middle of an AP is its average",
          "main": "a, b, c in AP ⇔ 2b = a + c",
          "legend": [
            "so <i>b</i> = (<i>a</i> + <i>c</i>)/2, the arithmetic mean of its two neighbours",
            "inserting <i>m</i> AMs between <i>a</i> and <i>b</i> makes <i>m</i> + 1 gaps, so <i>d</i> = (<i>b</i> − <i>a</i>)/(<i>m</i> + 1) and <i>A</i><sub>k</sub> = <i>a</i> + <i>kd</i>",
            "their total is Σ<i>A</i><sub>k</sub> = <i>m</i>(<i>a</i> + <i>b</i>)/2, that is <i>m</i> times the single AM of the endpoints"
          ],
          "note": "The three-term test 2a<sub>2</sub> = a<sub>1</sub> + a<sub>3</sub> holds for any three consecutive terms and needs no knowledge of a or d, which is why it is the fastest way to answer “are these in AP”."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · AN AP IS A STRAIGHT LINE ON ℕ",
          "mathChips": true,
          "chips": ["d = 2", "d = −2", "d = 0", "S₆"],
          "captions": [
            "The AP 3, 5, 7, 9, 11, 13 plotted against position. The dots sit on the dashed line y = 2x + 1, whose slope is exactly the common difference. Every property of an AP below is a property of this line.",
            "The same picture with d = −2: 13, 11, 9, 7, 5, 3, 1, −1. A negative common difference tilts the line down, and the eighth term is the first to fall below the axis. That is what a first-negative-term question is really asking you to read.",
            "With d = 0 the line is flat and every term is 7. A constant sequence is a perfectly legal AP, and any argument that silently divides by d has just lost this case.",
            "Sₙ is the total height of the bars, and pairing them outside-in makes it easy: 3 with 13, 5 with 11, 7 with 9, three pairs of 16. That is Gauss's trick, and it gives S₆ = (6/2)(3 + 13) = 48."
          ],
          "frames": [
            {
              "x": [0, 7],
              "y": [0, 15],
              "curves": [{ "c": "line", "m": 2, "k": 1, "soft": true, "dash": true }],
              "points": [
                { "x": 1, "y": 3, "label": "a₁" },
                { "x": 2, "y": 5 },
                { "x": 3, "y": 7 },
                { "x": 4, "y": 9 },
                { "x": 5, "y": 11 },
                { "x": 6, "y": 13, "label": "a₆" }
              ]
            },
            {
              "x": [0, 9],
              "y": [-3, 15],
              "curves": [{ "c": "line", "m": -2, "k": 15, "soft": true, "dash": true }],
              "points": [
                { "x": 1, "y": 13, "label": "a₁" },
                { "x": 2, "y": 11 },
                { "x": 3, "y": 9 },
                { "x": 4, "y": 7 },
                { "x": 5, "y": 5 },
                { "x": 6, "y": 3 },
                { "x": 7, "y": 1 },
                { "x": 8, "y": -1, "label": "a₈ < 0" }
              ]
            },
            {
              "x": [0, 7],
              "y": [0, 15],
              "curves": [{ "c": "line", "m": 0, "k": 7, "soft": true, "dash": true }],
              "points": [
                { "x": 1, "y": 7, "label": "a₁" },
                { "x": 2, "y": 7 },
                { "x": 3, "y": 7 },
                { "x": 4, "y": 7 },
                { "x": 5, "y": 7 },
                { "x": 6, "y": 7 }
              ]
            },
            {
              "x": [0, 7],
              "y": [0, 15],
              "curves": [{ "c": "line", "m": 2, "k": 1, "soft": true, "dash": true }],
              "bands": [
                { "x0": 0.6, "x1": 1.4, "y0": 0, "y1": 3 },
                { "x0": 1.6, "x1": 2.4, "y0": 0, "y1": 5 },
                { "x0": 2.6, "x1": 3.4, "y0": 0, "y1": 7 },
                { "x0": 3.6, "x1": 4.4, "y0": 0, "y1": 9 },
                { "x0": 4.6, "x1": 5.4, "y0": 0, "y1": 11 },
                { "x0": 5.6, "x1": 6.4, "y0": 0, "y1": 13 }
              ],
              "points": [
                { "x": 1, "y": 3 },
                { "x": 2, "y": 5 },
                { "x": 3, "y": 7 },
                { "x": 4, "y": 9 },
                { "x": 5, "y": 11 },
                { "x": 6, "y": 13 }
              ],
              "labels": [{ "x": 3.5, "y": 14.2, "text": "S₆ = 3 × 16 = 48" }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE GAUSS REVERSAL, TAP A LINE",
          "steps": [
            {
              "eq": "S<sub>n</sub> = a + (a + d) + ⋯ + (a + (n − 1)d)",
              "why": "Write the sum forwards. This is the ten-year-old Gauss's problem of adding 1 to 100, and the trick he reputedly used is the one below."
            },
            {
              "eq": "S<sub>n</sub> = (a + (n − 1)d) + ⋯ + (a + d) + a",
              "why": "Write the same sum backwards. Addition does not care about order, so this is the identical number, written in reverse."
            },
            {
              "eq": "add column by column: each column gives 2a + (n − 1)d",
              "why": "Column k contributes a + (k − 1)d from the top row and a + (n − k)d from the bottom. The d terms add to (n − 1)d whatever k is, so every column is the same. That is the first-plus-last identity."
            },
            {
              "eq": "2S<sub>n</sub> = n[2a + (n − 1)d]",
              "why": "There are n identical columns. Nothing has been assumed about the sign of d or about n beyond it being a whole number."
            },
            {
              "eq": "S<sub>n</sub> = (n/2)[2a + (n − 1)d] = (n/2)(a + l)",
              "why": "Halve, and recognise a + (n − 1)d as the last term l. Expanding the first form gives S<sub>n</sub> = (d/2)n² + (a − d/2)n, which is a quadratic in n with zero constant term. That is the characterisation used everywhere below."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE SUM CHARACTERISATION",
          "tag": "JEE Main's favourite one-liner",
          "main": "S<sub>n</sub> = An<sup>2</sup> + Bn ⇔ the sequence is an AP",
          "legend": [
            "and then <i>d</i> = 2<i>A</i>, <i>a</i><sub>1</sub> = <i>A</i> + <i>B</i>. The coefficient of <i>n</i><sup>2</sup> is <b>half</b> the common difference, not the difference",
            "equivalently: a sequence is an AP exactly when <i>a</i><sub>n</sub> is <b>linear</b> in <i>n</i>, and then <i>d</i> is the coefficient of <i>n</i>",
            "ratio of the <i>m</i>th terms of two APs = ratio of their sums at <i>n</i> = 2<i>m</i> − 1"
          ],
          "note": "The constant term must be zero. If S<sub>n</sub> = An<sup>2</sup> + Bn + c with c ≠ 0 the sequence is not an AP; only its terms from the second onward are. This is the single most common trap on this formula."
        },
        {
          "t": "proc",
          "title": "Choosing terms symmetrically",
          "steps": [
            "<b>When a problem gives you a sum</b>, place the terms symmetrically about the middle so the <i>d</i> terms cancel. This turns two unknowns into one and is worth doing before any algebra.",
            "<b>Three terms:</b> <i>a</i> − <i>d</i>, <i>a</i>, <i>a</i> + <i>d</i>. Their sum is 3<i>a</i>, so <i>a</i> falls out in one line.",
            "<b>Four terms:</b> <i>a</i> − 3<i>d</i>, <i>a</i> − <i>d</i>, <i>a</i> + <i>d</i>, <i>a</i> + 3<i>d</i>. Sum 4<i>a</i>, but the common difference of this list is <b>2<i>d</i></b>, not <i>d</i>. Forgetting that is a standard slip.",
            "<b>Five terms:</b> <i>a</i> − 2<i>d</i>, <i>a</i> − <i>d</i>, <i>a</i>, <i>a</i> + <i>d</i>, <i>a</i> + 2<i>d</i>, sum 5<i>a</i>.",
            "<b>When a problem gives you specific terms instead</b>, stay with <i>a</i> + (<i>n</i> − 1)<i>d</i>. Symmetric placing helps with sums and gets in the way otherwise."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the 28th term of the AP 20, 19¼, 18½, 17¾, … and its first negative term.",
          "steps": [
            "<i>a</i> = 20 and <i>d</i> = 19¼ − 20 = −3/4. The negative <i>d</i> is the whole point of the question.",
            "<i>a</i><sub>28</sub> = 20 + 27(−3/4) = 20 − 81/4 = −1/4.",
            "First negative term: 20 − (3/4)(<i>n</i> − 1) < 0 ⇒ 80 − 3(<i>n</i> − 1) < 0 ⇒ <i>n</i> > 27⅔. Since <i>n</i> ∈ ℕ we round <b>up</b>, not off."
          ],
          "ans": "a<sub>28</sub> = −1/4, and it is itself the first negative term"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "In an AP, <i>a</i><sub>1</sub> + <i>a</i><sub>5</sub> + <i>a</i><sub>10</sub> + <i>a</i><sub>15</sub> + <i>a</i><sub>20</sub> + <i>a</i><sub>24</sub> = 225. Find <i>S</i><sub>24</sub>.",
          "steps": [
            "Use the equidistant property: terms the same distance from the two ends have the same sum, so <i>a</i><sub>1</sub> + <i>a</i><sub>24</sub> = <i>a</i><sub>5</sub> + <i>a</i><sub>20</sub> = <i>a</i><sub>10</sub> + <i>a</i><sub>15</sub>.",
            "The six given terms are three copies of that same sum: 3(<i>a</i><sub>1</sub> + <i>a</i><sub>24</sub>) = 225, so <i>a</i><sub>1</sub> + <i>a</i><sub>24</sub> = 75.",
            "<i>S</i><sub>24</sub> = (24/2)(<i>a</i><sub>1</sub> + <i>a</i><sub>24</sub>) = 12 × 75. Neither <i>a</i> nor <i>d</i> was ever needed: the linearity did the work."
          ],
          "ans": "S<sub>24</sub> = 900"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "The sums of <i>n</i> terms of two APs are in the ratio (7<i>n</i> + 1) : (4<i>n</i> + 17). Find the ratio of their 24th terms.",
          "steps": [
            "The standard device: the ratio of the <i>m</i>th terms equals the ratio of the sums evaluated at <i>n</i> = 2<i>m</i> − 1.",
            "Why: <i>S</i><sub>2m−1</sub> = ((2<i>m</i> − 1)/2)[2<i>a</i> + (2<i>m</i> − 2)<i>d</i>] = (2<i>m</i> − 1)[<i>a</i> + (<i>m</i> − 1)<i>d</i>], and the bracket is exactly <i>a</i><sub>m</sub>. The (2<i>m</i> − 1) factors cancel in the ratio.",
            "For <i>m</i> = 24, take <i>n</i> = 47: (7 × 47 + 1)/(4 × 47 + 17) = 330/205."
          ],
          "ans": "66 : 41"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN 2015 PATTERN",
          "q": "Every term of an AP is a natural number. <i>S</i><sub>7</sub> : <i>S</i><sub>11</sub> = 6 : 11 and the seventh term lies between 130 and 140. Find <i>d</i>.",
          "steps": [
            "<i>S</i><sub>7</sub>/<i>S</i><sub>11</sub> = [7(<i>a</i> + 3<i>d</i>)] / [11(<i>a</i> + 5<i>d</i>)] = 6/11. The 11s cancel, leaving 7(<i>a</i> + 3<i>d</i>) = 6(<i>a</i> + 5<i>d</i>), so <i>a</i> = 9<i>d</i>.",
            "Then <i>a</i><sub>7</sub> = <i>a</i> + 6<i>d</i> = 15<i>d</i>, and 130 < 15<i>d</i> < 140 gives 8.67 < <i>d</i> < 9.33.",
            "The terms are natural numbers, so <i>d</i> is an integer and only one value survives. Without that constraint <i>d</i> would not be pinned down at all, which is the design of the question."
          ],
          "ans": "d = 9"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the sum of all three-digit natural numbers divisible by 7.",
              "a": "First 105, last 994, d = 7, so n = (994 − 105)/7 + 1 = 128. Then S = (128/2)(105 + 994) = 64 × 1099 = 70336."
            },
            {
              "q": "[CBSE] The 17th term of an AP exceeds its 10th term by 7. Find <i>d</i>.",
              "a": "a₁₇ − a₁₀ = 7d = 7, so d = 1. The a cancels, which is why no other information was needed."
            },
            {
              "q": "[CBSE] How many terms of 9, 17, 25, … must be taken to give a sum of 636?",
              "a": "a = 9, d = 8. (n/2)(18 + 8(n−1)) = 636 gives 8n² + 10n − 1272 = 0, i.e. 4n² + 5n − 636 = 0, so n = (−5 + 101)/8 = 12. The negative root is discarded because n ∈ ℕ."
            },
            {
              "q": "[JEE Main] In an AP, 5 times the 5th term equals 8 times the 8th term. Find the 13th term.",
              "a": "5(a + 4d) = 8(a + 7d) gives −3a = 36d, so a = −12d. Then a₁₃ = a + 12d = 0. The 13th term is zero for every such AP."
            },
            {
              "q": "[JEE Main] Insert 11 AMs between 28 and 10, and give the three middle ones.",
              "a": "Eleven means make 12 gaps, so d = (10 − 28)/12 = −3/2. Eleven is odd, so the middle three are A₅, A₆, A₇ = 41/2, 19, 35/2. Note A₆ = 19 is the AM of 28 and 10, as the symmetry demands."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "If <i>S</i><sub>n</sub> = 3<i>n</i><sup>2</sup> + 5<i>n</i> is the sum of <i>n</i> terms of an AP, its common difference is:",
          "correct": 2,
          "opts": [
            {
              "label": "3",
              "nudge": "This reads the coefficient of n² raw. It is A, and d = 2A, so the factor of 2 has been dropped."
            },
            {
              "label": "5",
              "nudge": "That is B, which controls the first term through a₁ = A + B, not the common difference."
            },
            {
              "label": "6",
              "nudge": null
            },
            {
              "label": "8",
              "nudge": "That is a₁ = A + B = 3 + 5, the first term, relabelled as d."
            }
          ],
          "solution": "For S<sub>n</sub> = An<sup>2</sup> + Bn the common difference is d = 2A = 6 and the first term is a<sub>1</sub> = A + B = 8. Check by subtraction: a<sub>n</sub> = S<sub>n</sub> − S<sub>n−1</sub> = 6n + 2, linear in n with slope 6."
        },
        {
          "t": "mcq",
          "q": "If the 9th term of an AP is zero, the ratio of its 29th term to its 19th term is:",
          "correct": 1,
          "opts": [
            {
              "label": "1 : 2",
              "nudge": "The ratio is the right pair of numbers written the wrong way round: the 29th term is the larger one."
            },
            {
              "label": "2 : 1",
              "nudge": null
            },
            {
              "label": "1 : 3",
              "nudge": "This comes from solving a<sub>9</sub> = 0 as a + 9d = 0 instead of a + 8d = 0, the off-by-one in the nth-term formula."
            },
            {
              "label": "3 : 1",
              "nudge": "Same off-by-one as the previous option, then inverted. Two errors that happen to point the same way are still two errors."
            }
          ],
          "solution": "a<sub>9</sub> = a + 8d = 0 gives a = −8d. Then a<sub>29</sub> = a + 28d = 20d and a<sub>19</sub> = a + 18d = 10d, so the ratio is 2 : 1 for every d ≠ 0."
        },
        {
          "t": "mcq",
          "q": "Three numbers in AP have sum −3 and product 8. The sum of their squares is:",
          "correct": 3,
          "opts": [
            {
              "label": "9",
              "nudge": "This is 3a² with the 2d² term forgotten entirely, which throws away everything the product condition told you."
            },
            {
              "label": "10",
              "nudge": "A near-miss arithmetic slip: 3 + 18 is 21, not 10."
            },
            {
              "label": "12",
              "nudge": "This uses the four-term symmetric spacing a − 3d, a − d, a + d, a + 3d on a three-term problem, so the wrong d comes out."
            },
            {
              "label": "21",
              "nudge": null
            }
          ],
          "solution": "Take the terms as a − d, a, a + d. Sum 3a = −3 gives a = −1. Product a(a² − d²) = 8 gives (−1)(1 − d²) = 8, so d² = 9. Then the sum of squares is 3a² + 2d² = 3 + 18 = 21. The minus sign in the product equation is where the marks are lost."
        },
        {
          "t": "mcq",
          "q": "If 100 times the 100th term of an AP with <i>d</i> ≠ 0 equals 50 times its 50th term, the 150th term is:",
          "correct": 2,
          "opts": [
            {
              "label": "150",
              "nudge": "The index has been copied into the answer. Nothing in the algebra produces the number 150 as a value."
            },
            {
              "label": "−150",
              "nudge": "Same as above with a sign attached, usually after solving a = −149d correctly and then substituting into the wrong expression."
            },
            {
              "label": "0",
              "nudge": null
            },
            {
              "label": "150 × <i>a</i><sub>50</sub>",
              "nudge": "Pattern-matching to “term equals a multiple of another term” results seen elsewhere. The condition here forces a specific value, not a proportion."
            }
          ],
          "solution": "100(a + 99d) = 50(a + 49d) gives 2a + 198d = a + 49d, so a = −149d. Then a<sub>150</sub> = a + 149d = 0. Whenever p·a<sub>p</sub> = q·a<sub>q</sub> with p ≠ q, the (p + q)th term is zero."
        },
        {
          "t": "mistakes",
          "items": [
            "Writing <b><i>a</i> + <i>nd</i></b> instead of <b><i>a</i> + (<i>n</i> − 1)<i>d</i></b>. The single most frequent AP error there is. Say “<i>n</i> minus one” every time.",
            "Treating <i>S</i><sub>n</sub> = <i>An</i><sup>2</sup> + <i>Bn</i> + <i>c</i> with <b><i>c</i> ≠ 0</b> as an AP. It is not one; only the terms from the second onward form an AP.",
            "Using common difference <i>d</i> rather than <b>2<i>d</i></b> when you pick an <b>even</b> count of symmetric terms.",
            "Assuming <b><i>d</i> > 0</b>. Decreasing APs and negative terms are where the interesting questions live.",
            "Accepting a non-integer or negative <i>n</i> as a term count. <b><i>n</i> ∈ ℕ</b>, so such an answer reads “no such term”, and an inequality for <i>n</i> is rounded <b>up</b>.",
            "Grinding out <i>a</i> and <i>d</i> when the equidistant identity or the <i>n</i> = 2<i>m</i> − 1 substitution would have finished the question in one line."
          ]
        },
        {
          "t": "protip",
          "html": "given a sum, switch to symmetric terms. given specific terms, stay with a + (n − 1)d. and to test whether something is an AP at all, check one of two things: is <i>a</i><sub>n</sub> linear in <i>n</i>, or is <i>S</i><sub>n</sub> quadratic with no constant term."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "a<sub>n</sub> = a + (n − 1)d",
              "note": "n minus one, always"
            },
            {
              "f": "S<sub>n</sub> = (n/2)[2a + (n − 1)d] = (n/2)(a + l)",
              "note": "second form when the last term is known"
            },
            {
              "f": "2b = a + c",
              "note": "the three-term AP test, and the AM"
            },
            {
              "f": "m AMs between a and b: d = (b − a)/(m + 1)",
              "note": "m means make m + 1 gaps"
            },
            {
              "f": "S<sub>n</sub> = An<sup>2</sup> + Bn ⇒ d = 2A, a<sub>1</sub> = A + B",
              "note": "only with zero constant term"
            },
            {
              "f": "a<sub>1</sub> + a<sub>n</sub> = a<sub>2</sub> + a<sub>n−1</sub> = ⋯",
              "note": "outside-in pairs share a sum"
            }
          ],
          "aids": [
            "“an AP is a straight line on the counting numbers”",
            "“sum given, go symmetric; terms given, stay general”"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Geometric Progressions and Growth",
      "chip": "03 GP",
      "kalam": "same factor every time, so it detonates",
      "blocks": [
        {
          "t": "p",
          "html": "A geometric progression is the multiplicative twin of the AP. Where an AP <b>adds</b> a fixed step, a GP <b>multiplies</b> by a fixed factor. The classic anchor is the chessboard: legend has it that Sissa, the inventor of chess, asked King Shirham for one grain of wheat on the first square, two on the second, four on the third, doubling each time. The king laughed at so modest a request. He should not have. The squares hold 1, 2, 4, …, 2<sup>63</sup> grains, and the total 2<sup>64</sup> − 1 exceeds all the wheat that has ever been grown."
        },
        {
          "t": "p",
          "html": "That story is the intuition in one line: <b>geometric growth feels small at the start and detonates at the end</b>. The defining property is that <b>the ratio between consecutive terms never changes</b>, <i>r</i> = <i>a</i><sub>2</sub>/<i>a</i><sub>1</sub> = <i>a</i><sub>3</sub>/<i>a</i><sub>2</sub> = ⋯ A SIP growing at 10% a year gives ₹10,000, ₹11,000, ₹12,100, ₹13,310, a GP with <i>r</i> = 1.1. A bike losing 20% of its <i>current</i> value each year gives ₹80,000, ₹64,000, ₹51,200, a GP with <i>r</i> = 0.8."
        },
        {
          "t": "p",
          "html": "Where an AP is linear, <b>a GP is exponential</b>: plot <i>a</i><sub>n</sub> against <i>n</i> and the points climb a curve <i>ar</i><sup>n−1</sup>. Plot log <i>a</i><sub>n</sub> instead and you get a straight line, which is exactly why <b>taking logs converts a GP into an AP</b>. Three shapes to keep separate: <i>r</i> > 1 explodes, 0 < <i>r</i> < 1 decays towards zero, and <i>r</i> < 0 makes the terms <b>alternate in sign</b>, so they are neither increasing nor decreasing."
        },
        {
          "t": "p",
          "html": "One structural difference does more work than any formula. An infinite AP always runs away. An infinite GP <b>converges exactly when |<i>r</i>| < 1</b>, because each multiplication shrinks the term. Every recurring decimal is secretly such a GP, and so is the total area of infinitely many nested squares. And one sentence decides every word problem in this topic: <b>a quantity that changes by a fixed percentage each period is a GP, not an AP</b>. “On the reducing balance”, “of its value at the beginning of the year” and “compounded” all mean GP; “of the original cost” and “simple interest” mean AP."
        },
        {
          "t": "think",
          "html": "equal steps make an ap. equal factors make a gp. read the sentence, not the number: 20% of what, exactly, is the whole question."
        },
        {
          "t": "def",
          "term": "Geometric progression",
          "html": "A sequence of <b>non-zero</b> terms <i>a</i><sub>1</sub>, <i>a</i><sub>2</sub>, … is a <b>GP</b> if <i>a</i><sub>k</sub>/<i>a</i><sub>k−1</sub> = <i>r</i>, the same constant, for every <i>k</i> ≥ 2. Both <i>a</i> ≠ 0 and <i>r</i> ≠ 0 are part of the definition: <b>no term of a GP is ever zero</b>. If your algebra forces a term to 0, the branch you are on is wrong and must be discarded, not carried forward."
        },
        {
          "t": "formula",
          "kicker": "TERM AND SUM",
          "tag": "the r = 1 case is separate",
          "main": "a<sub>n</sub> = a r<sup>n−1</sup>",
          "legend": [
            "<i>S</i><sub>n</sub> = <i>a</i>(<i>r</i><sup>n</sup> − 1)/(<i>r</i> − 1) = <i>a</i>(1 − <i>r</i><sup>n</sup>)/(1 − <i>r</i>), valid for <i>r</i> ≠ 1",
            "when <i>r</i> = 1 every term equals <i>a</i>, so <i>S</i><sub>n</sub> = <i>na</i>. Using the fraction here divides by zero",
            "counting from the end: <i>a</i>′<sub>n</sub> = <i>l</i>/<i>r</i><sup>n−1</sup>"
          ],
          "note": "Use the first form when r > 1 and the second when r < 1, purely so the numerator stays positive and no sign is dropped. They are the same expression."
        },
        {
          "t": "formula",
          "kicker": "SUM TO INFINITY",
          "tag": "check the condition before you write the formula",
          "main": "S<sub>∞</sub> = a / (1 − r), valid only when |r| < 1",
          "legend": [
            "because <i>S</i><sub>n</sub> = <i>a</i>/(1 − <i>r</i>) − <i>ar</i><sup>n</sup>/(1 − <i>r</i>) and <i>r</i><sup>n</sup> → 0 when |<i>r</i>| < 1",
            "for |<i>r</i>| ≥ 1 the sum diverges, or oscillates forever at <i>r</i> = −1. There is no value to quote",
            "every recurring decimal is a convergent GP: 0.333… is 3/10 + 3/100 + ⋯ with <i>r</i> = 1/10"
          ],
          "note": "Writing a/(1 − r) without checking |r| < 1 is the most punished error in this chapter, and it is also the step that decides between two algebraic roots in half the JEE questions on the topic."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · THREE SHAPES OF A GP, TAP A RATIO",
          "mathChips": true,
          "chips": ["r = 2", "r = 1/2", "r = −2"],
          "captions": [
            "1, 2, 4, 8, 16 against position. The soft dashed line is the AP that starts with the same first step, and the GP has already left it behind by the third term. That gap is the whole of compound interest, viral spread and Moore's law.",
            "16, 8, 4, 2, 1 with r = 1/2. Decay towards zero without ever reaching it, and this time the GP falls away below the straight line rather than above it. Depreciation on the reducing balance draws exactly this picture.",
            "1, −2, 4, −8, 16 with r = −2. A negative ratio flips the sign every step, so the terms alternate above and below the axis. The sequence is neither increasing nor decreasing, and any argument that assumes r > 0 has just lost this case."
          ],
          "frames": [
            {
              "x": [0, 6],
              "y": [0, 18],
              "curves": [{ "c": "line", "m": 1, "k": 0, "soft": true, "dash": true }],
              "points": [
                { "x": 1, "y": 1, "label": "a₁" },
                { "x": 2, "y": 2 },
                { "x": 3, "y": 4 },
                { "x": 4, "y": 8 },
                { "x": 5, "y": 16, "label": "a₅ = 16" }
              ]
            },
            {
              "x": [0, 6],
              "y": [0, 18],
              "curves": [{ "c": "line", "m": -8, "k": 24, "soft": true, "dash": true }],
              "points": [
                { "x": 1, "y": 16, "label": "a₁ = 16" },
                { "x": 2, "y": 8 },
                { "x": 3, "y": 4 },
                { "x": 4, "y": 2 },
                { "x": 5, "y": 1, "label": "a₅" }
              ]
            },
            {
              "x": [0, 6],
              "y": [-10, 18],
              "points": [
                { "x": 1, "y": 1, "label": "a₁" },
                { "x": 2, "y": -2 },
                { "x": 3, "y": 4 },
                { "x": 4, "y": -8 },
                { "x": 5, "y": 16, "label": "a₅" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · MULTIPLY BY r AND SUBTRACT, TAP A LINE",
          "steps": [
            {
              "eq": "S<sub>n</sub> = a + ar + ar<sup>2</sup> + ⋯ + ar<sup>n−1</sup>",
              "why": "The sum written out. Reversing it the way Gauss did is useless here, because a GP's outside-in pairs share a product, not a sum."
            },
            {
              "eq": "rS<sub>n</sub> = ar + ar<sup>2</sup> + ⋯ + ar<sup>n−1</sup> + ar<sup>n</sup>",
              "why": "Multiply the whole sum by r. Every term becomes the next one along, so the two lines are the same list shifted by one position."
            },
            {
              "eq": "S<sub>n</sub> − rS<sub>n</sub> = a − ar<sup>n</sup>",
              "why": "Subtract. Every interior term appears once in each line and cancels; only the first term of the top line and the last of the bottom survive. This is the same collapse that telescoping series use in Topic 06."
            },
            {
              "eq": "S<sub>n</sub>(1 − r) = a(1 − r<sup>n</sup>) ⇒ S<sub>n</sub> = a(1 − r<sup>n</sup>)/(1 − r)",
              "why": "Divide by 1 − r, which is legal exactly when r ≠ 1. The excluded case is not a technicality: at r = 1 the sum is simply na."
            },
            {
              "eq": "|r| < 1 ⇒ r<sup>n</sup> → 0 ⇒ S<sub>∞</sub> = a/(1 − r)",
              "why": "Each multiplication by a number smaller than 1 in size shrinks r<sup>n</sup>, so the second piece of S<sub>n</sub> vanishes. For |r| ≥ 1 it does not vanish and the limit fails to exist. That is a proof of the convergence condition, not a footnote to it."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "numberline",
          "kicker": "DIAGRAM · PARTIAL SUMS MARCHING TO A LIMIT",
          "mathChips": true,
          "chips": ["S₁", "S₂", "S₄", "S∞"],
          "captions": [
            "The series 1 + 1/2 + 1/4 + 1/8 + ⋯ has a = 1 and r = 1/2. The grey bar is the target, a/(1 − r) = 2. After one term you have covered 1, exactly half of it.",
            "S₂ = 1.5. Each new term closes half of whatever gap is left, which is what |r| = 1/2 means in words rather than symbols.",
            "S₄ = 1.875. Four terms and the remaining gap is already 1/8. The partial sums never overshoot, because every term added is positive and the total is capped.",
            "The limit is 2. Infinitely many positive terms with a finite total, which is impossible for an AP and routine for a GP with |r| < 1. Change r to 2 and the grey bar disappears: the partial sums 1, 3, 7, 15 run off the line."
          ],
          "frames": [
            {
              "x": [0, 2.4],
              "intervals": [
                { "from": 0, "to": 2, "soft": true, "label": "target 2" },
                { "from": 0, "to": 1 }
              ],
              "points": [{ "x": 1, "y": 0, "label": "S₁ = 1" }]
            },
            {
              "x": [0, 2.4],
              "intervals": [
                { "from": 0, "to": 2, "soft": true, "label": "target 2" },
                { "from": 0, "to": 1.5 }
              ],
              "points": [{ "x": 1.5, "y": 0, "label": "S₂ = 3/2" }]
            },
            {
              "x": [0, 2.4],
              "intervals": [
                { "from": 0, "to": 2, "soft": true, "label": "target 2" },
                { "from": 0, "to": 1.875 }
              ],
              "points": [{ "x": 1.875, "y": 0, "label": "S₄ = 15/8" }]
            },
            {
              "x": [0, 2.4],
              "intervals": [{ "from": 0, "to": 2, "label": "S∞ = 2" }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "GEOMETRIC MEANS",
          "tag": "the sign is a decision, not a default",
          "main": "a, b, c in GP ⇔ b<sup>2</sup> = ac",
          "legend": [
            "so <i>b</i> = ±√(<i>ac</i>). A real GM needs <i>ac</i> > 0, that is endpoints of the same sign",
            "inserting <i>n</i> GMs between <i>a</i> and <i>b</i> makes <i>n</i> + 1 gaps, so <i>r</i> = (<i>b</i>/<i>a</i>)<sup>1/(n+1)</sup> and <i>G</i><sub>k</sub> = <i>a</i>(<i>b</i>/<i>a</i>)<sup>k/(n+1)</sup>",
            "their product is (√(<i>ab</i>))<sup>n</sup>, that is the single GM raised to the <i>n</i>th power"
          ],
          "note": "For “a, b, c are in GP” reach for b² = ac directly. It is far faster than introducing a and r, and it is the multiplicative image of the AP test 2b = a + c."
        },
        {
          "t": "formula",
          "kicker": "COMPOUND GROWTH AND DECAY",
          "tag": "the percentage rides on the current value",
          "main": "A = P(1 + R/100)<sup>n</sup>",
          "legend": [
            "successive amounts <i>P</i>, <i>P</i>(1 + <i>i</i>), <i>P</i>(1 + <i>i</i>)<sup>2</sup>, … form a GP with ratio 1 + <i>i</i>, where <i>i</i> = <i>R</i>/100",
            "decay on the reducing balance uses <i>r</i> = 1 − <i>R</i>/100, a shrinking GP that never reaches zero",
            "compounded <i>k</i> times a year for <i>y</i> years: <i>r</i> = 1 + <i>R</i>/(100<i>k</i>) and the exponent is <i>ky</i>, not <i>y</i>"
          ],
          "note": "The exponent is n, not n − 1: the first value sits at time zero, so you are counting multiplications, not terms. Simple interest is the AP contrast, A = P(1 + nR/100). And “find the compound interest” wants A − P, not A."
        },
        {
          "t": "formula",
          "kicker": "THE PRODUCT OF A GP",
          "tag": "outside-in pairs share a product",
          "main": "P = a<sup>n</sup> r<sup>n(n−1)/2</sup> = (a l)<sup>n/2</sup>",
          "legend": [
            "because <i>a</i><sub>k</sub> · <i>a</i><sub>n+1−k</sub> = <i>a</i><sup>2</sup><i>r</i><sup>n−1</sup> = <i>a l</i> for every <i>k</i>, the multiplicative twin of Gauss's pairing",
            "with <i>S</i> the sum and <i>R</i> the sum of the reciprocals, <i>S</i>/<i>R</i> = <i>a l</i>, since the reciprocals form a GP too",
            "hence <b><i>P</i><sup>2</sup><i>R</i><sup>n</sup> = <i>S</i><sup>n</sup></b>, that is <i>P</i><sup>2</sup> = (<i>S</i>/<i>R</i>)<sup>n</sup>, true for every GP including <i>r</i> = 1"
          ],
          "note": "The moment a question hands you two of S, P and R, stop hunting for a and r: compute a l = S/R and finish in one line. P² = (S/R)ⁿ fixes only |P|, so take the positive root when the terms are stated positive and use a<sup>n</sup>r<sup>n(n−1)/2</sup> otherwise."
        },
        {
          "t": "proc",
          "title": "Reading a growth word problem",
          "steps": [
            "<b>Find the base of the percentage.</b> “Reducing balance”, “of its value at the beginning of the year”, “compounded” mean a GP. “Of the original cost”, “simple interest” mean an AP. Nothing later can repair a wrong choice here.",
            "<b>Write <i>P</i>, <i>r</i> and <i>n</i> down explicitly, with units.</b> For <i>k</i> compoundings a year over <i>y</i> years the rate is divided by <i>k</i> and the exponent is <i>ky</i>. Most lost marks in this topic are a wrong <i>n</i> or an undivided rate.",
            "<b>Convert the rate to an exact fraction before powering.</b> 8% becomes 27/25, 10% becomes 11/10, a 20% loss becomes 4/5. Board principals such as 15,625 or 6,25,000 are chosen so the denominator cancels and no decimal ever appears.",
            "<b>Count multiplications, not terms.</b> The value after <i>n</i> periods is <i>Pr</i><sup>n</sup>. Importing the <i>n</i> − 1 from the <i>n</i>th-term formula is the standard off-by-one.",
            "<b>If the unknown is <i>n</i>, take logs and round up.</b> From <i>r</i><sup>n</sup> > <i>k</i> you get <i>n</i> > log <i>k</i> / log <i>r</i>, and since <i>n</i> counts whole periods the answer is the next integer above. Truncating 6.58 to 6 is the classic trap."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "The product of three numbers in GP is 216 and the sum of their pairwise products is 156. Find the numbers.",
          "steps": [
            "A product is given, so place the terms symmetrically as <i>a</i>/<i>r</i>, <i>a</i>, <i>ar</i>. Their product is <i>a</i><sup>3</sup> = 216, so <i>a</i> = 6 immediately.",
            "Pairwise products: <i>a</i><sup>2</sup>(1/<i>r</i> + <i>r</i> + 1) = 156, so 36(1/<i>r</i> + <i>r</i> + 1) = 156 and 1/<i>r</i> + <i>r</i> = 10/3.",
            "3<i>r</i><sup>2</sup> − 10<i>r</i> + 3 = 0 gives <i>r</i> = 3 or <i>r</i> = 1/3, the same three numbers in the two possible orders."
          ],
          "ans": "2, 6, 18"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A machine costs ₹15,625 and depreciates at 20% per annum on the reducing balance. Find its value after 5 years, and the compound interest if the same sum were invested at 8% for 3 years.",
          "steps": [
            "“Reducing balance” fixes a GP. <i>r</i> = 1 − 20/100 = 4/5 and <i>n</i> = 5, so the value is 15625 × (4/5)<sup>5</sup> = 15625 × 1024/3125.",
            "15625 = 5<sup>6</sup> and 3125 = 5<sup>5</sup>, so the quotient is 5 and the value is 5 × 1024 = ₹5,120. The fraction was engineered to cancel.",
            "For the investment, <i>r</i> = 1 + 8/100 = 27/25 and <i>n</i> = 3: <i>A</i> = 15625 × 19683/15625 = ₹19,683, since 15625 = 25<sup>3</sup>.",
            "The question asks for the interest, not the amount: CI = <i>A</i> − <i>P</i> = 19683 − 15625."
          ],
          "ans": "value ₹5,120 · amount ₹19,683 · CI ₹4,058"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Four positive numbers in GP sum to 30 and their reciprocals sum to 15/16. Find their product.",
          "steps": [
            "Two of <i>S</i>, <i>P</i>, <i>R</i> are given and the third is asked for, which is the signature of the product identity.",
            "<i>a l</i> = <i>S</i>/<i>R</i> = 30 ÷ (15/16) = 32. That single number kills both unknowns at once.",
            "<i>P</i> = (<i>a l</i>)<sup>n/2</sup> = 32<sup>4/2</sup> = 32<sup>2</sup> = 1024. Positive terms, so the positive root is the right one.",
            "Sanity check: 2, 4, 8, 16 has sum 30 and reciprocal sum 15/16, and its product is 1024. The identity delivered the answer without ever solving for <i>a</i> and <i>r</i>."
          ],
          "ans": "P = 1024"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "The sum of an infinite GP is 2 and the sum of the cubes of its terms is 24. Find <i>a</i> and <i>r</i>.",
          "steps": [
            "<i>a</i>/(1 − <i>r</i>) = 2, so <i>a</i> = 2(1 − <i>r</i>). The cubes <i>a</i><sup>3</sup>, <i>a</i><sup>3</sup><i>r</i><sup>3</sup>, … form a GP with ratio <i>r</i><sup>3</sup>, so <i>a</i><sup>3</sup>/(1 − <i>r</i><sup>3</sup>) = 24.",
            "Substituting <i>a</i><sup>3</sup> = 8(1 − <i>r</i>)<sup>3</sup> and using 1 − <i>r</i><sup>3</sup> = (1 − <i>r</i>)(1 + <i>r</i> + <i>r</i><sup>2</sup>): (1 − <i>r</i>)<sup>2</sup>/(1 + <i>r</i> + <i>r</i><sup>2</sup>) = 3.",
            "Expanding gives 2<i>r</i><sup>2</sup> + 5<i>r</i> + 2 = 0, so <i>r</i> = −1/2 or <i>r</i> = −2.",
            "The convergence condition |<i>r</i>| < 1 rejects −2. That check is not housekeeping, it is the step that answers the question."
          ],
          "ans": "a = 3, r = −1/2"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the 9th term and the sum of the first 9 terms of the GP 2, 6, 18, …",
              "a": "a = 2, r = 3. a₉ = 2 · 3⁸ = 13122, and S₉ = 2(3⁹ − 1)/(3 − 1) = 3⁹ − 1 = 19682."
            },
            {
              "q": "[CBSE] Insert three GMs between 1 and 256.",
              "a": "Three means make four gaps, so r = 256^(1/4) = 4. The GMs are 4, 16, 64."
            },
            {
              "q": "[CBSE] Express 0.424242… as a fraction using an infinite GP.",
              "a": "42/100 + 42/10000 + ⋯ with a = 42/100, r = 1/100. So S∞ = (42/100)/(99/100) = 42/99 = 14/33."
            },
            {
              "q": "[JEE Main] The 4th, 7th and last terms of a GP are 10, 80 and 2560. Find the first term and the number of terms.",
              "a": "ar³ = 10 and ar⁶ = 80 give r³ = 8, so r = 2 and a = 10/8 = 5/4. Then (5/4)2^(n−1) = 2560 gives 2^(n−1) = 2048 = 2¹¹, so n = 12."
            },
            {
              "q": "[JEE Advanced] A machine depreciates at 10% per annum on the reducing balance and is worth ₹1,18,098 after 5 years. Find its original cost.",
              "a": "P(9/10)⁵ = 118098, so P = 118098 × 100000/59049 = 200000. The cost was ₹2,00,000."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The sum to infinity of 1 + 3/4 + 9/16 + 27/64 + ⋯ is:",
          "correct": 1,
          "opts": [
            {
              "label": "3",
              "nudge": "This is 1/(1 − r) with r read as 2/3. The ratio is (3/4) ÷ 1 = 3/4, not 2/3."
            },
            {
              "label": "4",
              "nudge": null
            },
            {
              "label": "7/4",
              "nudge": "That is a + ar, the sum of the first two terms only. The question asks for the whole infinite sum."
            },
            {
              "label": "does not exist",
              "nudge": "This treats 3/4 as “too big” to converge. The threshold is exactly |r| < 1, and 3/4 clears it comfortably."
            }
          ],
          "solution": "a = 1 and r = 3/4 with |r| < 1, so S<sub>∞</sub> = 1/(1 − 3/4) = 4. The question turns entirely on knowing where the convergence threshold actually sits."
        },
        {
          "t": "mcq",
          "q": "If <i>x</i>, 2<i>x</i> + 2, 3<i>x</i> + 3 are in GP, the fourth term is:",
          "correct": 3,
          "opts": [
            {
              "label": "27",
              "nudge": "This takes x = −1, which makes the terms −1, 0, 0. A GP may not contain zero, so that root has to be thrown out."
            },
            {
              "label": "−27",
              "nudge": "This uses ratio 3 instead of 3/2. The ratio is (2x + 2)/x, which is 3/2 at x = −4."
            },
            {
              "label": "13.5",
              "nudge": "Right magnitude, wrong sign: the terms are −4, −6, −9, all negative, so the fourth is negative too."
            },
            {
              "label": "−13.5",
              "nudge": null
            }
          ],
          "solution": "The GP condition (2x + 2)<sup>2</sup> = x(3x + 3) gives x<sup>2</sup> + 5x + 4 = 0, so x = −1 or x = −4. Reject x = −1 on the no-zero-term rule. With x = −4 the terms are −4, −6, −9, ratio 3/2, and the fourth is −9 × 3/2 = −13.5."
        },
        {
          "t": "mcq",
          "q": "If <i>a</i>, <i>b</i>, <i>c</i> are in GP, then log <i>a</i>, log <i>b</i>, log <i>c</i> are in:",
          "correct": 1,
          "opts": [
            {
              "label": "GP",
              "nudge": "The reflexive guess, GP in so GP out. Logs do not preserve ratios, they convert them into differences."
            },
            {
              "label": "AP",
              "nudge": null
            },
            {
              "label": "HP",
              "nudge": "HP would need the reciprocals of the logs to be in AP, which nothing here says. This misses the log-exponential duality entirely."
            },
            {
              "label": "none of these",
              "nudge": "There is a clean answer, and it drops out of one line: taking log of b² = ac gives 2 log b = log a + log c."
            }
          ],
          "solution": "b<sup>2</sup> = ac, so taking logs gives 2 log b = log a + log c, which is exactly the three-term AP condition. Logs turn a GP into an AP, and the converse holds too. That bridge is worth reaching for whenever a GP problem gets algebraically ugly."
        },
        {
          "t": "mcq",
          "q": "A GP of positive terms has first term 2, last term 162 and exactly 5 terms. The product of the terms is:",
          "correct": 0,
          "opts": [
            {
              "label": "18<sup>5</sup>",
              "nudge": null
            },
            {
              "label": "18<sup>4</sup>",
              "nudge": "This pairs the terms outside-in and then forgets that with n odd one middle term is left unpaired. Two pairs give 18⁴ and the middle 18 is dropped."
            },
            {
              "label": "324<sup>5</sup>",
              "nudge": "This writes P = (al)ⁿ instead of (al)^(n/2), which counts every pair twice."
            },
            {
              "label": "242",
              "nudge": "That is S₅ = 2(3⁵ − 1)/2. The question says product; this reaches for the sum formula out of habit."
            }
          ],
          "solution": "a l = 2 × 162 = 324 and n = 5, so P = (a l)<sup>n/2</sup> = 324<sup>5/2</sup> = (18<sup>2</sup>)<sup>5/2</sup> = 18<sup>5</sup> = 1889568. Direct check: r<sup>4</sup> = 81 gives r = 3, and 2 · 6 · 18 · 54 · 162 = 1889568."
        },
        {
          "t": "mistakes",
          "items": [
            "Writing <b><i>S</i><sub>∞</sub> = <i>a</i>/(1 − <i>r</i>)</b> without checking |<i>r</i>| < 1. The single most punished error in the chapter, and often the step that decides between two roots.",
            "Dropping the <b><i>r</i> < 0</b> case. A negative ratio alternates the signs, and phrases like “alternately positive and negative” exist precisely to select it.",
            "Taking <b><i>b</i> = +√(<i>ac</i>)</b> blindly. The GM can be negative, and a real GM needs <i>ac</i> > 0.",
            "Accepting a solution that forces a term to <b>zero</b>. No term of a GP may be zero, so such a root is rejected, not carried.",
            "Applying <i>a</i>(<i>r</i><sup>n</sup> − 1)/(<i>r</i> − 1) when <b><i>r</i> = 1</b>. That is a division by zero; the sum is simply <i>na</i>.",
            "Using the <i>n</i>th-term exponent <i>n</i> − 1 in a growth problem. The value after <i>n</i> periods is <b><i>Pr</i><sup>n</sup></b>, because the first value sits at time zero."
          ]
        },
        {
          "t": "protip",
          "html": "given a product, go symmetric: <i>a</i>/<i>r</i>, <i>a</i>, <i>ar</i> collapses two unknowns to one. given “<i>a</i>, <i>b</i>, <i>c</i> in GP”, write <i>b</i><sup>2</sup> = <i>ac</i> and skip <i>a</i> and <i>r</i> entirely. and when a percentage appears, ask what it is a percentage <i>of</i> before you write a single symbol."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "a<sub>n</sub> = a r<sup>n−1</sup>, a ≠ 0, r ≠ 0",
              "note": "no term of a GP is ever zero"
            },
            {
              "f": "S<sub>n</sub> = a(r<sup>n</sup> − 1)/(r − 1), r ≠ 1",
              "note": "at r = 1 the sum is na"
            },
            {
              "f": "S<sub>∞</sub> = a/(1 − r), only if |r| < 1",
              "note": "check the condition, then write it"
            },
            {
              "f": "b<sup>2</sup> = ac · n GMs: r = (b/a)<sup>1/(n+1)</sup>",
              "note": "and b = ±√(ac), the sign is a decision"
            },
            {
              "f": "A = P(1 + R/100)<sup>n</sup> · CI = A − P",
              "note": "exponent n, not n − 1"
            },
            {
              "f": "S/R = a l · P = (a l)<sup>n/2</sup> · P<sup>2</sup>R<sup>n</sup> = S<sup>n</sup>",
              "note": "two of S, P, R given means one line"
            }
          ],
          "aids": [
            "“equal factors, not equal steps”",
            "“no |r| < 1, no sum to infinity”"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Harmonic Progression and the Three Means",
      "chip": "04 MEANS",
      "kalam": "flip it over and it is an ap again",
      "blocks": [
        {
          "t": "p",
          "html": "A harmonic progression is the mathematics of <b>rates over a fixed amount of work</b>, and it is where “average” stops meaning the arithmetic mean. Drive to a town at 40 km/h and come back along the same road at 60 km/h. The average speed for the round trip is <b>not</b> 50. Equal <i>distances</i> are covered at each speed, not equal times, so the honest average is 2 × 40 × 60 / (40 + 60) = 48 km/h. That is the <b>harmonic mean</b>."
        },
        {
          "t": "p",
          "html": "The defining move is pure reciprocity: <i>a</i><sub>1</sub>, <i>a</i><sub>2</sub>, <i>a</i><sub>3</sub>, … are in <b>HP</b> if and only if 1/<i>a</i><sub>1</sub>, 1/<i>a</i><sub>2</sub>, 1/<i>a</i><sub>3</sub>, … are in <b>AP</b>. So every HP question becomes an AP question the instant you flip the terms over, and the whole of Topic 02 is available again. A student who reaches for reciprocals instinctively has this topic; one who attacks the HP terms directly will flounder."
        },
        {
          "t": "p",
          "html": "There is more than one honest way to average two positive numbers, and the three classical means answer three different questions. <b>AM</b> = (<i>a</i> + <i>b</i>)/2 averages quantities that <b>add</b>: marks, costs, distances. <b>GM</b> = √(<i>ab</i>) averages quantities that <b>multiply</b>: growth rates, the yearly return that turns ₹1 into the same final corpus. <b>HM</b> = 2<i>ab</i>/(<i>a</i> + <i>b</i>) averages <b>rates</b> over a fixed task. For two distinct positive numbers they always line up the same way, <i>A</i> > <i>G</i> > <i>H</i>, collapsing to one point exactly when <i>a</i> = <i>b</i>."
        },
        {
          "t": "think",
          "html": "one structural fact worth accepting early: an hp has no formula for its sum. that is not a gap in what you have been taught, it is a genuine feature of the object. sum an hp term by term, or telescope it."
        },
        {
          "t": "def",
          "term": "Harmonic progression",
          "html": "A sequence of non-zero numbers <i>a</i><sub>1</sub>, <i>a</i><sub>2</sub>, … is in <b>HP</b> exactly when the reciprocals 1/<i>a</i><sub>1</sub>, 1/<i>a</i><sub>2</sub>, … are in AP. <b>No term may be zero</b>, since its reciprocal would not exist. If the reciprocal AP has first term 1/<i>a</i> and common difference <i>d</i>, then <i>a</i><sub>n</sub> = 1 / [1/<i>a</i> + (<i>n</i> − 1)<i>d</i>]. There is <b>no general closed form for the sum of an HP</b>: do not invent one."
        },
        {
          "t": "formula",
          "kicker": "THE HARMONIC MEAN",
          "tag": "note the 2 in the numerator",
          "main": "a, b, c in HP ⇔ 2/b = 1/a + 1/c ⇔ b = 2ac/(a + c)",
          "legend": [
            "for <i>n</i> numbers, HM = <i>n</i> / (1/<i>a</i><sub>1</sub> + ⋯ + 1/<i>a</i><sub>n</sub>), the reciprocal of the average reciprocal",
            "to insert <i>n</i> HMs between <i>a</i> and <i>b</i>, insert <i>n</i> AMs between 1/<i>a</i> and 1/<i>b</i>, then flip every answer back",
            "if the <i>p</i>th term of an HP is <i>q</i> and the <i>q</i>th is <i>p</i>, then <i>a</i><sub>n</sub> = <i>pq</i>/<i>n</i>, so the (<i>p</i> + <i>q</i>)th term is <i>pq</i>/(<i>p</i> + <i>q</i>)"
          ],
          "note": "Writing ac/(a + c) instead of 2ac/(a + c) is the standard slip, and it is worth checking on a case you know: the HM of 4 and 4 must be 4, and only the version with the 2 gives it."
        },
        {
          "t": "formula",
          "kicker": "THE THREE MEANS, LOCKED TOGETHER",
          "tag": "for two positive reals a, b",
          "main": "A = (a + b)/2 · G = √(ab) · H = 2ab/(a + b)",
          "legend": [
            "<b><i>AH</i> = <i>G</i><sup>2</sup></b>, so <i>A</i>, <i>G</i>, <i>H</i> themselves form a GP with <i>G</i> as their geometric mean",
            "<b><i>A</i> ≥ <i>G</i> ≥ <i>H</i></b>, with equality throughout if and only if <i>a</i> = <i>b</i>",
            "for <i>n</i> positive reals the same chain holds, AM ≥ GM ≥ HM, with equality iff all of them are equal"
          ],
          "note": "Positivity is mandatory for G to be real and for the chain to hold. AH = G² needs only non-zero terms, which is why it is the identity to reach for when you want to jump between two means without re-deriving anything."
        },
        {
          "t": "diagram",
          "kind": "numberline",
          "kicker": "DIAGRAM · WHERE THE THREE MEANS SIT, TAP ONE",
          "mathChips": true,
          "chips": ["a and b", "H = 1.6", "G = 2", "A = 2.5", "a = b"],
          "captions": [
            "Take a = 1 and b = 4. Every mean of two numbers has to land somewhere strictly between them, and the only question is where.",
            "The harmonic mean, 2 × 1 × 4 / 5 = 1.6, sits nearest the smaller number. That is why the round-trip average speed came out 48 and not 50: the HM is always pulled towards the slower leg.",
            "The geometric mean, √4 = 2, sits between H and A. It is exactly the midpoint of the other two in the multiplicative sense, since AH = 2.5 × 1.6 = 4 = G².",
            "The arithmetic mean, 2.5, sits highest of the three. Reading left to right the order is always H, G, A, and no pair of positive numbers ever reverses it.",
            "Push a and b together and the three means collide. At a = b = 2.5 they are all 2.5, which is the equality case of A ≥ G ≥ H and the point where every AM-GM bound is attained."
          ],
          "frames": [
            {
              "x": [0, 5],
              "intervals": [{ "from": 1, "to": 4, "soft": true }],
              "points": [
                { "x": 1, "y": 0, "label": "a = 1" },
                { "x": 4, "y": 0, "label": "b = 4" }
              ]
            },
            {
              "x": [0, 5],
              "intervals": [{ "from": 1, "to": 1.6, "label": "H" }],
              "points": [
                { "x": 1, "y": 0, "soft": true },
                { "x": 4, "y": 0, "soft": true },
                { "x": 1.6, "y": 0, "label": "H = 1.6" }
              ]
            },
            {
              "x": [0, 5],
              "intervals": [{ "from": 1, "to": 2, "label": "G" }],
              "points": [
                { "x": 1, "y": 0, "soft": true },
                { "x": 4, "y": 0, "soft": true },
                { "x": 1.6, "y": 0, "soft": true },
                { "x": 2, "y": 0, "label": "G = 2" }
              ]
            },
            {
              "x": [0, 5],
              "intervals": [{ "from": 1, "to": 2.5, "label": "A" }],
              "points": [
                { "x": 1, "y": 0, "soft": true },
                { "x": 4, "y": 0, "soft": true },
                { "x": 1.6, "y": 0, "soft": true },
                { "x": 2, "y": 0, "soft": true },
                { "x": 2.5, "y": 0, "label": "A = 2.5" }
              ]
            },
            {
              "x": [0, 5],
              "points": [{ "x": 2.5, "y": 0, "label": "A = G = H = 2.5" }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE CHAIN A ≥ G ≥ H, TAP A LINE",
          "steps": [
            {
              "eq": "for a, b > 0: (√a − √b)<sup>2</sup> ≥ 0",
              "why": "A square of a real number is never negative. This is the only assumption in the whole argument, and it is why positivity is required: without it the square roots are not real."
            },
            {
              "eq": "a + b − 2√(ab) ≥ 0 ⇒ (a + b)/2 ≥ √(ab)",
              "why": "Expand and rearrange. That is A ≥ G, with equality exactly when √a = √b, that is when a = b. Nothing was multiplied by an unknown sign, so the direction is safe."
            },
            {
              "eq": "AH = ((a + b)/2)(2ab/(a + b)) = ab = G<sup>2</sup>",
              "why": "The (a + b) factors cancel outright. So A, G, H are in GP, and G is the geometric mean of the other two means as well as of the original pair."
            },
            {
              "eq": "H = G<sup>2</sup>/A, and A ≥ G > 0, so H ≤ G<sup>2</sup>/G = G",
              "why": "Dividing a fixed positive numerator by something at least as big as G cannot give more than G. That is G ≥ H, obtained for free from the identity rather than by a second inequality."
            },
            {
              "eq": "A ≥ G ≥ H, equality throughout iff a = b",
              "why": "Chaining the two results. The equality condition matters as much as the inequality: every optimisation in this topic locates its answer by setting all the terms equal."
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The three middle-term equations",
          "rows": [
            {
              "k": "<i>a</i>, <i>b</i>, <i>c</i> in AP",
              "v": "2<i>b</i> = <i>a</i> + <i>c</i>, so <i>b</i> = (<i>a</i> + <i>c</i>)/2"
            },
            {
              "k": "<i>a</i>, <i>b</i>, <i>c</i> in GP",
              "v": "<i>b</i><sup>2</sup> = <i>ac</i>, so <i>b</i> = ±√(<i>ac</i>)"
            },
            {
              "k": "<i>a</i>, <i>b</i>, <i>c</i> in HP",
              "v": "2/<i>b</i> = 1/<i>a</i> + 1/<i>c</i>, so <i>b</i> = 2<i>ac</i>/(<i>a</i> + <i>c</i>)"
            },
            {
              "k": "Chain problems",
              "v": "replace every progression statement by its middle-term equation, then eliminate the letter that appears in two of them"
            },
            {
              "k": "Which HP form",
              "v": "reciprocal form when the letters sit in denominators, product form when you are about to cross-multiply. Same statement, half the algebra."
            },
            {
              "k": "Scope",
              "v": "no letter may be zero, and the HP relation additionally needs <i>a</i> + <i>c</i> ≠ 0"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "RECOVERING THE NUMBERS FROM THEIR MEANS",
          "tag": "the signature board question",
          "main": "a, b = A ± √(A<sup>2</sup> − G<sup>2</sup>)",
          "legend": [
            "because <i>a</i> + <i>b</i> = 2<i>A</i> and <i>ab</i> = <i>G</i><sup>2</sup>, so <i>a</i> and <i>b</i> are the roots of <i>x</i><sup>2</sup> − 2<i>Ax</i> + <i>G</i><sup>2</sup> = 0",
            "the quadratic is centred on <b><i>A</i></b>, never on <i>G</i>: the AM is the average of the pair, the GM is not",
            "its discriminant is 4(<i>A</i><sup>2</sup> − <i>G</i><sup>2</sup>), so real roots exist exactly when <i>A</i> ≥ <i>G</i>"
          ],
          "note": "That last line is the point of the whole topic in one sentence: A ≥ G is not a decoration, it is precisely the condition for the two numbers to exist at all. A question handing you A < G is describing nothing real."
        },
        {
          "t": "formula",
          "kicker": "AM-GM AS AN OPTIMISATION ENGINE",
          "tag": "no calculus needed",
          "main": "(a<sub>1</sub> + ⋯ + a<sub>n</sub>)/n ≥ (a<sub>1</sub>a<sub>2</sub>⋯a<sub>n</sub>)<sup>1/n</sup>",
          "legend": [
            "fixing the <b>sum</b> at <i>S</i> caps the product: ∏<i>a</i><sub>i</sub> ≤ (<i>S</i>/<i>n</i>)<sup>n</sup>",
            "fixing the <b>product</b> at <i>P</i> floors the sum: Σ<i>a</i><sub>i</sub> ≥ <i>nP</i><sup>1/n</sup>",
            "equality in both, and therefore the optimum, exactly when all the <i>a</i><sub>i</sub> are equal"
          ],
          "note": "The art is splitting the expression so that the geometric mean comes out free of the variable. A bound that still contains x bounds nothing. To maximise x<sup>p</sup>y<sup>q</sup> under αx + βy = k, apply AM-GM to p copies of αx/p and q copies of βy/q: the exponents say how many copies, the coefficients say what to divide by."
        },
        {
          "t": "proc",
          "title": "Running the AM-GM engine",
          "steps": [
            "<b>Name what is fixed:</b> a sum, a product, or a linear constraint. If nothing is fixed, AM-GM has nothing to work with.",
            "<b>Split until the geometric mean is a constant.</b> For 2<i>x</i> + 3/<i>x</i><sup>2</sup>, two terms give 2√(6/<i>x</i>), which still contains <i>x</i> and is useless. Split as <i>x</i> + <i>x</i> + 3/<i>x</i><sup>2</sup> and the product is 3.",
            "<b>Write the inequality and read off the bound.</b> One line, and no differentiation anywhere.",
            "<b>Solve “all terms equal” together with the constraint</b> to locate the point where the bound is attained. Marks are usually split between the bound and that point.",
            "<b>Check the optimiser is allowed.</b> If the equality point lies outside the stated domain the bound is true but never reached, and the real extremum sits on the boundary. This is the trap that costs more marks than the algebra."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "The 3rd term of an HP is 1/7 and the 7th is 1/15. Find the 10th term.",
          "steps": [
            "Reciprocate first, always. The reciprocals form an AP with third term 7 and seventh term 15.",
            "<i>d</i> = (15 − 7)/(7 − 3) = 2, and the first reciprocal is 7 − 2(2) = 3.",
            "Tenth reciprocal = 3 + 9(2) = 21, so the tenth HP term is its reciprocal."
          ],
          "ans": "a<sub>10</sub> = 1/21"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "The AM of two positive numbers is 10 and their GM is 8. Find the numbers.",
          "steps": [
            "<i>a</i> + <i>b</i> = 2<i>A</i> = 20 and <i>ab</i> = <i>G</i><sup>2</sup> = 64, so the numbers are the roots of <i>x</i><sup>2</sup> − 20<i>x</i> + 64 = 0.",
            "(<i>x</i> − 4)(<i>x</i> − 16) = 0, or equivalently <i>a</i>, <i>b</i> = 10 ± √(100 − 64) = 10 ± 6.",
            "The check that real roots exist is automatic here: <i>A</i> = 10 > <i>G</i> = 8, as <i>A</i> ≥ <i>G</i> guarantees."
          ],
          "ans": "the numbers are 4 and 16"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "If <i>a</i>, <i>b</i>, <i>c</i> are in AP, <i>b</i>, <i>c</i>, <i>d</i> in GP and <i>c</i>, <i>d</i>, <i>e</i> in HP, prove that <i>a</i>, <i>c</i>, <i>e</i> are in GP.",
          "steps": [
            "Write each condition as its middle-term equation: 2<i>b</i> = <i>a</i> + <i>c</i>, <i>c</i><sup>2</sup> = <i>bd</i> so <i>d</i> = <i>c</i><sup>2</sup>/<i>b</i>, and <i>d</i> = 2<i>ce</i>/(<i>c</i> + <i>e</i>).",
            "<i>d</i> appears in two of them, so eliminate it: <i>c</i><sup>2</sup>/<i>b</i> = 2<i>ce</i>/(<i>c</i> + <i>e</i>). Cancel one factor of <i>c</i>, legal because <i>c</i> is a term of a GP and so non-zero.",
            "<i>c</i>(<i>c</i> + <i>e</i>) = 2<i>be</i>, and 2<i>b</i> = <i>a</i> + <i>c</i>, so <i>c</i><sup>2</sup> + <i>ce</i> = <i>ae</i> + <i>ce</i>, giving <i>c</i><sup>2</sup> = <i>ae</i>.",
            "That is exactly the GP condition. Two eliminations, one cancellation, and nothing expanded that did not have to be."
          ],
          "ans": "c² = ae, so a, c, e are in GP"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "If <i>a</i>, <i>b</i>, <i>c</i> > 0 and <i>a</i> + <i>b</i> + <i>c</i> = 1, show that <i>ab</i><sup>2</sup><i>c</i><sup>3</sup> ≤ 1/432 and find where equality holds.",
          "steps": [
            "The exponents are 1, 2, 3, so cut the constraint into 1 + 2 + 3 = 6 pieces: <i>a</i>, <i>b</i>/2, <i>b</i>/2, <i>c</i>/3, <i>c</i>/3, <i>c</i>/3, which still sum to 1.",
            "AM-GM on those six positive numbers: 1/6 ≥ [<i>a</i>(<i>b</i>/2)<sup>2</sup>(<i>c</i>/3)<sup>3</sup>]<sup>1/6</sup> = [<i>ab</i><sup>2</sup><i>c</i><sup>3</sup>/108]<sup>1/6</sup>.",
            "Raise both sides to the sixth power, which is safe since both are positive: <i>ab</i><sup>2</sup><i>c</i><sup>3</sup> ≤ 108/6<sup>6</sup> = 108/46656 = 1/432.",
            "Equality needs all six pieces equal, so each is 1/6: <i>a</i> = 1/6, <i>b</i>/2 = 1/6 and <i>c</i>/3 = 1/6. Check: 1/6 + 1/3 + 1/2 = 1 and (1/6)(1/9)(1/8) = 1/432. ✓"
          ],
          "ans": "maximum 1/432 at a = 1/6, b = 1/3, c = 1/2"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the HM of 3 and 7.",
              "a": "H = 2 × 3 × 7 / 10 = 42/10 = 21/5 = 4.2. Note it sits below the AM of 5, as it must."
            },
            {
              "q": "[CBSE] The 2nd term of an HP is 1/5 and the 5th is 1/11. Find the 1st term.",
              "a": "Reciprocals 5 and 11 are the 2nd and 5th terms of an AP, so d = (11 − 5)/3 = 2 and the first reciprocal is 5 − 2 = 3. The first HP term is 1/3."
            },
            {
              "q": "[JEE Main] Insert 4 harmonic means between 1 and 1/6.",
              "a": "Insert 4 AMs between 1 and 6: D = (6 − 1)/5 = 1, giving the AP 1, 2, 3, 4, 5, 6. Flip the interior terms back: the HMs are 1/2, 1/3, 1/4, 1/5."
            },
            {
              "q": "[JEE Main] The AM and GM of two numbers are 10 and 8. Find their HM.",
              "a": "Use AH = G² rather than solving for the numbers: H = G²/A = 64/10 = 6.4. Note H < G < A, as the chain requires."
            },
            {
              "q": "[JEE Advanced] The AM of two positive numbers is twice their HM. Find the ratio of the numbers.",
              "a": "(a + b)/2 = 2 · 2ab/(a + b) gives (a + b)² = 8ab, i.e. a² − 6ab + b² = 0. Dividing by b², the ratio satisfies t² − 6t + 1 = 0, so a : b = 3 + 2√2, which is (√2 + 1)². The other root 3 − 2√2 is the same ratio inverted."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The harmonic mean of two positive numbers <i>a</i> and <i>b</i> is:",
          "correct": 2,
          "opts": [
            {
              "label": "(<i>a</i> + <i>b</i>)/2",
              "nudge": "That is the arithmetic mean, the average for quantities that add, not for rates over a fixed task."
            },
            {
              "label": "√(<i>ab</i>)",
              "nudge": "That is the geometric mean, the average for quantities that multiply. It sits between H and A, not at H."
            },
            {
              "label": "2<i>ab</i>/(<i>a</i> + <i>b</i>)",
              "nudge": null
            },
            {
              "label": "<i>ab</i>/(<i>a</i> + <i>b</i>)",
              "nudge": "The classic trap: the factor 2 in the numerator has been dropped. Test it on a = b = 4, where any mean must return 4, and this version returns 2."
            }
          ],
          "solution": "H is defined by 1/H being the AM of 1/a and 1/b, so 1/H = (1/a + 1/b)/2 = (a + b)/(2ab), giving H = 2ab/(a + b). The 2 is not decoration, it is the halving in the arithmetic mean of the reciprocals."
        },
        {
          "t": "mcq",
          "q": "For two distinct positive numbers, which ordering always holds?",
          "correct": 1,
          "opts": [
            {
              "label": "<i>H</i> ≥ <i>G</i> ≥ <i>A</i>",
              "nudge": "The chain reversed, which is the single most common error on this topic. Test it on 1 and 4: H = 1.6, G = 2, A = 2.5."
            },
            {
              "label": "<i>A</i> ≥ <i>G</i> ≥ <i>H</i>",
              "nudge": null
            },
            {
              "label": "<i>G</i> ≥ <i>A</i> ≥ <i>H</i>",
              "nudge": "This misplaces G, which must sit between the other two because it is their geometric mean: AH = G²."
            },
            {
              "label": "<i>A</i> = <i>G</i> = <i>H</i>",
              "nudge": "True only when the two numbers are equal, and the question says distinct."
            }
          ],
          "solution": "A ≥ G comes from (√a − √b)<sup>2</sup> ≥ 0, and G ≥ H then follows from H = G²/A. Both are strict when a ≠ b, so distinct numbers give A > G > H."
        },
        {
          "t": "mcq",
          "q": "If <i>A</i> and <i>G</i> are the AM and GM of two positive numbers, the numbers are:",
          "correct": 0,
          "opts": [
            {
              "label": "<i>A</i> ± √(<i>A</i><sup>2</sup> − <i>G</i><sup>2</sup>)",
              "nudge": null
            },
            {
              "label": "<i>A</i> ± √(<i>G</i><sup>2</sup> − <i>A</i><sup>2</sup>)",
              "nudge": "The discriminant is flipped. Since A ≥ G always, G² − A² is never positive and this would make the numbers imaginary."
            },
            {
              "label": "<i>G</i> ± √(<i>A</i><sup>2</sup> − <i>G</i><sup>2</sup>)",
              "nudge": "This centres the quadratic on G. The pair averages to A, not to G, so the centre must be A."
            },
            {
              "label": "(<i>A</i> ± <i>G</i>)/2",
              "nudge": "An average of the two means, which is not a quantity the problem ever produces. Test it on A = 10, G = 8: it gives 9 and 1, whose AM is 5."
            }
          ],
          "solution": "a + b = 2A and ab = G², so a and b are the roots of x² − 2Ax + G² = 0, giving a, b = A ± √(A² − G²). Real numbers exist precisely when A ≥ G, which is the AM-GM inequality doing double duty as a reality check."
        },
        {
          "t": "mcq",
          "q": "For <i>x</i> > 0, the least value of 3<i>x</i> + 12/<i>x</i><sup>2</sup> is:",
          "correct": 0,
          "opts": [
            {
              "label": "9",
              "nudge": null
            },
            {
              "label": "6",
              "nudge": "This applies AM-GM to two terms: 2√(36/x), which still contains x and so bounds nothing. A bound with the variable in it is not a bound."
            },
            {
              "label": "12",
              "nudge": "This substitutes x = 1 and reports the value there. A single sample is not a minimum; the expression is 9 at x = 2."
            },
            {
              "label": "15",
              "nudge": "This splits into two copies of 3x/2 but then forgets to divide the AM by 3 rather than by 2, so the count of pieces and the divisor disagree."
            }
          ],
          "solution": "Split so the geometric mean loses x: 3x + 12/x² = 3x/2 + 3x/2 + 12/x², whose product is (9x²/4)(12/x²) = 27, a constant. AM-GM on three numbers gives the sum ≥ 3 × 27<sup>1/3</sup> = 9, with equality when 3x/2 = 12/x², that is x³ = 8 and x = 2. Check: 6 + 3 = 9."
        },
        {
          "t": "mistakes",
          "items": [
            "Attacking HP terms directly instead of <b>reciprocating first</b>. The dominant HP error, and the one that makes every such question look hard.",
            "Writing <b><i>ac</i>/(<i>a</i> + <i>c</i>)</b> for the HM. The 2 in the numerator is the halving inside the AM of the reciprocals.",
            "Inventing a closed-form <b>sum of an HP</b>. There is none in general; sum termwise or telescope.",
            "Reversing the chain to <b><i>H</i> ≥ <i>G</i> ≥ <i>A</i></b>. Test it once on 1 and 4 and it never happens again.",
            "Centring the recovery quadratic on <b><i>G</i></b> instead of <i>A</i>, or forgetting that <i>A</i> ≥ <i>G</i> is what makes the roots real.",
            "Quoting an AM-GM bound as a <b>minimum</b> without checking that the equality point lies in the domain. A bound that is never reached is not a minimum."
          ]
        },
        {
          "t": "protip",
          "html": "flip to reciprocals, use the whole ap toolkit, flip back. use <i>AH</i> = <i>G</i><sup>2</sup> to jump between means without re-deriving anything. and for a min or max of positive terms, reach for am-gm before calculus: the equality condition hands you the optimiser for free."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "a<sub>n</sub> in HP ⇔ 1/a<sub>n</sub> in AP",
              "note": "no zero terms, and no sum formula"
            },
            {
              "f": "H = 2ac/(a + c)",
              "note": "the 2 is not optional"
            },
            {
              "f": "AH = G<sup>2</sup> ⇒ A, G, H are in GP",
              "note": "G is the middle term of that GP"
            },
            {
              "f": "A ≥ G ≥ H, equality iff a = b",
              "note": "H nearest the smaller number"
            },
            {
              "f": "a, b = A ± √(A<sup>2</sup> − G<sup>2</sup>)",
              "note": "real exactly when A ≥ G"
            },
            {
              "f": "pth term q, qth term p ⇒ a<sub>n</sub> = pq/n",
              "note": "so the (p + q)th term is pq/(p + q)"
            }
          ],
          "aids": [
            "“reciprocate first, always”",
            "“am-gm gives the bound, all-terms-equal gives the point”"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Special Series and Sigma Machinery",
      "chip": "05 STANDARD SUMS",
      "kalam": "find the general term, then let sigma do the work",
      "blocks": [
        {
          "t": "p",
          "html": "This topic is the computational engine of the chapter, and it rests on one move: <b>break a complicated sum into simple sums you already know</b>. If you can write the general term as a combination of <i>n</i><sup>3</sup>, <i>n</i><sup>2</sup>, <i>n</i> and 1, then by the linearity of Σ the sum of the series is the matching combination of four standard results. So the entire game is: find <i>t</i><sub>n</sub>, express it in powers of <i>n</i>, then apply the formulas."
        },
        {
          "t": "p",
          "html": "The standard sums themselves come from one telescoping trick. To find Σ<i>n</i><sup>2</sup>, use the identity <i>k</i><sup>3</sup> − (<i>k</i> − 1)<sup>3</sup> = 3<i>k</i><sup>2</sup> − 3<i>k</i> + 1 and add it up for <i>k</i> = 1 to <i>n</i>. The left side collapses to just <i>n</i><sup>3</sup>, because every intermediate cube appears once with a plus and once with a minus, and what is left is an equation you solve for Σ<i>n</i><sup>2</sup>. The same idea with (<i>k</i> + 1)<sup>4</sup> − <i>k</i><sup>4</sup> gives Σ<i>n</i><sup>3</sup>, and with <i>k</i><sup>5</sup> − (<i>k</i> − 1)<sup>5</sup> gives Σ<i>n</i><sup>4</sup>. One trick, a whole family."
        },
        {
          "t": "p",
          "html": "That family has Indian roots, and recent ones by the standards of mathematics. The formulas for Σ<i>n</i><sup>2</sup> and Σ<i>n</i><sup>3</sup> were given by <b>Aryabhata</b> in the <i>Aryabhatiya</i> around 499 CE, more than a millennium before they appear in European texts, and Brahmagupta, Mahavira and Bhaskara all extended the work. Worth knowing too is the startling coincidence <b>Σ<i>n</i><sup>3</sup> = (Σ<i>n</i>)<sup>2</sup></b>: 1 + 8 + 27 = 36 = 6<sup>2</sup> = (1 + 2 + 3)<sup>2</sup>. It is the fastest shortcut in the chapter."
        },
        {
          "t": "think",
          "html": "you never sum a series in this topic. you find its general term, and then you sum four things you already knew. the whole difficulty is the first step, not the second."
        },
        {
          "t": "formula",
          "kicker": "THE STANDARD SUMS",
          "tag": "memorise the first four",
          "main": "Σr = n(n + 1)/2 · Σr<sup>2</sup> = n(n + 1)(2n + 1)/6",
          "legend": [
            "Σ1 = <i>n</i>, because a constant added <i>n</i> times is <i>n</i> times the constant",
            "Σ<i>r</i><sup>3</sup> = [<i>n</i>(<i>n</i> + 1)/2]<sup>2</sup> = (Σ<i>r</i>)<sup>2</sup>, the square of the triangular number",
            "Σ<i>r</i><sup>4</sup> = <i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)(3<i>n</i><sup>2</sup> + 3<i>n</i> − 1)/30, JEE Advanced only"
          ],
          "note": "All four run from r = 1. Every one of them carries the factor n(n + 1), and Σr⁴ opens with exactly the numerator of Σr², which makes it far easier to recall than it looks. For a sum starting at r = m, compute Σ from 1 to n and subtract Σ from 1 to m − 1."
        },
        {
          "t": "formula",
          "kicker": "THE MASTER TECHNIQUE",
          "tag": "polynomial in, standard sums out",
          "main": "t<sub>n</sub> = an<sup>3</sup> + bn<sup>2</sup> + cn + d ⇒ S<sub>n</sub> = aΣn<sup>3</sup> + bΣn<sup>2</sup> + cΣn + dn",
          "legend": [
            "products must be <b>expanded first</b>: <i>r</i>(<i>r</i> + 1)(<i>r</i> + 2) is a polynomial, but Σ does not act on it factor by factor",
            "linearity needs the <b>same index range</b> on every piece, a frequent slip when splitting a term",
            "if <i>t</i><sub>n</sub> is genuinely not a polynomial in <i>n</i>, this machinery does not apply and Topic 06 does"
          ],
          "note": "Two related identities. The sum of products two at a time is Σ over i < j of a<sub>i</sub>a<sub>j</sub> = [(Σa<sub>i</sub>)² − Σa<sub>i</sub>²]/2, because squaring the sum produces every ordered pair once. And for the first n naturals, Σ over i < j of ij = n(n + 1)(n − 1)(3n + 2)/24."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · Σn² BY TELESCOPING, TAP A LINE",
          "steps": [
            {
              "eq": "k<sup>3</sup> − (k − 1)<sup>3</sup> = 3k<sup>2</sup> − 3k + 1",
              "why": "Expand (k − 1)³ = k³ − 3k² + 3k − 1 and subtract. The identity is chosen so that k² appears on the right, which is what we are hunting."
            },
            {
              "eq": "sum both sides for k = 1, 2, …, n",
              "why": "The left is a difference of consecutive cubes, so adding it up cancels every interior cube: only the last plus and the first minus survive."
            },
            {
              "eq": "n<sup>3</sup> − 0<sup>3</sup> = 3Σk<sup>2</sup> − 3Σk + n",
              "why": "The left side telescopes to n³. The right side is read off by linearity, with Σ1 = n as the last piece."
            },
            {
              "eq": "3Σk<sup>2</sup> = n<sup>3</sup> + 3n(n + 1)/2 − n",
              "why": "Substitute the already-known Σk = n(n + 1)/2 and rearrange. Each formula in this family is built on the ones below it, which is why the order matters."
            },
            {
              "eq": "Σk<sup>2</sup> = n(n + 1)(2n + 1)/6",
              "why": "Factorise: n³ + 3n(n+1)/2 − n = n(2n² + 3n + 1)/2 = n(n + 1)(2n + 1)/2, then divide by 3. If you ever forget this formula, it is four lines away, so there is never a reason to guess it."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Summing a series from scratch",
          "steps": [
            "<b>Write the general term <i>t</i><sub>r</sub> first.</b> For 2 · 4 + 4 · 6 + 6 · 8 + … the factors are 2<i>r</i> and 2<i>r</i> + 2, so <i>t</i><sub>r</sub> = 2<i>r</i>(2<i>r</i> + 2). Nothing can be summed before this line exists.",
            "<b>Expand it into powers of <i>r</i>.</b> 4<i>r</i><sup>2</sup> + 4<i>r</i>. Σ does not distribute over a product, only over a sum.",
            "<b>Apply the standard sums termwise</b> and pull the coefficients out through Σ.",
            "<b>Factor before you simplify.</b> Take out the common <i>n</i>(<i>n</i> + 1) early: it turns a page of algebra into two lines and is where marks are saved.",
            "<b>Verify at <i>n</i> = 1 and <i>n</i> = 2.</b> Your closed form must reproduce the first term and the sum of the first two. This catches every arithmetic slip the method admits."
          ]
        },
        {
          "t": "defgrid",
          "title": "The method of differences",
          "rows": [
            {
              "k": "Differences constant",
              "v": "<i>t</i><sub>n</sub> is <b>linear</b>, an AP. Example 4, 7, 10, 13"
            },
            {
              "k": "Second differences constant",
              "v": "<i>t</i><sub>n</sub> is <b>quadratic</b>. For 3, 7, 13, 21 the differences 4, 6, 8 are an AP, so <i>t</i><sub>n</sub> = <i>n</i><sup>2</sup> + <i>n</i> + 1"
            },
            {
              "k": "Differences in GP",
              "v": "<i>t</i><sub>n</sub> carries an <b>exponential</b>. For 5, 7, 11, 19, 35 the differences 2, 4, 8, 16 are a GP, so <i>t</i><sub>n</sub> = 2<sup>n</sup> + 3"
            },
            {
              "k": "The telescoping step",
              "v": "<i>t</i><sub>n</sub> = <i>t</i><sub>1</sub> + Σ<i>d</i><sub>k</sub> for <i>k</i> = 1 to <i>n</i> − 1, summed with the AP or GP formula as appropriate"
            },
            {
              "k": "The trap",
              "v": "fitting a quadratic to differences that are in GP. It matches three terms and fails at the fourth, which is exactly how the question is set"
            },
            {
              "k": "Always verify",
              "v": "on a term you did not use to build the formula. One line, and it separates a general term from a coincidence"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "ALTERNATING-SIGN SUMS",
          "tag": "the sign factor is not a polynomial",
          "main": "Σ(−1)<sup>r−1</sup>r<sup>2</sup> = (−1)<sup>n−1</sup> n(n + 1)/2",
          "legend": [
            "the alternating sum of the first <i>n</i> squares is the ordinary sum of the first <i>n</i> naturals, carrying a sign",
            "Σ(−1)<sup>r−1</sup><i>r</i> is (<i>n</i> + 1)/2 for odd <i>n</i> and −<i>n</i>/2 for even <i>n</i>, since each front pair contributes −1",
            "for the cubes to 2<i>m</i> terms the total is −<i>m</i><sup>2</sup>(4<i>m</i> + 3)"
          ],
          "note": "Method: pair from the front, (t₁ − t₂) + (t₃ − t₄) + ⋯, and simplify each bracket with the difference of squares rather than by expanding. Pairing drops the degree by one. If n is odd, apply the even result to n − 1 terms and add the last term on its own; an answer that does not split on parity is incomplete."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the sum to <i>n</i> terms of 2 · 4 + 4 · 6 + 6 · 8 + …",
          "steps": [
            "General term: <i>t</i><sub>r</sub> = (2<i>r</i>)(2<i>r</i> + 2) = 4<i>r</i><sup>2</sup> + 4<i>r</i>. Expand before summing.",
            "<i>S</i><sub>n</sub> = 4 · <i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)/6 + 4 · <i>n</i>(<i>n</i> + 1)/2 = 2<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)/3 + 2<i>n</i>(<i>n</i> + 1).",
            "Factor 2<i>n</i>(<i>n</i> + 1) out: <i>S</i><sub>n</sub> = 2<i>n</i>(<i>n</i> + 1)[(2<i>n</i> + 1)/3 + 1] = 2<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 4)/3.",
            "Check at <i>n</i> = 1: 4 · 1 · 2 · 3/3 = 8 = 2 · 4. ✓ The 20th term alone is 4 · 20 · 21 = 1680."
          ],
          "ans": "S<sub>n</sub> = 4n(n + 1)(n + 2)/3"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find <i>S</i><sub>n</sub> for 5 + 55 + 555 + …",
          "steps": [
            "Each term is 5 times a repunit, and a repunit of <i>r</i> digits is (10<sup>r</sup> − 1)/9. So <i>t</i><sub>r</sub> = 5(10<sup>r</sup> − 1)/9.",
            "<i>S</i><sub>n</sub> = (5/9) Σ(10<sup>r</sup> − 1) = (5/9)[10(10<sup>n</sup> − 1)/9 − <i>n</i>], peeling off a GP and a constant series.",
            "= (5/81)(10<sup>n+1</sup> − 10 − 9<i>n</i>). Check at <i>n</i> = 1: (5/81)(100 − 10 − 9) = (5/81)(81) = 5. ✓",
            "Not every “special series” is polynomial. Here the geometric piece is summed by Topic 03 and only the −<i>n</i> uses this topic."
          ],
          "ans": "S<sub>n</sub> = (5/81)(10<sup>n+1</sup> − 9n − 10)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "The sum of the first <i>n</i> terms of an AP is <i>cn</i><sup>2</sup>. Find the sum of the squares of these <i>n</i> terms.",
          "steps": [
            "<i>S</i><sub>n</sub> = <i>cn</i><sup>2</sup> has the form <i>An</i><sup>2</sup> + <i>Bn</i> with <i>B</i> = 0 and zero constant, so it is genuinely an AP from the first term.",
            "<i>a</i><sub>n</sub> = <i>S</i><sub>n</sub> − <i>S</i><sub>n−1</sub> = <i>c</i>(<i>n</i><sup>2</sup> − (<i>n</i> − 1)<sup>2</sup>) = <i>c</i>(2<i>n</i> − 1).",
            "Σ<i>a</i><sub>n</sub><sup>2</sup> = <i>c</i><sup>2</sup> Σ(4<i>n</i><sup>2</sup> − 4<i>n</i> + 1) = <i>c</i><sup>2</sup>[4<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)/6 − 4<i>n</i>(<i>n</i> + 1)/2 + <i>n</i>].",
            "Take out <i>n</i> and simplify the bracket to (4<i>n</i><sup>2</sup> − 1)/3. Two topics in one question: recover the term, then square and sum."
          ],
          "ans": "Σa<sub>n</sub>² = n(4n² − 1)c²/3"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Find 1<sup>2</sup> − 2<sup>2</sup> + 3<sup>2</sup> − 4<sup>2</sup> + ⋯ to <i>n</i> terms, treating both parities, and evaluate at <i>n</i> = 15 and <i>n</i> = 20.",
          "steps": [
            "Even <i>n</i> = 2<i>m</i>: pair from the front. The <i>k</i>th bracket is (2<i>k</i> − 1)<sup>2</sup> − (2<i>k</i>)<sup>2</sup> = (−1)(4<i>k</i> − 1) by difference of squares, much faster than expanding.",
            "Sum: <i>S</i><sub>2m</sub> = −Σ(4<i>k</i> − 1) = −[4<i>m</i>(<i>m</i> + 1)/2 − <i>m</i>] = −<i>m</i>(2<i>m</i> + 1) = −<i>n</i>(<i>n</i> + 1)/2.",
            "Odd <i>n</i>: apply the even result to <i>n</i> − 1 terms and add the last term +<i>n</i><sup>2</sup>, giving <i>S</i><sub>n</sub> = −(<i>n</i> − 1)<i>n</i>/2 + <i>n</i><sup>2</sup> = <i>n</i>(<i>n</i> + 1)/2.",
            "The two cases differ only in sign, so a single closed form covers both. <i>S</i><sub>15</sub> = +15 × 16/2 = 120 and <i>S</i><sub>20</sub> = −20 × 21/2 = −210."
          ],
          "ans": "S<sub>n</sub> = (−1)<sup>n−1</sup> n(n + 1)/2 · S₁₅ = 120 · S₂₀ = −210"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find Σ<sub>r=1</sub><sup>n</sup> <i>r</i>(<i>r</i> + 1).",
              "a": "Expand first: Σ(r² + r) = n(n+1)(2n+1)/6 + n(n+1)/2 = n(n+1)(n+2)/3. Check n = 2: 2 + 6 = 8 = 2·3·4/3."
            },
            {
              "q": "[CBSE] Find the sum of all numbers between 200 and 400 that are divisible by 7.",
              "a": "First 203, last 399, d = 7, so n = (399 − 203)/7 + 1 = 29. S = (29/2)(203 + 399) = 29 × 301 = 8729."
            },
            {
              "q": "[JEE Main] Evaluate Σ over 1 ≤ <i>i</i> < <i>j</i> ≤ 10 of <i>ij</i>.",
              "a": "Use [(Σi)² − Σi²]/2 with Σi = 55 and Σi² = 385: (3025 − 385)/2 = 1320. No pair is ever enumerated."
            },
            {
              "q": "[JEE Advanced] Evaluate Σ<sub>r=1</sub><sup>10</sup> <i>r</i><sup>4</sup>.",
              "a": "n(n+1)(2n+1)(3n² + 3n − 1)/30 at n = 10 gives 10 · 11 · 21 · 329/30 = 77 × 329 = 25333."
            },
            {
              "q": "[JEE Advanced] Evaluate 1<sup>3</sup> − 2<sup>3</sup> + 3<sup>3</sup> − ⋯ − 10<sup>3</sup>.",
              "a": "Ten terms, so pairing is exact with m = 5. The kth bracket is (2k−1)³ − (2k)³ = −12k² + 6k − 1, summing to −m²(4m + 3). At m = 5 that is −25 × 23 = −575."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "Σ<sub>r=1</sub><sup>n</sup> <i>r</i><sup>3</sup> equals:",
          "correct": 1,
          "opts": [
            {
              "label": "<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)/6",
              "nudge": "That is Σr², the classic swap of the square and cube formulas. Test at n = 2: this gives 5, but 1 + 8 = 9."
            },
            {
              "label": "[<i>n</i>(<i>n</i> + 1)/2]<sup>2</sup>",
              "nudge": null
            },
            {
              "label": "<i>n</i><sup>2</sup>(<i>n</i> + 1)/2",
              "nudge": "The outer square has been applied to the numerator only, so the denominator is 2 instead of 4."
            },
            {
              "label": "<i>n</i>(<i>n</i> + 1)/2",
              "nudge": "That is Σr itself. The cube sum is its square, not the sum unchanged."
            }
          ],
          "solution": "Σr³ = [n(n + 1)/2]² = (Σr)², the square of the triangular number. Check at n = 3: 1 + 8 + 27 = 36 = 6², and 1 + 2 + 3 = 6. Keeping the three standard formulas cleanly separate is what this question tests."
        },
        {
          "t": "mcq",
          "q": "The general term of 1 · 2 + 2 · 3 + 3 · 4 + … is:",
          "correct": 2,
          "opts": [
            {
              "label": "<i>n</i><sup>2</sup>",
              "nudge": "This squares the first factor rather than multiplying by the next integer. It gives 1, 4, 9 instead of 2, 6, 12."
            },
            {
              "label": "<i>n</i>(<i>n</i> − 1)",
              "nudge": "Index shifted by one: this is the previous product, and it gives 0 at n = 1."
            },
            {
              "label": "<i>n</i>(<i>n</i> + 1)",
              "nudge": null
            },
            {
              "label": "2<i>n</i>",
              "nudge": "This sums only the first factors of each product and forgets the second entirely."
            }
          ],
          "solution": "The rth term pairs r with r + 1, so t<sub>r</sub> = r(r + 1) = r² + r and the sum is n(n + 1)(n + 2)/3. Recognising the term is exactly where special-series problems are won or lost; the summation afterwards is mechanical."
        },
        {
          "t": "mcq",
          "q": "If Σ<sub>r=1</sub><sup>n</sup> <i>r</i> = 78, then Σ<sub>r=1</sub><sup>n</sup> <i>r</i><sup>3</sup> equals:",
          "correct": 0,
          "opts": [
            {
              "label": "6084",
              "nudge": null
            },
            {
              "label": "234",
              "nudge": "This multiplies by 3 instead of squaring, treating the exponent as a factor."
            },
            {
              "label": "608",
              "nudge": "An arithmetic lure with no derivation behind it: 78² is 6084, not 608."
            },
            {
              "label": "156",
              "nudge": "This doubles 78, which is what you would get from misreading the identity as Σr³ = 2Σr."
            }
          ],
          "solution": "Σr³ = (Σr)² = 78² = 6084. You never need to find n, though it happens to be 12 since 12 × 13/2 = 78. This is the fastest shortcut in the chapter: recognise cubes and square the triangular number."
        },
        {
          "t": "mcq",
          "q": "The value of 1<sup>2</sup> − 2<sup>2</sup> + 3<sup>2</sup> − ⋯ − 100<sup>2</sup> is:",
          "correct": 3,
          "opts": [
            {
              "label": "5050",
              "nudge": "Right magnitude, wrong sign: 100 is even, so the alternating sum ends on a subtraction and comes out negative."
            },
            {
              "label": "338350",
              "nudge": "That is Σr² to 100 terms, with every sign taken as positive. The alternation is the whole question."
            },
            {
              "label": "−100",
              "nudge": "This treats each front pair as contributing −1, which is true for the alternating sum of r, not of r²."
            },
            {
              "label": "−5050",
              "nudge": null
            }
          ],
          "solution": "The alternating sum of the first n squares is (−1)<sup>n−1</sup> n(n + 1)/2. With n = 100, even, this is −100 × 101/2 = −5050. Pairing from the front confirms it: each bracket (2k−1)² − (2k)² is −(4k − 1), an AP."
        },
        {
          "t": "mistakes",
          "items": [
            "Swapping <b>Σ<i>n</i><sup>2</sup> and Σ<i>n</i><sup>3</sup></b>. The dominant error of this topic. One is the (2<i>n</i> + 1)/6 form, the other is the squared triangular number.",
            "Trying to sum a <b>product</b> like <i>r</i>(<i>r</i> + 1) without expanding it. Σ distributes over sums, never over products.",
            "Applying the Σ from 1 to <i>n</i> formulas to a sum that <b>does not start at 1</b>, without subtracting Σ from 1 to <i>m</i> − 1.",
            "Fitting a <b>quadratic</b> to a series whose differences are in GP. It will match three terms and fail at the fourth, which is exactly how the trap is set.",
            "Applying the polynomial machinery to a term carrying <b>(−1)<sup>r</sup> or <i>r</i><sup>n</sup></b>. Neither is a polynomial in <i>r</i>, so neither is summed here.",
            "Giving one closed form for an alternating sum without splitting on the <b>parity</b> of <i>n</i>, or without folding both cases into a single (−1)<sup>n−1</sup>."
          ]
        },
        {
          "t": "protip",
          "html": "always find <i>t</i><sub>n</sub> first, expand it into powers of <i>n</i>, then sum. that one habit solves the majority of board and main problems in this topic. and if you ever forget Σ<i>n</i><sup>2</sup>, rebuild it in four lines from <i>k</i><sup>3</sup> − (<i>k</i> − 1)<sup>3</sup> rather than guessing between two half-remembered formulas."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "Σ1 = n · Σr = n(n + 1)/2",
              "note": "every formula carries n(n + 1)"
            },
            {
              "f": "Σr<sup>2</sup> = n(n + 1)(2n + 1)/6",
              "note": "rebuild from k³ − (k − 1)³ if lost"
            },
            {
              "f": "Σr<sup>3</sup> = [n(n + 1)/2]<sup>2</sup> = (Σr)<sup>2</sup>",
              "note": "the fastest shortcut in the chapter"
            },
            {
              "f": "t<sub>n</sub> polynomial ⇒ S<sub>n</sub> = matching combination",
              "note": "expand products before summing"
            },
            {
              "f": "Σ over i < j of a<sub>i</sub>a<sub>j</sub> = [(Σa<sub>i</sub>)<sup>2</sup> − Σa<sub>i</sub><sup>2</sup>]/2",
              "note": "aggregate in, aggregate out"
            },
            {
              "f": "Σ(−1)<sup>r−1</sup>r<sup>2</sup> = (−1)<sup>n−1</sup>n(n + 1)/2",
              "note": "pair from the front, split on parity"
            }
          ],
          "aids": [
            "“find t sub n, expand, then apply”",
            "“cubes are the square of the sum, always”"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Arithmetico-Geometric and Telescoping Series",
      "chip": "06 AGP AND TELESCOPING",
      "kalam": "make the middle cancel and only the ends survive",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 05 sums any series whose general term is a polynomial in <i>n</i>. This topic handles the two big families where it is not. The first is the <b>arithmetico-geometric progression</b>, a term-by-term product of an AP and a GP: <i>a</i>, (<i>a</i> + <i>d</i>)<i>r</i>, (<i>a</i> + 2<i>d</i>)<i>r</i><sup>2</sup>, … Think of a GP whose terms are being steadily re-weighted by a growing counter, or of deposits of increasing size each discounted by a fixed factor for the time they sit. Most present-value calculations in finance are AGP sums."
        },
        {
          "t": "p",
          "html": "Because each term carries both an additive and a multiplicative pattern, neither the AP nor the GP sum formula works alone. But the GP <b>trick</b> still works: multiply the whole sum by <i>r</i>, line it up shifted by one position, and subtract. The arithmetic part collapses to a constant <i>d</i>, and what is left is an ordinary GP. One subtraction does the job, and when |<i>r</i>| < 1 the geometric decay eventually beats the linear growth of the counter, so the infinite sum converges."
        },
        {
          "t": "p",
          "html": "The second family is <b>telescoping</b>. Picture a collapsing telescope, or a relay in which every runner hands on exactly what they received: only the starting baton and the finishing position matter, and everything passed in between cancels in the bookkeeping. The trick is to rewrite each term as a <b>difference of two consecutive things</b>. If <i>t</i><sub>r</sub> = <i>V</i><sub>r</sub> − <i>V</i><sub>r+1</sub> then the sum is <i>V</i><sub>1</sub> − <i>V</i><sub>n+1</sub>, because every interior <i>V</i> appears once with a plus and once with a minus."
        },
        {
          "t": "think",
          "html": "both halves of this topic are one idea wearing two hats: arrange the sum so that almost everything cancels. the gp derivation in topic 03 was already doing it."
        },
        {
          "t": "def",
          "term": "Arithmetico-geometric progression",
          "html": "A sequence whose general term is <i>t</i><sub>n</sub> = [<i>a</i> + (<i>n</i> − 1)<i>d</i>] <i>r</i><sup>n−1</sup>, the product of an AP term and a GP term. Recognise it by the shape: <b>(something linear in <i>n</i>) × (<i>r</i><sup>n−1</sup>)</b>. In 3/1 + 5/2 + 7/4 + 9/8 + ⋯ the numerators 3, 5, 7, 9 are the AP with <i>a</i> = 3, <i>d</i> = 2 and the denominators are the GP with <i>r</i> = 1/2. Confirm the shape before reaching for any formula."
        },
        {
          "t": "formula",
          "kicker": "SUMMING AN AGP",
          "tag": "r ≠ 1, and |r| < 1 for the infinite case",
          "main": "S<sub>∞</sub> = a/(1 − r) + dr/(1 − r)<sup>2</sup>",
          "legend": [
            "for <i>n</i> terms: <i>S</i><sub>n</sub> = <i>a</i>/(1 − <i>r</i>) + <i>dr</i>(1 − <i>r</i><sup>n−1</sup>)/(1 − <i>r</i>)<sup>2</sup> − [<i>a</i> + (<i>n</i> − 1)<i>d</i>]<i>r</i><sup>n</sup>/(1 − <i>r</i>)",
            "at <i>r</i> = 1 the AGP is just an AP and is summed by the AP formula instead",
            "useful relatives: Σ<i>nr</i><sup>n</sup> = <i>r</i>/(1 − <i>r</i>)<sup>2</sup> and Σ<i>n</i><sup>2</sup><i>r</i><sup>n</sup> = <i>r</i>(1 + <i>r</i>)/(1 − <i>r</i>)<sup>3</sup>, both for |<i>r</i>| < 1"
          ],
          "note": "Do not memorise the finite-sum formula. Re-derive it with the multiply-by-r subtraction every time: it is faster under pressure and it cannot misremember a sign. The compact S<sub>∞</sub> is worth keeping. Convergence is governed entirely by r, never by a or d."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE AGP SUM, TAP A LINE",
          "steps": [
            {
              "eq": "S<sub>n</sub> = a + (a + d)r + (a + 2d)r<sup>2</sup> + ⋯ + [a + (n − 1)d]r<sup>n−1</sup>",
              "why": "The sum written out. Neither the AP formula nor the GP formula applies, because each term carries both patterns at once."
            },
            {
              "eq": "rS<sub>n</sub> = ar + (a + d)r<sup>2</sup> + ⋯ + [a + (n − 1)d]r<sup>n</sup>",
              "why": "Multiply by r, which shifts the whole list one place to the right. This is the same move that summed a GP in Topic 03."
            },
            {
              "eq": "(1 − r)S<sub>n</sub> = a + d(r + r<sup>2</sup> + ⋯ + r<sup>n−1</sup>) − [a + (n − 1)d]r<sup>n</sup>",
              "why": "Subtract column by column. The first column leaves a; every middle column leaves the difference of two consecutive AP coefficients, which is the constant d, times r to that power; the last term of the shifted line is subtracted whole."
            },
            {
              "eq": "the bracket is a GP: r + ⋯ + r<sup>n−1</sup> = r(1 − r<sup>n−1</sup>)/(1 − r)",
              "why": "One subtraction has turned an AGP into an ordinary GP, which Topic 03 already sums. That is the entire technique."
            },
            {
              "eq": "|r| < 1, n → ∞: S<sub>∞</sub> = a/(1 − r) + dr/(1 − r)<sup>2</sup>",
              "why": "Both r^(n−1) and n·rⁿ tend to 0, because geometric decay beats linear growth. That is why the infinite sum exists, and it is exactly the |r| < 1 condition again."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Sum 1 + 2<i>x</i> + 3<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> + … to <i>n</i> terms, for <i>x</i> ≠ 1.",
          "steps": [
            "AGP with <i>a</i> = 1, <i>d</i> = 1, <i>r</i> = <i>x</i>. Write <i>S</i><sub>n</sub> = 1 + 2<i>x</i> + ⋯ + <i>nx</i><sup>n−1</sup> and <i>xS</i><sub>n</sub> = <i>x</i> + 2<i>x</i><sup>2</sup> + ⋯ + <i>nx</i><sup>n</sup>.",
            "Subtract: (1 − <i>x</i>)<i>S</i><sub>n</sub> = 1 + <i>x</i> + <i>x</i><sup>2</sup> + ⋯ + <i>x</i><sup>n−1</sup> − <i>nx</i><sup>n</sup>, since each coefficient drops by exactly 1.",
            "The surviving sum is a plain GP: (1 − <i>x</i><sup>n</sup>)/(1 − <i>x</i>) − <i>nx</i><sup>n</sup>.",
            "Divide by (1 − <i>x</i>). Deriving beats recalling here: the messy <i>S</i><sub>n</sub> formula is three lines of work away."
          ],
          "ans": "S<sub>n</sub> = (1 − x<sup>n</sup>)/(1 − x)² − nx<sup>n</sup>/(1 − x)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the sum to infinity of 3/1 + 5/2 + 7/4 + 9/8 + …",
          "steps": [
            "Identify the two parts. Numerators 3, 5, 7, 9 are an AP with <i>a</i> = 3, <i>d</i> = 2; denominators 1, 2, 4, 8 are a GP, so <i>r</i> = 1/2.",
            "|<i>r</i>| = 1/2 < 1, so the infinite sum exists. Check this before writing the formula, exactly as for a GP.",
            "<i>S</i><sub>∞</sub> = 3/(1 − ½) + 2(½)/(1 − ½)<sup>2</sup> = 3/(½) + 1/(¼).",
            "= 6 + 4."
          ],
          "ans": "S<sub>∞</sub> = 10"
        },
        {
          "t": "formula",
          "kicker": "THE TELESCOPING PRINCIPLE",
          "tag": "write the term as a difference",
          "main": "t<sub>r</sub> = V<sub>r</sub> − V<sub>r+1</sub> ⇒ Σ<sub>r=1</sub><sup>n</sup> t<sub>r</sub> = V<sub>1</sub> − V<sub>n+1</sub>",
          "legend": [
            "Σ 1/[<i>r</i>(<i>r</i> + 1)] = 1 − 1/(<i>n</i> + 1) = <i>n</i>/(<i>n</i> + 1), from 1/<i>r</i> − 1/(<i>r</i> + 1)",
            "Σ 1/[<i>r</i>(<i>r</i> + 1)(<i>r</i> + 2)] = <i>n</i>(<i>n</i> + 3)/[4(<i>n</i> + 1)(<i>n</i> + 2)], and the difference form carries a factor ½",
            "Σ 1/[(2<i>r</i> − 1)(2<i>r</i> + 1)] = <i>n</i>/(2<i>n</i> + 1), again with a ½ from the split"
          ],
          "note": "Two things to track. The surviving endpoints are V₁ − V_{n+1}, not V₀ − V_n: off-by-one here is the main error. And the constant multiplier that the difference form carries is easy to drop, so write it down as soon as you split."
        },
        {
          "t": "formula",
          "kicker": "THREE MORE TELESCOPERS",
          "tag": "products, factorials, surds",
          "main": "Σ r(r + 1)⋯(r + k − 1) = n(n + 1)⋯(n + k)/(k + 1)",
          "legend": [
            "the <i>V</i><sub>n</sub> method: append one more factor and divide by the number of factors plus one, times the common difference",
            "factorials: <i>r</i> · <i>r</i>! = (<i>r</i> + 1)! − <i>r</i>!, so Σ<i>r</i> · <i>r</i>! = (<i>n</i> + 1)! − 1",
            "surds: rationalising 1/(√<i>r</i> + √(<i>r</i> + 1)) gives √(<i>r</i> + 1) − √<i>r</i>, so the sum is √(<i>n</i> + 1) − 1"
          ],
          "note": "So Σ r(r + 1) = n(n + 1)(n + 2)/3 and Σ r(r + 1)(r + 2) = n(n + 1)(n + 2)(n + 3)/4, matching what the expand-and-sum route of Topic 05 gives. Using the wrong divisor is the one error the V<sub>n</sub> method admits: check it at n = 1."
        },
        {
          "t": "diagram",
          "kind": "numberline",
          "kicker": "DIAGRAM · A TELESCOPING SUM CLOSING ON ITS LIMIT",
          "mathChips": true,
          "chips": ["S₁", "S₂", "S₃", "S₉"],
          "captions": [
            "The series 1/(1·2) + 1/(2·3) + 1/(3·4) + ⋯ Every partial sum is 1 − 1/(n + 1), because all the middle pieces cancel. After one term you are at 1/2, exactly half of the grey target.",
            "S₂ = 2/3. The second term 1/6 closed part of the gap, and the answer is still just one minus a single fraction: no accumulation of terms is ever carried.",
            "S₃ = 3/4. Notice the pattern of the answers, 1/2, 2/3, 3/4: the sum after n terms is n/(n + 1), which is what a telescoping series looks like from outside.",
            "S₉ = 9/10, and the gap left is 1/10. As n grows the sum approaches 1 without reaching it, so the infinite series has the exact value 1. Only the ends ever survive."
          ],
          "frames": [
            {
              "x": [0, 1.2],
              "intervals": [
                { "from": 0, "to": 1, "soft": true, "label": "limit 1" },
                { "from": 0, "to": 0.5 }
              ],
              "points": [{ "x": 0.5, "y": 0, "label": "S₁ = 1/2" }]
            },
            {
              "x": [0, 1.2],
              "intervals": [
                { "from": 0, "to": 1, "soft": true, "label": "limit 1" },
                { "from": 0, "to": 0.6667 }
              ],
              "points": [{ "x": 0.6667, "y": 0, "label": "S₂ = 2/3" }]
            },
            {
              "x": [0, 1.2],
              "intervals": [
                { "from": 0, "to": 1, "soft": true, "label": "limit 1" },
                { "from": 0, "to": 0.75 }
              ],
              "points": [{ "x": 0.75, "y": 0, "label": "S₃ = 3/4" }]
            },
            {
              "x": [0, 1.2],
              "intervals": [
                { "from": 0, "to": 1, "soft": true, "label": "limit 1" },
                { "from": 0, "to": 0.9 }
              ],
              "points": [{ "x": 0.9, "y": 0, "label": "S₉ = 9/10" }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Choosing the machinery",
          "steps": [
            "<b>Is <i>t</i><sub>r</sub> a polynomial in <i>r</i>?</b> Then this topic is the wrong one: expand and use the standard sums of Topic 05.",
            "<b>Is it (linear in <i>r</i>) × (a fixed number raised to <i>r</i>)?</b> That is an AGP. Multiply the sum by the ratio, shift, subtract.",
            "<b>Is it a fraction with a factorised denominator?</b> Split it by partial fractions and look for a difference with a consecutive shift. Write the constant multiplier down immediately.",
            "<b>Is it a product of consecutive terms?</b> Use the <i>V</i><sub>n</sub> method: append the next factor and divide by the count plus one.",
            "<b>Is there a surd in the denominator, or a factorial?</b> Rationalise, or look for <i>t</i><sub>r</sub> = <i>f</i>(<i>r</i> + 1) − <i>f</i>(<i>r</i>). Both almost always telescope.",
            "<b>After telescoping, stop.</b> The answer is the first surviving term minus the last surviving term, and nothing else needs computing."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find Σ<sub>r=1</sub><sup>n</sup> 1/[<i>r</i>(<i>r</i> + 1)] and hence its value as <i>n</i> grows.",
          "steps": [
            "Partial fractions: 1/[<i>r</i>(<i>r</i> + 1)] = 1/<i>r</i> − 1/(<i>r</i> + 1). Producing this difference is the whole method.",
            "Writing the sum out: (1 − ½) + (½ − ⅓) + ⋯ + (1/<i>n</i> − 1/(<i>n</i> + 1)). Every interior fraction appears twice with opposite signs.",
            "Only the ends survive: <i>S</i><sub>n</sub> = 1 − 1/(<i>n</i> + 1) = <i>n</i>/(<i>n</i> + 1).",
            "As <i>n</i> grows, 1/(<i>n</i> + 1) → 0, so the infinite sum is exactly 1."
          ],
          "ans": "S<sub>n</sub> = n/(n + 1), and S<sub>∞</sub> = 1"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Sum 1/(1 · 4) + 1/(4 · 7) + 1/(7 · 10) + … to <i>n</i> terms.",
          "steps": [
            "The factors run 1, 4, 7, … and 4, 7, 10, …, both APs with difference 3, so <i>t</i><sub>r</sub> = 1/[(3<i>r</i> − 2)(3<i>r</i> + 1)].",
            "Split: <i>t</i><sub>r</sub> = (1/3)[1/(3<i>r</i> − 2) − 1/(3<i>r</i> + 1)]. The ⅓ comes from the gap between the two factors; dropping it is the standard error.",
            "Telescoping leaves the ends: <i>S</i><sub>n</sub> = (1/3)[1 − 1/(3<i>n</i> + 1)].",
            "= (1/3) · 3<i>n</i>/(3<i>n</i> + 1). Check at <i>n</i> = 1: 1/4, which is the first term. ✓"
          ],
          "ans": "S<sub>n</sub> = n/(3n + 1)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Evaluate Σ<sub>r=1</sub><sup>n</sup> 1/(√<i>r</i> + √(<i>r</i> + 1)), and then its value at <i>n</i> = 99.",
          "steps": [
            "Rationalise: multiply above and below by √(<i>r</i> + 1) − √<i>r</i>. The denominator becomes (<i>r</i> + 1) − <i>r</i> = 1.",
            "So each term is simply √(<i>r</i> + 1) − √<i>r</i>, already a difference of consecutive things.",
            "Telescoping: <i>S</i><sub>n</sub> = √(<i>n</i> + 1) − √1 = √(<i>n</i> + 1) − 1.",
            "At <i>n</i> = 99: √100 − 1 = 9. Rationalising turned a sum of awkward fractions into a clean telescoper."
          ],
          "ans": "S<sub>n</sub> = √(n + 1) − 1, and S₉₉ = 9"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[JEE Main] Sum 1 + 2 · 2 + 3 · 2<sup>2</sup> + 4 · 2<sup>3</sup> + … to <i>n</i> terms.",
              "a": "AGP with a = 1, d = 1, r = 2. Multiply by 2 and subtract: (1 − 2)Sₙ = 1 + 2 + ⋯ + 2ⁿ⁻¹ − n2ⁿ = 2ⁿ − 1 − n2ⁿ, so Sₙ = 1 + (n − 1)2ⁿ. Check n = 3: 1 + 4 + 12 = 17 = 1 + 2·8."
            },
            {
              "q": "[JEE Main] Sum to infinity: 1 + 3/4 + 5/16 + 7/64 + …",
              "a": "a = 1, d = 2, r = 1/4. S∞ = 1/(3/4) + 2(1/4)/(3/4)² = 4/3 + (1/2)(16/9) = 4/3 + 8/9 = 20/9."
            },
            {
              "q": "[JEE Main] Sum Σ<sub>r=1</sub><sup>n</sup> 1/[(2<i>r</i> − 1)(2<i>r</i> + 1)].",
              "a": "Split as (1/2)[1/(2r−1) − 1/(2r+1)]. Telescoping gives (1/2)[1 − 1/(2n+1)] = n/(2n+1). Check n = 1: 1/3."
            },
            {
              "q": "[JEE Advanced] Find Σ<sub>r=1</sub><sup>n</sup> <i>r</i> · <i>r</i>!",
              "a": "Note r·r! = (r + 1)! − r!, since (r+1)! = (r+1)r! = r·r! + r!. Telescoping gives (n + 1)! − 1! = (n + 1)! − 1."
            },
            {
              "q": "[JEE Advanced] Find Σ<sub>r=1</sub><sup>n</sup> <i>r</i>/(<i>r</i> + 1)! and its value as <i>n</i> grows.",
              "a": "Write r/(r+1)! = [(r+1) − 1]/(r+1)! = 1/r! − 1/(r+1)!. Telescoping gives Sₙ = 1 − 1/(n+1)!, so S∞ = 1."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "For |<i>r</i>| < 1, the sum to infinity of 1 + 2<i>r</i> + 3<i>r</i><sup>2</sup> + 4<i>r</i><sup>3</sup> + … is:",
          "correct": 1,
          "opts": [
            {
              "label": "1/(1 − <i>r</i>)",
              "nudge": "That is the plain GP sum 1 + r + r² + ⋯, which forgets the arithmetic weights 1, 2, 3, 4 entirely."
            },
            {
              "label": "1/(1 − <i>r</i>)<sup>2</sup>",
              "nudge": null
            },
            {
              "label": "<i>r</i>/(1 − <i>r</i>)<sup>2</sup>",
              "nudge": "That is Σnrⁿ, which is this series multiplied by r. The given series starts at the constant 1, not at r."
            },
            {
              "label": "1/(1 − <i>r</i><sup>2</sup>)",
              "nudge": "A spurious factorisation: (1 − r)² is not 1 − r². Test at r = 1/2, where the true sum is 4 and this gives 4/3."
            }
          ],
          "solution": "AGP with a = 1, d = 1, so S<sub>∞</sub> = 1/(1 − r) + r/(1 − r)² = [(1 − r) + r]/(1 − r)² = 1/(1 − r)². Convergence is governed entirely by r, never by a or d."
        },
        {
          "t": "mcq",
          "q": "To sum 1 + 4<i>x</i> + 7<i>x</i><sup>2</sup> + 10<i>x</i><sup>3</sup> + …, the correct method is:",
          "correct": 2,
          "opts": [
            {
              "label": "the AP sum formula",
              "nudge": "That handles the coefficients 1, 4, 7, 10 but ignores the powers of x sitting on every term."
            },
            {
              "label": "the GP sum formula",
              "nudge": "That handles the powers of x but treats the coefficients as constant, which they are not."
            },
            {
              "label": "multiply by <i>x</i> and subtract",
              "nudge": null
            },
            {
              "label": "expand and apply Σ<i>n</i>, Σ<i>n</i><sup>2</sup>",
              "nudge": "The standard sums only apply to a term that is a polynomial in n. Here the term carries x^(n−1), which is not."
            }
          ],
          "solution": "The general term is [1 + 3(n − 1)]x<sup>n−1</sup>, that is (linear in n) × (a power), which is an AGP. Multiplying the whole sum by x and subtracting collapses the arithmetic part to a constant 3 and leaves an ordinary GP."
        },
        {
          "t": "mcq",
          "q": "Σ<sub>r=1</sub><sup>n</sup> 1/[<i>r</i>(<i>r</i> + 1)] equals:",
          "correct": 1,
          "opts": [
            {
              "label": "1/[<i>n</i>(<i>n</i> + 1)]",
              "nudge": "That is the last term of the series, not the sum of all of them. At n = 2 it gives 1/6, while the sum is 1/2 + 1/6 = 2/3."
            },
            {
              "label": "<i>n</i>/(<i>n</i> + 1)",
              "nudge": null
            },
            {
              "label": "(<i>n</i> + 1)/<i>n</i>",
              "nudge": "The answer inverted. Every term is positive and less than 1, so the sum can never exceed 1, let alone be bigger than it."
            },
            {
              "label": "1 + 1/(<i>n</i> + 1)",
              "nudge": "The surviving endpoint has been added rather than subtracted. The telescope leaves V₁ − V_{n+1}, and the sign matters."
            }
          ],
          "solution": "1/[r(r + 1)] = 1/r − 1/(r + 1), so the sum telescopes to 1 − 1/(n + 1) = n/(n + 1). As n grows this approaches 1, so the infinite series sums to exactly 1."
        },
        {
          "t": "mcq",
          "q": "Σ<sub>r=1</sub><sup>n</sup> 1/(√<i>r</i> + √(<i>r</i> + 1)) equals:",
          "correct": 1,
          "opts": [
            {
              "label": "√<i>n</i> − 1",
              "nudge": "An off-by-one on the surviving endpoint: the last term contributes √(n + 1), not √n. Test at n = 1, where the sum is √2 − 1 and this gives 0."
            },
            {
              "label": "√(<i>n</i> + 1) − 1",
              "nudge": null
            },
            {
              "label": "√(<i>n</i> + 1) + 1",
              "nudge": "Wrong sign on the first endpoint. The telescope subtracts √1, it does not add it."
            },
            {
              "label": "1 − 1/√(<i>n</i> + 1)",
              "nudge": "This misremembers the shape, borrowing the form of the 1/[r(r+1)] answer. The rationalised term is a difference of square roots, not of reciprocals."
            }
          ],
          "solution": "Rationalising gives 1/(√r + √(r + 1)) = √(r + 1) − √r, since the denominator becomes (r + 1) − r = 1. Telescoping leaves √(n + 1) − √1. At n = 99 that is 9, a favourite exam value."
        },
        {
          "t": "mistakes",
          "items": [
            "Trying the <b>AP or GP sum formula alone</b> on an AGP, or the Σ<i>n</i><sup>k</sup> formulas, which need a polynomial term. The dominant AGP error.",
            "Writing an AGP <b><i>S</i><sub>∞</sub></b> without checking |<i>r</i>| < 1. Same physics as the GP trap, same mark lost.",
            "Applying the <i>r</i> ≠ 1 formula when <b><i>r</i> = 1</b>. The series is then a plain AP.",
            "Swapping the roles of <b><i>d</i> and <i>r</i></b>, that is misreading which factor is the AP part and which the GP part.",
            "Failing to rewrite <i>t</i><sub>r</sub> as a <b>difference</b> before summing, and brute-forcing a fraction or a surd instead.",
            "Dropping the <b>constant multiplier</b> that the difference form carries, or writing <i>V</i><sub>0</sub> − <i>V</i><sub>n</sub> instead of <i>V</i><sub>1</sub> − <i>V</i><sub>n+1</sub>."
          ]
        },
        {
          "t": "protip",
          "html": "for an agp, do not memorise <i>S</i><sub>n</sub>: re-derive it with the multiply-and-subtract every time, it is faster and error-proof. for a fraction, try partial fractions and hunt for a consecutive shift. for a surd in a denominator, rationalise. and after telescoping, stop: the answer is first surviving term minus last."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "t<sub>n</sub> = [a + (n − 1)d] r<sup>n−1</sup>",
              "note": "linear in n, times a power"
            },
            {
              "f": "multiply S<sub>n</sub> by r, shift, subtract",
              "note": "always works, never misremembers"
            },
            {
              "f": "S<sub>∞</sub> = a/(1 − r) + dr/(1 − r)<sup>2</sup>, |r| < 1",
              "note": "convergence depends only on r"
            },
            {
              "f": "t<sub>r</sub> = V<sub>r</sub> − V<sub>r+1</sub> ⇒ Σ = V<sub>1</sub> − V<sub>n+1</sub>",
              "note": "only the ends survive"
            },
            {
              "f": "Σ 1/[r(r + 1)] = n/(n + 1) → 1",
              "note": "and Σ 1/[(2r−1)(2r+1)] = n/(2n + 1)"
            },
            {
              "f": "Σ r·r! = (n + 1)! − 1 · Σ 1/(√r + √(r+1)) = √(n+1) − 1",
              "note": "factorials and surds telescope too"
            }
          ],
          "aids": [
            "“agp: multiply by r and subtract, once”",
            "“write it as a difference and the middle disappears”"
          ]
        }
      ]
    }
  ]
};

export default ch08Sequences;
