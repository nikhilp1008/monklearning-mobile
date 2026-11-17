# Biology Class 12 Chapter 8: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-17T00:56:48Z)

Biology 12 Chapter 8 diagrams are done. All 8 numbered figures are redrawn in /Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-12-08.ts. The stub is replaced and the export name `DIAGRAMS_BIOLOGY_12_08` is kept.

**Tests**
- `jest-serial.sh lib/diagrams -t "biology.12.8"` passes: 25 tests (the duplicate-id test plus check, audit and "names every part" for each of the 8 figures), 0 failures.
- `npx eslint lib/diagrams/biology-12-08.ts` is clean.
- No em dashes in the file.
- The scratch jest test, SVG dumps and helper files are deleted.
- An earlier run of the full `lib/diagrams` suite failed with "Cannot read 'id' of undefined" at `index.ts:223`. That came from another writer's chapter file that was mid-edit at the time, not from this file. A later run was clean.

**Figure ids**
All 8 ids match the chapter text and the brief; none missing either way. Each figure has one case and one chip. Captions are the book's words (with CO<sub>2</sub> and B<sub>12</sub> subscripts and italic organism names).

| id | Drawn page (caption page) | Topic index |
|---|---|---|
| `b12-08-fig-8.1` stages of curd making | p. 414 (413) | 1 |
| `b12-08-fig-8.2` dough before and after fermentation | p. 414 (413) | 1 |
| `b12-08-fig-8.3` acid against gas fermentation | p. 416 (no caption page) | 1 |
| `b12-08-fig-8.4` microbial products in fermentors | p. 424 (423) | 2 |
| `b12-08-fig-8.5` sewage treatment plant flow | p. 432 (431) | 3 |
| `b12-08-fig-8.6` floating gas-holder biogas plant | p. 440 (439) | 4 |
| `b12-08-fig-8.7` mode of action of Bt toxin | p. 448 (447) | 5 |
| `b12-08-fig-8.8` Rhizobium nodules and Glomus mycorrhiza | p. 450 (449) | 5 |

I rendered every figure and looked at each one. The Mac's stand-in fonts show no italics or bold, so judge type on the device.

**The book's**
- Every word of every heading, box, label and note is kept.
- Sequences are kept:
  - Steps 1 to 4 in 8.1.
  - Plant order in 8.5: sewage in, primary, secondary (aeration tank), settling tank, activated sludge, anaerobic digester, biogas (CH<sub>4</sub>, CO<sub>2</sub>, H<sub>2</sub>S).
  - The small part of the activated sludge recycled (dashed) to the aeration tank, the major part to the digester.
  - Steps 1 to 3 in 8.7, with Protoxin to Toxin under "Alkaline gut pH".
- Numbers and counts are kept:
  - The 8.3 table has 3 columns and 5 rows.
  - 8.4 has four product classes with their organisms.
  - 8.6 says "biogas (about 60% CH<sub>4</sub>)" and has six methanogen dots.
  - 8.7 has four gut cells with pore rings under three of them.
  - 8.8 has two nodules and six hyphae, each ending at a PO<sub>4</sub><sup>3−</sup> ion.
- All label wording is the book's; I did not alter any.

**Schematic**
- Layout: everything is re-laid for a 360 px phone. 8.1, 8.4, 8.5 and 8.7 are columns where the book has a row; 8.5 is a two-column snake.
- 8.5 outputs: the "Primary sludge" and "Treated water" arrows leave sideways, where the book draws them down and up.
- 8.3: label lines are broken to fit the columns. It is drawn as a figure with the id the brief gave, so you can switch it to a `table` later.
- 8.1 and 8.2 counts: the glass dot counts in 8.1 (0, 2, 8, 4 ovals) and the bubble sizes and positions in 8.2 are approximate.
- Drawing details: 8.7 cell sizes, 8.8 hypha angles and the 8.6 pipe routes are my own. 8.6 also has a small flame diamond for the stove.
- Style: the book's colours are dropped. Each figure has no fills and one marigold highlight:
  - 8.1: step 3.
  - 8.2: the risen dough.
  - 8.3: the chief-product row.
  - 8.4: the fermentor.
  - 8.5: the aeration tank.
  - 8.6: the gas holder.
  - 8.7: the alkaline-gut box.
  - 8.8: the plant root.

I did not touch the chapter text, the registries or any other file.
