# Biology Class 12 Chapter 6: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-17T00:55:28Z)

DONE. Wrote only /Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-12-06.ts. It replaces the stub, keeps the export DIAGRAMS_BIOLOGY_12_06 (registered under 'biology|12|6'), and holds 4 diagrams in 7 cases.

TESTS
- jest-serial.sh lib/diagrams -t "biology.12.6": PASS, 22 passed, 0 failed.
- npx eslint on the file: clean.
- The file has no em dashes. Scratch test and dump files are deleted.
- Early runs failed with "Cannot read properties of undefined (reading 'id')". That came from biology-12-05.ts, which another agent was writing and which had no export yet. It cleared once 12-05 exported, and nothing of mine needed a change.
- I rendered every case to SVG and PNG and looked at each, using a throwaway scratch test (since deleted). The Mac preview has no STIX italic, so I could not confirm italics there. The Latin names are marked with <i>, and a check confirms it.

IDs, DRAWN PAGE AND TOPIC INDEX
- b12-06-fig-6.1, drawn p. 300 (caption p. 299), topic 0. Miller–Urey apparatus, one case.
- b12-06-fig-6.2, drawn p. 309 (caption p. 308), topic 1. Types of natural selection, three cases: Stabilising, Directional, Disruptive. Each case shows one panel with the full caption.
- b12-06-fig-6.3, drawn p. 319 (caption p. 318), topic 2. Two cases: Primate tree, and Fossil hominins.
- b12-06-fig-6.4, drawn p. 327 (caption p. 326), topic 3. Geological timeline, one case.
- All four ids match the fig blocks in content/textbooks/bio-12-06 (topics-1-2.ts holds 6.1 and 6.2, topics-3-4-extra-a.ts holds 6.3 and 6.4). Nothing is missing either way, and no unnumbered drawing exists.
- Pages 299/300, 308/309, 318/319 and 326/327 have 3/56, 7/24, 6/45 and 5/39 vector drawings. All other pages of pp. 294-350, the hominin table on p. 316 and the Additional topics are text and tables only.
- Captions are the book's word for word. I dropped "Figure 6.x" and "(see next page)", and set subscripts in 6.1 (CH<sub>4</sub> and so on).

WHAT IS THE BOOK'S
- 6.1: the title "Miller–Urey Apparatus (1953)" and the labels (A) Electrodes (spark), (B) CH4 + NH3 + H2 + water vapour, (C) Boiling water ("primitive ocean"), (D) Condenser, (E) U-trap (amino acids), plus "Heat". The loop runs C up to B, B to the condenser, down through the U-trap and back to C, with 4 arrows.
- 6.2: the three panel titles, the legend (Before selection, After selection, Removed by selection), "Number of individuals" and "Phenotype". The dashed before curve and solid after curve are kept. Removed parts are the book's: both tails in (a), the left tail in (b), the middle in (c).
- 6.3: all nine leaves in the book's branching order. The chimpanzee–human split is marked "Last common ancestor (chimpanzee–human)". The Fossil hominins list has all 7 entries in the book's order with the printed notes (ape-sized, ~400–500 cc, 650–800 cc, ~900 cc, 1400 cc, ~1600 cc, ~1350–1600 cc) and "older → younger". Latin names are italic and Neanderthal and Cro-Magnon are not.
- 6.4: the title, "Animal groups", the seven groups in the book's order, the dashed 65 mya line labelled "65 mya (dinosaur extinction)", "Adaptive radiation of mammals", the reptile note "(dark: dinosaurs dominate)", the ticks 2000, 600, 500, 400, 300, 200, 100, 0, and "Plant track:" with its five stages and the arrow line. Bar spans were read from the vector drawing against the book's own axis: mammals ~220 mya (a thin bar that widens after 65), birds ~150, reptiles ~300 (dark stretch ~200 to 65), amphibians and fishes ~350, invertebrates ~500, single-celled life 2000.

WHAT IS SCHEMATIC
- All positions and sizes are re-laid for a phone. 6.2 is one panel per case, 6.3 is split into tree and hominins, and 6.4 has labels beside the bars instead of a legend column.
- The 6.2 curves are Gaussians. The book prints no numbers, so widths, peak heights and cut points are read from its drawing.
- The 6.4 plant-track boundaries (about 700, 470, 250 and 120 mya) are read from the book's line. The book prints none.
- The shapes of the 6.1 flasks and tubes are mine.
- The book's colours and fills are dropped. The highlight is the marigold U-trap deposit in 6.1, the hatching of removed individuals in 6.2, the ancestor dot in 6.3 (tree case) and the 65 mya line in 6.4. The Fossil hominins case has no highlight, because the book has none there.

DEVIATIONS TO NOTE
- The 6.4 axis title, which the book prints with an em dash, is set with a comma: "Millions of years ago (mya), scale compressed before 600 mya".
- In 6.4 the dark reptile stretch is outlined heavier, since fills are not allowed.
- The y-axis label "Number of individuals" is horizontal beside an arrow, because the kit cannot rotate text.

The checks recompute the structure: the 6.1 loop order, the 6.2 curve shapes and cuts, the 6.3 tree geometry, and the 6.4 spans, ticks and track order. Every case also passes layout and audit.

I did not edit the chapter text or any other file.
