# Biology 11 Ch 16, Topics 01-03 (pp. 945-969): writer 1 report
File: content/textbooks/bio-11-16/topics-1-3.ts (export TOPICS). Test run (jest-serial, book-rules + book-chapters, narrow): only failure is "draws only figures that exist" naming b11-16-fig-16.1 to 16.6 (undrawn, diagram agent's; 16.6 is Topic 04). eslint clean.

## Boundaries (confirmed on page images)
Topic 01 pp. 945-952 (starts top of p. 945 under the chapter heading; p. 949 is the figure plate); Topic 02 pp. 953-961 (title breaks after "Excretory", joined; p. 956 and 958 plates); Topic 03 pp. 962-969 (p. 965 plate; p. 969 holds only the last cheat-sheet bullet, the mnemonic). No difference from the brief.

## Counts (8 parts each: Concept intuition, Key ..., Comparative/Structural/Physiological ..., Worked examples, Practice exercises, Crack the MCQ, Common student pitfalls and pro-tips, Cheat sheet)
- 01: 5 ex, 5 practice, 5 MCQ (correct idx 1,2,3,3,1 = printed (b),(c),(d),(d),(b)), 4 pitfalls, 1 pro-tip, 1 table (7 rows), cheat sheet 10 rows + 1 aid.
- 02: 4 ex, 5 practice, 4 MCQ (1,3,2,0 = (b),(d),(c),(a)), 4 pitfalls, 1 pro-tip, modes table, 3 `def`, 2 `proc` (Frameworks A, B), 8 cheat rows + 1 aid.
- 03: 4 ex, 5 practice, 4 MCQ (1,2,0,3 = (b),(c),(a),(d)), 4 pitfalls, 1 pro-tip, 11 `def`, 1 `formula` (NFP), 6 cheat rows + 1 aid.
- Options are printed (a)-(d) in this chapter (not (1)-(4)); kept as printed, plain (the book does not bold them).

## Figures (all vector, pdfimages lists no raster image on pp. 945-969)
b11-16-fig-16.1 (caption p. 948, plate p. 949, Topic 01, after "Osmoregulation vs excretion"); 16.2 (caption p. 955, plate p. 956, Topic 02 after gross plan); 16.3 and 16.4 (captions p. 957, plate p. 958, Topic 02 after Framework B); 16.5 (caption p. 964, plate p. 965, Topic 03). No unnumbered drawing: text pages hold only rules and tables (judged on page images 945-948, 950-955, 957, 959-964, 966-969; plates 949, 956, 958, 965 hold exactly the numbered figures). Plate labels read from the text dump: 16.5 shows 300, 600, 900, 1200 mOsm/L (cortex, outer medulla, inner medulla).

## Exceptions I took
- Em dashes (about 110, all pages): colon, comma, brackets or semicolon; none changes sense. Tags: "NEET High-Difficulty — Assertion-Reason / multi-statement / numeric + reasoning" written with a colon. Framework headings "Framework A — ..." written "Framework A: ...". Mnemonic labels "Mnemonic — X" written "Mnemonic: X" or "Mnemonic (X)".
- Cross-references: p. 945 "next sub-topics" -> "next topics"; p. 947 "from Sub-topic 2" -> "from Topic 02"; "this subtopic" (pp. 946, 955) -> "this topic"; p. 948 "Sub-topics 2 and 3" -> "Topics 02 and 03"; p. 953 "NEET subtopic" -> "NEET topic", "Sub-topic 3" -> "Topic 03"; p. 957 "Sub-topic 3" -> "Topic 03", "Sub-topic 4" -> "Topic 04"; p. 962 "Sub-topic 2" (twice) -> "Topic 02", "this subtopic" -> "this topic"; p. 962 "We'll unpack the machinery in Section 3" -> "...in the Physiological mechanisms and regulatory pathways part"; p. 964 "Sub-topic 4" -> "Topic 04".
- Exam labels added (the book's estimate from past papers, not official figures): Exam Relevance pp. 945, 953, 962; p. 960 Q2 "single most-tested trap in the chapter".
- Inline " - " lists and numbered runs -> `<br>• ` / `<br>1.` lines; Framework A and B -> `proc`; lead "(2 marks)", "(Match the Column)", "(Statement type)" -> bold lead of `q`; match-the-column tables written as labelled lists (Column I: (A) ...; Column II: (i) ...); "Answer:" paragraphs of Ex 3 (Topic 01 and 03) and Ex 1 (Topic 01) are `ans` (Topic 03 Ex 3 remark after is the step); other examples print the answer inside the solution sentence, so `ans: ''` and nothing composed.
- kalam: Topic 01 and 02 are book sentences cut at a clause ("What changes across the animal kingdom is not the problem but the plumbing used to solve it"; "The form an animal “chooses” is decided by one ruthless trade-off: toxicity versus water cost"), Topic 03 a whole sentence.
- NFP: a `def` ("the effective outward pressure driving filtration:") followed by a `formula` block; "where" dropped, legend lines are symbol = meaning.
- Mnemonic bullets (Topics 01, 02, 03) are in the cheat sheet in the book; put in `aids`. Cheat-sheet sub-bullets are rows starting "– ". Boxed formula on p. 968 is layout only.
- MCQ closing sentences appended once to `solution` (Topic 01 Q1 "All distractors are other groups' organs", Q2, Q4). Wrong options the book does not explain, nudge null: Topic 01 Q2 (a,b,d), Q4 (a,b,c); Topic 02 Q4 (b,c,d); Topic 03 Q3 (b,c,d). Topic 01 Q3 (a,b,c) share one nudge, Topic 02 Q2 and Topic 03 Q1, Q4 grouped nudges are repeated per option as the book states them together.
- No A-R option lists had to be added: every A-R item prints the four options and the fourth is correctly "A false, R true" (pp. 950, 959, 960, 968). Practice items have no A-R.
- Italics: scientific names only (Hydra, Amoeba, Paramecium, Planaria, Amphioxus); dropped emphasis italics, and "dhaba", "sabzi mandi", NaCl.
- Value-unit pairs joined with a no-break space. "Tip:", "Presentation tip:" labels bolded (printed italic).

## False "chapter never covers X" claims
None on these pages (no Additional-topics introduction here; that is writer 2).

## Numbers recomputed
125 mL/min x 1440 = 180,000 mL = 180 L/day OK. Renal blood flow 1100-1200 mL/min over cardiac output ~5 L/min is 0.22-0.24, "one-fifth" is approximate (stacked 1 over 5 in the cheat sheet, p. 961, dump printed "51"). (180 - 1.8) over 180 = 178.2/180 = 0.99 OK (1.8/180 = 1%). NFP 55 - (30 + 15) = +10 OK; 40 - 45 = -5 OK. Kidney 10-12 x 5-7 x 2-3 cm, 120-170 g match NCERT. 300 to 1200 mOsm/L matches NCERT. Glucose threshold ~180 mg/dL OK.

## Suspected book errors (page, exact words, why / correction)
1. pp. 962, 968 "about 1-1.8 litres" / "~1-1.8 L urine/day": NCERT 1-1.5 L (1.8 is what 99% of 180 L leaves). Errata known; copied.
2. p. 955 "Renal (Malpighian) corpuscle = glomerulus (a tuft of capillaries) cupped inside the double-walled Bowman's capsule": the corpuscle is glomerulus plus Bowman's capsule (the cheat sheet p. 961 says so). Write "= glomerulus + Bowman's capsule: the glomerulus (a tuft...) cupped inside...".
3. p. 955 Framework B step 2 "Medulla: Loop of Henle (dips down into the medulla and loops back up)" and Section 6 Q on zones, p. 961 "loop of Henle in medulla": only juxtamedullary loops reach the medulla; cortical nephron loops are mostly in the cortex (the book itself says "barely enter the medulla"). Add "(in juxtamedullary nephrons)".
4. p. 955 "All three wastes trace back to deamination of amino acids" and pp. 953/961 "protein (amino-acid) metabolism only": uric acid in humans also comes from purine (nucleic acid) breakdown, creatinine from muscle creatine. Say "mainly".
5. p. 953 "Birds, reptiles and insects ... uricotelic": aquatic turtles, crocodilians are largely ammonotelic/ureotelic; "most".
6. p. 964 "Constricting the efferent arteriole ... raises GFR" and p. 967 Practice 4 "GFR increases" and p. 968 pitfall "Efferent constriction → GFR up": true for mild constriction; marked constriction cuts renal blood flow and lowers GFR. Add "mild".
7. p. 964 "Ascending limb ... actively pumping out Na+/salt": only the thick ascending limb pumps actively; the thin limb is passive (NCERT: "actively or passively").
8. p. 964 Step 3 "In the DCT and collecting duct the tubule actively adds H+, K+ and NH3": secretion also occurs in the PCT (organic acids, H+, NH3); and p. 968 Q1 explanation "secretion is always the last fine-tuning step": reabsorption and secretion are interleaved along the tubule; "sequence of processes" is a teaching order.
9. p. 948 "Mixing these up is the single most common conceptual error on this topic", p. 960 "single most-tested trap in the chapter", p. 961 "answer a startling number of NEET questions", p. 962 "single most heavily examined part of the chapter", pp. 953/962 "almost every year": unsupported superlatives/frequencies (labelled where noted above, others copied unlabelled: p. 948, p. 961).
10. p. 947 "Why the trend tracks habitat..." "vertebrates went furthest, building a kidney that can produce urine far more concentrated than blood": only mammals (and birds, less) concentrate urine above plasma; fishes and amphibians do not. Also the seven-step "trend" is a teaching sequence, not a phylogeny (Malpighian tubules and green glands are parallel arthropod solutions; flame cells also in Amphioxus). Add "mammals and birds".
11. p. 947 "Protonephridia ... the first true excretory structures"/"Nephridia ... real nitrogenous-waste removal" and p. 948 Ex 2 trap "(a) annelids → nephridia": some annelids have protonephridia (table p. 946), so option (a) is not strictly wrong; question is only safe as "flame cells are the excretory structures of flatworms".
12. p. 948 "A flame cell is a single hollow cell": a protonephridium is a flame cell plus a tubule cell(s); minor.
13. p. 947 "the kidney ... packs roughly a million nephrons into each ... incomparably more organised than anything below it": a million is the human figure; fish and amphibian kidneys have far fewer nephrons.
14. p. 954 table "Ammonotelism ... aquatic insects" and "Uricotelism ... land snails": acceptable; "Bony fishes" generalisation (some bony fish make urea). Left.
15. p. 961 cheat sheet mnemonic "Cooks Prepare Delicious Dishes → Cortex: PCT, DCT": four words for three cortical segments (corpuscle, PCT, DCT); the fourth word maps to nothing. Mnemonic as printed.
16. p. 955 "Renal blood flow ... roughly one-fifth of the cardiac output": 1100-1200 of ~5000 is 22-24%; fine as NCERT's "roughly one-fifth".
17. p. 957 JGA "formed where the afferent arteriole touches the DCT": fine (NCERT), noted only because the cheat sheet of Topic 04 may repeat it.
18. p. 960 Q1 (a) explanation: "Malpighian body/corpuscle" for renal corpuscle is correct; the distractor reasoning is fine.
19. p. 963 "Obligatory reabsorption ... PCT ( ≈ 70-80% of electrolytes, all nutrients, most water)": NCERT same; H's table (65-70%) is writer 3's.
20. p. 954 table (errata resolved): reads "many marine cartilaginous fish" as required.
21. p. 967 Part B "Seawater is hyperosmotic to most body fluids": marine bony fish are hypoosmotic to seawater; sharks near-isosmotic by urea and TMAO. Fine as written; "(or slightly exceed)" is correct.
22. p. 945 "Hydra (Coelenterata)": phylum now Cnidaria; keep NCERT's Coelenterata. Name currency only.

## Could not check / unsure
- Plate pages 949, 956, 965 not viewed as images (labels read from the text dump; the diagram agent draws them). Fig. 16.5 plate shows 900 mOsm/L between outer and inner medulla.
- "organ ↔ animal-group" (p. 945) uses U+2194, used elsewhere in Biology 11; the font test was not part of my run.
- Hindi words dropped from italics; scientific "Platyhelminthes", "Porifera", "Coelenterata" upright (phyla).
