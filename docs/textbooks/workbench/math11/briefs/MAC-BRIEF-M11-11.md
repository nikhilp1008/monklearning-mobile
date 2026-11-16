# Brief: Mathematics Class 11, Chapter 11 Introduction to Three Dimensional Geometry, rebuilt word for word from the Master Reference book

The eleventh Mathematics chapter. Chapters 1–10 are finished and pushed. Chapter 12 is being written at the same time by other writers (MAC-BRIEF-M11-12.md): never touch its files.

**Read, in order:**
1. `/Users/nikhi/Developer/monk-books/math11/briefs/MAC-BRIEF-M11-01.md`, the whole file, and every file it tells you to read (FRACTIONS, NO EM DASHES, Mathematics notation, checking numbers, the diagram rules, the report, "Added after the first writer"). Its page map, file names, ids and indexes are replaced by this file. **Its layout of sub-topics ("Exam relevance" part, then one part per "Section N", titled from the section's own name in sentence case) is the layout of every topic here**; its handling of addenda (Additional topics with letters) is the layout of the additional topics.
2. `MAC-BRIEF-M11-04.md`, its "Lessons from Chapter 3's reviews and Android check"; `MAC-BRIEF-M11-05.md`, its "Lessons from Chapter 4". Both hold here.
3. `/Users/nikhi/Developer/monk-books/math11/DECISIONS-M11.md` (items 10–37; this chapter's layout is 37).
4. This file. **Where they disagree, this file wins.**

**Your closest models:** `content/textbooks/math-11-09/topics-00-01.ts` (topics in the "Section N" form with coordinates, formula cards, legends, MCQ nudges) and `content/textbooks/math-11-09/extras-a-f.ts` (the book's Patterns as lettered additional topics with Introduction parts). Read one before writing. The OLD chapter (`/Users/nikhi/Developer/monk-books/old/old-math-11-11-three-d.ts`) is an earlier rewrite we are replacing: never copy from it.

## Lessons from Chapters 5–8 (on top of the earlier ones)
- **A worked-example step that leads into the boxed answer ends with the result**, never a bare colon; **exception:** when that step is the LAST step, the answer box alone carries the result (the check "prints an answer once").
- **Template literals:** any string using `${…}` is in backticks. **No HTML entities:** write the no-break space as the character U+00A0, never "&nbsp;".
- **Tags, titles and part titles are plain text:** no `<sup>`/`<sub>`, no Unicode subscript letters (aₙ) — use words ("the nth term"); digits like ² are fine. Dropping exam years from a tag must not leave "JEE Main (JEE Main)".
- **Keep things whole with a no-break space (U+00A0):** a condition with its sign ("<i>a</i> ≠ 0", "|<i>r</i>| < 1"), a two-argument name "(<i>x</i>, <i>y</i>)" when short, "·" with what it multiplies, "log<sub>10</sub>" with its argument; a number before a raised index gets "·" or a space (so "2 ²ⁿC" never reads as a power).
- **A fraction inside a fraction's numerator** draws badly on Android: if the book's working allows, write the single fraction it equals and list it.
- **Long displayed chains:** `<br>` before each "=" once a line passes about 30 characters of maths; two stacked fractions never on neighbouring wrapped lines of one paragraph (give each its own line, `<br><br>` between them in a step).
- Over-general claims, false statements about other topics, syllabus/NCERT/CBSE claims: copy as printed and LIST with page and why (the reviewers fix them).
- **The no-break space:** define it as `const NB = '\u00a0';` (escaped), never a plain space and never the letters "&nbsp;". Use it after the comma of a short coordinate pair "(x, y)", inside a condition, and around + and = of a short standard form so it never splits.

## Where things are
Book `/Users/nikhi/Developer/monk-books/math11/math11.pdf` (October 2026 edition, **PDF page = the bottom folio**). Text dump `math11/math11.txt` (maths scrambled): **read every formula and symbol from the page images** (Read tool on the PDF with `pages`; `pdftoppm -r 110 -f N -l N -png` only where unclear, then delete the PNG). **Never use `math11-aug22-OLD.pdf`.** Work folder `math11/work-<your-name>/`. Your file exists as an empty stub, already wired in. Figure drawings often sit a page AFTER their caption.

## ERRATA (pp. 1238–1260)
Resolved entries are already in the text (copy the page as printed). Read the errata for Chapter 11 yourself and report what they say for your pages, and anything on your pages that still looks like a defect.

## Layout (decision 37)
- **Topics 01–03** = Subtopics 01–03 ("Subtopic 0N" → "Topic 0N"). Each opens with its "Exam Relevance" box, then "Section 1" … "Section 8" (box = "Exam relevance" part; sections as parts titled from their own names in sentence case, "&" → "and", em dashes → a colon). p. 1009 is the chapter's title and contents: not copied.
- **Additional topics A–H = the book's Patterns 1–8** (`n: 'A'` … `'H'`, `extra: true`), Pattern 1 = A … Pattern 8 = H; title = the text after "Pattern N — ". "Pattern N" → "Additional topic X" everywhere.
  - **The supplement's opening (p. 1037, "Addendum to Chapter 11: Missing Problem Patterns", "The three subtopics you have just worked through …" to "… two practice items with answers.")** is Additional A's first part, "Introduction"; its headings are not copied; "The three subtopics" → "Topics 01–03"; list each change.
  - **"Addendum Cheat Sheet" (p. 1051)** is the LAST part of Additional F, titled "Cheat sheet".
  - **The Additional Topics part's opening (p. 1052, before Pattern 7)** is Additional G's first part, "Introduction", reworded only where it must ("Patterns 1–6" → "Additional topics A to F", "continuing the numbering" → "continuing the letters"); its heading is not copied. Any closing cheat sheet (pp. 1058–1059) is the last part of Additional H.
- **Cross-references:** "Subtopic 0N" → "Topic 0N"; "Subtopic 0N, Procedure B" → "Topic 0N, Procedure B"; "Pattern N" → "Additional topic X"; "the Supplement" → whichever it means; "Section N" of the same topic → its part's name; another topic's "Section N" → "Topic 0N’s <part name> part"; "Example N" of another topic → reworded to what the reader shows; "Figure 11.N" stays; NCERT example/exercise numbers copied as printed and listed; references to other chapters copied and listed (Conic Sections is Chapter 10, Straight Lines Chapter 9 in this book).
- **Exam citations:** no exam years; shares and frequencies labelled "(the book’s estimate from past papers, not official figures)".

## Page map (pp. 1010–1059). Confirm every boundary on the page images and report any difference.

| File (`content/textbooks/math-11-11/`) | Writer | Topics | Pages | Topic indexes | Numbered figures |
|---|---|---|---|---|---|
| `topics-01-03.ts` | mw111 | 01 Coordinate Axes, Planes, and Octants; 02 Distance and Section Formulas in 3D; 03 Applications: Centroid, Collinearity & Locus | 1010–1019; 1020–1028; 1029–1036 | 0, 1, 2 | 11.1 (1010), 11.2 (1013), 11.3 (1016), 11.4 (1020), 11.5 (1025), 11.6 (1033) |
| `extras-a-f.ts` | mw112 | Additional A–F (Patterns 1–6, + the p. 1037 introduction and the p. 1051 cheat sheet) | 1037–1051 | 3–8 | 11.7 (1038), 11.8 (1040), 11.9 (1043), 11.10 (1048) |
| `extras-g-h.ts` | mw113 | Additional G–H (Patterns 7–8, + the p. 1052 introduction) | 1052–1059 | 9, 10 | |

Chapter 12 starts on p. 1060: stop before it. The chapter file `content/textbooks/math-11-11-three-d.ts` joins the three files: never edit it. Diagrams `lib/diagrams/mathematics-11-11.ts` (`DIAGRAMS_MATHEMATICS_11_11`, `'mathematics|11|11'`). Key points `lib/revise/keypoints-mathematics-11-11.ts`.
- **Figure ids:** `m11-11-fig-11.1` … `m11-11-fig-11.10`; any unnumbered drawing `m11-11-<topic n>-d<k>` (`01` … `03`, `A` … `H`; k from 1 in page order). Count the vector shapes on every one of your pages and report which hold a drawing, with what it shows.

## 3D notation (on top of Chapter 1's)
- Points <i>P</i>(<i>x</i>, <i>y</i>, <i>z</i>) with no-break spaces after the commas (short triples stay whole); axes <i>x</i>-axis etc. (letters italic); planes <i>XY</i>-plane as printed; octants with Roman numerals as printed; distance √((<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>)<sup>2</sup> + …) with a bracket under √; section and centroid formulas stacked, each coordinate its own stacked fraction inside the triple, and a long triple split one coordinate per line rather than wrapped.

## Figures
Placement as before (the `fig` block where the figure is called or its caption is printed; caption without "Figure 11.N"). The drawings are made later by a diagram helper; you only place the `fig` blocks and report what each shows.

## Writers' test run (once, when done; again only if it failed)
`npx jest content/textbooks/__tests__/book-rules content/textbooks/__tests__/book-chapters content/textbooks/__tests__/display-fit -t "Mathematics 11 Chapter 11|the text of every book chapter|fits"`, plus `npx jest content/textbooks/__tests__/display-fonts` and `npx eslint <your file>`. Failures naming "Mathematics 11 Ch 11" and your topic are yours (an over-wide piece must be fixed with `<br>`); topics out of order because other files are empty, a placeholder topic, and undrawn fig ids, are not. **No tsc, no whole test suite** (the Mac hangs). Never run git commands that change anything. **Never use the Android emulator.**
