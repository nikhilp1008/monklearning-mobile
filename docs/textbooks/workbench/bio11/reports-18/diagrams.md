# Biology Class 11 Chapter 18: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-17T00:21:15Z)

DONE. Wrote only /Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-11-18.ts. It replaces the stub and keeps the export `DIAGRAMS_BIOLOGY_11_18`. Nothing was edited in the chapter files, registries or tests.

TEST RESULTS
- `jest-serial.sh lib/diagrams -t "biology.11.18"` passes: 1 suite, 22 tests passed, 0 failed (the 2,777 other tests are skipped by the filter).
- `npx eslint lib/diagrams/biology-11-18.ts` gives no warnings or errors.
- I rendered every case to PNG and looked at each one: compiled with sucrase outside jest, turned the SVGs into PNGs with qlmanage, and fixed the leader and label clashes I found. The scratch files are all in the session scratchpad; nothing was left in the repo. The qlmanage fonts are Mac stand-ins, so judge layout, not type.

FIGURE IDS
All six ids already exist as fig blocks in the chapter files, so nothing is missing.

| id | drawn from page | topic index | cases |
|---|---|---|---|
| b11-18-fig-18.1 | 1081 (caption p. 1080) | 1 | one: multipolar neuron |
| b11-18-fig-18.2 | 1083 (caption p. 1082) | 1 | one: chemical synapse with EPSP and IPSP in the same drawing |
| b11-18-fig-18.3 | 1090 (caption p. 1089) | 2 | one: mid-sagittal brain |
| b11-18-fig-18.4 | 1098 (caption p. 1097) | 3 | one: classification tree |
| b11-18-fig-18.5 | 1101 (caption p. 1100) | 3 | two, "Sympathetic" and "Parasympathetic" (same book caption on both) |
| b11-18-fig-18.6 | 1107 (caption p. 1106) | 4 | one: withdrawal reflex arc |

Captions are the book's, word for word, taken from the page text.

No other drawings in the range:
- No unnumbered drawings (`b11-18-<topic>-d<k>`) were needed. Each of the six plates shows one figure.
- `pdfimages -list` for pp. 1074 to 1134 returned no raster images. All six are vector.
- I judged every other page in that range to hold text, tables and page rules only, as the brief said. I did not render all of them to check, only the six plates.

WHAT IS THE BOOK'S
- Every word of every label, title, box and note is kept. That includes the plate titles "Chemical Synapse" and "Withdrawal Reflex Arc", and Ca<sup>2+</sup> drawn with a real superscript.
- 18.1: five dendrites, three myelinated stretches each with a Schwann cell, and two nodes of Ranvier. Also three terminals with knobs, eight Nissl's granules, and the impulse arrow pointing away from the cell body.
- 18.2: five vesicles, four neurotransmitter dots and arrows, four receptors, two Ca<sup>2+</sup> arrows. The EPSP trace rises and the IPSP trace falls, each from its own resting line.
- 18.3: all 15 names. The meninges run outside in: dura, arachnoid, pia.
- 18.4: all 11 boxes and 10 joins, the three notes, and the two dashed control frames.
- 18.5: the four effects of each division (pupil, bronchi, heart rate, digestion), the arrow directions, and the printed ↑ and ↓ after "Heart rate" and "Digestion".
- 18.6: the five numbered steps in order, all printed labels, the grey and white matter, the central canal, and the dashed branch to the brain.

WHAT IS SCHEMATIC
- All sizes and positions are re-laid for a phone:
  - 18.1 and 18.2 are drawn upright.
  - 18.4 is a top-down tree with elbow joins.
  - 18.5 is one panel per division instead of side by side.
- Shapes I simplified from the book: the brain outline and the grey-matter butterfly, the dendrite branching, the flame and the muscle fibres. The meninges are computed offset outlines of the brain (8 px and 4 px out).
- Decoration in the book that I did not draw: the pons hatching and the small bars beside the receptors.
- Labels in 18.3 and 18.6 are STIX text with grey leaders, as in the book, because kit tags are too wide for those layouts. The other names are kit tags. This is also why "Ca²⁺" and the two-line names work.
- Colours follow the app style: no fills, one marigold highlight per drawing. Each highlight is one thing:
  - 18.1: the impulse arrow.
  - 18.2: the neurotransmitter dots and arrows.
  - 18.3: the dura mater, with its own leader.
  - 18.4: the Autonomic box.
  - 18.5: the four effect arrows.
  - 18.6: the whole reflex arc.
- The book's orange and green are not used.

CHECKS
Each case's checks recompute or verify structure from the data behind the drawing, plus the shared layout checks (labels clear of lines, inside the frame, not touching, inside their box). Examples:
- 18.1: 3 sheaths and 2 nodes, the nucleus inside the cell body, dendrites on the side away from the axon, and the arrow direction.
- 18.2: the EPSP trace ends above where it starts and the IPSP trace ends below.
- 18.3: the meninges nest, with the right 8 and 4 px gaps, and each of the three leaders ends on its own layer.
- 18.4: tree structure and level order.
- 18.5: each organ moves opposite to the other division.
- 18.6: the order of the arc, and the entry and exit sides of the cord.

Two of these checks are weaker than their names suggest. The 18.2 check on the Ca²⁺ arrows only tests constants. The 18.3 "at most 2 marigold strokes" check is loose because the dura line and its leader both count.

No overgeneral claims or wrong numbers came up. These figures carry no numeric values; the only numbers are the step numbers 1 to 5.
