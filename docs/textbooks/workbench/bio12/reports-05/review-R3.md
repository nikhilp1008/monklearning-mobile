# Review R3 (third review, Opus): Biology 12 Chapter 5, Molecular Basis of Inheritance, the whole chapter as it now stands

Files reviewed: `content/textbooks/bio-12-05/topics-1-3.ts`, `topics-4-6.ts`, `extras-a-g.ts`, `lib/diagrams/biology-12-05.ts`, `lib/revise/keypoints-biology-12-05.ts`. Book pp. 224 to 293 of `bio12.pdf` / `bio12.paged.txt`. Nothing in the repo was edited; no tsc, jest or git was run.

Method (own pass first, before reading R1/R2):
- Word-level diff of every string in the three topic files against the page-tagged dump (pp. 224 to 249, 250 to 271, 272 to 293), then a sentence-by-sentence fuzzy match (handles the reordering of answers into items and options into lists). Every difference was read; all are recorded exceptions (em dashes, Section numbers, answers moved next to their items, estimate labels) or the fixers' new wording.
- Every block of all 13 topics read in full against the biology; every number, sequence, cross, ratio, probability and fraction recomputed; every printed key checked against its question.
- The eight diagrams rendered from the current source (sucrase-node script calling each diagram's `draw`, then qlmanage) and compared with page images of pp. 227, 229, 237, 244, 246, 252, 260, 267. Page images of pp. 273, 278 and 283 viewed for the scrambled fractions, exponents and tables.
- Every key point (44) read against the chapter text.
- The Additional-topic introductions checked against Topics 01 to 06 as built.
- The fixers' new wording (new-text-F1.md, new-text-F2.md) checked item by item.
Only then R1 and R2 were read and each flag below marked NEW or REPEAT.

## Flags, most serious first

### 1. HGP goal "identify all ~30,000 genes" contradicts NCERT's goal figure; the gene-count note is unclear [NEW]
- Where: `topics-4-6.ts`, Topic 06, Practice exercises, item 1 answer (book p. 270); and the note at the end of "Human Genome Project: salient features" (Topic 06, Key definitions, p. 265, fixer F1 wording).
- Says now (practice): "Any three of: identify all ~30,000 genes; determine the sequence of the 3 billion bp; ..."
- Says now (note): "(NCERT’s figure of about 30,000 genes: the current estimate of protein-coding genes is about 20,000, so a question may print either; answer with the number the question’s own text gives.)"
- What is wrong: NCERT's list of HGP goals reads "Identify all the approximately 20,000–25,000 genes in human DNA"; the 30,000 is NCERT's salient-features figure. A Board answer copying "identify all ~30,000 genes" as a goal departs from NCERT's own goal wording. The note calls 30,000 "NCERT's figure" as if NCERT had only one, and "answer with the number the question's own text gives" does not make sense (if the question gives the number there is nothing to answer).
- Fix (practice answer) [NEW]: "Any three of: identify all the genes in human DNA (NCERT: approximately 20,000–25,000); determine the sequence of the 3 billion bp; store data in databases; improve analysis tools; transfer technologies; address ELSI."
- Fix (note) [NEW]: "(NCERT gives about 30,000 genes among the salient features and approximately 20,000–25,000 in the list of HGP goals; the current estimate of protein-coding genes is about 20,000. In an MCQ, choose whichever of these figures the options offer.)"
- Kind: number / NCERT fidelity. Source: book (practice), ours (note). Confidence: likely (NCERT goal wording from memory of the current edition; certain that the note's last clause is unclear).
- Related: R2 flag 13(a) named NCERT's 20,000–25,000 goal figure but only for Additional topic D; Topic 06 was not changed. R1 flag 2 proposed the note wording.

### 2. "Absence of glucose ... (catabolite repression)" mislabels the glucose effect [NEW]
- Where: `extras-a-g.ts`, Additional topic G, A Graded Practice Set, Q6 answer (book p. 291).
- Says now: "Absence of glucose is a separate, positive-regulation signal (catabolite repression) that modulates but does not block induction."
- What is wrong: catabolite repression is the effect of glucose being present (low cAMP, little CAP activation). Absence of glucose relieves it (high cAMP, cAMP–CAP activates the promoter). The sentence names the opposite condition.
- Fix [NEW]: "Glucose acts through a separate, positive-regulation signal (cAMP–CAP): with no glucose, CAP activation is high and transcription is strong; glucose lowers it (catabolite repression) without blocking induction."
- Kind: biology error. Source: book. Confidence: certain.

### 3. Additional C, Method: "~3172 nucleotides" now disagrees with the fixer's own "3075 with the stop codon" [NEW]
- Where: `extras-a-g.ts`, Additional topic C, Method, "Protein sizes from operon data" (book p. 277; F2 wording).
- Says now: "the mRNA coding region is 1024 × 3 = 3072 nucleotides of sense codons (3075 with the stop codon). Adding leader and trailer UTRs (~100 nucleotides total) gives ~3172 nucleotides for the full mRNA of a message carrying only lacZ."
- What is wrong: once the stop codon is counted, 3075 + ~100 = ~3175. The paragraph now gives two inconsistent totals.
- Fix [NEW]: "Adding leader and trailer UTRs (~100 nucleotides total) gives ~3175 nucleotides for the full mRNA of a message carrying only <i>lacZ</i> (the book adds the UTRs to 3072 and prints ~3172)."
- Kind: number. Source: ours (fixer text on the book's number). Confidence: certain.

### 4. Additional A, Practice 3: "eukaryotic chromosomes require many thousands of replication origins" [REPEAT: R2 flag 12(b) applied wrongly]
- Where: `extras-a-g.ts`, Additional topic A, Practice item 3 question (book p. 274: "hundreds of").
- Says now: "[CUET] Why do eukaryotic chromosomes require many thousands of replication origins while E. coli requires only one?"
- What is wrong: R2's "tens of thousands" is a whole-cell (genome) figure; the fixer put "many thousands" on each chromosome. It also contradicts Example A.3 two items above, which finds a minimum of 105 origins for a 3 × 10<sup>8</sup> bp human chromosome (real human chromosomes carry hundreds to a few thousand; yeast chromosomes tens). The F answer key ("a human cell has many thousands of origins") and the key point are right.
- Fix [NEW]: "[CUET] Why does a eukaryotic chromosome need many replication origins (a human cell has tens of thousands in all) while <i>E. coli</i> requires only one?"
- Kind: number / overstatement. Source: ours (fixer). Confidence: likely.

### 5. Y-STR example: "confirms" the relationship; "any male descendant of the same grandfather" [NEW]
- Where: `extras-a-g.ts`, Additional topic E, Example E.3, steps (i) and (ii) and `ans` (book p. 283).
- Says now: "(i) ... The matching profile confirms the perpetrator shares the same patrilineal ancestry as the suspect: either the suspect himself or a male relative on his direct paternal line." "(ii) ... cannot distinguish between the suspect and his paternal uncle, paternal grandfather, or any male descendant of the same grandfather." Answer: "(i) Confirms patrilineal relationship".
- What is wrong: a match at only three Y-STR loci is consistent with a shared paternal line but does not confirm it: common Y haplotypes are shared by many unrelated men, and Y-STRs are not combined by the product rule. A male descendant of the grandfather through a daughter does not carry his Y chromosome.
- Fix (i) [NEW]: "The matching profile is consistent with the perpetrator being on the suspect’s paternal line: the suspect himself or a male relative on his direct paternal line. With only three loci it does not prove this, since unrelated men can share common Y-STR values."
- Fix (ii) [NEW]: "... or any male-line descendant of the same paternal grandfather."
- Fix `ans` [NEW]: "(i) Consistent with a shared paternal line (not proof); (ii) Cannot distinguish from paternal uncle: Y-STRs are identical within a patrilineage (apart from rare mutations)."
- Kind: biology (overclaim). Source: book. Confidence: likely.

### 6. Band-algebra exclusion rule is incomplete (fixer wording from R2 flag 14) [NEW]
- Where: `extras-a-g.ts`, Additional topic E, Method "VNTR inheritance: the band algebra" (p. 282); same rule in key point topic 10 (first point).
- Says now: "if a band of the child is not in the mother’s profile and also not in the alleged father’s profile (apart from a rare mutation), the alleged father is excluded." Key point: "a band that is in neither the mother’s profile nor the alleged father’s (apart from a rare mutation) excludes the alleged father."
- What is wrong: the rule misses the common exclusion case. Child 7 and 8 kb, mother 7 and 8 kb, alleged father 4 and 9 kb: every child band is in the mother's profile, so the stated rule does not exclude him, yet he is excluded because the child must have one band from the father. The test is on the band left over once the maternal band is assigned.
- Fix (Method) [NEW]: "At each locus, set aside the band the child could have received from the mother; the child’s other band must be in the alleged father’s profile. If it is not (apart from a rare mutation), the alleged father is excluded."
- Fix (key point, same sentence) [NEW]: "Once the band the child could have from the mother is set aside, the other band must be in the alleged father’s profile; if it is not (apart from a rare mutation), he is excluded."
- Kind: unclear / biology. Source: ours (R2 text) on the book's rule. Confidence: certain on the logic.

### 7. RNA world stated as fact in Topic 02 cheat sheet and pitfall [NEW]
- Where: `topics-1-3.ts`, Topic 02, Cheat sheet row "RNA world" and pitfall 4 (book pp. 239 to 240).
- Says now: cheat sheet "RNA = first genetic material <b>and</b> catalyst (ribozyme); DNA evolved from RNA for stability."; pitfall "First ≠ best for storage; RNA’s reactivity is exactly why DNA replaced it as the archive."
- What is wrong: the brief requires the RNA world to be stated as a hypothesis. Section 3.4 of the same topic and the key points already do ("the leading idea", "the argument goes", "a hypothesis, not a settled fact"), and R2 fixed the same "precisely why DNA replaced it" sentence in G; these two lines still say it as fact.
- Fix (cheat sheet note) [NEW]: "hypothesis: RNA as the first genetic material <b>and</b> catalyst (ribozyme); DNA thought to have evolved from RNA for stability."
- Fix (pitfall) [NEW]: "First ≠ best for storage; RNA’s reactivity is thought to be why DNA took over as the archive."
- Kind: biology (overgeneral). Source: book. Confidence: likely.

### 8. "Because a bacterium has no nuclear membrane, the mRNA needs no processing" (wrong cause) [NEW]
- Where: `topics-1-3.ts`, Topic 03, Key processes 3.1, paragraph after the three stages (p. 242).
- Says now: "Because a bacterium has no nuclear membrane, <b>the mRNA needs no processing</b> and translation can begin while transcription is still running: both happen in the same compartment."
- What is wrong: the lack of a nuclear membrane is the reason transcription and translation can be coupled, not the reason the mRNA needs no processing (bacterial genes simply lack introns). NCERT gives the two as separate reasons. Topic 04 "Coupling in prokaryotes" states it correctly.
- Fix [NEW]: "In a bacterium <b>the mRNA needs no processing</b>, and with no nuclear membrane translation can begin while transcription is still running: both happen in the same compartment."
- Kind: biology (misleading). Source: book. Confidence: likely.

### 9. Topic 03 MCQ 1 stem "differs ... only in that" is false as written [NEW]
- Where: `topics-1-3.ts`, Topic 03, Crack the MCQ, Q1 (p. 248).
- Says now: "The coding strand of a gene differs from the mRNA transcribed from that gene only in that:" with key (b) "the mRNA has uracil where the coding strand has thymine".
- What is wrong: the two also differ in the sugar (deoxyribose vs ribose) and strandedness; option (d)'s own nudge says so. The keyed answer is the base-sequence difference only.
- Fix [NEW]: "The base sequence of the coding strand of a gene differs from that of the mRNA transcribed from it only in that:"
- Kind: wrong/unclear MCQ stem. Source: book. Confidence: likely.

### 10. Operon defined as "substrate-controlled"; Jacob and Monod "discovered" [NEW]
- Where: `topics-4-6.ts`, Topic 05, Concept intuition, fourth paragraph (p. 258).
- Says now: "This kind of substrate-controlled cluster of genes, discovered by <b>Jacob and Monod in 1961</b>, is called an <b>operon</b>, and it remains the textbook model of how genes are controlled."
- What is wrong: it reads as a definition of an operon, but repressible operons (trp, listed among the examples in this topic and treated in Additional topic C) are controlled by the end product, not the substrate. Jacob and Monod proposed the operon model (the rest of the chapter says "proposed").
- Fix [NEW]: "A cluster of genes switched together in this way is called an <b>operon</b>; the operon model, proposed by <b>Jacob and Monod in 1961</b> for <i>lac</i>, remains the textbook model of how genes are controlled."
- Kind: biology (overgeneral). Source: book. Confidence: likely.

### 11. Alec Jeffreys "(1985)" [NEW; R1 ruled "fine", I disagree]
- Where: `topics-4-6.ts`, Topic 06, Key definitions "DNA fingerprinting: the essentials" ("Discovered by Alec Jeffreys (1985)") and Cheat sheet "DNA fingerprinting"; `extras-a-g.ts`, G, Traps row "Lalji Singh invented DNA fingerprinting" ("Alec Jeffreys (UK, 1985)"); key point topic 5, second point ("Alec Jeffreys developed it (1985)").
- What is wrong: Jeffreys made the discovery in September 1984; the papers appeared in Nature in 1985. NCERT gives no year. Topic 06 Concept intuition already says "in the 1980s" safely.
- Fix [NEW]: "Discovered by Alec Jeffreys (1984, published 1985)" in Topic 06 and the cheat sheet; "Alec Jeffreys (UK, 1984) discovered it" in the G trap; key point "Alec Jeffreys developed it (1984, published 1985)". Or drop the year everywhere and keep "in the 1980s".
- Kind: date/attribution. Source: book. Confidence: likely.

### 12. "These are standard NEET extensions" for trp operon, Y-STRs and random-match probability [NEW]
- Where: `extras-a-g.ts`, Additional topic C Introduction and Additional topic E Introduction (R2 replacement text, now in the file).
- Says now: "... These are standard NEET extensions (the book’s estimate from past papers, not official figures)."
- What is wrong: the trp operon, repressor kinetics, Y-STR analysis and random-match probabilities are outside the NCERT syllabus that NEET follows. Calling them "standard NEET extensions" tells a student they are NEET content; the estimate label does not cure it.
- Fix (both) [NEW]: "These go beyond NCERT; they are practice in the reasoning that NEET questions on this topic test, not syllabus items."
- Kind: misleading exam claim. Source: book, kept in R2's text. Confidence: likely.

### 13. Topic 06 pitfall 4 now says the same thing twice [REPEAT: R1 flag 10 applied wrongly]
- Where: `topics-4-6.ts`, Topic 06, Common student pitfalls item 4.
- Says now: "<b>Mixing up chromosome extremes.</b> <b>Chromosome 1 = most genes; Y = fewest.</b> Chromosome 1 has the most genes and the Y chromosome the fewest. This counts genes; do not use it to rank the chromosomes by size."
- What is wrong: R1's replacement was added after the book's first sentence instead of replacing the muddled parenthetical, so the fact is stated twice in a row.
- Fix [NEW]: "<b>Mixing up chromosome extremes.</b> <b>Chromosome 1 = most genes; Y = fewest.</b> This counts genes; do not use it to rank the chromosomes by size."
- Kind: transcription/fix slip. Source: ours. Confidence: certain.

### 14. Figure 5.3 Track 2 boxes contradict their own caption and the text [REPEAT: R1 flag 3, founder decision 1 pending]
- Where: `lib/diagrams/biology-12-05.ts`, fig 5.3 case 2 (Track 2), drawn p. 237.
- Says now: box words "No radioactivity in the cells" and "PELLET (not radioactive)", while the caption CAP53_2 now says "most of the radioactivity stays in the supernatant ... and the bacteria carry very little of it", and Topic 02 text, MCQ nudge and key point all say "very little" / "mostly".
- Fix [NEW] (if the founder agrees to change the boxes; the diagram check must change with it): "Little radioactivity in the cells" / "(protein stays outside)" and "PELLET" / "(barely radioactive)".
- Kind: figure error (internal contradiction). Source: book. Confidence: certain.

### 15. Figure 5.8 PCR box and caption wording [REPEAT: R1 flag 1, founder decision 1 pending; one wording inconsistency NEW]
- Where: fig 5.8 box 2 (PCR as step 2, before digestion) and CAP58; Topic 06 procedure step 2.
- The box still shows PCR amplification as step 2 before restriction digestion (founder decision). Separately the caption says "(a modern addition to the book’s steps)" while the text says "(optional, a modern addition to NCERT’s list of steps)": the book's own list includes PCR, so the caption's phrase is wrong.
- Fix (caption) [NEW]: "optional PCR amplification (a modern addition to NCERT’s list of steps) when the sample is tiny".
- Kind: figure / wording. Source: ours (caption). Confidence: certain on the caption phrase.

### 16. "35S" without its superscript [NEW]
- Where: `extras-a-g.ts`, G, Graded Practice Q12 answer, last sentence (F2 wording).
- Says now: "(In the real experiment most of the 35S, about 80 per cent, came off in the supernatant ...)"
- Fix [NEW]: "(In the real experiment most of the <sup>35</sup>S, about 80 per cent, came off in the supernatant and a little stayed with the cells; the book’s schematic shows none inside.)"
- Kind: notation. Source: ours. Confidence: certain.

### 17. Nucleosome core: 147 bp in the Figure 5.1 caption, 146 bp in the text [NEW]
- Where: fig 5.1 caption CAP51 "(the core of about 147 bp)" (F1 flag 18 wording); Topic 01 MCQ 3 nudge and pitfall 2 "~146 bp"; key point topic 0 "about 146 bp".
- Fix [NEW]: CAP51 "(the core of about 146 bp)" to match the chapter (146 to 147 are both quoted in the literature; one value throughout).
- Kind: number (consistency). Source: ours. Confidence: certain.

### 18. Lariat: "in which the intron is circular" [NEW]
- Where: `extras-a-g.ts`, Additional topic B, Practice 5 answer (p. 277).
- Says now: "forms a 2′–5′ bond, creating a loop (lariat) in which the intron is circular."
- What is wrong: the lariat is a loop with a tail (a lasso); the 3′ part of the intron is still linear until the second step, and the excised intron is a lariat, not a circle.
- Fix [NEW]: "forms a 2′–5′ bond, creating a lasso-shaped loop (lariat) in the intron."
- Kind: biology. Source: book. Confidence: likely.

### 19. Cap methylation: "The second nucleotide often has a 2′-O-methyl group" [NEW]
- Where: Additional topic B, Method, "The cap structure" (p. 275).
- What is wrong: ambiguous; the 2′-O-methylation (cap 1, cap 2) is on the first and often the second transcribed nucleotides next to the cap. Read with m<sup>7</sup>G as nucleotide 1 it is right; read as "the second transcribed nucleotide" it misses the commonest site.
- Fix [NEW]: "The first one or two transcribed nucleotides next to the cap often carry a 2′-O-methyl group."
- Kind: unclear. Source: book. Confidence: possible.

### 20. trp operon "codes for the five enzymes of tryptophan biosynthesis" [NEW]
- Where: Additional topic C, Example C.1 question (p. 277).
- What is wrong: the trp operon has five structural genes (trpE, D, C, B, A); their polypeptides make up three enzymes (anthranilate synthase, from E and D; C; tryptophan synthase, from B and A).
- Fix [NEW]: "The <i>trp</i> operon of <i>E. coli</i> has five structural genes for the enzymes of tryptophan biosynthesis."
- Kind: biology (detail). Source: book. Confidence: possible.

### 21. "Protein contains sulphur but no phosphorus" stays unqualified in the text while the key point is qualified [NEW, low]
- Where: Topic 02 Key processes 3.3 bullet 1; Topic 02 assertion–reason R and its solution ("only DNA has phosphorus"); high-difficulty solution ("P is unique to DNA and S is unique to protein"); G Q12 answer.
- What is wrong: some proteins carry phosphate groups (phosphoproteins); the key point was changed to "no phosphorus in its amino acids" (R1), the text was not.
- Fix (3.3 bullet, the one place where it is a statement of fact) [NEW]: "DNA contains <b>phosphorus but no sulphur</b>; the phage’s protein contains <b>sulphur but (unlike DNA) essentially no phosphorus</b>." Leave the A-R item as the standard NEET wording.
- Kind: biology (overgeneral). Source: book. Confidence: possible.

### 22. Example C.2 answer line still says "(i) 3072 nucleotides" for the "minimum ... coding region" [REPEAT: R2 flag 8, applied to the steps only]
- Where: Additional topic C, Example C.2 `ans`.
- Fix [NEW]: "(i) 3072 nucleotides of sense codons (3075 with the stop codon); (ii) 138 nucleotides (the book’s UTR figure; strictly 135 plus the 3 of the stop codon)."
- Kind: number. Source: book. Confidence: likely.

### 23. "which is chemically impossible" [NEW, low]
- Where: Additional topic A, Practice 1 answer and F answer A1.
- Says now: "the polymerase would have to extend 3′→5′ toward the fork, which is chemically impossible."
- What is wrong: it is impossible for DNA polymerase (the enzyme only adds to a free 3′-OH), not for chemistry in general.
- Fix [NEW]: "... which no DNA polymerase can do (it adds nucleotides only to a free 3′-OH)."
- Kind: overgeneral. Source: book. Confidence: possible.

### 24. Topic 04 A-R solution: "Students who choose (c) wrongly assume a protein enzyme forms the peptide bond" [NEW, low]
- Where: Topic 04, Worked questions, assertion–reason solution (p. 254).
- What is wrong: a student who thinks a protein forms the bond would judge A false as well, which (c) "A true, R false" does not express.
- Fix [NEW]: "Students who choose <b>(c)</b> accept that the ribosome is a ribozyme but doubt that the 23S rRNA is the catalyst: a common misconception this question targets."
- Kind: unclear explanation. Source: book. Confidence: possible.

### 25. Topic 03 Limiting conditions: "never randomly" [NEW, low]
- Where: Topic 03, Concept intuition, Limiting conditions (p. 242).
- Says now: "it begins and ends at defined signals (promoter and terminator), never randomly."
- Fix [NEW]: "it normally begins and ends at defined signals (promoter and terminator), not at random."
- Kind: overgeneral ("never", brief's list). Source: book. Confidence: possible.

### 26. Topic 04: "exactly as Francis Crick predicted before anyone had seen one" next to "tRNA had already been spotted ... sRNA" [NEW, low]
- Where: Topic 04, Concept intuition, third paragraph (p. 250).
- What is wrong: the two sentences read as a contradiction. Crick predicted an adapter (1955) before sRNA was shown to be it; sRNA was known before the code was worked out (NCERT).
- Fix [NEW]: "That adapter is <b>tRNA</b>, exactly as Francis Crick predicted before its role was known."
- Kind: unclear. Source: book. Confidence: possible.

### 27. Figure 5.6: "GAA" and "mRNA" run together on one line [NEW, low]
- Where: fig 5.6; the "mRNA" label (x 346, anchor end) sits on the codon line right after GAA, so it reads "GAA mRNA"; the book puts "mRNA" above the arrow at its right end.
- Fix: move the "mRNA" label above the arrow (as on p. 252) or after the 3′ end. Kind: figure layout. Source: transcription. Confidence: possible (seen in the Mac render; check on the device).

## Earlier flags I believe were applied wrongly or incompletely
- R1 flag 10 (Topic 06 pitfall 4): new sentence added beside the old one: duplicated (my flag 13).
- R1 flag 2 (gene count note): wording unclear, and NCERT's own goal figure (20,000–25,000) missed; Topic 06 practice 1 still says "identify all ~30,000 genes" (my flag 1).
- R2 flag 12(b): "many thousands" origins put on each chromosome instead of the cell (my flag 4).
- R2 flag 14: new band rule misses the case where all the child's bands are in the mother's profile (my flag 6); also in key point topic 10.
- R2 flags 2(d), 2(f): "standard NEET extensions" kept in R2's own replacement text (my flag 12).
- R2 flag 8: stop-codon nuance added to the method and steps, but the method total (3172) and the C.2 `ans` were not brought in line (my flags 3 and 22).
- R1 flag 18 / F1 flag 18: 147 bp in the caption against 146 bp elsewhere (my flag 17).
- R1 flag 1 / F1: the Figure 5.8 caption says "a modern addition to the book’s steps"; the book lists PCR, so it should say NCERT’s (my flag 15).
Everything else that R1 and R2 asked for is in the file, and the fixers' other new wording (listed in new-text-F1.md and new-text-F2.md) is correct, plain and not overclaiming: I checked each item.

## Counts verified
- Topics 01 to 06: 8 parts each; 4 worked questions, 5 practice items, 4 MCQs, 4 pitfalls, 1 pro-tip each; cheat sheets 6, 6, 6, 7, 6, 5 rows, one memory aid each. MCQ keys (index) T01 2,2,2,1; T02 2,2,1,1; T03 1,1,2,1; T04 1,2,1,1; T05 2,2,1,1; T06 1,2,2,0: each the book's "Correct:" and the only correct option (stem of T03 Q1 aside, flag 9). Match keys T01 to T03 A–2 B–4 C–1 D–3; T04 and T05 A–2 B–1 C–4 D–3; T06 A–3 B–1 C–2 D–4: all correct. All six A–R items in Topics 01 to 06 and the two added in G have the fourth option "A false, R true"; all keyed (a), correct.
- Additional A to G: 20 worked examples, 37 practice items, F 5 parts; no figure; G traps 9 rows, distribution 7 rows. Graded keys Q1 (c), Q2 (d), Q3 (a), Q4 (c), Q5 (c), Q6 (b), Q7 (b), Q8 (b), Q9 (b), Q11 (b), Q12 (a); archetypes (a), (a), (c), (d), (a): all correct.
- Recomputed and correct: 22 % C gives A = 28 %; 20 % C gives A = 30 %; 30 % A gives C = 20 %; 3 × 10<sup>8</sup> × 0.41 nm = 0.123 m; Meselson–Stahl generation 2 = 2 hybrid + 2 light (1 ∶ 1), generation 3 = 8 duplexes, 16 strands, 2 heavy, 2 hybrid + 6 light (light ∶ hybrid 3 ∶ 1); 4<sup>2</sup> = 16, 4<sup>3</sup> = 64 = 61 + 3; coding 5′–ATGCAGTAC–3′, template 3′–TACGTCATG–5′, mRNA 5′–AUGCAGUAC–3′; 1500 nt = 500 codons, 499 amino acids; 153 nt = 51 codons, 50 amino acids; AUG GCA UAA = 2; AUG CCU UAA = 2; anticodons 3′–UAC–5′ (5′–CAU–3′), 3′–CGU–5′ (5′–UGC–3′); sickle cell GAG → GUG (mRNA), GAG → GTG (coding strand), Glu → Val; A.3 50 × 3600 × 8 = 1,440,000, × 2 = 2,880,000, 3 × 10<sup>8</sup> ÷ 2.88 × 10<sup>6</sup> = 104.2 → 105, 833 h ≈ 35 days; A practice 5 1 bond, 11; B.3 200, 150, 50; B practice 4 10 broken, 10 formed; C 1024 × 3 = 3072 (3075), 3210 − 3072 = 138, 500 × 3 = 1500 (1503); D 2968 ÷ 249 = 11.9, 231 ÷ 57 = 4.05, ratio 2.94, 249 ÷ 57 = 4.37, 2968 ÷ 231 = 12.8; 30,000 × 27,000 = 8.1 × 10<sup>8</sup>, ÷ 3 × 10<sup>9</sup> = 0.27; 30,000 × 1500 = 4.5 × 10<sup>7</sup> = 1.5 %; 281 ÷ 48 = 5.85; 25,500 ÷ 27,000 = 94.4 %; E (1/100)<sup>5</sup> = 10<sup>−10</sup>; 50<sup>6</sup> = 1.5625 × 10<sup>10</sup>, reciprocal 6.4 × 10<sup>−11</sup>; 8 ÷ 15.6 = 0.51 expected matches; (1/20)<sup>4</sup> = 1/160,000 = 6.25 × 10<sup>−6</sup>; all band items (E.1 not excluded; practice 1 father gives 7 kb; practice 5 A → Y, B → X, swapped).
- Key points: 44 (5 a topic for Topics 01 to 06, 2 a topic for A to F, 2 for G); all true against the text except the band rule (flag 6) and Jeffreys' year (flag 11). Em dashes: 0 in all five files.
- Transcription: no missing, duplicated or mis-copied sentence, number or table cell found in any of the three topic files; every word-level difference is a recorded exception or a fixer's listed wording.

## Figures checked (rendered from current source; compared with the page)
- 5.1 (p. 227): six levels and sizes, ~200 bp + H2A H2B H3 H4, 8 beads, 7 H1: matches. Caption: flag 17.
- 5.2 (p. 229): template polarities, Okazaki fragments 5′ at the fork side and 3′ at the tip, 2 ligase nicks, leading strand 5′ → 3′ toward the fork, duplex 3′/5′: correct.
- 5.3 (p. 237): two tracks as two cases, isotopes where the page puts them; Track 2 boxes against caption: flag 14.
- 5.4 (p. 244): coding 5′→3′ above, template 3′→5′ below, promoter (−35 / −10), terminator, transcript 5′ free, 3′ at the enzyme: correct.
- 5.5 (p. 246): E1 I1 E2 I2 E3 I3 E4, three steps, three removed introns: matches.
- 5.6 (p. 252): AUG UUU GCC GAA, 3′-AAA-5′ (Phe) in P, 3′-CGG-5′ (Ala) in A, Met–Phe chain, 23S rRNA: correct; label layout flag 27.
- 5.7 (p. 260): i, P, O, z, y, a; repressor on O (a); repressor + allolactose released (b): matches.
- 5.8 (p. 267): seven steps, wells (−) top, (+) bottom, membrane and probe: matches the page; PCR order and caption wording flag 15.

## Could not check
- The app's own rendering (fonts, italics, wrapping) on a phone; the Mac render does not show the italic face, so gene-symbol italics in figures were checked in the source (they are `<i>`/`italic: true`).
- NCERT's text is not on this machine: the NCERT goal figure (flag 1), Jeffreys' 1984 date (flag 11), the trp enzyme count (flag 20) and the cap methylation sites (flag 19) are from my knowledge, with the confidence given.
- Page images were viewed for the eight figure pages and pp. 273, 278, 283 only; other pages were compared through the text dump (tables included, which matched cell for cell).
- No jest, tsc or eslint run (task rule); the diagram self-checks were not run.

## Overall judgement
The transcription is faithful and the arithmetic, sequences, keys and figures are right. The two earlier reviews and their fixes removed most of the book's overclaims. What remains is a small set of real errors (the catabolite-repression mislabel in G Q6, the HGP goal figure, the incomplete exclusion rule, the Y-STR "confirms"), a few places where the fixers' own wording introduced inconsistencies (3172 vs 3075, chromosomes vs cell for origins, the duplicated pitfall, 146 vs 147, the "book's steps" caption, the bare 35S), and RNA-world-as-fact lines that the earlier passes missed in Topic 02. None changes an MCQ key. After flags 1 to 13 are applied (and the founder decides 14 and 15) the chapter is fit to ship.

Summary: 27 flags; 22 NEW, 5 REPEAT (4, 13, 14, 15 partly, 22); 7 serious (1 to 7).
