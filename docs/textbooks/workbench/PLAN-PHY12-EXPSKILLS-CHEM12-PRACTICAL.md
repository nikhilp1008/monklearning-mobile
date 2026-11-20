# Plan: the last two textbook chapters (2026-11-19)

Physics 12 Chapter 15 "Experimental Skills" and Chemistry 12 Chapter 12 "Practical Chemistry". Every other chapter of every book is written (Biology 11 and 12, Chemistry 11 and 12 except this one, Maths 11 and 12, Physics 11 and 12 except this one). On the Physics 12 book page the first shows as a greyed "Being written" row; the second is the same on the Chemistry 12 page. Nothing is built yet. This file is the plan for Nikhil to approve.

## 1. What is different about these two

1. **There is no book to copy.** Every other chapter was written word for word from the book Nikhil supplied (Chemistry 12's has 11 chapters, so Practical Chemistry was never in it). The ingest notes for Practical Chemistry (`scripts/ingest_practical_chemistry.py` in the API repo) say outright that none of the eight Drona master books has a section for it. NCERT has no chapter for either: the content lives in the NCERT laboratory manuals. So these two chapters have to be **written fresh**, from a syllabus and reference texts. That is a different job from the one the other chapters had, and it moves the accuracy risk from "did we copy faithfully" to "is what we wrote true".
2. **Reference text that exists.** Physics: `handoff_physics_experimental_skills/chapter15_Experimental_Skills.md` (35 KB, a draft written for lessons, one subtopic per experiment, with `candidates.csv`) and the NCERT Physics laboratory manuals. Chemistry: GRB OP Tandon, Organic Ch 2 (pp 42 to 69), Inorganic Ch 17 (pp 826 to 866) and Ch 18 (pp 867 to 903), chosen by the owner on 2026-10-15, plus the NCERT Chemistry laboratory manual (160 pages, downloaded from ncert.nic.in). OP Tandon is a third-party book: it is used to check facts and structure, and the text is written in our own words, not copied.
3. **What is in the database already.** Physics Experimental Skills: 16 concepts (one per experiment, from the simple pendulum to identifying a diode, LED, resistor and capacitor), 137 questions. Practical Chemistry: 11 concepts (extra-element detection, functional-group tests, Mohr's salt and potash alum, organic preparations, acid-base and redox titrations, cation and anion analysis, thermochemistry, sols, the iodide and hydrogen peroxide kinetics run), 871 questions. The textbook chapters should line up one to one with these concepts so a lesson, a practice question and the book all use the same names.

## 2. Decisions needed from Nikhil before anyone writes

1. **Writing from scratch, in our words.** Agree that these two chapters are original text (checked against NCERT laboratory manuals and OP Tandon), not word for word from a book, and that the new-text list for the founder's review therefore covers the **whole** chapter, not only the changes.
2. **Who sees them: JEE only, or NEET too? (CORRECTED 2026-11-19.)** An earlier version of this plan said the NEET (UG) 2026 syllabus has no experimental or practical unit, and recommended JEE only. **That was wrong.** The NMC annexure of 22 Dec 2025 (`Updated syllabus for NEET(UG)-2026`) has "Unit 20: Experimental Skills" (Physics, 15 experiments: vernier, screw gauge, simple pendulum, metre scale, Young's modulus, surface tension, viscosity, resonance tube, specific heat, metre bridge, Ohm's law, galvanometer, focal lengths by parallax, prism deviation graph, glass slab with a travelling microscope) and "Unit 20: Principles related to practical chemistry" (all eleven of our concepts). So Practical Chemistry is for JEE **and** NEET, as the database tags it, and Experimental Skills is for both too, except three of its experiments (p-n junction characteristics, Zener characteristics, identifying a diode, LED, resistor and capacitor), which are in JEE Main's list and not NEET's. Those three concepts should be tagged JEE only. That is a separate data change that waits for the owner to apply it.
3. **Scope of the experiments.** Proposed: all 16 Physics concepts and all 11 Chemistry concepts, no more. Two JEE experiments (Vernier callipers, screw gauge) are already taught in Physics 11 Chapter 1; the Physics chapter refers back to them and does not repeat them. Chromatography stays in Chemistry 11 (General Organic Chemistry), as the database already decides.
4. **Level of practical detail.** Proposed: the aim, principle, apparatus, procedure, observation table, calculation, result and precautions for each experiment, plus the viva-style questions JEE asks. No safety instructions beyond one short line per experiment (the exam does not test them, and a wrong safety line is worse than none).
5. **One chapter at a time, three helpers at most**, as in Chemistry 12 decision 6 (the founder's Mac hung with 14 helpers). Physics first or Chemistry first? I suggest Physics Experimental Skills first: its reference draft exists and its experiments are shorter.

## 3. Shape of each chapter

Same structure as every other chapter in the app: topics (reading parts), additional topics A and up, Formula sheet cards, Diagrams, Key points, worked examples, practice and graded MCQs, a cheat sheet and a topic mastery checklist. Registered in `lib/textbooks.ts` under `'physics|12|experimental skills'` and `'chemistry|12|practical chemistry'` (the key is the cleaned chapter name, which is how Chemistry 11 Ch 10 once failed to open).

**Physics 12 Chapter 15, Experimental Skills** (16 concepts, about 5 topics):
- Topic 00 (draft exists): reading instruments, least count, zero error, combining errors, graphs and best-fit lines.
- Topic 01 Mechanics and properties of matter: simple pendulum with energy dissipation, metre scale and moments, Young's modulus, surface tension by capillary rise, viscosity by terminal velocity, speed of sound by resonance tube, specific heat by mixtures.
- Topic 02 Current electricity: metre bridge, Ohm's law, galvanometer resistance and figure of merit.
- Topic 03 Optics: focal lengths by the parallax method, prism deviation graph, glass slab with a travelling microscope.
- Topic 04 Semiconductors: p-n junction and Zener characteristics, identifying components.
- Deliverables: about 16 formula cards (one per experiment), about 20 diagrams (apparatus and result graphs), about 40 key points, worked numerical examples with real data tables.

**Chemistry 12 Chapter 12, Practical Chemistry** (11 concepts, about 5 topics):
- Topic 01 Organic analysis: Lassaigne's test, functional-group tests.
- Topic 02 Preparations: Mohr's salt, potash alum, acetanilide, p-nitroacetanilide, aniline yellow, iodoform.
- Topic 03 Volumetric analysis: acid-base titrations and indicators, redox titrations with potassium permanganate.
- Topic 04 Qualitative salt analysis: cation groups, anion tests.
- Topic 05 Named experiments: enthalpies of solution and neutralisation, lyophilic and lyophobic sols, iodide and hydrogen peroxide kinetics.
- Deliverables: reaction schemes as formula cards, flow charts for group separation, colour and precipitate tables, titration calculations, about 15 diagrams, about 35 key points.

## 4. How it would be built (the process already used)

1. Brief for the chapter (page map replaced by the concept list), reference text extracted and cleaned.
2. Writers (at most 3 at once), then drawers for the diagrams, then a key-points writer.
3. Coordinator runs the automatic checks once (book rules, font coverage, display fit, registry key, diagram checks).
4. Two independent expert reviews on Opus, **recomputing every number** in every worked example and checking every colour, precipitate, indicator and reaction against the NCERT laboratory manual. Anything checked only from memory is labelled, and removed if it cannot be checked.
5. New-text list to Nikhil, decisions, fixes (everything including optional, as in earlier chapters).
6. Android sample (cards, diagrams, about 10 reading pages), fixes, then push only on Nikhil's say-so.

Rough effort, based on the Chemistry 12 chapters (about one working day each from first brief to pushed): about one day for each chapter plus the founder's review time, so two to three days in all if one chapter runs at a time. Each chapter is about 2,000 lines of data, like Physics 12 Chapter 14 (6 files, 2,029 lines).

## 5. Risks to keep in front of us

- **Accuracy of practical details.** Wrong indicator colours, endpoints, precipitate colours or yields are exactly what a student would memorise and get wrong in an exam. The review step recomputes and cross-checks all of them; the draft text and the OP Tandon extract are both unreviewed and must not be trusted as they stand.
- **Questions already in the bank.** 871 Practical Chemistry questions and 137 Experimental Skills questions exist. After the chapters are written, a pass should check that the book and the question solutions agree (the question audit found keys fine but working wrong in a few cases).
- **Tags.** See decision 2: both chapters are for both exams, except three Physics experiments (JEE only), whose concept tags still say both.
- **No source to compare word for word.** The faithfulness check the other chapters had (original text against the book) does not exist here. The substitute is the two independent reviews against NCERT.

## 6. What I need from Nikhil

A yes or no on decisions 1 to 5 above. With those, I would start with the Physics 12 brief and the reference extract, and ask nothing further until the first new-text list.
