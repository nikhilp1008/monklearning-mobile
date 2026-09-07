/**
 * Chapter 13 · Probability, Mathematics, Class 12.
 *
 * Restructured from pages 765 to 829 of the Drona Class 12 Mathematics Master
 * Reference into the block system in
 * design_handoff_textbooks/CONTENT_SPEC.md, matching the voice and density of
 * math-12-01-relations.ts. Pages 830 to 832 are the book's Errata and are not
 * chapter content.
 *
 * The source is two documents stacked: a typeset chapter of four subtopics
 * (01 conditional probability and independence, pages 766 to 773; 02 total
 * probability and Bayes, 774 to 781; 03 random variables and distributions,
 * 782 to 789; 04 Bernoulli trials and the binomial, 790 to 797) with a Master
 * Formula Sheet at 798 to 800, and a Round 2 Addendum of six inserts (A three
 * events and inclusion-exclusion, B pairwise versus mutual independence, C
 * chained Bayes and transfer experiments, D expectation beyond aX + b, E
 * waiting times and turn-taking, P a previous-year analysis with six
 * archetypes, fourteen traps and a ten-question graded set).
 *
 * SPLIT. Four subtopics is too few topics and six addenda is too many, so the
 * material is cut six ways along joints the source itself names:
 *
 *   - Subtopic 01 splits at the word "independent". Topic 01 is conditioning
 *     and the multiplication theorem, which is one formula read forwards and
 *     backwards; Topic 02 is independence, which is a test rather than a
 *     computation. The source's own Section 2 already separates them, and its
 *     Pitfall 1 exists precisely because students fuse them.
 *   - Addendum B (pairwise but not mutual) joins Topic 02, because it is the
 *     source's Section 2 warning about triples finally worked out, and
 *     Addendum A's independent-events shortcut joins it too: the three-shooter
 *     exactly-one question is an independence question wearing a union's hat.
 *   - Subtopic 02 splits at "in stages". Topic 03 is one partition and one
 *     piece of evidence; Topic 04 is Addendum C, where evidence arrives twice
 *     or where a transfer rewrites the likelihoods before the draw. The source
 *     flags the second as an Advanced Pro-Tip and then never demonstrates it
 *     inside the chapter proper.
 *   - Subtopic 03 plus Addendum D is Topic 05, and Subtopic 04 plus Addendum E
 *     is Topic 06. Waiting times sit with the binomial rather than alone,
 *     because the whole point of the geometric distribution here is that n is
 *     not fixed, which is the binomial's first condition failing.
 *   - Addendum P is not a topic. Its question-distribution table feeds the
 *     hook, its six archetypes feed worked examples (Archetype 1 into Topic
 *     04, 2 into Topic 02, 3 into Topic 06, 4 into Topic 01, 5 into Topic 05,
 *     6 into Topic 06), its fourteen traps feed the `mistakes` cards, and its
 *     graded set is spread across the practice blocks.
 *   - The Master Formula Sheet is not a topic either. It is already a
 *     checkpoint per subtopic, so it is distributed into the six `snapshot`
 *     blocks, which is the same object.
 *
 * DROPPED, BECAUSE CLASS 11 ALREADY TEACHES IT. The brief for this book is
 * that Class 12 assumes Class 11 and moves on.
 *
 *   1. Sample spaces, events, mutually exclusive and exhaustive families,
 *      partitions, the axioms, the complement law, the two-event addition rule
 *      and classical probability by counting are all in
 *      math-11-14-probability.ts, topics 01 to 05. Nothing here re-teaches
 *      them; Topic 01 opens by using P(A ∪ B) = P(A) + P(B) − P(A ∩ B) without
 *      deriving it, exactly as the source's own Example 2 does.
 *   2. Addendum A Steps 1 and 2, the three-event inclusion-exclusion
 *      derivation and the four-class tally table, are
 *      math-11-14-probability.ts topic 04, which proves the three-event
 *      addition theorem and states the n-event form. So Addendum A is not
 *      given a topic. What survives is the exactly-k identities as a formula
 *      card in Topic 02, restated for use rather than re-derived, and the
 *      independent-events specialisation, which needs Class 12's independence
 *      and is where the marks are. Class 11 states the exactly-one identity
 *      only inside a `mistakes` item, so the formula card here is a small gap
 *      filled rather than a repeat.
 *   3. The letters-and-envelopes matching problem, derangement counts, D₄ = 9
 *      and P(exactly r correct) = ⁿCᵣ D₍ₙ₋ᵣ₎ are math-11-14-probability.ts
 *      topic 06, which derives them by inclusion-exclusion and plots the
 *      1 − e⁻¹ limit. So Addendum P's graded question 9 (a derangement count
 *      dressed as probability) is dropped, and Addendum D's Example D.2 is
 *      kept only for the part Class 11 cannot compute: E(X) = 1 by indicators,
 *      in Topic 05.
 *
 * DROPPED FOR SYLLABUS. Addendum D derives Var(X) = 1 for the matching problem
 * through covariance, which is not on the Class 12 syllabus and which no Board
 * or JEE Main question needs. Topic 05 gives the indicator computation of the
 * mean, which is the mark-winning move, states Var(X) = 1 as a result and
 * verifies it at n = 2 by hand, as the source itself does. Covariance is named
 * once, in the variance-of-a-sum formula card, and not developed.
 *
 * FIGURES. Five `diagram` blocks, one per topic except Topic 04. The count
 * comes from reading the source, not from filling slots: the book explicitly
 * calls for three figures (13.1 a horizontal probability tree, 13.2 a bar
 * chart with a balance beam, 13.3 a bar chart of B(6, 0.8)), and its prose
 * reasons from two Venn pictures it never draws (Subtopic 01's "we treat F
 * itself as our brand-new sample space", and Addendum B.1's "read the
 * mechanism off the geometry ... leaving the centre cell empty").
 *
 *   - Topic 01, `venn2`: conditioning as a reduced sample space. Four chips,
 *     which is safe because the reader clamps the selection to the authored
 *     chip count and this figure has six built-in states.
 *   - Topic 02, `venn3`: the four disjoint classes exactly one, exactly two,
 *     all three and none. This is Addendum A's tally table drawn, and its
 *     "all three" chip is the exact cell where mutual independence fails.
 *   - Topic 03, `tree`: Figure 13.1. See the note below.
 *   - Topic 05, `plot`: Figure 13.2. Bars are `bands`, which are rectangles,
 *     and the mean is a dashed `vline`. Three frames, ending on X ∈ {2, 4, 6}
 *     where the balance point 3.4 is visibly not the midpoint 4.
 *   - Topic 06, `plot`: Figure 13.3, drawn for B(6, 0.8), B(6, 0.5) and
 *     B(6, 0.2), which also draws the source's claim on page 791 that p and
 *     1 − p give mirror images. Every bar height is the computed probability.
 *
 * WHAT `tree` CAN AND CANNOT DRAW. It suits a probability tree only in part,
 * and the caption says so rather than pretending otherwise. It fans level 1
 * out in full and expands level 2 from the first node only, which is exactly
 * right here: every cause splits the same two ways, so the multiplier badge on
 * the other causes is honest and not a compromise. But it has no branch
 * labels, so the priors have to live inside the level-1 node names (which
 * truncate past nine characters) and the likelihoods cannot be written on the
 * second-stage branches at all, which is what Figure 13.1 asks for. The
 * path-product annotations beside the leaves have nowhere to go either, so
 * they are carried in the `total` line and the caption. No new kind was added
 * and none is proposed: the shape is right, the labelling is thin.
 *
 * TOPIC 04 HAS NO FIGURE. A transfer experiment is bookkeeping, not geometry:
 * the difficulty is that the prior comes from the source bag and the
 * likelihood from the altered destination bag, and a `tree` without branch
 * labels cannot show a composition changing. The source gives Addendum C no
 * figure either and reasons from a table, which is what the `proc` and
 * `defgrid` there do.
 *
 * There is no bar-chart or histogram kind and none was invented. `bands` are
 * rectangles anchored to the axis, which is what a bar is, so Figures 13.2 and
 * 13.3 are drawn as the source describes them without touching the reader.
 *
 * ERRATA CHECKED. The book's Errata, pages 830 to 832, was read in full. It
 * lists five entries across Chapters 1, 3 and 11 only, and explicitly records
 * one Chapter 11 audit claim it re-verified and rejected. There is no entry
 * for Chapter 13, which was confirmed by reading the list rather than assumed.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every probability in pages 765 to 829 was
 * recomputed, every distribution checked to sum to 1 and every Bayes posterior
 * checked to sum to 1 across its partition. The chapter's four subtopics are
 * clean: all sixteen worked examples, twenty practice answers and sixteen MCQ
 * keys check out, including the two that look wrong and are not (Subtopic 01
 * practice 5(iii), 3 · (1/4) · (3/4)² = 27/64, and Subtopic 04 practice 5,
 * ¹⁰C₃(1/4)³(3/4)⁷ = 262440/1048576). Addendum P is clean too, all six
 * archetypes and all ten graded answers. Five genuine errors sit in the Round
 * 2 Addendum, three of them in Addendum C and all three in the same place: the
 * prior or the likelihood of a transfer or a without-replacement draw. The
 * corrected value is what this chapter teaches; the printed value is never
 * reproduced.
 *
 *   1. Page 804, Addendum A, Example A.2. Printed: "S₁ = 1 + 2/24 = 7/6".
 *      But 1 + 2/24 = 1 + 1/12 = 13/12, not 7/6 = 14/12. The two check lines
 *      that follow carry the same slip, reading "(28 − 9 + 1)/24" and
 *      "(28 − 18 + 3)/24" where 26 belongs, yet they print the results 3/4 and
 *      11/24, which are what 26 gives (20/24 = 5/6 and 13/24 are what 28
 *      gives). Independent confirmation: A.2 is built on A.1, where S₁ is
 *      computed directly as 1/2 + 1/3 + 1/4 = 13/12. Topic 02 teaches 13/12.
 *   2. Page 809, Addendum C, Example C.2. The transfer priors are attached to
 *      the wrong causes. Bag I holds 3 red and 4 black, so a ball moved at
 *      random out of it is black with probability 4/7 and red with 3/7; the
 *      text prints P(black moved) = 3/7 and P(red moved) = 4/7. The
 *      likelihoods 5/9 and 6/9 are computed correctly from the altered Bag II,
 *      so only the priors are swapped. With them the right way round,
 *      P(red drawn) = (4/7)(5/9) + (3/7)(6/9) = 20/63 + 18/63 = 38/63, not the
 *      printed 39/63 = 13/21, and P(black moved | red drawn) = 20/38 = 10/19,
 *      not 5/13. The book's own qualitative check survives the correction and
 *      confirms it: 10/19 ≈ 0.526 still sits below the prior 4/7 ≈ 0.571,
 *      because drawing red is evidence against a black transfer. Topic 04's
 *      derivation and second worked example teach 10/19.
 *   3. Page 810, Addendum C, Practice 2 answer. Two errors at once. Bag I
 *      holds 4 white and 2 black, so the transfer priors are 2/3 and 1/3, but
 *      the answer uses 1/2 and 1/2; and the printed posterior (1/14)/(3/14)
 *      puts the black-transfer path product over the total while labelling the
 *      result "posterior white" (even under its own equal priors the white
 *      answer would be (1/7)/(3/14) = 2/3). Correct: P(white drawn) =
 *      (2/3)(2/7) + (1/3)(1/7) = 5/21, and P(white moved | white drawn) =
 *      (4/21)/(5/21) = 4/5, not the printed 1/3. Taught in Topic 04 practice.
 *   4. Page 810, Addendum C, Practice 3 answer. The likelihood of two reds
 *      from Urn B (4 red, 1 blue, drawn without replacement) is printed as
 *      "4/5 · 3/4 = 3/10". That product is 12/20 = 3/5; 3/10 is 6/20. The
 *      companion line for Urn A, 2/5 · 1/4 = 1/10, is right, so it is this one
 *      fraction that is wrong and everything downstream inherits it. Correct:
 *      P(two reds) = (1/2)(1/10 + 3/5) = 7/20, not 1/5, and
 *      P(urn was B | two reds) = (3/10)/(7/20) = 6/7, not 3/4. Taught in Topic
 *      04 practice.
 *   5. Page 807, Addendum B, Practice 3 answer. The discarded-candidate line
 *      "testing p = 2/5: 4/9 · 3/5 = 4/15" mis-squares 2/5: (2/5)² is 4/25,
 *      not 4/9, and (4/25)(3/5) = 12/125, not 4/15. The line's conclusion,
 *      that 2/5 does not satisfy p²(1 − p) = 4/125, is right, and the rest of
 *      the answer, p = 1/5 or p = (2 + 2√2)/5, is correct. Topic 02's practice
 *      asks the question and gives the two roots without the bad trial line.
 *
 * ONE FIGURE DESCRIPTION IS INACCURATE, though the figure itself is never
 * rendered in the source. Page 796 describes Figure 13.3 as B(6, 0.8) with the
 * peak at r = 5 and "a slightly shorter bar at r = 4", not mentioning r = 6.
 * The real heights are P(4) = 0.2458, P(5) = 0.3932 and P(6) = 0.2621, so
 * r = 6 is the second tallest bar and r = 4 the third. Topic 06's figure draws
 * the computed heights and its caption names r = 6.
 *
 * DAMAGE, NOT ERROR. The extraction loses several glyphs to escape sequences,
 * and these were re-authored from context rather than guessed: "{n7" is the
 * minus sign, "{nn" the conditional bar, "{nN" a multiplication dot, "{nC" a
 * colon in "X : S → ℝ", "{nH" an ellipsis, "{tU" and "{tV" the tall brackets
 * of a fraction, and "\\004" the end-of-proof square. Pages 772, 781, 789 and
 * 795 also drop the trailing halves of their Pitfall entries into an unspaced
 * block at the foot of the page; those sentences are rebuilt from the pitfall
 * headings, which survive intact.
 *
 * Diagram chips and captions, `deriv.why`, kickers, tags, `def.term`,
 * `proc.title`, `defgrid.title`, `snapshot.note` and `snapshot.aids` render as
 * plain text, so they carry no inline tags. Every `sup` and `sub` in the file
 * was checked against the SUPERS and SUBS tables in
 * components/textbook/markup.tsx and converts to a real raised glyph, with no
 * fallback to small text anywhere.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch12Probability: Chapter = {
  "chapter": "13",
  "title": "Probability",
  "subject": "Mathematics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Conditional Probability and the Multiplication Theorem",
      "chip": "01 CONDITION",
      "kalam": "new information shrinks the world, then you count again",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Conditional Probability and the Multiplication Theorem</b><br>The foundation stone of the chapter, and everything after it is built here. CBSE Boards almost always carry a 2 to 3 mark question on a conditional probability or a without-replacement chain. JEE Main reliably places one question every year, usually a straight <i>P</i>(<i>A</i> | <i>B</i>) computation. Together with independence this is over 30 of the 103 questions in the previous-year bank, the single largest block, and it runs unbroken from 1979 to 2020.<br><br><b>02 · Independence: Complements, Triples and the Mutual Test</b><br>The other half of that block, and the one examiners set traps in. JEE Main loves the classification question: independent, mutually exclusive, both, or neither. JEE Advanced goes deeper: independence of complements, <b>exactly one occurs</b>, systems of equations built from <i>P</i>(<i>A</i> ∩ <i>B</i>) and <i>P</i>(<i>A</i>′ ∩ <i>B</i>′), and pairwise independence that fails the triple product. CBSE asks the complement theorem as a short proof.<br><br><b>03 · Total Probability and Bayes' Theorem</b><br>The single highest-yield idea in the chapter. CBSE Boards carry a <b>dedicated 5 to 6 mark Bayes question</b> almost every year, in one of three costumes: two bags, two factories, or a disease test. JEE Main places one most years, often bolted onto counting. Roughly 20 bank questions, and it is the favourite for long-answer in both Boards and JEE Advanced. Total Probability is rarely asked alone but is the engine that makes Bayes work.<br><br><b>04 · Bayes in Stages: Repeated Evidence and Transfers</b><br>The Advanced end of the same idea. A second observation arrives and today's posterior becomes tomorrow's prior; or a ball moves between bags and rewrites the likelihoods before the draw. Boards love the transfer template at 5 to 6 marks and JEE Advanced layers Bayes on top of it. This is where careless priors cost whole questions, so it is worth a topic of its own.<br><br><b>05 · Random Variables, Mean and Variance</b><br>A guaranteed scorer. CBSE almost always asks a 3 to 5 mark <b>build the distribution, find mean and variance</b> question. JEE Main places one direct expectation or variance question. JEE Advanced adds formula-defined distributions, linear transformations, and expectation arguments that need real reasoning. Around 12 bank questions, usually short-answer or integer type.<br><br><b>06 · Bernoulli Trials, the Binomial and Waiting Times</b><br>The grand finale and the second-largest block, about 25 bank questions. CBSE carries a 5 to 6 mark binomial question almost every year: <b>exactly or at least <i>r</i> successes</b>, or <b>given mean and variance, find <i>n</i> and <i>p</i></b>. JEE Main asks one most years; JEE Advanced adds the mode and parameter recovery. Waiting-time questions, where the number of trials is unbounded, appear in JEE Main nearly every year and almost never in Boards."
        },
        {
          "t": "p",
          "html": "You are on a Mumbai local platform. Ask a stranger what the chance is that the next train goes to Churchgate and you would both shrug and guess. Then the announcement board lights up: <b>slow line, Western Railway</b>. Your estimate sharpens instantly. Not one train has changed. What changed is <b>what you know</b>, and the fresh information has shrunk the world of possibilities to a smaller, more relevant set."
        },
        {
          "t": "p",
          "html": "That is the whole soul of <b>conditional probability</b>. When you write <i>P</i>(<i>E</i> | <i>F</i>), read aloud as “probability of <i>E</i> given <i>F</i>”, you are asking: given that <i>F</i> has definitely happened, how likely is <i>E</i> now? The condition <i>F</i> is not a second event you are hoping for. It is a <b>fact you have been handed</b>. So you throw away every outcome in which <i>F</i> did not occur, and you treat <i>F</i> itself as your brand-new sample space."
        },
        {
          "t": "think",
          "html": "picture the full sample space as the whole crowd at a diwali mela. <i>F</i> is the group standing inside the food court. the moment someone tells you the person we are discussing is in the food court, the rest of the mela is irrelevant. to find the chance they are also eating jalebi, count the jalebi-eaters <b>inside the food court</b> and divide by everyone in the food court. not by the whole mela."
        },
        {
          "t": "def",
          "term": "Conditional probability",
          "html": "For events <i>E</i> and <i>F</i> in the same sample space with <i>P</i>(<i>F</i>) ≠ 0, the probability of <i>E</i> given that <i>F</i> has occurred is <b><i>P</i>(<i>E</i> | <i>F</i>) = <i>P</i>(<i>E</i> ∩ <i>F</i>) / <i>P</i>(<i>F</i>)</b>. The numerator is “in both”, the denominator is “in <i>F</i>”, the reduced universe. It is a genuine probability, so 0 ≤ <i>P</i>(<i>E</i> | <i>F</i>) ≤ 1."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE ONE DEFINITION EVERYTHING ELSE COMES FROM",
          "tag": "CBSE + JEE",
          "main": "<i>P</i>(<i>E</i> | <i>F</i>) = <i>P</i>(<i>E</i> ∩ <i>F</i>) / <i>P</i>(<i>F</i>)",
          "legend": [
            "<i>P</i>(<i>E</i> ∩ <i>F</i>) is the chance both happen, measured in the <b>original</b> sample space.",
            "<i>P</i>(<i>F</i>) is the size of the new world. Dividing by it rescales <i>F</i> back up to 1.",
            "<i>P</i>(<i>F</i>) must be strictly positive. You cannot condition on something impossible."
          ],
          "note": "Both probabilities on the right are unconditional. That is the point: the formula converts a question about a shrunken world into two measurements taken in the world you already know."
        },
        {
          "t": "diagram",
          "kind": "venn2",
          "kicker": "FIGURE · CONDITIONING AS A SMALLER WORLD, TAP A REGION",
          "mathChips": true,
          "chips": ["A ∪ B", "A ∩ B", "A − B", "B − A"],
          "captions": [
            "The unconditional picture. Three of the four regions are shaded and only neither is left out, so P(A ∪ B) measures against the whole rectangle U. Conditioning on B will delete everything outside circle B and rescale what survives. Nothing here is a conditional probability yet.",
            "The lens, A and B both. This is the numerator of P(A | B). Once B is given, this is the only part of the new world in which A is true, so every conditional question reduces to measuring this shape against circle B rather than against U.",
            "A without B. Given B, this whole crescent is deleted. It is why P(A | B) can sit far from P(A): if most of A lives out here, learning that B happened is bad news for A even though A itself is large.",
            "B without A. This is the rest of the new world. Lens plus this crescent is all of circle B, so P(A | B) is lens divided by (lens plus this). The rectangle U never appears in that ratio, which is exactly what shrinking the world means."
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE FORMULA IS A DIVISION, TAP A LINE",
          "steps": [
            {
              "eq": "F has occurred, so the effective sample space is F, not S",
              "why": "Every outcome outside F is now ruled out. This is not an approximation or a convention, it is what the word given means: the experiment has already been run and you have been told the result landed inside F."
            },
            {
              "eq": "inside F, the outcomes that make E true are exactly those in E ∩ F",
              "why": "An outcome is favourable now only if it is in F, which is forced, and also in E, which is what you are asking about. Both conditions together is the intersection, so the favourable set is E ∩ F and nothing larger."
            },
            {
              "eq": "P(E | F) = n(E ∩ F) / n(F), for equally likely outcomes",
              "why": "Counting inside the reduced space. This is the classical recipe from Class 11 applied to F instead of S, and it is where the intuition lives, but it needs equally likely outcomes, which real problems often do not have."
            },
            {
              "eq": "= [n(E ∩ F)/n(S)] / [n(F)/n(S)] = P(E ∩ F) / P(F)",
              "why": "Dividing top and bottom by n(S) is the crucial step. It converts raw counts into probabilities, and the resulting statement mentions no counts at all, so it survives when the outcomes are not equally likely. There it is taken as the definition."
            }
          ]
        },
        {
          "t": "p",
          "html": "Because <i>P</i>( · | <i>F</i>) is a genuine probability on the reduced space, every rule you learned in Class 11 for ordinary probabilities still holds inside it, provided the condition never changes. The addition rule, the complement law, the certainty of the whole space: all of them survive, with <i>F</i> playing the part <i>S</i> used to play."
        },
        {
          "t": "defgrid",
          "title": "Properties of conditional probability",
          "tag": "for P(F) not zero",
          "rows": [
            { "k": "<i>P</i>(<i>S</i> | <i>F</i>)", "v": "= 1. Something must happen, even in the shrunken world." },
            { "k": "<i>P</i>(<i>F</i> | <i>F</i>)", "v": "= 1. Given <i>F</i>, the event <i>F</i> is now certain." },
            { "k": "<i>P</i>(<i>E</i>′ | <i>F</i>)", "v": "= 1 − <i>P</i>(<i>E</i> | <i>F</i>). Complement inside the condition." },
            { "k": "<i>P</i>((<i>A</i> ∪ <i>B</i>) | <i>F</i>)", "v": "= <i>P</i>(<i>A</i> | <i>F</i>) + <i>P</i>(<i>B</i> | <i>F</i>) − <i>P</i>((<i>A</i> ∩ <i>B</i>) | <i>F</i>)" },
            { "k": "what is <b>not</b> true", "v": "<i>P</i>(<i>E</i> | <i>F</i>′) has no simple link to <i>P</i>(<i>E</i> | <i>F</i>). Complementing the <b>condition</b> is a different question." }
          ]
        },
        {
          "t": "p",
          "html": "Now multiply the definition through by <i>P</i>(<i>F</i>) and read it the other way. What was a recipe for a conditional probability becomes a recipe for an intersection, and that is the <b>multiplication theorem</b>. It is not a second result, it is the same equation with the fraction cleared, which is why a problem that hands you a conditional and asks for an intersection and a problem that does the reverse are the same problem."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · MULTIPLICATION THEOREM AND THE CHAIN RULE",
          "tag": "CBSE 2 TO 3 MARKS",
          "main": "<i>P</i>(<i>E</i> ∩ <i>F</i>) = <i>P</i>(<i>F</i>) <i>P</i>(<i>E</i> | <i>F</i>) = <i>P</i>(<i>E</i>) <i>P</i>(<i>F</i> | <i>E</i>)",
          "legend": [
            "Two routes to one number. Condition on whichever event has the likelihood you actually know.",
            "Three events: <i>P</i>(<i>E</i> ∩ <i>F</i> ∩ <i>G</i>) = <i>P</i>(<i>E</i>) <i>P</i>(<i>F</i> | <i>E</i>) <i>P</i>(<i>G</i> | <i>E</i> ∩ <i>F</i>).",
            "Each factor conditions on <b>everything already assumed</b>, not just the previous event."
          ],
          "note": "This is the engine behind every without-replacement question. Draw one, update the bag, draw again: the chain rule is that sentence written in symbols."
        },
        {
          "t": "p",
          "html": "One reading habit pays for itself all year. <b>With replacement</b> means the second draw faces an identical box, so the first draw left no trace. <b>Without replacement</b> means the box has changed, so the second draw's probabilities depend on what the first removed. The moment a question says without replacement, reach for the chain rule with real conditionals in it, never a plain product of the starting fractions."
        },
        {
          "t": "defgrid",
          "title": "Exam English to set notation",
          "rows": [
            { "k": "given that <i>F</i> occurred", "v": "<i>P</i>( · | <i>F</i>), so the denominator becomes <i>P</i>(<i>F</i>)" },
            { "k": "both <i>A</i> and <i>B</i>", "v": "<i>P</i>(<i>A</i> ∩ <i>B</i>)" },
            { "k": "<i>A</i> or <i>B</i>, at least one", "v": "<i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) − <i>P</i>(<i>A</i> ∩ <i>B</i>)" },
            { "k": "neither <i>A</i> nor <i>B</i>", "v": "<i>P</i>(<i>A</i>′ ∩ <i>B</i>′) = 1 − <i>P</i>(<i>A</i> ∪ <i>B</i>)" },
            { "k": "exactly one of <i>A</i>, <i>B</i>", "v": "<i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) − 2<i>P</i>(<i>A</i> ∩ <i>B</i>)" }
          ]
        },
        {
          "t": "proc",
          "title": "Reading a given question",
          "steps": [
            "Name the two events and write them as <b>subsets</b> before touching any arithmetic. Half the marks lost here are lost in the translation, not the algebra.",
            "Decide which one is the <b>fact</b> and which is the <b>question</b>. The fact goes under the line. A sentence with “given”, “if it is known that”, or “when <i>F</i> happens” is naming the denominator.",
            "Count or compute <i>P</i>(<i>F</i>) in the <b>original</b> space, not the reduced one.",
            "Count or compute <i>P</i>(<i>E</i> ∩ <i>F</i>) in the same original space. Both must be measured against the same total or the ratio is meaningless.",
            "Divide, then sanity-check that the answer lies in [0, 1] and that it is at least <i>P</i>(<i>E</i> ∩ <i>F</i>), since dividing by a number below 1 can only make it larger."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A fair die is rolled twice. Let <i>E</i> be “the sum is 9” and <i>F</i> be “the first roll is greater than 3”. Find <i>P</i>(<i>E</i> | <i>F</i>).",
          "steps": [
            "Total outcomes 36. Event <i>F</i> is first roll ∈ {4, 5, 6}, so 3 × 6 = 18 outcomes and <i>P</i>(<i>F</i>) = 18/36.",
            "For <i>E</i> ∩ <i>F</i> the pairs are (4, 5), (5, 4), (6, 3). Note (3, 6) is rejected: the first roll 3 is not greater than 3.",
            "So <i>P</i>(<i>E</i> ∩ <i>F</i>) = 3/36.",
            "<i>P</i>(<i>E</i> | <i>F</i>) = (3/36) / (18/36) = 3/18."
          ],
          "ans": "<i>P</i>(<i>E</i> | <i>F</i>) = 1/6. The unconditional <i>P</i>(<i>E</i>) is 4/36 = 1/9, so knowing the first roll was high has genuinely helped."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A selection panel has 7 boys and 5 girls. Three members are picked one after another, without replacement. (i) Given the first two picked are girls, find <i>P</i>(third is a boy). (ii) Find <i>P</i>(all three are girls).",
          "steps": [
            "(i) After two girls leave, 10 people remain and 7 of them are boys. The reduced sample space does the whole job: <i>P</i> = 7/10.",
            "(ii) Chain rule with three factors: <i>P</i>(<i>G</i><sub>1</sub> ∩ <i>G</i><sub>2</sub> ∩ <i>G</i><sub>3</sub>) = <i>P</i>(<i>G</i><sub>1</sub>) <i>P</i>(<i>G</i><sub>2</sub> | <i>G</i><sub>1</sub>) <i>P</i>(<i>G</i><sub>3</sub> | <i>G</i><sub>1</sub> ∩ <i>G</i><sub>2</sub>).",
            "= (5/12) × (4/11) × (3/10) = 60/1320."
          ],
          "ans": "(i) 7/10. (ii) 1/22. Every numerator and every denominator drops by one at each step, which is what without replacement means."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN 2020 PATTERN",
          "q": "A fair die is rolled twice. Given that the sum is a multiple of 4, find the probability that the score 4 appears at least once.",
          "steps": [
            "Condition first. Sums that are multiples of 4 are 4, 8 and 12: (1,3), (2,2), (3,1); (2,6), (3,5), (4,4), (5,3), (6,2); (6,6). That is 9 outcomes.",
            "Now intersect with “at least one 4”. Scan the nine: only (4, 4) contains a 4.",
            "<i>P</i> = 1/9."
          ],
          "ans": "1/9. The unconditional chance of at least one 4 is 11/36 ≈ 0.31, so the condition has cut it to about a third. Listing <i>F</i> first and then filtering is faster and safer than building <i>E</i> and intersecting."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN 2019 PATTERN",
          "q": "An urn holds 5 red and 2 green balls. One ball is drawn: if it is green a red ball is added, if it is red a green ball is added, and the drawn ball is <b>not</b> returned. A second ball is now drawn. Find <i>P</i>(second ball is red).",
          "steps": [
            "The urn always keeps 7 balls: one leaves, one arrives. Only the mix changes.",
            "If the first was green (chance 2/7), the urn becomes 6 red and 1 green, so <i>P</i>(red next) = 6/7.",
            "If the first was red (chance 5/7), the urn becomes 4 red and 3 green, so <i>P</i>(red next) = 4/7.",
            "Add the two routes: (2/7)(6/7) + (5/7)(4/7) = 12/49 + 20/49."
          ],
          "ans": "32/49. Two conditionals, each computed in its own updated urn, then weighted by how likely that urn was. That weighted sum has a name and it is the subject of topic 03."
        },
        {
          "t": "mcq",
          "q": "A family has two children. Given that at least one is a girl, the probability that both are girls is:",
          "opts": [
            { "label": "1/2", "nudge": "This is “the other child is independently a girl”, which quietly assumes you were told <b>which</b> child is a girl. You were not, so the ordered pairs GB and BG are still two separate survivors, not one." },
            { "label": "1/3" },
            { "label": "1/4", "nudge": "This is the unconditional <i>P</i>(GG), computed as if the sentence “at least one is a girl” had never been said. Throwing away the given is the most expensive habit in this topic." },
            { "label": "2/3", "nudge": "This answers a different conditioning. If you were told the <b>elder</b> is a girl the survivors are GG and GB and the answer changes, which is exactly why the wording has to be translated before any counting." }
          ],
          "correct": 1,
          "solution": "The sample space is {GG, GB, BG, BB}, all equally likely. The condition “at least one is a girl” removes BB and leaves three cases. Only GG has both girls, so P = 1/3. Notice the condition did not remove a child, it removed an outcome."
        },
        {
          "t": "mcq",
          "q": "A fair die is rolled twice. Given that the first roll shows 4, the probability that the sum is 9 is:",
          "opts": [
            { "label": "1/36", "nudge": "This is <i>P</i>(first is 4 <b>and</b> sum is 9), the numerator on its own. It was never divided by <i>P</i>(<i>F</i>), so the world was never shrunk." },
            { "label": "1/6" },
            { "label": "1/9", "nudge": "This is <i>P</i>(sum is 9) with no conditioning at all, 4 outcomes out of 36. The given information has been read and then ignored." },
            { "label": "1/3", "nudge": "This counts both (4, 5) and (5, 4) as available and divides by 6. But the first roll is pinned to 4, so (5, 4) is outside the reduced space entirely." }
          ],
          "correct": 1,
          "solution": "Given the first roll is 4, the new sample space is the six pairs (4, 1) to (4, 6). The sum is 9 only when the second roll is 5, so exactly one of the six survives and P = 1/6."
        },
        {
          "t": "mcq",
          "q": "A bag holds 5 green and 3 red balls. Two are drawn one after the other <b>without replacement</b>. <i>P</i>(both green) is:",
          "opts": [
            { "label": "25/64", "nudge": "This is (5/8)², the with-replacement answer. It assumes the bag was restored between draws, which is precisely what the question forbids." },
            { "label": "5/14" },
            { "label": "5/8", "nudge": "This is only the first draw. The second factor <i>P</i>(<i>G</i><sub>2</sub> | <i>G</i><sub>1</sub>) has been dropped entirely." },
            { "label": "5/16", "nudge": "This is (5/8)(4/8): the numerator was thinned because a green left, but the denominator was not, so the bag is holding 8 balls of which only 7 exist." }
          ],
          "correct": 1,
          "solution": "P(G1 ∩ G2) = P(G1) P(G2 | G1) = (5/8) × (4/7) = 20/56 = 5/14. Both the count of greens and the total drop by one, because one green ball left the bag."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "Two fair dice are rolled. <i>A</i> is “the sum is 7”, <i>B</i> is “at least one die shows 2”. Find <i>P</i>(<i>A</i> | <i>B</i>).",
              "a": "<i>B</i> has 11 outcomes (6 with a 2 first, 6 with a 2 second, minus (2, 2) counted twice). <i>A</i> ∩ <i>B</i> is {(2, 5), (5, 2)}, so <i>P</i>(<i>A</i> | <i>B</i>) = 2/11."
            },
            {
              "q": "Given <i>P</i>(<i>A</i>) = 0.6, <i>P</i>(<i>B</i>) = 0.5 and <i>P</i>(<i>A</i> ∩ <i>B</i>) = 0.3, find <i>P</i>(<i>A</i> | <i>B</i>) and <i>P</i>(<i>B</i> | <i>A</i>).",
              "a": "<i>P</i>(<i>A</i> | <i>B</i>) = 0.3/0.5 = 0.6 and <i>P</i>(<i>B</i> | <i>A</i>) = 0.3/0.6 = 0.5. Same intersection, different denominators, and here both conditionals happen to equal the plain probabilities. Topic 02 explains why."
            },
            {
              "q": "A box holds 6 green and 4 red marbles. Two are drawn one by one without replacement. Find <i>P</i>(both red) and <i>P</i>(second is green | first was green).",
              "a": "Both red: (4/10)(3/9) = 12/90 = 2/15. Second green given first green: 5 greens remain out of 9 balls, so 5/9."
            },
            {
              "q": "Three cards are drawn one by one without replacement from a standard 52-card deck. Find <i>P</i>(all three are spades).",
              "a": "Chain rule: (13/52)(12/51)(11/50) = 1716/132600 = 11/850 ≈ 0.013. Every factor conditions on the spades already gone."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Flipping the conditional.</b> <i>P</i>(<i>A</i> | <i>B</i>) and <i>P</i>(<i>B</i> | <i>A</i>) share a numerator and differ in the denominator. The chance of carrying an umbrella given rain is high; the chance of rain given an umbrella is much lower. Same two events, two very different numbers.",
            "<b>Dividing by the wrong probability.</b> Writing <i>P</i>(<i>E</i> ∩ <i>F</i>)/<i>P</i>(<i>E</i>) when <i>P</i>(<i>E</i> | <i>F</i>) was asked. The event after the bar is the denominator, always.",
            "<b>Ignoring the given.</b> Answering with the unconditional probability, which is what happens whenever the condition is read as background colour instead of as data.",
            "<b>Conditioning on an impossible event.</b> The requirement that <i>P</i>(<i>F</i>) be positive is not decoration. If the given event has probability zero the expression has no meaning at all, and a question that seems to ask for one has been misread.",
            "<b>Treating without replacement as a product of starting fractions.</b> (5/8)(5/8) instead of (5/8)(4/7). Both the favourable count and the total shrink, and forgetting one of the two is the commonest slip in the whole chapter."
          ]
        },
        {
          "t": "protip",
          "html": "before any arithmetic, underline the word that names the condition and draw a box around the event it conditions. then say out loud: <b>the boxed thing goes on top with the other one, the underlined thing goes underneath alone</b>. and when a question hands you three numbers and asks for a fourth, try the addition theorem first: <i>P</i>(<i>A</i> ∩ <i>B</i>) = <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) − <i>P</i>(<i>A</i> ∪ <i>B</i>) unlocks a surprising number of them in one line."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "P(E | F) = P(E ∩ F) / P(F), P(F) > 0", "note": "shrink the world to F, then count inside it" },
            { "f": "P(E ∩ F) = P(F) P(E | F) = P(E) P(F | E)", "note": "the same equation with the fraction cleared" },
            { "f": "P(E ∩ F ∩ G) = P(E) P(F | E) P(G | E ∩ F)", "note": "each factor conditions on all of the past" },
            { "f": "P(E′ | F) = 1 − P(E | F)", "note": "complement inside the condition, not outside it" },
            { "f": "P(S | F) = P(F | F) = 1", "note": "F is certain once F is given" },
            { "f": "with replacement ⇒ same box · without ⇒ new box", "note": "the second is a chain rule, never a plain product" }
          ],
          "aids": [
            "“the bar is a fraction bar: what follows it goes underneath”",
            "“given shrinks the world, it does not remove a person”"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Independence: Complements, Triples and the Mutual Test",
      "chip": "02 INDEPENDENT",
      "kalam": "sometimes the news changes nothing, and that is a theorem",
      "blocks": [
        {
          "t": "p",
          "html": "Toss a coin, then roll a die. Knowing the coin showed heads tells you exactly nothing about the die: the die does not care. Two events are <b>independent</b> when the occurrence of one leaves the probability of the other completely unchanged. The condition still shrinks the world, but <i>E</i>'s share of the smaller world is identical to its share of the big one."
        },
        {
          "t": "p",
          "html": "Numbers make it concrete. In a colony of 100 families, 30 own a car, 40 own a two-wheeler and 12 own both. Pick a family at random and the bare chance of a car is 30/100 = 0.30. Now learn that the family owns a two-wheeler. The world shrinks from 100 families to 40, and among those exactly 12 own a car, so the updated chance is 12/40 = 0.30. <b>Unchanged.</b> Change “both” from 12 to 18 and the conditional becomes 18/40 = 0.45, and now the information helps. Same machinery, two different stories, decided entirely by the size of the overlap."
        },
        {
          "t": "def",
          "term": "Independent events",
          "html": "Events <i>E</i> and <i>F</i> are independent if any one, and hence all, of these hold: <b><i>P</i>(<i>E</i> | <i>F</i>) = <i>P</i>(<i>E</i>)</b>, <b><i>P</i>(<i>F</i> | <i>E</i>) = <i>P</i>(<i>F</i>)</b>, <b><i>P</i>(<i>E</i> ∩ <i>F</i>) = <i>P</i>(<i>E</i>) <i>P</i>(<i>F</i>)</b>. The product form is the working definition: it never divides by anything, so it stays meaningful even when a probability is zero, and it is symmetric in the two events, which the conditional forms only look like they are."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE ONE TEST THAT ALWAYS WORKS",
          "tag": "JEE MAIN FAVOURITE",
          "main": "<i>E</i>, <i>F</i> independent ⟺ <i>P</i>(<i>E</i> ∩ <i>F</i>) = <i>P</i>(<i>E</i>) <i>P</i>(<i>F</i>)",
          "legend": [
            "Compute <i>P</i>(<i>E</i> ∩ <i>F</i>), compute the product, compare. That is the entire procedure.",
            "Independence is a <b>numerical coincidence</b>, not a story about causes. Two events with nothing to do with each other can fail it, and two events about the same dice can pass it.",
            "Mutually exclusive means <i>P</i>(<i>E</i> ∩ <i>F</i>) = 0, a completely different equation."
          ],
          "note": "Never assume independence because a setup looks tidy or because the events feel unrelated. Test it. The one-line test is why examiners can build a whole question around a student who did not run it."
        },
        {
          "t": "p",
          "html": "Anchor this now, because almost every student stumbles here: <b>independent is not the same as mutually exclusive</b>. Mutually exclusive events, with positive probabilities, are deadly rivals: if one happens the other <b>cannot</b>. That is the strongest possible dependence, the opposite of independence. A batsman scoring a century and the same batsman getting out for a duck in the same innings are mutually exclusive, and they are about as far from independent as two events can be."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · INDEPENDENCE SURVIVES COMPLEMENTS, TAP A LINE",
          "steps": [
            {
              "eq": "P(A) = P(A ∩ B) + P(A ∩ B′)",
              "why": "The event A splits cleanly into the part inside B and the part outside B, and those two pieces are disjoint and cover A. This is the only structural fact the proof needs, and it holds for any two events whatsoever."
            },
            {
              "eq": "P(A ∩ B′) = P(A) − P(A ∩ B) = P(A) − P(A) P(B)",
              "why": "Rearrange line one, then use the hypothesis. This is the single place independence enters the argument, and it enters as a substitution rather than as an assumption about anything else."
            },
            {
              "eq": "= P(A)[1 − P(B)] = P(A) P(B′)",
              "why": "Factor out P(A) and recognise the bracket as the complement law from Class 11. The right-hand side is now exactly the product test for A and B′, so those two events are independent."
            },
            {
              "eq": "apply twice: A′ ⟂ B and A′ ⟂ B′ as well",
              "why": "Run the same argument with the roles swapped to complement the other event. Independence is therefore inherited by every combination of complements, a fact JEE questions exploit constantly and a favourite short proof in Boards."
            }
          ]
        },
        {
          "t": "p",
          "html": "Independence buys one shortcut worth more than all the others. Asking for <b>at least one</b> of several events is asking about a union, and unions need inclusion-exclusion, which is painful past two events. But the complement of “at least one occurs” is “every one fails”, and for independent events that is a plain product. Never expand the union. Complement and multiply."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · AT LEAST ONE OF n INDEPENDENT EVENTS",
          "tag": "THE WORKHORSE",
          "main": "<i>P</i>(at least one) = 1 − ∏ (1 − <i>P</i>(<i>A</i><sub>i</sub>))",
          "legend": [
            "The product runs over <i>i</i> = 1 to <i>n</i>, one factor per event.",
            "Two steps hide in it: De Morgan turns “not at least one” into “all fail”, and independence of the complements turns that into a product.",
            "For a single event repeated <i>n</i> times with the same <i>p</i>, this collapses to 1 − (1 − <i>p</i>)<sup>n</sup>."
          ],
          "note": "This is behind every “the target is hit by at least one shooter” and “at least one machine fails” question in the paper."
        },
        {
          "t": "p",
          "html": "Three events raise the stakes. Checking the three pairs is <b>not</b> enough: genuine, mutual independence needs the triple product as a fourth, separate condition. The reason is structural. The pair conditions only constrain two-fold overlaps, and the triple overlap is a different cell of the diagram that none of them reaches into. So you can design events whose overlaps look independent in pairs while the centre cell has been quietly emptied."
        },
        {
          "t": "defgrid",
          "title": "The four tests for mutual independence",
          "tag": "all four, or none",
          "rows": [
            { "k": "test 1", "v": "<i>P</i>(<i>A</i> ∩ <i>B</i>) = <i>P</i>(<i>A</i>) <i>P</i>(<i>B</i>)" },
            { "k": "test 2", "v": "<i>P</i>(<i>B</i> ∩ <i>C</i>) = <i>P</i>(<i>B</i>) <i>P</i>(<i>C</i>)" },
            { "k": "test 3", "v": "<i>P</i>(<i>C</i> ∩ <i>A</i>) = <i>P</i>(<i>C</i>) <i>P</i>(<i>A</i>)" },
            { "k": "test 4", "v": "<i>P</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>) = <i>P</i>(<i>A</i>) <i>P</i>(<i>B</i>) <i>P</i>(<i>C</i>)" },
            { "k": "pairwise", "v": "tests 1 to 3 only. It is a strictly weaker property and test 4 is where the constructed counterexamples fail." }
          ]
        },
        {
          "t": "diagram",
          "kind": "venn3",
          "kicker": "FIGURE · THE FOUR CLASSES FOR THREE EVENTS, TAP ONE",
          "chips": ["EXACTLY ONE", "EXACTLY TWO", "ALL THREE", "NONE"],
          "captions": [
            "The three outer crescents. An outcome here is counted once by S1, never by S2 and never by S3, so the combination S1 minus 2 S2 plus 3 S3 gives it weight 1 minus 0 plus 0, which is exactly 1. That is where the coefficients come from.",
            "The three petals with the centre excluded. An outcome here is counted twice by S1 and once by S2, so S2 minus 3 S3 leaves it weight 1 while stripping the centre out three times over. For three independent shooters this is where exactly two hits live.",
            "The centre cell, P(A and B and C). Fill it first, always. This is the only region the three pairwise tests never touch, which is precisely why pairwise independence can hold while mutual independence fails: empty this cell and the pairs never notice.",
            "Outside every circle, 1 minus P(at least one). For independent events this is the cleanest quantity in the whole picture, a plain product of the three complements, which is why every at-least-one question is answered from here."
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · EXACTLY k, FOR THREE EVENTS",
          "tag": "JEE ADVANCED",
          "main": "<i>P</i>(exactly one) = <i>S</i><sub>1</sub> − 2<i>S</i><sub>2</sub> + 3<i>S</i><sub>3</sub>",
          "legend": [
            "<i>S</i><sub>1</sub> = <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) + <i>P</i>(<i>C</i>), the singles.",
            "<i>S</i><sub>2</sub> = <i>P</i>(<i>A</i> ∩ <i>B</i>) + <i>P</i>(<i>B</i> ∩ <i>C</i>) + <i>P</i>(<i>C</i> ∩ <i>A</i>), the pairs. <i>S</i><sub>3</sub> = <i>P</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>).",
            "At least one = <i>S</i><sub>1</sub> − <i>S</i><sub>2</sub> + <i>S</i><sub>3</sub>. None = 1 − <i>S</i><sub>1</sub> + <i>S</i><sub>2</sub> − <i>S</i><sub>3</sub>.",
            "Exactly two = <i>S</i><sub>2</sub> − 3<i>S</i><sub>3</sub>. At least two = <i>S</i><sub>2</sub> − 2<i>S</i><sub>3</sub>."
          ],
          "note": "Class 11 derived the inclusion-exclusion these sit on. What is new here is that when the events are independent every S factorises into products, so a three-shooter question becomes arithmetic. Free check: exactly one, exactly two, all three and none are disjoint and exhaustive, so the four must add to 1."
        },
        {
          "t": "p",
          "html": "You have to see the counterexample once, because the failure is invisible to intuition. Toss two fair coins. Let <i>A</i> be “the first shows heads”, <i>B</i> be “the second shows heads”, and <i>C</i> be “the two coins disagree”. Each has probability 1/2. Every pair passes the product test. And yet the three together fail, for a reason you can read straight off the picture."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · PAIRWISE YES, MUTUAL NO, TAP A LINE",
          "steps": [
            {
              "eq": "A = {HH, HT}, B = {HH, TH}, C = {HT, TH}",
              "why": "Four equally likely outcomes, each of probability one quarter, and each event holds exactly two of them. So all three events have probability one half, which is what makes the arithmetic below so clean."
            },
            {
              "eq": "P(A ∩ B) = P(HH) = 1/4 = P(A) P(B)",
              "why": "The first pair passes. Each pair of these events meets in exactly one outcome, so each pairwise intersection has probability one quarter, which is exactly the product of two halves."
            },
            {
              "eq": "P(B ∩ C) = P(TH) = 1/4, P(C ∩ A) = P(HT) = 1/4",
              "why": "The other two pairs pass for the same reason. Pairwise independence is now fully confirmed, and a student who stops here declares the three events mutually independent and loses the question."
            },
            {
              "eq": "A ∩ B ∩ C = ∅, so P = 0, while P(A)P(B)P(C) = 1/8",
              "why": "The three pair-overlaps are three different outcomes, HH, TH and HT, so nothing is left for the centre cell. Test 4 fails. Read what it means: knowing A and B both happened pins the outcome to HH, which rules C out entirely, so C is strongly dependent on the pair while being independent of each member alone."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN SPEED TRAP",
          "q": "For two events <i>A</i> and <i>B</i>, <i>P</i>(<i>A</i>) = 0.5, <i>P</i>(<i>B</i>) = 0.4 and <i>P</i>(<i>A</i> ∪ <i>B</i>) = 0.7. Are they independent, mutually exclusive, both, or neither?",
          "steps": [
            "Do not list cases. Get the intersection in one line from the addition theorem: <i>P</i>(<i>A</i> ∩ <i>B</i>) = 0.5 + 0.4 − 0.7 = 0.2.",
            "Independence test: <i>P</i>(<i>A</i>) <i>P</i>(<i>B</i>) = 0.5 × 0.4 = 0.2. It matches.",
            "Mutual exclusivity test: that would need <i>P</i>(<i>A</i> ∩ <i>B</i>) = 0, but it is 0.2."
          ],
          "ans": "Independent only. The trap is the tidy 0.7, which invites the reflex “mutually exclusive”. Mutual exclusivity would have forced <i>P</i>(<i>A</i> ∪ <i>B</i>) = 0.9. Always compute the intersection first, then run both one-second tests on it."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "<i>A</i> and <i>B</i> are independent. <i>P</i>(both occur) = 1/8 and <i>P</i>(neither occurs) = 3/8. Find <i>P</i>(<i>A</i>), <i>P</i>(<i>B</i>) and <i>P</i>(exactly one occurs).",
          "steps": [
            "Let <i>a</i> = <i>P</i>(<i>A</i>), <i>b</i> = <i>P</i>(<i>B</i>). Independence gives <i>ab</i> = 1/8.",
            "Complements are independent too, so (1 − <i>a</i>)(1 − <i>b</i>) = 1 − <i>a</i> − <i>b</i> + <i>ab</i> = 3/8. Substituting <i>ab</i> = 1/8 gives <i>a</i> + <i>b</i> = 1 + 1/8 − 3/8 = 3/4.",
            "So <i>a</i> and <i>b</i> are the roots of 8<i>t</i><sup>2</sup> − 6<i>t</i> + 1 = 0, giving <i>t</i> = (6 ± 2)/16 = 1/2 or 1/4.",
            "Exactly one = <i>a</i> + <i>b</i> − 2<i>ab</i> = 3/4 − 1/4."
          ],
          "ans": "{<i>P</i>(<i>A</i>), <i>P</i>(<i>B</i>)} = {1/2, 1/4} and <i>P</i>(exactly one) = 1/2. Consistency check: both plus exactly one plus neither = 1/8 + 1/2 + 3/8 = 1, so the three disjoint cases exhaust everything. The answer is an unordered pair because <i>ab</i> and <i>a</i> + <i>b</i> are both symmetric, so nothing in the data can say which event is which."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Shooters <i>A</i>, <i>B</i>, <i>C</i> fire independently with hit probabilities 1/2, 1/3, 1/4. Find <i>P</i>(at least one hits), <i>P</i>(exactly one hits) and <i>P</i>(exactly two hit).",
          "steps": [
            "Independence factorises every intersection, so <i>S</i><sub>1</sub> = 1/2 + 1/3 + 1/4 = 13/12.",
            "<i>S</i><sub>2</sub> = 1/6 + 1/12 + 1/8 = 9/24 = 3/8, and <i>S</i><sub>3</sub> = 1/24.",
            "At least one = 13/12 − 3/8 + 1/24 = (26 − 9 + 1)/24 = 18/24. Cross-check by complement: 1 − (1/2)(2/3)(3/4) = 1 − 1/4.",
            "Exactly one = <i>S</i><sub>1</sub> − 2<i>S</i><sub>2</sub> + 3<i>S</i><sub>3</sub> = (26 − 18 + 3)/24, and exactly two = <i>S</i><sub>2</sub> − 3<i>S</i><sub>3</sub> = (9 − 3)/24."
          ],
          "ans": "At least one 3/4, exactly one 11/24, exactly two 1/4. Check the partition: 11/24 + 6/24 + 1/24 + 6/24 = 1, where the last term is none = 1/4. If those four do not close, the error is a sign on <i>S</i><sub>3</sub>, not arithmetic."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "<i>A</i>, <i>B</i>, <i>C</i> are mutually independent, each with the same probability <i>p</i>, strictly between 0 and 1. The probability that exactly one occurs is 48/125. Find every admissible <i>p</i>.",
          "steps": [
            "Exactly one of three independent equal-probability events is 3<i>p</i>(1 − <i>p</i>)<sup>2</sup>. Divide by 3: <i>p</i>(1 − <i>p</i>)<sup>2</sup> = 16/125.",
            "<i>p</i> = 1/5 works: (1/5)(4/5)<sup>2</sup> = 16/125.",
            "Clear denominators: 125<i>p</i><sup>3</sup> − 250<i>p</i><sup>2</sup> + 125<i>p</i> − 16 = 0, and (5<i>p</i> − 1) divides it, leaving 25<i>p</i><sup>2</sup> − 45<i>p</i> + 16 = 0.",
            "Discriminant 2025 − 1600 = 425, so <i>p</i> = (45 ± √425)/50 ≈ 0.488 and 1.312. The second exceeds 1 and is thrown out; the first is a legitimate probability."
          ],
          "ans": "<i>p</i> = 1/5 or <i>p</i> = (45 − √425)/50 ≈ 0.488, and reporting both is the mark-winning move. The curve 3<i>p</i>(1 − <i>p</i>)<sup>2</sup> rises from 0, peaks near <i>p</i> = 1/3 and falls back to 0, so any horizontal line below the peak cuts it twice. Check at <i>p</i> = 1/5: exactly one 48/125, exactly two 12/125, all three 1/125, none 64/125, and those add to 1."
        },
        {
          "t": "mcq",
          "q": "If <i>P</i>(<i>A</i>) and <i>P</i>(<i>B</i>) are both positive, then <i>A</i> and <i>B</i> can be <b>both</b> mutually exclusive and independent:",
          "opts": [
            { "label": "always true", "nudge": "Both at once would force <i>P</i>(<i>A</i>) <i>P</i>(<i>B</i>) = 0, which is impossible when neither factor is zero. The two properties are not compatible, they are opposites." },
            { "label": "always false" },
            { "label": "true only if <i>A</i> = <i>B</i>", "nudge": "An invented condition. If <i>A</i> = <i>B</i> with positive probability then <i>P</i>(<i>A</i> ∩ <i>B</i>) = <i>P</i>(<i>A</i>) ≠ 0, so they are not even mutually exclusive. Equality of events settles nothing here." },
            { "label": "true only if <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) = 1", "nudge": "Another invented condition. Neither property refers to the sum of the two probabilities, and adding a plausible-looking constraint does not rescue an impossibility." }
          ],
          "correct": 1,
          "solution": "Mutually exclusive means P(A ∩ B) = 0. Independent means P(A ∩ B) = P(A) P(B). Holding both forces P(A) P(B) = 0, impossible when both are positive. The only way to satisfy both is for one event to be effectively impossible."
        },
        {
          "t": "mcq",
          "q": "If <i>A</i> and <i>B</i> are independent, which pair is <b>not</b> guaranteed independent?",
          "opts": [
            { "label": "<i>A</i>′ and <i>B</i>", "nudge": "Guaranteed. Apply the complement theorem with the roles swapped: <i>P</i>(<i>A</i>′ ∩ <i>B</i>) = <i>P</i>(<i>B</i>) − <i>P</i>(<i>A</i> ∩ <i>B</i>) = <i>P</i>(<i>B</i>)[1 − <i>P</i>(<i>A</i>)]." },
            { "label": "<i>A</i> and <i>B</i>′", "nudge": "Guaranteed, and this is the case the theorem is proved for directly: <i>P</i>(<i>A</i> ∩ <i>B</i>′) = <i>P</i>(<i>A</i>) − <i>P</i>(<i>A</i>)<i>P</i>(<i>B</i>) = <i>P</i>(<i>A</i>)<i>P</i>(<i>B</i>′)." },
            { "label": "<i>A</i>′ and <i>B</i>′", "nudge": "Guaranteed, by applying the theorem twice. This is the version used in every “neither occurs” question, and Example 2 above depends on it." },
            { "label": "none, all three pairs are independent" }
          ],
          "correct": 3,
          "solution": "Independence is inherited by every combination of complements. Students who pick one of the first three usually remember independence as something fragile and assume complementing breaks it. The one-line proof P(A ∩ B′) = P(A) − P(A)P(B) = P(A)P(B′) settles it."
        },
        {
          "t": "mcq",
          "q": "For independent events with <i>P</i>(<i>A</i>) = <i>p</i> and <i>P</i>(<i>B</i>) = <i>q</i>, the probability that exactly one of them occurs is:",
          "opts": [
            { "label": "<i>pq</i>", "nudge": "That is <i>P</i>(both occur), the one case “exactly one” is designed to exclude." },
            { "label": "<i>p</i> + <i>q</i>", "nudge": "This forgets to remove any overlap at all, so every outcome in <i>A</i> ∩ <i>B</i> is counted twice and the total can exceed 1." },
            { "label": "<i>p</i> + <i>q</i> − 2<i>pq</i>" },
            { "label": "<i>p</i> + <i>q</i> − <i>pq</i>", "nudge": "This is <i>P</i>(<i>A</i> ∪ <i>B</i>), which is “at <b>least</b> one”. It still includes the both-occur case, and that is exactly the difference the factor 2 encodes." }
          ],
          "correct": 2,
          "solution": "Exactly one = P(A ∩ B′) + P(A′ ∩ B) = p(1 − q) + (1 − p)q = p + q − 2pq. The killer detail is the factor 2: the intersection is removed twice, once from each direction, because exactly one excludes it from both sides."
        },
        {
          "t": "mcq",
          "q": "Two fair dice <i>A</i> and <i>B</i> are rolled. <i>E</i><sub>1</sub>: die <i>A</i> shows 4. <i>E</i><sub>2</sub>: die <i>B</i> shows 2. <i>E</i><sub>3</sub>: the sum is odd. Which statement is <b>not</b> true?",
          "opts": [
            { "label": "<i>E</i><sub>1</sub> and <i>E</i><sub>3</sub> are independent", "nudge": "True. <i>A</i> = 4 with an odd sum forces <i>B</i> odd, giving (1/6)(3/6) = 1/12, which is <i>P</i>(<i>E</i><sub>1</sub>)<i>P</i>(<i>E</i><sub>3</sub>) exactly." },
            { "label": "<i>E</i><sub>1</sub>, <i>E</i><sub>2</sub>, <i>E</i><sub>3</sub> are mutually independent" },
            { "label": "<i>E</i><sub>1</sub> and <i>E</i><sub>2</sub> are independent", "nudge": "True, and this one needs no arithmetic: the two events describe different dice, and separate fair dice cannot influence each other." },
            { "label": "<i>E</i><sub>2</sub> and <i>E</i><sub>3</sub> are independent", "nudge": "True, by the mirror of the first option. <i>B</i> = 2 with an odd sum forces <i>A</i> odd, again 1/12 = (1/6)(1/2)." }
          ],
          "correct": 1,
          "solution": "All three pairs pass, so this is the pairwise-but-not-mutual trap in exam clothing. Test 4: E1 ∩ E2 ∩ E3 needs A = 4, B = 2 and the sum 6 odd, which is impossible, so its probability is 0. But P(E1)P(E2)P(E3) = (1/6)(1/6)(1/2) = 1/72, which is not 0. Mutual independence fails."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "<i>A</i> and <i>B</i> are independent with <i>P</i>(<i>A</i> ∪ <i>B</i>) = 0.8 and <i>P</i>(<i>A</i>) = 0.3. Find <i>P</i>(<i>B</i>).",
              "a": "Independence lets you write the union as 0.3 + <i>b</i> − 0.3<i>b</i> = 0.3 + 0.7<i>b</i>. Setting that to 0.8 gives 0.7<i>b</i> = 0.5, so <i>P</i>(<i>B</i>) = 5/7 ≈ 0.714."
            },
            {
              "q": "<i>E</i><sub>1</sub>, <i>E</i><sub>2</sub>, <i>E</i><sub>3</sub> are mutually independent, each with probability 1/4. Find <i>P</i>(all three), <i>P</i>(at least one) and <i>P</i>(exactly one).",
              "a": "All three: (1/4)<sup>3</sup> = 1/64. At least one: 1 − (3/4)<sup>3</sup> = 37/64. Exactly one: 3 · (1/4) · (3/4)<sup>2</sup> = 27/64. Check: 27 + 9 + 1 = 37, so exactly one plus exactly two plus all three is at least one."
            },
            {
              "q": "<i>A</i>, <i>B</i>, <i>C</i> are mutually independent, each with probability 1/3. Find <i>P</i>(exactly one) and <i>P</i>(at least one).",
              "a": "<i>S</i><sub>1</sub> = 1, <i>S</i><sub>2</sub> = 3(1/9) = 1/3, <i>S</i><sub>3</sub> = 1/27. Exactly one = 1 − 2/3 + 1/9 = 4/9. At least one = 1 − (2/3)<sup>3</sup> = 19/27."
            },
            {
              "q": "Mutually independent events each with probability <i>p</i> satisfy <i>P</i>(exactly two) = 12/125. Find every admissible <i>p</i>.",
              "a": "3<i>p</i><sup>2</sup>(1 − <i>p</i>) = 12/125, so <i>p</i><sup>2</sup>(1 − <i>p</i>) = 4/125 and 125<i>p</i><sup>3</sup> − 125<i>p</i><sup>2</sup> + 4 = 0. Then <i>p</i> = 1/5 is a root and factoring leaves 25<i>p</i><sup>2</sup> − 20<i>p</i> − 4 = 0, whose roots are (2 ± 2√2)/5. Only (2 + 2√2)/5 ≈ 0.966 lies in (0, 1), so <i>p</i> = 1/5 or <i>p</i> ≈ 0.966."
            },
            {
              "q": "<i>A</i>, <i>B</i>, <i>C</i> are independent with probabilities 1/2, 1/3, 1/4. Given that exactly two of them occurred, find the probability that <i>A</i> was one of them.",
              "a": "Exactly two has probability 1/4. The two cases containing <i>A</i> are <i>A</i> and <i>B</i> but not <i>C</i>, worth (1/2)(1/3)(3/4) = 1/8, and <i>A</i> and <i>C</i> but not <i>B</i>, worth (1/2)(2/3)(1/4) = 1/12. Together 5/24, so the answer is (5/24)/(1/4) = 5/6."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Reading mutually exclusive as independent.</b> They are nearly opposite. With positive probabilities, mutually exclusive means <b>strongly dependent</b>, because one occurring forces the other not to.",
            "<b>Assuming independence from a tidy setup.</b> Independence is a numerical fact you test, not an impression you form. Compute <i>P</i>(<i>A</i> ∩ <i>B</i>) and compare it with the product, every time.",
            "<b>Stopping after the three pairs.</b> For three events, mutual independence needs the triple product as a fourth condition, and it is the one that fails in every constructed counterexample.",
            "<b>Dropping the factor 2 in exactly one.</b> <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) − <i>P</i>(<i>A</i> ∩ <i>B</i>) is at least one; exactly one subtracts the overlap <b>twice</b> because it is excluded from both directions.",
            "<b>Believing complements break independence.</b> They do not. If <i>A</i> and <i>B</i> are independent then so are <i>A</i> and <i>B</i>′, <i>A</i>′ and <i>B</i>, and <i>A</i>′ and <i>B</i>′, and Advanced questions are built on that."
          ]
        },
        {
          "t": "protip",
          "html": "before classifying any pair, get <i>P</i>(<i>A</i> ∩ <i>B</i>) in one line from the addition theorem, then run two one-second checks: <b>is it zero</b> (mutually exclusive) and <b>is it the product</b> (independent). those two questions resolve almost every Board and JEE Main classification problem instantly, and they can never both answer yes unless a probability is zero. and for anything with the words at least one in it, complement first and multiply, never expand the union."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "independent ⟺ P(E ∩ F) = P(E) P(F)", "note": "the safe test, it never divides by anything" },
            { "f": "mutually exclusive ⟺ P(E ∩ F) = 0", "note": "the opposite property, not a synonym" },
            { "f": "A ⟂ B ⇒ A ⟂ B′, A′ ⟂ B, A′ ⟂ B′", "note": "complementation cannot break independence" },
            { "f": "P(at least one) = 1 − ∏ (1 − P(Aᵢ))", "note": "complement and multiply, never expand" },
            { "f": "mutual: three pairs AND P(A ∩ B ∩ C) = P(A)P(B)P(C)", "note": "pairwise is strictly weaker" },
            { "f": "exactly one = S₁ − 2S₂ + 3S₃ · exactly two = S₂ − 3S₃", "note": "the four classes must add to 1" }
          ],
          "aids": [
            "“exclusive forbids, independent ignores”",
            "“three pairs pass and the centre is still empty”"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Total Probability and Bayes' Theorem",
      "chip": "03 BAYES",
      "kalam": "add up the causes going forward, blame one cause going back",
      "blocks": [
        {
          "t": "p",
          "html": "A famous mithai shop sources its kaju katli from three suppliers during Diwali. Supplier <i>A</i> sends 50 percent of the stock, <i>B</i> sends 30 percent, <i>C</i> sends 20 percent, and each occasionally sends a stale piece. Walk in, pick a box at random: what is the chance of a stale one? No single supplier's spoilage rate answers it, because the box could have come from any of them. You have to <b>weight each supplier's spoilage rate by how much stock they contribute</b>, then add."
        },
        {
          "t": "p",
          "html": "For that to work the origin stories must do two things: never overlap, and together cover every possibility. Such a family is called a <b>partition</b> of the sample space, and the supplier set is one because every box comes from exactly one supplier and from some supplier. You met partitions in Class 11 as families that are both mutually exclusive and exhaustive. Here they earn their keep."
        },
        {
          "t": "def",
          "term": "Partition of a sample space",
          "html": "Events <i>E</i><sub>1</sub>, …, <i>E</i><sub>n</sub> partition <i>S</i> when three things hold: <b><i>E</i><sub>i</sub> ∩ <i>E</i><sub>j</sub> = ∅ for <i>i</i> ≠ <i>j</i></b> (pairwise disjoint), <b><i>E</i><sub>1</sub> ∪ … ∪ <i>E</i><sub>n</sub> = <i>S</i></b> (exhaustive), and <b><i>P</i>(<i>E</i><sub>i</sub>) > 0</b> for every <i>i</i>. Drop any one and both theorems below silently produce nonsense rather than an error."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THEOREM OF TOTAL PROBABILITY",
          "tag": "FORWARD, CAUSE TO EFFECT",
          "main": "<i>P</i>(<i>A</i>) = ∑ <i>P</i>(<i>E</i><sub>j</sub>) <i>P</i>(<i>A</i> | <i>E</i><sub>j</sub>)",
          "legend": [
            "The sum runs over every cause in the partition, <i>j</i> = 1 to <i>n</i>.",
            "<i>P</i>(<i>E</i><sub>j</sub>) is the <b>prior</b>: how likely that cause is before anything is observed.",
            "<i>P</i>(<i>A</i> | <i>E</i><sub>j</sub>) is the <b>likelihood</b>: how likely the effect is under that cause.",
            "Each term is a path product, and the paths cannot overlap because the causes cannot."
          ],
          "note": "Read it as a weighted average of the likelihoods, with the priors as weights. Total probability is rarely asked on its own, and it is the engine that makes Bayes work."
        },
        {
          "t": "think",
          "html": "total probability runs the film <b>forwards</b>: you know the suppliers and their spoilage rates, and you predict the chance of a stale piece. the interesting exam questions run it <b>backwards</b>. you have already bitten into a stale piece, and now you want to know which supplier most likely sent it."
        },
        {
          "t": "p",
          "html": "That backward question, from observed effect to hidden cause, is what <b>Bayes' Theorem</b> answers, which is why it is also called <b>inverse probability</b>: it inverts the direction of conditioning. A courtroom captures it. Before any evidence the judge holds a <b>prior</b> belief about each suspect. A fingerprint arrives, and each suspect has a <b>likelihood</b> of having left it. Bayes is the formal rule for updating: the suspect who best combines “was plausible to begin with” <b>and</b> “fits the evidence” becomes the most probable culprit. A suspect with an airtight alibi, prior near zero, stays innocent no matter how well the evidence fits."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · BAYES THEOREM",
          "tag": "CBSE 5 TO 6 MARKS, NEAR CERTAIN",
          "main": "<i>P</i>(<i>E</i><sub>i</sub> | <i>A</i>) = <i>P</i>(<i>E</i><sub>i</sub>) <i>P</i>(<i>A</i> | <i>E</i><sub>i</sub>) / ∑ <i>P</i>(<i>E</i><sub>j</sub>) <i>P</i>(<i>A</i> | <i>E</i><sub>j</sub>)",
          "legend": [
            "In words: posterior = prior × likelihood, divided by the total probability of the evidence.",
            "The denominator is precisely <i>P</i>(<i>A</i>) from the theorem above. It is <b>always</b> the full sum, never one term.",
            "The numerator is that same sum's <i>i</i>-th term, so the answer is one path's share of all the paths.",
            "Requires <i>P</i>(<i>A</i>) > 0: you cannot condition on evidence that could not have arrived."
          ],
          "note": "Free consistency check, and examiners give marks for it: the posteriors over a partition must add to 1. If yours do not, the error is structural, a non-partition or the wrong denominator, so re-examine the cases before re-checking the arithmetic."
        },
        {
          "t": "defgrid",
          "title": "The four words in every Bayes question",
          "rows": [
            { "k": "<i>E</i><sub>i</sub>", "v": "hypotheses or causes. They must form a partition." },
            { "k": "<i>A</i>", "v": "the evidence, the effect you actually observed." },
            { "k": "<i>P</i>(<i>E</i><sub>i</sub>)", "v": "prior. What you believed before the evidence." },
            { "k": "<i>P</i>(<i>A</i> | <i>E</i><sub>i</sub>)", "v": "likelihood. Effect given cause. This is what the question hands you." },
            { "k": "<i>P</i>(<i>E</i><sub>i</sub> | <i>A</i>)", "v": "posterior. Cause given effect. This is what the question wants." }
          ]
        },
        {
          "t": "diagram",
          "kind": "tree",
          "kicker": "FIGURE · THE TREE IS THE FORMULA MADE VISIBLE, TAP ONE",
          "chips": ["TWO CAUSES", "THREE CAUSES", "BACKWARDS"],
          "captions": [
            "Bag I holds 4 red and 6 blue, Bag II holds 7 red and 3 blue, and a bag is chosen at random. Level one fans out to the two causes, each with prior 1/2. Level two is the draw, red or blue, and it is expanded from the first cause only because both causes split the same two ways, which is exactly what the multiplier badge records. The figure has no room to letter the second-stage branches, so the node names carry each bag's red count out of ten instead: those are the likelihoods 4/10 and 7/10. Each path product is prior times likelihood, so the two red paths give 4/20 and 7/20.",
            "Three production lines, with the priors written into the node names: L1 makes 60 percent of output, L2 makes 25, L3 makes 15. Their defect rates are 2, 4 and 8 percent. Every line splits the same two ways, defective or not, so the badge again says the picture is complete. The three defective path products are 0.012, 0.010 and 0.012, and total probability is their sum.",
            "The same tree read backwards, with the node names now carrying each line's defective path product rather than its prior. Total probability added those three going forward; Bayes asks what fraction of the total travelled through one particular line, which is that line's path product over the sum, so L1 gets 0.012/0.034 = 6/17. Drawing the tree first makes the denominator impossible to get wrong, because you literally add up the paths you drew."
          ],
          "frames": [
            {
              "tree": {
                "root": "pick",
                "levels": [
                  { "label": "bag", "count": 2, "names": ["I: 4 red", "II: 7 red"] },
                  { "label": "ball", "count": 2 }
                ],
                "total": "P(red) = 4/20 + 7/20 = 11/20"
              }
            },
            {
              "tree": {
                "root": "an item",
                "levels": [
                  { "label": "line", "count": 3, "names": ["L1 60%", "L2 25%", "L3 15%"] },
                  { "label": "item", "count": 2 }
                ],
                "total": "P(defect) = 0.034"
              }
            },
            {
              "tree": {
                "root": "defective",
                "levels": [
                  { "label": "line", "count": 3, "names": ["L1 .012", "L2 .010", "L3 .012"] },
                  { "label": "item", "count": 2 }
                ],
                "total": "P(L1 | defect) = 6/17"
              }
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · BAYES FROM TWO THINGS YOU ALREADY HAVE, TAP A LINE",
          "steps": [
            {
              "eq": "P(Eᵢ | A) = P(Eᵢ ∩ A) / P(A)",
              "why": "Just the definition of conditional probability from topic 01, applied to the cause you want and the evidence you have. Nothing has been assumed yet, and the whole theorem is the work of rewriting the two halves of this fraction."
            },
            {
              "eq": "numerator: P(Eᵢ ∩ A) = P(Eᵢ) P(A | Eᵢ)",
              "why": "The multiplication theorem, taken the convenient way round. Condition on the cause, because the likelihood of the effect given the cause is what the question actually hands you, while the other order would need the very posterior you are trying to find."
            },
            {
              "eq": "denominator: P(A) = ∑ P(Eⱼ) P(A | Eⱼ)",
              "why": "Total probability. The causes are exhaustive so A can be sliced along them, and disjoint so the slices add without any overlap correction. Both partition properties are used, one for each of those two moves."
            },
            {
              "eq": "P(Eᵢ | A) = P(Eᵢ) P(A | Eᵢ) / ∑ P(Eⱼ) P(A | Eⱼ)",
              "why": "Put the two halves together. The physical content is that you are handed effect-given-cause and want cause-given-effect, and Bayes is the bridge that flips the direction while total probability builds its denominator."
            }
          ]
        },
        {
          "t": "p",
          "html": "The trap your intuition sets here has a name: <b>base-rate neglect</b>. Suppose supplier <i>C</i> has the worst spoilage rate but ships the least stock. Bite a stale piece and your gut screams <i>C</i>, but if <i>C</i> barely ships anything, sheer volume from <i>A</i> can make <i>A</i> the likelier culprit even at a lower spoilage rate. Bayes forces you to respect both numbers. Forgetting the prior is the classic medical-test blunder: a test that is 95 percent accurate for a rare disease can still leave a positive patient far more likely to be healthy than sick, simply because healthy people vastly outnumber sick ones."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE TWO-CAUSE FORM BOARDS ASK FOR",
          "tag": "DISEASE TEST AND SINGLE BAG",
          "main": "<i>P</i>(<i>E</i> | <i>A</i>) = <i>P</i>(<i>E</i>) <i>P</i>(<i>A</i> | <i>E</i>) / [ <i>P</i>(<i>E</i>) <i>P</i>(<i>A</i> | <i>E</i>) + <i>P</i>(<i>E</i>′) <i>P</i>(<i>A</i> | <i>E</i>′) ]",
          "legend": [
            "The partition here is just an event and its complement, which is automatically disjoint and exhaustive.",
            "Two path products on the bottom, one of them repeated on top. That is the whole formula.",
            "Recognising this shape lets you write a Board answer in one line."
          ],
          "note": "The false-positive term <i>P</i>(<i>E</i>′) <i>P</i>(<i>A</i> | <i>E</i>′) is the one students omit, and it is usually the larger of the two when the condition is rare."
        },
        {
          "t": "proc",
          "title": "The three-column table",
          "steps": [
            "One <b>row per cause</b>. Write the causes down first and check they are disjoint and exhaustive before anything else.",
            "Column one, the <b>prior</b> <i>P</i>(<i>E</i><sub>i</sub>). These must add to 1 across the rows, and checking that is the cheapest error-catch in the topic.",
            "Column two, the <b>likelihood</b> <i>P</i>(<i>A</i> | <i>E</i><sub>i</sub>). These do <b>not</b> add to 1 and are not supposed to; they are measured in different worlds.",
            "Column three, the <b>product</b>. Sum that column: the total is <i>P</i>(<i>A</i>), your denominator, and now it cannot be wrong.",
            "Each posterior is <b>that row's product divided by the column total</b>. Finish by checking the posteriors add to 1."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "Bag I contains 4 red and 6 blue balls, Bag II contains 7 red and 3 blue. A bag is chosen at random and one ball is drawn. It is <b>red</b>. Find the probability it came from Bag I.",
          "steps": [
            "Causes: <i>E</i><sub>1</sub> Bag I chosen, <i>E</i><sub>2</sub> Bag II chosen, a partition with priors 1/2 each. Evidence <i>A</i> is red.",
            "Likelihoods: <i>P</i>(<i>A</i> | <i>E</i><sub>1</sub>) = 4/10 and <i>P</i>(<i>A</i> | <i>E</i><sub>2</sub>) = 7/10.",
            "Total probability: <i>P</i>(<i>A</i>) = (1/2)(4/10) + (1/2)(7/10) = 4/20 + 7/20 = 11/20.",
            "Bayes: (4/20) divided by (11/20)."
          ],
          "ans": "<i>P</i>(Bag I | red) = 4/11. Check: <i>P</i>(Bag II | red) = 7/11 and the two add to 1, as posteriors over a partition must. Bag II is the likelier source because it is redder, and the equal priors let the likelihoods decide alone."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN SPEED TRAP",
          "q": "In a large town 2 percent of people carry a condition. A screening test flags a carrier 95 percent of the time and wrongly flags a non-carrier 10 percent of the time. A randomly chosen person tests <b>positive</b>. Roughly how likely is it that they carry the condition?",
          "steps": [
            "Do not answer 95 percent. That is a likelihood, not a posterior, and it is the whole trap.",
            "Priors: <i>P</i>(<i>D</i>) = 0.02, <i>P</i>(<i>D</i>′) = 0.98. Likelihoods: 0.95 and 0.10.",
            "<i>P</i>(positive) = 0.02(0.95) + 0.98(0.10) = 0.019 + 0.098 = 0.117.",
            "<i>P</i>(<i>D</i> | positive) = 0.019/0.117."
          ],
          "ans": "About 0.162, roughly 16 percent. Carriers are rare, so the 0.098 flood of false positives from the huge non-carrier pool swamps the 0.019 of true positives. The base rate wins, and that is the hallmark Bayes surprise."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Three identical boxes sit on a table. Box <i>A</i> holds 3 white and 2 black balls, Box <i>B</i> holds 1 white and 4 black, Box <i>C</i> holds 4 white and 1 black. A box is chosen at random and <b>two balls are drawn together</b>. Both are white. Find <i>P</i>(the box was <i>C</i>).",
          "steps": [
            "Priors 1/3 each. The evidence <i>W</i> is “both drawn balls white”, and each likelihood is a combinations count.",
            "<i>P</i>(<i>W</i> | <i>A</i>) = <sup>3</sup>C<sub>2</sub> / <sup>5</sup>C<sub>2</sub> = 3/10 and <i>P</i>(<i>W</i> | <i>C</i>) = <sup>4</sup>C<sub>2</sub> / <sup>5</sup>C<sub>2</sub> = 6/10.",
            "<i>P</i>(<i>W</i> | <i>B</i>) = <sup>1</sup>C<sub>2</sub> / <sup>5</sup>C<sub>2</sub> = 0, since one white ball cannot supply two.",
            "<i>P</i>(<i>W</i>) = (1/3)(3/10 + 0 + 6/10) = (1/3)(9/10) = 3/10, so <i>P</i>(<i>C</i> | <i>W</i>) = (6/30)/(9/30)."
          ],
          "ans": "<i>P</i>(<i>C</i> | both white) = 2/3, with <i>P</i>(<i>A</i> | <i>W</i>) = 1/3 and <i>P</i>(<i>B</i> | <i>W</i>) = 0. A zero likelihood is not a problem, it is information: Box <i>B</i> is eliminated outright, and the three posteriors still add to 1."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A workshop runs three lines. <i>L</i><sub>1</sub> makes 60 percent of output at a 2 percent defect rate, <i>L</i><sub>2</sub> makes 25 percent at 4 percent, <i>L</i><sub>3</sub> makes 15 percent at 8 percent. An item is found <b>defective</b>. Find the posterior for each line, and say which line quality control should inspect first.",
          "steps": [
            "Products, prior times likelihood: 0.60(0.02) = 0.012, 0.25(0.04) = 0.010, 0.15(0.08) = 0.012.",
            "Total: <i>P</i>(defective) = 0.012 + 0.010 + 0.012 = 0.034.",
            "Posteriors: 0.012/0.034 = 6/17 ≈ 0.353, 0.010/0.034 = 5/17 ≈ 0.294, 0.012/0.034 = 6/17 ≈ 0.353.",
            "Check: 6/17 + 5/17 + 6/17 = 1."
          ],
          "ans": "<i>L</i><sub>1</sub> and <i>L</i><sub>3</sub> are <b>tied</b> as the most likely source. <i>L</i><sub>3</sub> is four times as defect-prone as <i>L</i><sub>1</sub> and yet carries equal blame, because <i>L</i><sub>1</sub> produces four times the volume. High volume at a low rate is exactly as guilty as low volume at a high rate, which is the whole lesson of weighting by the prior."
        },
        {
          "t": "mcq",
          "q": "In Bayes' Theorem the denominator, the sum of <i>P</i>(<i>E</i><sub>j</sub>) <i>P</i>(<i>A</i> | <i>E</i><sub>j</sub>) over all <i>j</i>, equals:",
          "opts": [
            { "label": "<i>P</i>(<i>A</i> | <i>E</i><sub>i</sub>)", "nudge": "That is a single likelihood, one term of the sum. Picking it means forgetting to add over <b>all</b> the causes, which is the single most common structural error in the topic." },
            { "label": "<i>P</i>(<i>E</i><sub>i</sub> ∩ <i>A</i>)", "nudge": "That is the <b>numerator</b> for one cause, prior times likelihood for that row only. Dividing a quantity by itself would give 1 for every cause." },
            { "label": "<i>P</i>(<i>A</i>)" },
            { "label": "1", "nudge": "This confuses “the posteriors sum to 1”, which is true, with “the denominator is 1”, which is not. The denominator is <i>P</i>(<i>A</i>), and it is generally well below 1." }
          ],
          "correct": 2,
          "solution": "By the theorem of total probability the sum is exactly P(A), the probability of the evidence. That is why the denominator is called the total probability of the evidence, and why the table method builds it as a column sum."
        },
        {
          "t": "mcq",
          "q": "For a partition {<i>E</i><sub>1</sub>, <i>E</i><sub>2</sub>, <i>E</i><sub>3</sub>} and an event <i>A</i>, you know <i>P</i>(<i>E</i><sub>1</sub> | <i>A</i>) = 0.5 and <i>P</i>(<i>E</i><sub>2</sub> | <i>A</i>) = 0.3. Then <i>P</i>(<i>E</i><sub>3</sub> | <i>A</i>) is:",
          "opts": [
            { "label": "0.2" },
            { "label": "0.8", "nudge": "This adds the two given posteriors instead of subtracting them from 1, which answers a question nobody asked: 0.8 is <i>P</i>(<i>E</i><sub>1</sub> or <i>E</i><sub>2</sub> | <i>A</i>)." },
            { "label": "cannot be determined", "nudge": "It can. The partition guarantees the posteriors sum to 1, so the third is forced with no further data at all. Missing that is missing the free consistency check." },
            { "label": "0", "nudge": "This assumes <i>E</i><sub>3</sub> is impossible, which nothing in the question says. A partition requires every cause to have positive probability." }
          ],
          "correct": 0,
          "solution": "Posteriors over a partition sum to 1, because given the evidence exactly one cause must have been at work. So P(E3 | A) = 1 − 0.5 − 0.3 = 0.2. Use this as a check on every Bayes answer you write."
        },
        {
          "t": "mcq",
          "q": "A test for a disease of 1 percent prevalence is 99 percent sensitive and 99 percent specific. A patient tests positive. The probability they have the disease is closest to:",
          "opts": [
            { "label": "99 percent", "nudge": "Pure base-rate neglect: this quotes the sensitivity, which is <i>P</i>(positive | disease), and calls it <i>P</i>(disease | positive). The two run in opposite directions." },
            { "label": "50 percent" },
            { "label": "1 percent", "nudge": "This quotes the prior and ignores the test result entirely. The positive result does move the number, and a lot: from 1 percent to about 50." },
            { "label": "9 percent", "nudge": "The size you get by mixing up sensitivity and specificity in the two path products. Write the table and the two terms come out equal, which is what forces the answer to a half." }
          ],
          "correct": 1,
          "solution": "P(positive) = 0.01(0.99) + 0.99(0.01) = 0.0099 + 0.0099 = 0.0198, so the posterior is 0.0099/0.0198 = 0.5. The two path products are equal because a 1 percent disease rate and a 1 percent false-positive rate exactly balance. With a rare disease, even a very good test leaves a coin flip after one positive."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "Urn <i>X</i> has 5 red and 5 green balls, Urn <i>Y</i> has 3 red and 7 green. An urn is picked at random and the ball drawn is <b>green</b>. Find <i>P</i>(it came from <i>X</i>).",
              "a": "Products: (1/2)(5/10) = 5/20 and (1/2)(7/10) = 7/20. Total 12/20, so <i>P</i>(<i>X</i> | green) = 5/12 and <i>P</i>(<i>Y</i> | green) = 7/12, which add to 1."
            },
            {
              "q": "Machines <i>M</i><sub>1</sub> and <i>M</i><sub>2</sub> produce 70 and 30 percent of the bolts, with defect rates 3 and 5 percent. A bolt is defective. Find <i>P</i>(it came from <i>M</i><sub>2</sub>).",
              "a": "Products: 0.7(0.03) = 0.021 and 0.3(0.05) = 0.015. Total 0.036, so <i>P</i>(<i>M</i><sub>2</sub> | defective) = 0.015/0.036 = 15/36 = 5/12. The high-volume machine still takes most of the blame."
            },
            {
              "q": "A drawer holds one fair coin, one two-headed coin and one biased coin with <i>P</i>(head) = 3/4. A coin is chosen at random and tossed once, showing a <b>head</b>. Find <i>P</i>(it was the two-headed coin).",
              "a": "Products: (1/3)(1/2), (1/3)(1) and (1/3)(3/4). Total = (1/3)(9/4) = 3/4. So the posterior is (1/3)/(3/4) = 4/9. The other two posteriors are 2/9 and 3/9, and the three add to 1."
            },
            {
              "q": "A student knows the answer to a four-option question with probability 2/3 and otherwise guesses. Given the answer was correct, find <i>P</i>(the student knew it).",
              "a": "<i>P</i>(correct) = (2/3)(1) + (1/3)(1/4) = 2/3 + 1/12 = 3/4. Posterior = (2/3)/(3/4) = 8/9. Being right is strong but not conclusive evidence of knowing, because a lucky guess is still possible."
            },
            {
              "q": "Box I holds cards numbered 1 to 30 and Box II holds cards 31 to 50. A box is chosen at random and the card drawn is <b>not prime</b>. Find <i>P</i>(it came from Box I).",
              "a": "Primes up to 30 number 10, so Box I has 20 non-primes and the likelihood is 2/3. Between 31 and 50 there are 5 primes, so Box II has 15 of 20 and the likelihood is 3/4. <i>P</i>(non-prime) = (1/2)(2/3) + (1/2)(3/4) = 17/24, and the posterior is (1/3)/(17/24) = 8/17."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Base-rate neglect.</b> Quoting the likelihood <i>P</i>(effect | cause) as if it were the posterior <i>P</i>(cause | effect). A test's accuracy is not the probability that you have the disease.",
            "<b>Dividing by one term.</b> Using a single <i>P</i>(<i>E</i><sub>j</sub>) <i>P</i>(<i>A</i> | <i>E</i><sub>j</sub>) instead of the full sum. The denominator is always the whole column total.",
            "<b>Causes that are not a partition.</b> Overlapping or incomplete cases make the formula give a confident wrong number rather than an error. If your priors do not add to 1, stop.",
            "<b>Reading the likelihoods as if they should add to 1.</b> They are conditional on different causes, so they live in different worlds and there is no reason for them to.",
            "<b>Skipping the closing check.</b> Posteriors over a partition add to 1. Two extra additions catch a wrong denominator, a missed case and most sign slips."
          ]
        },
        {
          "t": "protip",
          "html": "build the tiny table every single time, even when the problem looks small: one row per cause, columns prior, likelihood, product. the summed product column is your denominator and each posterior is that row over the total. it turns the full 5 to 6 mark Board answer into something mechanical, it is what earns method marks, and it makes the classic wrong-denominator error impossible because you never write a denominator you did not just compute."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "partition: disjoint + exhaustive + every P(Eᵢ) > 0", "note": "check this before any formula" },
            { "f": "P(A) = ∑ P(Eⱼ) P(A | Eⱼ)", "note": "forward: weight each likelihood by its prior" },
            { "f": "P(Eᵢ | A) = P(Eᵢ)P(A | Eᵢ) / ∑ P(Eⱼ)P(A | Eⱼ)", "note": "backward: one path over all the paths" },
            { "f": "posterior = prior × likelihood / P(evidence)", "note": "the denominator is never a single term" },
            { "f": "two causes: P(E)P(A|E) / [P(E)P(A|E) + P(E′)P(A|E′)]", "note": "the disease-test and single-bag template" },
            { "f": "∑ P(Eᵢ | A) = 1", "note": "free self-check, and marks for writing it" }
          ],
          "aids": [
            "“total adds the causes, bayes blames one cause”",
            "“prior times likelihood on top, all of them underneath”"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Bayes in Stages: Repeated Evidence and Transfers",
      "chip": "04 UPDATE",
      "kalam": "today's posterior is tomorrow's prior, and a moved ball changes the bag",
      "blocks": [
        {
          "t": "p",
          "html": "Real evidence rarely arrives all at once. A patient is tested, then tested again. A machine is inspected, then inspected again. The temptation is to start the whole calculation over from the original prior each time, and it is both slow and wrong-headed. The right move is one sentence long: <b>today's posterior becomes tomorrow's prior</b>."
        },
        {
          "t": "def",
          "term": "Chained updating",
          "html": "After evidence <i>A</i><sub>1</sub> arrives, the posteriors <i>P</i>(<i>E</i><sub>i</sub> | <i>A</i><sub>1</sub>) are a fresh set of priors over the same partition: they are non-negative and they sum to 1, which is all a prior has to be. Feed them back into Bayes with the next likelihood <i>P</i>(<i>A</i><sub>2</sub> | <i>E</i><sub>i</sub>) and you have <i>P</i>(<i>E</i><sub>i</sub> | <i>A</i><sub>1</sub> ∩ <i>A</i><sub>2</sub>). The only hypothesis needed is that the two observations are <b>independent given the cause</b>."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · TWO PIECES OF EVIDENCE, ONE PARTITION",
          "tag": "JEE MAIN AND ADVANCED",
          "main": "<i>P</i>(<i>E</i><sub>i</sub> | <i>A</i><sub>1</sub> ∩ <i>A</i><sub>2</sub>) = <i>P</i>(<i>E</i><sub>i</sub>) <i>P</i>(<i>A</i><sub>1</sub> | <i>E</i><sub>i</sub>) <i>P</i>(<i>A</i><sub>2</sub> | <i>E</i><sub>i</sub>) / ∑ <i>P</i>(<i>E</i><sub>j</sub>) <i>P</i>(<i>A</i><sub>1</sub> | <i>E</i><sub>j</sub>) <i>P</i>(<i>A</i><sub>2</sub> | <i>E</i><sub>j</sub>)",
          "legend": [
            "One extra likelihood factor per observation, on every row of the table.",
            "Conditional independence is what licenses the product <i>P</i>(<i>A</i><sub>1</sub> ∩ <i>A</i><sub>2</sub> | <i>E</i><sub>j</sub>) = <i>P</i>(<i>A</i><sub>1</sub> | <i>E</i><sub>j</sub>) <i>P</i>(<i>A</i><sub>2</sub> | <i>E</i><sub>j</sub>).",
            "The observations are <b>not</b> independent unconditionally. A first positive makes a second positive far likelier, precisely because it shifts belief about the cause."
          ],
          "note": "Running Bayes twice and running it once on the compound evidence give the same number. Use whichever is less arithmetic, and quote the agreement as your check."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY CHAINING AND ONE-SHOT AGREE, TAP A LINE",
          "steps": [
            {
              "eq": "treat A₁ ∩ A₂ as one observation and apply Bayes",
              "why": "Nothing forbids calling a compound event a single piece of evidence. Bayes then needs the total probability of that compound event, which is the sum over causes of the prior times the compound likelihood."
            },
            {
              "eq": "P(A₁ ∩ A₂ | Eⱼ) = P(A₁ | Eⱼ) P(A₂ | Eⱼ)",
              "why": "This is the hypothesis, conditional independence, and the only place it is used. Given the cause, the two readings do not influence each other, which is exactly what independent test results means. Without it the compound likelihood cannot be split at all."
            },
            {
              "eq": "numerator = [P(Eᵢ) P(A₁ | Eᵢ)] · P(A₂ | Eᵢ)",
              "why": "Group the first two factors. The bracket is the unnormalised posterior after the first observation, that is, the numerator Bayes would have produced at stage one, sitting beside the fresh likelihood for stage two."
            },
            {
              "eq": "divide the bracket by P(A₁) to get P(Eᵢ | A₁), then renormalise",
              "why": "Dividing every row by the same constant P(A₁) changes nothing about the final ratio, because the denominator is divided by it too. So the bracket may be replaced by the stage-one posterior and the argument repeats. One grand Bayes and two chained ones land on the same answer."
            }
          ]
        },
        {
          "t": "p",
          "html": "The numbers tell a story worth carrying. In a population where 1 percent carry a condition, one positive from a test that detects carriers 90 percent of the time and clears healthy people 95 percent of the time lifts the chance from 1 percent to about 15 percent. A <b>second</b> positive lifts it to about 77 percent. Evidence compounds, and base rates never stop mattering: two positives cannot manufacture near-certainty out of a 1 percent prior, however good the test, because the healthy pool is 99 times larger."
        },
        {
          "t": "think",
          "html": "you do not rebuild your opinion of a person from scratch every time they do something. you carry forward what you already believed and nudge it. bayes is that nudge written down, and the whole content of chaining is that the nudges compose."
        },
        {
          "t": "p",
          "html": "The other Advanced costume is the <b>transfer experiment</b>. A ball moves from one bag to another, is stirred in, and only then is a ball drawn. Boards love it and students lose it in one place: the cause is now the <b>colour of the transferred ball</b>, and the likelihood must be computed from the <b>altered</b> destination bag. Two different bags, two different jobs. Mix them up and every number after is wrong."
        },
        {
          "t": "defgrid",
          "title": "Which bag answers which question",
          "rows": [
            { "k": "the prior", "v": "read off the <b>source</b> bag, before anything moves. A bag with 3 red and 4 black gives priors 3/7 and 4/7." },
            { "k": "the cause", "v": "the <b>colour</b> of the ball that moved. Two colours means a two-cause partition, and it is exhaustive because something moved." },
            { "k": "the likelihood", "v": "read off the <b>destination</b> bag, after the move. Rebuild its composition first, on paper." },
            { "k": "the new total", "v": "the destination gains exactly one ball, so both likelihoods share the same denominator." },
            { "k": "the evidence", "v": "the colour actually drawn from the destination. Everything before it is invisible." }
          ]
        },
        {
          "t": "proc",
          "title": "Any transfer problem",
          "steps": [
            "Write the <b>source</b> composition and read the priors straight off it. This is the step that is skipped, and skipping it usually shows up as a lazy 1/2 and 1/2.",
            "For each colour that could move, <b>rewrite the destination bag</b> on paper. One ball in, no ball out, so its total goes up by one.",
            "Read each likelihood from its own rewritten bag. The two likelihoods differ by exactly one ball, which is a useful sanity check.",
            "Multiply prior by likelihood on each row and sum for <i>P</i>(evidence).",
            "Divide the row you want by that sum, then check the posteriors add to 1 and that the posterior sits on the sensible side of its prior."
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · A TRANSFER, LINE BY LINE, TAP A LINE",
          "steps": [
            {
              "eq": "Bag I: 3 red, 4 black. Priors P(black moved) = 4/7, P(red moved) = 3/7",
              "why": "The transferred ball is drawn at random from Bag I, so its colour follows Bag I's own composition. Four of the seven balls there are black. Attaching 3/7 to black because the word red appears first in the question is the single commonest error in this family."
            },
            {
              "eq": "black moved ⇒ Bag II becomes 5 red, 4 black, nine balls",
              "why": "Bag II started with 5 red and 3 black. One black arrives, nothing leaves, so it holds nine balls of which five are red. The likelihood of drawing red under this cause is therefore 5/9."
            },
            {
              "eq": "red moved ⇒ Bag II becomes 6 red, 3 black, so P(red drawn) = 6/9",
              "why": "The same rebuild for the other cause. Notice the two destinations differ by exactly one ball, and that both have nine, which is the check that you rebuilt rather than guessed."
            },
            {
              "eq": "P(red drawn) = (4/7)(5/9) + (3/7)(6/9) = 20/63 + 18/63 = 38/63",
              "why": "Total probability over the two-colour partition. Each term is a path product, prior times likelihood, and the two paths cannot overlap because only one ball moved."
            },
            {
              "eq": "P(black moved | red drawn) = (20/63) / (38/63) = 10/19",
              "why": "Bayes. Sanity check the direction: the prior was 4/7 ≈ 0.571 and the posterior is 10/19 ≈ 0.526, slightly lower. That is right, because moving a black ball leaves Bag II proportionally less red, so drawing red is mild evidence against a black transfer. The companion posterior is 18/38 = 9/19, and the two add to 1."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A disease affects 1 percent of a population. A test detects a carrier with probability 0.9 and clears a healthy person with probability 0.95. A patient tests positive <b>twice</b>, the two readings independent given carrier status. Find <i>P</i>(carrier).",
          "steps": [
            "Stage one. Priors 0.01 and 0.99, likelihoods 0.9 and 0.05. <i>P</i>(positive) = 0.009 + 0.0495 = 0.0585, so the posterior is 0.009/0.0585 = 2/13 ≈ 0.154.",
            "Stage two. Feed 2/13 and 11/13 back in as priors with the same likelihoods.",
            "<i>P</i>(carrier | two positives) = (2/13)(0.9) / [(2/13)(0.9) + (11/13)(0.05)] = 1.8 / (1.8 + 0.55) = 180/235.",
            "One-shot check: 0.01(0.9)<sup>2</sup> = 0.0081 and 0.99(0.05)<sup>2</sup> = 0.002475, total 0.010575, and 0.0081/0.010575 gives the same value."
          ],
          "ans": "36/47 ≈ 0.766. Two routes, one answer. One positive barely lifts a 1 percent prior to 15 percent, a second leaps it to about 77 percent, and neither reaches certainty because the healthy pool is 99 times larger."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "Bag I holds 4 white and 2 black balls, Bag II holds 1 white and 5 black. One ball moves at random from Bag I to Bag II, is stirred in, and then one ball is drawn from Bag II. It is <b>white</b>. Find <i>P</i>(the moved ball was white).",
          "steps": [
            "Priors from the <b>source</b> bag: white moves with probability 4/6 = 2/3, black with 2/6 = 1/3.",
            "White moved: Bag II becomes 2 white and 5 black, seven balls, so <i>P</i>(white drawn) = 2/7.",
            "Black moved: Bag II becomes 1 white and 6 black, so <i>P</i>(white drawn) = 1/7.",
            "<i>P</i>(white drawn) = (2/3)(2/7) + (1/3)(1/7) = 4/21 + 1/21 = 5/21, and the posterior is (4/21)/(5/21)."
          ],
          "ans": "4/5. The posterior 0.8 sits above the prior 2/3, which is the right direction: drawing white is evidence that a white ball was the one that moved. Using 1/2 and 1/2 as priors here, because there are two colours, throws away the composition of Bag I and is the classic way to lose the question."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Urn <i>U</i><sub>1</sub> holds 3 white and 2 red balls, Urn <i>U</i><sub>2</sub> holds 1 white ball. A fair coin is tossed: on heads one ball moves from <i>U</i><sub>1</sub> to <i>U</i><sub>2</sub>, on tails two balls move. Then one ball is drawn from <i>U</i><sub>2</sub>. (a) Find <i>P</i>(it is white). (b) Given it is white, find <i>P</i>(the coin showed heads).",
          "steps": [
            "Heads. The moved ball is white with probability 3/5, leaving <i>U</i><sub>2</sub> with 2 white, so white is certain; or red with probability 2/5, leaving 1 white and 1 red. So <i>P</i>(<i>W</i> | heads) = (3/5)(1) + (2/5)(1/2) = 4/5.",
            "Tails. Two balls move, chosen from 5 in <sup>5</sup>C<sub>2</sub> = 10 ways: 2 white with probability 3/10, one of each with 6/10, 2 red with 1/10.",
            "<i>U</i><sub>2</sub> then holds 3 white; or 2 white and 1 red; or 1 white and 2 red. So <i>P</i>(<i>W</i> | tails) = (3/10)(1) + (6/10)(2/3) + (1/10)(1/3) = 9/30 + 12/30 + 1/30 = 11/15.",
            "(a) <i>P</i>(<i>W</i>) = (1/2)(4/5) + (1/2)(11/15) = 12/30 + 11/30. (b) Posterior = (2/5)/(23/30)."
          ],
          "ans": "(a) 23/30. (b) <i>P</i>(heads | white) = 12/23. Two layers of total probability stacked, one inside each coin branch, and the outer Bayes then runs on the two branch totals. The heads branch is the likelier source because moving fewer balls dilutes <i>U</i><sub>2</sub>'s single white less."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED 2016 PATTERN",
          "q": "A factory has two plants. <i>T</i><sub>1</sub> makes 20 percent of the computers and <i>T</i><sub>2</sub> makes 80 percent. Overall 7 percent are defective, and <i>P</i>(defective | <i>T</i><sub>1</sub>) = 10 <i>P</i>(defective | <i>T</i><sub>2</sub>). A computer is found <b>not</b> defective. Find <i>P</i>(it came from <i>T</i><sub>2</sub>).",
          "steps": [
            "Let <i>P</i>(<i>D</i> | <i>T</i><sub>2</sub>) = <i>x</i>, so <i>P</i>(<i>D</i> | <i>T</i><sub>1</sub>) = 10<i>x</i>. Total probability runs backwards here to pin the unknown: 0.2(10<i>x</i>) + 0.8<i>x</i> = 2.8<i>x</i> = 0.07, so <i>x</i> = 0.025.",
            "Hence <i>P</i>(<i>D</i> | <i>T</i><sub>1</sub>) = 0.25 and <i>P</i>(<i>D</i> | <i>T</i><sub>2</sub>) = 0.025.",
            "Complement the likelihoods: <i>P</i>(<i>D</i>′ | <i>T</i><sub>1</sub>) = 0.75 and <i>P</i>(<i>D</i>′ | <i>T</i><sub>2</sub>) = 0.975.",
            "<i>P</i>(<i>D</i>′) = 0.2(0.75) + 0.8(0.975) = 0.15 + 0.78 = 0.93, which agrees with 1 − 0.07. Posterior = 0.78/0.93."
          ],
          "ans": "26/31 ≈ 0.839. Two lessons in one question. Total probability can be run as an <b>equation</b> to recover a missing likelihood, and complementing a likelihood is legitimate because <i>P</i>(<i>D</i>′ | <i>T</i>) = 1 − <i>P</i>(<i>D</i> | <i>T</i>), the complement rule <b>inside</b> a fixed condition."
        },
        {
          "t": "mcq",
          "q": "A ball is moved at random from Bag I, which holds 3 red and 4 black, into Bag II, which holds 5 red and 3 black. Before any draw, <i>P</i>(the moved ball is black) is:",
          "opts": [
            { "label": "3/7", "nudge": "This reads the <b>red</b> count out of Bag I. The transferred ball is black exactly when it is one of the 4 black balls, not one of the 3 red ones." },
            { "label": "4/7" },
            { "label": "1/2", "nudge": "Two colours does not mean two equally likely causes. The ball is drawn from Bag I, so its colour follows Bag I's composition, and Bag I is not balanced." },
            { "label": "3/8", "nudge": "This reads Bag II. Bag II is where the ball is going, and its composition sets the likelihoods later, never the prior for what moved." }
          ],
          "correct": 1,
          "solution": "The prior always comes from the source bag. Bag I holds 7 balls of which 4 are black, so P(black moved) = 4/7 and P(red moved) = 3/7. Getting this backwards flips every number downstream while leaving the working looking perfectly tidy."
        },
        {
          "t": "mcq",
          "q": "Two observations arrive one after the other and are independent <b>given the cause</b>. Chaining Bayes twice, against applying Bayes once to the compound evidence, gives:",
          "opts": [
            { "label": "different answers, so the order of the evidence matters", "nudge": "Order does not matter, because both routes multiply the same two likelihoods onto the same prior. If your two routes disagree, one of them has an arithmetic slip." },
            { "label": "the same answer" },
            { "label": "the same answer only if the two likelihoods are equal", "nudge": "No extra condition is needed. The proof groups the factors differently and divides every row by the same constant, which cannot change a ratio." },
            { "label": "the same answer only for a two-cause partition", "nudge": "The argument never counts the causes. It works for any partition, and the three-cause version is a standard Advanced question." }
          ],
          "correct": 1,
          "solution": "Grouping the numerator as [prior × first likelihood] × second likelihood shows the bracket is the stage-one unnormalised posterior. Dividing every row by P(A1) rescales numerator and denominator together, so the final ratio is untouched. Use the shorter route and quote the agreement as a check."
        },
        {
          "t": "mcq",
          "q": "In the disease problem above, a patient tests <b>positive and then negative</b>. The posterior probability that they carry the condition is closest to:",
          "opts": [
            { "label": "0.15", "nudge": "That is the posterior after the first positive alone. The second reading has been collected and then not used." },
            { "label": "0.019" },
            { "label": "0.5", "nudge": "This treats one positive and one negative as cancelling to no information. They do not: a negative from a test that clears healthy people 95 percent of the time is strong evidence, far stronger than a positive from a test that false-flags 5 percent of them." },
            { "label": "0.77", "nudge": "That is the two-positive answer. The second likelihood has been read as 0.9 for a negative instead of 0.1." }
          ],
          "correct": 1,
          "solution": "Carry the posterior 2/13 forward as the prior. The negative likelihoods are P(− | D) = 0.1 and P(− | D′) = 0.95, so the posterior is (2/13)(0.1) / [(2/13)(0.1) + (11/13)(0.95)] = 0.2/10.65 = 4/213 ≈ 0.019. One clean reading almost undoes the damage of the first."
        },
        {
          "t": "mcq",
          "q": "In a transfer problem, the likelihood <i>P</i>(red drawn | a black ball was moved) must be computed from:",
          "opts": [
            { "label": "the source bag before the move", "nudge": "The source bag sets the <b>prior</b>, the chance that a black ball was the one to move. It has nothing to say about the draw, which happens elsewhere." },
            { "label": "the destination bag before the move", "nudge": "This is the commonest half-error: the right bag, the wrong moment. The whole point of the condition is that a ball has already arrived, so the composition has changed." },
            { "label": "the destination bag after the move" },
            { "label": "the two bags combined", "nudge": "The draw is made from one bag only. Pooling them invents a sample space that never existed and, incidentally, gets the total wrong by the size of the source bag." }
          ],
          "correct": 2,
          "solution": "The condition names which ball moved, so it fixes the destination bag's new composition, and the likelihood is read off that. Rewrite the destination on paper before computing anything: it gains one ball, so both likelihoods share the same denominator, which is a free check on the rebuild."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "Urn <i>A</i> holds 2 red and 3 blue, Urn <i>B</i> holds 4 red and 1 blue. An urn is chosen at random, a ball is drawn and <b>not replaced</b>, and it is red; a second ball is drawn from the same urn and is also red. Find <i>P</i>(the urn was <i>B</i>).",
              "a": "Likelihood of two reds from <i>A</i> is (2/5)(1/4) = 1/10, and from <i>B</i> is (4/5)(3/4) = 3/5, not 3/10. So <i>P</i>(two reds) = (1/2)(1/10 + 3/5) = (1/2)(7/10) = 7/20, and <i>P</i>(<i>B</i> | two reds) = (3/10)/(7/20) = 6/7. The companion posterior is 1/7."
            },
            {
              "q": "Bag I holds 2 white and 4 black balls, Bag II holds 3 white and 3 black. One ball moves from Bag I to Bag II, then one is drawn from Bag II and is <b>black</b>. Find <i>P</i>(the moved ball was black).",
              "a": "Priors from Bag I: black 4/6 = 2/3, white 1/3. Black moved gives Bag II 3 white and 4 black, so 4/7; white moved gives 4 white and 3 black, so 3/7. <i>P</i>(black drawn) = (2/3)(4/7) + (1/3)(3/7) = 8/21 + 3/21 = 11/21, and the posterior is (8/21)/(11/21) = 8/11."
            },
            {
              "q": "In the disease problem, a patient tests positive, then positive, then <b>negative</b>, all readings independent given carrier status. Find the final posterior.",
              "a": "Carry 36/47 forward as the prior, with negative likelihoods 0.1 and 0.95. Posterior = (36/47)(0.1) / [(36/47)(0.1) + (11/47)(0.95)] = 3.6/(3.6 + 10.45) = 360/1405 = 72/281 ≈ 0.256. Two positives are undone by one negative, because 0.1 against 0.95 is a much heavier likelihood ratio than 0.9 against 0.05."
            },
            {
              "q": "A box holds 5 coins: 4 fair and 1 two-headed. A coin is chosen at random and tossed twice, showing heads both times. Find <i>P</i>(it is the two-headed coin).",
              "a": "Priors 4/5 and 1/5. Likelihoods of two heads: (1/2)<sup>2</sup> = 1/4 and 1. Products 1/5 and 1/5, total 2/5, so the posterior is 1/2. Two heads has lifted a 20 percent prior to 50 percent, and a third head would take it to 2/3."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Equal priors in a transfer.</b> Two possible colours does not make them equally likely. The prior is the <b>source</b> bag's composition, and a bag with 4 black out of 7 gives 4/7, not 1/2.",
            "<b>Likelihoods from the original destination.</b> The condition says a ball has already arrived, so rebuild the destination bag first. It gains one ball, and both rebuilt bags must share that new total.",
            "<b>Restarting from the original prior.</b> On the second piece of evidence the prior is the first posterior. Going back to the beginning discards the first observation entirely.",
            "<b>Multiplying likelihoods without conditional independence.</b> The product <i>P</i>(<i>A</i><sub>1</sub> ∩ <i>A</i><sub>2</sub> | <i>E</i>) = <i>P</i>(<i>A</i><sub>1</sub> | <i>E</i>) <i>P</i>(<i>A</i><sub>2</sub> | <i>E</i>) is a hypothesis to be stated, not a reflex. Two draws without replacement from one bag are <b>not</b> conditionally independent.",
            "<b>Skipping the direction check.</b> Ask whether the evidence should push the posterior above or below its prior, then look. A posterior that moved the wrong way almost always means a swapped prior or a reversed likelihood."
          ]
        },
        {
          "t": "protip",
          "html": "for a transfer, write two small bags on your rough sheet before you write a single fraction: <b>if black moved, bag II is …</b> and <b>if red moved, bag II is …</b>. both must have the same number of balls, one more than they started with, and that single check catches nearly every slip in this family. for staged evidence, keep the three-column table and just add one likelihood column per observation. same table, one more column, no restart."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "P(Eᵢ | A₁) becomes the prior for the next update", "note": "chain, never restart" },
            { "f": "P(Eᵢ | A₁ ∩ A₂) ∝ P(Eᵢ) P(A₁ | Eᵢ) P(A₂ | Eᵢ)", "note": "one extra likelihood column per observation" },
            { "f": "needs A₁, A₂ independent GIVEN the cause", "note": "not independent on their own, and never assumed" },
            { "f": "transfer: prior from the source bag", "note": "its composition, not one half" },
            { "f": "transfer: likelihood from the rebuilt destination", "note": "it gains one ball, so both rebuilds share a total" },
            { "f": "posteriors still sum to 1 at every stage", "note": "check after each update, not only at the end" }
          ],
          "aids": [
            "“yesterday's answer is today's starting belief”",
            "“source bag sets the prior, moved-into bag sets the likelihood”"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Random Variables, Mean and Variance",
      "chip": "05 EXPECT",
      "kalam": "turn an outcome into a number, then balance the ruler",
      "blocks": [
        {
          "t": "p",
          "html": "Watch one over of a T20 match and ask a simple question: how many runs came off it? The answer is a single number, 0 or 6 or an unlikely 36, and which number you get depends on how the six balls played out. You have quietly done something profound. You took a messy, unpredictable experiment and boiled each possible outcome down to <b>one real number</b>. That mapping, outcome to number, is a <b>random variable</b>."
        },
        {
          "t": "def",
          "term": "Random variable",
          "html": "A real-valued function <i>X</i> defined on the sample space <i>S</i> of a random experiment: it hands every outcome a number. Runs off an over, heads in three tosses, defective bulbs in a packet of ten, customers at a chai stall in an hour. When the values can be <b>listed</b> one by one the variable is <b>discrete</b>, and that is all the syllabus needs."
        },
        {
          "t": "p",
          "html": "Once you have a random variable the natural next question is how its values are spread. List every value <i>X</i> can take alongside the probability of each and you have its <b>probability distribution</b>: a two-row table, values on top, probabilities below, and the complete fingerprint of the variable. Two iron rules govern it. Every probability sits between 0 and 1, and they must add to <b>exactly 1</b>, because on any single run of the experiment something must happen."
        },
        {
          "t": "def",
          "term": "Probability distribution",
          "html": "The system of values <i>x</i><sub>1</sub>, …, <i>x</i><sub>n</sub> with probabilities <i>p</i><sub>i</sub> = <i>P</i>(<i>X</i> = <i>x</i><sub>i</sub>), valid exactly when <b><i>p</i><sub>i</sub> ≥ 0 for every <i>i</i></b> and <b>∑ <i>p</i><sub>i</sub> = 1</b>. Listing the values is always the first move: you cannot build a distribution until you know precisely which numbers are on the table, and a missing value is the commonest reason the sum fails."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · MEAN, ALSO CALLED EXPECTATION",
          "tag": "CBSE 3 TO 5 MARKS",
          "main": "μ = <i>E</i>(<i>X</i>) = ∑ <i>x</i><sub>i</sub> <i>p</i><sub>i</sub>",
          "legend": [
            "A <b>probability-weighted</b> average, not a plain average of the listed values.",
            "It is the long-run average if you repeated the experiment thousands of times.",
            "It need not be a value <i>X</i> can actually take. The mean of three coin tosses is 1.5 heads."
          ],
          "note": "Picture the distribution as weights placed on a ruler, one at each value, each as heavy as its probability. The mean is the single point where the ruler balances."
        },
        {
          "t": "p",
          "html": "Why the weights matter: imagine a lucky dip at a school fair where 90 percent of tickets win ₹10 and 10 percent win ₹100. A naive average of the prizes says (10 + 100)/2 = ₹55, but almost nobody wins ₹100, so that figure is wild optimism. The honest expected prize weights each value by how often it occurs: 0.9(10) + 0.1(100) = 9 + 10 = <b>₹19</b>, and ₹19 is what a fair ticket would cost in the long run. Probabilities are the weights. Ignore them and the mean is meaningless."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE MEAN AS A BALANCE POINT, TAP ONE",
          "chips": ["FAIR COIN", "WEIGHTED", "PULLED LEFT"],
          "captions": [
            "Three tosses of a fair coin, X the number of heads, with bars of height 1/8, 3/8, 3/8, 1/8. The dashed line is the mean, 1.5. Here it sits at the exact centre of the values because the distribution is symmetric, and it is also a number X can never take, which is perfectly normal: the mean is a balance point, not an outcome.",
            "X takes 1, 2 and 3 with probabilities 0.2, 0.5 and 0.3. The heavy 0.5 at the centre holds the balance near 2, and the slightly heavier right shoulder nudges it out to 2.1. Change one probability and the dashed line slides; change a value and it slides further, because distance from the pivot counts too.",
            "X takes 2, 4 and 6 with probabilities 0.5, 0.3 and 0.2. The grey line marks 4, the midpoint of the values, and the dark dashed line marks the mean, 3.4. They are not the same and there is no reason they should be: half the weight sits at 2, so the ruler balances well to the left of centre. Reading the middle of the value range as the mean is the error this picture exists to kill."
          ],
          "frames": [
            {
              "x": [-0.7, 3.7],
              "y": [-0.1, 0.46],
              "bands": [
                { "x0": -0.28, "x1": 0.28, "y0": 0, "y1": 0.125 },
                { "x0": 0.72, "x1": 1.28, "y0": 0, "y1": 0.375 },
                { "x0": 1.72, "x1": 2.28, "y0": 0, "y1": 0.375 },
                { "x0": 2.72, "x1": 3.28, "y0": 0, "y1": 0.125 }
              ],
              "curves": [{ "c": "vline", "x": 1.5, "dash": true }],
              "labels": [
                { "x": 0, "y": -0.05, "text": "0", "soft": true },
                { "x": 1, "y": -0.05, "text": "1", "soft": true },
                { "x": 2, "y": -0.05, "text": "2", "soft": true },
                { "x": 3, "y": -0.05, "text": "3", "soft": true },
                { "x": 2.75, "y": 0.43, "text": "mean 1.5" }
              ]
            },
            {
              "x": [-0.5, 3.9],
              "y": [-0.12, 0.62],
              "bands": [
                { "x0": 0.72, "x1": 1.28, "y0": 0, "y1": 0.2 },
                { "x0": 1.72, "x1": 2.28, "y0": 0, "y1": 0.5 },
                { "x0": 2.72, "x1": 3.28, "y0": 0, "y1": 0.3 }
              ],
              "curves": [{ "c": "vline", "x": 2.1, "dash": true }],
              "labels": [
                { "x": 1, "y": -0.06, "text": "1", "soft": true },
                { "x": 2, "y": -0.06, "text": "2", "soft": true },
                { "x": 3, "y": -0.06, "text": "3", "soft": true },
                { "x": 0.3, "y": 0.57, "text": "mean 2.1" }
              ]
            },
            {
              "x": [-0.6, 7.4],
              "y": [-0.12, 0.62],
              "bands": [
                { "x0": 1.55, "x1": 2.45, "y0": 0, "y1": 0.5 },
                { "x0": 3.55, "x1": 4.45, "y0": 0, "y1": 0.3 },
                { "x0": 5.55, "x1": 6.45, "y0": 0, "y1": 0.2 }
              ],
              "curves": [
                { "c": "vline", "x": 3.4, "dash": true },
                { "c": "vline", "x": 4, "dash": true, "soft": true }
              ],
              "labels": [
                { "x": 2, "y": -0.06, "text": "2", "soft": true },
                { "x": 4, "y": -0.06, "text": "4", "soft": true },
                { "x": 6, "y": -0.06, "text": "6", "soft": true },
                { "x": 0.6, "y": 0.57, "text": "mean 3.4" },
                { "x": 6.1, "y": 0.57, "text": "midpoint 4", "soft": true }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "The mean says where the distribution sits. It says nothing about how <b>consistent</b> it is, and cricket makes the gap vivid: two batsmen can average the same 40, one grinding out 40 every innings, the other alternating golden ducks with blazing centuries. Same mean, wildly different <b>spread</b>. Variance is the number that separates them."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · VARIANCE AND STANDARD DEVIATION",
          "tag": "TWO FORMS, ONE NUMBER",
          "main": "σ<sup>2</sup> = ∑ (<i>x</i><sub>i</sub> − μ)<sup>2</sup> <i>p</i><sub>i</sub> = <i>E</i>(<i>X</i><sup>2</sup>) − μ<sup>2</sup>",
          "legend": [
            "The left form is the definition: the average <b>squared</b> distance from the mean.",
            "The right form is the computational one, with <i>E</i>(<i>X</i><sup>2</sup>) = ∑ <i>x</i><sub>i</sub><sup>2</sup> <i>p</i><sub>i</sub>. Use it.",
            "Standard deviation σ is the square root of the variance, and it carries the same units as <i>X</i> while σ<sup>2</sup> carries squared units."
          ],
          "note": "Variance is never negative. A negative answer means you dropped the square on μ, and it is worth one glance at the end of every question."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHERE E(X²) − μ² COMES FROM, TAP A LINE",
          "steps": [
            {
              "eq": "Var(X) = E[(X − μ)²] = E[X² − 2μX + μ²]",
              "why": "Start from the definition and expand the square inside the expectation. Nothing has been assumed; this is algebra on the bracket before any probability is touched."
            },
            {
              "eq": "= E(X²) − 2μ E(X) + μ²",
              "why": "Expectation is a weighted sum, so it distributes across a sum and constants pull out in front. That is the entire property being used, and it is why the computational form exists at all."
            },
            {
              "eq": "= E(X²) − 2μ · μ + μ²",
              "why": "Substitute E(X) = μ, which is just the definition of the mean written the other way round. The middle term is now a constant rather than an expectation."
            },
            {
              "eq": "= E(X²) − μ²",
              "why": "Combine: −2μ² + μ² = −μ². The payoff is practical. The definition forces you to subtract μ from every value first, which is tedious with decimals; this form lets you accumulate ∑ xᵢ pᵢ and ∑ xᵢ² pᵢ in one pass down the table and combine once at the end."
            }
          ]
        },
        {
          "t": "proc",
          "title": "The four-column table",
          "steps": [
            "Set up columns <i>x</i><sub>i</sub>, <i>p</i><sub>i</sub>, <i>x</i><sub>i</sub><i>p</i><sub>i</sub> and <i>x</i><sub>i</sub><sup>2</sup><i>p</i><sub>i</sub>, one row per value.",
            "Sum the <i>p</i><sub>i</sub> column <b>first</b>. It must be 1, and that check costs nothing and catches a missing value before you have wasted any arithmetic on it.",
            "Sum the third column: that total is <i>E</i>(<i>X</i>).",
            "Sum the fourth column: that total is <i>E</i>(<i>X</i><sup>2</sup>).",
            "One final line: Var(<i>X</i>) = <i>E</i>(<i>X</i><sup>2</sup>) − [<i>E</i>(<i>X</i>)]<sup>2</sup>. For <i>X</i> on {2, 4, 6} with probabilities 0.5, 0.3, 0.2 the columns give 1.0, 3.4 and 14.0, so the variance is 14.0 − 11.56 = 2.44."
          ]
        },
        {
          "t": "p",
          "html": "Why square the deviations at all? The obvious first attempt at spread, the average <b>signed</b> deviation ∑ (<i>x</i><sub>i</sub> − μ)<i>p</i><sub>i</sub>, is always exactly 0: the positives above the mean cancel the negatives below, which is literally what makes μ the balance point. Squaring kills the sign so nothing cancels, and it also penalises far-flung values harder, since a value twice as far away contributes four times as much. That is why the erratic batsman's duck-and-century swings inflate the variance so dramatically. Taking the square root at the end returns you to the units of <i>X</i>."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · WHAT A LINEAR CHANGE DOES",
          "tag": "HEAVILY USED IN JEE",
          "main": "<i>E</i>(<i>aX</i> + <i>b</i>) = <i>a</i> <i>E</i>(<i>X</i>) + <i>b</i>, Var(<i>aX</i> + <i>b</i>) = <i>a</i><sup>2</sup> Var(<i>X</i>)",
          "legend": [
            "The constant <i>b</i> shifts the mean and <b>never</b> touches the variance. Sliding all the data sideways changes the average, not the spread.",
            "The scale factor <i>a</i> enters the variance <b>squared</b>, and its sign is therefore irrelevant.",
            "Proof in one line: <i>aX</i> + <i>b</i> − (<i>a</i>μ + <i>b</i>) = <i>a</i>(<i>X</i> − μ), so the <i>b</i> cancels itself out before the squaring even starts."
          ],
          "note": "This lets you transform a variable's summary statistics in your head and skip a whole second table, which is exactly what an Advanced part (iii) is testing."
        },
        {
          "t": "p",
          "html": "Two variables at once behave more simply than you would expect in one place and less simply in another. Expectation is <b>always</b> additive, independence or not, because it is just a weighted sum and sums can be regrouped. Products and variances are different: those need independence, and the reason is that only independence lets the joint probabilities factorise."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · SUMS, PRODUCTS AND SPREAD",
          "tag": "JEE ADVANCED",
          "main": "<i>E</i>(<i>X</i> + <i>Y</i>) = <i>E</i>(<i>X</i>) + <i>E</i>(<i>Y</i>) always",
          "legend": [
            "Under independence only: <i>E</i>(<i>XY</i>) = <i>E</i>(<i>X</i>) <i>E</i>(<i>Y</i>).",
            "Under independence only: Var(<i>X</i> ± <i>Y</i>) = Var(<i>X</i>) + Var(<i>Y</i>). The minus changes nothing, since Var(−<i>Y</i>) = Var(<i>Y</i>).",
            "In general Var(<i>X</i> + <i>Y</i>) = Var(<i>X</i>) + Var(<i>Y</i>) + 2[<i>E</i>(<i>XY</i>) − <i>E</i>(<i>X</i>)<i>E</i>(<i>Y</i>)], and the bracket is the covariance, which independence kills."
          ],
          "note": "Var(<i>XY</i>) is <b>not</b> Var(<i>X</i>) Var(<i>Y</i>), a favourite distractor. Compute it as <i>E</i>(<i>X</i><sup>2</sup>)<i>E</i>(<i>Y</i><sup>2</sup>) − [<i>E</i>(<i>X</i>)<i>E</i>(<i>Y</i>)]<sup>2</sup> under independence."
        },
        {
          "t": "def",
          "term": "Indicator variable",
          "html": "For any event <i>A</i>, the variable <i>I</i> that equals 1 when <i>A</i> occurs and 0 when it does not. Then <b><i>E</i>(<i>I</i>) = <i>P</i>(<i>A</i>)</b> and Var(<i>I</i>) = <i>P</i>(<i>A</i>)[1 − <i>P</i>(<i>A</i>)]. Any count of “how many of these things happened” can be written as a <b>sum of indicators</b>, one per thing, and since expectation is additive without any independence assumption, its mean is then just a sum of probabilities. No distribution table required."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A fair coin is tossed three times. Let <i>X</i> be the number of heads. Find the probability distribution of <i>X</i>, its mean and its variance.",
          "steps": [
            "<i>X</i> takes 0, 1, 2, 3 and there are 8 equally likely outcomes, so the probabilities are 1/8, 3/8, 3/8, 1/8. They add to 1.",
            "<i>E</i>(<i>X</i>) = (0 + 3 + 6 + 3)/8 = 12/8.",
            "<i>E</i>(<i>X</i><sup>2</sup>) = (0 + 3 + 12 + 9)/8 = 24/8 = 3.",
            "Var(<i>X</i>) = 3 − (3/2)<sup>2</sup> = 3 − 9/4."
          ],
          "ans": "Mean 3/2, variance 3/4, so σ = √3 / 2 ≈ 0.87. Cross-check by the deviation form: (9/4)(1/8) + (1/4)(3/8) + (1/4)(3/8) + (9/4)(1/8) = 24/32 = 3/4, and the two agree. The mean 1.5 is not a value <i>X</i> ever takes, which is exactly what a balance point is allowed to do."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Two cards are drawn together from a well-shuffled deck of 52. Let <i>X</i> be the number of aces. Find the distribution and the mean.",
          "steps": [
            "<i>X</i> ∈ {0, 1, 2} and the total number of ways is <sup>52</sup>C<sub>2</sub> = 1326, with 4 aces and 48 others.",
            "<i>P</i>(<i>X</i> = 0) = <sup>48</sup>C<sub>2</sub>/1326 = 1128/1326 = 188/221.",
            "<i>P</i>(<i>X</i> = 1) = (4)(48)/1326 = 192/1326 = 32/221 and <i>P</i>(<i>X</i> = 2) = 6/1326 = 1/221. Check: 188 + 32 + 1 = 221.",
            "<i>E</i>(<i>X</i>) = 0 + 32/221 + 2/221 = 34/221."
          ],
          "ans": "Mean 2/13 ≈ 0.154. Sanity check with indicators: each card is an ace with chance 4/52 = 1/13, and the expected count over two cards is 2 × 1/13 = 2/13. The two cards are <b>not</b> independent, and additivity of expectation did not care."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A discrete random variable <i>X</i> takes the values 1, 2, 3, 4 with <i>P</i>(<i>X</i> = <i>x</i>) = <i>kx</i>. (i) Find <i>k</i>. (ii) Find <i>E</i>(<i>X</i>) and Var(<i>X</i>). (iii) For <i>Y</i> = 2<i>X</i> − 1 find <i>E</i>(<i>Y</i>) and Var(<i>Y</i>) without a second table.",
          "steps": [
            "(i) ∑ <i>p</i><sub>i</sub> = <i>k</i>(1 + 2 + 3 + 4) = 10<i>k</i> = 1, so <i>k</i> = 1/10. All four probabilities 1/10, 2/10, 3/10, 4/10 lie in [0, 1], which must be checked before going on.",
            "(ii) <i>E</i>(<i>X</i>) = (1 + 4 + 9 + 16)/10 = 30/10 = 3.",
            "<i>E</i>(<i>X</i><sup>2</sup>) = (1 + 8 + 27 + 64)/10 = 100/10 = 10, so Var(<i>X</i>) = 10 − 9 = 1.",
            "(iii) <i>E</i>(<i>Y</i>) = 2(3) − 1 = 5 and Var(<i>Y</i>) = 2<sup>2</sup>(1) = 4."
          ],
          "ans": "<i>k</i> = 1/10; <i>E</i>(<i>X</i>) = 3, Var(<i>X</i>) = 1; <i>E</i>(<i>Y</i>) = 5, Var(<i>Y</i>) = 4. Read the result: doubling <i>X</i> quadrupled the spread while the −1 moved the mean and left the variance untouched. That is the scale factor entering squared and the additive constant dropping out, demonstrated on one line of arithmetic."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "<i>n</i> letters are placed at random into their <i>n</i> correspondingly addressed envelopes, one each. Let <i>X</i> be the number of letters in the correct envelope. Show that <i>E</i>(<i>X</i>) = 1 for every <i>n</i>.",
          "steps": [
            "Writing the distribution of <i>X</i> is hopeless: its probabilities involve the derangement counts you met in Class 11. Sidestep it entirely.",
            "Let <i>I</i><sub>k</sub> indicate “letter <i>k</i> lands in envelope <i>k</i>”, so <i>X</i> = <i>I</i><sub>1</sub> + … + <i>I</i><sub>n</sub>.",
            "By symmetry letter <i>k</i> is equally likely to land in any of the <i>n</i> envelopes, so <i>P</i>(<i>I</i><sub>k</sub> = 1) = 1/<i>n</i> and <i>E</i>(<i>I</i><sub>k</sub>) = 1/<i>n</i>.",
            "Expectation is additive with no independence needed, and these indicators are certainly <b>not</b> independent: <i>E</i>(<i>X</i>) = <i>n</i> × (1/<i>n</i>)."
          ],
          "ans": "<i>E</i>(<i>X</i>) = 1, whatever <i>n</i> is. The variance is also exactly 1, which you can verify by hand at <i>n</i> = 2: the two matchings give <i>X</i> = 2 or <i>X</i> = 0 with probability 1/2 each, so <i>E</i>(<i>X</i>) = 1 and Var(<i>X</i>) = 2 − 1 = 1. One hundred letters, still one expected match: that is the surprise which makes this a favourite."
        },
        {
          "t": "mcq",
          "q": "For the distribution <i>X</i> on {1, 3, 5} with probabilities {0.3, 0.4, <i>k</i>}, the values of <i>k</i> and <i>E</i>(<i>X</i>) are:",
          "opts": [
            { "label": "<i>k</i> = 0.3, <i>E</i>(<i>X</i>) = 3.0" },
            { "label": "<i>k</i> = 0.4, <i>E</i>(<i>X</i>) = 3.0", "nudge": "The mean happens to be right but <i>k</i> is not: 0.3 + 0.4 + 0.4 = 1.1, so this distribution is not valid at all and the mean was computed from a table that does not exist." },
            { "label": "<i>k</i> = 0.3, <i>E</i>(<i>X</i>) = 2.9", "nudge": "Right <i>k</i>, slipped weighted sum. Recompute carefully: 1(0.3) + 3(0.4) + 5(0.3) = 0.3 + 1.2 + 1.5." },
            { "label": "<i>k</i> = 0.7, <i>E</i>(<i>X</i>) = 3.2", "nudge": "This takes <i>k</i> = 1 − 0.3, forgetting that the 0.4 already accounts for part of the total. Every listed probability comes off the 1, not just the first." }
          ],
          "correct": 0,
          "solution": "Pin k from the sum-to-one rule before touching the mean: 0.3 + 0.4 + k = 1 gives k = 0.3. Then E(X) = 1(0.3) + 3(0.4) + 5(0.3) = 3.0. Solving for the unknown constant first is the discipline the whole question is testing."
        },
        {
          "t": "mcq",
          "q": "If Var(<i>X</i>) = 5, then Var(2<i>X</i> + 7) is:",
          "opts": [
            { "label": "5", "nudge": "This forgets the scale factor entirely. The constant leaves the variance alone, but the 2 certainly does not." },
            { "label": "10", "nudge": "This multiplies by <i>a</i> instead of <i>a</i><sup>2</sup>. Variance lives in squared units, so a scale factor has to arrive squared." },
            { "label": "17", "nudge": "This adds the +7 into the variance. A shift slides every value the same distance, so the spread cannot change." },
            { "label": "20" }
          ],
          "correct": 3,
          "solution": "Var(2X + 7) = 2² Var(X) = 4 × 5 = 20. The constant +7 shifts the mean and leaves the spread untouched, and that pair of facts is the single most-tested item in this topic."
        },
        {
          "t": "mcq",
          "q": "For a random variable <i>X</i> with <i>E</i>(<i>X</i>) = 2 and <i>E</i>(<i>X</i><sup>2</sup>) = 6, the standard deviation of <i>X</i> is:",
          "opts": [
            { "label": "4", "nudge": "This squares the mean and stops. That quantity, μ<sup>2</sup> = 4, is the thing you subtract, not the answer." },
            { "label": "2", "nudge": "This reports the variance as the standard deviation. Var(<i>X</i>) = 6 − 4 = 2 is correct, but the square root was never taken." },
            { "label": "√2" },
            { "label": "6", "nudge": "This quotes <i>E</i>(<i>X</i><sup>2</sup>) directly. That is one ingredient of the variance, not the spread itself." }
          ],
          "correct": 2,
          "solution": "Var(X) = E(X²) − [E(X)]² = 6 − 4 = 2, so σ = √2 ≈ 1.41. Standard deviation is always the square root of variance, and it is the one that shares units with X."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "Two fair dice are rolled. Let <i>X</i> be the number of dice showing a six. Find the distribution of <i>X</i> and its mean.",
              "a": "<i>P</i>(0) = 25/36, <i>P</i>(1) = 10/36, <i>P</i>(2) = 1/36, which add to 1. Mean = (10 + 2)/36 = 12/36 = 1/3. Indicator check: each die is a six with chance 1/6, so two dice give 2/6."
            },
            {
              "q": "For <i>X</i> on {0, 1, 2, 3} with probabilities {0.1, 0.3, 0.4, 0.2}, find <i>E</i>(<i>X</i>) and Var(<i>X</i>).",
              "a": "<i>E</i>(<i>X</i>) = 0 + 0.3 + 0.8 + 0.6 = 1.7 and <i>E</i>(<i>X</i><sup>2</sup>) = 0 + 0.3 + 1.6 + 1.8 = 3.7, so Var(<i>X</i>) = 3.7 − 2.89 = 0.81 and σ = 0.9."
            },
            {
              "q": "For <i>X</i> on {1, 2, 3, 4, 5} with <i>P</i>(<i>X</i> = <i>x</i>) = <i>cx</i><sup>2</sup>, find <i>c</i> and <i>P</i>(<i>X</i> ≥ 4).",
              "a": "<i>c</i>(1 + 4 + 9 + 16 + 25) = 55<i>c</i> = 1, so <i>c</i> = 1/55, and every resulting probability is positive. <i>P</i>(<i>X</i> ≥ 4) = (16 + 25)/55 = 41/55."
            },
            {
              "q": "Three balls are drawn together from a bag of 4 red and 6 white. Let <i>X</i> be the number of red balls. Find the distribution and the mean.",
              "a": "<sup>10</sup>C<sub>3</sub> = 120. <i>P</i>(0) = 20/120 = 1/6, <i>P</i>(1) = 60/120 = 1/2, <i>P</i>(2) = 36/120 = 3/10, <i>P</i>(3) = 4/120 = 1/30, and these add to 1. Mean = 0 + 1/2 + 3/5 + 1/10 = 6/5."
            },
            {
              "q": "<i>X</i> and <i>Y</i> are independent with <i>E</i>(<i>X</i>) = 5, <i>E</i>(<i>Y</i>) = 2, Var(<i>X</i>) = 3 and Var(<i>Y</i>) = 4. Find <i>E</i>(3<i>X</i> + 2<i>Y</i>), Var(3<i>X</i> + 2<i>Y</i>) and <i>E</i>(<i>XY</i>).",
              "a": "<i>E</i> = 3(5) + 2(2) = 19. Var = 9(3) + 4(4) = 27 + 16 = 43, using independence to drop the covariance. <i>E</i>(<i>XY</i>) = 5 × 2 = 10, also by independence. Note Var(<i>XY</i>) is <b>not</b> 12."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>A plain average instead of a weighted one.</b> ∑ <i>x</i><sub>i</sub>/<i>n</i> ignores that the values occur with different probabilities, and it is the single most common conceptual error in the topic.",
            "<b>Writing Var = <i>E</i>(<i>X</i><sup>2</sup>) − <i>E</i>(<i>X</i>).</b> The subtracted term is the mean <b>squared</b>. Dropping that square is what produces the impossible negative variances.",
            "<b>Reporting σ<sup>2</sup> when σ was asked, or the reverse.</b> Standard deviation is the square root, and it is the one that carries the units of <i>X</i>.",
            "<b>Skipping the sum-to-one check.</b> Not validating ∑ <i>p</i><sub>i</sub> = 1, or accepting a constant <i>k</i> that makes some probability negative. Solve for <i>k</i>, then check the whole row.",
            "<b>Assuming <i>E</i>(<i>XY</i>) = <i>E</i>(<i>X</i>)<i>E</i>(<i>Y</i>) without independence.</b> Addition is free, multiplication is not, and Var(<i>XY</i>) is never Var(<i>X</i>)Var(<i>Y</i>)."
          ]
        },
        {
          "t": "protip",
          "html": "lay every distribution question out as the four-column table, even the ones that look too small to need it: <i>x</i><sub>i</sub>, <i>p</i><sub>i</sub>, <i>x</i><sub>i</sub><i>p</i><sub>i</sub>, <i>x</i><sub>i</sub><sup>2</sup><i>p</i><sub>i</sub>. one sweep gives you the validity check, the mean and <i>E</i>(<i>X</i><sup>2</sup>), and the variance is then a single subtraction. and when the question asks for the expected <b>count</b> of something, look for indicators first: one per thing, add the probabilities, done, no table at all."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "valid ⟺ every pᵢ ≥ 0 and ∑ pᵢ = 1", "note": "check before computing anything" },
            { "f": "μ = E(X) = ∑ xᵢ pᵢ", "note": "weighted, not plain; a balance point, not an outcome" },
            { "f": "σ² = E(X²) − μ² = ∑ xᵢ²pᵢ − μ², σ = √(σ²)", "note": "the computational form is the fast one" },
            { "f": "E(aX + b) = aE(X) + b, Var(aX + b) = a²Var(X)", "note": "b shifts the mean and never the spread" },
            { "f": "E(X + Y) = E(X) + E(Y), always", "note": "products and variances need independence" },
            { "f": "E(I) = P(A) for an indicator, and counts are sums of them", "note": "n letters, n indicators, E(X) = 1" }
          ],
          "aids": [
            "“weight then sum for the mean, square-mean-out for the variance”",
            "“the ruler balances where the weight is, not in the middle”"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Bernoulli Trials, the Binomial and Waiting Times",
      "chip": "06 BINOMIAL",
      "kalam": "count the successes, or wait for the first one",
      "blocks": [
        {
          "t": "p",
          "html": "Think of a penalty shootout. Each kick has exactly two outcomes, goal or miss, and a striker of fixed quality converts with the same probability, say 0.8, on every attempt. One such two-outcome attempt with a fixed success probability is a <b>Bernoulli trial</b>, the atom of this whole topic. One coin toss, one bulb tested, one student passing, one archer's arrow. The word “success” is only a label for the outcome you are counting, so “drawing a defective item” is a perfectly good success when defectives are what you want."
        },
        {
          "t": "def",
          "term": "Bernoulli trial",
          "html": "A single trial with exactly two outcomes, success with probability <i>p</i> and failure with <i>q</i> = 1 − <i>p</i>. A <b>sequence</b> of trials is Bernoulli when all four of these hold: the number of trials <i>n</i> is <b>finite and fixed</b>; the trials are <b>independent</b>; each has <b>two outcomes</b>; and <i>p</i> is <b>constant</b> across them. Strip away any one and the binomial formula no longer applies."
        },
        {
          "t": "p",
          "html": "Now repeat the kick <i>n</i> times under identical conditions and ask the obvious question: how many goals? That count is a random variable, and its distribution is the <b>binomial distribution</b>. It matters because so many surface stories share the same skeleton. An inspector checking 20 phones, a cricketer facing 6 identical deliveries, a student blindly guessing all 10 questions of a four-option test with success probability 1/4. Strip the story away and every one of them is “count the successes in <i>n</i> fixed, independent, equal-probability yes-or-no trials”."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE BINOMIAL DISTRIBUTION",
          "tag": "CBSE 5 TO 6 MARKS, NEAR CERTAIN",
          "main": "<i>P</i>(<i>X</i> = <i>r</i>) = <sup>n</sup>C<sub>r</sub> <i>p</i><sup>r</sup> <i>q</i><sup>n−r</sup>",
          "legend": [
            "Written <i>X</i> ∼ <i>B</i>(<i>n</i>, <i>p</i>), with <i>r</i> = 0, 1, …, <i>n</i> and <i>q</i> = 1 − <i>p</i>.",
            "Three meaningful pieces: <sup>n</sup>C<sub>r</sub> counts <b>where</b> the successes sit, <i>p</i><sup>r</sup> is the successes happening, <i>q</i><sup>n−r</sup> is the failures happening.",
            "There are <i>n</i> + 1 possible values, so the distribution always has <i>n</i> + 1 entries."
          ],
          "note": "The <i>n</i> + 1 probabilities are exactly the successive terms of the expansion of (<i>q</i> + <i>p</i>)<sup>n</sup>, which is why they automatically sum to 1 and why the distribution is called binomial."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHERE THE THREE PIECES COME FROM, TAP A LINE",
          "steps": [
            {
              "eq": "fix one pattern: r successes first, then n − r failures",
              "why": "Pin down a single specific sequence rather than the event. This is the move that makes the whole thing tractable, because one sequence has a probability you can write in one line and the event does not."
            },
            {
              "eq": "its probability is p · p ⋯ p · q · q ⋯ q = pʳ q⁽ⁿ⁻ʳ⁾",
              "why": "The trials are independent, so the probability of the whole sequence is the product of the individual trial probabilities. Independence is used exactly here and nowhere else, which is why the with-replacement condition matters so much."
            },
            {
              "eq": "every arrangement of r successes carries that same probability",
              "why": "Only the order differs, and multiplication does not care about order, so rearranging which trials succeed leaves the product untouched. The number of distinct arrangements is the number of ways to choose which r trials are the successes, namely nCr."
            },
            {
              "eq": "the arrangements are disjoint, so add: P(X = r) = nCr pʳ q⁽ⁿ⁻ʳ⁾",
              "why": "Two different arrangements cannot both happen on one run of the experiment, so their probabilities add rather than needing any overlap correction. Reading the formula as three separate pieces, rather than memorising a symbol blob, makes it almost impossible to misplace the exponents."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · MEAN, VARIANCE AND MODE",
          "tag": "READ OFF n AND p, NO TABLE",
          "main": "μ = <i>np</i>, σ<sup>2</sup> = <i>npq</i>, mode: (<i>n</i> + 1)<i>p</i> − 1 ≤ <i>r</i> ≤ (<i>n</i> + 1)<i>p</i>",
          "legend": [
            "Standard deviation is √(<i>npq</i>).",
            "Since <i>q</i> is below 1, the variance <i>npq</i> is <b>always strictly less than</b> the mean <i>np</i>. A binomial with variance above its mean is inconsistent data.",
            "When (<i>n</i> + 1)<i>p</i> is not an integer the mode is the single value ⌊(<i>n</i> + 1)<i>p</i>⌋; when it is an integer, two neighbouring values tie.",
            "Recover the parameters: <i>q</i> = variance / mean, then <i>p</i> = 1 − <i>q</i> and <i>n</i> = mean / <i>p</i>."
          ],
          "note": "The mode band comes from the ratio of consecutive terms, <i>P</i>(<i>r</i>)/<i>P</i>(<i>r</i> − 1) = (<i>n</i> − <i>r</i> + 1)<i>p</i> / (<i>rq</i>). The probabilities climb while that exceeds 1 and fall once it drops below, and setting it to 1 gives the band exactly."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · HOW THE SHAPE FOLLOWS p, TAP ONE",
          "chips": ["p = 0.8", "p = 0.5", "p = 0.2"],
          "captions": [
            "B(6, 0.8). Six shots at 0.8 each. The bars are the computed probabilities, peaking at r = 5 with 0.393, and the dashed line is the mean, np = 4.8. Mean and mode do not coincide, and note that r = 6 at 0.262 is the second tallest bar while r = 4 at 0.246 is only third. With p above one half the mass piles up at high counts and the long tail runs to the left, which is what left-skewed means.",
            "B(6, 0.5). Now p equals q, so P(r) = P(6 − r) and the picture is a perfect mirror about its centre. Mean, mode and centre all land on 3 together. Symmetry is exactly the case p = 1/2 and nothing else, so a symmetric-looking answer for any other p is a warning sign.",
            "B(6, 0.2). Compare it with the first frame bar by bar: it is the same picture reflected. Two binomials with the same n and success probabilities p and 1 − p are mirror images, because swapping success and failure relabels r as n − r. The mean is 1.2 and the mode is 1, and the tail now runs right."
          ],
          "frames": [
            {
              "x": [-0.7, 6.7],
              "y": [-0.1, 0.5],
              "bands": [
                { "x0": -0.32, "x1": 0.32, "y0": 0, "y1": 0.0001 },
                { "x0": 0.68, "x1": 1.32, "y0": 0, "y1": 0.0015 },
                { "x0": 1.68, "x1": 2.32, "y0": 0, "y1": 0.0154 },
                { "x0": 2.68, "x1": 3.32, "y0": 0, "y1": 0.0819 },
                { "x0": 3.68, "x1": 4.32, "y0": 0, "y1": 0.2458 },
                { "x0": 4.68, "x1": 5.32, "y0": 0, "y1": 0.3932 },
                { "x0": 5.68, "x1": 6.32, "y0": 0, "y1": 0.2621 }
              ],
              "curves": [{ "c": "vline", "x": 4.8, "dash": true }],
              "labels": [
                { "x": 0, "y": -0.055, "text": "0", "soft": true },
                { "x": 1, "y": -0.055, "text": "1", "soft": true },
                { "x": 2, "y": -0.055, "text": "2", "soft": true },
                { "x": 3, "y": -0.055, "text": "3", "soft": true },
                { "x": 4, "y": -0.055, "text": "4", "soft": true },
                { "x": 5, "y": -0.055, "text": "5", "soft": true },
                { "x": 6, "y": -0.055, "text": "6", "soft": true },
                { "x": 1.5, "y": 0.46, "text": "mean 4.8, mode 5" }
              ]
            },
            {
              "x": [-0.7, 6.7],
              "y": [-0.1, 0.5],
              "bands": [
                { "x0": -0.32, "x1": 0.32, "y0": 0, "y1": 0.0156 },
                { "x0": 0.68, "x1": 1.32, "y0": 0, "y1": 0.0938 },
                { "x0": 1.68, "x1": 2.32, "y0": 0, "y1": 0.2344 },
                { "x0": 2.68, "x1": 3.32, "y0": 0, "y1": 0.3125 },
                { "x0": 3.68, "x1": 4.32, "y0": 0, "y1": 0.2344 },
                { "x0": 4.68, "x1": 5.32, "y0": 0, "y1": 0.0938 },
                { "x0": 5.68, "x1": 6.32, "y0": 0, "y1": 0.0156 }
              ],
              "curves": [{ "c": "vline", "x": 3, "dash": true }],
              "labels": [
                { "x": 0, "y": -0.055, "text": "0", "soft": true },
                { "x": 1, "y": -0.055, "text": "1", "soft": true },
                { "x": 2, "y": -0.055, "text": "2", "soft": true },
                { "x": 3, "y": -0.055, "text": "3", "soft": true },
                { "x": 4, "y": -0.055, "text": "4", "soft": true },
                { "x": 5, "y": -0.055, "text": "5", "soft": true },
                { "x": 6, "y": -0.055, "text": "6", "soft": true },
                { "x": 5.2, "y": 0.46, "text": "mean 3, mode 3" }
              ]
            },
            {
              "x": [-0.7, 6.7],
              "y": [-0.1, 0.5],
              "bands": [
                { "x0": -0.32, "x1": 0.32, "y0": 0, "y1": 0.2621 },
                { "x0": 0.68, "x1": 1.32, "y0": 0, "y1": 0.3932 },
                { "x0": 1.68, "x1": 2.32, "y0": 0, "y1": 0.2458 },
                { "x0": 2.68, "x1": 3.32, "y0": 0, "y1": 0.0819 },
                { "x0": 3.68, "x1": 4.32, "y0": 0, "y1": 0.0154 },
                { "x0": 4.68, "x1": 5.32, "y0": 0, "y1": 0.0015 },
                { "x0": 5.68, "x1": 6.32, "y0": 0, "y1": 0.0001 }
              ],
              "curves": [{ "c": "vline", "x": 1.2, "dash": true }],
              "labels": [
                { "x": 0, "y": -0.055, "text": "0", "soft": true },
                { "x": 1, "y": -0.055, "text": "1", "soft": true },
                { "x": 2, "y": -0.055, "text": "2", "soft": true },
                { "x": 3, "y": -0.055, "text": "3", "soft": true },
                { "x": 4, "y": -0.055, "text": "4", "soft": true },
                { "x": 5, "y": -0.055, "text": "5", "soft": true },
                { "x": 6, "y": -0.055, "text": "6", "soft": true },
                { "x": 4.6, "y": 0.46, "text": "mean 1.2, mode 1" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Is this actually binomial",
          "steps": [
            "<b>Two outcomes?</b> Say out loud what counts as a success. In “exactly 2 sixes”, success is rolling a six. Skipping this step is what leads to swapping <i>p</i> and <i>q</i> three lines later.",
            "<b>Fixed <i>n</i>?</b> Identify the number of trials. If the experiment runs until something happens, <i>n</i> is not fixed and the binomial does not apply at all.",
            "<b>Independent with constant <i>p</i>?</b> Run the with-replacement test. If the composition changes between trials, both conditions fail together.",
            "<b>Extract the parameters</b> <i>p</i>, then <i>q</i> = 1 − <i>p</i>, then <i>n</i>, then the target <i>r</i> or range of <i>r</i>, and only then substitute.",
            "Finish with the free check: <i>npq</i> < <i>np</i> always. If a problem hands you a binomial whose variance exceeds its mean, the data is inconsistent."
          ]
        },
        {
          "t": "p",
          "html": "The classic disqualifier is <b>drawing without replacement</b>. Pull cards one by one and the composition of the deck changes, so <i>p</i> shifts trial to trial and the draws are dependent: not binomial. Replace the card each time and it becomes binomial. This is the same with-and-without distinction from topic 01, arriving here as a hard gate rather than a technique, and it is what makes “which of these is not a binomial experiment” a standing exam question."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A fair die is rolled 5 times. Find the probability of getting exactly 2 sixes, and then the probability of getting at most one six.",
          "steps": [
            "Each roll is a Bernoulli trial with success “six”, so <i>p</i> = 1/6, <i>q</i> = 5/6, <i>n</i> = 5 and <i>r</i> = 2.",
            "<i>P</i>(<i>X</i> = 2) = <sup>5</sup>C<sub>2</sub> (1/6)<sup>2</sup> (5/6)<sup>3</sup> = 10 × (1/36) × (125/216) = 1250/7776.",
            "At most one: <i>P</i>(<i>X</i> = 0) = (5/6)<sup>5</sup> = 3125/7776 and <i>P</i>(<i>X</i> = 1) = 5(1/6)(5/6)<sup>4</sup> = 3125/7776.",
            "Add them: 6250/7776."
          ],
          "ans": "Exactly two sixes: 1250/7776 = 625/3888 ≈ 0.161. At most one six: 6250/7776 ≈ 0.804. Note that <i>P</i>(0) and <i>P</i>(1) come out equal here, which is a genuine coincidence of <i>n</i> = 5 and <i>p</i> = 1/6 rather than a rule, and it is worth spotting because it halves the arithmetic."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN SPEED TRAP",
          "q": "In a production run 5 percent of items are defective. A sample of 10 is taken. Find <i>P</i>(at least one defective), and state the mean and variance of the number of defectives.",
          "steps": [
            "Never sum ten terms. “At least one” is the complement of “none”.",
            "<i>P</i>(<i>X</i> ≥ 1) = 1 − <i>P</i>(<i>X</i> = 0) = 1 − (0.95)<sup>10</sup> = 1 − 0.599.",
            "Mean = <i>np</i> = 10(0.05) = 0.5.",
            "Variance = <i>npq</i> = 10(0.05)(0.95) = 0.475."
          ],
          "ans": "<i>P</i>(at least one) ≈ 0.401, mean 0.5, variance 0.475. Note 0.475 < 0.5, as it must be. The result is also a reality check on intuition: even a 5 percent defect rate gives roughly a 40 percent chance of catching one in ten items, because small per-item risks accumulate fast."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "The mean and variance of a binomial variable <i>X</i> are 4 and 2. Find <i>n</i>, <i>p</i> and <i>P</i>(<i>X</i> = 2).",
          "steps": [
            "A binomial is pinned down by two numbers, so mean and variance are exactly enough. Divide variance by mean: <i>q</i> = <i>npq</i>/<i>np</i> = 2/4 = 1/2, so <i>p</i> = 1/2.",
            "Then <i>np</i> = 4 gives <i>n</i> = 4/(1/2) = 8.",
            "<i>P</i>(<i>X</i> = 2) = <sup>8</sup>C<sub>2</sub> (1/2)<sup>2</sup> (1/2)<sup>6</sup> = 28 (1/2)<sup>8</sup> = 28/256."
          ],
          "ans": "<i>n</i> = 8, <i>p</i> = 1/2, <i>P</i>(<i>X</i> = 2) = 7/64 ≈ 0.109. Cross-check by going forwards: <i>npq</i> = 8(1/2)(1/2) = 2 and <i>np</i> = 4, which is the given data. Dividing variance by mean <b>first</b> is the reflex here, because it gives <i>q</i> in a single step with no algebra."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "An archer hits the bull's-eye with probability 0.8 on each shot and fires 6 independent shots. Find the <b>most probable</b> number of bull's-eyes and the probability of achieving it.",
          "steps": [
            "Here <i>n</i> = 6 and <i>p</i> = 0.8, so (<i>n</i> + 1)<i>p</i> = 7(0.8) = 5.6, which is not an integer.",
            "The mode band is 4.6 ≤ <i>r</i> ≤ 5.6, so <i>r</i> = ⌊5.6⌋ = 5, a single value.",
            "<i>P</i>(<i>X</i> = 5) = <sup>6</sup>C<sub>5</sub> (0.8)<sup>5</sup> (0.2) = 6(0.32768)(0.2)."
          ],
          "ans": "Mode 5, with probability 0.393216 ≈ 0.393. The mean is <i>np</i> = 4.8, so mean and mode do <b>not</b> coincide, and the mode formula pins the peak directly instead of rounding the mean and hoping."
        },
        {
          "t": "p",
          "html": "Now change one condition and everything changes with it. Ask “when does the first success happen?” and there is no fixed <i>n</i>: the trials continue until success arrives, so the number of them is unbounded. That breaks the binomial's very first requirement. These are <b>waiting-time</b> questions, they are pure geometric-series probability, and JEE Main sets them nearly every year under the guise of games, queues and repeated attempts. Boards rarely ask them."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · WAITING FOR THE FIRST SUCCESS",
          "tag": "JEE FACING",
          "main": "<i>P</i>(<i>X</i> = <i>k</i>) = <i>q</i><sup>k−1</sup> <i>p</i>, <i>k</i> = 1, 2, 3, …",
          "legend": [
            "<i>X</i> is the trial index of the first success: the first <i>k</i> − 1 trials fail and trial <i>k</i> succeeds.",
            "Mean 1/<i>p</i> and variance <i>q</i>/<i>p</i><sup>2</sup>. Expected waiting time is the reciprocal of the success probability: 6 rolls for a six.",
            "<i>P</i>(<i>X</i> > <i>k</i>) = <i>q</i><sup>k</sup>, surviving <i>k</i> failures. Memorise this one-liner, it answers most “after how many” phrasings instantly.",
            "Waiting for the <i>r</i>-th success instead: <i>P</i> = <sup>n−1</sup>C<sub>r−1</sub> <i>p</i><sup>r</sup> <i>q</i><sup>n−r</sup> on trial <i>n</i>."
          ],
          "note": "Infinitely many values, and the probabilities still sum to 1. That is the infinite analogue of the ∑ <i>p</i><sub>i</sub> = 1 check, and it is worth writing out once."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE SERIES CLOSES AND THE MEAN IS 1/p, TAP A LINE",
          "steps": [
            {
              "eq": "∑ qᵏ⁻¹ p = p (1 + q + q² + ⋯) = p / (1 − q) = p / p = 1",
              "why": "A geometric series with first term p and common ratio q, and q lies strictly between 0 and 1 so it converges. The sum being exactly 1 confirms the probabilities really do form a distribution on infinitely many values, with nothing left over."
            },
            {
              "eq": "auxiliary identity: ∑ k rᵏ⁻¹ = 1 / (1 − r)²",
              "why": "Differentiate the geometric sum 1/(1 − r) term by term, which is legitimate for |r| below 1. This single identity is what turns the arithmetico-geometric mean into one line, and it is worth carrying separately."
            },
            {
              "eq": "E(X) = ∑ k qᵏ⁻¹ p = p / (1 − q)² = p / p² = 1/p",
              "why": "Substitute r = q in the identity and multiply by p. Read the result: if a six comes up one time in six, you wait six rolls on average. It is the answer intuition already expects, now with a proof behind it."
            },
            {
              "eq": "Var(X) = 2q/p² + 1/p − 1/p² = q/p²",
              "why": "Differentiating twice gives ∑ k(k − 1)rᵏ⁻¹ = 2r/(1 − r)³, which supplies E(X²) = 2q/p² + 1/p. Subtracting μ² and using p − 1 = −q collapses the numerator to q. Note the variance is large when p is small, which is why rare events have such erratic waiting times."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · TURN-TAKING, AND WHY GOING FIRST HELPS",
          "tag": "JEE MAIN",
          "main": "<i>P</i>(<i>A</i> wins) = <i>a</i> / [1 − (1 − <i>a</i>)(1 − <i>b</i>)]",
          "legend": [
            "<i>A</i> and <i>B</i> alternate, <i>A</i> first, succeeding with probabilities <i>a</i> and <i>b</i> on each of their own attempts. First success wins.",
            "<i>A</i> wins on his <i>m</i>-th attempt only if the previous <i>m</i> − 1 full rounds all failed, so the terms form a geometric progression with ratio (1 − <i>a</i>)(1 − <i>b</i>).",
            "<i>P</i>(<i>B</i> wins) = (1 − <i>a</i>)<i>b</i> / [1 − (1 − <i>a</i>)(1 − <i>b</i>)], and the two must add to 1."
          ],
          "note": "The first-mover advantage is visible in the algebra: <i>A</i>'s numerator carries no failure factor while <i>B</i>'s carries (1 − <i>a</i>). With a fair die and both aiming for a six, that is 6/11 against 5/11."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A fair die is rolled repeatedly until a six appears. Find (i) <i>P</i>(the first six is on the 4th roll), (ii) the expected number of rolls, (iii) <i>P</i>(the first six appears after the 3rd roll).",
          "steps": [
            "Here <i>p</i> = 1/6 and <i>q</i> = 5/6.",
            "(i) Three failures then a success: (5/6)<sup>3</sup>(1/6) = 125/1296.",
            "(ii) <i>E</i>(<i>X</i>) = 1/<i>p</i> = 6 rolls.",
            "(iii) “After the 3rd” means the first three all failed, so <i>P</i>(<i>X</i> > 3) = <i>q</i><sup>3</sup> = (5/6)<sup>3</sup>."
          ],
          "ans": "(i) 125/1296 ≈ 0.096. (ii) 6 rolls. (iii) 125/216 ≈ 0.579. Part (iii) the long way, 1 − [1/6 + (5/6)(1/6) + (5/6)<sup>2</sup>(1/6)] = 1 − 91/216, gives the same answer, which is a good check the first time and a waste of time thereafter."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "<i>A</i> and <i>B</i> take turns rolling a fair die, <i>A</i> first, and the first to roll a six wins. Find <i>P</i>(<i>A</i> wins) and the expected number of rolls the game lasts.",
          "steps": [
            "With <i>a</i> = <i>b</i> = 1/6 the round-failure ratio is (5/6)(5/6) = 25/36.",
            "<i>P</i>(<i>A</i> wins) = (1/6) / (1 − 25/36) = (1/6)/(11/36) = 36/66.",
            "<i>P</i>(<i>B</i> wins) = (5/6)(1/6)/(11/36) = 5/11, and the two add to 1.",
            "For the duration, notice that <b>every</b> roll ends the game with probability 1/6 no matter who makes it, so the total number of rolls is itself a waiting time with <i>p</i> = 1/6."
          ],
          "ans": "<i>P</i>(<i>A</i> wins) = 6/11 ≈ 0.545 and the game lasts 6 rolls on average. Recursive cross-check: <i>A</i> wins at once with probability 1/6, otherwise the game restarts with the roles swapped, so <i>P</i>(<i>A</i>) = 1/6 + (5/6)(1 − <i>P</i>(<i>A</i>)), giving (11/6)<i>P</i>(<i>A</i>) = 1. Going first is worth a real edge in a setup that looks perfectly fair."
        },
        {
          "t": "mcq",
          "q": "For a binomial distribution with <i>p</i> strictly between 0 and 1, the variance is always:",
          "opts": [
            { "label": "greater than the mean", "nudge": "Impossible for a binomial, since <i>npq</i> would have to exceed <i>np</i> and that needs <i>q</i> above 1. Distributions with variance above the mean exist, but they are not binomial." },
            { "label": "less than the mean" },
            { "label": "equal to the mean", "nudge": "That describes the Poisson distribution, not the binomial, and it would force <i>q</i> = 1, meaning success never happens." },
            { "label": "unrelated to the mean", "nudge": "They are built from the same two numbers, <i>n</i> and <i>p</i>. Their ratio is exactly <i>q</i>, which is how you recover the parameters." }
          ],
          "correct": 1,
          "solution": "Variance is npq and the mean is np, and q = 1 − p is strictly below 1, so npq < np always. This single fact instantly flags inconsistent data, and dividing variance by mean hands you q in one step."
        },
        {
          "t": "mcq",
          "q": "If <i>X</i> ∼ <i>B</i>(<i>n</i>, <i>p</i>), then <i>P</i>(<i>X</i> = <i>r</i>) equals:",
          "opts": [
            { "label": "<sup>n</sup>C<sub>r</sub> <i>p</i><sup>r</sup> <i>q</i><sup>n−r</sup>" },
            { "label": "<sup>n</sup>C<sub>r</sub> <i>p</i><sup>n−r</sup> <i>q</i><sup>r</sup>", "nudge": "The exponents are swapped, which is the commonest slip in the topic. There are <i>r</i> successes, so <i>p</i> must carry the power <i>r</i>. Naming the success out loud before substituting prevents it." },
            { "label": "<i>p</i><sup>r</sup> <i>q</i><sup>n−r</sup>", "nudge": "This drops the combinatorial factor and so counts only <b>one</b> arrangement of the successes. Every ordering contributes equally, and <sup>n</sup>C<sub>r</sub> is how many there are." },
            { "label": "<sup>n</sup>C<sub>r</sub> <i>p</i><sup>r</sup> <i>q</i><sup>r</sup>", "nudge": "The total exponent is 2<i>r</i>, not <i>n</i>. Every one of the <i>n</i> trials has to be accounted for, either as a success or as a failure." }
          ],
          "correct": 0,
          "solution": "Successes carry p raised to r, failures carry q raised to n − r, and nCr counts the arrangements. The exponents must add to n, which is a one-second check on any option list."
        },
        {
          "t": "mcq",
          "q": "A fair coin is tossed 4 times. The probability of getting at least 3 heads is:",
          "opts": [
            { "label": "1/16", "nudge": "This counts only <i>P</i>(<i>X</i> = 4). “At least 3” includes exactly 3 as well, and that term is four times larger." },
            { "label": "5/16" },
            { "label": "1/4", "nudge": "This miscounts <sup>4</sup>C<sub>3</sub>, usually as 3 rather than 4, giving 4/16 instead of 5/16." },
            { "label": "11/16", "nudge": "This is the complement, <i>P</i>(<i>X</i> ≤ 2). Taking the complement is often the right instinct, but here the direct sum has only two terms and is shorter." }
          ],
          "correct": 1,
          "solution": "P(X ≥ 3) = P(3) + P(4) = [4C3 + 4C4](1/2)<sup>4</sup> = (4 + 1)/16 = 5/16. With p = 1/2 every term shares the same (1/2)<sup>4</sup>, so the whole question reduces to adding two binomial coefficients."
        },
        {
          "t": "mcq",
          "q": "Which of these is <b>not</b> a binomial experiment?",
          "opts": [
            { "label": "tossing a coin 20 times and counting heads", "nudge": "This is binomial: 20 fixed trials, two outcomes, independent, and <i>p</i> = 1/2 throughout." },
            { "label": "rolling a die 10 times and counting sixes", "nudge": "Binomial with <i>n</i> = 10 and <i>p</i> = 1/6. A die has six faces but only two outcomes <b>that matter</b> once success is defined as a six." },
            { "label": "drawing 5 cards one by one without replacement and counting aces" },
            { "label": "testing 8 bulbs, each independently defective with probability 0.1", "nudge": "Binomial with <i>n</i> = 8 and <i>p</i> = 0.1. The question states independence and a constant rate outright, which is all four conditions handed to you." }
          ],
          "correct": 2,
          "solution": "Without replacement the composition of the deck changes after each draw, so p shifts and the draws are dependent. Two of the four Bernoulli conditions fail at once. Replace each card and the same experiment becomes binomial."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "A fair coin is tossed 6 times. Find <i>P</i>(exactly 4 heads).",
              "a": "<sup>6</sup>C<sub>4</sub> (1/2)<sup>6</sup> = 15/64 ≈ 0.234. With <i>p</i> = 1/2 every outcome is equally likely, so the answer is just the count of favourable patterns over 2<sup>6</sup>."
            },
            {
              "q": "A marksman hits a target with probability 1/3. He fires 5 shots. Find <i>P</i>(he hits at least once).",
              "a": "Complement: 1 − (2/3)<sup>5</sup> = 1 − 32/243 = 211/243 ≈ 0.868. Summing <i>P</i>(1) through <i>P</i>(5) gives the same number after five times the work."
            },
            {
              "q": "The mean and variance of a binomial distribution are 2 and 4/3. Find <i>n</i> and <i>p</i>.",
              "a": "<i>q</i> = variance/mean = (4/3)/2 = 2/3, so <i>p</i> = 1/3 and <i>n</i> = 2/(1/3) = 6. Check: <i>np</i> = 2 and <i>npq</i> = 6(1/3)(2/3) = 4/3."
            },
            {
              "q": "A fair coin is tossed 8 times. Find the most probable number of heads and its probability.",
              "a": "(<i>n</i> + 1)<i>p</i> = 9/2 = 4.5, not an integer, so the mode is ⌊4.5⌋ = 4. <i>P</i>(<i>X</i> = 4) = <sup>8</sup>C<sub>4</sub>/2<sup>8</sup> = 70/256 = 35/128 ≈ 0.273."
            },
            {
              "q": "A biased coin with <i>P</i>(head) = 1/3 is tossed until the first head. Find <i>P</i>(first head on toss 5) and the expected number of tosses. Then, if <i>A</i> and <i>B</i> alternate tossing a coin with <i>P</i>(head) = 1/4 and <i>A</i> goes first, find each player's chance of winning.",
              "a": "(2/3)<sup>4</sup>(1/3) = 16/243 ≈ 0.066, and <i>E</i>(<i>X</i>) = 3 tosses. For the game, the round-failure ratio is (3/4)(3/4) = 9/16, so <i>P</i>(<i>A</i>) = (1/4)/(7/16) = 4/7 and <i>P</i>(<i>B</i>) = (3/16)/(7/16) = 3/7."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Forcing the binomial onto dependent trials.</b> Without replacement <i>p</i> shifts every draw. Fixed <i>n</i> and two outcomes are not enough; all four conditions have to hold.",
            "<b>Swapping the exponents.</b> Writing <i>p</i><sup>n−r</sup><i>q</i><sup>r</sup> instead of <i>p</i><sup>r</sup><i>q</i><sup>n−r</sup>. Successes are raised to <i>r</i>, failures to <i>n</i> − <i>r</i>, and naming the success first is the cure.",
            "<b>Dropping or miscomputing <sup>n</sup>C<sub>r</sub>.</b> Without it you have counted a single ordering. And <sup>n</sup>C<sub>r</sub> is <i>n</i>!/[<i>r</i>!(<i>n</i> − <i>r</i>)!], not <i>n</i>!/<i>r</i>!.",
            "<b>Taking the long road to “at least one”.</b> Summing every term from 1 to <i>n</i> instead of 1 − <i>q</i><sup>n</sup>. Always take whichever side has fewer terms.",
            "<b>Reaching for the binomial when <i>n</i> is not fixed.</b> “Until the first six” has no <i>n</i> at all. That is a waiting-time question and the machinery is a geometric series, not <sup>n</sup>C<sub>r</sub>."
          ]
        },
        {
          "t": "protip",
          "html": "two reflexes cover most binomial questions in the paper. any <b>at least</b> or <b>at most</b> phrasing should trigger the complement, and for <b>mean and variance given, find <i>n</i> and <i>p</i></b> always divide variance by mean first to get <i>q</i> in one step. a third saves real time when you need several consecutive probabilities: compute <i>P</i>(<i>X</i> = 0) once, then walk up using <i>P</i>(<i>r</i>)/<i>P</i>(<i>r</i> − 1) = (<i>n</i> − <i>r</i> + 1)<i>p</i>/(<i>rq</i>). each one is the previous times a simple factor, far quicker than rebuilding <sup>n</sup>C<sub>r</sub><i>p</i><sup>r</sup><i>q</i><sup>n−r</sup> from scratch every time."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "Bernoulli: fixed n · independent · two outcomes · constant p", "note": "all four, or it is not binomial" },
            { "f": "P(X = r) = ⁿCᵣ pʳ qⁿ⁻ʳ, the terms of (q + p)ⁿ", "note": "so they automatically sum to 1" },
            { "f": "mean np · variance npq · SD √(npq)", "note": "variance is always the smaller of the first two" },
            { "f": "mode: (n + 1)p − 1 ≤ r ≤ (n + 1)p", "note": "the peak, which need not be at the mean" },
            { "f": "P(X ≥ 1) = 1 − qⁿ · q = variance/mean, p = 1 − q, n = mean/p", "note": "the two exam reflexes" },
            { "f": "waiting time: P(X = k) = qᵏ⁻¹p, mean 1/p, P(X > k) = qᵏ", "note": "no fixed n, so not binomial at all" }
          ],
          "aids": [
            "“choose the successes, power up p, power down with q”",
            "“no fixed n means no ⁿCᵣ, reach for the series instead”"
          ]
        }
      ]
    }
  ]
};

export default ch12Probability;
