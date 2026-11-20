# Biology 11 Chapter 10 (Cell Cycle and Cell Division): third expert review (R3, Opus)

Reviewer: third independent reviewer, Claude Opus. Date 2026-11-17. Nothing in the repo was edited; no tsc, jest or git was run.
Share reviewed: the whole chapter as it now stands (after fixers F1 and F2): `content/textbooks/bio-11-10/topics-1-2.ts`, `topics-3-4-extras-a-b.ts`, `extras-c-f.ts`, `lib/diagrams/biology-11-10.ts`, `lib/revise/keypoints-biology-11-10.ts`, against the book pp. 591 to 641 (errata p. 1176).

Method, in this order: (1) an n-gram-anchored word-level diff of every app string against the page-tagged book text for pp. 591 to 641 (every difference read; all of them are the brief's allowed liberties, the fixers' listed [NEW] wordings, or flags below; no dropped sentence, no wrong number, no misattached text found); (2) page images for the four figure pages (595, 602, 609, 614) and the two tables the text layer garbles (618 checkpoint table, 629 drug table); (3) every number, count and answer key recomputed; (4) every Additional-topic introduction checked against Topics 01 to 04 as built; (5) every [NEW] wording in new-text-F1.md and new-text-F2.md read for correctness and overclaiming; (6) only then R1 and R2 were read, to mark each flag NEW or REPEAT.

Kinds: biology error / number / wrong MCQ answer / transcription slip / figure error / unclear or misleading / overclaim. Source: book, or ours (fixer or writer wording).

## Flags, most serious first

### 1. "Meiocytes needed = desired gametes ÷ 4" is wrong for plants and contradicts the topic's own example [NEW] (serious)
- Where: `topics-3-4-extras-a-b.ts`, Additional B, Method, "How many divisions" shortcuts, bullet 3 (book p. 621).
- Says now: "Number of meiocytes needed = desired gametes ÷ 4."
- Wrong: in a flowering plant meiosis gives microspores (pollen grains), not gametes; each pollen grain gives 2 male gametes, so gametes ÷ 4 overstates the meiocytes needed two-fold. B's own Example 2 shows it: 200 PMC give 1600 male gametes (gametes ÷ 8). In oogenesis one meiosis gives one ovum (÷ 1). The rule is only true for spermatogenesis.
- Fix: [NEW] "Number of meiocytes needed = haploid products wanted (microspores/pollen grains, or sperm) ÷ 4. For male gametes of a flowering plant divide by 8 (each pollen grain gives two male gametes); for eggs, one meiosis gives one ovum."
- Kind: number / biology error. Source: book. Confidence: certain.

### 2. "One meiocyte gives four functional cells" stated for all spore formation; megasporogenesis gives one functional megaspore [NEW] (serious)
- Where: `topics-3-4-extras-a-b.ts` Topic 03 Concept intuition, Limiting conditions bullet 3 ("The clean "one meiocyte → four functional cells" outcome holds for spore/pollen formation"); Topic 03 Worked example 2 trap ("this 1-to-4 ratio holds for spore/pollen formation"); Topic 03 Pro-Tip ("one meiosis → four haploid cells (for spores/pollen)"); Additional B kalam and Method bullet 2 ("One complete meiosis → 4 haploid cells (for pollen grains or spores)"); keypoints topic 2 shortcut `why` ("The 1-to-4 ratio is for spore and pollen formation") and topic 5 second point ("4 haploid cells (pollen grains or spores)") (book pp. 607, 610, 611, 620; KP ours).
- Wrong: in most angiosperms (Polygonum type) the megaspore mother cell gives a linear tetrad of which three degenerate: one functional megaspore. Students carry this exact NCERT fact (Class 12 Ch 2) into counting items ("how many megaspore mother cells for 100 ovules/embryo sacs?").
- Fix (Topic 03 bullet 3): [NEW] "The clean "one meiocyte → four functional cells" outcome holds for microspore (pollen) formation and for sperm formation; in megaspore formation in most flowering plants only one of the four megaspores survives, and in animal egg formation the yield differs, but those belong to the Reproduction chapters, not here."
  Elsewhere replace "spore/pollen" or "pollen grains or spores" by [NEW] "pollen (microspores)" (B kalam: [NEW] "One complete meiosis → 4 haploid cells (4 microspores, that is 4 pollen grains)").
