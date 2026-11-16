# Brief: Mathematics Class 11, Chapter 4 Complex Numbers and Quadratic Equations, rebuilt word for word from the Master Reference book

The fourth Mathematics chapter. Chapters 1 Sets (0c9ae6f), 2 Relations and Functions (b8f7ec4) and 3 Trigonometric Functions (26c5540) are finished and pushed; this chapter is built the same way, and its layout is Chapter 3's.

**Read, in order:**
1. `/Users/nikhi/Developer/monk-books/math11/briefs/MAC-BRIEF-M11-01.md`, the whole file, and every file it tells you to read (FRACTIONS, NO EM DASHES, Mathematics notation, checking numbers, the diagram rules, the report, "Added after the first writer"). Its page map, file names, ids and indexes are replaced by this file.
2. `/Users/nikhi/Developer/monk-books/math11/briefs/MAC-BRIEF-M11-03.md`: its "Lessons from Chapter 2", "Section headings in Topics 01–06" (the same numbered-section form is used here) and "Trigonometry notation" sections. They all hold here.
3. `/Users/nikhi/Developer/monk-books/math11/DECISIONS-M11.md` (items 10–16 hold the lessons of Chapters 2–3).
4. This file. **Where they disagree, this file wins.**

**Your closest model is Chapter 3**, done in the house form: `content/textbooks/math-11-03/topic-05.ts` (numbered-section topic with formula cards, legends, MCQ nudges) and `topic-07.ts` (a supplement topic in the "Section N:" form). Read one before writing. The OLD Complex Numbers chapter (`/Users/nikhi/Developer/monk-books/old/old-math-11-04-complex.ts`) is an earlier rewrite we are replacing: never copy from it.

## Lessons from Chapter 3's reviews and Android check (follow these)
- Every formula card: a name, and a legend line for every symbol; a meaning never holds a colon or a comma clause the card builder would cut: write "r = the modulus (|z|)", never "r = the modulus, |z|". A formula block's `note` is not shown on its card.
- A wrong MCQ option the book never explains: `nudge: null`, listed. An MCQ with no explanation of its right answer: `solution: ''`, listed. (The reviewers will propose wording.)
- Answer boxes never start with "∴". A step that leads into a boxed result is finished with the result. Remarks printed after an answer are the last steps.
- The book's example numbers in running text ("as Example 3 shows") are reworded to what the reader shows ("the third worked example of this topic"); step labels keep the book's numbers.
- Over-general rules ("always", "never", "only", "every"), statements the topic itself contradicts, and claims about NEET/CBSE/NCERT are copied as printed and listed with page and why.
- Frequency claims about exam papers get "(the book’s estimate from past papers, not official figures)"; claims about students' mistakes do not.
- "Correction:", "Reason:", "Why:" run-in labels bold. No ½-type characters anywhere (chips, names, checks included).
- **Long displayed chains** of equalities that will not fit a phone line (about 30 characters of maths at reading size, less inside an example card): put each "= …" on its own line with `<br>` before the "=", as Chapter 3's Topic 12 steps do. A list of several formulas separated by commas: one formula per line with `<br>`. A fraction made only of words cannot wrap: write it in the book's words as prose ("… divided by …") only if it is wider than a line, and list it.
- A fraction inside a fraction is fine (the reader spaces those lines wider now).

## Where things are
Book `/Users/nikhi/Developer/monk-books/math11/math11.pdf` (October 2026 edition, 1260 pages, **PDF page = the bottom folio**). Text dump `math11/math11.txt` (maths scrambled): **read every formula, fraction, power, subscript, bar and symbol from the page images** (Read tool on the PDF with `pages`; `pdftoppm -r 110 -f N -l N -png` only where unclear, then delete the PNG). **Never use `math11-aug22-OLD.pdf`.** Work folder `math11/work-<your-name>/`. Your file exists as an empty stub, already wired in.

## ERRATA (pp. 1238–1260)
Resolved entries are already in the text (copy the page as printed); Chapter 4 has at least one (p. 1243: Subtopic 03 MCQ Q5 option (D) analysis). Read the errata pages for Chapter 4 yourself and report what they say for your pages, and anything on your pages that still looks like a defect.

