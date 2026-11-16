# Mathematics Class 12: what every writer reads first

Class 12 Maths is rebuilt word for word from the company's own Drona Master Reference, exactly as Class 11 was (all 14
chapters of Class 11 are done and pushed: those files are your models).

**Read, in order:**
1. `/Users/nikhi/Developer/monk-books/math11/briefs/MAC-BRIEF-M11-01.md`, the whole file, and every file it tells you to read
   (FRACTIONS, NO EM DASHES, Mathematics notation, checking numbers, the diagram rules, the report, "Added after the first
   writer"). Its page map, file names, ids and indexes are replaced by your chapter's brief.
2. `/Users/nikhi/Developer/monk-books/math11/briefs/MAC-BRIEF-M11-14.md`, its "Lessons from Chapters 5–8" list (every bullet
   holds here); `MAC-BRIEF-M11-04.md` "Lessons from Chapter 3's reviews and Android check"; `MAC-BRIEF-M11-05.md` "Lessons from
   Chapter 4"; `MAC-BRIEF-M11-06.md` "Counting notation"; `MAC-BRIEF-M11-07.md` "Binomial notation".
3. `/Users/nikhi/Developer/monk-books/math11/DECISIONS-M11.md` (items 10–42) and `/Users/nikhi/Developer/monk-books/math12/DECISIONS-M12.md`.
4. Your chapter's brief. **Where they disagree, your chapter's brief wins, then DECISIONS-M12.**

## Where things are
Book `/Users/nikhi/Developer/monk-books/math12/math12.pdf` (October 2026 edition, 879 pages, **PDF page = the bottom folio**).
Text dump `math12/math12.txt` (maths scrambled): **read every formula, fraction, power, subscript and symbol from the page
images** (Read tool on the PDF with `pages`; `pdftoppm -r 110 -f N -l N -png` into your work folder only where unclear, then
delete the PNG). **Never use `/Users/nikhi/Developer/monk-learning-app/Drona_Class12_Mathematics_Master_Reference.pdf`**
(an older printing). Work folder `/Users/nikhi/Developer/monk-books/math12/work-<your-name>/`. Figure drawings often sit a page
AFTER their caption.

## Your file
Your file exists as an empty stub in the repo, already wired into its chapter: replace its contents
(`import type { Topic } from '@/lib/textbooks';` … `export const TOPICS: Topic[] = [...]`, with a header comment as in the
models). **Edit only your own file.** Never touch another writer's file, the chapter file, the tests, or anything else in
the repo. The old Class 12 chapters (`/Users/nikhi/Developer/monk-books/old/old-math-12-*.ts`) are an earlier loose rewrite we are
replacing: never copy from them.

## ERRATA (pp. 876–879)
Resolved entries are already in the text (copy the page as printed). Read the errata pages for your chapter yourself and
report what they say for your pages, and anything on your pages that still looks like a defect.

## Standing rules (repeated because they matter most)
- Every fraction stacked `<frac><num>…</num><den>…</den></frac>`; never a/b on one line (a slash only inside a raised run,
  x<sup>1/2</sup>); never a fraction inside a fraction's numerator (write the single fraction it equals, and list it).
- **No em dashes** anywhere in the text (colon, commas, brackets or a full stop instead); titles: em dash → colon.
- `const NB = ' ';` (escaped), never a plain space and never the letters "&nbsp;". Glue short conditions, coordinate
  pairs, "|…|" (put U+2060 after an opening bar), "sin<sup>−1</sup>" with its argument where short.
- Any string using `${…}` in backticks. Tags, titles and part titles plain text (no `<sup>`/`<sub>`).
- **Exam citations:** no exam years; shares and frequencies labelled "(the book’s estimate from past papers, not official
  figures)". Over-general claims, false statements, syllabus/NCERT/CBSE claims: copy as printed and LIST with page and why.
- **No git commands that change anything; never use the Android emulator; no tsc; no whole test suite** (the Mac hangs).

## Writers' test run (once, when done; again only if it failed)
`npx jest content/textbooks/__tests__/book-rules content/textbooks/__tests__/book-chapters content/textbooks/__tests__/display-fit -t "Mathematics 12 Chapter N|the text of every book chapter|fits"`
(N = your chapter), plus `npx eslint <your file>`. Failures naming your chapter and topic are yours (an over-wide piece is
fixed with `<br>`); topics out of order or a placeholder because other files are still empty, and undrawn fig ids, are not.

## Your report
Save it to `/Users/nikhi/Developer/monk-books/math12/reports-0N/<your-name>.md`, as MAC-BRIEF-M11-01 describes: page boundaries
confirmed, every change from the printed words with page and why, every listed claim, figures (with what each shows and the
vector-shape count per page), errata, test results. Reply with a short summary.
