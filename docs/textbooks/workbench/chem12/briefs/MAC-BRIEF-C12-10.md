# Brief: Chemistry Class 12, Chapter 10 Biomolecules, rebuilt word for word from the Master Reference book

**Read, in order:**
1. `/Users/nikhi/Developer/monk-books/chem12/briefs/MAC-BRIEF-C12-01-02.md` and every file it tells you to read. Its page map, file names and "Solutions and electrochemistry notation" don't apply. Everything else does.
2. `/Users/nikhi/Developer/monk-books/chem12/briefs/MAC-BRIEF-C12-09.md`: its "GO EASY ON THE MAC" section and its "Lessons from Chapter 8" section, which still apply (ignore its page map, files, ids and amine notation).
3. This file. **Where they disagree, this file wins.**

**Your closest models:** Chemistry 12 Chapter 9 (Amines), finished, reviewed and checked on Android: `content/textbooks/chem-12-09/topic-2.ts`, `content/textbooks/chem-12-09/extras-a-b.ts`, `content/textbooks/chem-12-09/extras-c-d.ts` (its Summary Checklist topic E), `content/textbooks/chem-12-09/extras-e.ts` (What JEE and NEET Actually Ask), `lib/diagrams/chemistry-12-09.ts`, `lib/revise/keypoints-chemistry-12-09.ts`. Founder decisions: `chem12/DECISIONS-C12.md` (items 35–41 are the latest) and items 17–18 of `chem11/DECISIONS-C11.md`.

## GO EASY ON THE MAC (founder's Mac has been hanging)
- **Do NOT run `npx tsc` or `npx jest content/textbooks lib/revise lib/diagrams`.** The coordinator runs those once at the end.
- **Your only test run:** writers: `npx jest content/textbooks/__tests__/book-rules content/textbooks/__tests__/book-chapters -t "Chemistry 12 Chapter 10|the text of every book chapter"` (failures naming "Chemistry 12 Ch 10" or your topic are yours; undrawn fig ids are the diagram agent's; empty stubs not yet written are other writers'). Diagram agent: `npx jest lib/diagrams -t "chemistry.12.10"`. Key points: `npx jest lib/revise`. Run once when done, again only if it failed. Plus `npx eslint <your file>`.
- Read pages through the Read tool on the PDF with `pages`, a few at a time. Render a page image only where the PDF read is unclear, and delete it straight away.
- No subagents, no Metro, Expo, simulator, emulator or builds. No git commands that change anything.

## Where things are
Book `/Users/nikhi/Developer/monk-books/chem12/chem12.pdf` (PDF page = bottom folio), text dump `chem12/chem12.txt`. Work folder `chem12/work-<your-name>/`. Your file exists as an empty stub, already wired in.
Errata pp. 584–587, Chapter 10 (cosmetic): a blank gap of about three lines after the inline amino-acid formula on the chapter's printed page 10 (find it by text: no gap for us); in Fig. 10.6 two labels sit between arrows (the drawer keeps labels clear); the "Answers:" heading stranded at the foot of an addendum page (pair it with its answers). Report what you saw.

