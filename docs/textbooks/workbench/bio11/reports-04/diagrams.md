# Biology Class 11 Chapter 4: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-16T23:05:41Z)

All six Chapter 4 figures are drawn in /Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-11-04.ts, and the narrow test run and eslint both pass.

**Checks**
- `jest-serial.sh lib/diagrams -t "biology.11.4"`: 19 passed, 0 failed.
- `npx eslint lib/diagrams/biology-11-04.ts`: clean.
- No em dash anywhere in the file. Scientific names in labels are italic via `<i>`.
- The writers placed all six `fig` ids as the brief listed them, and the topic indexes match (checked in `topics-1-3.ts` and `topics-4-5-extras-a-c.ts`).

**Ids created** (each has one chip and the book's caption without "Figure 4.N" and without "(see next page)"):

| id | drawn page (caption page) | topic index | what it is |
|---|---|---|---|
| `b11-04-fig-4.1` | p. 224 (p. 223) | 0 | whole-kingdom classification chart |
| `b11-04-fig-4.2` | p. 228 (p. 227) | 1 | three body-cavity cross-sections |
| `b11-04-fig-4.3` | p. 237 (p. 236) | 2 | dichotomous key to the non-chordate phyla |
| `b11-04-fig-4.4` | p. 237 (p. 236) | 2 | longitudinal section of a Sycon sponge |
| `b11-04-fig-4.5` | p. 245 (p. 244) | 3 | classification of Chordata |
| `b11-04-fig-4.6` | p. 247 (p. 246) | 3 | fate of the notochord |

I looked at all six renders (`qlmanage`). The Mac preview does not show bold or italic faces, so I judged layout only.

**Unnumbered drawings:** none found. I did not run `pdfimages` over all of pp. 221-283. I relied on the writers' reports (pp. 266-283 hold no drawing, no unnumbered drawings elsewhere) and looked at the page images only for the five figure pages.

**The book's, as printed**
- Every word of every box and arrow label, read from the page images. Em dashes inside labels became a colon or a comma (e.g. "Porifera: cellular grade", "No, soft", "Yes, jointed"). The "Notochord present?", "Cranium?" and "Jaws?" questions and the Yes/No branches are the book's.
- 4.1: the ten non-chordate phyla in the book's order, with each grade, feature and example genus, and Pisces/Tetrapoda with their genera.
- 4.2: the layer order (ectoderm outermost, endoderm innermost) and the three mesoderm patterns (solid, scattered patches, two linings).
- 4.3: every question and every answer label, and which phylum each branch ends at.
- 4.4: all five labels plus Osculum, Water in, Water out and "Water flow through spongocoel".
- 4.5: the splits, the "fins" and "limbs" labels, and each notochord note.
- 4.6: the three groups' labels, the head/tail/Larva/Adult/Embryo words, and the three fates.

**Schematic**
- All box sizes and positions, because the book's charts are far wider than a phone. Where the book has two columns in 4.1, I stack them with a vertical "Yes" line.
- 4.3's layout: the answers that continue the key run down the left, and the finished phyla sit on the right.
- All shapes in 4.2, 4.4 and 4.6, with no scale. The counts of ostia, spicules, choanocytes and vertebrae are only a pattern, as in the book.
- Colour is the app's style: no fills, and one marigold highlight per figure (the starting point in 4.1, 4.3 and 4.5, the mesoderm in 4.2, the water path in 4.4, the notochord in 4.6). Because there are no fills, the germ layers in 4.2 are told apart by line style, with a key under the drawing.
- The book's own layout slips are not repeated: 4.1's arrow crossing a corner of the AGNATHA box, 4.2's two overlapping mesoderm circles (mine are 11 separate patches, and a check confirms they don't overlap), and 4.3's Ctenophora box sitting under Platyhelminthes.
- A header comment in the file says all of this.

**Left as is**
- The Chapter 1 look and the kit's label-clear and inside-frame checks are kept.
- 4.1 is tall (about 780 px at 360 wide), with the same two-column content as the book's chart.
- Scratch folder `/Users/raasikhnaveed/Desktop/monk-learning-mobile/biology-work/work-diag04/` is empty (page images and renders deleted).
