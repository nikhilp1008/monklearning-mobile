# Brief: Mathematics Class 11, Chapter 14 Probability, rebuilt word for word from the Master Reference book

The fourteenth and last Mathematics chapter. Chapters 1–12 are written (11–12 under Android check). Chapter 13 is being written at the same time by other writers (MAC-BRIEF-M11-13.md): never touch its files.

**Read, in order:**
1. `/Users/nikhi/Developer/monk-books/math11/briefs/MAC-BRIEF-M11-01.md`, the whole file, and every file it tells you to read (FRACTIONS, NO EM DASHES, Mathematics notation, checking numbers, the diagram rules, the report, "Added after the first writer"). Its page map, file names, ids and indexes are replaced by this file. **Its layout of sub-topics ("Exam relevance" part, then one part per "Section N", titled from the section's own name in sentence case) is the layout of every topic here**; its handling of addenda (Additional topics with letters) is the layout of the additional topics.
2. `MAC-BRIEF-M11-04.md`, its "Lessons from Chapter 3's reviews and Android check"; `MAC-BRIEF-M11-05.md`, its "Lessons from Chapter 4". Both hold here.
3. `/Users/nikhi/Developer/monk-books/math11/DECISIONS-M11.md` (items 10–40; this chapter's layout is 40).
4. This file. **Where they disagree, this file wins.**

**Your closest models:** `content/textbooks/math-11-11/topics-01-03.ts` (three topics in the "Section N" form) and `content/textbooks/math-11-06/topics-03-05.ts` (counting notation: ⁿCᵣ, ⁿPᵣ, `<binom>`), plus `content/textbooks/math-11-12/extras-a-b.ts` (addenda as lettered additional topics). Read one before writing. The OLD chapter (`/Users/nikhi/Developer/monk-books/old/old-math-11-14-probability.ts`) is an earlier rewrite we are replacing: never copy from it.

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
An Android screenshot shoot of Chapters 11–12 is running on the emulator from the app repo; Metro reloads the app whenever a file in the repo changes. **So do NOT create or edit ANY file inside `/Users/nikhi/Developer/monk-learning-app/`.** Write your file into your work folder `/Users/nikhi/Developer/monk-books/math11/work-<your-name>/<file name from the page map>`, written exactly as it will sit at `content/textbooks/math-11-14/<file name>` (same imports with the `@/` alias as the model files; `export const TOPICS: Topic[] = [...]` as the models). You may READ anything in the repo. Do not run jest or eslint (they need the file in the repo). When your file is complete, reply that it is ready to install, with your summary; the coordinator copies it in after the shoot and then sends you the test run to do.

## ERRATA (pp. 1238–1260)
Resolved entries are already in the text (copy the page as printed). Read the errata for Chapter 14 yourself and report what they say for your pages, and anything on your pages that still looks like a defect.

## Layout (decision 40)
- **Topics 01–03** = Subtopics 01–03 ("Subtopic 0N" → "Topic 0N"). Each opens with its "Exam Relevance" box, then "Section 1" … "Section 8" (box = "Exam relevance" part; sections as parts titled from their own names in sentence case, "&" → "and", em dashes → a colon). The chapter's title and contents page is not copied.
- **Additional topics** (`extra: true`), title = the text after "Addendum 14.N — ", exactly as printed (em dash → colon in titles). Each addendum's own headings (The Method, Derivation, Worked Examples, Practice Exercises, Pitfalls, Cheat Sheet Box …) are its parts, headings in sentence case. Its link line (e.g. "extends Subtopic 01 Procedure (C)") stays in its first lines, reworded to "Topic 0N".
- **Supplement / Additional Topics headings** ("Chapter 14: … — Supplement", "— Additional Topics") are not copied; their opening paragraphs and tables (if any) become the next additional topic's first part, "Introduction", reworded only where they must ("Addendum 14.N" → "Additional topic X", "Subtopic 0N" → "Topic 0N", "the Supplement" → whichever it means, "Numbering continues …" → kept for Examples/Results, letters for topics); list each change.
- **Book numbering kept:** "Example S1", "Result 6", "Procedure (C)", "Figure 14.N" stay as printed; "Example N" of a topic → reworded to what the reader shows ("Topic 01’s third worked example"); "Section N" of the same topic → its part's name; another topic's "Section N" → "Topic 0N’s <part name> part"; NCERT example/exercise numbers copied as printed and listed; references to other chapters copied and listed.
- **Exam citations:** no exam years; shares and frequencies labelled "(the book’s estimate from past papers, not official figures)".
- **Additional A** = Addendum 14.1 "Probability with Permutation Counts" (pp. 1215–1220); **Additional B** = Addendum 14.2 "Inequality Bounds from the Axioms" (pp. 1220–1226; the supplement's "Cheat Sheet Box", p. 1225, is B's last part); **Additional C** = Addendum 14.3 "Selection and Arrangement in the Same Problem" (pp. 1227–1232; the Additional Topics part's opening on p. 1227, "Subtopics 01–03 and the Supplement … " with its table Addendum / Topic / NCERT source / Read after and "Numbering continues from the Supplement …", is C's "Introduction": the table a `table` block with "Addendum 14.N" → "Additional topic X" and "Subtopic 0N" → "Topic 0N"); **Additional D** = Addendum 14.4 "The Matching Problem, and Inclusion–Exclusion Past Three" (pp. 1232–1237; "Cheat Sheet Additions" and any closing note are D's last parts).
- Check the very start of p. 1215: if the supplement has an opening paragraph before Addendum 14.1, it is A's "Introduction".

## Page map (pp. 1188–1237). Confirm every boundary on the page images and report any difference.

| File (`content/textbooks/math-11-14/`) | Writer | Topics | Pages | Topic indexes | Numbered figures |
|---|---|---|---|---|---|
| `topics-01-03.ts` | mw141 | 01 Sample Space and Events; 02 Probability of Events and the Axiomatic Approach; 03 Computing Probabilities: Combinatorial Methods, Multi-Event Ad… (title as printed) | 1188–1197; 1197–1207; 1207–1214 | 0, 1, 2 | 14.1 (1195), 14.2 (1195), 14.3 (1199), 14.4 (1205), 14.5 (1213) |
| `extras-a-d.ts` | mw142 | Additional A–D | 1215–1237 | 3, 4, 5, 6 | 14.6 (1216), 14.7 (1221) |

The errata start on p. 1238: stop before them. Diagrams later in `lib/diagrams/mathematics-11-14.ts` (`'mathematics|11|14'`); key points in `lib/revise/keypoints-mathematics-11-14.ts`.
- **Figure ids:** `m11-14-fig-14.1` … `m11-14-fig-14.7`; any unnumbered drawing `m11-14-<topic n>-d<k>` (`01` … `03`, `A` … `D`).

## Probability notation (on top of Chapter 1's and Chapter 6's counting notation)
- <i>P</i>(<i>A</i>), <i>n</i>(<i>S</i>), <i>n</i>(<i>E</i>), <i>S</i>, <i>E</i>, <i>A</i>′ or <i>A</i><sup>c</sup> or "not <i>A</i>" exactly as printed; ∪, ∩, ⊆, ∅ as printed; <i>P</i>(<i>A</i> ∪ <i>B</i>) = <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) − <i>P</i>(<i>A</i> ∩ <i>B</i>) (keep short ones whole with no-break spaces where they fit a phone line).
- Probabilities stacked: <frac><num><i>n</i>(<i>E</i>)</num><den><i>n</i>(<i>S</i>)</den></frac>; ⁿCᵣ `<sup><i>n</i></sup><i>C</i><sub><i>r</i></sub>` and the stacked binomial `<binom>` exactly as Chapter 6 (read which the page prints); factorials as printed; odds "<i>a</i> ∶ <i>b</i>" with the ratio colon ∶.
- Sample spaces in braces {HH, HT, TH, TT} upright as printed; dice pairs such as (1, 2): short pairs kept whole with a no-break space after the comma.

## Figures
Placement as before (the `fig` block where the figure is called or its caption is printed; caption without "Figure N.N"). The drawings are made later by a diagram helper; you only place the `fig` blocks and report what each shows. Count the vector shapes on every one of your pages and report which hold a drawing, with what it shows.

## Your report
Save it to `/Users/nikhi/Developer/monk-books/math11/reports-1X/<your-name>.md` (X = the chapter), as Chapter 1's brief describes. No git commands that change anything; never use the Android emulator; no tsc, no jest, no eslint.
