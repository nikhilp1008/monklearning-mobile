# Brief: Chemistry Class 12, Chapters 1 and 2, rebuilt word for word from the Master Reference book

**Read, in full and in this order:**
1. `/Users/nikhi/Developer/monk-books/chem11/briefs/MAC-BRIEF-C11-01-02.md` (Chemistry rules, notation, and through it the
   Physics base `/Users/nikhi/Developer/monk-books/BRIEF-12-07-08.md` — read that too: the block system, ownership, ids,
   parts, "word for word" exceptions, checking and report rules).
2. The "Lessons from the Chapter 1–2 reviews" section of `chem11/briefs/MAC-BRIEF-C11-03-04.md` (ignore its page map).
3. `chem11/briefs/MAC-BRIEF-C11-07-08.md` (ignore its page map; keep its rules on "What JEE and NEET Actually Ask" and
   on answers paired with their practice questions).
4. `chem11/briefs/MAC-BRIEF-C11-09-10.md`: "Figure placement", "Lessons from the Physics 12 and Chemistry 7–8 reviews",
   "The automatic checks", "Diagram agents" and "Your report" (ignore its page map and hydrocarbon notation).
5. This file. It replaces page maps and file names and adds Class 12 rules. **Where files disagree, this file wins.**
   In the older briefs read "Class 11" as "Class 12" and `chem11/` as `chem12/` for the book, text dump and work folders.

**Your closest models:** Chemistry 11 Chapter 7 (Redox, electrode potentials) and Chapter 5 (Thermodynamics) for the
notation, `content/textbooks/chem-11-07/…`, `lib/diagrams/chemistry-11-07.ts`, `lib/revise/keypoints-chemistry-11-07.ts`;
Chapter 9 for the file layout (`content/textbooks/chem-11-09/…`). Read one topic file and one diagram file first.
Founder decisions: `/Users/nikhi/Developer/monk-books/chem12/DECISIONS-C12.md`, and items 17–18 of `chem11/DECISIONS-C11.md`.

## Where things are
- The book: `/Users/nikhi/Developer/monk-books/chem12/chem12.pdf`, 587 pages. **PDF page = the bottom folio** (each page also
  prints a smaller chapter-own number: ignore it, except in the errata). Text dump (prose only, maths and subscripts
  scrambled): `chem12/chem12.txt`. Read every formula, charge, subscript, arrow condition and number from the page image
  (`pdftoppm -r 110 -f N -l N -png <pdf> <your folder>/p`, or the Read tool on the PDF with `pages`).
- Errata: pp. 584–587. **Its page numbers are the chapter's own**, so find items by their text. Ch 1: Types of Solutions
  Example 4 (14-, 18-, 22-carat) and the van 't Hoff factor definition (Section 2 of Colligative Properties): both resolved,
  check the page shows the corrected text. Ch 2: cosmetic only: the options of each MCQ run on in one block (make them proper
  options); Fig. 2.4's caption shows O2 without a subscript (write O<sub>2</sub>); E_cell and Λ_m upright in places (use the
  house notation below). Report each.
- Your work folder: `/Users/nikhi/Developer/monk-books/chem12/work-<your-name>/`. Delete PNGs when done.
- The repo: `/Users/nikhi/Developer/monk-learning-app`. Your file exists as an empty stub, already wired in.
- Never open an iOS Simulator or Android emulator. No Metro, Expo or builds. No git commands that change anything.

## Page map (from the book's contents; confirm every boundary on the page images and report any difference)

**Chapter 1, Solutions (pp. 7–57).** p. 7 title, p. 8 contents (not copied).
- Topic 01 Types of Solutions: pp. 8–12
- Topic 02 Expressing the Concentration of Solutions: pp. 13–18
- Topic 03 Solubility & Henry's Law: pp. 19–27 (Figures 1.1, 1.2; figure pages 22, 24)
- Topic 04 Vapour Pressure & Raoult's Law: pp. 28–35 (Figures 1.3, 1.4; figure page 31)
- Topic 05 Colligative Properties & Van 't Hoff Factor: pp. 36–43 (Figures 1.5, 1.6; figure page 40)
- p. 44 shared introduction "Chapter 1: Solutions — Additional Topics" → first paragraph(s) of A's Introduction.
  A Henry's Law in the Real World: Bends, Anoxia and Dissolved Air (44–46); B Where Kb and Kf Come From, and the
  Freezing-Out Problem (46–48); C Azeotropes, Exactly as NCERT Defines Them (48–51; its "Figure 1" boiling-point diagram on
  p. 49 → id `c12-01-C-d1`); D Isotonicity as a Calculation, and the van't Hoff Factor Under Pressure (51–53);
  **E What JEE and NEET Actually Ask** (book "Addendum P", 53–57; "Addendum P" references → "Additional topic E").

