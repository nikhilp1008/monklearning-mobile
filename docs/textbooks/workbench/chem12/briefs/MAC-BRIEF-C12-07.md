# Brief: Chemistry Class 12, Chapter 7 Alcohols, Phenols and Ethers, rebuilt word for word from the Master Reference book

**Read, in order:**
1. `/Users/nikhi/Developer/monk-books/chem12/briefs/MAC-BRIEF-C12-01-02.md` and every file it tells you to read. Its page map, file names and "Solutions and electrochemistry notation" don't apply. Everything else does.
2. `/Users/nikhi/Developer/monk-books/chem12/briefs/MAC-BRIEF-C12-06.md`: its "Organic notation" and "Lessons from Chapters 1–5" sections apply here too (ignore its page map, files and ids).
3. This file. **Where they disagree, this file wins.**

**Your closest models:** Chemistry 12 Chapter 6, finished, reviewed and checked on Android: `content/textbooks/chem-12-06/topic-2.ts`, `content/textbooks/chem-12-06/extras-a-c.ts`, `lib/diagrams/chemistry-12-06.ts`, `lib/revise/keypoints-chemistry-12-06.ts`. For organic notation: Chemistry 11 Ch 8 and Ch 9 (`content/textbooks/chem-11-08*`, `content/textbooks/chem-11-09/`, `lib/diagrams/chemistry-11-09.ts`). Founder decisions: `chem12/DECISIONS-C12.md` (items 20–24 are the latest, from Chapter 6) and items 17–18 of `chem11/DECISIONS-C11.md`.

## GO EASY ON THE MAC (founder's Mac has been hanging)
- **Do NOT run `npx tsc` or `npx jest content/textbooks lib/revise lib/diagrams`.** The coordinator runs those once at the end.
- **Your only test run:** writers: `npx jest content/textbooks/__tests__/book-rules content/textbooks/__tests__/book-chapters -t "Chemistry 12 Chapter 7|the text of every book chapter"` (the failures that name "Chemistry 12 Ch 7" or your topic are yours; undrawn fig ids are the diagram agent's; failures naming other writers' files, or empty stubs not yet written, are theirs). Diagram agent: `npx jest lib/diagrams -t "chemistry.12.7"`. Key points: `npx jest lib/revise`. Run it once when your file is done, and again only if it failed. Plus `npx eslint <your file>`.
- Read pages through the Read tool on the PDF with `pages`, a few at a time, rather than rendering PNGs. Render a page image only where the PDF read is unclear, and delete it straight away.
- No subagents, no Metro, Expo, simulator, emulator or builds. No git commands that change anything.

## Where things are
Book `/Users/nikhi/Developer/monk-books/chem12/chem12.pdf` (PDF page = bottom folio), text dump `chem12/chem12.txt`. Work folder `chem12/work-<your-name>/`. Your file exists as an empty stub, already wired in.
Errata pp. 584–587; Chapter 7 has cosmetic items only: "Representative example" labels stranded at the bottom of addendum pages (place each with its example), addendum answer lines running past the margin (no effect for us), and corrected lines set in near-black (no effect). Report what you saw.

