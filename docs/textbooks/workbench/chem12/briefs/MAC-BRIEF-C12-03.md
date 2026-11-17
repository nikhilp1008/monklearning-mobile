# Brief: Chemistry Class 12, Chapter 3 Chemical Kinetics, rebuilt word for word from the Master Reference book

**Read, in order:**
1. `/Users/nikhi/Developer/monk-books/chem12/briefs/MAC-BRIEF-C12-01-02.md` and every file it tells you to read. Its page map, file names and "Solutions and electrochemistry notation" don't apply. Everything else does.
2. This file. **Where they disagree, this file wins.**

**Your closest models:** Chemistry 12 Chapters 1–2, finished and reviewed: `content/textbooks/chem-12-01/topic-5.ts`, `content/textbooks/chem-12-02/topic-4-a-b.ts` (A, B), `lib/diagrams/chemistry-12-02.ts`, `lib/revise/keypoints-chemistry-12-02.ts`. Founder decisions: `chem12/DECISIONS-C12.md` and items 17–18 of `chem11/DECISIONS-C11.md`.

## GO EASY ON THE MAC (founder's Mac has been hanging)
- **Do NOT run `npx tsc` or `npx jest content/textbooks lib/revise lib/diagrams`.** The coordinator runs those once at the end.
- **Your only test run:** writers: `npx jest content/textbooks/__tests__/book-rules content/textbooks/__tests__/book-chapters -t "Chemistry 12 Chapter 3|the text of every book chapter"` (the failures that name "Chemistry 12 Ch 3" or your topic are yours; undrawn fig ids are the diagram agent's; failures naming other writers' files are theirs). Diagram agent: `npx jest lib/diagrams -t "chemistry.12.3"`. Key points: `npx jest lib/revise`. Run it once when your file is done, and again only if it failed. Plus `npx eslint <your file>`.
- Read pages through the Read tool on the PDF with `pages`, a few at a time, rather than rendering PNGs. Render a page image only where the PDF read is unclear, and delete it straight away.
- No subagents, no Metro, Expo, simulator, emulator or builds. No git commands that change anything.

## Where things are
Book `/Users/nikhi/Developer/monk-books/chem12/chem12.pdf` (PDF page = bottom folio), text dump `chem12/chem12.txt`. Work folder `chem12/work-<your-name>/`. Your file exists as an empty stub, already wired in.
Errata pp. 584–587; its page numbers are the chapter's own, so find items by text. **Ch 3 item:** Sub-topic 02, Practice Exercises, answer to Q3: must read ≈ 144.6 min (k = 2.303/20 log(4/3) ≈ 1.44 × 10⁻² min⁻¹, t½ ≈ 48.2 min, 87.5% = three half-lives). Check the page shows this. Report it.

## Page map, Chapter 3 Chemical Kinetics (pp. 101–146). Confirm every boundary on the page images and report any difference.
p. 101 title, top of p. 102 contents (not copied).
- Topic 01 Rate of Reaction & Rate Law: pp. 102–110 (Figure 3.1; figure page 106, caption first on 105)
- Topic 02 Integrated Rate Equations & Half-Life: pp. 111–119 (Figure 3.2; figure page 114, caption first on 113)
- Topic 03 Pseudo First Order Reactions: pp. 120–126
- Topic 04 Collision Theory & Temperature Dependence: pp. 127–135 (Figure 3.3; figure page 131, caption first on 130)
- p. 136 shared introduction "Chapter 3: Chemical Kinetics — Additional Topics" → first paragraph(s) of A's Introduction.
- A Second-Order Kinetics, Properly (136–138); B Composite Rate Constants: Effective Ea, Parallel and Consecutive Reactions (138–140); C Gas-Phase First Order: the p∞ Form (140–141); D The Mechanisms NCERT Actually Names (141–143); **E What JEE and NEET Actually Ask** (book "Addendum P", 143–146; "Addendum P" references → "Additional topic E").
- Addenda's answers often spill onto the next addendum's page: check where each really ends.
- Cross-references: "Sub-topic N" → "Topic 0N"; "Section N" of a topic → the part's name; "Worked Example X.n" → "the first worked example of Additional topic X"; "Addendum A–D" stay as printed. List every change.

