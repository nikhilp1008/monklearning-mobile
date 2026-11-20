# Biology Class 11 Chapter 16: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-17T00:22:03Z)

Chapter 16 diagrams are done: /Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-11-16.ts replaces the stub and keeps the export `DIAGRAMS_BIOLOGY_11_16`.

**Tests:**
- `jest-serial.sh lib/diagrams -t "biology.11.16"`: 28 passed, 0 failed.
- `npx eslint lib/diagrams/biology-11-16.ts`: clean.
- I compiled the file outside jest, rendered every case to PNG with qlmanage and looked at each one, then deleted the scratch.
- A few render-only observations that no test measures: the kidney notch in 16.2/16.3 is shallower than the book's, and the 16.3 nephron zig-zags are crude.

**Ids created.** The chapter files already contain all six fig ids. I changed no chapter file and no test. The book has 6 figures and I drew 6, with no unnumbered drawing. Every page of pp. 943 to 1011 was counted; all six figures sit on the "CHAPTER 16 · FIGURES" plates and there is no raster image. The other pages hold only text, tables and rules.

| Id | Drawn page | Topic index | Cases |
|---|---|---|---|
| `b11-16-fig-16.1` | p. 949 | 0 | 1 |
| `b11-16-fig-16.2` | p. 956 | 1 | 1 |
| `b11-16-fig-16.3` | p. 958 | 1 | 1 |
| `b11-16-fig-16.4` | p. 958 | 1 | 2 |
| `b11-16-fig-16.5` | p. 965 | 2 | 1 |
| `b11-16-fig-16.6` | p. 973 | 3 | 3 |

- **16.4 cases:** "Tubule" and "Blood supply".
- **16.6 cases:** "RAAS", "ADH" and "ANF".
- **Captions:** each is the book's, without "Figure 16.N" and without "(see next page)". The multi-case ones add "(1) …", "(2) …" or "(3) …" on the same pattern as 14.4.

**The book's:**
- Every label, box, note and axis name is kept word for word.
- Figure 16.1 keeps the five organs and their functions in order, plus Flame cells, Antennal gland, the "Increasing complexity" arrow and the note box. The text under the last organ is "Vertebrate kidney" on one line.
- Figure 16.2 keeps every named part, which vessel leaves which, and the right kidney on the viewer's left.
- Figure 16.3 keeps the structures, with the cortical and juxtamedullary nephron markers.
- Figure 16.4 keeps the segments, the water-out arrows on the descending limb and the salt-out arrows on the ascending limb. Afferent is wider and efferent narrower.
- Figure 16.5 keeps the scale labelled Cortex 300, Outer medulla 600, 900 and Inner medulla 1200 mOsm/L, and every arrow and label the book prints.
- Figure 16.6 keeps every box and arrow label of the three pathways, the effects "→ vasoconstriction / → GFR up" and "→ Na⁺ reabsorption / → water follows", and the dashed "ANF inhibits renin release" line ending in a bar at the JGA box.

**Computed:** the 16.5 scale steps (each 300 mOsm/L is 110 px, and the check recomputes them), and arrow directions in 16.2 and 16.4 to 16.6.

**Schematic:**
- All sizes, shapes and positions.
- The animal outlines in 16.1, the kidney, calyces and zig-zag nephrons in 16.3, and the tubes, loop and vessels in 16.4 and 16.5.
- Leader angles.

**Deviations from the book:**
- The book's colour coding (red, blue, green) is not kept; it uses the app's style, with no fills and one marigold highlight per drawing.
- The 16.5 pink shading is not drawn; the scale carries the gradient.
- In 16.4 the book's single picture is split into two cases to fit a phone.
- In 16.6 I highlight only one box per pathway: Angiotensin II, the collecting duct box, and ANF. The book fills both Angiotensin II and Aldosterone.
- The 16.6 header box ("LOW BP / volume" / "HIGH BP / volume") is repeated in each case. In case 3 I added a JGA box so the dashed inhibition line has something to end on.
- 16.4 has two plain-text label notes that the book puts on separate lines.

**Marigold highlights:**
- 16.1: the "Increasing complexity" arrow.
- 16.2: the two kidneys.
- 16.3: the three medullary pyramids.
- 16.4: the loop of Henle in the Tubule case, and the JGA in the Blood supply case.
- 16.5: the loop of Henle.

**Numbers the figures carry:** the 300 to 1200 mOsm/L gradient matches the caption and the brief's "about 300 to 1200". The figures contain no other arithmetic, so nothing else needed recomputing here.
