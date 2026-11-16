# Brief: Mathematics Class 12, Chapter 2 Inverse Trigonometric Functions, rebuilt word for word from the Master Reference book

First read `MAC-BRIEF-M12-COMMON.md` (this folder) and everything it lists. Chapter 1 is being written at the same time
(MAC-BRIEF-M12-01.md): never touch its files.

**Your closest models:** `content/textbooks/math-11-08/topics-01-02.ts` (topics in the numbered-section form: part titles are
the book's own section names), `content/textbooks/math-11-03/` (Class 11 Trigonometry: same notation) and
`content/textbooks/math-11-14/extras-a-d.ts` (lettered additional topics with an Introduction part). Read one before writing.

## Layout (DECISIONS-M12 items 2–3)
- **Topics 01–04** = the book's four numbered parts ("1 Principal Value Branches" … "4 Graphs, Composite Evaluation &
  Simplification"), titles exactly as printed without the number ("&" stays in titles; em dash → colon). p. 126 (title and
  contents) is not copied. Each topic: its "Exam Relevance" box = the "Exam relevance" part; then "1.1 Concept Intuition" …
  "1.8 Cheat Sheet Box", each a part titled from its own name in sentence case without the number ("Concept intuition",
  "Key definitions, branches and validity conditions", "Common student pitfalls and pro-tips"; the cheat sheet box is the part "Cheat sheet", as in all of Class 11), "&" → "and".
- **p. 127's "How to use this guide" box** opens Topic 01's "Exam relevance" part, before the Exam Relevance box text,
  reworded only where it must ("in four parts" → "in four topics", "(1) Principal Value Branches" stays); list it.
- In-chapter references "Part 2", "§2.3", "Section 3.4" → "Topic 02", "Topic 02’s <part name> part" (list each).
- **Additional A–E** (`n: 'A'` … `'E'`, `extra: true`), title = the text after "Addendum X — ", exactly as printed. The
  Additional Topics heading (p. 165) is not copied; its opening paragraphs ("The chapter gave you the six cages …") are **A's
  first part, "Introduction"**, reworded only where they must ("Addendum A" → "Additional topic A"); list each change. Each
  addendum's own headings are its parts (sentence case).
- **Additional P** (`n: 'P'`, `extra: true`, title "What JEE Actually Asks") = Addendum P, pp. 178–184, its own numbered
  headings as parts. Question tags keep the exam and drop the year; every share or count of past questions labelled "(the
  book’s estimate from past papers, not official figures)". Archetype letters kept.
- **Cross-references:** as Chapter 1's brief ("Example N" → what the reader shows; Procedure/Archetype letters kept; "Figure
  2.N" stays; NCERT numbers, Class 11 and other-chapter references copied as printed and listed).

## Page map (pp. 127–184). Confirm every boundary on the page images and report any difference.

| File (`content/textbooks/math-12-02/`) | Writer | Topics | Pages | Topic indexes | Numbered figures |
|---|---|---|---|---|---|
| `topics-01-02.ts` | m12w21 | 01 Principal Value Branches; 02 Self-Map Identities (Reciprocal, Negative-Argument, Complementary) | 127–137; 138–147 | 0, 1 | 2.1 (128–129), 2.2 (131–132), 2.3 (136–137), 2.4 (139–140), 2.5 (142–143), 2.6 (146–147) |
| `topics-03-04.ts` | m12w22 | 03 Combination Identities (Sums, Differences & Multiple Angles); 04 Graphs, Composite Evaluation & Simplification | 148–156; 157–164 | 2, 3 | 2.7 (148–149), 2.8 (155–156), 2.9 (157–158), 2.10 (163–164) |
| `extras-a-e.ts` | m12w23 | Additional A–E (+ the p. 165 introduction) | 165–177 | 4–8 | |
| `extra-p.ts` | m12w24 | Additional P What JEE Actually Asks | 178–184 | 9 | |

Chapter 3 starts on p. 185: stop before it. Diagrams later in `lib/diagrams/mathematics-12-02.ts` (`'mathematics|12|2'`).
- **Figure ids:** `m12-02-fig-2.1` … `m12-02-fig-2.10`; any unnumbered drawing `m12-02-<topic n>-d<k>` (`01` … `04`, `A` … `E`,
  `P`). Count the vector shapes on every one of your pages and report which hold a drawing, with what it shows.

## Inverse-trig notation (on top of Class 11's)
- sin<sup>−1</sup> <i>x</i>, cos<sup>−1</sup>, tan<sup>−1</sup>, cot<sup>−1</sup>, sec<sup>−1</sup>, cosec<sup>−1</sup> with "sin" upright and the raised "−1" (the
  minus sign U+2212); "arcsin" only where the page prints it. Glue a short one to its argument with NB:
  `sin<sup>−1</sup>${NB}<i>x</i>`. Principal-value intervals as printed: [−<frac><num>π</num><den>2</den></frac>, <frac><num>π</num><den>2</den></frac>], (0, π), with π upright.
- Combination formulas with their conditions kept whole on one line where they fit ("if <i>xy</i> < 1"); "±π" corrections as printed.
- Long identities: `<br>` before each "=" once a line passes about 30 characters of maths.