- Kind: biology error / overgeneral. Source: book (and KP). Confidence: certain.

### 3. Drosophila: "a short G2 appears from cycle 10" is wrong; it was introduced by the fix [NEW, earlier flag applied wrongly] (serious)
- Where: `extras-c-f.ts`, Additional D, Method, "Drosophila syncytial divisions" ("The cycles in the first nine rounds consist only of alternating S and M phases; a short G2 appears from cycle 10, and G1 only after cellularisation.") and Practice D2 (iii) (same wording). Book p. 626/628 said "with no G1 or G2 gap phases".
- Wrong: the 13 syncytial cycles are S/M cycles throughout; cycles 10 to 13 lengthen mainly by a longer S phase. The first G2 appears in cycle 14 (at the mid-blastula transition, with cellularisation); G1 first appears in cycle 17. The book's wording was right; R2 flag 22 changed it to something false.
- Fix (Method): [NEW] "All 13 syncytial cycles consist only of alternating S and M phases, with no G1 or G2; the cycles slow from cycle 10 as S phase lengthens. A G2 phase first appears in cycle 14, when cellularisation occurs, and G1 later still."
  Practice D2 (iii): [NEW] "(iii) The cycles are extremely rapid (about 10 minutes in the early cycles), nearly synchronous across the embryo, and consist only of alternating S and M phases with no G1 or G2, whereas normal mitotic cycles have G1 and G2 and are far slower."
- Kind: biology error. Source: ours (fixer, following R2 flag 22). Confidence: likely (high).

### 4. "Animal cytokinesis does not require vesicle fusion" is false [NEW]
- Where: `extras-c-f.ts`, Additional C, Practice 5 answer (book p. 625).
- Says now: "Animal cytokinesis uses a contractile ring of actin and myosin; it does not require vesicle fusion and is therefore less directly affected."
- Wrong: animal cytokinesis needs membrane delivered by vesicle fusion at the furrow and for abscission at the midbody; blocking it makes cytokinesis fail late. It also clashes with C.1(c) as fixed ("the Golgi ... supplying membrane for the new cell surface"). The plant-is-worse answer stands.
- Fix: [NEW] "Animal cytokinesis is driven by a contractile ring of actin and myosin; it uses vesicle fusion only to add membrane and to complete the final separation, so it is less directly affected."
- Kind: biology error. Source: book. Confidence: certain.

### 5. Kinetochore trap: "attaching spindle fibres to chromatids ... wrong" now contradicts the fixed answer cell [REPEAT, partly fixed]
- Where: `extras-c-f.ts`, Additional F, The Traps table, row "Kinetochore direction", column "What it punishes" (book p. 637).
- Says now: "Options describe the kinetochore as attaching spindle fibres to chromatids or to the chromosome arms: both wrong." The next cell (R2 flag 19 fix) says "one on each sister chromatid, where spindle microtubules attach", which is right, so the row now calls a true statement wrong.
- Fix: [NEW] "Options describe spindle fibres as attaching along the chromosome arms, or the kinetochore as lying away from the centromere: both wrong."
- Kind: biology error / internal contradiction. Source: book (R2 fixed only the other cell). Confidence: certain.

### 6. APC/C "triggers anaphase by degrading cyclin B" (key point) [NEW, on fixer wording]
- Where: `lib/revise/keypoints-biology-11-10.ts`, topic 4 first point, last sentence (R2 KP fix).
- Says now: "it then triggers anaphase by degrading cyclin B".
- Wrong: APC/C triggers anaphase by marking securin for destruction (freeing separase, which cuts the cohesin holding sister chromatids); its degradation of cyclin B lets the cell exit mitosis. Students should not learn that cyclin B loss separates the chromatids.
- Fix: [NEW] "it then triggers anaphase (by destroying securin, so the sister chromatids are released) and, by degrading cyclin B, lets the cell leave mitosis."
- Kind: biology error. Source: ours. Confidence: likely.

