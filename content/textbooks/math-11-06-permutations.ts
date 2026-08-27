/**
 * Chapter 06 · Permutations and Combinations. Mathematics, Class 11.
 *
 * Restructured from pages 416 to 493 of the Drona Class 11 Mathematics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md,
 * following math-11-01-sets.ts and math-11-03-trigonometry.ts for voice and
 * density.
 *
 * The source is three documents stacked: a typeset chapter of five subtopics,
 * a Round 1 Supplement (Subtopic 06, inclusion-exclusion and onto
 * distributions) and a Round 2 Addendum (07A rank of a word, 07B lattice
 * paths, 07C the divisor toolkit, 07D partial derangements). Six topics is the
 * schema's ceiling, so the four addenda are folded into the topic that already
 * owns their engine rather than given topics of their own:
 *
 *   - 07A, rank of a word, sits in Topic 02. It is the alike-objects formula
 *     from Subtopic 02 §2 run once per position, and the source's own warning
 *     is that the repeat-denominator has to be recomputed at every branch,
 *     which only makes sense next to the formula it recomputes.
 *   - 07B, lattice paths, sits in Topic 03. A monotonic path is a word in R's
 *     and U's, so the count is a single binomial coefficient, and the `pascal`
 *     figure in that topic can show the same 35 twice: once as a symmetry and
 *     once as a grid-path count.
 *   - 07C, the divisor toolkit, and 07D, partial derangements, sit in Topic 06
 *     directly under the divisor count and the derangement count they extend.
 *
 * The Supplement keeps a topic of its own (Topic 05) because it is not an
 * extension of anything: it states inclusion-exclusion properly, and the onto
 * count is the one distribution case Topic 04 deliberately leaves open.
 *
 * Two deliberate compressions. The Stirling table and Bell numbers are carried
 * as a defgrid row and a single formula legend rather than as a table block,
 * because the schema has no table type and the values a paper actually uses
 * are six numbers. And the general exactly-r / at-least-r sums for n sets are
 * given only in their three-set form, which is the form CBSE and JEE Main ask
 * for; the general statement stays as prose in the union formula's note.
 *
 * The exam hook is authored once, on topic 1, with a bold heading per topic,
 * because the reader renders `hook` only there. Same convention, and the same
 * reason, as the Sets and Trigonometry chapters.
 *
 * Six `diagram` blocks: two `tree` (the multiplication principle, then the
 * falling product against the power), two `plot` (the permutation-against-
 * combination contrast, then distinct against alike), one `pascal` (symmetry,
 * Pascal's rule, grid paths) and one `venn3` for inclusion-exclusion, which
 * keeps its built-in chips because its four regions are exactly the four
 * questions Topic 05 asks. Diagram chips and captions render as plain text,
 * not markup, so they carry no inline tags.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch06Permutations: Chapter = {
  "chapter": "06",
  "title": "Permutations and Combinations",
  "subject": "Mathematics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Counting Without Listing",
      "chip": "01 COUNT",
      "kalam": "and multiplies, or adds",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Counting Without Listing</b><br>The foundation the entire chapter stands on. JEE Main almost always hides one question here, usually disguised as a digit or number-formation problem, and it silently powers every later Permutations, Probability and Binomial question. JEE Advanced tests it through multi-constraint and complementary counting. CBSE Boards asks a direct 2–4 mark counting or factorial-simplification question.<br><br><b>02 · Permutations: When Order Matters</b><br>A heavyweight. JEE Main reliably carries 1–2 questions on word arrangements, digit formation and restricted seating. CBSE Boards asks the <sup>n</sup>P<sub>r</sub> derivation, alike-object counts, 2–4 mark applications, and the <b>rank of a word</b> as a direct 4-mark question. JEE Advanced pushes into restricted and circular permutations with layered constraints.<br><br><b>03 · Combinations: When Order Does Not</b><br>The chapter's payoff. JEE Main and CBSE lean heavily on committee and team-selection problems and the <sup>n</sup>C<sub>r</sub> properties. JEE Advanced layers constraints (<b>at least, at most, grouping</b>) and dresses the same coefficient as a grid-path count. Beyond this chapter <sup>n</sup>C<sub>r</sub> is the backbone of the Binomial Theorem and of almost every Probability problem, so the time you invest here pays for the rest of the syllabus.<br><br><b>04 · Total Selections, Stars and Bars</b><br>Where JEE separates students. Main and Advanced lean hard on <b>stars and bars</b> (integer solutions, distributing identical objects), total-selection counts and grouping problems, and all of them reappear inside Probability. CBSE Boards touches only the simplest selection counts.<br><br><b>05 · Inclusion, Exclusion and Onto Distributions</b><br>CBSE examines the two-set and three-set union at 2–4 marks, usually as a survey question carried over from Sets. JEE Main turns the same tool into counting: how many integers up to <i>N</i> are divisible by at least one of two or three numbers, how many integer solutions survive an upper bound on each variable. JEE Advanced pushes to the general <i>n</i>-set statement and to <b>onto distributions</b> of distinct objects into distinct boxes.<br><br><b>06 · Counting in Costume</b><br>The named techniques examiners love. Geometric counting, number of divisors, sum of all numbers formed, rank, derangements and the exponent of a prime in <i>n</i>! recur in JEE Main and Advanced and reward students who recognise the pattern in seconds. CBSE occasionally asks divisors or a simple geometric count."
        },
        {
          "t": "p",
          "html": "Walk into a small thali restaurant near a railway station. The menu is simple: pick <b>one</b> sabzi (there are 4), <b>one</b> roti (there are 3), <b>one</b> sweet (there are 2). The owner says proudly that many combinations are possible, and you want the exact number without sitting down and writing out every plate. Here is the realisation. For <i>every</i> choice of sabzi you still have all 3 rotis available, and for every sabzi-roti pair you still have both sweets. So the choices stack up by multiplying: 4 × 3 × 2 = 24 distinct thalis. That single idea, <b>when you make a sequence of independent choices you multiply the number of options at each stage</b>, is the Multiplication Principle, the heart of the Fundamental Principle of Counting."
        },
        {
          "t": "think",
          "html": "picture a tree growing left to right. from the root, 4 branches sprout, one per sabzi. from the tip of each, 3 more grow. from each of those, 2 twigs. the number of leaves at the far right is the number of thalis, and counting leaves is just multiplying the branching factors. the tree never lies."
        },
        {
          "t": "p",
          "html": "Why not just list everything and count? Because lists explode. A 4-wheel number lock with digits 0–9 has 10<sup>4</sup> = 10,000 settings; a 6-character password from letters and digits has over two billion. Nobody lists those. The principle hands you the <b>size</b> of a collection while you stay blissfully ignorant of its members. That is the one skill this whole chapter trains."
        },
        {
          "t": "def",
          "term": "Multiplication Principle (FPC)",
          "html": "If a task is completed by doing stage 1 in <i>m</i> ways <b>and</b> stage 2 in <i>n</i> ways, where stage 2's count does not depend on which option was chosen at stage 1, the whole task can be done in <i>m</i> × <i>n</i> ways. It extends to any finite number of stages: <i>m</i><sub>1</sub> × <i>m</i><sub>2</sub> × ⋯ × <i>m</i><sub>k</sub>."
        },
        {
          "t": "def",
          "term": "Addition Principle",
          "html": "If a task is completed by choosing <b>either</b> an option of type A (available in <i>m</i> ways) <b>or</b> a mutually exclusive option of type B (available in <i>n</i> ways), the number of ways is <i>m</i> + <i>n</i>. The word <b>mutually exclusive</b> is not decoration: overlapping piles double-count."
        },
        {
          "t": "p",
          "html": "The entire distinction lives in two tiny English words. <b>AND</b> (do this and then that) means the choices combine, so you multiply. <b>OR</b> (do this or instead that) means the choices are alternatives, so you add. Burn it in: <b>AND multiplies, OR adds.</b> Translate the sentence into ANDs and ORs first, and only then reach for × and +."
        },
        {
          "t": "diagram",
          "kind": "tree",
          "kicker": "DIAGRAM · TAP A TREE, COUNT THE LEAVES",
          "chips": ["THE THALI", "THE TROPHIES", "THE LOCK"],
          "captions": [
            "Four sabzis branch from the root. From the tip of each, three rotis grow, and from each of those, two sweets. Only the first branch is drawn in full and the rest carry a multiplier badge, because a fully drawn tree has 24 leaves and teaches nothing the collapsed one does not. Count the leaves and you have multiplied the branching factors.",
            "Five distinct trophies on a shelf. Position 1 can take any of the 5, position 2 any of the remaining 4, and the tree thins by exactly one at every level until the last position has a single trophy left. That descending product is what 5 factorial means, and it is the multiplication principle applied to a full arrangement.",
            "Four dials, each showing 0 to 9. Nothing is used up, so every level fans out to the full ten again. Five branches are drawn and the other five are counted off. Repetition allowed is the fork that turns a falling product into a power."
          ],
          "frames": [
            {
              "tree": {
                "root": "thali",
                "levels": [
                  { "label": "Sabzi", "count": 4, "names": ["Aloo", "Bhindi", "Paneer", "Dal"] },
                  { "label": "Roti", "count": 3 }
                ],
                "total": "4 × 3 × 2 = 24"
              }
            },
            {
              "tree": {
                "root": "shelf",
                "levels": [
                  { "label": "Position 1", "count": 5, "names": ["Gold", "Silver", "Bronze", "Fair play", "Best fielder"] },
                  { "label": "Position 2", "count": 4 }
                ],
                "total": "5 × 4 × 3 × 2 × 1 = 120"
              }
            },
            {
              "tree": {
                "root": "lock",
                "levels": [
                  { "label": "Dial 1", "count": 10, "names": ["0", "1", "2", "3", "4"] },
                  { "label": "Dial 2", "count": 10 }
                ],
                "total": "10 × 10 × 10 × 10 = 10000"
              }
            }
          ]
        },
        {
          "t": "p",
          "html": "Where does the factorial come in? Suppose you arrange 5 different trophies in a row. The first position can be filled by any of 5, the next by any of the remaining 4, then 3, then 2, then the last 1: a pure multiplication chain giving 5 × 4 × 3 × 2 × 1 = 120. That descending product is so common that it got a shorthand, <b>5! = 120</b>, read five factorial."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · FACTORIAL",
          "tag": "n a non-negative integer",
          "main": "n! = n(n − 1)(n − 2) ⋯ 3 · 2 · 1",
          "legend": [
            "<i>n</i> ∈ ℤ, <i>n</i> ≥ 0 · undefined for negatives and fractions at this level",
            "boundary values 0! = 1 and 1! = 1 · recursion <i>n</i>! = <i>n</i> · (<i>n</i> − 1)!"
          ],
          "note": "Factorials explode: 5! = 120 but 10! = 3,628,800. If an answer comes out as 20!, leave it as 20!."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · REPETITION ALLOWED",
          "tag": "r slots, n options each",
          "main": "n × n × ⋯ × n = n<sup>r</sup>",
          "legend": [
            "Every slot sees the full <i>n</i> options, because nothing is used up.",
            "Contrast with the falling product, where each new slot loses one option."
          ],
          "note": "Repetition or no repetition is the single most important fork in the whole chapter. Read the problem, never assume."
        },
        {
          "t": "defgrid",
          "title": "One table to never confuse again",
          "rows": [
            {
              "k": "Repetition allowed",
              "v": "every slot sees all <i>n</i> ⇒ <i>n</i><sup>r</sup>"
            },
            {
              "k": "No repetition, order matters",
              "v": "slots lose one each ⇒ <i>n</i>(<i>n</i> − 1) ⋯ (<i>n</i> − <i>r</i> + 1)"
            },
            {
              "k": "Arrange all n distinct",
              "v": "the case <i>r</i> = <i>n</i> ⇒ <i>n</i>!"
            },
            {
              "k": "AND (sequence of stages)",
              "v": "multiply: <i>m</i> × <i>n</i> × ⋯"
            },
            {
              "k": "OR (exclusive alternatives)",
              "v": "add: <i>m</i> + <i>n</i>"
            },
            {
              "k": "At least one",
              "v": "total − none, almost always faster than casework"
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY 0! = 1, TAP A LINE",
          "steps": [
            {
              "eq": "n positions, n distinct objects",
              "why": "Treat the n places in the row as n boxes to be filled left to right. Nothing beyond the multiplication principle is used anywhere in this argument."
            },
            {
              "eq": "n × (n − 1) × (n − 2) × ⋯ × 2 × 1 = n!",
              "why": "Position 1 takes any of the n objects. Position 2 takes any object except the one already placed, so n − 1. Each new position loses exactly one option, and the last position has a single object left. So n! is the answer to the question in how many orders can n distinct things be lined up. That meaning, not the symbol, is what to keep in your head."
            },
            {
              "eq": "n! = n · (n − 1)!",
              "why": "Peel the leading factor off the product and what remains is the factorial of n − 1. This recursion is the identity you will use more than any other in the chapter, and it is what forces the value of 0!."
            },
            {
              "eq": "put n = 1: 1! = 1 · 0!",
              "why": "The recursion has to keep working at the bottom of the ladder. Since 1! = 1, the only value of 0! that survives is 1."
            },
            {
              "eq": "0! = 1",
              "why": "A second, independent justification agrees. There is exactly one way to arrange zero objects in a row, namely the empty arrangement, so 0! counts one thing. Defining it as 0 would break the recursion and collapse every later formula, since nCn = n!/(n! 0!) would become a division by zero."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Turning a sentence into a count",
          "steps": [
            "<b>Translate into AND and OR first.</b> Bracket each AND group with ×, then join independent alternatives with +. Assigning symbols before you have parsed the English is where most marks are lost.",
            "<b>Draw the slots.</b> Write one box per position and put its number of options underneath. A visible row of boxes stops you from silently changing the model halfway through.",
            "<b>Fill the most constrained slot first.</b> A leading digit that cannot be 0, a units digit that must be even, a seat reserved for one person: handle those before the free slots, or the free counts will be wrong.",
            "<b>Check independence.</b> If a later stage's count depends on which earlier option was picked, you may not multiply. Reorder so the constrained stage comes first, or split into disjoint cases and add them.",
            "<b>Read at least one as a complement.</b> Compute total − none. It turns a messy sum of cases into two clean products almost every time."
          ]
        },
        {
          "t": "p",
          "html": "Watch independence break. How many 3-digit numbers with all digits distinct can be formed from {0, 1, 2, 3}? The reflex 4 × 3 × 2 = 24 is <b>wrong</b>, because the first slot cannot use 0 while later slots can, so the clean symmetry is gone. Fix the constrained slot first: slot 1 in 3 ways (1, 2, 3), then slots 2 and 3 draw from the 3 remaining digits, which now include 0, in 3 × 2 = 6 ways. Total 3 × 6 = <b>18</b>."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A school issues ID codes of one letter (A–Z) followed by three digits (0–9), repetition of digits allowed. How many distinct codes are possible?",
          "steps": [
            "Four slots in order. Slot 1 is a letter: 26 ways.",
            "Slots 2, 3, 4 are digits with repetition allowed: 10 ways each.",
            "All four stages are independent, so multiply: 26 × 10 × 10 × 10."
          ],
          "ans": "26 × 1000 = 26,000 codes"
        },
        {
          "t": "ex",
          "tag": "CONCEPTUAL TRAP",
          "q": "A canteen lets you order either a single ready plate (3 available) or a combo of one paratha (4 types) and one chutney (5 types). How many distinct breakfast orders are possible?",
          "steps": [
            "Ready plate is one of 3: that is 3 ways.",
            "Combo is paratha <b>AND</b> chutney, so multiply: 4 × 5 = 20 ways.",
            "The overall order is plate <b>OR</b> combo, mutually exclusive, so add: 3 + 20."
          ],
          "ans": "3 + 4 × 5 = 23 orders. Multiplying everything gives 60, adding everything gives 12, and both ignore the AND/OR structure"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "How many 4-digit numbers are even? (Repetition of digits is allowed.)",
          "steps": [
            "Two constrained slots: thousands cannot be 0, units must be even. Do those first.",
            "Thousands: 1–9, so 9 ways. Units: {0, 2, 4, 6, 8}, so 5 ways.",
            "Hundreds and tens are free: 10 ways each.",
            "The restrictions do not interfere, so multiply: 9 × 10 × 10 × 5."
          ],
          "ans": "4500 even 4-digit numbers"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "How many 5-digit numbers contain the digit 9 at least once? (No leading zero, repetition allowed.)",
          "steps": [
            "At least one is awkward directly, so complement: #(at least one 9) = #(all) − #(no 9).",
            "All 5-digit numbers: 9 × 10<sup>4</sup> = 90,000.",
            "No 9 anywhere: the first digit drops <b>both</b> 0 and 9, leaving 8; each other digit drops only 9, leaving 9.",
            "8 × 9<sup>4</sup> = 8 × 6561 = 52,488."
          ],
          "ans": "90,000 − 52,488 = 37,512. The leading digit obeys two exclusions at once, the interior digits only one"
        },
        {
          "t": "mcq",
          "q": "A combination lock has 3 dials, each showing the digits 0–9. How many distinct codes are possible?",
          "correct": 3,
          "opts": [
            {
              "label": "30",
              "nudge": "That is 10 + 10 + 10. You treated the dials as OR-alternatives; setting a code needs dial 1 AND dial 2 AND dial 3, so they multiply."
            },
            {
              "label": "720",
              "nudge": "That is 10 × 9 × 8, which assumes the digits cannot repeat. On a lock they certainly can: 5-5-5 is a legal code."
            },
            {
              "label": "999",
              "nudge": "The off-by-one trap. Codes run from 000 to 999, and that is 1000 values, not 999."
            },
            {
              "label": "1000",
              "nudge": null
            }
          ],
          "solution": "Each dial is filled independently from 10 digits with repetition allowed, so 10 × 10 × 10 = 1000."
        },
        {
          "t": "mcq",
          "q": "A student submits one project. They may choose either one of 3 ready-made topics, or design a custom topic by pairing one theme (2 available) with one method (4 available). In how many ways can the project be chosen?",
          "correct": 1,
          "opts": [
            {
              "label": "9",
              "nudge": "That is 3 + 2 + 4, adding everything blindly. Theme and method form an AND-pair, so they multiply before anything is added."
            },
            {
              "label": "11",
              "nudge": null
            },
            {
              "label": "14",
              "nudge": "That is (3 + 2) × 4, which brackets the wrong group. The + belongs between the two routes, not inside the custom route."
            },
            {
              "label": "24",
              "nudge": "That is 3 × 2 × 4, forcing an OR-structure into a product. You cannot take a ready-made topic and build a custom one."
            }
          ],
          "solution": "Ready-made: 3 ways. Custom is theme AND method: 2 × 4 = 8. The two routes are mutually exclusive, so add: 3 + 8 = 11."
        },
        {
          "t": "mcq",
          "q": "If <i>n</i>! / (<i>n</i> − 3)! = 120, then <i>n</i> equals",
          "correct": 1,
          "opts": [
            {
              "label": "5",
              "nudge": "The headline trap. You spotted 5! = 120 and stopped, but the left side is a product of three terms, not a full factorial."
            },
            {
              "label": "6",
              "nudge": null
            },
            {
              "label": "8",
              "nudge": "Guessed without expanding. Check it: 8 · 7 · 6 = 336, not 120."
            },
            {
              "label": "10",
              "nudge": "Guessed without expanding. Check it: 10 · 9 · 8 = 720, far past 120."
            }
          ],
          "solution": "<i>n</i>! / (<i>n</i> − 3)! = <i>n</i>(<i>n</i> − 1)(<i>n</i> − 2), so we need three consecutive integers multiplying to 120. Since 6 × 5 × 4 = 120, <i>n</i> = 6."
        },
        {
          "t": "mcq",
          "q": "How many 3-letter codes from {A, B, C, D, E} (repetition allowed) contain at least one vowel? (Vowels: A, E.)",
          "correct": 3,
          "opts": [
            {
              "label": "27",
              "nudge": "That is the consonant-only count 3<sup>3</sup>. You found the complement correctly and then forgot to subtract it from the total."
            },
            {
              "label": "50",
              "nudge": "That is 2 × 5 × 5, which counts only codes whose <b>first</b> letter is a vowel. Codes with the vowel in slot 2 or 3 are missing."
            },
            {
              "label": "75",
              "nudge": "That is 125 − 50, which compounds the slot-1-only error: you subtracted a wrong complement."
            },
            {
              "label": "98",
              "nudge": null
            }
          ],
          "solution": "Total codes 5<sup>3</sup> = 125. Codes with no vowel use only B, C, D: 3<sup>3</sup> = 27. At least one vowel = 125 − 27 = 98."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] A boutique stocks 4 kurtas, 3 leggings and 2 dupattas, all distinct. How many three-piece outfits, one of each, can be assembled?",
              "a": "4 × 3 × 2 = 24"
            },
            {
              "q": "[CBSE] Find the positive integer <i>n</i> with (<i>n</i> + 1)! = 12 × (<i>n</i> − 1)!.",
              "a": "(<i>n</i> + 1)<i>n</i> = 12, so <i>n</i> = 3."
            },
            {
              "q": "[JEE Main] How many 3-digit numbers (no leading zero, repetition allowed) are divisible by 5?",
              "a": "9 × 10 × 2 = 180. The units digit is 0 or 5."
            },
            {
              "q": "[JEE Main] A password is 4 characters from 26 letters and 10 digits (36 symbols, repetition allowed). How many contain at least one digit?",
              "a": "36<sup>4</sup> − 26<sup>4</sup> = 1,222,640"
            },
            {
              "q": "[JEE Advanced] How many 6-digit numbers (no leading zero) have no two adjacent digits equal?",
              "a": "9 × 9<sup>5</sup> = 9<sup>6</sup> = 531,441. Each digit after the first avoids only its neighbour."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Confusing AND with OR.</b> Multiplying mutually exclusive alternatives, or adding sequential stages. Translate into AND/OR first, assign × and + second.",
            "<b>Assuming no repetition by default.</b> Locks, number plates and passwords usually <b>allow</b> repetition (<i>n</i><sup>r</sup>); seating distinct people does not. The fork decides everything.",
            "<b>Forgetting boundary constraints.</b> A leading digit usually cannot be 0, and one digit can face <b>two</b> exclusions at once (≠ 0 and ≠ 9 leaves 8 options, not 9).",
            "<b>Mishandling 0!.</b> It is 1, never 0. Treating it as 0 collapses the combination formulas into nonsense.",
            "<b>Adding overlapping OR cases.</b> Numbers divisible by 2 or by 3 are not two disjoint piles; naive addition double-counts the sixes."
          ]
        },
        {
          "t": "protip",
          "html": "whenever you read “at least one,” stop looking for a direct construction and compute total − none. it converts a messy sum of cases into two clean products almost every single time."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "AND ⇒ × · OR ⇒ +",
              "note": "translate the English first"
            },
            {
              "f": "n! = n(n − 1) ⋯ 2 · 1, 0! = 1",
              "note": "recursion n! = n · (n − 1)!"
            },
            {
              "f": "repetition allowed ⇒ n<sup>r</sup>",
              "note": "no repetition ⇒ falling product"
            },
            {
              "f": "at least one = total − none",
              "note": "the complement reflex"
            },
            {
              "f": "constrained slot first",
              "note": "or split into disjoint cases and add"
            }
          ],
          "aids": [
            "“and multiply, or add”",
            "“repeats give powers, no repeats give falling products”"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Permutations: When Order Matters",
      "chip": "02 ARRANGE",
      "kalam": "permutation = position",
      "blocks": [
        {
          "t": "p",
          "html": "Picture the medal ceremony after a 100 m final. Three athletes take gold, silver and bronze. If Ravi, Meera and Sory take the medals in that order, that is a <b>different</b> outcome from Meera, Ravi, Sory, even though the same three people are involved. The positions are distinguishable. That is the soul of a permutation: rearranging the same objects produces a brand new arrangement."
        },
        {
          "t": "def",
          "term": "Permutation",
          "html": "An arrangement of objects in a definite order. The one word to tattoo on your brain is <b>order matters</b>. Contrast it with picking 3 students for a study group, where Ravi-Meera-Sory is the <i>same</i> group as Meera-Ravi-Sory. Permutation = <b>position</b>; combination = <b>committee</b>."
        },
        {
          "t": "think",
          "html": "imagine r empty chairs in a row and a crowd of n distinct people. chair 1 has n candidates. once someone sits, chair 2 has n − 1, chair 3 has n − 2. the chairs fill in a descending product, and that product is all nPr ever was."
        },
        {
          "t": "p",
          "html": "See it with tiny numbers. Every arrangement of <i>A</i>, <i>B</i>, <i>C</i> taken all at a time: <i>ABC</i>, <i>ACB</i>, <i>BAC</i>, <i>BCA</i>, <i>CAB</i>, <i>CBA</i>. Exactly 6 = 3! of them, no repeats. Notice that <i>ABC</i> and <i>ACB</i> are counted <b>separately</b>. If instead we had only asked which three letters you picked, all six would collapse into one answer, and that collapse is precisely the gap between a permutation and a combination."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · PERMUTATIONS",
          "tag": "n distinct, r at a time, no repeats",
          "main": "<sup>n</sup>P<sub>r</sub> = n! / (n − r)!",
          "legend": [
            "= <i>n</i>(<i>n</i> − 1)(<i>n</i> − 2) ⋯ (<i>n</i> − <i>r</i> + 1), the falling product, with 0 ≤ <i>r</i> ≤ <i>n</i>",
            "<i>n</i> = objects available · <i>r</i> = positions to fill · the count is dimensionless",
            "special cases <sup>n</sup>P<sub>n</sub> = <i>n</i>!, <sup>n</sup>P<sub>1</sub> = <i>n</i>, <sup>n</sup>P<sub>0</sub> = 1"
          ],
          "note": "Bridge to Topic 03: <sup>n</sup>P<sub>r</sub> = r! · <sup>n</sup>C<sub>r</sub>. Arranging equals selecting and then ordering."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHERE nPr COMES FROM, TAP A LINE",
          "steps": [
            {
              "eq": "r ordered positions, n distinct objects, no repeats",
              "why": "This is the only situation the formula is entitled to. The moment repetition is permitted or the objects are not all distinct, a different count applies."
            },
            {
              "eq": "position 1: n ways · position 2: (n − 1) ways",
              "why": "Position 1 can take any object. Position 2 can take any object except the one already used, and this count of n − 1 does not depend on which object was used, which is exactly the independence the multiplication principle needs."
            },
            {
              "eq": "position r: n − (r − 1) = (n − r + 1) ways",
              "why": "By the time you reach the last position, r − 1 objects are gone, so n − r + 1 remain. This is the smallest factor in the chain and the one students most often get off by one."
            },
            {
              "eq": "nPr = n(n − 1)(n − 2) ⋯ (n − r + 1)",
              "why": "The multiplication principle applied to the r positions. Notice there are exactly r factors, one per position, which is the fastest way to check you have written the product correctly."
            },
            {
              "eq": "multiply and divide by (n − r)!",
              "why": "The falling product is the head of n!, and the missing tail is exactly (n − r)(n − r − 1) ⋯ 2 · 1 = (n − r)!. Putting that tail into both numerator and denominator changes nothing and completes the factorial in the numerator."
            },
            {
              "eq": "nPr = n! / (n − r)!",
              "why": "The compressed form. It is the same number as the falling product, and for hand computation the falling product is almost always faster: 8P3 is 8 × 7 × 6, not 8! divided by 5!."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "tree",
          "kicker": "DIAGRAM · TAP A SETTING, WATCH THE FORK",
          "chips": ["THREE POSTS", "THE PIN CODE", "EVEN NUMBERS"],
          "captions": [
            "Eight club members, three distinct posts. President can be any of the 8; that name is then used up, so Secretary has 7 and Treasurer 6. The tree thins by exactly one at each level, and 8 × 7 × 6 = 336 is what the falling product in nPr records.",
            "The same three slots, but repetition is now allowed, so nothing is used up and every level fans out to the full six again. 216 against 120 for the same digits: the fork between a power and a falling product is worth more marks in this chapter than any single formula.",
            "Even 4-digit numbers from 1, 2, 3, 4, 5 with no repetition. The constrained slot goes first, and the units digit has only 2 legal choices. The other three positions then draw from the 4 unused digits in 4 × 3 × 2 = 24 ways, giving 48."
          ],
          "frames": [
            {
              "tree": {
                "root": "8 members",
                "levels": [
                  { "label": "President", "count": 8, "names": ["Asha", "Ravi", "Meera", "Kabir", "Nita"] },
                  { "label": "Secretary", "count": 7 }
                ],
                "total": "8 × 7 × 6 = 336"
              }
            },
            {
              "tree": {
                "root": "3 slots",
                "levels": [
                  { "label": "Hundreds", "count": 6, "names": ["1", "2", "3", "4", "5"] },
                  { "label": "Tens", "count": 6 }
                ],
                "total": "6 × 6 × 6 = 216"
              }
            },
            {
              "tree": {
                "root": "5 digits",
                "levels": [
                  { "label": "Units", "count": 2, "names": ["2", "4"] },
                  { "label": "Thousands", "count": 4 }
                ],
                "total": "2 × 4 × 3 × 2 = 48"
              }
            }
          ]
        },
        {
          "t": "p",
          "html": "Permutations come in four flavours, and recognising which one you are in is half the battle. All objects distinct with no repetition is the medal podium, counted by <sup>n</sup>P<sub>r</sub>. Repetition allowed is a PIN or a number plate, counted by <i>n</i><sup>r</sup>. Some objects identical is a word like SAMOSA, where swapping the two S's makes no new word. And arranged in a circle is a round dining table, where rotating everyone one seat gives the same arrangement."
        },
        {
          "t": "defgrid",
          "title": "The four flavours",
          "rows": [
            {
              "k": "All distinct, no repeats",
              "v": "<sup>n</sup>P<sub>r</sub> = <i>n</i>! / (<i>n</i> − <i>r</i>)!"
            },
            {
              "k": "Repetition allowed",
              "v": "<i>n</i><sup>r</sup>, every slot sees all <i>n</i> again"
            },
            {
              "k": "Not all distinct",
              "v": "<i>n</i>! / (<i>p</i>! <i>q</i>! <i>s</i>! ⋯) with <i>p</i> + <i>q</i> + <i>s</i> + ⋯ = <i>n</i>"
            },
            {
              "k": "Circular, all n",
              "v": "(<i>n</i> − 1)!, rotation kills one degree of freedom"
            },
            {
              "k": "Circular and flippable",
              "v": "(<i>n</i> − 1)! / 2 for necklaces, garlands, key-rings"
            },
            {
              "k": "Sanity check",
              "v": "<sup>n</sup>P<sub>r</sub> is a positive integer; a fraction means you erred"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ALIKE OBJECTS",
          "tag": "p alike, q alike, and so on",
          "main": "n! / (p! q! s! ⋯)",
          "legend": [
            "Pretend the look-alikes are secretly labelled: then there are <i>n</i>! arrangements.",
            "Each group of <i>p</i> identical objects permutes among itself in <i>p</i>! invisible ways, so every genuine arrangement was counted <i>p</i>! times. Divide it out."
          ],
          "note": "SAMOSA has 6 letters with S twice and A twice: 6!/(2! 2!) = 180, not 720. Scan for repeats before reaching for a factorial."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · CIRCULAR ARRANGEMENTS",
          "tag": "n distinct, all at a time",
          "main": "(n − 1)!",
          "legend": [
            "Reading one circle off from each of its <i>n</i> starting points gives <i>n</i> different linear arrangements of the <b>same</b> circle, so circles = <i>n</i>! / <i>n</i> = (<i>n</i> − 1)!.",
            "If a mirror flip counts as identical (necklace, garland, key-ring), divide by a further 2."
          ],
          "note": "It applies to genuinely rotatable arrangements only. A row of chairs bolted to the floor is still linear, even if it curves."
        },
        {
          "t": "proc",
          "title": "The three restriction reflexes",
          "steps": [
            "<b>Must be together.</b> Glue the group into one block, arrange the block among the others, then multiply by the block's internal arrangements. With <i>A</i> and <i>B</i> together among <i>A</i>…<i>E</i>: 4 units in 4! = 24 ways, times 2! for the block, gives 48.",
            "<b>Must not be together.</b> Seat everyone else first; they create gaps, including the two ends. Then drop the restricted objects into distinct gaps. For the same five letters: <i>C</i>, <i>D</i>, <i>E</i> in 3! = 6 ways create 4 gaps, and <i>A</i>, <i>B</i> go into 2 of them in <sup>4</sup>P<sub>2</sub> = 12 ways, giving 72.",
            "<b>Check the partition.</b> 48 + 72 = 120 = 5!. Together and not-together must exhaust the unrestricted total, and this costs three seconds.",
            "<b>Fixed position.</b> Lock the constrained object in place first, then freely permute what remains.",
            "<b>On a circle, fix one object.</b> That kills the rotational symmetry and the problem instantly collapses to a familiar linear one on the remaining <i>n</i> − 1 objects."
          ]
        },
        {
          "t": "p",
          "html": "One exam pattern deserves its own drill: the <b>rank of a word</b>. A dictionary lists every distinct arrangement of a word's letters in alphabetical order, and the rank is that word's position in the list. You never write the list. You count how many words come <b>before</b> it and add 1."
        },
        {
          "t": "proc",
          "title": "Rank of a word in dictionary order",
          "steps": [
            "<b>Alphabetise the pool</b> and compute the ceiling <i>n</i>!/(<i>p</i>! <i>q</i>! ⋯). Your running total must never exceed it, and checking after the very first position kills most errors outright.",
            "<b>Scan left to right.</b> At position <i>i</i>, let ℓ be the letter of the target and let <i>R</i> be the multiset of letters not yet placed (which still contains ℓ).",
            "<b>For each distinct letter smaller than ℓ in <i>R</i></b>, putting it at position <i>i</i> makes an earlier word no matter how the tail is filled. Add the arrangement count of the remaining multiset, recomputing its repeat-denominator for that branch.",
            "<b>Delete ℓ from the pool</b> and move to position <i>i</i> + 1.",
            "<b>Add 1 at the end</b>, for the target word itself. Write the +1 on the page before you have anything to add it to.",
            "<b>For the k-th word instead</b>, walk the same tree but subtract block sizes until <i>k</i> falls inside a block; fix that letter and repeat on the tail with the reduced <i>k</i>."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A club has 8 members. In how many ways can the distinct posts of President, Secretary and Treasurer be filled, no member holding two posts?",
          "steps": [
            "Three <b>distinct</b> posts, so order matters and this is <sup>8</sup>P<sub>3</sub>.",
            "<sup>8</sup>P<sub>3</sub> = 8!/5! = 8 × 7 × 6."
          ],
          "ans": "336 ways"
        },
        {
          "t": "ex",
          "tag": "CONCEPTUAL TRAP",
          "q": "How many distinct arrangements can be made of all the letters of the word SAMOSA?",
          "steps": [
            "Count letters and spot repeats: S, A, M, O, S, A is 6 letters with S twice and A twice.",
            "If all six were distinct the answer would be 6! = 720.",
            "The two S's are interchangeable (divide by 2!) and so are the two A's (divide by 2! again).",
            "6!/(2! 2!) = 720/4."
          ],
          "ans": "180 arrangements. Writing 720 is the classic forgot-to-divide slip"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "In how many ways can 5 boys and 3 girls be seated around a circular table so that no two girls sit next to each other?",
          "steps": [
            "Seat the <b>unconstrained</b> group first. Five boys around a circle: (5 − 1)! = 24 ways.",
            "Five seated boys create 5 gaps between consecutive boys.",
            "To keep the girls apart, each girl takes a separate gap: choosing and ordering 3 girls into 5 gaps is <sup>5</sup>P<sub>3</sub> = 60.",
            "Multiply the two independent stages: 24 × 60."
          ],
          "ans": "1440. Anchoring the unconstrained group first turns the no-adjacency condition into a clean gap-filling step"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "Find the rank of the word SAMOSA in the dictionary-ordered list of all arrangements of its letters.",
          "steps": [
            "Ceiling first: 6!/(2! 2!) = 180. Any running total above 180 is impossible.",
            "Position 1, letter S. Smaller distinct letters are A, M, O. Fix A: pool {A, M, O, S, S} gives 5!/2! = 60. Fix M: {A, A, O, S, S} gives 5!/(2! 2!) = 30. Fix O: 30 likewise. Subtotal 120.",
            "Position 2, letter A: nothing smaller, 0. Position 3, letter M: pool {A, M, O, S} all distinct, smaller is A, so 3! = 6.",
            "Position 4, letter O: 2! = 2. Position 5, letter S: 1! = 1. Position 6: 0.",
            "Words before SAMOSA = 120 + 6 + 2 + 1 = 129."
          ],
          "ans": "rank 130. Using plain factorials throughout gives 370, which is past the end of a 180-word list, so the ceiling check catches it instantly"
        },
        {
          "t": "mcq",
          "q": "Using the digits 1, 2, 3, 4, 5, 6, how many 3-digit numbers can be formed if repetition is <b>not</b> allowed?",
          "correct": 1,
          "opts": [
            {
              "label": "18",
              "nudge": "That is 6 × 3, a meaningless mix of the number of objects with the number of slots."
            },
            {
              "label": "120",
              "nudge": null
            },
            {
              "label": "216",
              "nudge": "That is 6<sup>3</sup>, the repetition-<b>allowed</b> count. The problem forbids repetition, so the slots must lose one option each."
            },
            {
              "label": "729",
              "nudge": "That is 9<sup>3</sup>. You used 9 digits with repetition; the pool here has only 6 digits and no repeats."
            }
          ],
          "solution": "Order matters and no repetition, so <sup>6</sup>P<sub>3</sub> = 6 × 5 × 4 = 120."
        },
        {
          "t": "mcq",
          "q": "The number of distinct arrangements of all the letters of the word GANGA is",
          "correct": 1,
          "opts": [
            {
              "label": "20",
              "nudge": "That comes from a 5!/3!-type slip. There is no letter appearing three times in GANGA; there are two letters appearing twice."
            },
            {
              "label": "30",
              "nudge": null
            },
            {
              "label": "60",
              "nudge": "You divided by only one 2!, catching the two G's but forgetting the two A's (or the other way round). Every repeat group needs its own division."
            },
            {
              "label": "120",
              "nudge": "That is 5!, which ignores both repeats. Swapping the two identical G's produces no new word."
            }
          ],
          "solution": "GANGA has 5 letters with G twice and A twice, so 5!/(2! 2!) = 120/4 = 30."
        },
        {
          "t": "mcq",
          "q": "In how many distinct ways can 5 different keys be arranged on a circular key-ring?",
          "correct": 0,
          "opts": [
            {
              "label": "12",
              "nudge": null
            },
            {
              "label": "24",
              "nudge": "That is (5 − 1)!, correct for a fixed round table but not for a ring. A key-ring can be flipped over, so clockwise and anticlockwise are the same arrangement."
            },
            {
              "label": "60",
              "nudge": "That is 5!/2, which halves the <b>linear</b> count. You mixed the flip correction with the wrong base; the flip halves the circular count."
            },
            {
              "label": "120",
              "nudge": "That is 5!, which treats the ring as a straight line and ignores rotation entirely."
            }
          ],
          "solution": "A key-ring rotates and flips, so the count is (5 − 1)!/2 = 24/2 = 12."
        },
        {
          "t": "mcq",
          "q": "If <sup>n</sup>P<sub>3</sub> = 2 · <sup>n</sup>P<sub>2</sub>, then <i>n</i> equals",
          "correct": 0,
          "opts": [
            {
              "label": "4",
              "nudge": null
            },
            {
              "label": "5",
              "nudge": "An arithmetic slip while cancelling, typically solving <i>n</i> − 2 = 3 instead of <i>n</i> − 2 = 2."
            },
            {
              "label": "6",
              "nudge": "Guessed without expanding the falling products. Check it: <sup>6</sup>P<sub>3</sub> = 120 while 2 · <sup>6</sup>P<sub>2</sub> = 60."
            },
            {
              "label": "8",
              "nudge": "Guessed without expanding. <sup>8</sup>P<sub>3</sub> = 336 and 2 · <sup>8</sup>P<sub>2</sub> = 112, nowhere near equal."
            }
          ],
          "solution": "Write both as falling products: <i>n</i>(<i>n</i> − 1)(<i>n</i> − 2) = 2<i>n</i>(<i>n</i> − 1). Cancel the non-zero <i>n</i>(<i>n</i> − 1) to get <i>n</i> − 2 = 2, so <i>n</i> = 4. Check: <sup>4</sup>P<sub>3</sub> = 24 = 2 × 12."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] In how many ways can 4 different books be arranged on a shelf, chosen from a collection of 9 different books?",
              "a": "<sup>9</sup>P<sub>4</sub> = 9 × 8 × 7 × 6 = 3024"
            },
            {
              "q": "[CBSE] Find the number of distinct arrangements of all the letters of KOLKATA.",
              "a": "7 letters with K twice and A twice: 7!/(2! 2!) = 1260"
            },
            {
              "q": "[JEE Main] Using 1, 2, 3, 4, 5, 6 without repetition, how many 6-digit numbers have the digits 1 and 2 never adjacent?",
              "a": "6! − 5! · 2! = 720 − 240 = 480"
            },
            {
              "q": "[JEE Main] Find the rank of the word DELHI.",
              "a": "5. Sorted pool D, E, H, I, L; only the last two letters carry any earlier words."
            },
            {
              "q": "[JEE Advanced] In how many ways can 7 people be seated around a circular table if 3 specified people insist on sitting together?",
              "a": "Glue the three into one block: (5 − 1)! × 3! = 24 × 6 = 144"
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Order confusion, the big one.</b> Using <sup>n</sup>P<sub>r</sub> when order does not matter. Test yourself: if I swap two chosen objects, is it a new outcome? Yes means permutation, no means combination.",
            "<b>Forgetting to divide for alike objects.</b> Writing <i>n</i>! for a word with repeated letters. Always scan for repeats and quotient them out.",
            "<b>Circular slips.</b> Using <i>n</i>! instead of (<i>n</i> − 1)!, or forgetting the extra ÷2 for a necklace, bracelet or key-ring that can be flipped.",
            "<b>The repetition fork.</b> Defaulting to <sup>n</sup>P<sub>r</sub> when the problem <b>allows</b> repetition. That case is <i>n</i><sup>r</sup>, not a falling product.",
            "<b>Freezing the rank denominator.</b> Removing a letter can destroy a repeat group, so the branch counts differ. In SAMOSA, fixing an A leaves 5!/2! but fixing an M leaves 5!/(2! 2!)."
          ]
        },
        {
          "t": "protip",
          "html": "for “together,” glue the group into one block and multiply by its internal arrangements. for “not together,” seat everyone else first and drop the restricted items into the gaps. and on a circle, fix one object to kill the rotation, and you are back to a linear problem you already know."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "<sup>n</sup>P<sub>r</sub> = n! / (n − r)!",
              "note": "order matters, no repeats, 0 ≤ r ≤ n"
            },
            {
              "f": "not all distinct: n! / (p! q! ⋯)",
              "note": "start from n!, divide out the look-alikes"
            },
            {
              "f": "circular (n − 1)! · flippable (n − 1)!/2",
              "note": "the circle loses one, the flip loses half"
            },
            {
              "f": "<sup>n</sup>P<sub>r</sub> = r! · <sup>n</sup>C<sub>r</sub>",
              "note": "a permutation is an ordered combination"
            },
            {
              "f": "rank = (words before) + 1",
              "note": "recompute the repeat denominator every branch"
            }
          ],
          "aids": [
            "“order matters, so permutation”",
            "“repeats? divide them out”",
            "“rank: count the earlier words, then +1”"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Combinations: When Order Does Not",
      "chip": "03 SELECT",
      "kalam": "the team sheet does not care who was listed first",
      "blocks": [
        {
          "t": "p",
          "html": "Picture the selectors of a cricket squad choosing 11 players from a pool of 16. Once the eleven names are on the team sheet, it makes no difference whether a selector wrote them top to bottom or in any other sequence. The <b>team</b> is the same set of eleven people. Nobody says this is a different team because I listed the wicketkeeper first. That indifference to order is the entire idea of a combination."
        },
        {
          "t": "def",
          "term": "Combination",
          "html": "A selection of <i>r</i> objects from <i>n</i> distinct objects where <b>order is irrelevant</b> and no object is used twice. The instant the problem attaches positions, ranks or roles to the chosen objects, stop: it has become a permutation and you owe an extra factor of <i>r</i>!."
        },
        {
          "t": "think",
          "html": "a combination is a permutation with the ordering stripped away. read the bridge nPr = r! · nCr backwards: to arrange, you first choose and then order. so combinations are fewer by exactly r!, the number of ways the chosen group can be shuffled among itself."
        },
        {
          "t": "p",
          "html": "Make the collapse concrete. From <i>A</i>, <i>B</i>, <i>C</i>, <i>D</i> the selections of size 2 are <i>AB</i>, <i>AC</i>, <i>AD</i>, <i>BC</i>, <i>BD</i>, <i>CD</i>: exactly 6. Notice <i>AB</i> and <i>BA</i> are not listed twice; as a selection they are the same pair. The corresponding permutations are twice as many, 12 = 6 × 2!, because each pair can be ordered in 2! ways. That factor of 2! is the whole bookkeeping separating <sup>4</sup>C<sub>2</sub> from <sup>4</sup>P<sub>2</sub>. The same idea powers handshakes in a room, chords joining points on a circle, committees, card hands and pizza toppings: if 9 people each shake hands once with every other person, the number of handshakes is the number of <b>pairs</b>, <sup>9</sup>C<sub>2</sub> = 36, not <sup>9</sup>P<sub>2</sub> = 72."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · COMBINATIONS",
          "tag": "n distinct, r at a time",
          "main": "<sup>n</sup>C<sub>r</sub> = n! / (r! (n − r)!)",
          "legend": [
            "= <sup>n</sup>P<sub>r</sub> / <i>r</i>!, valid for 0 ≤ <i>r</i> ≤ <i>n</i> · also written <i>C</i>(<i>n</i>, <i>r</i>)",
            "<i>n</i> = objects available · <i>r</i> = size of the group selected",
            "<sup>n</sup>C<sub>r</sub> = 0 whenever <i>r</i> exceeds <i>n</i>: you cannot choose more objects than exist"
          ],
          "note": "Always a positive integer for 0 ≤ r ≤ n. A fractional combination count means you have slipped."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · nCr FROM ARRANGING, TAP A LINE",
          "steps": [
            {
              "eq": "arrange r of n = select r, then order them",
              "why": "Split arranging into two independent stages. This is the whole proof; everything after it is algebra. It also explains what the r! in the formula is doing, which memorising never does."
            },
            {
              "eq": "nPr = nCr × r!",
              "why": "By the multiplication principle. Stage one is the selection, counted by nCr; stage two orders the chosen r objects among themselves in r! ways, and that count does not depend on which objects were chosen."
            },
            {
              "eq": "nCr = nPr / r!",
              "why": "Solve for the quantity we want. Read it as: a permutation is a combination that has been put in order, so strip the order by dividing."
            },
            {
              "eq": "= n! / (r! (n − r)!)",
              "why": "Substitute nPr = n!/(n − r)! from Topic 02. The whole combination formula is just the permutation formula with the internal orderings divided out."
            },
            {
              "eq": "check: 4C2 = 6 and 4P2 = 12",
              "why": "Two objects out of four. Six pairs, twelve ordered pairs, and the ratio is 2! exactly as predicted. Whenever you feel unsure whether a problem wants P or C, ask whether the final ordering is part of what you are counting."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · TAP A COUNT, n = 6 THROUGHOUT",
          "chips": ["ARRANGE", "SELECT", "THE r! GAP"],
          "captions": [
            "Arranging r of 6 people. The count climbs the whole way and then flattens: 6P5 and 6P6 are both 720, because once five positions are filled the sixth person has nowhere else to go. Read the vertical scale, it runs to 780.",
            "Selecting r of 6 people, drawn on its own scale of 0 to 26. The shape is completely different. It rises to a peak of 20 at r = 3 and falls back, perfectly symmetric, because choosing 4 to keep is the same act as choosing 2 to reject.",
            "Both counts on the permutation scale. The selections are pressed flat against the axis, and the ratio is no mystery: 6Pr is r! times 6Cr. At r = 3 the gap is 3! = 6, which is 120 against 20."
          ],
          "frames": [
            {
              "x": [0, 6.6],
              "y": [0, 780],
              "points": [
                { "x": 1, "y": 6, "label": "6" },
                { "x": 2, "y": 30, "label": "30" },
                { "x": 3, "y": 120, "label": "120" },
                { "x": 4, "y": 360, "label": "360" },
                { "x": 5, "y": 720, "label": "720" },
                { "x": 6, "y": 720, "label": "720" }
              ]
            },
            {
              "x": [0, 6.6],
              "y": [0, 26],
              "points": [
                { "x": 1, "y": 6, "label": "6" },
                { "x": 2, "y": 15, "label": "15" },
                { "x": 3, "y": 20, "label": "20" },
                { "x": 4, "y": 15, "label": "15" },
                { "x": 5, "y": 6, "label": "6" },
                { "x": 6, "y": 1, "label": "1" }
              ]
            },
            {
              "x": [0, 6.6],
              "y": [0, 780],
              "points": [
                { "x": 1, "y": 6 },
                { "x": 2, "y": 30 },
                { "x": 3, "y": 120, "label": "120" },
                { "x": 4, "y": 360 },
                { "x": 5, "y": 720 },
                { "x": 6, "y": 720 },
                { "x": 1, "y": 6, "soft": true },
                { "x": 2, "y": 15, "soft": true },
                { "x": 3, "y": 20, "label": "20", "soft": true },
                { "x": 4, "y": 15, "soft": true },
                { "x": 5, "y": 6, "soft": true },
                { "x": 6, "y": 1, "soft": true }
              ]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Core properties, all examinable",
          "rows": [
            {
              "k": "Boundaries",
              "v": "<sup>n</sup>C<sub>0</sub> = <sup>n</sup>C<sub>n</sub> = 1 · <sup>n</sup>C<sub>1</sub> = <i>n</i>"
            },
            {
              "k": "Symmetry",
              "v": "<sup>n</sup>C<sub>r</sub> = <sup>n</sup>C<sub>n−r</sub>, keep <i>r</i> = reject <i>n</i> − <i>r</i>"
            },
            {
              "k": "Pascal's rule",
              "v": "<sup>n</sup>C<sub>r</sub> + <sup>n</sup>C<sub>r−1</sub> = <sup>n+1</sup>C<sub>r</sub>"
            },
            {
              "k": "Equal values",
              "v": "if <sup>n</sup>C<sub>r</sub> = <sup>n</sup>C<sub>s</sub> then <i>r</i> = <i>s</i> or <i>r</i> + <i>s</i> = <i>n</i>"
            },
            {
              "k": "Shortcut",
              "v": "<sup>12</sup>C<sub>10</sub> = <sup>12</sup>C<sub>2</sub> = 66, never grind the big factorial"
            },
            {
              "k": "Master test",
              "v": "would reshuffling the chosen objects change the outcome?"
            }
          ]
        },
        {
          "t": "p",
          "html": "Both key properties have one-line reasons worth more than the algebra. <b>Symmetry:</b> every time you choose <i>r</i> objects to keep, you simultaneously leave behind <i>n</i> − <i>r</i> objects, so choosing keepers and choosing rejects are two descriptions of the same act. <b>Pascal's rule:</b> single out one special object and ask whether it is in your group. If it is in, you still need <i>r</i> − 1 from the other <i>n</i>; if it is out, all <i>r</i> come from the other <i>n</i>. Two exclusive cases, so add them."
        },
        {
          "t": "diagram",
          "kind": "pascal",
          "kicker": "DIAGRAM · TAP A READING OF THE TRIANGLE",
          "chips": ["SYMMETRY", "PASCAL RULE", "GRID PATHS"],
          "captions": [
            "Row 7 of the triangle is the list of 7Cr, read left to right. The two amber cells are 7C2 and 7C5, both equal to 21. Choosing 2 to keep and choosing 5 to reject are two descriptions of one act, which is why every row reads the same forwards and backwards.",
            "Pascal's rule, drawn. The amber cell is 7C3 = 35 and the two dashed cells directly above it are 6C2 = 15 and 6C3 = 20, which add to it. Single out one special object and ask whether it is in your group: the two answers are the two parents.",
            "The same 35 counts a courier's routes across a town grid 4 blocks east and 3 blocks north. A route is a word in E's and N's, and choosing which 4 of the 7 steps go east is 7C4. Every entry of this triangle is a grid-path count."
          ],
          "frames": [
            { "pascal": { "rows": 8, "highlight": [[7, 2], [7, 5]] } },
            { "pascal": { "rows": 8, "highlight": [[7, 3]], "parents": [[6, 2], [6, 3]] } },
            { "pascal": { "rows": 8, "highlight": [[7, 4]] } }
          ]
        },
        {
          "t": "proc",
          "title": "Selection under constraints",
          "steps": [
            "<b>Must include k specific objects.</b> Lock them in, then choose the remaining <i>r</i> − <i>k</i> from the other <i>n</i> − <i>k</i>: <sup>n−k</sup>C<sub>r−k</sub>. A 5-member team from 9 that must contain the captain is <sup>8</sup>C<sub>4</sub> = 70.",
            "<b>Must exclude k specific objects.</b> Drop them from the pool and choose all <i>r</i> from the remaining <i>n</i> − <i>k</i>: <sup>n−k</sup>C<sub>r</sub>. The same team without a suspended player is <sup>8</sup>C<sub>5</sub> = 56.",
            "<b>At least or at most.</b> Either add the qualifying cases, or take total − complement. Count the cases on each side first and take the shorter route; complementary counting wins only when the complement really is shorter.",
            "<b>Two categories.</b> Choosing from boys and girls, or vowels and consonants, is one combination per category joined by AND, so multiply: <sup>7</sup>C<sub>2</sub> × <sup>5</sup>C<sub>2</sub> = 210.",
            "<b>Sanity-check the size.</b> A selection count never exceeds the corresponding arrangement count, and a fractional answer always means an error upstream."
          ]
        },
        {
          "t": "p",
          "html": "One disguise is worth learning now. Put a street grid on axes with the start at the origin, and let a walker take only unit steps <b>right</b> or <b>up</b>. Such a path is called <b>monotonic</b>. To reach (<i>m</i>, <i>n</i>) you must take exactly <i>m</i> right-steps and <i>n</i> up-steps in some order, and the order <i>is</i> the path. So counting paths is counting arrangements of a string of R's and U's, which is an alike-objects count, which is a single combination."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · LATTICE PATHS",
          "tag": "monotonic grid paths",
          "main": "paths to (m, n) = <sup>m+n</sup>C<sub>m</sub>",
          "legend": [
            "Through a checkpoint <i>P</i>(<i>a</i>, <i>b</i>): <sup>a+b</sup>C<sub>a</sub> × <sup>(m−a)+(n−b)</sup>C<sub>m−a</sub>. The legs <b>multiply</b>, because arriving at <i>P</i> erases all memory of how you got there.",
            "Avoiding <i>P</i>: total − through <i>P</i>. Several forbidden points need inclusion-exclusion, which is Topic 05."
          ],
          "note": "Monotonic only. A diagonal step, or a ban that depends on the whole history, is not a binomial coefficient at all."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A cricket squad has 11 players. In how many ways can a sub-committee of 4 players be chosen to meet the coach?",
          "steps": [
            "A sub-committee is a <b>selection</b>: the order of the four names is irrelevant.",
            "<sup>11</sup>C<sub>4</sub> = (11 × 10 × 9 × 8) / (4 × 3 × 2 × 1) = 7920/24."
          ],
          "ans": "330 sub-committees"
        },
        {
          "t": "ex",
          "tag": "CONCEPTUAL TRAP",
          "q": "From 6 eligible students, count the ways to (a) choose 3 for a quiz team, and (b) appoint 3 to the distinct posts of leader, scribe and timekeeper.",
          "steps": [
            "(a) A team has no roles, so order is irrelevant: <sup>6</sup>C<sub>3</sub> = 6!/(3! 3!) = 20.",
            "(b) Distinct posts, so order matters: <sup>6</sup>P<sub>3</sub> = 6 × 5 × 4 = 120.",
            "Notice 120 = 20 × 3!. The appointments are the teams with the 6 internal orderings restored."
          ],
          "ans": "(a) 20 teams, (b) 120 appointments. Pause and ask whether the chosen objects carry roles"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "From 8 men and 6 women, a committee of 5 is formed containing at least 3 women. How many committees are possible?",
          "steps": [
            "At least 3 women in a committee of 5 allows 3, 4 or 5 women. The cases are mutually exclusive, so add.",
            "3 women, 2 men: <sup>6</sup>C<sub>3</sub> × <sup>8</sup>C<sub>2</sub> = 20 × 28 = 560.",
            "4 women, 1 man: <sup>6</sup>C<sub>4</sub> × <sup>8</sup>C<sub>1</sub> = 15 × 8 = 120.",
            "5 women, 0 men: <sup>6</sup>C<sub>5</sub> × <sup>8</sup>C<sub>0</sub> = 6 × 1 = 6."
          ],
          "ans": "560 + 120 + 6 = 686. The complement here is 0, 1 or 2 women, also three cases, so the direct sum is cleaner"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "Find the number of monotonic paths from (0, 0) to (4, 4) that do <b>not</b> pass through (2, 2).",
          "steps": [
            "All paths: four R's and four U's, so <sup>8</sup>C<sub>4</sub> = 70.",
            "Paths through (2, 2): leg 1 is <sup>4</sup>C<sub>2</sub> = 6 and leg 2 is <sup>4</sup>C<sub>2</sub> = 6.",
            "The legs are a two-stage AND, so they <b>multiply</b>: 6 × 6 = 36.",
            "Avoiding: 70 − 36."
          ],
          "ans": "34. Adding the legs gives 70 − 12 = 58, which would mean the exact centre of the square is nearly deserted"
        },
        {
          "t": "mcq",
          "q": "In how many ways can 3 <b>identical</b> prize certificates be distributed among 10 students, no student getting more than one?",
          "correct": 1,
          "opts": [
            {
              "label": "30",
              "nudge": "That is 10 × 3, a stray product of students with certificates that models nothing in the question."
            },
            {
              "label": "120",
              "nudge": null
            },
            {
              "label": "720",
              "nudge": "That is <sup>10</sup>P<sub>3</sub>, which treats the three certificates as distinct and ordered. They are identical, so only the set of winners matters."
            },
            {
              "label": "1000",
              "nudge": "That is 10<sup>3</sup>, which allows one student to collect several certificates. The question forbids that."
            }
          ],
          "solution": "The certificates are identical, so only <b>which 3 students</b> are chosen matters. That is a selection: <sup>10</sup>C<sub>3</sub> = 120."
        },
        {
          "t": "mcq",
          "q": "If <sup>n</sup>C<sub>8</sub> = <sup>n</sup>C<sub>12</sub>, then <sup>n</sup>C<sub>2</sub> equals",
          "correct": 0,
          "opts": [
            {
              "label": "190",
              "nudge": null
            },
            {
              "label": "20",
              "nudge": "You found <i>n</i> = 20 and stopped. The question asks for <sup>n</sup>C<sub>2</sub>, not for <i>n</i>."
            },
            {
              "label": "90",
              "nudge": "An arithmetic slip in (20 × 19)/2. Recompute: 380 halved is 190, not 90."
            },
            {
              "label": "380",
              "nudge": "That is 20 × 19 without halving. A pair is unordered, so the product of the two falling factors must be divided by 2!."
            }
          ],
          "solution": "Since 8 ≠ 12, the property <sup>n</sup>C<sub>r</sub> = <sup>n</sup>C<sub>s</sub> ⇒ <i>r</i> + <i>s</i> = <i>n</i> gives <i>n</i> = 20. Then <sup>20</sup>C<sub>2</sub> = (20 × 19)/2 = 190."
        },
        {
          "t": "mcq",
          "q": "A committee of 3 is chosen from 4 men and 3 women. How many committees contain at least one woman?",
          "correct": 2,
          "opts": [
            {
              "label": "18",
              "nudge": "That is <sup>3</sup>C<sub>1</sub> × <sup>4</sup>C<sub>2</sub>, the <b>exactly one woman</b> case only. Committees with two or three women are missing."
            },
            {
              "label": "30",
              "nudge": "You subtracted the wrong all-men count. Committees of 3 men from 4 number <sup>4</sup>C<sub>3</sub> = 4, not 5."
            },
            {
              "label": "31",
              "nudge": null
            },
            {
              "label": "35",
              "nudge": "That is the unrestricted total <sup>7</sup>C<sub>3</sub>. The at-least-one-woman condition has been dropped entirely."
            }
          ],
          "solution": "Total minus no women: <sup>7</sup>C<sub>3</sub> − <sup>4</sup>C<sub>3</sub> = 35 − 4 = 31."
        },
        {
          "t": "mcq",
          "q": "The value of <sup>15</sup>C<sub>13</sub> is",
          "correct": 0,
          "opts": [
            {
              "label": "105",
              "nudge": null
            },
            {
              "label": "195",
              "nudge": "That is 15 × 13, a stray product with no basis. The falling product for <sup>15</sup>C<sub>2</sub> is 15 × 14."
            },
            {
              "label": "2730",
              "nudge": "That is 15 × 14 × 13, the falling product without dividing by 3!, and it also ignores the symmetry shortcut."
            },
            {
              "label": "32760",
              "nudge": "That is <sup>15</sup>P<sub>3</sub>. You computed an arrangement where a selection was asked for."
            }
          ],
          "solution": "Use symmetry: <sup>15</sup>C<sub>13</sub> = <sup>15</sup>C<sub>2</sub> = (15 × 14)/2 = 105."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] In how many ways can 3 toppings be chosen from a menu of 8 distinct toppings?",
              "a": "<sup>8</sup>C<sub>3</sub> = 56"
            },
            {
              "q": "[CBSE] Find the positive integer <i>n</i> for which <sup>n</sup>C<sub>2</sub> = 15.",
              "a": "<i>n</i>(<i>n</i> − 1)/2 = 15, so <i>n</i> = 6."
            },
            {
              "q": "[JEE Main] A team of 5 is selected from 9 men and 6 women with exactly 3 men and 2 women. In how many ways?",
              "a": "<sup>9</sup>C<sub>3</sub> × <sup>6</sup>C<sub>2</sub> = 84 × 15 = 1260"
            },
            {
              "q": "[JEE Main] How many monotonic paths from (0, 0) to (6, 4) pass through (3, 2)?",
              "a": "<sup>5</sup>C<sub>3</sub> × <sup>5</sup>C<sub>3</sub> = 10 × 10 = 100"
            },
            {
              "q": "[JEE Advanced] From 10 players including 2 stars, a squad of 4 is chosen. How many squads include at least one star?",
              "a": "<sup>10</sup>C<sub>4</sub> − <sup>8</sup>C<sub>4</sub> = 210 − 70 = 140"
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Order confusion, the cross-cutting error.</b> Using <sup>n</sup>C<sub>r</sub> when the problem assigns roles or positions, or <sup>n</sup>P<sub>r</sub> for a plain selection. Run the master test every time.",
            "<b>Forgetting to divide by r!.</b> Computing <sup>n</sup>P<sub>r</sub> when <sup>n</sup>C<sub>r</sub> was wanted leaves the answer exactly <i>r</i>! times too large.",
            "<b>Mishandling at least and at most.</b> Either missing a case in the sum, or using the complement when it is not actually shorter. Count the cases on both sides first.",
            "<b>Grinding a large factorial.</b> <sup>50</sup>C<sub>48</sub> is <sup>50</sup>C<sub>2</sub> = 1225 in one line. Symmetry is a computation tool, not a decoration.",
            "<b>Adding the legs of a grid path.</b> Through a checkpoint is a two-stage AND, so the legs multiply. Adding answers a question nobody asked."
          ]
        },
        {
          "t": "protip",
          "html": "for constraint problems, deploy pascal's own question: is this specific object in, or out? the two answers are exclusive and exhaustive, so they break the count into clean addable cases, and that one habit handles most “must include” and “at least” questions on sight."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "<sup>n</sup>C<sub>r</sub> = n! / (r! (n − r)!) = <sup>n</sup>P<sub>r</sub> / r!",
              "note": "a selection, order ignored"
            },
            {
              "f": "<sup>n</sup>C<sub>0</sub> = <sup>n</sup>C<sub>n</sub> = 1 · <sup>n</sup>C<sub>1</sub> = n",
              "note": "and 0 when r exceeds n"
            },
            {
              "f": "<sup>n</sup>C<sub>r</sub> = <sup>n</sup>C<sub>n−r</sub>",
              "note": "choosing r to keep = choosing n − r to reject"
            },
            {
              "f": "<sup>n</sup>C<sub>r</sub> + <sup>n</sup>C<sub>r−1</sub> = <sup>n+1</sup>C<sub>r</sub>",
              "note": "Pascal, from the in-or-out question"
            },
            {
              "f": "paths to (m, n) = <sup>m+n</sup>C<sub>m</sub>",
              "note": "a grid path is a word in R and U"
            }
          ],
          "aids": [
            "“roles? permutation. just a group? combination”",
            "“choose r = reject n − r”",
            "“legs multiply, never add”"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Total Selections, Stars and Bars",
      "chip": "04 DISTRIBUTE",
      "kalam": "identical into distinct: stars and bars",
      "blocks": [
        {
          "t": "p",
          "html": "So far you have chosen exactly <i>r</i> objects. Real problems ask broader questions. How many subsets are there altogether? In how many ways can identical sweets be shared? How many integer solutions does an equation have? This topic builds the three tools that answer them. <b>Tool 1, total selections.</b> Stand before <i>n</i> distinct objects and decide, for each one independently, take it or leave it. Each object offers 2 choices, so by the Fundamental Principle of Counting there are 2<sup>n</sup> outcomes, that is 2<sup>n</sup> subsets, including the empty one. If you must take <b>at least one</b>, drop the empty selection: 2<sup>n</sup> − 1."
        },
        {
          "t": "think",
          "html": "a selection is just a binary string of length n: a 1 for “in,” a 0 for “out.” there are 2ⁿ such strings, which is exactly why an n-element set has 2ⁿ subsets. the same picture handles alike objects, because then a selection only records how many you took."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · TOTAL SELECTIONS",
          "tag": "distinct, then alike",
          "main": "2<sup>n</sup> subsets · 2<sup>n</sup> − 1 non-empty",
          "legend": [
            "With <i>p</i> alike of one kind, <i>q</i> alike of another, and <i>d</i> all-distinct objects: (<i>p</i> + 1)(<i>q</i> + 1) ⋯ × 2<sup>d</sup>, and subtract 1 for at least one.",
            "An alike group of size <i>p</i> contributes <i>p</i> + 1 choices (take 0, 1, …, <i>p</i>), not 2<sup>p</sup>."
          ],
          "note": "3 red apples, 2 green apples and 1 orange give 4 × 3 × 2 = 24 selections, 23 of them non-empty. Treating all six as distinct gives 63 and badly over-counts."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · TAP A POOL OF n OBJECTS",
          "chips": ["ALL DISTINCT", "ALL ALIKE", "THE OVER-COUNT"],
          "captions": [
            "Eight distinct keychains, each independently bought or not. The count is 2 to the n and it explodes: 3 objects give 8 selections, 5 give 32, and 8 already give 256, of which 255 are non-empty.",
            "Now the same objects are identical marbles. A selection records only how many you took, anything from 0 up to n, so the count is the straight line n + 1: four choices at n = 3, nine at n = 8. That line is the whole difference between distinct and alike.",
            "Both on one scale. Treating 8 identical marbles as distinct replaces 9 by 256, an over-count of nearly thirty times. Before you reach for 2 to the n, ask whether swapping two of the objects would create a new selection."
          ],
          "frames": [
            {
              "x": [0, 8.4],
              "y": [0, 280],
              "curves": [{ "c": "exp", "a": 0.6931 }],
              "points": [
                { "x": 3, "y": 8, "label": "8" },
                { "x": 5, "y": 32, "label": "32" },
                { "x": 8, "y": 256, "label": "256" }
              ]
            },
            {
              "x": [0, 8.4],
              "y": [0, 280],
              "curves": [{ "c": "line", "m": 1, "k": 1 }],
              "points": [
                { "x": 3, "y": 4, "label": "4" },
                { "x": 5, "y": 6, "label": "6" },
                { "x": 8, "y": 9, "label": "9" }
              ]
            },
            {
              "x": [0, 8.4],
              "y": [0, 280],
              "curves": [
                { "c": "exp", "a": 0.6931 },
                { "c": "line", "m": 1, "k": 1, "soft": true }
              ],
              "points": [
                { "x": 8, "y": 256, "label": "256" },
                { "x": 8, "y": 9, "label": "9", "soft": true }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "<b>Tool 2, selection with repetition.</b> Choose <i>r</i> items from <i>n</i> types where a type may be repeated, like buying 5 pastries from 4 available flavours. Order does not matter and repeats are allowed, so this is <b>neither</b> <sup>n</sup>C<sub>r</sub> <b>nor</b> <i>n</i><sup>r</sup>. The model that cracks it is stars and bars."
        },
        {
          "t": "def",
          "term": "Stars and bars",
          "html": "Lay down <i>r</i> identical <b>stars</b>, the items you pick, and separate them into <i>n</i> type-blocks using <i>n</i> − 1 <b>bars</b>. Stars before the first bar belong to type 1, those between the first and second bar to type 2, and so on. An empty block means that type was not chosen. Every selection is one star-and-bar pattern and every pattern is one selection."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · STARS AND BARS, TAP A LINE",
          "steps": [
            {
              "eq": "choose r from n types, repeats allowed, order ignored",
              "why": "The two assumptions matter. The r chosen items must be identical in role, so only the counts matter, and the n types must be distinct, so which block a star sits in is meaningful."
            },
            {
              "eq": "r stars in a line, split by n − 1 bars",
              "why": "One bar fewer than the number of types, because n blocks need n − 1 dividers. Writing n bars is the single most common slip and it shifts the answer by a whole row of the triangle."
            },
            {
              "eq": "star star | star | | star star star",
              "why": "Read left to right with n = 4 and r = 6: two of type 1, one of type 2, none of type 3, three of type 4. The empty block between the second and third bars is a legal, meaningful selection."
            },
            {
              "eq": "r + (n − 1) symbols in total",
              "why": "The pattern is completely determined once you say which positions hold bars, so the whole problem has become an arrangement of a fixed string of look-alikes."
            },
            {
              "eq": "choose the n − 1 bar positions: <sup>n+r−1</sup>C<sub>n−1</sub>",
              "why": "Equivalently choose the r star positions, giving the same number by symmetry. Because choosing r from n types with repetition is identical to placing r identical objects into n distinct boxes, this one formula also counts non-negative integer solutions."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · INTEGER SOLUTIONS",
          "tag": "x₁ + x₂ + ⋯ + x_k = n",
          "main": "non-negative: <sup>n+k−1</sup>C<sub>k−1</sub>",
          "legend": [
            "Positive solutions, every <i>x<sub>i</sub></i> ≥ 1: <sup>n−1</sup>C<sub>k−1</sub>. Hand one unit to every variable first, then solve the leftover freely.",
            "Selecting <i>r</i> from <i>n</i> types with repetition: <sup>n+r−1</sup>C<sub>r</sub> = <sup>n+r−1</sup>C<sub>n−1</sub>, the same statement in other words."
          ],
          "note": "Identical to distributing n identical objects into k distinct boxes, with empty boxes allowed or forbidden respectively."
        },
        {
          "t": "p",
          "html": "<b>Tool 3, grouping against distribution.</b> Divide 12 books into three bundles and give 12 books to three children sound alike but differ on one point: whether the groups are <b>labelled</b>. Unlabelled equal-size groups force a division by the factorial of the number of interchangeable groups; labelled groups (distinct recipients) do not. Converting between the two is a frequent exam pivot."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · DIVISION AND DISTRIBUTION",
          "tag": "n distinct objects",
          "main": "n! / (m₁! m₂! ⋯ m_k!)",
          "legend": [
            "That is the count for groups of the given sizes when the groups are <b>labelled</b>. If <i>g</i> of them are equal in size and <b>unlabelled</b>, divide by a further <i>g</i>!.",
            "Handing those groups to <i>k</i> distinct recipients multiplies the divided count back by the number of ways to assign groups to people.",
            "<i>n</i> distinct objects into <i>k</i> distinct boxes with no restriction at all: <i>k</i><sup>n</sup>."
          ],
          "note": "12 distinct books into three unlabelled groups of 4 is 12!/((4!)³ 3!) = 5775. The ÷3! is the whole exam question."
        },
        {
          "t": "defgrid",
          "title": "Read the words, then pick the tool",
          "rows": [
            {
              "k": "Distinct objects, in or out",
              "v": "2<sup>n</sup> subsets · 2<sup>n</sup> − 1 non-empty"
            },
            {
              "k": "Alike groups p, q with d distinct",
              "v": "(<i>p</i> + 1)(<i>q</i> + 1) ⋯ 2<sup>d</sup>, minus 1 for at least one"
            },
            {
              "k": "Identical into distinct boxes",
              "v": "<sup>n+k−1</sup>C<sub>k−1</sub> free · <sup>n−1</sup>C<sub>k−1</sub> none empty"
            },
            {
              "k": "Distinct into distinct boxes",
              "v": "<i>k</i><sup>n</sup> when boxes may be empty"
            },
            {
              "k": "Signals distinct",
              "v": "children, students, envelopes, counters, recipients"
            },
            {
              "k": "Signals unlabelled",
              "v": "groups, bundles, parts, identical boxes"
            }
          ]
        },
        {
          "t": "proc",
          "title": "Deciding which distribution you are in",
          "steps": [
            "<b>Ask whether swapping two objects changes the outcome.</b> Yes means the objects are distinct; no means they are identical and stars and bars is on the table.",
            "<b>Ask whether the boxes are named.</b> Children, students and envelopes are labelled; bundles, groups and parts are not.",
            "<b>Write the division count first</b>, <i>n</i>!/(<i>m</i><sub>1</sub>! <i>m</i><sub>2</sub>! ⋯), and only then apply the corrections.",
            "<b>Divide by g! for each set of g equal unlabelled groups</b>, because relabelling them among themselves produces the same division.",
            "<b>Clear lower bounds by pre-allocating.</b> For each box at least <i>c</i>, hand out <i>c</i> first and solve the leftover as a clean non-negative problem. This one substitution dissolves most distribution constraints.",
            "<b>Check the empty case.</b> Both 2<sup>n</sup> and the basic stars-and-bars count include choose nothing. Adjust when the question says at least one."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A gift shop displays 5 distinct keychains. In how many ways can a customer buy at least one keychain?",
          "steps": [
            "Each keychain is independently bought or not: 2<sup>5</sup> = 32 selections.",
            "That total includes buying nothing, which the question forbids."
          ],
          "ans": "2<sup>5</sup> − 1 = 31 ways"
        },
        {
          "t": "ex",
          "tag": "CONCEPTUAL TRAP",
          "q": "A basket holds 3 identical red apples, 2 identical green apples and 1 orange. In how many ways can you pick at least one fruit?",
          "steps": [
            "Selections from an alike group are counted by <b>how many</b> you take, not which.",
            "Red apples: 0, 1, 2 or 3, so 4 choices. Green apples: 0, 1 or 2, so 3 choices.",
            "The orange is a single distinct item, in or out: 2 choices.",
            "Total including empty = 4 × 3 × 2 = 24."
          ],
          "ans": "24 − 1 = 23. Treating all six fruits as distinct gives 2<sup>6</sup> − 1 = 63, because swapping two identical red apples is not a new selection"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "How many non-negative integer solutions does <i>a</i> + <i>b</i> + <i>c</i> + <i>d</i> = 12 have?",
          "steps": [
            "This is 12 identical units distributed among 4 distinct variables, empty allowed.",
            "Stars and bars with <i>n</i> = 12 and <i>k</i> = 4: <sup>12+4−1</sup>C<sub>4−1</sub> = <sup>15</sup>C<sub>3</sub>.",
            "<sup>15</sup>C<sub>3</sub> = (15 × 14 × 13)/6."
          ],
          "ans": "455 solutions"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "In how many ways can 15 identical chocolates be distributed among 4 children so that each child gets at least 2?",
          "steps": [
            "Pre-allocate the guaranteed minimum: give each child 2 up front, using 8.",
            "Distribute the remaining 15 − 8 = 7 with no restriction. Let <i>y<sub>i</sub></i> ≥ 0 be the extra each child gets: <i>y</i><sub>1</sub> + <i>y</i><sub>2</sub> + <i>y</i><sub>3</sub> + <i>y</i><sub>4</sub> = 7.",
            "Stars and bars: <sup>7+4−1</sup>C<sub>4−1</sub> = <sup>10</sup>C<sub>3</sub> = (10 × 9 × 8)/6."
          ],
          "ans": "120 ways. Subtracting the guaranteed minimum converts a bounded problem into the clean non-negative case"
        },
        {
          "t": "mcq",
          "q": "The number of non-negative integer solutions of <i>x</i> + <i>y</i> + <i>z</i> = 7 is",
          "correct": 1,
          "opts": [
            {
              "label": "28",
              "nudge": "That is <sup>8</sup>C<sub>2</sub>. You miscounted the bars: three variables need 2 bars, giving 7 + 2 = 9 symbols, not 8."
            },
            {
              "label": "36",
              "nudge": null
            },
            {
              "label": "21",
              "nudge": "That is <sup>7</sup>C<sub>2</sub>, computed by forgetting to add the bars to the slot count at all."
            },
            {
              "label": "343",
              "nudge": "That is 7<sup>3</sup>, which models ordered placement with repetition. The units here are identical, so no such ordering exists."
            }
          ],
          "solution": "Stars and bars with <i>n</i> = 7 and <i>k</i> = 3: <sup>7+3−1</sup>C<sub>3−1</sub> = <sup>9</sup>C<sub>2</sub> = 36."
        },
        {
          "t": "mcq",
          "q": "In how many ways can 6 distinct toys be divided into <b>two unlabelled groups</b> of 3?",
          "correct": 0,
          "opts": [
            {
              "label": "10",
              "nudge": null
            },
            {
              "label": "20",
              "nudge": "That is 6!/(3! 3!), which counts <b>distribution</b> to two labelled recipients. The groups here have no names, so swapping them is not a new division."
            },
            {
              "label": "36",
              "nudge": "A stray arithmetic slip. Compute 6!/(3! 3!) = 20 first, then apply the ÷2!."
            },
            {
              "label": "720",
              "nudge": "That is 6!, which arranges all six toys in a row and ignores the grouping completely."
            }
          ],
          "solution": "Labelled groups give 6!/(3! 3!) = 20. The two equal groups are interchangeable, so divide by 2!: 20/2 = 10."
        },
        {
          "t": "mcq",
          "q": "In how many ways can 12 identical pens be distributed among 3 students if a student may receive none?",
          "correct": 2,
          "opts": [
            {
              "label": "36",
              "nudge": "That is <sup>9</sup>C<sub>2</sub>, which comes from putting the wrong total into the formula. Here <i>n</i> = 12 and <i>k</i> = 3, so the top index is 14."
            },
            {
              "label": "55",
              "nudge": "That is <sup>11</sup>C<sub>2</sub>, the <b>each student at least one</b> count. The question explicitly allows a student to get none."
            },
            {
              "label": "91",
              "nudge": null
            },
            {
              "label": "3<sup>12</sup>",
              "nudge": "That treats the pens as distinct, letting each pen choose a student. Identical pens carry no such choice."
            }
          ],
          "solution": "Identical pens, distinct students, empty allowed: <sup>12+3−1</sup>C<sub>3−1</sub> = <sup>14</sup>C<sub>2</sub> = 91."
        },
        {
          "t": "mcq",
          "q": "From 4 identical marbles and 1 distinct coin, the number of ways to select one or more objects is",
          "correct": 1,
          "opts": [
            {
              "label": "5",
              "nudge": "That counts only the marble choices, 0 through 4, and forgets the coin entirely."
            },
            {
              "label": "9",
              "nudge": null
            },
            {
              "label": "31",
              "nudge": "That is 2<sup>5</sup> − 1, which wrongly treats the 4 identical marbles as distinct objects with individual in-or-out decisions."
            },
            {
              "label": "10",
              "nudge": "That is the full 5 × 2 including the empty selection. The question asks for one or more, so subtract 1."
            }
          ],
          "solution": "Marbles: 0 to 4, so 5 choices. Coin: in or out, so 2. Total 5 × 2 = 10, minus the empty selection, gives 9."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[Foundational] How many subsets does a set of 6 distinct elements have, and how many are non-empty?",
              "a": "2<sup>6</sup> = 64 subsets, 63 non-empty."
            },
            {
              "q": "[Foundational] In how many ways can 10 distinct books be divided into three groups of sizes 2, 3 and 5?",
              "a": "10!/(2! 3! 5!) = 2520. The sizes differ, so there is no ÷g!."
            },
            {
              "q": "[JEE Main] Find the number of positive integer solutions of <i>x</i> + <i>y</i> + <i>z</i> = 10.",
              "a": "<sup>9</sup>C<sub>2</sub> = 36"
            },
            {
              "q": "[JEE Main] A seller has 4 identical apples, 3 identical oranges, 1 mango and 1 banana. In how many ways can a customer select at least one fruit?",
              "a": "(4 + 1)(3 + 1) × 2<sup>2</sup> − 1 = 80 − 1 = 79"
            },
            {
              "q": "[JEE Advanced] In how many ways can 20 identical balls be placed into 5 distinct boxes with no box empty?",
              "a": "<sup>19</sup>C<sub>4</sub> = 3876"
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Distinct against alike confusion.</b> Using 2<sup>n</sup> when the objects are identical, or the product of (<i>p<sub>i</sub></i> + 1) when they are not. Ask whether swapping two would create a new selection.",
            "<b>The wrong model for repetition.</b> Selecting with repetition is <sup>n+r−1</sup>C<sub>r</sub>, neither <sup>n</sup>C<sub>r</sub> (no repetition) nor <i>n</i><sup>r</sup> (that is ordered placement).",
            "<b>Miscounting the bars.</b> <i>n</i> types need <i>n</i> − 1 bars, not <i>n</i>. One extra bar moves you a whole row along the triangle.",
            "<b>Division against distribution.</b> Forgetting ÷<i>g</i>! for equal unlabelled groups, or applying it when the groups are actually named recipients.",
            "<b>Forgetting the empty case.</b> Both 2<sup>n</sup> and the basic stars-and-bars count include choose nothing or all in one box."
          ]
        },
        {
          "t": "protip",
          "html": "for “each box at least c,” hand out c to every box before you count anything, then solve what is left as a clean non-negative stars-and-bars problem. that single substitution dissolves nearly every lower-bound constraint you will meet."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "subsets 2<sup>n</sup> · at least one 2<sup>n</sup> − 1",
              "note": "in or out, one decision per object"
            },
            {
              "f": "alike: (p + 1)(q + 1) ⋯ 2<sup>d</sup>",
              "note": "a group of p alike gives p + 1 choices"
            },
            {
              "f": "x₁ + ⋯ + x_k = n ⇒ <sup>n+k−1</sup>C<sub>k−1</sub>",
              "note": "every xᵢ at least 1: the top index drops to n − 1"
            },
            {
              "f": "divide n distinct: n! / ∏ mᵢ! , then ÷ g!",
              "note": "g! only for equal unlabelled groups"
            },
            {
              "f": "distinct into k distinct boxes: k<sup>n</sup>",
              "note": "empty boxes allowed"
            }
          ],
          "aids": [
            "“identical into distinct means stars and bars”",
            "“in or out gives two to the n”",
            "“unlabelled equal groups, divide by their factorial”"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Inclusion, Exclusion and Onto Distributions",
      "chip": "05 OVERLAP",
      "kalam": "add singles, subtract pairs, add triples",
      "blocks": [
        {
          "t": "p",
          "html": "Picture the notice board outside a coaching centre in Kota on the morning the batch lists go up. Three lists are pinned: Physics, Chemistry, Mathematics. The director wants one number, how many distinct students are enrolled in at least one subject. The registrar's first instinct is to add the three list lengths, and that answer is always too big: a student taking both Physics and Chemistry has been counted twice, and a student taking all three has been counted three times."
        },
        {
          "t": "p",
          "html": "So the registrar subtracts. For every pair of subjects he subtracts the students on both lists, which fixes the double counting. But look at the all-three student: added three times, once per list, then subtracted three times, once per pair, so he now contributes zero. He has been erased. Add him back once and every student, on one list or two or three, contributes exactly 1. That <b>over-correct, correct back, correct the correction</b> rhythm is the whole idea."
        },
        {
          "t": "think",
          "html": "inclusion-exclusion is the addition principle from topic 01 with its safety catch removed. the addition principle demands mutually exclusive piles. real problems hand you overlapping piles and refuse to reorganise them, and this is the price you pay for adding anyway."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · UNION OF TWO AND THREE SETS",
          "tag": "the CBSE workhorse",
          "main": "|A ∪ B| = |A| + |B| − |A ∩ B|",
          "legend": [
            "|<i>A</i> ∪ <i>B</i> ∪ <i>C</i>| = Σ<sub>1</sub> − Σ<sub>2</sub> + Σ<sub>3</sub>, where Σ<sub>1</sub> sums the three singles, Σ<sub>2</sub> the three pairwise intersections and Σ<sub>3</sub> is the triple intersection.",
            "For <i>n</i> sets the pattern continues: add the singles, subtract the pairs, add the triples, and so on, with the sign flipping at every level."
          ],
          "note": "No disjointness is assumed anywhere. That is the entire point of the tool."
        },
        {
          "t": "diagram",
          "kind": "venn3",
          "kicker": "DIAGRAM · TAP A REGION, READ ITS COUNT"
        },
        {
          "t": "formula",
          "kicker": "FORMULA · NONE OF THE PROPERTIES",
          "tag": "the exam form",
          "main": "|S| − S₁ + S₂ − S₃ + ⋯",
          "legend": [
            "<i>S<sub>r</sub></i> is the total of the sizes of all <i>r</i>-fold intersections, and <i>S</i> is the universal set. The sum starts with a <b>plus</b> on |<i>S</i>|.",
            "Almost every exam question is phrased as how many objects have <b>none</b> of these properties, so this is the form to reach for first."
          ],
          "note": "A complement count is meaningless without |S|. Write |S| on the page before anything else."
        },
        {
          "t": "defgrid",
          "title": "Three sets, six questions",
          "rows": [
            {
              "k": "At least one",
              "v": "Σ<sub>1</sub> − Σ<sub>2</sub> + Σ<sub>3</sub>"
            },
            {
              "k": "Exactly one",
              "v": "Σ<sub>1</sub> − 2Σ<sub>2</sub> + 3Σ<sub>3</sub>"
            },
            {
              "k": "Exactly two",
              "v": "Σ<sub>2</sub> − 3Σ<sub>3</sub>"
            },
            {
              "k": "At least two",
              "v": "Σ<sub>2</sub> − 2Σ<sub>3</sub>"
            },
            {
              "k": "All three",
              "v": "Σ<sub>3</sub>"
            },
            {
              "k": "None",
              "v": "|<i>S</i>| − Σ<sub>1</sub> + Σ<sub>2</sub> − Σ<sub>3</sub>"
            }
          ]
        },
        {
          "t": "p",
          "html": "The favourite JEE Main dressing is divisibility. For how many integers from 1 to <i>N</i> are divisible by none of <i>a</i>, <i>b</i>, <i>c</i>, take <i>S</i> = {1, 2, …, <i>N</i>} and let <i>A<sub>a</sub></i> be the multiples of <i>a</i>, so |<i>A<sub>a</sub></i>| = ⌊<i>N</i>/<i>a</i>⌋. The crucial step is the intersection: <b><i>A<sub>a</sub></i> ∩ <i>A<sub>b</sub></i> is the multiples of lcm(<i>a</i>, <i>b</i>), not of <i>ab</i></b>. For 4 and 6 the correct divisor is 12, not 24. The standard 2, 3, 5 question hides the issue because those are pairwise coprime."
        },
        {
          "t": "p",
          "html": "Now the second half. Topic 04 told you that <i>n</i> distinct objects go into <i>k</i> distinct boxes in <i>k</i><sup>n</sup> ways, and that <i>n</i> <b>identical</b> objects go into <i>k</i> distinct boxes with none empty in <sup>n−1</sup>C<sub>k−1</sub> ways. What it never told you is the count when the objects are distinct <b>and</b> no box may be empty. That is neither of those two, and the pre-allocation trick collapses here. Picture three ticket counters and five distinguishable passengers, every counter required to serve someone. If the passengers were identical you would seat one at each counter and freely place the rest. But they are distinguishable, so seat one at each counter first requires choosing <b>which</b> passenger goes where, and the same final arrangement then gets built several ways depending on who you designated. <b>Pre-allocation over-counts the moment the objects become distinguishable</b>, because the finished arrangement carries no record of which object was pre-allocated."
        },
        {
          "t": "def",
          "term": "Onto distribution",
          "html": "A placement of <i>n</i> distinct objects into <i>k</i> distinct boxes leaving <b>no box empty</b>. Equivalently, a surjective function from a set of size <i>n</i> onto a set of size <i>k</i>: the boxes are the codomain, and the objects sent to a box form that box's contents. Handing 6 distinct books to 4 students with nobody empty-handed is literally the same question."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · NO BOX EMPTY, TAP A LINE",
          "steps": [
            {
              "eq": "|S| = kⁿ, all placements",
              "why": "Each of the n objects independently chooses one of the k boxes, by the Fundamental Principle of Counting. Nothing is forbidden yet, so this is the universe the complement will be measured against."
            },
            {
              "eq": "A_i = the placements leaving box i empty",
              "why": "A placement is bad exactly when it lies in at least one of these sets, and good exactly when it lies in none of them. This phrasing is what makes the complement form apply."
            },
            {
              "eq": "|A_i| = (k − 1)ⁿ",
              "why": "If box i is barred, every object now chooses among the remaining k − 1 boxes. The size does not depend on which box was barred, which is what lets the sum be written with a binomial coefficient."
            },
            {
              "eq": "r boxes barred: (k − r)ⁿ, chosen in kCr ways",
              "why": "An r-fold intersection is the set of placements avoiding r named boxes, so every object chooses among k − r boxes. There are kCr ways to name them, so the whole r-th layer totals kCr times (k − r) to the n."
            },
            {
              "eq": "N(n, k) = Σ (−1)ʳ kCr (k − r)ⁿ",
              "why": "The complement form of inclusion-exclusion, summed from r = 0. The r = k term contains 0 to the n, which vanishes for every n ≥ 1, so in practice you stop one term early."
            },
            {
              "eq": "check: N(n, 2) = 2ⁿ − 2",
              "why": "Put k = 2. Every placement except the two that dump everything into a single box, which is right by direct reasoning. Put n = 2 and k = 3 instead and you get 9 − 12 + 3 = 0, also right, since two objects cannot fill three boxes."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ONTO DISTRIBUTIONS",
          "tag": "n distinct into k distinct, none empty",
          "main": "N(n, k) = k<sup>n</sup> − <sup>k</sup>C<sub>1</sub>(k − 1)<sup>n</sup> + <sup>k</sup>C<sub>2</sub>(k − 2)<sup>n</sup> − ⋯",
          "legend": [
            "Special cases to keep on hand: <i>N</i>(<i>n</i>, 1) = 1, <i>N</i>(<i>n</i>, 2) = 2<sup>n</sup> − 2, <i>N</i>(<i>n</i>, 3) = 3<sup>n</sup> − 3 · 2<sup>n</sup> + 3, <i>N</i>(<i>k</i>, <i>k</i>) = <i>k</i>!, and 0 whenever there are fewer objects than boxes.",
            "Ready values: <i>N</i>(4, 3) = 36, <i>N</i>(5, 3) = 150, <i>N</i>(6, 3) = 540, <i>N</i>(7, 3) = 1806, <i>N</i>(5, 4) = 240, <i>N</i>(6, 4) = 1560.",
            "If the boxes are <b>identical</b> instead, divide by <i>k</i>!: that quotient is the Stirling number <i>S</i>(<i>n</i>, <i>k</i>), with <i>S</i>(4, 3) = 6, <i>S</i>(5, 3) = 25, <i>S</i>(6, 3) = 90, <i>S</i>(6, 4) = 65."
          ],
          "note": "Self-check: k<sup>n</sup> = Σ <sup>k</sup>C<sub>j</sub> N(n, j), splitting all placements by how many boxes were actually used."
        },
        {
          "t": "proc",
          "title": "Onto counts and upper bounds",
          "steps": [
            "<b>Confirm both labels.</b> Objects genuinely distinguishable, boxes genuinely named. If the objects are identical, Topic 04's <sup>n−1</sup>C<sub>k−1</sub> is the right tool and this procedure over-counts wildly.",
            "<b>Check there are at least as many objects as boxes.</b> Otherwise the answer is 0 and no computation is needed. In a multi-part question this disposes of one part instantly.",
            "<b>Write the alternating sum</b> and stop at the term before (<i>k</i> − <i>k</i>)<sup>n</sup>, which vanishes.",
            "<b>Cross-check two ways.</b> Confirm the answer is divisible by <i>k</i>! and that the quotient matches <i>S</i>(<i>n</i>, <i>k</i>). A single arithmetic slip almost never survives both tests.",
            "<b>For upper bounds on integer solutions</b>, clear the lower bounds by pre-allocation first, then let <i>A<sub>i</sub></i> be the solutions violating cap <i>i</i>, that is with <i>x<sub>i</sub></i> ≥ <i>c<sub>i</sub></i> + 1, which is a lower bound and therefore pre-allocatable.",
            "<b>Test every term for existence.</b> Keep an <i>r</i>-fold term only while the leftover after pre-allocating <i>r</i> violations is still non-negative. Writing a term whose intersection is empty is a guaranteed wrong answer."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "In a class of 60 students, 32 opted for Physics, 28 for Chemistry and 12 for both. Find the number who opted for (a) at least one, (b) neither, (c) exactly one of the two.",
          "steps": [
            "(a) |<i>P</i> ∪ <i>C</i>| = 32 + 28 − 12 = 48. The 12 taking both were counted inside the 32 and again inside the 28.",
            "(b) Neither is the complement inside the class: 60 − 48 = 12.",
            "(c) Exactly one is in the union but not the intersection: 48 − 12 = 36.",
            "Check by regions: Physics only 20, Chemistry only 16, both 12, neither 12, totalling 60."
          ],
          "ans": "(a) 48, (b) 12, (c) 36"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "How many integers from 1 to 100 inclusive are divisible by at least one of 2, 3 and 5? How many by none of them?",
          "steps": [
            "Singles: ⌊100/2⌋ = 50, ⌊100/3⌋ = 33, ⌊100/5⌋ = 20.",
            "Pairs use the <b>lcm</b>: ⌊100/6⌋ = 16, ⌊100/15⌋ = 6, ⌊100/10⌋ = 10.",
            "Triple: ⌊100/30⌋ = 3.",
            "Union = (50 + 33 + 20) − (16 + 6 + 10) + 3 = 103 − 32 + 3."
          ],
          "ans": "74 divisible by at least one, so 100 − 74 = 26 by none. The union sits between the largest single set, 50, and the naive sum, 103, as it must"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "In how many ways can 5 distinct chocolates be distributed among 3 children so that every child receives at least one?",
          "steps": [
            "The first seductive wrong answer is <sup>4</sup>C<sub>2</sub> = 6, using Topic 04's identical-object formula. That counts only how <b>many</b> chocolates each child gets, never which.",
            "The second is pre-allocation: <sup>5</sup>P<sub>3</sub> = 60 ordered triples handed out first, times 3<sup>2</sup> = 9 for the rest, giving 540. That is 3.6 times too large, because the finished distribution has no record of which chocolate was pre-allocated.",
            "Distinct objects, distinct recipients, none empty, so this is <i>N</i>(5, 3) = 3<sup>5</sup> − 3 · 2<sup>5</sup> + 3 · 1<sup>5</sup>.",
            "243 − 96 + 3 = 150. Cross-check: 3! × <i>S</i>(5, 3) = 6 × 25 = 150."
          ],
          "ans": "150. Ask one question in three seconds: would swapping two of the objects produce a different outcome? If yes, stars and bars is barred"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find the number of onto functions from a set with 6 elements to a set with 4 elements, and hence the number of ways of putting the same 6 distinct books into 4 <b>identical</b> boxes with no box empty.",
          "steps": [
            "<i>N</i>(6, 4) = 4<sup>6</sup> − <sup>4</sup>C<sub>1</sub>3<sup>6</sup> + <sup>4</sup>C<sub>2</sub>2<sup>6</sup> − <sup>4</sup>C<sub>3</sub>1<sup>6</sup>.",
            "= 4096 − 4(729) + 6(64) − 4 = 4096 − 2916 + 384 − 4 = 1560.",
            "Identical boxes remove the labels, and the 4! = 24 placements that differ only by a relabelling collapse to one.",
            "<i>S</i>(6, 4) = 1560/24 = 65. Cross-check by the recurrence: <i>S</i>(6, 4) = <i>S</i>(5, 3) + 4<i>S</i>(5, 4) = 25 + 40 = 65."
          ],
          "ans": "1560 onto functions, and 65 ways with identical boxes"
        },
        {
          "t": "mcq",
          "q": "The number of integers from 1 to 60 inclusive that are divisible by 2 or by 3 is",
          "correct": 1,
          "opts": [
            {
              "label": "50",
              "nudge": "That is 30 + 20, the naive Addition Principle applied to piles that are not mutually exclusive. The multiples of 6 have been counted twice."
            },
            {
              "label": "40",
              "nudge": null
            },
            {
              "label": "30",
              "nudge": "That is the multiples of 2 alone, reading <b>or</b> as though the second condition added nothing new."
            },
            {
              "label": "10",
              "nudge": "That is the <b>intersection</b>, the multiples of 6. Under time pressure ∩ was reported where ∪ was asked."
            }
          ],
          "solution": "⌊60/2⌋ = 30 and ⌊60/3⌋ = 20, and the overlap is the multiples of lcm(2, 3) = 6, namely ⌊60/6⌋ = 10. So 30 + 20 − 10 = 40."
        },
        {
          "t": "mcq",
          "q": "The number of onto functions from a set of 4 elements to a set of 2 elements is",
          "correct": 1,
          "opts": [
            {
              "label": "16",
              "nudge": "That is 2<sup>4</sup>, every function from the 4-set to the 2-set. The onto requirement has been dropped."
            },
            {
              "label": "14",
              "nudge": null
            },
            {
              "label": "15",
              "nudge": "That removes only one function. There are <b>two</b> constant functions to exclude here, one per element of the codomain."
            },
            {
              "label": "3",
              "nudge": "That is <sup>3</sup>C<sub>1</sub>, Topic 04's identical-object formula applied to distinguishable elements. It counts size patterns only and is blind to which element goes where."
            }
          ],
          "solution": "<i>N</i>(4, 2) = 2<sup>4</sup> − <sup>2</sup>C<sub>1</sub>1<sup>4</sup> = 16 − 2 = 14. Directly: of the 16 functions, exactly the two constant ones fail to be onto."
        },
        {
          "t": "mcq",
          "q": "The number of ways in which 6 distinct balls can be put into 3 distinct boxes so that no box remains empty is",
          "correct": 0,
          "opts": [
            {
              "label": "540",
              "nudge": null
            },
            {
              "label": "729",
              "nudge": "That is 3<sup>6</sup>, the unrestricted count from Topic 04. The no-empty-box condition has been dropped."
            },
            {
              "label": "10",
              "nudge": "That is <sup>5</sup>C<sub>2</sub>, which treats the six distinct balls as identical and counts only the size patterns."
            },
            {
              "label": "90",
              "nudge": "That is <i>S</i>(6, 3), the count for <b>identical</b> boxes. The hard part is right; labelled boxes still need the factor of 3!."
            }
          ],
          "solution": "<i>N</i>(6, 3) = 3<sup>6</sup> − 3 · 2<sup>6</sup> + 3 = 729 − 192 + 3 = 540. Cross-check: 3! × <i>S</i>(6, 3) = 6 × 90 = 540."
        },
        {
          "t": "mcq",
          "q": "The number of non-negative integer solutions of <i>x</i> + <i>y</i> + <i>z</i> = 10 with <i>x</i>, <i>y</i>, <i>z</i> each at most 5 is",
          "correct": 1,
          "opts": [
            {
              "label": "66",
              "nudge": "That is the unrestricted <sup>12</sup>C<sub>2</sub>. The caps have been ignored altogether."
            },
            {
              "label": "21",
              "nudge": null
            },
            {
              "label": "51",
              "nudge": "That is 66 − 15, subtracting the over-cap solutions for one variable only. The same failure can happen to <i>y</i> or to <i>z</i>."
            },
            {
              "label": "24",
              "nudge": "That is 66 − 45 + 3, adding back a phantom pair term. Two variables reaching 6 each would need a total of 12, which exceeds 10, so that term counts nothing."
            }
          ],
          "solution": "Unrestricted: <sup>12</sup>C<sub>2</sub> = 66. Violating a named cap means that variable is at least 6; pre-allocating 6 leaves a total of 4, so <sup>6</sup>C<sub>2</sub> = 15, and there are 3 choices of variable, giving 45. No pair can both violate, so 66 − 45 = 21."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] In a colony of 100 households, 65 take newspaper <i>A</i>, 45 take <i>B</i> and 20 take both. How many take at least one, and how many neither?",
              "a": "65 + 45 − 20 = 90 take at least one; 100 − 90 = 10 take neither."
            },
            {
              "q": "[CBSE] Of 200 students, 100 study Hindi, 80 Sanskrit, 70 French; 40 Hindi and Sanskrit, 30 Sanskrit and French, 35 Hindi and French, 15 all three. Find at least one, none, and exactly one.",
              "a": "At least one 250 − 105 + 15 = 160; none 40; exactly one 250 − 210 + 45 = 85."
            },
            {
              "q": "[JEE Main] How many integers from 1 to 1000 inclusive are divisible by none of 2, 3 and 5?",
              "a": "1000 − [500 + 333 + 200 − 166 − 100 − 66 + 33] = 1000 − 734 = 266"
            },
            {
              "q": "[JEE Main] Find the number of onto functions from a set with 6 elements to a set with 3 elements.",
              "a": "3<sup>6</sup> − 3 · 2<sup>6</sup> + 3 = 729 − 192 + 3 = 540"
            },
            {
              "q": "[JEE Advanced] In how many ways can 7 distinct toys be distributed among 3 distinct children so that no child is left without a toy?",
              "a": "<i>N</i>(7, 3) = 3<sup>7</sup> − 3 · 2<sup>7</sup> + 3 = 2187 − 384 + 3 = 1806"
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Using <sup>n−1</sup>C<sub>k−1</sub> for distinct objects.</b> The error this topic exists to kill. That formula answers how many objects each box gets, never which ones.",
            "<b>Pre-allocating distinguishable objects.</b> Give each box one first is a bijection only for identical objects. Reserve pre-allocation for identical items and for lower bounds on integer variables.",
            "<b>Pre-allocating to enforce an upper bound.</b> No substitution turns <i>x</i> ≤ <i>c</i> into a free variable. Convert each cap into its violation <i>x</i> ≥ <i>c</i> + 1, which <b>is</b> a lower bound, then alternate signs.",
            "<b>Multiplying instead of taking the lcm.</b> The intersection of multiples of <i>a</i> and multiples of <i>b</i> is the multiples of lcm(<i>a</i>, <i>b</i>). Using <i>ab</i> is correct only when they are coprime.",
            "<b>Confusing labelled with unlabelled boxes.</b> <i>S</i>(<i>n</i>, <i>k</i>) and <i>k</i>! <i>S</i>(<i>n</i>, <i>k</i>) differ by a factor of <i>k</i>! and both look like plausible answers. Decide before computing, not after."
          ]
        },
        {
          "t": "protip",
          "html": "for any three-set question with numbers given, draw the circles and fill them from the centre outward. write the all-three count first, subtract it from each pairwise count to get the exactly-two regions, then subtract everything from each single count. every one of the six questions can then be read off by adding regions, with no signs to get wrong. if a region comes out negative, the data itself is inconsistent."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "|A ∪ B ∪ C| = Σ₁ − Σ₂ + Σ₃",
              "note": "add singles, subtract pairs, add the triple"
            },
            {
              "f": "none = |S| − S₁ + S₂ − S₃ + ⋯",
              "note": "starts with a plus on |S|"
            },
            {
              "f": "multiples of a and of b ⇒ lcm(a, b)",
              "note": "ab only when a and b are coprime"
            },
            {
              "f": "N(n, k) = Σ (−1)ʳ <sup>k</sup>C<sub>r</sub>(k − r)<sup>n</sup>",
              "note": "distinct into distinct, no box empty"
            },
            {
              "f": "N(n, k) = k! S(n, k)",
              "note": "identical boxes: divide by k!"
            }
          ],
          "aids": [
            "“distinct objects kill stars and bars”",
            "“labelled boxes multiply by k factorial”",
            "“upper bound? violate it, then alternate”"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Counting in Costume",
      "chip": "06 PATTERNS",
      "kalam": "name the selection, the formula follows",
      "blocks": [
        {
          "t": "p",
          "html": "Most hard questions in this chapter are not new mathematics. They are familiar selections <b>wearing a costume</b>, and the whole skill is learning to see through it. Six costumes recur often enough to be worth recognising on sight: shapes from points, divisors from exponents, the sum of all numbers formed, the rank of a word, derangements, and the power of a prime hidden inside a factorial."
        },
        {
          "t": "p",
          "html": "<b>Geometry as selection.</b> Through points with no three on a line, a straight line is just a choice of 2 points, so the number of lines is <sup>n</sup>C<sub>2</sub>. A triangle is a choice of 3 points, <sup>n</sup>C<sub>3</sub>. The only complication is <b>collinear</b> points: pairs among them yield one line rather than many, and triples among them yield no triangle at all, so we correct by subtracting."
        },
        {
          "t": "think",
          "html": "counting shapes is counting the vertices that define them. the shape is completely determined by the selection, so once you name what is being chosen, the formula is already written."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · GEOMETRIC COUNTING",
          "tag": "n points, general position",
          "main": "lines = <sup>n</sup>C<sub>2</sub> · triangles = <sup>n</sup>C<sub>3</sub>",
          "legend": [
            "If <i>m</i> of the points are collinear: lines = <sup>n</sup>C<sub>2</sub> − <sup>m</sup>C<sub>2</sub> + 1 and triangles = <sup>n</sup>C<sub>3</sub> − <sup>m</sup>C<sub>3</sub>.",
            "Diagonals of a convex <i>n</i>-gon: <sup>n</sup>C<sub>2</sub> − <i>n</i> = <i>n</i>(<i>n</i> − 3)/2.",
            "Rectangles from a grid of <i>a</i> horizontal and <i>b</i> vertical lines: <sup>a</sup>C<sub>2</sub> · <sup>b</sup>C<sub>2</sub>, and the same product counts parallelograms from two families of parallel lines."
          ],
          "note": "The collinear correction adds 1 back for lines (the m points do lie on one real line) but adds nothing back for triangles (a flat triangle is not a triangle)."
        },
        {
          "t": "p",
          "html": "<b>Divisors as selection.</b> Write <i>N</i> = <i>p</i><sub>1</sub><sup>a₁</sup> <i>p</i><sub>2</sub><sup>a₂</sup> ⋯. Every divisor is built by choosing an exponent for each prime, anything from 0 to <i>a<sub>i</sub></i>, which is <i>a<sub>i</sub></i> + 1 independent choices. By the Fundamental Principle of Counting the number of divisors is the product of the (<i>a<sub>i</sub></i> + 1). A divisor is a <b>selection of exponents</b>, and every question in the divisor toolkit is that choice with one extra condition bolted on."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE DIVISOR TOOLKIT",
          "tag": "N = ∏ pᵢ^aᵢ with k distinct primes",
          "main": "d(N) = ∏ (aᵢ + 1)",
          "legend": [
            "Sum of divisors σ(<i>N</i>) = ∏ (<i>p<sub>i</sub></i><sup>aᵢ+1</sup> − 1)/(<i>p<sub>i</sub></i> − 1) · product of all divisors = <i>N</i><sup>d(N)/2</sup>, left as a power.",
            "As a product of two factors, unordered: <i>d</i>/2 if <i>N</i> is not a perfect square, (<i>d</i> + 1)/2 if it is. <i>N</i> is a perfect square exactly when <i>d</i>(<i>N</i>) is <b>odd</b>.",
            "As a product of two <b>coprime</b> factors: 2<sup>k−1</sup> unordered, 2<sup>k</sup> ordered. The exponents are irrelevant; only the number of distinct primes matters.",
            "Divisors that are multiples of <i>m</i>, where <i>m</i> divides <i>N</i>: count <i>d</i>(<i>N</i>/<i>m</i>), sum <i>m</i> · σ(<i>N</i>/<i>m</i>)."
          ],
          "note": "Odd divisors: delete the prime 2 from the factorisation. Even divisors: total minus odd."
        },
        {
          "t": "defgrid",
          "title": "Arrangements in disguise",
          "rows": [
            {
              "k": "Sum of all numbers formed",
              "v": "(Σ digits) × (<i>n</i> − 1)! × (10<sup>n</sup> − 1)/9"
            },
            {
              "k": "Why (n − 1)!",
              "v": "each digit sits in each place exactly (<i>n</i> − 1)! times"
            },
            {
              "k": "Ordered triples xyz = N",
              "v": "∏ <sup>aᵢ+2</sup>C<sub>2</sub>, one stars-and-bars split per prime"
            },
            {
              "k": "Derangements",
              "v": "<i>D<sub>n</sub></i> = <i>n</i>! Σ (−1)<sup>r</sup>/<i>r</i>! · <i>D<sub>n</sub></i> = (<i>n</i> − 1)(<i>D</i><sub>n−1</sub> + <i>D</i><sub>n−2</sub>)"
            },
            {
              "k": "Values of Dₙ, n = 0 to 8",
              "v": "1, 0, 1, 2, 9, 44, 265, 1854, 14833"
            },
            {
              "k": "Prime p inside n!",
              "v": "⌊<i>n</i>/<i>p</i>⌋ + ⌊<i>n</i>/<i>p</i><sup>2</sup>⌋ + ⌊<i>n</i>/<i>p</i><sup>3</sup>⌋ + ⋯"
            }
          ]
        },
        {
          "t": "p",
          "html": "The sum-of-numbers formula deserves its one-line reason. With <i>n</i> distinct digits used once each, fix any digit in the units place; the remaining <i>n</i> − 1 digits permute freely in (<i>n</i> − 1)! ways. So <b>each digit appears in the units place exactly (<i>n</i> − 1)! times</b>, and by symmetry in every place. The units column therefore contributes (Σ digits)(<i>n</i> − 1)!, the tens column ten times that, and the whole sum is that repeated across the repunit 111…1."
        },
        {
          "t": "def",
          "term": "Derangement",
          "html": "A permutation in which <b>no</b> object lands in its own place: letters into addressed envelopes with nothing matching, guests collecting hats with nobody getting their own. <i>D<sub>n</sub></i> is the nearest integer to <i>n</i>!/<i>e</i>, so roughly 37 percent of all permutations are derangements, and that proportion barely moves as <i>n</i> grows."
        },
        {
          "t": "p",
          "html": "Almost every real exam question is the <b>partial</b> version: exactly two letters in the right envelopes, at least three guests with their own hats. The count is <sup>n</sup>C<sub>k</sub> · <i>D</i><sub>n−k</sub>: choose which <i>k</i> land correctly, then insist the remaining <i>n</i> − <i>k</i> are all wrong, which is a derangement. One consequence is worth memorising: <b>exactly <i>n</i> − 1 in place is impossible for every <i>n</i></b>, because <i>D</i><sub>1</sub> = 0. If <i>n</i> − 1 are right, the last one is forced right too."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · EXACTLY k IN PLACE, TAP A LINE",
          "steps": [
            {
              "eq": "choose the k that land correctly: nCk",
              "why": "Any k of the n objects may be the lucky ones, and this stage says nothing about the rest. It is a plain selection, because the k correct objects carry no order among themselves."
            },
            {
              "eq": "the other n − k must all be wrong",
              "why": "Otherwise the word exactly is violated: if even one of them landed correctly the total number in place would exceed k, and that arrangement belongs to a different case."
            },
            {
              "eq": "that is a derangement of n − k objects: D(n − k)",
              "why": "A permutation of those objects with no fixed point is exactly what a derangement is. Nothing about the k already fixed changes the count, so the two stages are independent."
            },
            {
              "eq": "#(exactly k in place) = nCk · D(n − k)",
              "why": "By the multiplication principle. For 5 letters with exactly 2 correct: 5C2 × D3 = 10 × 2 = 20. For exactly 4 correct: 5C4 × D1 = 5 × 0 = 0, which is the whole point."
            },
            {
              "eq": "Σ nCk · D(n − k) = n!",
              "why": "Every permutation has some exact number of fixed points and the categories are disjoint and exhaustive. For n = 6 the distribution is 265, 264, 135, 40, 15, 0, 1, and it totals 720. This is the cheapest insurance available in the topic."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · PRIME POWER INSIDE n!",
          "tag": "Legendre's staircase",
          "main": "E_p(n!) = ⌊n/p⌋ + ⌊n/p<sup>2</sup>⌋ + ⌊n/p<sup>3</sup>⌋ + ⋯",
          "legend": [
            "Among 1, 2, …, <i>n</i> exactly ⌊<i>n</i>/<i>p</i>⌋ are multiples of <i>p</i>; of those, ⌊<i>n</i>/<i>p</i><sup>2</sup>⌋ carry a <b>second</b> factor of <i>p</i>, and so on. Summing counts every factor exactly once.",
            "Trailing zeros of <i>n</i>! = <i>E</i><sub>5</sub>(<i>n</i>!), because fives are scarcer than twos."
          ],
          "note": "Stop when the power of p exceeds n: every later term is 0."
        },
        {
          "t": "proc",
          "title": "Recognise the costume",
          "steps": [
            "<b>Name what is being chosen.</b> Points for shapes, exponents for divisors, positions for arrangements, letters for a rank. Most application problems reduce to a one-line <sup>n</sup>C<sub>r</sub> the moment you can say it out loud.",
            "<b>Hunt for special position.</b> Collinear points, concurrent lines, a repeated letter. The correction term is almost always where the marks are.",
            "<b>Factorise once, use it four times.</b> A divisor question rarely asks one thing; the count, the sum, the odd part and the coprime split all come off the same factorisation.",
            "<b>For none correct or at least one correct</b>, reach straight for the derangement family, and remember that at least one <b>misplaced</b> is simply <i>n</i>! − 1.",
            "<b>Leave big answers as expressions.</b> The product of the divisors of 1200 is 1200<sup>15</sup>; no examiner wants the digits and no marking scheme rewards them."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "For <i>N</i> = 1200, find the number of divisors, and the number and sum of the odd divisors.",
          "steps": [
            "Factorise: 1200 = 2<sup>4</sup> · 3 · 5<sup>2</sup>.",
            "<i>d</i>(1200) = (4 + 1)(1 + 1)(2 + 1) = 30.",
            "The odd part is <i>M</i> = 3 · 5<sup>2</sup> = 75, and the odd divisors of 1200 are precisely the divisors of 75.",
            "<i>d</i>(75) = 2 × 3 = 6 and σ(75) = 4 × 31 = 124. Listing them confirms it: 1, 3, 5, 15, 25, 75."
          ],
          "ans": "30 divisors in all; 6 odd divisors summing to 124, so 24 even divisors"
        },
        {
          "t": "ex",
          "tag": "CONCEPTUAL TRAP",
          "q": "There are 10 points in a plane, of which 4 are collinear. How many triangles can be formed with these points as vertices?",
          "steps": [
            "Without restriction, any 3 points make a triangle: <sup>10</sup>C<sub>3</sub> = 120.",
            "But the 4 collinear points yield <sup>4</sup>C<sub>3</sub> = 4 flat, zero-area triangles.",
            "Those must be removed: 120 − 4."
          ],
          "ans": "116. Writing 120 and stopping is the trap; always scan for collinear subsets and subtract their <sup>m</sup>C<sub>3</sub>"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the sum of all 4-digit numbers formed using the digits 2, 3, 4, 5 exactly once each.",
          "steps": [
            "There are 4! = 24 such numbers, and each digit occupies each place (4 − 1)! = 6 times.",
            "Sum of the digits = 2 + 3 + 4 + 5 = 14.",
            "The place-value repunit for 4 digits is 1111.",
            "Sum = 14 × 6 × 1111 = 84 × 1111."
          ],
          "ans": "93,324. Multiplying by 4! instead of 3! is the standard slip here"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "Five letters are inserted at random into five correspondingly addressed envelopes, one per envelope. In how many ways can exactly four letters go into their correct envelopes?",
          "steps": [
            "The tempting answer is choose which four are correct, <sup>5</sup>C<sub>4</sub> = 5, and stop.",
            "The formula has a second factor: <sup>5</sup>C<sub>4</sub> · <i>D</i><sub>1</sub> = 5 × 0.",
            "In words: if four letters are correct, four envelopes are filled and one letter and one envelope remain, and that envelope is necessarily the last letter's own. The fifth letter has nowhere wrong to go.",
            "Contrast exactly three correct, which is <sup>5</sup>C<sub>3</sub> · <i>D</i><sub>2</sub> = 10 × 1 = 10: the last two letters simply swap."
          ],
          "ans": "0. Exactly n − 1 in place is impossible for every n, because D₁ = 0, so any non-zero option offered for it is a distractor"
        },
        {
          "t": "mcq",
          "q": "The number of positive divisors of 72 is",
          "correct": 2,
          "opts": [
            {
              "label": "6",
              "nudge": "That multiplies the exponents, 3 × 2. Each prime offers <i>a</i> + 1 exponent choices, including the exponent 0, so it is the <b>incremented</b> exponents that multiply."
            },
            {
              "label": "8",
              "nudge": "That uses 2<sup>3</sup> to get 4 and then doubles, which never handles the 3<sup>2</sup> block properly. That block contributes a factor of 3, not 2."
            },
            {
              "label": "12",
              "nudge": null
            },
            {
              "label": "36",
              "nudge": "That confuses the divisor count with something like 72/2. The count is a product over primes, never a fraction of <i>N</i>."
            }
          ],
          "solution": "72 = 2<sup>3</sup> × 3<sup>2</sup>, so <i>d</i>(72) = (3 + 1)(2 + 1) = 12."
        },
        {
          "t": "mcq",
          "q": "From 8 points in a plane, no three collinear, how many triangles can be formed?",
          "correct": 1,
          "opts": [
            {
              "label": "24",
              "nudge": "A miscomputation of <sup>8</sup>C<sub>3</sub>. Recompute: (8 × 7 × 6)/6 = 56."
            },
            {
              "label": "56",
              "nudge": null
            },
            {
              "label": "336",
              "nudge": "That is <sup>8</sup>P<sub>3</sub>, which orders the vertices. Labelling the same three points in a different order does not create a new triangle."
            },
            {
              "label": "512",
              "nudge": "That is 8<sup>3</sup>, which allows both repetition and order. A vertex cannot be reused and the vertices are unordered."
            }
          ],
          "solution": "A triangle is a choice of 3 points from 8, and no three are collinear, so <sup>8</sup>C<sub>3</sub> = 56."
        },
        {
          "t": "mcq",
          "q": "The number of derangements of 4 distinct objects is",
          "correct": 1,
          "opts": [
            {
              "label": "6",
              "nudge": "That is 3!, a common guess. Derangements of 4 objects are counted by <i>D</i><sub>4</sub>, not by a factorial one size down."
            },
            {
              "label": "9",
              "nudge": null
            },
            {
              "label": "12",
              "nudge": "That subtracts only the single-fixed-point cases, without the alternating inclusion-exclusion sum that follows."
            },
            {
              "label": "24",
              "nudge": "That is 4!, every permutation of the four objects, not only those with no fixed point."
            }
          ],
          "solution": "<i>D</i><sub>4</sub> = 4!(1 − 1 + 1/2 − 1/6 + 1/24) = 24 × 9/24 = 9. Cross-check with the recurrence: <i>D</i><sub>4</sub> = 3(<i>D</i><sub>3</sub> + <i>D</i><sub>2</sub>) = 3(2 + 1) = 9."
        },
        {
          "t": "mcq",
          "q": "The exponent of 3 in 30! is",
          "correct": 2,
          "opts": [
            {
              "label": "10",
              "nudge": "You stopped at the first term. Multiples of 9 carry an extra factor of 3, and 27 carries one more still."
            },
            {
              "label": "13",
              "nudge": "You included ⌊30/9⌋ but dropped ⌊30/27⌋. The staircase runs until the power of 3 exceeds 30."
            },
            {
              "label": "14",
              "nudge": null
            },
            {
              "label": "15",
              "nudge": "One term too many. The next power is 81, which exceeds 30, so ⌊30/81⌋ = 0 and adds nothing."
            }
          ],
          "solution": "⌊30/3⌋ + ⌊30/9⌋ + ⌊30/27⌋ = 10 + 3 + 1 = 14."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[Foundational] How many diagonals does a convex decagon have?",
              "a": "10(10 − 3)/2 = 35"
            },
            {
              "q": "[Foundational] Find the number and the sum of the divisors of 540.",
              "a": "540 = 2<sup>2</sup> · 3<sup>3</sup> · 5, so <i>d</i> = 3 × 4 × 2 = 24 and σ = 7 × 40 × 6 = 1680."
            },
            {
              "q": "[JEE Main] In a grid formed by 5 horizontal and 6 vertical lines, how many rectangles can be formed?",
              "a": "<sup>5</sup>C<sub>2</sub> × <sup>6</sup>C<sub>2</sub> = 10 × 15 = 150"
            },
            {
              "q": "[JEE Main] Seven letters go into seven addressed envelopes at random. In how many ways do exactly three reach the correct envelope?",
              "a": "<sup>7</sup>C<sub>3</sub> · <i>D</i><sub>4</sub> = 35 × 9 = 315"
            },
            {
              "q": "[JEE Advanced] How many trailing zeros does 100! have?",
              "a": "⌊100/5⌋ + ⌊100/25⌋ = 20 + 4 = 24"
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Ignoring collinear corrections.</b> Writing <sup>n</sup>C<sub>3</sub> for triangles or <sup>n</sup>C<sub>2</sub> for lines without subtracting the points in special position.",
            "<b>Incomplete prime factorisation.</b> The divisor formula needs <b>every</b> prime with its full exponent; a dropped prime silently halves your answer.",
            "<b>The perfect-square parity trap.</b> If <i>d</i>(<i>N</i>) comes out odd, <i>N</i> is a perfect square and the two-factor count is (<i>d</i> + 1)/2. A count is never a fraction, so 9/2 is a signal, not a rounding problem.",
            "<b>Using n! in the sum of numbers formed.</b> Each digit sits in a fixed place (<i>n</i> − 1)! times, not <i>n</i>! times.",
            "<b>Treating none correct as a single subtraction.</b> A derangement needs the full alternating sum, and exactly <i>n</i> − 1 correct is always 0."
          ]
        },
        {
          "t": "protip",
          "html": "before computing anything, say out loud what is being chosen. points for a shape, an exponent per prime for a divisor, which letters land right for a derangement. name the underlying selection first and the formula writes itself, which is faster than hunting for the one you half-remember."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "lines <sup>n</sup>C<sub>2</sub> · triangles <sup>n</sup>C<sub>3</sub>",
              "note": "m collinear: subtract, and add 1 back for lines"
            },
            {
              "f": "d(N) = ∏ (aᵢ + 1)",
              "note": "odd d(N) means N is a perfect square"
            },
            {
              "f": "sum = (Σ d)(n − 1)!(10<sup>n</sup> − 1)/9",
              "note": "each digit in each place (n − 1)! times"
            },
            {
              "f": "exactly k in place = <sup>n</sup>C<sub>k</sub> D<sub>n−k</sub>",
              "note": "D: 1, 0, 1, 2, 9, 44, 265"
            },
            {
              "f": "E_p(n!) = Σ ⌊n / p<sup>k</sup>⌋",
              "note": "trailing zeros of n! use p = 5"
            }
          ],
          "aids": [
            "“shapes are choices of vertices”",
            "“a divisor is one exponent per prime”",
            "“fix k, derange the rest”"
          ]
        }
      ]
    }
  ]
};

export default ch06Permutations;