## Page map, Chapter 10 Biomolecules (pp. 478–529). Confirm every boundary on the page images and report any difference.
p. 478 title, top of p. 479 contents (not copied). The sections are "Section 1: …" to "Section 8: …", the usual eight.
- Topic 01 "Carbohydrates": pp. 479–488 (Figures 10.1 Fischer projection of D-(+)-glucose and 10.2 the D-glucose equilibrium; figure page 483, captions first on 482).
- Topic 02 "Proteins & Amino Acids": pp. 489–497 (Figure 10.3, peptide-bond formation; figure page 493, caption first on 492).
- Topic 03 "Enzymes, Vitamins & Nucleic Acids": pp. 498–507 (Figure 10.4 lock-and-key, figure page 501, caption first on 500; Figure 10.5 the DNA double helix, figure page 503, caption first on 502).
- Topic 04 "Hormones": pp. 508–515 (Figure 10.6 blood-glucose feedback; figure page 511, caption first on 510).
- Topic titles are the book's headings, "&" kept as printed.
- p. 516 shared introduction "Chapter 10: Biomolecules — Additional Topics" → first paragraph(s) of A's Introduction.
- A "Mutarotation, Quantified" (516–519; an unnumbered "Figure 1" on p. 517, mutarotation of D-glucose, id `c12-10-A-d1`); B "The Amino-Acid Roster and the Isoelectric Point" (519–521; an amino-acid table on p. 520); C "Reducing Sugars: The Test-Driven Version" (521–524); D "Nucleic-Acid Arithmetic" (524–526); **E "Summary Checklist"** (p. 526; decision 41, as in Amines: its own Additional topic, one part, printed exactly, no lead-in written by us); **F What JEE and NEET Actually Ask** (book "Addendum P", 526–529; "Addendum P" references → "Additional topic F"). The book writes the headings "Addendum A - …" with a hyphen; the title is what follows. Confirm the exact titles.
- p. 530 is the next chapter's title. Addenda's answers often spill onto the next addendum's page: check where each really ends.
- Cross-references: "Sub-topic N" / "subtopic" → "Topic 0N" / "topic"; "Section N" of a topic → the part's name; "Example X.n" → "the first (second, third) worked example of Additional topic X"; "Addendum A–D" stay as printed. **The shelf numbers this chapter 11, while the book says 10, so a chapter number → the chapter's name.** List every change.
- **Old NCERT numbering** (old Unit 14): copy as printed and report each with its page; the reviewer writes the one note. **Exam citations:** the founder's rule is no exam years ("a recent JEE Main paper") and shares labelled the book's estimate; p. 527 has "a JEE Main 2022 question". List every dated citation and every share with page and exact words.

## Files and ids
- `content/textbooks/chem-12-10/topic-1.ts` to `topic-4.ts`, `extras-a-b.ts`, `extras-c-e.ts` (C, D and the Summary Checklist E), `extras-f.ts` (each exports TOPICS).
- Diagrams `lib/diagrams/chemistry-12-10.ts` (`DIAGRAMS_CHEMISTRY_12_10`), ids `c12-10-fig-10.N`, unnumbered `c12-10-<topic n>-d<k>`.
- `topic` index = position in the chapter's topics array: **Topics 01–04 = 0–3, A–D = 4–7, E (Summary Checklist) = 8, F = 9.**
- Key points `lib/revise/keypoints-chemistry-12-10.ts`.
- Titles and tags are plain text: write formulas with Unicode subscripts where it matters (C₆H₁₂O₆), α, β, D and L plain. Report them. A card title must not end on a long hyphenated compound.

