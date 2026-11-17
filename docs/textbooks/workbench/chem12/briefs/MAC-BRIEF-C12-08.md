# Brief: Chemistry Class 12, Chapter 8 Aldehydes, Ketones and Carboxylic Acids, rebuilt word for word from the Master Reference book

**Read, in order:**
1. `/Users/nikhi/Developer/monk-books/chem12/briefs/MAC-BRIEF-C12-01-02.md` and every file it tells you to read. Its page map, file names and "Solutions and electrochemistry notation" don't apply. Everything else does.
2. `/Users/nikhi/Developer/monk-books/chem12/briefs/MAC-BRIEF-C12-06.md`: its "Organic notation" and "Lessons from Chapters 1–5" sections.
3. `/Users/nikhi/Developer/monk-books/chem12/briefs/MAC-BRIEF-C12-07.md`: its "Alcohol, phenol and ether notation" and "Lessons from Chapter 6" sections (ignore its page map, files and ids).
4. This file. **Where they disagree, this file wins.**

**Your closest models:** Chemistry 12 Chapter 7, finished, reviewed and checked on Android: `content/textbooks/chem-12-07/topic-2.ts`, `content/textbooks/chem-12-07/extras-a-c.ts`, `content/textbooks/chem-12-07/extras-h.ts` (What JEE and NEET Actually Ask), `lib/diagrams/chemistry-12-07.ts`, `lib/revise/keypoints-chemistry-12-07.ts`. Founder decisions: `chem12/DECISIONS-C12.md` (items 25–29 are the latest, from Chapter 7) and items 17–18 of `chem11/DECISIONS-C11.md`.

## GO EASY ON THE MAC (founder's Mac has been hanging)
- **Do NOT run `npx tsc` or `npx jest content/textbooks lib/revise lib/diagrams`.** The coordinator runs those once at the end.
- **Your only test run:** writers: `npx jest content/textbooks/__tests__/book-rules content/textbooks/__tests__/book-chapters -t "Chemistry 12 Chapter 8|the text of every book chapter"` (the failures that name "Chemistry 12 Ch 8" or your topic are yours; undrawn fig ids are the diagram agent's; failures naming other writers' files, or empty stubs not yet written, are theirs). Diagram agent: `npx jest lib/diagrams -t "chemistry.12.8"`. Key points: `npx jest lib/revise`. Run it once when your file is done, and again only if it failed. Plus `npx eslint <your file>`.
- Read pages through the Read tool on the PDF with `pages`, a few at a time, rather than rendering PNGs. Render a page image only where the PDF read is unclear, and delete it straight away.
- No subagents, no Metro, Expo, simulator, emulator or builds. No git commands that change anything.

