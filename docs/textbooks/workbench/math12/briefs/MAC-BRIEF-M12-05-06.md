# Brief: Mathematics Class 12, Chapters 5 Continuity and Differentiability and 6 Applications of Derivatives, word for word

First read `MAC-BRIEF-M12-COMMON.md` (this folder) and everything it lists, then `/Users/nikhi/Developer/monk-books/math12/DECISIONS-M12.md`
(all items). **Your closest models are Class 12 Chapters 1–4, finished:** `content/textbooks/math-12-01/topics-01-02.ts` (topics in
the "Section N" form), `math-12-02/topics-01-02.ts` (numbered sections "1.1 …" as parts), `math-12-03/extras-a-e.ts` (lettered
additional topics with an Introduction part and a "Closing note"), `math-12-01/extra-p.ts` (Addendum P, after its fixes). Read
one before writing. Lessons from Chapters 1–4's reviews and Android checks, all of which hold:
- The cheat sheet box is the part "Cheat sheet"; worked examples with no printed answer line keep `ans: ''`.
- A shared MCQ explanation "(a)/(b)" is split, one nudge per option where it splits cleanly; kept word for word on each option when splitting would need new words.
- A fraction inside a fraction's numerator or denominator is written with ÷. `const NB = ' ';` escaped, never the raw character.
- Glue short expressions: "√(1${NB}−${NB}x²)", "<i>f</i>′(<i>x</i>)${NB}=${NB}0", "lim" with its subscript and operand; a bracket opened and closed on one line.
- Exam-frequency claims ("almost always", "every year", shares) get "(the book’s estimate from past papers, not official figures)";
  CBSE syllabus claims the 2023 NCERT may have dropped are copied and LISTED. Addendum P: years dropped, a paper before 2013 is
  "JEE", the distribution's cited papers as counts per row ("Papers cited").
- Book errors are copied as printed and LISTED with page and why (reviewers fix them). Recompute every number.
- Matrices or determinants, if any: `<bmat>`/`<pmat>`/`<vmat>` with `<r>`/`<c>` (MAC-BRIEF-M12-03-04.md).
- Calculus notation: <i>f</i>′(<i>x</i>), <i>f</i>″(<i>x</i>), d<i>y</i>/d<i>x</i> as a stacked fraction <frac><num>d<i>y</i></num><den>d<i>x</i></den></frac> (d upright), lim with its subscript `lim<sub><i>x</i>→<i>c</i></sub>` (one-sided `<i>c</i><sup>+</sup>`/`<sup>−</sup>`), |<i>x</i>| with U+2060 after the opening bar, ⌊<i>x</i>⌋ / [<i>x</i>] as printed, e<sup><i>x</i></sup>, ln, log upright; LHL / RHL upright.

## WHERE YOU WRITE (read carefully)
An Android screenshot shoot of Chapters 3–4 runs on the emulator from the app repo; Metro reloads the app whenever a repo file
changes. **So do NOT create or edit ANY file inside `/Users/nikhi/Developer/monk-learning-app/`.** Write your file into your work
folder `/Users/nikhi/Developer/monk-books/math12/work-<your-name>/<file name from the page map>`, exactly as it will sit at
`content/textbooks/math-12-0N/<file name>` (same imports with the `@/` alias as the models). You may READ anything in the repo.
Do not run jest or eslint (they need the file in the repo). When your file is complete, reply that it is ready to install, with
your summary; the coordinator copies it in after the shoot and then asks you for the test run.

## Chapter 5 Continuity and Differentiability (pp. 306–382). Confirm every boundary on the page images.
- pp. 306–307 top: title and contents, not copied. **Topics 01–07** = the numbered parts "1. Continuity & Differentiability — The
  Foundations" … "7. Second-Order Derivatives & the Mean Value Theorems"; titles without the number, em dash → colon, "&" stays.
  Each opens with its "Exam Relevance" box (the "Exam relevance" part), then its sections as parts in sentence case.
- **Additional A–E** = Addenda A–E (pp. 354–371; A 354, B 358, C 362, D 365, E 369); **Additional P** (pp. 371–382). An opening of
  the Additional Topics part before A = A's "Introduction". Chapter 6 starts on p. 383.

| File (`content/textbooks/math-12-05/`) | Writer | Topics | Pages | Topic indexes | Figures |
|---|---|---|---|---|---|
| `topics-01-02.ts` | m12w51 | 01 Continuity & Differentiability: The Foundations; 02 The Differentiation Toolkit: Standard Derivatives & Rules | 307–316; 317–322 | 0, 1 | 5.1 (311/312) |
| `topics-03-05.ts` | m12w52 | 03 The Chain Rule: Derivatives of Composite Functions; 04 Implicit Differentiation; 05 Derivatives of Inverse Trigonometric Functions | 323–327; 328–332; 333–338 | 2, 3, 4 | |
| `topics-06-07.ts` | m12w53 | 06 Logarithmic & Parametric Differentiation; 07 Second-Order Derivatives & the Mean Value Theorems | 339–346; 347–353 | 5, 6 | |
| `extras-a-e.ts` | m12w54 | Additional A–E | 354–371 | 7–11 | |
| `extra-p.ts` | m12w55 | Additional P | 371–382 | 12 | |

Figure ids `m12-05-fig-5.1`; unnumbered drawings `m12-05-<topic n>-d<k>` (count the vector shapes on every page).

## Chapter 6 Applications of Derivatives (pp. 383–443)
- pp. 383–384 top: title and contents, not copied. **Topics 01–03** = Subtopics 01–03 ("Subtopic 02: Monotonicity — Increasing and
  Decreasing Functions" → title "Monotonicity: Increasing and Decreasing Functions"). **Topics 04–05** = the book's "Appendix A:
  Tangents and Normals (JEE-relevant — outside current CBSE board syllabus)" and "Appendix B: Approximations and Differentials
  (…)": titles = the text after "Appendix X: ", em dash → colon, as printed otherwise (their letters would clash with the
  addenda's, so they are numbered on; "Appendix A/B" in cross-references → "Topic 04/05"; list it).
- **Additional A–E** = Addenda A–E (pp. 419–436; A 419, B 423, C 426, D 429, E 433); **Additional P** (pp. 436–443). Chapter 7
  starts on p. 444.

| File (`content/textbooks/math-12-06/`) | Writer | Topics | Pages | Topic indexes | Figures |
|---|---|---|---|---|---|
| `topics-01-02.ts` | m12w61 | 01 Rate of Change of Quantities; 02 Monotonicity: Increasing and Decreasing Functions | 384–392; 393–401 | 0, 1 | 6.1 (387/388), 6.2 (389/390), 6.3 (395/396), 6.4 (398/399) |
| `topics-03-05.ts` | m12w62 | 03 Maxima and Minima; 04 Tangents and Normals (…); 05 Approximations and Differentials (…) | 402–411; 412–415; 416–418 | 2, 3, 4 | 6.5 (404/405), 6.6 (407/408), 6.7 (413/414) |
| `extras-a-e.ts` | m12w63 | Additional A–E | 419–436 | 5–9 | |
| `extra-p.ts` | m12w64 | Additional P | 436–443 | 10 | |

Figure ids `m12-06-fig-6.1` … `6.7`; unnumbered drawings `m12-06-<topic n>-d<k>`.

## Report
`/Users/nikhi/Developer/monk-books/math12/reports-05/<name>.md` or `reports-06/<name>.md`, as the common brief describes (pages
confirmed, every change from the printed words, listed claims, figures with the vector-shape count per page, errata).
