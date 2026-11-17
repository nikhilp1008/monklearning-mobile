# Biology Class 11 Chapter 8: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-16T23:12:06Z)

I drew all six figures of Chapter 8 in lib/diagrams/biology-11-08.ts, and the narrow diagram run and eslint both pass. I rendered each one and looked at it. I did not run the writers' chapter tests, since you only asked for the diagram run.

Results:
- `jest-serial.sh lib/diagrams -t "biology.11.8"`: 22 passed, 0 failed.
- `npx eslint lib/diagrams/biology-11-08.ts`: clean.
- I deleted the page images and render folder from work-diag08.

Ids created (all registered under 'biology|11|8', placements checked against content/textbooks/bio-11-08/topics-1-2.ts and topics-3-4.ts):

| id | drawn page | topic index | what it shows |
|---|---|---|---|
| b11-08-fig-8.1 | p. 474 | 0 | Bacterial cell envelope. Highlight: mesosome. |
| b11-08-fig-8.2 | p. 477 | 0 | Fluid-mosaic membrane. Highlight: integral protein and its lateral-movement arrow. |
| b11-08-fig-8.3 | p. 484 | 1 | Secretory pathway. Highlight: secretory vesicle. |
| b11-08-fig-8.4 | p. 486 | 1 | Mitochondrion and chloroplast. Highlights: cristae in the first case, granum in the second. |
| b11-08-fig-8.5 | p. 492 | 2 | Axoneme "9 × 2 + 2". Highlight: peripheral doublets. |
| b11-08-fig-8.6 | p. 495 | 2 | Four chromosome types. Highlight: centromere. |

**What is the book's** (all read from the page images):
- **Labels:** every label word. This includes "Nucleoid", "Plasmid", "Cytoplasm", "ribosomes", "cis", "trans", "release", the pathway line, the "9 × 2 + 2 axoneme structure" line, the panel titles and the chromosomes' small descriptions.
- **Fig 8.1:** the layer order, with the dashed glycocalyx outermost, then the wall, then the membrane, and the mesosome as an infolding.
- **Fig 8.2:** the 14 head columns (7 heads, integral protein in two columns, 2 heads, glycoprotein in two columns, 1 head), 10 heads per leaflet, and the integral protein spanning the bilayer.
- **Fig 8.3:** three rough-ER lines with four ribosomes each, four Golgi cisternae, and the two exits (secretory vesicle and lysosome).
- **Fig 8.5:** the proportions 33/127 (sheath to membrane) and 95/127 (doublet ring to membrane), nine doublets and two central microtubules.
- **Fig 8.6:** the centromere heights of 0.50, 0.37, 0.20 and 0.06 of the chromosome height, and the arm ends read off the page, scaled by 0.6.

**What is schematic:**
- **Layout:** the sizes and positions in Figs 8.1, 8.3 and 8.4, the leader angles and the colours (no fills, one marigold highlight).
- **Fig 8.3:** it runs down the page instead of left to right, so cis is the top face and trans the bottom. The order of the stages is the book's.
- **Fig 8.4:** the organelles lie sideways, and the number and spacing of cristae, thylakoids and grana are mine.
- **Fig 8.5:** the spoke and dynein-arm angles are mine.
The file's header comment says all this.

**Judgment calls:**
- **Fig 8.4 as two cases.** Chips "Mitochondrion" and "Chloroplast", each carrying the book's whole caption, because two panels side by side are unreadable at phone width. If you would rather have one stacked drawing, say so.
- **Captions.** They are word for word with "Figure 8.N" removed. The book's em dash after the opening words became a colon in 8.2 to 8.6 and a comma in 8.1. There were no "(see next page)" pointers. The caption's own arrows (→) are kept.
- **No unnumbered drawings.** pp. 470–532 hold only these six; I checked the page images and the writers' counts. I did not run `pdfimages` over every page.
- **Labels.** All are plain Latin, so no STIX pills were needed. The "9 × 2 + 2" and pathway lines are drawn as STIX text.

**What each check verifies:**
- **8.1:** radii fall 84 > 78 > 72, the wall leader ends in the wall band, the mesosome starts on the membrane and lies inside it, and the nucleoid and plasmid are inside.
- **8.2:** column layout, protein spans, tails do not meet, proteins clear the heads, the arrow is centred under the integral protein, and the chain and peripheral protein are on the right faces.
- **8.3:** each arrow joins the right nodes, the Golgi has four cisternae with both exits at the trans face, and the flow runs top to bottom.
- **8.4:** membrane bands, cristae attached to the inner membrane, DNA and ribosomes in the matrix, grana inside the envelope and linked, and all names present.
- **8.5:** nine doublets 40° apart, the page's proportions, spokes reach the sheath, and the central pair is inside it.
- **8.6:** centromere fractions against the page, equal arms in (a), unequal in (b), a tiny arm in (c) and no upper arm in (d).
- **All six:** every label is 4 px clear of drawn lines, labels stay inside the frame and do not touch, and the kit audit is clear with nothing unplaced.