### 7. "For NEET and CUET you need" cyclin-CDK pairs, the vocabulary of oncogenes and the molecular machinery of cytokinesis [REPEAT for A, NEW for C and E]
- Where: `topics-3-4-extras-a-b.ts` Additional A Introduction para 2 ("For NEET and CUET you need the named checkpoints, the specific cyclin–CDK pairs active at each transition, and the logic..."); `extras-c-f.ts` C Introduction ("For the exam you need the molecular machinery..."); E Introduction ("For NEET you need the specific vocabulary: oncogenes, tumour suppressor genes, ... and which chemotherapy drugs ...") (book pp. 617, 623, 629).
- Wrong: contradicts Topic 01's box (these "go beyond the NCERT text (a little beyond what CBSE and NEET usually ask)") and A's own scope note ("Topics A to E go beyond the NCERT text"). NCERT names none of cyclin pairs, Rb/E2F, MPF, oncogene examples or drugs. R2 flag 20 asked for A to be labelled; F2 declined.
- Fix: A: [NEW] "For enrichment beyond NCERT (and for harder application items), it helps to know the named checkpoints, the specific cyclin–CDK pairs active at each transition, and the logic of why a checkpoint can halt the cycle." C: [NEW] "Going beyond NCERT, this topic adds the molecular machinery, ..." E: [NEW] "Going beyond NCERT, this topic adds the specific vocabulary: ..."
- Kind: overclaim. Source: book. Confidence: certain.

### 8. Taxol side effect: peripheral neuropathy offered as an answer to "effect on normal dividing cells" [NEW]
- Where: `extras-c-f.ts`, Additional E, Worked example 2, solution (c) (book p. 631).
- Says now: "... peripheral neuropathy (affects neurons whose cytoskeleton relies on microtubules). Any one is sufficient." Also "Bone marrow suppression (agranulocytosis: loss of white blood cells ...)".
- Wrong: the question asks for a side effect that reflects the drug's effect on normal dividing cells; neurons do not divide, so neuropathy is not an acceptable answer to (c). "Agranulocytosis" is a specific severe drug reaction; the chemotherapy effect is myelosuppression (neutropenia).
- Fix: [NEW] "(c) Bone marrow suppression (fewer white blood cells, especially neutrophils, raising infection risk); hair loss (alopecia: follicle cells divide rapidly); mucositis (damage to the rapidly renewed gut lining). Any one is sufficient. (Peripheral neuropathy also occurs, but it comes from Taxol's effect on the microtubules of non-dividing nerve cells, so it does not answer this part.)"
- Kind: biology error / wrong answer key. Source: book. Confidence: certain.

### 9. F Archetype 3 question still says "shown in the diagram" with no diagram [REPEAT]
- Where: `extras-c-f.ts`, Additional F, Archetype 3 worked representative question (book p. 634).
- Says now: "A stage of mitosis is shown in the diagram. Nuclear envelope reforms and the Golgi complex reforms. The stage is:"
- Wrong: no diagram is printed or drawn; the writer flagged it and R2 fixed only the approach sentence.
- Fix: [NEW] "In a stage of mitosis, the nuclear envelope and the Golgi complex are re-forming. The stage is:"
- Kind: transcription / unclear. Source: book. Confidence: certain.

### 10. "These are the four routes to cancer" (fixer wording) still overclaims [NEW]
- Where: `extras-c-f.ts`, Additional E, Method, "Cancer and the cell cycle", last sentence (book p. 629 "These are the hallmarks of cancer", R2 flag 21).
- Says now: "These are the four routes to cancer."
- Wrong: the definite article makes them the complete list; sustained angiogenesis, invasion and metastasis and others are not here.
- Fix: [NEW] "These are four of the ways a cell's cycle control breaks down in cancer."
- Kind: overclaim. Source: ours. Confidence: certain.

### 11. Animal cleavage furrow described as going "wall → centre" [NEW]
- Where: `topics-1-2.ts` Topic 01 Step 8 ("from the periphery inward (wall → centre)"), Topic 01 cheat sheet ("animal = cleavage furrow (wall → centre)"); `extras-c-f.ts` F Archetype 7 approach ("(wall → centre)"), F Traps "Cell plate direction" answer cell ("Animal cleavage furrow = wall → centre"); keypoints topic 0 mixup ("(wall to centre)") and topic 9 mistake ("the animal furrow from the wall to the centre") (book pp. 594, 598, 636, 637).
- Wrong: an animal cell has no cell wall; the furrow runs from the plasma membrane at the periphery to the centre. "Wall to centre" is the NEET option wording for the plant cell plate distractor, so it teaches the wrong association.
- Fix: replace "wall → centre" for the animal furrow by [NEW] "periphery → centre" in each place (KP: [NEW] "(periphery to centre)", "the animal furrow from the periphery to the centre").
- Kind: unclear / misleading. Source: book. Confidence: certain.

