# Brief: Mathematics Class 11, Chapter 2 Relations and Functions, rebuilt word for word from the Master Reference book

The second Mathematics chapter. Chapter 1 Sets is finished and pushed (0c9ae6f); this chapter is built the same way.

**Read, in order:**
1. `/Users/nikhi/Developer/monk-books/math11/briefs/MAC-BRIEF-M11-01.md`, the whole file, and every file it tells you to read. Everything in it holds for Chapter 2 (FRACTIONS, NO EM DASHES, Mathematics notation, checking numbers, the diagram rules, the report, "Added after the first writer") **except its page map, file names, ids and topic indexes**, which this file replaces.
2. `/Users/nikhi/Developer/monk-books/math11/DECISIONS-M11.md` (the founder's decisions for Mathematics).
3. This file. **Where they disagree, this file wins.**

**Your closest model is Chapter 1 Sets, already done in the house form:** `content/textbooks/math-11-01/*.ts`, `lib/diagrams/mathematics-11-01.ts`, `lib/revise/keypoints-mathematics-11-01.ts`. Read one topic file (`topics-1-2.ts`) before writing: copy its forms exactly (fractions, part titles, legends, example tags, MCQ nudges, the Exam relevance part). The OLD Relations and Functions chapter (`/Users/nikhi/Developer/monk-books/old/old-math-11-02-relations.ts`) is an earlier rewrite we are replacing: never copy from it.

## Lessons from Chapter 1 (reviews and Android check)
- **Content non-breaking spaces are kept.** Where the house form joins a number to its unit or a short maths group with a no-break space (U+00A0), keep it; the cards and the reader respect it.
- **Short intervals and short relations stay whole** in the reader (`[−2, 5)`, `x ≤ 3`): write them with ordinary spaces as printed; the renderer holds them. Do not add your own no-break spaces beyond the house form.
- **Every formula card gets legend lines for its symbols** (reviewers flagged cards without them).
- **"Above" / "below" page pointers** are reworded to the part's name ("in the Worked examples part"); list each.
- **Exam-frequency claims** ("asked every year", "recurred for decades") get the label "the book's estimate from past papers, not official figures"; list each.
- **Over-general rules** ("always", "never", "only"): copy as printed and report each with page and why; the reviewer rules on them.

## Where things are
Book `/Users/nikhi/Developer/monk-books/math11/math11.pdf` (October 2026 edition, 1260 pages, **PDF page = the bottom folio**). Text dump `math11/math11.txt` (prose only; maths scrambled): **read every formula, fraction, power, subscript and symbol from the page** (Read tool on the PDF with `pages`, a few at a time; `pdftoppm -r 110 -f N -l N -png` only where unclear, and delete the PNG). **Never use `math11-aug22-OLD.pdf`.** Work folder `math11/work-<your-name>/`. Your file exists as an empty stub, already wired in.

## ERRATA (pp. 1238–1260)
Entries marked "(resolved)" are already in the text: copy the page as printed. Check "Remaining known issues in this printing" (pp. 1258–1260) for Chapter 2 and report what it says. Report anything on your pages that still looks like a defect (raw LaTeX, a build note, a self-correction left in), with page.

## Page map, Chapter 2 Relations and Functions (pp. 101–176). Confirm every boundary on the page images and report any difference.
p. 101 is the chapter's title and contents (not copied). Each sub-topic opens with an "Exam Relevance:" box (the topic's first part, "Exam relevance"), then the eight sections as parts, titled from that sub-topic's own section names (Subtopic 01's "Key Theorems & Proofs" → "Key theorems and proofs"; the others' "Key Procedures & Logical Framework" → "Key procedures and logical framework").
- **Topic 01 "Cartesian Product of Sets"**: pp. 102–111 (Figure 2.1, caption p. 103, figure p. 104).
- **Topic 02 "Relations"**: pp. 112–119 (Figure 2.2, pp. 113–114).
- **Topic 03 "Functions"**: pp. 120–129, **plus the supplement's "Addendum to Subtopic 03: Finding the Range" (pp. 146–152)**, see below.
- **Topic 04 "Types of Relations and Equivalence Relations"**: pp. 130–145, the supplement's "Subtopic 04 — …" (the supplement's heading "Chapter 2: Relations and Functions — Supplement" is not copied). Figure 2.3 (pp. 131–132), Figure 2.4 (pp. 135–136). It is Topic 04, after Topic 03 (decision 2).
- **"Addendum to Subtopic 03: Finding the Range" (pp. 146–152)**: the founder's choice (decision 8): **slotted into Topic 03 exactly where the book says to read it**: Procedure E goes at the end of Topic 03's "Key procedures and logical framework" part, after Procedure D (its heading "Procedure E: Finding the Range of a Real Function" as the other procedures' headings are written); Examples 6 and 7 go at the end of Topic 03's worked-examples block, after Example 5; Figure 2.5 goes where Example 6 or 7 calls it. The addendum's heading and its first paragraph ("This addendum extends Subtopic 03 … read Procedure E after Procedure D …", the reading instruction itself) are not copied; the sentence "“Procedure B” below means Subtopic 03’s Procedure B." is dropped too, because Procedure B is now in the same topic (list both). Anything else on pp. 146–152 that is not Procedure E or Examples 6–7 (a closing note, a second method): report it and put it with the item it belongs to.
- **"Chapter 2: Relations and Functions — Additional Topics" (pp. 153–176):** its opening text and table on p. 153 ("Subtopics 01–03 and the Supplement … cover the whole NCERT syllabus …", the table of Addenda F–K with "Read after", "Procedure lettering continues …", "Deliberately not covered here …") is the first part, "Introduction", of the first additional topic; the table is a `table` block; its "Read after" column is reworded to our names (list each). Additional topics, title = the text after "Addendum X — ", exactly:
  F "The vertical line test, stated properly" (154–156), G "Composition of functions and the domain of a composite" (157–159), H "Even and odd functions, and the work they save" (160–164), I "Periodicity of algebraic (non-trigonometric) functions" (164–168), J "Graph transformations of the standard function library" (168–172), K "Functional equations at Class-11 level" (172–176).
  LETTERS: the founder's choice (decision 9): **the book's letters F–K are kept** (`n: 'F'` … `n: 'K'`), so "Additional topic F" holds Procedure F and Worked Examples 8–9, as in the book. book-chapters allows this chapter's extras to start at F.
  Their parts follow the book's own run-in headings: "Method", "Worked examples" (Worked Example 8, 9 …: one `examples` block), "Practice" ("Practice F" → part "Practice"), and any other bold run-in heading as its own part only if it heads a long stretch (H's "Why any of this saves work — the four payoffs." is a part "Why any of this saves work: the four payoffs"). Addenda end and start on the same page: check where each really ends. Report any cheat sheet at the end of K and where it goes (the last part of K, as in Chapter 1's M).
- Chapter 3 starts on p. 177: stop before it.
- **Cross-references:** "Subtopic 0N" → "Topic 0N" (same numbers; Subtopic 04 → Topic 04); "the Supplement" → "Topic 04" or "Topic 03's Finding the range", whichever it means (list each); "Addendum X" → "Additional topic X"; "Section N" of the same sub-topic → its part's name; "Procedure A–K", "Example N", "Worked Example N" keep the book's letters and numbers (they continue across the chapter as the book says); "Figure 2.N" stays. NCERT example and exercise numbers are copied as printed and listed. List every change.
- **Exam citations:** no exam years ("a recent JEE Main paper"); a share or frequency is labelled "the book's estimate from past papers, not official figures". List every dated citation and every share with page and exact words.

## Files and ids
- `content/textbooks/math-11-02/topics-1-2.ts` (Topics 01–02), `topic-3.ts` (Topic 03 with its range addendum), `topic-4.ts` (Topic 04), `extras-f-h.ts` (F–H, with the p. 153 introduction), `extras-i-k.ts` (I–K). Each exports `TOPICS`. The chapter file `content/textbooks/math-11-02-relations.ts` joins them (01–04, then F–K): never edit it.
- `topic` index = position in the chapter's topics array: **Topics 01–04 = 0–3, the six additional topics = 4–9** (F = 4 … K = 9).
- Diagrams `lib/diagrams/mathematics-11-02.ts` (`DIAGRAMS_MATHEMATICS_11_02`), filed as `'mathematics|11|2'`. Key points `lib/revise/keypoints-mathematics-11-02.ts` (`KEY_POINTS`).
- **Figure ids:** `m11-02-fig-2.1` … `m11-02-fig-2.5`; any unnumbered drawing `m11-02-<topic n>-d<k>` (topic n = `01` … `04` or the additional topic's letter; k counts that topic's unnumbered drawings in page order from 1). Figure 2.5 (pp. 149–150) belongs to the range addendum.

## Mathematics notation added for this chapter (on top of Chapter 1's)
- **Ordered pairs** (<i>a</i>, <i>b</i>); Cartesian product <i>A</i> × <i>B</i>, <i>A</i> × <i>A</i> × <i>A</i>; <i>n</i>(<i>A</i> × <i>B</i>) = <i>pq</i>; number of relations 2<sup><i>pq</i></sup> (a sup with letters, as printed).
- **Relations:** <i>R</i> ⊆ <i>A</i> × <i>B</i>, (<i>a</i>, <i>b</i>) ∈ <i>R</i>, <i>a</i> <i>R</i> <i>b</i>, the inverse <i>R</i><sup>−1</sup> (U+2212 minus), equivalence class [<i>a</i>], identity relation <i>I</i><sub><i>A</i></sub>.
- **Functions:** <i>f</i> : <i>A</i> → <i>B</i> (spaces round the colon as printed), <i>x</i> ↦ <i>f</i>(<i>x</i>) only if the book prints ↦; composite <i>f</i> ∘ <i>g</i> (∘ U+2218), (<i>f</i> ∘ <i>g</i>)(<i>x</i>) = <i>f</i>(<i>g</i>(<i>x</i>)); <i>f</i> + <i>g</i>, <i>fg</i>, and the quotient always stacked: <frac><num><i>f</i></num><den><i>g</i></den></frac>.
- **Named functions upright:** Dom, Range, Codomain if printed as operator names (as printed: upright "Range(<i>f</i>)"), sgn, max, min, log; modulus |<i>x</i>|; greatest integer [<i>x</i>] or ⌊<i>x</i>⌋ exactly as printed; fractional part {<i>x</i>}.
- **Intervals and inequalities** as printed (`(−∞, −<frac><num>3</num><den>5</den></frac>] ∪ (1, ∞)`): a fraction inside an interval is stacked.
- **Graphs:** <i>y</i> = <i>f</i>(<i>x</i> − <i>h</i>) + <i>k</i>, <i>y</i> = −<i>f</i>(<i>x</i>), <i>y</i> = <i>f</i>(|<i>x</i>|): as printed, minus U+2212.
- **Discriminant** <i>D</i> ≥ 0; a labelled line "(∗)" as printed (∗ U+2217).

## Figures
Numbered Figures 2.1–2.5 are drawn in the book. Figure placement as in Chapter 1 (the `fig` block where the figure is called, caption without "Figure 2.N" and "(see next page)"). Count the vector shapes on every page 101–176 for unnumbered drawings (Additional topics F, H, I and J are likely to have graphs) and report which pages hold none. Graphs: axes with arrowheads, labelled <i>x</i>, <i>y</i>, <i>O</i>; curves in the one highlight or ink; asymptotes dashed; open and closed endpoints hollow and filled, exactly as drawn. Diagram test: `npx jest lib/diagrams -t "mathematics.11.2"`.

## Writers' test run (once, when done; again only if it failed)
`npx jest content/textbooks/__tests__/book-rules content/textbooks/__tests__/book-chapters -t "Mathematics 11 Chapter 2|the text of every book chapter"`, plus `npx eslint <your file>`. Failures naming "Mathematics 11 Ch 2" and your topic are yours; undrawn fig ids are the diagram agent's. No tsc, no whole test suite (the Mac hangs).
