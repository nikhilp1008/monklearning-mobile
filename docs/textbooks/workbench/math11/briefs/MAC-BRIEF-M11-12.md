# Brief: Mathematics Class 11, Chapter 12 Limits and Derivatives, rebuilt word for word from the Master Reference book

The twelfth Mathematics chapter. Chapters 1–10 are finished and pushed. Chapter 11 is being written at the same time by other writers (MAC-BRIEF-M11-11.md): never touch its files.

**Read, in order:**
1. `/Users/nikhi/Developer/monk-books/math11/briefs/MAC-BRIEF-M11-01.md`, the whole file, and every file it tells you to read (FRACTIONS, NO EM DASHES, Mathematics notation, checking numbers, the diagram rules, the report, "Added after the first writer"). Its page map, file names, ids and indexes are replaced by this file. **Its layout of sub-topics ("Exam relevance" part, then one part per "Section N", titled from the section's own name in sentence case) is the layout of every topic here**; its handling of addenda (Additional topics with letters) is the layout of the additional topics.
2. `MAC-BRIEF-M11-04.md`, its "Lessons from Chapter 3's reviews and Android check"; `MAC-BRIEF-M11-05.md`, its "Lessons from Chapter 4". Both hold here.
3. `/Users/nikhi/Developer/monk-books/math11/DECISIONS-M11.md` (items 10–37; this chapter's layout is 37).
4. This file. **Where they disagree, this file wins.**

**Your closest models:** `content/textbooks/math-11-07/topics-03-05.ts` (topics in the "Section N" form with formula cards, legends, MCQ nudges, Σ and stacked fractions) and `content/textbooks/math-11-07/extras-a-c.ts` (lettered additional topics). Read one before writing. The OLD chapter (`/Users/nikhi/Developer/monk-books/old/old-math-11-12-limits.ts`) is an earlier rewrite we are replacing: never copy from it.

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
Resolved entries are already in the text (copy the page as printed). Read the errata for Chapter 12 yourself and report what they say for your pages, and anything on your pages that still looks like a defect.

## Layout (decision 37)
- **Topics 01–05** = Subtopics 01–05 ("Subtopic 0N" → "Topic 0N"); **Topic 06** = the supplement's "Subtopic 06 — Advanced Limit Techniques"; **Topic 07** = the Additional Topics part's "Subtopic 07 — Limits of Sequences". Each opens with its "Exam Relevance" box, then "Section 1" … "Section 8" (box = "Exam relevance" part; sections as parts titled from their own names in sentence case, "&" → "and", em dashes → a colon). pp. 1060–1061 are the chapter's title and contents: not copied.
- **The supplement's opening (p. 1098, before "Subtopic 06", e.g. "Addendum A delivers the functional-equation derivative problems promised in Subtopic 03’s …")** opens **Topic 06's Exam relevance part, before the box text**, reworded only where it must ("Addendum A/B" → "Additional topic A/B", "Subtopic 0N" → "Topic 0N"); its heading is not copied; list it.
- **Additional topics A–B** = the supplement's Addenda A ("Derivatives from Functional Equations", pp. 1114–1117) and B ("Finding Constants for Differentiability at a Junction", pp. 1118–1123) (`n: 'A'`, `'B'`, `extra: true`), title = the text after "Addendum X — ". Each keeps its Exam relevance box as its first part.
- **The Additional Topics part's opening (p. 1124, before "Subtopic 07")**, if any, opens **Topic 07's Exam relevance part**, reworded only where it must; its heading is not copied.
- **Cross-references:** "Subtopic 0N" → "Topic 0N"; "Addendum X" → "Additional topic X"; "the Supplement" → whichever it means; "Section N" of the same topic → its part's name; another topic's "Section N" → "Topic 0N’s <part name> part"; "Example N" of another topic → reworded to what the reader shows; "Figure 12.N" stays; NCERT example/exercise numbers copied as printed and listed; references to other chapters copied and listed.
- **Exam citations:** no exam years; shares and frequencies labelled "(the book’s estimate from past papers, not official figures)".

## Page map (pp. 1062–1137). Confirm every boundary on the page images and report any difference.

| File (`content/textbooks/math-11-12/`) | Writer | Topics | Pages | Topic indexes | Numbered figures |
|---|---|---|---|---|---|
| `topics-01-02.ts` | mw121 | 01 Limits: Concepts & Algebra; 02 Standard Limits | 1062–1068; 1069–1076 | 0, 1 | 12.1 (1062), 12.2 (1069), 12.3 (1072) |
| `topics-03-05.ts` | mw122 | 03 Derivatives and First Principle; 04 Rules of Differentiation; 05 Limits at Infinity & Special Cases of Existence | 1077–1083; 1084–1089; 1090–1097 | 2, 3, 4 | 12.4 (1077), 12.5 (1084), 12.6 (1090) |
| `topic-06.ts` | mw123 | 06 Advanced Limit Techniques (+ the p. 1098 supplement opening) | 1098–1113 | 5 | 12.7 (1099), 12.8 (1108) |
| `extras-a-b.ts` | mw124 | Additional A–B | 1114–1123 | 7, 8 | 12.9 (1119) |
| `topic-07.ts` | mw125 | 07 Limits of Sequences (+ the p. 1124 opening) | 1124–1137 | 6 | |

Note the order in the app: Topics 01–07 first, then Additional A–B (so Topic 07 is index 6 and A–B are 7–8). Chapter 13 starts on p. 1138: stop before it. The chapter file `content/textbooks/math-11-12-limits.ts` joins the five files: never edit it. Diagrams `lib/diagrams/mathematics-11-12.ts` (`DIAGRAMS_MATHEMATICS_11_12`, `'mathematics|11|12'`). Key points `lib/revise/keypoints-mathematics-11-12.ts`.
- **Figure ids:** `m11-12-fig-12.1` … `m11-12-fig-12.9`; any unnumbered drawing `m11-12-<topic n>-d<k>` (`01` … `07`, `A`, `B`; k from 1 in page order). Count the vector shapes on every one of your pages and report which hold a drawing, with what it shows.

## Limits and derivatives notation (on top of Chapter 1's)
- lim with its subscript as printed: `lim<sub><i>x</i>→<i>a</i></sub>` (lim upright); one-sided limits <i>x</i> → <i>a</i><sup>−</sup>, <i>a</i><sup>+</sup>; ∞ as printed.
- Derivatives: <i>f</i>′(<i>x</i>) (prime U+2032 straight after the letter's closing tag), <frac><num><i>dy</i></num><den><i>dx</i></den></frac> stacked, <frac><num><i>d</i></num><den><i>dx</i></den></frac>(…) stacked; first principle <frac><num><i>f</i>(<i>x</i> + <i>h</i>) − <i>f</i>(<i>x</i>)</num><den><i>h</i></den></frac> stacked; sin, cos, tan, log, e upright where the book sets them upright, <i>e</i> as printed.
- Standard limits stacked: <frac><num>sin <i>x</i></num><den><i>x</i></den></frac>, <frac><num><i>x</i><sup><i>n</i></sup> − <i>a</i><sup><i>n</i></sup></num><den><i>x</i> − <i>a</i></den></frac>.
- A fraction inside a fraction's numerator (common in first-principle working) draws badly on Android: write the single fraction it equals where the working allows and list it.

## Figures
Placement as before (the `fig` block where the figure is called or its caption is printed; caption without "Figure 12.N"). The drawings are made later by a diagram helper; you only place the `fig` blocks and report what each shows.

## Writers' test run (once, when done; again only if it failed)
`npx jest content/textbooks/__tests__/book-rules content/textbooks/__tests__/book-chapters content/textbooks/__tests__/display-fit -t "Mathematics 11 Chapter 12|the text of every book chapter|fits"`, plus `npx jest content/textbooks/__tests__/display-fonts` and `npx eslint <your file>`. Failures naming "Mathematics 11 Ch 12" and your topic are yours (an over-wide piece must be fixed with `<br>`); topics out of order because other files are empty, a placeholder topic, and undrawn fig ids, are not. **No tsc, no whole test suite** (the Mac hangs). Never run git commands that change anything. **Never use the Android emulator.**
