# Biology Class 11 Chapter 5: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-16T23:09:01Z)

All thirteen figures are drawn in `/Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-11-05.ts`, the only file I wrote. The one narrow jest run passed (55 tests, 0 failures) and eslint is clean after I removed one unused constant. I rendered each figure and looked at it; the scratch folder `biology-work/work-diag05/` and its page images are deleted.

**Ids, pages and topic index**
- Topic 01 (index 0):
  - `b11-05-fig-5.1`, root tip, drawn p. 289.
  - `b11-05-fig-5.2`, simple dicot leaf, p. 291.
  - `b11-05-fig-5.3`, p. 291, two cases: compound leaf and branch.
- Topic 02 (index 1):
  - `b11-05-fig-5.4`, hypogynous flower in section, p. 299.
  - `b11-05-fig-5.5`, p. 301, three cases: hypogynous, perigynous, epigynous.
  - `b11-05-fig-5.6`, p. 301, two cases: racemose, cymose.
- Topic 03 (index 2):
  - `b11-05-fig-5.7`, p. 309, two cases: dicot (bean), monocot (maize).
  - `b11-05-fig-5.8`, anatropous ovule, p. 311.
  - `b11-05-fig-5.9`, mango, p. 311.
  - `b11-05-fig-5.10`, Solanaceae floral diagram, p. 311.
- Topic 04 (index 3):
  - `b11-05-fig-5.11`, Fabaceae floral diagram, p. 319.
  - `b11-05-fig-5.12`, Solanaceae ovary in transverse section, p. 319.
  - `b11-05-fig-5.13`, Liliaceae floral diagram, p. 319.

**What is the book's** (all stated in the file's header comment)
- Every printed word of each label, heading, note and formula line, read from the page images.
- Which parts exist and how many:
  - 5 sepals, 5 petals, 5 stamens and 2 carpels in 5.10.
  - 9 + 1 stamens in 5.11.
  - 3 + 3 tepals and 3 + 3 stamens in 5.13.
  - Racemose flowers numbered 1 to 6 and cymose 1 to 4.
  - Root zones in tip-to-base order.
- Whether each whorl sits below, level with or above the ovary (5.4, 5.5).
- Oblique carpels in 5.10 and 5.12 (the septum is neither along nor across the mother axis).
- The nesting order of the ovule's coats and embryo sac (5.8) and of mango's layers and seed (5.9).
- The formulae K(5) C(5) A5 G(2), K(5) C1+2+(2) A(9)+1 G1 and P(3+3) A3+3 G(3), each with a line under G.
- The alternate-whorl order in the floral diagrams.

**What is schematic**
- All sizes, curves and leader angles.
- The cell grids in 5.1, the veins in 5.2, and the 4 pairs plus terminal leaflet in 5.3.
- Petal and seed shapes, and the placement of everything.
- The book's tints are dropped, with one marigold highlight per drawing. This follows the Chapter 1 look, and the layout checks pass.

**Choices to check**
- **Per-panel captions.** For 5.3, 5.5, 5.6 and 5.7 I split the book's caption by panel and kept the panel letter, for example "Position of the ovary: (A) hypogynous, superior ovary." No "Figure 5.N" or "(see next page)" appears. The 5.10 caption uses italic *Datura*.
- **Floral-formula glyphs.** No ⊕, ⚥, ♂ or ♀ is drawn in any label. The book's figures print the words "Actinomorphic, bisexual" and "Zygomorphic, bisexual", so none was needed.
- **Underlined G.** The underline under G in the formulae is a combining low line (U+0332) in STIX text, as the writers did. It needs a look on a phone.
- **Tags.** The kit's single-line tag cannot hold multi-line labels, so I wrote a multi-line pill helper in the same look. It is Onest in a single font, and no tag has Greek, a subscript or a symbol. Formulae are STIX text on the drawing.
- **Long labels.** In 5.10 to 5.13 some long labels are wrapped into lines of 13 characters or fewer to fit the 360 px width. The words are the book's.
- **Not drawn.** 5.4's caption note, the 5.7 notes and the 5.8 and 5.9 notes are plain text lines under the drawing, not result tags. They are too long for the kit's one-line result tag.
- **Em dashes.** None.

**Checks per figure**
- Every id and placement matches `content/textbooks/bio-11-05/*.ts`, so the writers' fig ids now resolve.
- Each figure's own check recomputes what the drawing states:
  - Zone order and the hairs inside the maturation zone (5.1).
  - Whorl attachment heights against the ovary's span (5.4, 5.5).
  - Flower numbering and size order (5.6).
  - Nesting of coats and layers (5.8, 5.9).
  - 5-5 alternation and 72 degree spacing (5.10).
  - Petal and stamen counts against the formulae (5.10, 5.11, 5.13).
  - Septum angle against the mother axis (5.10, 5.12).
  - Three septa at 120 degrees (5.13).
- Every figure also checks that all the book's labels are present, that nothing crowds a label or sits on the drawing, that no two leader lines cross, and the kit's audit.
