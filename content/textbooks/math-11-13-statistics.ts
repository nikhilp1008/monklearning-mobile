/**
 * Chapter 13 · Statistics. Mathematics, Class 11.
 *
 * Restructured from pages 986 to 1030 of the Drona Class 11 Mathematics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md,
 * following math-11-01-sets.ts and math-11-08-sequences.ts for voice and
 * density.
 *
 * The source is three documents stacked: a typeset chapter of three subtopics
 * (Measures of Dispersion and Mean Deviation, Variance and Standard Deviation,
 * Analysis of Frequency Distributions), a Round 1 Supplement (Addenda 13.1 and
 * 13.2, plus a bonus on the variance of an AP) and a Round 2 Addendum (13.3, on
 * inclusive class intervals). Three subtopics is below the schema's floor of
 * four topics and would bury the grouped-data machinery inside the ungrouped
 * one, so the material is split five ways and the supplements are folded in
 * rather than given topics of their own:
 *
 *   - Topic 01 keeps ungrouped mean deviation, which is where the
 *     median-minimises result lives and where it is proved.
 *   - Topic 02 is everything that arrives as a table. Subtopic 01's Procedures
 *     (C) and (D), Addendum 13.1 (the median of a discrete table, read off the
 *     cumulative frequency column and never interpolated) and Addendum 13.3
 *     (inclusive classes and true boundaries) are one skill wearing three
 *     costumes: read the table correctly, then run the same averaging.
 *   - Topic 03 is Subtopic 02 stripped to computation: the definition, the
 *     shortcut form, the frequency form, the step-deviation form.
 *   - Topic 04 collects everything about how a measure of spread moves.
 *     Subtopic 02's transformation rule, Addendum 13.2 (the assumed-mean
 *     identity) and the Supplement's bonus on the variance of an AP are the
 *     same idea three times over: a shift does nothing, a scale enters squared.
 *   - Topic 05 is Subtopic 03, and it absorbs the combined-variance formula
 *     that Subtopic 02 states and Subtopic 03 immediately reuses.
 *
 * Every mean, median, variance, standard deviation and mean deviation quoted
 * here was recomputed from the raw data. The source's arithmetic checks out
 * throughout, including both items its own errata flags, which are typesetting
 * faults rather than mathematical ones (Subtopic 01 Practice 2's unconverted
 * Markdown table, and Subtopic 03 Example 3's final digit clipped off the right
 * margin, where the correct total is 16900). One further typesetting slip is
 * not in the errata: Subtopic 02 Section 1 prints "standard deviation**," with
 * literal Markdown emphasis markers left in the running text. No value in the
 * chapter is wrong, so this file records no corrections.
 *
 * Four `diagram` blocks, all of the parameterised kinds: two `numberline` and
 * two `plot`. There is deliberately no histogram, ogive or frequency polygon:
 * the source never mentions one, and its own visual language is dots on a
 * number line and squares drawn on deviations. Chips and captions render as
 * plain text, not markup, so they carry no inline tags and use Unicode
 * sub/superscripts instead.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch13Statistics: Chapter = {
  "chapter": "13",
  "title": "Statistics",
  "subject": "Mathematics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Dispersion, Range and Mean Deviation",
      "chip": "01 SPREAD",
      "kalam": "the average hides what the scatter tells",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Dispersion, Range and Mean Deviation</b><br>Statistics is worth roughly one guaranteed question in the CBSE Boards, and this is where it starts: a 3 to 5 mark computation of the range and the mean deviation of a small list. Read the question for <i>which</i> central value it wants, because the mean deviation about the mean and about the median are different numbers and only one of them scores. JEE Main uses this as a single quick MCQ, most often on what a transformation does to a measure of spread. JEE Advanced almost never asks mean deviation as a stand-alone numerical, but the fact that <b>the median minimises total absolute deviation</b> turns up inside optimisation problems, so here the idea matters more than the formula.<br><br><b>02 · Mean Deviation from a Frequency Table</b><br>The Boards' favourite shape for this chapter: a wage table or a marks table, 3 to 5 marks, and the divisor is <i>N</i> = Σ<i>f</i><sub>i</sub> every single time, never the number of rows. NCERT gives a worked example and several Exercise 13.1 items to the median of a <b>discrete</b> table, which is read off the cumulative frequency column and never interpolated, and CBSE has asked exactly that. NCERT also plants inclusive class intervals twice as a bare bracketed hint, in Exercise 13.1 Q12 and Exercise 13.2 Q10, and explains them nowhere in the running text; JEE Main uses that silence as a trap and prints the uncorrected answer as a distractor.<br><br><b>03 · Variance and Standard Deviation</b><br>The single most heavily examined corner of Statistics. JEE Main has carried a variance or standard deviation question in nearly every recent paper. CBSE reliably asks a 3 to 5 mark computation from a frequency table, and the derivation of the shortcut form σ<sup>2</sup> = (1/<i>n</i>)Σ<i>x</i><sub>i</sub><sup>2</sup> − <i>x̄</i><sup>2</sup> is a named, directly askable board derivation. <b>Read the last line of the question: if it asks for the standard deviation and you stop at the variance, entirely correct work scores nothing.</b><br><br><b>04 · Shift, Scale and the Assumed Mean</b><br>This is the JEE Main one-liner. Under <i>x</i> ↦ <i>ax</i> + <i>b</i> the variance is multiplied by <i>a</i><sup>2</sup>, the standard deviation by |<i>a</i>|, and <i>b</i> does nothing whatsoever; a paper that sets no other statistics question will still set this one. Main also has a favourite costume for the assumed-mean identity: it hands you Σ(<i>x</i><sub>i</sub> − <i>A</i>) and Σ(<i>x</i><sub>i</sub> − <i>A</i>)<sup>2</sup> and asks for the mean or the variance, which is one line if you know the identity and five minutes of reconstruction if you do not. JEE Advanced folds the same rules into combined-variance work, and expects the variance of the first <i>n</i> natural numbers on sight.<br><br><b>05 · Comparing, Combining and Repairing Distributions</b><br>Where the chapter pays off. CBSE loves the coefficient-of-variation comparison, “which is more consistent?”, as a 4 to 5 mark question, and the correction problem, a misread observation, as a 3 mark twist. JEE Main turns the reverse problems, recovering missing observations from a given mean and variance, into quick MCQs almost every year. JEE Advanced combines the two: merge two groups, then judge consistency by C.V. <b>Lower C.V. means steadier, not better, and examiners split the verdict on purpose.</b>"
        },
        {
          "t": "p",
          "html": "Two vegetable vendors in your local mandi, Ramesh and Suresh. Over a week you note the price of a kilo of tomatoes at each stall. Ramesh quotes ₹28, ₹30, ₹29, ₹31, ₹30. Suresh quotes ₹14, ₹46, ₹12, ₹48, ₹30. Punch both into a calculator and the average is the <b>same</b>, ₹29.6 each. Yet nobody would call these two vendors equivalent. Ramesh is boringly reliable; Suresh is a gamble."
        },
        {
          "t": "p",
          "html": "The average has completely hidden the thing that actually distinguishes them: how <b>scattered</b> the prices are around that centre. That scatter is what <b>dispersion</b> measures. Central tendency, the mean, median and mode, tells you <i>where</i> a data set sits. Dispersion tells you how tightly or loosely the observations huddle around that location, and the whole job of this topic is to attach a <b>single number</b> to “how spread out is this?”"
        },
        {
          "t": "p",
          "html": "There is a hierarchy of ways to do it. The crudest is the <b>range</b>, just the gap between the largest and smallest observation. It is instant to compute and genuinely useful as a first glance: a weather report saying today's temperature ranged from 22°C to 41°C tells you something real. But the range listens to <b>only the two most extreme values</b> and ignores everything in between, so one freak observation and it lies about the whole set."
        },
        {
          "t": "p",
          "html": "The smarter idea is to measure, for <b>every</b> observation, how far it sits from a central value, and then average those distances. That is the <b>mean deviation</b>. The subtle move is the word “distance”. A value sitting 5 units <i>below</i> the mean is just as spread out as one sitting 5 units <i>above</i> it, so the signs must be thrown away and the <b>absolute values</b> taken. Without them the deviations from the mean would politely cancel to exactly zero every single time, and the measure would report 0 for every data set on earth."
        },
        {
          "t": "think",
          "html": "picture each data set as dots on a number line. ramesh's dots cluster into a tight little knot, suresh's fling themselves to the far corners. dispersion is just a fair way of asking “how far, on average, do the dots live from home?”"
        },
        {
          "t": "def",
          "term": "Dispersion",
          "html": "A measure of how scattered a data set is about its centre. It answers a question the mean cannot: two data sets can share a mean and look nothing alike. Every measure in this chapter, range, mean deviation, variance and standard deviation, is built out of <b>gaps</b> between numbers, which is why every one of them is blind to a uniform shift of the whole data set."
        },
        {
          "t": "def",
          "term": "Mean deviation",
          "html": "The average of the absolute deviations of the observations from a chosen central value <i>a</i>, written M.D.(<i>a</i>). The <i>a</i> must be named: <b>the same data set has a different mean deviation about its mean than about its median</b>, and a question that says “about the median” is not asking for a synonym. It carries the same units as the data."
        },
        {
          "t": "defgrid",
          "title": "Notation, locked for the whole chapter",
          "rows": [
            {
              "k": "<i>x</i><sub>i</sub> · <i>n</i>",
              "v": "the <i>i</i>th observation · the number of observations, ungrouped"
            },
            {
              "k": "<i>f</i><sub>i</sub> · <i>N</i>",
              "v": "the frequency of <i>x</i><sub>i</sub> · the total frequency <i>N</i> = Σ<i>f</i><sub>i</sub>"
            },
            {
              "k": "<i>x̄</i> · <i>M</i>",
              "v": "the mean · the median. Both are central values you can measure deviation about."
            },
            {
              "k": "σ<sup>2</sup> · σ",
              "v": "the variance · the standard deviation, always the positive root (Topic 03)"
            },
            {
              "k": "M.D.(<i>a</i>)",
              "v": "the mean deviation about <i>a</i>. Never write M.D. without saying what <i>a</i> is."
            },
            {
              "k": "Coefficients",
              "v": "any spread measure divided by the value it is anchored to. Pure numbers, so they compare across units."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "RANGE, AND ITS COEFFICIENT",
          "tag": "the fastest measure, and the least honest",
          "main": "Range = x<sub>max</sub> − x<sub>min</sub>",
          "legend": [
            "for a grouped distribution, the upper <b>boundary</b> of the highest class minus the lower boundary of the lowest",
            "coefficient of range = (<i>x</i><sub>max</sub> − <i>x</i><sub>min</sub>) / (<i>x</i><sub>max</sub> + <i>x</i><sub>min</sub>), a pure number with no units at all",
            "the range carries the data's units; the coefficient divides one same-unit quantity by another, so it does not"
          ],
          "note": "Two data sets can have identical ranges and completely different scatter, because the range never looks at the middle. Use it as a first glance and a sanity check, never as an answer to “how consistent is this”."
        },
        {
          "t": "formula",
          "kicker": "MEAN DEVIATION ABOUT A CENTRAL VALUE",
          "tag": "average the distances, not the displacements",
          "main": "M.D.(a) = (1/n) Σ |x<sub>i</sub> − a|",
          "legend": [
            "<i>a</i> is the mean <i>x̄</i>, the median <i>M</i>, or occasionally the mode. The formula does not care which, but the answer does",
            "for a frequency distribution: M.D.(<i>a</i>) = (1/<i>N</i>) Σ<i>f</i><sub>i</sub>|<i>x</i><sub>i</sub> − <i>a</i>|, with <i>N</i> = Σ<i>f</i><sub>i</sub> (Topic 02)",
            "coefficient of M.D. = M.D.(<i>a</i>)/<i>a</i>, dimensionless, for comparing across data sets on different scales"
          ],
          "note": "Key property, memorise it: Σ|x<sub>i</sub> − a| is smallest when a is the median. So M.D. is <b>least about the median</b>, and a question asking for the smallest possible mean deviation is asking you to anchor there. Mnemonic: Median Minimises Mean-deviation, the three Ms."
        },
        {
          "t": "diagram",
          "kind": "numberline",
          "kicker": "DIAGRAM · SAME CENTRE, DIFFERENT SCATTER",
          "chips": ["tight", "loose", "same range", "one distance"],
          "captions": [
            "Runs conceded in five overs: 2, 3, 4, 5, 6. The mean is 4 and no value strays more than 2 from it. Mean deviation 1.2, range 4. This is the tight little knot.",
            "Now 0, 1, 4, 7, 8. Five overs again, mean 4 again, and nobody would call the two bowlers alike. Mean deviation 2.8, range 8. The centre is identical and it told you nothing about the difference.",
            "0, 3, 4, 5, 8. Mean 4 and range 8, exactly as in the previous frame, yet the mean deviation falls to 2.0. The range heard only the two end dots; the mean deviation heard all five. That gap between the two frames is the whole argument for not stopping at the range.",
            "The quantity being averaged, drawn once. From the mean at 4 out to the observation at 7 is a distance of 3, and it counts as 3 whether the dot sits above the mean or below it. Add the five distances, divide by 5, and that is the mean deviation."
          ],
          "frames": [
            {
              "x": [-1, 9],
              "intervals": [{ "from": 2, "to": 6, "soft": true, "label": "range 4" }],
              "points": [
                { "x": 2, "y": 0 },
                { "x": 3, "y": 0 },
                { "x": 4, "y": 0, "label": "mean 4" },
                { "x": 5, "y": 0 },
                { "x": 6, "y": 0 }
              ]
            },
            {
              "x": [-1, 9],
              "intervals": [{ "from": 0, "to": 8, "soft": true, "label": "range 8" }],
              "points": [
                { "x": 0, "y": 0 },
                { "x": 1, "y": 0 },
                { "x": 4, "y": 0, "label": "mean 4" },
                { "x": 7, "y": 0 },
                { "x": 8, "y": 0 }
              ]
            },
            {
              "x": [-1, 9],
              "intervals": [{ "from": 0, "to": 8, "soft": true, "label": "range 8 again" }],
              "points": [
                { "x": 0, "y": 0 },
                { "x": 3, "y": 0 },
                { "x": 4, "y": 0, "label": "mean 4" },
                { "x": 5, "y": 0 },
                { "x": 8, "y": 0 }
              ]
            },
            {
              "x": [-1, 9],
              "intervals": [{ "from": 4, "to": 7, "label": "distance 3" }],
              "points": [
                { "x": 0, "y": 0, "soft": true },
                { "x": 1, "y": 0, "soft": true },
                { "x": 4, "y": 0 },
                { "x": 7, "y": 0 },
                { "x": 8, "y": 0, "soft": true }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Mean deviation of an ungrouped list",
          "steps": [
            "<b>Decide the anchor first.</b> Mean or median? The question says. If it asks for the <i>smallest</i> mean deviation without naming one, it means the median.",
            "<b>Find that central value.</b> The mean is Σ<i>x</i><sub>i</sub>/<i>n</i>. For the median, <b>sort the list</b>, then take the middle value if <i>n</i> is odd, or the average of the two middle values if <i>n</i> is even. Sorting is not optional and is the step most often skipped.",
            "<b>Write the column |<i>x</i><sub>i</sub> − <i>a</i>|.</b> The modulus turns a signed “how far above or below” into an unsigned “how far”, so values on opposite sides reinforce instead of cancelling.",
            "<b>Add the column, then divide by <i>n</i>.</b> Averaging makes the measure comparable between data sets of different sizes: 100 observations are not more spread out merely because there are more of them.",
            "<b>Check M.D. ≤ range before you write the answer.</b> Every |<i>x</i><sub>i</sub> − <i>a</i>| is at most the range, so their average is too. A mean deviation larger than the range is an arithmetic slip upstream, guaranteed."
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE MEDIAN MINIMISES TOTAL DISTANCE, TAP A LINE",
          "steps": [
            {
              "eq": "S(a) = Σ |x<sub>i</sub> − a|, for the data 7, 11, 13, 16, 20, 24",
              "why": "This is exactly what the mean deviation averages, before the division by n. Since n is fixed, minimising S and minimising the mean deviation are the same problem."
            },
            {
              "eq": "sort, then pair from the outside in: (7, 24), (11, 20), (13, 16)",
              "why": "Smallest with largest, second smallest with second largest, and so on. For an even count every observation gets a partner and no observation is left over."
            },
            {
              "eq": "for any a between 7 and 24: |a − 7| + |24 − a| = (a − 7) + (24 − a) = 17",
              "why": "Both absolute values open with the sign that keeps them positive, and the a terms cancel against each other. A pair contributes a constant, its own width, wherever inside it a happens to sit."
            },
            {
              "eq": "S(a) = 17 + 9 + 3 = 29 for every a in [13, 16]",
              "why": "All three pairings hold at once precisely while a lies inside the innermost pair. The widths are 24 − 7 = 17, 20 − 11 = 9 and 16 − 13 = 3, and none of them depends on a."
            },
            {
              "eq": "a outside [13, 16] ⇒ S(a) > 29, strictly",
              "why": "Step outside the innermost pair and its two distances stop trading off: you gain more on one side than you save on the other. So 29 is the minimum, and it is attained on the whole interval, not at one point. The conventional median 14.5 is simply the middle of that interval, and the least mean deviation is 29/6, about 4.83. If an Advanced problem asks for how many values of a the sum is least, the answer is infinitely many."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · TWO ANCHORS, TWO MINIMISERS",
          "chips": ["six values", "the flat floor", "five values", "squares instead"],
          "captions": [
            "The graph of S(a), the total distance from a to all six of 7, 11, 13, 16, 20, 24, plotted against a. It bends at each observation and nowhere else, so it is a chain of straight pieces, and the lowest of them is what you are hunting.",
            "The shaded strip is 13 to 16, the innermost pair. Every a inside it gives S(a) = 17 + 9 + 3 = 29, which is why the floor is genuinely flat and not merely shallow. Step outside and the innermost pair stops cancelling, so S climbs. The conventional median 14.5 is just the middle of that strip, and the least mean deviation is 29/6, about 4.83.",
            "Drop the 24 and five observations are left. Now the outside-in pairing runs out at a single unpaired value, the median 13, and the graph comes to a sharp point there instead of a flat floor. An odd count gives one minimiser, an even count gives a whole interval of them, and JEE Advanced asks exactly that distinction.",
            "Square the distances instead of taking their size and the picture changes shape completely. The sum of squared deviations is a parabola: smooth everywhere, no corners, one lowest point. And that point sits at the mean, 91/6 or about 15.17, where the sum is 190.83, not at the median 14.5, where it is 193.5. Median for absolute deviations, mean for squared ones, and Topic 03 is built on the second."
          ],
          "frames": [
            {
              "x": [4, 27],
              "y": [20, 70],
              "segments": [
                { "from": [5, 61], "to": [7, 49] },
                { "from": [7, 49], "to": [11, 33] },
                { "from": [11, 33], "to": [13, 29] },
                { "from": [13, 29], "to": [16, 29] },
                { "from": [16, 29], "to": [20, 37] },
                { "from": [20, 37], "to": [24, 53] },
                { "from": [24, 53], "to": [26, 65] }
              ],
              "points": [
                { "x": 7, "y": 49 },
                { "x": 11, "y": 33 },
                { "x": 13, "y": 29 },
                { "x": 16, "y": 29 },
                { "x": 20, "y": 37 },
                { "x": 24, "y": 53 }
              ],
              "labels": [{ "x": 15.5, "y": 67, "text": "S(a) = total distance", "soft": true }]
            },
            {
              "x": [4, 27],
              "y": [20, 70],
              "bands": [{ "x0": 13, "x1": 16, "y0": 20, "y1": 70 }],
              "segments": [
                { "from": [5, 61], "to": [7, 49], "soft": true },
                { "from": [7, 49], "to": [11, 33], "soft": true },
                { "from": [11, 33], "to": [13, 29], "soft": true },
                { "from": [13, 29], "to": [16, 29] },
                { "from": [16, 29], "to": [20, 37], "soft": true },
                { "from": [20, 37], "to": [24, 53], "soft": true },
                { "from": [24, 53], "to": [26, 65], "soft": true }
              ],
              "points": [
                { "x": 13, "y": 29, "label": "13" },
                { "x": 16, "y": 29, "label": "16", "at": "se" }
              ],
              "labels": [{ "x": 14.5, "y": 66, "text": "S = 29 all along here", "soft": true }]
            },
            {
              "x": [4, 23],
              "y": [10, 48],
              "segments": [
                { "from": [5, 42], "to": [7, 32] },
                { "from": [7, 32], "to": [11, 20] },
                { "from": [11, 20], "to": [13, 18] },
                { "from": [13, 18], "to": [16, 21] },
                { "from": [16, 21], "to": [20, 33] },
                { "from": [20, 33], "to": [22, 43] }
              ],
              "points": [
                { "x": 7, "y": 32 },
                { "x": 11, "y": 20 },
                { "x": 13, "y": 18, "label": "median 13", "at": "se" },
                { "x": 16, "y": 21 },
                { "x": 20, "y": 33 }
              ],
              "labels": [{ "x": 13, "y": 46, "text": "one sharp minimum", "soft": true }]
            },
            {
              "x": [10, 21],
              "y": [150, 420],
              "curves": [{ "c": "poly", "coeffs": [1571, -182, 6] }],
              "points": [{ "x": 15.17, "y": 190.8, "label": "mean" }],
              "labels": [{ "x": 15.5, "y": 400, "text": "sum of squared deviations", "soft": true }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "WHAT A LINEAR TRANSFORMATION DOES",
          "tag": "add does nothing, multiply scales",
          "main": "x<sub>i</sub> ↦ ax<sub>i</sub> + b ⇒ Range, M.D. ↦ |a| × old",
          "legend": [
            "the shift <i>b</i> moves every observation by the same amount, so every gap survives untouched and no measure of spread can feel it",
            "the scale <i>a</i> stretches every gap by |<i>a</i>|, and both range and mean deviation are built purely out of gaps",
            "only |<i>a</i>| matters: flipping a data set about a point, <i>a</i> < 0, does not change how spread out it is"
          ],
          "note": "This one line answers a whole family of JEE Main MCQs without any recomputation. Write Range and M.D. ↦ |a| × (old value) the moment you see a transformation, and ignore b entirely."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A student's marks in five class tests, out of 40, are 32, 28, 36, 24, 30. Find the range and the mean deviation about the mean.",
          "steps": [
            "Range = <i>x</i><sub>max</sub> − <i>x</i><sub>min</sub> = 36 − 24 = 12 marks. Two numbers, nothing else consulted.",
            "Mean: <i>x̄</i> = (32 + 28 + 36 + 24 + 30)/5 = 150/5 = 30.",
            "Absolute deviations: 2, 2, 6, 6, 0. Their total is 16, so M.D.(<i>x̄</i>) = 16/5 = 3.2 marks.",
            "Presentation check: the answer carries the unit “marks”, and 3.2 ≤ 12, consistent with the range."
          ],
          "ans": "Range = 12 marks, M.D.(x̄) = 3.2 marks"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the mean deviation about the median of 8, 12, 15, 19, 24, 29, 33, 40.",
          "steps": [
            "The list is already sorted and <i>n</i> = 8 is even, so the median is the average of the 4th and 5th values: <i>M</i> = (19 + 24)/2 = 21.5.",
            "Deviations |<i>x</i><sub>i</sub> − 21.5|: 13.5, 9.5, 6.5, 2.5, 2.5, 7.5, 11.5, 18.5.",
            "Their total is 72, so M.D.(<i>M</i>) = 72/8 = 9.",
            "Note that 21.5 is not one of the observations. A median never has to be."
          ],
          "ans": "M = 21.5, M.D.(M) = 9"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A set of monthly electricity bills has range ₹40 and mean deviation about the mean ₹12. The provider revises every bill by <i>y</i><sub>i</sub> = 3<i>x</i><sub>i</sub> − 7. Find the new range and mean deviation.",
          "steps": [
            "Do not recompute anything. The −7 shifts every bill by the same amount, so all the gaps between bills are untouched.",
            "The 3 stretches every gap by |3|. Range and mean deviation are both built purely out of gaps, so each is multiplied by 3 and both are blind to the −7.",
            "Range = 3 × 40 = ₹120, M.D. = 3 × 12 = ₹36.",
            "Had the rule been <i>y</i><sub>i</sub> = −3<i>x</i><sub>i</sub> − 7 the answers would be identical: only |<i>a</i>| matters."
          ],
          "ans": "new range ₹120, new M.D. ₹36"
        },
        {
          "t": "mcq",
          "q": "Every observation in a data set is increased by 5. Which statement is correct?",
          "correct": 1,
          "opts": [
            {
              "label": "The range increases by 5",
              "nudge": "This imagines that “+5 on each value must add up”. Adding a constant shifts <i>x</i><sub>max</sub> and <i>x</i><sub>min</sub> by the same 5, so their <b>difference</b> is exactly what it was."
            },
            {
              "label": "The range is unchanged",
              "nudge": null
            },
            {
              "label": "The mean deviation increases by 5",
              "nudge": "Same error one step later. Mean deviation is an average of gaps to the centre, and the centre moved by 5 too, so every gap is preserved."
            },
            {
              "label": "The coefficient of range is unchanged",
              "nudge": "The sneakiest option. The coefficient is (<i>x</i><sub>max</sub> − <i>x</i><sub>min</sub>)/(<i>x</i><sub>max</sub> + <i>x</i><sub>min</sub>): the numerator survives the shift but the denominator grows by 10, so the coefficient genuinely does change."
            }
          ],
          "solution": "A translation preserves every gap, so the range and the mean deviation are both untouched. The coefficient of range is <b>not</b> a pure gap measure, since the sum in its denominator does feel the shift, which is exactly why it is the planted distractor."
        },
        {
          "t": "mcq",
          "q": "The mean deviation about the median of 4, 7, 9, 13, 16 is:",
          "correct": 0,
          "opts": [
            {
              "label": "3.6",
              "nudge": null
            },
            {
              "label": "3.76",
              "nudge": "This measures about the <b>mean</b>, 9.8, when the question said median. Deviations 5.8, 2.8, 0.8, 3.2, 6.2 total 18.8, and 18.8/5 = 3.76. The single most common error on this item."
            },
            {
              "label": "4.0",
              "nudge": "A rounding or addition slip in the deviation column. The five distances from 9 are 5, 2, 0, 4, 7, which total 18 and not 20."
            },
            {
              "label": "18",
              "nudge": "The sum of the deviations with the final division by <i>n</i> forgotten. A mean deviation of 18 would also fail the sanity check, since the range here is only 12."
            }
          ],
          "solution": "The list is sorted and <i>n</i> = 5 is odd, so <i>M</i> = 9. Absolute deviations 5, 2, 0, 4, 7 sum to 18, and M.D.(<i>M</i>) = 18/5 = 3.6. Note it is smaller than the 3.76 you get about the mean, exactly as the minimisation property promises."
        },
        {
          "t": "mcq",
          "q": "The mean deviation of a data set is least when it is measured about the:",
          "correct": 1,
          "opts": [
            {
              "label": "mean",
              "nudge": "The popular wrong answer. The mean minimises the sum of <b>squared</b> deviations, which is the variance of Topic 03, not the sum of absolute ones."
            },
            {
              "label": "median",
              "nudge": null
            },
            {
              "label": "mode",
              "nudge": "The mode is the most frequent value and minimises nothing of this kind. It can sit at one end of the data and still be the mode."
            },
            {
              "label": "range",
              "nudge": "A category error planted for panicked guessing: the range is a measure of spread, not a central value, so there is no such thing as deviation <i>about</i> it."
            }
          ],
          "solution": "By the outside-in pairing argument, Σ|<i>x</i><sub>i</sub> − <i>a</i>| is minimised when <i>a</i> is the median. Two anchors, two minimisers: <b>median for absolute deviations, mean for squared ones</b>. Keeping that pair straight settles this question and half of Topic 03."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the range and the mean deviation about the mean of 14, 18, 22, 26, 30.",
              "a": "Range = 30 − 14 = 16. Mean = 110/5 = 22. Deviations 8, 4, 0, 4, 8 total 24, so M.D. = 24/5 = 4.8. And 4.8 ≤ 16, as it must be."
            },
            {
              "q": "[CBSE] For 32, 28, 36, 24, 30, find the coefficient of range and the coefficient of mean deviation about the mean.",
              "a": "Coefficient of range = (36 − 24)/(36 + 24) = 12/60 = 0.2. Mean = 30 and M.D. = 3.2, so the coefficient of M.D. = 3.2/30 ≈ 0.107. Both are pure numbers, which is the point of dividing."
            },
            {
              "q": "[JEE Main] A data set has mean deviation about the mean 7.5 and range 25. Every observation is replaced by 4 × value − 9. Find the new mean deviation and range.",
              "a": "Both are gap measures, so both are multiplied by |4| and neither feels the −9. New M.D. = 30, new range = 100."
            },
            {
              "q": "[JEE Advanced] For 2, 5, 9, 14, 20, find every value of <i>a</i> minimising Σ|<i>x</i><sub>i</sub> − <i>a</i>|, and the minimum value.",
              "a": "n = 5 is odd, so the pairing (2, 20), (5, 14) leaves 9 unpaired and the minimiser is the single point a = 9. Minimum sum = 7 + 4 + 0 + 5 + 11 = 27. With an odd count the answer is one value; with an even count it is a whole interval."
            },
            {
              "q": "[CBSE] A student computes a mean deviation of 14 for a data set whose range is 12. What has gone wrong?",
              "a": "Every |xᵢ − a| is at most the range, so the average of them is too: M.D. ≤ range, always. A mean deviation exceeding the range is an arithmetic slip upstream, usually a mis-added deviation column or a division by the wrong count."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Dropping the absolute-value sign.</b> Computing Σ(<i>x</i><sub>i</sub> − <i>x̄</i>) without the modulus gives exactly 0 for every data set, because deviations about the mean always cancel. The modulus is the difference between measuring <i>distance</i> and measuring <i>signed displacement</i>.",
            "<b>Not sorting before taking a median.</b> The median is a positional statistic. An unsorted list has no middle, and reading the middle entry of the printed order is the most common way to get every downstream number wrong.",
            "<b>Using the mean when “least mean deviation” is asked.</b> If a question wants the smallest possible value, anchor to the <b>median</b>. Reading which central value is requested costs two seconds and saves the whole answer.",
            "<b>Believing a shift changes the spread.</b> Adding or subtracting a constant changes neither the range nor any mean deviation; multiplying scales both by |<i>a</i>|. Many transformation MCQs test nothing but this.",
            "<b>Treating the range as an answer to “how consistent”.</b> It looks at two observations and ignores the rest, so two data sets can share a range and differ completely in mean deviation."
          ]
        },
        {
          "t": "protip",
          "html": "for any transformation <i>x</i><sub>i</sub> ↦ <i>ax</i><sub>i</sub> + <i>b</i>, write “range and M.D. ↦ |<i>a</i>| × old” immediately and ignore <i>b</i>. no recomputation, no table. and before you commit any mean deviation, glance at the range: if your answer is bigger, something upstream is wrong."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "Range = x<sub>max</sub> − x<sub>min</sub>",
              "note": "hears only two observations"
            },
            {
              "f": "coefficient of range = (x<sub>max</sub> − x<sub>min</sub>)/(x<sub>max</sub> + x<sub>min</sub>)",
              "note": "dimensionless, and it does feel a shift"
            },
            {
              "f": "M.D.(a) = (1/n) Σ |x<sub>i</sub> − a|",
              "note": "name the anchor a, always"
            },
            {
              "f": "Σ |x<sub>i</sub> − a| is least at a = median",
              "note": "even n gives a whole interval of minimisers"
            },
            {
              "f": "x<sub>i</sub> ↦ ax<sub>i</sub> + b ⇒ range, M.D. ↦ |a| × old",
              "note": "b does nothing at all"
            },
            {
              "f": "M.D. ≤ Range",
              "note": "the free sanity check, use it every time"
            }
          ],
          "aids": [
            "“median minimises mean-deviation, the three Ms”",
            "“add doesn't matter, multiply scales”"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Mean Deviation from a Frequency Table",
      "chip": "02 TABLES",
      "kalam": "divide by the frequency total, never by the row count",
      "blocks": [
        {
          "t": "p",
          "html": "Real data almost never arrives as a tidy list of five numbers. It arrives as a <b>table</b>: goals per match against number of matches, wage bracket against number of workers, marks range against number of students. Nothing conceptual changes, the mean deviation is still the average distance from a centre, but two pieces of bookkeeping have to be got right and both of them are worth marks."
        },
        {
          "t": "p",
          "html": "The first is <b>weighting</b>. If the value 2 occurs eight times, its distance from the centre must be counted eight times, not once. So every column is multiplied by <i>f</i><sub>i</sub> before it is summed. The second is the <b>divisor</b>. It is <i>N</i> = Σ<i>f</i><sub>i</sub>, the total number of observations, and never the number of rows in the table. A five-row table describing 25 matches divides by 25. This single slip is the most frequent source of lost marks in board answers to this chapter."
        },
        {
          "t": "p",
          "html": "Tables come in two shapes and they behave differently. A <b>discrete</b> table lists actual values, 0, 1, 2, 3, 4 goals, and you already have your <i>x</i><sub>i</sub>. A <b>continuous</b> table lists class intervals, 100 to 200, 200 to 300, and you do not: the individual observations have been thrown away. So each class is replaced by its <b>mid-point</b>, one representative value standing in for every observation inside it. That replacement is an assumption, and everything downstream inherits it."
        },
        {
          "t": "think",
          "html": "a frequency table is a list you have been handed folded up. weighting by <i>f</i><sub>i</sub> is just unfolding it, and dividing by Σ<i>f</i><sub>i</sub> is counting how many things fell out."
        },
        {
          "t": "formula",
          "kicker": "MEAN AND MEAN DEVIATION FOR A TABLE",
          "tag": "every column carries an f",
          "main": "x̄ = (Σ f<sub>i</sub>x<sub>i</sub>)/N · M.D.(a) = (Σ f<sub>i</sub>|x<sub>i</sub> − a|)/N",
          "legend": [
            "<i>N</i> = Σ<i>f</i><sub>i</sub>, the total frequency. <b>Not</b> the number of rows or classes",
            "for a continuous table, <i>x</i><sub>i</sub> = (lower limit + upper limit)/2, the class mid-point",
            "build the columns in one sweep: <i>f</i><sub>i</sub><i>x</i><sub>i</sub>, then |<i>x</i><sub>i</sub> − <i>a</i>|, then <i>f</i><sub>i</sub>|<i>x</i><sub>i</sub> − <i>a</i>|, and total each"
          ],
          "note": "The frequency column total is the divisor. Train your eye to grab N from the bottom of the f column and never from the row count: a table of five goal-counts describing 25 matches divides 24.0 by 25, not by 5."
        },
        {
          "t": "proc",
          "title": "Mean deviation about the mean, from any table",
          "steps": [
            "<b>If the classes are intervals, write the mid-point column first.</b> One representative value per class, and every later column is built from it.",
            "<b>Total the frequency column.</b> That total is <i>N</i>, and it is the number you will divide by at the end. Write it down now, before it can be confused with the row count.",
            "<b>Compute <i>x̄</i> = Σ<i>f</i><sub>i</sub><i>x</i><sub>i</sub>/<i>N</i>.</b> Keep it exact if you can: a mean like 8.24 makes every deviation ugly, which is a hint that a shortcut exists (Topic 04).",
            "<b>Form |<i>x</i><sub>i</sub> − <i>x̄</i>|, then <i>f</i><sub>i</sub>|<i>x</i><sub>i</sub> − <i>x̄</i>|.</b> An observation occurring ten times contributes its distance ten times. This is the step where the weighting actually happens.",
            "<b>Divide the last total by <i>N</i>.</b> Then check the answer against the range, and against the units: if the wages were in rupees, so is the mean deviation."
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A striker's goals per match over a season: goals <i>x</i><sub>i</sub> = 0, 1, 2, 3, 4 with matches <i>f</i><sub>i</sub> = 4, 6, 8, 5, 2. Find the mean deviation about the mean.",
          "steps": [
            "<i>N</i> = 4 + 6 + 8 + 5 + 2 = 25 matches. That is the divisor, and it is the first thing to write down.",
            "Σ<i>f</i><sub>i</sub><i>x</i><sub>i</sub> = 0 + 6 + 16 + 15 + 8 = 45, so <i>x̄</i> = 45/25 = 1.8 goals.",
            "Σ<i>f</i><sub>i</sub>|<i>x</i><sub>i</sub> − 1.8| = 4(1.8) + 6(0.8) + 8(0.2) + 5(1.2) + 2(2.2) = 7.2 + 4.8 + 1.6 + 6.0 + 4.4 = 24.0.",
            "M.D. = 24.0/25 = 0.96 goals. The trap under time pressure is to see five rows and write 24.0/5 = 4.8."
          ],
          "ans": "M.D.(x̄) = 0.96 goals"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "The daily wages in ₹ of 40 workers: classes 100 to 200, 200 to 300, 300 to 400, 400 to 500, 500 to 600 with <i>f</i><sub>i</sub> = 6, 10, 14, 8, 2. Find the mean deviation about the mean.",
          "steps": [
            "Mid-points: 150, 250, 350, 450, 550. <i>N</i> = 40.",
            "Σ<i>f</i><sub>i</sub><i>x</i><sub>i</sub> = 900 + 2500 + 4900 + 3600 + 1100 = 13000, so <i>x̄</i> = 13000/40 = ₹325.",
            "|<i>x</i><sub>i</sub> − 325| = 175, 75, 25, 125, 225, and <i>f</i><sub>i</sub>|<i>x</i><sub>i</sub> − 325| = 1050, 750, 350, 1000, 450.",
            "Total 3600, so M.D.(<i>x̄</i>) = 3600/40 = ₹90."
          ],
          "ans": "x̄ = ₹325, M.D.(x̄) = ₹90"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "For <i>x</i><sub>i</sub> = 2, 4, 6 with <i>f</i><sub>i</sub> = 1, 2, 2, find the mean deviation about the mean.",
          "steps": [
            "<i>N</i> = 1 + 2 + 2 = 5, not 3.",
            "Σ<i>f</i><sub>i</sub><i>x</i><sub>i</sub> = 2 + 8 + 12 = 22, so <i>x̄</i> = 22/5 = 4.4.",
            "Σ<i>f</i><sub>i</sub>|<i>x</i><sub>i</sub> − 4.4| = 1(2.4) + 2(0.4) + 2(1.6) = 2.4 + 0.8 + 3.2 = 6.4.",
            "M.D. = 6.4/5 = 1.28. Dividing 6.4 by 3, the number of distinct values, gives 2.13 and is the standard distractor."
          ],
          "ans": "M.D.(x̄) = 1.28"
        },
        {
          "t": "p",
          "html": "The median needs more care, because <b>how you find it depends on which kind of table you have</b>, and importing the wrong method is the classic way to lose a whole answer. For an ungrouped list you sort and take the middle. For a <b>discrete</b> table you read the position off a cumulative frequency column and there is <b>no interpolation at all</b>. For a <b>continuous</b> table you must interpolate, because the individual values inside the median class are gone."
        },
        {
          "t": "defgrid",
          "title": "Three tables, three ways to find the median",
          "rows": [
            {
              "k": "Ungrouped list",
              "v": "sort; middle value if <i>n</i> odd, average of the two middle values if <i>n</i> even"
            },
            {
              "k": "Discrete table",
              "v": "build the c.f. column, then read off by <b>position</b>. Never interpolate: there is no <i>h</i>"
            },
            {
              "k": "Continuous table",
              "v": "find the median class from the c.f. column, then interpolate with <i>M</i> = ℓ + ((<i>N</i>/2 − <i>C</i>)/<i>f</i>) × <i>h</i>"
            },
            {
              "k": "c.f. against <i>x</i><sub>i</sub>",
              "v": "<i>f</i><sub>1</sub> + ⋯ + <i>f</i><sub>i</sub>. It is a positional index into the sorted list of all <i>N</i> observations"
            },
            {
              "k": "<i>N</i> odd, discrete",
              "v": "<i>M</i> = the ((<i>N</i> + 1)/2)th observation = the first <i>x</i><sub>i</sub> whose c.f. reaches (<i>N</i> + 1)/2"
            },
            {
              "k": "<i>N</i> even, discrete",
              "v": "average the (<i>N</i>/2)th and (<i>N</i>/2 + 1)th observations. If some c.f. equals <i>N</i>/2 exactly, they are two different values"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE MEDIAN OF A CONTINUOUS TABLE",
          "tag": "step proportionally into the median class",
          "main": "M = ℓ + ((N/2 − C)/f) × h",
          "legend": [
            "the <b>median class</b> is the first class whose cumulative frequency reaches <i>N</i>/2",
            "ℓ = its lower <b>boundary</b>, <i>C</i> = the c.f. of the class just before it, <i>f</i> = its own frequency, <i>h</i> = its width",
            "then proceed as usual with |<i>x</i><sub>i</sub> − <i>M</i>| in place of |<i>x</i><sub>i</sub> − <i>x̄</i>|, using the mid-points <i>x</i><sub>i</sub>"
          ],
          "note": "The assumption being made is that the observations are spread evenly across the median class, so you step in proportionally to reach the (N/2)th value. This formula belongs to <b>continuous</b> data only: a discrete table has no boundary ℓ and no width h, so the next procedure reads its median off the c.f. column instead."
        },
        {
          "t": "proc",
          "title": "The median of a discrete frequency table",
          "steps": [
            "<b>Check the <i>x</i><sub>i</sub> are in ascending order.</b> If the table is printed out of order, reorder it, carrying each frequency with its value. A cumulative frequency column is meaningless over unsorted values.",
            "<b>Build the c.f. column</b> and note which serial positions each value occupies. If the c.f. jumps from 12 to 17 at <i>x</i><sub>i</sub>, then <i>x</i><sub>i</sub> is the 13th, 14th, 15th, 16th and 17th observation.",
            "<b><i>N</i> odd:</b> the median is the ((<i>N</i> + 1)/2)th observation, so run down the c.f. column and take the first value whose c.f. reaches it.",
            "<b><i>N</i> even:</b> read off both the (<i>N</i>/2)th and the (<i>N</i>/2 + 1)th observations and average them. <b>Watch the sub-case:</b> if some c.f. equals <i>N</i>/2 exactly, those two positions land in different blocks and the two values genuinely differ.",
            "<b>Then run the ordinary columns:</b> |<i>x</i><sub>i</sub> − <i>M</i>|, then <i>f</i><sub>i</sub>|<i>x</i><sub>i</sub> − <i>M</i>|, divided by <i>N</i>. Never by the number of distinct values."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Days absent <i>x</i><sub>i</sub> = 4, 6, 8, 10, 12 with students <i>f</i><sub>i</sub> = 3, 5, 8, 4, 5. Find the mean deviation about the median and its coefficient.",
          "steps": [
            "Already ascending. c.f. = 3, 8, 16, 20, 25, so <i>N</i> = 25 is odd and the median is the 13th observation.",
            "The first c.f. to reach 13 is 16, against <i>x</i> = 8. Indeed 8 occupies positions 9 to 16, which contains 13. So <i>M</i> = 8 days.",
            "<i>f</i><sub>i</sub>|<i>x</i><sub>i</sub> − 8| = 3(4) + 5(2) + 8(0) + 4(2) + 5(4) = 12 + 10 + 0 + 8 + 20 = 50.",
            "M.D.(<i>M</i>) = 50/25 = 2 days, and the coefficient is 2/8 = 0.25. Cross-check: <i>x̄</i> = 206/25 = 8.24 gives M.D.(<i>x̄</i>) = 51.68/25 = 2.0672, which is larger, as the minimisation property demands."
          ],
          "ans": "M = 8 days, M.D.(M) = 2 days, coefficient 0.25"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "For <i>x</i><sub>i</sub> = 5, 10, 15, 20, 25 with <i>f</i><sub>i</sub> = 4, 6, 5, 9, 6, find the mean deviation about the median.",
          "steps": [
            "<i>N</i> = 30 is even, so <i>N</i>/2 = 15 and we need the 15th and 16th observations. c.f. = 4, 10, 15, 24, 30.",
            "This is the sub-case: a c.f. equals 15 <b>exactly</b>. So the 15th observation is 15, the last position in that block, and the 16th is 20, the first of the next. <i>M</i> = (15 + 20)/2 = 17.5.",
            "<i>f</i><sub>i</sub>|<i>x</i><sub>i</sub> − 17.5| = 4(12.5) + 6(7.5) + 5(2.5) + 9(2.5) + 6(7.5) = 50 + 45 + 12.5 + 22.5 + 45 = 175.",
            "M.D.(<i>M</i>) = 175/30 = 35/6 ≈ 5.83, and the coefficient is (35/6)/17.5 = 1/3. Note the middle of the <i>value</i> list is 15, not 17.5: the median is positional, over all 30 observations."
          ],
          "ans": "M = 17.5, M.D.(M) = 35/6 ≈ 5.83"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Marks of 40 students: 0 to 10, 10 to 20, 20 to 30, 30 to 40, 40 to 50 with <i>f</i><sub>i</sub> = 7, 8, 10, 9, 6. Find the mean deviation about the median.",
          "steps": [
            "c.f. = 7, 15, 25, 34, 40. <i>N</i>/2 = 20, and the first c.f. to reach 20 is 25, so the <b>median class is 20 to 30</b>.",
            "Interpolate with ℓ = 20, <i>C</i> = 15, <i>f</i> = 10, <i>h</i> = 10: <i>M</i> = 20 + ((20 − 15)/10) × 10 = 20 + 5 = 25.",
            "Mid-points 5, 15, 25, 35, 45. Then <i>f</i><sub>i</sub>|<i>x</i><sub>i</sub> − 25| = 7(20) + 8(10) + 10(0) + 9(10) + 6(20) = 140 + 80 + 0 + 90 + 120 = 430.",
            "M.D.(<i>M</i>) = 430/40 = 10.75 marks.",
            "Watch out: the median of grouped data is <b>not</b> the middle mid-point. It happens to equal 25 here, but only because the interpolation landed there. Skip the interpolation and every downstream number is a guess."
          ],
          "ans": "M = 25, M.D.(M) = 10.75 marks"
        },
        {
          "t": "p",
          "html": "One shape of table is left, and NCERT plants it twice without ever explaining it. Every table so far has been <b>exclusive</b>: each class ends exactly where the next begins, 0 to 10, 10 to 20, 20 to 30. But ages, marks, wages and counts are naturally recorded as whole numbers, which produces an <b>inclusive</b> table with gaps in it: 16 to 20, 21 to 25, 26 to 30. Both endpoints belong to their class, so somebody aged exactly 20 is counted in the first and somebody aged 21 in the second."
        },
        {
          "t": "p",
          "html": "Nothing is lost, but the class column now has holes, and the median formula needs boundaries that touch. The fix is one subtraction: let <i>g</i> be the gap between a class's lower limit and the previous class's upper limit, set the correction factor <b><i>c</i> = <i>g</i>/2</b>, then push each lower limit down by <i>c</i> and each upper limit up by <i>c</i>. Whole-number data gives <i>g</i> = 1 and <i>c</i> = 0.5, which is the 0.5 in NCERT's bracketed hint. The rule is <i>g</i>/2, <b>never a hard-coded 0.5</b>."
        },
        {
          "t": "diagram",
          "kind": "numberline",
          "kicker": "DIAGRAM · STRETCH THE EDGES, NOT THE CENTRE",
          "chips": ["as printed", "true boundaries", "the width"],
          "captions": [
            "Ages recorded in whole years: the class 16 to 20, then the class 21 to 25. Look at the gap between them. Nothing is lost, since a person of 20 is counted left and a person of 21 is counted right, but the class column has holes in it and the median formula needs boundaries that touch.",
            "The gap is 1, so c is 0.5. Subtract it from each lower limit and add it to each upper: the classes become 15.5 to 20.5 and 20.5 to 25.5, and they now abut exactly. Every upper boundary equals the next lower boundary, which is a free self-check that you measured the gap right. Now look at the two dots: the mid-points 18 and 23 have not moved a hair.",
            "That invariance is the whole rule, because (l − c + u + c)/2 is just (l + u)/2. The class was stretched by 0.5 at each end, so its centre stayed put while its width went from 4 to 5. Mean, variance, standard deviation, coefficient of variation and mean deviation about the mean are built only from mid-points and cannot feel the correction. Only the range and the interpolated median can."
          ],
          "frames": [
            {
              "x": [15, 26],
              "intervals": [
                { "from": 16, "to": 20 },
                { "from": 21, "to": 25 }
              ],
              "points": [
                { "x": 18, "y": 0, "label": "18" },
                { "x": 23, "y": 0, "label": "23" }
              ]
            },
            {
              "x": [15, 26],
              "intervals": [
                { "from": 15.5, "to": 20.5 },
                { "from": 20.5, "to": 25.5 }
              ],
              "points": [
                { "x": 18, "y": 0, "label": "18" },
                { "x": 23, "y": 0, "label": "23" }
              ]
            },
            {
              "x": [15, 26],
              "intervals": [{ "from": 15.5, "to": 20.5, "label": "width 5, not 4" }],
              "points": [
                { "x": 15.5, "y": 0, "label": "15.5" },
                { "x": 16, "y": 0, "open": true, "soft": true },
                { "x": 18, "y": 0 },
                { "x": 20, "y": 0, "open": true, "soft": true },
                { "x": 20.5, "y": 0 }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Handling an inclusive table",
          "steps": [
            "<b>Check whether the table is inclusive at all.</b> Compare the upper limit of any class with the lower limit of the next. Equal means the table is already continuous and you do nothing; correcting a continuous table manufactures a wrong answer out of a right one.",
            "<b>Read what the question asks for.</b> Mean, variance, standard deviation, C.V. or mean deviation about the <b>mean</b>? Stop. Mid-points are invariant, so build the table straight from <i>x</i><sub>i</sub> = (<i>l</i><sub>i</sub> + <i>u</i><sub>i</sub>)/2 and ignore the correction entirely.",
            "<b>Median, mean deviation about the median, or range?</b> Then compute <i>g</i> from any adjacent pair and set <i>c</i> = <i>g</i>/2. These three are the only quantities that read boundaries rather than centres.",
            "<b>Rewrite the class column as <i>l</i><sub>i</sub> − <i>c</i> to <i>u</i><sub>i</sub> + <i>c</i>,</b> and confirm each new upper boundary equals the next lower boundary. If it does not, you mis-measured <i>g</i>.",
            "<b>Interpolate with the corrected ℓ <i>and</i> the corrected <i>h</i> = <i>u</i> − <i>l</i> + 2<i>c</i>.</b> Half the correction is worse than none. The median <i>class</i> never moves, because no frequency was touched, so only the numbers inside it change.",
            "<b>Build |<i>x</i><sub>i</sub> − <i>M</i>| from the uncorrected mid-points</b> and divide by <i>N</i>. The mid-points were never wrong in the first place."
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Scores 1 to 10, 11 to 20, 21 to 30, 31 to 40, 41 to 50 with frequencies 4, 10, 20, 12, 4. Find the median and the mean deviation about it.",
          "steps": [
            "<i>g</i> = 11 − 10 = 1, so <i>c</i> = 0.5 and the boundaries are 0.5 to 10.5, 10.5 to 20.5, 20.5 to 30.5, 30.5 to 40.5, 40.5 to 50.5, each of width <i>h</i> = 10.",
            "Mid-points, unchanged: 5.5, 15.5, 25.5, 35.5, 45.5. c.f. = 4, 14, 34, 46, 50. <i>N</i>/2 = 25 and the first c.f. to reach it is 34, so the median class is 20.5 to 30.5.",
            "<i>M</i> = 20.5 + ((25 − 14)/20) × 10 = 20.5 + 5.5 = 26.",
            "<i>f</i><sub>i</sub>|<i>x</i><sub>i</sub> − 26| = 4(20.5) + 10(10.5) + 20(0.5) + 12(9.5) + 4(19.5) = 82 + 105 + 10 + 114 + 78 = 389, so M.D.(<i>M</i>) = 389/50 = 7.78.",
            "Treat the printed limits as boundaries, ℓ = 21 and <i>h</i> = 9, and you get 25.95 and 7.762. Those are exactly the distractors a paper-setter prints alongside the right answers."
          ],
          "ans": "M = 26, M.D.(M) = 7.78"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "The ages of 100 persons: 16 to 20, 21 to 25, …, 51 to 55 with <i>f</i><sub>i</sub> = 5, 6, 12, 14, 26, 12, 16, 9. Find the mean deviation about the median age.",
          "steps": [
            "<i>g</i> = 1 so <i>c</i> = 0.5, and the boundaries run 15.5 to 20.5, 20.5 to 25.5, …, 50.5 to 55.5, each of width <b><i>h</i> = 5</b>, not the 4 the printed limits suggest.",
            "Mid-points 18, 23, 28, 33, 38, 43, 48, 53 and c.f. = 5, 11, 23, 37, 63, 75, 91, 100. <i>N</i>/2 = 50, and the first c.f. to reach it is 63, so the median class is 35.5 to 40.5.",
            "<i>M</i> = 35.5 + ((50 − 37)/26) × 5 = 35.5 + 2.5 = 38 years.",
            "<i>f</i><sub>i</sub>|<i>x</i><sub>i</sub> − 38| = 100 + 90 + 120 + 70 + 0 + 60 + 160 + 135 = 735, so M.D.(<i>M</i>) = 735/100 = 7.35 years.",
            "A warning about this particular table: here the position fraction is 13/26 = 1/2 exactly, so an uncorrected ℓ = 36 with <i>h</i> = 4 gives 38 as well. That student scored full marks by luck, because the median happened to land at the invariant class centre."
          ],
          "ans": "M = 38 years, M.D.(M) = 7.35 years"
        },
        {
          "t": "mcq",
          "q": "For <i>x</i><sub>i</sub> = 2, 4, 6 with <i>f</i><sub>i</sub> = 1, 2, 2, the mean deviation about the mean is:",
          "correct": 0,
          "opts": [
            {
              "label": "1.28",
              "nudge": null
            },
            {
              "label": "2.13",
              "nudge": "The frequency-divisor trap: this divides 6.4 by 3, the number of distinct values, instead of by <i>N</i> = Σ<i>f</i><sub>i</sub> = 5."
            },
            {
              "label": "6.4",
              "nudge": "That is Σ<i>f</i><sub>i</sub>|<i>x</i><sub>i</sub> − <i>x̄</i>| with the division skipped entirely. It is also larger than the range, 4, which the sanity check catches instantly."
            },
            {
              "label": "1.6",
              "nudge": "This reports the largest single deviation, |6 − 4.4|, rather than the weighted average of all of them."
            }
          ],
          "solution": "<i>N</i> = 5 and <i>x̄</i> = (2 + 8 + 12)/5 = 4.4. Then Σ<i>f</i><sub>i</sub>|<i>x</i><sub>i</sub> − 4.4| = 1(2.4) + 2(0.4) + 2(1.6) = 6.4, and M.D. = 6.4/5 = 1.28. The divisor comes from the bottom of the frequency column, never from the row count."
        },
        {
          "t": "mcq",
          "q": "For <i>x</i><sub>i</sub> = 5, 10, 15, 20, 25 with <i>f</i><sub>i</sub> = 4, 6, 5, 9, 6, the median is:",
          "correct": 2,
          "opts": [
            {
              "label": "15",
              "nudge": "This takes the middle of the <b>value</b> list. The median is a positional statistic on all 30 observations, not on the 5 distinct values, and here it is only the 15th of them."
            },
            {
              "label": "20",
              "nudge": "This takes the (<i>N</i>/2 + 1)th observation alone and forgets that an even <i>N</i> needs both middle positions averaged."
            },
            {
              "label": "17.5",
              "nudge": null
            },
            {
              "label": "18.5",
              "nudge": "This interpolates, which is exactly what a discrete table forbids: with no class boundaries there is no ℓ and no width <i>h</i>, so the grouped formula is not merely inaccurate here, it is undefined."
            }
          ],
          "solution": "c.f. = 4, 10, 15, 24, 30, and <i>N</i> = 30 is even. A c.f. equals <i>N</i>/2 = 15 <b>exactly</b>, so the 15th observation is 15 and the 16th is 20, two genuinely different values, and <i>M</i> = 17.5. Most textbook tables leap straight past <i>N</i>/2, which is why students never notice this branch exists."
        },
        {
          "t": "mcq",
          "q": "Weights are recorded to the nearest tenth of a kilogram in the classes 40.0 to 44.9, 45.0 to 49.9, 50.0 to 54.9. The correction factor <i>c</i> is:",
          "correct": 3,
          "opts": [
            {
              "label": "0.5",
              "nudge": "The hard-coded number. NCERT's two bracketed hints happen to use whole-number data, where <i>g</i> = 1 gives <i>c</i> = 0.5, and students memorise the value instead of the rule."
            },
            {
              "label": "0.1",
              "nudge": "That is the gap <i>g</i> itself, not half of it. The correction has to split the gap between the two classes that share it, or the new boundaries will overlap."
            },
            {
              "label": "0",
              "nudge": "This says the table is already continuous. It is not: 44.9 is followed by 45.0, so there is a real gap and the boundaries do not touch."
            },
            {
              "label": "0.05",
              "nudge": null
            }
          ],
          "solution": "<i>g</i> = 45.0 − 44.9 = 0.1, so <i>c</i> = <i>g</i>/2 = 0.05 and the true boundaries are 39.95 to 44.95, 44.95 to 49.95, 49.95 to 54.95, each of width 5. Measure the gap first, every single time."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[JEE Main] For <i>x</i><sub>i</sub> = 5, 10, 15, 20, 25 with <i>f</i><sub>i</sub> = 3, 5, 8, 3, 1, find the mean deviation about the mean.",
              "a": "N = 20 and Σfᵢxᵢ = 15 + 50 + 120 + 60 + 25 = 270, so x̄ = 13.5. Then Σfᵢ|xᵢ − 13.5| = 3(8.5) + 5(3.5) + 8(1.5) + 3(6.5) + 1(11.5) = 25.5 + 17.5 + 12 + 19.5 + 11.5 = 86, and M.D. = 86/20 = 4.3."
            },
            {
              "q": "[CBSE] For <i>x</i><sub>i</sub> = 3, 5, 7, 9, 11 with <i>f</i><sub>i</sub> = 2, 4, 6, 5, 3, find the mean deviation about the median and its coefficient.",
              "a": "c.f. = 2, 6, 12, 17, 20 and N = 20 is even. The 10th and 11th observations both fall in the block 7 occupies, positions 7 to 12, so M = 7. Then Σfᵢ|xᵢ − 7| = 8 + 8 + 0 + 10 + 12 = 38, M.D.(M) = 38/20 = 1.9, coefficient = 1.9/7 ≈ 0.271."
            },
            {
              "q": "[CBSE] Daily wages in hundreds of rupees: <i>x</i><sub>i</sub> = 10, 15, 20, 25, 30, 35 with <i>f</i><sub>i</sub> = 3, 5, 8, 6, 4, 4. Find the mean deviation about the median.",
              "a": "N = 30 and c.f. = 3, 8, 16, 22, 26, 30. The 15th and 16th observations both equal 20, since 20 occupies positions 9 to 16, so M = 20. Σfᵢ|xᵢ − 20| = 30 + 25 + 0 + 30 + 40 + 60 = 185 and M.D.(M) = 185/30 = 37/6 ≈ 6.17 hundred rupees."
            },
            {
              "q": "[JEE Main] Classes 10 to 19, 20 to 29, 30 to 39, 40 to 49, 50 to 59 with frequencies 5, 9, 15, 8, 3. Find the range, the median and the mean deviation about the median.",
              "a": "g = 1 so c = 0.5, boundaries 9.5 to 19.5 up to 49.5 to 59.5, each of width 10. Range = 59.5 − 9.5 = 50. N = 40 and c.f. = 5, 14, 29, 37, 40, so the median class is 29.5 to 39.5 and M = 29.5 + (20 − 14)/15 × 10 = 33.5. Mid-points 14.5, 24.5, 34.5, 44.5, 54.5 give Σfᵢ|xᵢ − M| = 95 + 81 + 15 + 88 + 63 = 342, so M.D.(M) = 342/40 = 8.55. Ignoring the correction gives 33.6 and 8.52, both wrong."
            },
            {
              "q": "[CBSE] For the same table as the previous item, find the mean and the variance, and say in one line why the boundary correction was irrelevant.",
              "a": "Σfᵢxᵢ = 72.5 + 220.5 + 517.5 + 356 + 163.5 = 1330, so x̄ = 1330/40 = 33.25. Σfᵢxᵢ² = 49060, so σ² = 49060/40 − 33.25² = 1226.5 − 1105.5625 = 120.9375. The correction stretches each class symmetrically, so no mid-point moves, and both quantities are built only from mid-points."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Dividing by the number of rows.</b> The divisor is always <i>N</i> = Σ<i>f</i><sub>i</sub>. This is the single most frequent source of lost marks in board answers to this chapter, and it is caught free by the M.D. ≤ range check.",
            "<b>Interpolating a discrete table.</b> <i>M</i> = ℓ + ((<i>N</i>/2 − <i>C</i>)/<i>f</i>) × <i>h</i> belongs to continuous data. A discrete table has no class boundaries and no width, so the formula is not inaccurate there, it is <b>undefined</b>.",
            "<b>Averaging the <i>x</i><sub>i</sub> column to get the median.</b> The median is positional over all <i>N</i> observations, not over the <i>k</i> distinct values. When the two coincide it is a coincidence of a symmetric table.",
            "<b>Treating the printed limits of an inclusive table as boundaries.</b> The uncorrected median is the printed distractor. And when you do correct, remember <i>h</i> grows too: dropping ℓ by <i>c</i> and leaving <i>h</i> alone is worse than doing nothing.",
            "<b>Recomputing the mean or variance after a boundary correction.</b> They cannot change, because mid-points are invariant. Three minutes spent re-deriving an identical number is three minutes gone."
          ]
        },
        {
          "t": "protip",
          "html": "the first two things you write for any table are <i>N</i> = Σ<i>f</i><sub>i</sub> and, if the classes are intervals, the mid-point column. everything else hangs off those two. and when a table has gaps, ask what the question wants before you correct anything: mid-point quantities do not care, boundary quantities do."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "x̄ = (Σ f<sub>i</sub>x<sub>i</sub>)/N, N = Σ f<sub>i</sub>",
              "note": "never the number of rows"
            },
            {
              "f": "M.D.(a) = (Σ f<sub>i</sub>|x<sub>i</sub> − a|)/N",
              "note": "an observation occurring f times counts f times"
            },
            {
              "f": "continuous: x<sub>i</sub> = (lower + upper)/2",
              "note": "one representative value per class"
            },
            {
              "f": "discrete median: read the position off the c.f.",
              "note": "no interpolation, ever, there is no h"
            },
            {
              "f": "grouped median: M = ℓ + ((N/2 − C)/f) × h",
              "note": "median class = first c.f. to reach N/2"
            },
            {
              "f": "inclusive classes: c = g/2, h = u − l + 2c",
              "note": "mid-points invariant, only median and range move"
            }
          ],
          "aids": [
            "“N comes from the bottom of the f column”",
            "“stretch the edges, not the centre”"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Variance and Standard Deviation",
      "chip": "03 VARIANCE",
      "kalam": "square the distances so the far ones shout",
      "blocks": [
        {
          "t": "p",
          "html": "Mean deviation worked, but it was forced to wrap every deviation in absolute-value bars, and the modulus sign is mathematically grumpy: |<i>x</i>| has a sharp corner at zero and refuses to cooperate with algebra or calculus. Statisticians wanted a spread measure that kills the signs <b>and</b> stays smooth enough to manipulate. Their trick: instead of taking the absolute value of each deviation, <b>square</b> it."
        },
        {
          "t": "p",
          "html": "Squaring does three jobs at once. It throws away the sign, since a square is never negative. It is perfectly smooth, with no corners, so it slots into further mathematics effortlessly. And it <b>punishes large deviations far more than small ones</b>: an observation 2 units from the mean contributes 4, but one sitting 10 units away contributes 100, not 10. The average of these squared deviations is the <b>variance</b>, written σ<sup>2</sup>."
        },
        {
          "t": "p",
          "html": "There is one inconvenience. If the data is in marks, the squared deviations are in marks<sup>2</sup>, and so is the variance, an awkward unit nobody can interpret. The cure is simple: take the positive square root to drag the measure back into the original units. That square root is the <b>standard deviation</b> σ, the single most-used measure of spread in all of statistics. Two batsmen both average 45 runs; P scores 44, 46, 45, 43, 47 and Q scores 5, 90, 12, 88, 30. For a must-win final you pick P, and σ is precisely the number that says so."
        },
        {
          "t": "think",
          "html": "picture each deviation as the side of a little square drawn on the number line. a point near the mean draws a tiny square, a far-flung outlier draws an enormous one. variance is the average area of all those squares, and one distant point can dominate the average completely."
        },
        {
          "t": "def",
          "term": "Variance",
          "html": "σ<sup>2</sup>, the mean of the squared deviations from the mean. It is <b>always</b> anchored to the mean, unlike mean deviation which can sit on any central value, and that is not arbitrary: just as the median minimises absolute deviation, the mean minimises mean-square deviation. It carries the <b>squared</b> units of the data, and σ<sup>2</sup> = 0 only when every single observation equals the mean."
        },
        {
          "t": "def",
          "term": "Standard deviation",
          "html": "σ = +√(σ<sup>2</sup>), always the positive root. It carries the <b>same units as the data</b>, which is the entire reason it exists alongside the variance. Two instant sanity checks: σ<sup>2</sup> ≥ 0 always, and σ can never exceed the range, since every |<i>x</i><sub>i</sub> − <i>x̄</i>| is at most the range."
        },
        {
          "t": "formula",
          "kicker": "VARIANCE, TWO WAYS",
          "tag": "the second one is the workhorse",
          "main": "σ<sup>2</sup> = (1/n) Σ(x<sub>i</sub> − x̄)<sup>2</sup> = (1/n) Σx<sub>i</sub><sup>2</sup> − x̄<sup>2</sup>",
          "legend": [
            "the first is the definition and reads as English: the average of the squared distances from the mean",
            "the second needs only two running totals, Σ<i>x</i><sub>i</sub> and Σ<i>x</i><sub>i</sub><sup>2</sup>, and never a single deviation",
            "then σ = +√(σ<sup>2</sup>). Read the last line of the question: variance and standard deviation are different answers"
          ],
          "note": "Reach for the shortcut whenever the mean is not a whole number: it sidesteps ugly decimal deviations entirely. If your variance comes out <b>negative</b>, you subtracted the two terms in the wrong order, because a mean of squares can never be less than the square of the mean."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE SHORTCUT FORMULA, TAP A LINE",
          "steps": [
            {
              "eq": "σ<sup>2</sup> = (1/n) Σ(x<sub>i</sub> − x̄)<sup>2</sup>",
              "why": "The definition. Every deviation is squared, so nothing cancels and nothing is negative, but computing it means finding each deviation by hand, which is painful the moment the mean is not a whole number."
            },
            {
              "eq": "= (1/n) Σ(x<sub>i</sub><sup>2</sup> − 2x̄ x<sub>i</sub> + x̄<sup>2</sup>)",
              "why": "Expand the square. The reason for expanding is to separate the data-dependent sum of squares from the mean, which is one fixed constant, so that no individual deviation is ever needed."
            },
            {
              "eq": "= (1/n) Σx<sub>i</sub><sup>2</sup> − (2x̄/n) Σx<sub>i</sub> + (1/n) Σx̄<sup>2</sup>",
              "why": "Split into three pieces. Legal because summation distributes over addition, and a constant slides out through a sum untouched."
            },
            {
              "eq": "(1/n) Σx<sub>i</sub> = x̄, so the middle term is −2x̄ · x̄ = −2x̄<sup>2</sup>",
              "why": "This is the definition of the mean used in reverse, and it is the only place in the derivation where x̄ is anything other than a symbol being carried along."
            },
            {
              "eq": "x̄<sup>2</sup> is a constant, so Σx̄<sup>2</sup> = n x̄<sup>2</sup> and the last term is x̄<sup>2</sup>",
              "why": "A constant added n times is n times the constant, not the constant. Writing the last term as x̄²/n instead loses the whole derivation, and it is the step examiners look at."
            },
            {
              "eq": "σ<sup>2</sup> = (1/n) Σx<sub>i</sub><sup>2</sup> − 2x̄<sup>2</sup> + x̄<sup>2</sup> = (1/n) Σx<sub>i</sub><sup>2</sup> − x̄<sup>2</sup>",
              "why": "Collect, and the two x̄² terms leave one behind with a minus sign. Two totals in, one variance out. It also hands you a free diagnostic: since a mean of squares is never smaller than the square of the mean, a negative answer means the two terms were subtracted the wrong way round."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · WHAT THE VARIANCE ADDS UP",
          "chips": ["the data", "deviations", "shift + 6", "scale × 2"],
          "captions": [
            "Units sold on five days: 12, 15, 18, 21, 24. Position along the bottom, value up the side, and the soft dashed line is the mean, 18. Reading data this way is the whole trick of the topic: the mean is a height, and spread is how far the dots stray from it.",
            "The four amber sticks are the deviations: 6 below, 3 below, 3 above, 6 above, with the middle day contributing nothing. Variance squares each stick and averages, so (36 + 9 + 0 + 9 + 36)/5 = 18, and the standard deviation is its root, 3√2 or about 4.24 units. Squaring is what stops the sticks cancelling to zero.",
            "Add 6 to every value. The dots and the mean line rise together, and every stick is exactly the length it was. The variance is still 18. A shift moves the centre and cannot touch the spread, and this is the single most tested fact in the chapter.",
            "Double every value instead. Now each stick is twice as long, and squaring turns twice into four times: the variance goes from 18 to 72 while the standard deviation only doubles, 4.24 to 8.49. Variance scales by a squared, standard deviation by the size of a."
          ],
          "frames": [
            {
              "x": [0, 6],
              "y": [6, 30],
              "curves": [{ "c": "line", "m": 0, "k": 18, "soft": true, "dash": true }],
              "points": [
                { "x": 1, "y": 12, "label": "12" },
                { "x": 2, "y": 15 },
                { "x": 3, "y": 18 },
                { "x": 4, "y": 21 },
                { "x": 5, "y": 24, "label": "24" }
              ],
              "labels": [{ "x": 3, "y": 28, "text": "mean 18", "soft": true }]
            },
            {
              "x": [0, 6],
              "y": [6, 30],
              "curves": [{ "c": "line", "m": 0, "k": 18, "soft": true, "dash": true }],
              "segments": [
                { "from": [1, 18], "to": [1, 12], "label": "6" },
                { "from": [2, 18], "to": [2, 15] },
                { "from": [4, 18], "to": [4, 21] },
                { "from": [5, 18], "to": [5, 24], "label": "6" }
              ],
              "points": [
                { "x": 1, "y": 12 },
                { "x": 2, "y": 15 },
                { "x": 3, "y": 18 },
                { "x": 4, "y": 21 },
                { "x": 5, "y": 24 }
              ],
              "labels": [{ "x": 3, "y": 28.4, "text": "σ² = 90/5 = 18", "soft": true }]
            },
            {
              "x": [0, 6],
              "y": [12, 36],
              "curves": [{ "c": "line", "m": 0, "k": 24, "soft": true, "dash": true }],
              "segments": [
                { "from": [1, 24], "to": [1, 18] },
                { "from": [2, 24], "to": [2, 21] },
                { "from": [4, 24], "to": [4, 27] },
                { "from": [5, 24], "to": [5, 30] }
              ],
              "points": [
                { "x": 1, "y": 18 },
                { "x": 2, "y": 21 },
                { "x": 3, "y": 24 },
                { "x": 4, "y": 27 },
                { "x": 5, "y": 30 }
              ],
              "labels": [{ "x": 3, "y": 34.4, "text": "σ² still 18", "soft": true }]
            },
            {
              "x": [0, 6],
              "y": [12, 60],
              "curves": [{ "c": "line", "m": 0, "k": 36, "soft": true, "dash": true }],
              "segments": [
                { "from": [1, 36], "to": [1, 24] },
                { "from": [2, 36], "to": [2, 30] },
                { "from": [4, 36], "to": [4, 42] },
                { "from": [5, 36], "to": [5, 48] }
              ],
              "points": [
                { "x": 1, "y": 24 },
                { "x": 2, "y": 30 },
                { "x": 3, "y": 36 },
                { "x": 4, "y": 42 },
                { "x": 5, "y": 48 }
              ],
              "labels": [{ "x": 3, "y": 57, "text": "σ² = 72, four times", "soft": true }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "VARIANCE FROM A FREQUENCY TABLE",
          "tag": "same two totals, weighted",
          "main": "σ<sup>2</sup> = (Σ f<sub>i</sub>x<sub>i</sub><sup>2</sup>)/N − ((Σ f<sub>i</sub>x<sub>i</sub>)/N)<sup>2</sup>",
          "legend": [
            "<i>N</i> = Σ<i>f</i><sub>i</sub>, and for a continuous table the <i>x</i><sub>i</sub> are the class mid-points, exactly as in Topic 02",
            "equivalently σ<sup>2</sup> = (1/<i>N</i>) Σ<i>f</i><sub>i</sub>(<i>x</i><sub>i</sub> − <i>x̄</i>)<sup>2</sup>, which is the definition with weights",
            "build the columns <i>f</i><sub>i</sub><i>x</i><sub>i</sub> and <i>f</i><sub>i</sub><i>x</i><sub>i</sub><sup>2</sup> in one sweep and total both"
          ],
          "note": "The second bracket is the mean, squared. Squaring it after dividing is not the same as squaring before, and confusing the two is the commonest way this formula goes wrong."
        },
        {
          "t": "formula",
          "kicker": "THE STEP-DEVIATION FORM",
          "tag": "for tidy hand computation",
          "main": "σ<sup>2</sup> = h<sup>2</sup>[(Σ f<sub>i</sub>d<sub>i</sub><sup>2</sup>)/N − ((Σ f<sub>i</sub>d<sub>i</sub>)/N)<sup>2</sup>]",
          "legend": [
            "with <i>d</i><sub>i</sub> = (<i>x</i><sub>i</sub> − <i>A</i>)/<i>h</i>, where <i>A</i> is a convenient assumed mean and <i>h</i> the class width",
            "the coding turns mid-points like 150, 250, 350 into the tiny integers −2, −1, 0, 1, 2, which slashes arithmetic error",
            "as a bonus the mean falls out too: <i>x̄</i> = <i>A</i> + <i>h</i> × (Σ<i>f</i><sub>i</sub><i>d</i><sub>i</sub>)/<i>N</i>"
          ],
          "note": "Notice the factor is h<sup>2</sup> and not h. That is not a typographical accident: it undoes the division by h in the coding, and variance always feels a scale factor squared. Topic 04 makes that rule explicit."
        },
        {
          "t": "proc",
          "title": "Variance of a continuous table by step deviation",
          "steps": [
            "<b>Replace each class by its mid-point <i>x</i><sub>i</sub>.</b> One representative value per class, and no correction is needed even for an inclusive table, since mid-points are invariant.",
            "<b>Choose a convenient assumed mean <i>A</i>,</b> usually a central mid-point, and read off the class width <i>h</i>. Then <i>d</i><sub>i</sub> = (<i>x</i><sub>i</sub> − <i>A</i>)/<i>h</i> is a small integer.",
            "<b>Build the columns <i>f</i><sub>i</sub><i>d</i><sub>i</sub> and <i>f</i><sub>i</sub><i>d</i><sub>i</sub><sup>2</sup></b> and total each. Keep the signs in the first column: it can and often does total to a negative number.",
            "<b>Apply σ<sup>2</sup> = <i>h</i><sup>2</sup>[Σ<i>f</i><sub>i</sub><i>d</i><sub>i</sub><sup>2</sup>/<i>N</i> − (Σ<i>f</i><sub>i</sub><i>d</i><sub>i</sub>/<i>N</i>)<sup>2</sup>].</b> The correction term is often tiny, but dropping it is still an error and graders look for it.",
            "<b>Take σ = +√(σ<sup>2</sup>)</b> and check σ ≤ range. If the question asked for the standard deviation, this line is the answer, not the one before it."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A shop sold 12, 15, 18, 21, 24 units on five days. Find the variance and the standard deviation.",
          "steps": [
            "<i>x̄</i> = (12 + 15 + 18 + 21 + 24)/5 = 90/5 = 18.",
            "Deviations −6, −3, 0, 3, 6; squared 36, 9, 0, 9, 36; total 90.",
            "σ<sup>2</sup> = 90/5 = 18 units<sup>2</sup>, and σ = √18 = 3√2 ≈ 4.24 units.",
            "Units check: variance in units squared, standard deviation in units. And 4.24 ≤ 12, the range, so it is consistent."
          ],
          "ans": "σ² = 18 units², σ = 3√2 ≈ 4.24 units"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the variance of <i>x</i><sub>i</sub> = 4, 8, 12, 16, 20 with <i>f</i><sub>i</sub> = 2, 5, 8, 3, 2.",
          "steps": [
            "<i>N</i> = 20. Σ<i>f</i><sub>i</sub><i>x</i><sub>i</sub> = 8 + 40 + 96 + 48 + 40 = 232, so <i>x̄</i> = 232/20 = 11.6.",
            "Σ<i>f</i><sub>i</sub><i>x</i><sub>i</sub><sup>2</sup> = 2(16) + 5(64) + 8(144) + 3(256) + 2(400) = 32 + 320 + 1152 + 768 + 800 = 3072.",
            "σ<sup>2</sup> = 3072/20 − (11.6)<sup>2</sup> = 153.6 − 134.56 = 19.04, so σ ≈ 4.36.",
            "The shortcut paid off: not one (<i>x</i><sub>i</sub> − 11.6) deviation was ever written down."
          ],
          "ans": "σ² = 19.04, σ ≈ 4.36"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Marks of 30 students: 0 to 20, 20 to 40, 40 to 60, 60 to 80, 80 to 100 with <i>f</i><sub>i</sub> = 4, 6, 10, 7, 3. Find the variance and standard deviation by step deviation.",
          "steps": [
            "Mid-points 10, 30, 50, 70, 90. Take <i>A</i> = 50 and <i>h</i> = 20, so <i>d</i><sub>i</sub> = −2, −1, 0, 1, 2.",
            "<i>f</i><sub>i</sub><i>d</i><sub>i</sub> = −8, −6, 0, 7, 6 with total <b>−1</b>. <i>f</i><sub>i</sub><i>d</i><sub>i</sub><sup>2</sup> = 16, 6, 0, 7, 12 with total 41.",
            "σ<sup>2</sup> = 400[41/30 − (−1/30)<sup>2</sup>] = 400[1.3667 − 0.0011] ≈ 546.2, so σ ≈ 23.4 marks.",
            "As a bonus the mean falls out: <i>x̄</i> = 50 + 20(−1/30) ≈ 49.3. The correction term is small, but dropping it is still an error."
          ],
          "ans": "σ² ≈ 546.2, σ ≈ 23.4 marks"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "For a data set of 5 observations, Σ<i>x</i><sub>i</sub> = 40 and Σ<i>x</i><sub>i</sub><sup>2</sup> = 375. Find the variance and standard deviation.",
          "steps": [
            "<i>x̄</i> = 40/5 = 8. The raw observations are never needed, and are not recoverable from this information anyway.",
            "σ<sup>2</sup> = Σ<i>x</i><sub>i</sub><sup>2</sup>/<i>n</i> − <i>x̄</i><sup>2</sup> = 375/5 − 64 = 75 − 64 = 11.",
            "σ = √11 ≈ 3.32.",
            "The two traps live in this one line: stopping at 75, and reporting 64, the term that was supposed to be subtracted."
          ],
          "ans": "σ² = 11, σ = √11 ≈ 3.32"
        },
        {
          "t": "mcq",
          "q": "The variance of 4, 6, 8, 10, 12 is:",
          "correct": 1,
          "opts": [
            {
              "label": "40",
              "nudge": "That is Σ(<i>x</i><sub>i</sub> − <i>x̄</i>)<sup>2</sup> with the division by <i>n</i> forgotten. Variance is an <b>average</b> of squared deviations, not a total."
            },
            {
              "label": "8",
              "nudge": null
            },
            {
              "label": "2√2",
              "nudge": "That is √8, the standard deviation. The question asked for the variance, and stopping one step too late costs the mark just as surely as stopping one step too early."
            },
            {
              "label": "64",
              "nudge": "That is <i>x̄</i><sup>2</sup>, the term the shortcut formula tells you to <b>subtract</b>, reported alone."
            }
          ],
          "solution": "<i>x̄</i> = 40/5 = 8, deviations −4, −2, 0, 2, 4, squares 16, 4, 0, 4, 16 totalling 40, so σ<sup>2</sup> = 40/5 = 8. By the shortcut: Σ<i>x</i><sub>i</sub><sup>2</sup> = 360, and 360/5 − 64 = 72 − 64 = 8. Both routes, one answer."
        },
        {
          "t": "mcq",
          "q": "The heights of 50 plants are measured in cm and the variance comes out as 36. Then:",
          "correct": 2,
          "opts": [
            {
              "label": "the standard deviation is 36 cm",
              "nudge": "Variance and standard deviation differ by a square root. 36 is the variance, and quoting it as the SD is the commonest way to lose a mark on otherwise perfect work."
            },
            {
              "label": "the standard deviation is 6 cm<sup>2</sup>",
              "nudge": "The number is right and the unit is not. Taking the square root takes the root of the unit too: √(cm<sup>2</sup>) = cm, which is exactly why the standard deviation exists."
            },
            {
              "label": "the standard deviation is 6 cm",
              "nudge": null
            },
            {
              "label": "the variance is 6 cm",
              "nudge": "This swaps the two quantities and drops the squared unit at the same time. Variance always carries the data's units squared, here cm<sup>2</sup>."
            }
          ],
          "solution": "σ = +√36 = 6 cm. Variance carries the squared unit, cm<sup>2</sup>; the standard deviation carries the data's own unit, cm. Writing the unit next to every answer in this chapter catches half the available errors for free."
        },
        {
          "t": "mcq",
          "q": "A student's variance comes out negative. The most likely cause is:",
          "correct": 2,
          "opts": [
            {
              "label": "an odd number of observations",
              "nudge": "Nothing in either form of the formula cares about the parity of <i>n</i>. Both work identically for every whole number of observations."
            },
            {
              "label": "a negative observation in the data",
              "nudge": "Every deviation is squared, so a negative observation behaves exactly like a positive one. Variance is an average of squares and no sign in the data can drag it below zero."
            },
            {
              "label": "subtracting the two terms of the shortcut in the wrong order",
              "nudge": null
            },
            {
              "label": "forgetting the square root",
              "nudge": "The square root converts the variance into the standard deviation, and it comes afterwards. Skipping it can never turn a positive number negative."
            }
          ],
          "solution": "σ<sup>2</sup> = (1/<i>n</i>)Σ<i>x</i><sub>i</sub><sup>2</sup> − <i>x̄</i><sup>2</sup>, and a mean of squares is never smaller than the square of the mean, so this expression is never negative. Writing <i>x̄</i><sup>2</sup> − (1/<i>n</i>)Σ<i>x</i><sub>i</sub><sup>2</sup> is what produces the impossible answer. Treat σ<sup>2</sup> ≥ 0 as a running check, not a curiosity."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the variance and standard deviation of 5, 10, 15, 20, 25.",
              "a": "Mean = 15. Deviations −10, −5, 0, 5, 10 with squares 100, 25, 0, 25, 100 totalling 250. So σ² = 250/5 = 50 and σ = 5√2 ≈ 7.07."
            },
            {
              "q": "[JEE Main] Find the variance of <i>x</i><sub>i</sub> = 1, 2, 3, 4, 5 with <i>f</i><sub>i</sub> = 4, 6, 8, 5, 2.",
              "a": "N = 25 and Σfᵢxᵢ = 4 + 12 + 24 + 20 + 10 = 70, so x̄ = 2.8. Σfᵢxᵢ² = 4 + 24 + 72 + 80 + 50 = 230, so σ² = 230/25 − 7.84 = 9.2 − 7.84 = 1.36."
            },
            {
              "q": "[CBSE] The variance of a data set is 0. What can you say about the observations?",
              "a": "Every one of them equals the mean. Variance is an average of squared deviations, so a total of zero forces each squared deviation to be zero, and the data set is perfectly flat. This is the only case where σ² = 0."
            },
            {
              "q": "[JEE Main] For 8 observations, Σ<i>x</i><sub>i</sub> = 40 and Σ<i>x</i><sub>i</sub><sup>2</sup> = 260. Find the standard deviation.",
              "a": "x̄ = 40/8 = 5, so σ² = 260/8 − 25 = 32.5 − 25 = 7.5 and σ = √7.5 ≈ 2.74. Note that no individual observation was ever needed, or is recoverable."
            },
            {
              "q": "[CBSE] Marks of 20 students: 0 to 10, 10 to 20, 20 to 30, 30 to 40 with <i>f</i><sub>i</sub> = 3, 7, 6, 4. Find the mean and the variance.",
              "a": "Mid-points 5, 15, 25, 35 and N = 20. Σfᵢxᵢ = 15 + 105 + 150 + 140 = 410, so x̄ = 20.5. Σfᵢxᵢ² = 75 + 1575 + 3750 + 4900 = 10300, so σ² = 10300/20 − 420.25 = 515 − 420.25 = 94.75, and σ ≈ 9.73."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Confusing variance with standard deviation.</b> They differ by a square root and by units, marks<sup>2</sup> against marks. If the question asks for σ and you stop at σ<sup>2</sup>, correct work scores nothing.",
            "<b>Stopping the shortcut formula early.</b> Students routinely forget the − <i>x̄</i><sup>2</sup>, or subtract <i>x̄</i> instead of <i>x̄</i><sup>2</sup>. If the answer is negative, the two terms were swapped.",
            "<b>Squaring the mean before dividing.</b> In the frequency form the second term is ((Σ<i>f</i><sub>i</sub><i>x</i><sub>i</sub>)/<i>N</i>)<sup>2</sup>: divide first, square after.",
            "<b>Using <i>h</i> rather than <i>h</i><sup>2</sup> in the step-deviation form.</b> The coding divided every deviation by <i>h</i>, and variance is quadratic in the data, so undoing it costs a factor of <i>h</i><sup>2</sup>.",
            "<b>Dropping the correction term when it looks tiny.</b> In a step-deviation table (Σ<i>f</i><sub>i</sub><i>d</i><sub>i</sub>/<i>N</i>)<sup>2</sup> can be 0.001, and it is still part of the answer that graders check for."
          ]
        },
        {
          "t": "protip",
          "html": "reach for σ<sup>2</sup> = (1/<i>n</i>)Σ<i>x</i><sub>i</sub><sup>2</sup> − <i>x̄</i><sup>2</sup> whenever the mean is not a whole number: it sidesteps every ugly decimal deviation. and run two checks before committing: variance must be ≥ 0, and the standard deviation must be ≤ the range."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "σ<sup>2</sup> = (1/n) Σ(x<sub>i</sub> − x̄)<sup>2</sup>",
              "note": "the definition, anchored to the mean always"
            },
            {
              "f": "σ<sup>2</sup> = (1/n) Σx<sub>i</sub><sup>2</sup> − x̄<sup>2</sup>",
              "note": "two totals in, one variance out"
            },
            {
              "f": "σ = +√(σ<sup>2</sup>)",
              "note": "square for variance, root for SD"
            },
            {
              "f": "σ<sup>2</sup> = (Σ f<sub>i</sub>x<sub>i</sub><sup>2</sup>)/N − ((Σ f<sub>i</sub>x<sub>i</sub>)/N)<sup>2</sup>",
              "note": "divide first, square after"
            },
            {
              "f": "σ<sup>2</sup> = h<sup>2</sup>[Σ f<sub>i</sub>d<sub>i</sub><sup>2</sup>/N − (Σ f<sub>i</sub>d<sub>i</sub>/N)<sup>2</sup>]",
              "note": "d = (x − A)/h, and the factor is h squared"
            },
            {
              "f": "σ<sup>2</sup> ≥ 0 · σ ≤ Range",
              "note": "two free checks, run both every time"
            }
          ],
          "aids": [
            "“square for variance, root for SD”",
            "“variance in marks squared, SD in marks”"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Shift, Scale and the Assumed Mean",
      "chip": "04 SHIFT & SCALE",
      "kalam": "shift-proof, scale-squared",
      "blocks": [
        {
          "t": "p",
          "html": "Every measure in this chapter is built out of <b>gaps</b>, and that one observation settles a whole family of exam questions without a single line of recomputation. Slide a data set bodily along the number line and no gap changes, so no measure of spread changes. Stretch it by a factor <i>a</i> and every gap stretches by |<i>a</i>|, so the range and mean deviation are multiplied by |<i>a</i>| and the variance, being quadratic in the data, by <i>a</i><sup>2</sup>."
        },
        {
          "t": "p",
          "html": "The same idea run backwards is a computation trick. If a shift cannot change the variance, then you are free to <b>choose where zero sits</b> before you start adding. Pick an assumed mean <i>A</i> that makes the arithmetic clean, work with the shifted numbers <i>x</i><sub>i</sub> − <i>A</i>, and correct at the end. JEE Main has a favourite costume for this: it hands you Σ(<i>x</i><sub>i</sub> − <i>A</i>) and Σ(<i>x</i><sub>i</sub> − <i>A</i>)<sup>2</sup> and asks for the mean or the standard deviation. One line if you know the identity, five minutes of reconstruction if you do not."
        },
        {
          "t": "think",
          "html": "the mean is a location and the variance is a size. move the ruler and only the location changes. rescale the ruler and the size changes too, but squared, because variance was already measuring an area of little squares."
        },
        {
          "t": "formula",
          "kicker": "THE TRANSFORMATION PAIR",
          "tag": "memorise both halves together",
          "main": "y<sub>i</sub> = ax<sub>i</sub> + b ⇒ ȳ = ax̄ + b, σ<sup>2</sup><sub>y</sub> = a<sup>2</sup>σ<sup>2</sup><sub>x</sub>, σ<sub>y</sub> = |a| σ<sub>x</sub>",
          "legend": [
            "<b>the mean feels both <i>a</i> and <i>b</i>; the variance feels only <i>a</i>, and feels it squared</b>",
            "range and mean deviation follow the standard deviation, not the variance: they scale by |<i>a</i>|",
            "the sign of <i>a</i> is discarded. Flipping a data set about a point does not change how spread out it is"
          ],
          "note": "The signature trap is scaling the variance by a instead of a<sup>2</sup>, or letting the additive b creep into a spread measure. Under y = 2x + 7 with σ<sup>2</sup> = 9: the new variance is 36 and the new SD is 6, and 2 × 3 + 7 = 13 is nobody's answer."
        },
        {
          "t": "formula",
          "kicker": "THE ASSUMED-MEAN IDENTITY",
          "tag": "true for every real A, without exception",
          "main": "x̄ = A + (1/n) Σ(x<sub>i</sub> − A) · σ<sup>2</sup> = (1/n) Σ(x<sub>i</sub> − A)<sup>2</sup> − (x̄ − A)<sup>2</sup>",
          "legend": [
            "<i>A</i> is the <b>assumed mean</b>, also called the working origin. It need not be near the data, need not be an observation, and need not be the real mean",
            "put <i>A</i> = 0 and you recover σ<sup>2</sup> = (1/<i>n</i>)Σ<i>x</i><sub>i</sub><sup>2</sup> − <i>x̄</i><sup>2</sup>; put <i>A</i> = <i>x̄</i> and you recover the definition. They are two ends of one identity",
            "the frequency version is identical with <i>f</i><sub>i</sub> weights and <i>N</i> = Σ<i>f</i><sub>i</sub>, and the step-deviation form of Topic 03 is this with <i>d</i><sub>i</sub> = (<i>x</i><sub>i</sub> − <i>A</i>)/<i>h</i>"
          ],
          "note": "The correction term is (mean of the deviations) squared, so you <b>divide before you square</b>. Note (Σ(x<sub>i</sub> − A))<sup>2</sup> and Σ(x<sub>i</sub> − A)<sup>2</sup> are entirely different numbers, and the identity uses both, one inside each term."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE ASSUMED-MEAN IDENTITY, TAP A LINE",
          "steps": [
            {
              "eq": "put d<sub>i</sub> = x<sub>i</sub> − A, so x<sub>i</sub> = d<sub>i</sub> + A",
              "why": "A change of origin: a shift by the constant A, with no scaling anywhere. A is a number you choose, or a number the question chooses for you, and nothing below constrains it."
            },
            {
              "eq": "average both sides: x̄ = d̄ + A, so d̄ = x̄ − A",
              "why": "Averaging is linear, so the constant A comes straight through untouched. That is the mean half of the identity, and it is the half students skip on the way to the variance."
            },
            {
              "eq": "x<sub>i</sub> − x̄ = (d<sub>i</sub> + A) − (d̄ + A) = d<sub>i</sub> − d̄",
              "why": "The A cancels against itself. Deviations from the mean are untouched by a shift, which is the whole reason the trick works at all, and it is the a = 1, b = −A case of the transformation rule."
            },
            {
              "eq": "σ<sup>2</sup><sub>x</sub> = (1/n) Σ(d<sub>i</sub> − d̄)<sup>2</sup> = σ<sup>2</sup><sub>d</sub>",
              "why": "Same numbers, same squares, same total. The shifted data has exactly the variance the original data had."
            },
            {
              "eq": "σ<sup>2</sup><sub>d</sub> = (1/n) Σd<sub>i</sub><sup>2</sup> − d̄<sup>2</sup> ⇒ σ<sup>2</sup> = (1/n) Σ(x<sub>i</sub> − A)<sup>2</sup> − (x̄ − A)<sup>2</sup>",
              "why": "Apply the ordinary shortcut to the d values, then substitute back. Read what the correction is doing: the first term measures spread about A, which is generally not the mean, and subtracting (x̄ − A)² removes the extra distance introduced by anchoring at the wrong point. It is zero only when A is the mean."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Reading mean and variance off deviation sums",
          "steps": [
            "<b>Read <i>n</i> and <i>A</i> off the question.</b> <i>A</i> is whatever number is being subtracted inside the brackets. If two different reference points appear, see the next step.",
            "<b>Two reference points and <i>n</i> unknown?</b> Subtract the two first-order sums. Each term contributes (<i>x</i><sub>i</sub> − <i>A</i><sub>1</sub>) − (<i>x</i><sub>i</sub> − <i>A</i><sub>2</sub>) = <i>A</i><sub>2</sub> − <i>A</i><sub>1</sub>, so the difference is (<i>A</i><sub>2</sub> − <i>A</i><sub>1</sub>)<i>n</i> and the data cancels out entirely.",
            "<b>Compute <i>d̄</i> = (1/<i>n</i>)Σ(<i>x</i><sub>i</sub> − <i>A</i>) first, then <i>x̄</i> = <i>A</i> + <i>d̄</i>.</b> This is not optional bookkeeping: the variance step needs <i>d̄</i>, which is exactly <i>x̄</i> − <i>A</i>.",
            "<b>Then σ<sup>2</sup> = (1/<i>n</i>)Σ(<i>x</i><sub>i</sub> − <i>A</i>)<sup>2</sup> − <i>d̄</i><sup>2</sup>.</b> Skipping the correction whenever <i>d̄</i> ≠ 0 is the single most common wrong answer, and it is exactly what a distractor will offer.",
            "<b>Take the positive root and check σ<sup>2</sup> ≥ 0.</b> A negative variance means you either subtracted in the wrong order or squared Σ(<i>x</i><sub>i</sub> − <i>A</i>) where you needed Σ(<i>x</i><sub>i</sub> − <i>A</i>)<sup>2</sup>.",
            "<b>Apply any transformation rules last,</b> once <i>x̄</i> and σ<sup>2</sup> for the original data are in hand."
          ]
        },
        {
          "t": "formula",
          "kicker": "STANDARD VARIANCES WORTH KNOWING COLD",
          "tag": "an AP is a linear image of 1, 2, …, n",
          "main": "first n naturals: σ<sup>2</sup> = (n<sup>2</sup> − 1)/12",
          "legend": [
            "an AP <i>a</i>, <i>a</i> + <i>d</i>, …, <i>a</i> + (<i>n</i> − 1)<i>d</i> is the image <i>x</i><sub>i</sub> = (<i>a</i> − <i>d</i>) + <i>di</i> of 1, 2, …, <i>n</i>, so σ<sup>2</sup><sub>AP</sub> = <i>d</i><sup>2</sup>(<i>n</i><sup>2</sup> − 1)/12",
            "first <i>n</i> even numbers 2, 4, …, 2<i>n</i>: <i>d</i> = 2, so σ<sup>2</sup> = 4(<i>n</i><sup>2</sup> − 1)/12 = (<i>n</i><sup>2</sup> − 1)/3",
            "first <i>n</i> odd numbers 1, 3, …, 2<i>n</i> − 1: also <i>d</i> = 2, so the same (<i>n</i><sup>2</sup> − 1)/3. The two lists differ by a shift of 1, and a shift cannot change a variance"
          ],
          "note": "The first term a of the AP is buried in the shift and contributes nothing at all. Only the common difference and the number of terms matter, which is worth saying out loud before you start substituting."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · VARIANCE OF THE FIRST n NATURAL NUMBERS, TAP A LINE",
          "steps": [
            {
              "eq": "x̄ = (1 + 2 + ⋯ + n)/n = (n + 1)/2",
              "why": "The sum of the first n naturals is n(n + 1)/2, so the mean is the average of the first and last terms, exactly as it is for any AP."
            },
            {
              "eq": "Σx<sub>i</sub><sup>2</sup> = n(n + 1)(2n + 1)/6",
              "why": "The standard sum of squares. Everything below is bookkeeping around these two totals, and no individual deviation is ever formed."
            },
            {
              "eq": "σ<sup>2</sup> = (n + 1)(2n + 1)/6 − (n + 1)<sup>2</sup>/4",
              "why": "The shortcut formula, with the 1/n cancelling one factor of n out of the sum of squares."
            },
            {
              "eq": "= (n + 1)[2(2n + 1) − 3(n + 1)]/12",
              "why": "Take out the common (n + 1) and put both fractions over 12. The bracket collapses: 4n + 2 − 3n − 3 = n − 1."
            },
            {
              "eq": "σ<sup>2</sup> = (n + 1)(n − 1)/12 = (n<sup>2</sup> − 1)/12",
              "why": "A difference of squares. Sanity check at n = 1: a single observation has no spread, and the formula gives 0. And since an AP with common difference d is the linear image of this list with multiplier d, its variance is d²(n² − 1)/12 by the transformation rule."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "For 9 observations, Σ(<i>x</i><sub>i</sub> − 5) = 9 and Σ(<i>x</i><sub>i</sub> − 5)<sup>2</sup> = 45. Find the mean and the standard deviation.",
          "steps": [
            "Here <i>n</i> = 9 and <i>A</i> = 5. First <i>d̄</i> = 9/9 = 1, so <i>x̄</i> = <i>A</i> + <i>d̄</i> = 5 + 1 = 6.",
            "σ<sup>2</sup> = 45/9 − (<i>x̄</i> − 5)<sup>2</sup> = 5 − 1 = 4, so σ = +√4 = 2.",
            "Verify by the long route: Σ(<i>x</i><sub>i</sub> − 5) = Σ<i>x</i><sub>i</sub> − 45 = 9 gives Σ<i>x</i><sub>i</sub> = 54 and <i>x̄</i> = 6. ✓",
            "And Σ(<i>x</i><sub>i</sub> − 5)<sup>2</sup> = Σ<i>x</i><sub>i</sub><sup>2</sup> − 540 + 225 = 45 gives Σ<i>x</i><sub>i</sub><sup>2</sup> = 360, so σ<sup>2</sup> = 360/9 − 36 = 4. ✓ Note how much longer that was."
          ],
          "ans": "x̄ = 6, σ = 2"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "For a data set, Σ(<i>x</i><sub>i</sub> − 2) = 10, Σ(<i>x</i><sub>i</sub> − 5) = −5 and Σ(<i>x</i><sub>i</sub> − 2)<sup>2</sup> = 60. Find <i>n</i>, the mean and the standard deviation.",
          "steps": [
            "Subtract the two first-order sums. Each term contributes (<i>x</i><sub>i</sub> − 2) − (<i>x</i><sub>i</sub> − 5) = 3, and there are <i>n</i> of them: 10 − (−5) = 3<i>n</i>, so <i>n</i> = 5.",
            "That is the trick the question is built around: the difference of two deviation sums about different points kills the data entirely and leaves only <i>n</i>.",
            "With <i>A</i> = 2 and <i>n</i> = 5: <i>d̄</i> = 10/5 = 2, so <i>x̄</i> = 2 + 2 = 4.",
            "σ<sup>2</sup> = 60/5 − 2<sup>2</sup> = 12 − 4 = 8, so σ = 2√2 ≈ 2.83. Check the unused sum: Σ(<i>x</i><sub>i</sub> − 5) = Σ<i>x</i><sub>i</sub> − 25 = 20 − 25 = −5. ✓"
          ],
          "ans": "n = 5, x̄ = 4, σ = 2√2 ≈ 2.83"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "The variance of 20 observations is 5. Each observation is multiplied by 3 and then 4 is added. Find the new variance and standard deviation.",
          "steps": [
            "The + 4 shifts all the data equally and cannot change any gap, so it does nothing to either answer.",
            "For the variance the scale factor enters <b>squared</b>: σ<sup>2</sup><sub>new</sub> = 3<sup>2</sup> × 5 = 45.",
            "σ<sub>new</sub> = |3| × √5 = 3√5 ≈ 6.71. Equivalently √45, which is the same number.",
            "The signature trap is multiplying the variance by 3 to get 15. Lock it in: variance by <i>a</i><sup>2</sup>, standard deviation by |<i>a</i>|, additive constant by nothing."
          ],
          "ans": "σ² = 45, σ = 3√5 ≈ 6.71"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Find the variance of the first 10 odd natural numbers, and check the answer directly.",
          "steps": [
            "1, 3, 5, …, 19 is an AP with <i>d</i> = 2 and <i>n</i> = 10, so σ<sup>2</sup> = <i>d</i><sup>2</sup>(<i>n</i><sup>2</sup> − 1)/12 = 4(99)/12 = 33.",
            "Direct check: the mean is 10, and the deviations are ±1, ±3, ±5, ±7, ±9.",
            "Σ(<i>x</i><sub>i</sub> − <i>x̄</i>)<sup>2</sup> = 2(1 + 9 + 25 + 49 + 81) = 2(165) = 330, so σ<sup>2</sup> = 330/10 = 33. ✓",
            "The first 10 <b>even</b> numbers give the same 33: the two lists differ by a shift of 1, and a shift never changes a variance."
          ],
          "ans": "σ² = 33"
        },
        {
          "t": "mcq",
          "q": "For 9 observations, Σ(<i>x</i><sub>i</sub> − 5) = 9 and Σ(<i>x</i><sub>i</sub> − 5)<sup>2</sup> = 45. The variance is:",
          "correct": 2,
          "opts": [
            {
              "label": "5",
              "nudge": "This is (1/<i>n</i>)Σ(<i>x</i><sub>i</sub> − <i>A</i>)<sup>2</sup>, the mean square deviation about <i>A</i> = 5. It always overstates the variance unless <i>A</i> is the actual mean, and here <i>d̄</i> = 1, so a correction of 1 is still owed."
            },
            {
              "label": "9",
              "nudge": "This squares the first sum before dividing: 81/9. The identity divides first and squares after, so the correction term is (9/9)<sup>2</sup> = 1, not 9."
            },
            {
              "label": "4",
              "nudge": null
            },
            {
              "label": "36",
              "nudge": "That is <i>x̄</i><sup>2</sup>, which is what you subtract in the <i>A</i> = 0 version. With <i>A</i> = 5 you subtract (<i>x̄</i> − <i>A</i>)<sup>2</sup> = 1 instead."
            }
          ],
          "solution": "<i>d̄</i> = 9/9 = 1, so <i>x̄</i> = 5 + 1 = 6 and σ<sup>2</sup> = 45/9 − 1<sup>2</sup> = 5 − 1 = 4. The whole question is whether you remember the correction term and whether you divide before squaring."
        },
        {
          "t": "mcq",
          "q": "The variance of a data set is 16. Every observation is replaced by 5 − 2<i>x</i>. The new standard deviation is:",
          "correct": 1,
          "opts": [
            {
              "label": "4",
              "nudge": "This assumes nothing happened. The multiplier −2 stretches every gap by a factor of 2, so the spread genuinely does change even though the 5 does not touch it."
            },
            {
              "label": "8",
              "nudge": null
            },
            {
              "label": "−8",
              "nudge": "The sign has been carried through. The standard deviation is the <b>positive</b> root by definition, and σ<sub>y</sub> = |<i>a</i>|σ<sub>x</sub>: a negative multiplier flips the data about a point, which does not make it less spread out."
            },
            {
              "label": "64",
              "nudge": "That is the new <b>variance</b>, <i>a</i><sup>2</sup>σ<sup>2</sup> = 4 × 16. The question asked for the standard deviation, so one square root is still owed."
            }
          ],
          "solution": "σ<sub>x</sub> = √16 = 4, and under <i>y</i> = −2<i>x</i> + 5 the standard deviation scales by |−2| = 2, so σ<sub>y</sub> = 8. The new variance is 4 × 16 = 64, and 8 = √64 as it must be. The additive 5 is irrelevant to both."
        },
        {
          "t": "mcq",
          "q": "The variance of 2, 4, 6, …, 20 is:",
          "correct": 3,
          "opts": [
            {
              "label": "8.25",
              "nudge": "This is (<i>n</i><sup>2</sup> − 1)/12 with <i>n</i> = 10, the variance of the first ten <b>natural</b> numbers. It forgets that the common difference <i>d</i> = 2 enters the formula, and enters it squared."
            },
            {
              "label": "16.5",
              "nudge": "This multiplies by <i>d</i> rather than <i>d</i><sup>2</sup>, the same slip as scaling a variance by <i>a</i> instead of <i>a</i><sup>2</sup>."
            },
            {
              "label": "132",
              "nudge": "This uses 16 in place of <i>d</i><sup>2</sup> = 4, that is (2<i>d</i>)<sup>2</sup> rather than <i>d</i><sup>2</sup>. Doubling twice is not the same as doubling once."
            },
            {
              "label": "33",
              "nudge": null
            }
          ],
          "solution": "This is an AP with <i>d</i> = 2 and <i>n</i> = 10, so σ<sup>2</sup> = <i>d</i><sup>2</sup>(<i>n</i><sup>2</sup> − 1)/12 = 4 × 99/12 = 33. The first term never appears: it is buried in the shift, and shifts do nothing."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[JEE Main] For 20 observations, Σ(<i>x</i><sub>i</sub> − 8) = 40 and Σ(<i>x</i><sub>i</sub> − 8)<sup>2</sup> = 500. Find the mean and the standard deviation.",
              "a": "d̄ = 40/20 = 2, so x̄ = 8 + 2 = 10. Then σ² = 500/20 − 2² = 25 − 4 = 21 and σ = √21 ≈ 4.58. Reporting 25 is what you get by skipping the correction."
            },
            {
              "q": "[JEE Main] For 100 observations, Σ(<i>x</i><sub>i</sub> − 50) = −100 and Σ(<i>x</i><sub>i</sub> − 50)<sup>2</sup> = 10000. Find the mean and variance of the <i>x</i><sub>i</sub>, then of <i>y</i><sub>i</sub> = 3<i>x</i><sub>i</sub> + 7.",
              "a": "d̄ = −1, so x̄ = 50 − 1 = 49 and σ²ₓ = 10000/100 − (−1)² = 100 − 1 = 99. For y: ȳ = 3(49) + 7 = 154 and σ²_y = 9(99) = 891, so σ_y = 3√99 = 9√11 ≈ 29.85. The mean felt both 3 and 7; the variance felt only the 3, squared."
            },
            {
              "q": "[JEE Main] Find the variance of 5, 8, 11, 14, 17, 20, 23.",
              "a": "An AP with d = 3 and n = 7, so σ² = 9(49 − 1)/12 = 9 × 4 = 36. Direct check: mean 14, deviations −9, −6, −3, 0, 3, 6, 9 with squares totalling 252, and 252/7 = 36."
            },
            {
              "q": "[CBSE] The mean of 12 observations is 15 and their variance is 20. Each observation is increased by 4. Write the new mean and the new variance.",
              "a": "New mean = 19, since the mean feels the shift. New variance = 20, unchanged, since a shift preserves every gap. This is a = 1, b = 4 in the transformation pair."
            },
            {
              "q": "[JEE Advanced] Show that Σ(<i>x</i><sub>i</sub> − <i>A</i>)<sup>2</sup> is least when <i>A</i> = <i>x̄</i>, and state its least value.",
              "a": "The identity rearranges to (1/n)Σ(xᵢ − A)² = σ² + (x̄ − A)². The first term is fixed and the second is a square, so the left side is at least σ² with equality exactly when A = x̄. The least value of the sum is therefore nσ². This is the squared-deviation twin of the median result in Topic 01."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Scaling the variance by <i>a</i> instead of <i>a</i><sup>2</sup>,</b> or letting the additive <i>b</i> creep into a spread measure. Under <i>y</i> = 2<i>x</i> + 7 with σ = 3, the new SD is 6, not 13.",
            "<b>Confusing (Σ(<i>x</i><sub>i</sub> − <i>A</i>))<sup>2</sup> with Σ(<i>x</i><sub>i</sub> − <i>A</i>)<sup>2</sup>.</b> In a typical Main question the first is 81 and the second is 45. The correction term divides before squaring.",
            "<b>Dropping the correction term when <i>d̄</i> ≠ 0.</b> Reporting (1/<i>n</i>)Σ(<i>x</i><sub>i</sub> − <i>A</i>)<sup>2</sup> as the variance is the single most common wrong answer, and it is always one of the printed options.",
            "<b>Believing <i>A</i> must be close to the data.</b> The identity is exact for every real <i>A</i>, not approximate. Choose whatever makes the arithmetic clean.",
            "<b>Using <i>d</i> instead of <i>d</i><sup>2</sup> in the AP variance,</b> or hunting for the first term. Only <i>d</i> and <i>n</i> appear; <i>a</i> is a shift and shifts do nothing."
          ]
        },
        {
          "t": "protip",
          "html": "the second you see <i>ax</i> + <i>b</i>, write three things and stop: mean ↦ <i>a</i>(mean) + <i>b</i>, variance ↦ <i>a</i><sup>2</sup>(variance), SD ↦ |<i>a</i>|(SD). and the second you see Σ(<i>x</i><sub>i</sub> − <i>A</i>) handed to you, divide it by <i>n</i> before you do anything else: that number is both half the mean answer and the whole correction term."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "y = ax + b ⇒ ȳ = ax̄ + b",
              "note": "the mean feels both a and b"
            },
            {
              "f": "σ<sup>2</sup><sub>y</sub> = a<sup>2</sup>σ<sup>2</sup><sub>x</sub> · σ<sub>y</sub> = |a| σ<sub>x</sub>",
              "note": "shift-proof, scale-squared"
            },
            {
              "f": "x̄ = A + (1/n) Σ(x<sub>i</sub> − A)",
              "note": "any A at all, exactly"
            },
            {
              "f": "σ<sup>2</sup> = (1/n) Σ(x<sub>i</sub> − A)<sup>2</sup> − (x̄ − A)<sup>2</sup>",
              "note": "divide before you square"
            },
            {
              "f": "Σ(x<sub>i</sub> − A<sub>1</sub>) − Σ(x<sub>i</sub> − A<sub>2</sub>) = (A<sub>2</sub> − A<sub>1</sub>)n",
              "note": "two reference points recover n"
            },
            {
              "f": "first n naturals: (n<sup>2</sup> − 1)/12 · AP: d<sup>2</sup>(n<sup>2</sup> − 1)/12",
              "note": "evens and odds both give (n² − 1)/3"
            }
          ],
          "aids": [
            "“add doesn't matter, multiply scales, squared for variance”",
            "“divide first, square after”"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Comparing, Combining and Repairing Distributions",
      "chip": "05 C.V. & REVERSE",
      "kalam": "normalise to compare, bookkeep to reverse",
      "blocks": [
        {
          "t": "p",
          "html": "You can now measure spread four ways. The practical question the chapter has been building to is different: <b>how do you compare the spread of two groups?</b> A coach choosing between two batsmen, a buyer comparing two brands, an investor weighing two funds, all are asking which one is steadier."
        },
        {
          "t": "p",
          "html": "If the two groups have the <b>same mean</b>, it is easy: the smaller σ wins. But life is rarely that tidy. Usually the means differ, or the units differ, and the standard deviation alone cannot referee that contest. A spread of 5 kg around a mean of 60 kg is a very different <i>relative</i> wobble from a spread of 5 cm around a mean of 170 cm. So we normalise: divide σ by the mean and multiply by 100. That is the <b>coefficient of variation</b>, a pure number, and the rule is friendly: <b>lower C.V. means more consistent</b>."
        },
        {
          "t": "p",
          "html": "There is a second family of problems this chapter is famous for, and they run the machinery <b>backwards</b>. Instead of “here is the data, find the variance”, they ask “here is the mean and the variance, reconstruct the missing observations”, or “one value was recorded wrongly, repair the mean and the standard deviation”. All of them reward one insight: the mean is built from Σ<i>x</i><sub>i</sub> and the variance from Σ<i>x</i><sub>i</sub><sup>2</sup>, so if you can track how those two running totals change, you can solve almost anything."
        },
        {
          "t": "think",
          "html": "a ₹10 swing matters enormously on a ₹50 item and is invisible on a ₹50,000 one. to compare fairly you have to measure the wobble relative to the size of the thing wobbling. that is all the coefficient of variation is."
        },
        {
          "t": "def",
          "term": "Coefficient of variation",
          "html": "C.V. = (σ/<i>x̄</i>) × 100, a percentage and therefore a <b>pure number</b>, which is what lets it compare rupees against runs or heights against marks. It needs a non-zero mean, becomes unstable when the mean is near zero, and is meant for ratio data with a true zero: applying it to temperatures in °C, where zero is an arbitrary convention, gives nonsense."
        },
        {
          "t": "formula",
          "kicker": "COEFFICIENT OF VARIATION",
          "tag": "lower means steadier, not better",
          "main": "C.V. = (σ / x̄) × 100, x̄ ≠ 0",
          "legend": [
            "<b>lower C.V. ⇒ more consistent</b>; higher C.V. ⇒ more variable. It has already normalised by the mean, so you do not need the means again to compare",
            "if the two means are equal, C.V. and σ give the same ranking, so just compare σ directly",
            "reverse form, to recover a mean from a quoted C.V.: <i>x̄</i> = (σ/C.V.) × 100"
          ],
          "note": "C.V. uses the <b>standard deviation</b>, never the variance. Feeding σ<sup>2</sup> in inflates the answer enormously and is a favourite trap. And “more consistent” is not “better”: a consistent low scorer is still a low scorer."
        },
        {
          "t": "formula",
          "kicker": "COMBINING TWO GROUPS",
          "tag": "you cannot average two standard deviations",
          "main": "σ<sup>2</sup> = [n<sub>1</sub>(σ<sub>1</sub><sup>2</sup> + d<sub>1</sub><sup>2</sup>) + n<sub>2</sub>(σ<sub>2</sub><sup>2</sup> + d<sub>2</sub><sup>2</sup>)] / (n<sub>1</sub> + n<sub>2</sub>)",
          "legend": [
            "first the combined mean: <i>x̄</i> = (<i>n</i><sub>1</sub><i>x̄</i><sub>1</sub> + <i>n</i><sub>2</sub><i>x̄</i><sub>2</sub>)/(<i>n</i><sub>1</sub> + <i>n</i><sub>2</sub>), the weighted average of the two group means",
            "then <i>d</i><sub>1</sub> = <i>x̄</i><sub>1</sub> − <i>x̄</i> and <i>d</i><sub>2</sub> = <i>x̄</i><sub>2</sub> − <i>x̄</i>, the distances of the group means from the combined mean",
            "the <i>d</i><sup>2</sup> terms are the <b>between-group</b> spread, and they are why the combined σ can exceed both group σ values"
          ],
          "note": "The gap between the group means adds spread of its own. Pooling a group averaging 60 with a group averaging 50 produces a wider distribution than either, even if both were internally tight, and averaging the two standard deviations misses this entirely."
        },
        {
          "t": "formula",
          "kicker": "THE TWO MASTER TOTALS",
          "tag": "every reverse problem is bookkeeping on these",
          "main": "Σx<sub>i</sub> = n x̄ · Σx<sub>i</sub><sup>2</sup> = n(σ<sup>2</sup> + x̄<sup>2</sup>)",
          "legend": [
            "correcting a wrong value <i>w</i> to a correct value <i>c</i>: Σ<i>x</i><sub>i</sub> ↦ Σ<i>x</i><sub>i</sub> − <i>w</i> + <i>c</i> and Σ<i>x</i><sub>i</sub><sup>2</sup> ↦ Σ<i>x</i><sub>i</sub><sup>2</sup> − <i>w</i><sup>2</sup> + <i>c</i><sup>2</sup>, then recompute both",
            "if a value was <b>omitted</b> rather than replaced, drop only the −<i>w</i> and −<i>w</i><sup>2</sup> and reduce <i>n</i> by 1",
            "two missing observations <i>a</i>, <i>b</i>: use <i>a</i> + <i>b</i> and (<i>a</i> − <i>x̄</i>)<sup>2</sup> + (<i>b</i> − <i>x̄</i>)<sup>2</sup> with (<i>p</i> + <i>q</i>)<sup>2</sup> = <i>p</i><sup>2</sup> + <i>q</i><sup>2</sup> + 2<i>pq</i> to get the product, then solve the quadratic"
          ],
          "note": "A wrong observation pollutes <b>both</b> totals: Σx<sub>i</sub>, which drives the mean, and Σx<sub>i</sub><sup>2</sup>, which drives the variance. Repairing only the first is the most common half-mark loss in this topic."
        },
        {
          "t": "proc",
          "title": "Deciding which group is more consistent",
          "steps": [
            "<b>Get <i>x̄</i> and σ for each series.</b> If the question gives you the variance, take the root first: C.V. eats the standard deviation, not the variance.",
            "<b>Means equal? Compare σ directly</b> and stop. With equal means the two rankings agree, so reaching for C.V. is over-thinking, not extra rigour.",
            "<b>Means different? Compute C.V. = (σ/<i>x̄</i>) × 100 for each.</b> Dividing by the mean converts an absolute wobble into a relative one, so the comparison survives different scales and different units.",
            "<b>Smaller C.V. is the more consistent series;</b> larger C.V. is the more variable one. If the C.V. values are already given, compare them directly: they have already normalised, so you do not need the means back.",
            "<b>Answer the question that was asked.</b> “Most consistent” and “best” are different questions, and an examiner who sets a batsman averaging 50 against one averaging 40 is usually setting both."
          ]
        },
        {
          "t": "proc",
          "title": "Running the machinery backwards",
          "steps": [
            "<b>Write the two master totals immediately:</b> Σ<i>x</i><sub>i</sub> = <i>nx̄</i> and Σ<i>x</i><sub>i</sub><sup>2</sup> = <i>n</i>(σ<sup>2</sup> + <i>x̄</i><sup>2</sup>). Every question in this family is arithmetic on these two numbers.",
            "<b>Missing observations:</b> the given mean is one equation in the unknowns, and the given variance is a second. Two unknowns need exactly two independent constraints, which is why the question hands you both.",
            "<b>For two unknowns, use the symmetric shortcut.</b> From <i>p</i> + <i>q</i> and <i>p</i><sup>2</sup> + <i>q</i><sup>2</sup>, the identity (<i>p</i> + <i>q</i>)<sup>2</sup> = <i>p</i><sup>2</sup> + <i>q</i><sup>2</sup> + 2<i>pq</i> gives the product, and then <i>p</i>, <i>q</i> are the roots of <i>t</i><sup>2</sup> − (sum)<i>t</i> + (product) = 0.",
            "<b>Correction problems: recover the wrong totals first,</b> then repair each one, subtracting the wrong value's contribution and adding the correct one's. Use −<i>w</i> + <i>c</i> for the sum and −<i>w</i><sup>2</sup> + <i>c</i><sup>2</sup> for the sum of squares.",
            "<b>Recompute <i>x̄</i> and σ from the repaired totals,</b> using the corrected <i>n</i> if the value was omitted rather than replaced. Then check the repaired variance is still ≥ 0: if it is negative, Σ<i>x</i><sub>i</sub><sup>2</sup> was mishandled."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "In a Twenty20 series Arjun averages 50 runs with SD 10; Vikram averages 40 runs with SD 6. Who is more consistent, and who would you pick to chase a steep total?",
          "steps": [
            "C.V.<sub>Arjun</sub> = (10/50) × 100 = 20%.",
            "C.V.<sub>Vikram</sub> = (6/40) × 100 = 15%.",
            "Vikram's lower C.V. makes him the <b>more consistent</b> scorer, and that is the whole of the first question.",
            "But consistency is not everything. Arjun's higher average, 50 against 40, makes him the better bet to chase a steep total, where raw run-scoring matters more than steadiness. This split verdict is exactly what examiners test."
          ],
          "ans": "Vikram is more consistent; Arjun for a steep chase"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "The mean of five observations is 6 and their variance is 6.8. Three of them are 2, 4 and 9. Find the other two.",
          "steps": [
            "From the mean: 2 + 4 + 9 + <i>a</i> + <i>b</i> = 5 × 6 = 30, so <i>a</i> + <i>b</i> = 15.",
            "From the variance: Σ(<i>x</i><sub>i</sub> − 6)<sup>2</sup> = 5 × 6.8 = 34. The known three contribute 16 + 4 + 9 = 29, so (<i>a</i> − 6)<sup>2</sup> + (<i>b</i> − 6)<sup>2</sup> = 5.",
            "Put <i>p</i> = <i>a</i> − 6 and <i>q</i> = <i>b</i> − 6. Then <i>p</i> + <i>q</i> = 15 − 12 = 3 and <i>p</i><sup>2</sup> + <i>q</i><sup>2</sup> = 5, so 9 = 5 + 2<i>pq</i> and <i>pq</i> = 2.",
            "So <i>p</i>, <i>q</i> are the roots of <i>t</i><sup>2</sup> − 3<i>t</i> + 2 = 0, giving 1 and 2, hence {<i>a</i>, <i>b</i>} = {7, 8}. Check: 2, 4, 9, 7, 8 has mean 6 and variance (16 + 4 + 9 + 1 + 4)/5 = 6.8. ✓"
          ],
          "ans": "the other two are 7 and 8"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "The mean and SD of 20 observations are 30 and 5. On rechecking, an observation recorded as 50 is found to be 30. Find the corrected mean and SD.",
          "steps": [
            "Recover the wrong totals: Σ<i>x</i><sub>i</sub> = 20 × 30 = 600 and Σ<i>x</i><sub>i</sub><sup>2</sup> = 20(25 + 900) = 18500.",
            "Repair both, with <i>w</i> = 50 and <i>c</i> = 30: Σ<i>x</i><sub>i</sub> = 600 − 50 + 30 = 580 and Σ<i>x</i><sub>i</sub><sup>2</sup> = 18500 − 2500 + 900 = 16900.",
            "<i>x̄</i> = 580/20 = 29, and σ<sup>2</sup> = 16900/20 − 29<sup>2</sup> = 845 − 841 = 4, so σ = 2.",
            "That single value was doing almost all the work: repairing it collapses the SD from 5 to 2. Note <i>n</i> stayed at 20, because the value was replaced and not removed."
          ],
          "ans": "corrected mean 29, corrected SD 2"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Group I: 40 students, mean 60, SD 8. Group II: 60 students, mean 50, SD 6. Pool all 100 and find the combined SD and C.V.",
          "steps": [
            "Combined mean: <i>x̄</i> = [40(60) + 60(50)]/100 = (2400 + 3000)/100 = 54.",
            "Group-mean deviations: <i>d</i><sub>1</sub> = 60 − 54 = 6 and <i>d</i><sub>2</sub> = 50 − 54 = −4.",
            "σ<sup>2</sup> = [40(64 + 36) + 60(36 + 16)]/100 = (4000 + 3120)/100 = 71.2, so σ = √71.2 ≈ 8.44.",
            "C.V. = (8.44/54) × 100 ≈ 15.6%. Notice the combined SD exceeds <b>both</b> group SDs, 8 and 6: pooling groups with different means injects extra spread through the <i>d</i> terms, which averaging the SDs would never reveal."
          ],
          "ans": "combined σ ≈ 8.44, C.V. ≈ 15.6%"
        },
        {
          "t": "mcq",
          "q": "Two data sets have the same standard deviation, but set P has a larger mean than set Q. Which is more consistent?",
          "correct": 0,
          "opts": [
            {
              "label": "P",
              "nudge": null
            },
            {
              "label": "Q",
              "nudge": "This inverts the relationship. C.V. = σ/<i>x̄</i>, so with σ fixed a <b>larger</b> mean gives a smaller C.V., not a larger one."
            },
            {
              "label": "equally consistent",
              "nudge": "The trap of equating consistency with the standard deviation alone. The same absolute wobble on a larger mean is relatively tighter, which is exactly what the C.V. is built to detect."
            },
            {
              "label": "cannot be determined",
              "nudge": "You have everything needed: equal σ and a known ordering of the means fixes the ordering of σ/<i>x̄</i>. No numbers are required."
            }
          ],
          "solution": "Consistency is judged by C.V. = (σ/<i>x̄</i>) × 100. With σ equal, the larger mean gives the smaller C.V., so P is more consistent. Compare this with the case of <b>equal means</b>, where the smaller σ wins and the C.V. is not needed at all."
        },
        {
          "t": "mcq",
          "q": "Every observation in a series is multiplied by a positive constant <i>k</i>. The coefficient of variation:",
          "correct": 1,
          "opts": [
            {
              "label": "becomes <i>k</i> × C.V.",
              "nudge": "This tracks only the numerator. σ does scale by <i>k</i>, but so does the mean underneath it, so the ratio survives."
            },
            {
              "label": "is unchanged",
              "nudge": null
            },
            {
              "label": "becomes C.V./<i>k</i>",
              "nudge": "This tracks only the denominator, the mirror image of the previous error. Both parts of the ratio scale together, so neither one wins."
            },
            {
              "label": "becomes <i>k</i><sup>2</sup> × C.V.",
              "nudge": "This imports the <i>k</i><sup>2</sup> rule that belongs to the <b>variance</b>. C.V. is built from the standard deviation, which scales by |<i>k</i>|, not by <i>k</i><sup>2</sup>."
            }
          ],
          "solution": "Under <i>y</i> = <i>kx</i> with <i>k</i> > 0, σ<sub>y</sub> = <i>k</i>σ<sub>x</sub> and <i>ȳ</i> = <i>k x̄</i>, so σ<sub>y</sub>/<i>ȳ</i> = σ<sub>x</sub>/<i>x̄</i>. The <i>k</i> cancels and the C.V. is untouched, which is precisely why it can compare data on different scales."
        },
        {
          "t": "mcq",
          "q": "The mean of 10 observations is 25. A value recorded as 35 is later found to be 15. The corrected mean is:",
          "correct": 0,
          "opts": [
            {
              "label": "23",
              "nudge": null
            },
            {
              "label": "25",
              "nudge": "This assumes the mean is unaffected. A wrong observation pollutes Σ<i>x</i><sub>i</sub>, and the mean is Σ<i>x</i><sub>i</sub> divided by <i>n</i>, so it cannot survive untouched."
            },
            {
              "label": "27",
              "nudge": "This adds the correction instead of subtracting it: 25 + 2 rather than 25 − 2. The value went <b>down</b> by 20, so the mean must go down too."
            },
            {
              "label": "21",
              "nudge": "This double-counts the correction, subtracting 20/10 twice. Adjust the sum once, then re-divide once."
            }
          ],
          "solution": "Σ<i>x</i><sub>i</sub> = 10 × 25 = 250, corrected sum = 250 − 35 + 15 = 230, corrected mean = 230/10 = 23. Always adjust the total and then re-divide, rather than trying to patch the mean directly."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Firm A pays a mean monthly wage of ₹4500 with SD ₹360; Firm B pays ₹5000 with SD ₹450. Which firm's wages are more consistent?",
              "a": "C.V. of A = (360/4500) × 100 = 8%. C.V. of B = (450/5000) × 100 = 9%. Firm A is more consistent, even though its wages are lower: consistency and generosity are different questions."
            },
            {
              "q": "[JEE Main] The mean of five observations is 4 and their variance is 5.2. Three of them are 1, 2 and 6. Find the other two.",
              "a": "a + b = 20 − 9 = 11. Σ(xᵢ − 4)² = 26, and the known three give 9 + 4 + 4 = 17, so (a − 4)² + (b − 4)² = 9. With p + q = 3 and p² + q² = 9: 9 = 9 + 2pq gives pq = 0, so p, q are roots of t² − 3t = 0, that is 0 and 3. The other two observations are 4 and 7."
            },
            {
              "q": "[JEE Main] The mean and SD of 5 observations are 6 and 4. An observation recorded as 14 should be 6. Find the corrected mean and SD.",
              "a": "Σxᵢ = 30 and Σxᵢ² = 5(16 + 36) = 260. Repaired: Σxᵢ = 30 − 14 + 6 = 22 and Σxᵢ² = 260 − 196 + 36 = 100. So x̄ = 4.4 and σ² = 100/5 − 19.36 = 0.64, giving σ = 0.8."
            },
            {
              "q": "[JEE Main] Two groups of 50 students each have means 40 and 50, both with SD 5. Find the SD of the combined group of 100.",
              "a": "Combined mean = 45, so d₁ = −5 and d₂ = 5. σ² = [50(25 + 25) + 50(25 + 25)]/100 = 5000/100 = 50, so σ = √50 ≈ 7.07. Both groups had SD 5 and the pooled set has SD 7.07: the gap between the means added the difference."
            },
            {
              "q": "[JEE Advanced] The C.V. of two series are 25% and 40%, with standard deviations 5 and 8. Find their means and say which is more variable.",
              "a": "Using x̄ = (σ/C.V.) × 100: the first has mean 5/0.25 = 20, the second 8/0.4 = 20. Identical means, so the comparison could equally have been made on σ alone. The second series, C.V. 40%, is the more variable."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Comparing series with different means by σ instead of C.V.</b> A larger standard deviation does not mean more variable when the means differ. Only when the means are equal may you compare σ directly.",
            "<b>Forgetting to repair Σ<i>x</i><sub>i</sub><sup>2</sup>.</b> A wrong observation corrupts the mean through Σ<i>x</i><sub>i</sub> and the variance through Σ<i>x</i><sub>i</sub><sup>2</sup>. Fixing only the first is the most common half-mark loss in this topic.",
            "<b>Feeding the variance into the C.V. formula.</b> C.V. uses σ, not σ<sup>2</sup>, and the substitution inflates the answer enormously.",
            "<b>Averaging the standard deviations of two groups.</b> The combined variance carries the between-group terms <i>d</i><sub>1</sub><sup>2</sup> and <i>d</i><sub>2</sub><sup>2</sup>, which is why the pooled σ can exceed both parts.",
            "<b>Reading “more consistent” as “better”.</b> Lower C.V. means steadier, not superior. Answer the question actually asked."
          ]
        },
        {
          "t": "protip",
          "html": "for any reverse problem, write Σ<i>x</i><sub>i</sub> = <i>nx̄</i> and Σ<i>x</i><sub>i</sub><sup>2</sup> = <i>n</i>(σ<sup>2</sup> + <i>x̄</i><sup>2</sup>) before you read the question again. every missing-observation and correction item is bookkeeping on those two numbers. and if your “C.V.” comes out carrying units, you divided by the wrong thing."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "C.V. = (σ / x̄) × 100, x̄ ≠ 0",
              "note": "lower is steadier, and it uses σ not σ²"
            },
            {
              "f": "same mean ⇒ compare σ directly",
              "note": "C.V. and σ rank them identically"
            },
            {
              "f": "x̄ = (n<sub>1</sub>x̄<sub>1</sub> + n<sub>2</sub>x̄<sub>2</sub>)/(n<sub>1</sub> + n<sub>2</sub>)",
              "note": "weighted, never a plain average"
            },
            {
              "f": "σ<sup>2</sup> = [n<sub>1</sub>(σ<sub>1</sub><sup>2</sup> + d<sub>1</sub><sup>2</sup>) + n<sub>2</sub>(σ<sub>2</sub><sup>2</sup> + d<sub>2</sub><sup>2</sup>)]/(n<sub>1</sub> + n<sub>2</sub>)",
              "note": "d = group mean − combined mean"
            },
            {
              "f": "Σx<sub>i</sub> = n x̄ · Σx<sub>i</sub><sup>2</sup> = n(σ<sup>2</sup> + x̄<sup>2</sup>)",
              "note": "the two master totals"
            },
            {
              "f": "correct w to c: Σx − w + c, Σx<sup>2</sup> − w<sup>2</sup> + c<sup>2</sup>",
              "note": "omitted instead? drop the minus, cut n by 1"
            }
          ],
          "aids": [
            "“normalise to compare, bookkeep to reverse”",
            "“repair both totals, never just the sum”"
          ]
        }
      ]
    }
  ]
};

export default ch13Statistics;
