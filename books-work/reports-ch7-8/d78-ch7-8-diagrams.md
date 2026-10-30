# d78 — Chemistry Class 11, Ch 7 and Ch 8 diagrams

Files: `lib/diagrams/chemistry-11-07.ts` (DIAGRAMS_CHEMISTRY_11_07, 5 diagrams) and `lib/diagrams/chemistry-11-08.ts`
(DIAGRAMS_CHEMISTRY_11_08, 3 diagrams). Both were already registered in index.ts as 'chemistry|11|7' and '|8'.

How the drawings were found: I counted the vector paths on each of pp. 295–399 (pdfminer), then looked at the page
image of every page that had any. The book embeds no raster images. These are all the drawings:

| id | page | topic idx | name | cases |
|---|---|---|---|---|
| c11-07-fig-7.1 | 300 (caption also p. 299) | 0 (Topic 01) | CrO₅ butterfly structure | 1 |
| c11-07-fig-7.2 | 302 (also p. 301) | 0 (Topic 01) | Tetrathionate ion | 1 |
| c11-07-fig-7.3 | 310 (also p. 309) | 1 (Topic 02) | Disproportionation of P₄ | 1 |
| c11-07-fig-7.4 | 317 (also p. 316) | 2 (Topic 03) | Zn–Ag galvanic cell | 1 |
| c11-07-A-d1 | 329 | 4 (Add. topic A) | Electrode potential ladder | 1 |
| c11-08-fig-8.1 | 348 (also p. 347) | 0 (opening '00') | Four ways to draw propan-1-ol | 1 |
| c11-08-fig-8.2 | 368 (also p. 367) | 3 (Topic 03) | Carbocation and carbanion | 1 |
| c11-08-F-d1 | 392 | 10 (Add. topic F) | Kjeldahl back-titration flow | 1 |

