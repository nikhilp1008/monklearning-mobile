/**
 * Chapter 04 · Complex Numbers and Quadratic Equations — Mathematics, Class 11.
 *
 * Restructured from pages 283–351 of the Drona Class 11 Mathematics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md,
 * matching the voice and density of math-11-01-sets.ts.
 *
 * Three decisions worth recording.
 *
 * 1. The source runs nine numbered subtopics: 01–06 in the main text, a
 *    Supplement (07, real quadratics) and two Round 2 Addenda (08,
 *    transformation of equations; 09, complex numbers as vectors). Nine
 *    sections would break the 4–6 topic rule and would also split material a
 *    student meets as one idea, so the addenda are folded in: 05 (Euler form,
 *    roots of unity) joins 03 as one polar-form topic, 09 joins 06 as one
 *    Argand-geometry topic, and 08 joins 07 as one real-quadratic topic. The
 *    result is six self-contained topics with nothing dropped except the
 *    source's own cross-references and diagnostic tags, which are authoring
 *    metadata rather than content.
 *
 * 2. The writer's per-subtopic exam guidance is merged into the single hook on
 *    topic 1, each under its own bold topic heading, for the same reason
 *    math-11-01-sets.ts does it: the reader renders `hook` on topic 1 only, and
 *    throwing five paragraphs of real exam guidance away is worse than one
 *    slightly long accordion.
 *
 * 3. No `diagram` blocks beyond one `numsys`. The reader implements six figure
 *    kinds and none of them is an Argand plane, so every figure this chapter
 *    actually wants (rotation, loci, roots of unity as a polygon, the parabola
 *    sign panels) would render as a silent hole. `numsys` earns its place once,
 *    where ℂ is introduced as the last enlargement of the number system, and
 *    the geometry is carried in prose, formulas and worked examples instead.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch04Complex: Chapter = {
  "chapter": "04",
  "title": "Complex Numbers and Quadratic Equations",
  "subject": "Mathematics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Complex Numbers and the Algebra of i",
      "chip": "01 ALGEBRA",
      "kalam": "i is a quarter turn, not a ghost",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Complex Numbers and the Algebra of i</b><br>This is the load-bearing wall of the chapter. CBSE Boards ask direct 1–2 mark questions: simplify a power of <i>i</i>, express a number in <i>a</i> + <i>ib</i> form, find <i>x</i> and <i>y</i> by equating real and imaginary parts, compute a multiplicative inverse. JEE Main assumes this fluency in every complex-number problem and tests it standalone through powers of <i>i</i> or a condition for a quotient to be purely real. JEE Advanced almost never tests it in isolation, but one slow arithmetic step here costs you time on the hard rotation problems.<br><br><b>02 · The Modulus and the Conjugate</b><br>The algebraic engine of the whole chapter. The single identity <b><i>z</i> <i>z̄</i> = |<i>z</i>|<sup>2</sup></b> is what turns “divide by a complex number” and “prove this is real” into ordinary real arithmetic. CBSE gives reliable 1–2 mark questions on conjugate, modulus and the inverse <i>z̄</i>/|<i>z</i>|<sup>2</sup>. JEE Main tests purely-real conditions, modulus of a product and modulus inequalities every single year. JEE Advanced assumes the property list is silent reflex.<br><br><b>03 · The Argand Plane, Polar Form and De Moivre</b><br>The single most leveraged idea in the chapter. CBSE asks 2–3 mark questions on polar form and the four-quadrant principal argument. JEE Main tests argument algebra, polar conversion and De Moivre powers every year, and Euler form with cube or fourth roots of unity most years. JEE Advanced treats the roots-of-unity toolkit as assumed knowledge, and many problems are simply unsolvable without it. The signature trap is reporting tan<sup>−1</sup>(<i>y</i>/<i>x</i>) without fixing the quadrant.<br><br><b>04 · Argand Geometry: Rotation, Loci and Vectors</b><br>Beyond Class 11 boards, so skip it if you are writing boards only. JEE Main uses distance, simple loci and basic rotation regularly, and hides the perpendicularity test inside “show these three points form a right-angled triangle” or “find the area of this triangle”. JEE Advanced treats this as core, high-yield ground: the rotation theorem, Apollonius circles, arg-loci, collinearity and modulus extrema on a locus.<br><br><b>05 · Quadratic Equations with Complex Roots</b><br>Where the first four topics pay off: the quadratic formula, which failed whenever the discriminant was negative, now succeeds for every quadratic. CBSE asks the staple solve-with-negative-discriminant question. JEE Main asks you to build a quadratic from a given complex root, to use the conjugate-root theorem, and to extract the square root of a complex number. JEE Advanced pushes into complex coefficients, where roots are <b>not</b> a conjugate pair.<br><br><b>06 · Real Quadratics: Sign, Location and Transformation</b><br>The most heavily examined material in the chapter. CBSE takes 2–4 marks on the nature of roots, the maximum or minimum of a quadratic expression, simple quadratic inequalities, and “form the equation whose roots are <i>α</i> + 2 and <i>β</i> + 2”. JEE Main draws two of its most reliable single-question patterns from here: the common root of two quadratics, and “find all parameter values for which <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> keeps one sign for every real <i>x</i>”, plus the transformation substitutions. JEE Advanced pushes into location of roots relative to a number or an interval, usually with one boundary case designed to be missed, and into Newton's power-sum recurrence."
        },
        {
          "t": "p",
          "html": "The equation <i>x</i><sup>2</sup> + 1 = 0 has no real solution, because no real number squares to a negative. That is exactly the discomfort earlier generations felt about <i>x</i> + 5 = 2, which was unsolvable until somebody agreed to accept negative numbers. Every time a familiar equation refuses to be solved, the number system gets enlarged. Complex numbers are the enlargement that finally lets <b>every polynomial equation have a root</b>."
        },
        {
          "t": "p",
          "html": "“Imaginary” is unfortunate branding. Picture a clock hand pointing right, along the positive real direction. Multiplying by <i>i</i> rotates it 90° anticlockwise, so it points up. Multiply by <i>i</i> again and you have turned 180°, so the hand points left, which is to say you have arrived at −1. That is the entire content of <b><i>i</i><sup>2</sup> = −1</b>: two quarter-turns make a half-turn. It also explains why <i>i</i><sup>4</sup> = 1, a full turn brings you home, and why the powers of <i>i</i> repeat every four steps."
        },
        {
          "t": "think",
          "html": "<i>i</i> is not a ghost number you have to believe in. it is a quarter turn. once you read multiplication by <i>i</i> as “turn left”, every sign in this chapter stops being arbitrary."
        },
        {
          "t": "p",
          "html": "A complex number is an <b>address</b>. In a planned grid city like Chandigarh, “three sectors east, then two sectors north” pins exactly one location. Writing <i>z</i> = 3 + 2<i>i</i> does the same thing: the real part is the east-west reading, the imaginary part is the north-south reading. Two addresses match only if <b>both</b> coordinates agree, which is precisely why equality of complex numbers needs two conditions and not one."
        },
        {
          "t": "def",
          "term": "Complex number",
          "html": "<i>z</i> = <i>a</i> + <i>ib</i> with <i>a</i>, <i>b</i> ∈ ℝ. Here <i>a</i> = Re(<i>z</i>) is the <b>real part</b> and <i>b</i> = Im(<i>z</i>) is the <b>imaginary part</b>. Read that second one twice: Im(<i>z</i>) = <i>b</i>, a real number, <b>not</b> <i>ib</i>. <i>z</i> is purely real if <i>b</i> = 0 and purely imaginary if <i>a</i> = 0 and <i>b</i> ≠ 0."
        },
        {
          "t": "defgrid",
          "title": "Notation to memorise",
          "rows": [
            {
              "k": "Standard form",
              "v": "<i>z</i> = <i>a</i> + <i>ib</i>, real and imaginary parts separated"
            },
            {
              "k": "Parts",
              "v": "Re(<i>z</i>) = <i>a</i> · Im(<i>z</i>) = <i>b</i>, both real numbers"
            },
            {
              "k": "Equality",
              "v": "<i>a</i> + <i>ib</i> = <i>c</i> + <i>id</i> ⟺ <i>a</i> = <i>c</i> <b>and</b> <i>b</i> = <i>d</i>"
            },
            {
              "k": "Purely real / imaginary",
              "v": "<i>b</i> = 0 · <i>a</i> = 0 with <i>b</i> ≠ 0"
            },
            {
              "k": "Order",
              "v": "undefined on ℂ. “9 + 6<i>i</i> > 3 + 2<i>i</i>” is meaningless"
            },
            {
              "k": "Zero",
              "v": "0 = 0 + <i>i</i>0, the only number with both parts zero"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE NUMBER SYSTEM, ONE LAST TIME",
          "tag": "ℂ closes it",
          "main": "ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ",
          "legend": [
            "each step was forced by an equation the previous system could not solve",
            "ℤ solved x + 5 = 2 · ℚ solved 2x = 1 · ℝ solved x² = 2 · ℂ solves x² = −1"
          ],
          "note": "Every real number is complex, with imaginary part 0. What ℝ has and ℂ loses is order: < and > simply do not apply to non-real complex numbers."
        },
        {
          "t": "diagram",
          "kind": "numsys",
          "kicker": "DIAGRAM · TAP A NUMBER SYSTEM"
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE POWERS OF i",
          "tag": "period 4",
          "main": "i<sup>4k</sup> = 1 · i<sup>4k+1</sup> = i · i<sup>4k+2</sup> = −1 · i<sup>4k+3</sup> = −i",
          "legend": [
            "only n mod 4 matters; for negative n add a multiple of 4 first",
            "i<sup>n</sup> + i<sup>n+1</sup> + i<sup>n+2</sup> + i<sup>n+3</sup> = 0, any four consecutive powers cancel"
          ],
          "note": "Worth memorising alongside: (1 + i)² = 2i and (1 − i)² = −2i. They shortcut most power problems."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE POWERS REPEAT, TAP A LINE",
          "steps": [
            {
              "eq": "i<sup>2</sup> = −1, so i<sup>4</sup> = (i<sup>2</sup>)<sup>2</sup> = (−1)<sup>2</sup> = 1",
              "why": "The definition, squared. Four quarter-turns are a full turn, and a full turn is doing nothing."
            },
            {
              "eq": "write n = 4k + r with r ∈ {0, 1, 2, 3}",
              "why": "Division with remainder. Every integer sits in exactly one of the four classes, which is what “period 4” means."
            },
            {
              "eq": "i<sup>n</sup> = (i<sup>4</sup>)<sup>k</sup> · i<sup>r</sup> = 1<sup>k</sup> · i<sup>r</sup> = i<sup>r</sup>",
              "why": "The whole 4k block collapses to 1, so only the remainder survives. This is why you divide the exponent by 4 and throw the quotient away."
            },
            {
              "eq": "so i<sup>n</sup> ∈ {1, i, −1, −i}, fixed by n mod 4",
              "why": "The four values of i<sup>r</sup>. Adding them gives 1 + i − 1 − i = 0, which is the four-consecutive-powers identity, and it holds starting from any n because you can factor i<sup>n</sup> out first."
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The four operations",
          "rows": [
            {
              "k": "Addition",
              "v": "(<i>a</i> + <i>ib</i>) + (<i>c</i> + <i>id</i>) = (<i>a</i> + <i>c</i>) + <i>i</i>(<i>b</i> + <i>d</i>)"
            },
            {
              "k": "Subtraction",
              "v": "(<i>a</i> + <i>ib</i>) − (<i>c</i> + <i>id</i>) = (<i>a</i> − <i>c</i>) + <i>i</i>(<i>b</i> − <i>d</i>)"
            },
            {
              "k": "Multiplication",
              "v": "(<i>ac</i> − <i>bd</i>) + <i>i</i>(<i>ad</i> + <i>bc</i>), after applying <i>i</i><sup>2</sup> = −1"
            },
            {
              "k": "Division",
              "v": "multiply top and bottom by <i>c</i> − <i>id</i>, valid when <i>c</i> + <i>id</i> ≠ 0"
            },
            {
              "k": "Additive inverse",
              "v": "−<i>z</i> = −<i>a</i> + <i>i</i>(−<i>b</i>), both signs flip"
            },
            {
              "k": "Identities",
              "v": "0 = 0 + <i>i</i>0 for +, and 1 = 1 + <i>i</i>0 for ×"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · MULTIPLICATIVE INVERSE",
          "tag": "z ≠ 0",
          "main": "z<sup>−1</sup> = (a − ib) / (a<sup>2</sup> + b<sup>2</sup>)",
          "legend": [
            "the number a − ib that clears the denominator is the conjugate of z",
            "a² + b² > 0 whenever z ≠ 0, so the division is always legal"
          ],
          "note": "This inverse is unique: if zs = 1 and zs′ = 1 then s = s(zs′) = (sz)s′ = s′. Every non-zero complex number has exactly one reciprocal."
        },
        {
          "t": "proc",
          "title": "The two standard methods",
          "steps": [
            "<b>Clearing the denominator.</b> To write <i>z</i><sub>1</sub>/<i>z</i><sub>2</sub> in <i>a</i> + <i>ib</i> form, multiply numerator and denominator by <i>c</i> − <i>id</i>. The denominator becomes the real number <i>c</i><sup>2</sup> + <i>d</i><sup>2</sup>; then separate the parts. Leaving a complex denominator is not standard form and loses the mark.",
            "<b>Equating real and imaginary parts.</b> For an equation <i>A</i>(<i>x</i>, <i>y</i>) + <i>iB</i>(<i>x</i>, <i>y</i>) = <i>C</i> + <i>iD</i> in real unknowns, set <i>A</i> = <i>C</i> and <i>B</i> = <i>D</i>. One complex equation becomes two simultaneous real ones. This is the single most-tested technique in the topic.",
            "<b>Reducing a power of i.</b> Divide the exponent by 4 and keep only the remainder. If the exponent is negative, add a multiple of 4 large enough to make it positive first, then reduce."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Express (3 + 2<i>i</i>) + (−6 + 5<i>i</i>) and (2 + 3<i>i</i>)(1 − 4<i>i</i>) in <i>a</i> + <i>ib</i> form.",
          "steps": [
            "Addition is componentwise: (3 − 6) + (2 + 5)<i>i</i> = −3 + 7<i>i</i>.",
            "Multiply out: 2 − 8<i>i</i> + 3<i>i</i> − 12<i>i</i><sup>2</sup> = 2 − 5<i>i</i> + 12, replacing <i>i</i><sup>2</sup> by −1 the moment it appears."
          ],
          "ans": "−3 + 7i and 14 − 5i"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Evaluate <i>i</i><sup>135</sup> + <i>i</i><sup>−50</sup>.",
          "steps": [
            "135 = 4(33) + 3, so <i>i</i><sup>135</sup> = <i>i</i><sup>3</sup> = −<i>i</i>.",
            "The exponent is negative, so lift it: <i>i</i><sup>−50</sup> = <i>i</i><sup>−50+52</sup> = <i>i</i><sup>2</sup> = −1.",
            "Adding, −1 − <i>i</i>. Never try to reduce a negative exponent mod 4 directly."
          ],
          "ans": "−1 − i"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "For real <i>θ</i>, when is <i>z</i> = (3 + 2<i>i</i> sin <i>θ</i>) / (1 − 2<i>i</i> sin <i>θ</i>) purely real?",
          "steps": [
            "Do not expand blindly. Clear the denominator with 1 + 2<i>i</i> sin <i>θ</i>.",
            "Numerator: (3 + 2<i>i</i> sin <i>θ</i>)(1 + 2<i>i</i> sin <i>θ</i>) = (3 − 4 sin<sup>2</sup><i>θ</i>) + 8<i>i</i> sin <i>θ</i>; denominator 1 + 4 sin<sup>2</sup><i>θ</i>, a positive real.",
            "Purely real means the imaginary part vanishes: 8 sin <i>θ</i> = 0."
          ],
          "ans": "θ = nπ, n ∈ ℤ · rationalise first, then read off the part that must vanish"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Evaluate <i>S</i> = <i>i</i><sup>1!</sup> + <i>i</i><sup>2!</sup> + ⋯ + <i>i</i><sup>100!</sup>.",
          "steps": [
            "For <i>n</i> ≥ 4, <i>n</i>! contains both 2 and 4 as factors, so 4 divides <i>n</i>! and <i>i</i><sup><i>n</i>!</sup> = 1. That is 97 terms, each 1.",
            "The first three: <i>i</i><sup>1</sup> = <i>i</i>, <i>i</i><sup>2</sup> = −1, <i>i</i><sup>6</sup> = <i>i</i><sup>2</sup> = −1.",
            "<i>S</i> = (<i>i</i> − 1 − 1) + 97 = 95 + <i>i</i>. A hundred-term sum in three lines, because the tail is constant."
          ],
          "ans": "S = 95 + i"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Express in <i>a</i> + <i>ib</i>: (a) (5 − 3<i>i</i>) − (2 + 4<i>i</i>), (b) (1 + <i>i</i>)<sup>2</sup>, (c) (2 + <i>i</i>)(2 − <i>i</i>).",
              "a": "(a) 3 − 7<i>i</i> · (b) 2<i>i</i> · (c) 5, a real number."
            },
            {
              "q": "[JEE Main] Evaluate <i>i</i><sup>−39</sup> + <i>i</i><sup>16</sup> + <i>i</i><sup>257</sup>.",
              "a": "<i>i</i><sup>−39</sup> = <i>i</i><sup>1</sup> = <i>i</i>; <i>i</i><sup>16</sup> = 1; 257 = 4(64) + 1 so <i>i</i><sup>257</sup> = <i>i</i>. Sum = 1 + 2<i>i</i>."
            },
            {
              "q": "[JEE Main] Find real <i>x</i>, <i>y</i> if (<i>x</i> + <i>iy</i>)(2 − 3<i>i</i>) = 4 + <i>i</i>.",
              "a": "<i>x</i> + <i>iy</i> = (4 + <i>i</i>)(2 + 3<i>i</i>)/13 = (5 + 14<i>i</i>)/13, so <i>x</i> = 5/13, <i>y</i> = 14/13."
            },
            {
              "q": "[JEE Main] Find the multiplicative inverse of √5 + 3<i>i</i>.",
              "a": "(√5 − 3<i>i</i>)/(5 + 9) = √5/14 − (3/14)<i>i</i>."
            },
            {
              "q": "[JEE Advanced] Find the least positive integer <i>m</i> with ((1 + <i>i</i>)/(1 − <i>i</i>))<sup><i>m</i></sup> = 1.",
              "a": "The base is (1 + <i>i</i>)<sup>2</sup>/2 = <i>i</i>, so <i>i</i><sup><i>m</i></sup> = 1 needs <i>m</i> a multiple of 4. Least <i>m</i> = 4."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "For an integer <i>k</i>, <i>i</i><sup>4<i>k</i>+3</sup> equals:",
          "correct": 3,
          "opts": [
            {
              "label": "1",
              "nudge": "That reads only i<sup>4k</sup>, dropping the +3 entirely. The remainder is the whole answer."
            },
            {
              "label": "i",
              "nudge": "That is remainder 1, not 3. Count the cycle 1, i, −1, −i from position 0."
            },
            {
              "label": "−1",
              "nudge": "That is i<sup>4k+2</sup>, off by one step in the cycle."
            },
            {
              "label": "−i",
              "nudge": null
            }
          ],
          "solution": "The 4k block collapses to 1, leaving i³ = −i. Only the exponent mod 4 ever matters."
        },
        {
          "t": "mcq",
          "q": "√(−4) · √(−9) equals:",
          "correct": 1,
          "opts": [
            {
              "label": "6",
              "nudge": "That is the illegal move √(−4)·√(−9) = √36. The rule √a·√b = √(ab) needs non-negative a and b."
            },
            {
              "label": "−6",
              "nudge": null
            },
            {
              "label": "6i",
              "nudge": "One factor was converted to i-form and the other was not, so a single i survives instead of i²."
            },
            {
              "label": "36",
              "nudge": "That multiplies 4 and 9 and forgets the roots as well as the signs."
            }
          ],
          "solution": "Convert first: √(−4) = 2i and √(−9) = 3i, so the product is 6i² = −6. Always move to i-form before multiplying roots of negatives."
        },
        {
          "t": "mcq",
          "q": "If <i>a</i> + <i>ib</i> = <i>c</i> + <i>id</i> with <i>a</i>, <i>b</i>, <i>c</i>, <i>d</i> real, then necessarily:",
          "correct": 2,
          "opts": [
            {
              "label": "a = c only",
              "nudge": "Half the information. Matching one coordinate of an address does not pin the address."
            },
            {
              "label": "b = d only",
              "nudge": "The other half, and equally incomplete. Both parts must match."
            },
            {
              "label": "a = c and b = d",
              "nudge": null
            },
            {
              "label": "a + b = c + d",
              "nudge": "This collapses a complex equation into one real equation, losing exactly the information the second condition carries."
            }
          ],
          "solution": "One complex equation is always two real equations. That is the whole basis of the equating-parts method."
        },
        {
          "t": "mcq",
          "q": "The multiplicative inverse of <i>i</i> is:",
          "correct": 1,
          "opts": [
            {
              "label": "i",
              "nudge": "That assumes i is its own inverse, but i · i = −1, not 1."
            },
            {
              "label": "−i",
              "nudge": null
            },
            {
              "label": "1",
              "nudge": "1 is the multiplicative identity, not the inverse of i."
            },
            {
              "label": "−1",
              "nudge": "That is i², which is what you get by squaring, not by inverting."
            }
          ],
          "solution": "1/i = (1/i)(−i/−i) = −i/1 = −i. Check: i(−i) = −i² = 1. Rationalise even the smallest denominator."
        },
        {
          "t": "mistakes",
          "items": [
            "Leaving <b><i>i</i><sup>2</sup> un-simplified</b>, or treating it as +1. Replace it with −1 the instant it appears.",
            "Combining roots of negatives directly. <b>√(−2)·√(−3) ≠ √6</b>: convert to <i>i</i>√2 · <i>i</i>√3 = −√6 first.",
            "Writing Im(<i>z</i>) = <i>bi</i>. The imaginary part is the <b>real number <i>b</i></b>, with no <i>i</i> attached.",
            "Applying < or > to complex numbers. <b>Order is undefined on ℂ</b>, so an inequality between non-real numbers means nothing.",
            "Leaving a complex denominator, or equating only one of the two parts. Both cost the mark even when the algebra above them was right."
          ]
        },
        {
          "t": "protip",
          "html": "any four consecutive powers of <i>i</i> add to zero. spot that inside a long sum and it collapses in one line, which is exactly why examiners write sums of a hundred terms."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "i² = −1 · i⁴ᵏ = 1",
              "note": "only n mod 4 matters"
            },
            {
              "f": "z = a + ib · Re(z) = a · Im(z) = b",
              "note": "both parts are real"
            },
            {
              "f": "a + ib = c + id ⟺ a = c and b = d",
              "note": "one complex equation = two real ones"
            },
            {
              "f": "z₁z₂ = (ac − bd) + i(ad + bc)",
              "note": "divide by multiplying with c − id"
            },
            {
              "f": "z⁻¹ = (a − ib)/(a² + b²)",
              "note": "(1 + i)² = 2i · (1 − i)² = −2i"
            },
            {
              "f": "ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ",
              "note": "order is lost at the last step"
            }
          ],
          "aids": [
            "“divide the exponent by four, keep the remainder”",
            "“i is a quarter turn to the left”"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "The Modulus and the Conjugate",
      "chip": "02 MOD & CONJ",
      "kalam": "multiply by the mirror image, the imaginary part dies",
      "blocks": [
        {
          "t": "p",
          "html": "Picture a temple beside a still water tank at dawn. The reflection sits exactly as far below the waterline as the temple sits above it, and it stands at the same point along the shore. The <b>real axis is the waterline</b>: the conjugate <i>z̄</i> = <i>a</i> − <i>ib</i> is the reflection of <i>z</i> = <i>a</i> + <i>ib</i> across it. The real part is untouched; only the imaginary part flips sign. That is why a number in the first quadrant has its conjugate in the fourth, and why <i>z</i> = <i>z̄</i> happens exactly when <i>z</i> is sitting on the waterline, which is to say when <i>z</i> is purely real."
        },
        {
          "t": "p",
          "html": "The <b>modulus</b> is the as-the-crow-flies number. If <i>z</i> = <i>a</i> + <i>ib</i> is a grid address, three sectors east and two north, then |<i>z</i>| = √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>) is the straight-line distance from the origin to that address: Pythagoras on the grid. The address tells you <b>how to walk there</b>; the modulus tells you <b>how far it is</b>."
        },
        {
          "t": "def",
          "term": "Conjugate z̄",
          "html": "For <i>z</i> = <i>a</i> + <i>ib</i>, <b><i>z̄</i> = <i>a</i> − <i>ib</i></b>. Only the sign of the imaginary part flips. Contrast the additive inverse −<i>z</i> = −<i>a</i> − <i>ib</i>, where <b>both</b> signs flip. Mixing those two up is the most common error in the topic."
        },
        {
          "t": "def",
          "term": "Modulus |z|",
          "html": "<b>|<i>z</i>| = √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>) ≥ 0</b>, always the non-negative square root. The real-number shortcut |<i>x</i>| = ±<i>x</i> does <b>not</b> carry over: you can never write |<i>z</i>| = ±<i>z</i>, because the left side is a real number and the right side generally is not."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · THE ARGAND PLANE, TAP A QUANTITY",
          "mathChips": true,
          "chips": ["z", "z̄", "−z", "|z|"],
          "captions": [
            "z = 3 + 2i is the point (3, 2). The horizontal axis is real, the vertical axis is imaginary. The dropped legs are Re(z) = 3 and Im(z) = 2, both plain real numbers.",
            "The conjugate reflects across the real axis: same real part, imaginary part negated. First quadrant goes to fourth. z = z̄ only for points already on the axis.",
            "The additive inverse −z is a reflection through the origin, not across an axis. Both coordinates flip, so it lands in the opposite quadrant.",
            "The modulus is the length of the arrow from the origin: |z| = √(3² + 2²) = √13. It measures distance and carries no direction."
          ],
          "frames": [
            {
              "x": [-4.9, 4.9],
              "y": [-3.5, 3.5],
              "points": [{ "x": 3, "y": 2, "label": "z = 3 + 2i" }],
              "segments": [
                { "from": [3, 0], "to": [3, 2], "dash": true, "soft": true },
                { "from": [0, 2], "to": [3, 2], "dash": true, "soft": true }
              ],
              "labels": [
                { "x": 4.3, "y": -0.65, "text": "Re", "soft": true },
                { "x": 0.65, "y": 3.1, "text": "Im", "soft": true },
                { "x": 3, "y": -0.65, "text": "3", "soft": true },
                { "x": -0.5, "y": 2, "text": "2", "soft": true }
              ]
            },
            {
              "x": [-4.9, 4.9],
              "y": [-3.5, 3.5],
              "points": [
                { "x": 3, "y": 2, "label": "z", "soft": true },
                { "x": 3, "y": -2, "label": "z̄ = 3 − 2i" }
              ],
              "segments": [{ "from": [3, 2], "to": [3, -2], "dash": true, "soft": true }],
              "labels": [
                { "x": 4.3, "y": -0.65, "text": "Re", "soft": true },
                { "x": 0.65, "y": 3.1, "text": "Im", "soft": true }
              ]
            },
            {
              "x": [-4.9, 4.9],
              "y": [-3.5, 3.5],
              "points": [
                { "x": 3, "y": 2, "label": "z", "soft": true },
                { "x": -3, "y": -2, "label": "−z" }
              ],
              "segments": [{ "from": [3, 2], "to": [-3, -2], "dash": true, "soft": true }],
              "labels": [
                { "x": 4.3, "y": -0.65, "text": "Re", "soft": true },
                { "x": 0.65, "y": 3.1, "text": "Im", "soft": true }
              ]
            },
            {
              "x": [-4.9, 4.9],
              "y": [-3.5, 3.5],
              "points": [{ "x": 3, "y": 2, "label": "z" }],
              "segments": [
                { "from": [0, 0], "to": [3, 2], "arrow": true, "label": "|z| = √13" },
                { "from": [0, 0], "to": [3, 0], "dash": true, "soft": true },
                { "from": [3, 0], "to": [3, 2], "dash": true, "soft": true }
              ],
              "labels": [
                { "x": 4.3, "y": -0.65, "text": "Re", "soft": true },
                { "x": 0.65, "y": 3.1, "text": "Im", "soft": true }
              ]
            }
          ]
        },
        {
          "t": "think",
          "html": "multiplying a number by its mirror image kills the imaginary part completely. that one fact is behind every division you will ever do and every “show this is real” proof."
        },
        {
          "t": "formula",
          "kicker": "THE WORKHORSE IDENTITY",
          "tag": "learn this one first",
          "main": "z z̄ = a<sup>2</sup> + b<sup>2</sup> = |z|<sup>2</sup>",
          "legend": [
            "(a + ib)(a − ib) = a² − (ib)² = a² + b², a plain non-negative real number",
            "it converts a complex quantity into a real one, which is why division works"
          ],
          "note": "Restated: z⁻¹ = z̄ / |z|². On the unit circle |z| = 1 this collapses to z̄ = 1/z, a substitution worth a lot of marks."
        },
        {
          "t": "defgrid",
          "title": "Conjugate properties",
          "rows": [
            {
              "k": "Involution",
              "v": "the conjugate of <i>z̄</i> is <i>z</i> again"
            },
            {
              "k": "Recovering the parts",
              "v": "<i>z</i> + <i>z̄</i> = 2Re(<i>z</i>) · <i>z</i> − <i>z̄</i> = 2<i>i</i> Im(<i>z</i>)"
            },
            {
              "k": "Real test",
              "v": "<i>z</i> = <i>z̄</i> ⟺ <i>z</i> is purely real"
            },
            {
              "k": "Imaginary test",
              "v": "<i>z</i> + <i>z̄</i> = 0 ⟺ <i>z</i> is purely imaginary"
            },
            {
              "k": "Sums and products",
              "v": "conjugate of <i>z</i><sub>1</sub> ± <i>z</i><sub>2</sub> is <i>z̄</i><sub>1</sub> ± <i>z̄</i><sub>2</sub>; of <i>z</i><sub>1</sub><i>z</i><sub>2</sub> it is <i>z̄</i><sub>1</sub><i>z̄</i><sub>2</sub>"
            },
            {
              "k": "Quotients and powers",
              "v": "conjugate of <i>z</i><sub>1</sub>/<i>z</i><sub>2</sub> is <i>z̄</i><sub>1</sub>/<i>z̄</i><sub>2</sub> (<i>z</i><sub>2</sub> ≠ 0); of <i>z</i><sup><i>n</i></sup> it is (<i>z̄</i>)<sup><i>n</i></sup>"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "MODULUS PROPERTIES",
          "tag": "multiplicative, not additive",
          "main": "|z<sub>1</sub>z<sub>2</sub>| = |z<sub>1</sub>||z<sub>2</sub>| · |z<sup>n</sup>| = |z|<sup>n</sup>",
          "legend": [
            "|z| = 0 ⟺ z = 0 · |z| = |z̄| = |−z|, reflections do not change length",
            "|z₁/z₂| = |z₁|/|z₂| for z₂ ≠ 0 · |Re(z)| ≤ |z| and |Im(z)| ≤ |z|"
          ],
          "note": "Take the modulus factor by factor across a long product instead of multiplying it out. That single habit turns several JEE questions into one line."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE MODULUS IS MULTIPLICATIVE",
          "steps": [
            {
              "eq": "|z<sub>1</sub>z<sub>2</sub>|<sup>2</sup> = (z<sub>1</sub>z<sub>2</sub>)(conjugate of z<sub>1</sub>z<sub>2</sub>)",
              "why": "The workhorse identity, applied to the single number z₁z₂. Squaring the modulus is what lets you work with conjugates instead of square roots."
            },
            {
              "eq": "= z<sub>1</sub>z<sub>2</sub> z̄<sub>1</sub>z̄<sub>2</sub>",
              "why": "The conjugate of a product is the product of the conjugates. This is the step where the property list earns its keep."
            },
            {
              "eq": "= (z<sub>1</sub>z̄<sub>1</sub>)(z<sub>2</sub>z̄<sub>2</sub>) = |z<sub>1</sub>|<sup>2</sup>|z<sub>2</sub>|<sup>2</sup>",
              "why": "Multiplication in ℂ is commutative, so regroup each number with its own conjugate and apply the workhorse identity twice."
            },
            {
              "eq": "both sides ≥ 0, so |z<sub>1</sub>z<sub>2</sub>| = |z<sub>1</sub>||z<sub>2</sub>|",
              "why": "Taking non-negative square roots is safe precisely because a modulus is never negative. Notice that nothing here works for a sum: |z₁ + z₂| has a cross term that refuses to vanish, which is exactly why the sum only gets an inequality."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE TRIANGLE INEQUALITY",
          "tag": "≤, never =",
          "main": "|z<sub>1</sub> + z<sub>2</sub>| ≤ |z<sub>1</sub>| + |z<sub>2</sub>|",
          "legend": [
            "equality only when z₁ and z₂ point the same way, one a non-negative real multiple of the other",
            "reverse form: | |z₁| − |z₂| | ≤ |z₁ − z₂|"
          ],
          "note": "Parallelogram identity: |z₁ + z₂|² + |z₁ − z₂|² = 2(|z₁|² + |z₂|²). The two diagonals and the two sides, in one line."
        },
        {
          "t": "proc",
          "title": "Two standard methods",
          "steps": [
            "<b>Proving an expression is real or imaginary.</b> <i>E</i> is purely real ⟺ <i>E</i> equals its own conjugate; purely imaginary ⟺ <i>E</i> plus its conjugate is 0. Conjugating the whole expression and comparing is usually far faster than expanding into <i>a</i> + <i>ib</i>.",
            "<b>Modulus of a product, power or quotient.</b> Take |·| across the factors rather than multiplying out. For a product of <i>n</i> terms this replaces one enormous expansion with <i>n</i> square roots.",
            "<b>Clearing a complex denominator.</b> Multiply top and bottom by the conjugate of the denominator; the bottom becomes |denominator|<sup>2</sup>, a real number, and the standard form falls out."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the conjugate and the modulus of <i>z</i> = 3 + <i>i</i> and of <i>w</i> = 2 − 5<i>i</i>.",
          "steps": [
            "<i>z̄</i> = 3 − <i>i</i>, |<i>z</i>| = √(3<sup>2</sup> + 1<sup>2</sup>) = √10.",
            "<i>w̄</i> = 2 + 5<i>i</i>, |<i>w</i>| = √(2<sup>2</sup> + (−5)<sup>2</sup>) = √29. The modulus squares the imaginary part, so its sign never survives."
          ],
          "ans": "3 − i, √10 · 2 + 5i, √29"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Express (5 − 3<i>i</i>)<sup>3</sup> in <i>a</i> + <i>ib</i> form and state its conjugate.",
          "steps": [
            "Expand as a cube: 5<sup>3</sup> − 3(5<sup>2</sup>)(3<i>i</i>) + 3(5)(3<i>i</i>)<sup>2</sup> − (3<i>i</i>)<sup>3</sup>.",
            "(3<i>i</i>)<sup>2</sup> = −9 and (3<i>i</i>)<sup>3</sup> = −27<i>i</i>, so this is 125 − 225<i>i</i> − 135 + 27<i>i</i>.",
            "Collect: −10 − 198<i>i</i>. Conjugating flips one sign only."
          ],
          "ans": "−10 − 198i · conjugate −10 + 198i"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "If <i>a</i> + <i>ib</i> = (<i>c</i> + <i>i</i>)/(<i>c</i> − <i>i</i>) with <i>c</i> real, prove that <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = 1.",
          "steps": [
            "Do not rationalise. Take the modulus of both sides instead.",
            "|<i>a</i> + <i>ib</i>| = |<i>c</i> + <i>i</i>| / |<i>c</i> − <i>i</i>| = √(<i>c</i><sup>2</sup> + 1) / √(<i>c</i><sup>2</sup> + 1) = 1.",
            "So √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>) = 1, hence <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = 1."
          ],
          "ans": "a² + b² = 1 · one line, because the modulus divides across a quotient"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "If (2 + <i>i</i>)(2 + 2<i>i</i>)(2 + 3<i>i</i>) ⋯ (2 + <i>ni</i>) = <i>x</i> + <i>iy</i>, find 5 · 8 · 13 ⋯ (4 + <i>n</i><sup>2</sup>).",
          "steps": [
            "Take the modulus across every factor: |2 + <i>ki</i>| = √(4 + <i>k</i><sup>2</sup>).",
            "So the product of all the √(4 + <i>k</i><sup>2</sup>) equals |<i>x</i> + <i>iy</i>| = √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>).",
            "Square both sides: the product of (4 + <i>k</i><sup>2</sup>) for <i>k</i> = 1 to <i>n</i> is <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>, and that product is exactly 5 · 8 · 13 ⋯ (4 + <i>n</i><sup>2</sup>)."
          ],
          "ans": "x² + y² · no expansion needed, the modulus does all the work"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the conjugate and modulus of (a) −3 + 4<i>i</i>, (b) (1 + <i>i</i>)/(1 − <i>i</i>).",
              "a": "(a) −3 − 4<i>i</i>, modulus 5. (b) the quotient is <i>i</i>, so conjugate −<i>i</i> and modulus 1."
            },
            {
              "q": "[JEE Main] If <i>z</i> = (2 + <i>i</i>)/(1 − <i>i</i>), find <i>z</i> <i>z̄</i>.",
              "a": "<i>z</i> = (1 + 3<i>i</i>)/2, so <i>z</i> <i>z̄</i> = |<i>z</i>|<sup>2</sup> = (1 + 9)/4 = 5/2."
            },
            {
              "q": "[JEE Main] Find |(1 + <i>i</i>)<sup>10</sup>|.",
              "a": "|1 + <i>i</i>|<sup>10</sup> = (√2)<sup>10</sup> = 2<sup>5</sup> = 32."
            },
            {
              "q": "[JEE Advanced] Show that (<i>z</i> − 1)/(<i>z</i> + 1) is purely imaginary ⟺ |<i>z</i>| = 1, with <i>z</i> ≠ −1.",
              "a": "Set <i>w</i> = (<i>z</i> − 1)/(<i>z</i> + 1). Purely imaginary means <i>w</i> + <i>w̄</i> = 0; clearing denominators reduces to <i>z</i> <i>z̄</i> = 1, that is |<i>z</i>| = 1."
            },
            {
              "q": "[JEE Advanced] Verify the parallelogram identity for <i>z</i><sub>1</sub> = 3 + <i>i</i>, <i>z</i><sub>2</sub> = 1 − 2<i>i</i>.",
              "a": "|4 − <i>i</i>|<sup>2</sup> + |2 + 3<i>i</i>|<sup>2</sup> = 17 + 13 = 30, and 2(10 + 5) = 30."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "For any complex <i>z</i>, <i>z</i> <i>z̄</i> equals:",
          "correct": 1,
          "opts": [
            {
              "label": "|z|",
              "nudge": "Drops the square. Check dimensions: z z̄ = a² + b², which is |z| squared."
            },
            {
              "label": "|z|²",
              "nudge": null
            },
            {
              "label": "(z̄)²",
              "nudge": "That is the conjugate multiplied by itself, not z multiplied by its conjugate. The two factors must be different."
            },
            {
              "label": "2Re(z)",
              "nudge": "That is z + z̄, the sum rather than the product. Sum recovers the real part; product kills the imaginary one."
            }
          ],
          "solution": "(a + ib)(a − ib) = a² + b² = |z|². This is the identity every division and every realness proof runs on."
        },
        {
          "t": "mcq",
          "q": "If <i>z</i> = −3 − 4<i>i</i>, then |<i>z</i>| equals:",
          "correct": 1,
          "opts": [
            {
              "label": "−5",
              "nudge": "A modulus is a distance and can never be negative, whatever the signs of the parts."
            },
            {
              "label": "5",
              "nudge": null
            },
            {
              "label": "7",
              "nudge": "That is |−3| + |−4|, adding the legs instead of using Pythagoras on them."
            },
            {
              "label": "√7",
              "nudge": "That subtracts the squares instead of adding them. Both parts contribute positively."
            }
          ],
          "solution": "|z| = √(9 + 16) = 5. Squaring destroys both minus signs before the root is ever taken."
        },
        {
          "t": "mcq",
          "q": "The conjugate of <i>z</i><sub>1</sub><i>z</i><sub>2</sub> equals:",
          "correct": 1,
          "opts": [
            {
              "label": "z̄₁ + z̄₂",
              "nudge": "That is the rule for a sum, applied to a product. Conjugation preserves the operation, it does not change it."
            },
            {
              "label": "z̄₁ z̄₂",
              "nudge": null
            },
            {
              "label": "z₁ z̄₂",
              "nudge": "Only one factor was conjugated. Conjugation must reach every factor."
            },
            {
              "label": "z₁ + z₂",
              "nudge": "The product turned into a sum and the bars vanished, two errors at once."
            }
          ],
          "solution": "Conjugation distributes over both sums and products: conjugate every factor and keep the operation."
        },
        {
          "t": "mcq",
          "q": "For all complex <i>z</i><sub>1</sub>, <i>z</i><sub>2</sub>, the quantity |<i>z</i><sub>1</sub> + <i>z</i><sub>2</sub>| is:",
          "correct": 2,
          "opts": [
            {
              "label": "= |z₁| + |z₂|",
              "nudge": "True only when the two point the same way. In general the direct route is shorter than the detour."
            },
            {
              "label": "≥ |z₁| + |z₂|",
              "nudge": "The inequality is reversed. Going via a third point can never be shorter than going straight."
            },
            {
              "label": "≤ |z₁| + |z₂|",
              "nudge": null
            },
            {
              "label": "= |z₁| − |z₂|",
              "nudge": "That is not even non-negative in general, and the reverse triangle inequality bounds |z₁ − z₂|, not the sum."
            }
          ],
          "solution": "The triangle inequality: two sides of a triangle are together at least as long as the third, with equality only when it degenerates into a straight line."
        },
        {
          "t": "mistakes",
          "items": [
            "Confusing <b><i>z̄</i> with −<i>z</i></b>. The conjugate flips only the imaginary sign; the additive inverse flips both.",
            "Writing <b>|<i>z</i>| = ±<i>z</i></b>. The modulus is a non-negative real number, so the real-number rule does not transfer.",
            "Distributing the modulus over a sum. <b>|<i>z</i><sub>1</sub> + <i>z</i><sub>2</sub>| ≠ |<i>z</i><sub>1</sub>| + |<i>z</i><sub>2</sub>|</b> in general, only ≤ holds.",
            "Confusing <i>z</i> <i>z̄</i> with (<i>z̄</i>)<sup>2</sup> or with |<i>z</i>|. <b><i>z</i> <i>z̄</i> = |<i>z</i>|<sup>2</sup></b>, a non-negative real.",
            "Conjugating a product as though it were a sum. Every factor gets a bar, and the multiplication stays multiplication."
          ]
        },
        {
          "t": "protip",
          "html": "to prove an expression is real, show it equals its own conjugate. to prove it is imaginary, show it plus its conjugate is zero. both are faster than grinding it into <i>a</i> + <i>ib</i>, and on the unit circle the substitution <i>z̄</i> = 1/<i>z</i> finishes the job."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "z̄ = a − ib",
              "note": "reflection in the real axis"
            },
            {
              "f": "z + z̄ = 2Re(z) · z − z̄ = 2i Im(z)",
              "note": "z = z̄ ⟺ real · z + z̄ = 0 ⟺ imaginary"
            },
            {
              "f": "z z̄ = |z|² = a² + b²",
              "note": "z⁻¹ = z̄/|z|² · on |z| = 1, z̄ = 1/z"
            },
            {
              "f": "|z₁z₂| = |z₁||z₂| · |zⁿ| = |z|ⁿ",
              "note": "take the modulus factor by factor"
            },
            {
              "f": "|z₁ + z₂| ≤ |z₁| + |z₂|",
              "note": "equality only when they point the same way"
            },
            {
              "f": "|z₁+z₂|² + |z₁−z₂|² = 2(|z₁|² + |z₂|²)",
              "note": "parallelogram identity"
            }
          ],
          "aids": [
            "“the bar flips one sign, the minus flips two”",
            "“multiply by the mirror image and the imaginary part dies”"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "The Argand Plane, Polar Form and De Moivre",
      "chip": "03 POLAR",
      "kalam": "moduli multiply, arguments add",
      "blocks": [
        {
          "t": "p",
          "html": "A complex number <i>z</i> = <i>x</i> + <i>iy</i> is a grid address, and the <b>Argand plane</b> simply draws it: the horizontal axis carries the real part, the vertical axis the imaginary part, and <i>z</i> is the point (<i>x</i>, <i>y</i>), or equivalently the arrow from the origin to that point. Nothing new is being defined here. The same number is just being looked at instead of computed with."
        },
        {
          "t": "p",
          "html": "Two numbers fix a kite flying from a Sankranti rooftop: the <b>length of string</b> and the <b>angle the string makes with the horizon</b>. An auto-rickshaw direction works the same way, “five kilometres at 30° north of east” rather than “five east then a bit north”. The length is the modulus <i>r</i> = |<i>z</i>|; the bearing is the new quantity, the <b>argument</b>. Same point, two descriptions: Cartesian tells you how to walk there, polar tells you how far and which way."
        },
        {
          "t": "def",
          "term": "Argument, and its principal value",
          "html": "If the arrow from the origin to <i>z</i> makes an angle <i>θ</i> with the positive real axis, then tan <i>θ</i> = <i>y</i>/<i>x</i> and <i>θ</i> is <b>an</b> argument of <i>z</i>. It is many-valued: <i>θ</i> + 2<i>nπ</i> works just as well for every integer <i>n</i>. The <b>principal value</b>, written arg <i>z</i>, is the unique choice with <b>−π < <i>θ</i> ≤ π</b>. And arg(0) is <b>undefined</b>: the origin has a modulus but no direction."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · POLAR FORM, TAP A PIECE",
          "mathChips": true,
          "chips": ["r and θ", "x = r cos θ", "y = r sin θ", "z̄"],
          "captions": [
            "z = 1 + i√3 sits at distance r = |z| = 2 from the origin, on a ray making θ = π/3 with the positive real axis. Those two numbers, length and bearing, replace the pair (x, y).",
            "Drop the point onto the real axis and you read x = r cos θ = 2 cos(π/3) = 1. This is the conversion back from polar to Cartesian.",
            "Project onto the imaginary axis for y = r sin θ = 2 sin(π/3) = √3. Together with the previous frame this is z = r(cos θ + i sin θ).",
            "The conjugate keeps the same modulus and negates the argument: z̄ = 2∠(−π/3). Reflecting in the real axis is exactly reversing the bearing."
          ],
          "frames": [
            {
              "x": [-3.1, 3.1],
              "y": [-2.22, 2.22],
              "curves": [{ "c": "circle", "r": 2, "dash": true, "soft": true }],
              "points": [{ "x": 1, "y": 1.732, "label": "z = 1 + i√3" }],
              "segments": [{ "from": [0, 0], "to": [1, 1.732], "arrow": true, "label": "r = 2" }],
              "labels": [
                { "x": 0.78, "y": 0.3, "text": "θ", "soft": true },
                { "x": 2.7, "y": -0.42, "text": "Re", "soft": true }
              ]
            },
            {
              "x": [-3.1, 3.1],
              "y": [-2.22, 2.22],
              "points": [
                { "x": 1, "y": 1.732, "label": "z", "soft": true },
                { "x": 1, "y": 0, "label": "r cos θ = 1" }
              ],
              "segments": [
                { "from": [0, 0], "to": [1, 1.732], "soft": true },
                { "from": [1, 1.732], "to": [1, 0], "dash": true, "soft": true }
              ]
            },
            {
              "x": [-3.1, 3.1],
              "y": [-2.22, 2.22],
              "points": [
                { "x": 1, "y": 1.732, "label": "z", "soft": true },
                { "x": 0, "y": 1.732, "label": "r sin θ = √3" }
              ],
              "segments": [
                { "from": [0, 0], "to": [1, 1.732], "soft": true },
                { "from": [1, 1.732], "to": [0, 1.732], "dash": true, "soft": true }
              ]
            },
            {
              "x": [-3.1, 3.1],
              "y": [-2.22, 2.22],
              "curves": [{ "c": "circle", "r": 2, "dash": true, "soft": true }],
              "points": [
                { "x": 1, "y": 1.732, "label": "z", "soft": true },
                { "x": 1, "y": -1.732, "label": "z̄ = 2∠−π/3" }
              ],
              "segments": [
                { "from": [0, 0], "to": [1, 1.732], "soft": true },
                { "from": [0, 0], "to": [1, -1.732], "arrow": true }
              ]
            }
          ]
        },
        {
          "t": "think",
          "html": "sketch the point before you touch a calculator. once you can see which quadrant it is in, the argument almost writes itself, and the single most expensive mistake in this topic disappears."
        },
        {
          "t": "defgrid",
          "title": "Principal argument by quadrant",
          "tag": "α = tan⁻¹|y/x|, the acute reference angle",
          "rows": [
            {
              "k": "Quadrant I (<i>x</i> > 0, <i>y</i> > 0)",
              "v": "arg <i>z</i> = <i>α</i>"
            },
            {
              "k": "Quadrant II (<i>x</i> < 0, <i>y</i> > 0)",
              "v": "arg <i>z</i> = π − <i>α</i>"
            },
            {
              "k": "Quadrant III (<i>x</i> < 0, <i>y</i> < 0)",
              "v": "arg <i>z</i> = <i>α</i> − π"
            },
            {
              "k": "Quadrant IV (<i>x</i> > 0, <i>y</i> < 0)",
              "v": "arg <i>z</i> = −<i>α</i>"
            },
            {
              "k": "On the real axis",
              "v": "0 if <i>z</i> > 0 · π if <i>z</i> < 0"
            },
            {
              "k": "On the imaginary axis",
              "v": "π/2 if <i>y</i> > 0 · −π/2 if <i>y</i> < 0"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "POLAR FORM",
          "tag": "r = |z|, θ = arg z",
          "main": "z = r(cos θ + i sin θ)",
          "legend": [
            "x = r cos θ and y = r sin θ convert back to Cartesian",
            "arg(z₁z₂) = arg z₁ + arg z₂ · arg(z₁/z₂) = arg z₁ − arg z₂ · arg z̄ = −arg z"
          ],
          "note": "Those argument equalities hold up to a multiple of 2π. Standard polar uses a plus sign between the cosine and the sine: r(cos θ − i sin θ) is not polar form, rewrite it as r(cos(−θ) + i sin(−θ))."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY MULTIPLICATION IS ROTATION",
          "steps": [
            {
              "eq": "z<sub>1</sub>z<sub>2</sub> = r<sub>1</sub>r<sub>2</sub>(cos θ<sub>1</sub> + i sin θ<sub>1</sub>)(cos θ<sub>2</sub> + i sin θ<sub>2</sub>)",
              "why": "Write both numbers in polar form and pull the two moduli out front. Whatever happens next happens to the bracketed unit-length parts."
            },
            {
              "eq": "= r<sub>1</sub>r<sub>2</sub>[(cos θ<sub>1</sub>cos θ<sub>2</sub> − sin θ<sub>1</sub>sin θ<sub>2</sub>) + i(sin θ<sub>1</sub>cos θ<sub>2</sub> + cos θ<sub>1</sub>sin θ<sub>2</sub>)]",
              "why": "Multiply out and use i² = −1, then group real against imaginary. The minus sign in the real bracket comes entirely from i²."
            },
            {
              "eq": "= r<sub>1</sub>r<sub>2</sub>[cos(θ<sub>1</sub> + θ<sub>2</sub>) + i sin(θ<sub>1</sub> + θ<sub>2</sub>)]",
              "why": "Those two brackets are precisely the angle-sum identities for cosine and sine. Nothing was invented; the trigonometry was already inside the multiplication."
            },
            {
              "eq": "so moduli multiply and arguments add",
              "why": "Multiplying by a number of modulus r and argument φ scales by r and turns by φ. Multiplying by i, which has r = 1 and φ = π/2, is a pure quarter-turn, and repeating the move n times is De Moivre's theorem."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "DE MOIVRE'S THEOREM",
          "tag": "integer n",
          "main": "(cos θ + i sin θ)<sup>n</sup> = cos nθ + i sin nθ",
          "legend": [
            "so z = r(cos θ + i sin θ) gives zⁿ = rⁿ(cos nθ + i sin nθ)",
            "for rational n = p/q, cos nθ + i sin nθ is one of the q values of the power"
          ],
          "note": "For any integer power, convert to polar and apply this rather than expanding by the binomial theorem. A twentieth power becomes one multiplication."
        },
        {
          "t": "def",
          "term": "Euler form z = re^{iθ}",
          "html": "Euler's formula says the polar bracket <b>is</b> an exponential: <b><i>e</i><sup><i>iθ</i></sup> = cos <i>θ</i> + <i>i</i> sin <i>θ</i></b>, so <i>z</i> = <i>re</i><sup><i>iθ</i></sup>. A unit complex number <i>e</i><sup><i>iθ</i></sup> is just “the arrow of length 1 pointing at angle <i>θ</i>”. Multiplying two of them adds the angles, and now that is literally the exponent rule. Inverting Euler gives cos <i>θ</i> = (<i>e</i><sup><i>iθ</i></sup> + <i>e</i><sup>−<i>iθ</i></sup>)/2 and sin <i>θ</i> = (<i>e</i><sup><i>iθ</i></sup> − <i>e</i><sup>−<i>iθ</i></sup>)/2<i>i</i>. This sits outside the Class 11 board syllabus and inside every hard JEE problem."
        },
        {
          "t": "formula",
          "kicker": "THE nth ROOTS OF A COMPLEX NUMBER",
          "tag": "exactly n of them",
          "main": "w<sub>k</sub> = r<sup>1/n</sup> e<sup>i(θ + 2kπ)/n</sup>, k = 0, 1, …, n − 1",
          "legend": [
            "taking an nth root divides the angle by n, but the angle was only known up to 2π, so n answers survive",
            "they lie on a circle of radius r^(1/n), equally spaced by 2π/n: the vertices of a regular n-gon"
          ],
          "note": "Using k ≥ n only repeats roots you already have. Reporting fewer than n roots is the signature error of this topic."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · ROOTS OF UNITY, TAP A ROOT",
          "mathChips": true,
          "chips": ["1", "ω", "ω²", "4th roots"],
          "captions": [
            "Every nth root of unity lies on the unit circle, and k = 0 always gives the root 1 itself. Solving z³ = 1 starts here.",
            "ω = cos(2π/3) + i sin(2π/3) = −1/2 + (√3/2)i, one third of a full turn round from 1.",
            "ω² is another third of a turn on, at −1/2 − (√3/2)i, and it is also the conjugate of ω. The three roots are the vertices of an equilateral triangle, so they sum to 0.",
            "The same construction with n = 4 gives 1, i, −1, −i: a square inscribed in the unit circle, again summing to 0."
          ],
          "frames": [
            {
              "x": [-1.75, 1.75],
              "y": [-1.25, 1.25],
              "curves": [{ "c": "circle", "r": 1, "dash": true, "soft": true }],
              "points": [{ "x": 1, "y": 0, "label": "1" }]
            },
            {
              "x": [-1.75, 1.75],
              "y": [-1.25, 1.25],
              "curves": [{ "c": "circle", "r": 1, "dash": true, "soft": true }],
              "points": [
                { "x": 1, "y": 0, "label": "1", "soft": true },
                { "x": -0.5, "y": 0.866, "label": "ω" }
              ],
              "segments": [{ "from": [0, 0], "to": [-0.5, 0.866], "arrow": true }]
            },
            {
              "x": [-1.75, 1.75],
              "y": [-1.25, 1.25],
              "curves": [{ "c": "circle", "r": 1, "dash": true, "soft": true }],
              "points": [
                { "x": 1, "y": 0, "label": "1", "soft": true },
                { "x": -0.5, "y": 0.866, "label": "ω", "soft": true },
                { "x": -0.5, "y": -0.866, "label": "ω²" }
              ],
              "segments": [
                { "from": [1, 0], "to": [-0.5, 0.866], "soft": true },
                { "from": [-0.5, 0.866], "to": [-0.5, -0.866], "soft": true },
                { "from": [-0.5, -0.866], "to": [1, 0], "soft": true }
              ]
            },
            {
              "x": [-1.75, 1.75],
              "y": [-1.25, 1.25],
              "curves": [{ "c": "circle", "r": 1, "dash": true, "soft": true }],
              "points": [
                { "x": 1, "y": 0, "label": "1" },
                { "x": 0, "y": 1, "label": "i" },
                { "x": -1, "y": 0, "label": "−1" },
                { "x": 0, "y": -1, "label": "−i" }
              ],
              "segments": [
                { "from": [1, 0], "to": [0, 1], "soft": true },
                { "from": [0, 1], "to": [-1, 0], "soft": true },
                { "from": [-1, 0], "to": [0, -1], "soft": true },
                { "from": [0, -1], "to": [1, 0], "soft": true }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE CUBE ROOTS OF UNITY",
          "tag": "the workhorse case",
          "main": "1, ω, ω<sup>2</sup> with ω = −1/2 + (√3/2)i",
          "legend": [
            "ω³ = 1 · 1 + ω + ω² = 0 · ω² is the conjugate of ω · ωⁿ = ω^(n mod 3)",
            "instant simplifiers: 1 + ω = −ω² and 1 + ω² = −ω"
          ],
          "note": "Factorisations worth recognising: a³ + b³ = (a + b)(a + bω)(a + bω²) and a³ + b³ + c³ − 3abc = (a + b + c)(a + bω + cω²)(a + bω² + cω)."
        },
        {
          "t": "proc",
          "title": "The two conversions",
          "steps": [
            "<b>Cartesian to polar.</b> (1) Compute <i>r</i> = √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>). (2) Compute the acute reference angle <i>α</i> = tan<sup>−1</sup>|<i>y</i>/<i>x</i>|. (3) Place <i>θ</i> in the right quadrant using the table. (4) Write <i>z</i> = <i>r</i>(cos <i>θ</i> + <i>i</i> sin <i>θ</i>). Step 3 is where the marks are lost.",
            "<b>Finding all <i>n</i>th roots.</b> Put <i>z</i> in polar or Euler form, take the real <i>n</i>th root of the modulus, then list the <i>n</i> angles (<i>θ</i> + 2<i>kπ</i>)/<i>n</i> for <i>k</i> = 0 to <i>n</i> − 1, and convert back only if the question asks for <i>a</i> + <i>ib</i>.",
            "<b>Powers.</b> Never expand. Go to polar, apply De Moivre, and reduce the resulting angle to something you recognise before evaluating the cosine and sine."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the modulus and principal argument of <i>z</i> = 1 + <i>i</i>, and write it in polar form.",
          "steps": [
            "<i>r</i> = √(1<sup>2</sup> + 1<sup>2</sup>) = √2.",
            "Both parts are positive, so the point is in Quadrant I and arg <i>z</i> = <i>α</i> = tan<sup>−1</sup>1 = π/4.",
            "Polar: <i>z</i> = √2 (cos π/4 + <i>i</i> sin π/4). Worth memorising alongside 1 + <i>i</i>√3 = 2∠π/3 and √3 + <i>i</i> = 2∠π/6."
          ],
          "ans": "|z| = √2 · arg z = π/4 · z = √2(cos π/4 + i sin π/4)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the modulus and principal argument of each of ±1 ± <i>i</i>√3.",
          "steps": [
            "All four have <i>r</i> = √(1 + 3) = 2 and reference angle <i>α</i> = tan<sup>−1</sup>√3 = π/3.",
            "Q1: arg(1 + <i>i</i>√3) = π/3. Q2: arg(−1 + <i>i</i>√3) = π − π/3 = 2π/3.",
            "Q3: arg(−1 − <i>i</i>√3) = π/3 − π = −2π/3. Q4: arg(1 − <i>i</i>√3) = −π/3."
          ],
          "ans": "r = 2 throughout · args π/3, 2π/3, −2π/3, −π/3 · one example, all four rows of the table"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "Write <i>z</i> = −√3 + <i>i</i> in polar form and hence find <i>z</i><sup>6</sup>.",
          "steps": [
            "<i>r</i> = √(3 + 1) = 2. The point is in Quadrant II, with <i>α</i> = tan<sup>−1</sup>(1/√3) = π/6, so arg <i>z</i> = π − π/6 = 5π/6. Reporting −π/6 here is the whole trap.",
            "<i>z</i> = 2(cos 5π/6 + <i>i</i> sin 5π/6).",
            "De Moivre: <i>z</i><sup>6</sup> = 2<sup>6</sup>(cos 5π + <i>i</i> sin 5π) = 64(−1 + 0<i>i</i>)."
          ],
          "ans": "z = 2(cos 5π/6 + i sin 5π/6) · z⁶ = −64"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find all the cube roots of 8<i>i</i>.",
          "steps": [
            "8<i>i</i> has <i>r</i> = 8 and argument π/2, so in Euler form 8<i>i</i> = 8<i>e</i><sup><i>i</i>π/2</sup>. The root modulus is 8<sup>1/3</sup> = 2.",
            "Angles (π/2 + 2<i>kπ</i>)/3 for <i>k</i> = 0, 1, 2: π/6, 5π/6, 3π/2.",
            "Convert back: 2(cos π/6 + <i>i</i> sin π/6) = √3 + <i>i</i>; 2(cos 5π/6 + <i>i</i> sin 5π/6) = −√3 + <i>i</i>; 2(cos 3π/2 + <i>i</i> sin 3π/2) = −2<i>i</i>. Three roots, 120° apart."
          ],
          "ans": "√3 + i, −√3 + i, −2i"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find modulus and principal argument: (a) −√3 − <i>i</i>, (b) −2<i>i</i>, (c) 3.",
              "a": "(a) <i>r</i> = 2, Quadrant III, <i>α</i> = π/6, arg = −5π/6. (b) <i>r</i> = 2, arg = −π/2. (c) <i>r</i> = 3, arg = 0."
            },
            {
              "q": "[CBSE] Express in polar form: (a) 1 − <i>i</i>, (b) −3.",
              "a": "(a) √2 (cos(−π/4) + <i>i</i> sin(−π/4)). (b) 3(cos π + <i>i</i> sin π)."
            },
            {
              "q": "[JEE Main] Convert <i>z</i> = 4(cos 2π/3 + <i>i</i> sin 2π/3) to <i>a</i> + <i>ib</i> form.",
              "a": "4(−1/2 + <i>i</i>√3/2) = −2 + 2√3 <i>i</i>."
            },
            {
              "q": "[JEE Main] Evaluate (1 + <i>i</i>√3)<sup>6</sup> using polar form.",
              "a": "<i>r</i> = 2, arg = π/3, so the value is 2<sup>6</sup>(cos 2π + <i>i</i> sin 2π) = 64."
            },
            {
              "q": "[JEE Advanced] Solve <i>z</i><sup>4</sup> = −16, and simplify <i>ω</i><sup>100</sup> + <i>ω</i><sup>200</sup>.",
              "a": "−16 = 16<i>e</i><sup><i>i</i>π</sup>, so the roots are 2<i>e</i><sup><i>i</i>(π+2<i>k</i>π)/4</sup>, that is ±√2 ± √2 <i>i</i> in all four sign combinations. And 100 ≡ 1, 200 ≡ 2 (mod 3), so the sum is <i>ω</i> + <i>ω</i><sup>2</sup> = −1."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The principal argument of <i>z</i> = −1 − <i>i</i> is:",
          "correct": 2,
          "opts": [
            {
              "label": "π/4",
              "nudge": "That is the raw calculator value of tan⁻¹(1), which ignores the quadrant entirely. Both parts here are negative."
            },
            {
              "label": "5π/4",
              "nudge": "The right ray, but outside the principal range (−π, π]. Subtract 2π to bring it home."
            },
            {
              "label": "−3π/4",
              "nudge": null
            },
            {
              "label": "3π/4",
              "nudge": "That is the Quadrant II answer, for −1 + i. Check the sign of the imaginary part before choosing a row of the table."
            }
          ],
          "solution": "Quadrant III with α = π/4, so arg z = α − π = −3π/4, which does lie in (−π, π]."
        },
        {
          "t": "mcq",
          "q": "The number of distinct 6th roots of a non-zero complex number is:",
          "correct": 3,
          "opts": [
            {
              "label": "1",
              "nudge": "That is the principal-root-only reflex carried over from real arithmetic, where a root is a single number."
            },
            {
              "label": "2",
              "nudge": "Two is what a square root gives. The count is the index of the root, not always two."
            },
            {
              "label": "3",
              "nudge": "Three answers z³, not z⁶. Read the index of the root you were asked for."
            },
            {
              "label": "6",
              "nudge": null
            }
          ],
          "solution": "An nth root always has exactly n values, k = 0 to n − 1, sitting at the vertices of a regular n-gon."
        },
        {
          "t": "mcq",
          "q": "If <i>ω</i> is a non-real cube root of unity, then <i>ω</i><sup>2024</sup> equals:",
          "correct": 2,
          "opts": [
            {
              "label": "1",
              "nudge": "That needs 2024 to be a multiple of 3, but 2024 = 3(674) + 2."
            },
            {
              "label": "ω",
              "nudge": "That reads the remainder as 1. Divide 2024 by 3 again and check the remainder carefully."
            },
            {
              "label": "ω²",
              "nudge": null
            },
            {
              "label": "−1",
              "nudge": "ω never takes the value −1: the non-real cube roots of unity are not real at all."
            }
          ],
          "solution": "ω³ = 1, so only the exponent mod 3 matters. 2024 ≡ 2, giving ω²."
        },
        {
          "t": "mcq",
          "q": "(cos π/6 + <i>i</i> sin π/6)<sup>6</sup> equals:",
          "correct": 1,
          "opts": [
            {
              "label": "1",
              "nudge": "That would need the angle to reach 2π. Six sixths of π is π, a half turn, not a full one."
            },
            {
              "label": "−1",
              "nudge": null
            },
            {
              "label": "i",
              "nudge": "That is the quarter-turn value, cos π/2 + i sin π/2, so the angle was multiplied wrongly."
            },
            {
              "label": "√3/2 + i/2",
              "nudge": "That is the un-powered base itself. The exponent was dropped somewhere."
            }
          ],
          "solution": "De Moivre multiplies the angle: cos π + i sin π = −1. Keep degrees and radians apart while you do it."
        },
        {
          "t": "mistakes",
          "items": [
            "Reporting tan<sup>−1</sup>(<i>y</i>/<i>x</i>) straight off the calculator. That value lives in (−π/2, π/2); <b>always place <i>θ</i> by quadrant</b>.",
            "Giving a principal value <b>outside (−π, π]</b>. Add or subtract 2π until it lands inside.",
            "Assigning an argument to 0. <b>arg(0) is undefined</b>, because the origin has no direction.",
            "Calling <i>r</i>(cos <i>θ</i> − <i>i</i> sin <i>θ</i>) polar form. Standard polar uses <b>+</b>; convert via cos(−<i>θ</i>) and sin(−<i>θ</i>).",
            "Reporting one <i>n</i>th root instead of <i>n</i>, and mixing degrees with radians inside De Moivre."
          ]
        },
        {
          "t": "protip",
          "html": "multiplication adds arguments and multiplies moduli; division subtracts and divides. reach for that before you reach for expansion, and for any power or root go to polar form first. it is never the slower route."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "z = x + iy ↔ the point (x, y)",
              "note": "real axis horizontal, imaginary vertical"
            },
            {
              "f": "|z| = r = √(x² + y²) · arg z ∈ (−π, π]",
              "note": "arg(0) undefined"
            },
            {
              "f": "Q1 → α · Q2 → π − α · Q3 → α − π · Q4 → −α",
              "note": "α = tan⁻¹|y/x|"
            },
            {
              "f": "z = r(cos θ + i sin θ) = re^{iθ}",
              "note": "z̄ = r∠−θ · 1/z = (1/r)∠−θ"
            },
            {
              "f": "zⁿ = rⁿ(cos nθ + i sin nθ)",
              "note": "De Moivre, integer n"
            },
            {
              "f": "wₖ = r^{1/n} e^{i(θ+2kπ)/n}, k = 0…n−1",
              "note": "exactly n roots, a regular n-gon"
            },
            {
              "f": "ω³ = 1 · 1 + ω + ω² = 0",
              "note": "1 + ω = −ω² · ωⁿ = ω^(n mod 3)"
            }
          ],
          "aids": [
            "“sketch first, quadrant second, calculator last”",
            "“nth root means n answers, spaced 2π/n apart”"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Argand Geometry: Rotation, Loci and Vectors",
      "chip": "04 GEOMETRY",
      "kalam": "translate the words into a z-equation",
      "blocks": [
        {
          "t": "p",
          "html": "A complex number is a <b>position vector</b>. If <i>z</i> = <i>x</i> + <i>iy</i> is the point (<i>x</i>, <i>y</i>), it is also the arrow from the origin to that point, and every vector idea transfers without translation. The difference <i>z</i><sub>2</sub> − <i>z</i><sub>1</sub> is the <b>displacement</b> from <i>z</i><sub>1</sub> to <i>z</i><sub>2</sub>, and its modulus |<i>z</i><sub>2</sub> − <i>z</i><sub>1</sub>| is the <b>distance</b> between the two points. That one sentence turns a geometry problem into algebra."
        },
        {
          "t": "p",
          "html": "The move that makes this topic worth its marks: <b>to rotate a displacement, multiply it by <i>e</i><sup><i>iθ</i></sup></b>. To turn the arrow from <i>A</i> to <i>B</i> about <i>A</i> through an angle <i>θ</i>, multiply <i>z<sub>B</sub></i> − <i>z<sub>A</sub></i> by <i>e</i><sup><i>iθ</i></sup>, which is anticlockwise; <i>e</i><sup>−<i>iθ</i></sup> turns it clockwise. Multiplying by <i>i</i> is a clean quarter-turn anticlockwise, multiplying by −<i>i</i> a quarter-turn clockwise. Finding a third vertex, proving a right angle, building a square or an equilateral triangle: all of it is this one multiplication."
        },
        {
          "t": "p",
          "html": "And a <b>locus</b> is a geometric sentence about <i>z</i>, read literally. “|<i>z</i> − <i>z</i><sub>0</sub>| = <i>r</i>” says <b>all points at distance <i>r</i> from <i>z</i><sub>0</sub></b>, which is a circle. “|<i>z</i> − <i>z</i><sub>1</sub>| = |<i>z</i> − <i>z</i><sub>2</sub>|” says <b>equidistant from two points</b>, which is the perpendicular bisector. Translating English into a <i>z</i>-equation, and back again, is the entire skill. This material sits beyond the Class 11 board syllabus and is core JEE Advanced ground."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · LOCI IN THE PLANE, TAP A CONDITION",
          "mathChips": true,
          "chips": ["|z − 3 − 4i| = 2", "max |z|", "min |z|", "|z − 1| = |z − 5|"],
          "captions": [
            "A circle, read straight off the equation: every point at distance 2 from the centre 3 + 4i. No expansion needed to identify it.",
            "The centre is at distance |z₀| = 5 from the origin, so the farthest point of the circle is |z₀| + r = 7 away, and it lies on the ray from O through the centre.",
            "The nearest point lies on the same ray, at |z₀| − r = 3. Both extremes are collinear with O and the centre, which is why guessing is never necessary.",
            "Equidistant from 1 and from 5 is the perpendicular bisector of the segment joining them: the vertical line Re(z) = 3, not a circle."
          ],
          "frames": [
            {
              "x": [-3.5, 8],
              "y": [-2, 6.2],
              "curves": [{ "c": "circle", "cx": 3, "cy": 4, "r": 2 }],
              "points": [{ "x": 3, "y": 4, "label": "3 + 4i" }]
            },
            {
              "x": [-3.5, 8],
              "y": [-2, 6.2],
              "curves": [{ "c": "circle", "cx": 3, "cy": 4, "r": 2, "soft": true, "dash": true }],
              "points": [
                { "x": 3, "y": 4, "label": "z₀", "soft": true },
                { "x": 4.2, "y": 5.6, "label": "|z| = 7" }
              ],
              "segments": [{ "from": [0, 0], "to": [4.2, 5.6], "arrow": true }]
            },
            {
              "x": [-3.5, 8],
              "y": [-2, 6.2],
              "curves": [{ "c": "circle", "cx": 3, "cy": 4, "r": 2, "soft": true, "dash": true }],
              "points": [
                { "x": 3, "y": 4, "label": "z₀", "soft": true },
                { "x": 1.8, "y": 2.4, "label": "|z| = 3" }
              ],
              "segments": [{ "from": [0, 0], "to": [1.8, 2.4], "arrow": true }]
            },
            {
              "x": [-3.5, 8],
              "y": [-2, 6.2],
              "curves": [{ "c": "vline", "x": 3 }],
              "points": [
                { "x": 1, "y": 0, "label": "1" },
                { "x": 5, "y": 0, "label": "5" }
              ],
              "segments": [{ "from": [1, 0], "to": [5, 0], "dash": true, "soft": true }]
            }
          ]
        },
        {
          "t": "think",
          "html": "you are not doing coordinate geometry with extra letters. every phrase in the question, distance, equidistant, constant angle, has one <i>z</i>-translation. write the translation down and the algebra is usually two lines."
        },
        {
          "t": "defgrid",
          "title": "Points and segments",
          "rows": [
            {
              "k": "Distance",
              "v": "|<i>z</i><sub>1</sub> − <i>z</i><sub>2</sub>|"
            },
            {
              "k": "Midpoint",
              "v": "(<i>z</i><sub>1</sub> + <i>z</i><sub>2</sub>)/2"
            },
            {
              "k": "Section, ratio <i>m</i> : <i>n</i>",
              "v": "(<i>nz</i><sub>1</sub> + <i>mz</i><sub>2</sub>)/(<i>m</i> + <i>n</i>)"
            },
            {
              "k": "Centroid",
              "v": "(<i>z</i><sub>1</sub> + <i>z</i><sub>2</sub> + <i>z</i><sub>3</sub>)/3"
            },
            {
              "k": "Collinear <i>z</i><sub>1</sub>, <i>z</i><sub>2</sub>, <i>z</i><sub>3</sub>",
              "v": "(<i>z</i><sub>3</sub> − <i>z</i><sub>1</sub>)/(<i>z</i><sub>2</sub> − <i>z</i><sub>1</sub>) ∈ ℝ"
            },
            {
              "k": "Concyclic or collinear",
              "v": "the cross-ratio of the four points is real"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE ROTATION THEOREM",
          "tag": "the angle sits at z₁",
          "main": "(z<sub>2</sub> − z<sub>1</sub>)/(z<sub>3</sub> − z<sub>1</sub>) = |(z<sub>2</sub> − z<sub>1</sub>)/(z<sub>3</sub> − z<sub>1</sub>)| e<sup>iθ</sup>",
          "legend": [
            "θ = arg[(z₂ − z₁)/(z₃ − z₁)], the angle at the common vertex z₁",
            "measured from the arrow z₁z₃ to the arrow z₁z₂; reversing the ratio reverses the sign"
          ],
          "note": "Multiplying by i turns a displacement +90°, by −i turns it −90°. That is the whole of every square-vertex question."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE RATIO CARRIES THE ANGLE",
          "steps": [
            {
              "eq": "z<sub>2</sub> − z<sub>1</sub> = |z<sub>2</sub> − z<sub>1</sub>| e<sup>iφ₂</sup>",
              "why": "Both differences are vectors starting at z₁, so each has a length and a bearing. Write the first in Euler form."
            },
            {
              "eq": "z<sub>3</sub> − z<sub>1</sub> = |z<sub>3</sub> − z<sub>1</sub>| e<sup>iφ₃</sup>",
              "why": "The same for the second. φ₂ and φ₃ are absolute bearings measured from the positive real axis."
            },
            {
              "eq": "ratio = (|z<sub>2</sub> − z<sub>1</sub>|/|z<sub>3</sub> − z<sub>1</sub>|) e<sup>i(φ₂ − φ₃)</sup>",
              "why": "Dividing divides the moduli and subtracts the arguments. The absolute bearings cancel and only their difference survives."
            },
            {
              "eq": "φ₂ − φ₃ = θ, the angle at z<sub>1</sub>",
              "why": "The difference of two bearings from the same point is the angle between them. So the modulus of the ratio is the length ratio and its argument is the included angle, which is why one quotient answers both questions at once."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "LINES AND CIRCLES IN z",
          "tag": "learn the shapes, not the algebra",
          "main": "|z − z<sub>0</sub>| = r · |z − z<sub>1</sub>| = |z − z<sub>2</sub>|",
          "legend": [
            "circle with centre z₀ and radius r · perpendicular bisector of the segment z₁z₂",
            "general circle z z̄ + ā z + a z̄ + b = 0 (a ∈ ℂ, b ∈ ℝ): centre −a, radius √(|a|² − b)",
            "general line ā z + a z̄ + b = 0, with a ∈ ℂ and b ∈ ℝ"
          ],
          "note": "On the circle |z − z₀| = r the modulus is bounded by | |z₀| − r | ≤ |z| ≤ |z₀| + r, with both extremes on the line through O and z₀."
        },
        {
          "t": "formula",
          "kicker": "APOLLONIUS AND THE arg LOCUS",
          "tag": "two classic traps",
          "main": "|z − z<sub>1</sub>| / |z − z<sub>2</sub>| = k",
          "legend": [
            "k = 1 gives the perpendicular bisector, a straight line, not a circle",
            "k > 0 with k ≠ 1 gives the Apollonius circle"
          ],
          "note": "arg[(z − z₁)/(z − z₂)] = α is an arc of a circle through z₁ and z₂, never the whole circle. At α = π/2 it is the semicircle on z₁z₂ as diameter, endpoints excluded."
        },
        {
          "t": "formula",
          "kicker": "THE VECTOR DICTIONARY",
          "tag": "u = z₂ − z₁, v = z₄ − z₃",
          "main": "ū v = (u · v) + i (u × v)",
          "legend": [
            "parallel ⟺ Im(ū v) = 0 · perpendicular ⟺ Re(ū v) = 0",
            "cos θ = Re(ū v)/(|u||v|) and sin θ = Im(ū v)/(|u||v|)",
            "area of triangle z₁z₂z₃ = ½ |Im[(z̄₂ − z̄₁)(z₃ − z₁)]|"
          ],
          "note": "The bar goes on the first vector. Re(uv) with no bar is not a geometric test at all: it measures the sum of the two arguments, not their difference."
        },
        {
          "t": "proc",
          "title": "How to attack a configuration",
          "steps": [
            "<b>Place the known points as complex numbers</b>, express the unknown through the rotation theorem by multiplying a displacement by <i>e</i><sup><i>iθ</i></sup>, then read off the answer. For a right angle use <i>i</i> or −<i>i</i> and the arithmetic is trivial.",
            "<b>For a locus</b>, translate the words into a <i>z</i>-equation first: “distance from a point” gives |<i>z</i> − <i>z</i><sub>0</sub>|, “equidistant” gives a perpendicular bisector, “constant angle” gives an arc. Then simplify using |<i>w</i>|<sup>2</sup> = <i>w</i> <i>w̄</i>, which linearises the algebra, and match the standard form.",
            "<b>For extremes of |<i>z</i>| on a circle</b>, use | |<i>z</i><sub>0</sub>| − <i>r</i> | and |<i>z</i><sub>0</sub>| + <i>r</i> immediately. Never parametrise and differentiate."
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the locus of <i>z</i> if |<i>z</i> − 2| = |<i>z</i> + 2|, and identify the curve |<i>z</i> − 3| = 2.",
          "steps": [
            "|<i>z</i> − 2| = |<i>z</i> − (−2)| says <i>z</i> is equidistant from 2 and −2, so the locus is the perpendicular bisector of that segment.",
            "The segment lies along the real axis with midpoint 0, so the bisector is the imaginary axis: Re(<i>z</i>) = 0.",
            "|<i>z</i> − 3| = 2 says distance 2 from the point 3, that is a circle of centre (3, 0) and radius 2. No algebra needed for either."
          ],
          "ans": "Re(z) = 0 · circle, centre 3, radius 2"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "If <i>z</i> lies on |<i>z</i> − 3 − 4<i>i</i>| = 2, find the greatest and least values of |<i>z</i>|.",
          "steps": [
            "Centre <i>z</i><sub>0</sub> = 3 + 4<i>i</i>, so |<i>z</i><sub>0</sub>| = 5, and the radius is 2.",
            "The farthest and nearest points of the circle from the origin lie on the line through <i>O</i> and <i>z</i><sub>0</sub>.",
            "So |<i>z</i>|<sub>max</sub> = 5 + 2 = 7 and |<i>z</i>|<sub>min</sub> = 5 − 2 = 3. The trap is quoting 2 (the radius) or 5 (the centre distance) as an answer."
          ],
          "ans": "greatest 7 · least 3"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A square <i>ABCD</i> is labelled anticlockwise with <i>A</i> = 1 + 2<i>i</i> and <i>B</i> = 3 + <i>i</i>. Find <i>C</i>.",
          "steps": [
            "At <i>B</i>, the side <i>BC</i> is the side <i>BA</i> turned through −90°, so <i>z<sub>C</sub></i> − <i>z<sub>B</sub></i> = (<i>z<sub>A</sub></i> − <i>z<sub>B</sub></i>)(−<i>i</i>).",
            "<i>z<sub>A</sub></i> − <i>z<sub>B</sub></i> = (1 + 2<i>i</i>) − (3 + <i>i</i>) = −2 + <i>i</i>.",
            "(−2 + <i>i</i>)(−<i>i</i>) = 2<i>i</i> − <i>i</i><sup>2</sup> = 1 + 2<i>i</i>, so <i>z<sub>C</sub></i> = (3 + <i>i</i>) + (1 + 2<i>i</i>) = 4 + 3<i>i</i>. Getting the sign of the turn wrong lands you on the other side of <i>AB</i>."
          ],
          "ans": "C = 4 + 3i"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "<i>A</i> = 1 + <i>i</i>, <i>B</i> = 4 + 2<i>i</i>, <i>C</i> = 5 − <i>i</i>. Show the angle at <i>B</i> is a right angle and find the area.",
          "steps": [
            "The two edges at <i>B</i> are <i>u</i> = <i>A</i> − <i>B</i> = −3 − <i>i</i> and <i>v</i> = <i>C</i> − <i>B</i> = 1 − 3<i>i</i>.",
            "ū<i>v</i> = (−3 + <i>i</i>)(1 − 3<i>i</i>) = −3 + 9<i>i</i> + <i>i</i> + 3 = 10<i>i</i>. Its real part is 0, so the edges are perpendicular.",
            "|<i>u</i>| = |<i>v</i>| = √10, so the area is ½ · √10 · √10 = 5. The cross-product form agrees: ½|Im(10<i>i</i>)| = 5."
          ],
          "ans": "right angle at B · area 5"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[JEE Main] Find the locus |<i>z</i> − <i>i</i>| = |<i>z</i> + <i>i</i>|, and the centre and radius of |<i>z</i> + 2 − <i>i</i>| = 3.",
              "a": "Perpendicular bisector of <i>i</i> and −<i>i</i>, which is the real axis, Im(<i>z</i>) = 0. Centre −2 + <i>i</i>, radius 3."
            },
            {
              "q": "[JEE Main] Rotate the point <i>z</i> = 2 + <i>i</i> about the origin through 90° anticlockwise.",
              "a": "Multiply by <i>e</i><sup><i>i</i>π/2</sup> = <i>i</i>: (2 + <i>i</i>)<i>i</i> = −1 + 2<i>i</i>."
            },
            {
              "q": "[JEE Main] <i>z</i> lies on |<i>z</i> − 5| = 3. Find the greatest and least values of |<i>z</i>|.",
              "a": "|<i>z</i><sub>0</sub>| = 5 and <i>r</i> = 3, so the values are 8 and 2."
            },
            {
              "q": "[JEE Advanced] An equilateral triangle has <i>z</i><sub>1</sub> = 0 and <i>z</i><sub>2</sub> = 2. Find both possible <i>z</i><sub>3</sub>.",
              "a": "Rotate <i>z</i><sub>2</sub> about <i>z</i><sub>1</sub> by ±π/3: <i>z</i><sub>3</sub> = 2<i>e</i><sup>±<i>i</i>π/3</sup> = 1 ± <i>i</i>√3."
            },
            {
              "q": "[JEE Advanced] Identify the locus |<i>z</i> − 1|/|<i>z</i> + 1| = 2, and find the area of the triangle 1 + 2<i>i</i>, 4 + 6<i>i</i>, −2 + 5<i>i</i>.",
              "a": "<i>k</i> = 2 ≠ 1, so an Apollonius circle: squaring gives <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + (10/3)<i>x</i> + 1 = 0, centre −5/3, radius 4/3. Area = ½|1(6 − 5) + 4(5 − 2) + (−2)(2 − 6)| = 21/2."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The locus |<i>z</i> − 1| / |<i>z</i> − 3| = 1 is:",
          "correct": 1,
          "opts": [
            {
              "label": "a circle",
              "nudge": "The word “Apollonius” makes circle the reflex answer, but k = 1 is exactly the case where the z z̄ term cancels."
            },
            {
              "label": "a line",
              "nudge": null
            },
            {
              "label": "an ellipse",
              "nudge": "An ellipse comes from a constant sum of distances, not a constant ratio."
            },
            {
              "label": "two points",
              "nudge": "Infinitely many points are equidistant from 1 and 3, not just two."
            }
          ],
          "solution": "Ratio 1 means equidistant, which is the perpendicular bisector of the segment from 1 to 3, the vertical line Re(z) = 2."
        },
        {
          "q": "If |<i>z</i> − 3 − 4<i>i</i>| = 2, the minimum value of |<i>z</i>| is:",
          "t": "mcq",
          "correct": 1,
          "opts": [
            {
              "label": "2",
              "nudge": "That is the radius on its own, which measures nothing about the distance to the origin."
            },
            {
              "label": "3",
              "nudge": null
            },
            {
              "label": "5",
              "nudge": "That is |z₀|, the distance to the centre. The nearest point of the circle is a further r closer."
            },
            {
              "label": "7",
              "nudge": "That is the maximum, |z₀| + r. Read which extreme the question wants."
            }
          ],
          "solution": "|z|min = |z₀| − r = 5 − 2 = 3, reached on the segment from O to the centre."
        },
        {
          "t": "mcq",
          "q": "To rotate a vector <i>z</i> about the origin through <i>θ</i> anticlockwise, multiply by:",
          "correct": 1,
          "opts": [
            {
              "label": "θ",
              "nudge": "Multiplying by a real number scales the length and changes no direction at all."
            },
            {
              "label": "e^{iθ}",
              "nudge": null
            },
            {
              "label": "e^{−iθ}",
              "nudge": "That is the clockwise turn. The sign in the exponent is the direction of the turn."
            },
            {
              "label": "cos θ",
              "nudge": "Half of the polar bracket, and again a real number, so still only a scaling."
            }
          ],
          "solution": "Multiplying by a unit-modulus number of argument θ adds θ to the argument and leaves the modulus alone: pure rotation."
        },
        {
          "t": "mcq",
          "q": "arg[(<i>z</i> − <i>z</i><sub>1</sub>)/(<i>z</i> − <i>z</i><sub>2</sub>)] = π/2 represents:",
          "correct": 1,
          "opts": [
            {
              "label": "the full circle on z₁z₂ as diameter",
              "nudge": "Both arcs of that circle give a right angle, but only one of them gives it with the correct sign, +π/2."
            },
            {
              "label": "an arc of that circle",
              "nudge": null
            },
            {
              "label": "a straight line",
              "nudge": "A line is what a real ratio gives, arg = 0 or π. A right angle is not a real ratio."
            },
            {
              "label": "a parabola",
              "nudge": "Nothing here fixes a distance against a directrix; the condition is purely about a directed angle."
            }
          ],
          "solution": "A fixed argument fixes a directed angle subtended by z₁z₂, and that gives one arc, endpoints excluded, not the whole circle."
        },
        {
          "t": "mistakes",
          "items": [
            "Turning the wrong way, or writing the ratio upside down. <b><i>e</i><sup><i>iθ</i></sup> is anticlockwise</b>, <i>e</i><sup>−<i>iθ</i></sup> clockwise, and the angle sits at the shared vertex.",
            "Calling the <b><i>k</i> = 1 Apollonius locus a circle</b>. It is the perpendicular-bisector line.",
            "Treating an arg-locus as a full circle. It is <b>only an arc</b>, with the endpoints excluded.",
            "Guessing modulus extrema on a circle. They are <b>|<i>z</i><sub>0</sub>| ± <i>r</i></b>, on the line through the origin and the centre.",
            "Dropping the bar in the perpendicularity test. Re(<i>uv</i>) measures the <b>sum</b> of the arguments and gives both false positives and false negatives; the test is Re(ū<i>v</i>) = 0."
          ]
        },
        {
          "t": "protip",
          "html": "simplify every locus with |<i>w</i>|<sup>2</sup> = <i>w</i> <i>w̄</i> before you reach for coordinates. it turns modulus conditions into ordinary algebra, and the standard forms of a line and a circle then stare back at you."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "distance = |z₁ − z₂| · midpoint = (z₁ + z₂)/2",
              "note": "centroid = (z₁ + z₂ + z₃)/3"
            },
            {
              "f": "rotation: (z₂ − z₁)/(z₃ − z₁) = |ratio| e^{iθ}",
              "note": "multiply by i for +90°"
            },
            {
              "f": "|z − z₀| = r is a circle",
              "note": "|z − z₁| = |z − z₂| is the perpendicular bisector"
            },
            {
              "f": "|z − z₁|/|z − z₂| = k",
              "note": "circle if k ≠ 1, line if k = 1"
            },
            {
              "f": "| |z₀| − r | ≤ |z| ≤ |z₀| + r",
              "note": "extremes on the line through O and z₀"
            },
            {
              "f": "ū v = (u · v) + i(u × v)",
              "note": "⟂ ⟺ Re(ū v) = 0 · ∥ ⟺ Im(ū v) = 0"
            }
          ],
          "aids": [
            "“equidistant means bisector, constant ratio means Apollonius”",
            "“the bar goes on the first vector”"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Quadratic Equations with Complex Roots",
      "chip": "05 QUADRATIC",
      "kalam": "the missing roots were complex all along",
      "blocks": [
        {
          "t": "p",
          "html": "Over the reals, <i>x</i><sup>2</sup> + 1 = 0 had no roots at all. Over ℂ it has two, ±<i>i</i>. That is the first sight of a very deep fact, the Fundamental Theorem of Algebra: a polynomial of degree <i>n</i> has exactly <i>n</i> roots once you allow complex numbers. The quadratic formula never actually failed when the discriminant went negative; it was waiting for a number system in which √(negative) means something. <b>The missing roots were complex all along.</b>"
        },
        {
          "t": "p",
          "html": "The discriminant is a <b>weather forecast</b>. Before you solve anything, <i>D</i> = <i>b</i><sup>2</sup> − 4<i>ac</i> tells you what kind of roots to expect, the way a monsoon forecast tells you whether to carry an umbrella. <i>D</i> > 0 means two distinct real roots, both on the number line. <i>D</i> = 0 means one repeated real root, the borderline case. <i>D</i> < 0 means the roots have <b>left the real line</b> and moved out into the plane, as a conjugate pair."
        },
        {
          "t": "p",
          "html": "That pairing has a condition attached, and the condition is where the marks are. A conjugate is a reflection across the real axis, so when a quadratic has <b>real coefficients</b> and a complex root <i>p</i> + <i>iq</i>, its mirror image <i>p</i> − <i>iq</i> is forced to be a root too. Change the coefficients to complex numbers and the symmetry breaks immediately: the roots can be any two complex numbers at all, related by nothing."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · WHERE THE ROOTS LIVE, TAP A CASE",
          "mathChips": true,
          "chips": ["D > 0", "D = 0", "D < 0", "complex coeffs"],
          "captions": [
            "x² − 3x + 2 = 0 has D = 1 > 0: two distinct roots, 1 and 2, both sitting on the real axis where a graph could show them.",
            "x² − 4x + 4 = 0 has D = 0: the two roots have collided at x = −b/2a = 2. One point, counted twice.",
            "x² − 2x + 2 = 0 has D = −4 < 0: the roots 1 ± i have left the real line, and because the coefficients are real they are mirror images in it.",
            "x² − (3 + i)x + (2 + i) = 0 has complex coefficients. Its roots 2 + i and 1 are not a mirror pair, and no discriminant sign could have predicted them."
          ],
          "frames": [
            {
              "x": [-3.5, 3.5],
              "y": [-2.5, 2.5],
              "points": [
                { "x": 1, "y": 0, "label": "1" },
                { "x": 2, "y": 0, "label": "2" }
              ],
              "labels": [{ "x": 0, "y": 1.6, "text": "both roots on ℝ", "soft": true }]
            },
            {
              "x": [-3.5, 3.5],
              "y": [-2.5, 2.5],
              "points": [{ "x": 2, "y": 0, "label": "2, twice" }],
              "labels": [{ "x": 0, "y": 1.6, "text": "the roots have collided", "soft": true }]
            },
            {
              "x": [-3.5, 3.5],
              "y": [-2.5, 2.5],
              "points": [
                { "x": 1, "y": 1, "label": "1 + i" },
                { "x": 1, "y": -1, "label": "1 − i" }
              ],
              "segments": [{ "from": [1, 1], "to": [1, -1], "dash": true, "soft": true }],
              "labels": [{ "x": -1.6, "y": 1.9, "text": "a mirror pair", "soft": true }]
            },
            {
              "x": [-3.5, 3.5],
              "y": [-2.5, 2.5],
              "points": [
                { "x": 2, "y": 1, "label": "2 + i" },
                { "x": 1, "y": 0, "label": "1" }
              ],
              "labels": [{ "x": -1.4, "y": 1.9, "text": "no symmetry at all", "soft": true }]
            }
          ]
        },
        {
          "t": "think",
          "html": "check <i>D</i> before you compute anything. it costs five seconds and it tells you the shape of the answer, which means you know instantly whether a real answer or an <i>i</i> is supposed to appear."
        },
        {
          "t": "formula",
          "kicker": "THE QUADRATIC FORMULA",
          "tag": "a ≠ 0",
          "main": "x = (−b ± √D) / 2a, D = b<sup>2</sup> − 4ac",
          "legend": [
            "it comes from completing the square, and the square root is now defined for every value of D",
            "when D < 0 and a, b, c are real: x = (−b ± i√(4ac − b²)) / 2a"
          ],
          "note": "So the formula yields two roots in every case. Declaring “no roots” when D < 0 is a statement about ℝ, not about the equation."
        },
        {
          "t": "defgrid",
          "title": "Nature of the roots",
          "tag": "real coefficients a, b, c",
          "rows": [
            {
              "k": "<i>D</i> > 0",
              "v": "real and distinct"
            },
            {
              "k": "<i>D</i> = 0",
              "v": "real and equal, <i>x</i> = −<i>b</i>/2<i>a</i>"
            },
            {
              "k": "<i>D</i> < 0",
              "v": "a non-real complex conjugate pair"
            },
            {
              "k": "Validity",
              "v": "the whole table <b>assumes real coefficients</b>"
            },
            {
              "k": "Complex coefficients",
              "v": "“<i>D</i> < 0” is meaningless and the roots need not be conjugates"
            },
            {
              "k": "Rational coefficients",
              "v": "<i>D</i> a perfect square gives rational roots; otherwise a surd pair <i>p</i> ± √<i>q</i>"
            }
          ]
        },
        {
          "t": "def",
          "term": "Conjugate-root theorem",
          "html": "If a polynomial has <b>real coefficients</b> and <i>p</i> + <i>iq</i> (with <i>q</i> ≠ 0) is a root, then <i>p</i> − <i>iq</i> is also a root. The rational-coefficient version is its exact analogue: if <i>a</i>, <i>b</i>, <i>c</i> ∈ ℚ and <i>p</i> + √<i>q</i> is a root with √<i>q</i> irrational, then <i>p</i> − √<i>q</i> is a root too. Both statements <b>fail the moment the coefficient condition fails</b>."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE ROOTS PAIR UP, TAP A LINE",
          "steps": [
            {
              "eq": "az<sup>2</sup> + bz + c = 0 with z = p + iq",
              "why": "Start from the assumption: z is a root, and a, b, c are real numbers."
            },
            {
              "eq": "conjugate the whole equation",
              "why": "Both sides are equal, so their conjugates are equal. The conjugate of 0 is 0."
            },
            {
              "eq": "ā z̄<sup>2</sup> + b̄ z̄ + c̄ = 0",
              "why": "Conjugation distributes over sums and products, so it passes through the polynomial term by term and reaches every factor."
            },
            {
              "eq": "a z̄<sup>2</sup> + b z̄ + c = 0",
              "why": "Here is the only step that uses the hypothesis: ā = a, b̄ = b, c̄ = c precisely because the coefficients are real. So z̄ = p − iq satisfies the same equation. Make one coefficient non-real and this line breaks, which is exactly why the theorem then fails."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "VIETA AND BUILDING A QUADRATIC",
          "tag": "mind the minus",
          "main": "α + β = −b/a · αβ = c/a",
          "legend": [
            "from the roots: x² − (sum)x + (product) = 0",
            "real quadratic from a root p + iq: sum 2p, product p² + q², so x² − 2px + (p² + q²) = 0"
          ],
          "note": "The sum carries a minus sign and the product does not. That single asymmetry is one of the most reliably examined slips in the chapter."
        },
        {
          "t": "proc",
          "title": "The square root of a complex number",
          "steps": [
            "Set √(<i>a</i> + <i>ib</i>) = <i>x</i> + <i>iy</i> with <i>x</i>, <i>y</i> real, then square and equate parts: <i>x</i><sup>2</sup> − <i>y</i><sup>2</sup> = <i>a</i> and 2<i>xy</i> = <i>b</i>.",
            "Use the modulus to split them: <i>x</i><sup>2</sup> = (|<i>z</i>| + <i>a</i>)/2 and <i>y</i><sup>2</sup> = (|<i>z</i>| − <i>a</i>)/2, where |<i>z</i>| = √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>). Both right-hand sides are automatically non-negative.",
            "Fix the branch: the sign of <i>xy</i> must match the sign of <i>b</i>. That is the only place the second equation is still needed.",
            "Report <b>both</b> roots, ±(<i>x</i> + <i>iy</i>). This is what makes the quadratic formula usable when <i>D</i> is itself complex."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Solve <i>x</i><sup>2</sup> + 1 = 0 and <i>x</i><sup>2</sup> + <i>x</i> + 1 = 0.",
          "steps": [
            "<i>x</i><sup>2</sup> = −1 gives <i>x</i> = ±<i>i</i> directly.",
            "For the second, <i>D</i> = 1 − 4 = −3 < 0, so <i>x</i> = (−1 ± <i>i</i>√3)/2.",
            "Those two numbers are the non-real cube roots of unity, usually written <i>ω</i> and <i>ω</i><sup>2</sup>. They are a conjugate pair, as real coefficients demand."
          ],
          "ans": "±i · (−1 ± i√3)/2"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Solve √2 <i>x</i><sup>2</sup> + <i>x</i> + √2 = 0.",
          "steps": [
            "<i>D</i> = 1 − 4(√2)(√2) = 1 − 8 = −7 < 0, so expect a conjugate pair.",
            "√<i>D</i> = <i>i</i>√7, and 2<i>a</i> = 2√2.",
            "<i>x</i> = (−1 ± <i>i</i>√7)/(2√2). Irrational coefficients are no obstacle: the formula only needs <i>a</i> ≠ 0."
          ],
          "ans": "x = (−1 ± i√7)/(2√2)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Form a quadratic with real coefficients, one of whose roots is 2 − 3<i>i</i>. Then find √(−15 − 8<i>i</i>).",
          "steps": [
            "Real coefficients force the other root to be 2 + 3<i>i</i>. Sum = 4, product = (2 − 3<i>i</i>)(2 + 3<i>i</i>) = 4 + 9 = 13, so <i>x</i><sup>2</sup> − 4<i>x</i> + 13 = 0.",
            "For the root: |−15 − 8<i>i</i>| = √(225 + 64) = 17, so <i>x</i><sup>2</sup> = (17 − 15)/2 = 1 and <i>y</i><sup>2</sup> = (17 + 15)/2 = 16.",
            "Here <i>b</i> = −8 < 0, so <i>xy</i> < 0: the answer is ±(1 − 4<i>i</i>)."
          ],
          "ans": "x² − 4x + 13 = 0 · √(−15 − 8i) = ±(1 − 4i)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Solve <i>x</i><sup>2</sup> − (3 + <i>i</i>)<i>x</i> + (2 + <i>i</i>) = 0 and check whether the roots are conjugates.",
          "steps": [
            "<i>D</i> = (3 + <i>i</i>)<sup>2</sup> − 4(2 + <i>i</i>) = (8 + 6<i>i</i>) − (8 + 4<i>i</i>) = 2<i>i</i>. A complex discriminant, so the sign table says nothing.",
            "√(2<i>i</i>): <i>x</i><sup>2</sup> − <i>y</i><sup>2</sup> = 0 and 2<i>xy</i> = 2 with |2<i>i</i>| = 2, so <i>x</i><sup>2</sup> = <i>y</i><sup>2</sup> = 1 and <i>xy</i> > 0, giving ±(1 + <i>i</i>).",
            "<i>x</i> = [(3 + <i>i</i>) ± (1 + <i>i</i>)]/2, so <i>x</i> = 2 + <i>i</i> or <i>x</i> = 1. Not conjugates, and they should not be: the coefficients are not real."
          ],
          "ans": "x = 2 + i and x = 1 · the conjugate-root theorem does not apply here"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] State the nature of the roots of (a) <i>x</i><sup>2</sup> − 4<i>x</i> + 5 = 0, (b) 2<i>x</i><sup>2</sup> − 3<i>x</i> + 1 = 0, (c) <i>x</i><sup>2</sup> − 6<i>x</i> + 9 = 0.",
              "a": "(a) <i>D</i> = −4 < 0, complex conjugate pair. (b) <i>D</i> = 1 > 0, real and distinct. (c) <i>D</i> = 0, real and equal."
            },
            {
              "q": "[CBSE] Solve <i>x</i><sup>2</sup> − 2<i>x</i> + 5 = 0 and 3<i>x</i><sup>2</sup> − 4<i>x</i> + 20/3 = 0.",
              "a": "<i>D</i> = −16 gives <i>x</i> = (2 ± 4<i>i</i>)/2 = 1 ± 2<i>i</i>. <i>D</i> = 16 − 80 = −64 gives <i>x</i> = (4 ± 8<i>i</i>)/6 = (2 ± 4<i>i</i>)/3."
            },
            {
              "q": "[JEE Main] Form a quadratic with real coefficients one of whose roots is −1 + <i>i</i>√2.",
              "a": "Other root −1 − <i>i</i>√2; sum −2, product 1 + 2 = 3, so <i>x</i><sup>2</sup> + 2<i>x</i> + 3 = 0."
            },
            {
              "q": "[JEE Main] Find √(7 + 24<i>i</i>).",
              "a": "|<i>z</i>| = 25, so <i>x</i><sup>2</sup> = 16 and <i>y</i><sup>2</sup> = 9; <i>b</i> = 24 > 0 so <i>xy</i> > 0, giving ±(4 + 3<i>i</i>)."
            },
            {
              "q": "[JEE Advanced] Solve <i>ix</i><sup>2</sup> − 2<i>x</i> + (2 − <i>i</i>) = 0.",
              "a": "<i>D</i> = 4 − 4<i>i</i>(2 − <i>i</i>) = −8<i>i</i>, and √(−8<i>i</i>) = ±(2 − 2<i>i</i>). Then <i>x</i> = [2 ± (2 − 2<i>i</i>)]/(2<i>i</i>), giving <i>x</i> = −1 − 2<i>i</i> or <i>x</i> = 1. Not conjugates."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The roots of <i>x</i><sup>2</sup> − 2<i>x</i> + 2 = 0 are:",
          "correct": 0,
          "opts": [
            {
              "label": "1 ± i",
              "nudge": null
            },
            {
              "label": "−1 ± i",
              "nudge": "The sign of −b/2a was dropped: with b = −2 the real part of each root is +1."
            },
            {
              "label": "2 ± i",
              "nudge": "The division by 2a was forgotten, leaving −b instead of −b/2a."
            },
            {
              "label": "real and distinct",
              "nudge": "D = 4 − 8 = −4 < 0, so no real root exists. This is the discriminant misread."
            }
          ],
          "solution": "D = −4, so x = (2 ± 2i)/2 = 1 ± i, a conjugate pair as real coefficients require."
        },
        {
          "t": "mcq",
          "q": "A quadratic with <b>real</b> coefficients has one root 3 + 4<i>i</i>. Its other root is:",
          "correct": 2,
          "opts": [
            {
              "label": "3 + 4i",
              "nudge": "That would make it a repeated root, which needs D = 0, and D = 0 forces a real root."
            },
            {
              "label": "−3 − 4i",
              "nudge": "That negates instead of conjugating. The conjugate flips only the imaginary sign."
            },
            {
              "label": "3 − 4i",
              "nudge": null
            },
            {
              "label": "4 + 3i",
              "nudge": "The parts were swapped. Conjugation never moves a number between the real and imaginary slots."
            }
          ],
          "solution": "The conjugate-root theorem: real coefficients force complex roots to appear as mirror pairs."
        },
        {
          "t": "mcq",
          "q": "For <i>x</i><sup>2</sup> − (2 + <i>i</i>)<i>x</i> + <i>c</i> = 0 with <i>c</i> complex, the roots:",
          "correct": 1,
          "opts": [
            {
              "label": "must be conjugates",
              "nudge": "That applies the conjugate-root theorem without checking its hypothesis, and the coefficient 2 + i is not real."
            },
            {
              "label": "need not be conjugates",
              "nudge": null
            },
            {
              "label": "are always real",
              "nudge": "Nothing forces real roots here; the sum of the roots is itself non-real."
            },
            {
              "label": "are always equal",
              "nudge": "Equal roots need D = 0, which is a condition on c, not something the form guarantees."
            }
          ],
          "solution": "The pairing theorem needs real coefficients. With a complex coefficient anywhere, the roots are just two complex numbers."
        },
        {
          "t": "mcq",
          "q": "√(−5 + 12<i>i</i>) equals:",
          "correct": 0,
          "opts": [
            {
              "label": "±(2 + 3i)",
              "nudge": null
            },
            {
              "label": "±(3 + 2i)",
              "nudge": "x and y have been swapped. x² = (|z| + a)/2 with a = −5 gives the smaller value to x."
            },
            {
              "label": "±(2 − 3i)",
              "nudge": "The branch is wrong: b = +12 > 0 forces xy > 0, so the two parts share a sign."
            },
            {
              "label": "±(3 − 2i)",
              "nudge": "Both errors at once, the swap and the branch."
            }
          ],
          "solution": "|z| = 13, so x² = (13 − 5)/2 = 4 and y² = (13 + 5)/2 = 9, with xy > 0: ±(2 + 3i)."
        },
        {
          "t": "mistakes",
          "items": [
            "Declaring “no roots” when <i>D</i> < 0. <b>Over ℂ there are always two</b>, and they are conjugates when the coefficients are real.",
            "Applying the conjugate-root theorem to a <b>complex-coefficient</b> equation. It needs real coefficients and nothing weaker.",
            "Forgetting that <b>√<i>D</i> = <i>i</i>√|<i>D</i>|</b> when <i>D</i> < 0, and losing the <i>i</i> somewhere in the arithmetic.",
            "Reporting one square root of a complex number. There are <b>always two</b>, ±(<i>x</i> + <i>iy</i>), and sgn(<i>xy</i>) = sgn(<i>b</i>) picks the branch.",
            "Sign slip in Vieta: the sum is <b>−<i>b</i>/<i>a</i></b>, not <i>b</i>/<i>a</i>. The product is the one without a minus."
          ]
        },
        {
          "t": "protip",
          "html": "with real coefficients you only ever have to find <b>one</b> complex root. the other is its conjugate, free of charge, which halves the work on every board question of this type."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "x = (−b ± √D)/2a, D = b² − 4ac",
              "note": "two roots in every case, over ℂ"
            },
            {
              "f": "D > 0 real distinct · D = 0 real equal · D < 0 conjugate pair",
              "note": "real coefficients only"
            },
            {
              "f": "D < 0: x = (−b ± i√(4ac − b²))/2a",
              "note": "√D = i√|D|"
            },
            {
              "f": "α + β = −b/a · αβ = c/a",
              "note": "from roots: x² − (sum)x + (product) = 0"
            },
            {
              "f": "real quadratic from p + iq: x² − 2px + (p² + q²) = 0",
              "note": "sum 2p, product p² + q²"
            },
            {
              "f": "√(a + ib) = ±(x + iy), x² = (|z|+a)/2, y² = (|z|−a)/2",
              "note": "sgn(xy) = sgn(b)"
            }
          ],
          "aids": [
            "“check D first, compute second”",
            "“mirror pairs need real coefficients”"
          ]
        }
      ]
    }
  ]
};

export default ch04Complex;
