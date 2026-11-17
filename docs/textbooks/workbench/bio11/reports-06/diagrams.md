# Biology Class 11 Chapter 6: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-16T23:03:28Z)

I wrote `/Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-11-06.ts`, the only file I changed. It exports `DIAGRAMS_BIOLOGY_11_06` with four diagrams, 13 cases in all. `jest-serial.sh lib/diagrams -t "biology.11.6"` gives 40 passed, 0 failed, and `npx eslint` on the file exits 0. I rendered all 13 cases and compared them with the page images. There are no em dashes in the file.

**Pages and ids.** I judged pp. 354-406 from the page images. Only pp. 358, 366, 373 and 379 hold a drawing. Pp. 383-406 hold none, which matches the writer's report, and there are no unnumbered drawings. I did not run `pdfimages -list`. The four ids exist and match the `fig` placements in `content/textbooks/bio-11-06/topics-1-2.ts` and `topics-3-4.ts`:

| Id | Drawn on | Topic index | Cases |
|---|---|---|---|
| `b11-06-fig-6.1` | p. 358 | 0 | 1: parenchyma, collenchyma, sclerenchyma (fibre and sclereid) |
| `b11-06-fig-6.2` | p. 366 | 1 | 2: Xylem, Phloem |
| `b11-06-fig-6.3` | p. 373 | 2 | 6: Dicot root, Monocot root, Dicot stem, Monocot stem, Dicot leaf, Monocot leaf |
| `b11-06-fig-6.4` | p. 379 | 3 | 4: (a) Primary, (b) Cambial ring, (c) Secondary, Old trunk wedge |

Every case carries the book's whole caption, without "Figure 6.N" and without "(see next page)". Fig 6.2 and 6.4 split into separate cases only because their panels need full width. Because of that, the arrows between (a), (b) and (c) in Fig 6.4 are not drawn.

**The book's.**
- Every title, label and printed note, with long leader labels broken over lines.
- Fig 6.3 dicot-root note, with the errata wording and an en dash: "Di- to tetrarch xylem (2–4 groups); pith small or absent".
- Which structures each panel has and lacks:
  - Roots: small or no pith in the dicot root, large pith and polyarch xylem in the monocot root.
  - Stems: ring of open bundles with cambium in the dicot stem, scattered closed bundles with no cambium in the monocot stem.
  - Leaves: palisade above spongy in the dicot leaf, uniform mesophyll with bulliform cells in the monocot leaf.
- Xylem is exarch in roots, endarch in the dicot stem, and above the phloem in the dicot leaf.
- Solid intrafascicular and dashed interfascicular cambium.
- Layer order in the trunk wedge: pith, heartwood, sapwood, cambium, secondary phloem, periderm, with a lenticel in the bark.

**Schematic.**
- All sizes, radii and coordinates.
- Cell, bundle and ring counts. I drew 4 xylem arms for the dicot root, 8 for "polyarch", 8 bundles in the stems, and 5 heartwood plus 5 sapwood annual rings.
- Cell shapes and leader angles.
- The wedge is redrawn pith-at-top with a 15 degree half-angle so the labels fit a phone, where the book has it horizontal.
- Colours follow the app style, with no fills and one marigold highlight per drawing.
- The book's colour key (the strip of colour swatches under Fig 6.3) is not drawn.

The file's header comment says the same.

**Checks.** Each case's `check` verifies counts and geometry (for example, xylem 4 or 8 and phloem to match, the wedge layers in order, 9 parenchyma cells and 7 hexagons). It also verifies that every one of the book's label strings is present, and that every label stays at least 4 px clear of drawn lines and inside the frame. The kit `audit` is clean for every case.

Scratch images in `/Users/raasikhnaveed/Desktop/monk-learning-mobile/biology-work/work-diag06/` are deleted.
