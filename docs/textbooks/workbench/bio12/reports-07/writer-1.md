# Biology 12 Chapter 7, writer 1 (Topics 01 to 03, pp. 352 to 371)

File: content/textbooks/bio-12-07/topics-1-3.ts (export TOPICS). Test run: only "draws only figures that exist" fails, naming fig 7.1 to 7.7 (undrawn, the diagram agent's); the em-dash failure is Biology 11 Ch 17 figure labels (not mine). eslint clean.

## Boundaries (checked on the text dump and page images 352, 353, 355 to 357, 364, 366)
Topic 01 pp. 352 to 354 (6 parts, no practice, no pitfalls); Topic 02 p. 355 top to p. 362; Topic 03 p. 363 top to p. 371. All as the brief says; no differences.

## Counts
- T01: 6 parts; 2 ex; 2 mcq; 2 tables (definitions); cheat sheet 5 rows + 1 aid.
- T02: 8 parts; 4 ex; 5 practice (with answers); 4 mcq; 4 pitfalls + 1 pro-tip; 7 tables (5 disease tables + vector grid); cheat sheet 8 rows + 2 aids; figs 7.1, 7.2.
- T03: 8 parts; 4 ex; 5 practice; 4 mcq; 4 pitfalls + 1 pro-tip; 4 tables (antibodies, AIDS, cancer); cheat sheet 6 rows + 2 aids; figs 7.3, 7.4, 7.5.
Fig ids and placement: 7.1 after the "memory hooks" paragraph (caption p. 358, drawn p. 359); 7.2 under "Transmission routes at a glance"; 7.3 under "Immunity: the master tree" (caption p. 364, drawn 365); 7.4 after the antibody table; 7.5 after the HIV steps (caption p. 367, drawn p. 368). No unnumbered drawing on pp. 352 to 371. Errata checked on the page: p. 352 sentence ("cardiovascular disease and cancer"), Plague row p. 356, boxed order p. 360: all as corrected.

## Exceptions taken (all word-for-word changes)
- Every em dash replaced (colon, comma, brackets, or semicolon); about 90. Sense-sensitive ones: "Malaria is digenetic; the parasite needs two hosts" (p. 357); the HIV, carcinogen and Exam Relevance pairs became brackets; the table cell "— (contaminated food/water/soil)" (Ascariasis vector, p. 356) became "None (contaminated food/water/soil)"; MCQ 2 and 3 options "Typhoid — organism — mode" became commas ("Typhoid, Salmonella typhi, inspired air"; "typhoid, small intestine"), and the stem "(disease, organism, mode of transmission)".
- Tags "[NEET — high difficulty]" became "NEET high-difficulty" (tag and practice prefix).
- Cross-references: p. 353 "subtopic 01/02/03" became Topic 02/03/04 (infectious diseases / immunity / substance abuse); "Cancer (subtopic 02)" Topic 03; "(subtopic 03)" Topic 04; p. 354 cheat sheet "subtopic 01" Topic 02, "subtopics 02-03" "Topics 03-04"; p. 355 "subtopic" topic (Exam Relevance, "whole subtopic"); p. 363 "Subtopic 01 introduced the invaders. This subtopic" "Topic 02 ... This topic", "the whole subtopic" "topic". (Book numbering: section 2 = its "subtopic 01".)
- NEW WORDING (for founder approval): the label added to the frequency claim in each Exam Relevance box (T01, T02, T03): "(These frequencies are the book's estimate from past papers, not official figures.)" / "(The frequency stated here is ...)".
- Match answers "A-2" typed with an en dash "A–2" (brief rule). ASCII "A & R" kept in T03 Q3 options as printed.
- Answer label words dropped: "Answer: (a)." became ans "(a)" (T02 Q3, T03 Q3); T03 Q3 lead "Answer (a)." removed from the steps; "Order:" lead removed from T02 Q4 (the order is `ans`; the trap sentence is the last step, so it now follows rather than precedes the order).
- Worked questions with no separate answer line have ans '' (T01 Q1, Q2; T02 Q1; T03 Q1, Q4).
- Run-in numbered steps, bullets and sub-bullets written as `p` with `<br>`; sub-headings (2.3.1, 2.3.2, 3.2.1 etc.) as a bold `p`. The two-column Antibody-class, AIDS and cancer tables are `table`s (not `defgrid`) so the Feature/Fact heads survive. "Mnemonics:" label dropped and its contents put in `aids`; T01 "One-liner:" kept inside its aid. T03 cheat sheet "Antibody = H2L2 ... Classes: ..." split at the full stop into f and note.
- Species epithets printed in italic in the disease tables ("Plasmodium (vivax, malariae, falciparum, ovale)") kept italic as the page prints; "Rhino viruses" kept as printed (current: rhinoviruses). γ and α typed as Greek letters (dump had math italic). Emphasis italics dropped. Inline bold in running prose follows the page on pp. 352, 353, 355, 357, 364; elsewhere I bolded defined terms and lead-ins by the same pattern from the dump (not checked page by page): purely typographic.

## False "never covers" claims
None on pp. 352 to 371 (the Additional topics' introductions are writer 2's).

## Suspected book errors (page, text, why, correction, confidence)
1. p. 357 and p. 360 Q3: "a person with sickle-cell anaemia is less prone to malaria" / A true. Protection is shown for the heterozygous sickle-cell TRAIT (HbAS); homozygous sickle-cell anaemia is a severe disease. Correct to "sickle-cell trait (carriers)". Also R's "explains A" is weak. Confidence high on the trait point. Propagates to: p. 357 note, Q3 assertion and its reasoning (T02).
2. p. 361 cheat sheet and 2.7 "Female mosquitoes are the vectors": overgeneral; the book's own table lists houseflies as (mechanical) vectors of amoebiasis (p. 356). Say "Female Anopheles, Culex and Aedes are the mosquito vectors". Confidence high.
3. p. 361 pitfall "Cold = viral ... never the lungs" and answer 3 "infect only the nose and respiratory passage": NCERT says not the lungs; "never/only" overgeneral. Medium-low.
4. p. 364 "(no antibodies involved)" for graft rejection: antibody-mediated rejection exists; keep NCERT "T cells are responsible for graft rejection", add "mainly". Medium.
5. p. 364 "Only when these non-specific defences are breached does the specific ... system take over": overstated; adaptive response starts as innate response proceeds. Medium-low. "complement proteins" is beyond NCERT.
6. p. 366 malignant tumour "spread via blood": also via lymph. p. 369-370 practice 4 answer same. Medium.
7. p. 367 "A long time-lag (≈ 5-10 years)": NCERT says "from a few months to 5-10 years". Medium (recollection).
8. p. 369 Q4 / p. 363: "anti-tetanus injection" called passive and "not a vaccine", while Q1 (p. 367) lists "tetanus vaccine" as active; tetanus toxoid IS a vaccine, antitoxin (TIG) is passive. Consistency point, NCERT keeps the passive example. Medium.
9. p. 370 answer 5 "the specific chemical agent: benzopyrene": one of many smoke carcinogens; "the" is overspecific. Low.
10. p. 357 6-step list vs Figure 7.1: text step 5 is "uptake" and step 6 includes fusion; the figure puts gamete fusion/zygote/oocyst in stage 5 and the sporozoite release in 6. Reconcile with the diagram agent. Medium.
11. p. 355 "most pathogens are parasites", "Non-infectious ... arise from within" (cancer/diabetes can have infectious causes, e.g. oncogenic viruses, p. 366 itself) : low. p. 355 "which is precisely why typhoid spreads through food and water rather than air": causal link is the writer's, low.
12. p. 360 "Malignant (the fatal) malaria": P. falciparum is "sometimes fatal" (p. 356). Low.
13. Superlatives/frequency (copied, labelled where a frequency): p. 352 "frequently", "occasionally"; p. 355 "perennial high-yield", "NEET asks 2-3 direct questions every year", "among the cheapest marks"; p. 357 "(high-frequency NEET trap)" (table title, unlabelled); "Two memory hooks that NEET loves"; p. 361 "the single most frequent malaria trap", "the deadliest single error in the chapter"; p. 363 "The single densest scoring block", "NEET reliably pulls 3-4 questions"; p. 364 "a favourite one-mark target"; p. 360 "the marquee mechanism" kept.
14. IgG "~75-80%" and "the only Ig that crosses the placenta" (true for humans); IgD is beyond NCERT; "ABO transfusion reactions" for IgM fine.
15. Numbers recomputed: no calculation in these pages. Fig 7.1 stage counts (1 to 4 human, 5 to 6 mosquito) match the text.
16. Two A-R items on these pages print the standard four options; none prints "both false". T01 MCQ nudges for (a)/(d) given the same shared text (and (a),(c),(d) for T01 MCQ 2). Every wrong MCQ option has a nudge; correct ones null; no option left unexplained.

## Not checked
Bold in running prose on pp. 354, 358 to 363, 366 to 371 (typographic only); figure internals (drawn pages not copied).
