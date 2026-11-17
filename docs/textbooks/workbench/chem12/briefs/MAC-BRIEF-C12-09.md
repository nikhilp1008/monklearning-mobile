# Brief: Chemistry Class 12, Chapter 9 Amines, rebuilt word for word from the Master Reference book

**Read, in order:**
1. `/Users/nikhi/Developer/monk-books/chem12/briefs/MAC-BRIEF-C12-01-02.md` and every file it tells you to read. Its page map, file names and "Solutions and electrochemistry notation" don't apply. Everything else does.
2. `/Users/nikhi/Developer/monk-books/chem12/briefs/MAC-BRIEF-C12-06.md`: its "Organic notation" and "Lessons from Chapters 1–5" sections.
3. `/Users/nikhi/Developer/monk-books/chem12/briefs/MAC-BRIEF-C12-08.md`: its "Carbonyl and acid notation" and "Lessons from Chapter 7" sections (ignore its page map, files and ids).
4. This file. **Where they disagree, this file wins.**

**Your closest models:** Chemistry 12 Chapter 8, finished, reviewed and checked on Android: `content/textbooks/chem-12-08/topic-2.ts`, `content/textbooks/chem-12-08/extras-a-c.ts`, `content/textbooks/chem-12-08/extras-g.ts` (What JEE and NEET Actually Ask), `lib/diagrams/chemistry-12-08.ts`, `lib/revise/keypoints-chemistry-12-08.ts`. Founder decisions: `chem12/DECISIONS-C12.md` (items 30–35 are the latest) and items 17–18 of `chem11/DECISIONS-C11.md`.

## GO EASY ON THE MAC (founder's Mac has been hanging)
- **Do NOT run `npx tsc` or `npx jest content/textbooks lib/revise lib/diagrams`.** The coordinator runs those once at the end.
- **Your only test run:** writers: `npx jest content/textbooks/__tests__/book-rules content/textbooks/__tests__/book-chapters -t "Chemistry 12 Chapter 9|the text of every book chapter"` (the failures that name "Chemistry 12 Ch 9" or your topic are yours; undrawn fig ids are the diagram agent's; failures naming other writers' files, or empty stubs not yet written, are theirs). Diagram agent: `npx jest lib/diagrams -t "chemistry.12.9"`. Key points: `npx jest lib/revise`. Run it once when your file is done, and again only if it failed. Plus `npx eslint <your file>`.
- Read pages through the Read tool on the PDF with `pages`, a few at a time, rather than rendering PNGs. Render a page image only where the PDF read is unclear, and delete it straight away.
- No subagents, no Metro, Expo, simulator, emulator or builds. No git commands that change anything.

## Where things are
Book `/Users/nikhi/Developer/monk-books/chem12/chem12.pdf` (PDF page = bottom folio), text dump `chem12/chem12.txt` (formulas come out scrambled or in maths italic: read them from the page). Work folder `chem12/work-<your-name>/`. Your file exists as an empty stub, already wired in.
Errata pp. 584–587: find Chapter 9's items by searching for "Chapter 9" there, check each on its page, and report it.

