/**
 * Chapter 14 · Probability. Mathematics, Class 11.
 *
 * Restructured from pages 1031 to 1094 of the Drona Class 11 Mathematics
 * Master Reference into the block system in
 * design_handoff_textbooks/CONTENT_SPEC.md, following math-11-01-sets.ts for
 * the set-algebra half and math-11-06-permutations.ts for the counting half.
 *
 * The source is four documents stacked: a typeset chapter of three subtopics
 * (sample space and events; the axiomatic approach; computing probabilities),
 * a Round 1 Supplement (Addendum 14.1 ordered counting, Addendum 14.2
 * inequality bounds), a Round 2 Addendum (14.3 selection and arrangement in
 * one outcome, 14.4 the matching problem) and a chapter-wide Errata. Three
 * subtopics is too few topics and four addenda is too many, so the material is
 * split six ways along the joints the source itself names:
 *
 *   - Subtopic 01 splits in two. Topic 01 is sample-space construction, which
 *     is procedural and tree-shaped; Topic 02 is the algebra of events, which
 *     is Chapter 1 set theory in a new costume. The source runs them together
 *     and its own Procedure list already separates them (A builds S, B and C
 *     work on events).
 *   - Subtopic 02 splits at the addition rule. Topic 03 is everything the
 *     three axioms force about a single event, Topic 04 is everything they
 *     force about two or three events combined.
 *   - Addendum 14.2, the bounds, joins Topic 04 rather than taking a topic.
 *     Boole and Bonferroni are the addition rule read with 0 ≤ P ≤ 1
 *     substituted into it, and the source proves them in exactly that order.
 *   - Subtopic 03 splits at the word "ordered". Topic 05 is the unordered,
 *     combination-shaped half plus odds and empirical probability; Topic 06 is
 *     Addenda 14.1, 14.3 and 14.4, which are the three faces of one idea, that
 *     an outcome can be an arrangement.
 *   - The three-event addition theorem sits in Topic 04 with the two-event
 *     rule it generalises, and its n-event form is stated there so Topic 06
 *     can apply it to the matching problem without restating it.
 *
 * Four corrections. Two are the source's own Errata (pages 1093 to 1094),
 * applied here rather than reproduced as errors:
 *
 *   1. Subtopic 02 §5 answer 2 prints "Yes" for "if P(A) = 0.45, can
 *      P(A′) = 0.45?" while its own reasoning gives 0.55. The answer is NO,
 *      and Topic 03's fourth MCQ is written on the corrected verdict.
 *   2. Subtopic 03 §7's closing Pro-Tip prints
 *      P(at least one) = 1 − (chance of none)^(number of trials), which is the
 *      independence rule, Class 12, and false in general. Topic 05 states the
 *      shortcut as what it actually is, a count of equally likely lists:
 *      P(at least one six in n throws) = 1 − 5ⁿ/6ⁿ, derived in that topic's
 *      derivation from 6ⁿ ordered outcomes rather than from a product of
 *      probabilities.
 *
 * Two are not in the Errata and were found while recomputing the options:
 *
 *   3. Subtopic 02 §6 Q4 (P(A) = 0.5, P(B) = 0.4, P(A ∩ B) = 0.2, find
 *      P(A′ ∩ B′)) explains option (a) 0.1 as "multiplied P(A′)P(B′)". That
 *      product is 0.5 × 0.6 = 0.3, which is the CORRECT answer, not option
 *      (a). The given data in fact make A and B independent, since
 *      P(A)P(B) = 0.2 = P(A ∩ B), so the multiplication cannot be the trap.
 *      The route to 0.1 is 1 − P(A) − P(B), which strips the overlap twice.
 *      Topic 04's second MCQ names that trap instead.
 *   4. Subtopic 02 §6 Q1 (P(A) = 0.6, P(A ∪ B) = 0.9, mutually exclusive)
 *      explains option (b) 0.5 as "used 1 − 0.6". That is 0.4, not 0.5, so the
 *      option and its trap do not match. Topic 04's first MCQ carries 0.4 as
 *      that option, which is the value the named error actually produces.
 *
 * Every probability quoted here was recomputed and checked to lie in [0, 1].
 * The source's own arithmetic is otherwise sound, including the two answers
 * that look surprising and are not: the ASSASSIN example, where "no two S
 * together" and "all four S together" both come out 1/14, and Example S6,
 * where "a word is chosen" gives 16/19 and "tiles are drawn" gives 46/55 for
 * what reads like the same question.
 *
 * Seven `diagram` blocks: one `tree` (multi-stage sample spaces), one `venn2`
 * and one `venn3` (both keeping their built-in chips and captions, which were
 * written for set algebra and are exactly what the algebra of events and
 * three-event inclusion-exclusion need), one `numberline` (the see-saw between
 * union and intersection, drawn as bars on a track of length 1) and three
 * `plot` (valid and invalid probability assignments on a die; the 6 by 6
 * lattice of two dice, which answers most two-dice questions on its own; and
 * the matching probabilities settling on 1 − e⁻¹). Diagram chips and captions
 * render as plain text, not markup, so they carry no inline tags.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch14Probability: Chapter = {
  "chapter": "14",
  "title": "Probability",
  "subject": "Mathematics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Random Experiments and Sample Spaces",
      "chip": "01 LIST",
      "kalam": "you cannot predict it, but you can list it",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Random Experiments and Sample Spaces</b><br>This is the grammar of the entire chapter, so it is everywhere indirectly. CBSE Boards asks it as a direct 1 to 2 mark <b>write the sample space</b> question. CUET poses fast one-liners on classifying an experiment. JEE Main rarely asks it alone but assumes it silently in every probability problem, and JEE Advanced builds set-counting and partition arguments on this foundation. Mis-specify <i>S</i> and every mark after it is already lost.<br><br><b>02 · Events and the Algebra of Events</b><br>The definitional half, and the one examiners test with a stopwatch. CBSE asks <b>express the event as a set</b> and the mutually exclusive or exhaustive verdict at 1 to 2 marks. CUET asks event classification as speed traps. JEE Advanced counts events: how many subsets, how many compound, how many disjoint pairs. Everything here is Chapter 1 set theory wearing probability's clothes.<br><br><b>03 · The Axioms and the Probability of an Event</b><br>One of the highest-yield subtopics in the chapter. CBSE asks the complement law as a 2 to 3 mark numerical almost every year. CUET turns the axioms into fast <b>is this a valid probability assignment</b> one-liners. JEE Advanced builds loaded, non-uniform sample spaces directly on the axioms, precisely where the favourable-over-total recipe stops working.<br><br><b>04 · Addition Rules and the Bounds They Force</b><br>JEE Main treats <i>P</i>(<i>A</i> ∪ <i>B</i>) = <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) − <i>P</i>(<i>A</i> ∩ <i>B</i>) as an everyday tool and CBSE asks it at 2 to 3 marks. JEE Advanced pushes to three-event inclusion-exclusion, and to <b>find the greatest and least values of <i>P</i>(<i>A</i> ∩ <i>B</i>)</b>. The same bounds work as a silent option filter: anything violating <i>P</i>(<i>A</i> ∩ <i>B</i>) ≥ <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) − 1 can be discarded with no work at all.<br><br><b>05 · Counting Your Way to a Probability</b><br>This is where the marks actually live. Almost every numerical in CBSE Boards, and the overwhelming majority of JEE Main probability questions, are counting problems dressed as probability: cards, dice, committees, draws from a bag. CUET leans on <b>odds</b> and quick at-least-one calculations. Everything you built in Chapter 6 gets spent here.<br><br><b>06 · Ordered Counting, Mixed Models and the Matching Problem</b><br>JEE Main asks an ordered-counting probability almost every session: digits forming a number under a divisibility condition, letters of a word with a separation condition, people in ranked positions. Its favourite shape is the one where a single outcome is <b>both</b> a selection and an arrangement. CBSE asks the gentler versions and asks the three-letter matching problem verbatim. JEE Advanced asks matching with <i>n</i> letters, or for <b>exactly <i>r</i></b> correct."
        },
        {
          "t": "p",
          "html": "You are at a railway booking counter and the clerk is about to tell you which berth you got: Lower, Middle, Upper, Side-Lower or Side-Upper. Before he speaks you do <b>not</b> know the answer, but you absolutely know the complete menu of things that could happen. Exactly five possibilities, no more and no fewer. That full menu, the collection of every outcome that could occur, is the object this entire chapter is built on."
        },
        {
          "t": "p",
          "html": "Any action whose result you cannot predict with certainty, but whose set of possible results you <b>can</b> list in advance, is a <b>random experiment</b>. Tossing a coin, rolling a die, drawing a card, checking whether the 8:10 local is on time. The key word is <i>random</i>: if you “experiment” by adding 2 + 3 you always get 5, so nothing about it is uncertain. A random experiment needs genuine uncertainty in the result and total clarity about the list of candidates."
        },
        {
          "t": "def",
          "term": "Random experiment",
          "html": "An action with two properties at once. Its result cannot be predicted with certainty, and the set of all its possible results is known and listable <b>before</b> you perform it. Drop either property and it is not a random experiment: a fixed sum fails the first, an action whose possible results you cannot enumerate fails the second."
        },
        {
          "t": "def",
          "term": "Sample space S",
          "html": "The set of all possible outcomes of the experiment, each listed exactly once. One die gives <i>S</i> = {1, 2, 3, 4, 5, 6}; one coin gives <i>S</i> = {H, T}. A single element of <i>S</i> is an <b>outcome</b> or <b>sample point</b>, written <i>ω</i>, and <i>n</i>(<i>S</i>) is how many there are. <i>S</i> is the universe of the experiment, and everything else in this chapter lives inside it."
        },
        {
          "t": "think",
          "html": "the sample space is the clerk's menu, printed before he speaks. you do not know which item you are getting, but the menu is finished, nothing will be added to it and nothing on it is a duplicate."
        },
        {
          "t": "p",
          "html": "The first real decision is not mathematical, it is a reading decision: <b>what is being recorded on each trial?</b> Draw a ball from a box of coloured, numbered balls and the sample space is completely different depending on whether you note the colour, the number, or both. Nothing in the mathematics will warn you if you choose wrongly. This is the single most common silent error in the chapter, because the answer will still look like a probability."
        },
        {
          "t": "p",
          "html": "Many experiments happen in <b>stages</b>: toss a coin, then roll a die. An outcome is then an <b>ordered</b> pair, one entry per stage, and (H, 4) records something entirely different from (4, H) if the stage order is reversed. Collapsing the order does not simplify the problem, it destroys outcomes. Build the list with a tree: branch for stage 1, sub-branch for stage 2, and read each complete root-to-leaf path as one ordered outcome."
        },
        {
          "t": "diagram",
          "kind": "tree",
          "kicker": "DIAGRAM · TAP A TREE, READ THE PATHS",
          "chips": ["COIN THEN DIE", "TWO DICE", "NO REPLACEMENT"],
          "captions": [
            "Toss a coin, then roll a die. Two branches at the first level, six at every second level, and each complete path from root to leaf is one ordered outcome such as (H, 3). Only the first branch is drawn in full and the other carries a multiplier badge, because twelve drawn leaves teach nothing the collapsed picture does not. Count the leaves and you have n(S) = 12.",
            "A red die and a blue die, with the ordered pair (red, blue) recorded. Six branches fan out for the red die and six more from each of them for the blue, giving 36 ordered outcomes. This is the sample space behind almost every two-dice question you will ever be asked, so it is worth knowing its size by reflex.",
            "A bag holding one green, one yellow and one black ball. Two are drawn in succession without replacement and the ordered pair is recorded. The first level has three branches, but the second has only two, because the ball already drawn is gone. Without replacement is exactly this thinning of the tree, and it shrinks the sample space from nine to six."
          ],
          "frames": [
            {
              "tree": {
                "root": "toss, roll",
                "levels": [
                  { "label": "Coin", "count": 2, "names": ["H", "T"] },
                  { "label": "Die", "count": 6 }
                ],
                "total": "2 × 6 = 12"
              }
            },
            {
              "tree": {
                "root": "two dice",
                "levels": [
                  { "label": "Red die", "count": 6, "names": ["1", "2", "3", "4", "5", "6"] },
                  { "label": "Blue die", "count": 6 }
                ],
                "total": "6 × 6 = 36"
              }
            },
            {
              "tree": {
                "root": "the bag",
                "levels": [
                  { "label": "First draw", "count": 3, "names": ["Green", "Yellow", "Black"] },
                  { "label": "Second draw", "count": 2 }
                ],
                "total": "3 × 2 = 6"
              }
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · SIZE OF A STAGED SAMPLE SPACE",
          "tag": "the check on a hand-built list",
          "main": "n(S) = m<sub>1</sub> × m<sub>2</sub> × ⋯ × m<sub>k</sub>",
          "legend": [
            "<i>k</i> stages, with <i>m<sub>i</sub></i> outcomes available at stage <i>i</i>, given the earlier stages.",
            "With replacement, every stage sees the same count. Without replacement, each stage loses one, so <i>m</i>(<i>m</i> − 1)(<i>m</i> − 2) ⋯ instead of <i>m</i><sup>k</sup>."
          ],
          "note": "This is the Fundamental Principle of Counting from Chapter 6, used here purely as an audit. Build the list by hand, then check its length against this product. A mismatch means you missed a branch or wrote one twice."
        },
        {
          "t": "proc",
          "title": "Constructing a sample space",
          "steps": [
            "<b>Ask what is recorded on each trial.</b> Colour and number, or just number? A different answer gives a different <i>S</i>, and the rest of the question inherits that choice silently.",
            "<b>Single stage: list every distinct outcome once.</b> For a die, {1, 2, 3, 4, 5, 6}. Once each, none missing, is the whole requirement.",
            "<b>Multi-stage: draw the tree.</b> Branch for stage 1, sub-branch for stage 2, and read each root-to-leaf path as one ordered outcome. The tree mechanically guarantees you neither miss a combination nor write one twice, which are the only two ways this question is lost.",
            "<b>Read for the phrase “without replacement”.</b> Without it, an object can repeat and the tree stays full width. With it, the drawn object is gone and every later level loses one branch.",
            "<b>Audit <i>n</i>(<i>S</i>) against the product.</b> If your hand-built list and <i>m</i><sub>1</sub> × <i>m</i><sub>2</sub> × ⋯ disagree, trust the product and go find the branch you dropped."
          ]
        },
        {
          "t": "p",
          "html": "One warning about the word <b>outcome</b>, because the next topic depends on it. An outcome is a single point of <i>S</i>, one complete result of one trial. Rolling a 4 is an outcome. “Rolling an even number” is <b>not</b> an outcome, it is a whole handful of them, and it needs the machinery of Topic 02. Keep the two words apart from the very first line you write."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A fair spinner is divided into 8 equal sectors numbered 1 to 8 and is spun once. Write the sample space, and state <i>n</i>(<i>S</i>).",
          "steps": [
            "What is recorded is the sector number, one per spin, so the experiment is single-stage.",
            "Every sector is a possible outcome, listed exactly once."
          ],
          "ans": "S = {1, 2, 3, 4, 5, 6, 7, 8}, n(S) = 8"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A coin is tossed and then a die is rolled. Write the sample space using a tree and state <i>n</i>(<i>S</i>).",
          "steps": [
            "Stage 1 has 2 branches (H, T); from each, stage 2 has 6.",
            "Read the paths: (H, 1), (H, 2), …, (H, 6), (T, 1), …, (T, 6).",
            "Audit: 2 × 6 = 12, and the list has 12 entries."
          ],
          "ans": "S = {(H, 1), …, (H, 6), (T, 1), …, (T, 6)}, n(S) = 12"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Three coins are tossed and the ordered triple of results is recorded. Write <i>S</i>, and the outcomes in which the number of heads is exactly two.",
          "steps": [
            "Three stages of 2 each, so <i>n</i>(<i>S</i>) = 2<sup>3</sup> = 8.",
            "<i>S</i> = {HHH, HHT, HTH, HTT, THH, THT, TTH, TTT}.",
            "Scan for two heads and one tail: HHT, HTH, THH."
          ],
          "ans": "n(S) = 8; exactly two heads is {HHT, HTH, THH}, three of the eight"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Two balls are drawn in succession <b>without replacement</b> from a bag holding one green, one yellow and one black ball, and the ordered pair is recorded. Write <i>S</i>.",
          "steps": [
            "Stage 1 has 3 branches. Stage 2 has only 2, because the first ball is not returned.",
            "Audit: 3 × 2 = 6. With replacement it would have been 3 × 3 = 9."
          ],
          "ans": "S = {(G, Y), (G, B), (Y, G), (Y, B), (B, G), (B, Y)}, n(S) = 6"
        },
        {
          "t": "mcq",
          "q": "A coin is tossed and a die is rolled. The number of outcomes in the sample space is:",
          "correct": 1,
          "opts": [
            {
              "label": "8",
              "nudge": "That is 2 + 6. Stages of one experiment combine by multiplying, not adding, because every one of the two coin results is available with every one of the six die faces."
            },
            {
              "label": "12",
              "nudge": null
            },
            {
              "label": "36",
              "nudge": "That is 6 × 6, the answer for two dice. The coin contributes 2 branches, not 6."
            },
            {
              "label": "64",
              "nudge": "You squared 8, compounding the error of adding 2 + 6 first. Build the tree: two branches, six sub-branches from each."
            }
          ],
          "solution": "Two stages with 2 and 6 outcomes: n(S) = 2 × 6 = 12, one for each root-to-leaf path of the tree."
        },
        {
          "t": "mcq",
          "q": "Two balls are drawn one after another <b>without replacement</b> from a bag of 4 distinguishable balls, and the ordered pair is recorded. Then <i>n</i>(<i>S</i>) is:",
          "correct": 1,
          "opts": [
            {
              "label": "16",
              "nudge": "4 × 4 is the with-replacement count. Without replacement the first ball is gone, so the second stage has only 3 branches."
            },
            {
              "label": "12",
              "nudge": null
            },
            {
              "label": "6",
              "nudge": "That is <sup>4</sup>C<sub>2</sub>, the number of unordered pairs. The question records an <b>ordered</b> pair, so (a, b) and (b, a) are two different outcomes."
            },
            {
              "label": "8",
              "nudge": "4 + 4 adds the stages instead of multiplying them, and it also ignores that the second stage has shrunk."
            }
          ],
          "solution": "Stage 1 in 4 ways, stage 2 in 3 (one ball has left the bag), and the pair is ordered: n(S) = 4 × 3 = 12."
        },
        {
          "t": "mcq",
          "q": "Which of the following is <b>not</b> a random experiment?",
          "correct": 2,
          "opts": [
            {
              "label": "Tossing a coin twice and noting the ordered pair",
              "nudge": "The result is genuinely uncertain and the four possible results are listable in advance, which is exactly what the definition asks for."
            },
            {
              "label": "Drawing one card from a well-shuffled deck",
              "nudge": "Uncertain result, 52 listable outcomes. This is the standard example of a random experiment, not a counterexample."
            },
            {
              "label": "Adding 2 and 3",
              "nudge": null
            },
            {
              "label": "Noting whether the 8:10 local is on time",
              "nudge": "You cannot predict it, and the outcomes on time or late are listable. Uncertainty about everyday events still counts."
            }
          ],
          "solution": "2 + 3 is always 5. There is no uncertainty in the result, so the first half of the definition fails and it is not a random experiment at all."
        },
        {
          "t": "mcq",
          "q": "A die is rolled twice and the ordered pair is recorded. In how many outcomes is the first roll <b>strictly greater</b> than the second?",
          "correct": 0,
          "opts": [
            {
              "label": "15",
              "nudge": null
            },
            {
              "label": "18",
              "nudge": "You halved 36. That would be right if every pair were either “first bigger” or “second bigger”, but the 6 equal pairs belong to neither, so it is (36 − 6)/2."
            },
            {
              "label": "21",
              "nudge": "That is 15 + 6, which counts “first at least as big”. The word <b>strictly</b> excludes the six doubles."
            },
            {
              "label": "30",
              "nudge": "That counts every pair with two different numbers, so it includes the 15 where the second roll is the bigger one."
            }
          ],
          "solution": "Of the 36 ordered pairs, 6 are equal. The remaining 30 split evenly by symmetry between first-bigger and second-bigger, giving 15 each."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Two coins are tossed and the ordered pair is recorded. Write <i>S</i> and state <i>n</i>(<i>S</i>).",
              "a": "<i>S</i> = {HH, HT, TH, TT}, <i>n</i>(<i>S</i>) = 4. HT and TH are different outcomes: the order of the tosses is recorded."
            },
            {
              "q": "[CBSE] A die is rolled and a coin is tossed. List the outcomes in which the die shows an even number.",
              "a": "{(2, H), (2, T), (4, H), (4, T), (6, H), (6, T)}, six of the twelve."
            },
            {
              "q": "[JEE Main] Two balls are drawn one after another without replacement from a box of 5 distinguishable balls, and the ordered pair is recorded. Find <i>n</i>(<i>S</i>).",
              "a": "5 × 4 = 20. With replacement it would be 5 × 5 = 25."
            },
            {
              "q": "[JEE Main] A coin is tossed. If it shows a head a die is rolled; if it shows a tail the coin is tossed again. Write <i>S</i>.",
              "a": "<i>S</i> = {(H, 1), (H, 2), (H, 3), (H, 4), (H, 5), (H, 6), (T, H), (T, T)}, <i>n</i>(<i>S</i>) = 8. The tree is lopsided, so no single product gives <i>n</i>(<i>S</i>): add the branches, 6 + 2."
            },
            {
              "q": "[JEE Advanced] Three balls of different colours are in an urn and two are drawn without replacement. Find <i>n</i>(<i>S</i>) when the order of drawing is recorded, and when it is not.",
              "a": "Ordered: 3 × 2 = 6. Unordered: 3, namely {G, Y}, {G, B}, {Y, B}. Same physical experiment, two different sample spaces, decided entirely by what you record."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Not asking what is recorded.</b> Colour only, number only, or both? Each gives a different <i>S</i>, and every later answer inherits the choice without complaint.",
            "<b>Ignoring “without replacement”.</b> It thins every level of the tree after the first. Three balls give 9 ordered pairs with replacement and only 6 without.",
            "<b>Collapsing an ordered outcome.</b> When stages are performed in a fixed order, (H, 4) and (4, H) are different outcomes. Writing them as an unordered set silently deletes half the sample space.",
            "<b>Listing an outcome twice, or missing one.</b> Both are invisible in a hand-written list. The product <i>m</i><sub>1</sub> × <i>m</i><sub>2</sub> × ⋯ is the audit that catches them.",
            "<b>Calling an event an outcome.</b> “An even number” is not a point of <i>S</i>. It is a collection of three of them."
          ]
        },
        {
          "t": "protip",
          "html": "draw the tree even when you are sure you can list it in your head. it costs ten seconds, it is the only method that cannot silently miss a branch, and in a two-stage question the examiner is usually testing whether you drew it."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "Random experiment = uncertain result, listable outcomes",
              "note": "2 + 3 = 5 fails the first half"
            },
            {
              "f": "S = set of all outcomes · ω = one outcome",
              "note": "n(S) counts them, each listed once"
            },
            {
              "f": "k stages: n(S) = m₁ × m₂ × ⋯ × m_k",
              "note": "audit your hand-built list against it"
            },
            {
              "f": "Without replacement thins every later level",
              "note": "3 balls: 9 ordered pairs become 6"
            },
            {
              "f": "(H, 4) ≠ (4, H)",
              "note": "staged outcomes are ordered"
            }
          ],
          "aids": [
            "draw the tree, count the leaves",
            "ask what is being recorded, first"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Events and the Algebra of Events",
      "chip": "02 EVENTS",
      "kalam": "an event is just a subset, nothing more",
      "blocks": [
        {
          "t": "p",
          "html": "Lay the six faces of a die on a table as six little cards. An <b>event</b> is you scooping up some of those cards, any selection you like, and saying “I care about these.” “The number is even” means you scoop up {2, 4, 6}. “The number is bigger than 4” means you scoop up {5, 6}. That is the whole idea, and it is the most important sentence in the chapter: <b>an event is a subset of the sample space</b>."
        },
        {
          "t": "p",
          "html": "Once you see events as subsets, every rule that follows is Chapter 1 set theory you already own. An event has <b>occurred</b> if the actual outcome is one of the cards you scooped up. Roll the die and get 4: the event “even” occurred, because 4 ∈ {2, 4, 6}. Get 3 and it did not, because 3 ∉ {2, 4, 6}. Occurrence is a membership test and nothing more."
        },
        {
          "t": "def",
          "term": "Event",
          "html": "Any subset <i>E</i> ⊆ <i>S</i> of the sample space, including the two extreme ones. It occurs exactly when the outcome <i>ω</i> of the trial satisfies <i>ω</i> ∈ <i>E</i>. When a question says “write the event”, it wants a <b>set</b>, even if that set holds one element: write {4}, never 4."
        },
        {
          "t": "think",
          "html": "an outcome is one card. an event is a handful of cards. the die decides which single card comes up, and you decide, in advance, which handful you were watching for."
        },
        {
          "t": "p",
          "html": "Two selections sit at the extremes. Scoop up <b>nothing</b> and no outcome can ever make your event occur: that is the <b>impossible event</b> ∅, such as “the die shows a 7”. Scoop up <b>everything</b> and some outcome must always make it occur: that is the <b>sure</b> or certain event <i>S</i>, such as “the die shows a number from 1 to 6”. In between, an event holding exactly one sample point is <b>simple</b> or elementary, and one holding more than one is <b>compound</b>."
        },
        {
          "t": "defgrid",
          "title": "The working vocabulary",
          "rows": [
            {
              "k": "Sample space",
              "v": "<i>S</i>, the set of all outcomes"
            },
            {
              "k": "Sample point",
              "v": "<i>ω</i>, a single element of <i>S</i>"
            },
            {
              "k": "Event",
              "v": "<i>E</i>, <i>A</i>, <i>B</i>, … any subset <i>E</i> ⊆ <i>S</i>"
            },
            {
              "k": "Impossible · sure",
              "v": "∅ (never occurs) · <i>S</i> (always occurs)"
            },
            {
              "k": "Simple · compound",
              "v": "exactly 1 sample point · more than 1"
            },
            {
              "k": "Counts",
              "v": "<i>n</i>(<i>S</i>), <i>n</i>(<i>A</i>) are plain whole numbers, never dimensioned"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE ALGEBRA OF EVENTS",
          "tag": "Chapter 1, renamed",
          "main": "A′ = S − A · A ∪ B = “or” · A ∩ B = “and”",
          "legend": [
            "<i>A</i>′ = {<i>ω</i> ∈ <i>S</i> : <i>ω</i> ∉ <i>A</i>} is the event <b>not <i>A</i></b>, everything in the box outside the circle.",
            "<i>A</i> ∪ <i>B</i> occurs when <b>at least one</b> of <i>A</i>, <i>B</i> occurs; <i>A</i> ∩ <i>B</i> occurs when <b>both</b> do.",
            "<i>A</i> − <i>B</i> = <i>A</i> ∩ <i>B</i>′ is “<i>A</i> but not <i>B</i>”, and (<i>A</i> ∪ <i>B</i>)′ = <i>A</i>′ ∩ <i>B</i>′ is “neither”, by De Morgan."
          ],
          "note": "Not one new symbol. Every operation here is the one you met in Sets, applied to subsets of S instead of subsets of a universal set. The words or, and, not are what change."
        },
        {
          "t": "diagram",
          "kind": "venn2",
          "kicker": "DIAGRAM · TAP AN OPERATION ON TWO EVENTS"
        },
        {
          "t": "def",
          "term": "Mutually exclusive events",
          "html": "<i>A</i> and <i>B</i> with <i>A</i> ∩ <i>B</i> = ∅: they cannot occur together on the same trial. On a die, “even” and “shows 3” are mutually exclusive; “even” and “greater than 4” are not, because 6 belongs to both. Drawn as a Venn diagram, mutually exclusive events are two circles that do not touch."
        },
        {
          "t": "def",
          "term": "Exhaustive events, and a partition",
          "html": "Events <i>E</i><sub>1</sub>, …, <i>E</i><sub>n</sub> are <b>exhaustive</b> if <i>E</i><sub>1</sub> ∪ ⋯ ∪ <i>E</i><sub>n</sub> = <i>S</i>: at least one of them must occur. If they are also pairwise mutually exclusive they form a <b>partition</b>, and then <b>exactly one</b> occurs, always. Both conditions are needed; neither implies the other."
        },
        {
          "t": "p",
          "html": "That last sentence is where marks are won. On a die, <i>A</i> = {1} and <i>B</i> = {2} are mutually exclusive but nowhere near exhaustive. <i>A</i> = {1, 2, 3} and <i>B</i> = {3, 4, 5, 6} are exhaustive but not mutually exclusive, since 3 sits in both. Test <i>A</i> ∩ <i>B</i> and <i>A</i> ∪ <i>B</i> <b>separately</b>, every time. One family always passes both tests: any event and its complement, since <i>A</i> ∩ <i>A</i>′ = ∅ and <i>A</i> ∪ <i>A</i>′ = <i>S</i>. So {<i>A</i>, <i>A</i>′} is a partition for every event <i>A</i> whatsoever, a fact worth memorising now because Topic 03 derives the complement law from it."
        },
        {
          "t": "p",
          "html": "Now the three phrases examiners weaponise. From the same <i>S</i>, <b>at least one</b>, <b>exactly one</b> and <b>at most one</b> produce three different subsets. Toss three coins: “at least one head” has 7 outcomes, “exactly one head” has 3, and “at most one head” has 4. They are not variations on a theme, they are three separate questions, and the only defence is to translate each one into a subset before touching any arithmetic."
        },
        {
          "t": "proc",
          "title": "Translating and testing events",
          "steps": [
            "<b>Write the full sample space first.</b> Never skip this, even when the event looks obvious. Every later step scans <i>S</i>, so an unwritten <i>S</i> is an unchecked one.",
            "<b>Scan every outcome and keep the ones that satisfy the condition.</b> The event is exactly that collection, written in braces.",
            "<b>Watch the quantifier word.</b> At least one, exactly one and at most one select three different collections from the same list.",
            "<b>Mutually exclusive? Compute <i>A</i> ∩ <i>B</i>.</b> Empty means yes. You do not need the whole intersection: one outcome in both kills it immediately.",
            "<b>Exhaustive? Compute <i>A</i> ∪ <i>B</i> ∪ ⋯</b> and compare with <i>S</i>. For a partition, both tests must pass, so run both."
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · HOW MANY EVENTS EXIST",
          "tag": "n outcomes in S",
          "main": "2<sup>n</sup> events · n simple · 2<sup>n</sup> − n − 1 compound",
          "legend": [
            "An event is any subset of an <i>n</i>-element set, and a set of size <i>n</i> has 2<sup>n</sup> subsets, so there are 2<sup>n</sup> events in all.",
            "Exactly <i>n</i> of them are singletons, and exactly one is ∅. Removing both leaves the compound events.",
            "Toss a coin twice: <i>n</i>(<i>S</i>) = 4, so 16 events, of which 4 are simple, 1 is impossible and 11 are compound."
          ],
          "note": "The count includes the impossible event and the sure event. Both are genuine events, and leaving them out is the standard way this question is dropped."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · DISJOINT PAIRS OF EVENTS, TAP A LINE",
          "steps": [
            {
              "eq": "each outcome gets one of three labels",
              "why": "Take an ordered pair of events (A, B) with A and B disjoint and neither empty. Every outcome of S is then in only A, in only B, or in neither. No outcome can be in both, and that restriction is the entire content of disjointness. So a disjoint ordered pair is nothing more than a way of labelling the n outcomes with three labels."
            },
            {
              "eq": "3ⁿ labellings in all",
              "why": "Each of the n outcomes chooses its label independently of the others, so the multiplication principle from Chapter 6 gives three choices n times over. This counts every disjoint ordered pair, including the ones we are about to throw away."
            },
            {
              "eq": "subtract 2ⁿ, then 2ⁿ again",
              "why": "A labelling makes A empty exactly when no outcome carries the only-A label, so each outcome has two labels left and there are 2 to the n such labellings. By the same argument there are 2 to the n making B empty. Both families have to go, since we want both events non-empty."
            },
            {
              "eq": "add 1 back",
              "why": "The single labelling that puts every outcome in neither makes A empty and B empty at once, so it was removed twice and must be restored once. This is inclusion-exclusion on two conditions, which Topic 04 states in full."
            },
            {
              "eq": "ordered pairs = 3ⁿ − 2 · 2ⁿ + 1",
              "why": "Collecting the three corrections. Every ordered pair of disjoint non-empty events is counted here exactly once."
            },
            {
              "eq": "unordered pairs = (3ⁿ − 2ⁿ⁺¹ + 1)/2",
              "why": "The pair {A, B} does not care which event was named first, and two disjoint non-empty sets can never be equal, so every unordered pair was counted exactly twice. Check it on n = 2 with S = {a, b}: the formula gives (9 − 8 + 1)/2 = 1, and the only disjoint non-empty pair really is {{a}, {b}}."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A die is rolled once. Let <i>A</i> = {1, 2, 3} and <i>B</i> = {3, 4, 5, 6}. Are <i>A</i> and <i>B</i> mutually exclusive? Exhaustive? A partition?",
          "steps": [
            "<i>A</i> ∩ <i>B</i> = {3} ≠ ∅, so they are <b>not</b> mutually exclusive.",
            "<i>A</i> ∪ <i>B</i> = {1, 2, 3, 4, 5, 6} = <i>S</i>, so they <b>are</b> exhaustive.",
            "A partition needs both, so this pair is not one."
          ],
          "ans": "Exhaustive but not mutually exclusive, so not a partition"
        },
        {
          "t": "ex",
          "tag": "CUET · SPEED TRAP",
          "q": "One card is drawn from a standard 52-card deck. Which pair of events is mutually exclusive? (i) King, Heart  (ii) Spade, red card  (iii) face card, Queen  (iv) even-numbered, black card",
          "steps": [
            "Do not enumerate. Hunt for a single card in both events and the option dies.",
            "(i) The King of Hearts is in both. (iii) Every Queen is a face card. (iv) The 2 of Spades is even and black.",
            "(ii) Spades are black and never red, so the overlap is genuinely empty."
          ],
          "ans": "(ii). One shared card is enough to kill an option, so never list the whole set"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Two distinguishable dice are rolled and (red, blue) is recorded. <i>A</i> = “sum is 7”, <i>C</i> = “sum is at least 11”. Write <i>A</i>, and decide whether <i>A</i> and <i>C</i> are mutually exclusive. Is {<i>A</i>, <i>A</i>′} a partition?",
          "steps": [
            "<i>n</i>(<i>S</i>) = 6 × 6 = 36. <i>A</i> = {(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1)}, so <i>n</i>(<i>A</i>) = 6.",
            "<i>C</i> = {(5, 6), (6, 5), (6, 6)}. Every pair in <i>C</i> sums to at least 11 and every pair in <i>A</i> sums to 7, so <i>A</i> ∩ <i>C</i> = ∅.",
            "For any event, <i>A</i> ∩ <i>A</i>′ = ∅ and <i>A</i> ∪ <i>A</i>′ = <i>S</i>."
          ],
          "ans": "A and C are mutually exclusive; {A, A′} is a partition, and it is one for every event"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A random experiment has a sample space with exactly <i>n</i> distinct outcomes, <i>n</i> ≥ 2. (a) How many events does it have? (b) How many are compound? (c) Evaluate both at <i>n</i> = 4, and count the events with exactly two outcomes.",
          "steps": [
            "(a) An event is any subset of an <i>n</i>-element set: 2<sup>n</sup> of them, ∅ and <i>S</i> included.",
            "(b) Compound means more than one point. Remove the <i>n</i> singletons and the one empty event: 2<sup>n</sup> − <i>n</i> − 1.",
            "(c) <i>n</i> = 4 gives 16 events, of which 4 + 1 = 5 are excluded, leaving 11 compound. Events with exactly two outcomes: <sup>4</sup>C<sub>2</sub> = 6."
          ],
          "ans": "2ⁿ events · 2ⁿ − n − 1 compound · at n = 4: 16, 11, and 6 two-element events"
        },
        {
          "t": "mcq",
          "q": "A die is rolled once. The events <i>A</i> = {1, 2, 3} and <i>B</i> = {3, 4, 5, 6} are:",
          "correct": 1,
          "opts": [
            {
              "label": "mutually exclusive only",
              "nudge": "They look like opposite halves, but 3 belongs to both, so the intersection is {3} and not ∅. Compute it, never eyeball it."
            },
            {
              "label": "exhaustive only",
              "nudge": null
            },
            {
              "label": "mutually exclusive and exhaustive",
              "nudge": "The reflex that exhaustive implies mutually exclusive. The union does fill <i>S</i>, but the sets still overlap at 3, so only one of the two tests passes."
            },
            {
              "label": "neither",
              "nudge": "You missed that the union is already all of <i>S</i>: {1, 2, 3} ∪ {3, 4, 5, 6} = {1, 2, 3, 4, 5, 6}."
            }
          ],
          "solution": "A ∪ B = S so they are exhaustive, while A ∩ B = {3} ≠ ∅ so they are not mutually exclusive. Exactly one of the two tests passes."
        },
        {
          "t": "mcq",
          "q": "For a sample space <i>S</i>, which statement is <b>always</b> true for every event <i>A</i>?",
          "correct": 2,
          "opts": [
            {
              "label": "<i>A</i> ∪ <i>A</i>′ = ∅",
              "nudge": "Union fills and intersection empties. Everything is either in <i>A</i> or outside it, so the union is all of <i>S</i>, the largest possible set, not the smallest."
            },
            {
              "label": "<i>A</i> ∩ <i>A</i>′ = <i>S</i>",
              "nudge": "This swaps the roles of ∪ and ∩. No outcome can be inside <i>A</i> and outside <i>A</i> at once, so the intersection is empty."
            },
            {
              "label": "<i>A</i> ∪ <i>A</i>′ = <i>S</i> and <i>A</i> ∩ <i>A</i>′ = ∅",
              "nudge": null
            },
            {
              "label": "<i>A</i> = <i>A</i>′",
              "nudge": "An event and its complement share no outcome at all, so they can only be equal if both are empty, which needs <i>S</i> itself to be empty."
            }
          ],
          "solution": "An event and its complement always partition S: their union is everything and their intersection is nothing. This is the fact the complement law is built on."
        },
        {
          "t": "mcq",
          "q": "A coin is tossed twice and the ordered pair is recorded. How many <b>compound</b> events does this experiment have?",
          "correct": 1,
          "opts": [
            {
              "label": "4",
              "nudge": "That is the number of simple events, one per outcome. Compound events are the ones you are left with after removing those."
            },
            {
              "label": "11",
              "nudge": null
            },
            {
              "label": "12",
              "nudge": "You removed the empty event but kept the four singletons. Compound excludes both: 16 − 4 − 1."
            },
            {
              "label": "16",
              "nudge": "That is every event, simple and impossible ones included. The word compound means strictly more than one sample point."
            }
          ],
          "solution": "n(S) = 4 so there are 2⁴ = 16 events. Remove the 4 simple events and the 1 impossible event: 16 − 4 − 1 = 11."
        },
        {
          "t": "mcq",
          "q": "Two events satisfy <i>A</i> ⊆ <i>B</i>. Then <i>A</i> ∩ <i>B</i> equals:",
          "correct": 1,
          "opts": [
            {
              "label": "∅",
              "nudge": "The reflex that two named events must be disjoint. Here they are as far from disjoint as possible: one contains the other."
            },
            {
              "label": "<i>A</i>",
              "nudge": null
            },
            {
              "label": "<i>B</i>",
              "nudge": "That is the <b>union</b>. Under <i>A</i> ⊆ <i>B</i> it is true that <i>A</i> ∪ <i>B</i> = <i>B</i>, but the intersection is the smaller set, not the bigger one."
            },
            {
              "label": "<i>S</i>",
              "nudge": "Nothing here says either event fills the sample space. <i>A</i> ⊆ <i>B</i> ⊆ <i>S</i> allows <i>B</i> to be far smaller than <i>S</i>."
            }
          ],
          "solution": "Every point of A is already in B, so the points common to both are exactly the points of A: A ∩ B = A."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CUET] A number is chosen from {10, 11, 12, …, 20}. Are “the number is prime” and “the number is even” mutually exclusive? Exhaustive?",
              "a": "Mutually exclusive: <b>yes</b>. The primes here are 11, 13, 17, 19, all odd, since the only even prime is 2 and 2 is not in the list. Exhaustive: <b>no</b>, 15 is neither."
            },
            {
              "q": "[CBSE] A die is rolled. Write “at least 5”, “exactly 5” and “at most 5” as subsets.",
              "a": "{5, 6}, {5} and {1, 2, 3, 4, 5}. Three phrases, three different events, one sample space."
            },
            {
              "q": "[JEE Main] Three coins are tossed. <i>E</i> = “exactly two heads”, <i>F</i> = “at most one head”. Are they mutually exclusive?",
              "a": "<i>E</i> = {HHT, HTH, THH}, <i>F</i> = {HTT, THT, TTH, TTT}. <i>E</i> ∩ <i>F</i> = ∅, so yes. They are not exhaustive, though: HHH is in neither."
            },
            {
              "q": "[JEE Main] A sample space has 6 outcomes. How many events contain one specified outcome <i>ω</i>?",
              "a": "2<sup>5</sup> = 32. Fix <i>ω</i> as included, then each of the other 5 outcomes is independently in or out."
            },
            {
              "q": "[JEE Advanced] How many ordered triples (<i>A</i>, <i>B</i>, <i>C</i>) of pairwise disjoint non-empty events exist in a sample space of <i>n</i> outcomes?",
              "a": "4<sup>n</sup> − 3 · 3<sup>n</sup> + 3 · 2<sup>n</sup> − 1. Four bins per outcome (only <i>A</i>, only <i>B</i>, only <i>C</i>, none), then inclusion-exclusion on the three “this one is empty” conditions."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Writing an outcome where a set was asked for.</b> “The event that the die shows 4” is {4}, not 4. Marks are lost on the braces alone.",
            "<b>Assuming mutually exclusive implies exhaustive, or the reverse.</b> They are independent conditions. Compute <i>A</i> ∩ <i>B</i> and <i>A</i> ∪ <i>B</i> separately, every time.",
            "<b>Blurring at least one, exactly one and at most one.</b> Three phrases, three different subsets of the same <i>S</i>, and examiners choose the wording deliberately.",
            "<b>Forgetting ∅ and <i>S</i> when counting events.</b> They are events, so 2<sup>n</sup> includes them, and “compound” excludes them plus the <i>n</i> singletons.",
            "<b>Reading mutually exclusive as independent.</b> Mutually exclusive is a statement about the <b>sets</b>, <i>A</i> ∩ <i>B</i> = ∅. Independence is a Class 12 statement about probabilities, and the two are nearly opposites."
          ]
        },
        {
          "t": "protip",
          "html": "to test mutually exclusive, do not compute the whole intersection. hunt for one outcome sitting in both events. find one and stop immediately, find none after a full scan and the answer is yes. a calculation turns into a one-second search."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "Event = subset of S",
              "note": "it occurs iff the outcome ω lies in it"
            },
            {
              "f": "∅ impossible · S sure · 1 point simple · more compound",
              "note": "all four are genuine events"
            },
            {
              "f": "A ∩ B = ∅ exclusive · ∪ Eᵢ = S exhaustive",
              "note": "both together is a partition"
            },
            {
              "f": "{A, A′} is a partition, always",
              "note": "for every event whatsoever"
            },
            {
              "f": "n outcomes: 2ⁿ events, 2ⁿ − n − 1 compound",
              "note": "n simple, and one impossible"
            }
          ],
          "aids": [
            "exclusive means empty intersection",
            "union fills, intersection empties",
            "at least, exactly, at most: never blur them"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "The Axioms and the Probability of an Event",
      "chip": "03 AXIOMS",
      "kalam": "no negative sand, one kilogram in total",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 02 taught you to lay out every outcome and scoop up the ones you care about. It never answered the obvious next question: <b>how likely is that event?</b> Roll a fair die and the chance of an even number is “three good faces out of six”, that is 3/6 = 1/2. Favourable outcomes over total outcomes is the <b>classical definition</b> of probability, and for fair dice and well-shuffled cards it is completely correct."
        },
        {
          "t": "p",
          "html": "But it hides three cracks. First, the recipe only works when every outcome is <b>equally likely</b>. Toss a drawing pin: there are two outcomes, point-up and point-down, and they are emphatically not equally likely, so “one out of two” is nonsense. Second, it collapses when there are infinitely many outcomes, since there is no finite total to divide by. Third and deepest, the phrase “equally likely” already means “equally probable”, so the definition uses the idea it is trying to define. That is a circle, and mathematicians dislike circles."
        },
        {
          "t": "p",
          "html": "The fix, given by A. N. Kolmogorov in 1933, was beautifully sneaky. Instead of defining what probability <b>is</b>, he listed the rules any sensible probability must obey, and declared anything obeying those rules to be a legitimate probability. That is the <b>axiomatic approach</b>. Geometry makes the same move: Euclid never defines “point” or “line” from scratch, he states what they must satisfy and reasons from there."
        },
        {
          "t": "think",
          "html": "picture one full kilogram of sand spread across the outcomes. each outcome gets some non-negative amount, possibly zero, and the whole sample space carries exactly one kilogram. the probability of an event is how much sand sits on the outcomes inside it. a fair die spreads it evenly, a loaded die piles it up on some faces, and both are legal."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE THREE AXIOMS",
          "tag": "Kolmogorov, finite S",
          "main": "P(A) ≥ 0 · P(S) = 1 · A ∩ B = ∅ ⇒ P(A ∪ B) = P(A) + P(B)",
          "legend": [
            "<b>Non-negativity.</b> No event carries negative sand.",
            "<b>Normalization.</b> The whole sample space carries exactly one unit, no more and no less.",
            "<b>Additivity.</b> For <b>mutually exclusive</b> events only, the sand in the union is the sum of the two piles. The disjointness condition is the entire content of the axiom."
          ],
          "note": "Stated here for finite sample spaces, which is all Class 11 needs. Everything else in this chapter, including the addition rule and every bound, is squeezed out of these three lines."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · PROBABILITY FROM SAMPLE POINTS",
          "tag": "how an assignment is built",
          "main": "P(E) = Σ P(ω<sub>i</sub>) over ω<sub>i</sub> ∈ E",
          "legend": [
            "Assign each sample point a number <i>P</i>(<i>ω<sub>i</sub></i>) ≥ 0 with Σ <i>P</i>(<i>ω<sub>i</sub></i>) = 1 over the whole of <i>S</i>.",
            "The probability of any event is then the total of the sand sitting on its own points, and nothing else needs assigning."
          ],
          "note": "This is how a loaded die, a biased coin or a weighted spinner is described. The equally likely case is one assignment among infinitely many, not the definition."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · TAP AN ASSIGNMENT ON SIX FACES",
          "chips": ["FAIR DIE", "LOADED BY FACE VALUE", "NOT A PROBABILITY"],
          "captions": [
            "A fair die. All six faces carry the same sand, one sixth each, so the dots sit on one flat level and the six of them total exactly 1. This is the only assignment for which favourable over total is a correct recipe, and it is the assumption hiding inside the words fair, unbiased and at random.",
            "A die loaded so that each face is as likely as its own number. The sand climbs steadily from 1/21 on the one to 6/21 on the six, and the six values still total 21/21 = 1, so both axioms hold and this is a perfectly legitimate probability. Favourable over total would give every face 1/6 here and would be wrong.",
            "An assignment that fails. The six values total exactly 1, which is what students check, but the sixth face carries −0.05 and sits below the axis. Non-negativity is violated, so this is not a probability at all. Scan for a negative value before you add anything up."
          ],
          "frames": [
            {
              "x": [0.4, 6.6],
              "y": [-0.1, 0.33],
              "points": [
                { "x": 1, "y": 0.1667, "label": "1/6" },
                { "x": 2, "y": 0.1667 },
                { "x": 3, "y": 0.1667 },
                { "x": 4, "y": 0.1667 },
                { "x": 5, "y": 0.1667 },
                { "x": 6, "y": 0.1667 }
              ]
            },
            {
              "x": [0.4, 6.6],
              "y": [-0.1, 0.33],
              "curves": [{ "c": "line", "m": 0, "k": 0.1667, "dash": true, "soft": true }],
              "points": [
                { "x": 1, "y": 0.0476, "label": "1/21" },
                { "x": 2, "y": 0.0952 },
                { "x": 3, "y": 0.1429 },
                { "x": 4, "y": 0.1905 },
                { "x": 5, "y": 0.2381 },
                { "x": 6, "y": 0.2857, "label": "6/21" }
              ]
            },
            {
              "x": [0.4, 6.6],
              "y": [-0.1, 0.33],
              "points": [
                { "x": 1, "y": 0.2 },
                { "x": 2, "y": 0.25 },
                { "x": 3, "y": 0.3 },
                { "x": 4, "y": 0.15 },
                { "x": 5, "y": 0.15 },
                { "x": 6, "y": -0.05, "label": "−0.05" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THREE LAWS FROM THE AXIOMS, TAP A LINE",
          "steps": [
            {
              "eq": "S ∪ ∅ = S, and S ∩ ∅ = ∅",
              "why": "The sure event and the impossible event are mutually exclusive, since nothing is in both, and their union is S itself. That is the only setup Axiom 3 accepts, so it is the only door in."
            },
            {
              "eq": "P(S) = P(S) + P(∅), so P(∅) = 0",
              "why": "Additivity applied to those two disjoint events, then cancel P(S) from both sides. An outcome that can never happen carries zero sand. The converse does not follow: the axioms permit an outcome to be assigned zero probability without it being impossible, since all Axiom 1 demands is that no assignment go negative."
            },
            {
              "eq": "A ∩ A′ = ∅ and A ∪ A′ = S",
              "why": "The partition fact from Topic 02, true for every event whatsoever. It is the reason the complement law needs no extra assumption, no fairness and no counting."
            },
            {
              "eq": "P(A) + P(A′) = P(S) = 1",
              "why": "Axiom 3 on the disjoint pair A and A′, then Axiom 2 on their union. Rearranged, P(A′) = 1 − P(A). This is the single most useful line in the chapter: whenever at least one is hard, compute none and subtract."
            },
            {
              "eq": "0 ≤ P(A) ≤ 1",
              "why": "The lower bound is Axiom 1 directly. For the upper bound, P(A) = 1 − P(A′) and P(A′) ≥ 0 by Axiom 1 applied to A′, so P(A) can never exceed 1. Every probability is trapped in this interval, with no exceptions, which makes it a free check on every answer you write."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE COMPLEMENT LAW",
          "tag": "the not rule",
          "main": "P(A′) = 1 − P(A)",
          "legend": [
            "<i>A</i>′ is the event that <i>A</i> does <b>not</b> occur, and the two probabilities always total 1.",
            "Special cases: <i>P</i>(∅) = 0 and <i>P</i>(<i>S</i>) = 1, since ∅ and <i>S</i> are complements of each other."
          ],
          "note": "Reach for this the instant a question says at least one. The opposite of at least one is none, which is almost always a single clean count instead of a pile of cases."
        },
        {
          "t": "p",
          "html": "Now put the classical recipe back where it belongs. Suppose all <i>n</i>(<i>S</i>) outcomes are equally likely, so each carries the same amount <i>p</i>. Normalization forces <i>n</i>(<i>S</i>) · <i>p</i> = 1, hence <i>p</i> = 1/<i>n</i>(<i>S</i>), and an event holding <i>n</i>(<i>A</i>) points carries <i>n</i>(<i>A</i>) copies of it. So <b><i>P</i>(<i>A</i>) = <i>n</i>(<i>A</i>)/<i>n</i>(<i>S</i>) is a theorem, not a definition</b>, and it is only true under the equally likely assumption. Forget that caveat, apply it to a loaded die, and you will get a wrong answer that looks entirely right."
        },
        {
          "t": "def",
          "term": "Equally likely outcomes",
          "html": "An assignment in which every sample point carries the same probability. It is what the words <b>fair</b>, <b>unbiased</b>, <b>identical</b> and <b>at random</b> are promising you. If a question withholds all four of those words and instead describes a weighting, the favourable-over-total formula is off the table and you must sum the individual <i>P</i>(<i>ω<sub>i</sub></i>) instead."
        },
        {
          "t": "defgrid",
          "title": "Everything the axioms force",
          "rows": [
            {
              "k": "Range",
              "v": "0 ≤ <i>P</i>(<i>A</i>) ≤ 1, always"
            },
            {
              "k": "Impossible · sure",
              "v": "<i>P</i>(∅) = 0 · <i>P</i>(<i>S</i>) = 1"
            },
            {
              "k": "Complement",
              "v": "<i>P</i>(<i>A</i>′) = 1 − <i>P</i>(<i>A</i>)"
            },
            {
              "k": "Equally likely only",
              "v": "<i>P</i>(<i>A</i>) = <i>n</i>(<i>A</i>)/<i>n</i>(<i>S</i>)"
            },
            {
              "k": "Mutually exclusive",
              "v": "<i>P</i>(<i>A</i> ∪ <i>B</i>) = <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>)"
            },
            {
              "k": "Unit check",
              "v": "probabilities are pure numbers; the only check is “is it in [0, 1]?”"
            }
          ]
        },
        {
          "t": "proc",
          "title": "Testing a probability assignment",
          "steps": [
            "<b>Scan for a negative value first.</b> One negative kills the assignment instantly, by Axiom 1, and it takes a glance.",
            "<b>Add them all up.</b> The total must be exactly 1. Not 0.99, not 1.2. This is Axiom 2 and there is no tolerance in it.",
            "<b>If both pass, the assignment is legal</b>, however lopsided it looks. A die carrying 1/21 to 6/21 is as legitimate as a fair one.",
            "<b>To find a probability, sum the sand on the event's own points.</b> Do not divide by <i>n</i>(<i>S</i>) unless you have checked the outcomes are equally likely.",
            "<b>Check your answer lies in [0, 1].</b> A negative probability or one above 1 is an arithmetic error, full stop, and this catches it for free."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A box contains 4 red, 5 green and 3 blue marbles, identical apart from colour. One is drawn at random. Find <i>P</i>(red), <i>P</i>(not blue) and <i>P</i>(red or green).",
          "steps": [
            "<i>n</i>(<i>S</i>) = 4 + 5 + 3 = 12, and “identical apart from colour” plus “at random” makes them equally likely.",
            "<i>P</i>(red) = 4/12 = 1/3. <i>P</i>(blue) = 3/12 = 1/4, so <i>P</i>(not blue) = 1 − 1/4 = 3/4.",
            "Red and green are mutually exclusive, so add: 4/12 + 5/12 = 9/12 = 3/4."
          ],
          "ans": "1/3 · 3/4 · 3/4, and the last two agree because not blue is exactly red or green"
        },
        {
          "t": "ex",
          "tag": "CUET · SPEED TRAP",
          "q": "For <i>S</i> = {<i>ω</i><sub>1</sub>, <i>ω</i><sub>2</sub>, <i>ω</i><sub>3</sub>, <i>ω</i><sub>4</sub>}, which is a valid probability assignment? (i) 0.3, 0.3, 0.3, 0.3  (ii) 0.5, 0.2, −0.1, 0.4  (iii) 0.1, 0.2, 0.3, 0.4  (iv) 0.4, 0.4, 0.1, 0.2",
          "steps": [
            "Two tests only: no negatives, and a total of exactly 1.",
            "(ii) dies on sight: −0.1 < 0. (i) totals 1.2 and (iv) totals 1.1.",
            "(iii) is non-negative and totals 0.1 + 0.2 + 0.3 + 0.4 = 1.0."
          ],
          "ans": "(iii). Scan for a negative first, then add. Nothing fancier is ever required"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "One card is drawn from a well-shuffled deck of 52. Find <i>P</i>(a king), <i>P</i>(a red card) and <i>P</i>(not a face card).",
          "steps": [
            "Well shuffled means equally likely, so <i>P</i> = <i>n</i>(<i>A</i>)/52 throughout.",
            "Kings: 4/52 = 1/13. Red cards: 26/52 = 1/2.",
            "Face cards are J, Q, K in four suits, so 12 of them. Use the complement: 1 − 12/52 = 40/52 = 10/13."
          ],
          "ans": "1/13 · 1/2 · 10/13"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A die is loaded so that the probability of each face is proportional to the number on that face. Find <i>P</i>(<i>k</i>) for each face, and <i>P</i>(the number is prime).",
          "steps": [
            "Proportional to the face value means <i>P</i>(<i>k</i>) = <i>ck</i>. Normalization: <i>c</i>(1 + 2 + 3 + 4 + 5 + 6) = 21<i>c</i> = 1, so <i>c</i> = 1/21.",
            "The faces carry 1/21, 2/21, 3/21, 4/21, 5/21, 6/21, which total 21/21 = 1. Both axioms hold.",
            "Primes on a die are {2, 3, 5}. Sum their sand: (2 + 3 + 5)/21 = 10/21.",
            "Note that <i>n</i>(<i>A</i>)/<i>n</i>(<i>S</i>) would have given 3/6 = 1/2 here, and would be wrong."
          ],
          "ans": "P(k) = k/21 · P(prime) = 10/21, the case the classical recipe cannot touch"
        },
        {
          "t": "mcq",
          "q": "Which value can <b>never</b> be the probability of an event?",
          "correct": 3,
          "opts": [
            {
              "label": "0",
              "nudge": "0 is the probability of the impossible event, a legitimate endpoint. Probabilities are not required to be strictly between 0 and 1."
            },
            {
              "label": "2/3",
              "nudge": "That sits comfortably inside [0, 1] and is a perfectly ordinary probability."
            },
            {
              "label": "1",
              "nudge": "1 is the probability of the sure event, the other legitimate endpoint. Axiom 2 is exactly <i>P</i>(<i>S</i>) = 1."
            },
            {
              "label": "3/2",
              "nudge": null
            }
          ],
          "solution": "Every probability lies in [0, 1], derived from Axiom 1 plus the complement law. 3/2 > 1 breaks the upper bound, while 0 and 1 are the two endpoints and are perfectly legal."
        },
        {
          "t": "mcq",
          "q": "For an event <i>A</i> with <i>P</i>(<i>A</i>) = 0.35, the value of <i>P</i>(not <i>A</i>) is:",
          "correct": 1,
          "opts": [
            {
              "label": "0.35",
              "nudge": "This assumes an event and its complement are equally likely. They only are when both equal 0.5."
            },
            {
              "label": "0.65",
              "nudge": null
            },
            {
              "label": "1.35",
              "nudge": "You added to 1 instead of subtracting from it. The result is above 1, which the range check rejects on sight."
            },
            {
              "label": "cannot be determined",
              "nudge": "The complement law needs nothing but <i>P</i>(<i>A</i>). No sample space, no counts, no fairness assumption."
            }
          ],
          "solution": "P(A′) = 1 − P(A) = 1 − 0.35 = 0.65, straight from the axioms and independent of what S looks like."
        },
        {
          "t": "mcq",
          "q": "A die is loaded so that <i>P</i>(<i>k</i>) is proportional to <i>k</i>. Then <i>P</i>(6) is:",
          "correct": 1,
          "opts": [
            {
              "label": "1/6",
              "nudge": "That is the fair-die value. The whole point of a loaded die is that <i>n</i>(<i>A</i>)/<i>n</i>(<i>S</i>) no longer applies."
            },
            {
              "label": "6/21",
              "nudge": null
            },
            {
              "label": "1/21",
              "nudge": "1/21 is the constant of proportionality <i>c</i>, which happens to equal <i>P</i>(1). The six carries six times as much: 6<i>c</i>."
            },
            {
              "label": "6/36",
              "nudge": "36 is a two-dice count. Normalization here divides by 1 + 2 + 3 + 4 + 5 + 6 = 21, the total weight actually being shared out."
            }
          ],
          "solution": "P(k) = ck with 21c = 1, so c = 1/21 and P(6) = 6/21 = 2/7. Check the whole assignment totals 21/21 = 1."
        },
        {
          "t": "mcq",
          "q": "If <i>P</i>(<i>A</i>) = 0.45, is it possible that <i>P</i>(<i>A</i>′) = 0.45 as well?",
          "correct": 1,
          "opts": [
            {
              "label": "Yes, an event and its complement can carry equal probability",
              "nudge": "They can, but only when both are 0.5, since the two must total 1. At 0.45 each the total would be 0.90, and 0.10 of the sand would sit on no outcome at all."
            },
            {
              "label": "No, the complement law forces <i>P</i>(<i>A</i>′) = 0.55",
              "nudge": null
            },
            {
              "label": "Yes, provided <i>A</i> and <i>A</i>′ are mutually exclusive",
              "nudge": "<i>A</i> and <i>A</i>′ are always mutually exclusive, so this condition is free and rescues nothing. The failure is in the total, not in the overlap."
            },
            {
              "label": "It cannot be decided without knowing <i>n</i>(<i>S</i>)",
              "nudge": "The complement law is derived from the axioms alone and never mentions <i>n</i>(<i>S</i>). No information about the sample space is missing."
            }
          ],
          "solution": "P(A) + P(A′) = 1, so P(A′) = 1 − 0.45 = 0.55. The value 0.45 is impossible for A′; it would require P(A) = 0.55 instead."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CUET] If <i>P</i>(<i>A</i>) = 0.7 and <i>P</i>(<i>B</i>) = 0.5, can <i>A</i> and <i>B</i> be mutually exclusive? One line.",
              "a": "No. Mutually exclusive would give <i>P</i>(<i>A</i> ∪ <i>B</i>) = 0.7 + 0.5 = 1.2, and no probability may exceed 1."
            },
            {
              "q": "[CBSE] For <i>S</i> = {<i>ω</i><sub>1</sub>, <i>ω</i><sub>2</sub>, <i>ω</i><sub>3</sub>} the assignment is 1/2, 1/3, <i>k</i>. Find <i>k</i> and <i>P</i>({<i>ω</i><sub>1</sub>, <i>ω</i><sub>3</sub>}).",
              "a": "<i>k</i> = 1 − 1/2 − 1/3 = 1/6, which is non-negative so the assignment is valid. <i>P</i>({<i>ω</i><sub>1</sub>, <i>ω</i><sub>3</sub>}) = 1/2 + 1/6 = 2/3."
            },
            {
              "q": "[JEE Main] A coin is biased so that a head is twice as likely as a tail. It is tossed twice. Assign probabilities to HH, HT, TH, TT and find <i>P</i>(at least one head).",
              "a": "Per toss <i>P</i>(H) = 2/3, <i>P</i>(T) = 1/3. Counting the four ordered outcomes by their shares gives 4/9, 2/9, 2/9, 1/9, which total 1. <i>P</i>(at least one head) = 1 − <i>P</i>(TT) = 1 − 1/9 = 8/9."
            },
            {
              "q": "[JEE Main] A die is loaded so that <i>P</i>(<i>k</i>) is proportional to <i>k</i><sup>2</sup>. Find <i>P</i>(the number is even).",
              "a": "1<sup>2</sup> + 2<sup>2</sup> + ⋯ + 6<sup>2</sup> = 91, so <i>P</i>(<i>k</i>) = <i>k</i><sup>2</sup>/91. Even faces: (4 + 16 + 36)/91 = 56/91 = 8/13."
            },
            {
              "q": "[JEE Advanced] An assignment on a 4-point sample space reads 0.2, 0.5, 0.4, −0.1. Two students reject it for different reasons. Which one is right?",
              "a": "The values total exactly 1.0, so normalization holds and the student who objected to the total is wrong. The student who spotted −0.1 is right: Axiom 1 fails on its own, and one violated axiom is enough."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Using <i>n</i>(<i>A</i>)/<i>n</i>(<i>S</i>) on a loaded experiment.</b> That formula is a consequence of equal likelihood, not a definition. For a weighted die or a biased coin, sum the actual <i>P</i>(<i>ω<sub>i</sub></i>).",
            "<b>Checking only the total.</b> An assignment can sum to exactly 1 and still be illegal if one value is negative. Both axioms, every time.",
            "<b>Rejecting 0 and 1 as probabilities.</b> They are the impossible and sure events and are perfectly legitimate. Nothing requires a probability to be strictly between them.",
            "<b>Reporting a probability outside [0, 1].</b> That is an arithmetic error, not a strange answer. The range check is free and should run on every line.",
            "<b>Assuming two outcomes means one half each.</b> The drawing pin has two outcomes and no symmetry at all. Equally likely is a claim about the experiment, not about the size of <i>S</i>."
          ]
        },
        {
          "t": "protip",
          "html": "before you divide by n(S), find the word that licenses it. fair, unbiased, identical, at random, well-shuffled. if none of them is in the question, you are being handed a weighted sample space on purpose, and the marks are in noticing."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "P(A) ≥ 0 · P(S) = 1 · disjoint ⇒ P adds",
              "note": "the three axioms, everything else follows"
            },
            {
              "f": "P(E) = Σ P(ωᵢ) over ωᵢ ∈ E",
              "note": "assign the sand, then total it"
            },
            {
              "f": "P(∅) = 0 · P(A′) = 1 − P(A) · 0 ≤ P ≤ 1",
              "note": "derived, not assumed"
            },
            {
              "f": "P(A) = n(A)/n(S) only if equally likely",
              "note": "a theorem with a condition attached"
            },
            {
              "f": "Valid assignment: no negatives, totals one",
              "note": "check both, one is never enough"
            }
          ],
          "aids": [
            "no negative sand, one kilogram total",
            "at least one, so flip to none",
            "if it is outside 0 to 1, it is arithmetic"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Addition Rules and the Bounds They Force",
      "chip": "04 COMBINE",
      "kalam": "add the singles, subtract the overlap once",
      "blocks": [
        {
          "t": "p",
          "html": "Axiom 3 hands you the probability of a union only when the two events cannot happen together. Real questions rarely oblige. Ask a class how many read the sports page <b>or</b> the editorial and someone reads both, so adding the two counts records that student twice. The overlap has been paid for once inside <i>P</i>(<i>A</i>) and once inside <i>P</i>(<i>B</i>), and exactly one of those copies has to come back off."
        },
        {
          "t": "think",
          "html": "in the sand picture, P(A) + P(B) weighs the pile in the lens twice, once from each side. subtracting P(A ∩ B) is not a patch bolted on, it is you putting back the extra scoop you took."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE ADDITION RULE, TAP A LINE",
          "steps": [
            {
              "eq": "A ∪ B = A ∪ (B − A)",
              "why": "Everything in the union is either in A, or in B and outside A. Those two slabs share nothing by construction, and disjointness is the only situation Axiom 3 can speak about. The whole derivation is the work of carving an overlapping picture into disjoint pieces."
            },
            {
              "eq": "P(A ∪ B) = P(A) + P(B − A)",
              "why": "Axiom 3 applied to the two disjoint slabs of the first line. Nothing else has been used yet, and the unknown has moved from the union to the crescent of B outside A."
            },
            {
              "eq": "B = (A ∩ B) ∪ (B − A)",
              "why": "Now carve B itself the same way, into the part inside A and the part outside it. Again the two pieces are disjoint, so Axiom 3 applies to them too."
            },
            {
              "eq": "P(B − A) = P(B) − P(A ∩ B)",
              "why": "Additivity on the previous line gives P(B) = P(A ∩ B) + P(B − A), and rearranging isolates the crescent. Read on its own this is the rule for B but not A, which is worth remembering separately."
            },
            {
              "eq": "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
              "why": "Substitute the crescent into line two. The subtraction is not a correction bolted on afterwards: P(A) + P(B) weighs the sand in A ∩ B twice, once inside each event, so exactly one copy comes off."
            },
            {
              "eq": "if A ∩ B = ∅ it collapses to Axiom 3",
              "why": "Mutually exclusive events have P(A ∩ B) = 0, the last term vanishes, and the rule becomes P(A) + P(B). A derived formula that reduces to the axiom it came from is a formula you have derived correctly."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ADDITION RULE FOR TWO EVENTS",
          "tag": "no disjointness assumed",
          "main": "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
          "legend": [
            "<i>A</i> ∪ <i>B</i> is <b>at least one</b> of the two events. The subtracted term repairs the double count of the overlap.",
            "Mutually exclusive events have <i>P</i>(<i>A</i> ∩ <i>B</i>) = 0, and only then may the last term be dropped."
          ],
          "note": "Drop the overlap term only after you have checked the events cannot occur together. Dropping it by habit is the most expensive single error in the chapter."
        },
        {
          "t": "diagram",
          "kind": "venn3",
          "kicker": "DIAGRAM · TAP A REGION, READ ITS SHARE"
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THREE EVENTS, INCLUSION AND EXCLUSION",
          "tag": "add, subtract, add back",
          "main": "P(A ∪ B ∪ C) = Σ<sub>1</sub> − Σ<sub>2</sub> + Σ<sub>3</sub>",
          "legend": [
            "Σ<sub>1</sub> = <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) + <i>P</i>(<i>C</i>), the three singles.",
            "Σ<sub>2</sub> = <i>P</i>(<i>A</i> ∩ <i>B</i>) + <i>P</i>(<i>B</i> ∩ <i>C</i>) + <i>P</i>(<i>C</i> ∩ <i>A</i>), the three pairwise overlaps.",
            "Σ<sub>3</sub> = <i>P</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>), the centre, added back because subtracting the three pairs removed it one time too many."
          ],
          "note": "For n events the pattern continues with the sign flipping at every level: add the singles, subtract the pairs, add the triples, and so on, the k-fold sums carrying sign (−1) to the power k + 1. Topic 06 proves that general form by induction and puts it to work."
        },
        {
          "t": "defgrid",
          "title": "The derived identities examiners ask for",
          "rows": [
            {
              "k": "A but not B",
              "v": "<i>P</i>(<i>A</i>) − <i>P</i>(<i>A</i> ∩ <i>B</i>)"
            },
            {
              "k": "Neither A nor B",
              "v": "<i>P</i>(<i>A</i>′ ∩ <i>B</i>′) = 1 − <i>P</i>(<i>A</i> ∪ <i>B</i>), by De Morgan"
            },
            {
              "k": "Exactly one of A, B",
              "v": "<i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) − 2<i>P</i>(<i>A</i> ∩ <i>B</i>)"
            },
            {
              "k": "Exactly one of A, B, C",
              "v": "Σ<sub>1</sub> − 2Σ<sub>2</sub> + 3Σ<sub>3</sub>"
            },
            {
              "k": "At least one",
              "v": "the union itself, or 1 − <i>P</i>(none)"
            },
            {
              "k": "Exactly two of A, B, C",
              "v": "Σ<sub>2</sub> − 3Σ<sub>3</sub>"
            }
          ]
        },
        {
          "t": "p",
          "html": "Two of those rows deserve a sentence each. <b>Exactly one of <i>A</i>, <i>B</i></b> subtracts the overlap <i>twice</i>, not once, because an outcome in both events fails the condition and must be removed from each side. And <b>neither</b> is not a new idea at all: (<i>A</i> ∪ <i>B</i>)′ = <i>A</i>′ ∩ <i>B</i>′ is De Morgan from Chapter 1, so “neither” is just the complement of “at least one”. Compute the union first and subtract from 1."
        },
        {
          "t": "p",
          "html": "Now turn the addition rule around and it starts refusing to let you write nonsense. Rearranged, it reads <i>P</i>(<i>A</i> ∪ <i>B</i>) + <i>P</i>(<i>A</i> ∩ <i>B</i>) = <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>), and the right-hand side is fixed by the data. So the union and the intersection sit on a <b>see-saw</b>: every unit of probability you push into the overlap comes straight out of the union. Pin down the interval for one and you have the interval for the other for free."
        },
        {
          "t": "diagram",
          "kind": "numberline",
          "kicker": "DIAGRAM · TAP A POSITION, P(A) = 0.6 AND P(B) = 0.8",
          "chips": ["PUSHED APART", "NESTED", "THE TWO INTERVALS"],
          "captions": [
            "The whole track has length 1, event A occupies 0.6 of it and event B occupies 0.8. Slide them to opposite ends and they still cannot avoid each other: 0.6 plus 0.8 is 1.4, which overshoots the track by 0.4, so the amber piece is overlap the events are forced into. That forced amount is exactly Bonferroni's bound, P(A) + P(B) − 1.",
            "The other extreme. Slide the shorter bar entirely inside the longer one, which is the case A is a subset of B, and the overlap is the whole of A, 0.6. That is the largest it can ever be, because the overlap sits inside both events and so cannot exceed the smaller of them. Here the union is at its smallest, 0.8.",
            "The two intervals the previous frames produce, drawn on the same track. P(A intersect B) can be anywhere from 0.4 to 0.6, and P(A union B) anywhere from 0.8 to 1. The two intervals are mirror images about a fixed total of 1.4, which is the see-saw: push the overlap up by a tenth and the union drops by a tenth."
          ],
          "frames": [
            {
              "x": [0, 1],
              "intervals": [
                { "from": 0, "to": 0.6, "soft": true },
                { "from": 0.2, "to": 1, "soft": true },
                { "from": 0.2, "to": 0.6, "label": "forced overlap 0.4" }
              ]
            },
            {
              "x": [0, 1],
              "intervals": [
                { "from": 0, "to": 0.8, "soft": true },
                { "from": 0, "to": 0.6, "label": "overlap 0.6" }
              ]
            },
            {
              "x": [0, 1],
              "intervals": [
                { "from": 0.4, "to": 0.6, "label": "P(A ∩ B)" },
                { "from": 0.8, "to": 1, "label": "P(A ∪ B)" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE FOUR BOUNDS, TAP A LINE",
          "steps": [
            {
              "eq": "A ⊆ B ⇒ P(A) ≤ P(B)",
              "why": "Monotonicity. Carve B into the disjoint slabs A and B − A, so Axiom 3 gives P(B) = P(A) + P(B − A), and the second term is non-negative by Axiom 1. In the sand picture, a bigger heap cannot hold less sand. The implication runs one way only: P(A) ≤ P(B) does not make A a subset of B."
            },
            {
              "eq": "P(A ∩ B) ≤ min(P(A), P(B))",
              "why": "The overlap sits inside A and it sits inside B, so monotonicity applies twice over. The shared part can never be bigger than the smaller of the two events, which is the ceiling students remember."
            },
            {
              "eq": "P(A ∪ B) ≤ P(A) + P(B)",
              "why": "Boole's inequality. It is the addition rule with a non-negative term subtracted, so the union is never worse than the sum. Equality holds exactly when the events are mutually exclusive. Beware that this bound can be useless: if the sum exceeds 1, the real ceiling is 1."
            },
            {
              "eq": "P(A ∩ B) ≥ P(A) + P(B) − 1",
              "why": "Bonferroni. Rearrange the addition rule as P(A ∩ B) = P(A) + P(B) − P(A ∪ B) and use P(A ∪ B) ≤ 1. This is the floor exams attack, because it is the one nobody checks. Whenever P(A) + P(B) exceeds 1 the events are forced to overlap and cannot be mutually exclusive."
            },
            {
              "eq": "max(0, P(A) + P(B) − 1) ≤ P(A ∩ B) ≤ min(P(A), P(B))",
              "why": "The two floors and the ceiling assembled. The max is not decoration: when P(A) + P(B) is at most 1 the Bonferroni floor goes negative and useless, and the real floor is 0, attained by making the events mutually exclusive. Both endpoints are genuinely reachable, so greatest-value and least-value questions have the endpoints as their answers."
            },
            {
              "eq": "P(A ∪ B) + P(A ∩ B) = P(A) + P(B)",
              "why": "The see-saw identity, the addition rule rewritten. Since the right side is fixed, the interval for the union is the interval for the intersection reflected: subtract each endpoint from P(A) + P(B), swap the ends, and cap at 1. In an MCQ that halves the work."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE RANGE OF A UNION AND AN INTERSECTION",
          "tag": "given only P(A) and P(B)",
          "main": "max(P(A), P(B)) ≤ P(A ∪ B) ≤ min(1, P(A) + P(B))",
          "legend": [
            "and max(0, <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) − 1) ≤ <i>P</i>(<i>A</i> ∩ <i>B</i>) ≤ min(<i>P</i>(<i>A</i>), <i>P</i>(<i>B</i>)).",
            "<b>Maximum overlap</b> when one event sits inside the other. <b>Minimum overlap</b> when they are pushed as far apart as the track allows.",
            "Consistency test for supplied data: reject it if <i>P</i>(<i>A</i> ∩ <i>B</i>) falls outside its interval, or if <i>P</i>(<i>A</i> ∪ <i>B</i>) comes out above 1."
          ],
          "note": "A and B can be mutually exclusive only if P(A) + P(B) ≤ 1. That single line answers a whole family of CBSE one-mark questions."
        },
        {
          "t": "proc",
          "title": "Greatest and least values, and consistency",
          "steps": [
            "<b>Write down <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) first.</b> Everything below reads off that one number, and whether it exceeds 1 decides which floor is binding.",
            "<b>Floor for the overlap: max(0, <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) − 1).</b> Above 1, the events are forced to share. At or below 1, the floor is a plain 0.",
            "<b>Ceiling for the overlap: min(<i>P</i>(<i>A</i>), <i>P</i>(<i>B</i>)).</b> The shared part lives inside both events.",
            "<b>Get the union's interval for free.</b> Subtract each endpoint from <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>), swap the ends, and cap the top at 1.",
            "<b>To test supplied data, check the floor, not just the ceiling.</b> The ceiling is the one students remember and the floor is the one questions break."
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "For two events, <i>P</i>(<i>A</i>) = 0.6, <i>P</i>(<i>B</i>) = 0.5 and <i>P</i>(<i>A</i> ∩ <i>B</i>) = 0.3. Find <i>P</i>(<i>A</i> ∪ <i>B</i>), <i>P</i>(exactly one of <i>A</i>, <i>B</i>) and <i>P</i>(<i>A</i>′ ∩ <i>B</i>′).",
          "steps": [
            "Addition rule: 0.6 + 0.5 − 0.3 = 0.8.",
            "Exactly one removes the overlap from both sides: 0.6 + 0.5 − 2(0.3) = 0.5. Cross-check as 0.8 − 0.3 = 0.5.",
            "By De Morgan, <i>A</i>′ ∩ <i>B</i>′ = (<i>A</i> ∪ <i>B</i>)′, so 1 − 0.8 = 0.2."
          ],
          "ans": "0.8 · 0.5 · 0.2, and all three lie in [0, 1] as they must"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A number is chosen at random from 1 to 30. Find the probability that it is divisible by 3 or by 5.",
          "steps": [
            "Multiples of 3: 10 of them. Multiples of 5: 6. Both, that is multiples of 15: 2.",
            "The overlap is the multiples of the <b>lcm</b>, which is 15 here, not of 3 × 5 in general.",
            "<i>P</i> = (10 + 6 − 2)/30 = 14/30."
          ],
          "ans": "7/15. Counting the union means counting each number once, whatever it is divisible by"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "In a colony, <i>P</i>(reads <i>A</i>) = 0.5, <i>P</i>(<i>B</i>) = 0.4, <i>P</i>(<i>C</i>) = 0.3, with <i>P</i>(<i>A</i> ∩ <i>B</i>) = 0.2, <i>P</i>(<i>B</i> ∩ <i>C</i>) = 0.15, <i>P</i>(<i>C</i> ∩ <i>A</i>) = 0.1 and <i>P</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>) = 0.05. Find <i>P</i>(at least one paper) and <i>P</i>(exactly one paper).",
          "steps": [
            "Σ<sub>1</sub> = 1.2, Σ<sub>2</sub> = 0.45, Σ<sub>3</sub> = 0.05.",
            "At least one: 1.2 − 0.45 + 0.05 = 0.80.",
            "Exactly one: Σ<sub>1</sub> − 2Σ<sub>2</sub> + 3Σ<sub>3</sub> = 1.2 − 0.90 + 0.15 = 0.45.",
            "Structure check: at least one must be at least exactly one, and the gap 0.35 is everyone reading two or more."
          ],
          "ans": "0.80 and 0.45"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "For two events, <i>P</i>(<i>A</i>) = 0.6 and <i>P</i>(<i>B</i>) = 0.8. Find the greatest and least possible values of <i>P</i>(<i>A</i> ∩ <i>B</i>) and of <i>P</i>(<i>A</i> ∪ <i>B</i>), and give a sample space realising each extreme.",
          "steps": [
            "Floor: 0.6 + 0.8 − 1 = 0.4, which beats the trivial 0. Ceiling: min(0.6, 0.8) = 0.6.",
            "See-saw: <i>P</i>(<i>A</i> ∪ <i>B</i>) = 1.4 − <i>P</i>(<i>A</i> ∩ <i>B</i>), so it ranges over [0.8, 1.0].",
            "Take <i>S</i> = {1, 2, …, 10}, each outcome 0.1. Maximum overlap: <i>A</i> = {1, …, 6} inside <i>B</i> = {1, …, 8}.",
            "Minimum overlap: <i>A</i> = {1, …, 6}, <i>B</i> = {3, 4, …, 10}, so <i>A</i> ∩ <i>B</i> = {3, 4, 5, 6} and <i>A</i> ∪ <i>B</i> = <i>S</i>."
          ],
          "ans": "0.4 ≤ P(A ∩ B) ≤ 0.6 and 0.8 ≤ P(A ∪ B) ≤ 1. They cannot be made mutually exclusive"
        },
        {
          "t": "mcq",
          "q": "If <i>P</i>(<i>A</i>) = 0.6, <i>P</i>(<i>A</i> ∪ <i>B</i>) = 0.9 and <i>A</i>, <i>B</i> are mutually exclusive, then <i>P</i>(<i>B</i>) is:",
          "correct": 0,
          "opts": [
            {
              "label": "0.3",
              "nudge": null
            },
            {
              "label": "0.4",
              "nudge": "That is 1 − 0.6, which is <i>P</i>(<i>A</i>′). The complement of <i>A</i> is not the same as the part of the union outside <i>A</i>, unless the union happens to be all of <i>S</i>."
            },
            {
              "label": "1.5",
              "nudge": "You added 0.6 + 0.9. The union is already the larger quantity, so <i>P</i>(<i>B</i>) must be found by subtracting, and 1.5 fails the range check anyway."
            },
            {
              "label": "0.9",
              "nudge": "That copies <i>P</i>(<i>A</i> ∪ <i>B</i>) without using <i>P</i>(<i>A</i>) at all. If <i>P</i>(<i>B</i>) were 0.9 the union would be 1.5."
            }
          ],
          "solution": "Mutually exclusive means P(A ∪ B) = P(A) + P(B), so P(B) = 0.9 − 0.6 = 0.3. Note this pair is legal: 0.6 + 0.3 ≤ 1."
        },
        {
          "t": "mcq",
          "q": "If <i>P</i>(<i>A</i>) = 0.5, <i>P</i>(<i>B</i>) = 0.4 and <i>P</i>(<i>A</i> ∩ <i>B</i>) = 0.2, then <i>P</i>(<i>A</i>′ ∩ <i>B</i>′) is:",
          "correct": 1,
          "opts": [
            {
              "label": "0.1",
              "nudge": "That is 1 − 0.5 − 0.4, which subtracts the overlap twice: it is inside <i>P</i>(<i>A</i>) and inside <i>P</i>(<i>B</i>), so removing both strips it out once too often."
            },
            {
              "label": "0.3",
              "nudge": null
            },
            {
              "label": "0.7",
              "nudge": "You stopped at <i>P</i>(<i>A</i> ∪ <i>B</i>) = 0.7. The question asks for <b>neither</b>, which is one complement further on."
            },
            {
              "label": "0.9",
              "nudge": "That is 1 − <i>P</i>(<i>A</i> ∩ <i>B</i>), the complement of the wrong set. De Morgan turns <i>A</i>′ ∩ <i>B</i>′ into the complement of the <b>union</b>."
            }
          ],
          "solution": "P(A ∪ B) = 0.5 + 0.4 − 0.2 = 0.7, and by De Morgan P(A′ ∩ B′) = 1 − 0.7 = 0.3."
        },
        {
          "t": "mcq",
          "q": "For <i>P</i>(<i>A</i>) = 0.4 and <i>P</i>(<i>B</i>) = 0.75, the <b>least</b> possible value of <i>P</i>(<i>A</i> ∩ <i>B</i>) is:",
          "correct": 1,
          "opts": [
            {
              "label": "0",
              "nudge": "The trivial floor, but it is not reachable here. Since 0.4 + 0.75 = 1.15 overshoots the track of length 1, the events are forced to share 0.15."
            },
            {
              "label": "0.15",
              "nudge": null
            },
            {
              "label": "0.4",
              "nudge": "That is min(0.4, 0.75), the <b>greatest</b> possible overlap, reached when <i>A</i> sits inside <i>B</i>. You have quoted the other end of the interval."
            },
            {
              "label": "0.35",
              "nudge": "That is 0.75 − 0.4, the difference of the two probabilities. The floor is <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) − 1, a sum minus one, not a difference."
            }
          ],
          "solution": "Bonferroni gives P(A ∩ B) ≥ 0.4 + 0.75 − 1 = 0.15, which beats the trivial 0. The interval is [0.15, 0.4], and the union's is [0.75, 1]."
        },
        {
          "t": "mcq",
          "q": "A report claims 80% of a batch attend the morning session, 70% attend the evening session and 40% attend both. The data is:",
          "correct": 1,
          "opts": [
            {
              "label": "consistent, since 0.4 ≤ min(0.8, 0.7)",
              "nudge": "The ceiling is satisfied, and it is the only check most students run. The floor is the one that fails here, and it is the one exams aim at."
            },
            {
              "label": "inconsistent, since the overlap is below its floor",
              "nudge": null
            },
            {
              "label": "inconsistent, since the overlap is above its ceiling",
              "nudge": "The ceiling is min(0.8, 0.7) = 0.7 and 0.4 sits comfortably under it. The violated bound is the lower one."
            },
            {
              "label": "consistent only if the two events are mutually exclusive",
              "nudge": "With 0.8 + 0.7 = 1.5 above 1 the events cannot possibly be mutually exclusive, so this condition rescues nothing."
            }
          ],
          "solution": "Bonferroni gives P(A ∩ B) ≥ 0.8 + 0.7 − 1 = 0.5, and 0.4 is below that floor. Seen the other way, an overlap of 0.4 forces P(A ∪ B) = 1.1, which is impossible."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[JEE Main] Events satisfy <i>P</i>(<i>A</i>) = 0.4, <i>P</i>(<i>B</i>) = 0.35 and <i>P</i>(<i>A</i> ∪ <i>B</i>) = 0.6. Find <i>P</i>(<i>A</i> ∩ <i>B</i>) and <i>P</i>(neither).",
              "a": "<i>P</i>(<i>A</i> ∩ <i>B</i>) = 0.4 + 0.35 − 0.6 = 0.15, and <i>P</i>(neither) = 1 − 0.6 = 0.4."
            },
            {
              "q": "[JEE Main] A natural number is chosen at random from 1 to 100. Find the probability that it is divisible by 2 or by 5.",
              "a": "(50 + 20 − 10)/100 = 60/100 = 3/5. The overlap is the multiples of 10."
            },
            {
              "q": "[JEE Advanced] For three events <i>P</i>(<i>A</i>) = 0.6, <i>P</i>(<i>B</i>) = 0.5, <i>P</i>(<i>C</i>) = 0.4, with pairwise 0.3, 0.2, 0.25 and triple 0.1. Find <i>P</i>(at least one).",
              "a": "1.5 − 0.75 + 0.1 = 0.85."
            },
            {
              "q": "[JEE Advanced] <i>A</i> ⊆ <i>B</i> with <i>P</i>(<i>A</i>) = 0.35 and <i>P</i>(<i>B</i>) = 0.62. Find <i>P</i>(<i>A</i> ∩ <i>B</i>), <i>P</i>(<i>A</i> ∪ <i>B</i>) and <i>P</i>(<i>B</i> − <i>A</i>).",
              "a": "<i>A</i> ⊆ <i>B</i> gives <i>A</i> ∩ <i>B</i> = <i>A</i> and <i>A</i> ∪ <i>B</i> = <i>B</i>, so 0.35 and 0.62. Then <i>P</i>(<i>B</i> − <i>A</i>) = 0.62 − 0.35 = 0.27."
            },
            {
              "q": "[JEE Advanced] Three events each have probability 0.75. Find the least possible value of <i>P</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>).",
              "a": "The <i>n</i>-event Bonferroni bound is Σ <i>P</i>(<i>A<sub>i</sub></i>) − (<i>n</i> − 1), so 3(0.75) − 2 = 0.25."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Dropping −<i>P</i>(<i>A</i> ∩ <i>B</i>) by habit.</b> Remove it only after checking that the events cannot occur together. Overlapping events double-count the lens.",
            "<b>Subtracting the three pairs and stopping.</b> That removes the triple overlap one time too many. Always add <i>P</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>) back.",
            "<b>Answering “at least one” when “exactly one” was asked.</b> Exactly one subtracts each overlap twice for two events, and uses Σ<sub>1</sub> − 2Σ<sub>2</sub> + 3Σ<sub>3</sub> for three.",
            "<b>Checking only the ceiling on an overlap.</b> min(<i>P</i>(<i>A</i>), <i>P</i>(<i>B</i>)) is the bound everyone remembers. The Bonferroni floor is the one questions are built to break.",
            "<b>Multiplying probabilities.</b> <i>P</i>(<i>A</i> ∩ <i>B</i>) = <i>P</i>(<i>A</i>)<i>P</i>(<i>B</i>) requires independence, which is a Class 12 idea this chapter never establishes. In Class 11 an intersection is given, counted or derived, never multiplied."
          ]
        },
        {
          "t": "protip",
          "html": "work out the interval for P(A ∩ B) and you have the interval for P(A ∪ B) for nothing. subtract each endpoint from P(A) + P(B), swap the two ends over, cap the top at 1. one identity, two answers, half the work in an mcq."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
              "note": "drop the last term only if disjoint"
            },
            {
              "f": "Three events: Σ₁ − Σ₂ + Σ₃",
              "note": "in, out, in, and keep going for n"
            },
            {
              "f": "Exactly one: P(A) + P(B) − 2P(A ∩ B)",
              "note": "for three: Σ₁ − 2Σ₂ + 3Σ₃"
            },
            {
              "f": "P(A′ ∩ B′) = 1 − P(A ∪ B)",
              "note": "neither is the complement of at least one"
            },
            {
              "f": "max(0, P(A) + P(B) − 1) ≤ P(A ∩ B) ≤ min(P(A), P(B))",
              "note": "and the union is the mirror of it"
            },
            {
              "f": "P(A ∪ B) + P(A ∩ B) = P(A) + P(B)",
              "note": "the see-saw, fixed total"
            }
          ],
          "aids": [
            "or adds, and subtracts once",
            "in, out, in",
            "check the floor, not just the ceiling"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Counting Your Way to a Probability",
      "chip": "05 COUNT",
      "kalam": "the formula never asked you to list them",
      "blocks": [
        {
          "t": "p",
          "html": "So far every sample space has been small enough to write down. Now try this: five cards are dealt from a 52-card deck, what is the probability that the hand holds exactly one ace? The sample space has <sup>52</sup>C<sub>5</sub> = 2,598,960 outcomes. You are not going to list those in an examination hall, and nobody expects you to."
        },
        {
          "t": "think",
          "html": "read the formula again. P(E) = n(E)/n(S) never asked you to write the outcomes down, only to count them. and counting without listing is exactly what chapter 6 was for."
        },
        {
          "t": "p",
          "html": "So computing a probability becomes a two-part counting job: count the favourable outcomes, count the total outcomes, divide. The whole art is deciding <b>how</b> to count each, and the single decision that settles it is <b>does order matter?</b> A dealt hand is a set, so you count with <sup>n</sup>C<sub>r</sub>. A queue or a set of ranked positions is an arrangement, so you count with <sup>n</sup>P<sub>r</sub>."
        },
        {
          "t": "p",
          "html": "Here is the liberating part. As long as you count <i>n</i>(<i>E</i>) and <i>n</i>(<i>S</i>) <b>the same way</b>, both ordered or both unordered, the ratio comes out right either way. Pick whichever convention is easier and then hold it. Mixing them, <sup>n</sup>P<sub>r</sub> upstairs and <sup>n</sup>C<sub>r</sub> downstairs, is the single most expensive error in this topic, because the answer still looks like a probability."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · COMBINATORIAL PROBABILITY",
          "tag": "equally likely outcomes only",
          "main": "P(E) = n(E) / n(S)",
          "legend": [
            "Order irrelevant, a selection: <sup>n</sup>C<sub>r</sub> = <i>n</i>! / (<i>r</i>! (<i>n</i> − <i>r</i>)!) ways to choose <i>r</i> from <i>n</i>.",
            "Order matters, an arrangement: <sup>n</sup>P<sub>r</sub> = <i>n</i>! / (<i>n</i> − <i>r</i>)! ways.",
            "For an <b>and</b> condition across separate groups, multiply the per-group counts: choose men and women in <sup>m</sup>C<sub>i</sub> × <sup>w</sup>C<sub>j</sub> ways."
          ],
          "note": "Same currency top and bottom. That single discipline is what makes the ratio correct, and it is the one the pitfalls in this topic are all about."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · TAP AN EVENT ON THE TWO-DICE LATTICE",
          "chips": ["SUM = 7", "AT LEAST ONE SIX", "SUM = 8"],
          "captions": [
            "All 36 ordered pairs (red, blue), with the six favourable ones inked and the dashed line marking where red plus blue equals 7. Six of thirty-six is 1/6, and 7 is the only total with a full diagonal of six cells, which is why it is the most likely sum on two dice.",
            "At least one six is the last row together with the last column, eleven cells and not twelve, because the pair (6, 6) lies in both and must be counted once. So the probability is 11/36. Adding 1/6 and 1/6 gives 12/36 and is the classic double count this picture kills.",
            "The sum of 8 has only five cells, because the diagonal has slid off the corner of the board and (2, 6) through (6, 2) is all that fits. Compare it with the first frame: every sum other than 7 sits on a shorter diagonal, which is the whole story of the two-dice distribution."
          ],
          "frames": [
            {
              "x": [0.3, 6.7],
              "y": [0.3, 6.7],
              "curves": [{ "c": "line", "m": -1, "k": 7, "dash": true, "soft": true }],
              "points": [
                {"x":1,"y":1,"soft":true},
                {"x":1,"y":2,"soft":true},
                {"x":1,"y":3,"soft":true},
                {"x":1,"y":4,"soft":true},
                {"x":1,"y":5,"soft":true},
                {"x":2,"y":1,"soft":true},
                {"x":2,"y":2,"soft":true},
                {"x":2,"y":3,"soft":true},
                {"x":2,"y":4,"soft":true},
                {"x":2,"y":6,"soft":true},
                {"x":3,"y":1,"soft":true},
                {"x":3,"y":2,"soft":true},
                {"x":3,"y":3,"soft":true},
                {"x":3,"y":5,"soft":true},
                {"x":3,"y":6,"soft":true},
                {"x":4,"y":1,"soft":true},
                {"x":4,"y":2,"soft":true},
                {"x":4,"y":4,"soft":true},
                {"x":4,"y":5,"soft":true},
                {"x":4,"y":6,"soft":true},
                {"x":5,"y":1,"soft":true},
                {"x":5,"y":3,"soft":true},
                {"x":5,"y":4,"soft":true},
                {"x":5,"y":5,"soft":true},
                {"x":5,"y":6,"soft":true},
                {"x":6,"y":2,"soft":true},
                {"x":6,"y":3,"soft":true},
                {"x":6,"y":4,"soft":true},
                {"x":6,"y":5,"soft":true},
                {"x":6,"y":6,"soft":true},
                {"x":1,"y":6},
                {"x":2,"y":5},
                {"x":3,"y":4},
                {"x":4,"y":3},
                {"x":5,"y":2},
                {"x":6,"y":1}
              ]
            },
            {
              "x": [0.3, 6.7],
              "y": [0.3, 6.7],
              "points": [
                {"x":1,"y":1,"soft":true},
                {"x":1,"y":2,"soft":true},
                {"x":1,"y":3,"soft":true},
                {"x":1,"y":4,"soft":true},
                {"x":1,"y":5,"soft":true},
                {"x":2,"y":1,"soft":true},
                {"x":2,"y":2,"soft":true},
                {"x":2,"y":3,"soft":true},
                {"x":2,"y":4,"soft":true},
                {"x":2,"y":5,"soft":true},
                {"x":3,"y":1,"soft":true},
                {"x":3,"y":2,"soft":true},
                {"x":3,"y":3,"soft":true},
                {"x":3,"y":4,"soft":true},
                {"x":3,"y":5,"soft":true},
                {"x":4,"y":1,"soft":true},
                {"x":4,"y":2,"soft":true},
                {"x":4,"y":3,"soft":true},
                {"x":4,"y":4,"soft":true},
                {"x":4,"y":5,"soft":true},
                {"x":5,"y":1,"soft":true},
                {"x":5,"y":2,"soft":true},
                {"x":5,"y":3,"soft":true},
                {"x":5,"y":4,"soft":true},
                {"x":5,"y":5,"soft":true},
                {"x":1,"y":6},
                {"x":2,"y":6},
                {"x":3,"y":6},
                {"x":4,"y":6},
                {"x":5,"y":6},
                {"x":6,"y":1},
                {"x":6,"y":2},
                {"x":6,"y":3},
                {"x":6,"y":4},
                {"x":6,"y":5},
                {"x":6,"y":6}
              ]
            },
            {
              "x": [0.3, 6.7],
              "y": [0.3, 6.7],
              "curves": [{ "c": "line", "m": -1, "k": 8, "dash": true, "soft": true }],
              "points": [
                {"x":1,"y":1,"soft":true},
                {"x":1,"y":2,"soft":true},
                {"x":1,"y":3,"soft":true},
                {"x":1,"y":4,"soft":true},
                {"x":1,"y":5,"soft":true},
                {"x":1,"y":6,"soft":true},
                {"x":2,"y":1,"soft":true},
                {"x":2,"y":2,"soft":true},
                {"x":2,"y":3,"soft":true},
                {"x":2,"y":4,"soft":true},
                {"x":2,"y":5,"soft":true},
                {"x":3,"y":1,"soft":true},
                {"x":3,"y":2,"soft":true},
                {"x":3,"y":3,"soft":true},
                {"x":3,"y":4,"soft":true},
                {"x":3,"y":6,"soft":true},
                {"x":4,"y":1,"soft":true},
                {"x":4,"y":2,"soft":true},
                {"x":4,"y":3,"soft":true},
                {"x":4,"y":5,"soft":true},
                {"x":4,"y":6,"soft":true},
                {"x":5,"y":1,"soft":true},
                {"x":5,"y":2,"soft":true},
                {"x":5,"y":4,"soft":true},
                {"x":5,"y":5,"soft":true},
                {"x":5,"y":6,"soft":true},
                {"x":6,"y":1,"soft":true},
                {"x":6,"y":3,"soft":true},
                {"x":6,"y":4,"soft":true},
                {"x":6,"y":5,"soft":true},
                {"x":6,"y":6,"soft":true},
                {"x":2,"y":6},
                {"x":3,"y":5},
                {"x":4,"y":4},
                {"x":5,"y":3},
                {"x":6,"y":2}
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Solving any combinatorial probability problem",
          "steps": [
            "<b>Decide what one outcome is, and whether order matters.</b> A hand of cards, a committee, a group of balls drawn together: combinations. A queue, ranked posts, a sequence of draws: permutations.",
            "<b>Count <i>n</i>(<i>S</i>) in that convention.</b> Write it down before you look at the condition, so the denominator is settled and cannot drift.",
            "<b>Count <i>n</i>(<i>E</i>) in the same convention.</b> For an <b>and</b> condition spanning separate groups, multiply the group counts.",
            "<b>Divide, then check the answer lies in [0, 1].</b> A ratio above 1 almost always means the two counts were in different currencies.",
            "<b>Where you can, recount by a second convention.</b> If both models agree, the answer is right; if they do not, one of the two counts is."
          ]
        },
        {
          "t": "p",
          "html": "Now the highest-value shortcut in the whole chapter. <b>At least one</b> is a trap the complement defuses. “At least one ace” splits into one ace, two aces, three aces and four aces, which is four messy cases. Its opposite, “no ace at all”, is a single clean case. So compute the one and subtract. Train the reflex until it is automatic: <b>see “at least”, compute “none”</b>."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · AT LEAST ONE",
          "tag": "the biggest time-saver here",
          "main": "P(at least one) = 1 − P(none)",
          "legend": [
            "Straight from the complement law of Topic 03, so it costs no new assumption at all.",
            "For <i>n</i> repeats of the <b>same</b> equally likely draw, count in the product sample space: <i>P</i>(none) = (<i>s</i> − <i>k</i>)<sup>n</sup> / <i>s</i><sup>n</sup>, where <i>s</i> is the number of outcomes in one draw and <i>k</i> the number that hit the target."
          ],
          "note": "That power is a count of equally likely ordered lists, not a product of probabilities. It is not licence to multiply the probabilities of two different events, which needs independence, a Class 12 idea this chapter never establishes."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · AT LEAST ONE SIX IN n THROWS, TAP A LINE",
          "steps": [
            {
              "eq": "one throw: 6 equally likely faces",
              "why": "The die is fair, so every face carries the same sand and the classical recipe is licensed for a single throw. Nothing beyond Topic 03's equally likely theorem is used."
            },
            {
              "eq": "n throws: 6ⁿ ordered lists, all equally likely",
              "why": "An outcome of the whole experiment is an ordered list of n faces, and the multiplication principle gives 6 × 6 × ⋯ × 6 of them. Because the die is fair at every throw, no list is favoured over another, so the counting formula applies to the whole experiment and not merely to one throw."
            },
            {
              "eq": "no six at all: 5ⁿ of those lists",
              "why": "Every entry of the list must be one of the five non-six faces, so the same multiplication principle counts 5 to the n lists. This is a count of outcomes. Notice that nothing here multiplied any probabilities together."
            },
            {
              "eq": "P(no six) = 5ⁿ / 6ⁿ",
              "why": "Favourable over total, with both counted in the same currency: ordered lists on top, ordered lists below. The power appears because the sample space is a product, not because a rule allowed probabilities to be multiplied."
            },
            {
              "eq": "P(at least one six) = 1 − (5/6)ⁿ",
              "why": "The complement law finishes it. Put n = 2 and you get 1 − 25/36 = 11/36, which is exactly the eleven inked cells of the two-dice lattice, so the count and the picture agree."
            },
            {
              "eq": "n = 4: 1 − 625/1296 = 671/1296 ≈ 0.518",
              "why": "Just past even money on four throws, and the same method answers at least one head in three tosses, 1 − 1/8 = 7/8. Both are counts over a product sample space of equally likely lists, which is the only reading under which this shortcut is legitimate in Class 11."
            }
          ]
        },
        {
          "t": "def",
          "term": "Odds",
          "html": "A ratio of favourable to <b>unfavourable</b> outcomes, rather than favourable to total. Odds in favour of <i>E</i> are <i>n</i>(<i>E</i>) : <i>n</i>(<i>E</i>′), and odds against <i>E</i> are <i>n</i>(<i>E</i>′) : <i>n</i>(<i>E</i>), the same two numbers the other way round. Bookmakers and weather reports speak this language, so examiners do too."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ODDS AND PROBABILITY",
          "tag": "against puts the event second",
          "main": "odds in favour a : b ⇒ P(E) = a / (a + b)",
          "legend": [
            "Odds <b>against</b> <i>a</i> : <i>b</i> means unfavourable first, so <i>P</i>(<i>E</i>) = <i>b</i> / (<i>a</i> + <i>b</i>).",
            "Going the other way, if <i>P</i>(<i>E</i>) = <i>p</i>/<i>q</i> in lowest terms then the odds in favour are <i>p</i> : (<i>q</i> − <i>p</i>)."
          ],
          "note": "Odds 3 : 2 is not a probability of 3/2, which is impossible, and not 3/2 of anything. The total to divide by is the sum of the two numbers, never one of them."
        },
        {
          "t": "p",
          "html": "One last tool, for when outcomes can be neither assumed equally likely nor counted. What is the probability that a newborn calf survives? There is no symmetry to appeal to and nothing to enumerate, so you fall back on <b>empirical</b> or statistical probability: the long-run relative frequency <i>P</i>(<i>E</i>) ≈ <i>f</i>/<i>N</i>, the fraction of <i>N</i> trials in which <i>E</i> occurred. It steadies as <i>N</i> grows, and it is the honest answer where counting has nothing to bite on."
        },
        {
          "t": "defgrid",
          "title": "Which count, which conversion",
          "rows": [
            {
              "k": "Hand, committee, group drawn together",
              "v": "order irrelevant, use <sup>n</sup>C<sub>r</sub>"
            },
            {
              "k": "Queue, ranked posts, ordered draws",
              "v": "order matters, use <sup>n</sup>P<sub>r</sub>"
            },
            {
              "k": "And across groups",
              "v": "multiply: <sup>m</sup>C<sub>i</sub> × <sup>w</sup>C<sub>j</sub>"
            },
            {
              "k": "At least one",
              "v": "1 − <i>P</i>(none), almost always one clean count"
            },
            {
              "k": "Odds in favour a : b",
              "v": "<i>P</i> = <i>a</i>/(<i>a</i> + <i>b</i>) · odds against a : b ⇒ <i>P</i> = <i>b</i>/(<i>a</i> + <i>b</i>)"
            },
            {
              "k": "No symmetry, no count",
              "v": "empirical <i>P</i>(<i>E</i>) ≈ <i>f</i>/<i>N</i> for large <i>N</i>"
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A box holds 5 white and 4 black balls, identical apart from colour. Two are drawn at random together. Find <i>P</i>(both white) and <i>P</i>(one of each colour).",
          "steps": [
            "Drawn together, so order is irrelevant: <i>n</i>(<i>S</i>) = <sup>9</sup>C<sub>2</sub> = 36.",
            "Both white: <sup>5</sup>C<sub>2</sub> = 10, so <i>P</i> = 10/36 = 5/18.",
            "One of each is white <b>and</b> black, so multiply: <sup>5</sup>C<sub>1</sub> × <sup>4</sup>C<sub>1</sub> = 20, giving 20/36 = 5/9.",
            "Check: both black is <sup>4</sup>C<sub>2</sub> = 6, and 10 + 20 + 6 = 36 accounts for every outcome."
          ],
          "ans": "5/18 and 5/9"
        },
        {
          "t": "ex",
          "tag": "CUET · SPEED TRAP",
          "q": "The odds <b>against</b> a particular horse winning a race are 5 : 2. What is the probability that it wins?",
          "steps": [
            "Odds against means unfavourable : favourable, so the horse's own share is the <b>second</b> number.",
            "<i>P</i>(win) = 2/(5 + 2)."
          ],
          "ans": "2/7. The reflex error is 5/7, grabbing the first number; anchor it as against puts the event second"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A committee of 4 is chosen at random from 5 men and 6 women. Find <i>P</i>(exactly 2 men) and <i>P</i>(at least 1 woman).",
          "steps": [
            "A committee is unordered: <i>n</i>(<i>S</i>) = <sup>11</sup>C<sub>4</sub> = 330.",
            "Exactly 2 men means 2 men and 2 women: <sup>5</sup>C<sub>2</sub> × <sup>6</sup>C<sub>2</sub> = 10 × 15 = 150, so <i>P</i> = 150/330 = 5/11.",
            "At least 1 woman: take the complement, no women, so all 4 from the 5 men. <sup>5</sup>C<sub>4</sub> = 5, giving 5/330 = 1/66.",
            "<i>P</i>(at least 1 woman) = 1 − 1/66 = 65/66."
          ],
          "ans": "5/11 and 65/66"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Two fair dice are rolled. Find <i>P</i>(the sum is 8), <i>P</i>(at least one six) and <i>P</i>(the sum is at least 11).",
          "steps": [
            "<i>n</i>(<i>S</i>) = 36 ordered pairs, all equally likely.",
            "Sum 8: (2, 6), (3, 5), (4, 4), (5, 3), (6, 2), five cells, so 5/36.",
            "At least one six: the last row and last column share the cell (6, 6), so 6 + 6 − 1 = 11 cells, giving 11/36.",
            "Sum at least 11: (5, 6), (6, 5), (6, 6), so 3/36 = 1/12."
          ],
          "ans": "5/36 · 11/36 · 1/12, all three read straight off the lattice"
        },
        {
          "t": "mcq",
          "q": "A pair of fair dice is thrown. The probability that the sum is 8 is:",
          "correct": 0,
          "opts": [
            {
              "label": "5/36",
              "nudge": null
            },
            {
              "label": "1/6",
              "nudge": "That is 6/36, the count for a sum of 7. The diagonal for 8 has slid off the corner and only five cells survive."
            },
            {
              "label": "1/9",
              "nudge": "That is 4/36, one ordered pair short. (4, 4) is a single cell but it is still a cell, and it must be counted."
            },
            {
              "label": "7/36",
              "nudge": "You counted the sum itself rather than the cells. The number 8 has five ordered pairs, not seven."
            }
          ],
          "solution": "The favourable ordered pairs are (2, 6), (3, 5), (4, 4), (5, 3), (6, 2), five of the 36 cells, so P = 5/36."
        },
        {
          "t": "mcq",
          "q": "The odds <b>against</b> an event are 7 : 5. The probability of the event is:",
          "correct": 1,
          "opts": [
            {
              "label": "7/12",
              "nudge": "You read the first number as the favourable one. Under odds <b>against</b>, the first number counts the unfavourable outcomes."
            },
            {
              "label": "5/12",
              "nudge": null
            },
            {
              "label": "5/7",
              "nudge": "You divided by 7 instead of by the total 12. Odds compare favourable with unfavourable, so the denominator of the probability is their sum."
            },
            {
              "label": "7/5",
              "nudge": "That is the raw ratio, and it exceeds 1, so the range check rejects it before any reasoning is needed."
            }
          ],
          "solution": "Odds against 7 : 5 means unfavourable : favourable, so P(E) = 5/(7 + 5) = 5/12."
        },
        {
          "t": "mcq",
          "q": "Three fair coins are tossed. The probability of getting at least one head is:",
          "correct": 2,
          "opts": [
            {
              "label": "1/8",
              "nudge": "That is <i>P</i>(no head), the single outcome TTT. You computed the complement and forgot to subtract it from 1."
            },
            {
              "label": "3/8",
              "nudge": "That counts <b>exactly</b> one head, three of the eight outcomes. At least one also admits two heads and three heads."
            },
            {
              "label": "7/8",
              "nudge": null
            },
            {
              "label": "1/2",
              "nudge": "That is a single coin's intuition. With three tosses only one of the eight ordered outcomes has no head at all."
            }
          ],
          "solution": "Of the 8 equally likely ordered outcomes exactly one, TTT, has no head, so P(at least one head) = 1 − 1/8 = 7/8."
        },
        {
          "t": "mcq",
          "q": "Two fair dice are rolled. The probability of getting at least one six is:",
          "correct": 1,
          "opts": [
            {
              "label": "1/6",
              "nudge": "That is one die's answer. Two dice give 36 cells, and the six-bearing ones form a row and a column."
            },
            {
              "label": "11/36",
              "nudge": null
            },
            {
              "label": "1/3",
              "nudge": "That is 1/6 + 1/6, which counts the cell (6, 6) twice. Union means once each, so the count is 6 + 6 − 1 = 11."
            },
            {
              "label": "25/36",
              "nudge": "That is <i>P</i>(no six), the 25 cells with both dice under six. Subtract it from 1 to finish."
            }
          ],
          "solution": "Of the 36 cells, 5 × 5 = 25 avoid a six entirely, so P(at least one six) = 1 − 25/36 = 11/36."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] A bag holds 4 red and 6 green balls and three are drawn at random together. Find <i>P</i>(all three green).",
              "a": "<sup>6</sup>C<sub>3</sub>/<sup>10</sup>C<sub>3</sub> = 20/120 = 1/6."
            },
            {
              "q": "[CUET] The odds in favour of rain tomorrow are 2 : 3. Find <i>P</i>(rain) and <i>P</i>(no rain).",
              "a": "2/5 and 3/5. In favour, so the event's own share is the first number, and the two must total 1."
            },
            {
              "q": "[JEE Main] Five cards are drawn at random from a well-shuffled deck of 52. Find <i>P</i>(all five are hearts).",
              "a": "<sup>13</sup>C<sub>5</sub>/<sup>52</sup>C<sub>5</sub> = 1287/2598960 ≈ 4.95 × 10<sup>−4</sup>."
            },
            {
              "q": "[JEE Main] Two fair dice are rolled. Find <i>P</i>(the two dice show different numbers).",
              "a": "The six doubles are the only failures, so 30/36 = 5/6. Equivalently 1 − 6/36."
            },
            {
              "q": "[JEE Advanced] From 7 boys and 4 girls, five are chosen at random. Find <i>P</i>(at least 3 girls).",
              "a": "<i>n</i>(<i>S</i>) = <sup>11</sup>C<sub>5</sub> = 462. Exactly 3 girls: <sup>4</sup>C<sub>3</sub> × <sup>7</sup>C<sub>2</sub> = 84. Exactly 4: <sup>4</sup>C<sub>4</sub> × <sup>7</sup>C<sub>1</sub> = 7. So (84 + 7)/462 = 91/462 = 13/66. Here the complement is worse than the direct count, since it has three cases instead of two."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Mixing ordered and unordered counts.</b> <sup>n</sup>P<sub>r</sub> on top and <sup>n</sup>C<sub>r</sub> below gives a nonsense ratio that still looks like a probability. Pick one convention and hold it.",
            "<b>Brute-forcing “at least one”.</b> Summing the one-, two- and three-case answers is slow and error-prone when 1 − <i>P</i>(none) is a single line.",
            "<b>Adding 1/6 and 1/6 for at least one six.</b> That counts (6, 6) twice. Either subtract the overlap or use the complement.",
            "<b>Confusing odds with probability.</b> Odds 3 : 2 is not 3/2 and not 2/3. It is <i>P</i> = 3/5, and “against” swaps which number belongs to the event.",
            "<b>Applying <i>n</i>(<i>E</i>)/<i>n</i>(<i>S</i>) without the licence.</b> The words fair, unbiased or at random have to be there. A weighted draw sends you back to the axioms."
          ]
        },
        {
          "t": "protip",
          "html": "write n(S) down and box it before you read the condition. once the denominator is fixed on paper you cannot quietly change models halfway through, which is exactly how the mixed-currency error happens."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "P(E) = n(E)/n(S), same currency both sides",
              "note": "both ordered, or both unordered"
            },
            {
              "f": "Selection ⁿCᵣ · arrangement ⁿPᵣ",
              "note": "would reshuffling change the outcome?"
            },
            {
              "f": "P(at least one) = 1 − P(none)",
              "note": "n repeats of one draw: 1 − ((s − k)/s)ⁿ"
            },
            {
              "f": "Two dice: 36 cells · sum 7 has 6 · a six in 11",
              "note": "know this lattice by reflex"
            },
            {
              "f": "Odds a : b in favour ⇒ P = a/(a + b)",
              "note": "against puts the event second"
            },
            {
              "f": "Empirical P(E) ≈ f/N",
              "note": "when nothing can be counted or assumed"
            }
          ],
          "aids": [
            "count, do not list",
            "at least, so flip to none",
            "and across groups means multiply"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Ordered Counting, Mixed Models and the Matching Problem",
      "chip": "06 ARRANGE",
      "kalam": "one outcome can be a choice and an order at once",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 05 counted hands and committees, where order is irrelevant. Half of JEE Main's probability questions are the other kind: four-digit numbers with no repeated digit, the letters of a word laid out in a row, seven people in a queue. There an <b>outcome is one complete arrangement</b>, one specific number or line-up, and the sample space is an <sup>n</sup>P<sub>r</sub> or an <i>n</i>! count. Nothing about the method changes, only the currency."
        },
        {
          "t": "proc",
          "title": "Ordered-counting probability",
          "steps": [
            "<b>Say what one outcome is.</b> One number, one word-arrangement, one line-up. “The numbers formed” and “the sets of digits chosen” are different sample spaces of different sizes, and the question's wording picks one.",
            "<b>Count <i>n</i>(<i>S</i>) as an arrangement count.</b> <i>r</i> positions from <i>n</i> distinct objects gives <sup>n</sup>P<sub>r</sub>; all <i>n</i> objects with repeats <i>p</i><sub>1</sub>, <i>p</i><sub>2</sub>, … gives <i>n</i>!/(<i>p</i><sub>1</sub>! <i>p</i><sub>2</sub>! ⋯).",
            "<b>Fill the constrained position first.</b> A units digit that must be even, a leading digit that cannot be 0, a seat reserved for one person. Filling the free positions first forces needless cases.",
            "<b>If two constraints collide on one digit, split into cases.</b> When the even-units set and the large-leading set overlap, count each units digit separately and add.",
            "<b>For “no two <i>X</i> together”, use the gap method.</b> Arrange the <i>m</i> non-<i>X</i> objects first, then choose <i>X</i>-positions from the <i>m</i> + 1 gaps they create. Adjacency becomes impossible by construction, so no subtraction is needed."
          ]
        },
        {
          "t": "think",
          "html": "the gap method is a trick of order, not of arithmetic. put the ordinary objects down first, and the spaces between them are already the only legal homes for the ones that must stay apart."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · APART, AND TOGETHER",
          "tag": "the two seating conditions",
          "main": "no two together: (arrange m others) × <sup>m+1</sup>C<sub>k</sub>",
          "legend": [
            "<b>No two of the <i>k</i> special objects adjacent:</b> arrange the <i>m</i> others, then choose <i>k</i> of the <i>m</i> + 1 gaps. If the special objects are distinct, multiply by <i>k</i>! to order them within their chosen gaps.",
            "<b>All <i>k</i> together:</b> glue them into a single block and arrange the block with the others. The block carries an internal <i>k</i>! only if the glued objects are <b>distinct</b>; identical objects contribute a factor of 1."
          ],
          "note": "Together and not together are complements only for exactly two objects. With three or more there is a large middle ground of partially clumped arrangements, so P(no two together) is not 1 − P(all together)."
        },
        {
          "t": "p",
          "html": "Now the shape JEE Main likes most, which is neither a pure selection nor a pure arrangement. A team is picked <b>and</b> given ranked roles. Letters are chosen from a word and then arranged. Books are selected and then shelved. One outcome is a pair: <b>which</b> objects, and <b>in what order</b>. Count the two acts separately and multiply, <sup>n</sup>C<sub>r</sub> for the choosing and <i>r</i>! for the ordering, and the free identity <sup>n</sup>C<sub>r</sub> × <i>r</i>! = <sup>n</sup>P<sub>r</sub> checks your work for nothing."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · SELECTION AND ARRANGEMENT IN ONE OUTCOME",
          "tag": "which, then in what order",
          "main": "n(S) = <sup>n</sup>C<sub>r</sub> × r! = <sup>n</sup>P<sub>r</sub>",
          "legend": [
            "Apply <b>selection</b> conditions (exactly two girls) at stage one, and <b>position</b> conditions (the captain is a girl) at stage two, then multiply.",
            "When the chosen objects are not all distinct, the arrangement factor is <i>r</i>!/(<i>p</i><sub>1</sub>! <i>p</i><sub>2</sub>! ⋯). When repetition is allowed, stage two is <i>n</i><sup>r</sup> instead of <sup>n</sup>P<sub>r</sub>."
          ],
          "note": "If the event never mentions a position, the r! sits in n(E) and n(S) alike and cancels, so the pure selection model with nCr answers the question. Spotting that cancellation is worth more marks than performing it."
        },
        {
          "t": "p",
          "html": "One warning before the examples, because it decides answers rather than decorating them. “One of the distinct words that can be formed is chosen at random” and “three letter-tiles are drawn from a bag and laid in a row” are <b>different experiments</b> with different correct answers, whenever letters repeat. In the bag, the word MAT arises from 2 × 2 × 2 = 8 tile-sequences while HEI arises from exactly 1, so the distinct words are not equally likely there. Read the experiment, not the objects."
        },
        {
          "t": "defgrid",
          "title": "Which model am I in",
          "rows": [
            {
              "k": "Committee, hand, group",
              "v": "selection only, <sup>n</sup>C<sub>r</sub>"
            },
            {
              "k": "Number, word, queue",
              "v": "arrangement only, <sup>n</sup>P<sub>r</sub> or <i>n</i>!"
            },
            {
              "k": "Team plus ranked roles",
              "v": "both, <sup>n</sup>C<sub>r</sub> × <i>r</i>!"
            },
            {
              "k": "Pool with repeated letters",
              "v": "split the selection into cases, each with its own <i>r</i>!/(<i>p</i><sub>1</sub>! ⋯)"
            },
            {
              "k": "Repetition allowed",
              "v": "the arrangement stage is <i>n</i><sup>r</sup>"
            },
            {
              "k": "Word chosen vs tiles drawn",
              "v": "different sample spaces, different answers"
            }
          ]
        },
        {
          "t": "p",
          "html": "The last problem in the chapter earns its own name. <i>n</i> letters go at random into <i>n</i> correspondingly addressed envelopes, one each. What is the probability that <b>at least one</b> letter reaches the right envelope? Here the usual shortcut fails: “no letter correct” is itself the hard count, so the complement gives you nothing to start from. Inclusion-exclusion over the <i>n</i> events “letter <i>i</i> is correct” is what produces it, and then the complement hands you the other answer for free."
        },
        {
          "t": "def",
          "term": "Derangement",
          "html": "An arrangement in which <b>no</b> object sits in its own place, so no letter reaches its own envelope. The number of derangements of <i>m</i> objects is written <i>D<sub>m</sub></i>, and the small values are worth memorising: <i>D</i><sub>2</sub> = 1, <i>D</i><sub>3</sub> = 2, <i>D</i><sub>4</sub> = 9, <i>D</i><sub>5</sub> = 44. Exactly <i>r</i> letters correct is then <sup>n</sup>C<sub>r</sub> <i>D</i><sub>n−r</sub>: choose which <i>r</i> are right, then force the rest to be wrong."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE MATCHING PROBABILITY, TAP A LINE",
          "steps": [
            {
              "eq": "n(S) = n!, every insertion equally likely",
              "why": "An outcome is one way of putting n distinct letters into n envelopes, one per envelope, which is an arrangement of n distinct objects. The letters are inserted at random, so no arrangement is favoured."
            },
            {
              "eq": "Aᵢ = letter i lands in envelope i",
              "why": "At least one match is the union of A1 up to An, and a union is what inclusion-exclusion is for. The complement route is closed here, because no match is the hard count rather than the easy one."
            },
            {
              "eq": "k named letters correct: (n − k)! arrangements",
              "why": "Fixing k letters pins down k envelopes and leaves the other n − k letters free to be arranged among the remaining envelopes. So P of that k-fold intersection is (n − k)!/n!. Note this is a count. With n = 4, P(A1 ∩ A2) = 2!/4! = 1/12, while P(A1)P(A2) = 1/16: the events are not independent and multiplying would give the wrong number."
            },
            {
              "eq": "the k-th sum: nCk × (n − k)!/n! = 1/k!",
              "why": "There are nCk ways to name which k letters are correct, and every such intersection carries the same probability. The n! in the binomial coefficient cancels against the n! underneath, and the (n − k)! cancels too, leaving 1/k!. That cancellation is the reason this problem has a memorable answer at all."
            },
            {
              "eq": "P(at least one) = 1 − 1/2! + 1/3! − ⋯ + (−1)ⁿ⁺¹/n!",
              "why": "Inclusion-exclusion alternates the sums of k-fold intersections with sign (−1) to the power k + 1. The first term is nC1 × (n − 1)!/n! = 1, and every term after it is the 1/k! just derived."
            },
            {
              "eq": "n = 4: 1 − 1/2 + 1/6 − 1/24 = 5/8",
              "why": "Over the common denominator 24 this is (24 − 12 + 4 − 1)/24 = 15/24. So P(no match) = 3/8, meaning 9 of the 24 insertions are match-free, and those 9 are the derangements D4. For n = 3 the same sum gives 2/3, which is the NCERT case."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · TAP A READING OF THE MATCHING PROBLEM",
          "chips": ["AT LEAST ONE MATCH", "NO MATCH", "FIVE LETTERS, EVERY r"],
          "captions": [
            "The probability that at least one letter reaches its own envelope, plotted against the number of letters. It hardly moves: 0.667 at three letters, 0.625 at four, and from five onwards it is pinned to the dashed line at 1 minus one over e, about 0.632. With a hundred letters the answer is still about 0.632, so adding letters does not help.",
            "The complement, the probability that no letter is correct. It settles just as fast on one over e, about 0.368. The alternating series converges quickly because its k-th term is 1 over k factorial, so by k = 5 you are adding only 1/120.",
            "Five letters, the whole distribution. The probability of exactly r correct for r = 0 up to 5, over a denominator of 120: 44, 45, 20, 10, 0 and 1. The zero at r = 4 is not a slip. Four correct forces the fifth, so exactly four is impossible, and the six values total 120."
          ],
          "frames": [
            {
              "x": [1.4, 8.6],
              "y": [0, 0.8],
              "curves": [{ "c": "line", "m": 0, "k": 0.6321, "dash": true, "soft": true }],
              "points": [
                { "x": 2, "y": 0.5, "label": "1/2" },
                { "x": 3, "y": 0.6667, "label": "2/3" },
                { "x": 4, "y": 0.625, "label": "5/8" },
                { "x": 5, "y": 0.6333 },
                { "x": 6, "y": 0.6319 },
                { "x": 7, "y": 0.6321 },
                { "x": 8, "y": 0.6321 }
              ]
            },
            {
              "x": [1.4, 8.6],
              "y": [0, 0.8],
              "curves": [{ "c": "line", "m": 0, "k": 0.3679, "dash": true, "soft": true }],
              "points": [
                { "x": 2, "y": 0.5 },
                { "x": 3, "y": 0.3333, "label": "1/3" },
                { "x": 4, "y": 0.375, "label": "3/8" },
                { "x": 5, "y": 0.3667 },
                { "x": 6, "y": 0.3681 },
                { "x": 7, "y": 0.3679 },
                { "x": 8, "y": 0.3679 }
              ]
            },
            {
              "x": [-0.5, 5.5],
              "y": [0, 0.45],
              "points": [
                { "x": 0, "y": 0.3667, "label": "44" },
                { "x": 1, "y": 0.375, "label": "45" },
                { "x": 2, "y": 0.1667, "label": "20" },
                { "x": 3, "y": 0.0833, "label": "10" },
                { "x": 4, "y": 0, "label": "0" },
                { "x": 5, "y": 0.0083, "label": "1" }
              ]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Four-digit numbers with no repeated digit are formed from 1, 2, 3, 4, 5, 6, 7, and one is chosen at random. Find <i>P</i>(even) and <i>P</i>(divisible by 5).",
          "steps": [
            "An outcome is one four-digit number, so <i>n</i>(<i>S</i>) = <sup>7</sup>P<sub>4</sub> = 7 × 6 × 5 × 4 = 840.",
            "Even is decided by the units digit alone, so fill it first: 2, 4 or 6, three ways. The other three places take <sup>6</sup>P<sub>3</sub> = 120, giving 3 × 120 = 360 and <i>P</i> = 360/840 = 3/7.",
            "By symmetry every one of the seven digits is equally likely to land in the units place, and three of them are even, which gives 3/7 in one line.",
            "Divisible by 5 forces the units digit to be 5, one choice: 120/840 = 1/7."
          ],
          "ans": "3/7 and 1/7"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "The letters of ASSASSIN are arranged at random in a row. Find <i>P</i>(no two S are adjacent) and <i>P</i>(all four S occur together).",
          "steps": [
            "Eight letters with A twice and S four times: <i>n</i>(<i>S</i>) = 8!/(2! 4!) = 40320/48 = 840.",
            "No two S adjacent: arrange A, A, I, N in 4!/2! = 12 ways, creating 5 gaps, then choose 4 of them for the identical S in <sup>5</sup>C<sub>4</sub> = 5 ways. So 12 × 5 = 60 and <i>P</i> = 60/840 = 1/14.",
            "All four together: glue SSSS into one block and arrange 5 objects with A repeated, 5!/2! = 60, so <i>P</i> = 60/840 = 1/14.",
            "The block carries no internal 4!, because the four S are identical."
          ],
          "ans": "1/14 for both. Not a coincidence: each event fixes one of exactly 5 position-patterns for the S"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A team of 4 is chosen from 5 boys and 4 girls and the four are then given the distinct roles of captain, vice-captain, secretary and treasurer. Find <i>P</i>(exactly two girls) and <i>P</i>(exactly two girls with a girl as captain).",
          "steps": [
            "An outcome is a filled role-sheet: <i>n</i>(<i>S</i>) = <sup>9</sup>C<sub>4</sub> × 4! = 126 × 24 = 3024, and <sup>9</sup>P<sub>4</sub> = 3024 confirms it.",
            "Exactly two girls is a stage-one condition only: <sup>4</sup>C<sub>2</sub> × <sup>5</sup>C<sub>2</sub> × 4! = 60 × 24 = 1440, so <i>P</i> = 1440/3024 = 10/21.",
            "The roles were never mentioned, so the 4! cancels and 60/126 = 10/21 gives the same answer faster.",
            "With a girl as captain there is a stage-two condition: 60 teams, then 2 ways to seat a girl as captain and 3! = 6 for the rest, so 60 × 12 = 720 and <i>P</i> = 720/3024 = 5/21."
          ],
          "ans": "10/21 and 5/21, and the second is exactly half the first by symmetry"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Four letters are written and four envelopes correspondingly addressed. The letters are inserted at random, one per envelope. Find <i>P</i>(at least one is correct) and <i>P</i>(none is correct).",
          "steps": [
            "<i>n</i>(<i>S</i>) = 4! = 24 equally likely insertions.",
            "Inclusion-exclusion, counting each intersection: <sup>4</sup>C<sub>1</sub>(3!) − <sup>4</sup>C<sub>2</sub>(2!) + <sup>4</sup>C<sub>3</sub>(1!) − <sup>4</sup>C<sub>4</sub>(0!) = 24 − 12 + 4 − 1 = 15.",
            "<i>P</i>(at least one) = 15/24 = 5/8, matching 1 − 1/2! + 1/3! − 1/4!.",
            "<i>P</i>(none) = 1 − 5/8 = 3/8, so 9 of the 24 are derangements: <i>D</i><sub>4</sub> = 9."
          ],
          "ans": "5/8 and 3/8"
        },
        {
          "t": "mcq",
          "q": "Four-digit numbers with no repeated digit are formed from 1, 2, 3, 4, 5, 6, 7 and one is chosen at random. The probability that it is even is:",
          "correct": 1,
          "opts": [
            {
              "label": "1/2",
              "nudge": "Half would be right only if half the digits were even. Here 3 of the 7 available digits are even, and it is the digit pool, not the count of positions, that decides."
            },
            {
              "label": "3/7",
              "nudge": null
            },
            {
              "label": "3/4",
              "nudge": "You compared three even digits with four positions. Parity is decided by the units digit alone, so the comparison is three even digits against seven candidates for that one place."
            },
            {
              "label": "4/7",
              "nudge": "You counted the odd digits 1, 3, 5, 7 instead of the even ones. That is <i>P</i>(odd), the complement of the answer."
            }
          ],
          "solution": "Fill the units place first: 3 even choices, then ⁶P₃ = 120 for the rest, so 360/840 = 3/7. By symmetry each of the 7 digits is equally likely to land in the units place."
        },
        {
          "t": "mcq",
          "q": "Three letters are placed at random into three correspondingly addressed envelopes, one each. The probability that at least one letter is in its proper envelope is:",
          "correct": 2,
          "opts": [
            {
              "label": "1/3",
              "nudge": "That is <i>P</i>(no letter correct), the two cyclic shifts out of six arrangements. You computed the complement and stopped."
            },
            {
              "label": "1/2",
              "nudge": "A guess at even odds. Of the 6 arrangements of three letters, 4 have at least one match, not 3."
            },
            {
              "label": "2/3",
              "nudge": null
            },
            {
              "label": "1/6",
              "nudge": "That is <i>P</i>(all three correct), the single arrangement in which every letter is right. At least one is a far larger event."
            }
          ],
          "solution": "1 − 1/2! + 1/3! = 1 − 1/2 + 1/6 = 2/3. Checking by hand, n(S) = 6 and only the 2 derangements have no match, so 4/6 = 2/3."
        },
        {
          "t": "mcq",
          "q": "All the distinct three-letter arrangements formable from the letters of LEVEL are listed and one is chosen at random. The probability that its three letters are all different is:",
          "correct": 0,
          "opts": [
            {
              "label": "1/3",
              "nudge": null
            },
            {
              "label": "1/10",
              "nudge": "You divided by <sup>5</sup>P<sub>3</sub> = 60, which counts tile-sequences with the two L treated as different objects, while the numerator counts words. Two currencies, one fraction."
            },
            {
              "label": "1/2",
              "nudge": "This assumes the two cases split evenly. The all-different case gives 6 words and the doubled-letter case gives 12, so they do not."
            },
            {
              "label": "2/3",
              "nudge": "That is the probability of a <b>repeated</b> letter, 12 of the 18 words. You have quoted the complement."
            }
          ],
          "solution": "LEVEL has 3 symbols with L and E doubled. All different: 3! = 6. One letter doubled: 2 × 2 × 3!/2! = 12. So n(S) = 18 and P = 6/18 = 1/3."
        },
        {
          "t": "mcq",
          "q": "Five letters are placed at random into five correspondingly addressed envelopes. The probability that <b>exactly one</b> letter is correct is:",
          "correct": 1,
          "opts": [
            {
              "label": "1/5",
              "nudge": "One letter out of five is not a probability, it is a ratio of the wrong two things. The count needed is arrangements, not letters."
            },
            {
              "label": "3/8",
              "nudge": null
            },
            {
              "label": "11/30",
              "nudge": "That is <i>P</i>(no letter correct), <i>D</i><sub>5</sub>/5! = 44/120. Close in value and a different question."
            },
            {
              "label": "3/40",
              "nudge": "You used <i>D</i><sub>4</sub> = 9 over 120 but forgot the <sup>5</sup>C<sub>1</sub> choice of <b>which</b> letter is the correct one."
            }
          ],
          "solution": "Choose the one correct letter in ⁵C₁ = 5 ways and derange the other four in D₄ = 9 ways: 45/120 = 3/8."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Four boys and three girls stand in a row in random order. Find <i>P</i>(no two girls stand next to each other).",
              "a": "<i>n</i>(<i>S</i>) = 7! = 5040. Gap method: 4! × <sup>5</sup>C<sub>3</sub> × 3! = 24 × 10 × 6 = 1440, so <i>P</i> = 1440/5040 = 2/7. The girls are distinct, so the extra 3! is needed."
            },
            {
              "q": "[JEE Main] Five-digit numbers with no repeated digit are formed using all of 0, 1, 2, 3, 4, and may not begin with 0. One is chosen at random. Find <i>P</i>(even).",
              "a": "<i>n</i>(<i>S</i>) = 4 × 4! = 96. Units digit 0 gives 4! = 24; units digit 2 gives 3 × 3! = 18; units digit 4 gives 18. So 60/96 = 5/8."
            },
            {
              "q": "[JEE Main] From 6 men and 4 women, three are chosen and given the posts of chairperson, secretary and treasurer. Find <i>P</i>(the chairperson is a woman and the panel has exactly one woman).",
              "a": "<i>n</i>(<i>S</i>) = <sup>10</sup>C<sub>3</sub> × 3! = <sup>10</sup>P<sub>3</sub> = 720. Choose the woman chair in 4 ways, then fill the other two posts from the 6 men in <sup>6</sup>P<sub>2</sub> = 30: 120/720 = 1/6."
            },
            {
              "q": "[JEE Main] From 4 mathematics and 3 physics books, all different, five are chosen at random and arranged in a row. Find <i>P</i>(exactly three mathematics books are chosen and they stand together).",
              "a": "<i>n</i>(<i>S</i>) = <sup>7</sup>C<sub>5</sub> × 5! = <sup>7</sup>P<sub>5</sub> = 2520. Stage one: <sup>4</sup>C<sub>3</sub> × <sup>3</sup>C<sub>2</sub> = 12. Stage two: glue the three maths books, 3! for the block among the others and 3! inside it, since these are distinct. 12 × 36 = 432, so <i>P</i> = 6/35."
            },
            {
              "q": "[JEE Advanced] Five letters go into five addressed envelopes at random. Find <i>P</i>(exactly two correct), and check the whole distribution.",
              "a": "<sup>5</sup>C<sub>2</sub> <i>D</i><sub>3</sub> = 10 × 2 = 20, so 20/120 = 1/6. Across <i>r</i> = 0 to 5 the counts are 44, 45, 20, 10, 0, 1, which total 120. The 0 at <i>r</i> = 4 is real: four correct forces the fifth."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Mixing currencies across the bar.</b> Using <sup>7</sup>C<sub>4</sub> = 35 for <i>n</i>(<i>S</i>) while counting <i>n</i>(<i>E</i>) as arrangements gives a “probability” above 1, which is the fastest possible signal that the two counts disagree.",
            "<b>Multiplying a block of identical objects by <i>k</i>!.</b> The four S of ASSASSIN contribute a factor of 1, not 4!. Distinct objects inside a block do carry their internal <i>k</i>!.",
            "<b>Treating “all together” and “no two together” as complements.</b> True for exactly two objects, false for three or more, where a large partially clumped middle ground survives.",
            "<b>Applying a position condition at the selection stage.</b> “The captain is a girl” says nothing about which four people were picked. Pick first, then place.",
            "<b>Writing <sup>n</sup>C<sub>r</sub>(<i>n</i> − <i>r</i>)! for exactly <i>r</i> correct.</b> That counts <b>at least</b> <i>r</i>, with multiplicity. Exactly <i>r</i> needs the derangement factor: <sup>n</sup>C<sub>r</sub> <i>D</i><sub>n−r</sub>."
          ]
        },
        {
          "t": "protip",
          "html": "before building the bigger model, ask whether the event names a position at all. if it does not, the r! divides out and nCr alone answers it. recognising the cancellation is worth more than performing it, because it tells you the harder model was never needed."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "One outcome = one arrangement ⇒ n(S) = ⁿPᵣ or n!/(p₁! p₂! ⋯)",
              "note": "fill the constrained position first"
            },
            {
              "f": "No two together: arrange m others, choose from m + 1 gaps",
              "note": "together: glue into a block"
            },
            {
              "f": "Which, then in what order: ⁿCᵣ × r! = ⁿPᵣ",
              "note": "selection conditions first, position conditions second"
            },
            {
              "f": "Roles cancel when the event ignores them",
              "note": "then nCr alone is enough"
            },
            {
              "f": "P(at least one match) = 1 − 1/2! + 1/3! − ⋯",
              "note": "D₂ = 1, D₃ = 2, D₄ = 9, D₅ = 44"
            },
            {
              "f": "Exactly r correct = ⁿCᵣ D₍ₙ₋ᵣ₎ / n!",
              "note": "the limit is 1 − e⁻¹ ≈ 0.632"
            }
          ],
          "aids": [
            "same currency, top and bottom",
            "identical objects have no internal order",
            "count the intersection, never multiply it"
          ]
        }
      ]
    }
  ]
};

export default ch14Probability;
