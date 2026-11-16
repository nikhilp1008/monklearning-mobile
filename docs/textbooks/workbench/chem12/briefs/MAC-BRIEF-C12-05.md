# Brief: Chemistry Class 12, Chapter 5 Coordination Compounds, rebuilt word for word from the Master Reference book

**Read, in order:**
1. `/Users/nikhi/Developer/monk-books/chem12/briefs/MAC-BRIEF-C12-01-02.md` and every file it tells you to read. Its page map, file names and "Solutions and electrochemistry notation" don't apply. Everything else does.
2. This file. **Where they disagree, this file wins.**

**Your closest models:** Chemistry 12 Chapter 4, finished and reviewed: `content/textbooks/chem-12-04/topic-2.ts`, `content/textbooks/chem-12-04/extras-a-b.ts`, `lib/diagrams/chemistry-12-04.ts`, `lib/revise/keypoints-chemistry-12-04.ts`. Founder decisions: `chem12/DECISIONS-C12.md` and items 17–18 of `chem11/DECISIONS-C11.md`.

## GO EASY ON THE MAC (founder's Mac has been hanging)
- **Do NOT run `npx tsc` or `npx jest content/textbooks lib/revise lib/diagrams`.** The coordinator runs those once at the end.
- **Your only test run:** writers: `npx jest content/textbooks/__tests__/book-rules content/textbooks/__tests__/book-chapters -t "Chemistry 12 Chapter 5|the text of every book chapter"` (the failures that name "Chemistry 12 Ch 5" or your topic are yours; undrawn fig ids are the diagram agent's; failures naming other writers' files, or empty stubs not yet written, are theirs). Diagram agent: `npx jest lib/diagrams -t "chemistry.12.5"`. Key points: `npx jest lib/revise`. Run it once when your file is done, and again only if it failed. Plus `npx eslint <your file>`.
- Read pages through the Read tool on the PDF with `pages`, a few at a time, rather than rendering PNGs. Render a page image only where the PDF read is unclear, and delete it straight away.
- No subagents, no Metro, Expo, simulator, emulator or builds. No git commands that change anything.

## Where things are
Book `/Users/nikhi/Developer/monk-books/chem12/chem12.pdf` (PDF page = bottom folio), text dump `chem12/chem12.txt`. Work folder `chem12/work-<your-name>/`. Your file exists as an empty stub, already wired in.
Errata pp. 584–587; its page numbers are the chapter's own, so find items by text. **Ch 5 items, check the page shows each and report it:**
- Sub-topic 02, Practice Exercises, answer to Q4: five geometrical isomers for [Pt(NH₃)₂Cl₂Br₂] (type Ma₂b₂c₂), six stereoisomers because the all-cis form is chiral.
- Sub-topic 05, the Cu²⁺ stability table and Factor 3: [Cu(en)]²⁺ 10.7, [Cu(NH₃)₄]²⁺ 13.0, [Cu(EDTA)]²⁻ 18.8, [Cu(en)₂]²⁺ 20.0, in increasing order; no aqua row; Factor 3 quotes 20.0 and 13.0.
- Cosmetic note: the heading "The reference table, extended" is stranded at the foot of a page in the addendum, so place it with its table. **The errata also says exam-year attributions in the addendum "are given as recalled and should not be relied upon". Copy them as printed and list every one in your report**; the founder will decide.