## Files and ids
- `content/textbooks/chem-12-03/topic-1.ts`, `topic-2.ts`, `topic-3.ts`, `topic-4.ts`, `extras-a-c.ts`, `extras-d-e.ts` (each exports TOPICS).
- Diagrams `lib/diagrams/chemistry-12-03.ts` (`DIAGRAMS_CHEMISTRY_12_03`), ids `c12-03-fig-3.N`, unnumbered `c12-03-<topic n>-d<k>`.
- `topic` index = position in the chapter's topics array: **Topics 01–04 = 0–3, A–E = 4–8.**
- Key points `lib/revise/keypoints-chemistry-12-03.ts`.
- Titles and tags are plain text: flat formulas ("Ea", "p∞", "t1/2"), reported.

## Kinetics notation
- Variables italic with upright labels: <i>k</i>, <i>t</i>, <i>t</i><sub>1/2</sub>, [R], [R]<sub>0</sub>, [A], <i>E</i><sub>a</sub>, <i>A</i> (Arrhenius factor), <i>T</i>, <i>R</i>, <i>x</i>, <i>a</i>, <i>m</i>, <i>n</i>, <i>p</i><sub>0</sub>, <i>p</i><sub>t</sub>, <i>p</i><sub>∞</sub>. Species and brackets upright. log and ln upright. Rates written with d[R]/dt: d and the species upright, <i>t</i> italic, as Chemistry 11 Ch 5 and 6 do.
- exponentials: <i>e</i><sup>−<i>E</i><sub>a</sub>/<i>RT</i></sup> can't nest a sub in a sup: use the house form `exp(−<i>E</i><sub>a</sub>/<i>RT</i>)` or Unicode inside `<sup>` as earlier chapters do; report which, once.
- Units: mol L<sup>−1</sup> s<sup>−1</sup>, s<sup>−1</sup>, L mol<sup>−1</sup> s<sup>−1</sup>, J mol<sup>−1</sup>, kJ mol<sup>−1</sup>, upright.
- **Recompute every number**, including log values, half-lives, Arrhenius calculations and pressure-form rate constants. **Balance every equation.** Say which R the book uses (8.314 J), and whether log uses 2.303. Check order and units of k for each reaction, and that every graph statement (slope sign, intercept) is right.
- Watch for: order vs molecularity; rate law from stoichiometry; "half-life independent of concentration" only for first order; zero-order t½; pseudo first order conditions; Ea, catalyst and ΔH statements; "rate doubles every 10 K" as a rule of thumb; activation energy on the energy profile.

## Lessons from Chapters 1–2 (do these now, so reviewers needn't)
- **Every formula card: every symbol has a meaning on that card.** Write the legend lines (book's words where it has them), and list them as new text.
- **Memory aids:** in `aids`, no "Mnemonic:" label.
- **Practice answers:** first letter capitalised. An answer that is only a pointer ("see Sections 1–2"): replace the pointer with the part's name and report it; the reviewer drafts the model answer.
- **Every MCQ wrong option needs its own nudge**; a nudge shared by several options is split into one per option if true of each; if the book gives none, leave null and report it.
- **Answer printed once**: step stops before the result, `ans` carries it, a remark after it becomes the last step, but a step ending in a colon that leads into the answer stays last.
- **Don't rewrite suspected errors.** Copy as printed and report.

## Diagram agent
No fills, one highlight, phone width. Computed and checked: concentration–time curve with secant and tangent slopes; zero-order [R] vs t straight line slope −k, first-order log[R] vs t straight line with the right slope and intercept; energy profile with reactant, product, transition state, Ea forward and reverse, ΔH. Caption = the book's, without "(see next page)". Android rule: one font inside one tag; a tag needing Greek, a sub or sup uses an all-STIX pill (`mtag` in `chemistry-11-09.ts`); charges at a clear outer corner, never over a letter; labels clear of arrows (subscripts count). Render with `qlmanage -t -s 900 -o <folder> <file>.svg` via `DUMP_DIAGRAMS=<folder> npx jest lib/diagrams/__tests__/dump`.

## Your report
As the earlier briefs say, as your final message. Replace "exact results of tsc and the whole jest run" with your one narrow test run and eslint.
