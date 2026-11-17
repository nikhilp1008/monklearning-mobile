# Brief: Chemistry Class 12, Chapter 4 The d- and f-Block Elements, rebuilt word for word from the Master Reference book

**Read, in order:**
1. `/Users/nikhi/Developer/monk-books/chem12/briefs/MAC-BRIEF-C12-01-02.md` and every file it tells you to read. Its page map, file names and "Solutions and electrochemistry notation" don't apply. Everything else does.
2. This file. **Where they disagree, this file wins.**

**Your closest models:** Chemistry 12 Chapter 3, finished and reviewed: `content/textbooks/chem-12-03/topic-2.ts`, `content/textbooks/chem-12-03/extras-a-c.ts`, `lib/diagrams/chemistry-12-03.ts`, `lib/revise/keypoints-chemistry-12-03.ts`. Founder decisions: `chem12/DECISIONS-C12.md` and items 17–18 of `chem11/DECISIONS-C11.md`.

## GO EASY ON THE MAC (founder's Mac has been hanging)
- **Do NOT run `npx tsc` or `npx jest content/textbooks lib/revise lib/diagrams`.** The coordinator runs those once at the end.
- **Your only test run:** writers: `npx jest content/textbooks/__tests__/book-rules content/textbooks/__tests__/book-chapters -t "Chemistry 12 Chapter 4|the text of every book chapter"` (the failures that name "Chemistry 12 Ch 4" or your topic are yours; undrawn fig ids are the diagram agent's; failures naming other writers' files, or empty stubs not yet written, are theirs). Diagram agent: `npx jest lib/diagrams -t "chemistry.12.4"`. Key points: `npx jest lib/revise`. Run it once when your file is done, and again only if it failed. Plus `npx eslint <your file>`.
- Read pages through the Read tool on the PDF with `pages`, a few at a time, rather than rendering PNGs. Render a page image only where the PDF read is unclear, and delete it straight away.
- No subagents, no Metro, Expo, simulator, emulator or builds. No git commands that change anything.

## Where things are
Book `/Users/nikhi/Developer/monk-books/chem12/chem12.pdf` (PDF page = bottom folio), text dump `chem12/chem12.txt`. Work folder `chem12/work-<your-name>/`. Your file exists as an empty stub, already wired in.
Errata pp. 584–587; its page numbers are the chapter's own, so find items by text. **Ch 4 items, check the page shows each and report it:**
- Sub-topic 02, Procedure C (the 5-3-1 medium rule): E° = +0.59 V for MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻ (neutral or faintly alkaline). +1.69 V belongs to the acidic couple MnO₄⁻ + 4H⁺ + 3e⁻ → MnO₂ + 2H₂O.
- Addendum B, third ionisation enthalpies: Fe, Mn, Cu, Zn = 2957, 3248, 3554, 3833 kJ mol⁻¹.
- Addendum P, "Give reasons" as assertion-reason: the sentence says only that Ce⁴⁺ (f⁰) has no f-f transitions; aqueous cerium(IV) is yellow-orange from charge transfer.

## Page map, Chapter 4 The d- and f-Block Elements (pp. 147–196). Confirm every boundary on the page images and report any difference.
p. 147 title, top of p. 148 contents (not copied).
- Topic 01 d-Block Properties & Trends: pp. 148–156 (Figure 4.1; figure page 152, caption first on 151)
- Topic 02 Potassium Dichromate (K2Cr2O7) & Potassium Permanganate (KMnO4): pp. 157–164 (Figure 4.2; figure page 159, caption first on 158)
- Topic 03 The f-Block — Lanthanoids and Actinoids: pp. 165–172 (Figure 4.3; figure page 167, caption first on 166)
- Topic 04 Capstone Reference — Electrode Potentials, Reactivity, Ion Colours, Series Comparison & Applications: pp. 173–178. It has the ordinary eight sections, so it is an ordinary topic with parts.
- p. 179 shared introduction "Chapter 4: The d- and f-Block Elements — Additional Topics" → first paragraph(s) of A's Introduction.
- A The Complete Oxidation-State Map of the 3d Series (179–182); B Reading the Energy Tables: Atomisation, Ionisation, Hydration (183–186; an unnumbered "Figure 1" on p. 184, electrode potentials across the 3d series, id `c12-04-B-d1`); C The Full Permanganate and Dichromate Bench (187–189); D The f-Block Fine Print (190–192); **E What JEE and NEET Actually Ask** (book "Addendum P", 193–196; "Addendum P" references → "Additional topic E").
- Addenda's answers often spill onto the next addendum's page: check where each really ends. Confirm the exact title of B on p. 183.
- Cross-references: "Sub-topic N" → "Topic 0N"; "Section N" of a topic → the part's name; "Worked Example X.n" → "the first worked example of Additional topic X"; "Addendum A–D" stay as printed. **The shelf numbers this chapter 5 and Coordination Compounds 6, while the book says 4 and 5, so "Chapter 5" (p. 181) → "the Coordination Compounds chapter"**, and any other chapter number the same way. List every change.
- Old NCERT numbering ("NCERT 8.3.8" p. 174, "NCERT 8.7" p. 191; the current NCERT numbers this chapter differently): founder's rule is one note at the first citation, so copy as printed and report each; the reviewer writes the note.

