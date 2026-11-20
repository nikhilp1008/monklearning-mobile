# Biology Class 11 Chapter 2: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-16T23:00:22Z)

All eight Chapter 2 figures are drawn in `lib/diagrams/biology-11-02.ts` (the only file I touched). Both required checks pass.

- **Jest** (`jest-serial.sh lib/diagrams -t "biology.11.2"`): 34 passed, 0 failed.
- **eslint** on the file: clean.
- **Rendering:** I rendered every case and looked at it. The Mac's stand-in fonts mean typography is not judged.
- **Cleanup:** the scratch folder `work-diag02` is empty again (page images and renders deleted).

**Ids created, with drawn page and topic index**

| id | Drawn p. | Topic index | Chips |
|---|---|---|---|
| `b11-02-fig-2.1` | 66 | 0 | Timeline |
| `b11-02-fig-2.2` | 74 | 1 | Prokaryotic cell, Eukaryotic cell |
| `b11-02-fig-2.3` | 77 | 1 | Bacterial cell |
| `b11-02-fig-2.4` | 84 | 2 | Crossroads |
| `b11-02-fig-2.5` | 93 | 3 | Mycelium and hyphae |
| `b11-02-fig-2.6` | 96 | 3 | Sexual cycle |
| `b11-02-fig-2.7` | 102 | 4 | Plant cell, Animal cell |
| `b11-02-fig-2.8` | 110 | 5 | (a) Bacteriophage, (b) Tobacco mosaic virus |

All ids and placements match the writers' `fig` blocks in `content/textbooks/bio-11-02/*.ts`. There are no unnumbered drawings. The only drawings on pp. 63–141 are these eight figure pages. The tables, lists and cheat sheets are text, and pp. 115–141 hold no drawing.

**The book's**
- Every label, heading and note word for word, with em dashes turned into colons or commas.
- Fig 2.1: box order and contents (Aristotle, Linnaeus, Whittaker 1969, Woese 1977), the years Ancient, 1735, 1969, 1977, and the axis caption. Whittaker's box is the tallest.
- Fig 2.4: the hub, three one-way arrows and the two-way arrow to Monera, with the arrow labels photosynthetic, heterotrophic, saprophytic. I kept "Fungus-like (slime moulds)" as printed; it matches the caption.
- Fig 2.5: six sporangia, four septa with five nuclei in the septate hypha, and a hypha with no cross-walls and many nuclei.
- Fig 2.6: the seven steps, the three notes, and the two ending boxes with four ascospores in an ascus and four basidiospores on a basidium.
- Figs 2.2, 2.3, 2.7, 2.8: which parts each cell or virus carries and names, and the "~300 nm" capsid length.

**Schematic**
- All positions and sizes, re-laid for a phone.
- Figs 2.1 and 2.6 run downward where the book runs across. The 2.1 axis steps are equal, not to scale, and its "increasing complexity of evidence" caption has no arrow glyph (the drawn axis arrow carries it).
- The two-panel figures 2.2, 2.7 and 2.8 are one panel per chip, and each chip carries the book's full caption word for word.
- Shapes of cells, organelles, hyphae and virus, the number and place of dots, and the leader-line angles.
- I did not draw the book's unlabelled organelle bits in Fig 2.2.
- In Fig 2.4 "saprophytic" sits beside its arrow, as the errata (p. 1175) asks.
- The header comment says all of this.

**Departures from the book**
- **Fig 2.3 nucleoid label:** the book prints "Nucleoid (circular DNA)" on p. 77. I used Fig 2.2's wording, "Nucleoid (naked circular DNA)", so one prokaryote drawing serves both figures. The check line says so. If you want the p. 77 wording exact, it is one string.
- **Fig 2.7 captions:** the book's caption has the quoted captions "Plantae — autotroph, walled" and "Animalia — heterotroph, wall-less". I wrote "Plantae: autotroph, walled" and "Animalia: heterotroph, wall-less".
- **Fig 2.4 caption:** the dash before "depicting Protista…" became a comma.
- **Fig 2.6 caption:** the book's "protoplasms fuse" (caption) and "protoplasts fuse" (box note) are kept as printed in each place.
- **Highlights:**
  - One marigold highlight per case (one per drawing for single-case figures).
  - 2.1 Whittaker box.
  - 2.2 prokaryote nucleoid; 2.2 eukaryote nucleus.
  - 2.3 nucleoid.
  - 2.4 hub.
  - 2.5 hyphae.
  - 2.6 Dikaryon.
  - 2.7 plant cell wall; 2.7 animal cell membrane.
  - 2.8 head; 2.8 capsomeres.

Each figure has a `check` that recomputes what it states, such as the box order, the years rising, the counts of septa, nuclei and tags, nesting of outlines, and arrow labels nearest their own arrows. Each also runs the label-clear, inside-frame, no-touch, inside-box and kit audit checks.
