# Brief: Mathematics Class 11, Chapter 3 Trigonometric Functions, rebuilt word for word from the Master Reference book

The third Mathematics chapter. Chapters 1 Sets (0c9ae6f) and 2 Relations and Functions (b8f7ec4) are finished and pushed; this chapter is built the same way. It is twice their size (pp. 177–336), so it is split among more writers.

**Read, in order:**
1. `/Users/nikhi/Developer/monk-books/math11/briefs/MAC-BRIEF-M11-01.md`, the whole file, and every file it tells you to read. Everything in it holds (FRACTIONS, NO EM DASHES, Mathematics notation, checking numbers, the diagram rules, the report, "Added after the first writer") **except its page map, file names, ids and topic indexes**, which this file replaces.
2. `/Users/nikhi/Developer/monk-books/math11/briefs/MAC-BRIEF-M11-02.md`: its "Lessons from Chapter 1" section only.
3. `/Users/nikhi/Developer/monk-books/math11/DECISIONS-M11.md` (the founder's decisions; items 10–13 hold the lessons of Chapter 2's reviews).
4. This file. **Where they disagree, this file wins.**

**Your closest model is Chapter 2**, done in the house form: `content/textbooks/math-11-02/topic-3.ts` (a main topic with procedures, stacked fractions, examples) and `topic-4.ts`. Read one before writing and copy its forms exactly. The OLD Trigonometry chapter (`/Users/nikhi/Developer/monk-books/old/old-math-11-03-trigonometry.ts`) is an earlier rewrite we are replacing: never copy from it.

## Lessons from Chapter 2's reviews and Android check (follow these)
- **Every formula card gets legend lines for every symbol in it**, and a legend's meaning never contains a colon or a comma clause that the card builder would cut: put an explanation in brackets ("f = the inner function (applied first)").
- **A formula block's `note` is NOT shown on its card.** If a note holds a formula a student needs on the Formula sheet, say so in your report.
- **Table heads go through the markup**: italics and stacked fractions there too (`'Shape of <i>f</i>(<i>x</i>)'`).
- **The book's example numbers in running text** ("as Example 7 shows", "Example 12(d)") are reworded to what the reader shows: it labels examples per topic as "Solved example · 1 of N". Write "the previous solved example", "the third worked example of this topic, part (d)", or "Topic 05's worked examples" for another topic's. List each. Example tags are not changed. **Step labels keep the book's numbers** ("Step 0" stays) even where the reader's own counter differs (decision 11).
- **A worked step that leads into a boxed result** ("Hence", "Intersect:", "Combining:") must not be left hanging when the boxed result goes to `ans`: finish the step with the result as well.
- **Over-general rules** ("always", "never", "only", "every") are copied as printed and listed with page and why (the reviewer rules).
- **Frequency claims about exam papers** ("asked every year", "examiners love") get "(the book’s estimate from past papers, not official figures)"; claims about students' mistakes do not. List each.
- **No `½`-type characters anywhere**, also not in figure chips or names.

