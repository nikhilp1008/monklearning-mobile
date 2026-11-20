# Review R3 (third independent review, Opus): Biology 12 Chapter 7, Human Health and Disease

Scope: the whole chapter as it now stands after fixers F1 and F2: content/textbooks/bio-12-07/topics-1-3.ts, topic-4-extras-a-d.ts, extras-e-h.ts; lib/diagrams/biology-12-07.ts; lib/revise/keypoints-biology-12-07.ts. Book pp. 352 to 407 (bio12.pdf, bio12.paged.txt). Nothing in the repo was edited; jest, tsc and git were not run.

Method (own pass first, before reading R1/R2):
1. Machine 4-gram diff of every string literal in the three topic files against the book text pp. 352-407 (hyphenation joined), both directions (app text not in the book; book text not in the app). Every unmatched span was traced: all are the declared exceptions (em dashes, subtopic -> Topic renumbering, labels on exam claims, layout of tables) or the fixers' [NEW] wording listed in new-text-F1.md / new-text-F2.md. No book sentence is missing; no unlisted word change was found.
2. Page images read for every table and figure page: pp. 355, 356, 357 (disease tables, vector grid, Plasmodium steps), 359 (Figs 7.1, 7.2), 365 (Figs 7.3, 7.4), 366 (immune phenomena, AIDS and cancer tables), 368 (Fig 7.5), 373 (drug table, tobacco, alcohol, addiction table), 375 (Figs 7.6, 7.7), 379 (hypersensitivity table), 392 (E answers, antibiotic table), 403 (Traps table).
3. Figures: the existing SVG dump of the seven figures (rendered with qlmanage) compared with the book drawings; the later source edits (Fig 7.7 note "see Topic 03"; upright H<sub>2</sub>L<sub>2</sub> and T<sub>H</sub>) read in the source.
4. Every MCQ key, match key, A-R item and number recomputed; every Additional-topic introduction checked against Topics 01-04 as built (and Chapters 3 and 10 where they are cited); every F1/F2 [NEW] wording read for correctness.
5. Only then R1 and R2 were read and each flag below marked NEW or REPEAT.

## Flags, most serious first

### 1. [REPEAT: R1 flag 2 applied wrongly] Topic 04: amphetamines paired with insomnia (fixer's own wording); cheat sheet "sedatives for depression"
- Where: topic-4-extras-a-d.ts, Topic 04, Concept intuition, paragraph "A crucial nuance" (book p. 372); and Cheat sheet row "Medicinal uses" (p. 378).
- Says now: "<b>barbiturates and benzodiazepines</b> are genuine sedatives and tranquillisers, and <b>amphetamines</b> (stimulants) are also used as medicines, to help patients cope with conditions such as depression and insomnia." Cheat sheet: "barbiturates/benzodiazepines (sedatives for depression/insomnia)".
- Wrong: the F1 rewrite (new-text-F1 item 17) now attaches "depression and insomnia" directly to amphetamines; a stimulant is not a treatment for insomnia (it causes it). The cheat sheet makes barbiturates/benzodiazepines treatments for depression, which they are not (they are sedatives/anxiolytics). NCERT lumps the three drugs and says they are "normally used as medicines to help patients cope with mental illnesses like depression and insomnia"; that grouping can stay as NCERT's, but our own sentence should not pin insomnia on amphetamines.
- Fix [NEW]: "<b>barbiturates and benzodiazepines</b> are genuine sedatives and tranquillisers (used, for example, for anxiety and insomnia), and <b>amphetamines</b> are stimulants with medical uses of their own; NCERT groups all three as medicines normally used to help patients cope with mental illnesses such as depression and insomnia."
  Cheat sheet note [NEW]: "morphine (post-surgery painkiller); barbiturates/benzodiazepines (sedatives and tranquillisers); amphetamines (stimulants); abused when misused."
