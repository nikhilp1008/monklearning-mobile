# Biology Class 11 Chapter 14: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-16T23:13:35Z)

All six Chapter 14 figures are drawn in /Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-11-14.ts, and the narrow diagram run and eslint both pass. I looked at 14.1, 14.2, 14.3 (both cases), 14.4 (cases 1 and 3), 14.5 and 14.6 as renders. 14.4 case 2 was not opened, but it passes the same checks.

**Test results**
- `jest-serial.sh lib/diagrams -t "biology.11.14"`: 28 passed, 0 failed.
- `npx eslint lib/diagrams/biology-11-14.ts`: clean.
- I did not run tsc or the whole jest suite, as instructed. The scratch folder work-diag14, including all page images and renders, is deleted.

**Ids created** (all registered under `biology|11|14`)

| Id | Drawn on | Topic index | Cases |
|---|---|---|---|
| `b11-14-fig-14.1` | p. 823 | 0 | one |
| `b11-14-fig-14.2` | p. 827 | 1 | one |
| `b11-14-fig-14.3` | p. 829 | 1 | two: Inspiration, Expiration |
| `b11-14-fig-14.4` | p. 837 | 2 | three: Alveolus and blood, Blood and tissue, Haemoglobin |
| `b11-14-fig-14.5` | p. 839 | 2 | one |
| `b11-14-fig-14.6` | p. 846 | 3 | one |

Each id and placement matches the `fig` blocks in `content/textbooks/bio-11-14/*.ts`. Captions are the book's own words, minus "Figure 14.N" and "(see next page)". Using `<sub>` and `<i>p</i>` for subscripts and italic p is my choice, since the printed caption uses Unicode subscripts. For the two-panel figures (14.3, 14.4) each case carries only its own panel's sentence of the caption. In 14.4 cases 1 and 2 also carry the closing "Every gas moves down…" sentence.

**What is the book's**
- **14.1:** all five boxes and their words, the step order, "respiratory system" on steps 1 to 4 and "every cell" on step 5.
- **14.2:** all eight values (IRV 3000, TV 500, ERV 1100, RV 1200, IC 3500, FRC 2300, VC 4600, TLC 5800). Also the four guide levels (TLC 5800, tidal peak 2800, end-expiratory level 2300, RV ceiling 1200), the bar spans, and the trace order (three quiet breaths, a maximal inspiration to TLC, down to RV, three more breaths). The check adds up IC, FRC, VC and TLC, and measures that each drawn bar is as long as its printed value.
- **14.3:** the two pressure statements ("P_lungs < P_atm" and "P_lungs > P_atm") and every label.
- **14.4:** all pO2 and pCO2 numbers and the four haem sites. The arrows are computed so each points from the higher to the lower pressure.
- **14.5:** P50 = 26.6 mmHg, the tissue point (pO2 40), the lung point (pO2 104), the 50 % guide, the direction of both shifts, and all the notes.
- **14.6:** every structure, name and description, and the closing note.

**What is schematic**
- **Layout:** all box, ellipse, organ, rib and lung sizes and positions, re-laid for a phone. 14.1 is a column rather than a row, and 14.3 and 14.4 are one panel per case.
- **14.2:** the spirogram's time axis is not to scale, and the quiet waves are compressed. I dropped "mL" from the bar labels, since the axis says Volume (mL), so four columns fit a phone.
- **14.3:** the breath depth, the rib angles and the lung sizes are mine.
- **14.5:**
  - The curves are Hill curves with n = 2.7. At the normal P50 they give about 75 % at pO2 40 and 97.5 % at pO2 104, matching the book's curve.
  - The shifted curves use P50 of about 40 (right) and 18 (left), because the book gives no number.
  - The vertical guide at P50 runs down to its label below the axis, and the horizontal 50 % guide stops at pO2 40, so the guides do not cross the labels.
  - The "Normal" and other notes use leader lines, because their text carries subscripts and cannot be a kit tag.
- **Colours:** the app's style, with one marigold highlight per drawing: step 5, the tidal-volume waves and bar, the diaphragm, the arrows (14.4 cases 1 and 2), the haem circles (14.4 case 3), the normal curve, and the medulla.

**Notes**
- The pills with subscripts ("P_lungs < P_atm" and the 14.6 note) are custom all-STIX pills drawn in the file, not the kit's Onest result tag.
- There are no em dashes in any caption or label.
- I extended the layout check beyond the kit's audit. Every label stays 4 px clear of every drawn outline. Tags and pills stay 3 px clear. Labels stay inside the frame, do not touch each other, and sit inside their own boxes.
- No other drawings exist in pp. 819 to 885. The six figure pages are the only ones with drawn figures, and the other pages hold text, tables and page rules.