## Layout (Chapter 3's decisions 12, applied to Chapter 4)
- **Topics 01–09 in one numbered list**, the book's own subtopic numbers: 01–06 from the main chapter, 07 from the supplement, 08–09 from the "Additional Topics" part. "Subtopic 0N" → "Topic 0N" everywhere.
- The part headings "Chapter 4: Complex Numbers and Quadratic Equations — Supplement" (p. 379) and "— Additional Topics" (p. 397) are not copied. The supplement has no introduction of its own (Topic 07 opens with its Exam Relevance box). **The Additional Topics part's opening text on p. 397 (and its table of Subtopics 08–09) goes at the start of Topic 08's Exam relevance part, before its own box text**, worded as Chapter 3's Topic 09 did ("Topics 08 and 09 (the book’s “Additional Topics” part) …"; "Subtopics 01-06 and the Supplement (Subtopic 07)" → "Topics 01–07"); its table is a `table` block with "Subtopic" → "Topic". List it.
- **Topics 01–06** use the numbered-section form (Chapter 3 brief, "Section headings in Topics 01–06"): part titles are the book's own names in sentence case, "&" → "and", brackets kept ("Concept intuition (Indian-context analogies)", "Key formulas and definitions (with validity / domain conditions)", "Theorems, proofs and standard methods", "Worked examples (CBSE → JEE Main → JEE Advanced)", "Practice exercises (with answers)", "MCQ with distractor analysis"); section 8 becomes two parts, "Common pitfalls and pro-tips" and "Cheat sheet". **Topics 07–09** use the "Section N:" eight-section form of Chapters 1–2.
- Topic 07's first paragraph after the box ("Subtopic 04 handled the quadratic …") belongs to its Exam relevance part, after the box text, unless it sits under "Section 1"; check the page.

## Page map (pp. 337–413). Confirm every boundary on the page images and report any difference.
p. 337's title block and contents are not copied (Subtopic 01 starts lower on p. 337).

| Topic | Title (as printed) | Pages | Numbered figures |
|---|---|---|---|
| 01 | Algebra of Complex Numbers | 337–344 | 4.1 (339) |
| 02 | The Modulus and the Conjugate of a Complex Number | 345–351 | 4.2 (347) |
| 03 | The Argand Plane and Polar Representation | 352–358 | 4.3 (354) |
| 04 | Quadratic Equations with Complex Roots | 359–365 | 4.4 (360) |
| 05 | Euler Form, De Moivre’s Theorem & Roots of a Complex Number | 366–371 | 4.5 (367) |
| 06 | Geometry of Complex Numbers (Argand Geometry & Loci) | 372–378 | 4.6 (373) |
| 07 | Real Quadratic Equations: Roots, Signs and Location | 379–396 | 4.7 (382), 4.8 (384) |
| 08 | Transformation of Equations and Functions of the Roots | 397–407 | |
| 09 | Complex Numbers as Vectors: Perpendicularity, Dot and Cross | 408–413 | |

Chapter 5 starts on p. 414: stop before it. Titles are plain text ("&" stays).
- **Cross-references:** "Subtopic 0N" → "Topic 0N"; "§N" / "Section N" of the same topic → its part's name; another topic's §N(X) → that topic's part name and item, in the form Chapter 3 used ("Topic 06’s Key formulas and definitions (with validity / domain conditions) part, item (B)"; open the other writer's file for the exact part name, or use the book's section name in sentence case); "the Supplement" → "Topic 07"; references to other chapters ("Chapter 9") copied as printed and listed. NCERT example and exercise numbers copied as printed and listed.
- **Exam citations:** no exam years; shares and frequencies labelled.

## Files and ids
| Writer file (`content/textbooks/math-11-04/`) | Topics | Topic indexes |
|---|---|---|
| `topics-01-02.ts` | 01, 02 | 0, 1 |
| `topics-03-04.ts` | 03, 04 | 2, 3 |
| `topics-05-06.ts` | 05, 06 | 4, 5 |
| `topic-07.ts` | 07 | 6 |
| `topics-08-09.ts` | 08, 09 | 7, 8 |