## Page map, Chapter 5 Coordination Compounds (pp. 196–250). Confirm every boundary on the page images and report any difference.
p. 196 title, top of p. 197 contents (not copied).
- Topic 01 Werner's Theory, Ligands & Nomenclature: pp. 197–203
- Topic 02 Isomerism in Coordination Compounds: pp. 204–212 (Figures 5.1 and 5.2; figure pages 208 and 210, captions first on 207 and 209)
- Topic 03 Bonding in Coordination Compounds (VBT & CFT): pp. 213–218
- Topic 04 Bonding in Metal Carbonyls: pp. 219–224
- Topic 05 Stability of Coordination Compounds: pp. 225–230
- Topic 06 Importance & Applications of Coordination Compounds: pp. 231–236
- p. 237 shared introduction "Chapter 5: Coordination Compounds — Additional Topics" → first paragraph(s) of A's Introduction.
- A Nomenclature Drills: The Cases the Chapter Stops Short Of (237–239); B Isomer Counting: Beyond cis and trans (239–242); C CFT Arithmetic: Tetrahedral Fields, Pairing Energies, and the … (242–245; confirm the exact title; an unnumbered "Figure 1" on p. 243, id `c12-05-C-d1`); D The Werner Crossovers: Counting Ions, Waters, and Electrons (246–247); **E What JEE and NEET Actually Ask** (book "Addendum P", 248–250; "Addendum P" references → "Additional topic E").
- p. 251 is the next chapter's title. Addenda's answers often spill onto the next addendum's page: check where each really ends.
- Cross-references: "Sub-topic N" → "Topic 0N"; "Section N" of a topic → the part's name; "Worked Example X.n" → "the first worked example of Additional topic X"; "Addendum A–D" stay as printed. **The shelf numbers this chapter 6 and d- and f-Block 5, while the book says 5 and 4, so a chapter number → the chapter's name.** List every change.
- Old NCERT numbering (any "NCERT 9.x", "Unit 9"): founder's rule is one note at the first citation, so copy as printed and report each; the reviewer writes the note.

## Files and ids
- `content/textbooks/chem-12-05/topic-1.ts` to `topic-6.ts`, `extras-a-c.ts`, `extras-d-e.ts` (each exports TOPICS).
- Diagrams `lib/diagrams/chemistry-12-05.ts` (`DIAGRAMS_CHEMISTRY_12_05`), ids `c12-05-fig-5.N`, unnumbered `c12-05-<topic n>-d<k>`.
- `topic` index = position in the chapter's topics array: **Topics 01–06 = 0–5, A–E = 6–10.**
- Key points `lib/revise/keypoints-chemistry-12-05.ts`.
- Titles and tags are plain text, which can't carry a sub or sup. In a title or tag, write a formula with Unicode subscripts where it matters, and Δo, t2g, Ea flat. Report them. **A card title (a formula's kicker) must not end on a long hyphenated compound**: "Landé/total-angular-momentum expression" was cut mid-word on Android.

