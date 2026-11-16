# Brief: Mathematics Class 12, Chapters 11 Three Dimensional Geometry and 12 Linear Programming, word for word

First read `MAC-BRIEF-M12-COMMON.md` (this folder) and everything it lists, then `MAC-BRIEF-M12-07-08.md` (its lessons list holds
unchanged), `MAC-BRIEF-M12-05-06.md` (**WHERE YOU WRITE**: your work folder, never inside the repo), `MAC-BRIEF-M12-09-10.md`
(vector notation: **the arrow INSIDE the italic, `<i>a⃗</i>`, escaped**; DECISIONS item 36), and
`/Users/nikhi/Developer/monk-books/math12/DECISIONS-M12.md` (all items; this pair's layout is 37). **The Write tool turns a typed
`' '` into the raw character: after writing, fix escapes with a byte-level replace and check the bytes** (no raw U+00A0,
U+2060, U+20D7, U+0302 anywhere). Models in the repo: `content/textbooks/math-12-03/topics-00-01.ts` (a Topic 00, grids),
`math-12-08/extras-a-e.ts` (lettered additional topics), `math-12-08/extra-p.ts` (Addendum P, arrows inside the italic).
Syllabus claims the rationalised NCERT dropped (e.g. the plane, "JEE-only" subtopics) are copied and listed; the reviewers soften.

## Chapter 11 Three Dimensional Geometry (pp. 685–762). Confirm every boundary on the page images.
- p. 685 title, p. 686 contents: not copied. The book's subtopics are numbered 00–05 under a header line ("Class 12 ·
  Mathematics · Chapter 11 — … · Subtopic 0N" and sometimes "· JEE-only"): **Topic 00** (`n: '00'`) = "Foundations of 3D
  Coordinate Geometry" (from p. 686, below the contents), **Topics 01–05** = the next five, titles as printed (em dash →
  colon, "&" stays). The header line is not copied; a "JEE-only" mark is kept as the first line of that topic's Exam relevance
  part ("JEE only: …", list it). Each opens with its "Exam Relevance" box, then "Section N — …" parts in sentence case.
- **Additional A–E** = Addenda A–E (pp. 743–752; the p. 743 opening paragraphs "Subtopics 00 to 05 gave you …" = A's
  "Introduction"); **Additional P** (pp. 753–762). "unit 05b" or "Subtopic 0N" → "Topic 0N" (list each). Chapter 12 starts p. 763.

| File (`content/textbooks/math-12-11/`) | Writer | Topics | Pages | Topic indexes | Figures |
|---|---|---|---|---|---|
| `topics-00-01.ts` | m12w111 | 00 Foundations of 3D Coordinate Geometry; 01 Direction Cosines, Direction Ratios & Equations of a Line in Space | 686–695; 696–705 | 0, 1 | 11.1 (689/690), 11.2 (699/700) |
| `topics-02-03.ts` | m12w112 | 02 Shortest Distance & Angle Between Two Lines; 03 Planes in Space: Equations, Family, Angles & Distances | 706–715; 716–724 | 2, 3 | 11.3 (709/710), 11.4 (718/719) |
| `topics-04-05.ts` | m12w113 | 04 The Perpendicular Toolkit: Distances, Feet & Images; 05 Line–Plane & Plane–Plane Configurations | 725–733; 734–742 | 4, 5 | 11.5 (727/728), 11.6 (736/737) |
| `extras-a-e.ts` | m12w114 | Additional A–E | 743–752 | 6–10 | |
| `extra-p.ts` | m12w115 | Additional P | 753–762 | 11 | |

## Chapter 12 Linear Programming (pp. 763–812)
- p. 763 top: title and contents, not copied. **Topics 01–03** = Subtopics 01–03 (764–776, 777–787, 788–796). The book's
  "Chapter 12 — Complete Master Reference" (pp. 797–798, a revision summary of the whole chapter) = **Topic 03's last part(s)**,
  titled "Chapter master reference" (as Chapter 8's "Chapter master cheat sheet"; list it). **Additional A–E** = Addenda A–E
  (pp. 799–812; A 799, B 802, C 805, D 807, E 810; the p. 799 opening = A's "Introduction"). **There is no Addendum P** in this
  chapter. The app's shelf has no Linear Programming row yet: build it anyway.
- Notation: Z = ax + by, constraints with ≤ ≥ glued where short, corner points as coordinate pairs glued "(6,${NB}0)", tables of
  corner values as `table` blocks; feasible regions are drawings (`fig`).

| File (`content/textbooks/math-12-12/`) | Writer | Topics | Pages | Topic indexes | Figures |
|---|---|---|---|---|---|
| `topics-01-02.ts` | m12w121 | 01 Formulation & Graphical Solution; 02 Mathematical Formulation & LPP Applications | 764–776; 777–787 | 0, 1 | 12.1 (767/768), 12.2 (769/770), 12.3 (771/772), 12.4 (780/781) |
| `topic-03.ts` | m12w122 | 03 Special Cases of LPP Solutions (+ the chapter master reference) | 788–798 | 2 | 12.5 (790/791), 12.6 (792/793) |
| `extras-a-e.ts` | m12w123 | Additional A–E | 799–812 | 3–7 | |

Figure ids `m12-11-fig-11.N`, `m12-12-fig-12.N`; unnumbered drawings `m12-1N-<topic n>-d<k>` (count the vector shapes on every
page; LP addenda may draw regions).

## Report
`/Users/nikhi/Developer/monk-books/math12/reports-11/<name>.md` or `reports-12/<name>.md`, as the common brief describes.
