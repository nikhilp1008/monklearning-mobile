# Brief: Mathematics Class 12, Chapters 7 Integrals and 8 Application of Integrals, word for word

First read `MAC-BRIEF-M12-COMMON.md` (this folder) and everything it lists, then `MAC-BRIEF-M12-05-06.md` (its lessons list,
calculus notation and **WHERE YOU WRITE** hold here unchanged: write into your work folder, never inside the repo), then
`/Users/nikhi/Developer/monk-books/math12/DECISIONS-M12.md` (all items; this pair's layout is 28). **Your closest models are Class
12 Chapters 5–6, written and reviewed:** `/Users/nikhi/Developer/monk-books/math12/work-m12w51/topics-01-02.ts` (topics in the
"Section N" form, calculus notation, after their review fixes), `work-m12w54/extras-a-e.ts` (lettered additional topics),
`work-m12w55/math-12-05-extra-p.ts` (Addendum P). Their reviews' lessons, on top of Chapters 1–4's:
- `const NB = ' ';` ESCAPED (three Chapter 5–6 writers left the raw character and reported it escaped: check the bytes),
  and no raw U+00A0 / U+2060 anywhere in a string (use `${NB}` and an escaped word-joiner constant).
- No `<i>` on ordinary words or exam tags: `<i>` is for maths letters only.
- A legend line on a formula card starts with its symbol in lower case where the maths is lower case (the card builder
  capitalised "f(b)" to "F(b)"): start such a line with the symbol inside its `<i>`.
- Rules stated with their full hypotheses ("on an interval", "with g′(c) ≠ 0", "for all x in (a, b)").
- Integrals: ∫ upright, limits as `∫<sub><i>a</i></sub><sup><i>b</i></sup>` (the reader stacks a sub and sup on one base), the
  integrand and d<i>x</i> glued (`${NB}d<i>x</i>`, d upright), + <i>C</i> italic, [<i>F</i>(<i>x</i>)]<sub><i>a</i></sub><sup><i>b</i></sup> for evaluation.

## Chapter 7 Integrals (pp. 444–529). Confirm every boundary on the page images.
- pp. 444–447: title and contents, not copied. **The book prints its nine subtopics in the order 01, 04, 05, 06, 07, 08, 02,
  09, 03** (techniques before definite integrals). Decision 28: **the app numbers them Topics 01–09 in the printed order**, each
  title as printed without its number; every cross-reference "Subtopic 0N" is mapped to the app's number (book 01→01, 04→02,
  05→03, 06→04, 07→05, 08→06, 02→07, 09→08, 03→09) and listed.
- **Additional A–F** = Addenda A–F (pp. 505–521; A 505, B 508, C 511, D 514, E 517, F 520); **Additional P** (pp. 522–529).
  Chapter 8 starts on p. 530.

| File (`content/textbooks/math-12-07/`) | Writer | App topics (book subtopic) | Pages | Topic indexes | Figures |
|---|---|---|---|---|---|
| `topics-01-03.ts` | m12w71 | 01 (01) Foundations of Integration: Indefinite Integrals, Properties & Standard Forms; 02 (04) Integration by Substitution; 03 (05) Integration using Trigonometric Identities | 448–457; 458–463; 464–468 | 0, 1, 2 | 7.1 (449/450) |
| `topics-04-06.ts` | m12w72 | 04 (06) Integrals of Special Forms (Quadratic Denominators & Roots); 05 (07) Integration by Partial Fractions; 06 (08) Integration by Parts | 469–474; 475–480; 481–485 | 3, 4, 5 | |
| `topics-07-09.ts` | m12w73 | 07 (02) Definite Integrals: Definition, the Fundamental Theorem & Limit of a Sum; 08 (09) Evaluation of Definite Integrals by Substitution; 09 (03) Properties of Definite Integrals: The Symmetry Toolkit | 486–491; 492–496; 497–504 | 6, 7, 8 | |
| `extras-a-f.ts` | m12w74 | Additional A–F | 505–521 | 9–14 | |
| `extra-p.ts` | m12w75 | Additional P | 522–529 | 15 | |

## Chapter 8 Application of Integrals (pp. 530–579)
- p. 530 top: title and contents, not copied. **Topics 01–03** = Subtopics 01–03 (530–540, 541–550, 551–559). **Additional A–E**
  (pp. 560–572; A 560, B 563, C 566, D 568, E 571) and **P** (pp. 573–579). Chapter 9 starts on p. 580. Area chapters draw a
  lot: count the vector shapes on every page and give every unnumbered drawing an id `m12-08-<topic n>-d<k>`.

| File (`content/textbooks/math-12-08/`) | Writer | Topics | Pages | Topic indexes | Figures |
|---|---|---|---|---|---|
| `topics-01-03.ts` | m12w81 | 01 Area under Simple Curves; 02 Area between Two Curves; 03 Advanced Regions: Modulus, Inequalities & … (as printed) | 530–540; 541–550; 551–559 | 0, 1, 2 | 8.1 (531/532), 8.2 (541/542), 8.3 (551/552) |
| `extras-a-e.ts` | m12w82 | Additional A–E | 560–572 | 3–7 | |
| `extra-p.ts` | m12w83 | Additional P | 573–579 | 8 | |

Figure ids `m12-07-fig-7.1`, `m12-08-fig-8.1` … `8.3`; unnumbered drawings `m12-0N-<topic n>-d<k>`.

## Report
`/Users/nikhi/Developer/monk-books/math12/reports-07/<name>.md` or `reports-08/<name>.md`, as the common brief describes.
