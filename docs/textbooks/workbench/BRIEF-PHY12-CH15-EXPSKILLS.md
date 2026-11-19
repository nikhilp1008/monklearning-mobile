# Brief: Physics Class 12, Chapter 15 "Experimental Skills", written fresh (no book to copy)

Status: DRAFT brief, 2026-11-19. Nothing is written yet. Read the "Defaults I assumed" section first: five decisions in `PLAN-PHY12-EXPSKILLS-CHEM12-PRACTICAL.md` are still waiting for Nikhil, and this brief builds on the recommended answers.

Read this whole file before you start. Your own assignment (which topic, which file) is in your prompt. This brief **adds to** the shared rules in `BRIEF-12-07-08.md`; it does not repeat them. Read these sections of `BRIEF-12-07-08.md` and follow them: "The block system", "Topic fields", "Which block for which book element", "Writing HTML", "Rules learned on Chapters 1 and 2 / 5 and 6 / 7 and 8", "Added for Class 12", "Added for Chapters 3 and 4 / 5 and 6 / 7 and 8", "Checking your work" and "Your report". **One rule changes completely: "word for word" does not apply here** (see below). Its paths point at the founder's Mac (`/Users/nikhi/...`); on this machine the repo is `/Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks`.

## 1. What this chapter is

Unit 20 of the JEE Main syllabus ("Experimental skills") lists 18 experiments. Two (Vernier callipers, screw gauge) are already taught in Physics 11 Chapter 1 and are only referred to here. The other sixteen are this chapter, in the same order as the live database's 16 concepts (chapter id `8814dc9e-95d0-4273-8946-7d70df7a9fe3`, `display_order` 1 to 16, 137 questions in the bank). The chapter is a **reference for students who have to answer short numerical or conceptual questions** about each experiment (read a scale, find an unknown, name the main error, sketch the graph). It is not a lab manual.

Registry key (add by the coordinator only): `'physics|12|experimental skills'`. Content file: `content/textbooks/phy-12-15-experimental-skills.ts`, importing topic files from `content/textbooks/phy-12-15/`. Diagrams: `lib/diagrams/physics-12-15.ts` (and `-b` if it grows). Key points: `lib/revise/keypoints-physics-12-15.ts`.

## 2. There is no source book. What that changes

- The chapter is **original text in our words**. Nothing is copied from OP Tandon, NCERT or any other book. Facts are checked against NCERT Physics Class 12 laboratory manual material and standard texts; the wording and examples are ours.
- The reference draft is `handoff_physics_experimental_skills/chapter15_Experimental_Skills.md` (35 KB, 17 subtopics: 00 plus the 16 experiments; written for lessons, one per experiment, in LaTeX). It is **unreviewed**. Use it as a skeleton and a checklist of what each experiment must cover. Do not trust any number, formula or claim in it until you have recomputed it. Rewrite in the app's markup (see "Writing HTML"); never paste its `$...$` LaTeX.
- **Accuracy is the whole risk.** A wrong least count, formula, sign, graph shape or "which error dominates" teaches a student something false. For every formula, derive it yourself from the physics and say in your report that you did. For every worked example, show the full arithmetic and recompute it a second time by a different route. A claim you can only support from memory goes in your report under "unverified", and is dropped from the text if the reviewer cannot confirm it.
- **Data tables in examples must be physically realistic** (g near 9.8 m s<sup>−2</sup>, steel Y near 2 × 10<sup>11</sup> N m<sup>−2</sup>, water surface tension near 0.072 N m<sup>−1</sup>, sound near 340 m s<sup>−1</sup> at room temperature, glass refractive index 1.5, silicon diode knee near 0.7 V). A made-up reading that gives an absurd answer is a defect.
- **No safety instructions** beyond one short line per experiment, and only a line you are certain is correct (decision 4 of the plan).

## 3. Defaults I assumed (pending Nikhil)

1. Original text, with the new-text list covering the whole chapter.
2. Written for JEE and NEET. The NEET (UG) 2026 syllabus has Unit 20 Experimental Skills with 15 experiments, 13 of them in this chapter (Topics 01 to 03 and the glass slab); Topic 04's three semiconductor experiments are in JEE Main's list only (corrected 2026-11-19: the first version of this brief wrongly said NEET has no experimental unit). Do not write anything that depends on the exam.
3. All 16 experiments, no more. Vernier and screw gauge by reference only ("see Chapter 1 of Class 11").
4. Per experiment: aim, principle, apparatus, procedure, observation table, calculation, result, precautions and sources of error, plus the exam traps. One short safety line at most.
5. One chapter at a time, at most 3 writers.

## 4. Topic map

Concept names are the database's. Draft subtopic numbers are the reference draft's.

| Topic | Title | Draft | Experiments (database concept) |
|---|---|---|---|
| 00 | Reading instruments, errors and graphs | 00 | no experiment: least count, zero error, combining errors, graphs, exam pointers |
| 01 | Mechanics, properties of matter, heat and sound | 01 to 07 | Simple pendulum, energy dissipation (A² against t); Metre scale, mass by moments; Young's modulus of a wire (Searle); Surface tension by capillary rise, and detergents; Viscosity by terminal velocity; Speed of sound by resonance tube; Specific heat by mixtures (solid and liquid) |
| 02 | Current electricity | 08 to 10 | Resistivity by metre bridge; Resistance by Ohm's law; Galvanometer resistance and figure of merit (half deflection) |
| 03 | Optics | 11 to 13 | Focal lengths by parallax (convex mirror, concave mirror, convex lens); Prism, angle of deviation against angle of incidence; Refractive index of a glass slab with a travelling microscope |
| 04 | Semiconductors and components | 14 to 16 | p-n junction characteristics; Zener characteristics and breakdown voltage; Identifying a diode, LED, resistor and capacitor |