## Files and ids
- `content/textbooks/chem-12-04/topic-1.ts`, `topic-2.ts`, `topic-3.ts`, `topic-4.ts`, `extras-a-b.ts`, `extras-c-e.ts` (each exports TOPICS).
- Diagrams `lib/diagrams/chemistry-12-04.ts` (`DIAGRAMS_CHEMISTRY_12_04`), ids `c12-04-fig-4.N`, unnumbered `c12-04-<topic n>-d<k>`.
- `topic` index = position in the chapter's topics array: **Topics 01–04 = 0–3, A–E = 4–8.**
- Key points `lib/revise/keypoints-chemistry-12-04.ts`.
- Titles and tags are plain text, which can't carry a sub or sup. In a title or tag, write a formula with Unicode subscripts where it matters: K₂Cr₂O₇, KMnO₄ (already drawn on Android), and Ea flat. Report them.

## d- and f-block notation
- Configurations: [Ar]3d<sup>5</sup>4s<sup>1</sup>, (n−1)d<sup>1–10</sup>ns<sup>1–2</sup>, 4f<sup>7</sup>5d<sup>1</sup>6s<sup>2</sup>: upright, electron counts as superscripts, <i>n</i> italic where it is a variable.
- Charges as superscripts, digit first, real minus: Mn<sup>2+</sup>, Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>, MnO<sub>4</sub><sup>−</sup>, e<sup>−</sup>. Oxidation states as "+2" or Roman numerals, as printed.
- Magnetic moment: μ = √(<i>n</i>(<i>n</i> + 2)) BM, μ upright as Greek in the house form, <i>n</i> italic. Check every value (1.73, 2.84, 3.87, 4.90, 5.92).
- Electrode potentials: <i>E</i>°(Mn<sup>3+</sup>/Mn<sup>2+</sup>) with the couple glued, as Chemistry 12 Ch 2 does. Enthalpies Δ<sub>i</sub><i>H</i>, Δ<sub>a</sub><i>H</i>, Δ<sub>hyd</sub><i>H</i>: <i>H</i> italic, subscript labels upright.
- Ions in redox equations: balance atoms AND charge for every equation, including the permanganate and dichromate half-equations and their medium rules.
- **Recompute every number and check every configuration:** unpaired electrons, spin-only moments, oxidation states, electron counts, equivalent and n-factor arithmetic, titration values. Compare trends with standard values: melting points across 3d, E°(M²⁺/M) signs, ionisation enthalpies, lanthanoid radii, ion colours. Copy as printed and report anything that looks wrong.
- Watch for: Cr and Cu exceptions; Zn, Cd, Hg as not transition elements; Sc³⁺, Zn²⁺ colourless; E°(Cu²⁺/Cu) positive; E°(Mn³⁺/Mn²⁺) and E°(Co³⁺/Co²⁺) large and positive; Mn₂O₇ acidic vs MnO basic; lanthanoid +3 with Ce⁴⁺, Eu²⁺, Yb²⁺; actinoid contraction greater than lanthanoid; Zr/Hf radii; f-f colour vs charge transfer; K₂Cr₂O₇ vs Na₂Cr₂O₇ as primary standard; chromate–dichromate equilibrium with pH; KMnO₄ not a primary standard; HCl not used in permanganate titrations.

## Lessons from Chapters 1–3 (do these now, so reviewers needn't)
- **Every formula card: every symbol has a meaning on that card.** Write the legend lines (book's words where it has them), and list them as new text.
- **Memory aids:** in `aids`, no "Mnemonic:" label.
- **Practice answers:** first letter capitalised, with units. An answer that is only a pointer ("see Sections 1–2"): replace the pointer with the part's name and report it; the reviewer drafts the model answer.
- **Every MCQ wrong option needs its own nudge**, describing ITS option; a nudge shared by several options is split into one per option if true of each; if the book gives none, leave null and report it.
- **Answer printed once**: step stops before the result, `ans` carries it, a remark after it becomes the last step, but a step ending in a colon that leads into the answer stays last.
- **Don't rewrite suspected errors.** Copy as printed and report. Flag claims about what NCERT says or about the chapter ("the chapter never…"): check them against the topics, and say you couldn't check NCERT.
- **Questions that leave out a premise** (medium, temperature, which species): copy as printed and report.
- **Long formula or data lines:** a table written out in a sentence must not repeat units in every cell. Put the units once in front, as `content/textbooks/chem-12-03/topic-1.ts` Worked Example 2 now does, and report it.
- A book table goes in as a real table block unless it can't fit a phone; say how you set each.

## Diagram agent
No fills, one highlight, phone width. Count the vector shapes on every page 147–196 to find unlabelled drawings, and report which pages you judged to hold none. Computed and checked: Fig 4.1 melting points across Sc–Zn (read values from the book's path data; hump, dip at Mn, crash at Zn); Fig 4.2 dichromate ion, two CrO₄ tetrahedra sharing one bridging oxygen, the printed angle and bond lengths; Fig 4.3 lanthanoid contraction, Ln³⁺ radii falling from La to Lu with the Zr and Hf point; `c12-04-B-d1` E°(M²⁺/M) across 3d, with signs, and Cu positive. Say which values are the book's and which are schematic. Caption = the book's, without "(see next page)". Android rule: one font inside one tag; a tag needing Greek, a sub or sup uses an all-STIX pill (`mtag` in `chemistry-11-09.ts`); charges at a clear outer corner, never over a letter; labels clear of arrows (subscripts count). Render with `qlmanage -t -s 900 -o <folder> <file>.svg` via `DUMP_DIAGRAMS=<folder> npx jest lib/diagrams/__tests__/dump`.

## Your report
As the earlier briefs say, as your final message. Replace "exact results of tsc and the whole jest run" with your one narrow test run and eslint.
