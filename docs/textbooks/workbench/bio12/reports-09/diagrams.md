# Biology Class 12 Chapter 9: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-17T00:58:06Z)

DONE. I wrote only /Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-12-09.ts. It exports DIAGRAMS_BIOLOGY_12_09 with 8 diagrams (10 cases) and is already registered under 'biology|12|9'. I did not touch the chapter files, registries or tests.

TESTS
- jest-serial.sh lib/diagrams -t "biology.12.9" gave 31 passed, 0 failed on the last run. One earlier run had 7 failures, all in my own checks or label gaps, fixed, and then one failure (the Taq label 2 px from its leader), also fixed.
- npx eslint lib/diagrams/biology-12-09.ts is clean.
- I rendered every case through the dump route and looked at each against the page image. Scratch files are deleted.

IDS (drawn page, topic, topic index)
- b12-09-fig-9.1: p. 483, Topic 01, index 0. One case.
- b12-09-fig-9.2: p. 490, Topic 02, index 1. One case.
- b12-09-fig-9.3: p. 492, Topic 02, index 1. Three cases, one per panel: Cut, Sticky ends, Ligation. Each case carries the whole caption, because the book's caption is one sentence.
- b12-09-fig-9.4: p. 492, Topic 02, index 1. One case.
- b12-09-fig-9.5: p. 498, Topic 03, index 2. One case.
- b12-09-fig-9.6: p. 500, Topic 03, index 2. One case.
- b12-09-fig-9.7: p. 506, Topic 04, index 3. One case.
- b12-09-fig-9.8: p. 508, Topic 04, index 3. One case.

All 8 ids in your brief are in the chapter text and match the diagrams one for one. I found no mismatch and no unnumbered drawing.

BOOK'S (kept)
- 9.1: the three boxes, the arrows and the note "All three must succeed for a stable genetically modified organism."
- 9.2: pBR322 (4361 bp) and the four genes with their descriptions. The eight site names are kept, and so are the two notes under the ring. The angles of the sites and gene arcs are read by eye from the page.
- 9.3: every sequence, the cut between G and A on each strand, the four-base AATT/TTAA overhangs with the 4-cell stagger, the four nicks, and all panel titles and piece names.
- 9.4: the three steps with 0, 42 and 0 °C, all notes, the 3 pores and the legend. The caption's CaCl₂ is a subscript.
- 9.5: the 3/4/2 band layout and band positions (read from the page), the cathode (−) and anode (+) ends, and every note.
- 9.6: three grey bands and the target band lowest, the slice, the elution box, the tube, and the labels.
- 9.7: the nine steps in the book's serpentine order (1-2-3 across, 4-5-6 back, 7-8-9 across), with the book's wording.
- 9.8: the three stages and temperatures, the two primers, the Taq square, the "repeat ~30 cycles" loop, and the closing note with 2³⁰ ≈ 10⁹.

COMPUTED
- 9.3: the pieces are produced by cutting the printed sequences at the cut positions, and the check recuts them. The check also confirms the ligated product equals ···GAATTC···GAATTC··· and that the bottom strand is its complement.
- 9.2: the checks prove PstI and PvuI lie inside ampR, BamHI and SalI inside tetR, and EcoRI, ClaI and HindIII are outside every gene.
- 9.5: the checks prove every band lies past its well, toward the anode.
- 9.8: 2³⁰ = 1 073 741 824 ≈ 1.07 × 10⁹.

SCHEMATIC
- All box and organ sizes and positions are re-laid for a phone. 9.1, 9.4 and 9.6 are columns. In 9.5 the gel and its UV view are stacked.
- 9.7 keeps the serpentine but is smaller than the book's.
- The plasmid angles and band sizes are by eye, since the book prints no sizes.
- 9.4: the book's squares are drawn as small ink squares.
- 9.8: the two strands differ in ink and grey.

COLOURS CARRIED BY WORDS (no fills, one marigold highlight)
- The book's colours are not copied. Highlights chosen: 9.1 the two chain arrows, 9.2 the plasmid name in amber text, 9.3 the cut arrows / the shaded overhangs / the ligase arrows, 9.4 the 42 °C box, 9.5 the UV bands, 9.6 the target band with its two dashed cut lines, 9.7 box 9, 9.8 the repeat loop.
- 9.3: foreign DNA is grey and bold, vector is dark, and panel 3 has a small key line. The Mac's stand-in font does not render semibold, so on my renders the difference is only grey versus dark. Please check it on a device.
- 9.7: the book's four-colour key is kept as words. Under the grid are lines "1 DNA isolation", "2, 4, 5 Cutting, ligation, insertion", "3, 6 Amplification / selection", "7, 8, 9 Expression and product". That grouping is my reading of the book's colours.

CHANGES TO REPORT
- Captions are the book's, minus "Figure 9.N" and "(see next page)". The only other change is that the caption of 9.2 writes the gene symbols as <i>amp</i><sup>R</sup> and <i>tet</i><sup>R</sup>, italic, as the main brief asks.
- The chapter text writes amp<sup>R</sup> and tet<sup>R</sup> upright (topics-1-3.ts has 8 amp<sup>R</sup> and the tet<sup>R</sup> at line 404). This does not match the caption and labels. The writer may want to make them italic.
- "Taq" is plain, as in the chapter text and the book.
- Temperatures use a no-break space before °C: "42 °C", "~40–60 °C". The book prints "42°C" with no space.
- Fig 9.8's closing note is a result pill drawn in STIX, so it can carry the superscripts.
- No em dashes anywhere.

BOOK POINTS TO REVIEW (not changed in the drawing)
- The 9.2 angles for ClaI (82°) and HindIII (100°), and the ring order, are my readings from the page image. They are not checked against the real pBR322 map.
- In the book's 9.2 drawing PvuII sits on the rop arc, and I kept that. The caption does not say it.
- In 9.6 the target band is lowest, meaning the farthest run and so the smallest fragment. That matches "smaller travels farther", and I made no claim about its size.
