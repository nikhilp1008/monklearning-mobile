# Biology Class 12 Chapter 13: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-17T01:00:23Z)

All 6 figures of Biology 12 Chapter 13 are redrawn in /Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-12-13.ts. It still exports `DIAGRAMS_BIOLOGY_12_13`, the file I replaced. I wrote no other file. I rendered every case and looked at it; scratch is deleted.

**Test results**
- `jest-serial.sh lib/diagrams -t "biology.12.13"` passes, 22 tests.
- `npx eslint lib/diagrams/biology-12-13.ts` is clean, with no warnings.
- The file has no em dashes, and each id's `check` recomputes its numbers (the brief lists the book's wording and values it must keep).

**Ids with drawn page and topic index**

| Id | Drawn page | Topic index | What the cases show |
|---|---|---|---|
| `b12-13-fig-13.1` | p. 717 | 0 | species-area relationship, two cases: "Left: arithmetic axes" and "Right: log–log axes" |
| `b12-13-fig-13.2` | p. 719 | 0 | Rivet Popper Hypothesis |
| `b12-13-fig-13.3` | p. 725 | 1 | conservation strategies |
| `b12-13-fig-13.4` | p. 730 | 2 | key numbers table, India callout, 70/22/8 bar |
| `b12-13-fig-13.5` | p. 730 | 2 | pie chart |
| `b12-13-fig-13.6` | p. 732 | 2 | Tilman biomass against year |

Every id in the chapter text has a diagram and the reverse. The chapter text carries only the `fig` blocks, no caption text, so each case caption is the book's caption word for word. I found no unnumbered drawing on pp. 714 to 733.

**What is the book's**
- **All labels, titles, notes and axes:** word for word, including the "(May)" in Fig 13.4's row "Estimated true global total (May)". The book's straight apostrophe in "India's" is set as ’, and tick minus signs are a true minus.
- **13.1:** tick ranges, "slope = z", "log C", and the ordering of the two panels.
- **13.2:** 5 + 5 wing rivets, two rows of 8 on the fuselage, 3 popped fuselage rivets (2 top row, 1 bottom row), and one keystone rivet on the upper wing. Positions are scaled from the page.
- **13.3:** the six + six items in the book's order, and "Cryopreservation (−196 °C)".
- **13.4:** all five rows (~1.5 million, ~7 million, ~22%, 2.4%, 8.1%), the callout, and the bar 70/22/8.
- **13.5:** the slices clockwise from 12 o'clock as the page has them (other groups 8, plants 22, other animals 21, insects 49), drawn at exact angles, plus both notes.
- **13.6:** the two series of 12 points, read from the page's vector data to within 0.1, the dashed means 51 and 76, and the range arrows.

**What is schematic**
- **Layout:** all sizes and positions, re-laid for a phone, and the colours (no fills, one marigold highlight per drawing).
- **13.1 curve:** S = 4.6A/(25 + A), a hyperbola with plateau 4.6, through the book's S ≈ 2 at A = 20 and 3.7 at A = 100. The right panel is log S = 0.2 log A with log C = 0, which gives 0.4 at log A = 2.0.
- **13.1 split:** the two panels are two cases because the caption says "Left" and "Right". Each case carries the full caption.
- **13.2:** the plane outline uses page proportions.
- **13.3:** two stacked columns.
- **13.5:** "Insects: 49% of all species (~70% of animals)" is wrapped over three lines.
- **13.6:** the two panels are stacked. I coloured both range arrows marigold as one highlight, which stretches "one marigold thing per drawing". Say if you want only one.

**Number checks**
- **13.4 vs 13.5:** 49 + 21 = 70 (animals), plants 22, other groups 8, total 100. The two figures agree.
- **1.5 / 7:** 21.4%, matching the "~22%" row.
- **India:** 8.1 / 2.4 is more than 3.
- **13.6 means:** 50.9 and 76.3, matching 51 and 76.
- **13.6 ranges:** the low series spans 18.7 to 74.4, the high series 68 to 84.2.

**Findings**
- **13.4:** the "(May)" is Robert May's name in the book's row; it reads oddly to a student, and I left it as printed.
- **13.5:** the plants slice reads "Plants (incl. algae, fungi)", while the 13.4 bar says only "Plants". Both give 22%. The note "Fungi species > all vertebrates combined" is in the book's figure, and its caption says "Fungal species outnumber all vertebrate species combined".
- **13.1:** the book's two panels are not the same relation. The left is a hyperbola and the right is the power law's log form with z = 0.2. The book gives no numbers linking them, and I did not invent any.
