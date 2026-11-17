# Brief: Mathematics Class 11, Chapter 13 Statistics, rebuilt word for word from the Master Reference book

The thirteenth Mathematics chapter. Chapters 1–12 are written (11–12 under Android check). Chapter 14 is being written at the same time by other writers (MAC-BRIEF-M11-14.md): never touch its files.

**Read, in order:**
1. `/Users/nikhi/Developer/monk-books/math11/briefs/MAC-BRIEF-M11-01.md`, the whole file, and every file it tells you to read (FRACTIONS, NO EM DASHES, Mathematics notation, checking numbers, the diagram rules, the report, "Added after the first writer"). Its page map, file names, ids and indexes are replaced by this file. **Its layout of sub-topics ("Exam relevance" part, then one part per "Section N", titled from the section's own name in sentence case) is the layout of every topic here**; its handling of addenda (Additional topics with letters) is the layout of the additional topics.
2. `MAC-BRIEF-M11-04.md`, its "Lessons from Chapter 3's reviews and Android check"; `MAC-BRIEF-M11-05.md`, its "Lessons from Chapter 4". Both hold here.
3. `/Users/nikhi/Developer/monk-books/math11/DECISIONS-M11.md` (items 10–40; this chapter's layout is 40).
4. This file. **Where they disagree, this file wins.**

**Your closest models:** `content/textbooks/math-11-11/topics-01-03.ts` (three topics in the "Section N" form with formula cards, legends, tables, MCQ nudges) and `content/textbooks/math-11-12/extras-a-b.ts` (addenda as lettered additional topics). Read one before writing. The OLD chapter (`/Users/nikhi/Developer/monk-books/old/old-math-11-13-statistics.ts`) is an earlier rewrite we are replacing: never copy from it.

## Lessons from Chapters 5–8 (on top of the earlier ones)
- **A worked-example step that leads into the boxed answer ends with the result**, never a bare colon; **exception:** when that step is the LAST step, the answer box alone carries the result (the check "prints an answer once").
- **Template literals:** any string using `${…}` is in backticks. **No HTML entities:** write the no-break space as the character U+00A0, never "&nbsp;".
- **Tags, titles and part titles are plain text:** no `<sup>`/`<sub>`, no Unicode subscript letters (aₙ) — use words ("the nth term"); digits like ² are fine. Dropping exam years from a tag must not leave "JEE Main (JEE Main)".
- **Keep things whole with a no-break space (U+00A0):** a condition with its sign ("<i>a</i> ≠ 0", "|<i>r</i>| < 1"), a two-argument name "(<i>x</i>, <i>y</i>)" when short, "·" with what it multiplies, "log<sub>10</sub>" with its argument; a number before a raised index gets "·" or a space (so "2 ²ⁿC" never reads as a power).
- **A fraction inside a fraction's numerator** draws badly on Android: if the book's working allows, write the single fraction it equals and list it.
- **Long displayed chains:** `<br>` before each "=" once a line passes about 30 characters of maths; two stacked fractions never on neighbouring wrapped lines of one paragraph (give each its own line, `<br><br>` between them in a step).
- Over-general claims, false statements about other topics, syllabus/NCERT/CBSE claims: copy as printed and LIST with page and why (the reviewers fix them).
- **The no-break space:** define it as `const NB = '\u00a0';` (escaped), never a plain space and never the letters "&nbsp;". Use it after the comma of a short coordinate pair "(x, y)", inside a condition, and around + and = of a short standard form so it never splits.
- **Lessons from Chapters 11–12:** keep a coordinate triple on one line in running text; a formula card too wide → one item per line (display-fit decides); □ is in none of the app's fonts → the word "box"; worked-example question lines plain, not bold; a step never ends in a comma; a whole-chapter or whole-part summary stays as the last parts of its topic (list it).

## Where things are
Book `/Users/nikhi/Developer/monk-books/math11/math11.pdf` (October 2026 edition, **PDF page = the bottom folio**). Text dump `math11/math11.txt` (maths scrambled): **read every formula and symbol from the page images** (Read tool on the PDF with `pages`; `pdftoppm -r 110 -f N -l N -png` only where unclear, then delete the PNG). **Never use `math11-aug22-OLD.pdf`.** Figure drawings often sit a page AFTER their caption.

## WHERE YOU WRITE (different from earlier chapters: read carefully)
An Android screenshot shoot of Chapters 11–12 is running on the emulator from the app repo; Metro reloads the app whenever a file in the repo changes. **So do NOT create or edit ANY file inside `/Users/nikhi/Developer/monk-learning-app/`.** Write your file into your work folder `/Users/nikhi/Developer/monk-books/math11/work-<your-name>/<file name from the page map>`, written exactly as it will sit at `content/textbooks/math-11-13/<file name>` (same imports with the `@/` alias as the model files; `export const TOPICS: Topic[] = [...]` as the models). You may READ anything in the repo. Do not run jest or eslint (they need the file in the repo). When your file is complete, reply that it is ready to install, with your summary; the coordinator copies it in after the shoot and then sends you the test run to do.

## ERRATA (pp. 1238–1260)
Resolved entries are already in the text (copy the page as printed). Read the errata for Chapter 13 yourself and report what they say for your pages, and anything on your pages that still looks like a defect.

## Layout (decision 40)
- **Topics 01–03** = Subtopics 01–03 ("Subtopic 0N" → "Topic 0N"). Each opens with its "Exam Relevance" box, then "Section 1" … "Section 8" (box = "Exam relevance" part; sections as parts titled from their own names in sentence case, "&" → "and", em dashes → a colon). The chapter's title and contents page is not copied.
- **Additional topics** (`extra: true`), title = the text after "Addendum 13.N — ", exactly as printed (em dash → colon in titles). Each addendum's own headings (The Method, Derivation, Worked Examples, Practice Exercises, Pitfalls, Cheat Sheet Box …) are its parts, headings in sentence case. Its link line (e.g. "extends Subtopic 01 Procedure (C)") stays in its first lines, reworded to "Topic 0N".
- **Supplement / Additional Topics headings** ("Chapter 13: … — Supplement", "— Additional Topics") are not copied; their opening paragraphs and tables (if any) become the next additional topic's first part, "Introduction", reworded only where they must ("Addendum 13.N" → "Additional topic X", "Subtopic 0N" → "Topic 0N", "the Supplement" → whichever it means, "Numbering continues …" → kept for Examples/Results, letters for topics); list each change.
- **Book numbering kept:** "Example S1", "Result 6", "Procedure (C)", "Figure 13.N" stay as printed; "Example N" of a topic → reworded to what the reader shows ("Topic 01’s third worked example"); "Section N" of the same topic → its part's name; another topic's "Section N" → "Topic 0N’s <part name> part"; NCERT example/exercise numbers copied as printed and listed; references to other chapters copied and listed.
- **Exam citations:** no exam years; shares and frequencies labelled "(the book’s estimate from past papers, not official figures)".
- **Additional A** = Addendum 13.1 "Mean Deviation about the Median of a Discrete Frequency Distribution" (pp. 1168–1174); **Additional B** = Addendum 13.2 "Variance of Ungrouped Data about an Assumed Mean" (pp. 1174–1179; the supplement's "Cheat Sheet Box", p. 1179, is B's last part); **Additional C** = Addendum 13.3 "Inclusive (Discontinuous) Class Intervals and True Class Boundaries" (pp. 1180–1187; the Additional Topics part's opening on p. 1180, before Addendum 13.3, is C's "Introduction"; its "Cheat Sheet Box" p. 1187 is C's last part).

## Page map (pp. 1139–1187). Confirm every boundary on the page images and report any difference.

| File (`content/textbooks/math-11-13/`) | Writer | Topics | Pages | Topic indexes | Numbered figures |
|---|---|---|---|---|---|
| `topics-01-03.ts` | mw131 | 01 Measures of Dispersion and Mean Deviation; 02 Variance and Standard Deviation; 03 Analysis of Frequency Distributions & Advanced Problem Types | 1139–1150; 1151–1160; 1161–1167 | 0, 1, 2 | 13.1 (1139), 13.2 (1143), 13.3 (1151) |
| `extras-a-c.ts` | mw132 | Additional A–C | 1168–1187 | 3, 4, 5 | 13.4 (1169), 13.5 (1175) |

Chapter 14 starts on p. 1188: stop before it. Diagrams later in `lib/diagrams/mathematics-11-13.ts` (`'mathematics|11|13'`); key points in `lib/revise/keypoints-mathematics-11-13.ts`.
- **Figure ids:** `m11-13-fig-13.1` … `m11-13-fig-13.5`; any unnumbered drawing `m11-13-<topic n>-d<k>` (`01` … `03`, `A` … `C`).

## Statistics notation (on top of Chapter 1's)
- Mean <i>x̄</i> as printed (x with a bar: `<i>x̄</i>`), median <i>M</i>, mode as printed; Σ with limits as printed (`∑<sub><i>i</i>=1</sub><sup><i>n</i></sup>`); <i>f</i><sub><i>i</i></sub>, <i>x</i><sub><i>i</i></sub>, <i>N</i> = Σ<i>f</i><sub><i>i</i></sub>; M.D.(<i>x̄</i>), M.D.(<i>M</i>) as printed; variance <i>σ</i><sup>2</sup>, standard deviation <i>σ</i>; coefficient of variation C.V. = <frac><num><i>σ</i></num><den><i>x̄</i></den></frac> × 100 stacked; |<i>x</i><sub><i>i</i></sub> − <i>x̄</i>| with bars; c.f. as printed.
- **Frequency tables** are `table` blocks (header row as printed, columns as printed; a column of maths uses `<i>`); a wide table (6+ columns) may be split into two tables or written as labelled lines inside a worked example, as Chapters 9–10 did: list it.
- Shortcut/assumed-mean formulas stacked: <frac><num>Σ<i>f</i><sub><i>i</i></sub><i>d</i><sub><i>i</i></sub></num><den><i>N</i></den></frac>.

## Figures
Placement as before (the `fig` block where the figure is called or its caption is printed; caption without "Figure N.N"). The drawings are made later by a diagram helper; you only place the `fig` blocks and report what each shows. Count the vector shapes on every one of your pages and report which hold a drawing, with what it shows.

## Your report
Save it to `/Users/nikhi/Developer/monk-books/math11/reports-1X/<your-name>.md` (X = the chapter), as Chapter 1's brief describes. No git commands that change anything; never use the Android emulator; no tsc, no jest, no eslint.
