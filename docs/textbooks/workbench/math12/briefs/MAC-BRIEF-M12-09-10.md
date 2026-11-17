# Brief: Mathematics Class 12, Chapters 9 Differential Equations and 10 Vector Algebra, word for word

First read `MAC-BRIEF-M12-COMMON.md` (this folder) and everything it lists, then `MAC-BRIEF-M12-07-08.md` (its lessons list holds
here unchanged: NB escaped and no raw U+00A0/U+2060, no `<i>` on words or tags, legend lines opening on a symbol, rules with their
full hypotheses), `MAC-BRIEF-M12-05-06.md` (calculus notation; **WHERE YOU WRITE**: write into your work folder, never inside the
repo), and `/Users/nikhi/Developer/monk-books/math12/DECISIONS-M12.md` (all items; this pair's layout is 34). **Your closest models
are Class 12 Chapters 5–8, reviewed and fixed, now in the repo:** `content/textbooks/math-12-05/topics-01-02.ts` (topics in the
"Section N" form), `math-12-07/topics-01-03.ts` (integral notation), `math-12-08/extras-a-e.ts` (lettered additional topics),
`math-12-07/extra-p.ts` (Addendum P). Syllabus claims the rationalised NCERT may have dropped are softened in the style of
DECISIONS items 25, 30 and 31 (by the reviewers; you copy and list them).

## Chapter 9 Differential Equations (pp. 580–637). Confirm every boundary on the page images.
- p. 580 and the top of p. 581: title and contents, not copied. **Topics 01–05** = "Part 1 — Order, Degree & Solutions" …
  "Part 5 — Applications of Differential Equations" (titles after "Part N — ", "&" stays). "Part N" → "Topic 0N" in
  cross-references. **Additional A–D** = Addenda A–D (pp. 620–629; A 620, B 624, C 626, D 628; each opens with its own "Exam
  Relevance" paragraph: that is its first part, "Exam relevance"); **Additional P** (pp. 630–637). Chapter 10 starts on p. 638.
- Notation: <frac><num>d<i>y</i></num><den>d<i>x</i></den></frac>, <frac><num>d<sup>2</sup><i>y</i></num><den>d<i>x</i><sup>2</sup></den></frac>, <i>y</i>′, <i>y</i>″ as printed; the integrating factor I.F. or e<sup>∫<i>P</i>${NB}d<i>x</i></sup> (an integral inside a raised run is plain, no stacked fraction inside it).

| File (`content/textbooks/math-12-09/`) | Writer | Topics | Pages | Topic indexes |
|---|---|---|---|---|
| `topics-01-02.ts` | m12w91 | 01 Order, Degree & Solutions; 02 Formation of Differential Equations | 581–589; 590–596 | 0, 1 |
| `topics-03-05.ts` | m12w92 | 03 Separable & Homogeneous Equations; 04 Linear Differential Equations; 05 Applications of Differential Equations | 597–604; 605–612; 613–619 | 2, 3, 4 |
| `extras-a-d.ts` | m12w93 | Additional A–D | 620–629 | 5–8 |
| `extra-p.ts` | m12w94 (with Ch 10's P) | Additional P | 630–637 | 9 |

## Chapter 10 Vector Algebra (pp. 638–684)
- p. 638 top: title and contents, not copied. **Topics 01–03** = "Vector Algebra — Subtopic 01: Vector Operations & Components",
  "… Subtopic 02: Product of Two Vectors", "… Subtopic 03: Product of Three Vectors & Vec[tor Applications]" (title = the text after
  "Subtopic 0N: ", as printed). **Additional A–D** (pp. 664–677; A 664, B 668, C 671, D 675), **Additional P** (pp. 678–684). Chapter
  11 starts on p. 685.
- **Vector notation:** a vector is its letter in `<i>` followed by the combining arrow U+20D7, written with an escaped constant
  (`const ARW = '⃗';` → `<i>a</i>${ARW}`), as `content/textbooks/phy-11-06/topics-4-5.ts` does (read it); unit vectors
  <i>î</i>, <i>ĵ</i>, <i>k̂</i> as printed (hat letters, escaped where combining); |<i>a</i>${ARW}| with U+2060 after the opening bar;
  dot ·, cross ×, scalar triple product [<i>a</i>${ARW} <i>b</i>${ARW} <i>c</i>${ARW}] as printed. Determinant forms of the cross
  product use `<vmat>` with `<r>`/`<c>` (MAC-BRIEF-M12-03-04.md). The book's text dump prints 𝑎⃗ etc.: read the page images.

| File (`content/textbooks/math-12-10/`) | Writer | Topics | Pages | Topic indexes |
|---|---|---|---|---|
| `topics-01-03.ts` | m12w101 | 01 Vector Operations & Components; 02 Product of Two Vectors; 03 Product of Three Vectors & … | 638–647; 648–655; 656–663 | 0, 1, 2 |
| `extras-a-d.ts` | m12w102 | Additional A–D | 664–677 | 3–6 |
| `extra-p.ts` | m12w94 | Additional P | 678–684 | 7 |

No numbered figures were found in either chapter's text: count the vector shapes on every page and give every drawing a `fig`
block (`m12-09-<topic n>-d<k>`, `m12-10-<topic n>-d<k>`), with what it shows, for the diagram helper.

## Report
`/Users/nikhi/Developer/monk-books/math12/reports-09/<name>.md` or `reports-10/<name>.md`, as the common brief describes.
