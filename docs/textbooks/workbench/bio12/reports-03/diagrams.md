# Biology Class 12 Chapter 3: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-17T00:48:15Z)

Diagram agent report, Biology 12 Chapter 3: lib/diagrams/biology-12-03.ts is written (it replaces the stub, export DIAGRAMS_BIOLOGY_12_03 kept, filed under 'biology|12|3'). That is the only file I changed.

Tests: `jest-serial.sh lib/diagrams -t "biology.12.3"` passes, 25 tests, 0 failures. `npx eslint lib/diagrams/biology-12-03.ts` is clean.
Render check: I dumped every case to SVG, turned them into PNG, and looked at each one. Nothing overlaps, and the labels read correctly. Scratch files are deleted.

All 6 fig ids in the chapter text exist in my file, and no other figure id is used. The chapter text and the brief agree.

Figures (id, drawn page, caption page, topic index):
- b12-03-fig-3.1, drawn p.115, caption p.114, topic 0. One case, 'Methods'.
- b12-03-fig-3.2, drawn p.117, caption p.116, topic 0. Two cases: 'Vasectomy' (a) and 'Tubectomy' (b).
- b12-03-fig-3.3, drawn p.122, caption p.121, topic 1. Two cases: 'A Embryo transfer' and 'B Other methods'.
- b12-03-fig-3.4, drawn p.124, caption p.123, topic 1. One case.
- b12-03-fig-3.5, drawn p.130, caption p.129, topic 2. One case.
- b12-03-fig-3.6, drawn p.136, caption p.135, topic 3. One case.

I judged pp.116, 120, 123, 125 and 134 to hold ruled tables and no drawing. The other pages in 112 to 138 hold text. The drawn pages above are the only ones with a "CHAPTER 3 . FIGURES" drawing.

What is the book's:
- Every label word for word. That includes the figure's own spellings "amenorrhea" and "foeticide", the in-vitro bracket text, and the GIFT/ICSI/AI-IUI notes.
- The 14 methods in 3.1 in groups of 3, 3, 3, 3 and 2.
- The 8-blastomere rule. ZIFT (up to 8, fallopian tube) and IUT (more than 8, uterus) agree between 3.3 and 3.4.
- The cross on the arrow between "Reveals foetal sex" and "Prenatal sex determination", with the ban's "Prevents" arrow ending at it (3.5).
- The week marks 0, 12, 20, 24 and 24+ (3.6), with 1 RMP to 20, 2 RMPs 20 to 24, Medical Board from 24. The check confirms the bar edges sit at those marks on one week scale.
- The figure's 3.6 "special categories" and "foetal abnormality" notes.

What is schematic:
- All sizes and positions, re-laid for a phone: 3.1 is a tree running down the page, 3.3 and 3.4 are columns, and 3.5 is a column with the ban beside it.
- Organ outlines and the tube routes in 3.2.
- The 24+ end of the 3.6 bar. I put it at 28 weeks' width, so its length is not a real value.

Colour: the book colours reversible green, permanent red, ZIFT green, IUT red and some bars in tints. The house style has no fills and one marigold highlight, so the meaning is carried in words. In 3.1 each group says "Reversible" or "Permanent (surgical)". The highlight marks the surgical group in 3.1, the two cuts in 3.2, the blastomere count box in 3.3 A, the in-vitro stage in 3.4, the ban in 3.5 and the first trimester in 3.6. Figure 3.3 B has no single thing to highlight, so it has none.

Caption changes:
- The "(see next page)" is dropped from all captions.
- 3.1's caption drops "green" and "red" and reads "(reversible) and Surgical (permanent, highlighted)".
- The two-case figures (3.2 and 3.3) have per-case captions built from the book's wording.
- 3.4, 3.5 and 3.6 keep the book's caption word for word.

Additions:
- 3.2 has a result pill per case: "Sperm cannot leave; production continues" and "Ovum cannot pass; production continues". They are drawn from the caption's meaning (transport blocked, production continues).
- 3.6 has the pill "Both favour early termination", which is the book's caption phrase.

No em or en dashes appear in any label or caption, and a check enforces that. The figures hold no gene symbols or genotypes, so there is no italic.

Two small leftovers in the file are harmless. A `void [CAP31, CAP33]` line keeps the book's two full captions in the source so lint does not flag them unused. One check in 3.1 has a redundant clause.
