# Brief: Mathematics Class 11, Chapter 8 Sequences and Series, rebuilt word for word from the Master Reference book

The eighth Mathematics chapter. Chapters 1–6 are finished and pushed. Chapter 7 is being written at the same time by other writers (MAC-BRIEF-M11-07.md): never touch its files.

**Read, in order:**
1. `/Users/nikhi/Developer/monk-books/math11/briefs/MAC-BRIEF-M11-01.md`, the whole file, and every file it tells you to read (FRACTIONS, NO EM DASHES, Mathematics notation, checking numbers, the diagram rules, the report, "Added after the first writer"). Its page map, file names, ids and indexes are replaced by this file. Its handling of addenda (Additional topics with the book's letters) is the layout of Additional A–G.
2. `/Users/nikhi/Developer/monk-books/math11/briefs/MAC-BRIEF-M11-03.md`, its "Section headings in Topics 01–06" (the numbered-section form: part titles are the book's own section names in sentence case); `MAC-BRIEF-M11-04.md`, its "Lessons from Chapter 3's reviews and Android check"; `MAC-BRIEF-M11-05.md`, its "Lessons from Chapter 4"; `MAC-BRIEF-M11-07.md`, its "Lessons from Chapters 5–6". All hold here.
3. `/Users/nikhi/Developer/monk-books/math11/DECISIONS-M11.md` (items 10–29; this chapter's layout is 29).
4. This file. **Where they disagree, this file wins.**

**Your closest models:** `content/textbooks/math-11-05/topics-01-02.ts` and `topic-05.ts` (Units as topics, formula cards, legends, MCQ nudges, a supplement introduction opening a topic) and `content/textbooks/math-11-05/extras-a-f.ts` (lettered additional topics with Introduction and closing parts). Read one before writing. The OLD Sequences and Series chapter (`/Users/nikhi/Developer/monk-books/old/old-math-11-08-sequences.ts`) is an earlier rewrite we are replacing: never copy from it.

## Where things are
Book `/Users/nikhi/Developer/monk-books/math11/math11.pdf` (October 2026 edition, 1260 pages, **PDF page = the bottom folio**). Text dump `math11/math11.txt` (maths scrambled): **read every formula, fraction, power, subscript, sum and symbol from the page images** (Read tool on the PDF with `pages`; `pdftoppm -r 110 -f N -l N -png` only where unclear, then delete the PNG). **Never use `math11-aug22-OLD.pdf`.** Work folder `math11/work-<your-name>/`. Your file exists as an empty stub, already wired in. Figure drawings often sit a page AFTER their caption.

## ERRATA (pp. 1238–1260)
Resolved entries are already in the text (copy the page as printed). Read the errata pages for Chapter 8 yourself and report what they say for your pages, and anything on your pages that still looks like a defect.

## Layout (decision 29)
- **Topics 01–08 are the book's Units 1–8; Topic 09 is the supplement's Unit 9** ("Unit 9 — Growth, Decay and the Product of a GP", pp. 742–757). "Unit N" → "Topic 0N" everywhere. **This chapter's units use numbered sections ("1. Exam Relevance", "2. …"):** the first is the "Exam relevance" part, each next numbered section a part titled from its own name in sentence case, "&" → "and", em dashes → a colon (the numbered-section form of Chapter 3's brief). Check the page images for each unit's own section names.
- pp. 675–676 are the chapter's title and contents: not copied. Unit 1 starts on p. 677.
- **The supplement's opening (p. 742, "This supplement adds worked treatments …" to the notation paragraph "Notation continues from Units 1–8 …")**: its heading is not copied; its paragraphs open **Topic 09's Exam relevance part, before the box text**, reworded only where they must be ("one new full-spine unit — Unit 9 — … followed by five short addenda, each of which extends the unit named in its heading" → "Topic 09 … followed by Additional topics A to E, each of which extends the topic named in its heading"); list it.
- **Additional topics A–G** (`n: 'A'` … `'G'`, `extra: true`), title = the text after "Addendum X — ", exactly as printed. Each keeps its book link ("extends Unit 4" → "extends Topic 04").
  - **The supplement's closing table (p. 771, "Supplement item / Reads as an extension of / What it delivers")** is the LAST part of Additional E, titled as the book titles it (or "How the supplement fits" if it has no title), a `table` block with "Unit N, Sections …" → "Topic 0N, <part names or numbers>", "Addendum X" → "Additional topic X"; list each change.
  - **The Additional Topics part's opening (p. 772, "Units 1-8 and the Supplement (Unit 9, Addenda A to E) cover the whole NCERT syllabus …")** is Additional F's first part, "Introduction"; its heading is not copied; "Units 1-8 and the Supplement (Unit 9, Addenda A to E)" → "Topics 01–09 and Additional topics A to E"; "This addendum" → "These two additional topics" (or as fits); list it. NCERT claims in it are copied as printed and listed.
  - Any "Everything on one screen"-type closing summary is the last part of the last additional topic of its part (E or G).
- **Cross-references:** "Unit N" → "Topic 0N"; "Unit 1, Procedure 4", "Unit 1, Example 3", "Unit 2, Derivation 3" → "Topic 01, Procedure 4", "Topic 01’s third worked example" (example numbers reworded to what the reader shows, as in Chapters 2–6; procedure and derivation numbers kept); "Section N" of the same unit → its part's name; another unit's "Section N" → "Topic 0N’s <part name> part"; "Addendum X" → "Additional topic X"; "the Supplement" → "Topic 09 and Additional topics A to E" or whichever it means; "Figure 8.N" stays; NCERT example/exercise numbers copied as printed and listed; references to other chapters copied and listed.
- **Exam citations:** no exam years; shares and frequencies labelled "(the book’s estimate from past papers, not official figures)".

## Page map (pp. 677–788). Confirm every boundary on the page images and report any difference.

| File (`content/textbooks/math-11-08/`) | Writer | Topics | Pages | Topic indexes | Numbered figures |
|---|---|---|---|---|---|
| `topics-01-02.ts` | mw81 | 01 Foundations: Sequences and Series; 02 Arithmetic Progression (AP) | 677–682; 683–693 | 0, 1 | 8.1 (677), 8.2 (684) |
| `topics-03-04.ts` | mw82 | 03 Geometric Progression (GP); 04 Harmonic Progression (HP) and Harmonic Mean | 694–704; 705–711 | 2, 3 | 8.3 (695), 8.4 (706) |
| `topics-05-07.ts` | mw83 | 05 Relationship Between AM, GM and HM; 06 Arithmetico-Geometric Progression (AGP); 07 Special Series Summation | 712–718; 719–725; 726–733 | 4, 5, 6 | 8.5 (713), 8.6 (720), 8.7 (727) |
| `topics-08-09.ts` | mw84 | 08 Telescoping Series & Partial Fractions; 09 Growth, Decay and the Product of a GP (+ the p. 742 introduction) | 734–741; 742–757 | 7, 8 | 8.8 (735), 8.9 (743), 8.10 (745) |
| `extras-a-g.ts` | mw85 | Additional A–E (pp. 758–771, + the p. 771 closing table), F–G (pp. 772–788, + the p. 772 introduction) | 758–788 | 9–15 | 8.11 (761) |

Titles are plain text, as printed ("&" stays). Chapter 9 starts on p. 789: stop before it. The chapter file `content/textbooks/math-11-08-sequences.ts` joins the five files: never edit it. Diagrams `lib/diagrams/mathematics-11-08.ts` (`DIAGRAMS_MATHEMATICS_11_08`, `'mathematics|11|8'`). Key points `lib/revise/keypoints-mathematics-11-08.ts`.
- **Figure ids:** `m11-08-fig-8.1` … `m11-08-fig-8.11`; any unnumbered drawing `m11-08-<topic n>-d<k>` (`01` … `09`, `A` … `G`; k from 1 in page order). Count the vector shapes on every one of your pages and report which hold a drawing, with what it shows.

## Sequences notation (on top of Chapter 1's)
- Terms and sums: <i>a</i><sub><i>n</i></sub>, <i>t</i><sub><i>n</i></sub>, <i>S</i><sub><i>n</i></sub>, <i>S</i><sub>∞</sub>, <i>T</i><sub><i>k</i></sub>; first term <i>a</i>, common difference <i>d</i>, common ratio <i>r</i>, last term <i>l</i>; means <i>A</i>, <i>G</i>, <i>H</i> italic.
- **Sums** Σ with limits as printed: `∑<sub><i>r</i>=1</sub><sup><i>n</i></sup> <i>r</i><sup>2</sup>` (the reader stacks a sub and sup on one base); closed forms stacked: <frac><num><i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)</num><den>6</den></frac>; a fraction in an exponent keeps the slash only inside the raised run (<i>r</i><sup><i>n</i>(<i>n</i>−1)/2</sup>), otherwise stacked.
- Sequences in braces {<i>a</i><sub><i>n</i></sub>}, "⋯" / "…" as printed; limits "lim" upright with its subscript; ∞ as printed.
- Recurrences <i>a</i><sub><i>n</i>+1</sub> = 3<i>a</i><sub><i>n</i></sub> + 1 (sub-runs whole); AM-GM inequality signs as printed.

## Figures
Placement as before (the `fig` block where the figure is called or its caption is printed; caption without "Figure 8.N"). The drawings are made later by a diagram helper; you only place the `fig` blocks and report what each shows.

## Writers' test run (once, when done; again only if it failed)
`npx jest content/textbooks/__tests__/book-rules content/textbooks/__tests__/book-chapters content/textbooks/__tests__/display-fit -t "Mathematics 11 Chapter 8|the text of every book chapter|fits"`, plus `npx eslint <your file>`. Failures naming "Mathematics 11 Ch 8" and your topic are yours (an over-wide piece must be fixed with `<br>`); topics out of order because other files are empty, a placeholder topic, and undrawn fig ids, are not. **No tsc, no whole test suite** (the Mac hangs). Never run git commands that change anything.
