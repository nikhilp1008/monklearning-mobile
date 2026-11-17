# Brief: Mathematics Class 11, Chapter 9 Straight Lines, rebuilt word for word from the Master Reference book

The ninth Mathematics chapter. Chapters 1–8 are finished and pushed. Chapter 10 is being written at the same time by other writers (MAC-BRIEF-M11-10.md): never touch its files.

**Read, in order:**
1. `/Users/nikhi/Developer/monk-books/math11/briefs/MAC-BRIEF-M11-01.md`, the whole file, and every file it tells you to read (FRACTIONS, NO EM DASHES, Mathematics notation, checking numbers, the diagram rules, the report, "Added after the first writer"). Its page map, file names, ids and indexes are replaced by this file. **Its layout of sub-topics ("Exam relevance" part, then one part per "Section N", titled from the section's own name in sentence case) is the layout of every topic here**; its handling of addenda (Additional topics with letters) is the layout of Additional A–F.
2. `MAC-BRIEF-M11-04.md`, its "Lessons from Chapter 3's reviews and Android check"; `MAC-BRIEF-M11-05.md`, its "Lessons from Chapter 4". Both hold here.
3. `/Users/nikhi/Developer/monk-books/math11/DECISIONS-M11.md` (items 10–33; this chapter's layout is 33).
4. This file. **Where they disagree, this file wins.**

**Your closest models:** `content/textbooks/math-11-08/topics-05-07.ts` and `content/textbooks/math-11-07/topics-03-05.ts` (topics in the "Section N" form with formula cards, legends, MCQ nudges), `content/textbooks/math-11-07/extras-a-c.ts` (additional topics with an Introduction part), and for an opening topic n '00' `content/textbooks/phy-12-03/topics-0-1.ts`. Read one before writing. The OLD Straight Lines chapter (`/Users/nikhi/Developer/monk-books/old/old-math-11-09-straight-lines.ts`) is an earlier rewrite we are replacing: never copy from it.

## Lessons from Chapters 5–8 (on top of the earlier ones)
- **A worked-example step that leads into the boxed answer ends with the result**, never a bare colon; **exception:** when that step is the LAST step, the answer box alone carries the result (the check "prints an answer once").
- **Template literals:** any string using `${…}` is in backticks. **No HTML entities:** write the no-break space as the character U+00A0, never "&nbsp;".
- **Tags, titles and part titles are plain text:** no `<sup>`/`<sub>`, no Unicode subscript letters (aₙ) — use words ("the nth term"); digits like ² are fine. Dropping exam years from a tag must not leave "JEE Main (JEE Main)".
- **Keep things whole with a no-break space (U+00A0):** a condition with its sign ("<i>a</i> ≠ 0", "|<i>r</i>| < 1"), a two-argument name "(<i>x</i>, <i>y</i>)" when short, "·" with what it multiplies, "log<sub>10</sub>" with its argument; a number before a raised index gets "·" or a space (so "2 ²ⁿC" never reads as a power).
- **A fraction inside a fraction's numerator** draws badly on Android: if the book's working allows, write the single fraction it equals and list it.
- **Long displayed chains:** `<br>` before each "=" once a line passes about 30 characters of maths; two stacked fractions never on neighbouring wrapped lines of one paragraph (give each its own line, `<br><br>` between them in a step).
- Over-general claims, false statements about other topics, syllabus/NCERT/CBSE claims: copy as printed and LIST with page and why (the reviewers fix them).

## Where things are
Book `/Users/nikhi/Developer/monk-books/math11/math11.pdf` (October 2026 edition, **PDF page = the bottom folio**). Text dump `math11/math11.txt` (maths scrambled): **read every formula, coordinate, slope, distance, determinant and symbol from the page images** (Read tool on the PDF with `pages`; `pdftoppm -r 110 -f N -l N -png` only where unclear, then delete the PNG). **Never use `math11-aug22-OLD.pdf`.** Work folder `math11/work-<your-name>/`. Your file exists as an empty stub, already wired in. Figure drawings often sit a page AFTER their caption.

## ERRATA (pp. 1238–1260)
Resolved entries are already in the text (copy the page as printed). Read the errata for Chapter 9 yourself and report what they say for your pages, and anything on your pages that still looks like a defect.

## Layout (decision 33)
- **Topic 00 = the book's "Subtopic 00 — Coordinate Foundations"** (`n: '00'`; the app shows it as the opening topic "Start here"). **Topics 01–06** = Subtopics 01–06; **Topic 07** = the supplement's "Subtopic 07 — Triangle Centres in Coordinates"; **Topic 08** = the Additional Topics part's "Subtopic 08 — Pair of Straight Lines". "Subtopic 0N" → "Topic 0N" (Subtopic 00 → "Topic 00"). Each opens with its "Exam Relevance" box, then "Section 1" … "Section 8" (box = "Exam relevance" part; each section a part titled from its own name in sentence case, "&" → "and", em dashes → a colon).
- pp. 788–790 are the chapter's title and contents: not copied.
- **Additional topics A–F = the book's Patterns 1–6** (`n: 'A'` … `'F'`, `extra: true`): Pattern 1 = A, 2 = B, 3 = C, 4 = D (the supplement's addendum, pp. 860–866), 5 = E, 6 = F (the Additional Topics part, pp. 867–875). Title = the text after "Pattern N — ". "Pattern N" → "Additional topic X" everywhere.
  - **The Additional Topics part's opening (p. 867, "Subtopics 00-06, the Supplement (Subtopic 07, Triangle Centres) and its Addendum (Patterns 1-4) …" and its table)** is Additional E's first part, "Introduction"; heading not copied; reworded only where it must ("Subtopics 00-06, the Supplement (Subtopic 07 …) and its Addendum (Patterns 1-4)" → "Topics 00–06, Topic 07 and Additional topics A to D"; "continuing the Supplement’s numbering" → "continuing the letters"; "It also adds … as Subtopic 08" → "… as Topic 08"); its table a `table` block in our names. List each change.
  - If the supplement's Patterns 1–4 have their own opening text before Pattern 1 (p. 860), it is Additional A's "Introduction".
- **Cross-references:** "Subtopic 0N" → "Topic 0N"; "Pattern N" → "Additional topic X"; "the Supplement" → "Topic 07 and Additional topics A to D" or whichever it means; "Section N" of the same subtopic → its part's name; another subtopic's "Section N" → "Topic 0N’s <part name> part"; "Example N", "Practice N" of another topic → reworded to what the reader shows ("Topic 00’s fourth worked example"); procedure letters and theorem numbers kept; "Figure 9.N" stays; NCERT example/exercise numbers copied as printed and listed; references to other chapters ("Chapter 11" for conics: Conic Sections is Chapter 10 in this app's book order — copy as printed and list) copied and listed.
- **Exam citations:** no exam years; shares and frequencies labelled "(the book’s estimate from past papers, not official figures)".

## Page map (pp. 791–894). Confirm every boundary on the page images and report any difference.

| File (`content/textbooks/math-11-09/`) | Writer | Topics | Pages | Topic indexes | Numbered figures |
|---|---|---|---|---|---|
| `topics-00-01.ts` | mw91 | 00 Coordinate Foundations; 01 Slope of a Line and Angles | 791–797; 798–807 | 0, 1 | 9.1 (792), 9.2 (798), 9.3 (801) |
| `topics-02-03.ts` | mw92 | 02 Equations of a Line; 03 Distance Formulas | 808–818; 819–826 | 2, 3 | 9.4 (808), 9.5 (811), 9.6 (813), 9.7 (819) |
| `topics-04-06.ts` | mw93 | 04 Point of Intersection, Concurrency & Family of Lines; 05 Angle Bisectors of Two Lines; 06 Foot of Perpendicular, Image & Reflection | 827–832; 833–838; 839–845 | 4, 5, 6 | 9.8 (840) |
| `topic-07.ts` | mw94 | 07 Triangle Centres in Coordinates | 846–859 | 7 | 9.9 (847) |
| `topic-08.ts` | mw95 | 08 Pair of Straight Lines | 876–894 | 8 | |
| `extras-a-f.ts` | mw96 | Additional A–F (Patterns 1–6, + the p. 867 introduction) | 860–875 | 9–14 | |

Titles are plain text, as printed ("&" stays). Chapter 10 starts on p. 895: stop before it. The chapter file `content/textbooks/math-11-09-straight-lines.ts` joins the six files in the order 00–01, 02–03, 04–06, 07, 08, A–F: never edit it. Diagrams `lib/diagrams/mathematics-11-09.ts` (`DIAGRAMS_MATHEMATICS_11_09`, `'mathematics|11|9'`). Key points `lib/revise/keypoints-mathematics-11-09.ts`.
- **Figure ids:** `m11-09-fig-9.1` … `m11-09-fig-9.9`; any unnumbered drawing `m11-09-<topic n>-d<k>` (`00` … `08`, `A` … `F`; k from 1 in page order). Count the vector shapes on every one of your pages and report which hold a drawing, with what it shows.

## Coordinate-geometry notation (on top of Chapter 1's)
- Points <i>A</i>(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>), slope <i>m</i>, tan <i>θ</i> (tan upright), angles in degrees as printed; lines <i>ax</i> + <i>by</i> + <i>c</i> = 0, <i>L</i><sub>1</sub> + <i>λL</i><sub>2</sub> = 0; distance with √ over a bracket and |…| for the perpendicular distance, stacked: <frac><num>|<i>ax</i><sub>1</sub> + <i>by</i><sub>1</sub> + <i>c</i>|</num><den>√(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>)</den></frac>.
- **Determinants** (the area determinant, the pair-of-lines Δ): the reader cannot draw a determinant. Write the expanded form the book gives (e.g. Area = <frac><num>1</num><den>2</den></frac>|<i>x</i><sub>1</sub>(<i>y</i><sub>2</sub> − <i>y</i><sub>3</sub>) + …|); if the book prints only the determinant, write its expansion and LIST it (founder decides the form later).
- Section formula, centroid, incentre etc. stacked; coordinates in a fraction stacked inside the bracket.

## Figures
Placement as before (the `fig` block where the figure is called or its caption is printed; caption without "Figure 9.N"). The drawings are made later by a diagram helper; you only place the `fig` blocks and report what each shows.

## Writers' test run (once, when done; again only if it failed)
`npx jest content/textbooks/__tests__/book-rules content/textbooks/__tests__/book-chapters content/textbooks/__tests__/display-fit -t "Mathematics 11 Chapter 9|the text of every book chapter|fits"`, plus `npx jest content/textbooks/__tests__/display-fonts` and `npx eslint <your file>`. Failures naming "Mathematics 11 Ch 9" and your topic are yours (an over-wide piece must be fixed with `<br>`); topics out of order because other files are empty, a placeholder topic, and undrawn fig ids, are not. **No tsc, no whole test suite** (the Mac hangs). Never run git commands that change anything. **Never use the Android emulator.**

**Coordinator correction (2026-11-12):** "No HTML entities" means never the five letters "&nbsp;". The no-break space itself (U+00A0) is required for gluing: define it as `const NB = ' ';` (escaped), never a plain space.
