# Biology Class 11 Chapter 10: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-16T23:07:05Z)

All eight Chapter 10 figures are drawn in `/Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-11-10.ts`. Results: `jest-serial.sh lib/diagrams -t "biology.11.10"` gives 31 passed, 0 failed (it was run again after the last lint fix). `npx eslint` on the file is clean, with no em dashes in it. I rendered every figure and looked at each. The work folder `work-diag10` is deleted.

**Ids, pages and cases** (the book's page images were read for every label):
- `b11-10-fig-10.1`: Topic 01 (index 0), drawn p. 595. "Chromosome before and after S phase", one case.
- `b11-10-fig-10.2`: Topic 01 (index 0), p. 595. "Metaphase plate and spindle", one case.
- `b11-10-fig-10.3`: Topic 02 (index 1), p. 602. "Synapsis: the bivalent", one case.
- `b11-10-fig-10.4`: Topic 02 (index 1), p. 602. "Diplotene and chiasmata", one case.
- `b11-10-fig-10.5`: Topic 02 (index 1), p. 602. Two cases, "Anaphase I" and "Mitotic anaphase".
- `b11-10-fig-10.6`: Topic 03 (index 2), p. 609. Two cases, "Metaphase I" and "Metaphase II".
- `b11-10-fig-10.7`: Topic 03 (index 2), p. 609. "Meiosis flow with C values", one case.
- `b11-10-fig-10.8`: Topic 04 (index 3), p. 614. "Life cycle: 2n and n", one case.

**Captions:** each is the book's own wording, without "Figure 10.N" and without "(see next page)". For 10.5 and 10.6 I split the printed caption at its (a) and (b) markers, so each case carries that panel's sentence, for example "Anaphase I: homologous chromosomes separate, each still of two chromatids."

**Panel decision:** I made 10.5 and 10.6 one case per panel (the diagram brief's panel rule) so each panel gets the full phone width. The cost is that the two panels no longer sit side by side. The errata's panel-height note for 10.5 is met because both cases use the same height and title row. If you would rather have the book's side-by-side layout in one case, say so.

**The book's:**
- Every label word, and each picture's chromosome and chromatid counts.
- 10.1: 1 chromosome of 1 chromatid becomes 1 chromosome of 2 chromatids.
- 10.2: 4 chromosomes of 2 chromatids on the plate.
- 10.3: a maternal and a paternal chromosome of 2 chromatids each, 4 chromatids in the bivalent, 1 centromere per chromosome, the synaptonemal complex between the homologues.
- 10.4: 2 homologues of 2 chromatids each and 2 chiasmata.
- 10.5: 2 X-shaped chromosomes per pole in anaphase I, 4 single-chromatid chromosomes per pole in mitosis.
- 10.6: 3 bivalents in metaphase I, 3 chromosomes of 2 chromatids in metaphase II.
- 10.7: the labels 2n 4C, n 2C, n 1C and the cell counts 1, 2, 4.
- 10.8: the stages and the processes with their 2n and n.

**Schematic:**
- All sizes, positions, angles and spacings (re-laid for a phone, not to scale).
- The kinetochore dots and spindle fibres, and the shape of the life-cycle arrows.
- Maternal chromatids are drawn in ink and paternal ones in slate, standing in for the book's dark and light fills.
- The synaptonemal complex is a thick grey line instead of a teal bar.
- 10.5 assumes 2n = 4 in both panels, which the book's pictures imply but do not state.

The header comment in the file says the same.

**Checks:** each diagram recomputes its counts from the drawn elements and keeps the label-clear, inside-frame and no-overlap checks. Examples:
- 10.1: DNA doubles (1 to 2 chromatids) while the chromosome count stays 1.
- 10.7: C values come out 4, 2, 1 from the chromosome and chromatid counts, and the total DNA across cells stays 4C at every stage.
- 10.8: ploidy halves at meiosis, adds at fertilisation and is kept at mitosis; the diploid stages lie above the dashed line and the gametes below.
- 10.6: n = 3 in both panels.

**Labels:** no label needs a subscript, superscript or Greek, so no STIX pill was needed.

**Other pages:** I found no drawing on pp. 591 to 641 other than these eight figures. The text dump and the figure pages were looked at, but I did not run a `pdfimages` count across the whole range.
