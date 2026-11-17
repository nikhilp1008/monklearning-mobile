# Biology Class 11 Chapter 3: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-16T22:58:27Z)

All five Chapter 3 diagrams are drawn in /Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-11-03.ts, replacing the empty stub, and the narrow jest run and eslint both pass. I rendered all of them and looked at each against its book page.

**Ids created** (each id and topic index matches what the writers placed in content/textbooks/bio-11-03/*.ts)
- `b11-03-fig-3.1`: Laminaria. Drawn p. 152, caption p. 151, Topic 02, index 1. One case.
- `b11-03-fig-3.2`: life-cycle patterns. Drawn p. 154, caption p. 153, Topic 02, index 1. Three cases: Haplontic, Diplontic, Haplo-diplontic. Each case carries the book's whole caption, because it can't be split by panel.
- `b11-03-fig-3.3`: Dryopteris sporophyte and prothallus. Drawn p. 162, caption p. 161, Topic 03, index 2. One case.
- `b11-03-fig-3.4`: Pinus cones and reproduction. Drawn p. 171, caption p. 170, Topic 04, index 3. One case.
- `b11-03-fig-3.5`: mature embryo sac. Drawn p. 178, caption p. 177, Topic 05, index 4. One case.

Captions are the book's own words, without "Figure 3.N" and without "(see next page)". I found no em dashes in the file and no unnumbered drawings.

**Pages with no drawing:** I judged pp. 142 to 220 other than the five above to hold none. They are tables, matrices, text and the typeset life-cycle lines on pp. 170 and 179. I did not run `pdfimages` or count vector shapes on every page; that judgement rests on the page images and the writers' reports. The header comment says the same.

**Book's versus schematic** (also in the header comment)
- **Book's:**
  - every label, heading and example line, word for word;
  - the logic of each figure: which phase is n and which is 2n in each life cycle, the arrow directions, 7 cells and 8 nuclei, the egg apparatus at the micropylar end and the antipodals at the chalazal end, and the archegonia near the notch with the antheridia near the rhizoids;
  - the male cones smaller than the female cone, and the ovule nested on its ovuliferous scale.
- **Schematic:**
  - all sizes, positions, outlines and leader angles, re-laid for a phone in one column (Figs 3.3 and 3.4 are stacked where the book had them side by side);
  - the blade's ripple and veins, the number of fronds, pinnae and sori, the heart's size, the pine's branches, needles and scales, and the cell and nucleus sizes;
  - the colours: no fills, and one marigold highlight each (frond, diploid phase, sori, naked ovule, egg cell).
- **Labels split into tag plus note:** where the book prints a bracket note, I put the name in a tag and the note in grey STIX beneath it, with the same words. Examples are "Frond (broad flat blade, photosynthetic)", "Female gametophyte (n) with archegonia" and "Antipodal cells (3 cells, chalazal end)".
- **No STIX pill needed:** no label needs a subscript or Greek, so none was used. Scientific names are italic via `<i>`.

**Checks:** each diagram's `check` recomputes what it draws. Some examples:
- the cell and nucleus counts from the cells actually drawn;
- the nesting of ovule parts;
- which phase is drawn n and which 2n in each cycle;
- the sori count;
- that leaders end on the right part.

**Results**
- `jest-serial.sh lib/diagrams -t "biology.11.3"` passed on its last run: 22 passed, 0 failed. It took several runs, because layout failures (labels too close to lines, a tag too wide) needed fixing before it went green.
- `npx eslint` on the file reported 0 errors. The unused `HAP` and `DIP` constants it warned about are removed.
- I rendered via the dump test and `qlmanage`. The previews don't show italics, so I can't confirm those visually.
- I deleted the scratch folder `/Users/raasikhnaveed/Desktop/monk-learning-mobile/biology-work/work-diag03/` and its page images.
- I touched no file other than the diagram file.
