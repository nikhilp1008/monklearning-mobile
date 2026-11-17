# Brief: Mathematics Class 12, Chapters 3 Matrices and 4 Determinants, rebuilt word for word from the Master Reference book

First read `MAC-BRIEF-M12-COMMON.md` (this folder) and everything it lists, then `/Users/nikhi/Developer/monk-books/math12/DECISIONS-M12.md`
(all items; this pair's layout is 14). **Your closest models are Chapters 1–2 of Class 12, finished and pushed:**
`content/textbooks/math-12-01/topics-01-02.ts` (topics in the "Section N" form), `math-12-01/extras-a-f.ts` (lettered additional
topics with an Introduction part), `math-12-01/extra-p.ts` (Addendum P). Read one before writing. Lessons from their reviews and
Android check, all of which hold here:
- The cheat sheet box is the part "Cheat sheet"; worked examples with no printed answer line keep `ans: ''`.
- A shared MCQ explanation "(a)/(b)" is split, one nudge per option (")/(" fails the one-line-fraction check).
- A fraction inside a fraction's numerator or denominator is written with ÷ (DECISIONS-M12 item 5).
- `const NB = ' ';` (escaped) in every file. Glue the inside of a short root "√(1${NB}−${NB}x²)", a short "a ≠ b", "... = 0".
- Addendum P: years dropped, a pre-2013 paper is "JEE" (never "JEE Main"/"JEE Advanced"); the distribution table's
  cited-papers column is "Papers cited" with counts per row (as `math-12-01/extra-p.ts`).
- The other writers of this pair work at the same time: edit only your own file.

## MATRICES AND DETERMINANTS: the reader's matrix tags (new)
Every matrix and determinant the page prints as a grid is written with these tags (the reader draws the grid, its
columns aligned, with brackets or bars as tall as the grid):
- `<bmat>` square brackets [ ], `<pmat>` round brackets ( ), `<vmat>` determinant bars | |.
- Inside: one `<r>…</r>` per row, one `<c>…</c>` per cell. Any inline markup may sit in a cell (`<i>`, `<sup>`, `<sub>`,
  `<frac>`). Example: `<i>A</i> = <bmat><r><c>1</c><c>2</c></r><r><c>3</c><c>−1</c></r></bmat>`;
  Δ = `<vmat><r><c><i>a</i></c><c><i>b</i></c></r><r><c><i>c</i></c><c><i>d</i></c></r></vmat>`.
- A matrix in running prose is written the same way (it is drawn in the line); a long line holding a 3 × 3 grid gets
  `<br>` before and after the equation so the grid starts its own line.
- Row and column vectors too (`<bmat><r><c>1</c><c>2</c><c>3</c></r></bmat>`). Generic entries a<sub>11</sub> … a<sub>mn</sub>,
  "⋯", "⋮", "⋱" in their cells as printed.
- **Never** draw a grid with the bracket pieces ⎡ ⎢ ⎣ or with `<br>` rows, and never write "[1 2; 3 4]".
- Transpose `<i>A</i><sup>T</sup>` (or ′ as printed), inverse `<i>A</i><sup>−1</sup>`, adj <i>A</i>, det <i>A</i> or |<i>A</i>| (glue "|"
  with U+2060 after it when the bar holds a letter: `|⁠<i>A</i>|`), <i>I</i>, <i>O</i>, tr(<i>A</i>), elementary operations
  <i>R</i><sub>1</sub> → <i>R</i><sub>1</sub> − 2<i>R</i><sub>2</sub>, <i>C</i><sub>2</sub> ↔ <i>C</i><sub>3</sub> as printed. Cofactor <i>A</i><sub><i>ij</i></sub>, minor <i>M</i><sub><i>ij</i></sub>.
The matrix tags are being added to the reader now; until they land, the tests may flag them as unknown tags (not
yours to fix): write them anyway, exactly in this form.

## Chapter 3 Matrices (pp. 185–242). Confirm every boundary on the page images and report any difference.
- p. 185 (title and contents) not copied. **Topic 00** = "Subtopic 00: Foundations & Representation" (`n: '00'`, title as
  printed without the number, "&" stays in titles), pp. 186–189, then **Topics 01–04** = Subtopics 01–04. Each opens with
  its "Exam Relevance" box (the "Exam relevance" part), then its Sections as parts in sentence case ("&" → "and").
  Subtopic 04's first section is "Special Types of Square Matrices" (not Concept Intuition): titles are whatever is printed.
- **Additional A–E** = Addenda A–E (pp. 222–235), titles after "Addendum X — " as printed (em dash → colon). Check p. 222's top
  for an opening of the Additional Topics part: if there is one, it is A's first part "Introduction". **Additional P** =
  Addendum P (pp. 236–242). Chapter 4 starts on p. 243.
- "Subtopic 0N" → "Topic 0N"; "Addendum X" → "Additional topic X".

| File (`content/textbooks/math-12-03/`) | Writer | Topics | Pages | Topic indexes | Numbered figures |
|---|---|---|---|---|---|
| `topics-00-01.ts` | m12w31 | 00 Foundations & Representation; 01 Matrix Algebra & Operations | 186–189; 190–199 | 0, 1 | 3.1 (190/191), 3.2 (193/194) |
| `topics-02-04.ts` | m12w32 | 02 Symmetric & Skew-Symmetric Matrices; 03 Invertible Matrices & Row Operations; 04 Special Square Matrices & Chapter Synthesis | 200–207; 208–215; 216–221 | 2, 3, 4 | 3.3 (200/201), 3.4 (208/209), 3.5 (219/220) |
| `extras-a-e.ts` | m12w33 | Additional A–E | 222–235 | 5–9 | |
| `extra-p.ts` | m12w34 | Additional P | 236–242 | 10 | |

Figure ids `m12-03-fig-3.1` … `3.5`; unnumbered drawings `m12-03-<topic n>-d<k>`. Diagrams later in
`lib/diagrams/mathematics-12-03.ts` (`'mathematics|12|3'`).

## Chapter 4 Determinants (pp. 243–305)
- p. 243 (title) and p. 244's contents not copied; **Topics 01–06** = Parts 1–6 ("Part 1 — Determinant: Meaning, Definition
  & Expansion" → title "Determinant: Meaning, Definition & Expansion"), Part 1 starting on p. 244 below the contents. Each
  opens with its "Exam Relevance" box, then its Sections as parts. "Part N" → "Topic 0N" in cross-references.
- **Additional A–E** = Addenda A–E (pp. 282–296); **Additional P** (pp. 297–305). Chapter 5 starts on p. 306.

| File (`content/textbooks/math-12-04/`) | Writer | Topics | Pages | Topic indexes |
|---|---|---|---|---|
| `topics-01-03.ts` | m12w41 | 01 Determinant: Meaning, Definition & Expansion; 02 Properties of Determinants; 03 Area of a Triangle, Collinearity & Equation of a Line | 244–249; 250–257; 258–262 | 0, 1, 2 |
| `topics-04-06.ts` | m12w42 | 04 Minors and Cofactors; 05 Inverse of a Matrix & System of Linear Equations; 06 Advanced Techniques: Multiplication, Differentiation & Special Determinants (as printed) | 263–269; 270–276; 277–281 | 3, 4, 5 |
| `extras-a-e.ts` | m12w43 | Additional A–E | 282–296 | 6–10 |
| `extra-p.ts` | m12w44 | Additional P | 297–305 | 11 |

No numbered figures were found in Chapter 4's text: count the vector shapes on every page and report any drawing
(`m12-04-<topic n>-d<k>`). Diagrams later in `lib/diagrams/mathematics-12-04.ts` (`'mathematics|12|4'`).

## Test run and report
As the common brief, with `-t "Mathematics 12 Chapter 3|…"` or `"Mathematics 12 Chapter 4|…"`; reports to
`/Users/nikhi/Developer/monk-books/math12/reports-03/<name>.md` or `reports-04/<name>.md`.
