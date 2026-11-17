# Brief: Chemistry Class 12, Chapter 6 Haloalkanes and Haloarenes, rebuilt word for word from the Master Reference book

**Read, in order:**
1. `/Users/nikhi/Developer/monk-books/chem12/briefs/MAC-BRIEF-C12-01-02.md` and every file it tells you to read. Its page map, file names and "Solutions and electrochemistry notation" don't apply. Everything else does.
2. This file. **Where they disagree, this file wins.**

**Your closest models:** Chemistry 12 Chapter 5, finished and reviewed: `content/textbooks/chem-12-05/topic-2.ts`, `content/textbooks/chem-12-05/extras-a-c.ts`, `lib/revise/keypoints-chemistry-12-05.ts`. For organic notation and mechanisms: Chemistry 11 Ch 8 and Ch 9, `content/textbooks/chem-11-08*`, `content/textbooks/chem-11-09/`, `lib/diagrams/chemistry-11-08*.ts`, `lib/diagrams/chemistry-11-09.ts`. Founder decisions: `chem12/DECISIONS-C12.md` and items 17–18 of `chem11/DECISIONS-C11.md`.

## GO EASY ON THE MAC (founder's Mac has been hanging)
- **Do NOT run `npx tsc` or `npx jest content/textbooks lib/revise lib/diagrams`.** The coordinator runs those once at the end.
- **Your only test run:** writers: `npx jest content/textbooks/__tests__/book-rules content/textbooks/__tests__/book-chapters -t "Chemistry 12 Chapter 6|the text of every book chapter"` (the failures that name "Chemistry 12 Ch 6" or your topic are yours; undrawn fig ids are the diagram agent's; failures naming other writers' files, or empty stubs not yet written, are theirs). Diagram agent: `npx jest lib/diagrams -t "chemistry.12.6"`. Key points: `npx jest lib/revise`. Run it once when your file is done, and again only if it failed. Plus `npx eslint <your file>`.
- Read pages through the Read tool on the PDF with `pages`, a few at a time, rather than rendering PNGs. Render a page image only where the PDF read is unclear, and delete it straight away.
- No subagents, no Metro, Expo, simulator, emulator or builds. No git commands that change anything.

## Where things are
Book `/Users/nikhi/Developer/monk-books/chem12/chem12.pdf` (PDF page = bottom folio), text dump `chem12/chem12.txt`. Work folder `chem12/work-<your-name>/`. Your file exists as an empty stub, already wired in.
Errata pp. 584–587; its page numbers are the chapter's own, so find items by text. **Ch 6 item, check the page shows it and report it:**
- Sub-topic 03 D (the iodoform test), "Distinguishing iodoform from chloroform": by physical state, colour and smell: iodoform is a yellow solid (m.p. 119 °C) with a characteristic smell, chloroform a colourless liquid (b.p. 61 °C). Iodoform is covalent and does not ionise in aqueous silver nitrate, so a precipitate with AgNO₃ is not a reliable test.

