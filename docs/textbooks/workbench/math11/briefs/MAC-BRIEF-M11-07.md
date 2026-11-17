# Brief: Mathematics Class 11, Chapter 7 Binomial Theorem, rebuilt word for word from the Master Reference book

The seventh Mathematics chapter. Chapters 1–6 are finished and pushed (Ch 5 e6e9f33, Ch 6 a5fea1f). Chapter 8 is being written at the same time by other writers (MAC-BRIEF-M11-08.md): never touch its files.

**Read, in order:**
1. `/Users/nikhi/Developer/monk-books/math11/briefs/MAC-BRIEF-M11-01.md`, the whole file, and every file it tells you to read (FRACTIONS, NO EM DASHES, Mathematics notation, checking numbers, the diagram rules, the report, "Added after the first writer"). Its page map, file names, ids and indexes are replaced by this file. **Its layout of sub-topics ("Exam relevance" part, then one part per "Section N", titled from the section's own name in sentence case) is the layout of every topic here**, and its handling of addenda (Additional topics with the book's letters) is the layout of Additional A–G.
2. `/Users/nikhi/Developer/monk-books/math11/briefs/MAC-BRIEF-M11-04.md`, its "Lessons from Chapter 3's reviews and Android check"; `MAC-BRIEF-M11-05.md`, its "Lessons from Chapter 4"; `MAC-BRIEF-M11-06.md`, its "Counting notation" (ⁿCᵣ and the stacked binomial). All hold here.
3. `/Users/nikhi/Developer/monk-books/math11/DECISIONS-M11.md` (items 10–29; this chapter's layout is 29).
4. This file. **Where they disagree, this file wins.**

**Your closest models:** `content/textbooks/math-11-06/topics-03-05.ts` (topics in the "Section N" form with ⁿCᵣ, `<binom>`, formula cards, legends, MCQ nudges) and `content/textbooks/math-11-06/extras-a-d.ts` (additional topics with letters and an Introduction part). Read one before writing. The OLD Binomial Theorem chapter (`/Users/nikhi/Developer/monk-books/old/old-math-11-07-binomial.ts`) is an earlier rewrite we are replacing: never copy from it.

## Lessons from Chapters 5–6 (on top of the earlier ones)
- **A worked-example step that leads into the boxed answer ends with the result**, never with a bare colon ("Union of the branches:" followed by the next step showed nothing on the phone). Write "Union of the branches: <i>x</i> ∈ [3, 19)." and keep the answer box as well. **Exception:** when that step is the LAST step, the answer box alone carries the result (the check "prints an answer once" fails if the last step ends with the answer box's text); the rule is for a step followed by a Check, a remark or another step.
- **Template literals:** any string that uses `${…}` must be in backticks; one in single quotes showed the raw "${KN}" on the phone.
- **Example tags and part titles are plain text:** no `<sup>`/`<sub>` in them ("nCr" in a tag is fine).
- A no-break space (U+00A0) inside a two-argument name keeps it whole: "C(<i>n</i>,&nbsp;<i>r</i>)" as `C(<i>n</i>, <i>r</i>)`; before a closing ■ use a no-break space too.
- Over-general claims, false statements about other topics ("never named", "three lines" when the table has six), and syllabus claims: copy as printed and LIST with page and why (the reviewers fix them).

## Where things are
Book `/Users/nikhi/Developer/monk-books/math11/math11.pdf` (October 2026 edition, 1260 pages, **PDF page = the bottom folio**). Text dump `math11/math11.txt` (maths scrambled; it prints the stacked binomial as "(𝑛𝑟)" and ⁿCᵣ as "𝑛 𝐶𝑟"): **read every formula, fraction, binomial, power, subscript and symbol from the page images** (Read tool on the PDF with `pages`; `pdftoppm -r 110 -f N -l N -png` only where unclear, then delete the PNG). **Never use `math11-aug22-OLD.pdf`.** Work folder `math11/work-<your-name>/`. Your file exists as an empty stub, already wired in. Figure drawings often sit a page AFTER their caption.

## ERRATA (pp. 1238–1260)
Resolved entries are already in the text (copy the page as printed). Read the errata pages for Chapter 7 (p. 1246 lists them) yourself and report what they say for your pages, and anything on your pages that still looks like a defect.

## Layout (decision 29)
- **Topics 01–07 are the book's Subtopics 01–07; Topic 08 is the supplement's Subtopic 08** ("Subtopic 08 — Multisection of Binomial Series …", pp. 645–657), placed after Topic 07. "Subtopic 0N" / "Sub-0N" → "Topic 0N" everywhere. Each opens with its "Exam Relevance" box, then "Section 1" … "Section 8"; the box is the "Exam relevance" part, each section a part titled from its own name in sentence case, "&" → "and", em dashes → a colon.
- pp. 580–581 top are the chapter's title and contents: not copied. Subtopic 01 starts on p. 581.
- **Additional topics A–G** (`n: 'A'` … `'G'`, `extra: true`), title = the text after "Addendum X to Subtopic 0N: " (A–C) or "Addendum X — " (D–G), exactly as printed.
  - **The supplement's opening (p. 624: "This supplement adds four pieces of machinery …" and its table Piece / Attaches to / What it gives you)** is Additional A's first part, "Introduction"; its heading "Chapter 7: Binomial Theorem — Supplement" is not copied; the table is a `table` block with "Addendum A" → "Additional topic A", "Sub-0N" → "Topic 0N", "Subtopic 08" → "Topic 08"; the reading instruction "read each one immediately after the subtopic it names" stays as printed (it is still true: each says which topic it extends). List each change.
  - Each of A–C keeps its book link in its first lines (e.g. "This addendum extends Subtopic 01" → "This additional topic extends Topic 01"), so a reader knows where it belongs.
  - **The Additional Topics part's opening (p. 658, before "Addendum D")**, if any, is Additional D's first part, "Introduction"; its heading is not copied; "Numbering continues …" → "The letters continue from Additional topic C" (or the like); list it.
  - Any closing summary or table of a part ("Everything on one screen" or similar) is the LAST part of the last additional topic of that part (C or G).
- **Cross-references:** "Subtopic 0N" / "Sub-0N" → "Topic 0N"; "Addendum X" → "Additional topic X"; "the Supplement" → "Topic 08 and Additional topics A to C" or whichever it means (list each); "Section N" / "§N" of the same subtopic → its part's name; another subtopic's "§N" / "§3.4" → "Topic 0N’s <part name> part, item 3.4" (open the other writer's file, or use the book's section name in sentence case); "Procedure A …", "Example N" keep the book's letters and numbers; "Figure 7.N" stays; NCERT example/exercise numbers copied as printed and listed; references to other chapters ("Chapter 4", "Chapter 6") copied and listed.
- **Exam citations:** no exam years; shares and frequencies labelled "(the book’s estimate from past papers, not official figures)".

## Page map (pp. 581–674). Confirm every boundary on the page images and report any difference.

| File (`content/textbooks/math-11-07/`) | Writer | Topics | Pages | Topic indexes | Numbered figures |
|---|---|---|---|---|---|
| `topics-01-02.ts` | mw71 | 01 Binomial Expansion and Pascal’s Triangle; 02 General, Middle and Independent Terms | 581–589; 590–596 | 0, 1 | 7.1 (582) |
| `topics-03-05.ts` | mw72 | 03 Greatest Term and Greatest Binomial Coefficient; 04 Properties of Binomial Coefficients and Summation of Series; 05 Binomial Theorem for Any Index and Approximations | 597–602; 603–608; 609–613 | 2, 3, 4 | |
| `topics-06-08.ts` | mw73 | 06 Applications — Divisibility, Remainders, Last Digits & Integer Parts (title as printed, em dash → colon); 07 The Multinomial Theorem; 08 Multisection of Binomial Series: Roots of Unity and Complex … (as printed) | 614–618; 619–623; 645–657 | 5, 6, 7 | 7.5 (646) |
| `extras-a-c.ts` | mw74 | Additional A–C (+ the p. 624 introduction) | 624–644 | 8, 9, 10 | 7.2 (625), 7.3 (625), 7.4 (632) |
| `extras-d-g.ts` | mw75 | Additional D–G (+ the p. 658 introduction) | 658–674 | 11–14 | |

Titles are plain text, as printed (em dashes in titles → a colon; "&" stays). Chapter 8 starts on p. 675: stop before it. The chapter file `content/textbooks/math-11-07-binomial.ts` joins the five files: never edit it. Diagrams `lib/diagrams/mathematics-11-07.ts` (`DIAGRAMS_MATHEMATICS_11_07`, `'mathematics|11|7'`). Key points `lib/revise/keypoints-mathematics-11-07.ts`.
- **Figure ids:** `m11-07-fig-7.1` … `m11-07-fig-7.5`; any unnumbered drawing `m11-07-<topic n>-d<k>` (`01` … `08`, `A` … `G`; k from 1 in page order). Count the vector shapes on every one of your pages and report which hold a drawing, with what it shows (Pascal's triangle is a drawing if the book draws it as one; if it is a typed table, it is a `table` block).

## Binomial notation (on top of Chapter 6's counting notation)
- **ⁿCᵣ** `<sup><i>n</i></sup><i>C</i><sub><i>r</i></sub>` (C italic, as Chapter 6); **the stacked binomial** `<binom><num>…</num><den>…</den></binom>` wherever the page prints n over r in round brackets; never "C(n, r)" unless the page prints it.
- **General term** <i>T</i><sub><i>r</i>+1</sub> = <sup><i>n</i></sup><i>C</i><sub><i>r</i></sub> <i>x</i><sup><i>n</i>−<i>r</i></sup><i>y</i><sup><i>r</i></sup>; powers with expressions as printed, a fraction in an exponent keeps the slash only inside the raised run (x<sup>1/2</sup>), otherwise stacked.
- **Sums** Σ with limits as printed: `∑<sub><i>r</i>=0</sub><sup><i>n</i></sup>` (the reader stacks a sub and sup on one base); products ∏ likewise.
- **Any index:** (1 + <i>x</i>)<sup><i>n</i></sup> with |<i>x</i>| < 1, the series with "⋯", factorial ratios stacked.
- **Roots of unity:** <i>ω</i> italic, <i>e</i><sup><i>iθ</i></sup>, cis as printed; Re, Im upright.
- **Integer part / fractional part:** [<i>x</i>] or ⌊<i>x</i>⌋, {<i>x</i>} as printed; "mod" upright, ≡ as printed.

## Figures
Placement as before (the `fig` block where the figure is called or its caption is printed; caption without "Figure 7.N"). The drawings are made later by a diagram helper; you only place the `fig` blocks and report what each shows.

## Writers' test run (once, when done; again only if it failed)
`npx jest content/textbooks/__tests__/book-rules content/textbooks/__tests__/book-chapters content/textbooks/__tests__/display-fit -t "Mathematics 11 Chapter 7|the text of every book chapter|fits"`, plus `npx eslint <your file>`. Failures naming "Mathematics 11 Ch 7" and your topic are yours (an over-wide piece must be fixed with `<br>`); topics out of order because other files are empty, a placeholder topic, and undrawn fig ids, are not. **No tsc, no whole test suite** (the Mac hangs). Never run git commands that change anything.
