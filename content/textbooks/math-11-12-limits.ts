/**
 * Chapter 12 · Limits and Derivatives. Mathematics, Class 11.
 *
 * Restructured from pages 918 to 985 of the Drona Class 11 Mathematics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md,
 * following math-11-01-sets.ts and math-11-03-trigonometry.ts for voice and
 * density.
 *
 * The source is three documents stacked: a typeset chapter of five subtopics
 * plus a Master Reference; a Round 1 Supplement (subtopic 06, Advanced Limit
 * Techniques, plus Addendum A on functional equations and Addendum B on
 * differentiability at a junction); and a Round 2 Addendum (subtopic 07,
 * Limits of Sequences). Six topics is the schema's ceiling, so the
 * supplementary material is folded into the topic it actually belongs to
 * rather than given topics of its own:
 *
 *   - Subtopic 06's shift substitution, x = a + h with the trigonometric shift
 *     identities, sits inside Topic 03. Every junction in that topic carries
 *     the fine print "the argument must go to 0", and the shift exists for no
 *     other reason than to satisfy it. Separating them would teach half an
 *     idea twice.
 *   - Subtopic 06's L'Hopital rule and Maclaurin expansions sit inside Topic
 *     05. Both need a derivative before they can even be stated, and Topic 05
 *     is the first place in the chapter where differentiating is fast. It also
 *     stops that topic being a bare list of rules: the rules earn their keep
 *     by paying limits back.
 *   - Subtopic 06's x → −∞ sign rule and its 0 × ∞ conversion sit inside Topic
 *     06, beside the limits-at-infinity machinery they extend.
 *   - Addendum A and Addendum B sit inside Topic 04. The source labels both as
 *     extensions of subtopic 03, and both are the first principle applied in
 *     exactly the places where the differentiation rules have nothing to act
 *     on: no formula for f, or two formulas meeting at a junction.
 *   - Subtopic 07 sits inside Topic 06. A sequence limit is a limit at
 *     infinity taken by hopping instead of sliding, and the bridge theorem
 *     that makes most sequence questions tractable hands the work straight
 *     back to that topic's degree rule.
 *
 * One deliberate omission, for altitude. The source's Round 2 material on
 * recursively defined sequences is kept only as far as the order of the
 * argument (monotone, then bounded, then the fixed point); the full induction
 * proofs are JEE Advanced enrichment that would thin the other five topics to
 * fit, and the order is the part that is actually examined.
 *
 * Two errors in the source, corrected here:
 *
 *   1. Subtopic 04, Section 6, Q3. The gloss on distractor (D) 12 says the
 *      student "doubles correctly but forgets u = 1 and uses u = 2", but
 *      3 × 2² × 2 is 24, not 12. The reading that actually produces 12 is
 *      3u² = 3 × 2² with u taken as 2 AND the inner derivative dropped
 *      altogether, which is what the nudge in Topic 05 says instead.
 *   2. Round 2 Addendum, Section 6, Q1. The third option is printed "(B)",
 *      duplicating the second. It must be "(C)", as the source's own distractor
 *      analysis confirms by discussing an option (C) that no line offers.
 *
 * Eight `diagram` blocks: seven `plot` and one `numberline`. Two notes for
 * whoever edits them. Chips and captions render as plain text, not markup, so
 * they carry no inline tags. And the first curve of a frame is drawn in ink
 * and every later one in amber unless it is `soft`, so the order of `curves`
 * decides which curve the eye reads first.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch12Limits: Chapter = {
  "chapter": "12",
  "title": "Limits and Derivatives",
  "subject": "Mathematics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "What a Limit Actually Is",
      "chip": "01 APPROACH",
      "kalam": "the destination, not the arrival",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · What a Limit Actually Is</b><br>This is the gateway to all of calculus, so its weight is felt everywhere. CBSE Boards ask a direct evaluation for 2 to 3 marks almost every year, and a “does the limit exist” one-sided question for 1 to 2. JEE Main carries 1 to 2 questions that are usually clean algebra of limits. JEE Advanced rarely asks it standing alone but assumes it silently inside continuity, differentiability and integration: get it shaky here and the whole calculus tower wobbles.<br><br><b>02 · Resolving the 0/0 Form</b><br>The most predictable board question in the chapter: a 0/0 rational limit cleared by factoring, or a surd cleared by its conjugate, lifted near-verbatim from NCERT for 2 to 3 marks. JEE Main runs the <b>“find <i>a</i> and <i>b</i> so that the limit is finite”</b> pattern most sessions, and the ratio form of the star limit is a ten-second question if you recognise it and a two-minute one if you do not.<br><br><b>03 · The Standard Limits</b><br>Guaranteed marks, and the highest-yield topic in the chapter. CBSE asks a direct trigonometric limit from the sin <i>x</i> / <i>x</i> family most years, and NCERT’s own exercise set carries lim<sub>x→π/2</sub> tan 2<i>x</i> / (<i>x</i> − π/2). JEE Main runs 1 to 2 every session, usually a junction disguised inside a larger expression, plus one 1<sup>∞</sup> problem. JEE Advanced assumes total fluency and never asks them nakedly.<br><br><b>04 · The Derivative from First Principle</b><br><b>“Find the derivative of <i>f</i> from first principle”</b> is a near-guaranteed CBSE question worth 2 to 3 marks every year. JEE Main tests the definition directly and disguised, as a difference quotient you are meant to recognise rather than expand. JEE Advanced leans on it for differentiability from the definition, for functional-equation problems where no formula exists to differentiate, and for the piecewise “find <i>a</i> and <i>b</i>” pattern.<br><br><b>05 · Rules of Differentiation</b><br>The computational engine. CBSE tests products and quotients directly for 3 to 4 marks. JEE Main uses these rules inside essentially every calculus question, and the single most punished slip in the paper is a dropped inner derivative. JEE Advanced assumes total fluency with the chain rule and expects the series expansions for higher-order 0/0 limits that nothing else cracks cleanly.<br><br><b>06 · Infinity, Jumps and Sequences</b><br>JEE Main reliably asks one limit-at-infinity question every session, and the sign trap in a surd as <i>x</i> → −∞ is one of the most dependable single-question traps in the paper. CBSE tests rational end behaviour and a greatest-integer or modulus existence case for 1 to 2 marks. JEE Advanced favours these inside assertion-reason and sandwich problems, and asks a sequence limit, usually a sum whose length grows, most years."
        },
        {
          "t": "p",
          "html": "You are on the highway from Jaipur to Delhi, watching the milestones tick down: 200 km, then 100, then 10, then 1, then 100 m. Long before the car physically reaches the Delhi border you know with total certainty where you are heading. The milestones are <b>pointing</b> at a destination. That destination is the <b>limit</b>, and notice what it does not depend on: whether you ever arrive, and what you find when you do."
        },
        {
          "t": "p",
          "html": "Say it plainly, because everything else in this chapter is a consequence. <b>The limit of <i>f</i>(<i>x</i>) as <i>x</i> → <i>a</i> is about the neighbourhood of <i>a</i>, not about the point <i>a</i> itself.</b> Take <i>f</i>(<i>x</i>) = (<i>x</i><sup>2</sup> − 1)/(<i>x</i> − 1). At <i>x</i> = 1 this is the forbidden 0/0 and the function is genuinely undefined. But walk <i>x</i> in from below and the readings run 1.9, 1.99, 1.999. Walk in from above and they run 2.1, 2.01, 2.001. Both columns are homing in on <b>2</b> even though <i>f</i>(1) does not exist, and the algebra agrees: for every <i>x</i> ≠ 1 the fraction is just <i>x</i> + 1, which heads to 2. A pothole, a missing point or a divide-by-zero at the destination changes nothing, because the milestones around it still point somewhere definite."
        },
        {
          "t": "p",
          "html": "Now picture a narrow lane in Chandni Chowk with one shop you want to reach. Two friends walk toward it, one from the left end of the lane and one from the right. If both end up standing at the same shop, the place you were heading is unambiguous and the limit <b>exists</b>. But suppose the lane forks just before the shop, and the left-walker lands at a sweet shop while the right-walker lands at a chai stall. There is now no single place you were heading, so the <b>limit does not exist</b>, even though each friend individually arrived somewhere."
        },
        {
          "t": "think",
          "html": "a limit asks where the milestones point, not whether you ever park at the gate. two friends, one shop: that is the whole existence test."
        },
        {
          "t": "def",
          "term": "Limit at a point",
          "html": "lim<sub>x→a</sub> <i>f</i>(<i>x</i>) = <i>L</i> means the values of <i>f</i>(<i>x</i>) can be made as close to <i>L</i> as you like by taking <i>x</i> close enough to <i>a</i>, <b>without ever taking <i>x</i> = <i>a</i></b>. The value <i>f</i>(<i>a</i>) may be undefined, or defined and different from <i>L</i>. The limit ignores it either way."
        },
        {
          "t": "def",
          "term": "The two one-sided limits",
          "html": "The <b>left-hand limit</b> lim<sub>x→a−</sub> <i>f</i>(<i>x</i>) is where <i>f</i> heads as <i>x</i> creeps up to <i>a</i> from values <b>smaller</b> than <i>a</i>. The <b>right-hand limit</b> lim<sub>x→a+</sub> <i>f</i>(<i>x</i>) is where it heads as <i>x</i> comes down from values <b>larger</b> than <i>a</i>. Writing the increment as <i>h</i> → 0 through positive values, LHL = lim<sub>h→0</sub> <i>f</i>(<i>a</i> − <i>h</i>) and RHL = lim<sub>h→0</sub> <i>f</i>(<i>a</i> + <i>h</i>)."
        },
        {
          "t": "formula",
          "kicker": "THE EXISTENCE TEST",
          "tag": "the meeting rule, and the only one",
          "main": "lim f(x) = L ⟺ LHL = RHL = L, finite",
          "legend": [
            "the plain lim<sub>x→a</sub> is two-sided by default: one friend reaching the shop is never enough",
            "both words matter. LHL ≠ RHL is a jump and there is no limit; either side running off to ±∞ is no finite limit either"
          ],
          "note": "Every existence question in the whole chapter, including whether a derivative exists, is this one line applied to a different function."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · FOUR POINTS, FOUR VERDICTS",
          "chips": ["VALUE AND LIMIT AGREE", "A HOLE AT THE POINT", "A JUMP", "VALUE OFF THE CURVE"],
          "captions": [
            "The comfortable case. The curve runs through the point, so approaching x = 1 from either side lands on 2, and f(1) is 2 as well. Limit and value agree. This is what direct substitution is quietly assuming every time you use it.",
            "Punch the point out. The function is now undefined at x = 1, and nothing else about the picture changed. Both friends still walk to the same height 2, so the limit is still 2. This is exactly the (x² − 1)/(x − 1) situation: a 0/0 form is a hole in a curve, not a wall.",
            "A jump. The left piece arrives at height 1 and the right piece starts at height 3, and both dots are hollow because neither side owns the point. LHL = 1, RHL = 3, they disagree, so the limit does not exist. Fare meters and electricity slabs make this shape for a living.",
            "The nastiest of the four, because nothing is missing. The curve heads to 2 from both sides, so the limit is 2; but the function has been defined at x = 1 to be 0, sitting off the curve entirely. The limit is 2 and the value is 0, and confusing the two is the single most common conceptual error in the chapter."
          ],
          "frames": [
            {
              "x": [-1, 3],
              "y": [-1, 4.5],
              "curves": [{ "c": "line", "m": 1, "k": 1 }],
              "points": [{ "x": 1, "y": 2, "label": "f(1) = 2" }],
              "segments": [
                { "from": [1, -1], "to": [1, 2], "dash": true, "soft": true },
                { "from": [-1, 2], "to": [1, 2], "dash": true, "soft": true }
              ]
            },
            {
              "x": [-1, 3],
              "y": [-1, 4.5],
              "curves": [{ "c": "line", "m": 1, "k": 1 }],
              "points": [{ "x": 1, "y": 2, "label": "limit 2", "open": true }],
              "segments": [
                { "from": [1, -1], "to": [1, 2], "dash": true, "soft": true },
                { "from": [-1, 2], "to": [1, 2], "dash": true, "soft": true }
              ],
              "labels": [{ "x": 2.1, "y": 0.4, "text": "no value here", "soft": true }]
            },
            {
              "x": [-1, 3],
              "y": [-1, 4.5],
              "segments": [
                { "from": [-1, -1], "to": [1, 1] },
                { "from": [1, 3], "to": [2.5, 4.5] }
              ],
              "points": [
                { "x": 1, "y": 1, "label": "LHL = 1", "open": true },
                { "x": 1, "y": 3, "label": "RHL = 3", "open": true }
              ]
            },
            {
              "x": [-1, 3],
              "y": [-1, 4.5],
              "curves": [{ "c": "line", "m": 1, "k": 1 }],
              "points": [
                { "x": 1, "y": 2, "label": "limit 2", "open": true },
                { "x": 1, "y": 0, "label": "f(1) = 0" }
              ]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "numberline",
          "kicker": "DIAGRAM · TWO FRIENDS, ONE LANE",
          "chips": ["FROM THE LEFT", "FROM THE RIGHT", "BOTH SIDES AT ONCE", "THE PUNCTURED NEIGHBOURHOOD"],
          "captions": [
            "The left-hand approach. The input walks up towards a = 2 through 1.9, 1.99, 1.999 and never reaches it, which is what the hollow end means. Whatever height the outputs settle onto along this walk is the LHL.",
            "The right-hand approach. Now the input comes down through 2.1, 2.01, 2.001, again never arriving. This walk produces the RHL, and it is a completely separate question from the first one.",
            "Both walks drawn together. The limit exists precisely when these two produce the same finite height. Nothing in either walk ever touches the point itself, which is why the limit cannot possibly depend on the value there.",
            "What the limit actually looks at: a punctured neighbourhood, a small interval around a with the point a itself removed. Shrink it as far as you like and the picture never changes shape. This is the reason f(a) is irrelevant, stated as a diagram."
          ],
          "frames": [
            {
              "x": [0, 4],
              "intervals": [{ "from": 0.3, "to": 1.94, "openRight": true, "label": "x → 2 from below" }],
              "points": [{ "x": 2, "y": 0, "label": "a" }]
            },
            {
              "x": [0, 4],
              "intervals": [{ "from": 2.06, "to": 3.7, "openLeft": true, "label": "x → 2 from above" }],
              "points": [{ "x": 2, "y": 0, "label": "a" }]
            },
            {
              "x": [0, 4],
              "intervals": [
                { "from": 0.3, "to": 1.94, "openRight": true, "label": "LHL" },
                { "from": 2.06, "to": 3.7, "openLeft": true, "label": "RHL" }
              ],
              "points": [{ "x": 2, "y": 0, "label": "a" }]
            },
            {
              "x": [0, 4],
              "intervals": [
                { "from": 1.45, "to": 1.97, "openRight": true },
                { "from": 2.03, "to": 2.55, "openLeft": true }
              ],
              "points": [{ "x": 2, "y": 0, "label": "a removed", "open": true }]
            }
          ]
        },
        {
          "t": "p",
          "html": "Three things kill a limit, and it is worth naming them separately. A <b>jump</b>, where the two sides settle on different heights. A <b>blow-up</b>, where one side runs off to +∞ or −∞ and there is no finite destination to report. And <b>oscillation</b>: sin(1/<i>x</i>) near <i>x</i> = 0 swings between −1 and 1 forever, faster and faster, never settling on anything. It never blows up and it never jumps, and it still has no limit, because the milestones point at nothing."
        },
        {
          "t": "defgrid",
          "title": "Algebra of limits, when both are finite",
          "rows": [
            {
              "k": "Sum, difference",
              "v": "lim(<i>f</i> ± <i>g</i>) = <i>L</i> ± <i>M</i>"
            },
            {
              "k": "Scalar multiple",
              "v": "lim(<i>k f</i>) = <i>kL</i>"
            },
            {
              "k": "Product",
              "v": "lim(<i>f</i> · <i>g</i>) = <i>L</i> · <i>M</i>"
            },
            {
              "k": "Quotient",
              "v": "lim(<i>f</i> / <i>g</i>) = <i>L</i> / <i>M</i>, <b>provided <i>M</i> ≠ 0</b>"
            },
            {
              "k": "Power",
              "v": "lim(<i>f</i>)<sup>n</sup> = <i>L</i><sup>n</sup>"
            },
            {
              "k": "Why they are legal",
              "v": "a limit is a destination. If <i>f</i> heads to <i>L</i> and <i>g</i> heads to <i>M</i>, near <i>a</i> both are arbitrarily close to their targets, so the destinations simply combine."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "DIRECT SUBSTITUTION, AND WHEN IT IS LEGAL",
          "tag": "always try this first",
          "main": "lim p(x) = p(a) · lim p(x)/q(x) = p(a)/q(a) if q(a) ≠ 0",
          "legend": [
            "<i>p</i>, <i>q</i> polynomials. A polynomial has no holes anywhere, so substitution is exact, never an approximation",
            "the quotient rule’s one caveat does all the work here: <i>q</i>(<i>a</i>) = 0 is precisely where the heavy machinery of Topic 02 starts"
          ],
          "note": "A clean number means you are finished in one line. Only an indeterminate answer earns the factoring, the conjugate or a standard limit."
        },
        {
          "t": "proc",
          "title": "Deciding whether a limit exists",
          "steps": [
            "<b>Substitute first, always.</b> A clean finite number is the answer and there is nothing more to do. Skipping this step is how students spend two minutes factoring a limit that direct substitution settles.",
            "<b>If the answer is 0/0, do not stop.</b> That is not zero and not “does not exist”. It is an <i>indeterminate form</i>, an instruction to resolve, and Topic 02 is entirely about how.",
            "<b>If the function is built in pieces, split.</b> A modulus, a greatest-integer bracket, a signum or an explicit piecewise definition means you compute the LHL and the RHL separately, from the rule that applies on that side. Never substitute blindly into a jump.",
            "<b>Compare.</b> Equal and finite means the limit exists and equals that common value. Different, or infinite, means it does not.",
            "<b>Ignore <i>f</i>(<i>a</i>) throughout.</b> It can be missing, or present and different, and neither fact changes a single line of the work above."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Show that lim<sub>x→0</sub> |<i>x</i>|/<i>x</i> does not exist.",
          "steps": [
            "The modulus is built in two pieces, so split by sign rather than substituting.",
            "For <i>x</i> > 0, |<i>x</i>| = <i>x</i>, so the RHL is lim <i>x</i>/<i>x</i> = 1.",
            "For <i>x</i> < 0, |<i>x</i>| = −<i>x</i>, so the LHL is lim (−<i>x</i>)/<i>x</i> = −1.",
            "LHL = −1 and RHL = 1 are both perfectly finite, and they disagree."
          ],
          "ans": "LHL ≠ RHL, so lim|x|/x does not exist at 0"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Evaluate lim<sub>x→2</sub> (<i>x</i><sup>3</sup> + 3<i>x</i> − 1)/(<i>x</i> + 1).",
          "steps": [
            "Check the denominator at <i>x</i> = 2 first: 2 + 1 = 3, which is not zero. So this is a rational function at a legal point.",
            "Direct substitution is exact: numerator = 8 + 6 − 1 = 13, denominator = 3."
          ],
          "ans": "13/3"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Let <i>f</i>(<i>x</i>) = 3<i>x</i> − 1 for <i>x</i> < 1 and <i>ax</i> + <i>b</i> for <i>x</i> ≥ 1. Find the relation between <i>a</i> and <i>b</i> for which lim<sub>x→1</sub> <i>f</i>(<i>x</i>) exists, and state that common value.",
          "steps": [
            "LHL: just below 1 the first rule applies, so LHL = 3(1) − 1 = 2.",
            "RHL: just above 1 the second rule applies, so RHL = <i>a</i> + <i>b</i>.",
            "Existence needs them equal, so <i>a</i> + <i>b</i> = 2 and the common value is 2. Note what the question never asked about: <i>f</i>(1), which is <i>a</i> + <i>b</i> here and plays no part in the existence argument."
          ],
          "ans": "The limit exists when a + b = 2, and then it equals 2"
        },
        {
          "t": "mcq",
          "q": "A graph has lim<sub>x→a−</sub> <i>f</i>(<i>x</i>) = 5, lim<sub>x→a+</sub> <i>f</i>(<i>x</i>) = 5 and <i>f</i>(<i>a</i>) = 2. Then lim<sub>x→a</sub> <i>f</i>(<i>x</i>) is:",
          "correct": 1,
          "opts": [
            {
              "label": "2",
              "nudge": "This reports the function value instead of the limit, the single most common conceptual error in the chapter. The limit never looks at f(a)."
            },
            {
              "label": "5",
              "nudge": null
            },
            {
              "label": "does not exist",
              "nudge": "This assumes that f(a) differing from the limit destroys it. It does not: both sides agree at 5, which is the entire test."
            },
            {
              "label": "7/2",
              "nudge": "This invents an averaging rule between the limit and the value. No such rule exists anywhere in the chapter."
            }
          ],
          "solution": "Both one-sided limits equal 5, so the limit is 5. The value f(a) = 2 is irrelevant to it, and a picture of exactly this sits in the fourth frame of the figure above."
        },
        {
          "t": "mcq",
          "q": "Substituting <i>x</i> = 3 into (<i>x</i><sup>2</sup> − 9)/(<i>x</i><sup>2</sup> − 5<i>x</i> + 6) gives 0/0. This tells you that:",
          "correct": 2,
          "opts": [
            {
              "label": "the limit is 0",
              "nudge": "This reads the numerator going to 0 and stops, ignoring that the denominator is going to 0 at exactly the same time."
            },
            {
              "label": "the limit does not exist",
              "nudge": "This is the trap for students who think every 0/0 is a failure. Here the limit is a perfectly ordinary 6."
            },
            {
              "label": "the limit must be resolved by algebra",
              "nudge": null
            },
            {
              "label": "the limit is 1",
              "nudge": "This cancels the leading x² on top and bottom, which is not a legal move at a finite point: it throws away the very terms that decide the answer."
            }
          ],
          "solution": "0/0 is an indeterminate form, which means the arithmetic has not decided anything and you must. Factoring gives (x − 3)(x + 3) over (x − 2)(x − 3), and cancelling leaves (x + 3)/(x − 2) → 6."
        },
        {
          "t": "mcq",
          "q": "Which of these limits fails to exist?",
          "correct": 2,
          "opts": [
            {
              "label": "lim<sub>x→0</sub> |<i>x</i>|",
              "nudge": "The modulus itself is continuous everywhere. Both sides head to 0, so this limit is a perfectly ordinary 0. It is |x|/x that fails, not |x|."
            },
            {
              "label": "lim<sub>x→1</sub> (<i>x</i><sup>2</sup> − 1)/(<i>x</i> − 1)",
              "nudge": "A hole is not a failure. The function is undefined at 1 and the limit is still 2, which is the whole point of the neighbourhood idea."
            },
            {
              "label": "lim<sub>x→0</sub> sin(1/<i>x</i>)",
              "nudge": null
            },
            {
              "label": "lim<sub>x→2</sub> (<i>x</i> + 3)",
              "nudge": "A polynomial has no holes anywhere, so substitution is exact and the limit is 5."
            }
          ],
          "solution": "As x → 0 the angle 1/x runs off to infinity, so sin(1/x) swings between −1 and 1 forever, faster and faster, and never settles. Oscillation kills a limit without any jump and without any blow-up."
        },
        {
          "t": "mcq",
          "q": "For <i>f</i>(<i>x</i>) = [<i>x</i>] − <i>x</i> with [ · ] the greatest integer function, the statement “substitute <i>x</i> = 2 to get the limit” is wrong because:",
          "correct": 3,
          "opts": [
            {
              "label": "the function is undefined at <i>x</i> = 2",
              "nudge": "It is perfectly well defined there: [2] − 2 = 0. A defined value is not the same thing as a valid substitution."
            },
            {
              "label": "the limit is always the value for a bracket function",
              "nudge": "This is backwards, and it is the belief the question is testing. At an integer the bracket function is exactly where value and limit part company."
            },
            {
              "label": "greatest integer is not a real function",
              "nudge": "It is a genuine function on all of ℝ; it simply happens to be built in pieces, one flat step per integer interval."
            },
            {
              "label": "the rule changes at <i>x</i> = 2, so LHL and RHL must be computed separately",
              "nudge": null
            }
          ],
          "solution": "Just below 2 the bracket reads 1 and just above it reads 2, so the two sides run on different rules. Any function built in pieces, [x], |x|, signum or an explicit piecewise definition, is a split-into-two-ends problem and never a substitution problem."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Evaluate lim<sub>x→1</sub> (<i>x</i><sup>2</sup> + 5<i>x</i> + 6)/(<i>x</i> + 2).",
              "a": "Denominator at 1 is 3 ≠ 0, so substitute: (1 + 5 + 6)/3 = 12/3 = 4."
            },
            {
              "q": "[CBSE] For <i>f</i>(<i>x</i>) = <i>x</i> + 1 with <i>f</i>(2) defined separately to be 7, find lim<sub>x→2</sub> <i>f</i>(<i>x</i>).",
              "a": "3. Both sides walk to 3 along the line, and the redefined value at the single point 2 changes nothing the limit can see."
            },
            {
              "q": "[CBSE] Evaluate lim<sub>x→0</sub> <i>x</i>/|<i>x</i>|, or show it does not exist.",
              "a": "RHL = x/x = 1 and LHL = x/(−x) = −1. They disagree, so it does not exist. Note this is the reciprocal of the worked example and fails for the same reason."
            },
            {
              "q": "[JEE Main] Let <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> for <i>x</i> ≤ 2 and 3<i>x</i> + <i>k</i> for <i>x</i> > 2. For what <i>k</i> does lim<sub>x→2</sub> <i>f</i>(<i>x</i>) exist?",
              "a": "LHL = 4, RHL = 6 + k. Equal gives k = −2, and the common limit is then 4."
            },
            {
              "q": "[JEE Main] A student writes “lim<sub>x→0</sub> 1/<i>x</i> = ∞, so the limit exists and equals ∞”. What is wrong with each half of that sentence?",
              "a": "Both halves. The one-sided limits disagree in sign, +∞ from the right and −∞ from the left, so even the ∞ is wrong. And “limit = ∞” describes how a limit fails, it never asserts that one exists: a limit is a finite number by definition."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Confusing <b>lim<sub>x→a</sub> <i>f</i>(<i>x</i>)</b> with <b><i>f</i>(<i>a</i>)</b>. The limit is the destination, the value is whether you arrive, and they differ constantly. Highest-yield error in the whole chapter.",
            "Treating <b>0/0 as a final answer</b>. It is not zero and it is not “does not exist”. It is an instruction to factor, rationalise or route through a standard limit.",
            "Using the <b>quotient rule when the denominator’s limit is 0</b>. The rule needs <i>M</i> ≠ 0, and skipping that check lets you prove nonsense.",
            "<b>Substituting into a jump.</b> For [<i>x</i>], |<i>x</i>|/<i>x</i>, signum or any piecewise definition, you must split into LHL and RHL. Direct substitution is meaningless there.",
            "Reporting <b>one side as the answer</b>. A single one-sided limit is never the limit unless you have checked that the other side agrees."
          ]
        },
        {
          "t": "protip",
          "html": "substitute first, every single time. a clean number means you are done in one line and the whole factoring performance was never needed. and the moment you see a modulus, a bracket or a piecewise brace, stop reading and write “LHL” and “RHL” as two headings before you compute anything."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "limit = destination, not arrival",
              "note": "f(a) is irrelevant, missing or not"
            },
            {
              "f": "lim f = L ⟺ LHL = RHL = L, finite",
              "note": "the existence test, used all chapter"
            },
            {
              "f": "LHL = lim f(a − h) · RHL = lim f(a + h), h → 0",
              "note": "how one-sided limits are computed"
            },
            {
              "f": "sum, difference, product, power split freely",
              "note": "quotient needs the denominator limit ≠ 0"
            },
            {
              "f": "jump · blow-up · oscillation",
              "note": "the only three ways a limit dies"
            }
          ],
          "aids": [
            "“the limit cares about the neighbours, not the house”",
            "“steps and bars and bends, split it into two ends”"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Resolving the 0/0 Form",
      "chip": "02 RESOLVE",
      "kalam": "zero over zero means do more, not done",
      "blocks": [
        {
          "t": "p",
          "html": "Substitute and you get 0/0. Almost every student reads that as bad news. It is the opposite: 0/0 is a <b>receipt</b>. It is the arithmetic telling you that the same factor sits in the numerator and the denominator, waiting to be collected. A limit that substitutes cleanly is finished; a limit that returns 0/0 has just handed you the key to itself."
        },
        {
          "t": "p",
          "html": "Here is why the key is always there. If putting <i>x</i> = <i>a</i> makes the numerator zero, then <i>x</i> = <i>a</i> is a <b>root</b> of that polynomial, and the factor theorem says (<i>x</i> − <i>a</i>) divides it. The same sentence applies to the denominator. So a 0/0 at <i>x</i> = <i>a</i> is a promise, in writing, that (<i>x</i> − <i>a</i>) is a common factor of both. You are not hunting; you are collecting something you already know is there."
        },
        {
          "t": "p",
          "html": "And cancelling it is legal, which surprises people who were taught never to divide by something that might be zero. Throughout the limit <i>x</i> is close to <i>a</i> and <b>never equal to it</b>, so (<i>x</i> − <i>a</i>) is a genuinely non-zero number the whole way in. Cancelling produces a different function, one that agrees with the original everywhere except at the single point <i>a</i>, and Topic 01 already proved the limit cannot tell those two functions apart."
        },
        {
          "t": "think",
          "html": "a 0/0 is not a verdict, it is a receipt saying there is a common factor to collect. and the receipt is issued by the factor theorem, not by luck."
        },
        {
          "t": "def",
          "term": "Indeterminate form",
          "html": "An expression whose limit is <b>not decided</b> by the limits of its parts. 0/0 is the headline case: two things both heading to zero can produce any ratio at all, depending entirely on <i>how fast</i> each one gets there. The form tells you which tool to reach for, never what the answer is."
        },
        {
          "t": "defgrid",
          "title": "The forms that decide nothing",
          "rows": [
            {
              "k": "0/0",
              "v": "factor and cancel, or rationalise, or route through a standard limit"
            },
            {
              "k": "∞/∞",
              "v": "divide by the highest power, or use the degree rule (Topic 06)"
            },
            {
              "k": "∞ − ∞",
              "v": "combine over a common denominator, or multiply by the conjugate"
            },
            {
              "k": "0 × ∞",
              "v": "move one factor downstairs as its reciprocal, turning it into 0/0 or ∞/∞"
            },
            {
              "k": "1<sup>∞</sup>",
              "v": "lift to an exponential, lim <i>f</i><sup>g</sup> = <i>e</i><sup>lim g(f−1)</sup> (Topic 03)"
            },
            {
              "k": "Not indeterminate",
              "v": "0/5 is 0. 5/0 is a blow-up, not a 0/0. 0<sup>∞</sup> is 0. Only the five rows above earn the machinery."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE STAR ALGEBRAIC LIMIT",
          "tag": "memorise it, you will reuse it all year",
          "main": "lim (xⁿ − aⁿ)/(x − a) = n aⁿ⁻¹   as x → a",
          "legend": [
            "valid for every rational <i>n</i>, with <i>a</i> > 0 when <i>n</i> is not an integer",
            "read it backwards and it is the derivative of <i>x</i><sup>n</sup>, which is exactly how Topic 04 gets that result for nothing"
          ],
          "note": "The single most reused limit in the chapter. Spotting the shape (something)ⁿ minus (the same thing)ⁿ over the plain difference is worth more marks than any amount of expanding."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHERE n aⁿ⁻¹ COMES FROM, TAP A LINE",
          "steps": [
            {
              "eq": "at x = a the ratio is 0/0",
              "why": "Both xⁿ − aⁿ and x − a vanish at x = a. So there is a common factor of (x − a), and the entire job is to expose it and remove it."
            },
            {
              "eq": "xⁿ − aⁿ = (x − a)(xⁿ⁻¹ + xⁿ⁻²a + xⁿ⁻³a² + ⋯ + aⁿ⁻¹)",
              "why": "x = a is a root of xⁿ − aⁿ, so the factor theorem guarantees (x − a) divides it. This identity is the one you already met as a² − b² and a³ − b³, written out for a general n."
            },
            {
              "eq": "cancel (x − a): xⁿ⁻¹ + xⁿ⁻²a + ⋯ + aⁿ⁻¹",
              "why": "Legal because x ≠ a throughout the limit process, only x → a. What is left has no hole in it at all, which is why substitution now works."
            },
            {
              "eq": "substitute x = a: n copies of aⁿ⁻¹",
              "why": "Count the terms. The power of x runs from n − 1 down to 0, so there are exactly n of them, and at x = a every single one becomes aⁿ⁻¹."
            },
            {
              "eq": "so the limit is n aⁿ⁻¹",
              "why": "The result extends to all rational n; the algebraic proof for fractional n substitutes x = a tᵏ, but the formula is what you apply in a paper. Sanity check on any use: put n = 1 and you should get 1, put a = 1 and you should get n."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Procedure A, a rational 0/0 by factoring",
          "steps": [
            "<b>Substitute <i>x</i> = <i>a</i>.</b> A clean number ends it here. Declare the 0/0 out loud in your script if you get one, because boards award a method mark for spotting the form.",
            "<b>Read the 0/0 as a promise</b> that (<i>x</i> − <i>a</i>) divides the numerator and the denominator. You now know what you are looking for before you start looking.",
            "<b>Factor it out of both</b>, by splitting the middle term, by the factor theorem, or by long division for a cubic.",
            "<b>Cancel the common (<i>x</i> − <i>a</i>)</b>, which is legal because <i>x</i> ≠ <i>a</i> inside a limit.",
            "<b>Re-substitute <i>x</i> = <i>a</i></b> into what survives. If you still get 0/0, the factor was repeated: cancel again."
          ]
        },
        {
          "t": "proc",
          "title": "Procedure B, a surd 0/0 by rationalising",
          "steps": [
            "<b>Spot the shape.</b> You substituted, you got 0/0, and a square root is standing in the way of any factoring.",
            "<b>Multiply and divide by the conjugate</b> of the surd part. If the numerator is √<i>p</i> − √<i>q</i>, multiply top and bottom by √<i>p</i> + √<i>q</i>.",
            "<b>Use (√<i>p</i> − √<i>q</i>)(√<i>p</i> + √<i>q</i>) = <i>p</i> − <i>q</i></b> to clear the root. The difference that appears is where the cancellable factor was hiding.",
            "<b>Cancel and substitute.</b> The conjugate you multiplied in is now a harmless sum of two roots, and substituting into it is safe because it does not vanish."
          ]
        },
        {
          "t": "formula",
          "kicker": "THE TEN-SECOND SHORTCUT",
          "tag": "only at x → 1, never anywhere else",
          "main": "lim (xᵐ − 1)/(xⁿ − 1) = m/n  as x → 1",
          "legend": [
            "it is the star limit used twice, once on top and once below, with <i>a</i> = 1: (<i>m</i> · 1<sup>m−1</sup>)/(<i>n</i> · 1<sup>n−1</sup>) = <i>m</i>/<i>n</i>",
            "around any other point the 1s do not collapse and you must run the full <i>n a</i><sup>n−1</sup> ratio"
          ],
          "note": "This is why a degree-18 over degree-12 problem is a ten-second question and never a factoring exercise. It is also the most misapplied line in the chapter: check that the point really is 1 before you use it."
        },
        {
          "t": "p",
          "html": "One more pattern, and it is JEE Main’s favourite. You are told the limit of a fraction is a <b>finite number</b> and you can see that the denominator vanishes at the point. Then the numerator has no choice: it must vanish there too. If it did not, you would have a non-zero number over zero, which blows up rather than settling. That single sentence, <b>“for a finite limit with a vanishing denominator, the numerator must also vanish”</b>, converts a two-unknown problem into an equation you can write down in one line."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Evaluate lim<sub>x→3</sub> (<i>x</i><sup>2</sup> − 2<i>x</i> − 3)/(<i>x</i> − 3).",
          "steps": [
            "Substitute: numerator = 9 − 6 − 3 = 0, denominator = 0. Declare the form 0/0.",
            "The 0/0 promises (<i>x</i> − 3) on top: <i>x</i><sup>2</sup> − 2<i>x</i> − 3 = (<i>x</i> − 3)(<i>x</i> + 1).",
            "Cancel and substitute: lim (<i>x</i> + 1) = 4."
          ],
          "ans": "4"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Evaluate lim<sub>x→0</sub> (√(4 + <i>x</i>) − 2)/<i>x</i>.",
          "steps": [
            "Substitution gives (2 − 2)/0 = 0/0, and there is a root blocking any factoring.",
            "Multiply top and bottom by the conjugate √(4 + <i>x</i>) + 2. The numerator becomes (4 + <i>x</i>) − 4 = <i>x</i>.",
            "The fraction is now <i>x</i> / [<i>x</i>(√(4 + <i>x</i>) + 2)]. Cancel the <i>x</i>.",
            "Substitute into 1/(√(4 + <i>x</i>) + 2), which does not vanish: 1/(2 + 2)."
          ],
          "ans": "1/4"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate lim<sub>x→1</sub> (<i>x</i><sup>18</sup> − 1)/(<i>x</i><sup>12</sup> − 1).",
          "steps": [
            "The trap is to start factoring a degree-18 polynomial. Do not.",
            "Both top and bottom are of the star shape about <i>a</i> = 1. Divide each by (<i>x</i> − 1) and take the ratio of the two standard limits.",
            "Numerator ratio → 18 · 1<sup>17</sup> = 18, denominator ratio → 12 · 1<sup>11</sup> = 12.",
            "18/12. Or read it straight off the shortcut, <i>m</i>/<i>n</i> = 18/12, which is legal here because the point is exactly 1."
          ],
          "ans": "3/2"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Find <i>a</i> and <i>b</i> such that lim<sub>x→2</sub> (<i>x</i><sup>2</sup> + <i>ax</i> + <i>b</i>)/(<i>x</i><sup>2</sup> − <i>x</i> − 2) = 5/3.",
          "steps": [
            "The denominator is (<i>x</i> − 2)(<i>x</i> + 1), which vanishes at <i>x</i> = 2. The limit is finite, so the numerator must vanish there too: 4 + 2<i>a</i> + <i>b</i> = 0.",
            "So (<i>x</i> − 2) divides the numerator: write <i>x</i><sup>2</sup> + <i>ax</i> + <i>b</i> = (<i>x</i> − 2)(<i>x</i> − <i>c</i>) for the other root <i>c</i>.",
            "Cancel: lim (<i>x</i> − <i>c</i>)/(<i>x</i> + 1) = (2 − <i>c</i>)/3. Set that equal to 5/3, so <i>c</i> = −3.",
            "Then <i>x</i><sup>2</sup> + <i>ax</i> + <i>b</i> = (<i>x</i> − 2)(<i>x</i> + 3) = <i>x</i><sup>2</sup> + <i>x</i> − 6. Check against the vanishing condition: 4 + 2(1) + (−6) = 0. ✓"
          ],
          "ans": "a = 1 and b = −6"
        },
        {
          "t": "mcq",
          "q": "lim<sub>x→2</sub> (<i>x</i><sup>3</sup> − 8)/(<i>x</i><sup>2</sup> − 4) equals:",
          "correct": 1,
          "opts": [
            {
              "label": "2",
              "nudge": "This cancels x³/x² into x and substitutes 2, ignoring the constants entirely. Leading terms decide nothing at a finite point."
            },
            {
              "label": "3",
              "nudge": null
            },
            {
              "label": "4",
              "nudge": "This keeps only the denominator’s standard limit, 2 · 2¹ = 4, and forgets to divide the numerator’s by it."
            },
            {
              "label": "3/2",
              "nudge": "This is the m/n shortcut, which is valid only about x → 1. Here the point is 2, so the powers of a survive and 3/2 is the wrong ratio."
            }
          ],
          "solution": "Both vanish at 2, so take the ratio of star limits about a = 2. Numerator → 3 · 2² = 12, denominator → 2 · 2¹ = 4, so the limit is 12/4 = 3. Factoring gives the same thing: (x² + 2x + 4)/(x + 2) → 12/4."
        },
        {
          "t": "mcq",
          "q": "lim<sub>x→1</sub> (<i>x</i><sup>1/3</sup> − 1)/(<i>x</i><sup>1/2</sup> − 1) equals:",
          "correct": 0,
          "opts": [
            {
              "label": "2/3",
              "nudge": null
            },
            {
              "label": "3/2",
              "nudge": "The ratio is upside down. The shortcut is m/n with m the numerator’s exponent, so it is (1/3) ÷ (1/2), not the reverse."
            },
            {
              "label": "1",
              "nudge": "This treats both pieces as tending to the same thing and cancelling. They vanish at different rates, and the rates are the entire answer."
            },
            {
              "label": "1/6",
              "nudge": "This multiplies the two exponents instead of dividing them. The shortcut is a quotient of the two powers, never a product."
            }
          ],
          "solution": "The star limit holds for rational n. Insert (x − 1) top and bottom: each piece becomes (x^n − 1)/(x − 1) → n · 1^(n−1) = n. So the answer is (1/3)/(1/2) = 2/3."
        },
        {
          "t": "mcq",
          "q": "If lim<sub>x→2</sub> (<i>x</i><sup>n</sup> − 2<sup>n</sup>)/(<i>x</i> − 2) = 80 with <i>n</i> ∈ ℕ, then <i>n</i> is:",
          "correct": 1,
          "opts": [
            {
              "label": "4",
              "nudge": "n = 4 gives 4 · 2³ = 32, not 80. Check by substituting back before you commit: the formula is quick enough to test every candidate."
            },
            {
              "label": "5",
              "nudge": null
            },
            {
              "label": "6",
              "nudge": "n = 6 gives 6 · 2⁵ = 192, which overshoots. The answer sits between the n = 4 and n = 6 values, so it must be 5."
            },
            {
              "label": "40",
              "nudge": "This solves 2n = 80 by treating the power of 2 as if it were the factor 2. The exponent is n − 1, and it grows much faster than the multiplier n."
            }
          ],
          "solution": "The star limit gives n · 2^(n−1) = 80. Try the small naturals: 4 · 8 = 32, 5 · 16 = 80. So n = 5."
        },
        {
          "t": "mcq",
          "q": "lim<sub>x→2</sub> (<i>x</i><sup>6</sup> − 64)/(<i>x</i><sup>3</sup> − 8) equals:",
          "correct": 1,
          "opts": [
            {
              "label": "2",
              "nudge": "This fires the m/n shortcut, 6/3 = 2, at a point that is not 1. Around x = 2 the powers of a do not collapse, and the shortcut is simply the wrong formula."
            },
            {
              "label": "16",
              "nudge": null
            },
            {
              "label": "8",
              "nudge": "This is 64 ÷ 8, the two constants divided on their own. Neither the numerator nor the denominator is heading towards its constant term."
            },
            {
              "label": "does not exist",
              "nudge": "0/0 means resolve, not quit. Here the common factor cancels cleanly in one line and the limit is a perfectly ordinary number."
            }
          ],
          "solution": "Notice that x⁶ − 64 = (x³ − 8)(x³ + 8), so the whole thing cancels to x³ + 8 → 16. The star-limit ratio agrees: (6 · 2⁵)/(3 · 2²) = 192/12 = 16."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Evaluate lim<sub>x→4</sub> (<i>x</i><sup>2</sup> − 16)/(<i>x</i> − 4).",
              "a": "0/0. Factor: (x − 4)(x + 4)/(x − 4) → x + 4 → 8."
            },
            {
              "q": "[CBSE] Evaluate lim<sub>x→0</sub> (√(1 + <i>x</i>) − √(1 − <i>x</i>))/<i>x</i>.",
              "a": "0/0 with surds. Multiply by the conjugate: the numerator becomes (1 + x) − (1 − x) = 2x, so the fraction is 2x / [x(√(1+x) + √(1−x))] → 2/2 = 1."
            },
            {
              "q": "[JEE Main] Evaluate lim<sub>x→1</sub> (<i>x</i><sup>25</sup> − 1)/(<i>x</i><sup>5</sup> − 1).",
              "a": "The point is 1, so the shortcut is legal: m/n = 25/5 = 5."
            },
            {
              "q": "[JEE Main] Evaluate lim<sub>x→1</sub> (<i>x</i><sup>3</sup> − 3<i>x</i> + 2)/(<i>x</i><sup>2</sup> − 2<i>x</i> + 1).",
              "a": "Both vanish at 1, and both vanish again after one cancellation: the factor is repeated. Numerator = (x − 1)²(x + 2), denominator = (x − 1)². So the limit is x + 2 → 3."
            },
            {
              "q": "[JEE Advanced] Find <i>a</i> and <i>b</i> if lim<sub>x→1</sub> (<i>ax</i><sup>2</sup> + <i>bx</i> + 1)/(<i>x</i> − 1) = 3.",
              "a": "Finite limit with a vanishing denominator, so the numerator must vanish at 1: a + b + 1 = 0. Then (x − 1) divides it, and matching the constant term gives ax² + bx + 1 = (x − 1)(ax − 1). Cancelling leaves ax − 1 → a − 1 = 3, so a = 4 and b = −5."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Reading <b>0/0 as an answer</b>. It is neither 0 nor “does not exist”. It is an instruction, and the instruction is always the same: expose the common factor.",
            "Firing the <b><i>m</i>/<i>n</i> shortcut away from <i>x</i> → 1</b>. Around any other point fall back to the full <i>n a</i><sup>n−1</sup> ratio. This is the most misapplied line in the chapter.",
            "<b>Expanding instead of recognising.</b> A binomial expansion of (<i>x</i> − 1)<sup>18</sup> is minutes of work for a limit the star formula settles in one line.",
            "<b>Cancelling only once</b> when the factor is repeated. If the simplified expression still gives 0/0, the factor was squared, and you cancel again rather than declaring failure.",
            "In a <b>find <i>a</i> and <i>b</i></b> problem, jumping to the value condition without first writing <b>“numerator → 0”</b>. That one reflex supplies the equation the whole problem turns on."
          ]
        },
        {
          "t": "protip",
          "html": "train your eye on the shape, not the numbers. anything of the form (something)ⁿ minus (the same thing)ⁿ over the plain difference is the star limit wearing a costume, and it never needs factoring. and whenever a question says “the limit exists and equals” with a denominator that dies, write “numerator must also → 0” before you write anything else."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "0/0 = resolve, never a final answer",
              "note": "the factor theorem guarantees the key exists"
            },
            {
              "f": "lim (xⁿ − aⁿ)/(x − a) = n aⁿ⁻¹, n ∈ ℚ",
              "note": "the star limit, reused all year"
            },
            {
              "f": "lim (xᵐ − 1)/(xⁿ − 1) = m/n",
              "note": "only at x → 1, never elsewhere"
            },
            {
              "f": "surd 0/0 → multiply by the conjugate",
              "note": "(√p − √q)(√p + √q) = p − q"
            },
            {
              "f": "finite limit, denominator → 0 ⇒ numerator → 0",
              "note": "the whole of every find a and b problem"
            }
          ],
          "aids": [
            "“zero-by-zero means do more, not done”",
            "“m over n only at one”"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "The Standard Limits",
      "chip": "03 JUNCTIONS",
      "kalam": "sine and its angle are twins near zero",
      "blocks": [
        {
          "t": "p",
          "html": "Every 0/0 in Topic 02 could be <b>broken open</b>: there was always a hidden (<i>x</i> − <i>a</i>) to collect. Now meet a troublemaker. lim<sub>x→0</sub> sin <i>x</i> / <i>x</i> substitutes to 0/0 exactly as before, and there is <b>nothing to factor</b>. sin <i>x</i> is not a polynomial, and no algebra pulls a clean <i>x</i> out of it. So mathematicians did the sensible thing: they proved a handful of these stubborn limits once, rigorously, and everyone agreed to memorise and reuse them, exactly like multiplication tables. Think of the Indian Railways network. To get from a small town in Bihar to a small town in Kerala you do not lay fresh track, you route the journey through a junction like Itarsi. These pre-proven results are the <b>junctions of calculus</b>, and your whole job on a messy trigonometric or exponential 0/0 is to reshape it until it passes through one of them."
        },
        {
          "t": "p",
          "html": "The flagship junction is <b>lim<sub>x→0</sub> sin <i>x</i> / <i>x</i> = 1</b>, and it is believable before it is proved. Zoom your eye into the graph of <i>y</i> = sin <i>x</i> near the origin and the curve becomes indistinguishable from the straight line <i>y</i> = <i>x</i>. For very small angles sin <i>x</i> and <i>x</i> are practically twins, so their ratio heads to 1. The same twins-near-zero idea powers the others: <i>e</i><sup>x</sup> ≈ 1 + <i>x</i> for small <i>x</i>, and ln(1 + <i>x</i>) ≈ <i>x</i>."
        },
        {
          "t": "think",
          "html": "every junction on the list is some function admitting that near zero it is basically x. the whole table is one confession, repeated in six accents."
        },
        {
          "t": "formula",
          "kicker": "THE TRIGONOMETRIC JUNCTIONS",
          "tag": "radians only, argument to zero",
          "main": "lim sin x / x = 1  as x → 0",
          "legend": [
            "tan <i>x</i> / <i>x</i> → 1 · sin<sup>−1</sup><i>x</i> / <i>x</i> → 1 · tan<sup>−1</sup><i>x</i> / <i>x</i> → 1, all four for the same reason",
            "(1 − cos <i>x</i>)/<i>x</i><sup>2</sup> → 1/2, but (1 − cos <i>x</i>)/<i>x</i> → 0: the power in the denominator changes the destination completely"
          ],
          "note": "In degrees the first result is π/180, not 1. Radian measure is the unique one where arc length is angle times radius, which is precisely why the twins-near-zero relationship holds at all."
        },
        {
          "t": "formula",
          "kicker": "THE EXPONENTIAL AND LOGARITHMIC JUNCTIONS",
          "tag": "base e is the clean one",
          "main": "lim (eˣ − 1)/x = 1 · lim (aˣ − 1)/x = ln a",
          "legend": [
            "ln(1 + <i>x</i>)/<i>x</i> → 1 and log<sub>a</sub>(1 + <i>x</i>)/<i>x</i> → 1/ln <i>a</i>, the same pair the other way up",
            "only <i>a</i> = <i>e</i> gives a clean 1, because ln <i>e</i> = 1. Every other base drags a logarithm along"
          ],
          "note": "The whole family comes from <i>e</i><sup>x</sup> = 1 + <i>x</i> + <i>x</i><sup>2</sup>/2! + ⋯, so <i>e</i><sup>x</sup> − 1 = <i>x</i>(1 + <i>x</i>/2! + ⋯) and the <i>x</i> cancels. And <i>a</i><sup>x</sup> = <i>e</i><sup>x ln a</sup>, which is where the ln <i>a</i> arrives from."
        },
        {
          "t": "formula",
          "kicker": "THE NUMBER e, AND THE 1 TO THE INFINITY RULE",
          "tag": "turns a monster into an ordinary limit",
          "main": "lim f ᵍ = exp( lim g (f − 1) )   when f → 1, g → ∞",
          "legend": [
            "the two definitions it rests on: (1 + <i>x</i>)<sup>1/x</sup> → <i>e</i> as <i>x</i> → 0, and (1 + 1/<i>n</i>)<sup>n</sup> → <i>e</i> as <i>n</i> → ∞",
            "why it works: <i>f</i><sup>g</sup> = <i>e</i><sup>g ln f</sup>, and near a 1<sup>∞</sup> form ln <i>f</i> = ln(1 + (<i>f</i> − 1)) ≈ <i>f</i> − 1"
          ],
          "note": "1 to the power infinity is not 1. A base creeping towards 1 raised to a power racing to infinity can land on any positive number at all, which is exactly what makes the form indeterminate."
        },
        {
          "t": "defgrid",
          "title": "Argument matching, the box rule",
          "rows": [
            {
              "k": "The real statement",
              "v": "sin(box)/(the <b>same</b> box) → 1. Match the boxes or you mismatch the answer."
            },
            {
              "k": "sin <i>kx</i> / <i>x</i>",
              "v": "→ <i>k</i>, because sin 5<i>x</i>/5<i>x</i> → 1 leaves a 5 behind"
            },
            {
              "k": "(1 − cos <i>kx</i>)/<i>x</i><sup>2</sup>",
              "v": "→ <i>k</i><sup>2</sup>/2. Square the <i>k</i>, which is the step everyone drops"
            },
            {
              "k": "(<i>e</i><sup>kx</sup> − 1)/<i>x</i>",
              "v": "→ <i>k</i>, same bookkeeping as the sine row"
            },
            {
              "k": "The move",
              "v": "multiply and divide to force each piece into its canonical shape, then collect the leftover constants and read off"
            },
            {
              "k": "The other fine print",
              "v": "the argument must tend to <b>0</b>. sin <i>x</i> / <i>x</i> as <i>x</i> → π is just 0/π = 0, with no magic anywhere"
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · WHY sin x / x LANDS ON ONE",
          "chips": ["SINE AND THE LINE, WIDE", "THE SAME PAIR, ZOOMED", "THE TWO BREAD SLICES", "THE RATIO, SQUEEZED"],
          "captions": [
            "Over a wide window there is nothing twin-like about them. The dashed grey line y = x runs straight off the top while the sine curve turns back at π/2. Far from the origin the two have nothing to do with each other, which is exactly why the junction carries the words as x tends to zero.",
            "Now shrink the window to well under a radian either side. The curve and the line have become one stroke: at x = 0.2 the sine is 0.1987, a difference of about one part in 150. That closeness is what the ratio sin x / x is measuring, and it is why the ratio heads to 1.",
            "The proof, in two lines. Compare the areas of triangle OAP, sector OAP and triangle OAT on a unit circle and you get cos x ≤ sin x / x ≤ 1 for small positive x. Here are the two bread slices: the curve y = cos x below and the dashed line y = 1 above. As x → 0 they close on the same height.",
            "The filling, added. The dark curve is sin x / x itself, and it is trapped between the two slices with nowhere to go. At x = 0 it is undefined, hence the hollow dot, and both slices arrive at 1, so the sandwich theorem forces the ratio to 1 as well."
          ],
          "frames": [
            {
              "x": [-3.4, 3.4],
              "y": [-3.4, 3.4],
              "curves": [
                { "c": "sin" },
                { "c": "line", "m": 1, "k": 0, "dash": true, "soft": true }
              ],
              "piTicks": true
            },
            {
              "x": [-0.7, 0.7],
              "y": [-0.7, 0.7],
              "curves": [
                { "c": "sin" },
                { "c": "line", "m": 1, "k": 0, "dash": true, "soft": true }
              ]
            },
            {
              "x": [-1.5, 1.5],
              "y": [-0.15, 1.3],
              "curves": [
                { "c": "cos" },
                { "c": "line", "m": 0, "k": 1, "dash": true, "soft": true }
              ],
              "labels": [{ "x": 1.05, "y": 1.18, "text": "y = 1", "soft": true }]
            },
            {
              "x": [-1.5, 1.5],
              "y": [-0.15, 1.3],
              "curves": [
                { "c": "poly", "coeffs": [1, 0, -0.1666667, 0, 0.0083333, 0, -0.0001984] },
                { "c": "cos", "soft": true },
                { "c": "line", "m": 0, "k": 1, "dash": true, "soft": true }
              ],
              "points": [{ "x": 0, "y": 1, "label": "1", "open": true }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE SANDWICH PROOF OF sin x / x, TAP A LINE",
          "steps": [
            {
              "eq": "unit circle, O centre, A = (1, 0), P at angle x, T on the tangent at A",
              "why": "Take 0 < x < π/2. Three regions are now nested inside one another: the triangle OAP sits inside the sector OAP, which sits inside the right triangle OAT. Nothing has been assumed yet beyond the picture."
            },
            {
              "eq": "½ sin x ≤ ½ x ≤ ½ tan x",
              "why": "Their three areas, in order. The middle one is ½r²x with r = 1, and that formula is true only because x is in radians. This is the precise spot where radian measure becomes non-negotiable rather than a convenience."
            },
            {
              "eq": "multiply by 2, divide by sin x > 0: 1 ≤ x / sin x ≤ 1 / cos x",
              "why": "Dividing by a positive quantity keeps the inequalities pointing the same way. Nothing subtle happens here, but the direction of each sign has to be watched."
            },
            {
              "eq": "invert: cos x ≤ sin x / x ≤ 1",
              "why": "Taking reciprocals of positive quantities reverses the order, which turns the sandwich the right way up. The ratio we want is now trapped between cos x and 1."
            },
            {
              "eq": "cos x → 1 as x → 0, so sin x / x → 1",
              "why": "Both slices of bread arrive at the same height 1, so the filling has nowhere else to go: that is the sandwich theorem. The left-hand side matches by symmetry, since sin(−x)/(−x) = sin x / x, so the two-sided limit is 1."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY (1 − cos x)/x² IS EXACTLY ONE HALF, TAP A LINE",
          "steps": [
            {
              "eq": "1 − cos x = 2 sin²(x/2)",
              "why": "The half-angle identity from the trigonometry chapter. It is the whole trick: it converts a cosine, which has no junction of its own, into a sine, which does."
            },
            {
              "eq": "(1 − cos x)/x² = 2 sin²(x/2) / x²",
              "why": "Straight substitution. Now the argument inside the sine is x/2 while the denominator carries x, so the boxes do not match yet."
            },
            {
              "eq": "= ½ · [ sin(x/2) / (x/2) ]²",
              "why": "Write x² as 4(x/2)² and the 2 out front becomes ½. Every appearance of x is now x/2, top and bottom, so the boxes match and the junction is legal."
            },
            {
              "eq": "→ ½ · 1² = 1/2",
              "why": "The bracket is the flagship junction with the box x/2, which tends to 0 as x does. And the general version follows the same way: (1 − cos kx)/x² → k²/2, with the k squared because it enters through a square."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Routing anything through a junction",
          "steps": [
            "<b>Confirm the form is 0/0</b> and that the argument is heading to zero. If it is not, no junction applies and you are in the wrong topic.",
            "<b>Name the box.</b> For sin 5<i>x</i> the box is 5<i>x</i>, for <i>e</i><sup>2x</sup> − 1 the box is 2<i>x</i>. Write it down before you manipulate anything.",
            "<b>Multiply and divide</b> so that every trigonometric, exponential or logarithmic piece sits over its own box exactly.",
            "<b>Collect the leftover constants</b> into a single fraction out front. That fraction is usually the entire answer, since each junction contributes only a 1.",
            "<b>Check the denominator’s power</b> before you quote a value. (1 − cos <i>x</i>) over <i>x</i> and over <i>x</i><sup>2</sup> are different questions with different answers."
          ]
        },
        {
          "t": "p",
          "html": "One problem remains, and it is what separates a 2-mark question from a 3-mark one. Every junction on the list carries the fine print <b>“the argument must go to 0”</b>. So what do you do when the examiner parks the problem at <i>x</i> → π/2, or <i>x</i> → π/4? Think of the Mumbai suburban timetable, written in minutes from Churchgate. If you board at Andheri you do not throw the timetable away, you re-zero your watch: I am at Churchgate-time plus 28 minutes. Let <i>h</i> be your offset from the point, and the whole machinery works again unchanged."
        },
        {
          "t": "proc",
          "title": "Shifting the point, x = a + h",
          "steps": [
            "<b>Read off <i>a</i></b>, the point being approached, and write <i>x</i> = <i>a</i> + <i>h</i> with <i>h</i> → 0. In a board script write that sentence out: it carries a method mark on its own.",
            "<b>Rewrite every occurrence of <i>x</i></b>, including inside every trigonometric, exponential and logarithmic argument. One surviving <i>x</i> and the expression now mixes two variables and means nothing.",
            "<b>Simplify with exact identities</b>, not approximations. tan(π/2 + <i>h</i>) = −cot <i>h</i>, sin(π + <i>h</i>) = −sin <i>h</i>. This is the step that turns a function of a large angle into a function of a small one.",
            "<b>Re-check the form.</b> If it is no longer 0/0, substitution now finishes the job in one line and you are done early.",
            "<b>Route through a junction</b> as usual, matching the boxes in <i>h</i>. They are legal now, because <i>h</i> really does tend to 0."
          ]
        },
        {
          "t": "defgrid",
          "title": "The shift identities exam problems actually use",
          "rows": [
            {
              "k": "<i>x</i> = π/2 + <i>h</i>",
              "v": "sin <i>x</i> = cos <i>h</i> · cos <i>x</i> = −sin <i>h</i> · tan <i>x</i> = −cot <i>h</i>"
            },
            {
              "k": "<i>x</i> = π/2 − <i>h</i>",
              "v": "sin <i>x</i> = cos <i>h</i> · cos <i>x</i> = sin <i>h</i> · tan <i>x</i> = cot <i>h</i>"
            },
            {
              "k": "<i>x</i> = π + <i>h</i>",
              "v": "sin <i>x</i> = −sin <i>h</i> · cos <i>x</i> = −cos <i>h</i> · tan <i>x</i> = tan <i>h</i>"
            },
            {
              "k": "<i>x</i> = π − <i>h</i>",
              "v": "sin <i>x</i> = sin <i>h</i> · cos <i>x</i> = −cos <i>h</i> · tan <i>x</i> = −tan <i>h</i>"
            },
            {
              "k": "<i>x</i> = π/4 + <i>h</i>",
              "v": "tan <i>x</i> = (1 + tan <i>h</i>)/(1 − tan <i>h</i>) · sin <i>x</i> = (cos <i>h</i> + sin <i>h</i>)/√2"
            },
            {
              "k": "The sign that is stolen",
              "v": "it is <b>cos</b>(π/2 + <i>h</i>) that carries the minus, never sin(π/2 + <i>h</i>). Half the lost marks in this family are that one row misremembered"
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Evaluate lim<sub>x→0</sub> sin 5<i>x</i> / sin 3<i>x</i>.",
          "steps": [
            "Two sines, two different boxes. Force each into its canonical shape by inserting the matching argument.",
            "sin 5<i>x</i>/sin 3<i>x</i> = (sin 5<i>x</i>/5<i>x</i>) · (3<i>x</i>/sin 3<i>x</i>) · (5<i>x</i>/3<i>x</i>).",
            "The first factor → 1, the second → 1, and the third is the constant 5/3."
          ],
          "ans": "5/3"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate lim<sub>x→0</sub> (1 − cos 4<i>x</i>)/<i>x</i><sup>2</sup>.",
          "steps": [
            "The trap: quoting (1 − cos <i>x</i>)/<i>x</i><sup>2</sup> → 1/2 and answering 1/2. The argument is 4<i>x</i>, not <i>x</i>.",
            "The generalised junction is (1 − cos <i>kx</i>)/<i>x</i><sup>2</sup> → <i>k</i><sup>2</sup>/2, with the <i>k</i> squared.",
            "Here <i>k</i> = 4, so the answer is 16/2."
          ],
          "ans": "8"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate lim<sub>x→0</sub> (<i>e</i><sup>2x</sup> − 1)/sin 3<i>x</i>.",
          "steps": [
            "Two different junctions in one fraction, so route each piece separately.",
            "Write it as [(<i>e</i><sup>2x</sup> − 1)/2<i>x</i>] · [3<i>x</i>/sin 3<i>x</i>] · (2<i>x</i>/3<i>x</i>).",
            "The first bracket → 1 through the exponential junction, the second → 1 through the trigonometric one, and the leftover constant is 2/3."
          ],
          "ans": "2/3"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Evaluate lim<sub>x→π/2</sub> tan 2<i>x</i> / (<i>x</i> − π/2).",
          "steps": [
            "Check the form: the denominator → 0, and 2<i>x</i> → π with tan π = 0, so it is 0/0. Nothing factors and no junction is legal, because the argument is heading to π rather than to 0.",
            "Shift: put <i>x</i> = π/2 + <i>h</i> with <i>h</i> → 0. Then <i>x</i> − π/2 = <i>h</i> and 2<i>x</i> = π + 2<i>h</i>.",
            "tan has period π, so tan 2<i>x</i> = tan(π + 2<i>h</i>) = tan 2<i>h</i>. The limit is now lim<sub>h→0</sub> tan 2<i>h</i>/<i>h</i>.",
            "Match the box: (tan 2<i>h</i>/2<i>h</i>) · 2 → 1 · 2."
          ],
          "ans": "2"
        },
        {
          "t": "mcq",
          "q": "lim<sub>x→0</sub> sin <i>x</i>° / <i>x</i>, where <i>x</i>° means <i>x</i> degrees, equals:",
          "correct": 1,
          "opts": [
            {
              "label": "1",
              "nudge": "This applies sin x / x = 1 without noticing the degree symbol, and it is the single most common error in the whole chapter. The junction is a radian statement."
            },
            {
              "label": "π/180",
              "nudge": null
            },
            {
              "label": "180/π",
              "nudge": "The conversion factor is inverted. Degrees to radians multiplies by π/180; 180/π runs the conversion backwards."
            },
            {
              "label": "π",
              "nudge": "This half-remembers that π is involved without carrying the 180 that comes with it."
            }
          ],
          "solution": "x degrees is πx/180 radians. So sin x°/x = (π/180) · sin(πx/180)/(πx/180), and the bracket is a legal junction with box πx/180. The limit is π/180 · 1."
        },
        {
          "t": "mcq",
          "q": "lim<sub>x→0</sub> tan<sup>−1</sup>(3<i>x</i>) / sin(2<i>x</i>) equals:",
          "correct": 1,
          "opts": [
            {
              "label": "2/3",
              "nudge": "The leftover constant is upside down. The box on top is 3x and the box below is 2x, so the surviving fraction is 3x/2x."
            },
            {
              "label": "3/2",
              "nudge": null
            },
            {
              "label": "1",
              "nudge": "This reads both junctions as 1 and forgets that forcing the boxes to match leaves a constant behind. The constant is the answer."
            },
            {
              "label": "6",
              "nudge": "This multiplies 3 by 2 instead of dividing. One box goes into the numerator and the other into the denominator, never both the same way."
            }
          ],
          "solution": "Write it as [tan⁻¹(3x)/3x] · [2x/sin 2x] · (3x/2x). Both brackets → 1 and the leftover constant is 3/2."
        },
        {
          "t": "mcq",
          "q": "lim<sub>x→∞</sub> (1 + 3/<i>x</i>)<sup>x</sup> equals:",
          "correct": 1,
          "opts": [
            {
              "label": "<i>e</i>",
              "nudge": "This recalls (1 + 1/x)ˣ → e and ignores the 3 sitting inside. The 3 survives the whole calculation and lands in the exponent."
            },
            {
              "label": "<i>e</i><sup>3</sup>",
              "nudge": null
            },
            {
              "label": "3",
              "nudge": "This reads off the constant inside the bracket and reports it. The constant tells you the exponent of e, it is never the answer itself."
            },
            {
              "label": "1",
              "nudge": "This treats 1 to the power infinity as 1, which is the classic misconception. The form is indeterminate precisely because it is not 1."
            }
          ],
          "solution": "Form 1 to the infinity. With f = 1 + 3/x → 1 and g = x → ∞, the rule gives e raised to lim x(3/x) = 3. So the answer is e³."
        },
        {
          "t": "mcq",
          "q": "lim<sub>x→0</sub> (2<sup>x</sup> − 1)/<i>x</i> equals:",
          "correct": 2,
          "opts": [
            {
              "label": "1",
              "nudge": "This confuses the base-a result with the base-e one. Only e gives a clean 1, because ln e = 1."
            },
            {
              "label": "2",
              "nudge": "This reads off the base and reports it. The base enters through its logarithm, never directly."
            },
            {
              "label": "ln 2",
              "nudge": null
            },
            {
              "label": "0",
              "nudge": "This stops at the bare 0/0 without resolving it. An indeterminate form is an instruction, not a value."
            }
          ],
          "solution": "This is the junction (aˣ − 1)/x → ln a with a = 2. The reason is aˣ = e^(x ln a), so the exponential junction fires with box x ln a and leaves ln a behind."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Evaluate lim<sub>x→0</sub> tan 7<i>x</i> / <i>x</i>.",
              "a": "Match the box: (tan 7x/7x) · 7 → 1 · 7 = 7."
            },
            {
              "q": "[CBSE] Evaluate lim<sub>x→0</sub> sin <i>ax</i> / sin <i>bx</i>, with <i>b</i> ≠ 0.",
              "a": "(sin ax/ax)(bx/sin bx)(ax/bx) → 1 · 1 · a/b = a/b."
            },
            {
              "q": "[JEE Main] Evaluate lim<sub>x→0</sub> (1 − cos 6<i>x</i>)/(1 − cos 3<i>x</i>).",
              "a": "Divide top and bottom by x². Top → 36/2 = 18, bottom → 9/2. So the answer is 18 ÷ 4.5 = 4. Squaring both k values is what makes it 4 rather than 2."
            },
            {
              "q": "[CBSE] Evaluate lim<sub>x→π</sub> sin <i>x</i> / (π − <i>x</i>).",
              "a": "Shift with x = π − h, so h → 0 and π − x = h. Then sin x = sin(π − h) = sin h, and the limit is sin h / h → 1."
            },
            {
              "q": "[JEE Advanced] Evaluate lim<sub>x→0</sub> (cos <i>x</i>)<sup>1/x²</sup>.",
              "a": "cos x → 1 and 1/x² → ∞, so the form is 1 to the infinity. The rule gives e raised to lim (cos x − 1)/x², which is −½ by the half-angle junction. The answer is e^(−1/2), that is 1/√e."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Degrees instead of radians.</b> sin <i>x</i>/<i>x</i> → 1 holds only in radians; a stray degree symbol changes the answer to π/180. Check the angle’s units before anything else.",
            "<b>Argument mismatch.</b> sin(<i>kx</i>)/<i>x</i> is <i>k</i>, not 1. The junction needs the same expression inside the function and underneath it.",
            "<b>The wrong denominator power for 1 − cos.</b> Over <i>x</i> the limit is 0, over <i>x</i><sup>2</sup> it is 1/2. Read the power before you quote a value, and remember to <b>square the <i>k</i></b>.",
            "<b>Base confusion.</b> (<i>e</i><sup>x</sup> − 1)/<i>x</i> → 1 but (<i>a</i><sup>x</sup> − 1)/<i>x</i> → ln <i>a</i>. Only base <i>e</i> is clean.",
            "<b>Half-substituting a shift.</b> If a single <i>x</i> survives inside a trigonometric argument after you put <i>x</i> = <i>a</i> + <i>h</i>, the expression now mixes two coordinate systems and is worthless."
          ]
        },
        {
          "t": "protip",
          "html": "before doing anything, ask where the limit is being taken. if the answer is not zero, your first pen stroke is the substitution line, not the algebra. and the instant you see a power racing to infinity over a base creeping to 1, write e to the g(f − 1) immediately: you have turned a monster into an ordinary limit in one move."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "sin x / x → 1 · tan x / x → 1 · sin⁻¹x / x → 1 · tan⁻¹x / x → 1",
              "note": "radians only, argument to zero"
            },
            {
              "f": "(1 − cos x)/x² → 1/2 · (1 − cos kx)/x² → k²/2",
              "note": "square the k, and mind the power"
            },
            {
              "f": "(eˣ − 1)/x → 1 · (aˣ − 1)/x → ln a · ln(1 + x)/x → 1",
              "note": "only base e is clean"
            },
            {
              "f": "lim f ᵍ = exp( lim g(f − 1) )",
              "note": "for 1 to the infinity, f → 1 and g → ∞"
            },
            {
              "f": "x = a + h, h → 0",
              "note": "move zero to the problem, then rewrite every x"
            }
          ],
          "aids": [
            "“sine and angle are twins near zero, but only in radians”",
            "“match the box, keep the constant”",
            "“if it isn’t at zero, move zero to it”"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "The Derivative from First Principle",
      "chip": "04 FIRST PRINCIPLE",
      "kalam": "the secant slides into the tangent",
      "blocks": [
        {
          "t": "p",
          "html": "Here is a genuinely deep question: how fast is your car going <b>right now</b>, at this exact instant? Average speed is easy, total distance over total time. But an instant has no duration, and in no time at all no distance is covered, so it looks as though you are computing 0/0 and the question is nonsense. Yet the speedometer displays a confident number, because it cheats cleverly. It measures the distance covered over a <b>tiny sliver</b> of time and divides, then makes the sliver smaller and smaller. As the window shrinks toward zero, that average-over-a-sliver settles onto one definite number: your instantaneous speed. That limiting process <b>is</b> the derivative, and it is a 0/0 limit, which is why everything in Topics 01 to 03 is the machinery that makes derivatives work at all."
        },
        {
          "t": "p",
          "html": "The same idea is purely geometric, and the picture is the one worth carrying. Pick two points on a curve and draw the straight line joining them, a <b>secant</b>. Its slope is the average rate of change between them. Now slide the second point towards the first. The secant pivots, and in the limit it becomes the <b>tangent</b> that just grazes the curve at that single point. The slope of that tangent is the derivative. Equivalently: zoom into any smooth curve far enough and it looks like a straight line, and the derivative is the slope of that local straightening."
        },
        {
          "t": "think",
          "html": "the derivative is the slope you get once the two points on the curve have finished arguing about which one is which. one point, one slope."
        },
        {
          "t": "formula",
          "kicker": "THE FIRST PRINCIPLE",
          "tag": "also called ab initio, or the delta method",
          "main": "f′(x) = lim (f(x + h) − f(x)) / h  as h → 0",
          "legend": [
            "the equivalent form at a fixed point: <i>f</i>′(<i>a</i>) = lim<sub>x→a</sub> (<i>f</i>(<i>x</i>) − <i>f</i>(<i>a</i>))/(<i>x</i> − <i>a</i>)",
            "notations, all the same object: <i>f</i>′(<i>x</i>), d<i>y</i>/d<i>x</i>, d/d<i>x</i>[<i>f</i>(<i>x</i>)], <i>Df</i>",
            "<i>f</i>′(<i>a</i>) is a single <b>number</b>, the slope at one point; <i>f</i>′(<i>x</i>) is a whole new <b>function</b>, and boards penalise an <i>x</i> left where a number belongs",
            "what it means: the slope of the tangent to <i>y</i> = <i>f</i>(<i>x</i>), and the instantaneous rate of change. If <i>s</i>(<i>t</i>) is position, <i>s</i>′(<i>t</i>) is velocity"
          ],
          "note": "The numerator is the change in output and the h below is the shrinking sliver of input. Substituting h = 0 gives 0/0 every time, by design: a derivative is an indeterminate form that has been resolved."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · THE SECANT SLIDING INTO THE TANGENT",
          "mathChips": true,
          "chips": ["h = 1.2", "h = 0.6", "h = 0.2", "h → 0"],
          "captions": [
            "The curve is y = x² and P is the point (1, 1) where we want the slope. Q sits a whole 1.2 to the right, and the amber line through P and Q is a secant. The dashed legs are the run h = 1.2 across and the rise 3.84 up, so this secant has slope 3.2. That is an average over a wide interval, and it is nowhere near the slope at P.",
            "Halve the gap. Q has slid down the curve to (1.6, 2.56) and the secant has pivoted about P, its slope falling to 2.6. Nothing about P changed; only the second point moved, and the line swung with it.",
            "h = 0.2 now, and the slope has fallen to 2.2. The pattern is already visible: the slope of the secant is 2 + h exactly, so as h shrinks the slopes run 3.2, 2.6, 2.2 and they are converging on 2.",
            "The limit. Q has arrived at P and there is no second point left, so there is no secant left either, yet the line survives as the tangent at P with slope exactly 2. That number is f′(1). And 2 = 2 × 1 is the star limit of Topic 02 read backwards, since the derivative of x² is 2x."
          ],
          "frames": [
            {
              "x": [-0.4, 3],
              "y": [-1.2, 6.2],
              "curves": [
                { "c": "poly", "coeffs": [0, 0, 1] },
                { "c": "line", "m": 3.2, "k": -2.2 }
              ],
              "points": [
                { "x": 1, "y": 1, "label": "P" },
                { "x": 2.2, "y": 4.84, "label": "Q" }
              ],
              "segments": [
                { "from": [1, 1], "to": [2.2, 1], "dash": true, "soft": true, "label": "h" },
                { "from": [2.2, 1], "to": [2.2, 4.84], "dash": true, "soft": true }
              ]
            },
            {
              "x": [-0.4, 3],
              "y": [-1.2, 6.2],
              "curves": [
                { "c": "poly", "coeffs": [0, 0, 1] },
                { "c": "line", "m": 2.6, "k": -1.6 }
              ],
              "points": [
                { "x": 1, "y": 1, "label": "P" },
                { "x": 1.6, "y": 2.56, "label": "Q" }
              ],
              "segments": [
                { "from": [1, 1], "to": [1.6, 1], "dash": true, "soft": true, "label": "h" },
                { "from": [1.6, 1], "to": [1.6, 2.56], "dash": true, "soft": true }
              ]
            },
            {
              "x": [-0.4, 3],
              "y": [-1.2, 6.2],
              "curves": [
                { "c": "poly", "coeffs": [0, 0, 1] },
                { "c": "line", "m": 2.2, "k": -1.2 }
              ],
              "points": [
                { "x": 1, "y": 1, "label": "P" },
                { "x": 1.2, "y": 1.44, "label": "Q" }
              ],
              "segments": [
                { "from": [1, 1], "to": [1.2, 1], "dash": true, "soft": true, "label": "h" },
                { "from": [1.2, 1], "to": [1.2, 1.44], "dash": true, "soft": true }
              ]
            },
            {
              "x": [-0.4, 3],
              "y": [-1.2, 6.2],
              "curves": [
                { "c": "poly", "coeffs": [0, 0, 1] },
                { "c": "line", "m": 2, "k": -1 }
              ],
              "points": [{ "x": 1, "y": 1, "label": "P" }],
              "labels": [{ "x": 2.3, "y": 3.4, "text": "slope 2", "soft": true }]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The standard derivatives, each provable from first principle",
          "rows": [
            {
              "k": "<i>c</i> · <i>x</i><sup>n</sup>",
              "v": "0 · <i>n x</i><sup>n−1</sup>, which is the star limit of Topic 02 read backwards"
            },
            {
              "k": "sin <i>x</i> · cos <i>x</i>",
              "v": "cos <i>x</i> · −sin <i>x</i>, both needing sin <i>h</i>/<i>h</i> → 1"
            },
            {
              "k": "tan <i>x</i>",
              "v": "sec<sup>2</sup><i>x</i>"
            },
            {
              "k": "<i>e</i><sup>x</sup> · <i>a</i><sup>x</sup>",
              "v": "<i>e</i><sup>x</sup> · <i>a</i><sup>x</sup> ln <i>a</i>, both needing (<i>a</i><sup>h</sup> − 1)/<i>h</i> → ln <i>a</i>"
            },
            {
              "k": "ln <i>x</i>",
              "v": "1/<i>x</i>"
            },
            {
              "k": "The pattern in all of them",
              "v": "factor the base function out of the difference quotient, and what is left is a Topic 03 junction. That is the entire recipe."
            }
          ]
        },
        {
          "t": "proc",
          "title": "The first-principle drill",
          "steps": [
            "<b>Write <i>f</i>(<i>x</i> + <i>h</i>)</b> by substituting <i>x</i> + <i>h</i> into the function, in full, wherever <i>x</i> appears.",
            "<b>Form the difference quotient</b> [<i>f</i>(<i>x</i> + <i>h</i>) − <i>f</i>(<i>x</i>)]/<i>h</i> and keep the lim<sub>h→0</sub> written in front of it at every line. Dropping it loses method marks and hides errors.",
            "<b>Simplify the numerator</b> so that the <i>h</i> underneath can be dealt with: expand a polynomial, factor out the base function, or rationalise a surd exactly as in Topic 02.",
            "<b>Take the limit</b>, routing through a junction where one appears. Your target while simplifying is always to <b>manufacture a standard limit</b>, so aim at it deliberately rather than hoping."
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · d/dx sin x FROM THE DEFINITION, TAP A LINE",
          "steps": [
            {
              "eq": "f′(x) = lim [ sin(x + h) − sin x ] / h",
              "why": "The definition, with nothing done to it yet. At h = 0 this is 0/0, and no algebra factors a sine, so a junction has to be manufactured."
            },
            {
              "eq": "sin(x + h) − sin x = 2 cos(x + h/2) sin(h/2)",
              "why": "The sum-to-product identity from the trigonometry chapter. This is the whole move: it converts a difference of two sines into a product carrying a lone sin(h/2), which can meet a junction."
            },
            {
              "eq": "f′(x) = lim cos(x + h/2) · [ sin(h/2) / (h/2) ]",
              "why": "Write h as 2 × (h/2). The 2 in front cancels the 2 in the denominator and the bracket now has matching boxes, top and bottom."
            },
            {
              "eq": "bracket → 1, and cos(x + h/2) → cos x",
              "why": "The bracket is the flagship junction with box h/2, which does tend to 0. The cosine has no h trouble at all, so its limit is simply its value, and the product rule for limits from Topic 01 combines the two."
            },
            {
              "eq": "d/dx sin x = cos x",
              "why": "And the same single move produces every entry in the table. For the exponential: (e^(x+h) − eˣ)/h = eˣ · (eʰ − 1)/h → eˣ · 1. Factor out the base function, and the junction appears."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE PRODUCT RULE CARRIES A CROSS TERM, TAP A LINE",
          "steps": [
            {
              "eq": "(uv)′ = lim [ u(x+h) v(x+h) − u(x) v(x) ] / h",
              "why": "The first principle applied to a product. Nothing cancels and there is no obvious way to split it, which is already a hint that the answer is not going to be u′v′."
            },
            {
              "eq": "add and subtract u(x+h) v(x) in the numerator",
              "why": "Adding zero, written in a useful shape. This is the only inventive step in the whole argument, and it is precisely the step that manufactures the cross term."
            },
            {
              "eq": "= u(x+h) · [v(x+h) − v(x)]/h + v(x) · [u(x+h) − u(x)]/h",
              "why": "Group the four terms into two pairs. Each bracket is now a difference quotient in its own right, one belonging to v and one to u."
            },
            {
              "eq": "→ u v′ + v u′",
              "why": "As h → 0 the brackets become v′ and u′, and u(x + h) → u(x) because a differentiable function is continuous. Two terms, not one: multiplying two derivatives throws the cross term away, and the cross term is half the answer."
            }
          ]
        },
        {
          "t": "p",
          "html": "A derivative is a limit, so it exists under the Topic 01 rule and no other: the two one-sided versions must agree. Those are the <b>left-hand derivative</b> and <b>right-hand derivative</b>, and three things break them. A <b>corner</b>, like |<i>x</i>| at 0, where the slope jumps from −1 to +1. A <b>jump</b> in the function itself. And a <b>vertical tangent</b>, where the slope runs off to infinity. Note the one-way street: differentiable forces continuous, but continuous never forces differentiable, and |<i>x</i>| is continuous everywhere while failing to be differentiable at a single point."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · WHERE A DERIVATIVE FAILS",
          "chips": ["A SMOOTH POINT", "A CORNER", "A JUMP"],
          "captions": [
            "The working case. Approach P from the left and the chords settle onto one slope; approach from the right and they settle onto the same one. LHD = RHD, so there is exactly one tangent line, drawn dashed here, and f′ exists at P.",
            "y = |x| at the origin. The function is perfectly continuous, you can draw it without lifting the pen, and it is still not differentiable at 0. Every chord from the left has slope −1 and every chord from the right has slope +1. Two candidate tangents, no agreement, no derivative. This is the standard counterexample, and it is worth being able to draw from memory.",
            "A jump. Here the failure happens one step earlier: the function is not even continuous at 0, and continuity is the price of admission. Differentiable forces continuous, so anything that fails continuity cannot possibly have a derivative there, however parallel the two pieces look."
          ],
          "frames": [
            {
              "x": [-2.2, 2.2],
              "y": [-1.2, 2.6],
              "curves": [
                { "c": "poly", "coeffs": [0, 0, 0.5] },
                { "c": "line", "m": 1, "k": -0.5, "dash": true }
              ],
              "points": [{ "x": 1, "y": 0.5, "label": "P" }]
            },
            {
              "x": [-2.2, 2.2],
              "y": [-1.2, 2.6],
              "curves": [{ "c": "abs" }],
              "points": [{ "x": 0, "y": 0 }],
              "labels": [
                { "x": -1.35, "y": 2.3, "text": "LHD = −1", "soft": true },
                { "x": 1.35, "y": 2.3, "text": "RHD = +1", "soft": true }
              ]
            },
            {
              "x": [-2.2, 2.2],
              "y": [-1.2, 2.6],
              "segments": [
                { "from": [-2.2, 0.4], "to": [0, 0.4] },
                { "from": [0, 1.8], "to": [2.2, 1.8] }
              ],
              "points": [
                { "x": 0, "y": 0.4, "open": true },
                { "x": 0, "y": 1.8 }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE EXISTENCE TEST FOR A DERIVATIVE",
          "tag": "the Topic 01 rule, one level up",
          "main": "f′(a) exists ⟺ LHD = RHD",
          "legend": [
            "LHD = lim<sub>h→0+</sub> [<i>f</i>(<i>a</i> − <i>h</i>) − <i>f</i>(<i>a</i>)]/(−<i>h</i>) · RHD = lim<sub>h→0+</sub> [<i>f</i>(<i>a</i> + <i>h</i>) − <i>f</i>(<i>a</i>)]/<i>h</i>",
            "differentiable ⇒ continuous, and the converse is <b>false</b>: |<i>x</i>| at 0 is the standing counterexample"
          ],
          "note": "This is not a second rule to learn. It is the existence test from Topic 01, applied to the difference quotient instead of to f itself."
        },
        {
          "t": "defgrid",
          "title": "Functional equations, where the rules have nothing to act on",
          "rows": [
            {
              "k": "<i>f</i>(<i>x</i> + <i>y</i>) = <i>f</i>(<i>x</i>) + <i>f</i>(<i>y</i>)",
              "v": "<i>f</i>(0) = 0 · <i>f</i>′(<i>x</i>) = <i>f</i>′(0) · so <i>f</i>(<i>x</i>) = <i>kx</i>"
            },
            {
              "k": "<i>f</i>(<i>x</i> + <i>y</i>) = <i>f</i>(<i>x</i>) <i>f</i>(<i>y</i>)",
              "v": "<i>f</i>(0) = 1 on the non-trivial branch · <i>f</i>′(<i>x</i>) = <i>f</i>′(0) <i>f</i>(<i>x</i>) · so <i>f</i>(<i>x</i>) = <i>e</i><sup>kx</sup>"
            },
            {
              "k": "<i>f</i>(<i>xy</i>) = <i>f</i>(<i>x</i>) + <i>f</i>(<i>y</i>)",
              "v": "<i>f</i>(1) = 0 · <i>f</i>′(<i>x</i>) = <i>f</i>′(1)/<i>x</i> · so <i>f</i>(<i>x</i>) = <i>c</i> ln <i>x</i>, for <i>x</i> > 0"
            },
            {
              "k": "<i>f</i>(<i>xy</i>) = <i>f</i>(<i>x</i>) <i>f</i>(<i>y</i>)",
              "v": "<i>f</i>(1) = 1 non-trivially · <i>f</i>′(<i>x</i>) = <i>f</i>′(1) <i>f</i>(<i>x</i>)/<i>x</i> · so <i>f</i>(<i>x</i>) = <i>x</i><sup>n</sup>, for <i>x</i> > 0"
            },
            {
              "k": "The master move",
              "v": "no formula for <i>f</i> exists, so no rule can act. But the first principle only needs <i>f</i>(<i>x</i> + <i>h</i>), and that is exactly what the equation splits. Pull everything depending on <i>x</i> outside the limit and what survives is <i>f</i>′(0) or <i>f</i>′(1)."
            },
            {
              "k": "Match the operation",
              "v": "an additive equation wants the increment <i>x</i> + <i>h</i>. A multiplicative-argument one wants <i>x</i>(1 + <i>h</i>/<i>x</i>), so that the equation can split it."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Finding a and b so f is differentiable at a junction",
          "steps": [
            "<b>Identify the junction <i>c</i></b> and read the inequalities carefully: whichever piece carries the equality sign owns the value <i>f</i>(<i>c</i>).",
            "<b>Impose continuity first.</b> Left-hand value = right-hand value = <i>f</i>(<i>c</i>). That is equation (i), and it is forced, because differentiable implies continuous.",
            "<b>Then match the slopes.</b> Differentiate each piece and evaluate at <i>c</i>: LHD = RHD is equation (ii). Doing this before securing continuity is what lets you find constants that make two pieces parallel while a vertical gap sits between them.",
            "<b>Resolve every modulus before differentiating.</b> Near <i>x</i> = 1 you have <i>x</i> > 0, so 1/|<i>x</i>| is simply 1/<i>x</i>. A modulus that survives to the differentiation step is a guaranteed sign error.",
            "<b>Solve the two equations, then verify</b> by checking both the value and the slope at <i>c</i>. If the question had asked only for continuity you would have one equation and a whole family of answers, so a demand for a unique pair is itself the clue that differentiability is being tested."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the derivative of <i>f</i>(<i>x</i>) = √<i>x</i> from first principle.",
          "steps": [
            "Difference quotient: (√(<i>x</i> + <i>h</i>) − √<i>x</i>)/<i>h</i>, which is 0/0 at <i>h</i> = 0.",
            "A surd blocks the way, so rationalise, exactly the Topic 02 technique. Multiply top and bottom by √(<i>x</i> + <i>h</i>) + √<i>x</i>.",
            "The numerator becomes (<i>x</i> + <i>h</i>) − <i>x</i> = <i>h</i>, which cancels the <i>h</i> below, leaving 1/(√(<i>x</i> + <i>h</i>) + √<i>x</i>).",
            "Now substitute <i>h</i> = 0 safely, since the denominator does not vanish. Consistency check: <i>x</i><sup>1/2</sup> should differentiate to ½<i>x</i><sup>−1/2</sup>, and it does."
          ],
          "ans": "f′(x) = 1/(2√x)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate lim<sub>h→0</sub> [(2 + <i>h</i>)<sup>10</sup> − 2<sup>10</sup>]/<i>h</i>.",
          "steps": [
            "The trap is to start expanding (2 + <i>h</i>)<sup>10</sup> binomially. That is minutes of work for a one-line question.",
            "Recognise the shape. This is exactly [<i>f</i>(<i>a</i> + <i>h</i>) − <i>f</i>(<i>a</i>)]/<i>h</i> with <i>f</i>(<i>x</i>) = <i>x</i><sup>10</sup> and <i>a</i> = 2, so it is <i>f</i>′(2) and nothing else.",
            "<i>f</i>′(<i>x</i>) = 10<i>x</i><sup>9</sup>, so <i>f</i>′(2) = 10 × 512."
          ],
          "ans": "5120"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Let <i>f</i> satisfy <i>f</i>(<i>x</i> + <i>y</i>) = <i>f</i>(<i>x</i>) <i>f</i>(<i>y</i>) for all real <i>x</i>, <i>y</i>, with <i>f</i>(<i>x</i>) ≠ 0 everywhere and <i>f</i> differentiable at 0 with <i>f</i>′(0) = 2. Find <i>f</i>′(<i>x</i>) and <i>f</i>′(3).",
          "steps": [
            "Anchor value: put <i>x</i> = <i>y</i> = 0 to get <i>f</i>(0) = <i>f</i>(0)<sup>2</sup>, so <i>f</i>(0) is 0 or 1. If it were 0 then <i>f</i>(<i>x</i>) = <i>f</i>(<i>x</i>)<i>f</i>(0) = 0 for every <i>x</i>, contradicting the hypothesis. So <i>f</i>(0) = 1.",
            "First principle with the equation substituted: <i>f</i>′(<i>x</i>) = lim [<i>f</i>(<i>x</i>)<i>f</i>(<i>h</i>) − <i>f</i>(<i>x</i>)]/<i>h</i>.",
            "<i>f</i>(<i>x</i>) does not depend on <i>h</i>, so pull it out: <i>f</i>′(<i>x</i>) = <i>f</i>(<i>x</i>) · lim [<i>f</i>(<i>h</i>) − 1]/<i>h</i>. Since <i>f</i>(0) = 1 that surviving limit is literally <i>f</i>′(0) = 2.",
            "So <i>f</i>′(<i>x</i>) = 2<i>f</i>(<i>x</i>), and the function fitting <i>f</i>′ = 2<i>f</i> with <i>f</i>(0) = 1 is <i>f</i>(<i>x</i>) = <i>e</i><sup>2x</sup>. Notice what happened: you were told <i>f</i> is differentiable only at 0, and the equation propagated it to the whole line."
          ],
          "ans": "f′(x) = 2 f(x) = 2e²ˣ, so f′(3) = 2e⁶"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find <i>a</i> and <i>b</i> so that <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> for <i>x</i> ≤ 1 and <i>ax</i> + <i>b</i> for <i>x</i> > 1 is differentiable at <i>x</i> = 1.",
          "steps": [
            "The junction is <i>c</i> = 1, and the left piece carries the equality, so <i>f</i>(1) = 1.",
            "Continuity first: the right piece must also give 1 at <i>x</i> = 1, so <b><i>a</i> + <i>b</i> = 1</b>.",
            "Now the slopes: the left piece differentiates to 2<i>x</i>, giving LHD = 2, and the right piece differentiates to <i>a</i>. So <b><i>a</i> = 2</b>.",
            "Hence <i>b</i> = −1. Verify: 2(1) − 1 = 1 matches the value, and the slope 2 matches. Had the question asked only for continuity, every pair with <i>a</i> + <i>b</i> = 1 would qualify."
          ],
          "ans": "a = 2 and b = −1"
        },
        {
          "t": "mcq",
          "q": "The derivative of <i>f</i>(<i>x</i>) = √<i>x</i> at <i>x</i> = 4 is:",
          "correct": 0,
          "opts": [
            {
              "label": "1/4",
              "nudge": null
            },
            {
              "label": "1/2",
              "nudge": "This halves and then forgets the √x underneath. The derivative is 1/(2√x), not 1/2."
            },
            {
              "label": "2",
              "nudge": "That is √4, the function value at the point, not the slope there. A value and a slope are different objects."
            },
            {
              "label": "4",
              "nudge": "This reports the point itself. Nothing in the calculation returns x unchanged."
            }
          ],
          "solution": "f′(x) = 1/(2√x), so at x = 4 it is 1/(2 × 2) = 1/4."
        },
        {
          "t": "mcq",
          "q": "If <i>f</i>(<i>x</i>) = sin <i>x</i>, then lim<sub>h→0</sub> [<i>f</i>(π/6 + <i>h</i>) − <i>f</i>(π/6)]/<i>h</i> equals:",
          "correct": 1,
          "opts": [
            {
              "label": "1/2",
              "nudge": "That is sin(π/6), the function value. The limit is shaped exactly like a derivative, so it returns a slope, not a height."
            },
            {
              "label": "√3/2",
              "nudge": null
            },
            {
              "label": "−√3/2",
              "nudge": "This differentiates cosine instead of sine. The minus belongs to d/dx cos x, and there is no cosine in the question."
            },
            {
              "label": "1",
              "nudge": "This fires the reflex that any limit of that shape is 1, without ever identifying which derivative it is."
            }
          ],
          "solution": "The expression is precisely f′(π/6) for f = sin x. Since f′(x) = cos x, the answer is cos(π/6) = √3/2. Any limit shaped like [f(a + h) − f(a)]/h is a derivative in disguise: read it off rather than grinding."
        },
        {
          "t": "mcq",
          "q": "If <i>f</i> is differentiable at <i>x</i> = <i>a</i>, then at <i>x</i> = <i>a</i> the function <i>f</i> is necessarily:",
          "correct": 0,
          "opts": [
            {
              "label": "continuous",
              "nudge": null
            },
            {
              "label": "constant",
              "nudge": "This confuses “has a derivative” with “has derivative zero”. Every line has a derivative and almost none of them are constant."
            },
            {
              "label": "increasing",
              "nudge": "This assumes the slope is positive. A derivative can be negative, or zero, and still exist perfectly well."
            },
            {
              "label": "bounded but not continuous",
              "nudge": "This inverts the true implication. Differentiability is the stronger property; it hands you continuity, not the other way round."
            }
          ],
          "solution": "Differentiability at a point forces continuity there. The converse fails, and |x| at 0 is the standing counterexample: continuous everywhere, differentiable everywhere except one point."
        },
        {
          "t": "mcq",
          "q": "For which <i>a</i> and <i>b</i> is <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 3<i>x</i> + <i>a</i> for <i>x</i> ≤ 1 and <i>bx</i> + 2 for <i>x</i> > 1 differentiable at <i>x</i> = 1?",
          "correct": 2,
          "opts": [
            {
              "label": "<i>a</i> = 5, <i>b</i> = 3",
              "nudge": "The two constants have been swapped. The slope equation fixes b, not a, because b is the coefficient sitting on the linear piece."
            },
            {
              "label": "<i>a</i> = 2, <i>b</i> = 5",
              "nudge": "The slope is right but the continuity equation was mis-solved: 1 + 3 + a must equal b + 2 = 7, which gives a = 3 and not 2."
            },
            {
              "label": "<i>a</i> = 3, <i>b</i> = 5",
              "nudge": null
            },
            {
              "label": "<i>a</i> = 3, <i>b</i> = 2",
              "nudge": "This matches the constant term of the right piece instead of its slope. Equation (ii) compares derivatives, and the derivative of bx + 2 is b."
            }
          ],
          "solution": "Slopes first is tempting but do continuity first anyway. Slope: the left piece gives 2x + 3 → 5 at x = 1, and the right gives b, so b = 5. Continuity: 1 + 3 + a = 5 + 2, so a = 3."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the derivative of <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 3<i>x</i> from first principle.",
              "a": "[(x+h)² + 3(x+h) − x² − 3x]/h = (2xh + h² + 3h)/h = 2x + h + 3 → 2x + 3."
            },
            {
              "q": "[CBSE] Find the derivative of <i>f</i>(<i>x</i>) = cos <i>x</i> from first principle.",
              "a": "cos(x + h) − cos x = −2 sin(x + h/2) sin(h/2). Divide by h and write h = 2(h/2): the limit is −sin x · 1 = −sin x."
            },
            {
              "q": "[JEE Main] Evaluate lim<sub>h→0</sub> (<i>e</i><sup>3+h</sup> − <i>e</i><sup>3</sup>)/<i>h</i>.",
              "a": "A disguised derivative: it is f′(3) for f(x) = eˣ. Since eˣ is its own derivative, the answer is e³."
            },
            {
              "q": "[JEE Advanced] Is <i>f</i>(<i>x</i>) = |<i>x</i> − 2| differentiable at <i>x</i> = 2? Justify with LHD and RHD.",
              "a": "f(2) = 0. RHD = lim h/h = +1 and LHD = lim (h)/(−h) = −1. They disagree, so f′(2) does not exist: a corner, exactly like |x| shifted two to the right."
            },
            {
              "q": "[JEE Main] <i>f</i>(<i>x</i> + <i>y</i>) = <i>f</i>(<i>x</i>) + <i>f</i>(<i>y</i>) + 3<i>xy</i> for all real <i>x</i>, <i>y</i>, with <i>f</i> differentiable and <i>f</i>′(0) = 2. Find <i>f</i>′(<i>x</i>) and <i>f</i>(2).",
              "a": "Put x = y = 0: f(0) = 2f(0), so f(0) = 0. Then f′(x) = lim [f(h) + 3xh]/h = f′(0) + 3x = 3x + 2. A function with that derivative and f(0) = 0 is f(x) = 1.5x² + 2x, so f(2) = 6 + 4 = 10."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Mixing up <b><i>f</i>′(<i>a</i>)</b> and <b><i>f</i>′(<i>x</i>)</b>. One is a number, one is a function, and leaving an <i>x</i> where a number belongs is penalised.",
            "<b>(<i>uv</i>)′ = <i>u</i>′<i>v</i>′.</b> It is <i>u</i>′<i>v</i> + <i>uv</i>′, and the cross term is not optional. The derivation above is exactly where it comes from.",
            "<b>Cancelling <i>h</i> too early, or dropping the lim.</b> You may only cancel <i>h</i> after the numerator is simplified, and the lim<sub>h→0</sub> has to be written on every line until you take it.",
            "Assuming <b>continuous implies differentiable</b>. It is one-way. Corners, cusps and vertical tangents are all continuous and all fail.",
            "In a junction problem, <b>matching slopes before imposing continuity</b>. Parallel pieces separated by a vertical gap are not differentiable, and the slope equation alone will happily hand you that answer."
          ]
        },
        {
          "t": "protip",
          "html": "train your eye to spot a disguised derivative. any limit shaped like [f(a + h) − f(a)]/h or [f(x) − f(a)]/(x − a) is just f′(a), so read it off and never expand it by hand. and in every first-principle derivation of a sin, a cos or an exponential, your only goal is to manufacture a junction: factor out the base function and it appears."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "f′(x) = lim [f(x + h) − f(x)]/h",
              "note": "a 0/0 limit, resolved"
            },
            {
              "f": "f′(a) = slope of the tangent at a = instantaneous rate",
              "note": "the secant slides into the tangent"
            },
            {
              "f": "d/dx: xⁿ → n xⁿ⁻¹ · sin → cos · cos → −sin · eˣ → eˣ · ln x → 1/x",
              "note": "each one provable from the definition"
            },
            {
              "f": "f′(a) exists ⟺ LHD = RHD",
              "note": "corner, jump or vertical tangent kills it"
            },
            {
              "f": "differentiable ⇒ continuous, never the reverse",
              "note": "so continuity is equation (i) at a junction"
            }
          ],
          "aids": [
            "“secant slides into tangent”",
            "“f(a + h) minus f(a) over h is a derivative in disguise”",
            "“continuity first, slopes second”"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Rules of Differentiation",
      "chip": "05 RULES",
      "kalam": "outside derivative, times inside derivative",
      "blocks": [
        {
          "t": "p",
          "html": "In Topic 04 you ground out derivatives the honest way, straight from the limit definition. It works, and it is slow, like grinding wheat into atta by hand. Nobody does that daily. Once a few key derivatives and combination rules have been proved from first principle, and they have been, you switch to the flour mill. Every rule in that mill answers one question, <b>how does the derivative interact with an arithmetic operation</b>. Addition is friendly and derivatives simply add. Multiplication is the first surprise: they do <b>not</b> multiply, because of the cross term you derived last topic. Division has its own rule, which turns out to be the product rule rearranged. And composition, a function sitting inside another function, is the subtle and most powerful one: the <b>chain rule</b>."
        },
        {
          "t": "p",
          "html": "The chain rule intuition is that <b>rates multiply</b>. Suppose <i>y</i> changes 3 times as fast as <i>u</i>, and <i>u</i> changes 2 times as fast as <i>x</i>. Then <i>y</i> changes 6 times as fast as <i>x</i>. Picture a gear train: a large gear turns a medium gear which turns a small wheel, and if the medium spins twice per turn of the large one and the wheel spins three times per medium turn, the wheel spins six times per large turn. Or think in currency: rupees per dollar × dollars per euro = rupees per euro. The intermediate unit cancels, which is exactly what d<i>y</i>/d<i>x</i> = (d<i>y</i>/d<i>u</i>)(d<i>u</i>/d<i>x</i>) says."
        },
        {
          "t": "think",
          "html": "the chain rule is gear ratios. count how fast each wheel turns per turn of the one before it, and multiply down the train."
        },
        {
          "t": "formula",
          "kicker": "THE CORE RULES",
          "tag": "u and v differentiable, c constant",
          "main": "(uv)′ = u′v + uv′ · (u/v)′ = (u′v − uv′)/v²",
          "legend": [
            "(<i>u</i> ± <i>v</i>)′ = <i>u</i>′ ± <i>v</i>′ and (<i>cu</i>)′ = <i>cu</i>′, the two that behave exactly as you would guess",
            "reciprocal: (1/<i>v</i>)′ = −<i>v</i>′/<i>v</i><sup>2</sup>, and the quotient rule needs <i>v</i> ≠ 0 at the point",
            "three factors: (<i>uvw</i>)′ = <i>u</i>′<i>vw</i> + <i>uv</i>′<i>w</i> + <i>uvw</i>′, differentiating one factor at a time and adding"
          ],
          "note": "The order in the quotient rule matters: u′v − uv′, top-derivative-times-bottom first. Reverse it and the sign of the whole answer flips."
        },
        {
          "t": "formula",
          "kicker": "THE CHAIN RULE",
          "tag": "the one that is never optional",
          "main": "dy/dx = (dy/du) · (du/dx) = f′(g(x)) · g′(x)",
          "legend": [
            "power chain, the most-used special case: d/d<i>x</i> [<i>g</i>(<i>x</i>)]<sup>n</sup> = <i>n</i>[<i>g</i>(<i>x</i>)]<sup>n−1</sup> · <i>g</i>′(<i>x</i>)",
            "why rates multiply: over a small step, Δ<i>y</i>/Δ<i>x</i> = (Δ<i>y</i>/Δ<i>u</i>)(Δ<i>u</i>/Δ<i>x</i>), and as Δ<i>x</i> → 0 so does Δ<i>u</i>, because the inner function is continuous"
          ],
          "note": "Both links must be differentiable: the inner g at x, and the outer f at u = g(x). The chain rule formally sits in the Class 12 syllabus, but every JEE course teaches it in Class 11 because half the problems are unreachable without it."
        },
        {
          "t": "defgrid",
          "title": "The complete trigonometric set",
          "rows": [
            {
              "k": "sin <i>x</i> · cos <i>x</i>",
              "v": "cos <i>x</i> · −sin <i>x</i>"
            },
            {
              "k": "tan <i>x</i> · cot <i>x</i>",
              "v": "sec<sup>2</sup><i>x</i> · −csc<sup>2</sup><i>x</i>"
            },
            {
              "k": "sec <i>x</i> · csc <i>x</i>",
              "v": "sec <i>x</i> tan <i>x</i> · −csc <i>x</i> cot <i>x</i>"
            },
            {
              "k": "Where the minus signs live",
              "v": "every co-function carries one. cos, cot and csc are the three, and no others"
            },
            {
              "k": "How they are obtained",
              "v": "quotient rule on cot <i>x</i> = cos <i>x</i>/sin <i>x</i>, reciprocal rule on sec <i>x</i> = 1/cos <i>x</i>. None of them needs a fresh first-principle argument"
            },
            {
              "k": "The other four",
              "v": "<i>x</i><sup>n</sup> → <i>n x</i><sup>n−1</sup> · <i>e</i><sup>x</sup> → <i>e</i><sup>x</sup> · <i>a</i><sup>x</sup> → <i>a</i><sup>x</sup> ln <i>a</i> · ln <i>x</i> → 1/<i>x</i>"
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE QUOTIENT RULE, FROM THE PRODUCT RULE, TAP A LINE",
          "steps": [
            {
              "eq": "let y = u/v, so u = y v",
              "why": "Rather than run a fresh first-principle argument, clear the fraction. The quotient has become a product, and you already own the product rule."
            },
            {
              "eq": "differentiate both sides: u′ = y′v + y v′",
              "why": "The product rule applied to y v. Both y and v are functions of x, so both contribute a term."
            },
            {
              "eq": "y′ = (u′ − y v′)/v",
              "why": "Solve for the thing you actually want. Nothing subtle here, just rearrangement, and it is legal wherever v ≠ 0."
            },
            {
              "eq": "substitute y = u/v: y′ = (u′v − u v′)/v²",
              "why": "Put the fraction back and tidy over a common denominator of v². The rules interlock: the quotient rule is not an independent fact, it is the product rule rearranged, which is also why the order u′v − uv′ is fixed and reversing it flips the sign."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Differentiating any expression at all",
          "steps": [
            "<b>Simplify first if algebra makes it cleaner.</b> (<i>x</i><sup>2</sup> + 1)/<i>x</i> is <i>x</i> + <i>x</i><sup>−1</sup>, and one line beats a quotient-rule slog every time. Ask this question before you reach for any rule.",
            "<b>Identify the outermost operation.</b> Is the whole expression a sum, a product, a quotient or a composition? That decides which rule fires first.",
            "<b>Apply that rule</b>, generating the derivatives of the sub-pieces as new sub-problems, and solve those the same way.",
            "<b>For compositions, peel outside-in.</b> Differentiate the outer function keeping the inside intact, then <b>multiply by the derivative of the inside</b>, and repeat for every nested layer until you reach a bare <i>x</i>."
          ]
        },
        {
          "t": "p",
          "html": "Now the payback. You built derivatives out of limits, and derivatives hand something back: <b>L’Hopital’s rule</b>. If <i>f</i> and <i>g</i> both crash to zero at <i>a</i>, the ratio <i>f</i>/<i>g</i> is a race between two collapses, and the natural way to judge a race is by speed. Near <i>a</i> each function is approximately its own tangent line through (<i>a</i>, 0), so <i>f</i>(<i>x</i>)/<i>g</i>(<i>x</i>) behaves like <i>f</i>′(<i>a</i>)(<i>x</i> − <i>a</i>) over <i>g</i>′(<i>a</i>)(<i>x</i> − <i>a</i>), and the brackets cancel. Differentiating the top and the bottom <b>separately</b> is not an algebraic trick and it is emphatically not the quotient rule: it is a statement about competing rates of vanishing."
        },
        {
          "t": "formula",
          "kicker": "L’HOPITAL’S RULE",
          "tag": "for 0/0 and infinity over infinity only",
          "main": "lim f(x)/g(x) = lim f′(x)/g′(x)",
          "legend": [
            "the three conditions: <i>f</i>, <i>g</i> differentiable near <i>a</i> except possibly at <i>a</i>; <i>g</i>′(<i>x</i>) ≠ 0 there; and lim <i>f</i>′/<i>g</i>′ must itself exist, finitely or as ±∞",
            "<i>a</i> may be a finite point, a one-sided approach, or ±∞, and the rule may be repeated as long as the form is still indeterminate at each stage",
            "condition three is the one students drop: if <i>f</i>′/<i>g</i>′ has no limit, the rule is <b>silent</b>, and the original limit may still exist perfectly well"
          ],
          "note": "A Class 12 theorem, bridged in like the chain rule. A Boards script must show the syllabus method, so use L'Hopital to check an answer, and to move fast in an MCQ where only the number scores. Never use it to prove a junction: d/dx sin x was itself established from sin x / x → 1, so the argument would be circular."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · TWO COLLAPSES, RACED BY THEIR SLOPES",
          "chips": ["BOTH CRASH TO ZERO", "EACH BECOMES ITS TANGENT", "ZOOMED RIGHT IN"],
          "captions": [
            "Two functions, f(x) = 2x + x² in ink and g(x) = 3x − x² in amber, both passing through the origin. At x = 0 the ratio f/g is 0/0, and the picture shows why that decides nothing: the answer depends entirely on which one collapses faster, and both are collapsing.",
            "The two dashed grey lines are the tangents at the origin, y = 2x and y = 3x. Their slopes are f′(0) = 2 and g′(0) = 3, and near the origin each curve is hugging its own tangent.",
            "Zoom to a quarter of the previous window and the curves have become their tangents; you can no longer tell the solid curve from the dashed line. So near 0 the ratio f/g is behaving like 2x over 3x, the x cancels, and the limit is f′(0)/g′(0) = 2/3. That is L'Hopital's rule, drawn."
          ],
          "frames": [
            {
              "x": [-1.2, 1.2],
              "y": [-1.6, 3.4],
              "curves": [
                { "c": "poly", "coeffs": [0, 2, 1] },
                { "c": "poly", "coeffs": [0, 3, -1] }
              ],
              "points": [{ "x": 0, "y": 0, "label": "0" }]
            },
            {
              "x": [-1.2, 1.2],
              "y": [-1.6, 3.4],
              "curves": [
                { "c": "poly", "coeffs": [0, 2, 1] },
                { "c": "poly", "coeffs": [0, 3, -1] },
                { "c": "line", "m": 2, "k": 0, "dash": true, "soft": true },
                { "c": "line", "m": 3, "k": 0, "dash": true, "soft": true }
              ],
              "points": [{ "x": 0, "y": 0, "label": "0" }]
            },
            {
              "x": [-0.3, 0.3],
              "y": [-1, 1],
              "curves": [
                { "c": "poly", "coeffs": [0, 2, 1] },
                { "c": "poly", "coeffs": [0, 3, -1] },
                { "c": "line", "m": 2, "k": 0, "dash": true, "soft": true },
                { "c": "line", "m": 3, "k": 0, "dash": true, "soft": true }
              ],
              "labels": [{ "x": 0.13, "y": 0.86, "text": "ratio → 2/3", "soft": true }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Applying L’Hopital safely",
          "steps": [
            "<b>Substitute the limiting value and confirm the form is 0/0 or ∞/∞.</b> If it is anything else, stop. This single check kills the most common misuse, which produces confident nonsense because nothing in the algebra complains.",
            "<b>Convert first if the form is 0 × ∞, ∞ − ∞ or 1<sup>∞</sup></b>, using the reciprocal move, the conjugate, or the 1<sup>∞</sup> rule from Topic 03. L’Hopital reads fractions only.",
            "<b>Differentiate the numerator and the denominator separately.</b> Write <i>f</i>′/<i>g</i>′, never (<i>f</i>/<i>g</i>)′. The quotient rule answers a completely different question.",
            "<b>Substitute again.</b> A number is the answer. Another 0/0 or ∞/∞ means repeat, treating each round as a fresh problem from step 1, because the form may have quietly become number-over-zero, where a further application is illegal.",
            "<b>If the ratios never settle, abandon the rule.</b> For lim<sub>x→∞</sub> (<i>x</i> + sin <i>x</i>)/<i>x</i> the ratio of derivatives is 1 + cos <i>x</i>, which oscillates forever, yet the original limit is plainly 1. A failure to converge tells you nothing at all."
          ]
        },
        {
          "t": "p",
          "html": "The second instrument is the <b>series expansion</b>, and it is the high-resolution microscope. Instead of the crude sin <i>x</i> ≈ <i>x</i> you carry the full ruler sin <i>x</i> = <i>x</i> − <i>x</i><sup>3</sup>/6 + <i>x</i><sup>5</sup>/120 − ⋯, and the term you need simply appears. This matters when both parts vanish to high order. In (<i>x</i> − sin <i>x</i>)/<i>x</i><sup>3</sup> the numerator is a difference of two near-identical quantities, so replacing sin <i>x</i> by <i>x</i> gives 0, and 0 is wrong. The thing you threw away <b>is</b> the answer, and the rule that saves you is unforgiving: <b>if the denominator vanishes like <i>x</i><sup>m</sup>, expand the numerator to order <i>x</i><sup>m</sup> inclusive</b>."
        },
        {
          "t": "defgrid",
          "title": "The Maclaurin table, all about x = 0",
          "rows": [
            {
              "k": "<i>e</i><sup>x</sup>",
              "v": "1 + <i>x</i> + <i>x</i><sup>2</sup>/2! + <i>x</i><sup>3</sup>/3! + ⋯, valid for all real <i>x</i>"
            },
            {
              "k": "sin <i>x</i> · cos <i>x</i>",
              "v": "<i>x</i> − <i>x</i><sup>3</sup>/3! + <i>x</i><sup>5</sup>/5! − ⋯ · 1 − <i>x</i><sup>2</sup>/2! + <i>x</i><sup>4</sup>/4! − ⋯, both for all <i>x</i>"
            },
            {
              "k": "tan <i>x</i> · ln(1 + <i>x</i>)",
              "v": "<i>x</i> + <i>x</i><sup>3</sup>/3 + ⋯ for |<i>x</i>| < π/2 · <i>x</i> − <i>x</i><sup>2</sup>/2 + <i>x</i><sup>3</sup>/3 − ⋯ for −1 < <i>x</i> ≤ 1"
            },
            {
              "k": "(1 + <i>x</i>)<sup>n</sup>",
              "v": "1 + <i>nx</i> + <i>n</i>(<i>n</i> − 1)<i>x</i><sup>2</sup>/2! + ⋯, for |<i>x</i>| < 1 when <i>n</i> is not a non-negative integer, and the ordinary binomial theorem when it is"
            },
            {
              "k": "sin<sup>−1</sup><i>x</i> · tan<sup>−1</sup><i>x</i>",
              "v": "<i>x</i> + <i>x</i><sup>3</sup>/6 + ⋯ · <i>x</i> − <i>x</i><sup>3</sup>/3 + ⋯, both for |<i>x</i>| ≤ 1"
            },
            {
              "k": "The order rule",
              "v": "denominator vanishes like <i>x</i><sup>m</sup> ⇒ expand the numerator to order <i>x</i><sup>m</sup>. The answer is the ratio of the <i>x</i><sup>m</sup> coefficients, and every lower-order term <b>must</b> cancel, which is a free error check"
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Differentiate <i>y</i> = <i>x</i><sup>3</sup> sin <i>x</i>.",
          "steps": [
            "A product with <i>u</i> = <i>x</i><sup>3</sup> and <i>v</i> = sin <i>x</i>, so <i>u</i>′ = 3<i>x</i><sup>2</sup> and <i>v</i>′ = cos <i>x</i>.",
            "d<i>y</i>/d<i>x</i> = <i>u</i>′<i>v</i> + <i>uv</i>′ = 3<i>x</i><sup>2</sup> sin <i>x</i> + <i>x</i><sup>3</sup> cos <i>x</i>.",
            "Factor for a tidy answer, which boards like."
          ],
          "ans": "dy/dx = x²(3 sin x + x cos x)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Differentiate <i>y</i> = (<i>x</i><sup>2</sup> + 1)/<i>x</i>.",
          "steps": [
            "The trap is to fire the quotient rule straight away and wade through [(2<i>x</i>)(<i>x</i>) − (<i>x</i><sup>2</sup> + 1)(1)]/<i>x</i><sup>2</sup>. It works, and it is slow and error-prone.",
            "Split the fraction first: <i>y</i> = <i>x</i> + 1/<i>x</i> = <i>x</i> + <i>x</i><sup>−1</sup>.",
            "Now it is a sum of two powers: d<i>y</i>/d<i>x</i> = 1 − <i>x</i><sup>−2</sup>."
          ],
          "ans": "dy/dx = 1 − 1/x²"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Differentiate <i>y</i> = sin(cos(<i>x</i><sup>2</sup>)).",
          "steps": [
            "Three nested layers, so peel from the outside in and keep each inside intact as you go.",
            "Outermost sin( · ) differentiates to cos( · ), keeping cos(<i>x</i><sup>2</sup>) untouched: cos(cos(<i>x</i><sup>2</sup>)).",
            "Next layer: cos(<i>x</i><sup>2</sup>) differentiates to −sin(<i>x</i><sup>2</sup>), still keeping <i>x</i><sup>2</sup> intact.",
            "Innermost: <i>x</i><sup>2</sup> differentiates to 2<i>x</i>. Multiply the three factors together. One missed inner derivative and the whole answer is wrong, which is the skill being tested."
          ],
          "ans": "dy/dx = −2x sin(x²) cos(cos(x²))"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Evaluate lim<sub>x→0</sub> (tan <i>x</i> − sin <i>x</i>)/<i>x</i><sup>3</sup>, and check it by a second route.",
          "steps": [
            "The trap first: tan <i>x</i> ≈ <i>x</i> and sin <i>x</i> ≈ <i>x</i> give a numerator of 0 and the seductive answer 0. Wrong. Those approximations hide an error of size <i>x</i><sup>3</sup>, and you are dividing by <i>x</i><sup>3</sup>.",
            "Junction route: tan <i>x</i> − sin <i>x</i> = sin <i>x</i> (1 − cos <i>x</i>)/cos <i>x</i>. So the expression is (sin <i>x</i>/<i>x</i>) · ((1 − cos <i>x</i>)/<i>x</i><sup>2</sup>) · (1/cos <i>x</i>) → 1 · ½ · 1.",
            "Series route: with <i>m</i> = 3, expand to order <i>x</i><sup>3</sup>. tan <i>x</i> = <i>x</i> + <i>x</i><sup>3</sup>/3 and sin <i>x</i> = <i>x</i> − <i>x</i><sup>3</sup>/6, so the <i>x</i> terms cancel, which is the free error check, and the numerator is (1/3 + 1/6)<i>x</i><sup>3</sup> = <i>x</i><sup>3</sup>/2.",
            "L’Hopital route: three rounds of differentiation land on (cos <i>x</i> − 4 sec<sup>2</sup><i>x</i> + 6 sec<sup>4</sup><i>x</i>)/6, which is (1 − 4 + 6)/6 at <i>x</i> = 0. Three rounds for what the series gave in one line, which is exactly why Advanced students reach for the expansion first."
          ],
          "ans": "1/2"
        },
        {
          "t": "mcq",
          "q": "d/d<i>x</i> [(<i>x</i><sup>2</sup> + 1)<sup>3</sup>] equals:",
          "correct": 2,
          "opts": [
            {
              "label": "3(<i>x</i><sup>2</sup> + 1)<sup>2</sup>",
              "nudge": "The inner derivative has been dropped. This is the single most common chain-rule error in the paper: every composition contributes a times-derivative-of-the-inside."
            },
            {
              "label": "3(<i>x</i><sup>2</sup> + 1)<sup>2</sup> · 2",
              "nudge": "This multiplies by the stray constant 2 rather than by the inner derivative 2x. The inside is x² + 1, whose derivative is 2x."
            },
            {
              "label": "6<i>x</i>(<i>x</i><sup>2</sup> + 1)<sup>2</sup>",
              "nudge": null
            },
            {
              "label": "2<i>x</i>",
              "nudge": "This keeps only the inner derivative and throws the outer one away. The chain rule needs both factors, never one."
            }
          ],
          "solution": "Power chain rule: 3(x² + 1)² × d/dx(x² + 1) = 3(x² + 1)² × 2x = 6x(x² + 1)²."
        },
        {
          "t": "mcq",
          "q": "If <i>y</i> = <i>u</i><sup>3</sup> and <i>u</i> = 2<i>x</i> + 1, then d<i>y</i>/d<i>x</i> at <i>x</i> = 0 equals:",
          "correct": 1,
          "opts": [
            {
              "label": "3",
              "nudge": "This uses only dy/du = 3u² = 3 and stops. The chain has a second link and the second link is worth a factor of 2."
            },
            {
              "label": "6",
              "nudge": null
            },
            {
              "label": "2",
              "nudge": "This uses only du/dx = 2. That is the inner rate on its own, with the outer one discarded."
            },
            {
              "label": "12",
              "nudge": "This is 3u² with u taken as 2 rather than as u = 2(0) + 1 = 1, and with the inner derivative dropped as well. Two separate slips landing on one number."
            }
          ],
          "solution": "dy/dx = (dy/du)(du/dx) = 3u² × 2. At x = 0 the intermediate variable is u = 1, so the answer is 3(1)² × 2 = 6. Evaluate u before you substitute, not after."
        },
        {
          "t": "mcq",
          "q": "lim<sub>x→0</sub> (tan <i>x</i> − <i>x</i>)/<i>x</i><sup>3</sup> equals:",
          "correct": 0,
          "opts": [
            {
              "label": "1/3",
              "nudge": null
            },
            {
              "label": "1/6",
              "nudge": "That is the answer to (x − sin x)/x³. The tan expansion carries +1/3 at the cubic term and the sine expansion carries −1/6: learn the two as a contrasting pair."
            },
            {
              "label": "0",
              "nudge": "Premature truncation. Replacing tan x by x makes the numerator vanish, but the discarded x³/3 is the entire answer."
            },
            {
              "label": "1/2",
              "nudge": "That is the answer to (tan x − sin x)/x³, a neighbouring problem with a different numerator."
            }
          ],
          "solution": "The denominator vanishes like x³, so m = 3 and the numerator must be expanded to that order. tan x = x + x³/3 + ⋯, the x terms cancel, and the coefficient of x³ that survives is 1/3."
        },
        {
          "t": "mcq",
          "q": "lim<sub>x→0</sub> (<i>x</i><sup>2</sup> + 3<i>x</i> + 2)/(<i>x</i> + 1) equals:",
          "correct": 0,
          "opts": [
            {
              "label": "2",
              "nudge": null
            },
            {
              "label": "3",
              "nudge": "This is L’Hopital applied illegally. Differentiating top and bottom gives (2x + 3)/1 → 3, but the form was never 0/0, so the rule did not apply and the answer is meaningless."
            },
            {
              "label": "0",
              "nudge": "This reports the value of x rather than the value of the function. The limit asks what f approaches, not what x approaches."
            },
            {
              "label": "does not exist",
              "nudge": "This assumes any question phrased as “evaluate the limit” must be a trick. Most of them are not, and this one substitutes cleanly."
            }
          ],
          "solution": "Substitute: (0 + 0 + 2)/(0 + 1) = 2. The form is not indeterminate, so no machinery is needed and none is permitted. This is why step 1 of the L'Hopital procedure exists."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Differentiate <i>y</i> = <i>x</i><sup>4</sup> + 3<i>x</i><sup>2</sup> − 7.",
              "a": "Term by term: 4x³ + 6x. A constant differentiates to 0."
            },
            {
              "q": "[JEE Main] Differentiate <i>y</i> = <i>x</i>/(<i>x</i><sup>2</sup> + 1).",
              "a": "Quotient rule: [(1)(x² + 1) − x(2x)]/(x² + 1)² = (1 − x²)/(x² + 1)²."
            },
            {
              "q": "[JEE Main] Differentiate <i>y</i> = cos(5<i>x</i><sup>2</sup>).",
              "a": "Outer cos differentiates to −sin, inside kept whole; inner 5x² differentiates to 10x. So dy/dx = −10x sin(5x²)."
            },
            {
              "q": "[JEE Advanced] Differentiate <i>y</i> = (1 + <i>x</i><sup>2</sup>)<sup>10</sup> sin <i>x</i>.",
              "a": "Product rule with a power chain inside: 10(1 + x²)⁹(2x) sin x + (1 + x²)¹⁰ cos x = 20x(1 + x²)⁹ sin x + (1 + x²)¹⁰ cos x."
            },
            {
              "q": "[JEE Advanced] Evaluate lim<sub>x→0</sub> (<i>x</i> − sin <i>x</i>)/<i>x</i><sup>3</sup>.",
              "a": "m = 3, so expand sin x = x − x³/6 + ⋯. The numerator becomes x³/6 + ⋯, and the limit is the coefficient 1/6. L'Hopital gets there too, in three rounds."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Forgetting the inner derivative.</b> d/d<i>x</i> sin(<i>x</i><sup>2</sup>) is 2<i>x</i> cos(<i>x</i><sup>2</sup>), never cos(<i>x</i><sup>2</sup>). Every composition contributes a times-derivative-of-the-inside.",
            "<b>Reversing the quotient rule.</b> The numerator is <i>u</i>′<i>v</i> − <i>uv</i>′, top-derivative-times-bottom first. Swap the order and the sign of the whole answer flips.",
            "<b>Differentiating before simplifying.</b> An unsimplified quotient or product wastes time and multiplies the chances of an error. Always glance for the algebraic shortcut first.",
            "<b>Applying L’Hopital to a form that is not indeterminate</b>, or writing (<i>f</i>/<i>g</i>)′ and calling it L’Hopital. Substitute and name the form first, then differentiate top and bottom <b>independently</b>: no cross terms, no <i>g</i><sup>2</sup>.",
            "<b>Truncating an expansion below the order of the denominator.</b> The commonest single error in Advanced limit questions. Find <i>m</i> first, expand to <i>x</i><sup>m</sup>, and use the cancellation of the lower terms as proof you did it right."
          ]
        },
        {
          "t": "protip",
          "html": "for compositions, say the mantra out loud: derivative of the outside with the inside kept whole, times derivative of the inside, and repeat per layer until you hit a bare x. and memorise just four cubic coefficients, sin gives −1/6, tan gives +1/3, e to the x gives +1/6 and ln(1 + x) gives +1/3. those four numbers answer a startling share of advanced limit questions on sight."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "(u ± v)′ = u′ ± v′ · (cu)′ = cu′",
              "note": "the two that behave as you would guess"
            },
            {
              "f": "(uv)′ = u′v + uv′ · (u/v)′ = (u′v − uv′)/v²",
              "note": "cross term always, and the order is fixed"
            },
            {
              "f": "dy/dx = (dy/du)(du/dx) · d/dx[g]ⁿ = n[g]ⁿ⁻¹ g′",
              "note": "never drop the inside derivative"
            },
            {
              "f": "lim f/g = lim f′/g′, for 0/0 and ∞/∞ only",
              "note": "check the form before every round"
            },
            {
              "f": "denominator ~ xᵐ ⇒ expand the numerator to xᵐ",
              "note": "the answer is the ratio of those coefficients"
            }
          ],
          "aids": [
            "“first d-second plus second d-first”",
            "“low d-high minus high d-low, over low squared”",
            "“expand as deep as the denominator is low”"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Infinity, Jumps and Sequences",
      "chip": "06 INFINITY",
      "kalam": "far out, only the top powers matter",
      "blocks": [
        {
          "t": "p",
          "html": "Every limit so far asked the same question: as <i>x</i> creeps up to a finite point, what finite value does <i>f</i> approach? Two situations escape that mould, and a complete picture needs both. The first is <b>end behaviour</b>. Picture zooming <b>out</b> on a graph until the fine detail vanishes and only the overall trend remains. For (3<i>x</i><sup>2</sup> + 5)/(6<i>x</i><sup>2</sup> − <i>x</i>) the small terms become irrelevant far out, only the highest powers matter, and the function settles onto 3/6 = 1/2. The dominant term wins, the way the single ₹2000 note in your wallet decides its value no matter how many coins rattle alongside it."
        },
        {
          "t": "think",
          "html": "for a rational function as x runs out to infinity, mentally erase everything except the highest power on top and bottom. their ratio is the limit. the rest is noise that 1/x washes away."
        },
        {
          "t": "formula",
          "kicker": "POWERS AT INFINITY, AND THE DEGREE RULE",
          "tag": "three cases, and only three",
          "main": "1/xᵏ → 0 and xᵏ → ∞ as x → ∞, for k > 0",
          "legend": [
            "top degree < bottom degree ⇒ the limit is <b>0</b>",
            "top degree = bottom degree ⇒ the limit is the <b>ratio of the leading coefficients</b>",
            "top degree > bottom degree ⇒ the limit is <b>±∞</b>, so there is no finite limit"
          ],
          "note": "The degree rule is not a separate fact. It is what dividing every term by the highest power in the denominator always produces, once every 1/xᵏ has gone to zero. So compare degrees first, and reach for the division only when you want the working on paper."
        },
        {
          "t": "p",
          "html": "The second shape to know is <b>∞ − ∞</b>, which is not zero and is not anything else until you resolve it. For a difference of surds, rationalise by the conjugate and then divide by the highest power. And here is where the chapter’s most dependable trap lives. When you pull an <i>x</i> out of a square root you are really pulling out <b>√<i>x</i><sup>2</sup> = |<i>x</i>|</b>. For <i>x</i> → +∞ that is just <i>x</i> and nobody notices. For <i>x</i> → −∞ it is −<i>x</i>, and that single sign is the whole question. The safe habit is to substitute <i>x</i> = −<i>t</i> with <i>t</i> → +∞, which makes every sign explicit instead of remembered. A related form, <b>0 × ∞</b>, is handled by moving one factor downstairs as its reciprocal, turning the product into a 0/0 or an ∞/∞ that your existing tools can eat."
        },
        {
          "t": "formula",
          "kicker": "THE TWO SURD LIMITS, WITH THEIR DIRECTIONS",
          "tag": "memorise the pair, never one alone",
          "main": "√(x² + bx) − x → b/2 at +∞ · √(x² + bx) + x → −b/2 at −∞",
          "legend": [
            "at +∞ it is the <b>difference</b> that is indeterminate, since both pieces are large and positive",
            "at −∞ it is the <b>sum</b> that is indeterminate, because −<i>x</i> is now large and positive too; the difference simply runs off to +∞",
            "always √<i>x</i><sup>2</sup> = |<i>x</i>|, so extract −<i>x</i> from the root when <i>x</i> < 0"
          ],
          "note": "Quoting the first line at −∞ is the single most punished reflex in this family. Memorise the direction along with the formula or do not memorise it at all."
        },
        {
          "t": "p",
          "html": "Now the other escapee: the limit that fails at a <b>jump</b>. Think of an autorickshaw fare meter, or electricity billed in slabs. The charge holds flat, then jumps at each boundary. Approach a boundary from the left and you read the lower slab; approach from the right and you read the higher one. The two disagree, so nothing is being approached and the limit does not exist. The <b>greatest integer function</b> [<i>x</i>], the largest integer ≤ <i>x</i>, is exactly this staircase, and it is the classic exam vehicle for testing whether you really understand one-sided limits."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · THE STAIRCASE",
          "chips": ["THE WHOLE STAIRCASE", "AT AN INTEGER", "BETWEEN INTEGERS"],
          "captions": [
            "y = [x], the greatest integer function, over four steps. Each step is flat and each is closed on the left and open on the right, because [x] takes its new value the instant x reaches an integer and holds it until just before the next one. Every filled dot sits at an integer and every hollow dot sits just below the next one.",
            "Zoom on x = 2. Just below 2 the function reads 1, so the LHL is 1. At 2 and just above it reads 2, so the RHL is 2. They differ by exactly 1, which is why the limit fails at every integer without exception. Note that f(2) = 2 exists perfectly well: the value is fine, it is the limit that is missing.",
            "Now look at 1.6, or any non-integer. The whole shaded neighbourhood sits on one flat step, so the function is locally constant there and both sides read the same 1. The limit exists and equals [1.6] = 1. A staircase is only dangerous at its corners."
          ],
          "frames": [
            {
              "x": [-1.4, 3.4],
              "y": [-1.6, 3.4],
              "segments": [
                { "from": [-1, -1], "to": [0, -1] },
                { "from": [0, 0], "to": [1, 0] },
                { "from": [1, 1], "to": [2, 1] },
                { "from": [2, 2], "to": [3, 2] },
                { "from": [3, 3], "to": [3.4, 3] }
              ],
              "points": [
                { "x": -1, "y": -1 },
                { "x": 0, "y": -1, "open": true },
                { "x": 0, "y": 0 },
                { "x": 1, "y": 0, "open": true },
                { "x": 1, "y": 1 },
                { "x": 2, "y": 1, "open": true },
                { "x": 2, "y": 2 },
                { "x": 3, "y": 2, "open": true },
                { "x": 3, "y": 3 }
              ]
            },
            {
              "x": [1.2, 2.8],
              "y": [0.4, 2.6],
              "curves": [{ "c": "vline", "x": 2, "dash": true, "soft": true }],
              "segments": [
                { "from": [1.2, 1], "to": [2, 1] },
                { "from": [2, 2], "to": [2.8, 2] }
              ],
              "points": [
                { "x": 2, "y": 1, "label": "LHL = 1", "open": true },
                { "x": 2, "y": 2, "label": "RHL = 2" }
              ]
            },
            {
              "x": [1.2, 2.8],
              "y": [0.4, 2.6],
              "bands": [{ "x0": 1.35, "x1": 1.85 }],
              "segments": [
                { "from": [1.2, 1], "to": [2, 1] },
                { "from": [2, 2], "to": [2.8, 2] }
              ],
              "points": [{ "x": 1.6, "y": 1, "label": "[1.6] = 1" }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE JUMP FACTS WORTH CARRYING",
          "tag": "greatest integer, modulus, signum",
          "main": "at an integer n: LHL [x] = n − 1 and RHL [x] = n, so the limit fails",
          "legend": [
            "at a non-integer <i>a</i> the bracket is locally constant, so lim [<i>x</i>] = [<i>a</i>] and the limit exists",
            "lim |<i>x</i>| = |<i>a</i>| everywhere, but lim<sub>x→0</sub> |<i>x</i>|/<i>x</i> fails, with LHL = −1 and RHL = +1",
            "one-sided infinite limits can disagree in sign: 1/<i>x</i> → +∞ from the right and −∞ from the left, while 1/<i>x</i><sup>2</sup> → +∞ from both"
          ],
          "note": "∞ is a direction, not a number. Writing lim = ∞ records how a limit fails; in the strict finite sense the limit does not exist, and you cannot do ordinary arithmetic with the symbol."
        },
        {
          "t": "p",
          "html": "One structural gap is left. Every limit in the chapter so far has been the limit of a function of a <b>continuous</b> variable: <i>x</i> slides. A <b>sequence</b> <i>a</i><sub>n</sub> is a function whose input is restricted to the natural numbers, and as <i>n</i> grows it does not slide, it <b>hops</b>. Picture the Delhi Metro’s Yellow Line. A car on the road above can stop anywhere at all, outside a shop or mid-block. That is <i>x</i>. The train below can only ever be at a station. That is <i>n</i>. There is nothing between <i>n</i> = 7 and <i>n</i> = 8, so there is no left side and no right side and no finite point to approach. The only question a sequence limit can ask is whether the terms settle."
        },
        {
          "t": "def",
          "term": "Limit of a sequence",
          "html": "lim<sub>n→∞</sub> <i>a</i><sub>n</sub> = <i>L</i> means the terms become and remain arbitrarily close to <i>L</i> for all sufficiently large <i>n</i>, and the sequence is then <b>convergent</b>. If the terms grow without bound it <b>diverges</b> to ±∞; if they neither settle nor grow without bound it <b>oscillates</b>. In the last two cases the limit does not exist. Do not import LHL and RHL here: writing lim<sub>n→3−</sub> is meaningless, because there are no indices between 2 and 3."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · THE CAR AND THE TRAIN",
          "chips": ["THE CAR, x SLIDES", "THE TRAIN, n HOPS", "THE ONE-WAY ARROW"],
          "captions": [
            "y = sin(πx) as a function of a real variable. The car drives through every value on the way out, so it sees the curve swinging between −1 and +1 forever and never settling. As a function limit, this does not exist.",
            "The same expression sampled only at the integers. sin(nπ) = 0 for every integer n, so the train stops at nothing but zeros: the sequence is 0, 0, 0, and its limit is a perfectly ordinary 0. The curve is drawn faintly behind to show what the train drove past without ever visiting.",
            "The dots on their own, which is all a sequence ever is. A sequence limit can exist where the function limit does not, so the implication runs one way only: a function limit hands you the sequence limit for free, and a sequence limit tells you nothing whatsoever about the function. Every assertion-reason question in this family lives on that asymmetry."
          ],
          "frames": [
            {
              "x": [0, 8.4],
              "y": [-1.5, 1.5],
              "curves": [{ "c": "sin", "b": 3.14159265 }]
            },
            {
              "x": [0, 8.4],
              "y": [-1.5, 1.5],
              "curves": [{ "c": "sin", "b": 3.14159265, "dash": true, "soft": true }],
              "points": [
                { "x": 1, "y": 0 },
                { "x": 2, "y": 0 },
                { "x": 3, "y": 0 },
                { "x": 4, "y": 0 },
                { "x": 5, "y": 0 },
                { "x": 6, "y": 0 },
                { "x": 7, "y": 0 },
                { "x": 8, "y": 0 }
              ]
            },
            {
              "x": [0, 8.4],
              "y": [-1.5, 1.5],
              "points": [
                { "x": 1, "y": 0 },
                { "x": 2, "y": 0 },
                { "x": 3, "y": 0 },
                { "x": 4, "y": 0 },
                { "x": 5, "y": 0 },
                { "x": 6, "y": 0 },
                { "x": 7, "y": 0 },
                { "x": 8, "y": 0 }
              ],
              "labels": [
                { "x": 4.2, "y": 1, "text": "function limit wins", "soft": true },
                { "x": 4.2, "y": -1, "text": "never the reverse", "soft": true }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE BRIDGE THEOREM",
          "tag": "one way, and only one",
          "main": "lim f(x) = L as x → ∞  ⇒  lim f(n) = L as n → ∞",
          "legend": [
            "why it holds: the integers past any cut-off are among the reals past it, so a promise about all large <i>x</i> automatically covers all large <i>n</i>",
            "the converse is <b>false</b>, and the standing counterexample is <i>f</i>(<i>x</i>) = sin(π<i>x</i>): the sequence limit is 0 while the function limit does not exist"
          ],
          "note": "This is what licenses attacking a routine sequence limit with the degree rule. Almost every ordinary sequence question is a function limit in disguise, and the bridge is the disguise remover."
        },
        {
          "t": "defgrid",
          "title": "Standard sequence limits, and who beats whom",
          "rows": [
            {
              "k": "1/<i>n</i><sup>k</sup> · <i>a</i><sup>n</sup>",
              "v": "→ 0 for <i>k</i> > 0 · → 0 for |<i>a</i>| < 1, → ∞ for <i>a</i> > 1, oscillates for <i>a</i> ≤ −1"
            },
            {
              "k": "<i>a</i><sup>1/n</sup> · <i>n</i><sup>1/n</sup>",
              "v": "both → 1, the first for any <i>a</i> > 0"
            },
            {
              "k": "(1 + <i>a</i>/<i>n</i>)<sup>n</sup> · (<i>n</i>!)<sup>1/n</sup>/<i>n</i>",
              "v": "→ <i>e</i><sup>a</sup> for every real <i>a</i> · → 1/<i>e</i>"
            },
            {
              "k": "The growth ordering",
              "v": "ln <i>n</i> ≪ <i>n</i><sup>k</sup> ≪ <i>a</i><sup>n</sup> ≪ <i>n</i>! ≪ <i>n</i><sup>n</sup>, for <i>k</i> > 0 and <i>a</i> > 1. Any ratio with a later item downstairs tends to 0"
            },
            {
              "k": "Max-base rule",
              "v": "(<i>a</i><sub>1</sub><sup>n</sup> + ⋯ + <i>a</i><sub>m</sub><sup>n</sup>)<sup>1/n</sup> → the largest <i>a</i><sub>i</sub>. Nothing to compute: read off the biggest base"
            },
            {
              "k": "Sums, from Chapter 9",
              "v": "Σ<i>k</i> = <i>n</i>(<i>n</i> + 1)/2 · Σ<i>k</i><sup>2</sup> = <i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)/6 · Σ<i>k</i><sup>3</sup> = [<i>n</i>(<i>n</i> + 1)/2]<sup>2</sup>"
            }
          ]
        },
        {
          "t": "proc",
          "title": "A sum whose length grows with n",
          "steps": [
            "<b>Count the terms first.</b> The algebra of limits splits a sum of a <b>fixed</b> number of pieces and says nothing about one whose length grows with <i>n</i>. The proof is one line: 1/<i>n</i> + 1/<i>n</i> + ⋯ + 1/<i>n</i> with <i>n</i> terms has every term tending to 0, and the sum is exactly 1 for every <i>n</i>.",
            "<b>Pull every factor free of <i>k</i> outside the summation.</b> As far as the sum over <i>k</i> is concerned, <i>n</i> is a constant.",
            "<b>Sum in closed form</b> with Σ<i>k</i>, Σ<i>k</i><sup>2</sup> or Σ<i>k</i><sup>3</sup> if they apply. A closed form has a fixed number of terms, so the ordinary rules are legal again and the degree rule finishes it.",
            "<b>If it will not sum, sandwich it.</b> Replace every term by the smallest for a lower bound and by the largest for an upper bound, each of which is one multiplication by <i>n</i>. If the two bounds agree in the limit, that common value is the answer.",
            "<b>Never report a bound as the answer.</b> A sandwich only pays out when both slices arrive at the same place, so compute both limits and check they coincide before you write anything down."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Evaluate lim<sub>x→∞</sub> (3<i>x</i><sup>2</sup> + 2<i>x</i> − 1)/(5<i>x</i><sup>2</sup> − <i>x</i> + 4).",
          "steps": [
            "Divide every term by <i>x</i><sup>2</sup>, the highest power in the denominator: (3 + 2/<i>x</i> − 1/<i>x</i><sup>2</sup>)/(5 − 1/<i>x</i> + 4/<i>x</i><sup>2</sup>).",
            "Every 1/<i>x</i><sup>k</sup> → 0, leaving 3/5.",
            "The degree rule agrees in one glance: equal degrees, so take the ratio of the leading coefficients."
          ],
          "ans": "3/5"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate lim<sub>x→∞</sub> (√(<i>x</i><sup>2</sup> + <i>x</i>) − <i>x</i>), and then lim<sub>x→−∞</sub> (√(<i>x</i><sup>2</sup> + <i>x</i>) + <i>x</i>).",
          "steps": [
            "First one. The trap is writing ∞ − ∞ = 0. Rationalise: multiply by the conjugate to get <i>x</i>/(√(<i>x</i><sup>2</sup> + <i>x</i>) + <i>x</i>).",
            "Divide by <i>x</i>, and here <i>x</i> > 0 so √<i>x</i><sup>2</sup> = <i>x</i> with no sign worry: 1/(√(1 + 1/<i>x</i>) + 1) → 1/2.",
            "Second one. Put <i>x</i> = −<i>t</i> with <i>t</i> → +∞, which makes every sign explicit: the expression becomes √(<i>t</i><sup>2</sup> − <i>t</i>) − <i>t</i>.",
            "Rationalise again: −<i>t</i>/(√(<i>t</i><sup>2</sup> − <i>t</i>) + <i>t</i>) = −1/(√(1 − 1/<i>t</i>) + 1) → −1/2. Note the pairing: at +∞ the <b>difference</b> is the hard one, at −∞ the <b>sum</b> is."
          ],
          "ans": "1/2 at +∞, and −1/2 for the sum at −∞"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Evaluate lim<sub>n→∞</sub> (1<sup>2</sup> + 2<sup>2</sup> + ⋯ + <i>n</i><sup>2</sup>)/<i>n</i><sup>3</sup>.",
          "steps": [
            "The numerator is a sum whose number of terms grows with <i>n</i>, so you may not send each term to its own limit. Sum first.",
            "Chapter 9: Σ<i>k</i><sup>2</sup> = <i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)/6. Write that line out separately, because boards award a method mark for quoting it correctly.",
            "Expand: <i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1) = 2<i>n</i><sup>3</sup> + 3<i>n</i><sup>2</sup> + <i>n</i>, so the expression is (2<i>n</i><sup>3</sup> + 3<i>n</i><sup>2</sup> + <i>n</i>)/6<i>n</i><sup>3</sup>.",
            "Equal degrees, so the limit is 2/6. The bridge theorem is what makes the degree rule legal on a sequence in the first place."
          ],
          "ans": "1/3"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Evaluate lim<sub>n→∞</sub> [ 1/√(<i>n</i><sup>2</sup> + 1) + 1/√(<i>n</i><sup>2</sup> + 2) + ⋯ + 1/√(<i>n</i><sup>2</sup> + <i>n</i>) ].",
          "steps": [
            "The trap: every single term tends to 0, so the sum “must” tend to 0. It does not. There are <i>n</i> terms, each roughly 1/<i>n</i>, so the total is roughly 1.",
            "No closed form exists, so sandwich it. Over <i>k</i> = 1 to <i>n</i> the denominator is smallest at <i>k</i> = 1 and largest at <i>k</i> = <i>n</i>, so every term lies between 1/√(<i>n</i><sup>2</sup> + <i>n</i>) and 1/√(<i>n</i><sup>2</sup> + 1).",
            "There are exactly <i>n</i> terms, so <i>n</i>/√(<i>n</i><sup>2</sup> + <i>n</i>) ≤ <i>S</i><sub>n</sub> ≤ <i>n</i>/√(<i>n</i><sup>2</sup> + 1).",
            "Divide inside each root by <i>n</i><sup>2</sup>: the bounds are 1/√(1 + 1/<i>n</i>) and 1/√(1 + 1/<i>n</i><sup>2</sup>), and both → 1. Both slices arrive at 1, so the filling does too."
          ],
          "ans": "1"
        },
        {
          "t": "mcq",
          "q": "lim<sub>x→∞</sub> (5<i>x</i><sup>3</sup> + 2<i>x</i>)/(3<i>x</i><sup>3</sup> − <i>x</i><sup>2</sup> + 1) equals:",
          "correct": 2,
          "opts": [
            {
              "label": "0",
              "nudge": "That is the answer when the top degree is smaller than the bottom. Here both are 3, so this is the wrong case of the degree rule."
            },
            {
              "label": "∞",
              "nudge": "That is the answer when the top degree is larger. Again the degrees are equal, so nothing runs away."
            },
            {
              "label": "5/3",
              "nudge": null
            },
            {
              "label": "5",
              "nudge": "This reads off the numerator’s leading coefficient and forgets to divide by the denominator’s. The rule is a ratio, not a single number."
            }
          ],
          "solution": "Equal degrees, so the limit is the ratio of the leading coefficients, 5/3. Dividing every term by x³ gives the same thing one line more slowly."
        },
        {
          "t": "mcq",
          "q": "lim<sub>x→2</sub> [<i>x</i>], where [ · ] is the greatest integer function, is:",
          "correct": 2,
          "opts": [
            {
              "label": "2",
              "nudge": "This reports the RHL alone, or equivalently the value [2] = 2. One side is never the limit until you have checked the other."
            },
            {
              "label": "1",
              "nudge": "This reports the LHL alone. Just below 2 the bracket does read 1, but the right-hand walk disagrees."
            },
            {
              "label": "does not exist",
              "nudge": null
            },
            {
              "label": "1.5",
              "nudge": "This invents an average of the two sides. There is no averaging rule, and a bracket function never takes a non-integer value anyway."
            }
          ],
          "solution": "Just below 2 the bracket reads 1 and at or just above it reads 2. LHL ≠ RHL, so the limit does not exist, and the same argument fails at every integer."
        },
        {
          "t": "mcq",
          "q": "lim<sub>x→−∞</sub> (√(<i>x</i><sup>2</sup> + <i>x</i>) − <i>x</i>) equals:",
          "correct": 2,
          "opts": [
            {
              "label": "1/2",
              "nudge": "This is the answer to the same expression at +∞. The student memorised the formula without the direction attached, which is the single most punished reflex in this family."
            },
            {
              "label": "−1/2",
              "nudge": "This is the answer to √(x² + x) + x at −∞. The memory that a sign flips somewhere is right; the wrong sign got flipped."
            },
            {
              "label": "+∞",
              "nudge": null
            },
            {
              "label": "0",
              "nudge": "The ∞ − ∞ = 0 fallacy, applied to an expression that is not even of that form here."
            }
          ],
          "solution": "As x → −∞ the root tends to +∞ and −x tends to +∞ as well, so this is ∞ + ∞ and not indeterminate at all: it grows without bound. Substituting x = −t makes it obvious, since √(t² − t) + t → ∞."
        },
        {
          "t": "mcq",
          "q": "lim<sub>n→∞</sub> <i>n</i><sup>100</sup>/2<sup>n</sup> equals:",
          "correct": 2,
          "opts": [
            {
              "label": "+∞",
              "nudge": "This compares the two at small n, where n¹⁰⁰ is astronomically bigger, and extrapolates. The crossover is late but inevitable: the exponent 100 is fixed while the exponent n keeps growing."
            },
            {
              "label": "1",
              "nudge": "A vague both-go-to-infinity-so-the-ratio-is-1. That is the ∞/∞ fallacy, and the chapter flags it as indeterminate for exactly this reason."
            },
            {
              "label": "0",
              "nudge": null
            },
            {
              "label": "does not exist",
              "nudge": "This confuses “the limit is not a nice number” with “there is no limit”. The limit is a perfectly ordinary 0."
            }
          ],
          "solution": "By the growth ordering nᵏ ≪ aⁿ for a > 1, an exponential beats any fixed power however large. At n = 10⁴ the ratio is already smaller than 10⁻²⁶⁰⁰."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Evaluate lim<sub>x→∞</sub> (4<i>x</i> + 3)/(2<i>x</i> − 1).",
              "a": "Equal degrees, so the ratio of leading coefficients: 4/2 = 2."
            },
            {
              "q": "[JEE Main] Evaluate lim<sub>x→∞</sub> (√(4<i>x</i><sup>2</sup> + <i>x</i>) − 2<i>x</i>).",
              "a": "Rationalise: x/(√(4x² + x) + 2x). Divide by x, legal since x > 0: 1/(√(4 + 1/x) + 2) → 1/4."
            },
            {
              "q": "[JEE Main] Does lim<sub>x→1</sub> [<i>x</i>] exist? Justify with one-sided limits.",
              "a": "Just below 1 the bracket reads 0 and at or above it reads 1. LHL = 0 ≠ 1 = RHL, so it does not exist."
            },
            {
              "q": "[JEE Main] Evaluate lim<sub>n→∞</sub> (5<sup>n</sup> + 7<sup>n</sup>)<sup>1/n</sup>.",
              "a": "The max-base rule: the largest base swallows the rest, so the answer is 7. The sandwich behind it is 7ⁿ ≤ 5ⁿ + 7ⁿ ≤ 2 · 7ⁿ, and 2^(1/n) → 1."
            },
            {
              "q": "[CBSE] Evaluate lim<sub>n→∞</sub> (1 + 2 + ⋯ + <i>n</i>)/<i>n</i><sup>2</sup>.",
              "a": "The count of terms grows, so sum first: n(n + 1)/2 over n² is (n² + n)/2n². Equal degrees give 1/2."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Treating <b>∞ − ∞ as 0</b> or <b>∞/∞ as 1</b>. Both are indeterminate: rationalise, or use the degree rule.",
            "Writing <b>√<i>x</i><sup>2</sup> = <i>x</i> when <i>x</i> is negative</b>. It is always |<i>x</i>|, so extract −<i>x</i> at −∞, or dodge the whole question by substituting <i>x</i> = −<i>t</i>.",
            "<b>Dividing by the wrong power.</b> For a rational limit at infinity, divide by the highest power in the <b>denominator</b>.",
            "Taking a <b>term-by-term limit on a sum of <i>n</i> terms</b>. The algebra of limits splits a fixed number of pieces and no more. Count the terms first.",
            "Running the <b>bridge theorem backwards</b>, or <b>reporting a bound as the limit</b>. A convergent sequence tells you nothing about the function, and a sandwich pays out only when both slices arrive at the same place."
          ]
        },
        {
          "t": "protip",
          "html": "build a three-way triage. is this just a function limit wearing an n? cross the bridge and use the degree rule, and most main-paper sequence questions die in one line. is it a sum whose length grows? then sum it in closed form, or sandwich it. and for anything with a bracket, a modulus, a signum or a piecewise brace, your first reflex is always the same two words: split it."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "1/xᵏ → 0 · degree rule: less → 0, equal → ratio, more → ±∞",
              "note": "far out, only the top powers matter"
            },
            {
              "f": "√(x² + bx) − x → b/2 at +∞ · √(x² + bx) + x → −b/2 at −∞",
              "note": "√x² = |x|, so the direction is part of the formula"
            },
            {
              "f": "[x] at an integer n: LHL = n − 1, RHL = n",
              "note": "so the limit fails at every integer"
            },
            {
              "f": "lim f(x) = L ⇒ lim f(n) = L, never the reverse",
              "note": "the bridge theorem, and sin(πx) breaks the converse"
            },
            {
              "f": "ln n ≪ nᵏ ≪ aⁿ ≪ n! ≪ nⁿ",
              "note": "a later item downstairs sends the ratio to 0"
            }
          ],
          "aids": [
            "“infinity minus infinity is a question, not zero”",
            "“the car slides, the train hops”",
            "“count the terms before you split the sum”"
          ]
        }
      ]
    }
  ]
};

export default ch12Limits;