**Chapter 2, Electrochemistry (pp. 58–100).** p. 58 title, top of p. 59 contents (not copied).
- Topic 01 Electrochemical Cells & Nernst Equation: pp. 59–67 (Figure 2.1; figure page 63)
- Topic 02 Conductance of Electrolytic Solutions: pp. 68–75 (Figure 2.2; figure page 75)
- Topic 03 Electrolytic Cells, Electrolysis & Batteries/Corrosion: pp. 76–84 (Figures 2.3, 2.4; figure pages 79, 81)
- **Topic 04 "Concentration Cells & Reference Tables"** (book "Chapter 2 Capstone", pp. 85–88; founder's decision): not extra.
  Parts: "Concentration cells" (A1–A3, each a bold lead), "Worked examples" (A4), "Crack the MCQ" (A5), "Master reference
  tables" (B1, B2, B3 as tables), "Topic mastery checklist". **Do NOT copy "How to use this section" or "Part C — Complete
  Chapter Formula Sheet".** A2's concentration-cell formula is a `formula` block so it reaches the Formula sheet.
- p. 89 shared introduction "Chapter 2: Electrochemistry — Additional Topics" → A's Introduction. A Combining Half-Cell
  Potentials: Add ΔG, Never E (89–91); B The Nernst Equation as a Measuring Instrument (91–93); C Kohlrausch Beyond 1:1,
  Equivalent Conductance, and Why Ions Rank … (full title from the page; 93–95); D Batteries and Corrosion: the NCERT Numbers
  the Chapter Skips (95–97); **E What JEE and NEET Actually Ask** (book "Addendum P", 97–100).
- Addenda's answers often spill onto the next addendum's first page: check where each really ends.
- Each sub-topic is split into parts at the book's own sections, as in Chemistry 11 (Concept intuition … Cheat sheet).
- Cross-references: "Sub-topic N" and "Section N" of another sub-topic → "Topic 0N"; "Addendum X" stays as printed except
  "Addendum P"; list every change. An old NCERT number: follow `chem11/DECISIONS-C11.md` item 2/17 and report it.

## Files and ids
- Ch 1: `content/textbooks/chem-12-01/topics-1-2.ts`, `topic-3.ts`, `topic-4.ts`, `topic-5.ts`, `extras-a-c.ts`, `extras-d-e.ts`.
- Ch 2: `content/textbooks/chem-12-02/topic-1.ts`, `topic-2.ts`, `topic-3.ts`, `topic-4-a-b.ts` (Topic 04, A, B), `extras-c-e.ts`.
- Diagrams: `lib/diagrams/chemistry-12-01.ts` (`DIAGRAMS_CHEMISTRY_12_01`), `chemistry-12-02.ts` (`DIAGRAMS_CHEMISTRY_12_02`).
  Ids `c12-01-fig-1.N`, `c12-02-fig-2.N`, unnumbered `c12-0N-<topic n>-d<k>`. Writers place `fig` blocks with these ids.
- `topic` index = position in the chapter's topics array. **Ch 1: Topics 01–05 = 0–4, A–E = 5–9. Ch 2: Topics 01–04 = 0–3, A–E = 4–8.**
- Key points: `lib/revise/keypoints-chemistry-12-01.ts`, `-02.ts`.
- Titles are plain text: a formula letter in a title or tag is written flat ("Kb and Kf", "ΔG"), and reported.

## Solutions and electrochemistry notation (new for this pair; follow Chemistry 11 Ch 5 and 7 where they cover it)
- Variables italic with upright word or label subscripts: <i>E</i>°, <i>E</i><sub>cell</sub>, <i>E</i>°<sub>cell</sub>,
  Δ<sub>r</sub><i>G</i>°, <i>K</i><sub>c</sub>, <i>K</i><sub>H</sub>, <i>K</i><sub>b</sub>, <i>K</i><sub>f</sub>,
  <i>K</i><sub>a</sub>, <i>p</i><sub>A</sub>, <i>p</i>°<sub>A</sub>, <i>x</i><sub>A</sub>, <i>y</i><sub>A</sub>,
  Δ<i>T</i><sub>b</sub>, Δ<i>T</i><sub>f</sub>, <i>T</i><sub>b</sub>, <i>i</i>, <i>n</i>, <i>F</i>, <i>Q</i>, <i>R</i>, <i>G</i>,
  <i>κ</i>, <i>α</i>, <i>m</i> (molality), <i>M</i> (molar mass), <i>w</i>, <i>V</i>, <i>I</i>, <i>t</i>, <i>Z</i>.
  Π, Λ and ° are upright: Λ<sub>m</sub>, Λ°<sub>m</sub> (or as Chemistry 11 prints them; be consistent and report), λ° as printed.
- Molarity M and normality N as units are upright ("0.10 M"); molar mass <i>M</i> is italic. mol kg<sup>−1</sup>,
  S cm<sup>2</sup> mol<sup>−1</sup>, S m<sup>−1</sup>, Ω and "96500 C mol<sup>−1</sup>" upright.
- Cell notation with upright species and the book's bars: Zn | Zn<sup>2+</sup> (0.10 M) ‖ Cu<sup>2+</sup> (1.0 M) | Cu.
- van 't Hoff with the book's spelling; ppm, ppb, % (w/w), % (v/v) as printed; ⇌ for equilibria; electrons e<sup>−</sup>.
- **Balance every half-reaction and cell reaction for atoms and charge** (electrolysis, lead storage, dry, mercury, Ni–Cd, fuel
  cells, rusting, all the Nernst and Kohlrausch examples). **Recompute every number** (concentrations and interconversions,
  Henry's law, Raoult, colligative numericals, van 't Hoff factors, Nernst and log K values, conductance and cell constants,
  Faraday's laws, current efficiency, batteries). Note which R, F and log factor the book uses (0.0591 vs 0.059), and which
  molar volume (22.4 at 1 atm vs 22.7 at 1 bar). Check every E° and λ° against NCERT, and that tables, text and examples use one value.
- Watch for: sign and direction of deviations from Raoult's law and azeotrope types; which colligative formula holds when; the
  dilution trends of κ and Λ<sub>m</sub>; anode/cathode polarity in galvanic vs electrolytic cells; overpotential products
  of aqueous electrolysis; lead-storage reactions on charge and discharge; rusting half-reactions.

## Diagram agents
Computed and checked, no fills, one highlight, phone width (390): gas-over-liquid cylinders and the Henry plot (straight line,
slope <i>K</i><sub>H</sub>); ideal and non-ideal vapour-pressure/composition lines (totals are the sums; positive above, negative
below the ideal); vapour pressure vs temperature (solution below solvent; Δ<i>T</i><sub>b</sub> and Δ<i>T</i><sub>f</sub> where the
book marks them); osmosis cell; the azeotrope boiling-point diagram (a minimum, liquid and vapour curves touching there); Daniell cell (electron flow, polarity, salt bridge);
Λ<sub>m</sub> vs √c (strong straight, weak rising steeply, intercept); electrolytic cell (battery polarity to anode and cathode);
rusting under a droplet (anode at the oxygen-poor centre, cathode at the rim; every half-reaction balanced). Each `check` recomputes
what the drawing and caption state. Caption = the book's caption word for word, without "(see next page)". **Android rule:
one font inside one tag only**: a kit tag cannot contain Greek (Onest has none, and a STIX run inside it is drawn on top of the
Latin); a tag whose name needs Greek or a subscript uses the all-STIX pill helper as `lib/diagrams/chemistry-11-09.ts` `mtag` does.
Charges on atoms in structures go at a clear outer corner, never directly over the letter.

## Your report
As the earlier briefs say: every figure placement, renumbered cross-reference, errata item, suspected book error (page, what it
says, what is right, why), doubted MCQ key or nudge, question with no printed answer, unstated assumption, false "the chapter does
not cover X" claim, formula card that lacks meanings, every piece of new text written by us, and the exact results of
`npx tsc --noEmit` (the only existing error is `components/ask-follow-up.tsx`, boxShadow; it may have been fixed),
`npx jest content/textbooks lib/revise lib/diagrams` and `npx eslint <your files>`. Print your topics' formula cards with a
temporary test and delete it. Return the report as your final message (you cannot write .md files).
