# Brief: Chemistry Class 12, Chapter 12 "Practical Chemistry", written fresh (no book to copy)

Status: 2026-11-19. For JEE **and** NEET (the NEET (UG) 2026 syllabus has Unit 20 "Principles related to practical chemistry", which is exactly the list below; the NMC annexure text is in `practical-chem-reference/neet-ug-2026-syllabus.txt (next to the sources)`, the unit starts at the line "UNIT 20: PRINCIPLES RELATED TO PRACTICAL CHEMISTRY"). Read this whole file first. It **adds to** `BRIEF-PHY12-CH15-EXPSKILLS.md` (read it: the idea, the experiment shape, rules for original text, accuracy rules, the review process) and to the shared rules in `BRIEF-12-07-08.md` (the block system, topic fields, block-for-element table, "Writing HTML", "Checking your work", "Your report"; ignore its founder-Mac paths and its "word for word" rule). Repo: `/Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks`. Chemistry house forms: `workbench/chem12/briefs/MAC-BRIEF-C12-11.md` (its "p-Block notation" and "Lessons from Chapter 10" sections still apply: en dashes in bond and group names, a real minus in charges, balanced equations, plain-text titles, one legend line per symbol) and the finished chapters `content/textbooks/chem-12-0N/*.ts`, `chem-11-0N/*.ts`.

## 1. What this chapter is

The practical part of the syllabus, for students who must answer short questions about it: what you do, what you see, what the chemistry is. It is not a lab manual. Eleven concepts, the database's own (chapter id `7c1e5b2a-3d4f-4e8a-9b6c-2f0a8d5e7c13`, 871 questions in the bank): 1 Lassaigne's test; 2 functional-group tests (hydroxyl alcoholic and phenolic, carbonyl, carboxyl, amino); 3 Mohr's salt and potash alum; 4 acetanilide, p-nitroacetanilide, aniline yellow, iodoform; 5 acid-base titrations and the choice of indicator; 6 redox titrations: oxalic acid and Mohr's salt against KMnO<sub>4</sub>; 7 cation analysis (Pb<sup>2+</sup>, Cu<sup>2+</sup>, Al<sup>3+</sup>, Fe<sup>3+</sup>, Zn<sup>2+</sup>, Ni<sup>2+</sup>, Ca<sup>2+</sup>, Ba<sup>2+</sup>, Mg<sup>2+</sup>, NH<sub>4</sub><sup>+</sup>); 8 anion analysis (CO<sub>3</sub><sup>2−</sup>, S<sup>2−</sup>, SO<sub>4</sub><sup>2−</sup>, NO<sub>3</sub><sup>−</sup>, NO<sub>2</sub><sup>−</sup>, Cl<sup>−</sup>, Br<sup>−</sup>, I<sup>−</sup>; insoluble salts excluded); 9 enthalpy of solution of CuSO<sub>4</sub> and of neutralisation of a strong acid and strong base; 10 lyophilic and lyophobic sols; 11 kinetic study of iodide with hydrogen peroxide at room temperature.

Registry key (coordinator only): `'chemistry|12|practical chemistry'`. Chapter file `content/textbooks/chem-12-12-practical-chemistry.ts` (`chapter: '12'`, title "Practical Chemistry"); topic files in `content/textbooks/chem-12-12/`; diagrams `lib/diagrams/chemistry-12-12.ts`, `-12b.ts`, `-12c.ts`; key points `lib/revise/keypoints-chemistry-12-12.ts`; all filed under `'chemistry|12|12'`.

## 2. Sources, and the rule that settles every disagreement

