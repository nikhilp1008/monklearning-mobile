# Brief: Mathematics Class 11, Chapter 5 Linear Inequalities, rebuilt word for word from the Master Reference book

The fifth Mathematics chapter. Chapters 1 Sets (0c9ae6f), 2 Relations and Functions (b8f7ec4), 3 Trigonometric Functions (26c5540) and 4 Complex Numbers (3863a5e) are finished and pushed. Chapter 6 is being written at the same time by other writers (MAC-BRIEF-M11-06.md): never touch its files.

**Read, in order:**
1. `/Users/nikhi/Developer/monk-books/math11/briefs/MAC-BRIEF-M11-01.md`, the whole file, and every file it tells you to read (FRACTIONS, NO EM DASHES, Mathematics notation, checking numbers, the diagram rules, the report, "Added after the first writer"). Its page map, file names, ids and indexes are replaced by this file. **Its layout of sub-topics ("Exam relevance" part, then one part per "Section N", titled from the section's own name in sentence case) is the layout of every topic here**, and its handling of addenda (Additional topics with the book's letters) is the layout of Additional A–F.
2. `/Users/nikhi/Developer/monk-books/math11/briefs/MAC-BRIEF-M11-04.md`: its "Lessons from Chapter 3's reviews and Android check" section. Every lesson holds here.
3. `/Users/nikhi/Developer/monk-books/math11/DECISIONS-M11.md` (items 10–24 hold the lessons of Chapters 2–4 and this chapter's layout, 21–22).
4. This file. **Where they disagree, this file wins.**

**Your closest models:** `content/textbooks/math-11-04/topic-07.ts` (a topic in the "Section N" form, with formula cards, legends, MCQ nudges) and `content/textbooks/math-11-02/extras-i-k.ts` (additional topics with letters). Read one before writing. The OLD Linear Inequalities chapter (`/Users/nikhi/Developer/monk-books/old/old-math-11-05-inequalities.ts`) is an earlier rewrite we are replacing: never copy from it.

## Lessons from Chapter 4 (on top of the earlier ones)
- A formula card's legend meaning never holds a comma clause or a colon (the card builder cuts there): "x = the unknown (a real number)", not "x = the unknown, a real number".
- Duplicate formula cards (the same formula as a card in two topics): keep both as the book prints them and LIST each pair; the founder picks one card each.
- Over-general rules ("always", "never", "every", "exactly two") that are false in a case the chapter itself covers: copy as printed and LIST with page and why.

## Where things are
Book `/Users/nikhi/Developer/monk-books/math11/math11.pdf` (October 2026 edition, 1260 pages, **PDF page = the bottom folio**). Text dump `math11/math11.txt` (maths scrambled): **read every formula, fraction, power, inequality sign, interval bracket and symbol from the page images** (Read tool on the PDF with `pages`; `pdftoppm -r 110 -f N -l N -png` only where unclear, then delete the PNG). **Never use `math11-aug22-OLD.pdf`.** Work folder `math11/work-<your-name>/`. Your file exists as an empty stub, already wired in.

## ERRATA (pp. 1238–1260)
Resolved entries are already in the text (copy the page as printed). Read the errata pages for Chapter 5 (p. 1244 lists them) yourself and report what they say for your pages, and anything on your pages that still looks like a defect.

## Layout (decisions 21–22)
- **Topics 01–04 are the book's Units 1–4; Topic 05 is the supplement's Unit 5.** "Unit N" → "Topic 0N" everywhere ("Unit 5 of the supplement" → "Topic 05"). Each Unit opens with its "Exam Relevance" box, then "Section 1" … "Section 8"; the box is the "Exam relevance" part, each section a part titled from its own name in sentence case, "&" → "and", em dashes → a colon ("Section 3: CBSE Board Derivation — Why an Inequality Is a Half-Plane" → "CBSE board derivation: why an inequality is a half-plane").
- p. 414 is the chapter's title and contents: not copied.
- **The supplement's opening (p. 451):** its heading "Chapter 5: Linear Inequalities — Supplement" is not copied. Its two introduction paragraphs ("The four units of this chapter give you …" to "… pointed at the places where JEE points it.") open **Topic 05's Exam relevance part, before the box text**, reworded only where they must be ("the fifth unit of the chapter plus three short extensions" → "Topic 05 plus Additional topics A to C"); list it.
- **"Unit 3, Section 5, Practice Exercise 3 — a boundary re-test" (p. 451, up to "… catches the whole mistake.") goes into Topic 03 (decision 22)**, as the last item of Topic 03's Practice exercises part, after the book's answers: a bold run-in heading "Practice exercise 3: a boundary re-test." then the text as printed. Writer mw52 copies it; mw53 does not.
- **Additional topics A–F** (`n: 'A'` … `'F'`, `extra: true`), title = the text after "Addendum X — ", exactly as printed (curly quotes kept). Parts: the addendum's own headings in sentence case (its opening paragraphs before the first heading are a first part titled as the book's first box or, if none, "Introduction").
  - **The Additional Topics part's opening (p. 476, "Unit 5 of the supplement taught you …" to "… one step earlier.")** is Additional D's first part, "Introduction"; its heading "Chapter 5: Linear Inequalities — Additional Topics" is not copied; "Numbering continues from Addendum C" → "The letters continue from Additional topic C"; list it.
  - **"Chapter 5 Supplement — Everything on One Screen" (p. 475)** is the LAST part of Additional C, titled "Everything on one screen"; **"Chapter 5 Additions — Everything on One Screen" (p. 488)** is the last part of Additional F, titled the same. Their tables are `table` blocks.
