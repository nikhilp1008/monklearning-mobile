# Biology Class 12 Chapter 12: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-17T00:58:48Z)

Biology 12 Chapter 12: all 5 figures are redrawn in lib/diagrams/biology-12-12.ts (/Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-12-12.ts), export DIAGRAMS_BIOLOGY_12_12 kept. It is the only file I changed. The jest run passes and eslint is clean.

Ids, drawn page, topic index (the 5 ids in the chapter text match the brief, none missing either way):
- b12-12-fig-12.1, p. 663 (caption p. 662), topic 0, income statement. One case. Marigold highlight: the NPP box.
- b12-12-fig-12.2, p. 670 (caption p. 669), topic 1, five steps of decomposition. One case. Marigold highlight: the mineralisation box.
- b12-12-fig-12.3, p. 676 (caption p. 675), topic 2, grazing food chain. One case. Marigold highlight: the three ×10% arrows.
- b12-12-fig-12.4, p. 684 (caption p. 683), topic 3, carbon and phosphorus cycles. Two cases, chips "Carbon cycle" and "Phosphorus cycle", same caption. Highlights: the CO2 reservoir box (carbon), the "return" arrow (phosphorus).
- b12-12-fig-12.5, p. 689 (caption p. 688), topic 4, Costanza pie. One case. Marigold highlight: the soil formation slice.

**The book's:**
- Every printed word, the arrow structure and the caption text of each figure. Captions are word for word, with real subscripts.
- 12.4 return arrow: the corrected arrow from the errata runs from the Decomposers / P-solubilising bacteria box to the soil solution, and a check enforces it. Producers also feed decomposers by a short arrow, as printed.
- 12.2: the "occur simultaneously" bracket spans the five steps and not the detritus box.
- 12.3: the three ×10% transfers with "~90% lost as heat", and the closing note.
- 12.5: the six slices in the book's order from the top, with their printed labels.

**Schematic:**
- Positions and sizes are re-laid for a phone, and colours are the app style (no fills, one marigold highlight).
- 12.1, 12.2 and 12.3 are single columns. In 12.1 the R box sits beside GPP rather than below it.
- 12.3 does not stagger the boxes as the book does.
- The 12.4 panels are two cases instead of side by side.
- Pie slice sizes are read from the page at 110 dpi: 21, 6, 6, 8, 9 and 50 per cent, which add to 100. The book prints only the labels, so "<10%" is read as 8 and 9. The pie's leader lines are mine.

**Em dashes changed to colons or commas** (house rule), none changing the sense:
- "GPP — total photosynthesis" and "R — producer respiration" now read "GPP: total ..." and "R: producer ...".
- The 12.1 title "Energy flow – income statement" is now "Energy flow: income statement".
- The 12.3 note now reads "Chain ends ~4–5 levels, too little energy remains."
- The 12.5 note now reads "~US$33 trillion yr−1: nearly 2× global GNP (~US$18 trillion)".
- The en dashes in ranges are kept.

**Book content to flag:**
- 12.5 prints no year for Costanza. 33 over 18 is 1.83, so "nearly twice" holds.
- 12.3: the figure's note says the chain ends at "~4–5 levels", but the drawing has only four trophic boxes (producers to top carnivores). This is as printed.

**Tests:**
- `jest-serial.sh lib/diagrams -t "biology.12.12"`: 19 passed, 3,043 skipped.
- `npx eslint lib/diagrams/biology-12-12.ts`: no errors.
- I rendered all six cases and compared them with the page images. They match and the layouts are clean.
- The scratch dump test and render files are deleted. The scratch images are still in /private/tmp/claude-501/scr12.
- I did not run tsc, the whole jest suite or any git command.

A system note said the file changed on disk after my last read. I did not read it again. The jest and eslint results above come from the final state.