The two addendum drawings are printed as "Figure 1:" (the addendum's own number). Following Ch 2 and Ch 6, they
take the unnumbered ids, and their captions start after "Figure 1: ".

## What each check verifies
- **7.1:** The atoms and bonds come from data. Each O.N. is computed from the bonds: O.N. = formal charge +
  Σ(bond order × ±1 toward the more or less electronegative partner, 0 toward the same element). Cr +6, four
  peroxo O −1, oxo O −2, and they sum to 0. The valence-electron count matches the bonds and lone pairs. Formal
  charges come from V − L − ½B. There are two O–O peroxo bonds and the formula is CrO₅. Treating all five O as −2
  would give Cr +10 (impossible). Each drawn O.N. is the computed one. The layout passes the clearance check.
- **7.2:** The chain is S–S–S–S. Each terminal S has two =O, one O⁻ and one S. The central S atoms are bonded
  only to S. O.N.s are computed: terminal +5, central 0, every O −2, and they sum to −2. The average is 2.5.
  Electron count is 62. The formula reads S₄O₆ with charge 2−.
- **7.3:** P is 0 in P₄, −3 in PH₃ and +1 in H₂PO₂⁻. Electrons gained 1 × 3 = lost 3 × 1. All 4 P are used. The
  text's equation P₄ + 3OH⁻ + 3H₂O → PH₃ + 3H₂PO₂⁻ balances for P, H, O and charge (−3/−3). The arrows are read
  back as P₄ → PH₃ (reduction) and P₄ → 3H₂PO₂⁻ (oxidation).
- **7.4:** The anode is the lower couple on the E° table (Zn −0.76 V), so the cathode is Ag (+0.80 V).
  E°cell = 0.80 − (−0.76) = 1.56 V. This is positive and matches the drawn "1.56 V" and the caption. The electrons
  balance (Zn + 2Ag⁺ → Zn²⁺ + 2Ag, charge +2 both sides). Read back from the drawing: the electron arrow runs from
  the anode toward the cathode, anions drift toward the anode and cations toward the cathode. The anode is labelled
  (−) with oxidation (e⁻ as products) and the cathode (+) with reduction. Each rod stands in its own solution,
  below the surface.
- **A-d1:** The 14 couples run in strictly descending E°, with SHE at 0.00 V, positives above and negatives below.
  The values are the NCERT standard values as printed. Each rung's value sits at its rank. The oxidising arrow
  points up toward F₂ and the reducing arrow points down toward Li. A sample reading checks that Fe³⁺ oxidises I⁻
  (+0.23 V).
- **8.1:** Each of the four representations reads back to C₃H₈O. In the Lewis structure every C has valence 4, O 2
  and H 1. In the bond-line drawing, the vertices and end are C, the hidden H = 4 − bonds, and the zig-zag is
  computed at 120°. In the wedge-dash drawing, both middle C have 4 bonds (one wedge, one hash). The chain is
  unbranched C–C–C–O.
- **8.2:** Both ions are placed in 3D and projected. Carbocation: the bonds are 120° apart in one plane, the
  empty p orbital is along the normal (perpendicular to every bond), steric number 3 gives sp², there are 6
  electrons, and the formal charge is +1. Carbanion: the three bonds and the lone pair are mutually 109.47°
  apart, steric number 4 gives sp³, it has an octet, and the formal charge is −1. The wedge is in front of the
  page (z > 0.3), the hash is behind (z < −0.3) and the plain bond is nearest the page. Every bond projects to at
  least 0.5 of its length. The charges and the sp²/sp³ labels are drawn.
- **F-d1:** The arrows are read back as box 1 → 2 → 3 → 4 → result. The check confirms
  %N = 14 × meq/(1000w) × 100 = 1.4 × meq/w. It recomputes the addendum's Example F.1 (meq NH₃ = 0.5, 23.7%) and
  Example F.2 (H₂SO₄ normality 2 × molarity, meq 20, 56%).
- **Every diagram:** the kit audit, nothing unplaced, every tag and label ≥ 4 px from every line, labels apart
  and inside the frame.

## Captions
All captions are word for word from the figure pages, which carry no pointers. The "(see next page)" copies on
pp. 299, 301, 309, 316, 347 and 367 are the citation copies. No caption names a colour, so nothing needed
rewording.
- **A-d1 caption** keeps "NCERT Table 8.1" as printed. The text cites it first, on p. 328 ("The ladder (selected
  values from NCERT Table 8.1, 298 K)"), so per the brief the bracketed edition note belongs there, in the
  writer's text, not in this caption. The coordinator should confirm the writer put it there.
- **Fig 8.1** caption says "side by side". On a 340 px phone width the four forms are drawn as a 2 × 2 grid.
  I kept the caption word for word; flag for Nikhil if "side by side" should be reworded.
- **Fig 8.2** caption says "Side-by-side", and the two ions are drawn side by side.

## Drawing choices and differences from the book (for review)
- **7.1:** The book draws each peroxo O–O bond as a curved arc. Here it is a straight bond line (a single bond,
  as in the structure). Lone pairs are not drawn, as in the book.
- **7.2:** Lone pairs are not drawn, as in the book. They are kept as data for the formal-charge and
  electron-count check.
- **7.3:** The book sets the arrow labels at a slant along the arrows. Here they are horizontal: the reduction
  label above, the oxidation label below. The bottom statement is the result tag (two lines).
- **7.4:** No fills (house style). Solutions are shown by a dashed surface line, rods are outlines, and the salt
  bridge is a double-walled inverted U. The electron-flow label is a highlighted tag rather than two lines of
  text. "1.56 V" sits beside the voltmeter.
- **A-d1:** The book spaces the rungs evenly (a rank ladder, not to scale), and the redraw does the same. The
  book's single two-headed coloured line is drawn as two arrows from the SHE level (up ink, down slate). SHE is
  the marigold highlight.
- **8.1:** The book's four-across row is drawn as a 2 × 2 grid (see Captions). The bond-line zig-zag is drawn at
  the conventional 120°; the book's is steeper. The bond-line drawing is the highlight.
- **8.2:** The book's carbanion puts the plain R straight down, opposite the lone pair, with the wedge on the
  left and the hash on the right. That is not a true tetrahedral projection. The redraw is a computed tetrahedral
  view, chosen by searching the view angles for the best-spread directions: plain R to the right, wedge down,
  hash to the left, lone pair up-left (the book's lobe also sits up-left). The book's shaded carbocation plane is
  left out (no fills). The empty p lobes are dashed marigold (the highlight).
- **F-d1:** For phone width, the result box sits below the fourth box, not to its right, joined by the marigold
  arrow. The footnote is split into three lines. In NₐVₐ and N_bV_b the subscripts a and b are written upright,
  as label subscripts (house rule); the book looks italic. Writers should match.

## Judged NOT drawings
Tables: the n-factor table (p. 314), the fission and reactive-intermediates tables (p. 367), the functional-group
and classification tables (p. 349), the estimation-methods table (p. 376), and the distribution and trap tables
in both "What JEE and NEET Actually Ask" sections. Also not drawings: the typeset equations, boxed answers and
condensed formulas. The other pages with path counts were rounded boxes and maths glyphs only.

The book draws no Lassaigne, Liebig, Dumas or Kjeldahl apparatus, no chromatography, and no other organic
structures (isomers, resonance forms, curly arrows): all of these are typeset text or tables. Nothing was left
undrawn.

## Book errors spotted
None in the figures. Every stated O.N., E°cell, electron balance and percentage recomputes correctly. The page
boundaries the figures depend on all match the brief's page map.

## Results
- `npx jest lib/diagrams`: 786 passed, 1 skipped (the dump), 0 failed.
- `npx tsc --noEmit`: no errors.
- `npx eslint lib/diagrams/chemistry-11-07.ts lib/diagrams/chemistry-11-08.ts`: clean.
- Render PNGs and SVGs in `books-work/work-d78/` were deleted.