Each exports `TOPICS`. The chapter file `content/textbooks/math-11-04-complex.ts` joins them in that order: never edit it. Diagrams `lib/diagrams/mathematics-11-04.ts` (`DIAGRAMS_MATHEMATICS_11_04`, `'mathematics|11|4'`). Key points `lib/revise/keypoints-mathematics-11-04.ts`.
- **Figure ids:** `m11-04-fig-4.1` … `m11-04-fig-4.8`; any unnumbered drawing `m11-04-<topic n>-d<k>` (`01` … `09`; k from 1 in page order). Count the vector shapes on every one of your pages and report which hold a drawing.

## Complex-number notation (on top of Chapter 1's and Chapter 3's)
- **i italic** as the book prints it: <i>i</i>, <i>z</i> = <i>x</i> + <i>iy</i>, <i>a</i> + <i>ib</i>, <i>i</i><sup>2</sup> = −1, <i>i</i><sup>4<i>k</i>+1</sup> = <i>i</i>. ω italic (<i>ω</i>), <i>e</i><sup><i>iθ</i></sup> (e italic as printed; say if the book sets it upright).
- **Re, Im, arg, Arg upright:** Re(<i>z</i>), Im(<i>z</i>), arg <i>z</i> / arg(<i>z</i>), Arg as printed; cis if printed.
- **Modulus** |<i>z</i>|, |<i>z</i><sub>1</sub> − <i>z</i><sub>2</sub>|.
- **Conjugate:** the combining overline U+0305 straight after the barred character's closing tag, the house form Physics uses for bars: <i>z</i>̅ (written `<i>z</i>̅`), <i>z</i>̅<sub>1</sub> (bar on z only). A bar over a whole expression: a U+0305 after EVERY character under the bar (the reader joins them into one bar): (<i>z</i>̅<sub>1</sub>̅ +̅ <i>z</i>̅<sub>2</sub>̅)… only if the book bars the whole expression; list each such place. Never write "conj" or z*.
- **Square roots of negatives:** √(−1), √−16 as printed; a root over more than one term with a bracket.
- **Polar form:** <i>r</i>(cos <i>θ</i> + <i>i</i> sin <i>θ</i>); principal argument range (−π, π] as printed.
- **Quadratics:** <i>D</i> = <i>b</i><sup>2</sup> − 4<i>ac</i>; roots <i>α</i>, <i>β</i>; <i>α</i> + <i>β</i> = −<frac><num><i>b</i></num><den><i>a</i></den></frac>, <i>αβ</i> = <frac><num><i>c</i></num><den><i>a</i></den></frac> (stacked, also in running text: the text dump shows "−b/a", the page prints it stacked or not; stack it either way).
- **Vectors (Topic 09):** dot and cross as printed; Re(<i>u</i>̅<i>v</i>) with the bar on u only.

## Figures
Figures 4.1–4.8 are drawn in the book. Placement as before (the `fig` block where the figure is called or its caption is printed; caption without "Figure 4.N" and "(see next page)"). Argand diagrams: real axis labelled Re (or x) and imaginary axis Im (or y), as printed; points filled; loci (circles, bisectors) as drawn. Diagram test: `npx jest lib/diagrams -t "mathematics.11.4"`.

## Writers' test run (once, when done; again only if it failed)
`npx jest content/textbooks/__tests__/book-rules content/textbooks/__tests__/book-chapters content/textbooks/__tests__/display-fit -t "Mathematics 11 Chapter 4|the text of every book chapter|fits"`, plus `npx eslint <your file>`. Failures naming "Mathematics 11 Ch 4" and your topic are yours (the width check "fits" now measures correctly: an over-wide piece of yours must be fixed with `<br>` as the lessons above say); topics out of order because other files are empty, and undrawn fig ids, are not. No tsc, no whole test suite (the Mac hangs).