## Section headings in Topics 01–06 (added after the first writer)
The main chapter numbers its sections and names them per topic: "1. Exam Relevance", "2. Concept Intuition", "3. Key Definitions, Units & Conversion Reference", "4. Derivations of the Core Relations", "5. Worked Examples (difficulty-laddered)", "6. Practice Exercises (with answers)", "7. MCQ with Distractor Analysis", "8. Common Pitfalls, Pro-Tips & Cheat Sheet". The rule for every topic:
- Drop the number; the part title is the book's own name in sentence case, "&" written "and", the book's brackets kept: "Key definitions, units and conversion reference", "Worked examples (difficulty-laddered)", "Practice exercises (with answers)", "MCQ with distractor analysis".
- **Section 8 becomes two parts:** "Common pitfalls and pro-tips" (the pitfalls and pro-tips) and "Cheat sheet" (the cheat-sheet box), as in Chapters 1–2.
- Section 1 "Exam Relevance" is the "Exam relevance" part, as before. Topics 07–12 use the eight-section form of Chapters 1–2 ("Section N: …").
- A wrong MCQ option the book never explains gets `nudge: null`; list each (the founder decides later).
- An answer box (`ans`) never starts with "∴" (the book's ∴ before a result is dropped there; inside steps it stays).
- A figure is placed where its caption is printed, even if another spot would illustrate it better; say so in the report.

## Where things are
Book `/Users/nikhi/Developer/monk-books/math11/math11.pdf` (October 2026 edition, 1260 pages, **PDF page = the bottom folio**). Text dump `math11/math11.txt` (prose only; maths scrambled): **read every formula, fraction, power, subscript and symbol from the page** (Read tool on the PDF with `pages`, a few at a time; `pdftoppm -r 110 -f N -l N -png` only where unclear, and delete the PNG). **Never use `math11-aug22-OLD.pdf`.** Work folder `math11/work-<your-name>/`. Your file exists as an empty stub, already wired in.

## ERRATA
Chapter 3's resolved entries (pp. 1241–1243) are already in the text: copy the page as printed. Two worth knowing: Subtopic 03's Practice 4 now proves tan(90° + θ) · cot(90° − θ) = −1 and its answer explains why the tan · tan pairing gave −cot² θ; Subtopic 04's Practice 6 answer reads "4 solutions (including x = 0)". The "Remaining known issues" for Chapter 3 (p. 1259) are only lines overshooting the margin: nothing to change. Report anything on your pages that still looks like a defect (raw LaTeX, a build note, a self-correction left in), with page.

## Layout (the founder's decisions 12–13, 2026-11-10)
- **Topics 01–12 in one numbered list**, the book's own subtopic numbers: 01–06 from the main chapter, 07–08 from the supplement, 09–12 from the "Additional Topics" part. So "Subtopic 0N" → "Topic 0N", same numbers, everywhere.
- **The closing "Topic D" is Additional topic D** (`n: 'D'`, `extra: true`), the book's letter; its examples D1–D4 keep their labels.
- The part headings "Chapter 3: Trigonometric Functions — Supplement" (p. 243) and "— Additional Topics" (p. 277) are not copied. The Additional Topics part's opening paragraphs on p. 277 ("This part extends Chapter 3 with four further subtopics …", "These topics are ones that NCERT … demands …") go at the start of **Topic 09's Exam relevance part, before its own box text**, with "Subtopic" → "Topic" and "A closing topic, with examples labelled D1–D4" → "Additional topic D, with examples labelled D1–D4". List it.
- Each sub-topic opens with an "Exam Relevance:" box (its first part, "Exam relevance", without the bold label), then the eight sections as parts, titled from that sub-topic's own section names in sentence case ("Key Formulas and Definitions" → "Key formulas and definitions"; "CBSE Board Derivations and Key Procedures" → "CBSE board derivations and key procedures"; "Cheat Sheet Box" → "Cheat sheet").
- Additional topic D's parts follow its headings: "Introduction" (the opening paragraph), "Method statement 1: the boundedness (extreme-value) argument", "Method statement 2: simultaneous trigonometric equations", "Worked examples", "Practice exercises", "Cheat sheet".

## Page map, Chapter 3 (pp. 177–336). Confirm every boundary on the page images and report any difference.
p. 177 and the top of p. 178 are the title and contents (not copied).

| Topic | Title (as printed; confirm the end of a title broken across lines) | Pages | Numbered figures |
|---|---|---|---|
| 01 | Angle Measurement and Radians | 178–191 | 3.1 (179–180), 3.2 (181–182), 3.3 (184–185) |
| 02 | Trigonometric Functions and Quadrant Signs | 192–202 | 3.4 (192–193), 3.5 (194–195) |
| 03 | Standard Values, Even-Odd Nature & Allied Angles | 203–211 | 3.6 (203–204), 3.7 (205–206) |
| 04 | Graphs and Periodicity of Trigonometric Functions | 212–221 | 3.8 (212–213), 3.9 (214–215), 3.10 and 3.11 (217–218) |
| 05 | Trigonometric Identities and Compound Angle Formulas | 222–233 | 3.12 (223–224), 3.13 (227–228) |
| 06 | Trigonometric Equations and Solutions | 234–242 | 3.14 (234–235) |
| 07 | Sub-Multiple Angles and the Half-Angle Family | 243–256 | 3.15 (244–245), 3.16 (249–250) |
| 08 | Properties of Triangles: Sine Rule, Cosine Rule and Area | 257–276 | 3.17 (258–259) |
| 09 | Trigonometric Inequalities | 277–288 | |
| 10 | Maximum, Minimum and Range of Trigonometric Expressions | 289–300 | |
| 11 | Trigonometric Series: Sums in AP and Telescoping Products | 301–314 | |
| 12 | Higher Multiple Angles and the Sum of Three or More Angles | 315–329 | |
| D | Boundedness Equations and Simultaneous Trigonometric Equations | 330–336 | |

Titles are plain text: "&" stays as printed. Chapter 4 starts on p. 337: stop before it. The supplement's "Addendum"-type inserts, if you find any (the old chapter mentions a product-to-sum addendum), are reported with pages before you place them.
- **Cross-references:** "Subtopic 0N" → "Topic 0N"; "Topic D" → "Additional topic D"; "Section N" / "§N" of the same sub-topic → its part's name; "Subtopic 05 §3(G)" → "Topic 05’s Identity master reference part, item (G)" (Topic 05's §3 is that part; for another topic's §N use that topic's actual part name, in its file; list each); "the supplement" → "Topics 07–08"; "Figure 3.N" stays. NCERT example and exercise numbers are copied as printed and listed.
- **Exam citations:** no exam years ("a recent JEE Main paper"); shares and frequencies labelled as above.