### 12. "Meiosis II adds no new variation" [NEW]
- Where: `topics-3-4-extras-a-b.ts` Topic 03 MCQ 4 solution ("Meiosis II merely separates chromatids and adds no new variation."); keypoints topic 2 second point ("Meiosis II adds no new variation.") (book p. 611).
- Wrong: after crossing over the two sister chromatids differ, and which recombinant chromatid goes to which pole at anaphase II helps make the four products different. Meiosis II makes no new combinations, but it does distribute the variation. The answer (a) stays.
- Fix: [NEW] "Meiosis II makes no new combinations: it only shares out the chromatids, already recombined in Meiosis I, among the four cells."
- Kind: overgeneral. Source: book (and KP). Confidence: likely.

### 13. Interphase "the busiest phase" / "the most metabolically active period" left in two places [REPEAT]
- Where: `topics-1-2.ts` Topic 01 pitfall 3 ("Interphase is the longest and the busiest phase: never describe it as inactive.") and Topic 01 MCQ 4 solution ("Interphase is the most metabolically active period") (book p. 597).
- Wrong: R1 flag 17 and the F trap fix removed this superlative elsewhere ("one of the busiest periods", "far from inactive"); it is unsupported (M phase is not metabolically idle either) and now inconsistent within the chapter.
- Fix: pitfall [NEW] "Interphase is the longest phase and far from inactive: never describe it as inactive." MCQ solution [NEW] "Interphase is far from inactive: the cell grows, synthesises proteins, and replicates its entire DNA."
- Kind: overclaim. Source: book. Confidence: certain.

### 14. Unlabelled exam-frequency claims and superlatives still in the topics [REPEAT, partly fixed]
- Where and fix:
  - Topic 01 Exam Relevance, first sentences: "CBSE Boards reliably draw a 2–3 mark question ... and a 5-mark ... is common" (the label sits after the NEET sentence only). Fix: move the label to the end of the paragraph: [NEW] "... at the higher-difficulty NEET level (the book's estimate from past papers, not official figures)."
  - Topic 02 pitfall 1: "This single point decides a large share of NEET marks on the chapter (the book's estimate ...)". Fix: [NEW] "This point is tested often (the book's estimate from past papers, not official figures)."
  - Topic 03 Step 1: "This single point underlies a large share of the chapter's assertion–reason questions." Fix: [NEW] "This point underlies many of the chapter's assertion–reason questions."
  - Topic 03 "Recognising that "equational ≠ mitosis" is a frequent NEET discriminator." Fix: [NEW] "Recognising that "equational ≠ mitosis" is a useful discriminator."
  - Topic 04 Exam Relevance: "one of the most reliably asked questions across CBSE Boards (3–5 marks) and NEET". Fix: append [NEW] "(the book's estimate from past papers, not official figures)".
  - Topic 01 "This is the single most important intuition to carry forward" and Topic 02 "almost every exam item exploits the differences": optional softening to [NEW] "This is a key intuition to carry forward" and "many exam items exploit the differences".
- Kind: overclaim (exam frequency). Source: book. Confidence: certain (that they are unlabelled); the founder decides how far to soften.

### 15. Topic 04: mitosis "in both haploid and diploid cells ... producing genetically identical diploid cells" [NEW, on fixer wording]
- Where: `topics-3-4-extras-a-b.ts` Topic 04 section 1, paragraph on mitosis (F1 flag 13 inserted "in both haploid and diploid cells" into a sentence that ends "producing genetically identical diploid cells") (book p. 613).
- Fix: [NEW] "Its job is growth, repair, and replacement, producing daughter cells genetically identical to the parent (diploid in a diploid body) so the body stays one consistent genome."
- Kind: internal contradiction. Source: ours. Confidence: certain.