## Where things are
Book `/Users/nikhi/Developer/monk-books/chem12/chem12.pdf` (PDF page = bottom folio), text dump `chem12/chem12.txt` (this chapter's formulas come out in maths italic there: read them from the page). Work folder `chem12/work-<your-name>/`. Your file exists as an empty stub, already wired in.
Errata pp. 584–587; Chapter 8's items are cosmetic: some addendum lines run past the right margin (no effect for us); in one corrected question a small gap precedes a word and the corrected words are set upright rather than in maths italic; chemical formulas in the chapter text are set in maths italic (write them upright, as always). Report what you saw.

## Page map, Chapter 8 Aldehydes, Ketones and Carboxylic Acids (pp. 367–425). Confirm every boundary on the page images and report any difference.
p. 367 title, top of p. 368 contents (not copied).
- Topic 01 "Aldehydes & Ketones — Nomenclature, Structure & Preparation": pp. 368–377 (Figure 8.1, figure page 370, caption first on 369; Figure 8.2, figure page 372, caption first on 371).
- Topic 02 "Aldehydes & Ketones — Chemical Reactions": pp. 378–386 (Figure 8.3, figure page 379, caption first on 378).
- Topic 03 "Carboxylic Acids — Structure, Preparation & Properties": pp. 387–394 (Figure 8.4, figure page 388, caption first on 387).
- Topic 04 "Physical Properties & Uses of Carbonyl Compounds": pp. 395–402 (Figure 8.5, figure page 396, caption first on 395).
- Topic titles are the book's headings, with "&" kept as printed (as Chapters 6–7 kept it).
- p. 403 shared introduction "Chapter 8: Aldehydes, Ketones and Carboxylic Acids — Additional Topics" → first paragraph(s) of A's Introduction.
- A The Reactivity Order, Fully Loaded (403–406); B Name Reactions: The Variants the Chapter Never Shows (406–408); C The Distinguishing-Test Matrix, with Stoichiometry (408–411; an unnumbered "Figure 1" on p. 410, the identification chain for an unknown, id `c12-08-C-d1`; the test matrix on p. 409 is a table); D Acidity of Carboxylic Acids: The Full NCERT Ladder (412–414); E Structure-Elucidation Puzzles: The NCERT Signature (414–416); F Physical-State Micro-Facts and Odd Corners (416–418); **G What JEE and NEET Actually Ask** (book "Addendum P", 418–425; "Addendum P" references → "Additional topic G"). Confirm the exact titles.
- p. 426 is the next chapter's title. Addenda's answers often spill onto the next addendum's page: check where each really ends.
- Cross-references: "Sub-topic N" / "sub-topic" → "Topic 0N" / "topic"; "Section N" of a topic → the part's name; "Example X.n" → "the first (second, third) worked example of Additional topic X"; "Addendum A–F" stay as printed. **The shelf numbers this chapter 9, while the book says 8, so a chapter number → the chapter's name.** List every change.
- **Old NCERT numbering**: the addenda cite the old edition's Unit 12 ("NCERT intext 12.4", "12.4(i)", "12.4(ii)", "exercise 12.18(i)", "exercise 12.13", "exercise 12.20", "intext 12.8", "NCERT 12.10", "12.11", "12.19", "NCERT Example 12.4", "exercise 12.11" and others). Founder's rule is one note at the first citation, so copy as printed and report each with its page; the reviewer writes the note. **Exam citations:** the founder's rule is no exam years ("a recent JEE Main paper"); pp. 416, 418, 419 have "asked by NTA 2022", "two NTA JEE Main 2022 items", "the NTA-2022 slot". Copy as printed and list every dated one, with page and exact words.

## Files and ids
- `content/textbooks/chem-12-08/topic-1.ts` to `topic-4.ts`, `extras-a-c.ts`, `extras-d-f.ts`, `extras-g.ts` (each exports TOPICS).
- Diagrams `lib/diagrams/chemistry-12-08.ts` (`DIAGRAMS_CHEMISTRY_12_08`), ids `c12-08-fig-8.N`, unnumbered `c12-08-<topic n>-d<k>`.
- `topic` index = position in the chapter's topics array: **Topics 01–04 = 0–3, A–F = 4–9, G = 10.**
- Key points `lib/revise/keypoints-chemistry-12-08.ts`.
- Titles and tags are plain text, which can't carry a sub or sup. In a title or tag, write pKa flat and a formula with Unicode subscripts where it matters (C₉H₁₀O, C₈H₁₆O₂). Report them. **A card title (a formula's kicker) must not end on a long hyphenated compound**: Android cuts it mid-word.

## Carbonyl and acid notation
- Everything in Chapters 6–7's notation holds: upright species, en-dash bonds (C=O with a real equals, R–CHO, R–CO–R′, R–COOH, C–H), charges digit first with a real minus, δ+ and δ− as Chemistry 11 Ch 8 sets them, real primes (R′, R″), p<i>K</i><sub>a</sub> and <i>K</i><sub>a</sub>, α and β upright, o-, m-, p- upright, `​` between the parts of long IUPAC names, ` ` to keep a value with its formula in a data run.
- Named reactions spelled consistently, en dash between two names: Rosenmund, Stephen, Etard, Gattermann–Koch, Clemmensen, Wolff–Kishner, Cannizzaro, aldol, crossed aldol, Hell–Volhard–Zelinsky (HVZ), Kolbe electrolysis, Tollens' (Tollens’) reagent, Fehling's, Benedict's, iodoform/haloform, 2,4-DNP (Brady's reagent) as printed.
- Reagents over arrows: Unicode inside `<sup>`, short ones only (≤ about 12 characters); long conditions on the line after the arrow, as Chapter 7 did. Reactions drawn as pictures inside the text (not numbered figures): say how you set each, and if it can't be written inline, report it for the drawer.

