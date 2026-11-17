# Brief: Mathematics Class 11, Chapter 10 Conic Sections, rebuilt word for word from the Master Reference book

The tenth Mathematics chapter. Chapters 1–8 are finished and pushed. Chapter 9 is being written at the same time by other writers (MAC-BRIEF-M11-09.md): never touch its files.

**Read, in order:**
1. `/Users/nikhi/Developer/monk-books/math11/briefs/MAC-BRIEF-M11-01.md`, the whole file, and every file it tells you to read. Its page map, file names, ids and indexes are replaced by this file. **Its layout of sub-topics ("Exam relevance" part, then one part per "Section N", titled from the section's own name in sentence case) is the layout of every topic here**; its handling of addenda is the layout of Additional A–C.
2. `MAC-BRIEF-M11-04.md`, its "Lessons from Chapter 3's reviews and Android check"; `MAC-BRIEF-M11-05.md`, its "Lessons from Chapter 4". Both hold here.
3. `/Users/nikhi/Developer/monk-books/math11/DECISIONS-M11.md` (items 10–33; this chapter's layout is 33).
4. This file. **Where they disagree, this file wins.**

**Your closest models:** `content/textbooks/math-11-08/topics-05-07.ts` and `content/textbooks/math-11-07/topics-03-05.ts` (topics in the "Section N" form with formula cards, legends, MCQ nudges), `content/textbooks/math-11-07/extras-a-c.ts` (additional topics with an Introduction part). Read one before writing. The OLD Conic Sections chapter (`/Users/nikhi/Developer/monk-books/old/old-math-11-10-conics.ts`) is an earlier rewrite we are replacing: never copy from it.

## Lessons from Chapters 5–8 (on top of the earlier ones)
- **A worked-example step that leads into the boxed answer ends with the result**, never a bare colon; **exception:** when that step is the LAST step, the answer box alone carries the result (the check "prints an answer once").
- **Template literals:** any string using `${…}` is in backticks. **No HTML entities:** write the no-break space as the character U+00A0, never "&nbsp;".
- **Tags, titles and part titles are plain text:** no `<sup>`/`<sub>`, no Unicode subscript letters (aₙ) — use words ("the nth term"); digits like ² are fine. Dropping exam years from a tag must not leave "JEE Main (JEE Main)".
- **Keep things whole with a no-break space (U+00A0):** a condition with its sign ("<i>a</i> ≠ 0", "|<i>r</i>| < 1"), a two-argument name "(<i>x</i>, <i>y</i>)" when short, "·" with what it multiplies, "log<sub>10</sub>" with its argument; a number before a raised index gets "·" or a space (so "2 ²ⁿC" never reads as a power).
- **A fraction inside a fraction's numerator** draws badly on Android: if the book's working allows, write the single fraction it equals and list it.
- **Long displayed chains:** `<br>` before each "=" once a line passes about 30 characters of maths; two stacked fractions never on neighbouring wrapped lines of one paragraph (give each its own line, `<br><br>` between them in a step).
- Over-general claims, false statements about other topics, syllabus/NCERT/CBSE claims: copy as printed and LIST with page and why (the reviewers fix them).

## Where things are
Book `/Users/nikhi/Developer/monk-books/math11/math11.pdf` (October 2026 edition, **PDF page = the bottom folio**). Text dump `math11/math11.txt` (maths scrambled): **read every equation, focus, directrix, eccentricity and symbol from the page images** (Read tool on the PDF with `pages`; `pdftoppm -r 110 -f N -l N -png` only where unclear, then delete the PNG). **Never use `math11-aug22-OLD.pdf`.** Work folder `math11/work-<your-name>/`. Your file exists as an empty stub, already wired in. Figure drawings often sit a page AFTER their caption.

## ERRATA (pp. 1238–1260)
Resolved entries are already in the text. Read the errata for Chapter 10 yourself and report what they say for your pages, and anything on your pages that still looks like a defect.

## Layout (decision 33)
- **Topics 01–05** = the main chapter's five unnumbered sections, in order: 01 "Introduction: Sections of a Cone & the Conic Family", 02 "The Circle", 03 "The Parabola", 04 "The Ellipse", 05 "The Hyperbola". **Topics 06–09** = the supplement's four units: 06 "Parametric Forms and the Auxiliary Circle", 07 "Tangents to a Conic", 08 "Normals to a Conic", 09 "Applied Problems: Conics in the Real World" (titles exactly as printed; check each). Each opens with its "Exam Relevance" box, then "Section 1" … "Section 8" (box = "Exam relevance" part; sections as parts titled from their own names in sentence case, "&" → "and", em dashes → a colon). References to these by name ("the Circle subtopic", "the supplement unit on tangents") → "Topic 02", "Topic 07" etc. where a number is needed; otherwise keep the name.
- pp. 895–896 are the chapter's title and contents: not copied. The supplement's heading (p. 935) is not copied.
- **Additional topics A–C** = the Additional Topics part's Addenda A–C (`n: 'A'` … `'C'`, `extra: true`), title = the text after "Addendum X — ", exactly as printed. **The part's opening (p. 987, "The five typeset subtopics (Introduction, The Circle, …) and the four supplement units … cover the whole NCERT …")** is Additional A's first part, "Introduction", reworded only where it must ("The five typeset subtopics … and the four supplement units" → "Topics 01–05 … and Topics 06–09"); NCERT claims copied and listed.
- **Cross-references:** "Addendum X" → "Additional topic X"; "Section N" of the same topic → its part's name; another topic's "Section N" → "Topic 0N’s <part name> part"; "Example N" of another topic → reworded to what the reader shows; "Figure 10.N" stays; NCERT example/exercise numbers copied as printed and listed; references to other chapters ("Chapter 9", "Chapter 11") copied and listed.
- **Exam citations:** no exam years; shares and frequencies labelled "(the book’s estimate from past papers, not official figures)".

## Page map (pp. 897–1008). Confirm every boundary on the page images and report any difference.

| File (`content/textbooks/math-11-10/`) | Writer | Topics | Pages | Topic indexes | Numbered figures |
|---|---|---|---|---|---|
| `topics-01-02.ts` | mw101 | 01 Introduction; 02 The Circle | 897–902; 903–909 | 0, 1 | 10.1 (898), 10.2 (905) |
| `topics-03-05.ts` | mw102 | 03 The Parabola; 04 The Ellipse; 05 The Hyperbola | 910–917; 918–925; 926–934 | 2, 3, 4 | 10.3 (912), 10.4 (921), 10.5 (929) |
| `topics-06-07.ts` | mw103 | 06 Parametric Forms and the Auxiliary Circle; 07 Tangents to a Conic | 935–947; 948–960 | 5, 6 | 10.6, 10.7 (939), 10.8 (953) |
| `topics-08-09.ts` | mw104 | 08 Normals to a Conic; 09 Applied Problems: Conics in the Real World | 961–973; 974–986 | 7, 8 | 10.9 (964), 10.10 (975), 10.11 (977), 10.12 (979), 10.13 (981), 10.14 (983) |
| `extras-a-c.ts` | mw105 | Additional A–C (+ the p. 987 introduction) | 987–1008 | 9, 10, 11 | |

Chapter 11 starts on p. 1009: stop before it. The chapter file `content/textbooks/math-11-10-conics.ts` joins the five files: never edit it. Diagrams `lib/diagrams/mathematics-11-10.ts` (`DIAGRAMS_MATHEMATICS_11_10`, `'mathematics|11|10'`). Key points `lib/revise/keypoints-mathematics-11-10.ts`.
- **Figure ids:** `m11-10-fig-10.1` … `m11-10-fig-10.14`; any unnumbered drawing `m11-10-<topic n>-d<k>` (`01` … `09`, `A` … `C`; k from 1 in page order). Count the vector shapes on every one of your pages and report which hold a drawing, with what it shows.

## Conic notation (on top of Chapter 1's)
- Standard forms stacked: <frac><num><i>x</i><sup>2</sup></num><den><i>a</i><sup>2</sup></den></frac> + <frac><num><i>y</i><sup>2</sup></num><den><i>b</i><sup>2</sup></den></frac> = 1; <i>y</i><sup>2</sup> = 4<i>ax</i>; (<i>x</i> − <i>h</i>)<sup>2</sup> + (<i>y</i> − <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup>; eccentricity <i>e</i> italic; foci (±<i>ae</i>, 0); directrix <i>x</i> = ±<frac><num><i>a</i></num><den><i>e</i></den></frac>; latus rectum <frac><num>2<i>b</i><sup>2</sup></num><den><i>a</i></den></frac>.
- <i>S</i> = 0, <i>S</i><sub>1</sub>, <i>T</i> = 0, <i>S</i><sub>11</sub> as printed; parameters <i>t</i>, <i>θ</i>; (<i>a</i> cos <i>θ</i>, <i>b</i> sin <i>θ</i>) with cos, sin upright.

## Figures
Placement as before (the `fig` block where the figure is called or its caption is printed; caption without "Figure 10.N"). The drawings are made later by a diagram helper; you only place the `fig` blocks and report what each shows.

## Writers' test run (once, when done; again only if it failed)
`npx jest content/textbooks/__tests__/book-rules content/textbooks/__tests__/book-chapters content/textbooks/__tests__/display-fit -t "Mathematics 11 Chapter 10|the text of every book chapter|fits"`, plus `npx jest content/textbooks/__tests__/display-fonts` and `npx eslint <your file>`. Failures naming "Mathematics 11 Ch 10" and your topic are yours; topics out of order because other files are empty, a placeholder topic, and undrawn fig ids, are not. **No tsc, no whole test suite.** Never run git commands that change anything. **Never use the Android emulator.**

**Coordinator correction (2026-11-12):** "No HTML entities" means never the five letters "&nbsp;". The no-break space itself (U+00A0) is required for gluing: define it as `const NB = '\u00a0';` (escaped), never a plain space.
