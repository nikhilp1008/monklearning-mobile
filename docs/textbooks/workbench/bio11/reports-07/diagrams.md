# Biology Class 11 Chapter 7: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-16T23:12:37Z)

I wrote /Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-11-07.ts. It draws all four figures and has no em dashes. The diagram test run passes (`jest-serial.sh lib/diagrams -t "biology.11.7"`: 28 passed, 0 failed, 2644 skipped) and `npx eslint` on the file is clean.

I rendered every case with the dump test and qlmanage and looked at each one. The final tag shuffle on the earthworm gut (intestine tag moved) was covered by the test run but not re-rendered. I deleted the page images and the render folder; work-diag07 is empty. I touched no other file (a temporary debug test file I made under lib/diagrams/__tests__ is removed). I did not run tsc or the whole jest suite.

**Figures, all in `DIAGRAMS_BIOLOGY_11_07`** (one case per panel, `cap` is the book's full caption without "Figure 7.N" and without "(see next page)"; for the multi-panel figures every case carries the full caption, not a per-panel fragment):
- **b11-07-fig-7.1**, topic 0, drawn p. 413, caption p. 412, "Four animal tissues". Four cases:
  - Squamous epithelium: free surface arrow, one layer of three flat cells (the highlight), wavy basement membrane.
  - Areolar tissue: a framed matrix with fibroblasts, macrophages, the mast cell (highlight) and unlabelled fibres.
  - Muscle types: skeletal, smooth, cardiac, with intercalated discs (highlight).
  - Neuron, drawn horizontally: dendrites, soma, axon (highlight) with sheath segments and a break, nerve endings, glial cells.
- **b11-07-fig-7.2**, topic 2, drawn p. 422, caption p. 421, "Earthworm: outside and gut". Two cases:
  - Lateral view. The highlight is the clitellum.
  - Anterior gut. The highlight is the gizzard.
- **b11-07-fig-7.3**, topic 3, drawn p. 429, caption p. 428, "Cockroach: body and gut". Two cases:
  - Dorsal view. The highlight is the abdomen.
  - Alimentary canal. The highlight is the gizzard.
- **b11-07-fig-7.4**, topic 4, drawn p. 435, caption p. 434, "Life cycle of the frog". One case, the five-stage ring. The highlight is the "metamorphosis" arrow.

Ids and placements match `content/textbooks/bio-11-07/*.ts` (7.1 and 7.2 in topics-1-3.ts, 7.3 and 7.4 in topics-4-5-extras-a-b.ts). Pages 407 to 469 hold no other drawing. I did not run `pdfimages` or `pdftocairo` across the whole range; I took the four figure pages from the writers' reports and checked their page images.

**Groove names:** the Fig 7.2 spermathecal label is "spermathecal openings" over "(grooves 5 and 6 to 8 and 9)", so no number sits over a number. The book's single three-line label is much wider than one phone-width tag, so I drew it as a bracket over four pores with a two-line text label and a stem. That is the only label in the file that is plain text rather than a tag. In Fig 7.4 the stage names and "external fertilisation" are also two-line plain-text labels, because tags that wide do not fit beside the ring circles. The writer's version with a fraction slash (U+2044) in the chapter text is not reflected in my labels.

**The book's:**
- Every label word, panel titles included. I used the en dash in "14–16" and "8–9" (the book has a hyphen).
- Earthworm segment positions: one 17-segment grid, from which the clitellum (14 to 16), female pore (14), male pores (18), peristomium (1), the 5/10/15 scale and the four spermathecal pores in grooves 5 and 6 to 8 and 9 are all computed.
- Earthworm gut order and the relative part sizes (x spans and heights read from p. 422, rescaled).
- Cockroach: ten abdominal segments, three pairs of legs, two antennae, two wing pairs, the gut order, and the part sizes and positions read from p. 429 (rescaled).
- Frog: five stages in order, the "external fertilisation" arrow, the "metamorphosis" arrow, and the note "Indirect development (via a tadpole larva)".

**Schematic:**
- Cell outlines, nuclei, fibres, spindles, the neuron's branching and the glial cells' places.
- The neuron drawn horizontally (the book's runs vertically).
- The earthworm tail slant.
- The prostomium lobe.
- Leg zig-zags and wing outlines.
- The ring as an even pentagon with a tiny animal in each circle.
- Leader angles and all box sizes.
- The four pores marking the spermathecal grooves.

**Differences from the book:**
- The Fig 7.1 caption is not split per panel, as noted above.
- The earthworm lateral view has a bracket over the four pores where the book has one arrow.
- Colours are the app style: no fills, one marigold highlight per drawing. The book's rust and green emphasis is dropped, so the book's two emphasised items (Malpighian tubules and gizzard in 7.3) are reduced to the gizzard.

**Checks:** each case's `check` recomputes what it draws.
- Fig 7.2 lateral: the clitellum covers exactly three segments, the pore tags point into segments 14, 18 and 1, the scale numbers are 5 segments apart, and the grooves run 5 and 6 to 8 and 9.
- Fig 7.2 gut and 7.3 canal: part order, the largest and longest parts, and where the caeca and tubules sit.
- Fig 7.3 dorsal: ten abdominal segments and legs on the thorax only.
- Fig 7.4: stages in order and evenly spaced.
- Every case: all book labels present, no label within 4 px of a drawn line, no tag on a drawing line, and the kit audit clear with nothing unplaced.
