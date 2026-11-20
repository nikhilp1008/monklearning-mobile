# Biology Class 11 Chapter 13: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-16T23:04:23Z)

All four Chapter 13 figures are drawn in /Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-11-13.ts, and the Chapter 13 diagram tests and eslint both pass. The diagram jest run was `jest-serial.sh lib/diagrams -t "biology.11.13"`: 13 passed, 0 failed (the run before the last hatching fix also passed). I rendered each figure and looked at it. The file has no em dashes, and I deleted the scratch folder work-diag13 with its page images.

**Figures and pages**

| id | topic index | drawn on | caption on | name |
|---|---|---|---|---|
| `b11-13-fig-13.1` | 0 | p. 769 | p. 768 | Arithmetic and geometric growth |
| `b11-13-fig-13.2` | 0 | p. 771 | p. 770 | Differentiation cycle |
| `b11-13-fig-13.3` | 1 | p. 777 | p. 776 | Hormonal balance |
| `b11-13-fig-13.4` | 2 | p. 786 | p. 785 | Night-break experiment |

Each figure has one case and its caption is the book's own, without "Figure 13.N" and without "(see next page)". All four ids match what the chapter files reference (`topics-1-2.ts` lines 173, 178 and 413, and `topic-3-extras-a-b.ts` line 129). There is no other figure to draw. The writers recorded only these four, and the phytochrome chain on p. 801 is typeset text in the book.

**What is the book's**
- **13.1:** every label and legend entry, and axes running 0 to 10 in steps of 2. The straight line runs from (0, 1) to (10, 9.5). The sigmoid starts at 0.15, levels at 10, rises fastest near t = 3.2, and crosses the line near t = 2.7. The four phase labels point at the curve in order.
- **13.2:** every word. The meristem-derived cell and the cell that regains division power are dashed boxes under Division ON. The mature cell and the new mature tissue are solid boxes under Division OFF. Differentiation goes from the meristem-derived cell to the mature cell, dedifferentiation from the mature cell to the cell that regains division power, and redifferentiation from there down to the new tissue.
- **13.3:** the title, the subtitle, "developmental stage tips the balance" with its two-headed arc, and both box texts. The beam tilts about 5.9 degrees with the promoters' end lower, and the hangers run to each box's top corners. The fulcrum is a triangle under the pivot.
- **13.4:** I measured the bars on the page at 300 dpi.
  - Bar 1 is 8 h light then 16 h dark.
  - Bar 2 is 16 h light then 8 h dark.
  - Bar 3 is 8 h light, dark, a flash one hour wide centred on 16 h, then dark to 24 h.
  - Plant (a) flowers only on bar 1. Plant (b) flowers on bars 2 and 3.
  - The legend, the panel headings, the "night break" label and the box are also the book's, with the em dashes written as commas as you asked.

**What is schematic**
- All sizes and positions are re-laid for phone width, along with the leader angles and the box and beam proportions.
- Colours follow the app style. There are no fills and one marigold highlight per drawing: the sigmoid in 13.1, dedifferentiation in 13.2, the arc in 13.3, and the flash in 13.4.
- In 13.4, dark time is hatching and light time is an open bar, instead of the book's solid navy and yellow.
- In 13.1 the sigmoid is a logistic fitted to the page values, so the exact curve between them is mine.
- The box in 13.4 is set on two lines to fit the width: "It is the continuous dark period," / "not total light, that is decisive."
- The header comment in the file records all of this.

**Note on figure 13.4 for the caller to decide**
- The book's flash is one hour wide, 15.5 to 16.5 h, so the two dark runs beside it are 7.5 h each, not 8 h and 8 h. I kept the book's drawn width.
- The hour counts are checked in the diagram's own `check`:
  - Each bar covers 24 h with no gap.
  - Bars 1 and 2 are 8/16 and 16/8.
  - Bar 3 is 8 h light, 1 h flash and 15 h dark, with the flash centred on 16 h.
  - The longest unbroken dark run on each bar is 16 h, 8 h and 7.5 h.
  - The flower marks follow a 12 h critical night. That 12 h is a check-only value, and any value from 8 to 16 h gives the same result.
