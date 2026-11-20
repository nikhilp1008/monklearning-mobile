# Biology Class 11 Chapter 11: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-16T23:12:20Z)

All nine Chapter 11 figures are drawn in /Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-11-11.ts, and the single narrow run (biology.11.11) passes: 28 tests, none failing. `npx eslint` on the file is clean. I rendered all nine and looked at them against the book pages. The file has no em dashes.

Each figure has one case and one caption (the book's wording without "Figure 11.N" and without "(see next page)"), with <sub>/<sup> markup. The book prints exactly nine drawings, so there are no unnumbered `b11-11-<topic>-dK` ids.

| id | drawing page (caption page) | topic index | subject |
|---|---|---|---|
| b11-11-fig-11.1 | 646 (645) | 0 | chlorophyll a absorption (solid) and action (dashed) spectra |
| b11-11-fig-11.2 | 646 (645) | 0 | Priestley's jars (a), (b), (c) |
| b11-11-fig-11.3 | 648 (647) | 0 | Engelmann's experiment: prism, spectrum bar, Cladophora filament, bacteria |
| b11-11-fig-11.4 | 655 (654) | 1 | chloroplast structure, light reaction on the thylakoid membranes |
| b11-11-fig-11.5 | 657 (656) | 1 | the Z-scheme |
| b11-11-fig-11.6 | 665 (664) | 2 | chemiosmosis |
| b11-11-fig-11.7 | 668 (667) | 2 | the Calvin cycle, three turns |
| b11-11-fig-11.8 | 675 (674) | 3 | the C4 pathway |
| b11-11-fig-11.9 | 677 (676) | 3 | Blackman's law of limiting factors |

**The book's, and checked in the code:**
- Every label and caption word. Placements match the topic files.
- Errata for 11.1: the blue peak sits at about 430 nm and the red at about 660 nm, for both curves. Green is low, and the check asserts all of this.
- 11.5: the carriers in order, P680 to PQ, Cyt b6f, PC, P700 to Fd, NADP+ reductase, NADPH, with two light arrows. The note 2H2O → 4H+ + O2 + 4e− is checked to balance (H, O and charge).
- 11.6: the same water-splitting equation, ADP + Pi → ATP, the F0 channel crossing the membrane with the F1 head on the stroma side, H+ pumped down and flowing up.
- 11.7: every count is recomputed from one constants block in `check117`:
  - 3 RuBP + 3 CO2 gives 6 PGA.
  - Carbon balances at 18 C.
  - 6 ATP + 6 NADPH give 6 G3P.
  - 1 G3P exits and 5 regenerate 3 RuBP (15 C).
  - Totals are 9 ATP and 6 NADPH, or 3 ATP and 2 NADPH per CO2.
- 11.8: carbon counts in the pathway are checked (PEP 3 + CO2 1 = OAA 4; malate 4 = CO2 1 + pyruvate 3).
- 11.9: axes 0 to 100, plateaus about 55 and about 83, transition near (12, 26).

**Schematic:**
- All positions and sizes are re-laid for a phone.
- The 11.1 curves are sums of Gaussians fitted by eye, and the action curve is the absorption curve scaled to 94 per cent.
- The 11.3 bar has six equal colour bands, and the bacteria are a seeded scatter whose density follows the band.
- The jars, mouse, candle, mint plant and chloroplast ellipses are simple outlines.
- The 11.5 heights come from the page, not from a voltage scale.
- The 11.9 curves are R = Rmax(1 − e^(−I/k)) with one shared initial slope.

**Departures from the book's picture:**
- The axis note in 11.5 reads "Redox potential:" because the book's em dash is not allowed.
- The small chevron from PS I to NADP+ reductase in 11.6 is dropped.
- 11.2's panels share one caption, so I made it one case rather than three.
- The book's tints and colours become the no-fill style, with one marigold highlight each: the Chl a action curve in 11.1, the (c) flame in 11.2, the bacteria in 11.3, the thylakoid discs and lamellae in 11.4, the hν arrows in 11.5, the H+ arrows in 11.6, the net G3P exit in 11.7, the bundle-sheath cell in 11.8, and the light-limiting hatching and transition point in 11.9.

**Pages judged to hold no other drawing:** the rest of pp. 642 to 705 hold only tables and rules. I did not run a `pdfimages` count; the figure pages, headed "CHAPTER 11 · FIGURES", are the only ones with drawings.

My scratch folder with the page images and renders is deleted, and I made no git changes.