## Coordination notation
- Complexes in square brackets, species upright: [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup>, [Ni(CN)<sub>4</sub>]<sup>2−</sup>, K<sub>4</sub>[Fe(CN)<sub>6</sub>]. Charges digit first, real minus. Ligand abbreviations upright: en, ox, EDTA, py, dien, gly. Oxidation states as Roman numerals in names, as printed: cobalt(III).
- d-counts and orbitals upright, as Chapter 4: d<sup>6</sup>, 3d, t<sub>2g</sub><sup>6</sup> e<sub>g</sub><sup>0</sup> (letters upright). Hybrids upright: d<sup>2</sup>sp<sup>3</sup>, sp<sup>3</sup>d<sup>2</sup>, dsp<sup>2</sup>, sp<sup>3</sup>.
- Δ<sub>o</sub>, Δ<sub>t</sub> with Δ and the label upright, <i>P</i> italic for pairing energy, CFSE upright. Spin-only μ<sub>s</sub> = √(<i>n</i>(<i>n</i> + 2)) BM, as Chapter 4. <i>n</i> italic.
- Stability: <i>K</i>, <i>K</i><sub>f</sub>, log <i>K</i>, β<sub>4</sub>: italic <i>K</i>, upright labels, β upright, as printed. In a type formula Ma<sub>2</sub>b<sub>2</sub>c<sub>2</sub>: upright, as species. cis, trans, fac, mer, d, l: upright unless the house form says otherwise; say what you did.
- Hydrogen bonds and M–C, C≡O, M–L bonds with en dashes or the bond sign as printed.
- **Recompute every number and check every structure:** oxidation states, d-counts, unpaired electrons, moments, CFSE (including pairing), Δt = (4/9)Δo arithmetic, isomer counts (enumerate them), EAN and 18-electron counts, ions per formula, AgCl moles, conductivity orders, log K arithmetic, naming (alphabetical order, ammine, aqua, -ate, multiplicative prefixes, bis/tris). Balance every equation. Copy as printed and report anything that looks wrong.
- Watch for: primary and secondary valence; ambidentate vs bidentate; denticity of EDTA; sp³ vs dsp² in [NiCl₄]²⁻ and [Ni(CN)₄]²⁻; inner vs outer orbital; tetrahedral always high spin; spectrochemical series order; CO as a strong-field ligand and synergic bonding; C–O vs M–C bond order and the charge trend in carbonyl stretching; Fe(CO)₅ trigonal bipyramidal, Cr(CO)₆ octahedral, Ni(CO)₄ tetrahedral, Mn₂(CO)₁₀ and Co₂(CO)₈; chelate effect; stepwise vs overall constants, β = K₁K₂…; optical isomers of [Co(en)₃]³⁺; cisplatin; haemoglobin, chlorophyll and vitamin B₁₂ metals; Wilkinson's catalyst; EDTA uses.

## Lessons from Chapters 1–4 (do these now, so reviewers needn't)
- **Every formula card: every symbol has a meaning on that card.** Write the legend lines (book's words where it has them), and list them as new text.
- **Memory aids:** in `aids`, no "Mnemonic:" label.
- **Practice answers:** first letter capitalised, with units. An answer that is only a pointer ("see Sections 1–2"): replace the pointer with the part's name and report it; the reviewer drafts the model answer.
- **Every MCQ wrong option needs its own nudge**, describing ITS option; a nudge shared by several options is split into one per option if true of each; if the book gives none, leave null and report it.
- **Answer printed once**: step stops before the result, `ans` carries it, a remark after it becomes the last step, but a step ending in a colon that leads into the answer stays last.
- **Don't rewrite suspected errors.** Copy as printed and report. Flag claims about what NCERT says or about the chapter ("the chapter never…"): check them against the topics, and say you couldn't check NCERT. Flag over-absolute claims ("always", "only", "never", "one rule explains all") with a counter-example, and clashes with other topics.
- **Questions that leave out a premise** (geometry, spin state, which ligand field): copy as printed and report.
- **Long formula or data lines:** a table written out in a sentence must not repeat units in every cell. Put the units once in front, and report it. A note in a table's column head repeats in every row on a phone, so put it in a line before the table.
- A book table goes in as a real table block unless it can't fit a phone; say how you set each.
- "Common errors." is a bold run-in: a `p` after the practice block, in part "Practice". kJ/mol in html text is kJ mol<sup>−1</sup>.

## Diagram agent
No fills, one highlight, phone width. Count the vector shapes on every page 196–250 to find unlabelled drawings, and report which pages you judged to hold none. Computed and checked: Fig 5.1 cis and trans octahedral [Cr(NH₃)₄Br₂]⁺, printed angles between the two Br (90°, 180°); Fig 5.2 [Co(en)₂(NH₃)Cl]²⁺, achiral trans and the cis enantiomer pair, with the mirror truly mirroring and each en bridging adjacent positions; `c12-05-C-d1` the two splitting patterns, t₂g at −0.4 Δo, e_g at +0.6 Δo, e at −0.6 Δt, t₂ at +0.4 Δt, with barycentre, and tetrahedral Δt = (4/9)Δo if drawn. Say which values are the book's and which are schematic. Caption = the book's, without "(see next page)", dropping any "Figure 1:" prefix. Octahedral geometry: octahedra in `lib/diagrams/chemistry-11-04b.ts` are the house form. Android rule: one font inside one tag; a tag needing Greek, a sub or sup uses an all-STIX pill (`mtag` in `chemistry-11-09.ts`); charges at a clear outer corner, never over a letter; labels clear of arrows (subscripts count). Render with `qlmanage -t -s 900 -o <folder> <file>.svg` via `DUMP_DIAGRAMS=<folder> npx jest lib/diagrams/__tests__/dump`.

## Your report
As the earlier briefs say, as your final message. Replace "exact results of tsc and the whole jest run" with your one narrow test run and eslint.
