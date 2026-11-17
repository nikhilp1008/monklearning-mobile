# Biology Class 12 Chapter 10: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-17T00:56:37Z)

DONE: /Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-12-10.ts written. It exports DIAGRAMS_BIOLOGY_12_10, which is still registered under 'biology|12|10'. No other file was touched.

TESTS
- jest-serial.sh lib/diagrams -t "biology.12.10": PASS, 31 passed. That is 1 unique-ids test plus 3 per case (says the right thing, laid out clear, names every part) across 10 cases. I ran it twice; the second run followed the removal of an unused helper.
- npx eslint lib/diagrams/biology-12-10.ts: clean after removing that helper. The file contains no em dash.
- All 10 cases were dumped and viewed (DUMP_DIAGRAMS, then qlmanage). Layout is clear. The Mac stand-in fonts show no bold or italic, so type needs checking on the device. Scratch deleted.

IDS (all 7 exist in the chapter text and in my file; nothing missing either way)
Pages counted: no raster image anywhere in pp. 534-599, and no drawing outside the 7 figure pages. The Additional topics (pp. 574-599) hold only text, tables and rules. No unnumbered drawing.
- b12-10-fig-10.1: drawn p. 538 (caption first p. 537), topic index 0, Bt toxin in four panels, one case drawn as a column.
- b12-10-fig-10.2: drawn p. 540 (caption p. 539), topic 0, RNAi against Meloidogyne incognita, one case, column of 4 boxes.
- b12-10-fig-10.3: drawn p. 546 (caption p. 545), topic 1, two routes to insulin, 2 cases (Natural route; Eli Lilly rDNA route). Each case caption carries its own sentences. The footer sits in both as the result pill.
- b12-10-fig-10.4: drawn p. 553 (caption p. 552), topic 2, the 1990 ADA procedure (ex vivo), one case.
- b12-10-fig-10.5: drawn p. 559 (caption p. 558), topic 3, molecular diagnosis, 3 cases (PCR; Probe and autoradiography; ELISA). Each case caption carries its own sentences.
- b12-10-fig-10.6: drawn p. 565 (caption p. 564), topic 4, five uses of transgenic animals, one case.
- b12-10-fig-10.7: drawn p. 571 (caption p. 570), topic 5, biopiracy and regulation, one case.
Captions are the book's word for word, minus "Figure 10.N", and with scientific names in italic. The straight hyphens the book prints in the 10.3 and 10.6 captions ("paths - do not", "products - Rosie") are kept.

BOOK'S VERSUS SCHEMATIC
- The book's, kept as printed:
  - Every label, heading, note and panel/step number, in the book's order.
  - Bt: the four panels. RNAi: Steps 1-3 plus the outcome box.
  - ADA: steps 1-5, with the cDNA put into the retrovirus before step 4, the return to the patient, the "must repeat periodically (not permanent)" note, and the embryonic-stage note.
  - Insulin: proinsulin ordered B region, C-peptide, A region with two S-S bridges; C-peptide removed; mature insulin; the Eli Lilly route with two genes, two plasmids, two bioreactors, the disulphide join and HUMULIN.
  - PCR 1, 2, 4. Probe on the complementary normal gene gives a dark spot; the mutated gene gives none. ELISA's colour change.
  - Five uses with Rosie (1997) and the 95% hub. The biopiracy chain with the Indian Patents Bill and GEAC branches.
- Schematic:
  - All box sizes, positions, arrow routes and column layouts. The Bt panels, the three diagnosis panels and the two insulin routes were re-laid for a phone (stacked or split into cases).
  - The shapes of the bacterium, cell, larva, midgut, film, well, mouse and sheep, and the wave forms of the RNA strands.
- No quantity is printed in any of the seven figures (no amino-acid counts, no temperatures, no sizes). The checks are therefore structural: label sets, order, arrow-head counts, the 1-2-4 doubling, and the number of highlights.

CHANGES TO REPORT
- The em dash in the Fig 10.3 footer ("paths — do not mix") is a colon in the drawing: "Same product, two different paths: do not mix them up." The caption keeps the book's " - ".
- Fig 10.5 ELISA: the book's "antibodies (blue) bind antigens (red)" cannot stand with no colours. It now reads "antibodies (Y shapes) bind antigens (dots)". This is the only label I reworded.
- Colour: the house style is no fills and one marigold highlight, so the book's green/blue/orange/red carry no meaning here. The one highlight per figure is:
  - 10.1: the three pores in panel 4.
  - 10.2: the outcome box.
  - 10.3: the MATURE INSULIN box in the natural case; the disulphide join in the Lilly case.
  - 10.4: the return loop with its note.
  - 10.5: the four amplified copies in PCR; the radioactive tag in the probe case; the well outline in ELISA.
  - 10.6: the "Transgenic Animals (95% are mice)" hub.
  - 10.7: the BIOPIRACY box.
- The film's dark spot is a filled disc, because the book shows a solid dark spot.

BIOLOGY CHECKS (figures only)
- Fig 10.3 prints no amino-acid counts. The 21, 30 and 33 figures are not in the drawing, so there is nothing to recompute there and no "51" total appears.
- Fig 10.4 prints no year in its labels; "1990" is in the caption only.
- Fig 10.6 gives Rosie (1997) and "95% are mice" as the book prints them. There is no support for the 1997 date in the figure itself.
- Fig 10.7 has no dates or companies beyond the generic "foreign company".
- The Bt figure carries no pest-spectrum claim, so the Bt cotton errata does not touch it.