## Page map, Chapter 7 Alcohols, Phenols and Ethers (pp. 311–366). Confirm every boundary on the page images and report any difference.
p. 311 title, top of p. 312 contents (not copied).
- Topic 01 Classification, Nomenclature & Preparation: pp. 312–322 (Figure 7.1, figure page 315, caption first on 314; Figure 7.2, figure page 318, caption first on 317). Copy the title as printed after "Alcohols, Phenols and Ethers —".
- Topic 02 Physical & Chemical Properties of Alcohols and Phenols: pp. 323–331 (Figure 7.3, the acidity ladder; figure page 325, caption first on 324).
- Topic 03 Ethers: Preparation & Properties: pp. 332–339 (Figure 7.4, boiling points at comparable mass; figure page 334, caption first on 333).
- Topic 04 Some Commercially Important Alcohols: pp. 340–343. It has no "Section N:" numbering: its own headings (Overview, Methanol, Ethanol, Grades and Special Forms of Ethanol, Worked Examples, Crack the MCQ, Common Student Pitfalls & Pro-Tips, Cheat Sheet Box) are its parts. Check every heading on the pages.
- p. 344 shared introduction "Chapter 7: Alcohols, Phenols and Ethers — Additional Topics" → first paragraph(s) of A's Introduction.
- A The Acidity of Phenols, Quantified (344–347; an unnumbered "Figure 1" on p. 346, the acidity ladder with pK<sub>a</sub> values, id `c12-07-A-d1`); B Rearrangement: The Carbocation Moves Before It Reacts (347–349); C Turning –OH into Halide Without HX: PBr<sub>3</sub>, PCl<sub>5</sub>, SOCl<sub>2</sub> (349–351); D The Williamson Synthesis as a Feasibility Screen (351–354); E Ether Cleavage: Stoichiometry and the Edge Cases (354–356); F Counting Isomers: C<sub>5</sub>H<sub>12</sub>O and C<sub>7</sub>H<sub>8</sub>O (356–358); G NCERT-Exact Micro-Facts: Fermentation, Denaturation, Anti… (358–360; confirm the exact title); **H What JEE and NEET Actually Ask** (book "Addendum P", 360–366; "Addendum P" references → "Additional topic H"). Confirm the exact titles.
- p. 367 is the next chapter's title. Addenda's answers often spill onto the next addendum's page: check where each really ends.
- Cross-references: "Sub-topic N" / "Sub-0N" → "Topic 0N"; "Section N" of a topic → the part's name; "Example X.n" → "the first (second, third) worked example of Additional topic X"; "Addendum A–G" stay as printed. **The shelf numbers this chapter 8, while the book says 7, so a chapter number → the chapter's name.** List every change.
- **Old NCERT numbering**: the addenda cite the old edition's Unit 11 ("NCERT Example 11.4", "intext 11.6", "intext 11.7", "intext 11.10", "intext 11.11", "exercise 11.3", "exercise 11.28(iii)", "NCERT 11.33", "NCERT 11.7" and others). Founder's rule is one note at the first citation, so copy as printed and report each with its page; the reviewer writes the note. **Exam citations:** the founder's rule is no exam years ("a recent JEE Main paper"); p. 361 has "The JEE Main 2022 sequence question". Copy as printed and list every dated one, with page and exact words.

## Files and ids
- `content/textbooks/chem-12-07/topic-1.ts` to `topic-4.ts`, `extras-a-c.ts`, `extras-d-g.ts`, `extras-h.ts` (each exports TOPICS).
- Diagrams `lib/diagrams/chemistry-12-07.ts` (`DIAGRAMS_CHEMISTRY_12_07`), ids `c12-07-fig-7.N`, unnumbered `c12-07-<topic n>-d<k>`.
- `topic` index = position in the chapter's topics array: **Topics 01–04 = 0–3, A–G = 4–10, H = 11.**
- Key points `lib/revise/keypoints-chemistry-12-07.ts`.
- Titles and tags are plain text, which can't carry a sub or sup. In a title or tag, write SN1, SN2, E1, E2 and pKa flat, and a formula with Unicode subscripts where it matters (PBr₃, SOCl₂, C₅H₁₂O). Report them. **A card title (a formula's kicker) must not end on a long hyphenated compound**: Android cuts it mid-word.

## Alcohol, phenol and ether notation
- Everything in Chapter 6's "Organic notation" holds: S<sub>N</sub>1 forms, en-dash bonds (R–OH, Ar–OH, R–O–R′, C–O, O–H), upright species, charges digit first with a real minus, (<i>R</i>)/(<i>S</i>) italic, o-, m-, p- upright, α, β upright, reagents over arrows as Unicode inside `<sup>` (short ones only; long conditions on the line after), `​` between the parts of long IUPAC names.
- Primes: R′ and R″ with the real prime (U+2032, U+2033), never an apostrophe.
- p<i>K</i><sub>a</sub> with p upright, <i>K</i> italic, a upright subscript, as Chemistry 11 does; <i>K</i><sub>a</sub> likewise. Temperatures in K as printed; kJ mol<sup>−1</sup>.
- Named reactions as printed and spelled consistently: Reimer–Tiemann, Kolbe, Williamson, Lucas, Victor Meyer if present, hydroboration–oxidation, cumene process, Dow process. Use an en dash between two names.
- Structures written inline: C<sub>6</sub>H<sub>5</sub>OH, (CH<sub>3</sub>)<sub>3</sub>C–OH, CH<sub>3</sub>CH(OH)CH<sub>3</sub>. Where the book draws a structure as a picture inside the text (not a numbered figure), say how you set it, and report it to me; if it can't be written inline, the drawer will draw it.

