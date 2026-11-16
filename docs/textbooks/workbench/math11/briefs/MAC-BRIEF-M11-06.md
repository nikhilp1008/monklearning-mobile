# Brief: Mathematics Class 11, Chapter 6 Permutations and Combinations, rebuilt word for word from the Master Reference book

The sixth Mathematics chapter. Chapters 1–4 are finished and pushed. Chapter 5 is being written at the same time by other writers (MAC-BRIEF-M11-05.md): never touch its files.

**Read, in order:**
1. `/Users/nikhi/Developer/monk-books/math11/briefs/MAC-BRIEF-M11-01.md`, the whole file, and every file it tells you to read (FRACTIONS, NO EM DASHES, Mathematics notation, checking numbers, the diagram rules, the report, "Added after the first writer"). Its page map, file names, ids and indexes are replaced by this file. **Its layout of sub-topics ("Exam relevance" part, then one part per "Section N", titled from the section's own name in sentence case) is the layout of every topic here**, and its handling of addenda (Additional topics with letters) is the layout of Additional A–D.
2. `/Users/nikhi/Developer/monk-books/math11/briefs/MAC-BRIEF-M11-04.md`: its "Lessons from Chapter 3's reviews and Android check" section. Every lesson holds here.
3. `/Users/nikhi/Developer/monk-books/math11/briefs/MAC-BRIEF-M11-05.md`: its "Lessons from Chapter 4" section. It holds here too.
4. `/Users/nikhi/Developer/monk-books/math11/DECISIONS-M11.md` (items 10–24; this chapter's layout is 23, its binomial notation 24).
5. This file. **Where they disagree, this file wins.**

**Your closest models:** `content/textbooks/math-11-04/topic-07.ts` (a topic in the "Section N" form, with formula cards, legends, MCQ nudges) and `content/textbooks/math-11-02/extras-i-k.ts` (additional topics with letters). Read one before writing. The OLD Permutations chapter (`/Users/nikhi/Developer/monk-books/old/old-math-11-06-permutations.ts`) is an earlier rewrite we are replacing: never copy from it.

## Where things are
Book `/Users/nikhi/Developer/monk-books/math11/math11.pdf` (October 2026 edition, 1260 pages, **PDF page = the bottom folio**). Text dump `math11/math11.txt` (maths scrambled; it prints the stacked binomial as "(𝑛𝑟)" and ⁿCᵣ as "𝑛 𝐶𝑟"): **read every formula, fraction, binomial, factorial, power, subscript and symbol from the page images** (Read tool on the PDF with `pages`; `pdftoppm -r 110 -f N -l N -png` only where unclear, then delete the PNG). **Never use `math11-aug22-OLD.pdf`.** Work folder `math11/work-<your-name>/`. Your file exists as an empty stub, already wired in.

## ERRATA (pp. 1238–1260)
Resolved entries are already in the text (copy the page as printed). Read the errata pages for Chapter 6 (p. 1245 lists them) yourself and report what they say for your pages, and anything on your pages that still looks like a defect.

## Layout (decision 23)
- **Topics 01–05 are the book's Subtopics 01–05; Topic 06 is the supplement's Subtopic 06.** "Subtopic 0N" → "Topic 0N" everywhere. Each opens with its "Exam Relevance" box, then "Section 1" … "Section 8"; the box is the "Exam relevance" part, each section a part titled from its own name in sentence case, "&" → "and", "/" kept ("CBSE Board Proofs / Key Procedures" → "CBSE board proofs / key procedures"), em dashes → a colon.
- Numbered sub-headings inside a section ("3.4 …") keep their numbers as printed (bold run-in heading or the model files' sub-heading form), so references to them stay readable.
- pp. 490–491 top are the chapter's title and contents: not copied. Subtopic 01 starts on p. 491.
- **The supplement (pp. 537–557):** its heading "Chapter 6: Permutations and Combinations — Supplement" is not copied; Topic 06 starts with its Exam Relevance box. The paragraph after the box ("Three earlier places in this chapter have pointed at this subtopic …") belongs to the Exam relevance part, after the box text, unless the page puts it under "Section 1"; check.
- **Additional topics A–D are the book's Addenda 07A–07D** (`n: 'A'` … `'D'`, `extra: true`), title = the text after "Addendum 07X — ", exactly as printed. Each addendum's "Extends Subtopic 05 §3.4 …" line, its Exam Relevance box and its own headings (method, worked examples, practice …) are its parts, in the book's words, headings in sentence case.
  - **The Additional Topics part's opening (p. 558, "Subtopics 01–06 cover the NCERT syllabus …" to "… mean the same thing.", and its table Section / Topic / Read after)** is Additional A's first part, "Introduction"; its heading is not copied; the table is a `table` block, its "Section" column "07A" → "A" (header "Additional topic"), its "Read after" column in our names ("Subtopic 05 §3.4" → "Topic 05, 3.4"); "numbered on from Subtopic 06" → "lettered A to D after Topic 06". List each change.
- **Cross-references:** "Subtopic 0N" → "Topic 0N"; "Addendum 07X" / "07X" → "Additional topic X"; "the Supplement" → "Topic 06"; "Section N" / "§N" of the same subtopic → its part's name ("the Worked examples part"); another subtopic's "§N" → "Topic 0N’s <part name> part" and its "§3.4" → "Topic 0N’s <part name> part, item 3.4" (open the other writer's file, or use the book's section name in sentence case); "§5 Q4" → "Topic 0N’s Practice exercises part, question 4"; "Procedure A …", "Example N" keep the book's letters and numbers; "Figure 6.N" stays; NCERT example/exercise numbers ("Example 22", "Miscellaneous Exercise Q4") copied as printed and listed; references to other chapters copied and listed.
- **Exam citations:** no exam years; shares and frequencies labelled "(the book’s estimate from past papers, not official figures)".

## Page map (pp. 491–579). Confirm every boundary on the page images and report any difference.

| File (`content/textbooks/math-11-06/`) | Writer | Topics | Pages | Topic indexes | Numbered figures |
|---|---|---|---|---|---|
| `topics-01-02.ts` | mw61 | 01 Fundamental Principle of Counting and Factorial; 02 Permutations | 491–501; 502–512 | 0, 1 | 6.1 (492), 6.2 (495), 6.3 (504), 6.4 (506), 6.5 (509) |
| `topics-03-05.ts` | mw62 | 03 Combinations; 04 Total Selections, Grouping & Distribution (Stars and Bars); 05 Counting Applications & Advanced Tools | 513–521; 522–529; 530–536 | 2, 3, 4 | 6.6 (515), 6.7 (524), 6.8 (524), 6.9 (532) |
| `topic-06.ts` | mw63 | 06 Inclusion–Exclusion and Onto Distributions | 537–557 | 5 | 6.10 (540), 6.11 (552) |
| `extras-a-d.ts` | mw64 | Additional A–D | 558–579 | 6–9 | (unnumbered drawings, e.g. lattice grids) |

Titles are plain text, as printed ("&" stays in titles; the en dash in "Inclusion–Exclusion" stays). Chapter 7 starts on p. 580: stop before it. The chapter file `content/textbooks/math-11-06-permutations.ts` joins the four files: never edit it. Diagrams `lib/diagrams/mathematics-11-06.ts` (`DIAGRAMS_MATHEMATICS_11_06`, `'mathematics|11|6'`). Key points `lib/revise/keypoints-mathematics-11-06.ts`.
- **Figure ids:** `m11-06-fig-6.1` … `m11-06-fig-6.11`; any unnumbered drawing `m11-06-<topic n>-d<k>` (`01` … `06`, `A` … `D`; k from 1 in page order). Count the vector shapes on every one of your pages and report which hold a drawing, with what it shows.

## Counting notation (on top of Chapter 1's)
- **Stacked binomial coefficient** (n over r in tall round brackets, as printed): `<binom><num><i>n</i></num><den><i>r</i></den></binom>`; the reader draws it stacked with the brackets (decision 24). Never write it as "(n r)", "C(n, r)" or a fraction. The brackets are part of the binomial: never add your own round brackets around it. A product of binomials is written side by side: `<binom><num>5</num><den>2</den></binom><binom><num>4</num><den>2</den></binom>`.
- **ⁿCᵣ, ⁿPᵣ** as printed: `<sup><i>n</i></sup><i>C</i><sub><i>r</i></sub>` (read on the page whether C and P are italic or upright, and keep it the same everywhere; say which). With numbers: `<sup>8</sup><i>C</i><sub>3</sub>`.
- Factorials <i>n</i>!, (<i>n</i> − <i>r</i>)!; a ratio of factorials is a stacked fraction: <frac><num><i>n</i>!</num><den><i>r</i>!(<i>n</i> − <i>r</i>)!</den></frac>.
- Named counts as printed: <i>D</i><sub><i>n</i></sub> (derangements), <i>S</i>(<i>n</i>, <i>k</i>) (Stirling), <i>d</i>(<i>N</i>), <i>σ</i>(<i>N</i>), ⌊ ⌋, |<i>A</i> ∪ <i>B</i>|, ⋃ with its limits as printed (a big operator with limits: write the limits as sub/superscripts on it).
- Words in a word-arrangement question (MATHS, AGAIN, EXAMINATION, DELHI) upright capitals as printed.

## Figures
Placement as before (the `fig` block where the figure is called or its caption is printed; caption without "Figure 6.N"). The drawings are made later by a diagram helper; you only place the `fig` blocks and report what each shows.

## Writers' test run (once, when done; again only if it failed)
`npx jest content/textbooks/__tests__/book-rules content/textbooks/__tests__/book-chapters content/textbooks/__tests__/display-fit -t "Mathematics 11 Chapter 6|the text of every book chapter|fits"`, plus `npx eslint <your file>`. Failures naming "Mathematics 11 Ch 6" and your topic are yours (an over-wide piece must be fixed with `<br>`); topics out of order because other files are empty, a placeholder topic, and undrawn fig ids, are not. If a test rejects `<binom>`, report it and carry on (the coordinator is adding it to the reader). **No tsc, no whole test suite** (the Mac hangs). Never run git commands that change anything.
