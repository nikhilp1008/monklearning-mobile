# Biology Class 11 Chapter 1: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-16T22:17:35Z)

All three figures of Biology 11 Chapter 1 are drawn and every test and eslint run on them passes. The only file written is /Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-11-01.ts, exporting DIAGRAMS_BIOLOGY_11_01 with three diagrams. I rendered each one with the dump test and qlmanage and fixed the overlaps and clipping I found. Scratch images in biology-work/work-diagrams are deleted.

**Ids created**
- `b11-01-fig-1.1`: topic index 0 (Topic 00), name "Defining properties of life", drawing p. 15, caption p. 14. The writers placed it in `content/textbooks/bio-11-01/topics-0-1.ts`.
- `b11-01-fig-1.2`: topic index 1 (Topic 01), name "One organism, many names", drawing p. 22, caption p. 21. Placed in `topics-0-1.ts`.
- `b11-01-fig-1.3`: topic index 2 (Topic 02), name "The taxonomic funnel", drawing p. 30, caption p. 29. Placed in `topic-2-extras-a-b.ts`.

Each has one case. Each caption is the book's own words, without the figure prefix and without "(see next page)". Fig 1.2's caption wraps the species name in `<i>`. The file has no em dashes.

**What each figure shows**
- **1.1:** the title and the FAILS and PASSES columns, each box with the book's text, and the test-tube box with its verdict. The Consciousness / response to stimuli box is the single marigold highlight.
- **1.2:** five name tags with leader lines to one scientific-name box. The box is highlighted and the name is in italics.
- **1.3:** the seven rows with both end notes, both arrows and both arrow captions. Species is the marigold highlight.

**The book's and schematic**
- **The book's:** every word of every label and box, and the pass/fail split. Also the five regional names, the seven ranks in order, the arrow directions, and the funnel's edge positions, which I read from the p. 30 page image and scaled by 0.6.
- **Schematic:** box sizes and positions in Fig 1.1, the test-tube drawing, the plant in Fig 1.2, and the angles of its leader lines. This is stated in the file's header comment.
- **Colours:** the book's colours are not kept. The figures use the app's own style: no fills and one marigold highlight each.

**Pages 12 to 62**
- No page has a raster image: `pdfimages -list` on pages 12 to 62 is empty.
- I counted stroked and filled shapes outside the glyphs on each page with `pdftocairo -svg`, then looked at the pages with more than a few.
- Only pp. 15, 22 and 30 hold a drawing; the other pages hold none.
- Most pages have 1 to 6 shapes, which are page rules and section dividers.
- p. 23 has 34 stroked shapes, which are rules and underlines.
- p. 27 has 11 shapes, p. 31 has 8 (including the NCERT table's rules), and p. 34 has 17. I looked at pp. 23, 27, 31, 32 and 34 as images and found only text, rules and the table.
- p. 32 has 78 shapes, but they are white strokes behind text. I confirmed this from their stroke colour, and the rendered page shows no drawing.

**Checks**
- Each diagram has its own checks. Fig 1.1 checks the counts and names of the failing and passing properties and which one is highlighted. Fig 1.2 checks that all five leader lines end on the one box. Fig 1.3 checks the rank order, that the funnel narrows every row, that the rows join with no gaps, and that Species is straight-sided.
- All three also check that every label stays 4 px clear of every line, lies inside the frame and inside its own box, and touches no other label. The kit's audit is clear and no tag is left unplaced.
- The 1.1 test-tube box was first overlapped by the PASSES column and the Fig 1.3 labels were off-centre; both are fixed.

**Test and eslint results**
- `npx jest lib/diagrams -t "biology.11.01"` matches nothing. The describe name is `biology|11|1 diagrams`, taken from the registry key, so use `-t "biology.11.1"`. With that pattern: 10 passed, 0 failed (the 2,286 other tests skipped).
- `npx eslint lib/diagrams/biology-11-01.ts` is clean.
- I did not run tsc, the whole jest, or any git command.

**Possible problems to look at**
- **Italics in the dump:** the Mac render did not show the Solanum melongena label in italics, probably because the STIX italic face is a stand-in there. The label uses `<i>` as the brief asks; check it on a device.
- **Check marks and crosses in Fig 1.1:** they are drawn as short lines, not as glyphs, so they do not depend on font coverage.
- **Book's spelling:** nothing in these three figures looks wrong. The book's "Phylum/Division" row is kept exactly as printed.