- Kind: biology error (our wording; cheat sheet is the book's). Source: ours (F1) + book. Confidence: certain on the pharmacology; the exact split is the founder's call.

### 2. [NEW] Topic 04 worked Q4: heroin called "the same molecule" as morphine
- Where: topic-4-extras-a-d.ts, Topic 04, Worked questions, tag "NEET high-difficulty" (book p. 376).
- Says now: q "A post-surgical patient is given morphine in hospital with no ill effect, yet the same molecule sold on the street as “smack” devastates users." Steps end: "The lesson: identical pharmacology becomes therapeutic or destructive depending on dose, control and intent, not on the molecule."
- Wrong: the answer itself (part i) says smack is diacetylmorphine made from morphine, a different molecule (more lipid-soluble, faster into the brain). The stem and the closing lesson contradict part (i). R1 fixed only the answer's "both are opioids from Papaver somniferum".
- Fix [NEW]: q "A post-surgical patient is given morphine in hospital with no ill effect, yet a closely related drug made from it and sold on the street as “smack” devastates users." Last sentence of the steps: "The lesson: closely related pharmacology becomes therapeutic or destructive depending on dose, control and intent."
- Kind: biology error / internal contradiction. Source: book. Confidence: certain.

### 3. [NEW] Additional H, Q12: loss of contact inhibition called "the defining feature of malignant transformation"
- Where: extras-e-h.ts, H, A Graded Practice Set, Q12 answer (book p. 407).
- Says now: "Contact inhibition (...) is lost in cancer cells. This loss is the defining feature of malignant transformation."
- Wrong: benign tumours also arise from loss of growth control; what defines malignancy is invasion and metastasis. The chapter says so itself: Topic 03 "only malignant tumours invade and spread (metastasis)"; Additional D Practice 1 "It [metastasis] is the hallmark of malignancy because benign tumours remain localized". The two answers now contradict each other.
- Fix [NEW]: "Contact inhibition (the phenomenon by which normal cells stop dividing when they touch neighbours) is lost in cancer cells, so they divide without limit; invasion and metastasis are what make a tumour malignant. Options (a), (c), and (d) are all established properties of cancer cells."
- Kind: biology error / internal contradiction. Source: book. Confidence: likely.

### 4. [NEW] Key point G1 (and F2 founder decision 1): "AHA teaches abdominal thrusts alone"; "The chapter now teaches"
- Where: lib/revise/keypoints-biology-12-07.ts, topic 10, first point (answer text); docs F2 "Founder decisions" item 1.
- Says now: "The chapter now teaches the current rule: call for emergency help ..." and "many first-aid courses (Red Cross, ERC) teach 5 back blows first and then up to 5 abdominal thrusts (AHA teaches abdominal thrusts alone)".
- Wrong: (a) to my knowledge the AHA 2025 Guidelines (October 2025) moved to the ILCOR position and now also recommend cycles of 5 back blows and 5 abdominal thrusts for a severely choking adult, so the bracket is out of date (please verify; my source is memory). (b) "The chapter now teaches" is edit-history wording a student should not read.
- Fix [NEW]: "The current rule: call for emergency help (112 in India), and start CPR on an unresponsive person who is not breathing normally without a pulse check ..." and "... many first-aid courses (Red Cross, ERC) teach 5 back blows first and then up to 5 abdominal thrusts; call for help ..." (drop the AHA bracket). The chapter text (G Method item 2) needs no change; the founder note should drop the AHA contrast.
- Kind: unclear or misleading (dated claim) + wording. Source: ours (F2). Confidence: likely (AHA 2025), certain ("now").

### 5. [REPEAT: R2 flag 16 applied wrongly] Additional E and key point E2: "No vaccine ... is in India's routine immunisation schedule"
- Where: extras-e-h.ts, E Method, "Diagnosis and treatment" (book p. 391); keypoints topic 8, second point.
- Says now: "No vaccine against these three is in India’s routine immunisation schedule (a meningococcal B vaccine gives partial protection against gonorrhoea and is used in some countries)."
- Wrong: true but misleading: it implies dedicated vaccines exist elsewhere. No licensed vaccine against syphilis, gonorrhoea or chlamydia exists anywhere; the only thing in use is the MenB vaccine's partial cross-protection against gonorrhoea.
- Fix [NEW] (chapter and key point): "None of the three has a vaccine of its own (a meningococcal B vaccine gives partial protection against gonorrhoea and is offered for this in some countries)."
- Kind: unclear or misleading. Source: ours (F2). Confidence: likely.

### 6. [REPEAT: R2 flag 26 applied incompletely] Additional H, Q8 answer contradicts its own hedge
- Where: extras-e-h.ts, H, Q8 answer (book p. 406).
- Says now: "... Both statements are true and the reason directly explains the assertion. Innate immunity is a large part of the explanation (adaptive immunity and the narrow host range of most microbes also matter), so (a) is the intended answer."
- Wrong: the book sentence "directly explains" was kept and the hedge appended, so the answer says both "directly explains" and "a large part".
- Fix [NEW]: replace the last two sentences with "Both statements are true, and innate immunity is a large part of the explanation (adaptive immunity and the narrow host range of most microbes also matter), so (a) is the intended answer."
- Kind: unclear (internal contradiction). Source: book + ours. Confidence: certain.

### 7. [REPEAT: R1 flag 19b applied only in one place] Topic 03 cancer table: benign tumour "little harm"
- Where: topics-1-3.ts, Topic 03, "Cancer at a glance" table, row "Benign tumour" (book p. 366).
- Says now: "Stays in original location; little harm" while the Limiting conditions paragraph now says "usually do little harm (some, for example in the brain, can still be dangerous)".
- Fix [NEW]: "Stays in original location; usually little harm".
- Kind: overgeneral / consistency. Source: book. Confidence: likely (NCERT: "normally ... cause little damage").

### 8. [NEW] Additional F, resistance by mutation: wrong example (tetracycline binds rRNA, not a ribosomal protein)
- Where: extras-e-h.ts, F Method, "Why resistance develops" item 1 (book p. 393).
- Says now: "a random mutation alters the antibiotic’s target (e.g., a mutated ribosomal protein binds tetracycline less well)."
- Wrong: tetracycline binds the 16S rRNA of the 30S subunit; tetracycline resistance is mainly by efflux pumps and ribosomal-protection proteins. The textbook example of a ribosomal-protein mutation is streptomycin resistance (protein S12).
- Fix [NEW]: "(e.g., a mutated ribosomal protein makes the ribosome bind streptomycin less well)."
- Kind: biology error (minor). Source: book. Confidence: likely.

### 9. [NEW] Additional A, Example A.4: macrophages placed inside "T-lymphocytes (specifically ...)"
- Where: topic-4-extras-a-d.ts, A, Example A.4 (CUET) steps, (a) Cells involved (book p. 381).
- Says now: "Type IV: T-lymphocytes (specifically T<sub>H</sub>1 cells and macrophages)."
- Wrong: macrophages are not T-lymphocytes; the bracket reads as if they were.
- Fix [NEW]: "Type IV: T-lymphocytes (specifically T<sub>H</sub>1 cells), which recruit and activate macrophages."
- Kind: unclear / transcription-level wording. Source: book. Confidence: certain.

### 10. [NEW] Additional H, Q7: the 6-week OPV dose called "a booster"
- Where: extras-e-h.ts, H, Q7 stem (book p. 405).
- Says now: "A child is given an oral polio vaccine (OPV) at birth and a booster at 6 weeks."
- Wrong: in India's schedule OPV-0 is given at birth and OPV 1 to 3 at 6, 10 and 14 weeks (primary doses); the booster is at 16 to 24 months. Topic 03 Q4 says correctly "a booster later".
- Fix [NEW]: "A child is given an oral polio vaccine (OPV) at birth and further doses from 6 weeks."
- Kind: unclear or misleading. Source: book. Confidence: likely.

### 11. [NEW] Topic 03: "weakened/inactivated (attenuated) pathogen"
- Where: topics-1-3.ts, Topic 03, "Related immune phenomena", Vaccination bullet (book p. 366).
- Says now: "introduce a weakened/inactivated (attenuated) pathogen".
- Wrong: "attenuated" means weakened (live); an inactivated (killed) vaccine is not attenuated. The bracket equates the two.
- Fix [NEW]: "introduce a weakened (attenuated) or inactivated pathogen".
- Kind: nomenclature / unclear. Source: book. Confidence: certain.

### 12. [NEW] Topic 03, "A useful framing": first line of defence leaves out the physiological barriers (F1 wording)
- Where: topics-1-3.ts, Topic 03, Key definitions, paragraph "A useful framing" (book p. 364; F1 item 6).
- Says now: "the skin/mucosa form the first line, and the phagocytes, NK cells and interferons form the second line."
- Wrong: the previous paragraph lists four barriers; the physiological ones (stomach acid, saliva, tears) fall out of both "lines". In the usual teaching they belong to the first line with skin and mucosa.
- Fix [NEW]: "the skin and mucous membranes, with their secretions (stomach acid, saliva, tears), form the first line, and the phagocytes, NK cells and interferons form the second line."
- Kind: incomplete. Source: book + ours. Confidence: likely.

### 13. [NEW] Topic 03: NK cells "engulf" intruders
- Where: topics-1-3.ts, Topic 03, four barrier types, "Cellular barriers" bullet (book p. 364).
- Says now: "phagocytic leucocytes such as neutrophils (PMNLs) and macrophages, plus natural killer (NK) cells, which engulf and destroy intruders."
- Wrong: NK cells are lymphocytes that kill infected and tumour cells directly (perforin, granzymes); they do not engulf. NCERT's own sentence groups NK cells with the cells that "phagocytose and destroy microbes", so keep NCERT's grouping and add the nuance beside it.
- Fix [NEW]: "... plus natural killer (NK) cells, which together engulf or kill and destroy intruders (NK cells kill infected cells directly rather than engulfing them)."
- Kind: biology (NCERT simplification). Source: book (NCERT wording). Confidence: possible (founder may prefer NCERT as is).

### 14. [NEW] Additional D and key point D1: "CA-19-9" notation
- Where: topic-4-extras-a-d.ts, D, tumour-marker table last row (book p. 388); keypoints topic 7, first point.
- Says now: "CA-19-9".
- Fix [NEW]: "CA 19-9" (standard form: carbohydrate antigen 19-9).
- Kind: nomenclature. Source: book. Confidence: likely; low priority.

## Earlier flags I believe were applied wrongly or incompletely
- R1 flag 2 (amphetamines): the replacement sentence pins "depression and insomnia" on amphetamines (my flag 1).
- R2 flag 16, vaccine bullet: "No vaccine ... in India's routine schedule" implies vaccines exist elsewhere (my flag 5); same in key point E2.
- R2 flag 26, Q8: hedge appended but "directly explains" kept (my flag 6).
- R1 flag 19b (benign tumours): applied in Limiting conditions only; the cancer table still says "little harm" (my flag 7).
- R2 flag 29 / F2 founder decision 1: the "AHA teaches abdominal thrusts alone" contrast is, as far as I know, outdated since the AHA 2025 guidelines (my flag 4).
- R1 flag 3 touched Topic 04 Q4's answer only; the stem's "same molecule" (my flag 2) was not raised before.
All other F1/F2 [NEW] wordings were checked and are correct, plain and not overclaiming (including the CPR, Heimlich, burns, dog-bite, RICE and nosebleed rewrites; the sickle-cell trait wording; steps 5-6 of the Plasmodium cycle against Fig 7.1; the HIV 5-10 year range; T2 "above 2 cm and up to 5 cm"; the Additional-topic introductions; P. rubens and Amycolatopsis notes; the ethanol ranges).

## Claims about the chapter (Additional-topic introductions) against the topics as built
- Shared introduction (A): "five topics" = A-E, "two practical topics" = F, G, closing section H: correct; exam claims labelled.
- A "The chapter introduces allergy ... IgE and mast cells": TRUE (Topic 03 Related immune phenomena).
- B "introduces autoimmunity ... rheumatoid arthritis as the example": TRUE (Topic 03).
- C "immunodeficiency appears only through AIDS": TRUE for Topics 01-04 (only HIV/AIDS); the SCID/ADA pointer to Chapter 10 is TRUE (bio-12-10 has ADA-SCID gene therapy). "links back to Topic 01, where balanced nutrition is one of the four levers": TRUE.
- D "covers proto-oncogene to oncogene, loss of contact inhibition, metastasis ... surgery, radiation, chemotherapy, and immunotherapy"; "Oncogenic viruses carry viral oncogenes, as the chapter notes": TRUE (Topic 03 cancer table and mechanism).
- E "covers infectious diseases transmitted by air, water, and insect vectors, and HIV transmission through sexual contact": TRUE; "Chapter 3 names these infections in its Topic 02 and describes their clinical picture in its Additional topic D": TRUE (bio-12-03 topics-1-2.ts table rows; extras-c-g.ts Additional D).
- F "antibiotics appear only in one line ... (Topic 02)": TRUE (the only "antibiotic" in Topics 01-04 is Topic 02's control-toolkit sentence).
- G "counterpart of the chapter's public-health measures (hygiene, vector control, vaccination)": TRUE (Topics 01, 02).

## Counts verified
- MCQ keys recomputed and unique: T01 (b, b); T02 (b, b, b, a); T03 (c, b, b, c); T04 (a, c, b, c); every wrong option carries a nudge.
- Match keys: T02 Q2 A-2 B-1 C-4 D-3; T03 Q2 A-2 B-4 C-1 D-3; T04 Q2 A-2 B-4 C-1 D-3; B.3 P-i Q-ii R-iii S-iv; D.4 P-iii Q-i R-ii; H Archetype 1 A-2 B-1 C-4 D-3: all correct.
- A-R items: T02 Q3, T03 Q3, T04 Q3, H Archetype 3, H Q8, H Q10: all have fourth option "A false, R true"; no "both false" anywhere; keys (a) correct (T02 sickle-cell key (a) remains a founder decision, defensible).
- H graded set keys Q1 b, Q2 b, Q3 a, Q4 b, Q5 c, Q6 b, Q7 c, Q8 a, Q9 b, Q10 a, Q11 b, Q12 b; Archetypes 2, 4, 5, 6, 7, 8 keys c, b, b, b, b, b: all correct.
- Numbers: 39-40 °C, 3-7 days, 12-18 years, IgG ~75-80%, MALT ~50%, HIV lag 5-10 years, ethanol 4-6 / 9-15 / ~40%, Type IV 24-72 h, CPR 30 ∶ 2, 5-6 cm, 100-120/min, Essen days 0, 3, 7, 14, 28, 70S = 30S + 50S, 80S = 40S + 60S, T2 N0 M0 = Stage IIA: all consistent.
- Errata (three entries): p. 352 "leading non-infectious causes of death include cardiovascular disease and cancer" present; Plague row "Lymph nodes / Fever, painful buboes / (Rat-flea vector)" present; p. 360 boxed order "A (mosquito) → B (human) → C (human) → D (mosquito), then back to A for the next bite" present.
- No em dash in any of the five files; no exam year; scientific names italic with genus-only italics where alone; T<sub>H</sub>, H<sub>2</sub>L<sub>2</sub>, CD4<sup>+</sup>, T<sub>reg</sub> upright.
- Transcription: no missing, duplicated or altered book sentence beyond the declared exceptions and the listed [NEW] wording (both-direction 4-gram diff).

## Figures checked (with pages)
- Fig 7.1 life cycle of Plasmodium (p. 359): six stages, 1-4 human, 5-6 mosquito, texts as the book; loop drawn vertically (layout only); caption matches. OK.
- Fig 7.2 modes of transmission (p. 359): four routes, 3 + 3 + 4 + 2 example lines, vectors italic in source. OK.
- Fig 7.3 master tree of immunity (p. 365): five boxes, words as the book. OK.
- Fig 7.4 antibody (p. 365): 2 heavy (arm + stem) + 2 light (outer arm) chains, two antigen-binding sites, Fab, Fc, inter-chain S-S bonds, H<sub>2</sub>L<sub>2</sub>. OK (proportions not to scale, declared).
- Fig 7.5 HIV replication (p. 368): A-E in order, viral DNA into the nucleus, new virions, T<sub>H</sub> count falling, legend and "Retrovirus: RNA → DNA" tag. OK.
- Fig 7.6 addiction cycle (p. 375): 1 → 2 → 3 → 4 → 1 with "escalating use", centre box and "Biology of the loop". OK.
- Fig 7.7 tobacco two pathways (p. 375): two three-step chains; note now reads "(see Topic 03)" in source. "oral" under smoking remains the open founder decision (F1). OK otherwise.

## Could not check
- The SVG dump used (/private/tmp/.../scratchpad/dump, 2026-11-16 19:04) predates the last diagram edit (19:36); the two later changes (Fig 7.7 note text, upright H<sub>2</sub>L<sub>2</sub>/T<sub>H</sub>) were read in the source, not rendered (jest not run, as instructed). qlmanage lacks the app fonts, so italics in the renders are not judged.
- Bold/italic emphasis in running prose was compared on the page images only for the pages listed in the method.
- Current guideline points (AHA 2025 choking advice, India's OPV schedule, gonorrhoea vaccine position) and NCERT wording are from memory; confidence given per flag.

## Summary
14 flags: 10 NEW, 4 REPEAT (R1 2, R1 19b, R2 16, R2 26 applied wrongly or incompletely); none serious in the sense of a wrong key or unsafe advice; 3 medium (flags 1, 2, 3: amphetamines/insomnia in our own wording, heroin "the same molecule", contact inhibition as the "defining feature" of malignancy), the rest low. The transcription is complete and faithful, the errata are in, every figure matches its page, all keys are right, and the earlier fixes (first aid, sickle-cell trait, Plasmodium steps) are correct.
