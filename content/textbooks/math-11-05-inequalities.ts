/**
 * Chapter 05 · Linear Inequalities, Mathematics, Class 11.
 *
 * Restructured from the Drona Class 11 Mathematics Master Reference (chapter 5,
 * its supplement, and its round-2 addendum) into the block system in
 * design_handoff_textbooks/CONTENT_SPEC.md.
 *
 * Four editorial decisions worth recording:
 *
 * 1. The source is four units plus a supplement unit plus six lettered
 *    addenda. The addenda are not topics, they are extensions of units that
 *    already exist, so they are folded in where they belong: A (quadratic sign
 *    with a parameter) into topic 04, B (domains) and E (repeated factors,
 *    reduce before you draw) into topic 05, C (radicals) into topic 06, D
 *    (modulus regions in the plane) into topic 02, F (writing the system from
 *    a shaded region) into topic 02. That gives six self-contained topics.
 *
 * 2. Every unit of the source carries its own exam-relevance note, but the
 *    reader renders `hook` on topic 1 only. All six notes are merged into that
 *    single hook under bold topic headings, exactly as ch01 does, rather than
 *    losing five paragraphs of real exam guidance.
 *
 * 3. Six `diagram` blocks, three `numberline` and three `plot`, chosen for the
 *    figures where the mark is actually won: hollow versus filled endpoints,
 *    an interval reflected by multiplying through by a negative, dotted versus
 *    solid boundaries, a feasible region as an overlap, a parabola read as
 *    "between or outside", and a modulus read as a distance. A half-plane is
 *    shaded with a staircase of `bands`, since the renderer's band primitive is
 *    a rectangle and a staircase is the honest way to fill a triangle with
 *    them. The source's other figures (the wavy curve itself, the sign table)
 *    are carried in prose, because a picture of them would say less than the
 *    sentence "anchor positive on the far right, then flip at odd roots".
 *
 * 4. The source's own corrigendum is honoured: Unit 3's printed answer to the
 *    consecutive-even-numbers exercise omits the pair (10, 12), and the
 *    corrected answer is the one used here. The source's repeated "no NEET
 *    relevance" note is dropped, because a NEET student is never offered a
 *    Mathematics textbook in the first place.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch05Inequalities: Chapter = {
  "chapter": "05",
  "title": "Linear Inequalities",
  "subject": "Mathematics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Linear Inequalities in One Variable",
      "chip": "01 ONE VARIABLE",
      "kalam": "negative flips, positive sticks",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Linear Inequalities in One Variable</b><br>A guaranteed scorer on the CBSE Boards: expect a 1–2 mark solve-and-represent question, plus a 3–5 mark word problem later in the chapter. In JEE Main it rarely stands alone, but it is the <b>silent workhorse inside domain, range and parameter problems</b>. JEE Advanced never asks it directly, yet every sign analysis and every “find all values of <i>a</i>” question rests on it.<br><br><b>02 · Linear Inequalities in Two Variables</b><br>A reliable Boards earner: a 3-mark “solve graphically” or a 5-mark system appears almost every year, and the reverse problem, <b>writing the inequalities for a shaded region</b>, shows up in the Exemplar. JEE Main treats it as the conceptual seed of Linear Programming in Class 12, so the half-plane and feasible-region ideas matter more than the marks suggest. JEE Advanced leans on the same region-and-vertex reasoning inside optimisation.<br><br><b>03 · Applications and Word Problems</b><br>This is where the chapter earns its marks on the Boards. The Miscellaneous Exercise is almost entirely word problems, and a 3–5 mark “form and solve” question on mixtures, marks, lengths or temperature ranges is near guaranteed. JEE Main embeds the same modelling inside multi-step problems, and JEE Advanced treats constraint modelling as the gateway to optimisation.<br><br><b>04 · Quadratic and Polynomial Inequalities</b><br>Beyond the NCERT chapter, so a Boards-only student may treat it as optional, but it is core to JEE. JEE Main asks quadratic and polynomial sign questions directly, and the parameter form <b>“for which <i>a</i> is this positive for every <i>x</i>?”</b> recurs session after session. JEE Advanced tests the full wavy-curve method with repeated roots.<br><br><b>05 · Rational Inequalities and Domains</b><br>JEE Main territory: nearly every domain question is a sign-analysis question wearing a different hat, and rational inequalities appear both on their own and inside function problems. JEE Advanced pushes into high powers and substitutions, where the marks ride on <b>one isolated point the reduced curve cannot show you</b>.<br><br><b>06 · Modulus and Radical Inequalities</b><br>The Boards touch this lightly: the NCERT Miscellaneous Exercise carries items such as |<i>x</i> − 2| ≥ 5, worth about 2 marks, always with a plain number on the right. JEE Main goes much further, expect a modulus inequality with a <b>variable right-hand side</b>, or a “how many integers satisfy” count, in almost every recent paper. JEE Advanced puts two or more moduli in one question and solves them by splitting the number line."
        },
        {
          "t": "p",
          "html": "You have spent years solving equations. An equation like 2<i>x</i> + 1 = 7 is a demand for <b>exact balance</b>: picture a two-pan weighing scale at the sabzi mandi resting perfectly level. There is exactly one weight, <i>x</i> = 3, that makes it balance, and that single number is your answer."
        },
        {
          "t": "p",
          "html": "An inequality drops the demand for balance. It only asks <b>which side is heavier</b>. 2<i>x</i> + 1 > 7 does not want the one value that levels the scale, it wants every value that tips it. So the answer is no longer a single number, it is a whole stretch of the number line. That is the biggest mental shift in this chapter: the solution of a linear equation is a <b>point</b>, the solution of a linear inequality is an <b>interval</b>."
        },
        {
          "t": "p",
          "html": "Inequalities are everywhere in daily life, far more than equations are. A railway counter says your luggage must weigh at most 15 kg (≤ 15). You need at least 33 marks to pass (≥ 33). You must be 18 or older to vote (age ≥ 18). A shopkeeper promises mangoes under ₹80 a kilo (< 80). None of these is a single number, each describes a <b>band of acceptable values</b>, and that band is exactly what you compute."
        },
        {
          "t": "think",
          "html": "picture the number line as a long highway and 0 as your town. solving an inequality means painting the stretch that holds every acceptable spot. a hollow circle says come infinitely close, but this milestone itself is out. a filled circle says this one counts too."
        },
        {
          "t": "def",
          "term": "Inequality, strict and non-strict",
          "html": "A statement linking two real expressions by one of <b>< , > , ≤ , ≥</b>. With < or > it is <b>strict</b>; with ≤ or ≥ it is <b>non-strict</b> (slack). The set of all values of the variable that make it true is the <b>solution set</b>, and that set is the answer, not the last line of your algebra."
        },
        {
          "t": "def",
          "term": "Linear",
          "html": "The variable appears only to the first power: no <i>x</i><sup>2</sup>, no 1/<i>x</i>, no modulus bars unless they unwind into linear pieces. Every manipulation rule below is safe only inside that guardrail."
        },
        {
          "t": "p",
          "html": "Now the one rule that makes inequalities genuinely different from equations, and the source of more lost marks than any other idea here. With an equation you may multiply both sides by any non-zero number and nothing changes. With an inequality, <b>multiplying or dividing by a negative number flips the direction of the sign</b>. Watch: −2 < 3 is true. Multiply both sides by −1 and you are comparing 2 with −3, and the true statement is 2 > −3. Geometrically, multiplying by −1 reflects every point across 0, and a reflection swaps left and right, so “smaller” and “larger” trade places."
        },
        {
          "t": "formula",
          "kicker": "THE ORDER AXIOMS",
          "tag": "your formulas here",
          "main": "a < b ⟹ a + c < b + c",
          "legend": [
            "<i>a</i> < <i>b</i> and <i>c</i> > 0 ⟹ <i>ac</i> < <i>bc</i> and <i>a</i>/<i>c</i> < <i>b</i>/<i>c</i>",
            "<i>a</i> < <i>b</i> and <i>c</i> < 0 ⟹ <i>ac</i> > <i>bc</i> and <i>a</i>/<i>c</i> > <i>b</i>/<i>c</i>, the sign flips",
            "<i>a</i> < <i>b</i> and <i>b</i> < <i>c</i> ⟹ <i>a</i> < <i>c</i>, transitivity"
          ],
          "note": "General form, a ≠ 0: ax + b > 0 gives x > −b/a when a > 0, and x < −b/a when a < 0. Read the sign of a before you divide."
        },
        {
          "t": "defgrid",
          "title": "One answer, three languages",
          "rows": [
            {
              "k": "{x : x ≥ a}",
              "v": "[<i>a</i>, ∞), filled circle at <i>a</i>, shaded right"
            },
            {
              "k": "{x : x > a}",
              "v": "(<i>a</i>, ∞), hollow circle at <i>a</i>, shaded right"
            },
            {
              "k": "{x : a ≤ x ≤ b}",
              "v": "[<i>a</i>, <i>b</i>], both ends filled"
            },
            {
              "k": "{x : a < x ≤ b}",
              "v": "(<i>a</i>, <i>b</i>], hollow at <i>a</i>, filled at <i>b</i>"
            },
            {
              "k": "Brackets",
              "v": "[ ] includes the endpoint, ( ) excludes it"
            },
            {
              "k": "Infinity",
              "v": "∞ and −∞ are not real numbers, always round. [3, ∞] is always wrong"
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "numberline",
          "kicker": "DIAGRAM · TAP AN ANSWER TO SEE ITS ENDPOINTS",
          "mathChips": true,
          "chips": [
            "x > 2",
            "x ≥ 2",
            "x ≤ −2",
            "2 < x ≤ 5"
          ],
          "captions": [
            "Strict. The hollow dot at 2 says come infinitely close, but this milestone itself is out. The answer is (2, ∞), and 2 is not a solution.",
            "Non-strict. The filled dot claims the endpoint, so the answer is [2, ∞) and 2 is a genuine solution. One dot is the whole difference between a mark and a lost mark.",
            "The same idea pointing the other way: x ≤ −2 shades everything to the left of a filled −2, which is (−∞, −2].",
            "A compound inequality is the overlap of two conditions, hollow at 2 and filled at 5. The only integers inside are 3, 4 and 5."
          ],
          "frames": [
            {
              "x": [-4, 6],
              "intervals": [
                { "from": 2, "to": 7, "openLeft": true }
              ]
            },
            {
              "x": [-4, 6],
              "intervals": [
                { "from": 2, "to": 7 }
              ]
            },
            {
              "x": [-4, 6],
              "intervals": [
                { "from": -5, "to": -2 }
              ]
            },
            {
              "x": [-4, 6],
              "intervals": [
                { "from": 2, "to": 5, "openLeft": true, "label": "(2, 5]" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Two more conventions finish the notation. An <b>empty solution set is written ∅</b>, and “all real numbers” is (−∞, ∞), which you may also write as ℝ. Every answer in this topic should be expressible in all three languages: a shaded number line, a set-builder description, and an interval. Examiners ask for any of them, and the interval is the one that travels."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY A NEGATIVE REVERSES THE SIGN, TAP A LINE",
          "steps": [
            {
              "eq": "a < b means b − a > 0",
              "why": "Start from the definition of order. “a is less than b” is precisely the statement that b − a is a positive number. Everything below is that one fact being pushed around."
            },
            {
              "eq": "take any c < 0, then c(b − a) < 0",
              "why": "A positive number multiplied by a negative number is negative. b − a is positive and c is negative, so the product is negative."
            },
            {
              "eq": "cb − ca < 0",
              "why": "Distribute c over the bracket. Nothing new has been assumed about a and b beyond a < b."
            },
            {
              "eq": "cb < ca, that is ca > cb",
              "why": "Add ca to both sides, and adding never disturbs an inequality. We began with a < b and ended with ca > cb: the direction genuinely flipped. This is not a trick or a convention to memorise, it follows from what “less than” means."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "numberline",
          "kicker": "DIAGRAM · WHAT MULTIPLYING BY −1 DOES, TAP A STEP",
          "mathChips": true,
          "chips": [
            "−3 < x < 1",
            "× (−1)"
          ],
          "captions": [
            "Start with −3 < x < 1. The painted stretch sits between −3 and 1, both ends hollow.",
            "Multiply every part by −1 and the stretch is reflected across 0: the values of −x fill (−1, 3). Left and right have traded places, which is exactly why both symbols must flip."
          ],
          "frames": [
            {
              "x": [-5, 5],
              "intervals": [
                { "from": -3, "to": 1, "openLeft": true, "openRight": true, "label": "(−3, 1)" }
              ]
            },
            {
              "x": [-5, 5],
              "intervals": [
                { "from": -1, "to": 3, "openLeft": true, "openRight": true, "label": "(−1, 3)" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "The standard procedure",
          "steps": [
            "<b>Clear all fractions</b> by multiplying every term by the LCM of the denominators. Safe because an LCM of positive integers is positive, so no flip occurs.",
            "<b>Remove brackets</b> by distributing, then <b>collect variable terms on one side and constants on the other</b> using only addition and subtraction. Adding never disturbs the direction, so this stage is risk-free.",
            "<b>Reduce to <i>ax</i> ≶ <i>b</i> and divide by <i>a</i>.</b> This is the only dangerous step: if <i>a</i> < 0, reverse the symbol as you divide.",
            "<b>Write the solution set in interval notation</b>, then represent it on a number line: hollow circles for < and >, filled circles for ≤ and ≥."
          ]
        },
        {
          "t": "p",
          "html": "A double (compound) inequality such as −7 ≤ (3 − 2<i>x</i>)/4 < 5 is <b>one object with three parts</b>. Whatever you do to the middle, do identically to both ends. If a step needs a negative multiplier, the entire chain reverses, and the two endpoints <b>swap their roles</b>, so <i>p</i> ≤ ⋯ < <i>q</i> becomes <i>q</i> > ⋯ ≥ <i>p</i>, which you then re-read left to right. The most common error in the whole topic is operating on the middle and one end only."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Solve 3(2<i>x</i> − 1) ≥ 2(<i>x</i> + 3) − 5 and represent the solution on a number line.",
          "steps": [
            "Remove brackets: 6<i>x</i> − 3 ≥ 2<i>x</i> + 6 − 5, so 6<i>x</i> − 3 ≥ 2<i>x</i> + 1.",
            "Collect (add 3, subtract 2<i>x</i>, both safe moves): 4<i>x</i> ≥ 4.",
            "Divide by +4, positive, so no flip: <i>x</i> ≥ 1. On the line: a filled circle at 1 with the shading running right."
          ],
          "ans": "x ≥ 1, that is [1, ∞)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "Solve the double inequality −7 ≤ (3 − 2<i>x</i>)/4 < 5.",
          "steps": [
            "Multiply all three parts by 4, positive, so the directions hold: −28 ≤ 3 − 2<i>x</i> < 20.",
            "Subtract 3 from all three parts: −31 ≤ −2<i>x</i> < 17.",
            "Divide all three by −2. Both symbols flip and the chain reverses: 31/2 ≥ <i>x</i> > −17/2. Re-read left to right: −17/2 < <i>x</i> ≤ 31/2.",
            "Bracket check: the strict < rode in on the 5 side and the ≤ on the −7 side, and after the flip they correctly attach to the lower and upper bounds. Brackets the other way round means you moved the symbols without moving their inclusivity."
          ],
          "ans": "(−17/2, 31/2]"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the number of integers satisfying both 3<i>x</i> − 2 > 4 and 2(<i>x</i> − 1) ≤ <i>x</i> + 3, and find their sum.",
          "steps": [
            "First: 3<i>x</i> > 6, so <i>x</i> > 2. Second: 2<i>x</i> − 2 ≤ <i>x</i> + 3, so <i>x</i> ≤ 5.",
            "The system demands both, so intersect the solution sets: <i>x</i> ∈ (2, 5].",
            "The integers in (2, 5] are 3, 4, 5. Note 2 is excluded (strict) and 5 is included (non-strict): the marks live in translating a continuous interval into a discrete count."
          ],
          "ans": "3 integers, sum 3 + 4 + 5 = 12"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find all real values of the parameter <i>a</i> for which <i>a</i>(<i>x</i> − 1) < 2<i>x</i> + 3 holds for <b>every</b> real <i>x</i>.",
          "steps": [
            "Gather the <i>x</i>-terms: <i>ax</i> − <i>a</i> < 2<i>x</i> + 3, so (<i>a</i> − 2)<i>x</i> < <i>a</i> + 3. Everything now hinges on the coefficient (<i>a</i> − 2), and the deep step is realising it can vanish.",
            "If <i>a</i> − 2 > 0: dividing gives <i>x</i> < (<i>a</i> + 3)/(<i>a</i> − 2), a half-line, not all of ℝ. Rejected. If <i>a</i> − 2 < 0: dividing flips the sign, <i>x</i> > (<i>a</i> + 3)/(<i>a</i> − 2), again a half-line. Rejected.",
            "If <i>a</i> − 2 = 0, that is <i>a</i> = 2: the inequality collapses to 0 · <i>x</i> < 5, that is 0 < 5, true for every <i>x</i> and independent of <i>x</i>."
          ],
          "ans": "a = 2 only. A “linear” inequality stops being linear the instant its leading coefficient is zero, and that degenerate case is the only one that works here"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Solve <i>x</i>/2 + 3 < <i>x</i>/4 + 5 and give the interval.",
              "a": "<i>x</i>/4 < 2, so <i>x</i> < 8: (−∞, 8)."
            },
            {
              "q": "[CBSE] Solve 5(2 − <i>x</i>) ≥ 3(4 − <i>x</i>) + 2 in interval notation.",
              "a": "10 − 5<i>x</i> ≥ 14 − 3<i>x</i> ⟹ −2<i>x</i> ≥ 4 ⟹ <i>x</i> ≤ −2, the flip earning its keep: (−∞, −2]."
            },
            {
              "q": "[JEE Main] How many integers satisfy −5 < (3 − 2<i>x</i>)/2 ≤ 4?",
              "a": "−13 < −2<i>x</i> ≤ 5 ⟹ −5/2 ≤ <i>x</i> < 13/2: nine integers, −2 through 6."
            },
            {
              "q": "[JEE Main] Solve the system 2<i>x</i> − 1 > <i>x</i> + 2 and 3 − <i>x</i> ≥ 2<i>x</i> − 9.",
              "a": "<i>x</i> > 3 and <i>x</i> ≤ 4, intersected: (3, 4]."
            },
            {
              "q": "[JEE Advanced] Find all real <i>a</i> for which <i>a</i>(<i>x</i> − 1) > <i>x</i> + 3 has no solution.",
              "a": "(<i>a</i> − 1)<i>x</i> > <i>a</i> + 3. Any <i>a</i> ≠ 1 leaves a half-line of solutions; <i>a</i> = 1 collapses it to 0 > 4, false for every <i>x</i>."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The solution set of (2 − 3<i>x</i>)/5 ≤ −4 is:",
          "correct": 1,
          "opts": [
            {
              "label": "(−∞, 22/3]",
              "nudge": "The flip was skipped. Dividing by −3 must reverse ≤ into ≥, the signature error of this topic."
            },
            {
              "label": "[22/3, ∞)",
              "nudge": null
            },
            {
              "label": "(−∞, −22/3]",
              "nudge": "A negative sign was dropped while isolating x, landing the answer on the wrong side of 0."
            },
            {
              "label": "(22/3, ∞)",
              "nudge": "The flip is right but ≤ became >. The endpoint 22/3 satisfies the original inequality, so it belongs."
            }
          ],
          "solution": "Multiply by 5: 2 − 3x ≤ −20, so −3x ≤ −22. Divide by −3 and flip: x ≥ 22/3."
        },
        {
          "t": "mcq",
          "q": "Which interval equals {<i>x</i> : −3 < <i>x</i> ≤ 4}?",
          "correct": 2,
          "opts": [
            {
              "label": "[−3, 4]",
              "nudge": "The square bracket admits −3, but the inequality there is strict."
            },
            {
              "label": "(−3, 4)",
              "nudge": "The round bracket drops 4, but ≤ 4 keeps it."
            },
            {
              "label": "(−3, 4]",
              "nudge": null
            },
            {
              "label": "[−3, 4)",
              "nudge": "Both brackets are reversed. Map each inequality to its own bracket before writing anything."
            }
          ],
          "solution": "Strict at −3 gives a round bracket, non-strict at 4 gives a square one: (−3, 4]."
        },
        {
          "t": "mcq",
          "q": "The solution of −2 ≤ 2<i>x</i> − 4 ≤ 6 is:",
          "correct": 0,
          "opts": [
            {
              "label": "[1, 5]",
              "nudge": null
            },
            {
              "label": "[−1, 5]",
              "nudge": "4 was added to the middle and the right but not to the left part. A double inequality moves in all three parts at once."
            },
            {
              "label": "[1, 10]",
              "nudge": "The right end was never divided by 2, the same half-finished operation."
            },
            {
              "label": "[−3, 1]",
              "nudge": "4 was subtracted instead of added, undoing the wrong operation."
            }
          ],
          "solution": "Add 4 to all three parts: 2 ≤ 2x ≤ 10. Divide all three by 2: 1 ≤ x ≤ 5."
        },
        {
          "t": "mcq",
          "q": "For <i>a</i> < 0, the inequality <i>ax</i> + <i>b</i> > 0 gives:",
          "correct": 1,
          "opts": [
            {
              "label": "x > −b/a",
              "nudge": "That is the answer for a > 0. Dividing by a negative a reverses the symbol."
            },
            {
              "label": "x < −b/a",
              "nudge": null
            },
            {
              "label": "x > b/a",
              "nudge": "The sign of the constant went missing: subtracting b from both sides leaves ax > −b, not ax > b."
            },
            {
              "label": "no solution",
              "nudge": "A non-zero coefficient always leaves a half-line of solutions. Only a = 0 can empty the set."
            }
          ],
          "solution": "ax > −b, and dividing by the negative number a flips the symbol: x < −b/a."
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Forgetting to flip on a negative.</b> By far the costliest mistake. Any time you multiply or divide by a negative number the symbol must reverse. Build the reflex: see a negative coefficient, flip before you write the next line.",
            "<b>Cross-multiplying by a variable expression.</b> Multiplying (<i>x</i> + 1)/(<i>x</i> + 3) < 2 through by <i>x</i> + 3 is illegal, that expression may be negative, so you cannot know whether to flip. Bring everything to one side and combine into a single fraction instead.",
            "Mixing up hollow and filled circles, round and square brackets. <b>< and > are always hollow and round</b>; ≤ and ≥ are always filled and square; ∞ is always round.",
            "Breaking a double inequality apart wrongly. Operate on <b>all three parts together</b>, never leave one end behind.",
            "Squaring both sides when you are not certain both sides are non-negative."
          ]
        },
        {
          "t": "protip",
          "html": "the ten-second sanity check: after finding an interval, pick any number inside it and substitute it into the original inequality. for (−17/2, 31/2] test <i>x</i> = 0, giving (3 − 0)/4 = 0.75, and indeed −7 ≤ 0.75 < 5. if it fails, you almost certainly missed a flip."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "The solution is a range, not a point",
              "note": "answer in interval form"
            },
            {
              "f": "Safe: add, subtract, × or ÷ by a positive",
              "note": "the direction never moves"
            },
            {
              "f": "a < b and c < 0 ⟹ ac > bc",
              "note": "the flip, the whole game"
            },
            {
              "f": "ax + b > 0 ⇒ x > −b/a (a > 0), x < −b/a (a < 0)",
              "note": "read the sign of a first"
            },
            {
              "f": "[ ] includes · ( ) excludes · ∞ always round",
              "note": "filled • for ≤ ≥, hollow ∘ for < >"
            },
            {
              "f": "Compound: operate on all three parts",
              "note": "a negative reverses the whole chain"
            }
          ],
          "aids": [
            "“negative flips, positive sticks”",
            "“infinity never gets a hug”"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Linear Inequalities in Two Variables",
      "chip": "02 TWO VARIABLES",
      "kalam": "one point speaks for a whole side",
      "blocks": [
        {
          "t": "p",
          "html": "A linear inequality in one variable carves out a stretch of the one-dimensional number line. Add a second variable and the answer grows a dimension. Draw the line <i>x</i> + <i>y</i> = 4 on graph paper: that single line slices the whole plane cleanly into two pieces, like a knife through a roti. Each piece is called a <b>half-plane</b>, and every point in the plane is now in exactly one of three places, on the line, in the half-plane on one side, or in the half-plane on the other. An inequality such as <i>x</i> + <i>y</i> < 4 simply asks for all the points on one particular side."
        },
        {
          "t": "p",
          "html": "Here is the picture to hold. You have ₹120 to spend at a stationery shop where a register costs ₹40 and a pen ₹20. Buying <i>x</i> registers and <i>y</i> pens costs 40<i>x</i> + 20<i>y</i>, and staying inside the budget means 40<i>x</i> + 20<i>y</i> ≤ 120. There is no single answer. Three registers and no pens sits exactly at the limit, two registers and one pen is comfortably under, one register and three pens is too, and buying nothing is also legal. Plot every valid pair and they fill a whole triangular patch of the plane. That patch is the answer: a two-variable inequality always answers with a <b>region</b>, never a point."
        },
        {
          "t": "think",
          "html": "you never have to test infinitely many points. a straight line has exactly two sides, and a linear expression keeps the same sign throughout each side, so one specimen point reports for its entire half-plane. one substitution decides everything."
        },
        {
          "t": "def",
          "term": "Solution region",
          "html": "A line <i>ax</i> + <i>by</i> = <i>c</i>, with <i>a</i> and <i>b</i> not both zero, divides the Cartesian plane into two half-planes. The set of all points satisfying a linear inequality in two variables is its <b>solution region</b>, and it is exactly one of those half-planes, boundary included or excluded according to the sign."
        },
        {
          "t": "defgrid",
          "title": "The working rules",
          "rows": [
            {
              "k": "Boundary line",
              "v": "replace the sign with = and plot <i>ax</i> + <i>by</i> = <i>c</i> from its intercepts (<i>c</i>/<i>a</i>, 0) and (0, <i>c</i>/<i>b</i>)"
            },
            {
              "k": "Line style",
              "v": "≥ or ≤: boundary included, solid line · > or <: excluded, dotted line"
            },
            {
              "k": "Test point",
              "v": "any point off the line. Satisfies ⇒ shade its side; fails ⇒ shade the other side"
            },
            {
              "k": "Origin trap",
              "v": "if <i>c</i> = 0 the line runs through (0, 0), so the origin cannot decide. Use (1, 0) or (0, 1)"
            },
            {
              "k": "System",
              "v": "the intersection: only the patch satisfying every inequality at once, never the combined shading"
            },
            {
              "k": "Real quantities",
              "v": "units produced or articles bought cannot be negative, so <i>x</i> ≥ 0, <i>y</i> ≥ 0 confine the region to the first quadrant"
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · SOLID OR DOTTED, TAP AN INEQUALITY",
          "mathChips": true,
          "chips": [
            "2x + 3y ≤ 12",
            "2x + 3y < 12",
            "y > 2x"
          ],
          "captions": [
            "The origin gives 0 ≤ 12, true, so the shaded side is the one holding (0, 0). Non-strict, so the boundary belongs and the line is drawn solid.",
            "The same side, the same shading, but the strict < throws the boundary out, so the line turns dotted. Points sitting on 2x + 3y = 12 are no longer solutions.",
            "Here c = 0, so the boundary runs through the origin and (0, 0) cannot tell the two sides apart. Test (1, 0) instead: 0 > 2 is false, so the solutions lie on the other side, and the strict > keeps the line dotted."
          ],
          "frames": [
            {
              "x": [0, 7.5],
              "y": [0, 5],
              "curves": [{ "c": "line", "m": -0.6667, "k": 4 }],
              "bands": [
                { "x0": 0, "x1": 0.5, "y0": 0, "y1": 3.67 },
                { "x0": 0.5, "x1": 1, "y0": 0, "y1": 3.33 },
                { "x0": 1, "x1": 1.5, "y0": 0, "y1": 3 },
                { "x0": 1.5, "x1": 2, "y0": 0, "y1": 2.67 },
                { "x0": 2, "x1": 2.5, "y0": 0, "y1": 2.33 },
                { "x0": 2.5, "x1": 3, "y0": 0, "y1": 2 },
                { "x0": 3, "x1": 3.5, "y0": 0, "y1": 1.67 },
                { "x0": 3.5, "x1": 4, "y0": 0, "y1": 1.33 },
                { "x0": 4, "x1": 4.5, "y0": 0, "y1": 1 },
                { "x0": 4.5, "x1": 5, "y0": 0, "y1": 0.67 },
                { "x0": 5, "x1": 5.5, "y0": 0, "y1": 0.33 }
              ],
              "points": [{ "x": 0, "y": 0, "label": "(0, 0)" }],
              "labels": [{ "x": 5.6, "y": 2.4, "text": "2x + 3y = 12" }]
            },
            {
              "x": [0, 7.5],
              "y": [0, 5],
              "curves": [{ "c": "line", "m": -0.6667, "k": 4, "dash": true }],
              "bands": [
                { "x0": 0, "x1": 0.5, "y0": 0, "y1": 3.67 },
                { "x0": 0.5, "x1": 1, "y0": 0, "y1": 3.33 },
                { "x0": 1, "x1": 1.5, "y0": 0, "y1": 3 },
                { "x0": 1.5, "x1": 2, "y0": 0, "y1": 2.67 },
                { "x0": 2, "x1": 2.5, "y0": 0, "y1": 2.33 },
                { "x0": 2.5, "x1": 3, "y0": 0, "y1": 2 },
                { "x0": 3, "x1": 3.5, "y0": 0, "y1": 1.67 },
                { "x0": 3.5, "x1": 4, "y0": 0, "y1": 1.33 },
                { "x0": 4, "x1": 4.5, "y0": 0, "y1": 1 },
                { "x0": 4.5, "x1": 5, "y0": 0, "y1": 0.67 },
                { "x0": 5, "x1": 5.5, "y0": 0, "y1": 0.33 }
              ],
              "points": [{ "x": 0, "y": 0, "label": "(0, 0)" }],
              "labels": [{ "x": 5.6, "y": 2.4, "text": "boundary out" }]
            },
            {
              "x": [-1, 3.5],
              "y": [-1.5, 6],
              "curves": [{ "c": "line", "m": 2, "k": 0, "dash": true }],
              "bands": [
                { "x0": -1, "x1": -0.5, "y0": -1, "y1": 6 },
                { "x0": -0.5, "x1": 0, "y0": 0, "y1": 6 },
                { "x0": 0, "x1": 0.5, "y0": 1, "y1": 6 },
                { "x0": 0.5, "x1": 1, "y0": 2, "y1": 6 },
                { "x0": 1, "x1": 1.5, "y0": 3, "y1": 6 },
                { "x0": 1.5, "x1": 2, "y0": 4, "y1": 6 },
                { "x0": 2, "x1": 2.5, "y0": 5, "y1": 6 }
              ],
              "points": [
                { "x": 0, "y": 0, "label": "(0, 0)", "open": true },
                { "x": 1, "y": 0, "label": "test here" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE ANSWER IS A WHOLE HALF-PLANE, TAP A LINE",
          "steps": [
            {
              "eq": "P(α, β) on ax + by = c, so aα + bβ = c",
              "why": "Take b > 0 for definiteness and fix any point P on the boundary line. Everything below is measured against this one anchor."
            },
            {
              "eq": "Q(α, γ) with γ > β ⟹ bγ > bβ",
              "why": "Q is the point directly above P: same x-coordinate, higher up. Because b > 0, multiplying γ > β by b preserves the direction."
            },
            {
              "eq": "aα + bγ > aα + bβ = c",
              "why": "Add aα to both sides, and addition never disturbs an inequality. The right-hand side is c by the first line, so Q satisfies ax + by > c. Since Q was any point above the line, the entire upper half-plane satisfies the inequality."
            },
            {
              "eq": "conversely aα + bγ > c = aα + bβ ⟹ γ > β",
              "why": "Now start from a solution point instead. Cancel aα and divide by the positive b, so nothing flips: the point lies above the line. Both directions together prove the solution set is precisely the upper half-plane. If b < 0 the identical argument with the inequality reversed gives the lower half-plane."
            },
            {
              "eq": "sign of ax + by − c is constant on each side",
              "why": "That is the practical pay-off, and the reason a single test point is enough: one specimen reports for its entire side."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Shading a system",
          "steps": [
            "Write each boundary line <i>ax</i> + <i>by</i> = <i>c</i> and plot it from its intercepts.",
            "Draw it <b>solid</b> for ≤ and ≥, <b>dotted</b> for < and >.",
            "Choose a test point off the line, (0, 0) unless the line passes through the origin, and substitute.",
            "Shade the test point’s side if it satisfies the inequality, the other side if it does not. After a “false”, remember to shade the <b>opposite</b> side, not the one you tested.",
            "For a system, repeat for every inequality and keep only the <b>common overlapping</b> region. Only the doubly or triply shaded patch counts."
          ]
        },
        {
          "t": "p",
          "html": "A solution region is either <b>bounded</b>, enclosed on all sides with a finite area, such as a triangle, or <b>unbounded</b>, running off to infinity in some direction. A system can even have an empty solution set ∅, when the half-planes share no common point. The <b>corner points</b> (vertices) of a region come from solving the boundary lines two at a time, and those vertices are exactly what Class 12 Linear Programming optimises over."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · A SYSTEM IS AN OVERLAP, TAP A CONSTRAINT",
          "mathChips": true,
          "chips": [
            "x + y ≤ 6",
            "x + 2y ≤ 8",
            "both, with x, y ≥ 0"
          ],
          "captions": [
            "The first constraint alone, cut down to the first quadrant by x ≥ 0 and y ≥ 0: a triangle with corners (0, 0), (6, 0) and (0, 6).",
            "The second constraint alone: a flatter triangle with corners (0, 0), (8, 0) and (0, 4). On its own it would allow points such as (7, 0) that the first constraint forbids.",
            "Both at once, which is the intersection and nothing else. The corners are (0, 0), (6, 0), (4, 2) and (0, 4): on the x-axis the tighter bound is x ≤ 6, on the y-axis it is y ≤ 4, and (4, 2) is where the two slant lines cross. Bounded, so it has a finite area, 14 square units."
          ],
          "frames": [
            {
              "x": [0, 8.5],
              "y": [0, 6.5],
              "curves": [{ "c": "line", "m": -1, "k": 6 }],
              "bands": [
                { "x0": 0, "x1": 0.5, "y0": 0, "y1": 5.5 },
                { "x0": 0.5, "x1": 1, "y0": 0, "y1": 5 },
                { "x0": 1, "x1": 1.5, "y0": 0, "y1": 4.5 },
                { "x0": 1.5, "x1": 2, "y0": 0, "y1": 4 },
                { "x0": 2, "x1": 2.5, "y0": 0, "y1": 3.5 },
                { "x0": 2.5, "x1": 3, "y0": 0, "y1": 3 },
                { "x0": 3, "x1": 3.5, "y0": 0, "y1": 2.5 },
                { "x0": 3.5, "x1": 4, "y0": 0, "y1": 2 },
                { "x0": 4, "x1": 4.5, "y0": 0, "y1": 1.5 },
                { "x0": 4.5, "x1": 5, "y0": 0, "y1": 1 },
                { "x0": 5, "x1": 5.5, "y0": 0, "y1": 0.5 }
              ],
              "points": [{ "x": 6, "y": 0, "label": "(6, 0)" }]
            },
            {
              "x": [0, 8.5],
              "y": [0, 6.5],
              "curves": [{ "c": "line", "m": -0.5, "k": 4 }],
              "bands": [
                { "x0": 0, "x1": 0.5, "y0": 0, "y1": 3.75 },
                { "x0": 0.5, "x1": 1, "y0": 0, "y1": 3.5 },
                { "x0": 1, "x1": 1.5, "y0": 0, "y1": 3.25 },
                { "x0": 1.5, "x1": 2, "y0": 0, "y1": 3 },
                { "x0": 2, "x1": 2.5, "y0": 0, "y1": 2.75 },
                { "x0": 2.5, "x1": 3, "y0": 0, "y1": 2.5 },
                { "x0": 3, "x1": 4, "y0": 0, "y1": 2 },
                { "x0": 4, "x1": 5, "y0": 0, "y1": 1.5 },
                { "x0": 5, "x1": 6, "y0": 0, "y1": 1 },
                { "x0": 6, "x1": 7, "y0": 0, "y1": 0.5 }
              ],
              "points": [{ "x": 8, "y": 0 }]
            },
            {
              "x": [0, 8.5],
              "y": [0, 6.5],
              "curves": [
                { "c": "line", "m": -1, "k": 6 },
                { "c": "line", "m": -0.5, "k": 4 }
              ],
              "bands": [
                { "x0": 0, "x1": 0.5, "y0": 0, "y1": 3.75 },
                { "x0": 0.5, "x1": 1, "y0": 0, "y1": 3.5 },
                { "x0": 1, "x1": 1.5, "y0": 0, "y1": 3.25 },
                { "x0": 1.5, "x1": 2, "y0": 0, "y1": 3 },
                { "x0": 2, "x1": 2.5, "y0": 0, "y1": 2.75 },
                { "x0": 2.5, "x1": 3, "y0": 0, "y1": 2.5 },
                { "x0": 3, "x1": 3.5, "y0": 0, "y1": 2.25 },
                { "x0": 3.5, "x1": 4, "y0": 0, "y1": 2 },
                { "x0": 4, "x1": 4.5, "y0": 0, "y1": 1.5 },
                { "x0": 4.5, "x1": 5, "y0": 0, "y1": 1 },
                { "x0": 5, "x1": 5.5, "y0": 0, "y1": 0.5 }
              ],
              "points": [
                { "x": 0, "y": 0 },
                { "x": 6, "y": 0, "label": "(6, 0)" },
                { "x": 4, "y": 2, "label": "(4, 2)" },
                { "x": 0, "y": 4, "label": "(0, 4)" }
              ]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Solve 2<i>x</i> + 3<i>y</i> ≤ 12 graphically.",
          "steps": [
            "Boundary: 2<i>x</i> + 3<i>y</i> = 12. Put <i>y</i> = 0 for (6, 0), put <i>x</i> = 0 for (0, 4). The sign is ≤, so draw the line <b>solid</b>.",
            "The line misses the origin, so test (0, 0): 2(0) + 3(0) = 0 ≤ 12, true.",
            "Shade the half-plane containing the origin, that is everything on or below-left of the line."
          ],
          "ans": "all points on or below 2x + 3y = 12, boundary included"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "Solve <i>y</i> > 2<i>x</i> graphically.",
          "steps": [
            "The boundary <i>y</i> = 2<i>x</i> passes through the origin, so (0, 0) lies on the line and is useless as a test point. Substituting gives 0 > 0, false, but that says nothing about either side. Reaching for (0, 0) on autopilot is the classic error here.",
            "Pick any other off-line point, say (1, 0): 0 > 2(1) is false, so (1, 0) is out and the region is on the other side. Confirm with (0, 1): 1 > 0 is true.",
            "The inequality is strict, so the boundary is drawn <b>dotted</b>."
          ],
          "ans": "the open half-plane above y = 2x, boundary excluded"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the corner points of the region <i>x</i> + <i>y</i> ≤ 4, <i>x</i> ≥ 1, <i>y</i> ≥ 0.",
          "steps": [
            "Each constraint is a half-plane: on or below <i>x</i> + <i>y</i> = 4, on or right of the vertical line <i>x</i> = 1, on or above the <i>x</i>-axis.",
            "The vertices are the pairwise intersections of the boundary lines: <i>x</i> = 1 with <i>y</i> = 0 gives (1, 0); <i>x</i> + <i>y</i> = 4 with <i>y</i> = 0 gives (4, 0); <i>x</i> + <i>y</i> = 4 with <i>x</i> = 1 gives (1, 3).",
            "Three vertices, all finite, so the feasible region is a bounded triangle."
          ],
          "ans": "(1, 0), (4, 0), (1, 3); bounded"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find the area of the region <i>x</i> + <i>y</i> ≤ 6, <i>x</i> + 2<i>y</i> ≤ 8, <i>x</i> ≥ 0, <i>y</i> ≥ 0.",
          "steps": [
            "The subtle step is deciding <b>which constraint binds</b> along each edge. On the <i>x</i>-axis the two caps are <i>x</i> ≤ 6 and <i>x</i> ≤ 8, so the tighter is 6, giving (6, 0). On the <i>y</i>-axis they are <i>y</i> ≤ 6 and <i>y</i> ≤ 4, so the tighter is 4, giving (0, 4).",
            "Slant lines meet where subtracting <i>x</i> + <i>y</i> = 6 from <i>x</i> + 2<i>y</i> = 8 gives <i>y</i> = 2, hence <i>x</i> = 4: the vertex (4, 2). With the origin, the region is the quadrilateral (0, 0) → (6, 0) → (4, 2) → (0, 4).",
            "Shoelace: (0·0 − 6·0) + (6·2 − 4·0) + (4·4 − 0·2) + (0·0 − 0·4) = 0 + 12 + 16 + 0 = 28, so the area is 28/2."
          ],
          "ans": "14 square units. One mis-assigned vertex throws off the whole area"
        },
        {
          "t": "proc",
          "title": "Reading a region backwards",
          "steps": [
            "<b>Count the edges.</b> A region bounded by <i>k</i> straight edges needs exactly <i>k</i> inequalities. An edge lying along the <i>x</i>-axis is <i>y</i> ≥ 0 or <i>y</i> ≤ 0; along the <i>y</i>-axis, <i>x</i> ≥ 0 or <i>x</i> ≤ 0.",
            "<b>Find each boundary line</b> from two corners, or from its axis cuts (<i>p</i>, 0) and (0, <i>q</i>) with <i>x</i>/<i>p</i> + <i>y</i>/<i>q</i> = 1, then clear denominators.",
            "<b>Decide the direction with one interior point.</b> The centroid of the corners always works. Substitute it into each boundary expression and write the sign that makes the statement true.",
            "<b>Decide strictness from the drawing:</b> solid edge gives ≤ or ≥, dotted edge gives < or >. If the corner points are stated as belonging to the region, its edges are solid.",
            "<b>Audit.</b> Every listed corner must satisfy all the inequalities, with equality in at least two of them; the interior point must satisfy all of them; and a point just outside one edge must fail exactly that one."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "A shaded region is the triangle with vertices (0, 0), (4, 0) and (0, 3), all three boundaries solid. Write the system of inequalities that defines it.",
          "steps": [
            "Three edges, three inequalities. The edge joining (0, 0) and (0, 3) is the line <i>x</i> = 0; the edge joining (0, 0) and (4, 0) is <i>y</i> = 0.",
            "Slant edge through (4, 0) and (0, 3): intercept form <i>x</i>/4 + <i>y</i>/3 = 1, so 3<i>x</i> + 4<i>y</i> = 12.",
            "Direction from the interior point (1, 1): 1 > 0 gives <i>x</i> ≥ 0; 1 > 0 gives <i>y</i> ≥ 0; 3 + 4 = 7 < 12 gives 3<i>x</i> + 4<i>y</i> ≤ 12. Solid edges, so all three are non-strict.",
            "Audit: (4, 0) sits on <i>y</i> = 0 and on the slant line, equality in two constraints, as a corner must. The outside point (2, 3) gives 6 + 12 = 18 > 12 and fails only the third."
          ],
          "ans": "x ≥ 0, y ≥ 0, 3x + 4y ≤ 12"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A first-quadrant region has solid corner points (0, 8), (2, 4) and (10, 0) and extends without limit away from the origin. Write its system, and say whether it is bounded.",
          "steps": [
            "Edge through (0, 8) and (2, 4): slope (4 − 8)/(2 − 0) = −2, so <i>y</i> = 8 − 2<i>x</i>, that is 2<i>x</i> + <i>y</i> = 8. Edge through (2, 4) and (10, 0): slope −1/2, giving <i>x</i> + 2<i>y</i> = 10.",
            "The region runs away from the origin, so test a point far out in it, say (5, 5): 15 ≥ 8 and 15 ≥ 10, both true, so the constraints are 2<i>x</i> + <i>y</i> ≥ 8 and <i>x</i> + 2<i>y</i> ≥ 10. The origin must fail, and it does, both times.",
            "The corners (0, 8) and (10, 0) sit on the axes, so <i>x</i> ≥ 0 and <i>y</i> ≥ 0 are genuine edges, not decoration.",
            "Audit: (2, 4) gives equality in both slant constraints, exactly what a corner formed by their intersection must give, while (4, 2) satisfies the first and fails the second."
          ],
          "ans": "2x + y ≥ 8, x + 2y ≥ 10, x ≥ 0, y ≥ 0; unbounded, because both slant constraints point away from the origin"
        },
        {
          "t": "p",
          "html": "One extension worth knowing for JEE, though CBSE does not test it. Put a modulus around either variable and the single half-plane becomes a <b>union of half-plane pieces</b>: a diamond, a rectangle, a band. Set each modulus argument to zero to get the critical lines (|<i>x</i>| gives <i>x</i> = 0, |<i>y</i> − 2| gives <i>y</i> = 2), drop the bars on each piece, shade the plain half-plane you are left with, intersect it with that piece, then union the survivors. Check for symmetry first: |<i>x</i>| + |<i>y</i>| ≤ <i>a</i> is unchanged when <i>x</i> becomes −<i>x</i>, when <i>y</i> becomes −<i>y</i>, and when the two are swapped, so sketch it once in the first quadrant, where it is simply <i>x</i> + <i>y</i> ≤ <i>a</i>, and reflect three times."
        },
        {
          "t": "defgrid",
          "title": "Standard modulus regions",
          "tag": "coefficient 1 inside every modulus",
          "rows": [
            {
              "k": "|x| ≤ a, |y| ≤ b",
              "v": "rectangle centred at the origin, 2<i>a</i> wide and 2<i>b</i> tall, area 4<i>ab</i>"
            },
            {
              "k": "|x| + |y| ≤ a",
              "v": "square with vertices (±<i>a</i>, 0), (0, ±<i>a</i>): diagonals 2<i>a</i>, side <i>a</i>√2, area 2<i>a</i><sup>2</sup>"
            },
            {
              "k": "|x − h| + |y − k| ≤ a",
              "v": "the same square translated to centre (<i>h</i>, <i>k</i>), area 2<i>a</i><sup>2</sup>"
            },
            {
              "k": "|x − y| ≤ a",
              "v": "the infinite band between <i>y</i> = <i>x</i> − <i>a</i> and <i>y</i> = <i>x</i> + <i>a</i>, unbounded"
            },
            {
              "k": "|x| + |y| ≥ a",
              "v": "everything outside that square, boundary included, unbounded"
            },
            {
              "k": "Lattice points",
              "v": "|<i>x</i>| + |<i>y</i>| ≤ <i>n</i> holds 2<i>n</i><sup>2</sup> + 2<i>n</i> + 1 points with integer coordinates, always an odd number"
            }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Sketch |<i>x</i>| + |<i>y</i>| ≤ 3. Find its area and the number of points inside it with integer coordinates.",
          "steps": [
            "Two moduli, so two critical lines, <i>x</i> = 0 and <i>y</i> = 0, cutting the plane into the four quadrants. In the first the inequality reads <i>x</i> + <i>y</i> ≤ 3, in the second −<i>x</i> + <i>y</i> ≤ 3, and so on: four right triangles with legs 3 and 3, fitting together into a square with vertices (3, 0), (0, 3), (−3, 0), (0, −3).",
            "The diagonals are 6 and perpendicular, so the area is (1/2)<i>d</i><sub>1</sub><i>d</i><sub>2</sub> = (1/2)(6)(6), matching 2<i>a</i><sup>2</sup> = 2(3)<sup>2</sup>.",
            "Lattice count along each line <i>y</i> = <i>k</i>: |<i>x</i>| ≤ 3 − |<i>k</i>| admits 2(3 − |<i>k</i>|) + 1 values. Summing for <i>k</i> = −3 to 3: 1 + 3 + 5 + 7 + 5 + 3 + 1, and the formula 2(3)<sup>2</sup> + 2(3) + 1 agrees.",
            "Sanity check: (2, 2) gives 4 ≤ 3, false, so it lies outside even though it looks close to the corner. And 25 is odd, as the formula guarantees."
          ],
          "ans": "area 18 square units · 25 lattice points"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find the area of the region |<i>x</i>| + |<i>y</i>| ≤ 4 with |<i>x</i>| ≥ 1.",
          "steps": [
            "The first condition is the square with vertices (±4, 0) and (0, ±4), of area 2(4)<sup>2</sup> = 32. The second, |<i>x</i>| ≥ 1, deletes the vertical strip −1 < <i>x</i> < 1 and leaves two pieces.",
            "Both defining conditions survive <i>x</i> becoming −<i>x</i>, so the two pieces are congruent: compute one and double. The right-hand piece is bounded on the left by <i>x</i> = 1 and on the right by the two edges <i>x</i> + <i>y</i> = 4 and <i>x</i> − <i>y</i> = 4, which meet the line <i>x</i> = 1 at (1, 3) and (1, −3) and each other at (4, 0).",
            "That piece is the triangle with base 6 along <i>x</i> = 1 and height 4 − 1 = 3, of area 9, so the answer is 2 × 9.",
            "Cross-check by subtraction: the deleted strip is a hexagon made of the rectangle −1 ≤ <i>x</i> ≤ 1, −3 ≤ <i>y</i> ≤ 3, of area 12, plus two triangular caps of area 1 each, so 32 − 14 gives the same number."
          ],
          "ans": "18 square units, by two independent decompositions"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Solve 3<i>x</i> + 2<i>y</i> ≥ 6 graphically.",
              "a": "Solid line through (2, 0) and (0, 3). The origin gives 0 ≥ 6, false, so shade the side away from the origin."
            },
            {
              "q": "[CBSE] Solve <i>x</i> − 2<i>y</i> < 4 graphically.",
              "a": "Dotted line through (4, 0) and (0, −2). The origin gives 0 < 4, true, so shade the side containing the origin."
            },
            {
              "q": "[JEE Main] Is the region 2<i>x</i> + <i>y</i> ≥ 4, <i>x</i> + <i>y</i> ≥ 3, <i>x</i> ≥ 0, <i>y</i> ≥ 0 bounded or unbounded?",
              "a": "Unbounded. Both slant constraints point away from the origin, so nothing caps the region from above."
            },
            {
              "q": "[JEE Main] Write the system for the solid-edged quadrilateral with vertices (0, 0), (6, 0), (4, 2), (0, 4).",
              "a": "<i>x</i> ≥ 0, <i>y</i> ≥ 0, <i>x</i> + <i>y</i> ≤ 6, <i>x</i> + 2<i>y</i> ≤ 8."
            },
            {
              "q": "[JEE Main] How many points with integer coordinates satisfy |<i>x</i>| + |<i>y</i>| ≤ 5?",
              "a": "2(5)<sup>2</sup> + 2(5) + 1 = 61, and 61 is odd, as it must be."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "While solving 2<i>x</i> − <i>y</i> > 0 graphically, which point <b>cannot</b> be used as a test point?",
          "correct": 2,
          "opts": [
            {
              "label": "(1, 1)",
              "nudge": "2(1) − 1 = 1, non-zero, so this point is off the line and perfectly usable."
            },
            {
              "label": "(0, 2)",
              "nudge": "2(0) − 2 = −2, non-zero, so it lies off the boundary and can decide a side."
            },
            {
              "label": "(2, 4)",
              "nudge": null
            },
            {
              "label": "(3, 1)",
              "nudge": "2(3) − 1 = 5, non-zero, so it is a valid test point."
            }
          ],
          "solution": "The boundary is 2x − y = 0, that is y = 2x. Substituting (2, 4) gives 2(2) − 4 = 0, so it sits exactly on the line and cannot distinguish the two half-planes."
        },
        {
          "t": "mcq",
          "q": "The boundary line for <i>x</i> + 2<i>y</i> ≤ 5 should be drawn as:",
          "correct": 1,
          "opts": [
            {
              "label": "dotted, boundary excluded",
              "nudge": "That confuses ≤ with <. Dotted is only for strict inequalities."
            },
            {
              "label": "solid, boundary included",
              "nudge": null
            },
            {
              "label": "solid, boundary excluded",
              "nudge": "Internally contradictory: a solid line is drawn precisely to say the boundary belongs."
            },
            {
              "label": "dotted, boundary included",
              "nudge": "Also contradictory, the style and the inclusion status have been paired the wrong way round."
            }
          ],
          "solution": "≤ includes equality, so points of the line are solutions and the line is drawn solid."
        },
        {
          "t": "mcq",
          "q": "The solution region of the system <i>x</i> ≥ 0, <i>y</i> ≥ 0, <i>x</i> + <i>y</i> ≤ 1 is:",
          "correct": 1,
          "opts": [
            {
              "label": "the entire first quadrant",
              "nudge": "That ignores the third inequality, which caps the quadrant."
            },
            {
              "label": "a triangle with vertices (0, 0), (1, 0), (0, 1)",
              "nudge": null
            },
            {
              "label": "an unbounded region",
              "nudge": "x + y ≤ 1 closes the region off, so it is finite."
            },
            {
              "label": "the empty set",
              "nudge": "Intersection is not contradiction: (0, 0) satisfies all three, so the overlap is certainly not empty."
            }
          ],
          "solution": "The first two constraints give the first quadrant, and x + y ≤ 1 clips it to the triangle below the line x + y = 1."
        },
        {
          "t": "mcq",
          "q": "A shaded region lies below the line <i>x</i> + <i>y</i> = 2, contains the origin, and includes the boundary itself. Its inequality is:",
          "correct": 2,
          "opts": [
            {
              "label": "x + y > 2",
              "nudge": "That is the half-plane away from the origin, the wrong side entirely."
            },
            {
              "label": "x + y < 2",
              "nudge": "Right side, wrong strictness: a strict sign would throw out the boundary the question says is included."
            },
            {
              "label": "x + y ≤ 2",
              "nudge": null
            },
            {
              "label": "x + y ≥ 2",
              "nudge": "Also the far side. Test the origin first: 0 must satisfy whatever you write."
            }
          ],
          "solution": "The origin must satisfy it, and 0 ≤ 2 is true; the boundary is included, so the sign is non-strict."
        },
        {
          "t": "mistakes",
          "items": [
            "Testing <b>(0, 0) on a line through the origin</b>. When <i>c</i> = 0 the origin lies on the boundary and decides nothing. Glance at the constant term first, and if it is zero, use (1, 0) or (0, 1).",
            "Wrong line style. Strict inequalities get a <b>dotted</b> line, non-strict a <b>solid</b> one. This is the two-variable version of the hollow-versus-filled circle, and it costs presentation marks on the Boards.",
            "Shading the wrong half-plane. After a test point gives “false”, shade the <b>opposite</b> side, not the side you tested.",
            "Taking the union instead of the intersection for a system. Only the patch shaded by <b>every</b> inequality counts.",
            "Recovering a system with the inequalities reversed. All ≤ against the origin means bounded, all ≥ means unbounded, so a flipped sign turns an infinite region into a confident, wrong triangle."
          ]
        },
        {
          "t": "protip",
          "html": "the one-point audit: after shading, pick a point clearly inside your final region and put it into every original inequality. for <i>x</i> + <i>y</i> ≤ 6, <i>x</i> + 2<i>y</i> ≤ 8, <i>x</i>, <i>y</i> ≥ 0 test (1, 1): 2 ≤ 6, 3 ≤ 8, both coordinates non-negative. if it fails even one, you shaded a wrong side."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "A line splits the plane into two half-planes",
              "note": "the solution is one entire half-plane"
            },
            {
              "f": "≤ , ≥ ⇒ solid line · < , > ⇒ dotted",
              "note": "included versus excluded boundary"
            },
            {
              "f": "Test (0, 0) unless c = 0",
              "note": "line through the origin? use (1, 0) or (0, 1)"
            },
            {
              "f": "System ⇒ intersection",
              "note": "corners from the boundary lines in pairs"
            },
            {
              "f": "All ≤ against the origin ⇒ bounded · all ≥ ⇒ unbounded",
              "note": "decides whether a maximum exists at all"
            },
            {
              "f": "|x| + |y| ≤ a is a square, area 2a²",
              "note": "vertices (±a, 0), (0, ±a) · 2n² + 2n + 1 lattice points"
            }
          ],
          "aids": [
            "“solid includes, dotted excludes”",
            "“origin on the line? then origin is no spy”",
            "“one interior point fixes every sign”"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Applications and Word Problems",
      "chip": "03 WORD PROBLEMS",
      "kalam": "read the word, then write the sign",
      "blocks": [
        {
          "t": "p",
          "html": "Solving an inequality is the easy half. The hard half, and the part that actually decides marks, is <b>turning a sentence in English into an inequality in mathematics</b>. A word problem hands you a real situation, a student must average at least 80, the mixture must stay below 40% acid, the perimeter is more than 60 cm, and asks for the range of possibilities. Your job is translation, then solution, then interpretation back into the real world."
        },
        {
          "t": "p",
          "html": "The single most important skill is reading the <b>comparison words</b> correctly. English has a dozen ways of saying ≥ and a dozen ways of saying <, and a careless reading flips the entire answer. “At least 80” means ≥ 80, with 80 allowed. “More than 80” means > 80, with 80 shut out. “No more than 80” means ≤ 80. These tiny distinctions are the difference between a correct and an incorrect solution set."
        },
        {
          "t": "think",
          "html": "imagine you run a small sweet shop during diwali. every real constraint you face is an inequality, never an equation: at most ₹5,000 on ingredients, at least 200 boxes to meet pre-orders, under 60 kg of sugar in storage. none of them pins you to a number, and the art of the business is operating inside the overlap of all of them."
        },
        {
          "t": "defgrid",
          "title": "The translation dictionary",
          "tag": "commit it to memory",
          "rows": [
            {
              "k": "at least · no less than · a minimum of · not below",
              "v": "≥"
            },
            {
              "k": "at most · no more than · a maximum of · not above",
              "v": "≤"
            },
            {
              "k": "more than · greater than · exceeds · over",
              "v": ">"
            },
            {
              "k": "less than · fewer than · below · under · short of",
              "v": "<"
            },
            {
              "k": "between a and b",
              "v": "<i>a</i> < <i>x</i> < <i>b</i>, strict unless the problem says “inclusive”"
            },
            {
              "k": "between a and b, inclusive",
              "v": "<i>a</i> ≤ <i>x</i> ≤ <i>b</i>"
            }
          ]
        },
        {
          "t": "p",
          "html": "There is a second, quieter skill: spotting the <b>hidden constraints</b> the problem never states out loud. If <i>x</i> is “the number of chairs produced”, then <i>x</i> must be a whole number and cannot be negative, even though the sentence never says so. If <i>x</i> is “the length of a side”, then <i>x</i> > 0. Forgetting these silent conditions is how a perfectly solved inequality still earns the wrong final answer: solve over the reals, then keep only the values the situation permits."
        },
        {
          "t": "proc",
          "title": "The five-step modelling routine",
          "steps": [
            "<b>Name the unknown</b>, with units: “let <i>x</i> = the length of the shortest side, in cm.” Every later inequality must refer to the same clearly defined quantity, and a vague variable produces a vague answer.",
            "<b>Translate each requirement</b> into its own inequality using the dictionary. The comparison word fixes the symbol, so choose it deliberately now rather than reflexively later.",
            "<b>Record the hidden domain</b>: <i>x</i> > 0 for a measurement, a non-negative integer for a count.",
            "<b>Solve</b> the inequality, or, for several requirements, solve each and take the <b>intersection</b> of the solution sets.",
            "<b>Interpret</b> in the words of the problem. A solution set is not yet an answer: “the minimum number of complete boxes is 201” is what a marker rewards, not “<i>x</i> ≥ 200.5”."
          ]
        },
        {
          "t": "formula",
          "kicker": "TWO SET-UPS YOU WILL REUSE",
          "tag": "average and mixture",
          "main": "(sum of n quantities)/n ≶ k",
          "legend": [
            "average condition: “the average of <i>n</i> quantities is at least <i>k</i>” becomes sum/<i>n</i> ≥ <i>k</i>",
            "mixture: concentration = (amount of pure component)/(total amount), then bound it as required"
          ],
          "note": "Clear the fraction by multiplying by the total, which is a positive quantity, so no flip occurs. That single observation turns a rational condition into a linear one."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "The longest side of a triangle is twice the shortest, and the third side is 2 cm longer than the shortest. If the perimeter is at least 42 cm, find the minimum length of the shortest side.",
          "steps": [
            "Name: let <i>x</i> = the shortest side, in cm. Then the longest is 2<i>x</i> and the third is <i>x</i> + 2. Domain: <i>x</i> > 0, a length.",
            "Translate: “perimeter at least 42” gives <i>x</i> + 2<i>x</i> + (<i>x</i> + 2) ≥ 42.",
            "Solve: 4<i>x</i> + 2 ≥ 42, so 4<i>x</i> ≥ 40 and <i>x</i> ≥ 10.",
            "Interpret: the shortest side must be at least 10 cm, so its minimum length is 10 cm. Test the boundary, <i>x</i> = 10 gives a perimeter of 10 + 20 + 12 = 42 ≥ 42, confirming “at least” was correctly read as ≥."
          ],
          "ans": "minimum shortest side = 10 cm"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "Find all pairs of consecutive odd natural numbers, both greater than 10, whose sum is less than 40.",
          "steps": [
            "Let the smaller odd number be <i>x</i>, so the next is <i>x</i> + 2. Since <i>x</i> is the smaller, “both greater than 10” is captured by <i>x</i> > 10 alone.",
            "“Sum less than 40”: <i>x</i> + (<i>x</i> + 2) < 40, so 2<i>x</i> < 38 and <i>x</i> < 19. Together, 10 < <i>x</i> < 19.",
            "Now the hidden domain, which is the whole point: <i>x</i> must be an <b>odd natural number</b>, so <i>x</i> ∈ {11, 13, 15, 17}. Stopping at the continuous interval loses the marks.",
            "Boundary check: <i>x</i> = 17 gives the sum 36 < 40, valid, while <i>x</i> = 19 gives 40, which is not less than 40, correctly excluded."
          ],
          "ans": "(11, 13), (13, 15), (15, 17), (17, 19)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A chemist has 600 mL of a 20% acid solution. How many mL of a 50% solution must be added so that the mixture is more than 30% but less than 40% acid?",
          "steps": [
            "Let <i>x</i> = mL of the 50% solution added, with <i>x</i> ≥ 0. Pure acid after mixing = 0.20(600) + 0.50<i>x</i> = 120 + 0.5<i>x</i>, in a total of 600 + <i>x</i> mL.",
            "The condition is the double inequality 0.30 < (120 + 0.5<i>x</i>)/(600 + <i>x</i>) < 0.40. Since 600 + <i>x</i> > 0, multiply throughout by it with no flip.",
            "Left: 180 + 0.3<i>x</i> < 120 + 0.5<i>x</i> gives 60 < 0.2<i>x</i>, so <i>x</i> > 300. Right: 120 + 0.5<i>x</i> < 240 + 0.4<i>x</i> gives 0.1<i>x</i> < 120, so <i>x</i> < 1200.",
            "Intersect the two halves: 300 < <i>x</i> < 1200."
          ],
          "ans": "between 300 mL and 1200 mL of the 50% solution"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A workshop makes <i>x</i> chairs and <i>y</i> tables a day. A chair needs 2 h carpentry and 1 h finishing, a table 3 h carpentry and 2 h finishing. At most 36 carpentry-hours and 22 finishing-hours are available. Profit is ₹30 a chair and ₹50 a table. Find the plan that maximises profit.",
          "steps": [
            "Model: each “at most” becomes ≤, and counts force <i>x</i>, <i>y</i> ≥ 0. So 2<i>x</i> + 3<i>y</i> ≤ 36 (carpentry), <i>x</i> + 2<i>y</i> ≤ 22 (finishing), <i>x</i> ≥ 0, <i>y</i> ≥ 0.",
            "The solution region is a bounded polygon. Corner points from the boundary lines in pairs: (0, 0); <i>y</i> = 0 with 2<i>x</i> = 36 gives (18, 0), feasible since 18 ≤ 22; <i>x</i> = 0 with 2<i>y</i> = 22 gives (0, 11), feasible since 33 ≤ 36; and solving 2<i>x</i> + 3<i>y</i> = 36 with <i>x</i> + 2<i>y</i> = 22 gives <i>y</i> = 8, <i>x</i> = 6.",
            "A linear objective is always maximised at a vertex, so evaluate <i>P</i> = 30<i>x</i> + 50<i>y</i>: <i>P</i>(0, 0) = 0, <i>P</i>(18, 0) = 540, <i>P</i>(0, 11) = 550, <i>P</i>(6, 8) = 180 + 400 = 580.",
            "The non-obvious step is that the joint-constraint vertex (6, 8) beats both axis vertices. This is exactly the Linear Programming you will formalise in Class 12: the inequality system <b>is</b> the feasible region."
          ],
          "ans": "6 chairs and 8 tables, profit ₹580 a day"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Ravi scored 68 and 74 in his first two unit tests. What minimum must he score in the third to average at least 75?",
              "a": "(68 + 74 + <i>x</i>)/3 ≥ 75 ⟹ 142 + <i>x</i> ≥ 225 ⟹ <i>x</i> ≥ 83: at least 83 marks."
            },
            {
              "q": "[CBSE] A rectangle’s length is 3 cm more than twice its breadth. If the perimeter is at most 54 cm, find the maximum breadth.",
              "a": "2(<i>b</i> + 2<i>b</i> + 3) ≤ 54 ⟹ 6<i>b</i> ≤ 48 ⟹ <i>b</i> ≤ 8: maximum breadth 8 cm."
            },
            {
              "q": "[JEE Main] Find all pairs of consecutive even natural numbers, both larger than 5, whose sum is less than 24.",
              "a": "<i>x</i> even, <i>x</i> ≥ 6, and 2<i>x</i> + 2 < 24 gives <i>x</i> < 11, so <i>x</i> ∈ {6, 8, 10}: (6, 8), (8, 10) and (10, 12). Test the largest pair, 10 + 12 = 22 < 24, it genuinely qualifies."
            },
            {
              "q": "[JEE Main] A 480 mL solution is 15% alcohol. How much water must be added to bring the concentration below 12%?",
              "a": "72/(480 + <i>w</i>) < 0.12 ⟹ 72 < 57.6 + 0.12<i>w</i> ⟹ <i>w</i> > 120: more than 120 mL."
            },
            {
              "q": "[JEE Advanced] A trader stocks <i>x</i> kg of tea and <i>y</i> kg of coffee. Storage allows at most 80 kg, capital at most ₹24,000, with tea ₹200/kg and coffee ₹400/kg. Write the system and find its corner points.",
              "a": "<i>x</i> + <i>y</i> ≤ 80, <i>x</i> + 2<i>y</i> ≤ 120, <i>x</i>, <i>y</i> ≥ 0; corners (0, 0), (80, 0), (40, 40), (0, 60)."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "“A number <i>x</i> is no more than 7 and at least −2.” The correct inequality is:",
          "correct": 1,
          "opts": [
            {
              "label": "−2 < x < 7",
              "nudge": "Both phrases have been read as strict, but “at least” and “no more than” are both inclusive."
            },
            {
              "label": "−2 ≤ x ≤ 7",
              "nudge": null
            },
            {
              "label": "−2 ≤ x < 7",
              "nudge": "“No more than 7” includes 7, so the right end must be closed too."
            },
            {
              "label": "−2 < x ≤ 7",
              "nudge": "“At least −2” includes −2, so the left end must be closed."
            }
          ],
          "solution": "“At least −2” gives x ≥ −2 and “no more than 7” gives x ≤ 7. Both ends are included."
        },
        {
          "t": "mcq",
          "q": "A factory makes <i>x</i> toys, where the count must satisfy 5<i>x</i> − 3 > 32. The least number of toys is:",
          "correct": 1,
          "opts": [
            {
              "label": "7",
              "nudge": "x = 7 fails the inequality itself, since 7 is not greater than 7."
            },
            {
              "label": "8",
              "nudge": null
            },
            {
              "label": "7.4",
              "nudge": "That reports a boundary value without applying the hidden domain: a count of toys must be a whole number."
            },
            {
              "label": "6",
              "nudge": "That ignores the inequality entirely, 5(6) − 3 = 27 is not more than 32."
            }
          ],
          "solution": "5x > 35 gives x > 7, and x counts toys, so it is a positive integer strictly greater than 7: the least is 8."
        },
        {
          "t": "mcq",
          "q": "A 200 mL solution is 30% salt. To make it more than 40% salt by adding <i>x</i> mL of pure salt, the inequality is:",
          "correct": 0,
          "opts": [
            {
              "label": "(60 + x)/(200 + x) > 0.40",
              "nudge": null
            },
            {
              "label": "60/(200 + x) > 0.40",
              "nudge": "The added salt is missing from the numerator: pouring salt in raises the salt content too."
            },
            {
              "label": "(60 + x)/200 > 0.40",
              "nudge": "The total volume also grows by x, so the denominator cannot stay at 200."
            },
            {
              "label": "(0.30 + x)/200 > 0.40",
              "nudge": "0.30 is a fraction, not an amount. The original salt is 0.30 × 200 = 60 mL."
            }
          ],
          "solution": "Original salt = 0.30 × 200 = 60 mL. After adding x, the salt is 60 + x in a total of 200 + x, and the concentration must exceed 0.40."
        },
        {
          "t": "mcq",
          "q": "“<i>x</i> lies between 3 and 9”, on the standard reading, translates to:",
          "correct": 1,
          "opts": [
            {
              "label": "3 ≤ x ≤ 9",
              "nudge": "That adds an inclusivity the wording does not state. “Between” is strict unless the problem says “inclusive”."
            },
            {
              "label": "3 < x < 9",
              "nudge": null
            },
            {
              "label": "x < 3 or x > 9",
              "nudge": "That describes everything outside the interval, the opposite region."
            },
            {
              "label": "x ≤ 3 or x ≥ 9",
              "nudge": "Outside again, and with the endpoints wrongly swept in."
            }
          ],
          "solution": "“Between”, with no “inclusive”, is read as strict at both ends."
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Misreading the comparison word.</b> “More than” is strict (>), “at least” is inclusive (≥). Underline the phrase and write its symbol before you build anything.",
            "<b>Forgetting the hidden domain.</b> A count is a non-negative integer, a length is positive. Solve over the reals, then restrict, then state the restricted answer.",
            "<b>Stopping at the inequality instead of the answer.</b> “<i>x</i> ≥ 10” is not a sentence a marker rewards; “the minimum length is 10 cm” is.",
            "Mishandling “between”. Treat it as strict unless the problem says “inclusive”. Many students reflexively write ≤.",
            "Not re-testing the boundary of a discrete answer. After listing integer solutions, substitute the <b>largest admissible value</b> back: four seconds of checking catches a whole missing pair."
          ]
        },
        {
          "t": "protip",
          "html": "translate, then test one value. after forming the inequality, plug a clearly valid scenario from the problem back into it and confirm your symbols point the right way. for the triangle question, <i>x</i> = 10 gives a perimeter of 42, which is “at least 42”, so ≥ was the right reading and the boundary genuinely belongs."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "at least / at most ⇒ ≥ / ≤",
              "note": "inclusive, the endpoint counts"
            },
            {
              "f": "more than / less than ⇒ > / <",
              "note": "strict, the endpoint is out"
            },
            {
              "f": "name → translate → domain → solve → interpret",
              "note": "the five-step routine, in order"
            },
            {
              "f": "average: sum/n ≶ k · mixture: pure/total",
              "note": "clear the fraction by the positive total"
            },
            {
              "f": "counts are whole and non-negative",
              "note": "measurements are positive"
            },
            {
              "f": "“between” is strict unless stated inclusive",
              "note": "read the sentence twice"
            }
          ],
          "aids": [
            "“read the word, then write the sign”",
            "“count? then whole and non-negative”",
            "“don’t stop at x ≥ 10, say what it means”"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Quadratic and Polynomial Inequalities",
      "chip": "04 WAVY CURVE",
      "kalam": "odd crosses, even bounces",
      "blocks": [
        {
          "t": "p",
          "html": "A linear inequality had one comforting feature: a single sign-flip rule handled everything, because <i>ax</i> + <i>b</i> changes sign exactly once. The moment the expression becomes non-linear, a product of several factors or a square, that simplicity ends. You cannot solve <i>x</i><sup>2</sup> > 4 by “taking the square root of both sides”, and you cannot decide the sign of a product by inspection. A completely different, and rather beautiful, idea is needed."
        },
        {
          "t": "p",
          "html": "The idea rests on one fact: <b>a continuous expression can only switch between positive and negative by passing through zero</b>. So mark every point where the expression is zero. Those <b>critical points</b> chop the line into intervals, and inside each interval the expression keeps one constant sign. You then determine the sign in a single interval and let a simple rule propagate it across the rest. This is the method of intervals, and its visual form, one squiggle threading above and below the axis, is the <b>wavy curve</b>."
        },
        {
          "t": "think",
          "html": "walk left to right along the number line tracking the sign of (<i>x</i> − 1)(<i>x</i> − 3)(<i>x</i> + 2). far to the right, at <i>x</i> = 100, every factor is positive, so you are above the axis. now walk leftward: each time you cross a root, one factor flips, so the whole product flips. above becomes below, below becomes above."
        },
        {
          "t": "p",
          "html": "There is one crucial exception. If a factor is <b>squared</b>, like (<i>x</i> − 1)<sup>2</sup>, then crossing <i>x</i> = 1 flips that factor’s sign twice, because a square is never negative, so the product’s sign does <b>not</b> change. The curve merely touches the axis at <i>x</i> = 1 and bounces back to the same side. <b>Odd powers cross, even powers bounce.</b> That single rule about multiplicity is what separates a correct JEE solution from a wrong one."
        },
        {
          "t": "formula",
          "kicker": "THE QUADRATIC STANDARD RESULTS",
          "tag": "a > 0, real roots α < β",
          "main": "ax² + bx + c < 0 ⟺ α < x < β",
          "legend": [
            "<i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> > 0 ⟺ <i>x</i> < α or <i>x</i> > β, positive <b>outside</b> the roots",
            "negative <b>between</b> the roots, positive outside: one line of the wavy curve",
            "discriminant <i>D</i> = <i>b</i><sup>2</sup> − 4<i>ac</i> < 0 with <i>a</i> > 0 ⟹ positive for every real <i>x</i>"
          ],
          "note": "Before using any of this, make the coefficient of x² positive: multiply by −1 and flip the inequality if you must."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · BETWEEN OR OUTSIDE, TAP A CASE",
          "mathChips": true,
          "chips": [
            "x² − x − 6 > 0",
            "x² − x − 6 < 0",
            "D < 0"
          ],
          "captions": [
            "x² − x − 6 = (x − 3)(x + 2), roots −2 and 3. The curve is above the axis outside the roots, so the answer is the two shaded columns, (−∞, −2) ∪ (3, ∞), both ends open because the sign is strict.",
            "The same parabola read the other way: it dips below the axis only between the roots, so the answer is the single interval (−2, 3). Positive outside, negative between, with no rule to memorise once you see the picture.",
            "x² − 2x + 5 has D = 4 − 20 = −16 < 0 and a positive leading coefficient, so the parabola never meets the axis at all. It is positive for every real x, which means “< 0” has no solution and “> 0” is satisfied by all of ℝ."
          ],
          "frames": [
            {
              "x": [-4, 5],
              "y": [-8, 8],
              "curves": [{ "c": "poly", "coeffs": [-6, -1, 1] }],
              "bands": [
                { "x0": -4, "x1": -2 },
                { "x0": 3, "x1": 5 }
              ],
              "points": [
                { "x": -2, "y": 0, "label": "−2", "open": true },
                { "x": 3, "y": 0, "label": "3", "open": true }
              ]
            },
            {
              "x": [-4, 5],
              "y": [-8, 8],
              "curves": [{ "c": "poly", "coeffs": [-6, -1, 1] }],
              "bands": [{ "x0": -2, "x1": 3 }],
              "points": [
                { "x": -2, "y": 0, "label": "−2", "open": true },
                { "x": 3, "y": 0, "label": "3", "open": true }
              ]
            },
            {
              "x": [-3, 5],
              "y": [-2, 14],
              "curves": [{ "c": "poly", "coeffs": [5, -2, 1] }],
              "labels": [{ "x": 1, "y": 12, "text": "never touches the axis" }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "The wavy-curve algorithm",
          "steps": [
            "<b>Move everything to one side</b> so the other side is 0. Sign analysis reads one expression against zero; comparing two non-zero sides is meaningless.",
            "<b>Factor completely</b> into linear factors (<i>x</i> − <i>a</i>), making every <i>x</i>-coefficient positive. A hidden −1 silently inverts every sign. An irreducible quadratic, one with <i>D</i> < 0, keeps a constant sign and can be dropped, reversing the inequality if its leading coefficient is negative.",
            "<b>Mark all critical points</b> on the number line, filled if the inequality is ≤ or ≥, hollow if it is strict. These are the only places the sign can change.",
            "<b>Fix the rightmost sign.</b> For <i>x</i> larger than every critical point all the factors are positive, so the expression is <b>positive on the far-right interval</b>. Start the curve above the axis there.",
            "<b>Draw leftward, obeying multiplicity:</b> cross the axis at odd-multiplicity roots, touch and bounce at even ones. An odd power flips a factor’s sign once, an even power flips it twice, which is no flip at all.",
            "<b>Read off</b> the intervals on the required side, then fix the endpoints: numerator roots are included for non-strict signs, excluded for strict ones."
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY “OUTSIDE VERSUS BETWEEN” IS JUST THE WAVY CURVE",
          "steps": [
            {
              "eq": "ax² + bx + c = a(x − α)(x − β), a > 0, α < β",
              "why": "Factor the quadratic over its real roots. With a > 0 the leading coefficient contributes nothing to the sign, so the two brackets decide everything."
            },
            {
              "eq": "x > β: (x − α) > 0 and (x − β) > 0 ⟹ product +",
              "why": "On the far right both brackets are positive, so the expression is positive. This is the anchor the whole method depends on."
            },
            {
              "eq": "cross β: one flip ⟹ − on (α, β)",
              "why": "Walking left past β, only the bracket (x − β) changes sign, so the product flips once and becomes negative between the roots."
            },
            {
              "eq": "cross α: a second flip ⟹ + on (−∞, α)",
              "why": "Past α the other bracket flips too, restoring the positive sign. Hence positive outside the roots and negative between them, which is exactly the standard result, now seen as a one-line wavy curve rather than a fact to memorise."
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Positive for every real x, with a parameter",
          "tag": "f(x) = ax² + bx + c",
          "rows": [
            {
              "k": "f(x) > 0 for all x",
              "v": "<i>a</i> > 0 and <i>D</i> < 0"
            },
            {
              "k": "f(x) ≥ 0 for all x",
              "v": "<i>a</i> > 0 and <i>D</i> ≤ 0, since a perfect square touches the axis but never dips below"
            },
            {
              "k": "f(x) < 0 for all x",
              "v": "<i>a</i> < 0 and <i>D</i> < 0"
            },
            {
              "k": "f(x) ≤ 0 for all x",
              "v": "<i>a</i> < 0 and <i>D</i> ≤ 0"
            },
            {
              "k": "D = b² − 4ac",
              "v": "<i>D</i> < 0 means the parabola never meets the axis"
            },
            {
              "k": "Degenerate a = 0",
              "v": "the expression stops being a quadratic. Test that value of the parameter separately and <b>union</b> the result"
            }
          ]
        },
        {
          "t": "p",
          "html": "That last row decides most parameter questions. Whenever the coefficient of <i>x</i><sup>2</sup> contains the parameter, you must test the value that makes it zero <b>on its own</b>, because at that value the expression is not a quadratic at all. It is the same move a linear inequality needs when its leading coefficient vanishes, and a discriminant-only solution never sees it."
        },
        {
          "t": "ex",
          "tag": "FOUNDATIONAL",
          "q": "Solve <i>x</i><sup>2</sup> − <i>x</i> − 6 > 0.",
          "steps": [
            "Factor: <i>x</i><sup>2</sup> − <i>x</i> − 6 = (<i>x</i> − 3)(<i>x</i> + 2), so the roots are −2 and 3, and the coefficient of <i>x</i><sup>2</sup> is already positive.",
            "By the standard result, “> 0” means outside the roots: <i>x</i> < −2 or <i>x</i> > 3.",
            "Both endpoints are excluded, because the inequality is strict."
          ],
          "ans": "(−∞, −2) ∪ (3, ∞)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Solve (<i>x</i> − 1)(<i>x</i> + 4)(<i>x</i> − 6) < 0.",
          "steps": [
            "Critical points, in order: −4, 1, 6. All three factors are simple, so the curve crosses at every one of them.",
            "Anchor on the far right: for <i>x</i> > 6 all three factors are positive, so the product is positive on (6, ∞).",
            "Walk left, flipping at each root: negative on (1, 6), positive on (−4, 1), negative on (−∞, −4).",
            "We need “< 0”, the parts below the axis, and the strict sign leaves every endpoint open."
          ],
          "ans": "(−∞, −4) ∪ (1, 6)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find all real <i>a</i> for which <i>x</i><sup>2</sup> + 2(<i>a</i> − 1)<i>x</i> + (<i>a</i> + 5) > 0 for every real <i>x</i>.",
          "steps": [
            "The coefficient of <i>x</i><sup>2</sup> is 1, positive and free of <i>a</i>, so the degenerate branch cannot arise and only the discriminant condition remains.",
            "<i>D</i>/4 = (<i>a</i> − 1)<sup>2</sup> − (<i>a</i> + 5) = <i>a</i><sup>2</sup> − 3<i>a</i> − 4 = (<i>a</i> − 4)(<i>a</i> + 1).",
            "Require <i>D</i> < 0: (<i>a</i> − 4)(<i>a</i> + 1) < 0, which is negative between the roots, so −1 < <i>a</i> < 4.",
            "Endpoint check: at <i>a</i> = 4 the expression is <i>x</i><sup>2</sup> + 6<i>x</i> + 9 = (<i>x</i> + 3)<sup>2</sup>, zero at <i>x</i> = −3, so not strictly positive. At <i>a</i> = −1 it is (<i>x</i> − 2)<sup>2</sup>. Both endpoints fail, which is why <i>D</i> < 0 is strict here."
          ],
          "ans": "a ∈ (−1, 4)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find all real <i>a</i> for which (<i>a</i> − 3)<i>x</i><sup>2</sup> + (<i>a</i> − 3)<i>x</i> + 4 > 0 for every real <i>x</i>.",
          "steps": [
            "The parameter now sits in the coefficient of <i>x</i><sup>2</sup>, so the degenerate branch is live. Branch 1, <i>a</i> = 3: every <i>x</i>-term vanishes and the expression is the constant 4 > 0, true for every <i>x</i>. So <i>a</i> = 3 works.",
            "Branch 2, <i>a</i> ≠ 3: two conditions must hold together. Upward-opening needs <i>a</i> − 3 > 0, that is <i>a</i> > 3.",
            "No real roots needs <i>D</i> = (<i>a</i> − 3)<sup>2</sup> − 16(<i>a</i> − 3) = (<i>a</i> − 3)(<i>a</i> − 19) < 0, giving 3 < <i>a</i> < 19. Intersecting the two conditions leaves 3 < <i>a</i> < 19.",
            "Union the branches. At <i>a</i> = 19 the expression is 16<i>x</i><sup>2</sup> + 16<i>x</i> + 4 = 4(2<i>x</i> + 1)<sup>2</sup>, zero at <i>x</i> = −1/2, correctly excluded. At <i>a</i> = 2 the parabola opens downward and is eventually negative, also excluded."
          ],
          "ans": "a ∈ [3, 19). The included endpoint arrives from the degenerate branch, which a discriminant-only solution throws away"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[Foundational] Solve <i>x</i><sup>2</sup> − 7<i>x</i> + 12 ≤ 0.",
              "a": "(<i>x</i> − 3)(<i>x</i> − 4) ≤ 0, so negative or zero between the roots: [3, 4]."
            },
            {
              "q": "[JEE Main] Find all real <i>a</i> for which <i>x</i><sup>2</sup> + <i>ax</i> + 4 > 0 for every real <i>x</i>.",
              "a": "<i>D</i> = <i>a</i><sup>2</sup> − 16 < 0, so <i>a</i> ∈ (−4, 4)."
            },
            {
              "q": "[JEE Main] Find all real <i>a</i> for which <i>x</i><sup>2</sup> − 2<i>ax</i> + (<i>a</i> + 6) ≥ 0 for every real <i>x</i>.",
              "a": "<i>D</i> ≤ 0 gives <i>a</i><sup>2</sup> − <i>a</i> − 6 ≤ 0: <i>a</i> ∈ [−2, 3]. The slack sign permits <i>D</i> = 0, so both endpoints are included."
            },
            {
              "q": "[JEE Main] Find all real <i>a</i> for which −<i>x</i><sup>2</sup> + 2<i>ax</i> − 4 < 0 for every real <i>x</i>.",
              "a": "Multiply by −1 and flip: <i>x</i><sup>2</sup> − 2<i>ax</i> + 4 > 0 for all <i>x</i>, so <i>D</i> < 0 gives <i>a</i> ∈ (−2, 2)."
            },
            {
              "q": "[JEE Advanced] For how many integer values of <i>a</i> is <i>x</i><sup>2</sup> + <i>ax</i> + <i>a</i> + 3 > 0 for every real <i>x</i>?",
              "a": "<i>D</i> < 0 gives <i>a</i><sup>2</sup> − 4<i>a</i> − 12 < 0, that is −2 < <i>a</i> < 6: seven integers, −1 through 5."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "For <i>a</i> > 0 with <i>b</i><sup>2</sup> − 4<i>ac</i> < 0, the inequality <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> < 0 has solution:",
          "correct": 1,
          "opts": [
            {
              "label": "all real x",
              "nudge": "That is the answer for “> 0”. An upward parabola that misses the axis is positive everywhere, never negative."
            },
            {
              "label": "no real x",
              "nudge": null
            },
            {
              "label": "only x > 0",
              "nudge": "The sign of x has nothing to do with it; the parabola sits above the axis on both sides."
            },
            {
              "label": "the interval between the roots",
              "nudge": "There are no real roots to be between: D < 0 is exactly the statement that the parabola misses the axis."
            }
          ],
          "solution": "With a > 0 and no real roots, the parabola lies entirely above the axis, so the expression is positive for every x and is never negative."
        },
        {
          "t": "mcq",
          "q": "The solution set of (<i>x</i> − 2)<sup>2</sup>(<i>x</i> − 5) > 0 is:",
          "correct": 0,
          "opts": [
            {
              "label": "x > 5",
              "nudge": null
            },
            {
              "label": "x > 2",
              "nudge": "That treats (x − 2)² as if it were (x − 2), a sign-changing factor. An even power never flips the sign."
            },
            {
              "label": "x > 5 or x = 2",
              "nudge": "At x = 2 the product is 0, and 0 is not greater than 0, so a strict inequality shuts it out."
            },
            {
              "label": "all x ≠ 2",
              "nudge": "That ignores the factor (x − 5) entirely, which is what actually decides the sign."
            }
          ],
          "solution": "(x − 2)² ≥ 0 always, so the sign is decided by (x − 5), but the product is 0 at both x = 2 and x = 5. A strict “> 0” therefore needs x > 5, which already excludes 2."
        },
        {
          "t": "mcq",
          "q": "Running the wavy curve on (<i>x</i> + 1)(<i>x</i> − 2)<sup>2</sup>(<i>x</i> − 4), the curve behaves at <i>x</i> = 2 by:",
          "correct": 2,
          "opts": [
            {
              "label": "crossing from below to above",
              "nudge": "Crossing is what an odd multiplicity does. Here the factor is squared."
            },
            {
              "label": "crossing from above to below",
              "nudge": "Same error in the other direction: the curve does not change sides at an even root at all."
            },
            {
              "label": "touching the axis and returning to the same side",
              "nudge": null
            },
            {
              "label": "jumping across the axis without touching it",
              "nudge": "A polynomial is continuous, it cannot jump. Sign changes only ever happen through zero."
            }
          ],
          "solution": "An even power flips a factor’s sign twice, which is no net flip, so the curve touches the axis at x = 2 and bounces back. Odd crosses, even bounces."
        },
        {
          "t": "mcq",
          "q": "For (<i>a</i> − 3)<i>x</i><sup>2</sup> + (<i>a</i> − 3)<i>x</i> + 4 > 0 to hold for every real <i>x</i>, which value of <i>a</i> must be tested on its own?",
          "correct": 1,
          "opts": [
            {
              "label": "a = 0",
              "nudge": "Nothing special happens at a = 0 here; the expression is still a genuine quadratic there."
            },
            {
              "label": "a = 3",
              "nudge": null
            },
            {
              "label": "a = 19",
              "nudge": "That is where the discriminant vanishes, which the discriminant condition already handles. It needs no separate branch."
            },
            {
              "label": "a = 4",
              "nudge": "An ordinary value inside the range, decided by the same discriminant test as its neighbours."
            }
          ],
          "solution": "At a = 3 the coefficient of x² is zero, so the expression is not a quadratic and the discriminant rule does not apply. It becomes the constant 4, which is positive, so that value belongs to the answer."
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Forgetting the even-multiplicity bounce.</b> At a squared root the curve touches and returns, the sign does not flip. Treating it as a normal crossing inverts half your intervals.",
            "Leaving the coefficient of <i>x</i><sup>2</sup> negative. Multiply by −1 and <b>flip the inequality</b> before using “positive outside, negative between”.",
            "Assuming real roots exist. If <i>D</i> < 0 there is nothing to be between, and the expression keeps one sign for every <i>x</i>.",
            "Solving <i>x</i><sup>2</sup> > 4 by “taking the square root of both sides”. Squares are blind to sign, so that move quietly loses the branch <i>x</i> < −2.",
            "In a parameter question, skipping the value that kills the <i>x</i><sup>2</sup> coefficient. That degenerate case is often the only one that works."
          ]
        },
        {
          "t": "protip",
          "html": "fix the far-right sign, then walk left. once every <i>x</i>-coefficient is positive, the expression is positive on the far-right interval, always. flip at odd roots, bounce at even ones. one substitution with a large <i>x</i> confirms the anchor before you propagate anything."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "a > 0: negative between the roots, positive outside",
              "note": "make the x² coefficient positive first"
            },
            {
              "f": "D < 0 with a > 0 ⇒ positive for every x",
              "note": "no roots, so nothing to be between"
            },
            {
              "f": "One side = 0 → factor → anchor + on the far right",
              "note": "the wavy-curve algorithm in one line"
            },
            {
              "f": "Odd multiplicity crosses · even multiplicity bounces",
              "note": "an even power flips the sign twice"
            },
            {
              "f": "f(x) > 0 for all x ⟺ a > 0 and D < 0",
              "note": "use D ≤ 0 for the slack version ≥ 0"
            },
            {
              "f": "Parameter in a? test a = 0 separately",
              "note": "then union that branch with the rest"
            }
          ],
          "aids": [
            "“odd crosses, even bounces”",
            "“no roots, one sign”"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Rational Inequalities and Domains",
      "chip": "05 RATIONAL",
      "kalam": "reduce, draw, then re-attach",
      "blocks": [
        {
          "t": "p",
          "html": "Here is the move that costs more marks than any other in this part of the chapter. Faced with (<i>x</i> − 4)/(<i>x</i> + 1) < 1, almost everyone multiplies both sides by <i>x</i> + 1. That is <b>illegal</b>: the sign of <i>x</i> + 1 is unknown, so you cannot know whether to flip. The safe route, every single time, is to bring everything to one side and combine it into a single quotient."
        },
        {
          "t": "p",
          "html": "Once the inequality reads <i>N</i>(<i>x</i>)/<i>D</i>(<i>x</i>) ≶ 0, one observation removes the fraction entirely. A quotient and the corresponding product carry the <b>same sign</b>, because <i>N</i>/<i>D</i> = <i>ND</i>/<i>D</i><sup>2</sup> and a square is positive. So a rational inequality is a polynomial inequality in disguise, with one extra condition you must never drop: <i>D</i>(<i>x</i>) ≠ 0."
        },
        {
          "t": "formula",
          "kicker": "DENOMINATOR TO NUMERATOR",
          "tag": "the rule that starts everything",
          "main": "N/D ≷ 0 ⟺ N · D ≷ 0, with D ≠ 0",
          "legend": [
            "because <i>N</i>/<i>D</i> = <i>ND</i>/<i>D</i><sup>2</sup> and <i>D</i><sup>2</sup> > 0 wherever it is defined",
            "the condition <i>D</i> ≠ 0 is not bookkeeping, it is what keeps the two statements equivalent"
          ],
          "note": "A denominator root is excluded always, open circle, even under ≤ or ≥. A numerator root is included only when the sign is non-strict."
        },
        {
          "t": "def",
          "term": "Critical points of a quotient",
          "html": "The zeros of the numerator and the zeros of the denominator together. They are the only places the expression can change sign, and they carry different brackets: <b>numerator zeros are filled</b> under ≤ or ≥ and hollow under a strict sign, while <b>denominator zeros are hollow always</b>, because the expression is undefined there."
        },
        {
          "t": "p",
          "html": "That is enough while the exponents are 1 and 2. JEE does not stay there. A standard reference problem asks you to solve an inequality carrying powers like 253 and 10000, and nobody draws that curve. Instead you <b>reduce the expression to a product of distinct linear factors with the same sign everywhere</b>, run the ordinary wavy curve on the reduction, and then re-attach the points the reduction threw away."
        },
        {
          "t": "defgrid",
          "title": "Reducing a factor (x − a) to the power m",
          "tag": "record every deleted root",
          "rows": [
            {
              "k": "m even, in the numerator",
              "v": "delete the factor; record <i>x</i> = <i>a</i> as an <b>include</b> candidate under ≤ or ≥, excluded when strict"
            },
            {
              "k": "m even, in the denominator",
              "v": "delete the factor; record <i>x</i> = <i>a</i> as <b>excluded</b> always"
            },
            {
              "k": "m odd, in the numerator",
              "v": "replace it by the single factor (<i>x</i> − <i>a</i>), nothing to record"
            },
            {
              "k": "m odd, in the denominator",
              "v": "move it up to the numerator as (<i>x</i> − <i>a</i>); record <i>x</i> = <i>a</i> as <b>excluded</b> always"
            },
            {
              "k": "quadratic with D < 0",
              "v": "it never changes sign: delete it if its leading coefficient is positive, delete it and <b>reverse</b> the inequality if negative"
            },
            {
              "k": "why it is legal",
              "v": "(<i>x</i> − <i>a</i>)<sup>2<i>m</i></sup> ≥ 0 everywhere, so deleting it changes the sign nowhere except at <i>x</i> = <i>a</i> itself"
            }
          ]
        },
        {
          "t": "proc",
          "title": "Reduce, draw, re-attach",
          "steps": [
            "Bring everything to one side, combine into a single quotient, factor completely, and make every <i>x</i>-coefficient positive, tracking each stray −1.",
            "Apply the reduction rules, writing the deleted roots in a <b>margin list</b> as you go: include candidates in one column, excluded points in the other.",
            "Run the wavy curve on the reduced product, which now has only distinct simple factors, so there is no bouncing left to think about.",
            "<b>Re-attach.</b> Delete every excluded point from the answer and add back every included point, even if it sits alone in the middle of a rejected stretch.",
            "Substitute one value from each interval of your final answer into the <b>original</b> expression, not the reduced one."
          ]
        },
        {
          "t": "think",
          "html": "the reduced curve cannot show you an isolated solution point. it was deleted before you drew anything. that is why the margin list is written first and applied last: miss it and the answer looks clean, tidy, and wrong."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Solve (<i>x</i> − 4)/(<i>x</i> + 1) < 1.",
          "steps": [
            "Do not cross-multiply, the sign of <i>x</i> + 1 is unknown. Bring everything to one side: (<i>x</i> − 4)/(<i>x</i> + 1) − 1 < 0.",
            "Combine: [(<i>x</i> − 4) − (<i>x</i> + 1)]/(<i>x</i> + 1) < 0, that is −5/(<i>x</i> + 1) < 0.",
            "The numerator is the negative constant −5, and negative over positive is negative, so the inequality needs <i>x</i> + 1 > 0, that is <i>x</i> > −1.",
            "<i>x</i> = −1 is excluded anyway, the original expression is undefined there."
          ],
          "ans": "(−1, ∞)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Solve (<i>x</i> + 3)(<i>x</i> − 1)<sup>2</sup>(<i>x</i> − 4)/(<i>x</i> + 2) ≥ 0.",
          "steps": [
            "Critical points, left to right: <i>x</i> = −3 (numerator, multiplicity 1), <i>x</i> = −2 (denominator, always excluded), <i>x</i> = 1 (numerator, multiplicity 2), <i>x</i> = 4 (numerator, multiplicity 1).",
            "Sign walk from the far right, where everything is positive: + on (4, ∞); cross <i>x</i> = 4 gives − on (1, 4); <i>x</i> = 1 is even, so <b>bounce</b>, still − on (−2, 1); cross <i>x</i> = −2 gives + on (−3, −2); cross <i>x</i> = −3 gives − on (−∞, −3).",
            "Collect the parts on or above the axis: (−3, −2) is positive, include −3 (numerator zero, non-strict) but exclude −2 (denominator), giving [−3, −2). And (4, ∞), including 4, giving [4, ∞).",
            "Finally <i>x</i> = 1 makes the expression exactly 0, which satisfies ≥ 0, so it survives as an <b>isolated point</b> in the middle of a negative stretch."
          ],
          "ans": "[−3, −2) ∪ {1} ∪ [4, ∞). Three traps at once: the bounce, the open denominator root, and the lone point"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "Solve (<i>x</i> − 2)<sup>3</sup>(<i>x</i> + 1)<sup>4</sup>(<i>x</i> − 5) / [(<i>x</i> + 3)<sup>2</sup>(<i>x</i> − 1)] ≥ 0.",
          "steps": [
            "Reduce rather than draw. (<i>x</i> − 2)<sup>3</sup> becomes (<i>x</i> − 2). (<i>x</i> + 1)<sup>4</sup> is even and in the numerator: delete it, and record <i>x</i> = −1 as an <b>include</b> candidate, since the sign is ≥ and the expression is 0 there.",
            "(<i>x</i> + 3)<sup>2</sup> is even and in the denominator: delete it, record <i>x</i> = −3 as excluded. The odd denominator factor (<i>x</i> − 1) moves up, with <i>x</i> = 1 excluded.",
            "Reduced inequality: (<i>x</i> − 1)(<i>x</i> − 2)(<i>x</i> − 5) ≥ 0, three simple roots. Anchor positive on the far right and flip at each: + on (5, ∞), − on (2, 5), + on (1, 2), − on (−∞, 1). The reduced answer is [1, 2] ∪ [5, ∞).",
            "Re-attach: delete <i>x</i> = 1, a denominator root, leaving (1, 2] ∪ [5, ∞); confirm <i>x</i> = −3 is outside that set; and add the isolated point <i>x</i> = −1. Check <i>x</i> = 0 in the original: it evaluates to a negative number, correctly outside, and it sits between two accepted pieces."
          ],
          "ans": "{−1} ∪ (1, 2] ∪ [5, ∞)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Solve [(<i>x</i> − 1)/(<i>x</i> + 2)]<sup>2</sup> − 3[(<i>x</i> − 1)/(<i>x</i> + 2)] + 2 ≥ 0.",
          "steps": [
            "The block (<i>x</i> − 1)/(<i>x</i> + 2) appears twice, so name it: let <i>t</i> = (<i>x</i> − 1)/(<i>x</i> + 2), with <i>x</i> ≠ −2 throughout. Then <i>t</i><sup>2</sup> − 3<i>t</i> + 2 ≥ 0, that is (<i>t</i> − 1)(<i>t</i> − 2) ≥ 0, so <i>t</i> ≤ 1 or <i>t</i> ≥ 2. A union in <i>t</i>, so the push-backs will be unioned.",
            "Push back <i>t</i> ≤ 1, without cross-multiplying: (<i>x</i> − 1)/(<i>x</i> + 2) − 1 ≤ 0 gives −3/(<i>x</i> + 2) ≤ 0, which needs <i>x</i> + 2 > 0, that is <i>x</i> > −2.",
            "Push back <i>t</i> ≥ 2: (<i>x</i> − 1)/(<i>x</i> + 2) − 2 ≥ 0 gives −(<i>x</i> + 5)/(<i>x</i> + 2) ≥ 0, that is (<i>x</i> + 5)/(<i>x</i> + 2) ≤ 0, which holds between the critical points: [−5, −2).",
            "Union: [−5, −2) ∪ (−2, ∞). Students who cross-multiply <i>t</i> ≤ 1 get “<i>x</i> − 1 ≤ <i>x</i> + 2”, true for every <i>x</i>, and hand in all of ℝ apart from −2, losing the exclusion <i>x</i> < −5 entirely."
          ],
          "ans": "[−5, −2) ∪ (−2, ∞), that is every real number except −2 and the stretch x < −5"
        },
        {
          "t": "p",
          "html": "The same sign analysis hands you the <b>domain of a function</b>, which is how JEE Main usually asks for it. Read the expression from the outside in and write one condition for each structure you meet, then intersect. One failed condition disqualifies a point, however comfortable the others look."
        },
        {
          "t": "defgrid",
          "title": "Structure to condition",
          "tag": "then intersect them all",
          "rows": [
            {
              "k": "√f",
              "v": "<i>f</i> ≥ 0, a square root standing alone allows its argument to be zero"
            },
            {
              "k": "1/f",
              "v": "<i>f</i> ≠ 0"
            },
            {
              "k": "1/√f",
              "v": "<i>f</i> > 0, both conditions at once, and the zero is no longer allowed"
            },
            {
              "k": "log f, base b",
              "v": "<i>f</i> > 0, with <i>b</i> > 0 and <i>b</i> ≠ 1"
            },
            {
              "k": "1/(log f)",
              "v": "<i>f</i> > 0 and <i>f</i> ≠ 1, since the logarithm itself must not vanish"
            },
            {
              "k": "The bracket rule",
              "v": "≥ against > carries all the marks. Solve each condition by the wavy curve, denominator roots hollow"
            }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the domain of <i>f</i>(<i>x</i>) = √[(<i>x</i> − 1)/(<i>x</i> − 3)].",
          "steps": [
            "A square root demands a non-negative argument, so the whole question is the rational inequality (<i>x</i> − 1)/(<i>x</i> − 3) ≥ 0.",
            "Do not cross-multiply. Critical points: <i>x</i> = 1 from the numerator, filled since the sign is non-strict, and <i>x</i> = 3 from the denominator, hollow always, because the expression is undefined there.",
            "Anchor on the far right, where both factors are positive: + on (3, ∞). Walking left, the sign flips at 3 to − on (1, 3), and flips back at 1 to + on (−∞, 1).",
            "At <i>x</i> = 1 the quotient is 0 and √0 = 0 is perfectly defined, so 1 belongs. At <i>x</i> = 3 the function is undefined, so 3 stays out even though the inequality is non-strict."
          ],
          "ans": "(−∞, 1] ∪ (3, ∞)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find the domain of <i>f</i>(<i>x</i>) = log<sub>10</sub>[(<i>x</i> − 2)/(<i>x</i> + 3)] + √(9 − <i>x</i><sup>2</sup>).",
          "steps": [
            "Two structures, so two conditions. The logarithm needs a strictly positive argument: (<i>x</i> − 2)/(<i>x</i> + 3) > 0, with both critical points hollow, −3 from the denominator and 2 because the sign is strict.",
            "Sign walk: positive on (2, ∞), negative on (−3, 2), positive on (−∞, −3). So condition 1 gives <i>x</i> < −3 or <i>x</i> > 2.",
            "The square root needs 9 − <i>x</i><sup>2</sup> ≥ 0, that is <i>x</i><sup>2</sup> ≤ 9, so −3 ≤ <i>x</i> ≤ 3.",
            "Intersect: the piece <i>x</i> < −3 shares nothing with [−3, 3], and <i>x</i> > 2 meets it in (2, 3]. At <i>x</i> = 3 the log argument is 1/6 > 0 and the root argument is 0, both defined; at <i>x</i> = 2 the log argument is 0 and log 0 is undefined. The two ends carry different brackets because different conditions bind there."
          ],
          "ans": "(2, 3]"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[JEE Main] Solve (<i>x</i> − 2)/(<i>x</i> + 5) ≥ 0.",
              "a": "(−∞, −5) ∪ [2, ∞): the numerator root 2 is included, the denominator root −5 never is."
            },
            {
              "q": "[JEE Main] Solve (<i>x</i> + 1)(<i>x</i> − 4)/(<i>x</i> − 2)<sup>2</sup> ≤ 0.",
              "a": "The even denominator factor deletes and punches a hole: [−1, 2) ∪ (2, 4]."
            },
            {
              "q": "[JEE Advanced] Solve (<i>x</i> − 2)<sup>2</sup>(<i>x</i> + 1)/(<i>x</i> − 5) ≤ 0.",
              "a": "[−1, 5). The squared factor only touches zero at <i>x</i> = 2, which already lies inside the interval, and 5 is a denominator root."
            },
            {
              "q": "[JEE Main] Find the domain of <i>f</i>(<i>x</i>) = √(<i>x</i><sup>2</sup> − 4<i>x</i> + 3).",
              "a": "(<i>x</i> − 1)(<i>x</i> − 3) ≥ 0, positive outside the roots: (−∞, 1] ∪ [3, ∞)."
            },
            {
              "q": "[JEE Main] Find the domain of <i>f</i>(<i>x</i>) = log<sub>10</sub>[(<i>x</i> + 2)/(<i>x</i> − 5)].",
              "a": "The argument must be strictly positive: (−∞, −2) ∪ (5, ∞), both ends open."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The solution of (<i>x</i> + 1)/(<i>x</i> − 3) ≤ 0 is:",
          "correct": 1,
          "opts": [
            {
              "label": "[−1, 3]",
              "nudge": "That wrongly includes x = 3, where the expression is undefined. A denominator root is never a solution."
            },
            {
              "label": "[−1, 3)",
              "nudge": null
            },
            {
              "label": "(−1, 3)",
              "nudge": "That wrongly excludes the numerator root −1, where the quotient is 0, which does satisfy ≤ 0."
            },
            {
              "label": "(−∞, −1] ∪ (3, ∞)",
              "nudge": "That is the “outside” region, where the quotient is positive: the wrong sign entirely."
            }
          ],
          "solution": "Critical points −1 (numerator) and 3 (denominator). The quotient is negative between them; include −1 because the sign is non-strict, exclude 3 because it is a denominator root."
        },
        {
          "t": "mcq",
          "q": "The solution of (<i>x</i> − 1)<sup>2</sup>(<i>x</i> + 4)/(<i>x</i> − 2) ≥ 0 is:",
          "correct": 2,
          "opts": [
            {
              "label": "(−∞, −4] ∪ (2, ∞)",
              "nudge": "The sign analysis is right but the isolated point x = 1 was dropped: the expression is 0 there, which satisfies ≥ 0."
            },
            {
              "label": "[−4, 1] ∪ (2, ∞)",
              "nudge": "The squared factor was treated as a sign-changer, which flips every interval to the left of 1 and hands back a stretch where the expression is actually negative."
            },
            {
              "label": "(−∞, −4] ∪ {1} ∪ (2, ∞)",
              "nudge": null
            },
            {
              "label": "(−∞, −4] ∪ {1} ∪ [2, ∞)",
              "nudge": "Everything is right except the bracket at 2, and 2 is a denominator root, so it can never be included."
            }
          ],
          "solution": "Delete the even numerator factor and record x = 1 as an isolated solution. The reduction (x + 4)(x − 2) ≥ 0 gives x ≤ −4 or x > 2, with 2 excluded as a denominator root."
        },
        {
          "t": "mcq",
          "q": "The domain of <i>f</i>(<i>x</i>) = 1/√(9 − <i>x</i><sup>2</sup>) is:",
          "correct": 0,
          "opts": [
            {
              "label": "(−3, 3)",
              "nudge": null
            },
            {
              "label": "[−3, 3]",
              "nudge": "At x = ±3 the root is 0 and the fraction divides by zero. A root under a denominator needs strict positivity."
            },
            {
              "label": "(−∞, −3) ∪ (3, ∞)",
              "nudge": "There 9 − x² is negative, so the square root is not even defined."
            },
            {
              "label": "all real x except ±3",
              "nudge": "That drops the requirement 9 − x² > 0 entirely and keeps values where the root is imaginary."
            }
          ],
          "solution": "A square root in a denominator needs 9 − x² > 0, that is x² < 9, so both ends are strict."
        },
        {
          "t": "mcq",
          "q": "The correct first move for (<i>x</i> − 4)/(<i>x</i> + 1) < 1 is:",
          "correct": 1,
          "opts": [
            {
              "label": "multiply both sides by x + 1",
              "nudge": "The sign of x + 1 is unknown, so you cannot know whether to flip. This is the top rational-inequality error."
            },
            {
              "label": "subtract 1 and combine into one quotient",
              "nudge": null
            },
            {
              "label": "square both sides to clear the fraction",
              "nudge": "Squaring destroys sign information and does not remove the fraction anyway."
            },
            {
              "label": "multiply both sides by (x + 1)²",
              "nudge": "The square is positive so the direction survives, but it leaves a cubic where a two-line answer was available, and it silently permits x = −1."
            }
          ],
          "solution": "Bring everything to one side: (x − 4)/(x + 1) − 1 < 0 gives −5/(x + 1) < 0, which needs x + 1 > 0, so x > −1."
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Cross-multiplying by a variable denominator.</b> Its sign is unknown, so the flip is unknowable. Bring everything to one side and combine, always.",
            "<b>Including a denominator zero.</b> A value that makes the denominator 0 is never a solution, open circle always, even under ≤ or ≥.",
            "<b>Losing the isolated point.</b> The reduced curve deleted it, so only the margin list can put it back. Write that list before you draw anything.",
            "Forgetting that a numerator root <b>is</b> included under a non-strict sign, so the answer can be a closed end next to an open one.",
            "In a domain question, assuming both ends inherit the same bracket. Each end is decided by whichever condition binds there, and √ alone allows 0 while √ in a denominator does not."
          ]
        },
        {
          "t": "protip",
          "html": "when one block repeats, name it. for [(<i>x</i> − 1)/(<i>x</i> + 2)]<sup>2</sup> − 3[(<i>x</i> − 1)/(<i>x</i> + 2)] + 2, set <i>t</i> equal to the block, solve in <i>t</i>, then push each <i>t</i>-interval back as its own rational inequality, one side at a time. a union in <i>t</i> stays a union in <i>x</i>."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "N/D ≷ 0 ⟺ N·D ≷ 0, with D ≠ 0",
              "note": "because N/D = ND/D²"
            },
            {
              "f": "Never cross-multiply by a variable denominator",
              "note": "bring to one side, combine, factor"
            },
            {
              "f": "Numerator roots filled under ≤ ≥ · denominator roots hollow always",
              "note": "the brackets carry the marks"
            },
            {
              "f": "Even powers delete, odd powers collapse to one factor",
              "note": "keep a margin list, then re-attach"
            },
            {
              "f": "√f needs f ≥ 0 · 1/√f needs f > 0 · log f needs f > 0",
              "note": "solve each, then intersect"
            },
            {
              "f": "Substitute back into the original expression",
              "note": "never into the reduced one"
            }
          ],
          "aids": [
            "“reduce, draw, then re-attach”",
            "“denominators get a hole, never a dot”",
            "“domain first, algebra second”"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Modulus and Radical Inequalities",
      "chip": "06 MODULUS",
      "kalam": "a distance beats every negative number",
      "blocks": [
        {
          "t": "p",
          "html": "Drive out of Mumbai on the Expressway and you pass kilometre stones: 0, 1, 2, and so on to Pune. The Khalapur toll plaza sits at stone 42 and you are somewhere at stone <i>x</i>. How far are you from the toll? Not <i>x</i> − 42, that is negative if you have not reached it yet, and there is no such thing as being minus eleven kilometres from a toll plaza. The honest answer is |<i>x</i> − 42|. That is the whole idea: <b>|<i>a</i> − <i>b</i>| is the distance on the number line between <i>a</i> and <i>b</i></b>, and distance never carries a sign."
        },
        {
          "t": "p",
          "html": "Once you hold that picture, every modulus inequality becomes a sentence about distance. |<i>x</i> − 42| < 5 says “you are within 5 km of the toll”, the stretch from stone 37 to stone 47, one single interval. |<i>x</i> − 42| > 5 says “you are more than 5 km away”, everything outside that stretch, in two separate pieces, one on each side. That is why <b>less-than locks you in and greater-than lets you out</b>: it is not a rule to memorise, it is what distance means."
        },
        {
          "t": "think",
          "html": "now put a second toll plaza at stone 50. anywhere between the two, |<i>x</i> − 42| + |<i>x</i> − 50| is exactly 8, the gap, because you are just splitting it. step outside the pair and the total climbs. so that sum can never be less than 8, and |<i>x</i> − 42| + |<i>x</i> − 50| < 6 is empty on sight, without a line of algebra."
        },
        {
          "t": "def",
          "term": "Modulus",
          "html": "|<i>x</i>| = <i>x</i> when <i>x</i> ≥ 0, and −<i>x</i> when <i>x</i> < 0. The output is always non-negative, and |<i>x</i>| = 0 only when <i>x</i> = 0. The <b>critical point of a modulus is where its argument is zero</b>, not where the constant inside it sits: |2<i>x</i> + 3| switches at <i>x</i> = −3/2, never at −3."
        },
        {
          "t": "formula",
          "kicker": "PROPERTIES WORTH KNOWING COLD",
          "tag": "for all real a, b",
          "main": "√(a²) = |a| · |a|² = a² · |ab| = |a||b|",
          "legend": [
            "|<i>a</i>| ≥ 0 always, and −|<i>a</i>| ≤ <i>a</i> ≤ |<i>a</i>|",
            "|<i>a</i> + <i>b</i>| ≤ |<i>a</i>| + |<i>b</i>|, the triangle inequality, and ||<i>a</i>| − |<i>b</i>|| ≤ |<i>a</i> − <i>b</i>|, its reverse form",
            "constant right-hand side, <i>a</i> > 0: |<i>x</i>| < <i>a</i> ⟺ −<i>a</i> < <i>x</i> < <i>a</i>, and |<i>x</i>| > <i>a</i> ⟺ <i>x</i> < −<i>a</i> or <i>x</i> > <i>a</i>"
          ],
          "note": "Squaring is legitimate only when both sides are known to be non-negative. |f| < g does not become f² < g² on its own."
        },
        {
          "t": "diagram",
          "kind": "numberline",
          "kicker": "DIAGRAM · A MODULUS IS A DISTANCE, TAP A CASE",
          "mathChips": true,
          "chips": [
            "|x − 4| < 2",
            "|x − 4| > 2",
            "|x| + |x − 3| ≤ 5"
          ],
          "captions": [
            "Distance from 4 less than 2: everything strictly within two units of the centre, the single interval (2, 6). Less-than locks you in.",
            "Distance from 4 more than 2: the same centre, but now the answer is everything outside, and it breaks into two pieces, (−∞, 2) ∪ (6, ∞). Greater-than lets you out.",
            "Two moduli, so this is the sum of the distances from 0 and from 3. That sum can never fall below the gap of 3, and the bound 5 clears it, so the answer is one closed interval [−1, 4], symmetric about the midpoint 1.5."
          ],
          "frames": [
            {
              "x": [0, 8],
              "intervals": [
                { "from": 2, "to": 6, "openLeft": true, "openRight": true, "label": "(2, 6)" }
              ]
            },
            {
              "x": [0, 8],
              "intervals": [
                { "from": -1, "to": 2, "openRight": true },
                { "from": 6, "to": 9, "openLeft": true }
              ]
            },
            {
              "x": [-3, 6],
              "intervals": [
                { "from": -1, "to": 4, "label": "[−1, 4]" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Now the harder case, and the one JEE asks most often. What does |<i>x</i> − 1| < <i>x</i> + 2 mean? The left side is a distance, so it is never negative. The right side is an <b>expression</b>, which may be positive, zero or negative depending on <i>x</i>. A non-negative quantity can never be strictly less than a negative one, so any <i>x</i> making <i>x</i> + 2 negative is dead on arrival. When the right-hand side carries the variable, <b>its sign becomes part of the problem</b>."
        },
        {
          "t": "defgrid",
          "title": "Variable right-hand side",
          "tag": "valid for every real value of g",
          "rows": [
            {
              "k": "|f| < g",
              "v": "−<i>g</i> < <i>f</i> < <i>g</i>. The double inequality forces <i>g</i> > 0 by itself"
            },
            {
              "k": "|f| ≤ g",
              "v": "−<i>g</i> ≤ <i>f</i> ≤ <i>g</i>, and <i>g</i> ≥ 0 is forced the same way"
            },
            {
              "k": "|f| > g",
              "v": "<i>f</i> > <i>g</i> or <i>f</i> < −<i>g</i>. If <i>g</i> < 0 the union covers everything, which is correct"
            },
            {
              "k": "|f| ≥ g",
              "v": "<i>f</i> ≥ <i>g</i> or <i>f</i> ≤ −<i>g</i>, same story"
            },
            {
              "k": "and versus or",
              "v": "the < family is one double inequality, so <b>intersect</b>; the > family is two branches, so <b>union</b>"
            },
            {
              "k": "modulus against modulus",
              "v": "|<i>f</i>| < |<i>h</i>| ⟺ <i>f</i><sup>2</sup> < <i>h</i><sup>2</sup>, with no guard at all: both sides are already non-negative, so square at once"
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY |f| < g IS EXACTLY −g < f < g, TAP A LINE",
          "steps": [
            {
              "eq": "assume |f| < g. Then g > |f| ≥ 0",
              "why": "A modulus is never negative, so a number strictly exceeding it is positive. This is where the right-hand side earns its positivity: it is a consequence, not an assumption you have to impose."
            },
            {
              "eq": "f ≤ |f| < g ⟹ f < g",
              "why": "Every real number is at most its own modulus, so the upper half of the double inequality falls out immediately."
            },
            {
              "eq": "−f ≤ |f| < g ⟹ f > −g",
              "why": "The same fact applied to −f gives −f < g, and multiplying by −1 flips it to f > −g. Together with the previous line, −g < f < g."
            },
            {
              "eq": "conversely −g < f < g ⟹ |f| < g",
              "why": "From f < g and f > −g we also get −f < g, and |f| is one of f or −f, so whichever it is, it is less than g. Every step is an iff, so no case analysis on the sign of g is ever required. Students who split into “g > 0” and “g ≤ 0” branches are doing work the double inequality already does, and usually mishandle the second branch."
            }
          ]
        },
        {
          "t": "proc",
          "title": "One modulus, variable right-hand side",
          "steps": [
            "<b>Isolate the modulus</b> so the inequality reads |<i>f</i>(<i>x</i>)| against <i>g</i>(<i>x</i>), with exactly one modulus term alone on the left. Every rule above is stated for that shape.",
            "<b>Read the direction:</b> < or ≤ means a double inequality and an intersection; > or ≥ means two branches and a union. This single reading decides the shape of your answer, and reversing it hands in the complement of the truth.",
            "<b>Write the equivalent form</b> from the table and solve each part as an ordinary linear or polynomial inequality. Once the bars are gone, nothing new is happening.",
            "<b>Combine:</b> intersect for the < family, union for the > family. A branch that collapses to a false numerical statement contributes nothing, and one that collapses to a true statement contributes its entire interval. Both are ordinary outcomes.",
            "<b>Test the endpoints and one interior point</b> in the original inequality. It costs seconds and catches an inverted direction or a wrong bracket at once."
          ]
        },
        {
          "t": "proc",
          "title": "Two or more moduli: the case split",
          "steps": [
            "<b>Find the critical points</b> by setting each modulus argument to zero. With <i>k</i> distinct critical points you get <i>k</i> + 1 intervals covering ℝ.",
            "<b>Build a sign table</b>, one row per modulus argument, one column per interval, entering + or −. The table tells you mechanically whether |<i>f</i>| becomes <i>f</i> or −<i>f</i> in each column.",
            "<b>Rewrite and solve on each interval.</b> Where an argument is negative replace |<i>f</i>| by −<i>f</i>, where it is positive or zero replace it by <i>f</i>. On that interval the rewritten inequality is exactly equivalent to the original.",
            "<b>Intersect each case’s solution with that case’s own interval.</b> A value that solves the rewritten inequality but lies outside the interval does not solve the original, because the rewriting was only valid inside. This is the step students skip, and it is worth the whole question.",
            "<b>Union the survivors</b> and merge adjacent intervals into the tidiest form. The cases are exhaustive and disjoint, so every genuine solution appears in exactly one of them."
          ]
        },
        {
          "t": "formula",
          "kicker": "THE TWO-DISTANCE SHORTCUT",
          "tag": "coefficient 1 inside each modulus",
          "main": "|x − p| + |x − q| ≥ q − p",
          "legend": [
            "for <i>p</i> < <i>q</i>, with equality exactly on [<i>p</i>, <i>q</i>]: the minimum is the gap itself",
            "if <i>c</i> ≥ <i>q</i> − <i>p</i>, then |<i>x</i> − <i>p</i>| + |<i>x</i> − <i>q</i>| ≤ <i>c</i> solves to the interval centred at (<i>p</i> + <i>q</i>)/2 with half-width <i>c</i>/2",
            "if <i>c</i> < <i>q</i> − <i>p</i>, the solution set is ∅, and you can say so without writing a line"
          ],
          "note": "A checking tool and a speed weapon, not a replacement for the case split: with a coefficient other than 1 inside a modulus it does not apply."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "Solve |<i>x</i> + 3| < 2<i>x</i>.",
          "steps": [
            "The right-hand side is an expression, not a number, so use the general form: |<i>x</i> + 3| < 2<i>x</i> ⟺ −2<i>x</i> < <i>x</i> + 3 < 2<i>x</i>. A double inequality, so both parts must hold at once.",
            "Left part: −2<i>x</i> < <i>x</i> + 3 gives −3<i>x</i> < 3, and dividing by −3 flips it: <i>x</i> > −1.",
            "Right part: <i>x</i> + 3 < 2<i>x</i> gives 3 < <i>x</i>.",
            "Intersect: <i>x</i> > 3. Check <i>x</i> = 4: |7| = 7 and 2(4) = 8, so 7 < 8 holds. At <i>x</i> = 3 both sides are 6, so the strict inequality fails and 3 is correctly excluded. Notice you never had to argue separately that 2<i>x</i> is positive."
          ],
          "ans": "(3, ∞)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Solve |<i>x</i> − 3| ≥ <i>x</i>.",
          "steps": [
            "The direction is ≥, so the general form gives a <b>union</b> of two branches: <i>x</i> − 3 ≥ <i>x</i> or <i>x</i> − 3 ≤ −<i>x</i>.",
            "Branch 1: <i>x</i> − 3 ≥ <i>x</i> reduces to −3 ≥ 0, false for every <i>x</i>, so it contributes nothing. A branch collapsing to a false statement is normal, not an error.",
            "Branch 2: 2<i>x</i> ≤ 3, so <i>x</i> ≤ 3/2.",
            "Check <i>x</i> = −5: |−8| = 8 ≥ −5, true. Every negative <i>x</i> satisfies the inequality automatically, because a modulus is non-negative and already beats a negative right-hand side, and the general form handled that without a separate case."
          ],
          "ans": "(−∞, 3/2]"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "Solve |<i>x</i> − 3| < 2<i>x</i> − 5.",
          "steps": [
            "The trap is squaring on autopilot. |<i>x</i> − 3|<sup>2</sup> = (<i>x</i> − 3)<sup>2</sup> is genuinely true, and squaring gives 0 < 3<i>x</i><sup>2</sup> − 14<i>x</i> + 16 = (<i>x</i> − 2)(3<i>x</i> − 8), whose seductive answer is (−∞, 2) ∪ (8/3, ∞).",
            "One substitution exposes it. At <i>x</i> = 0 the original reads |−3| < −5, that is 3 < −5, false. Squaring destroyed the sign information: it cannot tell 3 < −5 from (−5)<sup>2</sup> > 3<sup>2</sup>.",
            "Do it properly: −(2<i>x</i> − 5) < <i>x</i> − 3 < 2<i>x</i> − 5. Left gives 8 < 3<i>x</i>, so <i>x</i> > 8/3; right gives 2 < <i>x</i>. Intersecting, and 8/3 > 2, so <i>x</i> > 8/3.",
            "If you do want to square, carry the guard: |<i>f</i>| < <i>g</i> means <i>f</i><sup>2</sup> < <i>g</i><sup>2</sup> <b>and</b> <i>g</i> > 0. Here <i>g</i> > 0 means <i>x</i> > 5/2, and intersecting that with the squared answer kills the spurious branch. The squaring route is legal, it is simply never legal alone."
          ],
          "ans": "(8/3, ∞)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Solve |<i>x</i> − 2| + |2<i>x</i> + 3| ≤ 7, and state how many integers satisfy it.",
          "steps": [
            "Two moduli, and the second has a coefficient of 2 inside, so the distance shortcut does not apply and a case split is mandatory. Critical points: <i>x</i> = 2 and <i>x</i> = −3/2, a fraction, not the visible −3.",
            "Case A, <i>x</i> < −3/2: both arguments are negative, so the expression is (2 − <i>x</i>) + (−2<i>x</i> − 3) = −3<i>x</i> − 1 ≤ 7, giving <i>x</i> ≥ −8/3 after the flip. Intersect with the case: [−8/3, −3/2).",
            "Case B, −3/2 ≤ <i>x</i> < 2: the expression is (2 − <i>x</i>) + (2<i>x</i> + 3) = <i>x</i> + 5 ≤ 7, so <i>x</i> ≤ 2, satisfied throughout. Case B contributes all of [−3/2, 2). Case C, <i>x</i> ≥ 2: 3<i>x</i> + 1 ≤ 7 gives <i>x</i> ≤ 2, so the intersection is the single point {2}.",
            "Union: [−8/3, 2]. Since −8/3 ≈ −2.67, the integers are −2, −1, 0, 1, 2. Check the ends: at <i>x</i> = 2 the sum is 0 + 7 = 7, equality; at <i>x</i> = −3 it is 5 + 3 = 8 > 7, correctly excluded."
          ],
          "ans": "[−8/3, 2], five integers. Case C looks empty yet yields the lone boundary point the answer needs"
        },
        {
          "t": "formula",
          "kicker": "RADICALS · CONTROLLED SQUARING",
          "tag": "the guard doing real work",
          "main": "√f < g ⟺ f ≥ 0 and g > 0 and f < g²",
          "legend": [
            "√<i>f</i> > <i>g</i> ⟺ [<i>f</i> ≥ 0 and <i>g</i> < 0] <b>or</b> [<i>g</i> ≥ 0 and <i>f</i> > <i>g</i><sup>2</sup>]",
            "<i>f</i> ≥ 0 is the domain condition and can never be dropped; the sign of <i>g</i> drives everything else",
            "for “<” all three conditions are intersected; for “>” a negative <i>g</i> is an automatic win, so that branch is kept and unioned"
          ],
          "note": "In the second bracket of the “>” rule, f > g² ≥ 0 already forces f ≥ 0, so the domain condition is absorbed there. In the first bracket it must be written explicitly."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Solve √(<i>x</i> + 3) < <i>x</i> + 1.",
          "steps": [
            "Write all three conditions before touching the algebra. Domain: <i>x</i> + 3 ≥ 0, so <i>x</i> ≥ −3. Sign of the right side: <i>x</i> + 1 > 0, so <i>x</i> > −1.",
            "Squared comparison: <i>x</i> + 3 < (<i>x</i> + 1)<sup>2</sup> = <i>x</i><sup>2</sup> + 2<i>x</i> + 1, so 0 < <i>x</i><sup>2</sup> + <i>x</i> − 2 = (<i>x</i> + 2)(<i>x</i> − 1), giving <i>x</i> < −2 or <i>x</i> > 1.",
            "Intersect all three. The condition <i>x</i> > −1 annihilates the branch <i>x</i> < −2 completely, and it is weaker than <i>x</i> > 1, so what survives is <i>x</i> > 1.",
            "Check: at <i>x</i> = 2, √5 ≈ 2.236 < 3, true. At <i>x</i> = 1 both sides are 2, so the strict inequality fails. At <i>x</i> = −2.5 the squared comparison held, yet √0.5 < −1.5 is plainly false: the sign condition earned its place."
          ],
          "ans": "(1, ∞)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Solve √(<i>x</i> + 3) > <i>x</i> + 1.",
          "steps": [
            "Same two expressions, opposite direction, and now the answer needs both branches. Domain throughout: <i>x</i> ≥ −3.",
            "Branch 1, the right side is negative: <i>x</i> + 1 < 0, so <i>x</i> < −1. With the domain that is −3 ≤ <i>x</i> < −1, and every such <i>x</i> works automatically, since a non-negative root already beats a negative number.",
            "Branch 2, the right side is non-negative: <i>x</i> ≥ −1. Now both sides are non-negative, so squaring is legitimate: <i>x</i> + 3 > (<i>x</i> + 1)<sup>2</sup> gives (<i>x</i> + 2)(<i>x</i> − 1) < 0, that is −2 < <i>x</i> < 1. Intersecting with <i>x</i> ≥ −1 leaves −1 ≤ <i>x</i> < 1.",
            "Union: [−3, 1). Cross-check both examples at once: on the domain [−3, ∞) exactly one of <, =, > holds at each point, and (1, ∞) for “<”, equality only at <i>x</i> = 1, and [−3, 1) for “>” are disjoint with union [−3, ∞), the whole domain."
          ],
          "ans": "[−3, 1)"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Solve |<i>x</i> + 2| ≤ 3<i>x</i> and write the answer in interval notation.",
              "a": "−3<i>x</i> ≤ <i>x</i> + 2 ≤ 3<i>x</i> gives <i>x</i> ≥ −1/2 and <i>x</i> ≥ 1, intersected: [1, ∞)."
            },
            {
              "q": "[JEE Main] Solve |2<i>x</i> − 1| > <i>x</i> + 3.",
              "a": "Two branches, unioned: 2<i>x</i> − 1 > <i>x</i> + 3 gives <i>x</i> > 4, and 2<i>x</i> − 1 < −(<i>x</i> + 3) gives <i>x</i> < −2/3. So (−∞, −2/3) ∪ (4, ∞)."
            },
            {
              "q": "[JEE Main] Solve |<i>x</i>| + |<i>x</i> − 3| ≤ 5.",
              "a": "[−1, 4]. The centre case gives the constant 3 ≤ 5, true throughout, and the two outer cases supply the ends."
            },
            {
              "q": "[JEE Advanced] Solve |<i>x</i> − 1| + |<i>x</i> − 3| < 1.",
              "a": "∅. The two points are 2 apart, so the sum of distances is never below 2, let alone below 1."
            },
            {
              "q": "[JEE Main] Solve √(<i>x</i> − 1) < 3.",
              "a": "[1, 10). The domain gives <i>x</i> ≥ 1, the right side is positive, and <i>x</i> − 1 < 9 caps it."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The solution of |<i>x</i> − 2| > 3 is:",
          "correct": 1,
          "opts": [
            {
              "label": "(−1, 5)",
              "nudge": "That applies the “<” template, which locks you inside, to a “>” inequality that lets you out."
            },
            {
              "label": "(−∞, −1) ∪ (5, ∞)",
              "nudge": null
            },
            {
              "label": "[−1, 5]",
              "nudge": "Wrong region and closed brackets, although the inequality is strict on both counts."
            },
            {
              "label": "(−∞, −1] ∪ [5, ∞)",
              "nudge": "The right region, but at x = −1 and x = 5 the distance is exactly 3, which is not more than 3."
            }
          ],
          "solution": "x − 2 < −3 or x − 2 > 3, that is x < −1 or x > 5, both ends open because the sign is strict."
        },
        {
          "t": "mcq",
          "q": "The solution set of |<i>x</i> − 2| < <i>x</i> is:",
          "correct": 0,
          "opts": [
            {
              "label": "(1, ∞)",
              "nudge": null
            },
            {
              "label": "(−∞, 1)",
              "nudge": "The left half −x < x − 2 was mis-solved: 2 < 2x gives x > 1, not x < 1."
            },
            {
              "label": "(1, 2)",
              "nudge": "This assumes “<” must produce a bounded interval and closes it off at the critical point 2. With a variable right-hand side one of the two bounds can be vacuous."
            },
            {
              "label": "all real x except 2",
              "nudge": "That reads the inequality as |x − 2| > 0 and reports where the modulus fails to vanish."
            }
          ],
          "solution": "Write −x < x − 2 < x. The left part gives x > 1; the right part gives −2 < 0, true for every x. Intersecting leaves x > 1."
        },
        {
          "t": "mcq",
          "q": "The number of integers satisfying |<i>x</i>| + |<i>x</i> − 4| ≤ 6 is:",
          "correct": 2,
          "opts": [
            {
              "label": "5",
              "nudge": "Only the middle case was solved, counting the integers 0 to 4 and never examining the outer intervals at all."
            },
            {
              "label": "6",
              "nudge": "This assumes x ≥ 0 because moduli are involved, which loses the piece [−1, 0) and with it the integer −1."
            },
            {
              "label": "7",
              "nudge": null
            },
            {
              "label": "9",
              "nudge": "This bounds the two moduli separately and intersects [−6, 6] with [−2, 10]. A sum of two moduli cannot be bounded term by term."
            }
          ],
          "solution": "Critical points 0 and 4. Below 0: 4 − 2x ≤ 6 gives x ≥ −1. Between: the sum is exactly 4 ≤ 6, true throughout. Above 4: 2x − 4 ≤ 6 gives x ≤ 5. So [−1, 5], holding −1, 0, 1, 2, 3, 4, 5."
        },
        {
          "t": "mcq",
          "q": "The number of real values of <i>x</i> satisfying |<i>x</i> − 3| + |<i>x</i> − 6| < 2 is:",
          "correct": 2,
          "opts": [
            {
              "label": "exactly one",
              "nudge": "That comes from testing only the midpoint 4.5, where the sum is 1.5 + 1.5 = 3, and mis-recording it as a success."
            },
            {
              "label": "infinitely many",
              "nudge": "That is the case-split answer with each case never intersected with its own interval, which produces a confident “all of ℝ”."
            },
            {
              "label": "none",
              "nudge": null
            },
            {
              "label": "exactly two",
              "nudge": "That reports the two case boundaries as though they were solutions; substituting x = 3.5 gives 0.5 + 2.5 = 3, not less than 2."
            }
          ],
          "solution": "The points 3 and 6 are 3 apart, so |x − 3| + |x − 6| ≥ 3 for every real x. A quantity never below 3 can never be below 2: the solution set is empty."
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Squaring without the sign guard.</b> |<i>f</i>| < <i>g</i> is not <i>f</i><sup>2</sup> < <i>g</i><sup>2</sup>. The correct statement carries a companion condition, <i>g</i> > 0, and dropping it imports a whole interval of false solutions.",
            "<b>Forgetting to intersect a case with its own interval.</b> Replacing |<i>x</i> − 1| by 1 − <i>x</i> assumes <i>x</i> < 1, so any solution you then find is only real if it also satisfies <i>x</i> < 1. Write the interval beside each case before you start solving it.",
            "<b>Confusing “and” with “or”.</b> The < family is a double inequality whose halves are intersected; the > family is two branches that are unioned. Reversing this returns the complement of the correct answer.",
            "Taking the critical point from the constant rather than the argument. |2<i>x</i> + 3| switches at −3/2, and |3<i>x</i> − 4| at 4/3. Always solve “argument = 0” in writing.",
            "Panicking at a case that collapses. One reducing to −3 ≥ 0 contributes nothing, one reducing to 3 < 5 contributes its entire interval. Both are ordinary outcomes.",
            "Losing an endpoint under a non-strict sign, including an isolated point where the two sides are exactly equal."
          ]
        },
        {
          "t": "protip",
          "html": "read two moduli as distances before writing anything. |<i>x</i> − <i>p</i>| + |<i>x</i> − <i>q</i>| is never below the gap |<i>p</i> − <i>q</i>|, so |<i>x</i> − 4| + |<i>x</i> − 9| < 3 is empty on sight, and |<i>x</i> − 4| + |<i>x</i> − 9| ≤ 11 solves instantly to [1, 12], the interval centred at 6.5 with half-width 5.5. in a timed paper that turns a four-line case split into a five-second read."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "|a − b| is the distance from a to b",
              "note": "|a| ≥ 0 always, and √(a²) = |a|"
            },
            {
              "f": "|f| < g ⟺ −g < f < g",
              "note": "intersect · g > 0 comes free"
            },
            {
              "f": "|f| > g ⟺ f > g or f < −g",
              "note": "union · a negative g makes it universally true"
            },
            {
              "f": "|f| < |h| ⟺ f² < h², no guard",
              "note": "but |f| < g needs f² < g² and g > 0"
            },
            {
              "f": "Two moduli: critical points → sign table → intersect → union",
              "note": "min of |x − p| + |x − q| is the gap"
            },
            {
              "f": "√f < g ⟺ f ≥ 0, g > 0, f < g²",
              "note": "√f > g keeps the negative-g branch too"
            }
          ],
          "aids": [
            "“less-than is an and, greater-than is an or”",
            "“guard before you square”",
            "“every case goes home to its own interval”"
          ]
        }
      ]
    }
  ]
};

export default ch05Inequalities;
