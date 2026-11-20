# Biology Class 11 Chapter 3: keypoints helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-16T23:05:39Z)

I wrote /Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/revise/keypoints-biology-11-03.ts. It has 44 points, and the lint and jest runs came out clean. I did not render the points on screen or check them against the book PDF page by page.

**Counts per topic**
- Topics 01 to 06 (indexes 0 to 5) have 5 points each, 30 in all: remember, remember, mixup, mistake, shortcut.
- Additional A to F (indexes 6 to 11) have 2 points each, 12 in all, both kind `remember`.
- G (index 12, the Practice Exercise) has no points.
- H (index 13, What NEET Actually Asks) has 2 points: remember and mistake, as Chapter 1's E.

**Memory lines**
- Each of the six topics has `say` on exactly two points, giving 12 lines.
- They are the first two aids of each cheat sheet, word for word, with quotation marks and bold removed.
- Topic 01's cheat sheet prints two aids. Topics 04 and 05 print three, and Topic 06 prints two (the Topic 03 aids are described in the next bullet).
- The third aid is not used.

**Folios**
- The page (folio) is a comment above every point.
- Pages come from grepping `bio11.paged.txt` against the brief's page map.
- I did not read the PDF pages themselves.

**Where I departed from the book, and why**
- **Haplontic examples:** the book's "most algae" is worded "many algae", since the brown and red algae named beside them are not haplontic.
- **Pteridophytes:** I say "first land plants with vascular tissue", not "first true land plants", because bryophytes are land plants too. "Pteropsida" is dropped (it is now Polypodiopsida), with "true ferns" used instead.
- **Gymnosperms:**
  - No point says gymnosperm xylem has no vessels, or that Cycas has the largest sperm or is closer to pteridophytes.
  - Double fertilisation is called "the angiosperm event", with triple fusion making triploid endosperm. I did not use "found in no other group".
- **Embryo sac:** it is "typical mature" (7 cells, 8 nuclei). The two assertion-reason keys in the book disagree (G says (b), Topic 05 and H say (a)), so I used neither. Pollen is described by its generative and vegetative cell, not a fixed cell count.
- **Life cycles:** seed plants are diplontic by NCERT's convention. I added the book's own note that only Fucus is clearly gametic, and said ferns are haplo-diplontic.
- **Selaginella:** the male gametophyte is "retained, never free-living". The book says both "within" and "within or just outside" the spore wall.
- **Oogamy:** I left out the book's "found in all animals".
- **Spirulina:** it is given as the book's table has it (listed with the algae in NCERT, though a cyanobacterium). The "§3.1 to §3.5" references are not used.
- **Archetype 4:** the book's "if A is false, mark (c) or (d)" is wrong, so the point says to check A first on its own.
- **H shares:** these are the book's estimate from past papers, with no years. The book's "one question in three" for 19 of 52 is "a little over a third". Superlatives such as "single most-tested" are dropped or reworded.
- **N₂ markup:** I wrote "nitrogen-fixing" in words rather than use `<sub>`, because the Chapter 1 header lists only `<i>` and `<frac>` as the markup.
- **Additional F:** its traps point is `remember`, not `mistake`, to follow Chapter 1's kinds for A to D. Say if you want it as `mistake`.
- **Header comment:** it records these choices.

**Results**
- `jest-serial.sh lib/revise`: 1 suite passed, 137 of 137 tests.
- `npx eslint` on my file: clean.
- No em dashes in the file.
- I ran no tsc, no whole jest and no git commands that change anything.