### 16. "One activated copy can transform a cell" (oncogene) [NEW]
- Where: `extras-c-f.ts` Additional E Practice 1 answer ("it is dominant at the cellular level (one activated copy can transform a cell)"); keypoints topic 8 first point ("An activated copy is enough to transform a cell.") (book p. 631).
- Wrong: dominant means one activated allele is enough to give the gain of function, not that it transforms a normal cell alone; the chapter itself (fixed E text) now says "Cancer as a whole needs changes in several genes."
- Fix: [NEW] "it acts dominantly at the cellular level (one activated copy is enough to give the growth-promoting effect), though a cancer needs changes in several genes." KP: [NEW] "One activated copy is enough for its effect (it acts dominantly)."
- Kind: overgeneral. Source: book (and KP). Confidence: likely.

### 17. "All these drugs exploit ... cancer cells" includes two research tools [NEW]
- Where: `extras-c-f.ts` Additional E, paragraph after the drug table (book p. 630). The table now marks colchicine and aphidicolin "(research tool)".
- Fix: [NEW] "The anticancer drugs among these exploit the fact that rapidly dividing cancer cells spend significant time in S and M phases: ..."
- Kind: unclear. Source: book (tension created by the fix). Confidence: certain.

### 18. "1C (≈ C)" notation [NEW]
- Where: `topics-3-4-extras-a-b.ts` Topic 03 Practice 3 answer (book p. 610): "(ii) End of Meiosis II: 1C (≈ C) per cell."
- Wrong: 1C is exactly C; "≈" suggests an approximation.
- Fix: [NEW] "(ii) End of Meiosis II: 1C per cell."
- Kind: notation. Source: book. Confidence: certain.

### 19. M phase "less than an hour" (Topic 01, KP) against "~1 h" (Topic 04) and NCERT "about an hour" [NEW]
- Where: `topics-1-2.ts` Topic 01 Duration paragraph ("the M phase less than an hour"); keypoints topic 0 first point; Topic 04 one-liner 1 says "M phase (~1 h)" (book pp. 593, 616).
- Fix: [NEW] "and the M phase only about an hour" (Topic 01 and KP), matching NCERT.
- Kind: number / inconsistency. Source: book. Confidence: certain.

### 20. Figure 10.3: maternal and paternal homologues barely distinguishable [NEW, minor]
- Where: `lib/diagrams/biology-11-10.ts`, b11-10-fig-10.3 (and the homologue pairs in 10.4 and 10.6a). Book p. 602 fills the maternal homologue dark and the paternal light.
- Now: ink (near black) against slate (dark grey) outlines; at phone size the two read as the same colour, so the "maternal / paternal" labels carry the whole distinction.
- Fix: draw the paternal chromatids with a light fill or a clearly lighter stroke, as the book does.
- Kind: figure. Source: ours. Confidence: possible (judged on a qlmanage render without the app fonts).

### 21. Kinetochore assertion–reason key (a) is open to dispute [NEW, possible]
- Where: `extras-c-f.ts` F Archetype 4 worked representative (book p. 634), answer "(a)".
- Note: A says what kinetochores are called; R says what they do. Several published keys for this NCERT-sentence item give (a), some give (b) (R true but not the reason for the name). The book's (a) is defensible; no change proposed unless the founder wants a one-line note.
- Kind: MCQ key. Source: book. Confidence: possible.

## Earlier flags I believe were applied wrongly
- R2 flag 22 (Drosophila "short G2 from cycle 10"): introduced a false statement; the book's "no G1 or G2" was right (my flag 3).
- R2 KP fix for topic 4a ("triggers anaphase by degrading cyclin B"): mechanism wrong (my flag 6).
- R2 flag 19 (kinetochore trap): applied to one cell only, leaving the row self-contradictory (my flag 5).
- R2 flag 19 (Archetype 3 "is described"): applied to the approach text only; the question still says "shown in the diagram" (my flag 9).
- R2 flag 21 ("four routes to cancer"): still a closed list (my flag 10).
- F1 flag 13 (haploid and diploid inserted into Topic 04 section 1): created the "identical diploid cells" contradiction (my flag 15).
All other R1 and R2 fixes were checked in the text as built and are correct.

## NEW / REPEAT tally
NEW: 1, 2, 3, 4, 6, 8, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21 (16). REPEAT: 5, 7 (A part), 9, 13, 14 (5).