- **Cross-references:** "Unit N" → "Topic 0N"; "Addendum X" → "Additional topic X"; "the supplement" → "Topic 05" or "Topic 05 and Additional topics A to C", whichever it means (list each); "Section N" of the same unit → its part's name; another unit's "Section N" → "Topic 0N’s <part name> part" (open the other writer's file or use the book's section name in sentence case); "Procedure A/B …", "Example N" keep the book's letters and numbers; "Figure 5.N" stays; NCERT example/exercise numbers copied as printed and listed; references to other chapters copied and listed.
- **Exam citations:** no exam years; shares and frequencies labelled "(the book’s estimate from past papers, not official figures)".

## Page map (pp. 415–489). Confirm every boundary on the page images and report any difference.

| File (`content/textbooks/math-11-05/`) | Writer | Topics | Pages | Topic indexes | Numbered figures |
|---|---|---|---|---|---|
| `topics-01-02.ts` | mw51 | 01 Linear Inequalities in One Variable; 02 Linear Inequalities in Two Variables | 415–424; 425–435 | 0, 1 | 5.1 (416), 5.2 (419), 5.3 (427), 5.4 (429), 5.5 (431) |
| `topics-03-04.ts` | mw52 | 03 Applications & Word Problems of Linear Inequalities (+ the p. 451 re-test); 04 Non-Linear Inequalities: The Wavy-Curve Method | 436–442; 443–450 | 2, 3 | 5.6 (447) |
| `topic-05.ts` | mw53 | 05 Modulus Inequalities & Case Analysis (+ the p. 451 introduction) | 451–465 | 4 | 5.7 (456), 5.8 (459) |
| `extras-a-f.ts` | mw54 | Additional A–F | 466–489 | 5–10 | 5.9 (466), 5.10 (469), 5.11 (472) |

Titles are plain text, as printed ("&" stays in titles). Chapter 6 starts on p. 490: stop before it. The chapter file `content/textbooks/math-11-05-inequalities.ts` joins the four files: never edit it. Diagrams `lib/diagrams/mathematics-11-05.ts` (`DIAGRAMS_MATHEMATICS_11_05`, `'mathematics|11|5'`). Key points `lib/revise/keypoints-mathematics-11-05.ts`.
- **Figure ids:** `m11-05-fig-5.1` … `m11-05-fig-5.11`; any unnumbered drawing `m11-05-<topic n>-d<k>` (`01` … `05`, `A` … `F`; k from 1 in page order). Count the vector shapes on every one of your pages and report which hold a drawing, with what it shows (number line, half-plane region, wavy curve, sign table drawn as a picture).

## Inequality notation (on top of Chapter 1's)
- Signs as printed: <, >, ≤, ≥, ≠, ≶ (U+2276) where the book uses it; never "<=", ">=". Always put a space after "<" (as the book does), so it is never read as the start of a tag: "<i>x</i> < 5", "−2 < <i>x</i> ≤ 3".
- Intervals as printed: (<i>a</i>, <i>b</i>], [2, ∞), (−∞, −3) ∪ (1, 5]; ℝ, ℕ, ℤ as printed; ∅.
- Modulus |<i>x</i> − 2|; roots √ with a bracket over more than one term.
- Variables italic (<i>x</i>, <i>y</i>, <i>k</i>); a sign table drawn as text is a `table` block; the wavy curve itself is a figure.
- Fractions stacked everywhere, also inside inequalities: <frac><num><i>x</i> − 1</num><den><i>x</i> + 2</den></frac> ≥ 0.

## Figures
Placement as before (the `fig` block where the figure is called or its caption is printed; caption without "Figure 5.N"). The drawings are made later by a diagram helper; you only place the `fig` blocks and report what each shows.

## Writers' test run (once, when done; again only if it failed)
`npx jest content/textbooks/__tests__/book-rules content/textbooks/__tests__/book-chapters content/textbooks/__tests__/display-fit -t "Mathematics 11 Chapter 5|the text of every book chapter|fits"`, plus `npx eslint <your file>`. Failures naming "Mathematics 11 Ch 5" and your topic are yours (an over-wide piece must be fixed with `<br>`); topics out of order because other files are empty, a placeholder topic, and undrawn fig ids, are not. **No tsc, no whole test suite** (the Mac hangs). Never run git commands that change anything.