The reference text is **local and read-only**, in `/Users/raasikhnaveed/Desktop/monk-learning-mobile/practical-chem-reference/`:
- `ncert_1.txt` (503 KB): the NCERT Chemistry Laboratory Manual (Class XI Units 6 and 7, Class XII Units 1, 2, 3, 6 to 10), Mathpix-extracted, in chunks headed `[source p<start>-<end> #n]`.
- `tandon_0.txt` (725 KB): GRB OP Tandon, Organic Ch 2 (molecular analysis) and Inorganic Ch 17 (volumetric analysis) and 18 (qualitative inorganic analysis).
Search them with `grep -n -i` and read around the hit; the extraction can scramble tables, subscripts and equations, so recompute every formula and balance every equation yourself.
- **The chapter is original text in our own words.** Nothing is copied from either source; they are used to check facts and see what a student is examined on.
- **When the two disagree, or a source seems wrong, the NCERT manual wins**; report the disagreement. When a fact is in neither source, label it "unverified" in your report and leave it out unless you can derive it from chemistry.
- **Colours, precipitates, indicator colours, temperatures, reagents and what is "observed" are exactly what a student memorises.** Take each from the NCERT manual text (search it). A colour recalled from memory only goes in your report under "unverified", and is dropped from the text if the reviewer cannot confirm it.
- Equations are balanced for atoms and charge and recomputed by you. State the observation in words (white precipitate, soluble in excess, blue-black), the ion or compound responsible, and the equation.
- Titration and enthalpy examples use realistic data and complete arithmetic recomputed by a second route (normality and molarity, n-factors for KMnO<sub>4</sub> in acid medium, 126 g mol<sup>−1</sup> for oxalic acid dihydrate, 392 g mol<sup>−1</sup> for Mohr's salt, heat capacity, ΔH per mole, the rate law from initial-rate or clock data).
- Safety: one short certain line per experiment at most (concentrated acids, heating, fumes), nothing else.

## 3. Topic map

| Topic | Title | Concepts | Writer |
|---|---|---|---|
| 01 | Organic analysis: elements and functional groups | 1, 2 | A |
| 02 | Preparations | 3, 4 | B |
| 03 | Volumetric analysis | 5, 6 | A |
| 04 | Qualitative salt analysis: cations and anions | 7, 8 | C |
| 05 | Thermochemistry, sols and kinetics | 9, 10, 11 | B |

Topic titles are plain text. `topic` index in diagrams and key points: Topic 01 = 0, 02 = 1, 03 = 2, 04 = 3, 05 = 4. No additional topics unless a writer says one is needed.

## 4. Shape (as the Physics chapter, adapted)

Per experiment or group of tests, parts with these titles (sentence case; merge neighbours when short): **Aim and principle**; **Apparatus and procedure** (a `proc` block; reagents named); **Observations and calculation** (an observation `table` or a worked `ex` with data and full arithmetic); **Result, precautions and sources of error**; **Exam traps**. Then per topic **Practice** (6 new questions) and **Crack the MCQ** (6 new questions, four options, `correct` index, every option's nudge describing that option), all with answers recomputed. Reaction schemes and test tables are `formula` blocks and `table` blocks (a table whose first column holds only a symbol gets a word for it so it reads on a phone). **Formula cards** (the Formula sheet): one per concept where there is a working formula or a key reaction (balanced equation, one per `main` line, short lead-in words ending in a colon, `symbol = meaning` legends of 14 characters or fewer before ` = `), about 11 to 15 in all. Diagram ids: `c12-12-<topic n>-d<k>` (`k` from 1 in page order within the topic), listed in each writer's report with a one-line description of exactly what the drawing must show.

Planned drawings (about 15; writers may add or drop and say so): Lassaigne's sodium extract and the colour tests as a flow chart; apparatus for a distillation or recrystallisation if used; the preparation flow of Mohr's salt and alum; the acetanilide to p-nitroacetanilide and the aniline yellow schemes; a burette and titration set-up with the end-point colour changes; the indicator-choice chart for the four acid-base pairs; cation group separation flow charts (group reagents and what precipitates); the anion test flow; the calorimeter and a temperature-time graph for enthalpy; a sol-preparation scheme; a rate-law plot for the iodide-hydrogen peroxide run.

## 5. Writers (three, one file each; no git, no Metro, no simulator)

- **Writer A**: Topics 01 and 03 in `content/textbooks/chem-12-12/topics-1-3.ts` (exports `TOPICS` with both topics, 01 then 03).
- **Writer B**: Topics 02 and 05 in `content/textbooks/chem-12-12/topics-2-5.ts` (02 then 05).
- **Writer C**: Topic 04 in `content/textbooks/chem-12-12/topic-4.ts`. The largest topic: group-by-group cation analysis and anion tests, as tables and flow charts, with worked "identify the salt" examples whose reasoning is complete.
Each writer runs `npx tsc --noEmit`, eslint on their file and `npx jest content/textbooks lib/revise lib/diagrams` once at the end (fig-id failures listing only their own ids are expected until the drawers finish), prints and reads their formula cards through a temporary test they delete, and reports as `BRIEF-12-07-08.md` says plus: the sources used for each colour and equation, every unverified claim, and every disagreement between the sources.

## 6. After the writers

Drawers (three, files `chemistry-12-12.ts`, `-12b.ts`, `-12c.ts`), then the key-points writer, then two independent Opus reviews (one recomputing every number and balancing every equation; one checking every observation, reagent, colour and procedure against the NCERT manual text in the local reference folder, and rendering every diagram), then all fixes, an Android sample, and the push on the owner's say-so.