## What I verified
- Word diff: all strings of the three topic files against pp. 591 to 641. Every difference accounted for (em-dash rewording, "Addendum" to "Additional topic", hyphenation, G-subscripts, the R1/R2 fixes, the brief's liberties). No dropped or duplicated sentence, no copied-wrong number.
- Counts per topic: Topics 01, 02, 03: 4 worked examples, 5 practice, 4 MCQs, 4 pitfalls, 1 pro-tip each; Topic 04: 2 examples, 12 one-liners; A 3 examples, 6 practice; B 3 and 5; C 3 and 6; D 3 and 6; E 3 and 6; F 9 worked representatives (8 archetypes plus the moved histone item), 12 graded practice, Traps 8 rows. 12 MCQ keys checked (b, c, b, c; b, b, c, a; b, d, c, a): all correct and unique.
- Arithmetic recomputed, all correct: 24 chromosomes 12 to 24 to 12 pg; 2^7 = 128 (n = 7); 4C to 2C; 2n = 24 to 12 chromosomes of 2 chromatids; 2n = 18 to 9; 60 ÷ 4 = 15; 23 chromosomes 46 chromatids; 2n = 16 to n = 8, 240 ÷ 4 = 60; B.1 20/1/6, 20/2/12, 10/2/6 (0.6 pg per chromosome, 1C = 3 pg), 10/1/3; B.2 200 to 800 to 1600; B.3 3.2, 6.4, 1.6 pg; B practice 24/12/2, human table, 500 to 2000 to 4000, 16 pg ÷ 16 ÷ 2 = 0.5 pg; D 2^13 = 8192, 8C = 2^3 x 1C (two rounds from 2C); onion 2n = 16; yeast n = 16, drone n = 16; F 100 ÷ 4 = 25; 2n = 14 to 7 of 2 chromatids. Chromosome numbers for named organisms (human 46, onion 16, S. cerevisiae 16, Apis drone 16) correct.
- Assertion–reason items: every fourth option now reads "A false, R true" (T01 Ex4, Practice 5, MCQ4; T02 Ex4, Practice 5, MCQ4; T03 Ex4, Practice 5, MCQ4; A Ex3, Practice 5; E Practice 5; F Archetype 4 text and item, Q8). No "both false" left.
- Additional-topic introductions (A's shared introduction, B, C, D, E): every "the chapter gives / names" claim checked against Topics 01 to 04 as built: true (Topic 01 does name G1→S and G2→M check points, cyclins with CDKs and p53/Rb as beyond syllabus; Topic 04 section 3 is the bookkeeping table; Topic 01 has yeast 90 min and the drone; Topic 04 has meristems; furrow, cell plate, coconut syncytium are in Topic 01). Overclaims on exam need: flag 7.
- Every [NEW] in new-text-F1.md and new-text-F2.md read; the wrong or overclaiming ones are flags 3, 5, 6, 9, 10, 15; the rest are correct and plain.
- Key points: all 43 read against the chapter; issues in flags 2, 6, 11, 12, 16, 19.
- Figures checked against book page images (all 8 figures, 10 cases): 10.1 and 10.2 (p. 595), 10.3, 10.4, 10.5a/b (p. 602), 10.6a/b and 10.7 (p. 609), 10.8 (p. 614). Labels, captions and counts match (10.2 four chromosomes; 10.5 two X-chromosomes per pole against four single chromatids; 10.6 three bivalents / three chromosomes; 10.7 2n 4C, n 2C x2, n 1C x4; 10.8 stages, processes, 2n/n line). Only flag 20.
- Tables checked on page images: p. 618 checkpoint table (app row 3 is R2's fixed wording; rows 1 to 2 match), p. 629/630 drug table (matches, plus the fixers' "(research tool)" and Taxol note).

## What I could not check
- Rendered diagrams: jest was off limits, so I used the SVG dump already on disk (/private/tmp/claude-501/b12svg, written 18:58 after the diagram file's 17:06 change) rendered with qlmanage, without the app fonts. No device or Android check.
- I did not render every text page as an image; I relied on the text layer except for the figure and table pages above (the diff found no garbled passage that needed an image).
- The exam-frequency statements (F Distribution, "asked repeatedly") cannot be verified; they carry the book's label.
