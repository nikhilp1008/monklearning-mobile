# Biology Class 11 Chapter 17: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-17T00:17:46Z)

Chapter 17 diagrams are done: all 5 figures are redrawn in `lib/diagrams/biology-11-17.ts` (`DIAGRAMS_BIOLOGY_11_17`, the only file I touched). The jest run passes (31 tests, 0 failures), eslint is clean, and I rendered every case and looked at it.

**Ids created** (all five ids were already in the chapter files, so nothing to flag; the figure ids carry the chapter number as briefed)

| id | Book page | Topic index | Cases (chips) |
|---|---|---|---|
| `b11-17-fig-17.1` three types of movement | 1016 | 0 | Amoeboid, Ciliary, Muscular |
| `b11-17-fig-17.2` muscle organisation and sarcomere | 1023 | 1 | Organisation, Sarcomere |
| `b11-17-fig-17.3` sliding filaments and cross-bridge cycle | 1030 | 2 | Sliding filaments, Cross-bridge cycle |
| `b11-17-fig-17.4` skeleton and joint classes | 1036 | 3 | Skeleton, Joints |
| `b11-17-fig-17.5` disorders flow chart | 1043 | 4 | Disorders |

The book prints one caption per figure, so every case carries the caption word for word without "Figure N.". There are no unnumbered drawings. I counted the vector shapes and images on the five figure pages and judged the Additional-topic pages to hold none; I did not run a page-by-page `pdfimages` count of the whole range.

**What is the book's**
- Every heading, label, note and legend is kept word for word. I wrote "Pi" as P<sub>i</sub> and Ca²⁺ with a real superscript.
- The nine skeleton names, the three joint classes with their examples (skull sutures, intervertebral disc, shoulder/hip ball and socket), the six disorders with their causes, and the calcium link between tetany and osteoporosis.
- Sarcomere proportions measured off the book's vector. In 17.2 that is Z to Z 1000 units, A-band 433, H-zone 100, centred on the M-line.
- In 17.3 the proportions are Z to Z 400 relaxed and 335 contracted, thick filament 166, thin filament 175. That gives an H-zone of 50 relaxed and none contracted, with the A-band unchanged. The book prints none of these numbers; they come from its vector.
- Axial 80 and appendicular 126; the checks recompute 22 + 6 + 1 + 26 + 1 + 24 = 80 and 80 + 126 = 206.

**What is schematic**
- All outlines, sizes and positions are re-laid for a phone: 17.2 is a column, the two 17.3 panels are stacked, and the cycle is four boxes in a column.
- The thin filaments in 17.2 all run from the Z-line to the edge of the H-zone. The book's top and bottom thin rows stop at the A-band edge, which is physically inconsistent.
- The counts of epithelial cells, myofibril divisions, ribs drawn (3 arcs a side, against 24 real) and the head positions in the cycle.
- The book's "←" beside radius/ulna and synovial cavity became leader lines.
- Errata: "ribs" points to the rib arcs and "humerus" to the upper arm. The ribs leader crosses the left arm line on the way to the arcs.
- Colours are the app's no-fill style, with one marigold highlight per case:
  - 17.1: pseudopodium, cilia, muscle.
  - 17.2: myofibril, thick filaments.
  - 17.3: thick filament, power stroke.
  - 17.4: appendicular bones, synovial cavity.
  - 17.5: the calcium link.

**Tests**
- `jest-serial.sh lib/diagrams -t "biology.11.17"`: 1 suite passed, 31 tests passed.
- `npx eslint lib/diagrams/biology-11-17.ts`: no errors or warnings.
- I rendered the SVGs with a throwaway script and deleted the scratch files afterwards.