## Page map, Chapter 9 Amines (pp. 426–477). Confirm every boundary on the page images and report any difference.
p. 426 title, p. 427 contents (not copied). This chapter numbers its sub-topics 9.1–9.4 and its sections 9.1.1–9.1.8 (not "Section N:"); its section names are the usual eight.
- Topic 01 "Nomenclature, Classification & Preparation" (book 9.1): pp. 428–438 (Figure 9.1, figure page 430, caption first on 429; Figures 9.2 Gabriel and 9.3 Hofmann bromamide, figure page 434, captions first on 433).
- Topic 02 "Physical & Chemical Properties" (book 9.2): pp. 439–447 (Figure 9.4, the Hinsberg test, figure page 443, caption first on 442).
- Topic 03 "Diazonium Salts — Preparation & Reactions" (book 9.3): pp. 448–457 (Figure 9.5, the diazonium wheel, figure page 449, caption first on 448; Figure 9.6, azo coupling, figure page 453, caption first on 452).
- **Topic 04 "Master Revision & Reaction Compendium"** (book 9.4, pp. 458–462): **founder's decision (DECISIONS-C12 item 35): an ordinary topic, word for word.** Its parts are its own sections 9.4.1–9.4.9 (Preparation of Amines — Complete Compendium; Reactions of Amines — Complete Compendium; Distinguishing 1°, 2° & 3° Amines — Test Matrix; Basicity — Master Rules & Orders; Aromatic Amine — Special Behaviour & the Diazonium Gateway; Diazonium Reaction Wheel & Aniline Roadmap; Beyond the Core — JEE-Advanced Layer (consolidated); High-Yield Exam Traps — Master List; Conditions & Numbers — Quick Reference). The "Purpose:" box opens the first part. Its tables are real table blocks (they stack on a phone); a first column holding only a symbol gets a word. It has no examples, practice or MCQs. "One-line chapter spine" closes the last part.
- Topic titles are the book's headings, "&" kept as printed.
- p. 463 shared introduction "Chapter 9: Amines — Additional Topics" → first paragraph(s) of A's Introduction.
- A "Basicity as a Number: pKb Arithmetic and the Conjugate-Acid …" (confirm the full title; 463–466; an unnumbered "Figure 1" on p. 464, aqueous pKb values from NCERT Table 13.3, id `c12-09-A-d1`); B "Counting Amine Isomers: The C₄H₁₁N Drill" (466–469; a test table on p. 468); C "Hofmann Exhaustive Methylation and the Secondary-Amine …" (confirm the full title; 469–471); D "Synthesis Design with the Diazonium Wheel" (471–474); **E What JEE and NEET Actually Ask** (book "Addendum P", 474–477; "Addendum P" references → "Additional topic E"). The book writes these headings with a hyphen ("Addendum A - …"); the titles take what follows. Confirm the exact titles.
- p. 478 is the next chapter's title. Addenda's answers often spill onto the next addendum's page: check where each really ends.
- Cross-references: "Subtopic 9.N" / "9.N" / "sub-topic" → "Topic 0N" / "topic"; a section number "9.N.M" → the part's name; "Example X.n" → "the first (second, third) worked example of Additional topic X"; "Addendum A–D" stay as printed. **The shelf numbers this chapter 10, while the book says 9, so a chapter number → the chapter's name.** List every change.
- **Old NCERT numbering:** the book cites "NCERT Table 13.3" (old Unit 13) in Topic 02 (p. 440) and in A (pp. 463–464). Founder's rule is one note at the first citation, so copy as printed and report each with its page; the reviewer writes the note. Look for any other old numbers. **Exam citations:** the founder's rule is no exam years ("a recent JEE Main paper") and shares labelled the book's estimate (E has an "Approx. share" table, p. 475); list every dated citation and every share with page and exact words.

## Files and ids
- `content/textbooks/chem-12-09/topic-1.ts` to `topic-4.ts`, `extras-a-b.ts`, `extras-c-d.ts`, `extras-e.ts` (each exports TOPICS).
- Diagrams `lib/diagrams/chemistry-12-09.ts` (`DIAGRAMS_CHEMISTRY_12_09`), ids `c12-09-fig-9.N`, unnumbered `c12-09-<topic n>-d<k>`.
- `topic` index = position in the chapter's topics array: **Topics 01–04 = 0–3, A–D = 4–7, E = 8.**
- Key points `lib/revise/keypoints-chemistry-12-09.ts`.
- Titles and tags are plain text, which can't carry a sub or sup. In a title or tag, write pKb, pKa and SN2 flat, and a formula with Unicode subscripts where it matters (C₄H₁₁N, C₅H₁₃N). Report them. **A card title (a formula's kicker) must not end on a long hyphenated compound**: Android cuts it mid-word.

## Amine and diazonium notation
- Everything in Chapters 6–8's notation holds: upright species, en-dash bonds (R–NH₂, Ar–NH₂, C–N, N–H), charges digit first with a real minus, real primes, p<i>K</i><sub>b</sub> and <i>K</i><sub>b</sub> (and p<i>K</i><sub>a</sub>) with p upright, <i>K</i> italic, b/a upright, 1°/2°/3°, o-, m-, p- upright, α and β upright, `​` in long names, ` ` to keep a value with its compound in a data run.
- Diazonium: C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup>, Ar–N≡N<sup>+</sup> (real triple bond ≡), azo –N=N–. Ammonium: R<sub>4</sub>N<sup>+</sup>X<sup>−</sup>, –NH<sub>3</sub><sup>+</sup>. Isocyanide R–NC (R–N≡C as printed), isothiocyanate R–N=C=S.
- Named reactions spelled consistently, en dash between two names: Gabriel phthalimide synthesis, Hofmann bromamide degradation, Hofmann elimination, Hinsberg test (Hinsberg’s reagent), carbylamine reaction, mustard-oil test, Sandmeyer, Gattermann, Balz–Schiemann, Gomberg, Lassaigne’s test, Saytzeff (as earlier chapters), Curtius, Schmidt, Ritter, Leuckart. Apostrophes as decided in item 32's style (Hinsberg’s reagent).
- Reagents over arrows: Unicode inside `<sup>`, short ones only (≤ about 12 characters); long conditions on the line after, as Chapters 7–8 did. "273–278 K" stays with its arrow condition on the line after if long.