## Check every structure and name, recompute every number
IUPAC and common names, 1°/2°/3° class, products and major products (Markovnikov, anti-Markovnikov via hydroboration, Saytzeff), rearrangements (hydride and methyl shifts), reactivity and acidity orders (pK<sub>a</sub> values against the order claimed), boiling points and solubility orders, isomer counts (enumerate them: C<sub>5</sub>H<sub>12</sub>O alcohols and ethers, C<sub>7</sub>H<sub>8</sub>O aromatic isomers), stoichiometry of ether cleavage, balanced equations (fermentation, combustion, cumene, Dow, Kolbe, Reimer–Tiemann, Williamson, oxidation with PCC/CrO<sub>3</sub>/KMnO<sub>4</sub>), the oxygen count on the picric acid route. Copy as printed and report anything that looks wrong.
Watch for: Lucas test speeds (3° immediate, 2° within minutes, 1° none at room temperature); phenol not reacting with NaHCO<sub>3</sub>; o-nitrophenol vs p-nitrophenol acidity and volatility (intramolecular H-bond); acidity order with alkyl, nitro and methoxy groups, and meta vs para; alcohols as acids weaker than water; why ethers boil like alkanes; Williamson needing the primary halide, and 3° halides giving elimination; HI cleavage of alkyl aryl ethers giving phenol + alkyl iodide (never aryl iodide); 3° alkyl group in cleavage going SN1; Reimer–Tiemann electrophile dichlorocarbene and ortho product; Kolbe giving salicylic acid; phenol with bromine water (2,4,6-tribromophenol) vs Br<sub>2</sub> in CS<sub>2</sub> (mono); nitration giving o- and p-nitrophenol, then picric acid; oxidation of phenol to benzoquinone; Cu at 573 K dehydrogenation; 1° to aldehyde with PCC, to acid with KMnO<sub>4</sub>; dehydration temperatures for 1°, 2°, 3° alcohols; hydration of alkenes; NaBH<sub>4</sub> vs LiAlH<sub>4</sub>; Grignard on HCHO, other aldehydes and ketones (1°, 2°, 3°); methanol from syngas (ZnO–Cr<sub>2</sub>O<sub>3</sub>, conditions); fermentation by invertase and zymase, anaerobic; denatured alcohol (copper sulphate, pyridine, methanol as printed); methanol poisoning and the antidote; rectified spirit 95.6% azeotrope vs absolute alcohol; power alcohol.

## Lessons from Chapter 6 (do these now, so reviewers needn't)
- Over-absolute claims are the most common book fault: "only", "always", "never", "⇔". Flag each with a counter-example and copy as printed.
- Claims about what "the chapter" or NCERT does or skips: check against our topics, and say you couldn't check NCERT.
- A test's scope stated too widely (Chapter 6's iodoform "CH₃CO– ⇔ positive" missed acetic acid, esters and amides): report each such scope claim.
- "Racemic", "50:50", "complete" for SN1: the founder's form is "complete in the ideal case" once, with the master sentence in Chapter 6 Topic 02.
- Long reagent conditions on an arrow ("573–673 K, 200–300 atm") go on the line after the arrow, as Chapter 6's Dow line.
- Data written as a run of formula + value ("CH₃Cl ~1.86 > …"): keep each value with its formula with a no-break space (` `) so a phone never strands a number.
- A table whose first column holds only a symbol or number ("2°", "3°") gets a word ("2° alcohol"), because the phone prints the column head in front of a bare number: report it.

## Diagram agent
No fills, one highlight, phone width. Count the vector shapes on every page 311–366 to find unlabelled drawings, and report which pages you judged to hold none and how you judged them. Say which values are the book's and which are schematic. Caption = the book's, without "(see next page)", dropping any "Figure 1:" prefix. Android rule: one font inside one tag; a tag needing Greek, a sub or sup uses an all-STIX pill (`mtag` in `chemistry-11-09.ts`); charges at a clear outer corner, never over a letter; labels clear of arrows (subscripts count); leave room for real font widths, because a stand-in font flatters a tight fit. Render with `qlmanage -t -s 900 -o <folder> <file>.svg` via `DUMP_DIAGRAMS=<folder> npx jest lib/diagrams/__tests__/dump`.
Computed and checked: Fig 7.1 classification tree (by number of –OH, 1°/2°/3°, allylic/benzylic/vinylic, phenols, ethers; each branch reads as printed, no crossing lines); Fig 7.2 four routes to phenol (from chlorobenzene by the Dow process, from benzenesulphonic acid, from the diazonium salt, from cumene), reagents and conditions as printed, every arrow's reactant and product right; Fig 7.3 the acidity ladder (carboxylic acid > carbonic acid > phenol > water > alcohols) with any pK<sub>a</sub> values the page prints; Fig 7.4 boiling points 309, 308 and 390 K at comparable mass (check which compounds the page names and that their masses are comparable); `c12-07-A-d1` the acidity ladder with NCERT pK<sub>a</sub> values (water for reference): every value as printed, the order true to the values. Atom counts and charges balance across every arrow.

## Your report
As the earlier briefs say, as your final message. Replace "exact results of tsc and the whole jest run" with your one narrow test run and eslint.