## Page map, Chapter 6 Haloalkanes and Haloarenes (pp. 251–310). Confirm every boundary on the page images and report any difference.
p. 251 title, top of pp. 252–253 contents (not copied).
- Topic 01 Nomenclature, Preparation & Physical Properties: pp. 253–263 (confirm the exact title)
- Topic 02 Chemical Reactions & Mechanisms: pp. 264–275 (Figures 6.1, 6.2 on figure page 268, captions first on 267; Figures 6.3, 6.4 on figure page 270, captions first on 269)
- Topic 03 Polyhalogen Compounds: pp. 276–285 (Figure 6.5; figure page 280, caption first on 279). It has lettered sub-sections A, B, C, D…: keep them as the book sets them.
- Topic 04 The Complete Reaction Map (Substitution …): pp. 286–294 (Figure 6.6; figure page 290, caption first on 289; confirm the exact title). It has the ordinary eight sections, so it is an ordinary topic with parts.
- p. 295 shared introduction "Chapter 6: Haloalkanes and Haloarenes — Additional Topics" → first paragraph(s) of A's Introduction.
- A SN1 Under the Microscope: Kinetics, Rearrangement, and the … (295–298); B Elimination Versus Substitution: E1, E2, and the Hofmann … (298–301; an unnumbered "Figure 1" on p. 299, the mechanism triage tree, id `c12-06-B-d1`); C The Stereochemistry Toolkit (301–303); D Aryl, Vinyl, Allyl, Benzyl: The Reactivity Ladder, Complete (303–305); E Comparison Data Drills: Dipoles, Boiling Points, Densities (305–307); **F What JEE and NEET Actually Ask** (book "Addendum P", 307–310; "Addendum P" references → "Additional topic F"). Confirm the exact titles.
- p. 311 is the next chapter's title. Addenda's answers often spill onto the next addendum's page: check where each really ends.
- Cross-references: "Sub-topic N" / "Sub-0N" → "Topic 0N"; "Section N" of a topic → the part's name; "Example X.n" → "the first worked example of Additional topic X"; "Addendum A–E" stay as printed. **The shelf numbers this chapter 7, while the book says 6, so a chapter number → the chapter's name.** List every change.
- Old NCERT numbering (p. 295 "Unit 10 (old-edition numbering)", p. 304 "NCERT's Example 10.7", p. 306 "NCERT Exercise 10.4", any others): founder's rule is one note at the first citation, so copy as printed and report each; the reviewer writes the note. **Exam citations:** the founder's rule from Chapter 5 is no exam years ("a recent JEE Main paper"); copy as printed and list every dated one, with page and exact words.

## Files and ids
- `content/textbooks/chem-12-06/topic-1.ts` to `topic-4.ts`, `extras-a-c.ts`, `extras-d-f.ts` (each exports TOPICS).
- Diagrams `lib/diagrams/chemistry-12-06.ts` (`DIAGRAMS_CHEMISTRY_12_06`), ids `c12-06-fig-6.N`, unnumbered `c12-06-<topic n>-d<k>`.
- `topic` index = position in the chapter's topics array: **Topics 01–04 = 0–3, A–F = 4–9.**
- Key points `lib/revise/keypoints-chemistry-12-06.ts`.
- Titles and tags are plain text, which can't carry a sub or sup. In a title or tag, write SN1, SN2, E1, E2 flat, and a formula with Unicode subscripts where it matters. Report them. **A card title (a formula's kicker) must not end on a long hyphenated compound**: Android cuts it mid-word.

## Organic notation
- Follow Chemistry 11 Ch 8 and 9. S<sub>N</sub>1, S<sub>N</sub>2, S<sub>N</sub>Ar, E1, E2 in html: S and N upright, subscript N; digits on the line. R–X, C–X, C–Cl, R–OH with en dashes as bonds. Curly arrows and steps as printed. δ+ and δ− as <i>δ</i>? Use the form Chemistry 11 Ch 8 uses, and say what you did.
- Stereo descriptors: (<i>R</i>), (<i>S</i>), (±), d, l, as Chemistry 11 Ch 8 does. o-, m-, p- upright unless the house form says otherwise. α, β upright.
- Formulas and species upright, charges digit first, real minus: CH<sub>3</sub>Cl, CHCl<sub>3</sub>, CHI<sub>3</sub>, CCl<sub>4</sub>, NO<sub>2</sub><sup>−</sup>, R<sup>+</sup>. Rate laws: Rate = <i>k</i>[RX][Nu<sup>−</sup>]. Dipole moments in D. Reagents over arrows: Unicode inside `<sup>` as Chemistry 11 does, short ones only; put long conditions on the line after.
- **Long IUPAC names:** a name with no break point is cut mid-word on Android. Put `​` between name parts where a line may wrap: `2-bromo​butane` is fine for long ones such as `1-chloro-2,2,3,3-​tetramethylbutane`. A check in book-rules flags these.
- **Check every structure and name, recompute every number:** IUPAC names and common names, 1°/2°/3° class, chirality centres and R/S, products and major products (Saytzeff or Hofmann), rate order, reactivity orders (bond strength C–F to C–I, SN1 and SN2 orders, boiling points, densities, dipole moments), inversion and racemisation percentages, balanced equations. Copy as printed and report anything that looks wrong.
- Watch for: dipole order CH₃Cl > CH₃F > CH₃Br > CH₃I; boiling point orders and isomers; density; solubility; SN1 vs SN2 solvent effects; Walden inversion; racemisation being partial; KCN vs AgCN, KNO₂ vs AgNO₂; Finkelstein and Swarts; Wurtz, Wurtz–Fittig, Fittig; Grignard and moisture; alcoholic vs aqueous KOH; Zaitsev; why aryl halides resist; ortho-para directing yet deactivating; Dow process; benzyne; DDT, freons, chloroform to phosgene with air; iodoform test scope; Sandmeyer and Gattermann; allylic and benzylic resonance; vinyl and aryl halides in SN1.