## Check every structure and name, recompute every number
IUPAC and common names (methanamine, N-methylmethanamine, N,N-dimethylmethanamine, aniline = benzenamine, toluidines, N,N-dimethylaniline, benzylamine), 1°/2°/3° class by groups on N (tert-butylamine is 1°), every preparation's reagent, product and carbon change (nitrile +1, amide same, Gabriel same, Hofmann −1), stoichiometry (Hofmann bromamide's 4 KOH, carbylamine's 3 KOH), balanced equations, basicity orders against the pKb values (gas phase vs aqueous; methyl and ethyl series; aniline vs ammonia vs aliphatic; ring substituents EDG/EWG and position; benzylamine; amides; guanidine), every test's scope and observation (Hinsberg, carbylamine, nitrous acid, mustard oil, acylation), electrophilic substitution of aniline (bromine water, acetanilide protection, nitration giving meta in strong acid, sulphanilic acid as a zwitterion, no Friedel–Crafts), diazotisation conditions (273–278 K), every replacement (Sandmeyer CuCl/CuBr/CuCN, Gattermann Cu + HX, KI with no Cu, HBF₄ and heat, warm water to phenol, H₃PO₂ or ethanol to benzene), coupling (pH and which ring, para position), isomer counts (C₄H₁₁N: 8 amines — 4 primary, 3 secondary, 1 tertiary — enumerate them), Hofmann exhaustive methylation and elimination products (less substituted alkene), synthesis routes in D. Copy as printed and report anything that looks wrong.
Watch for: over-absolute basicity orders ("3° > 2° > 1°" in water); "aniline is weak because of induction"; Gabriel failing for aryl and 3°; "LiAlH₄ does not reduce aromatic –NO₂" wording; "diazonium salts are stable" (only cold, and aryl vs alkyl); Lassaigne's test claims; coupling pH ranges; mustard oil and carbylamine both for 1° only; pKb values twice with different numbers (Topic 02's NCERT table vs Topic 04 vs A's figure vs E).

## Lessons from Chapter 8 (do these now, so reviewers needn't)
- Over-absolute claims and scopes stated too widely are still the book's commonest faults: flag each with a counter-example and copy as printed.
- Claims about what "the chapter" covers or "never" shows: check against our topics as built.
- Two values for the same quantity in different places (pKb especially): report each pair.
- A legend line in a formula card needs a symbol of 14 characters or fewer before " = " (longer prints as one sentence): write the symbol short.
- Every MCQ wrong option needs its own nudge describing ITS option; a nudge shared by several options is split into one per option.
- A question whose example has no answer line: give `ans: ''` and report it (reviewers add answer lines).
- Every unbalanced equation: report it, even if it is a scheme.

## Diagram agent
No fills, one highlight, phone width. Count the vector shapes on every page 426–477 to find unlabelled drawings, and report which pages you judged to hold none and how you judged them. Say which values are the book's and which are schematic. Caption = the book's, without "(see next page)", dropping any "Figure 1:" prefix. Android rule: one font inside one tag; a tag needing Greek, a sub or sup uses an all-STIX pill (`mtag` in `chemistry-11-09.ts`); charges at a clear outer corner, never over a letter; labels clear of arrows (subscripts count); leave room for real font widths, because a stand-in font flatters a tight fit. Render with `qlmanage -t -s 900 -o <folder> <file>.svg` via `DUMP_DIAGRAMS=<folder> npx jest lib/diagrams/__tests__/dump`.
Computed and checked: Fig 9.1 pyramidal amine (sp³ N, lone pair, bond angle as printed, about 108°; the three groups and the lone pair); Fig 9.2 the Gabriel synthesis (phthalimide → its potassium salt → N-alkylphthalimide → primary amine, reagents as printed, atom counts balance); Fig 9.3 Hofmann bromamide (amide → N-bromoamide → isocyanate → amine, with the carbon lost as CO₂/carbonate; the migration step as printed); Fig 9.4 the Hinsberg test (1°, 2°, 3° with benzenesulphonyl chloride, and what dissolves in alkali); Fig 9.5 the diazonium wheel (benzenediazonium chloride at the hub, each spoke's reagent and product as printed, every product right); Fig 9.6 azo coupling (the diazonium ion attacking the para position of phenol or aniline, the azo product, the pH as printed); `c12-09-A-d1` aqueous pKb values (every value as printed, the order true to the values, smaller pKb = stronger base). Atom counts and charges balance across every arrow.

## Your report
As the earlier briefs say, as your final message. Replace "exact results of tsc and the whole jest run" with your one narrow test run and eslint.