## Files and ids
| Writer file (`content/textbooks/math-11-03/`) | Topics | Topic indexes |
|---|---|---|
| `topic-01.ts` | 01 | 0 |
| `topics-02-03.ts` | 02, 03 | 1, 2 |
| `topic-04.ts` | 04 | 3 |
| `topic-05.ts` | 05 | 4 |
| `topic-06.ts` | 06 | 5 |
| `topic-07.ts` | 07 | 6 |
| `topic-08.ts` | 08 | 7 |
| `topics-09-10.ts` | 09, 10 | 8, 9 |
| `topic-11.ts` | 11 | 10 |
| `topic-12.ts` | 12 | 11 |
| `extra-d.ts` | Additional D | 12 |

Each exports `TOPICS`. The chapter file `content/textbooks/math-11-03-trigonometry.ts` joins them in that order: never edit it. Diagrams `lib/diagrams/mathematics-11-03.ts` (`DIAGRAMS_MATHEMATICS_11_03`), filed as `'mathematics|11|3'`. Key points `lib/revise/keypoints-mathematics-11-03.ts`.
- **Figure ids:** numbered figures `m11-03-fig-3.1` … `m11-03-fig-3.17`; any unnumbered drawing `m11-03-<topic n>-d<k>` (`01` … `12` or `D`; k counts that topic's unnumbered drawings in page order from 1). Count the vector shapes on every one of your pages and report which hold a drawing and which none.

## Trigonometry notation (on top of Chapter 1's Mathematics notation)
- **Function names upright, argument italic, one space between:** sin <i>x</i>, cos 2<i>θ</i>, tan(<i>A</i> + <i>B</i>), cot, sec, cosec (as the book prints it: cosec, or csc if printed so; list which). No space inside brackets.
- **Powers on the function name:** sin<sup>2</sup> <i>x</i> (the raised 2 straight after "sin", then a space, then the argument), cos<sup><i>n</i></sup> <i>x</i>; never (sin x)² unless printed so. A power of the whole: (sin <i>x</i> + cos <i>x</i>)<sup>2</sup>.
- **Greek letters italic:** <i>θ</i>, <i>α</i>, <i>β</i>, <i>φ</i> (as printed; ϕ vs φ: use the one printed). **π upright** (as in Physics): 2π, <frac><num>π</num><den>6</den></frac>. Degrees: 30°, 1° = 60′ (U+2032 prime for minutes, U+2033 for seconds).
- **Angles as fractions are stacked:** <frac><num>π</num><den>4</den></frac>, <frac><num>3π</num><den>2</den></frac>, sin <frac><num><i>x</i></num><den>2</den></frac>, tan <frac><num><i>A</i></num><den>2</den></frac>. A half-angle inside a raised run (sin<sup>2</sup> …) is not a problem: the power is on the name, the fraction is the argument.
- **Radicals:** √3, <frac><num>√3</num><den>2</den></frac>, <frac><num>1</num><den>√2</den></frac>; a root over more than one term with a bracket: √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>).
- **General solutions:** <i>x</i> = <i>nπ</i> + (−1)<sup><i>n</i></sup><i>α</i>, <i>n</i> ∈ ℤ; 2<i>nπ</i> ± <i>α</i>.
- **Triangles:** sides <i>a</i>, <i>b</i>, <i>c</i>, angles <i>A</i>, <i>B</i>, <i>C</i>, circumradius <i>R</i>, area Δ (upright Greek capital as printed, or <i>Δ</i> if italic in the book: list), <i>s</i> the semi-perimeter.
- **Sums and products:** ∑, ∏ with limits as sub/sup pairs, as Chapter 1.
- **Inequality intervals** as printed: [0, 2π), <frac>…</frac> inside intervals stacked.

## Figures
Numbered Figures 3.1–3.17 are drawn in the book. Placement as in Chapters 1–2 (the `fig` block where the figure is called, caption without "Figure 3.N" and "(see next page)"). Graphs: axes with arrowheads labelled <i>x</i>, <i>y</i>, <i>O</i>; π-ticks as stacked fractions drawn by hand; asymptotes dashed; filled dots for points on a graph, hollow for points not included (decision 10). Diagram test: `npx jest lib/diagrams -t "mathematics.11.3"`.

## Writers' test run (once, when done; again only if it failed)
`npx jest content/textbooks/__tests__/book-rules content/textbooks/__tests__/book-chapters -t "Mathematics 11 Chapter 3|the text of every book chapter"`, plus `npx eslint <your file>`. Failures naming "Mathematics 11 Ch 3" and your topic are yours; topics numbered out of order because other writers' files are still empty, and undrawn fig ids, are not. No tsc, no whole test suite (the Mac hangs).