## Biomolecule notation
- D and L as small capitals in the book: write them as plain capitals D and L (D-glucose, L-amino acid); (+) and (−) for rotation; α and β upright (α-D-glucose, α-helix, β-pleated sheet); configuration letters (R)/(S) italic as before.
- Glycosidic links "C1–C4", "C1–C2", "α(1→4)", "β(1→4)", "α(1→6)" with en dashes and the real arrow, as printed. Ring names pyranose, furanose.
- Formulas upright: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>, (C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub>; –CHO, –COOH, –NH<sub>2</sub>, –NH<sub>3</sub><sup>+</sup>, –COO<sup>−</sup>; zwitterion H<sub>3</sub>N<sup>+</sup>–CHR–COO<sup>−</sup>; peptide bond –CO–NH–.
- Specific rotations with the degree sign and sign as printed (+112°, +19°, +52.7°, +66.5°, −39.9°); "[α]<sub>D</sub>" if printed.
- Nucleic acids: 5′ and 3′ with real primes (U+2032), never an apostrophe or ’; base pairs A=T, G≡C as printed (or A–T, G–C); "2′-deoxyribose".
- Vitamins and hormones: names as printed (vitamin B<sub>12</sub>, vitamin D<sub>3</sub> if printed), deficiency diseases as printed.

## Check every structure and name, recompute every number
Glucose structure evidence (each reagent and what it proves: HI → n-hexane, NH<sub>2</sub>OH → oxime, HCN → cyanohydrin, Br<sub>2</sub> water → gluconic acid, acetic anhydride → pentaacetate, HNO<sub>3</sub> → saccharic acid), open-chain vs cyclic, anomers and mutarotation (the equilibrium percentages from the rotations: recompute with the printed values), reducing vs non-reducing sugars and which carbons are linked (sucrose C1–C2, maltose C1–C4, lactose), invert sugar and its rotation, starch (amylose α(1→4), amylopectin α(1→6) branches) vs cellulose β(1→4) vs glycogen, amino-acid classification (essential/non-essential; acidic/basic/neutral), glycine the only achiral one, the isoelectric point (recompute any pI = (pKa1 + pKa2)/2 arithmetic), peptide-bond count (n residues → n − 1 bonds, water lost), protein structure levels and denaturation, enzymes, vitamin solubility and deficiency diseases, nucleoside vs nucleotide, DNA vs RNA (sugar, bases, strands), Chargaff's rule and %-base arithmetic (A = T, G = C; recompute every percentage), complementary strands written 5′→3′ (check direction), base-pair hydrogen-bond counts (A=T 2, G≡C 3) and melting, hormones by chemical class and gland. Copy as printed and report anything that looks wrong.
Watch for: "all monosaccharides are reducing" vs ketoses (fructose reduces Tollens'/Fehling's — consistent with Chapter 8's α-hydroxy ketone fix); sucrose non-reducing; "glucose gives no Schiff's test / no NaHSO₃ adduct" (evidence for the cyclic form); D/L not meaning (+)/(−); "all amino acids are optically active except glycine"; pI vs pH; "enzymes are proteins" (ribozymes); vitamin C water-soluble, A/D/E/K fat-soluble, B<sub>12</sub> stored; DNA's uracil/thymine; strand direction; scope words "always", "only", "never".

## Lessons from Chapter 9 (do these now, so reviewers needn't)
- A reaction condition over an arrow: one condition over the arrow (`→<sup>…</sup>`), never stacked over-and-under (`<sup>…</sup><sub>…</sub>`), which collides on a phone; put a second condition (a temperature) on a line after the scheme, e.g. "(at 373 K)".
- A legend symbol of 14 characters or fewer before " = ".
- Answer lines for every worked example: if the book prints none, `ans: ''` and report it.
- Claims about what "the chapter" covers, and the Summary Checklist's claims, checked against our topics as built.
- Two values for one quantity in different places (specific rotations, percentages): report each pair.

## Diagram agent
No fills, one highlight, phone width. Count the vector shapes on every page 478–529 to find unlabelled drawings, and report which pages you judged to hold none and how you judged them. Say which values are the book's and which are schematic. Caption = the book's, without "(see next page)", dropping any "Figure 1:" prefix. Android rule: one font inside one tag; a tag needing Greek, a sub or sup uses an all-STIX pill (`mtag` in `chemistry-11-09.ts`); charges at a clear outer corner; labels clear of arrows (subscripts count); leave room for real font widths. Render with `qlmanage -t -s 900 -o <folder> <file>.svg` via `DUMP_DIAGRAMS=<folder> npx jest lib/diagrams/__tests__/dump`.
Computed and checked: Fig 10.1 Fischer projection of D-(+)-glucose (OH right, left, right, right on C2–C5; CHO at the top, CH<sub>2</sub>OH at the bottom; every carbon's four bonds); Fig 10.2 the D-glucose equilibrium (open chain between the α and β pyranose rings; the anomeric C1 OH down for α, up for β in the Haworth form; atom counts equal in all three; the percentages and rotations as printed); Fig 10.3 peptide-bond formation (glycine + alanine − H<sub>2</sub>O → glycylalanine, the –CO–NH– bond highlighted, atoms balance); Fig 10.4 lock-and-key (enzyme, substrate, enzyme–substrate complex, products, enzyme unchanged); Fig 10.5 the DNA double helix (two antiparallel strands 5′→3′ and 3′→5′, A=T with 2 and G≡C with 3 hydrogen bonds as printed, sugar–phosphate rails); Fig 10.6 blood-glucose feedback (insulin lowers, glucagon raises, as printed; the errata's two labels kept clear of the arrows); `c12-10-A-d1` mutarotation (α +112°, β +19°, equilibrium +52.7°, every value as printed, the arrows' direction as printed).

## Your report
As the earlier briefs say, as your final message. Replace "exact results of tsc and the whole jest run" with your one narrow test run and eslint.