## Lessons from Chapters 1–5 (do these now, so reviewers needn't)
- **Every formula card: every symbol has a meaning on that card.** Write the legend lines (book's words where it has them), and list them as new text.
- **Memory aids:** in `aids`, no "Mnemonic:" label.
- **Practice answers:** first letter capitalised, with units. An answer that is only a pointer ("see Sections 1–2"): replace the pointer with the part's name and report it; the reviewer drafts the model answer.
- **Every MCQ wrong option needs its own nudge**, describing ITS option; a nudge shared by several options is split into one per option if true of each; if the book gives none, leave null and report it.
- **Answer printed once**: step stops before the result, `ans` carries it, a remark after it becomes the last step, but a step ending in a colon that leads into the answer stays last.
- **Don't rewrite suspected errors.** Copy as printed and report. Flag claims about what NCERT says or about the chapter ("the chapter never…"): check them against the topics, and say you couldn't check NCERT. Flag over-absolute claims ("always", "only", "never", "one rule explains all") with a counter-example, and clashes with other topics and with Chemistry 11 Ch 8–9.
- **Questions that leave out a premise** (solvent, temperature, which isomer, chirality): copy as printed and report.
- **Long formula or data lines:** a table written out in a sentence must not repeat units in every cell. Put the units once in front, and report it. A note in a table's column head repeats in every row on a phone, so put it in a line before the table. Lists of formulas joined by slashes get cut on a phone: report them; a comma list is the fix.
- A book table goes in as a real table block unless it can't fit a phone; say how you set each. A figure the book prints inside a worked example goes on the `ex` as `fig:`.
- "Common errors." is a bold run-in: a `p` after the practice block, in part "Practice". kJ/mol in html text is kJ mol<sup>−1</sup>.

## Diagram agent
No fills, one highlight, phone width. Count the vector shapes on every page 251–310 to find unlabelled drawings, and report which pages you judged to hold none. Say which values are the book's and which are schematic. Caption = the book's, without "(see next page)", dropping any "Figure 1:" prefix. Android rule: one font inside one tag; a tag needing Greek, a sub or sup uses an all-STIX pill (`mtag` in `chemistry-11-09.ts`); charges at a clear outer corner, never over a letter; labels clear of arrows (subscripts count); leave room for real font widths, because a stand-in font flatters a tight fit (Fig 5.1's labels touched their brackets on Android). Render with `qlmanage -t -s 900 -o <folder> <file>.svg` via `DUMP_DIAGRAMS=<folder> npx jest lib/diagrams/__tests__/dump`.
Computed and checked: Fig 6.1 SN2, backside attack, the five-coordinate transition state with partial bonds, inversion shown (atoms read back, inverted umbrella); Fig 6.2 SN1, the planar carbocation and attack on either face, both products; Fig 6.3 E2, anti β-H and C–X, the alkene; Fig 6.4 SNAr on p-nitrochlorobenzene, the addition intermediate and loss of Cl⁻; Fig 6.5 the iodoform test; Fig 6.6 benzyne; `c12-06-B-d1` triage tree (each branch reads as printed; a tree with no crossing lines). Atom counts and charges balance across every arrow.

## Your report
As the earlier briefs say, as your final message. Replace "exact results of tsc and the whole jest run" with your one narrow test run and eslint.
