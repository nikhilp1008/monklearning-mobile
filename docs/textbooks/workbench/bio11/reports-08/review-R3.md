# Biology 11 Chapter 8 (Cell: The Unit of Life): third expert review (R3, Opus), whole chapter

Scope: content/textbooks/bio-11-08/topics-1-2.ts, topics-3-4.ts, extras.ts; lib/diagrams/biology-11-08.ts; lib/revise/keypoints-biology-11-08.ts, as they stand after fixers F1 and F2.
Method: own pass first (sentence-level diff of every app string against the book text of pp. 470-532; page images of every figure page; book tables pp. 472-473, 500-501, 511-512 read line by line; every number recomputed; every key checked; every Additional-topic introduction checked against the topics as built; every line of new-text-F1.md and new-text-F2.md checked). Only then R1 and R2 were read and each flag marked NEW or REPEAT.
Nothing in the repo was edited. No tsc, jest or git was run.

Legend: [NEW] = wording we propose (not the book's). Source: book = printed in the book; ours = introduced by a writer or fixer.

## Flags, most serious first

### 1. Assertion-reason items with "both false" as an option (four worked examples) [NEW flag]
Kind: wrong MCQ format / answer letter. Source: book (all four). Confidence: certain (house rule; Topic 01 also clashes with Additional F).
- (a) topics-1-2.ts, Topic 01, Worked examples, NEET assertion-reason (Mycoplasma), p. 478.
  Says now: "Options: (a) both true, R explains A; (b) both true, R does not explain A; (c) A false, R true; (d) both false." ans "A is false, R is true → option (c)."
  Wrong: no "A true, R false" option, a "both false" option, and the same item in Additional F Archetype 4 ("Variant trap") is keyed "Option (d): A is false, R is true", so the chapter gives two letters for one item.
  Fix: options [NEW] "Options: (a) both true, R explains A; (b) both true, R does not explain A; (c) A true, R false; (d) A false, R true." ans [NEW] "A is false, R is true → option (d)."
- (b) topics-1-2.ts, Topic 02, Worked examples, NEET assertion-reason (semi-autonomous), p. 487. Says "(c) A true, R false; (d) both false." Fix: (d) [NEW] "(d) A false, R true." Key (a) unchanged.
- (c) topics-3-4.ts, Topic 04, Whole-chapter worked examples, NEET assertion-reason (aerobic respiration), p. 502. Says "(c) A true, R false; (d) both false." Fix: (d) [NEW] "(d) A false, R true." Key (a) unchanged.
- (d) topics-3-4.ts, Topic 03, Worked examples, NEET assertion-reason (bacterial vs sperm flagellum), p. 496. Says "(c) A false, R false; (d) A false, R true." key "Option (c)" (both false). The standard four options cannot express this key. Fix (rewrite R so the item tests the same trap):
  q [NEW] "<b>High-difficulty.</b> <b>Assertion (A):</b> The flagellum of a bacterium and the flagellum of a sperm cell are structurally identical. <b>Reason (R):</b> The flagellum of a sperm cell contains a 9 + 2 arrangement of microtubules covered by the plasma membrane. Options: <b>(a)</b> both true, R explains A; <b>(b)</b> both true, R does not explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true."
  step 1 [NEW] "<b>Reasoning.</b> Test each clause. A is <b>false</b>: the two are analogous in function but built differently. R is <b>true</b>: the <b>eukaryotic</b> (sperm) flagellum has the 9 + 2 membrane-covered axoneme, while the <b>bacterial</b> flagellum is a bare protein filament with no 9 + 2 core, which is exactly why A fails."
  step 2 [NEW] "The trap is letting the true description of the sperm flagellum persuade you that the bacterial one is built the same way."
  ans [NEW] "Option (d)."
  Key point to match (keypoints, topic 2, kind mistake, why) [NEW]: "In the assertion-reason item the Assertion is false (the bacterial and sperm flagella are not structurally identical) and the Reason is true: only the sperm (eukaryotic) flagellum has a membrane-covered 9 + 2 axoneme."
  (If the founder prefers to keep a "both false" item, keep the book's text; it is then the one non-standard option set in the chapter.)

### 2. Example B.2 final answer still says gene transfer explains the circular DNA; the correction went to the wrong item [REPEAT: R2 flag 11 applied wrongly]
Where: extras.ts, Additional B, Worked examples, NEET "Endosymbiotic Evidence", ans; p. 510. Kind: biology error. Source: book. Confidence: certain.
Says now: "Gene transfer from symbiont to host explains both the circular DNA (ancient prokaryotic heritage) and the reduced genome (evolutionary simplification after symbiosis was established)."
Wrong: gene transfer explains the reduced genome, not the circular DNA (that is the bacterial ancestry). R2 flag 11 was aimed at this "B.2 answer", but F2 rewrote the last sentence of Practice item 4 instead (whose book sentence was correct) and left this answer as printed.
Fix: ans [NEW] "The statement supports rather than undermines the endosymbiotic theory. The bacterial ancestry explains the circular DNA, and gene transfer from symbiont to host explains the reduced genome (evolutionary simplification after symbiosis was established). Mitochondria are symbiotic remnants that retain enough autonomy to divide but depend on the nucleus for most of their proteins."
Optional: restore Practice 4's book last sentence (p. 511): "The “highly reduced” genome is exactly what the endosymbiotic theory predicts for a former free-living organism that became dependent on its host." (The present [NEW] sentence there is not wrong, only unneeded.)

### 3. Figure 8.4 (b) Chloroplast: the "Stroma" leader ends on a granum [NEW]
Where: lib/diagrams/biology-11-08.ts, drawChloro, `s.tag(150, 262, 'Stroma', 176, 162)`; book p. 486. Kind: figure error. Source: ours. Confidence: certain.
The middle granum is centred (180, 154) with 4 thylakoids at y 145, 151, 157, 163 (rx 11, ry 2.6), so the point (176, 162) lies on its bottom thylakoid; in the render the Stroma dot sits on the granum. The book's arrow ends in open stroma.
Fix: anchor the leader in open stroma, e.g. `s.tag(150, 262, 'Stroma', 180, 182)` (inside the inner envelope, clear of the DNA at (136,176) and the starch granule at (226,172)); re-run the layout checks.

### 4. Plasmodesmata and gap junctions: "only" claims left beside R2's fix, now contradicting the table [NEW]
Where: extras.ts, Additional C, Method; table and paragraph; p. 512. Kind: overgeneral claim / internal contradiction. Source: book (and R2 flag 12 applied to one cell only). Confidence: certain.
- Says now (table, gap junction, Function): "...signalling molecules pass between cells; absent in mature plant cells". Wrong: implies gap junctions occur in young plant cells; plants have none. Fix [NEW]: "...signalling molecules pass between cells; not found in plants, which use plasmodesmata instead".
- Says now (Key distinction): "Tight junctions, gap junctions and desmosomes occur only in animal cells; plasmodesmata occur only in plant cells." The table directly above now says "Plant tissues (and some algae)". Fix [NEW]: "<b>Key distinction:</b> Tight junctions, gap junctions and desmosomes are junctions of animal cells; plasmodesmata are the channels of plant cells (and some algae). Questions frequently contrast the two groups."

### 5. Additional D introduction and kalam misstate the chapter [NEW; R2 flag 9's D wording now out of date]
Where: extras.ts, Additional D, kalam and Introduction; p. 515; checked against Topic 03 as built. Kind: false claim about the chapter. Source: ours (R2/F2 wording). Confidence: certain.
Says now: "...and says the SAT chromosome acts as the nucleolar organiser. This additional topic adds the two functional states of chromatin (euchromatin and heterochromatin), ..."
Wrong: after F1's fix, Topic 03 says the nucleolus forms at the SAT chromosome's secondary-constriction region, the nucleolar organiser (the region, not the chromosome, is the organiser); and Topic 03 already names euchromatin and heterochromatin (chromosome-structure paragraph), so D does not "add" them.
Fix kalam [NEW]: "The chapter defines chromatin as DNA wound on histone proteins, names the four chromosome types classified by centromere position, and says the nucleolus forms at a SAT chromosome’s secondary constriction, the nucleolar organiser."
Fix introduction [NEW]: "The chapter defines chromatin as DNA wound on histone proteins, names the four chromosome types classified by centromere position, says the nucleolus forms at a SAT chromosome’s secondary constriction, the nucleolar organiser, and mentions euchromatin and heterochromatin only in passing. This additional topic explains the two functional states of chromatin (euchromatin and heterochromatin), the banding patterns used in karyotyping, and the rDNA of the nucleolus organiser region (NOR), the link between a satellite chromosome and the formation of the nucleolus."

### 6. Additional F: two contradictory labels on the same shares; the R2 label also breaks the house rule [NEW, about R2 flag 15's wording]
Where: extras.ts, Additional F, "The Distribution" (lead-in and "What this means"); keypoints topic 9 remember; p. 520. Kind: unclear/contradictory. Source: ours. Confidence: certain.
Says now: lead-in "(indicative shares; they vary from year to year; the book’s rough estimate of emphasis, not counted from past papers and not official figures)"; two paragraphs later "(the book’s estimate from past papers, not official figures)"; key point "The book’s estimate from past papers, not official figures".
Wrong: the same table is called both "not counted from past papers" and "from past papers"; DECISIONS-B11 item 3 fixes the label as "the book’s estimate from past papers, not official figures".
Fix lead-in [NEW]: "Past NEET papers spread their questions on this chapter across its four topics roughly as follows (indicative shares; they vary from year to year; the book’s estimate from past papers, not official figures):" Keep the other two as they are.

### 7. Topic 03 practice assertion-reason (centrioles in higher plants): key (a) is doubtful [NEW]
Where: topics-3-4.ts, Topic 03, Practice exercises item 5; p. 496 (the book prints no options; the app added them). Kind: wrong MCQ answer (likely). Source: book key, ours options. Confidence: likely.
Says now: "A: Centrioles are not found in the cells of higher plants. R: Higher plants organise their spindle apparatus without a centrosome." a "(a): both true and R correctly explains A."
Wrong: R is a consequence (or a restatement) of A, not its cause: plants build the spindle without a centrosome because they lack centrioles, not the reverse.
Fix [NEW]: a "(b): both are true, but R does not explain A: building the spindle without a centrosome follows from having no centrioles; it is not the reason they are absent."

### 8. Primary wall "thins as the cell matures" [NEW]
Where: topics-1-2.ts, Topic 01, Comparative cell architecture, "The eukaryotic cell wall, by contrast."; p. 475. Kind: biology error. Source: book. Confidence: likely.
Says now: "A young primary wall can still grow and thins as the cell matures, while a tougher secondary wall is laid down toward the lumen."
Wrong: NCERT says the primary wall's capacity for growth diminishes as the cell matures; the wall does not thin.
Fix [NEW]: "A young primary wall is capable of growth, which gradually diminishes as the cell matures, while a tougher secondary wall is laid down toward the lumen."

### 9. "Only true organelles and the nucleus get membranes" (Topic 04 pitfall and its key point) [NEW]
Where: topics-3-4.ts, Topic 04, Top exam pitfalls, item 5 (p. 503); keypoints topic 3, kind mistake, a. Kind: overgeneral claim. Source: book (repeated in our key point). Confidence: certain.
Says now: "Both are membrane-less; only true organelles and the nucleus get membranes." / KP "since only true organelles and the nucleus get membranes".
Wrong: the chapter itself counts ribosomes and centrioles as organelles with no membrane.
Fix pitfall [NEW]: "<b>Adding membranes to inclusion bodies / nucleoid.</b> Both are membrane-less; membranes enclose only the membrane-bound organelles and the nucleus."
Fix KP [NEW]: "Inclusion bodies and the nucleoid carry no membrane (only the membrane-bound organelles and the nucleus do), and inclusion bodies are not part of any endomembrane system"

### 10. Chromosome banding presented as a euchromatin/heterochromatin map [NEW]
Where: extras.ts, Additional D, Method ("Euchromatin vs heterochromatin", "Chromosome banding patterns"), CBSE practice answer; keypoints topic 7 remember; pp. 515-516. Kind: biology error (oversimplified). Source: book. Confidence: likely.
Says now: "it stains pale ... and appears as light bands on a karyotype ... it stains dark and appears as dark bands on a karyotype." and "Each band corresponds to a region of alternating euchromatin (light) and heterochromatin (dark)."
Wrong: G-dark bands are AT-rich, gene-poor, late-replicating euchromatin; constitutive heterochromatin is what C-banding shows. A teacher would not let "dark band = heterochromatin" stand.
Fix banding sentence [NEW]: "Dark G-bands are broadly the more condensed, gene-poor regions and light bands the gene-rich, more active ones; banding is not a simple map of euchromatin and heterochromatin."
Fix Method sentences [NEW]: "...it stains pale with DNA-specific dyes." and "...it stains dark." (drop "and appears as light/dark bands on a karyotype"); CBSE practice answer [NEW] drop "(light bands on a karyotype)" and "(dark bands on a karyotype)"; KP [NEW] "...that stains pale; heterochromatin is densely packed, inactive and stains dark."

### 11. Superlative and frequency claims still in the text [REPEAT: R1 flag 12 softened others, these were missed]
Kind: exam-frequency claim. Source: book. Confidence: certain (house rule).
- Topic 01 pitfall 1 (p. 479): "“Plasma membrane outside” is the single most common slip." → [NEW] "“Plasma membrane outside” is a common slip."
- Topic 01 Exam Relevance (p. 471): "NEET asks 1–2 questions almost every year (the book’s estimate...)" → [NEW] "NEET usually asks 1–2 questions (the book’s estimate from past papers, not official figures)".
- Topic 02 Concept intuition (p. 481): "This single exclusion is one of the most examined facts in the whole chapter." → [NEW] "This exclusion is examined often."
- Topic 03 chromosome paragraph (p. 494): "...becomes a NEET favourite later.)" → [NEW] "...is taken up again in Class 12.)"
- Topic 04 pitfall 2 (p. 503): "The single most repeated trap in the chapter." → [NEW] "A trap that recurs across the chapter."
- Additional F Trap 1 (p. 527): "The most common single error in the chapter." → [NEW] "A common error in this chapter."
- Additional F Trap 4 (p. 528): "This is tested persistently in leucoplast classification questions." → [NEW] "It is a common trap in leucoplast classification questions."

### 12. Cilia: "linked to one another by bridges" [NEW]
Where: topics-3-4.ts, Topic 03, Comparative architecture, "Cilia and flagella."; p. 493. Kind: terminology. Source: book. Confidence: likely.
NCERT: the central tubules are connected by bridges; the peripheral doublets are interconnected by linkers.
Fix [NEW]: "The peripheral doublets are tied to the central sheath by <b>radial spokes</b> and linked to one another by linkers (the two central microtubules are joined by a bridge), while <b>arms</b> projecting from each doublet supply the sliding force that bends the structure."

### 13. Binary fission: "adding new peptidoglycan to the plasma membrane and wall" [NEW]
Where: extras.ts, Additional E, Method, stage 2; p. 518. Kind: biology slip. Source: book. Confidence: certain.
Fix [NEW]: "<b>Cell elongation and segregation:</b> The cell grows longer, adding new plasma membrane and new peptidoglycan wall; the diameter stays constant." (The key point already says "adding new peptidoglycan and membrane".)

### 14. Trap 10: "Both statements are true facts" refers to two quoted false statements [NEW; left by R2 flag 8's edit]
Where: extras.ts, Additional F, Trap 10; p. 528. Kind: unclear. Source: book. Confidence: certain.
The heading quotes the two false beliefs ("Centrioles in plant cells" / "All respiration needs mitochondria"); "Both statements are true facts" reads as endorsing them.
Fix [NEW]: "Both corrections are true facts that NEET tests as traps when students project animal or eukaryotic biology onto plants or bacteria."

### 15. Archetype 1 approach contradicts itself [NEW]
Where: extras.ts, Additional F, Archetype 1, "Approach that cracks it"; p. 521. Kind: unclear. Source: book. Confidence: certain.
Says now: "...read the option list first so you know which statements you need to evaluate. Mark each on your rough sheet before looking at the options."
Fix [NEW]: "Treat each statement as a true/false binary. Glance at the option list first so you know which statements you need to evaluate, then mark each of those true or false on your rough sheet before choosing an option."

### 16. Endosymbiosis: "one membrane from host, one from symbiont" stated as fact [NEW]
Where: extras.ts, Additional B, table row "Double membrane origin", Example B.2 step 3, Practice 3 (iv); keypoints topic 5 remember; pp. 508-510. Kind: biology (dated). Source: book. Confidence: possible.
The outer mitochondrial and chloroplast membranes carry bacterial-type porins and are now usually read as derived from the bacterium's own outer membrane; the host-vesicle account is the classic textbook version.
Fix (table, [NEW]): "Inner membrane from the symbiont; the outer is classically said to come from the host’s engulfing vesicle". Elsewhere keep, or add "(the classic account)".

### 17. Topic 04 new wording: RBC and sieve tube "still cells" beside "containing ribosomes and genetic material" [NEW, about R1 flag 1's wording]
Where: topics-3-4.ts, Topic 04, The cell at a glance, p. 499. Kind: unclear. Source: ours. Confidence: likely.
A mature mammalian RBC has no ribosomes or DNA at all, so the parenthesis covers only the nucleus.
Fix [NEW]: "(a mature mammalian red blood cell loses its nucleus and ribosomes, and a phloem sieve-tube element loses its nucleus, yet both are still cells)".

### 18. Mitochondrion "five regions" [NEW]
Where: topics-1-2.ts, Topic 02, "Mitochondria: the power house."; p. 485. Kind: unclear (non-NCERT). Source: book. Confidence: possible.
Cristae are part of the inner membrane; NCERT speaks of two aqueous compartments.
Fix [NEW]: "The two membranes divide the organelle into two aqueous compartments: the intermembrane space (outer compartment) and the central <b>matrix</b> (inner compartment)."

### 19. Smaller overclaims in Additional topics [NEW, each low]
Source: book unless stated. Confidence: possible.
- A Method (p. 504) "...that form the glycocalyx’s molecular detail" (and KP topic 4): mixes the bacterial glycocalyx layer of Topic 01 with the eukaryotic cell coat. [NEW] "...that form the cell coat on the outer face (in animal cells also called the glycocalyx)".
- A.1 step 4 and KP topic 4 why: "gram-negative cells are more resistant to antibiotics" → [NEW] "more resistant to many antibiotics (such as penicillin)".
- B Method (p. 508): "it gives starch-storing tissues such as potato their white colour": the colour is the starch's, not the colourless plastid's. [NEW] delete the clause, keep "(found in tubers and seeds)".
- D practice 5 (p. 517): constitutive heterochromatin "never transcribed" → [NEW] "rarely transcribed".
- D practice 1: heterochromatin "found at centromeres, telomeres, and secondary constrictions" → [NEW] drop "and secondary constrictions" (active NORs are decondensed).
- D practice 3 (p. 517): "a secondary constriction on acrocentric chromosomes" → [NEW] "a secondary constriction on SAT chromosomes (in humans, the acrocentric chromosomes 13, 14, 15, 21 and 22)".
- E Method (p. 519): cell plate vesicles "fuse at the equator along the plane of the spindle" → [NEW] "fuse at the equator, across the middle of the spindle".
- F graded set lead-in (ours, R2 flag 15): "Answers follow NCERT wording where NCERT gives one." Several answers are not NCERT wording (ATP synthase, β-oxidation). → [NEW] "Answers have been checked against NCERT where NCERT covers the point."

### 20. Stray space before a semicolon [NEW]
Where: extras.ts, Additional B, Practice 2 (CUET) answer. Kind: transcription slip. Source: ours (left when "(plant cells only)" was deleted). Confidence: certain.
Says now: "found specifically in germinating fatty seeds ; additionally". Fix: "found specifically in germinating fatty seeds; additionally".

### 21. Figure 8.1: the cell-wall leader dot touches the plasma-membrane line [NEW]
Where: lib/diagrams/biology-11-08.ts, draw81, wall leader at radius 75 between the wall circle (78) and the 2.6-wide membrane circle (72); p. 474. Kind: figure clarity. Source: ours. Confidence: possible.
In the render the "Cell wall (peptidoglycan)" dot sits on the thick membrane line, so on a phone it reads as pointing at the membrane. Suggest widening the wall band (for example glycocalyx 86, wall 80, membrane 70) and ending the leader at radius 75.
(Also a note, not an error: the cristae in Fig 8.4 (a) are closed white capsules sitting on the inner membrane, as the book draws them; an infolding open to the intermembrane space would be truer if the diagram is ever redrawn.)

### 22. Schwann's nationality: NCERT differs [NEW, information]
Where: topics-1-2.ts, Topic 01, Concept intuition, "Two German scientists tied it together"; p. 471. Kind: NCERT mismatch. Source: book. Confidence: possible.
Historically correct (Schwann was German), but NCERT calls him "a British Zoologist", and a CBSE key may follow NCERT. No change needed; the founder may add [NEW] "(NCERT calls Schwann British; he was German)".

## Earlier flags I believe were applied wrongly or incompletely
- R2 flag 11 (B.2 answer): applied to Practice 4 of Additional B, not to Example B.2's final answer (flag 2 above).
- R2 flag 12 (plasmodesmata "Plant cells only"): only the table cell changed; the "Key distinction" sentence and the gap-junction cell still say "only" / "absent in mature plant cells" (flag 4).
- R2 flag 15 (F label): the new label "not counted from past papers" contradicts the next paragraph's label and DECISIONS-B11 item 3 (flag 6).
- R2 flag 9 (D introduction): its "says the SAT chromosome acts as the nucleolar organiser" no longer matches Topic 03 after R1 flag 8, and D still claims to add euchromatin/heterochromatin which Topic 03 names (flag 5).
- R2 flag 8 (Trap 10): new first sentence written, but the following "Both statements are true facts" left (flag 14).
- R1 flag 12 (exam claims): partial; seven claims remain (flag 11).
- R1 flag 1: its new wording leaves the ribosome claim open for RBCs (flag 17).
All other R1 and R2 flags were checked in the files and are applied as listed in new-text-F1.md and new-text-F2.md, with correct wording.

## NEW or REPEAT
REPEAT: 2, 11. NEW: 1, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22.

## Counts verified
- Topic 01 to 03: 4 worked examples, 5 practice items, 4 MCQs, 4 pitfalls, 1 pro-tip each; Topic 04: 4 worked examples, 4 MCQs, 5 pitfalls, 1 pro-tip; A: 3 examples + 5 practice; B: 3 + 5; C: 3 + 5; D: 2 + 5; E: 2 + 5; F: 6 archetype representatives + the variant trap, 10 traps, 12 graded items, 3 habits. All match the book pages.
- Every MCQ `correct` index and every worked-example key checked against its question (16 topic MCQs, 4 Topic 04 MCQs, 8 A-E examples with options, 12 F graded items, 6 F representatives): all right except flags 1 and 7.
- Numbers recomputed or checked against NCERT: Mycoplasma 0.3 μm, bacteria 3-5 μm, eukaryote 10-20 μm, RBC 7 μm; Hooke 1665, Brown 1831, Schleiden 1838, Schwann 1839, Virchow 1855, Singer-Nicolson 1972, Margulis/Sagan 1967; 70S = 50S + 30S and 80S = 60S + 40S subunits (non-additive noted); mitochondria 0.2-1.0 μm, average 0.5 μm (F1 change, correct per NCERT); RBC membrane 52% protein, 40% lipid; human mtDNA 13 proteins, 22 tRNAs, 2 rRNAs, ~1,500 nuclear-encoded proteins; gap-junction channel 1-2 nm, six connexins per connexon; cocci planes 1/2/3/irregular; F shares 25 + 35 + 25 + 15 = 100; cyclin E-CDK2, cyclin A-CDK2, cyclin B-CDK1. All correct.
- Tables checked cell by cell against the page text: pp. 472, 473, 482 (endomembrane, membrane count, organelle function), 500 (prokaryote/eukaryote, plant/animal), 501 (organelle reference), 504 (transport), 508 (endosymbiosis), 511-512 (junctions), 518 (checkpoints), 520-521 (distribution), 526 (trap pairs). Differences from the book are only the fixers' listed changes.
- Key points: 32 (5 per Topic 01-04, 2 per Additional A-E, 2 for F); each checked against the chapter text. Issues: flags 1(d), 9, 10, 16, 19, 6.
- New wording: every item in new-text-F1.md (1 to 18 and the R2 mirror) and new-text-F2.md (1 to 20 and KP) checked; problems only where listed above.

## Figures checked (book page image against the current render)
Fig 8.1 (p. 474): right; possible clarity point (flag 21). The book's own leaders put "Plasma membrane" on the outer solid ring; the app's order is the correct one.
Fig 8.2 (p. 477): right (head columns, integral protein, glycoprotein and chain, peripheral protein, lateral arrow, faces).
Fig 8.3 (p. 484): right (re-laid vertically; order, cis/trans, two exits, release, pathway line).
Fig 8.4 (p. 486): (a) right; (b) Stroma leader wrong (flag 3).
Fig 8.5 (p. 492): right (nine doublets, central pair in sheath, spokes, dynein arms, membrane, "9 × 2 + 2" line).
Fig 8.6 (p. 495): right (centromere positions, satellite and secondary constriction on the acrocentric, descriptions).
Renders used: the current SVG dump (/private/tmp/claude-501/b12svg/b11-08-*.svg, written after the diagram file was last changed), converted with qlmanage.

## Could not check
- Did not run the diagram dump through jest (the task forbids jest); used the existing SVG dump, which postdates lib/diagrams/biology-11-08.ts.
- Did not run pdfimages over every page; relied on the page images of the six figure pages, the text layer, and the diagram helper's page count (no unnumbered drawings).
- On-device rendering (iOS/Android, the reader's fonts) not checked.

## Summary
22 flags: 20 NEW, 2 REPEAT. Serious (wrong key or format, wrong science taught as fact, figure pointing at the wrong part, or a false claim about the chapter): flags 1 to 10 (10 serious). Seven earlier fixes were applied wrongly or incompletely (R2 flags 8, 9, 11, 12, 15; R1 flags 1 and 12). Transcription against the book is otherwise faithful; every difference found is a listed fixer change.
