/**
 * Chapter 06 · Applications of Derivatives, Mathematics, Class 12.
 *
 * Restructured from the Drona Class 12 Mathematics Master Reference (pages 349
 * to 409) into the block system in design_handoff_textbooks/CONTENT_SPEC.md,
 * matching the voice and density of math-12-01-relations.ts. The catalogue
 * calls this chapter "Applications of Derivatives", plural; the source's own
 * running head says "Application of Derivatives" at page 349 and
 * "Applications of Derivatives" at page 385. The catalogue's title is the one
 * used here, because that is what the Chapters screen matches on.
 *
 * The source is two documents stacked. A typeset chapter of three subtopics
 * (Rate of Change, Monotonicity, Maxima and Minima) plus two appendices that
 * the NCERT rationalisation removed from the board syllabus (A: Tangents and
 * Normals; B: Approximations and Differentials), pages 349 to 384. Then a
 * Round 2 Addendum of six inserts, pages 385 to 409: A Rolle and the Mean
 * Value Theorem, B monotonicity for root counting and chained inequalities,
 * C the n-th derivative test with concavity and inflection, D extrema on open
 * and unbounded domains, E subtangent and subnormal geometry, and P a
 * previous-year analysis of roughly 130 recoverable questions, 1979 to 2020.
 *
 * Editorial decisions worth recording:
 *
 * 1. Six topics, and the addenda are folded into the topic they belong to
 *    rather than given topics of their own. Appendix B (approximations and
 *    differentials) folds into topic 01, because a differential and a rate are
 *    the same derivative used two ways and the source itself measures the
 *    material at zero recoverable previous-year questions. Addendum E folds
 *    into topic 02 beside Appendix A, which it completes. Addendum C folds
 *    into topic 04, where the Second Derivative Test admits the hole that the
 *    n-th derivative test patches. Addendum D folds into topic 05, whose
 *    closed-interval working rule it repairs for domains with no endpoints.
 *    Addenda A and B become topic 06 together, because root counting is MVT
 *    and monotonicity used as one tool. Addendum P is not a topic: its
 *    distribution table feeds the hook, its seven archetypes feed the worked
 *    examples, and its nine engineered traps feed the `mistakes` cards.
 *
 * 2. Nothing here re-teaches differentiation. math-11-12-limits.ts, topic 04
 *    (The Derivative from First Principle) and topic 05 (Rules of
 *    Differentiation), already carries the limit definition, the product,
 *    quotient and chain rules, the full trigonometric set, and the
 *    derivatives of e^x, a^x and ln x, and it teaches the chain rule as
 *    "rates multiply", which is exactly the related-rates bridge. So the
 *    source's Subtopic 01 Section 2 restatement of the chain rule is quoted
 *    as known rather than derived, and topic 01 here spends the derivative
 *    instead of building it.
 *
 * 3. The hook is merged, as in every chapter here. The source carries an
 *    "Exam Relevance" panel per subtopic plus Addendum P's distribution
 *    table; the reader renders `hook` on topic 1 only, so all of it is
 *    gathered into that one accordion under six bold headings.
 *
 * 4. Twelve `diagram` blocks: eleven `plot` and one `numberline`, two per
 *    topic. Six of the source's seven named figures are drawn (6.1 the
 *    sliding ladder, 6.2 the inverted cone, 6.3 the sign-chart number line,
 *    6.5 the peak and trough with their horizontal tangents, 6.6 the cylinder
 *    inscribed in a sphere, 6.7 the two parabolas and the angle at (1, 1)).
 *    The rest are figures this chapter cannot be taught without: the tangent
 *    and the normal at one point of contact; f drawn together with f' in one
 *    frame, so the zeros of f' land visibly under the turning points of f;
 *    the x squared, x cubed, x fourth trio, which is the first-derivative-test
 *    failure case and the second-test silence side by side; the closed
 *    interval [0, 3] where the absolute maximum sits at an endpoint; the open
 *    box drawn as its net, as a polygon, beside the volume curve it produces;
 *    and the chord-and-parallel-tangent pair for Rolle and MVT, plus the
 *    three-value root audit for x^3 - 3x + k.
 *
 *    ONE FIGURE DROPPED. Source Figure 6.4 asks for y = 2 sin x + tan x drawn
 *    above y = 3x on (0, pi/2). `PlotCurve` is a closed vocabulary of named
 *    curves with no way to add two of them, so the sum cannot be drawn. Its
 *    Taylor polynomial 3x + 0.15x^5 is drawable and is a genuinely good
 *    picture of the inequality, but labelling an approximation with the true
 *    function's name would be dishonest, so the figure is dropped rather than
 *    faked. No new `kind` was added; every kind used here is already in
 *    components/textbook/diagrams.tsx.
 *
 * ERRATA (source pages 830 to 832): the list carries entries for Chapters 1,
 * 3 and 11 only. There is no Chapter 6 entry, so nothing was applied.
 *
 * ERRORS FOUND WHILE RE-SOLVING (the corrected value is what this chapter
 * teaches, and each is named where a student meets it):
 *
 *   - Page 398, Addendum D, Practice Q5. The closest points on y = x^2 to
 *     (0, 2) are printed correctly as (+-sqrt6/2, 3/2), but the distance is
 *     printed "sqrt(5/2) = sqrt10/2", about 1.58. It is wrong. The book's own
 *     objective is g = x^2 + (x^2 - 2)^2 = x^4 - 3x^2 + 4, and its own
 *     critical value is x^2 = 3/2, from g' = 2x(2x^2 - 3). Substituting:
 *     (3/2)^2 - 3(3/2) + 4 = 9/4 - 18/4 + 16/4 = 7/4, not 5/2. The distance
 *     is sqrt(7/4) = sqrt7/2, about 1.32. Checked directly too: the point
 *     (1.2247, 1.5) is sqrt(1.5 + 0.25) = sqrt1.75 from (0, 2). Corrected in
 *     topic 05's practice card, with the arithmetic shown.
 *
 *   - Page 389, Addendum A, Practice Q2 answer. Asked why the MVT fails for
 *     f(x) = 1/x on [-1, 1], the printed answer says "f(-1) = f(1) = -1 would
 *     require some c with f'(c) = 0". That is false and it argues from the
 *     wrong theorem: f(-1) = -1 but f(1) = +1, so the endpoint values are not
 *     equal and Rolle was never applicable. The MVT conclusion does fail, but
 *     for a different reason: it would demand f'(c) = (f(1) - f(-1))/2 = 1,
 *     while f'(x) = -1/x^2 is negative wherever it exists. The printed
 *     punchline about f' < 0 is right; the setup it hangs on is not.
 *     Corrected in topic 06's practice card.
 *
 *   - Page 360, Subtopic 02, Section 2. The sharpened monotonicity criterion
 *     is stated as "f'(x) >= 0 with f'(x) = 0 only at finitely many isolated
 *     points". True, but too narrow to support the book's own answer key: on
 *     page 366 its MCQ Q2 marks f(x) = x - sin x strictly increasing on R,
 *     and f' = 1 - cos x vanishes at x = 2n*pi for every integer n, which is
 *     infinitely many points. The condition that matters is that the zeros be
 *     isolated, not that there be finitely many of them. This chapter states
 *     it as "isolated" throughout and records the discrepancy in the formula
 *     card's note in topic 03.
 *
 * Two further things noticed and deliberately not treated as errors. Page 369
 * defines a local maximum by "f(c) > f(x) for all x in (c - h, c + h)", which
 * is false at x = c itself; NCERT writes "for all x != c" and this chapter
 * follows NCERT without comment, since it is a slipped quantifier rather than
 * a wrong value. And page 400, Example E.1, contains a visible self-
 * correction: it computes PT as sqrt13/3, writes "recompute", and arrives at
 * the correct sqrt10/3. The published value is right, so nothing is corrected;
 * this chapter simply states sqrt10/3.
 *
 * PDF EXTRACTION DAMAGE, re-authored rather than guessed. The extract renders
 * the minus sign as "{n7", the multiplication dot as "{nA", the degree sign
 * as "{nK" and a closing bracket as "{t@", and several headings arrive
 * mojibaked ("(xample - >-(( 0ain /evel@" for "Example 3 - [JEE Main Level]",
 * "6HFWLRQ 3UDFWLFH ([HUFLVHV" for "Section 5: Practice Exercises"). Every
 * affected statement was reconstructed from the surrounding mathematics and
 * re-solved before use; none of it was copied through.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch12DerivativesApplications: Chapter = {
  "chapter": "06",
  "title": "Applications of Derivatives",
  "subject": "Mathematics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Rates of Change and Related Rates",
      "chip": "01 RATES",
      "kalam": "differentiate first, plug in last",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Rates of Change and Related Rates</b><br>A dependable CBSE Boards question: a 2 to 3 mark related-rates problem, an expanding circle, a sliding ladder, an inflating balloon or a filling cone, appears almost every year. JEE Main carries one regularly. The previous-year bank shows the shape of it sharply: near absent before 2000, then a tight cluster in Main 2013, 2014, 2019 twice and 2020 twice, about 7 percent of the recoverable pool. Examiners recycle these almost verbatim, and the same iron ball coated with melting ice, same radius, same melt rate, was set in April 2019 and again in January 2020. It is also the launch pad for the chapter, because <b>derivative equals rate</b> underpins everything after it. Approximations and differentials ride along here: the bank supplied with this chapter holds <b>no</b> recoverable question on them, so learn the one formula and move on.<br><br><b>02 · Tangents, Normals and the Angle Between Curves</b><br>Removed from CBSE Boards in the NCERT rationalisation, and the second-largest block in the JEE bank at roughly 30 percent, continuous across every era from 1983 to 2020 with a heavy 2013 to 2017 Main cluster. A board-only student may skip it. Nobody else should: it increasingly rides on <b>implicit and parametric</b> curves rather than <i>y</i> = <i>f</i>(<i>x</i>), and the subtangent and subnormal geometry behind it is a standing JEE pattern.<br><br><b>03 · Increasing and Decreasing Functions</b><br>A guaranteed scorer. CBSE almost always carries a 3 mark <b>“find the intervals in which <i>f</i> is strictly increasing”</b> question, plus a HOTS inequality or a “show <i>f</i> is increasing on ℝ” proof. JEE Main puts 1 to 2 a year, usually a parameter range or a “which of these is monotonic” MCQ. About 20 percent of the bank. At Advanced level monotonicity is rarely the question: it is the <b>engine</b> inside inequality proofs and root counting, and the board-level interval question is only the entry fee.<br><br><b>04 · Maxima and Minima: Locating and Certifying</b><br>The largest block in the bank, roughly 40 percent, present in virtually every session from 1979 to 2020. CBSE carries a short local-extremum problem alongside the optimisation word problem. JEE Main asks 2 to 3 a year: local extrema, absolute extrema on an interval, or a parameter condition. The most carefully engineered trap in the chapter lives here, that <i>f</i>′(<i>c</i>) = 0 alone proves nothing, and its companion, that a failed second-derivative test still has an answer.<br><br><b>05 · Absolute Extrema and Applied Optimisation</b><br>The famous open box, least material and largest area questions, worth 3 to 5 marks at Boards. JEE Main's favourite forms are the fitted-cost problem, the constrained solid and the closest point on a curve. The <b>endpoint audit</b> is the step most students drop, and the bank's own showpiece peaks at an endpoint on purpose. Half of these questions live on domains with no endpoints at all, where the closed-interval rule returns nothing and a different existence argument is needed.<br><br><b>06 · Rolle, the Mean Value Theorem and Root Counting</b><br>MVT was deleted from the CBSE syllabus and JEE Main did not delete it: “verify Rolle and find <i>c</i>” and “use MVT to bound this” appear regularly, and JEE Advanced uses it as a root-existence tool. It is also the hidden engine under the monotonicity theorem this chapter uses without proof. The Advanced habit is to hide Rolle inside a condition on a sum of coefficients, and to ask how many real roots an equation has as a parameter moves."
        },
        {
          "t": "p",
          "html": "Class 11 taught you the derivative twice over: as a slope, then as a machine, first principle followed by the product, quotient and chain rules. All of that lives in <b>Limits and Derivatives</b>, and nothing in this chapter re-teaches it. This chapter <b>spends</b> it. The first purchase is the derivative's second identity. d<i>y</i>/d<i>x</i> is not only the steepness of a graph, it is a <b>rate of change</b>: how fast <i>y</i> moves per unit move of <i>x</i>. If d<i>y</i>/d<i>x</i> = 4 at some instant, then near that instant <i>y</i> gains four units for every one unit <i>x</i> gains."
        },
        {
          "t": "p",
          "html": "Most real situations change with <b>time</b> rather than with each other directly. Drop a stone into still water at a Varanasi ghat. A circular ripple spreads outward: the radius grows, and so does the area it encloses. Two quantities are moving at once and they are chained, because the area depends on the radius and the radius depends on time. That chain is the whole of <b>related rates</b>, and it is the only genuinely new idea in this topic."
        },
        {
          "t": "think",
          "html": "the chain rule is the bridge between the rates. area depends on radius, radius depends on time, so d<i>A</i>/d<i>t</i> = (d<i>A</i>/d<i>r</i>)(d<i>r</i>/d<i>t</i>). read it aloud: how fast the area changes equals how much area you get per unit radius, times how fast the radius is moving. you are passing the rate through the geometry."
        },
        {
          "t": "p",
          "html": "One distinction decides everything. The <b>average</b> rate of change of <i>y</i> over an interval is Δ<i>y</i>/Δ<i>x</i>, a ratio of finite changes. The <b>instantaneous</b> rate is its limit, d<i>y</i>/d<i>x</i>. Exam problems almost always want the instantaneous rate <b>at a stated moment</b>: how fast is the area growing <i>when the radius is 10 cm</i>. That clause is your instruction to differentiate first and substitute afterwards. Reverse the order and the problem dies: put <i>r</i> = 10 into <i>A</i> = π<i>r</i><sup>2</sup> before differentiating and the radius has become a constant, so its rate is zero and so is your answer."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · RATE, AND THE BRIDGE IN TIME",
          "tag": "Q differentiable in x, x differentiable in t",
          "main": "dQ/dt = (dQ/dx) · (dx/dt)",
          "legend": [
            "d<i>y</i>/d<i>x</i> = <i>f</i>′(<i>x</i>) is the rate of change of <i>y</i> per unit <i>x</i>, and its value at <i>x</i> = <i>a</i> is the <b>instantaneous</b> rate there",
            "a growing quantity has a positive rate, a shrinking one a <b>negative</b> rate: draining, falling, melting and shortening all carry the minus sign, and it is worth a mark",
            "units travel with the rate: cm/s for a length, cm<sup>2</sup>/s for an area, cm<sup>3</sup>/s for a volume. A mismatch is the cheapest signal that a step slipped"
          ],
          "note": "This is the chain rule and nothing more; Class 11 proved it. What is new is the habit of treating every varying length as a function of t, so that differentiating a geometric relation produces rate terms rather than numbers."
        },
        {
          "t": "defgrid",
          "title": "The standard geometric rate relations",
          "rows": [
            {
              "k": "Circle, area",
              "v": "<i>A</i> = π<i>r</i><sup>2</sup> ⇒ d<i>A</i>/d<i>t</i> = 2π<i>r</i> (d<i>r</i>/d<i>t</i>)"
            },
            {
              "k": "Circle, circumference",
              "v": "<i>C</i> = 2π<i>r</i> ⇒ d<i>C</i>/d<i>t</i> = 2π (d<i>r</i>/d<i>t</i>), with <b>no</b> <i>r</i> left in it"
            },
            {
              "k": "Sphere, volume",
              "v": "<i>V</i> = (4/3)π<i>r</i><sup>3</sup> ⇒ d<i>V</i>/d<i>t</i> = 4π<i>r</i><sup>2</sup> (d<i>r</i>/d<i>t</i>)"
            },
            {
              "k": "Sphere, surface",
              "v": "<i>S</i> = 4π<i>r</i><sup>2</sup> ⇒ d<i>S</i>/d<i>t</i> = 8π<i>r</i> (d<i>r</i>/d<i>t</i>)"
            },
            {
              "k": "Cube of edge x",
              "v": "<i>V</i> = <i>x</i><sup>3</sup> ⇒ 3<i>x</i><sup>2</sup>(d<i>x</i>/d<i>t</i>) · <i>S</i> = 6<i>x</i><sup>2</sup> ⇒ 12<i>x</i>(d<i>x</i>/d<i>t</i>)"
            },
            {
              "k": "Cone, volume",
              "v": "<i>V</i> = (1/3)π<i>r</i><sup>2</sup><i>h</i> holds <b>two</b> lengths: use the constraint to kill one, <b>then</b> differentiate"
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE SLIDING LADDER, TAP AN INSTANT",
          "chips": [
            "foot 5 m out",
            "foot 12 m out"
          ],
          "captions": [
            "A 13 m ladder, foot pulled away from the wall at 2 m/s. Pythagoras ties the legs together, x² + y² = 169, and differentiating in t gives x(dx/dt) + y(dy/dt) = 0. At x = 5 the top sits at y = 12, so dy/dt = −(5/12)(2) = −5/6 m/s. The minus is part of the answer, not decoration: it says the top is going down.",
            "The same ladder and the same 2 m/s at the foot, but now x = 12 and y = 5. The same formula, dy/dt = −(x/y)(dx/dt), returns −24/5 = −4.8 m/s, nearly six times faster. As y shrinks to 0 the factor x/y blows up, which is why a ladder that has nearly finished falling finishes very fast indeed."
          ],
          "frames": [
            {
              "x": [
                -1.6,
                14.4
              ],
              "y": [
                -1.6,
                13.8
              ],
              "segments": [
                {
                  "from": [
                    5,
                    0
                  ],
                  "to": [
                    0,
                    12
                  ],
                  "label": "13"
                },
                {
                  "from": [
                    5,
                    0
                  ],
                  "to": [
                    7.2,
                    0
                  ],
                  "arrow": true,
                  "soft": true
                },
                {
                  "from": [
                    0,
                    12
                  ],
                  "to": [
                    0,
                    9.8
                  ],
                  "arrow": true,
                  "soft": true
                }
              ],
              "points": [
                {
                  "x": 5,
                  "y": 0,
                  "label": "foot"
                },
                {
                  "x": 0,
                  "y": 12,
                  "label": "top"
                }
              ],
              "labels": [
                {
                  "x": 2.5,
                  "y": -1.0,
                  "text": "x = 5"
                },
                {
                  "x": 8.8,
                  "y": 12.6,
                  "text": "dy/dt = −5/6"
                }
              ]
            },
            {
              "x": [
                -1.6,
                14.4
              ],
              "y": [
                -1.6,
                13.8
              ],
              "segments": [
                {
                  "from": [
                    12,
                    0
                  ],
                  "to": [
                    0,
                    5
                  ],
                  "label": "13"
                },
                {
                  "from": [
                    12,
                    0
                  ],
                  "to": [
                    14.2,
                    0
                  ],
                  "arrow": true,
                  "soft": true
                },
                {
                  "from": [
                    0,
                    5
                  ],
                  "to": [
                    0,
                    2.8
                  ],
                  "arrow": true,
                  "soft": true
                }
              ],
              "points": [
                {
                  "x": 12,
                  "y": 0,
                  "label": "foot"
                },
                {
                  "x": 0,
                  "y": 5,
                  "label": "top"
                }
              ],
              "labels": [
                {
                  "x": 6,
                  "y": -1.0,
                  "text": "x = 12"
                },
                {
                  "x": 8.8,
                  "y": 12.6,
                  "text": "dy/dt = −24/5"
                }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "The five-step related-rates drill",
          "steps": [
            "<b>List what is given and what is wanted, as rates.</b> “Increasing at 3 cm/s” means d<i>r</i>/d<i>t</i> = 3. “How fast is the area changing” means find d<i>A</i>/d<i>t</i>. Naming both fixes the target and stops you confusing a length with its rate.",
            "<b>Write one relation connecting the quantities.</b> The geometry supplies it: <i>A</i> = π<i>r</i><sup>2</sup>, <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = ℓ<sup>2</sup>, <i>V</i> = (1/3)π<i>r</i><sup>2</sup><i>h</i>. This is the structural link the chain rule will act on.",
            "<b>Eliminate every extra variable using the constraint.</b> If the cone keeps <i>r</i> = <i>h</i>/2, substitute so the volume depends on <i>h</i> alone. Differentiating in time needs one driving variable, or you are left with a second unknown rate and a stuck problem.",
            "<b>Differentiate the whole relation with respect to <i>t</i>.</b> Every varying length is a function of <i>t</i>, so each one produces a rate factor. Do this <b>before</b> a single number goes in.",
            "<b>Substitute the instant's values last, then attach sign and units.</b> The rate equation is general; the numbers specialise it to the moment asked about. A shrinking quantity keeps its minus, and the units must match the dimension of what you were asked for."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · WHY THE CONE IS REDUCED FIRST, TAP ONE",
          "chips": [
            "the constraint r = h/2",
            "water at depth 4"
          ],
          "captions": [
            "An inverted cone, vertex down, whose water surface radius is always half the depth. That one line, r = h/2, is what makes the problem solvable: it lets a single length stand in for two. Without it the volume carries two varying quantities, and differentiating in t hands you two unknown rates and one equation.",
            "Substitute first, and this is the only place in the topic where substituting first is correct: V = (1/3)πr²h becomes πh³/12, a function of h alone. Differentiating now gives dV/dt = (πh²/4)(dh/dt), so at h = 4 with 8 cm³/s pouring in, the level rises at 2/π cm/s, about 0.64."
          ],
          "frames": [
            {
              "x": [
                -4.9,
                4.9
              ],
              "y": [
                -0.8,
                7.2
              ],
              "segments": [
                {
                  "from": [
                    0,
                    0
                  ],
                  "to": [
                    -3.4,
                    6.8
                  ],
                  "soft": true
                },
                {
                  "from": [
                    0,
                    0
                  ],
                  "to": [
                    3.4,
                    6.8
                  ],
                  "soft": true
                },
                {
                  "from": [
                    0,
                    0
                  ],
                  "to": [
                    0,
                    6
                  ],
                  "dash": true,
                  "label": "h"
                },
                {
                  "from": [
                    0,
                    6
                  ],
                  "to": [
                    3,
                    6
                  ],
                  "label": "r"
                }
              ],
              "points": [
                {
                  "x": 3,
                  "y": 6
                }
              ],
              "labels": [
                {
                  "x": 0,
                  "y": 6.9,
                  "text": "r = h/2"
                }
              ]
            },
            {
              "x": [
                -4.9,
                4.9
              ],
              "y": [
                -0.8,
                7.2
              ],
              "polygons": [
                {
                  "points": [
                    [
                      -2,
                      4
                    ],
                    [
                      2,
                      4
                    ],
                    [
                      0,
                      0
                    ]
                  ],
                  "corners": false
                }
              ],
              "segments": [
                {
                  "from": [
                    0,
                    0
                  ],
                  "to": [
                    -3.4,
                    6.8
                  ],
                  "soft": true
                },
                {
                  "from": [
                    0,
                    0
                  ],
                  "to": [
                    3.4,
                    6.8
                  ],
                  "soft": true
                },
                {
                  "from": [
                    0,
                    0
                  ],
                  "to": [
                    0,
                    4
                  ],
                  "dash": true,
                  "label": "h = 4"
                },
                {
                  "from": [
                    0,
                    4
                  ],
                  "to": [
                    2,
                    4
                  ],
                  "dash": true,
                  "label": "r = 2"
                }
              ],
              "points": [
                {
                  "x": 2,
                  "y": 4
                }
              ],
              "labels": [
                {
                  "x": 0,
                  "y": 6.4,
                  "text": "V = πh³/12"
                }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE ICE BALL, THE QUESTION SET TWICE IN TWO YEARS, TAP A LINE",
          "steps": [
            {
              "eq": "outer radius = 10 + x, not x",
              "why": "An iron ball of radius 10 cm carries a coat of ice of thickness x. Melting acts on the whole ball plus its coat, so the volume that changes is the volume of the outer sphere of radius 10 + x. Writing V = (4/3)πx³ is the trap this question was built around, and the examiners set it in April 2019 and again in January 2020 with identical numbers."
            },
            {
              "eq": "V = (4/3)π(10 + x)³",
              "why": "The iron core is a fixed 10 cm and contributes nothing to the rate, so it does no harm that V counts it. A constant added to a quantity disappears on differentiating, which is exactly why the outer volume and the ice volume have the same rate of change."
            },
            {
              "eq": "dV/dt = 4π(10 + x)² (dx/dt)",
              "why": "Chain rule, differentiating the cube and then the inside. This is the sphere relation dV/dt = 4πr²(dr/dt) with r replaced by 10 + x everywhere, and the inner derivative is 1 because only x varies."
            },
            {
              "eq": "−50 = 4π(15)² (dx/dt) ⇒ dx/dt = −1/(18π)",
              "why": "Melting is a loss, so dV/dt = −50, not +50. At thickness 5 the outer radius is 15, and 4π(225) = 900π. The thickness falls at 1/(18π) cm per minute, roughly 0.018. Drop the minus and you have answered a question nobody asked."
            }
          ]
        },
        {
          "t": "p",
          "html": "The same derivative does a second, smaller job. Near a point a smooth curve and its tangent are almost indistinguishable, so you can trade a hard exact value for an easy nearby one plus a correction walked along the tangent. That is <b>linear approximation</b>, and it is all that survives of the old Section 6.5, deleted from CBSE. Weigh it honestly: the previous-year bank supplied with this chapter contains <b>zero</b> recoverable questions on approximations. Learn the formula, do the two standard drills, do not dwell."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · DIFFERENTIALS AND LINEAR APPROXIMATION",
          "tag": "Δx small, f differentiable at the base point",
          "main": "f(x + Δx) ≈ f(x) + f′(x) Δx",
          "legend": [
            "the <b>differential</b> is d<i>y</i> = <i>f</i>′(<i>x</i>) d<i>x</i>, and for small Δ<i>x</i> the true change Δ<i>y</i> is close to it",
            "errors: absolute ≈ |d<i>y</i>|, relative ≈ |d<i>y</i>/<i>y</i>|, percentage ≈ 100|d<i>y</i>/<i>y</i>|",
            "for <i>y</i> = <i>x</i><sup>n</sup> the relative errors scale: d<i>y</i>/<i>y</i> = <i>n</i>(d<i>x</i>/<i>x</i>), so a 1 percent slip in a radius is a <b>3</b> percent slip in a volume"
          ],
          "note": "Choose a base point that is both close to the target and easy to evaluate, mind the sign of Δx (1.97 means Δx = −0.03), and convert degrees to radians before touching a trigonometric approximation."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "The radius of a circular oil slick grows at 3 cm/s. How fast is its area growing when the radius is 10 cm?",
          "steps": [
            "Given d<i>r</i>/d<i>t</i> = 3 cm/s, wanted d<i>A</i>/d<i>t</i> at <i>r</i> = 10. Relation: <i>A</i> = π<i>r</i><sup>2</sup>.",
            "Differentiate in <i>t</i> first: d<i>A</i>/d<i>t</i> = 2π<i>r</i> (d<i>r</i>/d<i>t</i>).",
            "Only now put the instant's numbers in: 2π(10)(3) = 60π."
          ],
          "ans": "60π cm<sup>2</sup>/s, about 188.5 cm<sup>2</sup>/s"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD HOTS",
          "q": "A 13 m ladder leans against a vertical wall. Its foot is pulled away at 2 m/s. How fast is the top sliding down when the foot is 5 m from the wall?",
          "steps": [
            "Let <i>x</i> be the foot's distance from the wall and <i>y</i> the top's height. Pythagoras: <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 169. At <i>x</i> = 5, <i>y</i> = 12.",
            "Differentiate in <i>t</i>: 2<i>x</i>(d<i>x</i>/d<i>t</i>) + 2<i>y</i>(d<i>y</i>/d<i>t</i>) = 0. The 169 is constant, and that is what forces the two rates to have opposite signs.",
            "So d<i>y</i>/d<i>t</i> = −(<i>x</i>/<i>y</i>)(d<i>x</i>/d<i>t</i>) = −(5/12)(2) = −5/6."
          ],
          "ans": "−5/6 m/s. The top falls at 5/6 m/s, and the minus sign is itself worth a mark"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN 2020 PATTERN",
          "q": "An iron ball of radius 10 cm carries a coat of ice of uniform thickness. The ice melts at 50 cm<sup>3</sup>/min. How fast is the thickness falling when it is 5 cm?",
          "steps": [
            "Let <i>x</i> be the thickness. The <b>outer</b> radius is 10 + <i>x</i>, so <i>V</i> = (4/3)π(10 + <i>x</i>)<sup>3</sup>.",
            "d<i>V</i>/d<i>t</i> = 4π(10 + <i>x</i>)<sup>2</sup> (d<i>x</i>/d<i>t</i>). Melting is a loss, so d<i>V</i>/d<i>t</i> = −50.",
            "At <i>x</i> = 5 the outer radius is 15: −50 = 4π(225)(d<i>x</i>/d<i>t</i>) = 900π (d<i>x</i>/d<i>t</i>)."
          ],
          "ans": "d<i>x</i>/d<i>t</i> = −1/(18π) cm/min. The thickness falls at 1/(18π) cm/min, about 0.018"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Estimate √25.3, then find the percentage error in the volume of a sphere whose radius, 9 cm, is measured with a possible error of 0.03 cm.",
          "steps": [
            "Take <i>f</i>(<i>x</i>) = √<i>x</i>, base 25, Δ<i>x</i> = 0.3. Then <i>f</i>(25) = 5 and <i>f</i>′(25) = 1/(2·5) = 1/10.",
            "√25.3 ≈ 5 + (1/10)(0.3) = 5.03. The true value is 5.0299, so the estimate is right to four figures.",
            "For the sphere, <i>V</i> = (4/3)π<i>r</i><sup>3</sup> gives d<i>V</i> = 4π<i>r</i><sup>2</sup> d<i>r</i>, so d<i>V</i>/<i>V</i> = 3(d<i>r</i>/<i>r</i>) = 3(0.03/9) = 0.01."
          ],
          "ans": "√25.3 ≈ 5.03 · about 1 percent error in the volume, three times the 1/3 percent in the radius"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] The edge of a cube grows at 2 cm/s. Find the rate of increase of its volume when the edge is 8 cm.",
              "a": "<i>V</i> = <i>x</i><sup>3</sup> ⇒ d<i>V</i>/d<i>t</i> = 3<i>x</i><sup>2</sup>(d<i>x</i>/d<i>t</i>) = 3(64)(2) = <b>384 cm<sup>3</sup>/s</b>."
            },
            {
              "q": "[CBSE] The area of a circle grows at 12π cm<sup>2</sup>/s. How fast is the radius growing when the radius is 6 cm?",
              "a": "2π<i>r</i>(d<i>r</i>/d<i>t</i>) = 12π with <i>r</i> = 6 gives 12π(d<i>r</i>/d<i>t</i>) = 12π, so d<i>r</i>/d<i>t</i> = <b>1 cm/s</b>."
            },
            {
              "q": "[JEE Main] Sand falls at 12 cm<sup>3</sup>/s into a conical pile whose height always equals its base radius. How fast is the height rising when it is 4 cm?",
              "a": "<i>r</i> = <i>h</i> reduces <i>V</i> to (1/3)π<i>h</i><sup>3</sup>, so d<i>V</i>/d<i>t</i> = π<i>h</i><sup>2</sup>(d<i>h</i>/d<i>t</i>). At <i>h</i> = 4: 12 = 16π(d<i>h</i>/d<i>t</i>), so d<i>h</i>/d<i>t</i> = <b>3/(4π) cm/s</b>."
            },
            {
              "q": "[JEE Main] A spherical balloon is inflated so that its volume grows at 100 cm<sup>3</sup>/s. When the radius is 5 cm, find the rate of increase of (a) the radius and (b) the surface area.",
              "a": "(a) 100 = 4π(25)(d<i>r</i>/d<i>t</i>) = 100π(d<i>r</i>/d<i>t</i>), so d<i>r</i>/d<i>t</i> = <b>1/π cm/s</b>. (b) d<i>S</i>/d<i>t</i> = 8π<i>r</i>(d<i>r</i>/d<i>t</i>) = 8π(5)(1/π) = <b>40 cm<sup>2</sup>/s</b>."
            },
            {
              "q": "[JEE Advanced] A man 2 m tall walks away from an 8 m lamp post at 1.5 m/s. How fast does (a) his shadow lengthen and (b) its tip move?",
              "a": "Similar triangles: 8/(<i>x</i> + <i>s</i>) = 2/<i>s</i> gives <i>s</i> = <i>x</i>/3. (a) d<i>s</i>/d<i>t</i> = 1.5/3 = <b>0.5 m/s</b>. (b) the tip is at <i>x</i> + <i>s</i> = 4<i>x</i>/3, moving at (4/3)(1.5) = <b>2 m/s</b>. Two different questions, two different answers."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The radius of a circle increases at 0.7 cm/s. The rate of increase of its circumference is:",
          "correct": 1,
          "opts": [
            {
              "label": "0.7π cm/s",
              "nudge": "This is π(d<i>r</i>/d<i>t</i>), which is the derivative of π<i>r</i>, not of 2π<i>r</i>. The factor 2 is not optional."
            },
            {
              "label": "1.4π cm/s",
              "nudge": null
            },
            {
              "label": "1.4 cm/s",
              "nudge": "The 2 survived but the π did not. d<i>C</i>/d<i>t</i> = 2π(d<i>r</i>/d<i>t</i>), and a circumference rate always carries its π."
            },
            {
              "label": "0.7 cm/s",
              "nudge": "This is just the radius rate copied over. The circumference moves 2π times as fast as the radius, never at the same speed."
            }
          ],
          "solution": "C = 2πr, so dC/dt = 2π(dr/dt) = 2π(0.7) = 1.4π cm/s. Note that r has vanished: the circumference rate does not depend on how big the circle currently is."
        },
        {
          "t": "mcq",
          "q": "A balloon's volume increases at a constant rate. As it grows, the rate at which its radius increases:",
          "correct": 2,
          "opts": [
            {
              "label": "stays constant",
              "nudge": "That would need <i>V</i> to be proportional to <i>r</i>. It is proportional to <i>r</i><sup>3</sup>, so equal volume increments buy smaller and smaller radius increments."
            },
            {
              "label": "increases",
              "nudge": "Backwards. d<i>r</i>/d<i>t</i> = (1/4π<i>r</i><sup>2</sup>)(d<i>V</i>/d<i>t</i>) has <i>r</i> in the <b>denominator</b>, so a bigger balloon grows more slowly in radius."
            },
            {
              "label": "decreases",
              "nudge": null
            },
            {
              "label": "is zero",
              "nudge": "Slower is not stopped. d<i>r</i>/d<i>t</i> stays strictly positive for every finite <i>r</i>; it only tends to 0 as <i>r</i> tends to infinity."
            }
          ],
          "solution": "From dV/dt = 4πr²(dr/dt), a fixed dV/dt gives dr/dt = (1/4πr²)(dV/dt), which shrinks as r grows. The same litre of air spread over a bigger surface raises the radius by less."
        },
        {
          "t": "mcq",
          "q": "For <i>y</i> = <i>x</i><sup>3</sup> − 6<i>x</i><sup>2</sup>, the rate of change of <i>y</i> with respect to <i>x</i> is zero at:",
          "correct": 2,
          "opts": [
            {
              "label": "<i>x</i> = 0 only",
              "nudge": "You found the root that comes from the factor 3<i>x</i> and stopped. 3<i>x</i>(<i>x</i> − 4) has two roots, and both count."
            },
            {
              "label": "<i>x</i> = 4 only",
              "nudge": "The other half of the same slip: the factor 3<i>x</i> was divided away rather than solved. Dividing by <i>x</i> deletes the root <i>x</i> = 0."
            },
            {
              "label": "<i>x</i> = 0 and <i>x</i> = 4",
              "nudge": null
            },
            {
              "label": "<i>x</i> = 2",
              "nudge": "Halving 4 is what happens if you read 3<i>x</i><sup>2</sup> − 12<i>x</i> as 3<i>x</i><sup>2</sup> = 12<i>x</i> and cancel carelessly, or confuse the root with the midpoint between the roots."
            }
          ],
          "solution": "dy/dx = 3x² − 12x = 3x(x − 4), which vanishes at x = 0 and x = 4. Factor rather than divide: dividing both sides by x throws away a genuine root."
        },
        {
          "t": "mcq",
          "q": "A ladder slides down a wall. At the instant when its foot is far from the wall and its top is near the ground, the top is moving:",
          "correct": 1,
          "opts": [
            {
              "label": "slowly",
              "nudge": "This describes the <b>other</b> end of the motion. Early on, when <i>y</i> is large and <i>x</i> small, the factor <i>x</i>/<i>y</i> is small and the top barely moves."
            },
            {
              "label": "very fast",
              "nudge": null
            },
            {
              "label": "at the same speed as the foot",
              "nudge": "That happens only at the single instant <i>x</i> = <i>y</i>, when the ladder makes 45°. It is not the general behaviour, and certainly not near the ground."
            },
            {
              "label": "upward",
              "nudge": "The sign is fixed by the geometry: with d<i>x</i>/d<i>t</i> > 0, d<i>y</i>/d<i>t</i> = −(<i>x</i>/<i>y</i>)(d<i>x</i>/d<i>t</i>) is negative throughout. The top never rises."
            }
          ],
          "solution": "From dy/dt = −(x/y)(dx/dt), as y tends to 0 the factor x/y blows up, so the top accelerates dramatically even though the foot moves at a constant speed. This is the same formula that gave a gentle 5/6 m/s when x was only 5."
        },
        {
          "t": "mistakes",
          "items": [
            "Substituting before differentiating. Putting <i>r</i> = 10 into <i>A</i> = π<i>r</i><sup>2</sup> turns a variable into the constant 100π, whose derivative is 0. <b>Differentiate symbolically, substitute last</b>, every single time.",
            "Differentiating with respect to a length instead of time. The driver is <i>t</i>. Every varying length is a function of <i>t</i>, so the chain rule must leave a d<i>r</i>/d<i>t</i> or d<i>h</i>/d<i>t</i> factor behind. An answer with no rate factor in it means you differentiated the wrong variable.",
            "Losing the minus. Draining tanks, falling ladder-tops, melting ice and shortening shadows all have <b>negative</b> rates. State the sign and keep it: examiners award it separately.",
            "Not reducing to one variable. A cone has both <i>r</i> and <i>h</i>. Forget the constraint <i>r</i> = <i>h</i>/2 and you get one equation in two unknown rates, which is not solvable, not a hard problem.",
            "Confusing a thickness with a radius. The ice-ball question exists because students write <i>V</i> = (4/3)π<i>x</i><sup>3</sup>. The melting acts on the <b>outer</b> sphere, radius 10 + <i>x</i>, and the whole question is that one substitution."
          ]
        },
        {
          "t": "protip",
          "html": "underline the phrase “at the instant when…” the moment you see it. it marks exactly where the numbers go, which is last, and it tells you the answer is an instantaneous rate and not an average. and keep one sanity check in your pocket for spheres: d<i>V</i>/d<i>t</i> = (surface area) × d<i>r</i>/d<i>t</i>, because d<i>V</i>/d<i>r</i> = 4π<i>r</i><sup>2</sup> is the surface area. if your sphere answer does not factor that way, something slipped."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "dQ/dt = (dQ/dx)(dx/dt)",
              "note": "the bridge: chain rule with time as the driver"
            },
            {
              "f": "dA/dt = 2πr r′ · dV/dt = 4πr<sup>2</sup> r′ · dS/dt = 8πr r′",
              "note": "circle area, sphere volume, sphere surface"
            },
            {
              "f": "x<sup>2</sup> + y<sup>2</sup> = ℓ<sup>2</sup> ⇒ dy/dt = −(x/y)(dx/dt)",
              "note": "the ladder; the minus says the top falls"
            },
            {
              "f": "cone with r = h/2 ⇒ V = πh<sup>3</sup>/12",
              "note": "reduce to one variable, then differentiate"
            },
            {
              "f": "outer radius = 10 + x",
              "note": "ice on a ball: thickness is not the radius"
            },
            {
              "f": "f(x + Δx) ≈ f(x) + f′(x)Δx · dy/y = n dx/x",
              "note": "approximation, and error scaling for a power"
            }
          ],
          "aids": [
            "“differentiate first, plug in last”",
            "“shrinking means minus, and the minus is a mark”"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Tangents, Normals and the Angle Between Curves",
      "chip": "02 TANGENTS",
      "kalam": "flip and negate, then check the point is on the curve",
      "blocks": [
        {
          "t": "p",
          "html": "The tangent to a curve at a point is the straight line that just kisses it there: the line whose slope matches the curve's own slope at that exact point. Since the derivative <b>is</b> the slope, the tangent's slope at (<i>x</i><sub>0</sub>, <i>y</i><sub>0</sub>) is simply <i>f</i>′(<i>x</i><sub>0</sub>). The <b>normal</b> is the line perpendicular to it at the same point: picture the tangent as the road and the normal as the signpost standing at right angles to it."
        },
        {
          "t": "p",
          "html": "Be clear about where this sits. The NCERT rationalisation removed tangents and normals from the CBSE Boards, so a board-only student may skip this topic entirely. A JEE candidate cannot: in the previous-year bank supplied with this chapter it is the <b>second-largest block</b>, around 30 percent, and it appears in every era from 1983 to 2020. It is also getting harder in a specific direction. The exam has moved off <i>y</i> = <i>f</i>(<i>x</i>) and onto <b>implicit</b> curves like <i>x</i><sup>2</sup> + 2<i>xy</i> − 3<i>y</i><sup>2</sup> = 0 and parametric ones like the parabola written as (<i>at</i><sup>2</sup>, 2<i>at</i>)."
        },
        {
          "t": "think",
          "html": "every smooth point of a curve has two natural lines through it: one going <i>along</i> the curve, the tangent, and one cutting <i>across</i> it, the normal. perpendicular slopes multiply to −1, so once you have the tangent slope <i>m</i>, the normal slope is −1/<i>m</i>. flip and negate, in that order, and say it out loud so you do not forget the negate."
        },
        {
          "t": "def",
          "term": "Point of contact",
          "html": "The point (<i>x</i><sub>0</sub>, <i>y</i><sub>0</sub>) where the line touches, and it must <b>satisfy the curve's equation</b>. This is not a formality: half of the JEE questions in this block hand you a point and one or two unknown coefficients, and forcing the point onto the curve is what determines them. Substitute the point into the equation before you differentiate anything."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · TANGENT AND NORMAL AT A POINT",
          "tag": "m = f′(x0), the point on the curve",
          "main": "tangent: y − y<sub>0</sub> = m(x − x<sub>0</sub>) · normal: y − y<sub>0</sub> = −(1/m)(x − x<sub>0</sub>)",
          "legend": [
            "<b>horizontal tangent</b> when <i>m</i> = 0: the tangent is <i>y</i> = <i>y</i><sub>0</sub> and the normal is the vertical line <i>x</i> = <i>x</i><sub>0</sub>",
            "<b>vertical tangent</b> when d<i>y</i>/d<i>x</i> is infinite, equivalently d<i>x</i>/d<i>y</i> = 0: the tangent is <i>x</i> = <i>x</i><sub>0</sub> and the normal is <i>y</i> = <i>y</i><sub>0</sub>",
            "parallel to a given line means <i>m</i> equals that line's slope; <b>perpendicular</b> to it means <i>m</i> × (line slope) = −1, which is a different equation"
          ],
          "note": "The normal formula needs m to be nonzero. When m = 0 do not divide, just write the two lines down directly: that is the whole content of the horizontal case."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE TWO LINES AT ONE POINT, TAP ONE",
          "chips": [
            "the point of contact",
            "tangent",
            "normal"
          ],
          "captions": [
            "The curve y = x² − 3x + 2 and the point P(2, 0) on it. Check first: 2² − 3(2) + 2 = 0, so P really does lie on the curve. Everything else in this topic is illegitimate until that line is written.",
            "dy/dx = 2x − 3, so m = 1 at x = 2 and the tangent is y − 0 = 1(x − 2), that is y = x − 2. Notice it crosses the curve nowhere else nearby: it matches the curve's direction at P and then the curve bends away from it.",
            "Flip and negate: the normal slope is −1, giving y = −x + 2. The two lines meet at P at a right angle, and the tangent is now drawn faint so you can see that the normal is the one cutting across the curve rather than running along it."
          ],
          "frames": [
            {
              "x": [
                -1,
                4.2
              ],
              "y": [
                -3,
                4.5
              ],
              "curves": [
                {
                  "c": "poly",
                  "coeffs": [
                    2,
                    -3,
                    1
                  ]
                }
              ],
              "points": [
                {
                  "x": 2,
                  "y": 0,
                  "label": "P(2, 0)"
                }
              ]
            },
            {
              "x": [
                -1,
                4.2
              ],
              "y": [
                -3,
                4.5
              ],
              "curves": [
                {
                  "c": "poly",
                  "coeffs": [
                    2,
                    -3,
                    1
                  ]
                },
                {
                  "c": "line",
                  "m": 1,
                  "k": -2
                }
              ],
              "points": [
                {
                  "x": 2,
                  "y": 0,
                  "label": "P"
                }
              ],
              "labels": [
                {
                  "x": 2.6,
                  "y": 3.6,
                  "text": "y = x − 2"
                }
              ]
            },
            {
              "x": [
                -1,
                4.2
              ],
              "y": [
                -3,
                4.5
              ],
              "curves": [
                {
                  "c": "poly",
                  "coeffs": [
                    2,
                    -3,
                    1
                  ]
                },
                {
                  "c": "line",
                  "m": 1,
                  "k": -2,
                  "dash": true,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -1,
                  "k": 2
                }
              ],
              "points": [
                {
                  "x": 2,
                  "y": 0,
                  "label": "P"
                }
              ],
              "labels": [
                {
                  "x": 2.6,
                  "y": 3.6,
                  "text": "y = −x + 2"
                }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Writing a tangent or a normal, and the four question shapes",
          "steps": [
            "<b>Confirm the point lies on the curve.</b> Substitute it into the equation. If the question hides coefficients, this is the equation that finds them, and skipping it is the single most punished omission in this block.",
            "<b>Differentiate and evaluate to get <i>m</i>.</b> For an implicit curve differentiate both sides term by term, collect the d<i>y</i>/d<i>x</i> terms and solve for it, then substitute the point. For a parametric curve use d<i>y</i>/d<i>x</i> = (d<i>y</i>/d<i>t</i>)/(d<i>x</i>/d<i>t</i>).",
            "<b>Write the line by point-slope.</b> Tangent with <i>m</i>, normal with −1/<i>m</i>. Do not divide by zero: if <i>m</i> = 0 the tangent is horizontal and the normal vertical, and you write both down without any algebra.",
            "<b>If the point is not given, make it the unknown.</b> “Where is the tangent parallel to this line” means solve <i>f</i>′(<i>x</i>) = (line slope) for <i>x</i>. “Perpendicular” means solve <i>f</i>′(<i>x</i>) × (line slope) = −1. Both usually give more than one point, and both are wanted.",
            "<b>For a tangent through an external point, let the contact point be the unknown.</b> Write the tangent at a general contact <i>x</i> = <i>a</i>, force it to pass through the given point, and solve the resulting equation for <i>a</i>. From outside a parabola you should expect two answers."
          ]
        },
        {
          "t": "p",
          "html": "Two curves that meet somewhere cross at an <b>angle</b>, and the angle between the curves is defined as the angle between their tangents at that point. Solve the two equations simultaneously first to find where they meet, because the angle is a local quantity and two curves can cross twice at two different angles. Then take both slopes at that point and feed them into the standard formula."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE ANGLE BETWEEN TWO CURVES",
          "tag": "m1, m2 the tangent slopes at a common point",
          "main": "tan θ = |(m<sub>1</sub> − m<sub>2</sub>) / (1 + m<sub>1</sub>m<sub>2</sub>)|",
          "legend": [
            "<b>orthogonal</b> (cutting at right angles) exactly when <i>m</i><sub>1</sub><i>m</i><sub>2</sub> = −1, which makes the denominator 0 and tan θ infinite",
            "<b>touching</b> exactly when <i>m</i><sub>1</sub> = <i>m</i><sub>2</sub>, which makes the numerator 0: the curves meet without crossing",
            "the modulus is there on purpose, so the formula returns the acute angle whichever order you feed the slopes in"
          ],
          "note": "This is the straight-line angle formula from Class 11, applied to tangents. Nothing about it is new except that the slopes now come from derivatives instead of from equations."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · TWO PARABOLAS CROSSING, TAP ONE",
          "chips": [
            "where they meet",
            "the angle at (1, 1)"
          ],
          "captions": [
            "y = x² and x = y² are each other's mirror images in the line y = x, and they meet twice: at the origin and at (1, 1). Two crossings, and the angle at one need not be the angle at the other, so the question must name the point.",
            "At (1, 1) the first curve has slope 2 and the second, y = √x, has slope 1/(2√x) = 1/2. Then tan θ = |(2 − 1/2)/(1 + 1)| = 3/4, so θ = arctan(3/4), about 36.9 degrees. Not orthogonal, since the slopes multiply to 1 and not to −1."
          ],
          "frames": [
            {
              "x": [
                -0.6,
                2.6
              ],
              "y": [
                -0.45,
                1.84
              ],
              "curves": [
                {
                  "c": "poly",
                  "coeffs": [
                    0,
                    0,
                    1
                  ]
                },
                {
                  "c": "parabola",
                  "a": 0.25,
                  "horizontal": true
                }
              ],
              "points": [
                {
                  "x": 0,
                  "y": 0
                },
                {
                  "x": 1,
                  "y": 1,
                  "label": "(1, 1)"
                }
              ]
            },
            {
              "x": [
                -0.6,
                2.6
              ],
              "y": [
                -0.45,
                1.84
              ],
              "curves": [
                {
                  "c": "poly",
                  "coeffs": [
                    0,
                    0,
                    1
                  ],
                  "soft": true
                },
                {
                  "c": "parabola",
                  "a": 0.25,
                  "horizontal": true,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": 2,
                  "k": -1
                },
                {
                  "c": "line",
                  "m": 0.5,
                  "k": 0.5
                }
              ],
              "points": [
                {
                  "x": 1,
                  "y": 1
                }
              ],
              "labels": [
                {
                  "x": 1.85,
                  "y": 0.55,
                  "text": "tan θ = 3/4"
                }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Now the part the appendix in most books never reaches, and JEE mines repeatedly. Drop a vertical from the point of contact <i>P</i> to the <i>x</i>-axis, meeting it at <i>M</i>. Let the tangent meet the axis at <i>T</i> and the normal at <i>N</i>. The segments <i>MT</i> and <i>MN</i> are the <b>subtangent</b> and the <b>subnormal</b>, and for two standard curves they turn out to be the same length at every point of the curve. That constancy is the whole reason the exam asks."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE FOUR SEGMENTS, TAP A LINE",
          "steps": [
            {
              "eq": "tangent: Y − y = m(X − x), so at Y = 0, X = x − y/m",
              "why": "Use capitals for the running coordinates on the line and lower case for the fixed point P, or the algebra becomes unreadable. Setting Y = 0 finds where the tangent crosses the x-axis, which is the point T."
            },
            {
              "eq": "subtangent MT = |y/m|",
              "why": "M is directly below P at (x, 0) and T is at (x − y/m, 0), so the gap between them is |y/m|. It is a length, so it carries a modulus: the sign only tells you which side of the foot the tangent lands on."
            },
            {
              "eq": "normal: Y − y = −(1/m)(X − x), so at Y = 0, X = x + my, and MN = |my|",
              "why": "The same move on the normal. Setting Y = 0 gives −y = −(1/m)(X − x), so X − x = my. The subnormal is |my|, and notice that it is a product where the subtangent was a quotient: the two are reciprocal in m."
            },
            {
              "eq": "PT = |y|√(1 + m²)/|m| · PN = |y|√(1 + m²)",
              "why": "Both are hypotenuses of right triangles standing on PM, which has length |y|. The tangent triangle has the other leg |y/m| and the normal triangle has |my|. Pythagoras on each gives the two lengths, and the whole family is generated by one picture."
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The four segments, and the two curves that make them constant",
          "rows": [
            {
              "k": "Subtangent MT",
              "v": "|<i>y</i>/<i>m</i>|, where <i>m</i> = d<i>y</i>/d<i>x</i> at the point"
            },
            {
              "k": "Subnormal MN",
              "v": "|<i>my</i>|, the same two quantities multiplied instead of divided"
            },
            {
              "k": "Tangent length PT",
              "v": "|<i>y</i>|√(1 + <i>m</i><sup>2</sup>) / |<i>m</i>|"
            },
            {
              "k": "Normal length PN",
              "v": "|<i>y</i>|√(1 + <i>m</i><sup>2</sup>)"
            },
            {
              "k": "Constant subtangent",
              "v": "<i>y</i> = <i>a</i><sup>x</sup> has <i>m</i> = <i>a</i><sup>x</sup> ln <i>a</i>, so <i>y</i>/<i>m</i> = <b>1/ln <i>a</i></b> at every point"
            },
            {
              "k": "Constant subnormal",
              "v": "<i>y</i><sup>2</sup> = 4<i>ax</i> has <i>m</i> = 2<i>a</i>/<i>y</i>, so <i>my</i> = <b>2<i>a</i></b> at every point, half the latus rectum"
            }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the tangent and the normal to <i>y</i> = <i>x</i><sup>2</sup> − 3<i>x</i> + 2 at the point (2, 0).",
          "steps": [
            "Check the point: 2<sup>2</sup> − 3(2) + 2 = 4 − 6 + 2 = 0. It lies on the curve.",
            "d<i>y</i>/d<i>x</i> = 2<i>x</i> − 3, so <i>m</i> = 2(2) − 3 = 1.",
            "Tangent: <i>y</i> − 0 = 1(<i>x</i> − 2), so <i>y</i> = <i>x</i> − 2.",
            "Normal slope is −1/1 = −1: <i>y</i> − 0 = −1(<i>x</i> − 2), so <i>y</i> = −<i>x</i> + 2."
          ],
          "ans": "Tangent <i>y</i> = <i>x</i> − 2, normal <i>x</i> + <i>y</i> = 2"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN 2020 PATTERN",
          "q": "Find the length of the perpendicular from the origin to the normal of <i>x</i><sup>2</sup> + 2<i>xy</i> − 3<i>y</i><sup>2</sup> = 0 at (2, 2).",
          "steps": [
            "Check: 4 + 8 − 12 = 0. The point is on the curve.",
            "Differentiate implicitly: 2<i>x</i> + 2<i>y</i> + 2<i>x</i>(d<i>y</i>/d<i>x</i>) − 6<i>y</i>(d<i>y</i>/d<i>x</i>) = 0, so d<i>y</i>/d<i>x</i> = −(<i>x</i> + <i>y</i>)/(<i>x</i> − 3<i>y</i>).",
            "At (2, 2): d<i>y</i>/d<i>x</i> = −4/(−4) = 1, so the normal slope is −1 and the normal is <i>x</i> + <i>y</i> = 4.",
            "Distance from (0, 0) to <i>x</i> + <i>y</i> − 4 = 0 is |0 + 0 − 4|/√(1 + 1) = 4/√2."
          ],
          "ans": "2√2. The implicit differentiation is the whole question; the distance formula is Class 11"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN 2019 PATTERN",
          "q": "The curves <i>y</i> = 10 − <i>x</i><sup>2</sup> and <i>y</i> = 2 + <i>x</i><sup>2</sup> cross. Find |tan θ| at a crossing.",
          "steps": [
            "Add the two equations: 2<i>y</i> = 12, so <i>y</i> = 6 and then <i>x</i><sup>2</sup> = 4, giving <i>x</i> = ±2.",
            "At (2, 6): <i>m</i><sub>1</sub> = −2<i>x</i> = −4 and <i>m</i><sub>2</sub> = 2<i>x</i> = 4.",
            "|tan θ| = |(−4 − 4)/(1 + (−4)(4))| = |−8/−15| = 8/15.",
            "At (−2, 6) the two slopes simply swap, so the angle is the same."
          ],
          "ans": "8/15 at both crossings. Solve for the meeting point before touching either derivative"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find every tangent to <i>y</i> = 4 − <i>x</i><sup>2</sup> that passes through the external point (2, 7).",
          "steps": [
            "Let the contact point be <i>x</i> = <i>a</i>, so <i>P</i> = (<i>a</i>, 4 − <i>a</i><sup>2</sup>) and <i>m</i> = −2<i>a</i>. The tangent is <i>y</i> = −2<i>ax</i> + <i>a</i><sup>2</sup> + 4.",
            "Force it through (2, 7): 7 = −4<i>a</i> + <i>a</i><sup>2</sup> + 4, so <i>a</i><sup>2</sup> − 4<i>a</i> − 3 = 0 and <i>a</i> = 2 ± √7.",
            "Two tangents, as an external point to a parabola always gives. With <i>a</i><sup>2</sup> = 11 ± 4√7 the contacts are (2 + √7, −7 − 4√7) and (2 − √7, −7 + 4√7).",
            "Lines: <i>y</i> = −(4 + 2√7)<i>x</i> + 15 + 4√7 and <i>y</i> = (2√7 − 4)<i>x</i> + 15 − 4√7."
          ],
          "ans": "Two tangents, contacts at <i>x</i> = 2 ± √7. The transferable move is making the contact point the unknown"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[JEE Main] Find the tangent to <i>y</i> = sin <i>x</i> at <i>x</i> = 0.",
              "a": "The point is (0, 0) and d<i>y</i>/d<i>x</i> = cos <i>x</i> = 1 there. Tangent: <b><i>y</i> = <i>x</i></b>. This is the picture behind sin <i>x</i> ≈ <i>x</i> for small <i>x</i>."
            },
            {
              "q": "[JEE Main] Show that the subtangent of <i>y</i> = ln <i>x</i> at any point equals <i>x</i> ln <i>x</i>.",
              "a": "<i>m</i> = 1/<i>x</i>, so the subtangent is |<i>y</i>/<i>m</i>| = |ln <i>x</i> ÷ (1/<i>x</i>)| = <b>|<i>x</i> ln <i>x</i>|</b>, the abscissa times the ordinate."
            },
            {
              "q": "[JEE Main] Find every point on <i>y</i> = <i>x</i><sup>3</sup> where the tangent is parallel to <i>y</i> = 12<i>x</i> + 7.",
              "a": "3<i>x</i><sup>2</sup> = 12 gives <i>x</i> = ±2, so the points are <b>(2, 8) and (−2, −8)</b>. Both are wanted: a square root has two roots."
            },
            {
              "q": "[JEE Main] Find the area of the triangle cut off from the axes by the tangent to <i>y</i> = 4 − <i>x</i><sup>2</sup> at <i>x</i> = 1.",
              "a": "At (1, 3), <i>m</i> = −2. <i>x</i>-intercept = <i>x</i> − <i>y</i>/<i>m</i> = 1 + 3/2 = 5/2; <i>y</i>-intercept = <i>y</i> − <i>mx</i> = 3 + 2 = 5. Area = (1/2)(5/2)(5) = <b>25/4</b> square units."
            },
            {
              "q": "[JEE Advanced] For <i>y</i><sup>2</sup> = 4<i>x</i>, find every point at which the subnormal equals 4.",
              "a": "<b>There are none.</b> Here 4<i>a</i> = 4, so <i>a</i> = 1 and the subnormal is 2<i>a</i> = 2 at <b>every</b> point of the parabola. The subnormal is a constant of the curve, not a quantity you can tune by moving the point."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The normal to <i>y</i> = 1/<i>x</i> at the point (1, 1) is:",
          "correct": 0,
          "opts": [
            {
              "label": "<i>y</i> = <i>x</i>",
              "nudge": null
            },
            {
              "label": "<i>y</i> = −<i>x</i> + 2",
              "nudge": "This is the <b>tangent</b>. d<i>y</i>/d<i>x</i> = −1/<i>x</i><sup>2</sup> = −1 at <i>x</i> = 1, so −1 is the tangent slope, and the normal has to flip and negate it."
            },
            {
              "label": "<i>x</i> + <i>y</i> = 0",
              "nudge": "Right slope for the tangent, wrong line: it passes through the origin, not through (1, 1). Always substitute the point back into the line you wrote."
            },
            {
              "label": "<i>y</i> = <i>x</i> + 1",
              "nudge": "Correct normal slope, but the intercept is wrong: at <i>x</i> = 1 this gives <i>y</i> = 2, not 1. Point-slope form removes this risk entirely."
            }
          ],
          "solution": "dy/dx = −1/x², which is −1 at (1, 1). So the tangent slope is −1 and the normal slope is −1/(−1) = +1. Normal: y − 1 = 1(x − 1), that is y = x."
        },
        {
          "t": "mcq",
          "q": "For the parabola <i>y</i><sup>2</sup> = 4<i>x</i>, the subnormal at the point (4, 4) is:",
          "correct": 0,
          "opts": [
            {
              "label": "2",
              "nudge": null
            },
            {
              "label": "4",
              "nudge": "That is the ordinate <i>y</i> itself. The subnormal is |<i>my</i>|, so you still have to multiply by the slope, which here is 1/2."
            },
            {
              "label": "8",
              "nudge": "This is 4<i>a</i>, the full latus rectum. The subnormal is <b>half</b> of it, 2<i>a</i>, which is where the factor 2 in <i>m</i> = 2<i>a</i>/<i>y</i> ends up."
            },
            {
              "label": "1/2",
              "nudge": "That is the slope <i>m</i> on its own. Multiplying by <i>y</i> is not optional; a slope is not a length and cannot be the answer to a length question."
            }
          ],
          "solution": "From 2y(dy/dx) = 4, m = 2/y = 2/4 = 1/2. Subnormal = |my| = (1/2)(4) = 2. Equivalently 2a with 4a = 4, so a = 1: the subnormal of a parabola is the same 2a at every point."
        },
        {
          "t": "mcq",
          "q": "The length of the perpendicular from the origin to the normal of <i>x</i><sup>2</sup> + 2<i>xy</i> − 3<i>y</i><sup>2</sup> = 0 at (2, 2) is:",
          "correct": 1,
          "opts": [
            {
              "label": "4",
              "nudge": "You stopped at the constant term of <i>x</i> + <i>y</i> = 4. The distance from a point to <i>ax</i> + <i>by</i> + <i>c</i> = 0 divides by √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>), which here is √2."
            },
            {
              "label": "2√2",
              "nudge": null
            },
            {
              "label": "2",
              "nudge": "This halves 4 instead of dividing it by √2. The two happen to look similar in size, which is exactly why the option is offered."
            },
            {
              "label": "4√2",
              "nudge": "Multiplied by √2 where you should have divided. Sanity-check against the point (2, 2), which is at distance 2√2 from the origin and lies on the normal, so the perpendicular distance cannot exceed it."
            }
          ],
          "solution": "Implicit differentiation gives dy/dx = −(x + y)/(x − 3y) = 1 at (2, 2). The normal has slope −1, so it is x + y = 4, and the distance from the origin is 4/√2 = 2√2."
        },
        {
          "t": "mcq",
          "q": "The number of points on <i>y</i> = <i>x</i><sup>3</sup> at which the tangent is parallel to the line <i>y</i> = 12<i>x</i> + 7 is:",
          "correct": 1,
          "opts": [
            {
              "label": "1",
              "nudge": "You solved <i>x</i><sup>2</sup> = 4 and kept only <i>x</i> = 2. Nothing in the question excludes the negative root, and the tangent at (−2, −8) has slope 12 just as surely."
            },
            {
              "label": "2",
              "nudge": null
            },
            {
              "label": "3",
              "nudge": "A cubic has three roots but its <b>derivative</b> is a quadratic. 3<i>x</i><sup>2</sup> − 12 = 0 has exactly two roots, however many the original curve suggests."
            },
            {
              "label": "0",
              "nudge": "This is the answer to “tangent parallel to a line of <b>negative</b> slope”, since 3<i>x</i><sup>2</sup> ≥ 0. For slope 12 there are solutions."
            }
          ],
          "solution": "The tangent slope is 3x², so 3x² = 12 gives x = ±2 and the points are (2, 8) and (−2, −8). Two points. Both must be reported, and the question about which one an NCERT answer key quotes is a different question about whether the tangent IS that line, not merely parallel to it."
        },
        {
          "t": "mistakes",
          "items": [
            "Not checking that the point is on the curve. It is the first line of the solution and it is the line that determines any unknown coefficient in the equation. Skip it and a question with an <i>a</i> and a <i>b</i> in it becomes unsolvable.",
            "Getting the normal slope half right. It is <b>−1/<i>m</i></b>: flip <b>and</b> negate. A missing minus is the most common single error in the whole block, and it turns the normal into a second, wrong tangent.",
            "Reading “perpendicular to the line” as “<i>m</i> equals the line's slope”. Parallel means equal slopes; perpendicular means the product of the slopes is −1. Two different equations, and both are set.",
            "Dividing by zero at a horizontal tangent. When <i>m</i> = 0, write <i>y</i> = <i>y</i><sub>0</sub> and <i>x</i> = <i>x</i><sub>0</sub> straight down. Attempting −1/0 loses the mark you were about to be given for free.",
            "Vertical tangents done backwards on implicit curves. A vertical tangent needs the <b>denominator</b> of d<i>y</i>/d<i>x</i> to vanish, a horizontal one the numerator. And check the resulting values are actually reachable: on <i>y</i><sup>3</sup> + 3<i>x</i><sup>2</sup> = 12<i>y</i> the candidate <i>y</i> = −2 gives 3<i>x</i><sup>2</sup> = −16 and is discarded."
          ]
        },
        {
          "t": "protip",
          "html": "when the contact point is unknown, name it and let the algebra find it. call it <i>x</i> = <i>a</i>, write the tangent there in terms of <i>a</i>, and impose whatever the question demands: passes through a point, has a given slope, cuts a given intercept. one setup answers four different question shapes. and memorise the two constants, subtangent of <i>a</i><sup>x</sup> is 1/ln <i>a</i> and subnormal of <i>y</i><sup>2</sup> = 4<i>ax</i> is 2<i>a</i>, because both are asked as one-line MCQs."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "tangent y − y<sub>0</sub> = m(x − x<sub>0</sub>), m = f′(x<sub>0</sub>)",
              "note": "the point must satisfy the curve first"
            },
            {
              "f": "normal y − y<sub>0</sub> = −(1/m)(x − x<sub>0</sub>)",
              "note": "flip and negate; m = 0 means a vertical normal"
            },
            {
              "f": "tan θ = |(m<sub>1</sub> − m<sub>2</sub>)/(1 + m<sub>1</sub>m<sub>2</sub>)|",
              "note": "orthogonal if m1m2 = −1, touching if m1 = m2"
            },
            {
              "f": "subtangent |y/m| · subnormal |my|",
              "note": "one quotient, one product, same two quantities"
            },
            {
              "f": "PT = |y|√(1 + m<sup>2</sup>)/|m| · PN = |y|√(1 + m<sup>2</sup>)",
              "note": "hypotenuses of the two right triangles on PM"
            },
            {
              "f": "a<sup>x</sup>: subtangent 1/ln a · y<sup>2</sup> = 4ax: subnormal 2a",
              "note": "constant along the whole curve, both examined"
            }
          ],
          "aids": [
            "“on the curve, then the slope, then the line”",
            "“flip and negate, say the negate out loud”"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Increasing and Decreasing: Reading the Sign of f′",
      "chip": "03 MONOTONIC",
      "kalam": "sign of the slope is direction of travel",
      "blocks": [
        {
          "t": "p",
          "html": "Picture the Nifty 50 chart on a trading day. From the open to eleven the line climbs steadily; you would say the index is <b>increasing</b>. After lunch it slides downhill to the close; now it is <b>decreasing</b>. Nobody needs the actual values to say either thing, because the <b>direction of travel</b> is enough. Monotonicity is that idea made precise: over a stretch of its domain, is the function climbing, falling, or flat?"
        },
        {
          "t": "p",
          "html": "Now connect it to the derivative you already own. <i>f</i>′(<i>x</i>) is the slope of the curve at <i>x</i>, and slope <b>is</b> direction of travel. Walk left to right along the graph. Where the path tilts uphill the slope is positive and <i>f</i> is increasing. Where it tilts downhill the slope is negative and <i>f</i> is decreasing. Where the path is momentarily level, <i>f</i>′(<i>x</i>) = 0. That is the entire subtopic in three lines, and everything that follows is bookkeeping about how to find where the sign changes."
        },
        {
          "t": "think",
          "html": "imagine driving up a ghat road. your altitude is <i>f</i>(<i>x</i>) and the road's gradient is <i>f</i>′(<i>x</i>). as long as the gradient stays positive you keep gaining altitude, and it does not matter whether the climb is steep or gentle. the <i>sign</i> of the gradient decides direction; its size only decides how fast."
        },
        {
          "t": "def",
          "term": "Increasing on an interval",
          "html": "Let <i>I</i> be an interval inside the domain of <i>f</i>. Then <i>f</i> is <b>increasing</b> on <i>I</i> when <i>x</i><sub>1</sub> < <i>x</i><sub>2</sub> forces <i>f</i>(<i>x</i><sub>1</sub>) ≤ <i>f</i>(<i>x</i><sub>2</sub>), and <b>strictly increasing</b> when it forces the sharp inequality <i>f</i>(<i>x</i><sub>1</sub>) < <i>f</i>(<i>x</i><sub>2</sub>). Read the quantifier carefully: this is a statement about <b>every pair</b> of points of <i>I</i>, which is why increasing is an interval property and a function is never increasing “at a point”."
        },
        {
          "t": "defgrid",
          "title": "The four words, and the one they collapse into",
          "rows": [
            {
              "k": "Increasing",
              "v": "<i>x</i><sub>1</sub> < <i>x</i><sub>2</sub> ⇒ <i>f</i>(<i>x</i><sub>1</sub>) ≤ <i>f</i>(<i>x</i><sub>2</sub>), flat stretches allowed"
            },
            {
              "k": "Strictly increasing",
              "v": "<i>x</i><sub>1</sub> < <i>x</i><sub>2</sub> ⇒ <i>f</i>(<i>x</i><sub>1</sub>) < <i>f</i>(<i>x</i><sub>2</sub>), no flat stretch anywhere"
            },
            {
              "k": "Decreasing",
              "v": "<i>x</i><sub>1</sub> < <i>x</i><sub>2</sub> ⇒ <i>f</i>(<i>x</i><sub>1</sub>) ≥ <i>f</i>(<i>x</i><sub>2</sub>)"
            },
            {
              "k": "Strictly decreasing",
              "v": "<i>x</i><sub>1</sub> < <i>x</i><sub>2</sub> ⇒ <i>f</i>(<i>x</i><sub>1</sub>) > <i>f</i>(<i>x</i><sub>2</sub>)"
            },
            {
              "k": "Monotonic on I",
              "v": "any one of the four holds on <i>I</i>. The word says “one direction throughout”, nothing more"
            },
            {
              "k": "What the exam wants",
              "v": "almost always the <b>strict</b> versions, and almost always as a list of intervals"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE MONOTONICITY THEOREM",
          "tag": "f continuous on [a, b], differentiable on (a, b)",
          "main": "f′(x) > 0 ⇒ strictly increasing · f′(x) < 0 ⇒ strictly decreasing",
          "legend": [
            "<i>f</i>′(<i>x</i>) = 0 at <b>every</b> point of the interval ⇒ <i>f</i> is constant there",
            "the sharper version, and the one your answers actually need: <i>f</i>′ ≥ 0 with zeros only at <b>isolated</b> points is still strictly increasing, which is how <i>x</i><sup>3</sup> qualifies",
            "the converse is weaker than you expect: a differentiable strictly increasing <i>f</i> has <i>f</i>′ ≥ 0, <b>not</b> necessarily <i>f</i>′ > 0"
          ],
          "note": "The source states the sharp version as “zero at only finitely many isolated points”, which is too narrow for its own answer key: it marks x − sin x strictly increasing on ℝ, and 1 − cos x vanishes at every x = 2nπ, infinitely many points. Isolated is the condition that matters, not finite."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · f AND ITS DERIVATIVE IN ONE FRAME, TAP ONE",
          "chips": [
            "f",
            "f ′",
            "both together"
          ],
          "captions": [
            "f(x) = 2x³ − 9x² + 12x + 5. The shaded stretches are where the curve climbs and the unshaded one between them is where it falls. The two turning points sit at (1, 10) and (2, 9), and the second is lower than the first, which is why the picture has a hump and not a step.",
            "f ′(x) = 6x² − 18x + 12 = 6(x − 1)(x − 2), an upward parabola with roots at 1 and 2. It is above the axis on the shaded stretches and below it between them. This is the sign chart, drawn instead of tabulated.",
            "Both, on the same axes, and the point of the whole figure: f ′ crosses zero at exactly the x-values where f turns. Where the amber curve is above the axis the ink curve is climbing; where it dips below, the ink curve falls. Nothing else is going on in this topic."
          ],
          "frames": [
            {
              "x": [
                -0.3,
                3.3
              ],
              "y": [
                -4,
                20
              ],
              "curves": [
                {
                  "c": "poly",
                  "coeffs": [
                    5,
                    12,
                    -9,
                    2
                  ]
                }
              ],
              "bands": [
                {
                  "x0": -0.3,
                  "x1": 1
                },
                {
                  "x0": 2,
                  "x1": 3.3
                }
              ],
              "points": [
                {
                  "x": 1,
                  "y": 10,
                  "label": "(1, 10)"
                },
                {
                  "x": 2,
                  "y": 9,
                  "label": "(2, 9)"
                }
              ]
            },
            {
              "x": [
                -0.3,
                3.3
              ],
              "y": [
                -4,
                20
              ],
              "curves": [
                {
                  "c": "poly",
                  "coeffs": [
                    12,
                    -18,
                    6
                  ]
                }
              ],
              "bands": [
                {
                  "x0": -0.3,
                  "x1": 1
                },
                {
                  "x0": 2,
                  "x1": 3.3
                }
              ],
              "points": [
                {
                  "x": 1,
                  "y": 0,
                  "label": "1"
                },
                {
                  "x": 2,
                  "y": 0,
                  "label": "2"
                }
              ]
            },
            {
              "x": [
                -0.3,
                3.3
              ],
              "y": [
                -4,
                20
              ],
              "curves": [
                {
                  "c": "poly",
                  "coeffs": [
                    5,
                    12,
                    -9,
                    2
                  ]
                },
                {
                  "c": "poly",
                  "coeffs": [
                    12,
                    -18,
                    6
                  ]
                }
              ],
              "bands": [
                {
                  "x0": -0.3,
                  "x1": 1
                },
                {
                  "x0": 2,
                  "x1": 3.3
                }
              ],
              "points": [
                {
                  "x": 1,
                  "y": 10
                },
                {
                  "x": 2,
                  "y": 9
                },
                {
                  "x": 1,
                  "y": 0
                },
                {
                  "x": 2,
                  "y": 0
                }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Extracting the intervals, the five steps a marker expects",
          "steps": [
            "<b>Fix the domain first.</b> Find where <i>f</i> is defined at all. A point excluded from the domain, <i>x</i> = 0 for 1/<i>x</i>, or where a log or a square root argument fails, <b>breaks</b> the number line into pieces you must never staple back together.",
            "<b>Differentiate and factor completely.</b> Get <i>f</i>′ into fully factored form such as 6(<i>x</i> − 1)(<i>x</i> − 2). Factored form shows sign changes at a glance; expanded form hides them, and half the errors in this topic are made before any sign is tested.",
            "<b>Find every critical point.</b> Solve <i>f</i>′(<i>x</i>) = 0, and also note any <i>x</i> where <i>f</i>′ fails to exist. These, together with the domain breaks, are the <b>only</b> places the sign of <i>f</i>′ can switch.",
            "<b>Build the sign chart.</b> Mark those points on a number line and test one convenient value in each resulting interval. One test point certifies the whole sub-interval, because a continuous expression cannot change sign without passing through a zero.",
            "<b>Translate signs into the answer.</b> Positive means strictly increasing on that interval, negative means strictly decreasing. Closed brackets at the critical points are accepted when <i>f</i> is continuous there, and are what CBSE prints."
          ]
        },
        {
          "t": "diagram",
          "kind": "numberline",
          "kicker": "FIGURE · THE SIGN CHART FOR f ′ = 6(x − 1)(x − 2), TAP ONE",
          "chips": [
            "sign of f ′",
            "what f does"
          ],
          "captions": [
            "The two roots of f ′ cut the line into three pieces. Test one point in each: at x = 0, f ′ = 6(−1)(−2) = 12, positive; at x = 1.5, f ′ = 6(0.5)(−0.5) = −1.5, negative; at x = 3, f ′ = 6(2)(1) = 12, positive. Three tests, and the chart is finished.",
            "The same line read as behaviour. f climbs, then falls between 1 and 2, then climbs again. Answer: strictly increasing on (−∞, 1] and on [2, ∞), strictly decreasing on [1, 2]. Note the signs alternate, which they always do at a simple root, so one test point fixes the whole pattern."
          ],
          "frames": [
            {
              "x": [
                -3,
                6
              ],
              "intervals": [
                {
                  "from": -2.5,
                  "to": 1,
                  "openLeft": true,
                  "label": "(+)"
                },
                {
                  "from": 1,
                  "to": 2,
                  "soft": true,
                  "label": "(−)"
                },
                {
                  "from": 2,
                  "to": 5.5,
                  "openRight": true,
                  "label": "(+)"
                }
              ]
            },
            {
              "x": [
                -3,
                6
              ],
              "intervals": [
                {
                  "from": -2.5,
                  "to": 1,
                  "openLeft": true,
                  "label": "up"
                },
                {
                  "from": 1,
                  "to": 2,
                  "soft": true,
                  "label": "down"
                },
                {
                  "from": 2,
                  "to": 5.5,
                  "openRight": true,
                  "label": "up"
                }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "A subtle point lives at the flat spots, and the exam is built on it. Take <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup>. At <i>x</i> = 0 the slope is exactly zero, and yet the curve never stops rising: it is strictly increasing across all of ℝ. A momentary <i>f</i>′(<i>x</i>) = 0 at an <b>isolated</b> point does not break increasing behaviour. It is the car cresting a tiny level patch mid-climb: flat for an instant, still going up. So <i>f</i>′ > 0 is <b>sufficient but not necessary</b> for strict increase, and refusing to say so costs a mark every time."
        },
        {
          "t": "p",
          "html": "The other trap is a hole in the domain. <i>f</i>(<i>x</i>) = 1/<i>x</i> is strictly decreasing on (−∞, 0) and strictly decreasing on (0, ∞), and it is <b>not</b> decreasing on the union, because <i>f</i>(−1) = −1 is <b>less</b> than <i>f</i>(1) = 1. Two points on opposite sides of the gap were never compared by either interval, and the theorem never promised anything about them. Split at every domain break, always, and write the intervals separately."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · MONOTONIC ON ALL OF ℝ, NO CHART NEEDED",
          "tag": "for “prove f is increasing on ℝ” and parameter questions",
          "main": "f′(x) ≥ 0 for every real x, with zeros only at isolated points",
          "legend": [
            "quadratic <i>f</i>′ = <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> with <i>a</i> > 0: the condition is <b>discriminant ≤ 0</b>, that is <i>b</i><sup>2</sup> − 4<i>ac</i> ≤ 0",
            "trigonometric <i>f</i>′: bound it with −1 ≤ cos <i>x</i> ≤ 1 and read the worst case, so <i>f</i>′ = <i>a</i> − cos <i>x</i> ≥ 0 for all <i>x</i> exactly when <i>a</i> ≥ 1",
            "otherwise complete the square: 3<i>x</i><sup>2</sup> + 6<i>x</i> + 6 = 3(<i>x</i> + 1)<sup>2</sup> + 3, visibly positive for every <i>x</i>"
          ],
          "note": "The discriminant condition is ≤ 0 and not < 0, and the option offering the open interval is set almost every year. At discriminant 0 the derivative touches zero at a single point and is positive on both sides, which is still strictly increasing."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · AN INEQUALITY BY MONOTONICITY, TAP A LINE",
          "steps": [
            {
              "eq": "g(x) = x − ln(1 + x) on [0, ∞), g(0) = 0",
              "why": "The move behind every inequality question in this topic: subtract one side from the other and study the sign of the difference. Anchor it where you know the value exactly, here at x = 0, where g(0) = 0 − ln 1 = 0. Choosing the anchor is choosing the whole proof."
            },
            {
              "eq": "g′(x) = 1 − 1/(1 + x) = x/(1 + x)",
              "why": "Differentiate, then combine into a single fraction. A fraction's sign is decided by looking at numerator and denominator separately, which is easy; the uncombined form 1 − 1/(1 + x) hides the answer behind a subtraction."
            },
            {
              "eq": "x > 0 ⇒ numerator > 0 and denominator > 0 ⇒ g′(x) > 0",
              "why": "Both parts are positive on (0, ∞), so g′ is strictly positive there and g is strictly increasing on [0, ∞) by the monotonicity theorem. The interval is closed at 0 because g is continuous there, and that is what lets the next step reach back to the anchor."
            },
            {
              "eq": "g(x) > g(0) = 0 ⇒ x > ln(1 + x)",
              "why": "Strictly increasing means the value at any x > 0 beats the value at 0, which is 0. This is the step students drop: you must both state that g is strictly increasing and evaluate the anchor. The inequality is exactly the gap between g(x) and g(0), so without the anchor there is nothing to compare."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the intervals in which <i>f</i>(<i>x</i>) = 2<i>x</i><sup>3</sup> − 9<i>x</i><sup>2</sup> + 12<i>x</i> + 5 is strictly increasing and strictly decreasing.",
          "steps": [
            "Domain is ℝ, so there are no breaks to worry about.",
            "<i>f</i>′(<i>x</i>) = 6<i>x</i><sup>2</sup> − 18<i>x</i> + 12 = 6(<i>x</i><sup>2</sup> − 3<i>x</i> + 2) = 6(<i>x</i> − 1)(<i>x</i> − 2).",
            "Critical points <i>x</i> = 1, 2. Test: at 0, <i>f</i>′ = 12 > 0; at 1.5, <i>f</i>′ = −1.5 < 0; at 3, <i>f</i>′ = 12 > 0."
          ],
          "ans": "Strictly increasing on (−∞, 1] and on [2, ∞); strictly decreasing on [1, 2]"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD HOTS",
          "q": "Show that <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup> + 6<i>x</i> − 11 is strictly increasing on ℝ.",
          "steps": [
            "No chart is needed for an “on all of ℝ” question. Just bound <i>f</i>′.",
            "<i>f</i>′(<i>x</i>) = 3<i>x</i><sup>2</sup> + 6<i>x</i> + 6 = 3(<i>x</i><sup>2</sup> + 2<i>x</i> + 2).",
            "Complete the square: <i>x</i><sup>2</sup> + 2<i>x</i> + 2 = (<i>x</i> + 1)<sup>2</sup> + 1, so <i>f</i>′(<i>x</i>) = 3(<i>x</i> + 1)<sup>2</sup> + 3.",
            "A square is never negative, so <i>f</i>′(<i>x</i>) ≥ 3 > 0 for every real <i>x</i>."
          ],
          "ans": "<i>f</i>′ ≥ 3 > 0 everywhere, so <i>f</i> is strictly increasing on ℝ"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find every real <i>k</i> for which <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> + <i>kx</i><sup>2</sup> + 3<i>x</i> + 7 is strictly increasing on ℝ.",
          "steps": [
            "<i>f</i>′(<i>x</i>) = 3<i>x</i><sup>2</sup> + 2<i>kx</i> + 3, an upward parabola since the leading coefficient 3 is positive.",
            "It stays ≥ 0 everywhere exactly when its discriminant is ≤ 0.",
            "Δ = (2<i>k</i>)<sup>2</sup> − 4(3)(3) = 4<i>k</i><sup>2</sup> − 36 ≤ 0, so <i>k</i><sup>2</sup> ≤ 9.",
            "At <i>k</i> = ±3 the discriminant is 0, so <i>f</i>′ touches zero at one point and is positive on both sides: still strictly increasing, so the endpoints are <b>included</b>."
          ],
          "ans": "<i>k</i> ∈ [−3, 3], with closed brackets"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Show that 2 sin <i>x</i> + tan <i>x</i> > 3<i>x</i> for every <i>x</i> in (0, π/2).",
          "steps": [
            "Let <i>h</i>(<i>x</i>) = 2 sin <i>x</i> + tan <i>x</i> − 3<i>x</i> on [0, π/2), with <i>h</i>(0) = 0.",
            "<i>h</i>′(<i>x</i>) = 2 cos <i>x</i> + sec<sup>2</sup><i>x</i> − 3, whose sign is not obvious. Apply AM to GM on the three positive numbers cos <i>x</i>, cos <i>x</i>, sec<sup>2</sup><i>x</i>.",
            "Their product is cos<sup>2</sup><i>x</i> · sec<sup>2</sup><i>x</i> = 1, so the mean is at least ∛1 = 1 and 2 cos <i>x</i> + sec<sup>2</sup><i>x</i> ≥ 3, giving <i>h</i>′ ≥ 0.",
            "Equality needs cos <i>x</i> = sec<sup>2</sup><i>x</i>, that is cos<sup>3</sup><i>x</i> = 1, that is <i>x</i> = 0, which is excluded. So <i>h</i>′ > 0 strictly on (0, π/2) and <i>h</i>(<i>x</i>) > <i>h</i>(0) = 0."
          ],
          "ans": "2 sin <i>x</i> + tan <i>x</i> > 3<i>x</i> on (0, π/2). The AM to GM step is what makes <i>h</i>′ signable"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the intervals in which <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> − 12<i>x</i> + 1 is strictly increasing and strictly decreasing.",
              "a": "<i>f</i>′ = 3<i>x</i><sup>2</sup> − 12 = 3(<i>x</i> − 2)(<i>x</i> + 2). <b>Increasing on (−∞, −2] and [2, ∞), decreasing on [−2, 2].</b>"
            },
            {
              "q": "[CBSE] Show that <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup> + 6<i>x</i> − 11 is strictly increasing on ℝ.",
              "a": "<i>f</i>′ = 3<i>x</i><sup>2</sup> + 6<i>x</i> + 6 = <b>3(<i>x</i> + 1)<sup>2</sup> + 3 > 0</b> for every <i>x</i>. No sign chart, one completed square."
            },
            {
              "q": "[JEE Main] On which interval is <i>f</i>(<i>x</i>) = <i>x</i>(<i>x</i> − 4)<sup>2</sup> decreasing?",
              "a": "Product rule: <i>f</i>′ = (<i>x</i> − 4)<sup>2</sup> + 2<i>x</i>(<i>x</i> − 4) = (<i>x</i> − 4)(3<i>x</i> − 4), negative between its roots. <b>Decreasing on [4/3, 4].</b>"
            },
            {
              "q": "[JEE Main] Find every <i>a</i> for which <i>f</i>(<i>x</i>) = <i>ax</i> − sin <i>x</i> is increasing for every real <i>x</i>.",
              "a": "<i>f</i>′ = <i>a</i> − cos <i>x</i> ≥ 0 for all <i>x</i> needs <i>a</i> ≥ max cos <i>x</i> = 1. <b><i>a</i> ≥ 1</b>, and at <i>a</i> = 1 the zeros at <i>x</i> = 2<i>n</i>π are isolated, so it is still strictly increasing."
            },
            {
              "q": "[JEE Advanced] Prove that tan <i>x</i> > <i>x</i> + <i>x</i><sup>3</sup>/3 for every <i>x</i> in (0, π/2).",
              "a": "Let <i>g</i> = tan <i>x</i> − <i>x</i> − <i>x</i><sup>3</sup>/3, so <i>g</i>(0) = 0 and <i>g</i>′ = sec<sup>2</sup><i>x</i> − 1 − <i>x</i><sup>2</sup> = tan<sup>2</sup><i>x</i> − <i>x</i><sup>2</sup> = <b>(tan <i>x</i> − <i>x</i>)(tan <i>x</i> + <i>x</i>) > 0</b>, using tan <i>x</i> > <i>x</i> on the interval. So <i>g</i> increases from 0."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The function <i>f</i>(<i>x</i>) = 2<i>x</i><sup>3</sup> + 9<i>x</i><sup>2</sup> + 12<i>x</i> − 4 is decreasing on:",
          "correct": 1,
          "opts": [
            {
              "label": "(−∞, −2]",
              "nudge": "This is one of the <b>increasing</b> stretches. An upward parabola is negative <i>between</i> its roots, never outside them, so the answer must be the middle interval."
            },
            {
              "label": "[−2, −1]",
              "nudge": null
            },
            {
              "label": "[−1, ∞)",
              "nudge": "The other increasing stretch. Same slip as the first option: outside the roots of an upward parabola the sign is positive."
            },
            {
              "label": "[−1, 1]",
              "nudge": "The right idea about the shape of the answer, wrong roots. 6<i>x</i><sup>2</sup> + 18<i>x</i> + 12 factors as 6(<i>x</i> + 1)(<i>x</i> + 2), so both roots are negative."
            }
          ],
          "solution": "f′(x) = 6x² + 18x + 12 = 6(x + 1)(x + 2), an upward parabola with roots −2 and −1. It is negative exactly between them, so f decreases on [−2, −1] and increases on both sides."
        },
        {
          "t": "mcq",
          "q": "Which of these is strictly increasing on all of ℝ?",
          "correct": 0,
          "opts": [
            {
              "label": "<i>f</i>(<i>x</i>) = <i>x</i> − sin <i>x</i>",
              "nudge": null
            },
            {
              "label": "<i>f</i>(<i>x</i>) = cos <i>x</i>",
              "nudge": "It oscillates: cos 0 = 1 and cos π = −1 and cos 2π = 1 again, so it both falls and climbs. Nothing periodic and non-constant can be monotonic on ℝ."
            },
            {
              "label": "<i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup>",
              "nudge": "Increasing only on [0, ∞). On (−∞, 0) it decreases, and a question about all of ℝ has to hold on both halves."
            },
            {
              "label": "<i>f</i>(<i>x</i>) = 1/<i>x</i>",
              "nudge": "Not even defined on all of ℝ, and decreasing on each of its two pieces. This is the disconnected-domain trap wearing its most obvious costume."
            }
          ],
          "solution": "f′(x) = 1 − cos x ≥ 0, and it equals zero only at the isolated points x = 2nπ. Isolated zeros do not break strict increase, so x − sin x is strictly increasing on ℝ. Say the words 'isolated zeros' in your answer: that is where the mark is."
        },
        {
          "t": "mcq",
          "q": "<i>f</i>(<i>x</i>) = <i>x</i>(<i>x</i> − 3)<sup>2</sup> is decreasing for <i>x</i> in:",
          "correct": 0,
          "opts": [
            {
              "label": "(1, 3)",
              "nudge": null
            },
            {
              "label": "(−∞, 1)",
              "nudge": "An increasing region. Once you have <i>f</i>′ = 3(<i>x</i> − 3)(<i>x</i> − 1), test <i>x</i> = 0: 3(−3)(−1) = 9 > 0."
            },
            {
              "label": "(3, ∞)",
              "nudge": "The other increasing region. Test <i>x</i> = 4: 3(1)(3) = 9 > 0."
            },
            {
              "label": "(0, 3/2)",
              "nudge": "This comes from half-differentiating: dropping the product rule and writing <i>f</i>′ = 2(<i>x</i> − 3) or similar, which produces a critical point that is not there."
            }
          ],
          "solution": "Product rule: f′ = (x − 3)² + x·2(x − 3) = (x − 3)(x − 3 + 2x) = 3(x − 3)(x − 1), negative exactly on (1, 3). The repeated factor is the trap: (x − 3)² does not differentiate to itself."
        },
        {
          "t": "mcq",
          "q": "If <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> + <i>bx</i><sup>2</sup> + 3<i>x</i> + 5 is strictly increasing on ℝ, then <i>b</i> lies in:",
          "correct": 1,
          "opts": [
            {
              "label": "(−3, 3)",
              "nudge": "The endpoints are wrongly excluded. Writing the condition as Δ < 0 instead of Δ ≤ 0 loses <i>b</i> = ±3, where <i>f</i>′ touches zero at one isolated point and stays positive elsewhere."
            },
            {
              "label": "[−3, 3]",
              "nudge": null
            },
            {
              "label": "(−∞, −3] ∪ [3, ∞)",
              "nudge": "The inequality is inverted. Δ ≥ 0 is the condition for <i>f</i>′ to have real roots, which is when <i>f</i> stops being monotonic."
            },
            {
              "label": "ℝ",
              "nudge": "This ignores the constraint entirely. Take <i>b</i> = 10: <i>f</i>′ = 3<i>x</i><sup>2</sup> + 20<i>x</i> + 3 is negative near <i>x</i> = −1, so <i>f</i> is falling there."
            }
          ],
          "solution": "f′(x) = 3x² + 2bx + 3 must be ≥ 0 for every x. The leading coefficient is positive, so the condition is Δ = 4b² − 36 ≤ 0, that is b² ≤ 9, that is b ∈ [−3, 3]. Non-strict, and the closed interval is the whole examinable point."
        },
        {
          "t": "mistakes",
          "items": [
            "Merging monotonic intervals across a hole. Writing “1/<i>x</i> is decreasing on ℝ minus {0}” as one claim is wrong: <i>f</i>(−1) = −1 < <i>f</i>(1) = 1. <b>Each side is decreasing, the union is not.</b> Split at every domain break.",
            "Demanding <i>f</i>′ > 0 when ≥ 0 suffices. Rejecting <i>x</i><sup>3</sup> or <i>x</i> − sin <i>x</i> as “not strictly increasing” because the derivative touches zero. Isolated zeros are harmless, and <b>saying so explicitly</b> is what banks the mark.",
            "Writing the discriminant condition strictly. For “<i>f</i>′ is a quadratic that is ≥ 0 everywhere” the answer is <b>Δ ≤ 0</b>, a closed interval. The open interval is offered as a distractor almost every year.",
            "Testing one sub-interval and guessing the rest. Signs do alternate at simple roots, but not at repeated ones: <i>f</i>′ = (<i>x</i> − 1)<sup>2</sup>(<i>x</i> − 2) does not change sign at 1. <b>Factor fully, then test every piece.</b>",
            "Forgetting the product rule on a squared factor. <i>x</i>(<i>x</i> − 3)<sup>2</sup> differentiates to (<i>x</i> − 3)(3<i>x</i> − 3), not to anything simpler, and a half-differentiated <i>f</i>′ produces critical points that do not exist."
          ]
        },
        {
          "t": "protip",
          "html": "for “prove increasing on ℝ”, do not draw a chart. just <b>bound</b> <i>f</i>′ in one move: complete the square, or use −1 ≤ cos <i>x</i> ≤ 1, or read off the discriminant. and for MCQs, factor <i>f</i>′ and test the <b>middle</b> interval first: with simple roots the signs alternate, so one test fixes the entire pattern and you are done in ten seconds."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "f′ > 0 ⇒ strictly increasing · f′ < 0 ⇒ strictly decreasing",
              "note": "continuous on the closed interval, differentiable inside"
            },
            {
              "f": "f′ ≥ 0 with isolated zeros ⇒ still strictly increasing",
              "note": "how x³ and x − sin x qualify"
            },
            {
              "f": "domain → differentiate → factor → critical points → sign chart",
              "note": "the five steps, in that order"
            },
            {
              "f": "f′ = ax<sup>2</sup> + bx + c ≥ 0 for all x ⟺ a > 0 and b<sup>2</sup> − 4ac ≤ 0",
              "note": "non-strict; the open interval is the distractor"
            },
            {
              "f": "inequality: g = LHS − RHS, sign of g′, anchor g(0) = 0",
              "note": "state increasing AND evaluate the anchor"
            },
            {
              "f": "never merge intervals across a domain gap",
              "note": "1/x falls on each side and rises across the hole"
            }
          ],
          "aids": [
            "“slope says go: plus is up, minus is down”",
            "“isolated zeros are free, say the words”"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Maxima and Minima: Locating and Certifying",
      "chip": "04 EXTREMA",
      "kalam": "a critical point is a candidate, never a verdict",
      "blocks": [
        {
          "t": "p",
          "html": "Think of a road trip across the Western Ghats. As you drive, your altitude rises and falls: hilltops and valleys all along the way. A <b>local maximum</b> is a hilltop, higher than everything immediately around it even if a taller peak sits fifty kilometres down the road. A <b>local minimum</b> is a valley floor, lower than its immediate surroundings. The highest point of the <b>whole</b> journey is the absolute maximum and the lowest is the absolute minimum. Tallest nearby versus tallest overall: that one distinction organises the rest of this chapter."
        },
        {
          "t": "p",
          "html": "Bring in the derivative. At the exact instant you crest a hilltop the road is momentarily <b>level</b>, so the slope there is zero, and the same is true at the bottom of a valley. So at a smooth peak or trough <i>f</i>′(<i>x</i>) = 0. Those flat spots, together with any point where the road kinks and the slope does not exist at all, are the <b>critical points</b>, and they are the only candidates a local extremum can come from."
        },
        {
          "t": "think",
          "html": "the derivative is a direction sign. approaching a hilltop you are going up, <i>f</i>′ > 0; just past it you are going down, <i>f</i>′ < 0. the slope <i>flips</i> from plus to minus. at a valley it flips the other way. that flip, not the zero, is what certifies a peak or a trough."
        },
        {
          "t": "def",
          "term": "Critical point",
          "html": "A point <i>c</i> in the domain of <i>f</i> at which <b><i>f</i>′(<i>c</i>) = 0</b> or <b><i>f</i>′(<i>c</i>) does not exist</b>. Both halves matter: the vertex of |<i>x</i>| is a minimum with no derivative at all, and a question that only solves <i>f</i>′ = 0 misses it entirely. A critical point is a shortlist entry, nothing more. Calling it an extremum without a test is the single most punished habit in this chapter."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE FIRST DERIVATIVE TEST",
          "tag": "c a critical point of a continuous f",
          "main": "f′ : (+) → (−) at c ⇒ local maximum · (−) → (+) ⇒ local minimum",
          "legend": [
            "<b>no sign change</b> at <i>c</i> ⇒ no extremum: the graph flattens and carries on the same way, a stationary point of inflection",
            "you read the sign on each side from the factored <i>f</i>′, exactly the sign chart of the previous topic, so nothing new has to be learned",
            "this test is <b>unconditional</b>: it works at corners, at points where <i>f</i>″ does not exist, and wherever the second-derivative test goes silent"
          ],
          "note": "The value f(c) is what the question usually wants, not the location c. Substitute back and state the extremum value; a great many marks are lost between finding c and answering the question asked."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · A PEAK, A TROUGH, AND THE SIGN BETWEEN THEM, TAP ONE",
          "chips": [
            "the two turning points",
            "the sign of f ′"
          ],
          "captions": [
            "f(x) = x³ − 3x. At x = −1 the curve reaches a local maximum of 2, at x = 1 a local minimum of −2, and at both the tangent shown dashed is horizontal. Look at the values: the local maximum, 2, sits above the local minimum, −2, but neither is the largest or smallest value the function ever takes.",
            "The same curve with the climbing stretches shaded. Left of −1 the slope is positive, between −1 and 1 it is negative, right of 1 it is positive again. Plus to minus at −1 is the peak; minus to plus at 1 is the trough. That is the First Derivative Test read straight off the picture."
          ],
          "frames": [
            {
              "x": [
                -2.3,
                2.3
              ],
              "y": [
                -3.4,
                3.4
              ],
              "curves": [
                {
                  "c": "poly",
                  "coeffs": [
                    0,
                    -3,
                    0,
                    1
                  ]
                }
              ],
              "segments": [
                {
                  "from": [
                    -1.85,
                    2
                  ],
                  "to": [
                    -0.15,
                    2
                  ],
                  "dash": true,
                  "soft": true
                },
                {
                  "from": [
                    0.15,
                    -2
                  ],
                  "to": [
                    1.85,
                    -2
                  ],
                  "dash": true,
                  "soft": true
                }
              ],
              "points": [
                {
                  "x": -1,
                  "y": 2,
                  "label": "local max"
                },
                {
                  "x": 1,
                  "y": -2,
                  "label": "local min"
                }
              ]
            },
            {
              "x": [
                -2.3,
                2.3
              ],
              "y": [
                -3.4,
                3.4
              ],
              "curves": [
                {
                  "c": "poly",
                  "coeffs": [
                    0,
                    -3,
                    0,
                    1
                  ]
                }
              ],
              "bands": [
                {
                  "x0": -2.3,
                  "x1": -1
                },
                {
                  "x0": 1,
                  "x1": 2.3
                }
              ],
              "points": [
                {
                  "x": -1,
                  "y": 2
                },
                {
                  "x": 1,
                  "y": -2
                }
              ],
              "labels": [
                {
                  "x": -1.65,
                  "y": -2.7,
                  "text": "f ′ > 0"
                },
                {
                  "x": 0,
                  "y": -2.7,
                  "text": "f ′ < 0"
                },
                {
                  "x": 1.65,
                  "y": -2.7,
                  "text": "f ′ > 0"
                }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE SECOND DERIVATIVE TEST",
          "tag": "f twice differentiable at c, and f′(c) = 0",
          "main": "f″(c) < 0 ⇒ local maximum · f″(c) > 0 ⇒ local minimum",
          "legend": [
            "<i>f</i>″(<i>c</i>) = 0 ⇒ the test <b>fails</b>, which means inconclusive and never means “no extremum”. Fall back to the first-derivative test",
            "it is faster than the sign chart when <i>f</i>″ is cheap: one substitution per critical point instead of two test values",
            "it reads <b>curvature</b>: concave down is a frown and holds water nowhere, concave up is a smile and holds a puddle"
          ],
          "note": "The entry condition is f′(c) = 0. The test says nothing at a corner, nothing at an endpoint, and nothing at a point where f″ fails to exist, so it can never be your only tool."
        },
        {
          "t": "p",
          "html": "And here is the trap the exam is built around. <b>A flat spot is not always a peak or a valley.</b> Take <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> at <i>x</i> = 0. The slope is zero, the road goes level for an instant, and you climb straight through it: positive slope before, positive slope after, no flip. That point is a <b>stationary point of inflection</b>, not an extremum. So <i>f</i>′(<i>c</i>) = 0 is <b>necessary but not sufficient</b>, and a bare “<i>f</i>′(<i>c</i>) = 0 so it is a maximum” earns nothing."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THREE CURVES, ONE FLAT SPOT EACH, TAP ONE",
          "chips": [
            "x²",
            "x³",
            "x⁴"
          ],
          "captions": [
            "f(x) = x², the easy case. f ′(0) = 0 and f ″(0) = 2, which is positive, so the Second Derivative Test says minimum and stops. The curve confirms it: the slope runs minus then plus through the origin.",
            "f(x) = x³. Again f ′(0) = 0, and now f ″(0) = 0, so the second test is silent. Fall back to the sign of f ′ = 3x², which is positive on both sides: no flip, so no extremum. This is a stationary point of inflection, and it is the single most examined counterexample in the chapter.",
            "f(x) = x⁴. Once more f ′(0) = 0 and f ″(0) = 0, the same silent reading as x³, and yet the origin is a genuine strict minimum: f ′ = 4x³ runs minus then plus. Same diagnostic, opposite reality, which is exactly why a failed second test means inconclusive and not no extremum."
          ],
          "frames": [
            {
              "x": [
                -1.45,
                1.45
              ],
              "y": [
                -1.9,
                2.1
              ],
              "curves": [
                {
                  "c": "poly",
                  "coeffs": [
                    0,
                    0,
                    1
                  ]
                }
              ],
              "points": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "labels": [
                {
                  "x": 0,
                  "y": -0.85,
                  "text": "f ″(0) = 2 > 0, minimum"
                }
              ]
            },
            {
              "x": [
                -1.45,
                1.45
              ],
              "y": [
                -1.9,
                2.1
              ],
              "curves": [
                {
                  "c": "poly",
                  "coeffs": [
                    0,
                    0,
                    0,
                    1
                  ]
                }
              ],
              "points": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "labels": [
                {
                  "x": 0,
                  "y": -1.35,
                  "text": "f ″(0) = 0, no flip"
                }
              ]
            },
            {
              "x": [
                -1.45,
                1.45
              ],
              "y": [
                -1.9,
                2.1
              ],
              "curves": [
                {
                  "c": "poly",
                  "coeffs": [
                    0,
                    0,
                    0,
                    0,
                    1
                  ]
                }
              ],
              "points": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "labels": [
                {
                  "x": 0,
                  "y": -1.35,
                  "text": "f ″(0) = 0, still min"
                }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Classifying a critical point, and what to do when the test goes quiet",
          "steps": [
            "<b>Differentiate and collect every critical point.</b> Solve <i>f</i>′(<i>x</i>) = 0 and also list where <i>f</i>′ does not exist. Missing a corner loses a whole extremum.",
            "<b>Try the second derivative first when it is cheap.</b> Compute <i>f</i>″ at each critical point. Negative means maximum, positive means minimum, and you are finished in one substitution.",
            "<b>If <i>f</i>″(<i>c</i>) = 0, do not stop.</b> The test is inconclusive, not negative. Go back to the sign chart of <i>f</i>′ around <i>c</i> and look for a flip. That chart always settles it.",
            "<b>Or climb the derivative ladder.</b> If the derivatives are easy, keep differentiating until one of them is nonzero at <i>c</i>, and read off the answer from whether its order is odd or even.",
            "<b>Report the value, not the location.</b> Substitute <i>c</i> back into <i>f</i> and state the local maximum or minimum <b>value</b>, which is what the question almost always asked for."
          ]
        },
        {
          "t": "p",
          "html": "That ladder deserves a name, because JEE Advanced lives on the border where the second test goes quiet. If the first few derivatives all vanish at <i>c</i>, keep going until one does not, and the <b>order</b> of the first surviving derivative tells you everything. Even order behaves like <i>x</i><sup>2</sup> and gives a genuine extremum; odd order behaves like <i>x</i><sup>3</sup> and gives an inflection. It is the same two pictures you just looked at, generalised."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE n-TH DERIVATIVE TEST",
          "tag": "f′(c) = f″(c) = … = f⁽ⁿ⁻¹⁾(c) = 0 and f⁽ⁿ⁾(c) ≠ 0",
          "main": "n even: max if f<sup>(n)</sup>(c) < 0, min if f<sup>(n)</sup>(c) > 0 · n odd: no extremum",
          "legend": [
            "<i>n</i> odd gives a <b>stationary point of inflection</b>: the graph crosses its own horizontal tangent there",
            "<i>n</i> = 2 is the ordinary Second Derivative Test, so this is one theorem, not a second one",
            "it needs the derivatives up to order <i>n</i> to exist near <i>c</i> with <i>f</i><sup>(n)</sup> continuous at <i>c</i>, which every exam function satisfies"
          ],
          "note": "When the pattern is not recognisable, the first-derivative sign chart gives the same conclusions. Slower, but it never needs a hypothesis checked and it never goes silent."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE ORDER DECIDES, TAP A LINE",
          "steps": [
            {
              "eq": "suppose f<sup>(n)</sup>(c) > 0, with all lower derivatives 0 at c",
              "why": "Take this case; reversing every sign below handles the other one. Continuity of the n-th derivative means it stays positive on some small interval around c, and that is the only analytic fact the argument uses."
            },
            {
              "eq": "f<sup>(n)</sup> > 0 near c ⇒ f<sup>(n−1)</sup> strictly increasing, and f<sup>(n−1)</sup>(c) = 0",
              "why": "This is the monotonicity theorem applied one rung down. A strictly increasing function that is zero at c must be negative just left of c and positive just right of it, so the derivative of order n − 1 changes sign at c."
            },
            {
              "eq": "so f<sup>(n−2)</sup> falls then rises: a strict minimum at c, of value 0",
              "why": "Its derivative went minus then plus, which is the First Derivative Test giving a strict local minimum. Since the value at c is 0, the derivative of order n − 2 is strictly positive on both sides of c. The ladder now alternates: every rung an odd distance below n changes sign at c, every rung an even distance below has a strict minimum of value 0 there."
            },
            {
              "eq": "descend to order 0: n even lands on a minimum, n odd lands on a sign change",
              "why": "If n is even, f itself sits an even distance below n, so f has a strict local minimum at c. If n is odd, f sits an odd distance below and therefore changes sign through c, which means it crosses its horizontal tangent: no extremum, a stationary inflection. The parity of n is the entire content of the test."
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Concavity and points of inflection",
          "rows": [
            {
              "k": "Concave upward",
              "v": "<i>f</i>″ > 0 on the interval. The curve holds water, and every tangent lies below it"
            },
            {
              "k": "Concave downward",
              "v": "<i>f</i>″ < 0 on the interval. The curve sheds water, and every tangent lies above it"
            },
            {
              "k": "Point of inflection",
              "v": "an interior point where the <b>concavity changes</b>, so <i>f</i>″ switches sign there"
            },
            {
              "k": "Necessary condition",
              "v": "if <i>f</i>″ is continuous, an inflection forces <i>f</i>″(<i>c</i>) = 0. A sign change must pass through zero"
            },
            {
              "k": "Not sufficient",
              "v": "<i>x</i><sup>4</sup> has <i>f</i>″(0) = 0 with <i>f</i>″ ≥ 0 on both sides, so the origin is <b>not</b> an inflection"
            },
            {
              "k": "The procedure",
              "v": "solve <i>f</i>″ = 0, then test the sign of <i>f</i>″ on each side. Only the sign-changers count"
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the local maximum and local minimum values of <i>f</i>(<i>x</i>) = 2<i>x</i><sup>3</sup> − 15<i>x</i><sup>2</sup> + 36<i>x</i> + 10.",
          "steps": [
            "<i>f</i>′(<i>x</i>) = 6<i>x</i><sup>2</sup> − 30<i>x</i> + 36 = 6(<i>x</i> − 2)(<i>x</i> − 3), so the critical points are <i>x</i> = 2 and <i>x</i> = 3.",
            "<i>f</i>″(<i>x</i>) = 12<i>x</i> − 30.",
            "At <i>x</i> = 2: <i>f</i>″(2) = −6 < 0, a local maximum, and <i>f</i>(2) = 16 − 60 + 72 + 10 = 38.",
            "At <i>x</i> = 3: <i>f</i>″(3) = 6 > 0, a local minimum, and <i>f</i>(3) = 54 − 135 + 108 + 10 = 37."
          ],
          "ans": "Local maximum value 38 at <i>x</i> = 2, local minimum value 37 at <i>x</i> = 3"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Locate and classify every critical point and every inflection point of <i>f</i>(<i>x</i>) = 3<i>x</i><sup>5</sup> − 5<i>x</i><sup>3</sup>.",
          "steps": [
            "<i>f</i>′ = 15<i>x</i><sup>4</sup> − 15<i>x</i><sup>2</sup> = 15<i>x</i><sup>2</sup>(<i>x</i> − 1)(<i>x</i> + 1), so <i>x</i> = −1, 0, 1. And <i>f</i>″ = 60<i>x</i><sup>3</sup> − 30<i>x</i> = 30<i>x</i>(2<i>x</i><sup>2</sup> − 1).",
            "<i>f</i>″(−1) = −30 < 0: local maximum, <i>f</i>(−1) = −3 + 5 = 2. <i>f</i>″(1) = 30 > 0: local minimum, <i>f</i>(1) = 3 − 5 = −2.",
            "At <i>x</i> = 0, <i>f</i>″(0) = 0 and the test is silent. From 15<i>x</i><sup>2</sup>(<i>x</i> − 1)(<i>x</i> + 1): on (−1, 0) the signs are (+)(−)(+), negative; on (0, 1) they are (+)(−)(+), negative too. No flip, so <b>no extremum</b> at 0.",
            "Inflections: <i>f</i>″ = 0 at <i>x</i> = 0 and <i>x</i> = ±1/√2, and 30<i>x</i>(2<i>x</i><sup>2</sup> − 1) runs −, +, −, + across the four pieces, changing at all three."
          ],
          "ans": "Max 2 at −1, min −2 at 1, no extremum at 0; three inflections at 0 and ±1/√2, with <i>f</i>(±1/√2) = ∓7√2/8"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Show that <i>f</i>(<i>x</i>) = <i>x</i><sup>5</sup> − 5<i>x</i><sup>4</sup> + 10<i>x</i><sup>3</sup> − 10<i>x</i><sup>2</sup> + 5<i>x</i> + 2 has no extremum, and say what happens at its critical point.",
          "steps": [
            "Do not grind <i>f</i>′ = 0. The coefficients 1, −5, 10, −10, 5 are row five of Pascal's triangle with alternating signs, so <i>f</i>(<i>x</i>) = (<i>x</i> − 1)<sup>5</sup> + 3. Expand to check: (<i>x</i> − 1)<sup>5</sup> = <i>x</i><sup>5</sup> − 5<i>x</i><sup>4</sup> + 10<i>x</i><sup>3</sup> − 10<i>x</i><sup>2</sup> + 5<i>x</i> − 1.",
            "Now everything collapses: <i>f</i>′ = 5(<i>x</i> − 1)<sup>4</sup>, <i>f</i>″ = 20(<i>x</i> − 1)<sup>3</sup>, <i>f</i><sup>(3)</sup> = 60(<i>x</i> − 1)<sup>2</sup>, <i>f</i><sup>(4)</sup> = 120(<i>x</i> − 1), <i>f</i><sup>(5)</sup> = 120.",
            "At <i>c</i> = 1 the first four derivatives vanish and <i>f</i><sup>(5)</sup>(1) = 120 ≠ 0. Here <i>n</i> = 5 is <b>odd</b>.",
            "So <i>x</i> = 1 is a stationary point of inflection: the graph crosses its own horizontal tangent <i>y</i> = 3 there. The same conclusion follows from <i>f</i>′ = 5(<i>x</i> − 1)<sup>4</sup> ≥ 0, which never changes sign."
          ],
          "ans": "No maximum, no minimum. A stationary inflection at (1, 3), certified by the odd order 5"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN 2019 PATTERN",
          "q": "Classify every critical point of <i>f</i>(<i>x</i>) = 9<i>x</i><sup>4</sup> + 12<i>x</i><sup>3</sup> − 36<i>x</i><sup>2</sup> + 25.",
          "steps": [
            "<i>f</i>′(<i>x</i>) = 36<i>x</i><sup>3</sup> + 36<i>x</i><sup>2</sup> − 72<i>x</i> = 36<i>x</i>(<i>x</i><sup>2</sup> + <i>x</i> − 2) = 36<i>x</i>(<i>x</i> + 2)(<i>x</i> − 1).",
            "Three critical points: <i>x</i> = −2, 0, 1. Take the sign of the product on each of the four pieces.",
            "On (−∞, −2): (−)(−)(−) is negative. On (−2, 0): (−)(+)(−) is positive. On (0, 1): (+)(+)(−) is negative. On (1, ∞): all positive.",
            "Minus to plus at −2 and again at 1; plus to minus at 0."
          ],
          "ans": "Local minima at <i>x</i> = −2 and <i>x</i> = 1, local maximum at <i>x</i> = 0. Three critical points, and every one of them is a genuine extremum here"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the local maximum and minimum values of <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> − 6<i>x</i><sup>2</sup> + 9<i>x</i> + 15.",
              "a": "<i>f</i>′ = 3(<i>x</i> − 1)(<i>x</i> − 3) and <i>f</i>″ = 6<i>x</i> − 12. <b>Local maximum 19 at <i>x</i> = 1</b> (since <i>f</i>″(1) = −6), <b>local minimum 15 at <i>x</i> = 3</b> (since <i>f</i>″(3) = 6)."
            },
            {
              "q": "[JEE Main] <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> + <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> has local extrema at <i>x</i> = 1 and <i>x</i> = 2. Find <i>a</i> and <i>b</i>.",
              "a": "<i>f</i>′ = 3<i>x</i><sup>2</sup> + 2<i>ax</i> + <i>b</i> must have roots 1 and 2. Sum: 3 = −2<i>a</i>/3, so <b><i>a</i> = −9/2</b>. Product: 2 = <i>b</i>/3, so <b><i>b</i> = 6</b>. Note <i>c</i> is free: it shifts the graph without moving the extrema."
            },
            {
              "q": "[JEE Main] Find the points of inflection of <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> − 6<i>x</i><sup>2</sup> + 9<i>x</i>.",
              "a": "<i>f</i>″ = 6<i>x</i> − 12, zero at <i>x</i> = 2, and it changes sign there. <b>One inflection, at (2, 2).</b>"
            },
            {
              "q": "[JEE Main] Locate and classify the critical points of <i>f</i>(<i>x</i>) = <i>x</i><sup>5</sup> − 5<i>x</i> + 3.",
              "a": "<i>f</i>′ = 5(<i>x</i><sup>2</sup> − 1)(<i>x</i><sup>2</sup> + 1), so <i>x</i> = ±1. With <i>f</i>″ = 20<i>x</i><sup>3</sup>: <b>local minimum <i>f</i>(1) = −1</b> and <b>local maximum <i>f</i>(−1) = 7</b>."
            },
            {
              "q": "[JEE Advanced] For <i>f</i>(<i>x</i>) = <i>x</i><sup>6</sup> − 3<i>x</i><sup>4</sup> + 3<i>x</i><sup>2</sup>, find and classify the critical points and locate every inflection.",
              "a": "<i>f</i> = (<i>x</i><sup>2</sup> − 1)<sup>3</sup> + 1, so <i>f</i>′ = 6<i>x</i>(<i>x</i><sup>2</sup> − 1)<sup>2</sup>: critical at 0 and ±1. The squared factor never changes sign, so only <i>x</i> = 0 flips, giving a <b>strict minimum, value 0</b>; <b>±1 are not extrema</b>. Then <i>f</i>″ = 6(<i>x</i><sup>2</sup> − 1)(5<i>x</i><sup>2</sup> − 1) changes sign at ±1 and ±1/√5: <b>four inflections</b>, the ones at ±1 stationary."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The function <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> − 3<i>x</i><sup>2</sup> + 3<i>x</i> + 7 has:",
          "correct": 2,
          "opts": [
            {
              "label": "a local maximum at <i>x</i> = 1",
              "nudge": "You found <i>f</i>′(1) = 0 and stopped. A zero derivative is a candidate; the certificate is a <b>sign flip</b>, and 3(<i>x</i> − 1)<sup>2</sup> is non-negative on both sides."
            },
            {
              "label": "a local minimum at <i>x</i> = 1",
              "nudge": "Same slip in the other direction. Test the sign at <i>x</i> = 0 and at <i>x</i> = 2: both give <i>f</i>′ = 3, positive. Nothing flipped, so nothing turned."
            },
            {
              "label": "neither a maximum nor a minimum",
              "nudge": null
            },
            {
              "label": "both, at different points",
              "nudge": "There is only one critical point. <i>f</i>′ = 3(<i>x</i> − 1)<sup>2</sup> has the single repeated root <i>x</i> = 1, so there is nowhere else for a second extremum to live."
            }
          ],
          "solution": "f′(x) = 3x² − 6x + 3 = 3(x − 1)², which is ≥ 0 everywhere and touches zero only at x = 1. No sign change, so no extremum: x = 1 is a stationary point of inflection and f is in fact strictly increasing on ℝ."
        },
        {
          "t": "mcq",
          "q": "The absolute maximum value of <i>f</i>(<i>x</i>) = sin <i>x</i> + cos <i>x</i> on [0, π/2] is:",
          "correct": 1,
          "opts": [
            {
              "label": "1",
              "nudge": "This is the value at <b>both endpoints</b>, <i>f</i>(0) = <i>f</i>(π/2) = 1. Picked by anyone who checks the endpoints and forgets the interior critical point, which is the mirror image of the usual mistake."
            },
            {
              "label": "√2",
              "nudge": null
            },
            {
              "label": "2",
              "nudge": "The separate maxima of sin and cos added together. They never peak at the same <i>x</i>, so their sum never reaches 2."
            },
            {
              "label": "1/√2",
              "nudge": "That is sin(π/4) on its own, one of the two terms. The question asks for the value of the sum, which is twice as large."
            }
          ],
          "solution": "f′(x) = cos x − sin x = 0 gives x = π/4 in the interval, where f = 1/√2 + 1/√2 = √2. Compare with the endpoints f(0) = f(π/2) = 1. The largest of {1, √2, 1} is √2."
        },
        {
          "t": "mcq",
          "q": "For <i>f</i>(<i>x</i>) = <i>x</i><sup>4</sup>, at <i>x</i> = 0 the Second Derivative Test:",
          "correct": 2,
          "opts": [
            {
              "label": "gives a local maximum",
              "nudge": "It gives nothing at all: <i>f</i>″(0) = 12(0)<sup>2</sup> = 0, and a zero second derivative reports no curvature either way."
            },
            {
              "label": "gives a local minimum",
              "nudge": "The conclusion is right but the reason is wrong, and the option is testing the reason. <i>f</i>″(0) = 0, so this test is silent; something else has to certify the minimum."
            },
            {
              "label": "fails, but <i>x</i> = 0 is a local minimum",
              "nudge": null
            },
            {
              "label": "fails, so no extremum exists",
              "nudge": "The classic error: reading “test fails” as “no extremum”. Failure means <b>inconclusive</b>. Here <i>f</i>′ = 4<i>x</i><sup>3</sup> runs minus then plus, and the origin is a genuine strict minimum."
            }
          ],
          "solution": "f′(0) = 0 and f″(0) = 0, so the second test is inconclusive. The first-derivative test settles it: f′ = 4x³ is negative for x < 0 and positive for x > 0, a minus-to-plus flip, so x = 0 is a strict local minimum of value 0."
        },
        {
          "t": "mcq",
          "q": "If <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> − 3<i>kx</i> has a local minimum at <i>x</i> = 2, then <i>k</i> equals:",
          "correct": 1,
          "opts": [
            {
              "label": "2",
              "nudge": "This solves <i>x</i> = <i>k</i> instead of <i>x</i><sup>2</sup> = <i>k</i>. The condition is 3<i>x</i><sup>2</sup> = 3<i>k</i> at <i>x</i> = 2, so <i>k</i> is 4, not 2."
            },
            {
              "label": "4",
              "nudge": null
            },
            {
              "label": "−4",
              "nudge": "A sign flip. With <i>k</i> = −4 the derivative 3<i>x</i><sup>2</sup> + 12 is never zero, so the function has no critical point at all and certainly no minimum at 2."
            },
            {
              "label": "1/2",
              "nudge": "This mishandles the constant, dividing by 3 somewhere it should not be divided. Substitute back to check: with <i>k</i> = 1/2, <i>f</i>′(2) = 12 − 1.5, nowhere near zero."
            }
          ],
          "solution": "f′(x) = 3x² − 3k, and f′(2) = 0 gives 12 = 3k, so k = 4. Then f″(x) = 6x and f″(2) = 12 > 0, which confirms a minimum rather than a maximum. Always run that confirming line: the question said minimum for a reason."
        },
        {
          "t": "mistakes",
          "items": [
            "Calling every critical point an extremum. <i>f</i>′(<i>c</i>) = 0 is a <b>candidate</b>. Finish with a sign flip or a curvature check every single time, and remember that the inflection of <i>x</i><sup>3</sup> is the standard trap in exactly this shape.",
            "Quitting when the second-derivative test fails. <i>f</i>″(<i>c</i>) = 0 means <b>inconclusive</b>, not “no extremum”. Go back to the first-derivative sign chart. Writing “no maximum or minimum” from a silent second test is a wrong answer, not a cautious one.",
            "Solving <i>f</i>′ = 0 and never looking for corners. A point where <i>f</i>′ does not exist is a critical point too. The vertex of |<i>x</i>| is a minimum that no equation will ever hand you.",
            "Answering with the location instead of the value. The question usually wants the local maximum <b>value</b> <i>f</i>(<i>c</i>). Finding <i>c</i> and stopping leaves the last mark on the table.",
            "Reading <i>f</i>″(<i>c</i>) = 0 as “inflection here”. It is <b>necessary</b> for an inflection and not sufficient: <i>x</i><sup>4</sup> has <i>f</i>″(0) = 0 with <i>f</i>″ ≥ 0 on both sides, and the concavity never changes. Only sign-changers count."
          ]
        },
        {
          "t": "protip",
          "html": "pick the test to match the function. a polynomial with a clean second derivative goes to the <b>second</b> test, one substitution per point and you are out. anything with a messy <i>f</i>″, a corner, or an <i>f</i>″(<i>c</i>) = 0 goes to the <b>first</b> test via a sign chart, which is slower and never fails. and when a quintic's coefficients look like a row of pascal's triangle, stop and try (<i>x</i> − 1)<sup>5</sup>: the whole question usually collapses."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "critical point: f′(c) = 0 or f′(c) undefined",
              "note": "candidates only; corners count too"
            },
            {
              "f": "First test: (+)→(−) max · (−)→(+) min · no flip, inflection",
              "note": "unconditional, works everywhere"
            },
            {
              "f": "Second test: f″(c) < 0 max · f″(c) > 0 min · = 0 silent",
              "note": "fast when f″ is cheap; silent is not negative"
            },
            {
              "f": "n-th test: n even ⇒ extremum · n odd ⇒ stationary inflection",
              "note": "first nonzero derivative decides by its parity"
            },
            {
              "f": "f″ > 0 concave up · f″ < 0 concave down",
              "note": "inflection where the concavity actually changes"
            },
            {
              "f": "x³ inflects at 0 · x⁴ minimises at 0",
              "note": "same reading f″(0) = 0, opposite truths"
            }
          ],
          "aids": [
            "“frown for max, smile for min”",
            "“zero slope is a candidate, the flip is the verdict”"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Absolute Extrema and Applied Optimisation",
      "chip": "05 OPTIMISE",
      "kalam": "state the domain, then reject the roots it forbids",
      "blocks": [
        {
          "t": "p",
          "html": "Local and absolute are different questions and they want different work. A local extremum is a statement about a neighbourhood, and the two derivative tests answer it. An <b>absolute</b> extremum is a statement about the whole domain, and no derivative test can see it, because the biggest value on a stretch of road may sit at the gate rather than on any hill. On a closed interval the fix is a finite shortlist, and comparing that list is the entire method."
        },
        {
          "t": "def",
          "term": "Absolute extremum on [a, b]",
          "html": "<i>f</i> has an <b>absolute maximum</b> at <i>c</i> when <i>f</i>(<i>x</i>) ≤ <i>f</i>(<i>c</i>) for <b>every</b> <i>x</i> in [<i>a</i>, <i>b</i>], and an <b>absolute minimum</b> at <i>d</i> when <i>f</i>(<i>x</i>) ≥ <i>f</i>(<i>d</i>) for every such <i>x</i>. Note what is missing: no mention of derivatives, and no requirement that <i>c</i> be interior. A continuous function on a closed bounded interval always attains both, which is what makes the shortlist method work."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE WORKING RULE ON A CLOSED INTERVAL",
          "tag": "f continuous on [a, b]",
          "main": "compare f at every interior critical point and at both endpoints a and b",
          "legend": [
            "the largest number on that list is the absolute maximum; the smallest is the absolute minimum. There is nothing else to check",
            "the endpoints go on the list <b>even though</b> <i>f</i>′ need not be zero there, and this is the step most answers drop",
            "critical points outside (<i>a</i>, <i>b</i>) are irrelevant and must be discarded, not evaluated"
          ],
          "note": "No derivative test is used here at all. You are not classifying the critical points, only reading off their values, so a point of inflection on the list costs you nothing and skipping an endpoint costs you the question."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · WHY THE ENDPOINT IS ON THE LIST, TAP ONE",
          "chips": [
            "the three candidates",
            "the shortlist compared"
          ],
          "captions": [
            "f(x) = 3x⁴ − 8x³ + 12x² − 48x + 25 on the shaded interval [0, 3]. Its only critical point inside is x = 2, because f ′ = 12(x − 2)(x² + 2) and x² + 2 is never zero. So the shortlist has exactly three entries: f(0) = 25, f(2) = −39 and f(3) = 16.",
            "The two dashed levels are the largest and smallest values on the list. The maximum, 25, sits at the left endpoint, where the slope is nowhere near zero: the curve is falling steeply as it leaves x = 0. No derivative test would ever have found it. The minimum, −39, does sit at the critical point."
          ],
          "frames": [
            {
              "x": [
                -0.15,
                3.15
              ],
              "y": [
                -48,
                40
              ],
              "curves": [
                {
                  "c": "poly",
                  "coeffs": [
                    25,
                    -48,
                    12,
                    -8,
                    3
                  ]
                }
              ],
              "bands": [
                {
                  "x0": 0,
                  "x1": 3
                }
              ],
              "points": [
                {
                  "x": 0,
                  "y": 25
                },
                {
                  "x": 2,
                  "y": -39
                },
                {
                  "x": 3,
                  "y": 16
                }
              ],
              "labels": [
                {
                  "x": 0.62,
                  "y": 28,
                  "text": "f(0) = 25"
                },
                {
                  "x": 1.72,
                  "y": -44,
                  "text": "f(2) = −39"
                },
                {
                  "x": 2.5,
                  "y": 23,
                  "text": "f(3) = 16"
                }
              ]
            },
            {
              "x": [
                -0.15,
                3.15
              ],
              "y": [
                -48,
                40
              ],
              "curves": [
                {
                  "c": "poly",
                  "coeffs": [
                    25,
                    -48,
                    12,
                    -8,
                    3
                  ]
                }
              ],
              "bands": [
                {
                  "x0": 0,
                  "x1": 3
                }
              ],
              "segments": [
                {
                  "from": [
                    -0.15,
                    25
                  ],
                  "to": [
                    3.15,
                    25
                  ],
                  "dash": true,
                  "soft": true
                },
                {
                  "from": [
                    -0.15,
                    -39
                  ],
                  "to": [
                    3.15,
                    -39
                  ],
                  "dash": true,
                  "soft": true
                }
              ],
              "points": [
                {
                  "x": 0,
                  "y": 25
                },
                {
                  "x": 2,
                  "y": -39
                },
                {
                  "x": 3,
                  "y": 16
                }
              ],
              "labels": [
                {
                  "x": 1.9,
                  "y": 30,
                  "text": "absolute max, at an endpoint"
                },
                {
                  "x": 1.1,
                  "y": -44,
                  "text": "absolute min"
                }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Look at what that picture is saying. The absolute maximum sits at <i>x</i> = 0, an endpoint, where the derivative is −48 and the curve is dropping fast. Neither derivative test can find it, because both tests only speak at points where <i>f</i>′ = 0. The endpoint is not a special case or an edge condition. It is where the answer usually lives, and the bank's own showpiece example was chosen to make exactly that point."
        },
        {
          "t": "think",
          "html": "the closed interval is a fenced field. the highest ground is either a hilltop inside the fence, or the fence itself. checking only the hills means never looking at the fence, and the fence is where the exam puts the answer about half the time."
        },
        {
          "t": "proc",
          "title": "An optimisation word problem, from sentence to answer",
          "steps": [
            "<b>Name the variables and write the quantity to be optimised as a function of <b>one</b> of them.</b> Use the constraint given in the problem to eliminate the others. Calculus acts on single-variable functions, so this step is not optional and it is where most of the marks are.",
            "<b>State the feasible domain out loud.</b> Lengths are positive, a cut cannot exceed half the sheet, a depth cannot exceed the diameter. Writing 0 < <i>x</i> < 9 before you differentiate is what makes the rejection in step four automatic instead of a judgement call.",
            "<b>Differentiate, solve the derivative equal to zero, and reject the roots the domain forbids.</b> A root giving a negative length or a zero volume is not a candidate, however cleanly it solves the equation.",
            "<b>Confirm maximum against minimum.</b> A second-derivative check, or a sign test just either side. The question said maximum; you have to show you found one.",
            "<b>Answer the question that was asked.</b> Often that is a value, or a dimension, or a ratio, and not the variable you solved for. Read the last line of the question again before you write the last line of the answer."
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE OPEN BOX, SHEET TO ANSWER, TAP A LINE",
          "steps": [
            {
              "eq": "base (18 − 2x) by (18 − 2x), height x, so V = x(18 − 2x)²",
              "why": "Cut a square of side x from each corner of an 18 cm square sheet and fold the flaps up. Each side of the base loses x at both ends, so it is 18 − 2x, and the flap height is exactly the cut size x. One variable already, because the sheet was square: no constraint needs eliminating."
            },
            {
              "eq": "feasible domain 0 < x < 9",
              "why": "A cut of 0 gives no box and a cut of 9 removes the whole base. Writing this line now is what turns the rejection three steps later into bookkeeping rather than a decision. State the domain before you differentiate, every time."
            },
            {
              "eq": "V′ = (18 − 2x)[(18 − 2x) − 4x] = (18 − 2x)(18 − 6x)",
              "why": "Product rule on x times a square, then take out the common factor (18 − 2x) rather than expanding. Factored form hands you the roots directly; an expanded cubic derivative makes you solve a quadratic for no reason."
            },
            {
              "eq": "x = 9 is on the boundary and gives V = 0; x = 3 gives V = 432",
              "why": "Both roots solve the equation and only one is a box. At x = 3, V = 3(12)² = 432 cm³, and testing just either side of 3 shows V′ positive then negative, so it is a maximum. Keeping x = 9 is the marks-losing step the examiners are watching for."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THREE OPTIMISATIONS, DRAWN AS THEIR GEOMETRY, TAP ONE",
          "chips": [
            "the box, cut and folded",
            "the volume V(x)",
            "cylinder in a sphere"
          ],
          "captions": [
            "The 18 cm square sheet, dashed, with a 3 cm square removed from each corner. What is left is the shaded net: a base of 18 − 2x by 18 − 2x with four flaps of height x that fold up. Drawing the net is how you see that each base side loses x twice, which is the one place the factor 2 comes from.",
            "V(x) = x(18 − 2x)² over the feasible stretch 0 < x < 9. It starts at 0 with no box, rises to 432 at x = 3, and falls back to 0 at x = 9 where the base has vanished. Both roots of V ′ are visible: one is the answer and the other is the boundary the domain already excluded.",
            "A cylinder inscribed in a sphere of radius R, seen in cross-section. The axis passes through the centre, so the radius to a rim point, the cylinder radius r and the half-height h/2 form a right triangle: r² + (h/2)² = R². That single equation eliminates r and turns the volume into a function of h alone."
          ],
          "frames": [
            {
              "x": [
                -6.4,
                24.4
              ],
              "y": [
                -2,
                20
              ],
              "polygons": [
                {
                  "points": [
                    [
                      3,
                      0
                    ],
                    [
                      15,
                      0
                    ],
                    [
                      15,
                      3
                    ],
                    [
                      18,
                      3
                    ],
                    [
                      18,
                      15
                    ],
                    [
                      15,
                      15
                    ],
                    [
                      15,
                      18
                    ],
                    [
                      3,
                      18
                    ],
                    [
                      3,
                      15
                    ],
                    [
                      0,
                      15
                    ],
                    [
                      0,
                      3
                    ],
                    [
                      3,
                      3
                    ]
                  ],
                  "corners": false
                }
              ],
              "segments": [
                {
                  "from": [
                    0,
                    0
                  ],
                  "to": [
                    18,
                    0
                  ],
                  "dash": true,
                  "soft": true
                },
                {
                  "from": [
                    18,
                    0
                  ],
                  "to": [
                    18,
                    18
                  ],
                  "dash": true,
                  "soft": true
                },
                {
                  "from": [
                    18,
                    18
                  ],
                  "to": [
                    0,
                    18
                  ],
                  "dash": true,
                  "soft": true
                },
                {
                  "from": [
                    0,
                    18
                  ],
                  "to": [
                    0,
                    0
                  ],
                  "dash": true,
                  "soft": true
                }
              ],
              "labels": [
                {
                  "x": 9,
                  "y": -1.3,
                  "text": "18 cm"
                },
                {
                  "x": 1.5,
                  "y": 1.3,
                  "text": "x"
                },
                {
                  "x": 9,
                  "y": 9,
                  "text": "18 − 2x"
                }
              ]
            },
            {
              "x": [
                -0.4,
                9.6
              ],
              "y": [
                -40,
                500
              ],
              "curves": [
                {
                  "c": "poly",
                  "coeffs": [
                    0,
                    324,
                    -72,
                    4
                  ]
                }
              ],
              "bands": [
                {
                  "x0": 0,
                  "x1": 9
                }
              ],
              "points": [
                {
                  "x": 3,
                  "y": 432
                },
                {
                  "x": 9,
                  "y": 0
                }
              ],
              "labels": [
                {
                  "x": 3.6,
                  "y": 468,
                  "text": "max 432 at x = 3"
                },
                {
                  "x": 8.2,
                  "y": 150,
                  "text": "x = 9 rejected"
                }
              ]
            },
            {
              "x": [
                -1.75,
                1.75
              ],
              "y": [
                -1.25,
                1.25
              ],
              "curves": [
                {
                  "c": "circle",
                  "r": 1
                }
              ],
              "segments": [
                {
                  "from": [
                    -0.8165,
                    -0.5774
                  ],
                  "to": [
                    0.8165,
                    -0.5774
                  ]
                },
                {
                  "from": [
                    0.8165,
                    -0.5774
                  ],
                  "to": [
                    0.8165,
                    0.5774
                  ]
                },
                {
                  "from": [
                    0.8165,
                    0.5774
                  ],
                  "to": [
                    -0.8165,
                    0.5774
                  ]
                },
                {
                  "from": [
                    -0.8165,
                    0.5774
                  ],
                  "to": [
                    -0.8165,
                    -0.5774
                  ]
                },
                {
                  "from": [
                    0,
                    0
                  ],
                  "to": [
                    0.8165,
                    0.5774
                  ],
                  "label": "R"
                },
                {
                  "from": [
                    0,
                    0
                  ],
                  "to": [
                    0.8165,
                    0
                  ],
                  "dash": true,
                  "soft": true,
                  "label": "r"
                },
                {
                  "from": [
                    0.8165,
                    0
                  ],
                  "to": [
                    0.8165,
                    0.5774
                  ],
                  "dash": true,
                  "soft": true,
                  "label": "h/2"
                }
              ],
              "points": [
                {
                  "x": 0,
                  "y": 0
                },
                {
                  "x": 0.8165,
                  "y": 0.5774
                }
              ],
              "labels": [
                {
                  "x": 0,
                  "y": -1.08,
                  "text": "r² + (h/2)² = R²"
                }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Now the case the closed-interval rule cannot touch. On (0, ∞), or on ℝ, or on any domain with a missing or infinite end, <b>there are no endpoints to evaluate</b> and the working rule returns nothing at all. Yet this is where JEE Main puts its most common optimisation questions: minimise <i>x</i> + <i>a</i>/<i>x</i>, find the closest point on a curve, maximise an inscribed rectangle. What replaces the endpoint audit is a limit audit."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · WHEN THERE ARE NO ENDPOINTS TO CHECK",
          "tag": "f continuous on (α, β), either end possibly infinite",
          "main": "f → +∞ at both ends ⇒ a global minimum exists, at an interior critical point",
          "legend": [
            "with −∞ at both ends the same argument delivers a global <b>maximum</b> instead",
            "if an end-limit is <b>finite</b>, it joins the comparison list rather than losing automatically, and the answer may be that no extremum is attained",
            "the model family: <i>px</i> + <i>q</i>/<i>x</i> on <i>x</i> > 0 with <i>p</i>, <i>q</i> > 0 has its minimum <b>2√(<i>pq</i>)</b> at <i>x</i> = √(<i>q</i>/<i>p</i>), which is AM to GM stated in calculus"
          ],
          "note": "“There is no global minimum” is a full-credit answer when the limits demand it. On ℝ, <i>xe</i><sup>−x</sup> has a global maximum of 1/<i>e</i> at <i>x</i> = 1 and no global minimum at all, because it falls without bound as <i>x</i> tends to −∞."
        },
        {
          "t": "defgrid",
          "title": "The optimisation shapes that keep coming back",
          "rows": [
            {
              "k": "Open box, square sheet of side a",
              "v": "cut <i>x</i> from each corner: <i>V</i> = <i>x</i>(<i>a</i> − 2<i>x</i>)<sup>2</sup>, maximum at <i>x</i> = <i>a</i>/6"
            },
            {
              "k": "Cylinder in a sphere of radius R",
              "v": "greatest volume at <i>h</i> = 2<i>R</i>/√3, giving <i>V</i> = 4π<i>R</i><sup>3</sup>/(3√3)"
            },
            {
              "k": "Cone in a sphere of radius R",
              "v": "greatest volume at <i>h</i> = 4<i>R</i>/3, giving <i>V</i> = 32π<i>R</i><sup>3</sup>/81"
            },
            {
              "k": "Cone of fixed slant ℓ",
              "v": "<i>r</i><sup>2</sup> + <i>h</i><sup>2</sup> = ℓ<sup>2</sup> gives greatest volume at <i>h</i> = ℓ/√3; for ℓ = 3, <i>V</i> = 2√3 π"
            },
            {
              "k": "Rectangle in an ellipse",
              "v": "greatest area 2<i>ab</i>, sides <i>a</i>√2 and <i>b</i>√2. On a circle this is the square of area 2<i>R</i><sup>2</sup>"
            },
            {
              "k": "px + q/x on x > 0",
              "v": "minimum 2√(<i>pq</i>) at <i>x</i> = √(<i>q</i>/<i>p</i>). Know both the calculus and the AM to GM route"
            }
          ]
        },
        {
          "t": "p",
          "html": "One trick is worth more than it looks. When the constraint is a circle or an ellipse, <b>parametrise</b> it: put the point at (<i>a</i> cos θ, <i>b</i> sin θ) and the constrained problem becomes a single trigonometric function of θ. The inscribed rectangle then has area 4<i>ab</i> sin θ cos θ = 2<i>ab</i> sin 2θ, whose maximum you can read off without differentiating anything. Eliminating a variable through a square root instead would have cost you a messy derivative for the same answer."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the absolute maximum and minimum values of <i>f</i>(<i>x</i>) = 3<i>x</i><sup>4</sup> − 8<i>x</i><sup>3</sup> + 12<i>x</i><sup>2</sup> − 48<i>x</i> + 25 on [0, 3].",
          "steps": [
            "<i>f</i>′(<i>x</i>) = 12<i>x</i><sup>3</sup> − 24<i>x</i><sup>2</sup> + 24<i>x</i> − 48 = 12(<i>x</i><sup>3</sup> − 2<i>x</i><sup>2</sup> + 2<i>x</i> − 4) = 12(<i>x</i> − 2)(<i>x</i><sup>2</sup> + 2).",
            "Since <i>x</i><sup>2</sup> + 2 is never zero, the only critical point is <i>x</i> = 2, and it lies inside (0, 3).",
            "Evaluate at the critical point <b>and</b> both endpoints: <i>f</i>(0) = 25, <i>f</i>(2) = 48 − 64 + 48 − 96 + 25 = −39, <i>f</i>(3) = 243 − 216 + 108 − 144 + 25 = 16.",
            "Compare the three. Largest 25, smallest −39."
          ],
          "ans": "Absolute maximum 25 at <i>x</i> = 0, an <b>endpoint</b>; absolute minimum −39 at <i>x</i> = 2"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD HOTS",
          "q": "A square sheet of tin of side 18 cm has a small square of side <i>x</i> cut from each corner, and the flaps are folded up to form an open box. Find the <i>x</i> that maximises the volume.",
          "steps": [
            "Base (18 − 2<i>x</i>) by (18 − 2<i>x</i>), height <i>x</i>, so <i>V</i>(<i>x</i>) = <i>x</i>(18 − 2<i>x</i>)<sup>2</sup> on the feasible domain 0 < <i>x</i> < 9.",
            "<i>V</i>′(<i>x</i>) = (18 − 2<i>x</i>)<sup>2</sup> + <i>x</i> · 2(18 − 2<i>x</i>)(−2) = (18 − 2<i>x</i>)(18 − 6<i>x</i>).",
            "Roots <i>x</i> = 9, which is on the boundary and gives <i>V</i> = 0, so it is rejected, and <i>x</i> = 3.",
            "Just below 3, <i>V</i>′ > 0; just above, <i>V</i>′ < 0. A maximum, with <i>V</i>(3) = 3(12)<sup>2</sup> = 432."
          ],
          "ans": "Cut 3 cm squares; the greatest volume is 432 cm<sup>3</sup>. State the domain first and the rejection writes itself"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find the height of the cylinder of greatest volume that can be inscribed in a sphere of radius <i>R</i>, and that greatest volume.",
          "steps": [
            "The axis passes through the centre, so <i>r</i><sup>2</sup> + (<i>h</i>/2)<sup>2</sup> = <i>R</i><sup>2</sup>, giving <i>r</i><sup>2</sup> = <i>R</i><sup>2</sup> − <i>h</i><sup>2</sup>/4.",
            "So <i>V</i>(<i>h</i>) = π<i>r</i><sup>2</sup><i>h</i> = π(<i>R</i><sup>2</sup><i>h</i> − <i>h</i><sup>3</sup>/4) on 0 < <i>h</i> < 2<i>R</i>.",
            "<i>V</i>′(<i>h</i>) = π(<i>R</i><sup>2</sup> − 3<i>h</i><sup>2</sup>/4) = 0 gives <i>h</i><sup>2</sup> = 4<i>R</i><sup>2</sup>/3, so <i>h</i> = 2<i>R</i>/√3.",
            "<i>V</i>″(<i>h</i>) = −3π<i>h</i>/2 < 0, a maximum. Then <i>r</i><sup>2</sup> = 2<i>R</i><sup>2</sup>/3 and <i>V</i> = π(2<i>R</i><sup>2</sup>/3)(2<i>R</i>/√3)."
          ],
          "ans": "<i>h</i> = 2<i>R</i>/√3, with greatest volume 4π<i>R</i><sup>3</sup>/(3√3) = 4√3 π<i>R</i><sup>3</sup>/9"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find the point on the parabola <i>y</i><sup>2</sup> = 4<i>x</i> closest to (2, 1), and the shortest distance.",
          "steps": [
            "Minimise the <b>squared</b> distance: it is monotone in distance and far kinder to differentiate. With <i>x</i> = <i>y</i><sup>2</sup>/4 the target is a function of <i>y</i> alone.",
            "<i>g</i>(<i>y</i>) = (<i>y</i><sup>2</sup>/4 − 2)<sup>2</sup> + (<i>y</i> − 1)<sup>2</sup>. Expand before differentiating and the <i>y</i><sup>2</sup> terms cancel: <i>g</i> = <i>y</i><sup>4</sup>/16 − 2<i>y</i> + 5.",
            "<i>g</i>′(<i>y</i>) = <i>y</i><sup>3</sup>/4 − 2 = 0 gives <i>y</i><sup>3</sup> = 8, so <i>y</i> = 2 and <i>x</i> = 1. Here <i>g</i>″ = 3<i>y</i><sup>2</sup>/4 > 0, and <i>g</i> → +∞ at both ends, so this is the global minimum.",
            "Check it geometrically: the segment from (2, 1) to (1, 2) has slope −1, and the tangent to the parabola at (1, 2) has slope 2/<i>y</i> = 1. Perpendicular, as the shortest segment must be."
          ],
          "ans": "The point (1, 2), at distance √2. Any answer failing the perpendicular check is wrong on sight"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the absolute maximum and minimum values of <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> − 3<i>x</i> on [0, 2].",
              "a": "<i>f</i>′ = 3<i>x</i><sup>2</sup> − 3 gives <i>x</i> = ±1, and only <i>x</i> = 1 is inside. The list is <i>f</i>(0) = 0, <i>f</i>(1) = −2, <i>f</i>(2) = 2. <b>Absolute maximum 2 at <i>x</i> = 2, absolute minimum −2 at <i>x</i> = 1.</b> The maximum is an endpoint again."
            },
            {
              "q": "[JEE Main] Two positive numbers have sum 24. Find them so that the product of one number and the square of the other is greatest.",
              "a": "Maximise <i>xy</i><sup>2</sup> with <i>x</i> + <i>y</i> = 24, so maximise (24 − <i>y</i>)<i>y</i><sup>2</sup> = 24<i>y</i><sup>2</sup> − <i>y</i><sup>3</sup>. Derivative 48<i>y</i> − 3<i>y</i><sup>2</sup> = 3<i>y</i>(16 − <i>y</i>) = 0 gives <i>y</i> = 16. <b>The numbers are 8 and 16, with 16 squared</b>, and the greatest value is 2048."
            },
            {
              "q": "[JEE Main] Find the minimum value of 2<i>x</i> + 8/<i>x</i> for <i>x</i> > 0.",
              "a": "The model family with <i>p</i> = 2 and <i>q</i> = 8: the minimum is 2√(<i>pq</i>) = 2√16 = <b>8</b>, at <i>x</i> = √(8/2) = 2. By calculus, <i>f</i>′ = 2 − 8/<i>x</i><sup>2</sup> = 0 gives <i>x</i> = 2 and <i>f</i>(2) = 4 + 4 = 8."
            },
            {
              "q": "[JEE Advanced] Show that the right circular cone of greatest volume inscribed in a sphere of radius <i>R</i> has height 4<i>R</i>/3, and find that volume.",
              "a": "With the base at distance <i>d</i> below the centre, <i>r</i><sup>2</sup> = <i>R</i><sup>2</sup> − <i>d</i><sup>2</sup> and <i>h</i> = <i>R</i> + <i>d</i>. Then 3<i>V</i>/π = (<i>R</i><sup>2</sup> − <i>d</i><sup>2</sup>)(<i>R</i> + <i>d</i>), whose derivative in <i>d</i> is <i>R</i><sup>2</sup> − 2<i>dR</i> − 3<i>d</i><sup>2</sup> = 0, so <i>d</i> = <i>R</i>/3 and <b><i>h</i> = 4<i>R</i>/3</b>. Then <i>r</i><sup>2</sup> = 8<i>R</i><sup>2</sup>/9 and <b><i>V</i> = 32π<i>R</i><sup>3</sup>/81</b>."
            },
            {
              "q": "[JEE Advanced] Find the point or points on <i>y</i> = <i>x</i><sup>2</sup> closest to (0, 2), and the shortest distance.",
              "a": "Minimise <i>g</i> = <i>x</i><sup>2</sup> + (<i>x</i><sup>2</sup> − 2)<sup>2</sup> = <i>x</i><sup>4</sup> − 3<i>x</i><sup>2</sup> + 4. Then <i>g</i>′ = 2<i>x</i>(2<i>x</i><sup>2</sup> − 3) = 0 gives <i>x</i> = 0 (a local maximum, <i>g</i> = 4) and <i>x</i> = ±√(3/2), where <i>g</i>″ = 12<i>x</i><sup>2</sup> − 6 > 0. <b>Two points, (±√6/2, 3/2), each at distance √7/2 ≈ 1.32.</b> The source prints √10/2 here and that is wrong: putting <i>x</i><sup>2</sup> = 3/2 into <i>x</i><sup>4</sup> − 3<i>x</i><sup>2</sup> + 4 gives 9/4 − 9/2 + 4 = 7/4, not 5/2."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "On a closed interval [<i>a</i>, <i>b</i>], the absolute maximum of a continuous function <i>f</i>:",
          "correct": 2,
          "opts": [
            {
              "label": "must occur at a critical point",
              "nudge": "This drops the endpoints. On [0, 3], 3<i>x</i><sup>4</sup> − 8<i>x</i><sup>3</sup> + 12<i>x</i><sup>2</sup> − 48<i>x</i> + 25 peaks at <i>x</i> = 0, where the derivative is −48."
            },
            {
              "label": "must occur at an endpoint",
              "nudge": "True only for a monotonic function. sin <i>x</i> + cos <i>x</i> on [0, π/2] peaks at the interior point π/4, and the two endpoints both give the smaller value 1."
            },
            {
              "label": "occurs at a critical point or at an endpoint",
              "nudge": null
            },
            {
              "label": "must occur where <i>f</i>′(<i>x</i>) = 0",
              "nudge": "Twice too narrow: it drops the endpoints, and it also drops the corners. |<i>x</i>| on [−1, 2] takes its minimum at 0, where the derivative does not exist."
            }
          ],
          "solution": "Those are the only two kinds of place it can be, which is exactly why the working rule is a shortlist: every interior critical point, plus a and b. Nothing else is a candidate, and nothing on that list may be skipped."
        },
        {
          "t": "mcq",
          "q": "The minimum value of <i>f</i>(<i>x</i>) = <i>x</i> + 4/<i>x</i><sup>2</sup> for <i>x</i> > 0 is:",
          "correct": 0,
          "opts": [
            {
              "label": "3",
              "nudge": null
            },
            {
              "label": "4",
              "nudge": "This is <i>f</i>(1), from guessing <i>x</i> = 1 rather than solving. <i>f</i>′ = 1 − 8/<i>x</i><sup>3</sup> vanishes at <i>x</i><sup>3</sup> = 8, not at <i>x</i> = 1."
            },
            {
              "label": "2",
              "nudge": "That is the minimising <i>x</i>, reported instead of the minimum value. Substitute back: <i>f</i>(2) = 2 + 4/4 = 3."
            },
            {
              "label": "5",
              "nudge": "The answer to a neighbouring question, min of 3<i>x</i><sup>2</sup> + 2/<i>x</i><sup>3</sup>, which is 5 at <i>x</i> = 1. Different exponents give a different critical point."
            }
          ],
          "solution": "f′(x) = 1 − 8/x³ = 0 gives x = 2, and f″ = 24/x⁴ > 0. Both end-limits are +∞, at 0 from the 4/x² term and at infinity from the x term, so the local minimum is global: f(2) = 2 + 1 = 3. AM to GM on x/2, x/2 and 4/x² gives the same 3."
        },
        {
          "t": "mcq",
          "q": "Two positive numbers have sum 24. The greatest possible value of (one number) × (the other number)<sup>2</sup> is:",
          "correct": 0,
          "opts": [
            {
              "label": "2048",
              "nudge": null
            },
            {
              "label": "1728",
              "nudge": "This is 12 × 12<sup>2</sup>, from splitting the sum equally. Equal split maximises the plain product <i>xy</i>, not <i>xy</i><sup>2</sup>: the squared factor deserves the larger share."
            },
            {
              "label": "1024",
              "nudge": "16 × 8<sup>2</sup>, the right two numbers assigned the wrong way round. The number that gets squared must be the <b>bigger</b> one, 16."
            },
            {
              "label": "4096",
              "nudge": "16<sup>3</sup>, from squaring 16 and multiplying by 16 again instead of by 8. The two factors are different numbers summing to 24."
            }
          ],
          "solution": "Maximise x y² with x + y = 24, that is (24 − y)y² = 24y² − y³. The derivative 48y − 3y² = 3y(16 − y) vanishes at y = 16, so x = 8 and the value is 8 × 256 = 2048."
        },
        {
          "t": "mcq",
          "q": "The greatest volume of a right circular cone of slant height 3 m is:",
          "correct": 0,
          "opts": [
            {
              "label": "2√3 π m<sup>3</sup>",
              "nudge": null
            },
            {
              "label": "6√3 π m<sup>3</sup>",
              "nudge": "Exactly three times the answer: the 1/3 in <i>V</i> = (1/3)π<i>r</i><sup>2</sup><i>h</i> was dropped. That is a cylinder's formula, not a cone's."
            },
            {
              "label": "3√3 π m<sup>3</sup>",
              "nudge": "This keeps <i>r</i><sup>2</sup> = 9, as though the <b>radius</b> were fixed at 3. The slant is fixed, so <i>r</i><sup>2</sup> + <i>h</i><sup>2</sup> = 9 and <i>r</i><sup>2</sup> = 6 at the optimum."
            },
            {
              "label": "9π m<sup>3</sup>",
              "nudge": "This uses <i>r</i> = 3 <b>and</b> <i>h</i> = 3 at once, which would need a slant of 3√2. A right triangle cannot have both legs equal to its hypotenuse."
            }
          ],
          "solution": "With r² + h² = 9, V = (π/3)r²h = (π/3)(9h − h³). Then dV/dh = (π/3)(9 − 3h²) = 0 gives h = √3, and d²V/dh² = −2πh < 0 confirms a maximum. Then r² = 6 and V = (π/3)(6)(√3) = 2√3 π."
        },
        {
          "t": "mistakes",
          "items": [
            "Forgetting the endpoints. On [<i>a</i>, <i>b</i>] the global extreme very often sits at <i>a</i> or <i>b</i>, where the derivative is not zero and no test will look. <b>Evaluate <i>f</i> at the endpoints as well as the critical points</b>, then compare the whole list.",
            "Keeping an infeasible root. A root that makes a length negative or a volume zero is not an answer. <b>State the feasible domain before differentiating</b> and the rejection becomes automatic instead of a judgement call.",
            "Using the closed-interval rule on an open domain. On (0, ∞) there are no endpoints, so the rule returns nothing. Take the <b>limits</b> at both ends instead, and if both are +∞ the smallest critical value is the global minimum.",
            "Assuming an extremum exists. Some functions genuinely have none: <i>xe</i><sup>−x</sup> has no global minimum on ℝ. <b>“No global minimum” is a complete answer</b> when the limits say so, and it is examined.",
            "Answering with the variable you solved for. The question wants the volume, or the dimension, or the ratio. Finding <i>x</i> = 3 and stopping when the question asked for the box's volume gives away the last mark of a five-mark answer."
          ]
        },
        {
          "t": "protip",
          "html": "minimise the <b>square</b> of a distance, never the distance itself. squaring is increasing on the positives, so it moves no minimum, and it removes the square root that would otherwise make the derivative ugly. same trick on any objective wearing a square root, including an inscribed area. and check any closest-point answer against the normal test: the shortest segment from a point to a curve is always <b>perpendicular</b> to the curve."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "on [a, b]: compare f at interior critical points AND at a, b",
              "note": "no derivative test involved, just a shortlist"
            },
            {
              "f": "objective in one variable → domain → f′ = 0 → reject → confirm",
              "note": "the optimisation drill, in that order"
            },
            {
              "f": "open box, side a: V = x(a − 2x)<sup>2</sup>, max at x = a/6",
              "note": "a = 18 gives x = 3 and V = 432"
            },
            {
              "f": "cylinder in sphere R: h = 2R/√3 · cone: h = 4R/3",
              "note": "V = 4πR³/(3√3) and 32πR³/81"
            },
            {
              "f": "px + q/x on x > 0: minimum 2√(pq) at x = √(q/p)",
              "note": "calculus and AM to GM give the same thing"
            },
            {
              "f": "both end-limits +∞ ⇒ the global minimum is at a critical point",
              "note": "the replacement for the endpoint audit"
            }
          ],
          "aids": [
            "“the fence counts, not only the hills”",
            "“domain first, then the roots it forbids fall out”"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Rolle, the Mean Value Theorem and Root Counting",
      "chip": "06 MVT",
      "kalam": "count the branches, then count the sign changes",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 03 used a theorem it never proved: that <i>f</i>′ > 0 forces <i>f</i> to increase. The proof runs through <b>Lagrange's Mean Value Theorem</b>, which the rationalised CBSE syllabus deleted. JEE Main did not delete it. Direct questions, verify Rolle and find <i>c</i>, or use MVT to bound an expression, appear regularly, and JEE Advanced uses it as a root-existence tool. It costs one page to learn and it is the hidden engine under everything you have already been doing, so learn it here."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ROLLE'S THEOREM",
          "tag": "f continuous on [a, b], differentiable on (a, b), f(a) = f(b)",
          "main": "there exists c in (a, b) with f′(c) = 0",
          "legend": [
            "the three hypotheses are the examinable content: <b>continuity on the closed</b> interval, <b>differentiability on the open</b> one, and <b>equal endpoint values</b>",
            "a verification question wants all three checked, then the <i>c</i> produced by solving <i>f</i>′ = 0 and shown to lie <b>strictly inside</b> (<i>a</i>, <i>b</i>)",
            "roots of <i>f</i>′ that fall outside the interval must be found, named, and discarded out loud"
          ],
          "note": "|x| on [−1, 1] has equal endpoint values and no such c: the derivative is −1 on the left, +1 on the right and does not exist at 0. Differentiability on the open interval is not decoration, and examiners set traps precisely there."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY ROLLE IS TRUE, TAP A LINE",
          "steps": [
            {
              "eq": "a continuous f on [a, b] attains a maximum and a minimum",
              "why": "This is the only fact about continuity the proof needs, and it is exactly what makes the closed-interval working rule of topic 05 legitimate. Both extremes are attained somewhere on the interval; the question is only where."
            },
            {
              "eq": "if both sit at the endpoints, f(a) = f(b) forces f constant",
              "why": "The maximum and the minimum are then the same number, so f never varies and every c in the interval has f′(c) = 0. That case is finished, which leaves the interesting one: some extremum sits at an interior point c."
            },
            {
              "eq": "interior maximum at c ⇒ [f(c + h) − f(c)]/h ≤ 0 for h > 0, and ≥ 0 for h < 0",
              "why": "This is Fermat's lemma. The numerator is at most 0 either way, because f(c) is the largest nearby value. Dividing by a positive h keeps the sign; dividing by a negative h flips it. So the right-hand difference quotients are non-positive and the left-hand ones non-negative."
            },
            {
              "eq": "both one-sided limits equal f′(c), so f′(c) ≤ 0 and f′(c) ≥ 0",
              "why": "Differentiability at c is what forces the two one-sided limits to agree, and a number that is both at most 0 and at least 0 is 0. Hence f′(c) = 0. Notice where each hypothesis was spent: continuity bought the extremum, differentiability bought the squeeze, and f(a) = f(b) ruled out the endpoint case."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE MEAN VALUE THEOREM",
          "tag": "f continuous on [a, b], differentiable on (a, b)",
          "main": "f(b) − f(a) = f′(c)(b − a) for some c in (a, b)",
          "legend": [
            "read it as slopes: some tangent inside the interval is <b>parallel to the chord</b> joining the two endpoints",
            "Rolle is the special case <i>f</i>(<i>a</i>) = <i>f</i>(<i>b</i>), and MVT follows from Rolle by tilting the picture flat, applying it to φ(<i>x</i>) = <i>f</i>(<i>x</i>) − <i>f</i>(<i>a</i>) − μ(<i>x</i> − <i>a</i>) with μ the chord slope",
            "Cauchy's two-function version, which Advanced uses: (<i>f</i>(<i>b</i>) − <i>f</i>(<i>a</i>))/(<i>g</i>(<i>b</i>) − <i>g</i>(<i>a</i>)) = <i>f</i>′(<i>c</i>)/<i>g</i>′(<i>c</i>) when <i>g</i>′ never vanishes"
          ],
          "note": "This is the proof of topic 03's monotonicity theorem in one line: if f′ > 0 everywhere and x2 > x1, then f(x2) − f(x1) = f′(c)(x2 − x1) is a product of two positive numbers, so f(x2) > f(x1)."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE CHORD AND THE PARALLEL TANGENT, TAP ONE",
          "chips": [
            "Rolle, level chord",
            "MVT, tilted chord"
          ],
          "captions": [
            "f(x) = x³ − 3x on [0, √3]. The endpoints have equal values, f(0) = 0 and f(√3) = 3√3 − 3√3 = 0, so the dashed chord is horizontal. Rolle promises a horizontal tangent strictly inside, and f ′ = 3(x − 1)(x + 1) supplies it at c = 1. The other root, x = −1, lies outside the interval and is discarded.",
            "The same curve on [0, 2], where the endpoint values differ: f(0) = 0 and f(2) = 2, so the chord now has slope 1. MVT promises a tangent inside with that same slope 1, and 3c² − 3 = 1 gives c = 2/√3. Rolle is this picture with the chord laid flat, which is exactly how MVT is proved from it."
          ],
          "frames": [
            {
              "x": [
                -0.4,
                2.3
              ],
              "y": [
                -2.9,
                3.0
              ],
              "curves": [
                {
                  "c": "poly",
                  "coeffs": [
                    0,
                    -3,
                    0,
                    1
                  ]
                }
              ],
              "segments": [
                {
                  "from": [
                    0,
                    0
                  ],
                  "to": [
                    1.732,
                    0
                  ],
                  "dash": true
                },
                {
                  "from": [
                    0.42,
                    -2
                  ],
                  "to": [
                    1.58,
                    -2
                  ],
                  "dash": true
                }
              ],
              "points": [
                {
                  "x": 0,
                  "y": 0,
                  "label": "a"
                },
                {
                  "x": 1.732,
                  "y": 0,
                  "label": "b"
                },
                {
                  "x": 1,
                  "y": -2,
                  "label": "c"
                }
              ]
            },
            {
              "x": [
                -0.4,
                2.3
              ],
              "y": [
                -2.9,
                3.0
              ],
              "curves": [
                {
                  "c": "poly",
                  "coeffs": [
                    0,
                    -3,
                    0,
                    1
                  ]
                }
              ],
              "segments": [
                {
                  "from": [
                    0,
                    0
                  ],
                  "to": [
                    2,
                    2
                  ],
                  "dash": true
                },
                {
                  "from": [
                    0.55,
                    -2.53
                  ],
                  "to": [
                    1.75,
                    -1.33
                  ],
                  "dash": true
                }
              ],
              "points": [
                {
                  "x": 0,
                  "y": 0,
                  "label": "a"
                },
                {
                  "x": 2,
                  "y": 2,
                  "label": "b"
                },
                {
                  "x": 1.1547,
                  "y": -1.9245,
                  "label": "c"
                }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Hypothesis discipline is the whole of the marking scheme here. All of these theorems need <b>continuity on the closed</b> interval and <b>differentiability on the open</b> one. A corner like |<i>x</i>| at 0, or a hole like 1/<i>x</i> at 0, voids the contract, and examiners set traps precisely there. Note the asymmetry that makes the statement work: the endpoints only have to be approached continuously, so a function with a vertical tangent at an endpoint is still fair game."
        },
        {
          "t": "defgrid",
          "title": "Three consequences you will use constantly",
          "rows": [
            {
              "k": "f′ = 0 throughout",
              "v": "then <i>f</i> is <b>constant</b>: MVT gives <i>f</i>(<i>x</i><sub>2</sub>) − <i>f</i>(<i>x</i><sub>1</sub>) = <i>f</i>′(<i>c</i>)(<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>) = 0"
            },
            {
              "k": "|f′| ≤ M throughout",
              "v": "then |<i>f</i>(<i>b</i>) − <i>f</i>(<i>a</i>)| ≤ <i>M</i>|<i>b</i> − <i>a</i>|. Take absolute values in MVT"
            },
            {
              "k": "Between two zeros of f",
              "v": "lies a zero of <i>f</i>′. This is Rolle restated, and it is how root counts propagate"
            },
            {
              "k": "n distinct zeros of f",
              "v": "force at least <i>n</i> − 1 zeros of <i>f</i>′, at least <i>n</i> − 2 of <i>f</i>″, and so on down"
            },
            {
              "k": "A cubic with three real roots",
              "v": "has <i>p</i>′ with two distinct real roots and <i>p</i>″ with at least one"
            },
            {
              "k": "The standing corollary",
              "v": "with <i>a</i> = 1 and <i>b</i> = 1 + <i>x</i>, MVT on ln <i>t</i> gives <i>x</i>/(1 + <i>x</i>) < ln(1 + <i>x</i>) < <i>x</i> for <i>x</i> > 0"
            }
          ]
        },
        {
          "t": "p",
          "html": "The second job JEE hires this topic for is <b>counting roots</b>. Ask how many real solutions <i>x</i><sup>3</sup> − 3<i>x</i> + <i>k</i> = 0 has, and no formula will tell you. Monotonicity will. Between consecutive critical points the function is strictly monotonic, so on each such <b>branch</b> it can cross the axis <b>at most once</b>, and it crosses exactly once when its two end values have opposite signs. Count the branches, check the signs, add up."
        },
        {
          "t": "proc",
          "title": "The root-audit protocol",
          "steps": [
            "<b>Fix the domain and confirm continuity on each piece.</b> A vertical asymptote splits the count just as a hole splits a monotonicity claim, and each piece is audited separately.",
            "<b>Compute <i>f</i>′, find every critical point, and sort them.</b> These cut the domain into branches on each of which <i>f</i> is strictly monotonic.",
            "<b>On each branch, the graph meets the axis at most once.</b> That is the whole reason to bother with monotonicity: it converts a counting problem into a finite check.",
            "<b>Evaluate <i>f</i> at each critical point and take the limits at the ends of the domain.</b> A branch has exactly one root precisely when its two end values have <b>opposite signs</b>, and none when they agree.",
            "<b>Add the per-branch counts, and for a parameter find the boundaries.</b> The count changes exactly where an extremum value hits 0, so solve <i>f</i>(critical point) = 0 for the parameter and test the intervals it creates."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · x³ − 3x + k, TAP A VALUE OF k",
          "chips": [
            "k = 0",
            "k = 2",
            "k = 4"
          ],
          "captions": [
            "Three branches, cut by the critical points x = −1 and x = 1. The local maximum sits at k + 2 and the local minimum at k − 2, so here they are 2 and −2: one above the axis, one below. Every branch changes sign, so all three cross. Three distinct real roots, at 0 and ±√3.",
            "Raise the whole curve by 2 and the local minimum lands exactly on the axis. The left branch still crosses, the middle branch now touches instead of crossing, and the right branch never comes back down. Two distinct roots, one of them double: x³ − 3x + 2 = (x − 1)²(x + 2).",
            "Raise it further and the dip never reaches the axis: the local minimum is now 2, safely positive. Only the leftmost branch, rising from minus infinity, can cross at all. Exactly one real root, near x = −2.196. The count changes exactly where an extremum value passes through 0, which is at k = ±2."
          ],
          "frames": [
            {
              "x": [
                -2.7,
                2.4
              ],
              "y": [
                -4.5,
                8
              ],
              "curves": [
                {
                  "c": "poly",
                  "coeffs": [
                    0,
                    -3,
                    0,
                    1
                  ]
                }
              ],
              "points": [
                {
                  "x": -1,
                  "y": 2
                },
                {
                  "x": 1,
                  "y": -2
                }
              ],
              "labels": [
                {
                  "x": -0.15,
                  "y": 7.0,
                  "text": "max 2 above, min −2 below"
                }
              ]
            },
            {
              "x": [
                -2.7,
                2.4
              ],
              "y": [
                -4.5,
                8
              ],
              "curves": [
                {
                  "c": "poly",
                  "coeffs": [
                    2,
                    -3,
                    0,
                    1
                  ]
                }
              ],
              "points": [
                {
                  "x": -1,
                  "y": 4
                },
                {
                  "x": 1,
                  "y": 0
                },
                {
                  "x": -2,
                  "y": 0
                }
              ],
              "labels": [
                {
                  "x": -0.15,
                  "y": 7.0,
                  "text": "min 0: the dip just touches"
                }
              ]
            },
            {
              "x": [
                -2.7,
                2.4
              ],
              "y": [
                -4.5,
                8
              ],
              "curves": [
                {
                  "c": "poly",
                  "coeffs": [
                    4,
                    -3,
                    0,
                    1
                  ]
                }
              ],
              "points": [
                {
                  "x": -1,
                  "y": 6
                },
                {
                  "x": 1,
                  "y": 2
                }
              ],
              "labels": [
                {
                  "x": -0.15,
                  "y": 7.4,
                  "text": "min 2: the dip never reaches"
                }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE COMPARATIVE LEMMA",
          "tag": "f, g continuous on [a, β), differentiable on (a, β)",
          "main": "f(a) ≥ g(a) and f′ > g′ on (a, β) ⇒ f > g on (a, β)",
          "legend": [
            "the proof is one line: <i>h</i> = <i>f</i> − <i>g</i> has <i>h</i>(<i>a</i>) ≥ 0 and <i>h</i>′ > 0, so <i>h</i> is strictly increasing and <i>h</i>(<i>x</i>) > <i>h</i>(<i>a</i>) ≥ 0",
            "with only <i>f</i>′ ≥ <i>g</i>′ the conclusion weakens to <i>f</i> ≥ <i>g</i>. Track strictness honestly, because the marks follow it",
            "the anchor <i>a</i> is almost always 0, where both sides vanish. The lemma converts “compare derivatives” into “compare values”, one rung at a time"
          ],
          "note": "For a chain P < Q < R, prove each link separately and let a later link borrow an earlier one. The order is forced, not a matter of taste: see the derivation below, where the lower bound on sin x cannot be attempted until the upper bound is already in hand."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE SINE CHAIN MUST BE PROVED IN ORDER, TAP A LINE",
          "steps": [
            {
              "eq": "u(x) = sin x − x, u(0) = 0, u′ = cos x − 1 ≤ 0",
              "why": "The upper link first. The derivative is at most 0 and equals 0 only at the isolated points x = 2nπ, so by the sharpened monotonicity theorem u is strictly decreasing. Hence u(x) < u(0) = 0 for x > 0, which is sin x < x. Record it: the next link will consume it."
            },
            {
              "eq": "w(x) = sin x − x + x³/6, w(0) = 0, w′ = cos x − 1 + x²/2",
              "why": "The lower link. Whether w′ is positive is not obvious at all: cos x − 1 is negative and x²/2 is positive, and which wins is exactly the question. So build one more auxiliary function rather than guessing."
            },
            {
              "eq": "v(x) = cos x − 1 + x²/2, v(0) = 0, v′(x) = x − sin x",
              "why": "This is w′ given a name of its own. Its derivative is x − sin x, and x − sin x > 0 for x > 0 is precisely the upper link already proved. So v′ > 0, hence v is strictly increasing, hence v(x) > v(0) = 0."
            },
            {
              "eq": "v > 0 ⇒ w′ > 0 ⇒ w > 0 ⇒ x − x³/6 < sin x < x",
              "why": "The chain closes. Notice the dependency: the lower link is not merely harder than the upper one, it is unprovable before it, because its derivative certificate is the upper link itself. Recognising which auxiliary to prove first is the examined skill; the differentiation is routine."
            }
          ]
        },
        {
          "t": "p",
          "html": "One more Advanced habit, and it is the reason Rolle appears in questions that never mention derivatives. If a problem hands you a condition on a <b>sum of coefficients</b>, such as <i>a</i><sub>0</sub> + <i>a</i><sub>1</sub>/2 + <i>a</i><sub>2</sub>/3 + ⋯ = 0, look at those denominators: they are what integration produces. Build the antiderivative <i>F</i> whose derivative is the given polynomial, and the condition becomes <i>F</i>(1) = 0 while <i>F</i>(0) = 0 for free. Rolle then converts equal endpoint values into a root."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "Verify Rolle's theorem for <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> − 3<i>x</i> on [0, √3] and find the point <i>c</i>.",
          "steps": [
            "Hypotheses: <i>f</i> is a polynomial, so it is continuous on [0, √3] and differentiable on (0, √3).",
            "Endpoint values: <i>f</i>(0) = 0 and <i>f</i>(√3) = 3√3 − 3√3 = 0, so <i>f</i>(0) = <i>f</i>(√3).",
            "All three hypotheses hold, so Rolle promises a <i>c</i> in (0, √3) with <i>f</i>′(<i>c</i>) = 0.",
            "<i>f</i>′(<i>x</i>) = 3<i>x</i><sup>2</sup> − 3 = 3(<i>x</i> − 1)(<i>x</i> + 1), which vanishes at <i>x</i> = ±1. Only <i>c</i> = 1 lies in (0, √3); <i>x</i> = −1 is outside and is discarded."
          ],
          "ans": "Verified, with <i>c</i> = 1. Check all three hypotheses, not only the endpoint values"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "For 0 < <i>a</i> < <i>b</i>, prove that (<i>b</i> − <i>a</i>)/<i>b</i> < ln(<i>b</i>/<i>a</i>) < (<i>b</i> − <i>a</i>)/<i>a</i>.",
          "steps": [
            "Apply MVT to <i>f</i>(<i>t</i>) = ln <i>t</i> on [<i>a</i>, <i>b</i>], where it is continuous and differentiable since <i>a</i> > 0.",
            "There is a <i>c</i> in (<i>a</i>, <i>b</i>) with ln <i>b</i> − ln <i>a</i> = (1/<i>c</i>)(<i>b</i> − <i>a</i>), and the left side is ln(<i>b</i>/<i>a</i>).",
            "Now squeeze <i>c</i>. From <i>a</i> < <i>c</i> < <i>b</i>, taking reciprocals reverses the inequalities: 1/<i>b</i> < 1/<i>c</i> < 1/<i>a</i>.",
            "Multiply through by the positive number <i>b</i> − <i>a</i>."
          ],
          "ans": "Both bounds from one MVT application. Setting <i>a</i> = 1, <i>b</i> = 1 + <i>x</i> gives the standing favourite <i>x</i>/(1 + <i>x</i>) < ln(1 + <i>x</i>) < <i>x</i>"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN RISING TO ADVANCED",
          "q": "Determine the number of real roots of <i>x</i><sup>3</sup> − 3<i>x</i> + <i>k</i> = 0 as <i>k</i> ranges over ℝ.",
          "steps": [
            "<i>f</i>′ = 3(<i>x</i> − 1)(<i>x</i> + 1), so the critical points are <i>x</i> = −1, a maximum, and <i>x</i> = 1, a minimum, since <i>f</i>″ = 6<i>x</i>. Three branches.",
            "Extremum values: <i>f</i>(−1) = <i>k</i> + 2 and <i>f</i>(1) = <i>k</i> − 2. End behaviour: −∞ on the left, +∞ on the right.",
            "Left branch rises from −∞ to <i>k</i> + 2, so it crosses when <i>k</i> > −2. Middle branch falls from <i>k</i> + 2 to <i>k</i> − 2, so it crosses when −2 < <i>k</i> < 2. Right branch rises from <i>k</i> − 2, so it crosses when <i>k</i> < 2.",
            "Check the boundaries by factoring: at <i>k</i> = 2, <i>x</i><sup>3</sup> − 3<i>x</i> + 2 = (<i>x</i> − 1)<sup>2</sup>(<i>x</i> + 2); at <i>k</i> = −2 it is (<i>x</i> + 1)<sup>2</sup>(<i>x</i> − 2). Both match the audit."
          ],
          "ans": "Three distinct roots for −2 < <i>k</i> < 2 · two, one of them double, at <i>k</i> = ±2 · exactly one for |<i>k</i>| > 2"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Suppose <i>a</i><sub>0</sub> + <i>a</i><sub>1</sub>/2 + <i>a</i><sub>2</sub>/3 + ⋯ + <i>a</i><sub>n</sub>/(<i>n</i> + 1) = 0. Show that <i>a</i><sub>0</sub> + <i>a</i><sub>1</sub><i>x</i> + ⋯ + <i>a</i><sub>n</sub><i>x</i><sup>n</sup> = 0 has at least one root in (0, 1).",
          "steps": [
            "Nothing in the statement mentions a derivative, so build a function whose derivative <b>is</b> the polynomial. The denominators 2, 3, …, <i>n</i> + 1 are the giveaway.",
            "Let <i>F</i>(<i>x</i>) = <i>a</i><sub>0</sub><i>x</i> + <i>a</i><sub>1</sub><i>x</i><sup>2</sup>/2 + ⋯ + <i>a</i><sub>n</sub><i>x</i><sup>n+1</sup>/(<i>n</i> + 1). It is a polynomial, so it is continuous on [0, 1] and differentiable on (0, 1), and <i>F</i>′ is exactly the given polynomial.",
            "<i>F</i>(0) = 0 with no assumption at all, and <i>F</i>(1) = <i>a</i><sub>0</sub> + <i>a</i><sub>1</sub>/2 + ⋯ + <i>a</i><sub>n</sub>/(<i>n</i> + 1) = 0 by hypothesis.",
            "So <i>F</i>(0) = <i>F</i>(1) and Rolle applies verbatim: some <i>c</i> in (0, 1) has <i>F</i>′(<i>c</i>) = 0, which is the polynomial vanishing at <i>c</i>."
          ],
          "ans": "A root exists in (0, 1). The mark-winning move is reading the coefficient condition as <i>F</i>(1) = 0 for a deliberately built antiderivative"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[JEE Main] Verify Rolle's theorem for <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 4<i>x</i> + 3 on [1, 3] and find <i>c</i>.",
              "a": "Polynomial, so continuous on [1, 3] and differentiable on (1, 3). <i>f</i>(1) = 0 = <i>f</i>(3). Then <i>f</i>′ = 2<i>x</i> − 4 = 0 gives <b><i>c</i> = 2</b>, which lies inside (1, 3). Verified."
            },
            {
              "q": "[JEE Main] Explain why the MVT cannot be applied to <i>f</i>(<i>x</i>) = 1/<i>x</i> on [−1, 1], and show that its conclusion fails as well.",
              "a": "<i>f</i> is undefined at 0, which lies in [−1, 1], so it is not continuous on the closed interval and the hypothesis fails at once. The conclusion fails too: MVT would demand a <i>c</i> with <i>f</i>′(<i>c</i>) = (<i>f</i>(1) − <i>f</i>(−1))/2 = (1 − (−1))/2 = <b>1</b>, while <i>f</i>′(<i>x</i>) = −1/<i>x</i><sup>2</sup> is <b>negative</b> wherever it exists. The source argues this from Rolle and writes <i>f</i>(−1) = <i>f</i>(1) = −1, which is wrong: <i>f</i>(−1) = −1 but <i>f</i>(1) = +1, so Rolle was never in play. The honest contradiction is the secant slope 1 against a derivative that is never positive."
            },
            {
              "q": "[JEE Main] Using the MVT, prove that |tan <i>a</i> − tan <i>b</i>| ≥ |<i>a</i> − <i>b</i>| for all <i>a</i>, <i>b</i> in (−π/2, π/2).",
              "a": "Take <i>a</i> < <i>b</i> without loss. MVT on tan gives tan <i>b</i> − tan <i>a</i> = sec<sup>2</sup><i>c</i> (<i>b</i> − <i>a</i>) for some <i>c</i> between them. Since <b>sec<sup>2</sup><i>c</i> ≥ 1</b>, taking absolute values gives |tan <i>b</i> − tan <i>a</i>| ≥ |<i>b</i> − <i>a</i>|."
            },
            {
              "q": "[JEE Main] How many real roots does 2<i>x</i><sup>3</sup> − 9<i>x</i><sup>2</sup> + 12<i>x</i> − 3 = 0 have?",
              "a": "<i>f</i>′ = 6(<i>x</i> − 1)(<i>x</i> − 2), so the extremum values are <i>f</i>(1) = 2 and <i>f</i>(2) = 1, <b>both positive</b>. Left branch rises from −∞ to 2: one root. Middle falls from 2 to 1: none. Right rises from 1: none. <b>Exactly one real root.</b>"
            },
            {
              "q": "[JEE Advanced] Show that <i>xe</i><sup>x</sup> = 2 has exactly one real root.",
              "a": "Let <i>f</i> = <i>xe</i><sup>x</sup> − 2, so <i>f</i>′ = <i>e</i><sup>x</sup>(1 + <i>x</i>), negative for <i>x</i> < −1 and positive after. On (−∞, −1] <i>f</i> falls from the limit −2 (since <i>xe</i><sup>x</sup> → 0 from below) to <i>f</i>(−1) = −1/<i>e</i> − 2, staying negative: <b>no root</b>. On [−1, ∞) it rises from a negative value to +∞: <b>exactly one</b>. Total one."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "Rolle's theorem applied to <i>f</i>(<i>x</i>) = sin <i>x</i> on [0, π] produces:",
          "correct": 0,
          "opts": [
            {
              "label": "<i>c</i> = π/2",
              "nudge": null
            },
            {
              "label": "<i>c</i> = π/4",
              "nudge": "This is where sin and cos are <b>equal</b>, which is a different condition. Rolle asks for <i>f</i>′(<i>c</i>) = 0, that is cos <i>c</i> = 0, not cos <i>c</i> = sin <i>c</i>."
            },
            {
              "label": "<i>c</i> = π/3",
              "nudge": "The midpoint of an interval is not generally the answer, and π/3 is not even the midpoint of [0, π]. Solve cos <i>c</i> = 0 rather than guessing a familiar angle."
            },
            {
              "label": "no such <i>c</i>, since the hypotheses fail",
              "nudge": "All three hypotheses hold: sin is continuous and differentiable everywhere, and sin 0 = sin π = 0. There is nothing here to disqualify the theorem."
            }
          ],
          "solution": "sin is continuous on [0, π], differentiable on (0, π), and sin 0 = sin π = 0. So Rolle applies: f′(x) = cos x = 0 gives c = π/2, which lies inside the interval. The tangent at the crest of the sine arch is horizontal, exactly as the picture demands."
        },
        {
          "t": "mcq",
          "q": "The number of real roots of <i>x</i><sup>3</sup> − 3<i>x</i> + 4 = 0 is:",
          "correct": 0,
          "opts": [
            {
              "label": "1",
              "nudge": null
            },
            {
              "label": "2",
              "nudge": "Two roots would need an extremum value sitting exactly on the axis, which happens only at <i>k</i> = ±2. Here <i>k</i> = 4, so nothing touches."
            },
            {
              "label": "3",
              "nudge": "Three needs the local maximum above the axis <b>and</b> the local minimum below it. Here the minimum value is <i>k</i> − 2 = 2, comfortably above."
            },
            {
              "label": "0",
              "nudge": "A cubic always has at least one real root: it runs from −∞ to +∞ continuously, so it must cross. Zero is impossible for any odd-degree polynomial."
            }
          ],
          "solution": "With k = 4, f(−1) = k + 2 = 6 and f(1) = k − 2 = 2, both positive. Only the left branch, rising from −∞, can cross. Exactly one real root, near x = −2.196."
        },
        {
          "t": "mcq",
          "q": "On [−1, 1], Rolle's theorem <b>fails to apply</b> to:",
          "correct": 1,
          "opts": [
            {
              "label": "<i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup>",
              "nudge": "Every hypothesis holds: it is a polynomial and <i>f</i>(−1) = <i>f</i>(1) = 1. The theorem applies and delivers <i>c</i> = 0."
            },
            {
              "label": "<i>f</i>(<i>x</i>) = |<i>x</i>|",
              "nudge": null
            },
            {
              "label": "<i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 1",
              "nudge": "A polynomial with <i>f</i>(−1) = <i>f</i>(1) = 0. Adding a constant to <i>x</i><sup>2</sup> changes nothing that Rolle cares about, and <i>c</i> = 0 again."
            },
            {
              "label": "<i>f</i>(<i>x</i>) = cos <i>x</i>",
              "nudge": "Smooth everywhere, and cos is even so cos(−1) = cos 1. The theorem applies and <i>c</i> = 0 works, since sin 0 = 0."
            }
          ],
          "solution": "|x| is continuous on [−1, 1] and has equal endpoint values, but it is not differentiable at 0, which lies inside the open interval. The conclusion genuinely fails with the hypothesis: f′ is −1 on the left and +1 on the right and never 0."
        },
        {
          "t": "mcq",
          "q": "For any real <i>k</i>, the number of distinct real roots that 2<i>x</i><sup>3</sup> + 3<i>x</i> + <i>k</i> = 0 can have in [0, 1] is at most:",
          "correct": 0,
          "opts": [
            {
              "label": "one",
              "nudge": null
            },
            {
              "label": "two",
              "nudge": "Two roots in the interval would force a zero of <i>f</i>′ between them by Rolle. But <i>f</i>′ = 6<i>x</i><sup>2</sup> + 3 ≥ 3 is never zero anywhere, so there is no room for a second root."
            },
            {
              "label": "three",
              "nudge": "A cubic has three roots in ℂ, but the question is about distinct <b>real</b> roots inside [0, 1]. Strict monotonicity caps that count at one whatever the degree."
            },
            {
              "label": "none, for every <i>k</i>",
              "nudge": "Too strong in the other direction. Take <i>k</i> = −5: <i>f</i>(0) = −5 and <i>f</i>(1) = 0, so <i>x</i> = 1 is a root. The claim is a ceiling of one, not an absence."
            }
          ],
          "solution": "f′(x) = 6x² + 3 > 0 for every x, so f is strictly increasing on ℝ and therefore takes each value at most once. At most one root in [0, 1], for every k. This is the general principle: a strictly monotonic function cannot take the same value twice."
        },
        {
          "t": "mistakes",
          "items": [
            "Quoting Rolle without checking all three hypotheses. Equal endpoint values alone prove nothing: |<i>x</i>| on [−1, 1] has them and no horizontal tangent anywhere. <b>Continuity on the closed interval, differentiability on the open one, then the endpoint values</b>, in that order.",
            "Keeping a <i>c</i> that lies outside the interval. Rolle promises a point <b>strictly inside</b> (<i>a</i>, <i>b</i>). Solving <i>f</i>′ = 0 often gives several roots, and naming the discarded ones is part of the answer.",
            "Proving a chained inequality in the wrong order. For <i>x</i> − <i>x</i><sup>3</sup>/6 < sin <i>x</i> < <i>x</i>, the lower link's derivative certificate <b>is</b> the upper link. Attempt it first and the proof stalls with no way forward.",
            "Counting roots by looking only at the ends. A cubic runs from −∞ to +∞ whatever the constant, so end behaviour alone always says “at least one” and never distinguishes one from three. <b>The extremum values are what decide it.</b>",
            "Forgetting that a strictly monotonic function takes each value at most once. It is the cheapest root-count argument there is, and it settles a whole family of “show this cannot have two roots” questions in one line."
          ]
        },
        {
          "t": "protip",
          "html": "when a question hands you a condition on a <b>sum of coefficients</b> with denominators 1, 2, 3, …, stop and integrate. those denominators are what integration makes, so build <i>F</i> with <i>F</i>′ = the given polynomial, and the condition turns into <i>F</i>(1) = 0 = <i>F</i>(0). rolle finishes it. and for any “how many roots” question, draw the branch table before you compute anything: critical points, values there, limits at the ends. the answer falls out of the table."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "Rolle: f(a) = f(b) ⇒ f′(c) = 0 for some c in (a, b)",
              "note": "closed continuity, open differentiability, equal ends"
            },
            {
              "f": "MVT: f(b) − f(a) = f′(c)(b − a)",
              "note": "a tangent inside is parallel to the chord"
            },
            {
              "f": "f′ > 0 ⇒ f(x2) − f(x1) = f′(c)(x2 − x1) > 0",
              "note": "the missing proof of the monotonicity theorem"
            },
            {
              "f": "n zeros of f ⇒ at least n − 1 zeros of f′",
              "note": "Rolle iterated; how root counts propagate"
            },
            {
              "f": "root audit: branches, extremum values, end limits",
              "note": "each monotonic branch crosses at most once"
            },
            {
              "f": "x³ − 3x + k: 3 roots for |k| < 2, 2 at |k| = 2, 1 beyond",
              "note": "the count turns where an extremum value hits 0"
            }
          ],
          "aids": [
            "“check the hypotheses before you quote the theorem”",
            "“coefficients over 1, 2, 3 means build the antiderivative”"
          ]
        }
      ]
    }
  ]
};

export default ch12DerivativesApplications;