Topic titles are plain text (no markup). Topic 00 is `n: '00'`, like Chapter 3's opening section. No additional topics (`extra`) are planned; if a writer thinks one is needed, say so in the report.

## 5. Shape of each experiment (parts)

Cut each experiment into parts with these titles (sentence case, as in the other chapters). A short experiment may merge neighbouring parts.

1. **Aim and principle**: what is measured, the formula and where it comes from (a short derivation as `deriv` or `p`).
2. **Apparatus and procedure**: a `proc` block for the steps; the apparatus list in prose.
3. **Observations and calculation**: one worked example as `ex` with a **real-looking data table** (a `table` block) and the full calculation, including the least count and any correction.
4. **Result, precautions and errors**: the result form ("the unknown is ... ± ... "), precautions, and which error dominates and why. Where the error formula applies, write the fractional-error line and its weights (for instance the diameter enters Young's modulus twice).
5. **Exam traps**: short list of what JEE actually asks (graph shape, which quantity is plotted, direction of a correction, effect of a change).

Per topic, after the experiments: **Practice** (6 new numerical or conceptual questions) and **Crack the MCQ** (6 new questions, four options, `correct` index). All new, all with their answers recomputed. The question bank (137 rows) is a cross-check, not a source: do not copy its text.

Block mapping, formula cards and everything else: as in `BRIEF-12-07-08.md`. **Formula cards**: one per experiment, about 16 in all (the working formula, with legend), plus a card for the error rule in Topic 00. `kicker` names the experiment's result ("Young's modulus (Searle)"), `main` one formula per line, `legend` as `symbol = meaning`.

## 6. Diagram ids and the diagram list

Every drawing is redrawn in `lib/diagrams/physics-12-15.ts`. There are no book figure numbers, so every drawing uses the unnumbered form `p12-15-<topic n>-d<k>` (`k` counts drawings in the topic, in page order, from 1; the topic's `n` is `00`, `01`, ...). Writers list every id they use with the topic; drawers list every id they create.

Planned drawings (about 20; the writers may add or drop, and say so):

- 00: vernier-free: a least-count diagram of a scale reading with zero error, a best-fit line with scatter, a slope triangle.
- 01: pendulum with amplitude scale; A² against t decay curve (and ln A² against t); metre scale on a knife edge with two masses; Searle's apparatus; load against extension; capillary tube in water; sphere falling in a tall jar with marks; resonance tube with the two resonance lengths; calorimeter with hot solid.
- 02: metre bridge circuit; Ohm's law circuit and V against I line; galvanometer half-deflection circuit.
- 03: parallax method set-up (object pin, image pin, index pin); prism with the angle of deviation against angle of incidence curve and its minimum; glass slab with travelling microscope readings.
- 04: forward and reverse diode curves; Zener curve with the breakdown region; identification flow for the four components.

Drawing rules: as the other chapters' diagram briefs (`DIAGRAM_BRIEF-12-07-08.md`): labels clear of lines (4 px), no overlap, check functions that test the physics (for example the A² curve must be monotone decreasing, the deviation curve must have one minimum, the metre-bridge balance point must follow l/(100−l)).

## 7. Ownership: three writers, one file each

- **Writer A**: Topic 00 (instruments, errors, graphs) and Topic 04 (semiconductors and components). File `content/textbooks/phy-12-15/topics-0-4.ts`. Also owns Topic 00's error-rule formula card.
- **Writer B**: Topic 01 (seven experiments). File `content/textbooks/phy-12-15/topics-1.ts`. The longest topic (about 800 lines).
- **Writer C**: Topics 02 and 03 (six experiments). File `content/textbooks/phy-12-15/topics-2-3.ts`.
- Then **drawers** (2, at most 3), then the **key-points writer**. The coordinator wires the chapter file, the registry key, the test list and the formula sheet.

Ownership rules as in `BRIEF-12-07-08.md` ("Ownership: touch only your own files"). No git commands that change anything. No simulator, emulator, Metro or build.

## 8. Checks and review

- Same automatic checks as the other chapters (tsc, jest on `content/textbooks lib/revise lib/diagrams`, eslint, formula cards printed and read).
- **Two independent expert reviews on Opus**, each told to **recompute every number in every worked example and every practice and MCQ answer, re-derive every formula, and check every claim about a graph or error against NCERT laboratory manual material**. A claim checked only from memory is labelled and removed if it cannot be confirmed.
- New-text list for Nikhil (the whole chapter, since all of it is new), decisions, fixes (everything, including optional), Android sample (cards, diagrams, about 10 pages), and push only on the founder's say-so.

## 9. Open items

- The five decisions in the plan (NEET tags above all).
- Whether Topic 00 should repeat Class 11 Chapter 1's least-count teaching or only point to it (default: a two-line recap, then the new material: zero error, error combination, graphs).
- The question bank may disagree with the finished chapter in places (the question audit found keys fine but working wrong in a few cases). A cross-check pass comes after the chapter is reviewed.