## Check every structure and name, recompute every number
IUPAC and common names (formaldehyde, acetaldehyde, acetone, benzaldehyde, acetophenone, benzophenone, formic, acetic, propionic, butyric, oxalic, malonic, succinic, phthalic, benzoic acids), the reactivity order toward nucleophilic addition (HCHO > other aldehydes > ketones; aromatic below aliphatic; ring substituents), every preparation's product and reagent, products of every reaction (addition of HCN, NaHSO₃, Grignard, alcohols; ammonia derivatives — oxime, hydrazone, semicarbazone, 2,4-DNP; reductions; oxidations; Cannizzaro and crossed Cannizzaro; aldol and crossed aldol; haloform), which compounds have α-H, every test's scope (Tollens' and Fehling's: which aldehydes; Fehling and aromatic aldehydes; iodoform; NaHCO₃), acidity orders against pKa (halogen number, position and electronegativity; EWG and EDG on benzoic acid; formic vs acetic; the ortho effect), boiling-point ladders against molar mass, isomer and structure-elucidation answers (check every formula, degree of unsaturation and each step), stoichiometry (moles of Ag in Tollens' test, especially HCHO giving 4 Ag), balanced equations. Copy as printed and report anything that looks wrong.
Watch for: semicarbazide's two –NH₂ groups and which one reacts; HCHO in Cannizzaro always being the one oxidised in a crossed reaction; aldol needing α-H; benzaldehyde giving no aldol but crossed aldol (Claisen–Schmidt); Clemmensen (acid) vs Wolff–Kishner (base) for sensitive groups; Rosenmund's poisoned catalyst (BaSO₄, quinoline/S); DIBAL-H and Stephen; Etard (chromyl chloride); Gattermann–Koch (CO, HCl, AlCl₃/CuCl); ozonolysis products; KMnO₄ cleavage of ketones; acids' dimers in the vapour and in benzene; carboxylic acids vs phenols vs alcohols; why carboxylic acids don't give typical carbonyl reactions; HVZ α-halogenation; decarboxylation with soda lime; Kolbe electrolysis products; LiAlH₄ reducing acids, NaBH₄ not; esterification direction; acid chloride with SOCl₂, PCl₅, PCl₃; amide and anhydride formation; ring substitution of benzoic acid (meta), and no Friedel–Crafts on it.

## Lessons from Chapter 7 (do these now, so reviewers needn't)
- Over-absolute claims are still the most common book fault ("only", "always", "never", "all", "⇔"). Flag each with a counter-example and copy as printed.
- Claims about what "the chapter" covers or "never shows" ("Name Reactions: The Variants the Chapter Never Shows"): check each against our topics as built, and say you couldn't check NCERT.
- A test's or rule's scope stated too widely (Chapter 7's "NaHCO₃ moves only carboxylic acids" missed picric acid; Chapter 6's iodoform "CH₃CO– ⇔ positive" missed acetic acid and esters): report each.
- A mechanism label claimed for every class ("SN1" for every alcohol in Chapter 7): report it.
- A coefficient in front of a group formula ("3 R–CH₂OH") now stays with it on a phone automatically; nothing to do.
- Every unbalanced equation: report it, even if it is a scheme; reviewers decide.
- Two values for the same quantity in different places (Chapter 7's pKa of carbonic acid 6.3 and 6.4): report each pair.
- A table whose first column holds only a symbol or number gets a word: report it.

## Diagram agent
No fills, one highlight, phone width. Count the vector shapes on every page 367–425 to find unlabelled drawings, and report which pages you judged to hold none and how you judged them. Say which values are the book's and which are schematic. Caption = the book's, without "(see next page)", dropping any "Figure 1:" prefix. Android rule: one font inside one tag; a tag needing Greek, a sub or sup uses an all-STIX pill (`mtag` in `chemistry-11-09.ts`); charges at a clear outer corner, never over a letter; δ+ and δ− clear of bonds; labels clear of arrows (subscripts count); leave room for real font widths, because a stand-in font flatters a tight fit. Render with `qlmanage -t -s 900 -o <folder> <file>.svg` via `DUMP_DIAGRAMS=<folder> npx jest lib/diagrams/__tests__/dump`.
Computed and checked: Fig 8.1 the polar carbonyl group (trigonal planar carbon, about 120° angles, δ+ on C and δ− on O, the σ and π bonds as printed); Fig 8.2 carbonyl resonance (the neutral C=O and the dipolar C⁺–O⁻ forms, with the resonance arrow; charges balance); Fig 8.3 the two reactive sites of an aldehyde (nucleophilic addition at the carbonyl carbon, the α-H acidity) as printed; Fig 8.4 the carboxylate ion's two equivalent resonance forms (charge and both C–O bonds equal); Fig 8.5 the boiling-point ladder (hydrocarbon < ether < aldehyde/ketone < alcohol < acid, every value as printed, compounds of comparable mass: check which compounds and that their masses are comparable); `c12-08-C-d1` the identification chain for an unknown (2,4-DNP first, then Tollens', then the rest as printed; each branch reads as printed, no crossing lines). Atom counts and charges balance across every arrow.

## Your report
As the earlier briefs say, as your final message. Replace "exact results of tsc and the whole jest run" with your one narrow test run and eslint.
