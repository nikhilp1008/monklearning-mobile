# Biology 11 Ch 17, reviewer 3 (third independent review): the whole chapter as it now stands

Scope: content/textbooks/bio-11-17/topics-0-2.ts, topics-3-4-extras-a-b.ts, extras-c-g.ts (Topics 00 to 04, Additional A to G); lib/diagrams/biology-11-17.ts (Figures 17.1 to 17.5); lib/revise/keypoints-biology-11-17.ts. Edited nothing in the repo; no tsc, jest or git.

Method (own pass first, before reading R1/R2): (1) word-level diff script of every string in the three content files against the book text pp. 1012 to 1073 (23,914 book words vs 23,819 app words, 20,878 in equal runs; every non-equal run read: they are the allowed liberties, the table/option re-ordering, and the fixers' [NEW] wording); (2) every block read for biology, against NCERT Class 11 Locomotion and Movement; (3) page images rendered for pp. 1016, 1021, 1023, 1030, 1036, 1041, 1043, 1054, 1058; (4) our five figures rendered to SVG/PNG with a throwaway node + sucrase script in the scratchpad (no jest) and compared with the book figures; (5) every number, match, order, A-R key and MCQ key recomputed; (6) every Additional-topic introduction checked against Topics 00 to 04 as built; (7) every line of new-text-F1.md and new-text-F2.md checked. Then R1 and R2 read and each flag marked.

Overall: transcription is faithful (no dropped, duplicated or altered book sentence found; the R1 duplicated-stem slip is fixed). All keys and arithmetic recompute. Most of R1/R2's fixes are right. Remaining problems: one NCERT-term error (F-actin "fibrous") in two places, an overgeneral "never" in Topic 00, two fixer wordings that are themselves wrong (calcium logistics; "the causes of fatigue are new"), an internal contradiction in the tetanus definition, two figure points the earlier reviews passed, and a set of smaller items.

## FLAGS, most serious first
Format: Where | says now | what is wrong | fix ([NEW] = our wording) | kind | source | confidence | NEW/REPEAT

### 1. F-actin called "fibrous" (NCERT: "filamentous")  [NEW]
Where: Topic 01, Crack the MCQ Q3 solution (p. 1025); Additional G, The Traps item 4 (p. 1069).
Says: "G = globular monomer; F = fibrous (helical) polymer." and "G = <b>Globular</b> monomer; F = <b>Fibrous</b> polymer."
Wrong: NCERT names it F (filamentous) actin ("Each actin (thin) filament is made of two 'F' (filamentous) actins helically wound ... polymer of monomeric 'G' (Globular) actins"). NEET can ask the expansion; "fibrous" will cost the mark.
Fix [NEW]: T01 Q3 solution: "G = globular monomer; F = filamentous (helical) polymer." G trap 4: "G = <b>Globular</b> monomer; F = <b>Filamentous</b> polymer." (Key points say only "F the polymer": no change.)
Kind: nomenclature / biology error. Source: book. Confidence: certain.

### 2. Topic 00: "muscular movement is never the muscle acting alone ... Remove any one component and movement fails"  [NEW]
Where: Topic 00, Mechanisms and examples, paragraph "Crucially, ..." (p. 1016).
Says: "Crucially, muscular movement is never the muscle acting alone: it is a <b>system</b>. The muscle supplies the force, the <b>skeleton</b> provides the rigid levers, and the <b>joints</b> provide the pivots ... Remove any one component and movement fails: a muscle with nothing to pull on, or a bone with no joint, produces nothing."
Wrong: true only of skeletal muscle. The same topic counts the heartbeat and the churning gut as muscular movement (cardiac and smooth muscle), which need no skeleton or joint. An overgeneral "never" of the kind the founder flags.
Fix [NEW]: "Crucially, skeletal-muscle movement is never the muscle acting alone: it is a <b>system</b>. The muscle supplies the force, the <b>skeleton</b> provides the rigid levers, and the <b>joints</b> provide the pivots about which those levers swing. Remove any one component and that movement fails: a muscle with nothing to pull on, or a bone with no joint, produces nothing. (Smooth and cardiac muscle, which move the gut and the heart, need no skeleton.)"
Kind: biology error (overgeneral). Source: book. Confidence: likely.

### 3. Topic 02 "Calcium logistics" (fixer F1 wording from R1 flag 8): cardiac share overstated, and an exam claim  [NEW; R1 flag 8 applied with a wording that is itself wrong]
Where: Topic 02, Key mechanisms, paragraph "Calcium logistics differ by muscle type." (p. 1029).
Says: "Smooth and cardiac muscle have a less extensive SR, so they draw a major part of their Ca<sup>2+</sup> from the <b>extracellular fluid</b>, a contrast NEET likes to test directly."
Wrong: (a) in human cardiac muscle the Ca<sup>2+</sup> entering from the extracellular fluid is the smaller share (roughly a quarter); it triggers a larger release from the SR. "A major part" is right for smooth muscle only. (b) "a contrast NEET likes to test directly" is an unsupported exam claim on content NCERT does not cover (NCERT does not discuss the Ca<sup>2+</sup> source of smooth or cardiac muscle).
Fix [NEW]: "Smooth and cardiac muscle have a less extensive SR and also take in Ca<sup>2+</sup> from the <b>extracellular fluid</b> (in smooth muscle a large share; in cardiac muscle a smaller share that triggers further release from the SR). This comparison goes beyond NCERT."
Kind: biology error / unsupported claim. Source: our wording (R1's proposal, applied by F1). Confidence: likely.

### 4. Additional A introduction: "the causes of fatigue are new"; Additional B introduction: fatigue "named only in passing"  [NEW; R2 flags 1 and 2 applied with a wording that is partly wrong]
Where: Additional A, Introduction p. 1 (p. 1047); Additional B, Introduction (p. 1050).
Says (A): "graded muscle responses (Topic 02 gives recruitment and summation in one paragraph; the phases of a twitch, tetanus and the causes of fatigue are new)". (B): "This topic develops it: the phases of a twitch, summation, tetanus and fatigue, which the chapter names only in passing (and tetanus not at all)."
Wrong: Topic 02 already gives the cause of fatigue (lactic acid from anaerobic respiration, "the chemical basis of muscle fatigue"), oxygen debt, and an A-R practice item on it; Topic 02 is NCERT's own account. Only the finer causes (phosphocreatine, Pi, H<sup>+</sup>, transmission failure) are new.
Fix [NEW] (A): "(Topic 02 gives recruitment and summation in one paragraph and lactic acid as the cause of fatigue; the phases of a twitch, tetanus and the finer causes of fatigue are new)". (B): "This topic develops it: the phases of a twitch, summation and tetanus, which the chapter names only in passing (and tetanus not at all), and the causes of fatigue beyond the lactic acid that Topic 02 gives."
Kind: false "the chapter never covers". Source: our wording. Confidence: certain.

### 5. Tetanus defined as "cannot relax at all", then incomplete tetanus has partial relaxation  [NEW]
Where: Additional B, Method, "Tetanus" bullet (p. 1050); key point topic 6, first Remember point.
Says: "<b>Tetanus</b>: when stimuli arrive so rapidly that the muscle cannot relax at all between them, the individual twitches fuse into a smooth, sustained maximal contraction. Two types: ... <b>Incomplete (unfused) tetanus</b>: ... with partial relaxation between them". Key point: "When stimuli come so fast that the muscle cannot relax between them, the twitches fuse into a smooth, sustained contraction, tetanus; in incomplete tetanus small drops in tension still show between the peaks".
Wrong: self-contradictory: the general definition is the definition of complete tetanus only.
Fix [NEW] chapter: "<b>Tetanus</b>: when stimuli arrive so rapidly that the muscle has little or no time to relax between them, the individual twitches fuse into a sustained contraction. Two types:" Key point [NEW]: "When stimuli come so fast that the muscle has little or no time to relax between them, the twitches fuse into a sustained contraction, tetanus: complete (no relaxation, a smooth plateau) or incomplete (small drops in tension still show between the peaks)".
Kind: unclear / internal contradiction. Source: book (key point repeats it). Confidence: likely.

### 6. Figure 17.2 (sarcomere case): "A-band" printed twice, one each side of the H-zone  [NEW; R1 flag 24 found no figure error]
Where: lib/diagrams/biology-11-17.ts, b11-17-fig-17.2 case 1 (book p. 1023).
Says: labels under the sarcomere read "I-band | A-band | M | A-band | I-band"; a separate bracket below reads "thick-filament span (length fixed)".
Wrong: the A-band is ONE band, the whole length of the thick filaments, and it contains the H-zone. Two "A-band" labels flanking M read as two A-bands with something else between them; a student labelling a NEET-style diagram from this picture will place "A-band" wrongly. The book draws it the same way (copied faithfully), so it is a book figure error.
Fix: drop the two "A-band" labels under the bands and name the existing bracket "A-band = thick-filament span (length fixed)" [NEW], centred on M; keep I-band, M and H-zone as they are.
Kind: figure error. Source: book (copied). Confidence: likely.

### 7. Figure 17.1 (Muscular panel): the muscle lies on one bone and does not cross the joint  [NEW]
Where: b11-17-fig-17.1 case 2 (book p. 1016).
Says: drawing: "muscle" is an oval on the upper bone only, ending before "joint (pivot)".
Wrong: a muscle that does not span a joint cannot move it; Topic 03 says "A skeletal muscle is tied across the joint by tendons at both ends ... draws the insertion toward the origin". The book's drawing has the same fault.
Fix: redraw the muscle so it runs from the upper bone (origin) across the joint to the lever just beyond the joint (insertion); labels unchanged.
Kind: figure error. Source: book (copied). Confidence: possible (schematic, but it teaches the wrong mechanics).

### 8. Joint between adjacent vertebrae: "not synovial", while Topic 03 says the articular processes meet at gliding joints  [REPEAT: writer 3 raised it; R2 ruled no note needed; I disagree because the chapter now contradicts itself]
Where: Additional G, graded practice Q3 answer (p. 1070); compare Topic 03, region list ("the articular processes (zygapophyses) of adjacent vertebrae meet at small gliding joints", p. 1034/1035) and Topic 03 MCQ Q4, whose sternum-rib note is the model.
Says (Q3): "Intervertebral discs are fibrocartilage, making these cartilaginous joints ... They are not fibrous ..., synovial (which have a fluid cavity), or pivot joints".
Wrong: gliding joints are synovial, so the answer contradicts Topic 03. Key (c) stays (NCERT's example).
Fix [NEW] append to the Q3 answer: "(Strictly, the articular processes of neighbouring vertebrae also meet at small synovial gliding joints, as Topic 03 says; cartilaginous is the NCERT answer wanted here.)"
Kind: internal contradiction (note only). Source: book. Confidence: likely.

### 9. Skull: hyoid and ossicles "counted separately" (F1 wording from R1 flag 19), and Topic 03 Practice 5 R  [NEW; R1 flag 19 applied with a wording that contradicts NCERT]
Where: Topic 03, Structural framework, Axial skeleton, Skull bullet (p. 1034); Topic 03 Practice 5 (A-R, p. 1037).
Says: "(The ear ossicles and the hyoid are also movable, but are counted separately.)" and Practice 5 "R: All other skull bones are united by immovable fibrous sutures." key (a).
Wrong: NCERT counts the hyoid ("also included in the skull") and the ear ossicles with the skull; "counted separately" tells a student the opposite of NCERT. And with the hyoid and ossicles in the skull, R ("all other skull bones ... sutures") is not strictly true. Key (a) can stay for the 22 cranial and facial bones.
Fix [NEW] skull note: "(The ear ossicles and the hyoid, which NCERT also places with the skull, are movable too; the 22 here are the cranial and facial bones.)" Practice 5 answer, append [NEW]: "(R holds for the 22 cranial and facial bones; the hyoid and the ear ossicles are not joined by sutures.)"
Kind: misleading / NCERT conflict. Source: our wording plus book. Confidence: likely.

### 10. Exam-frequency and "NEET requires" claims still unlabelled or wrong in Additional C, D, E and Topic 04  [REPEAT for the C introduction (R2 flag 23: label added but the false "NEET short-answer" kept); NEW for the rest]
Where and says:
- C Introduction (p. 1053): "synovial joint structure including synovial fluid biochemistry is a reliable CUET/NEET short-answer target (the book's estimate ...)": NEET has no short-answer questions (MCQ only); synovial biochemistry is outside NCERT.
- C Method (p. 1054): "The full architecture that NEET requires:" and "<b>Synovial fluid composition (examinable).</b>": NCERT does not cover capsule/menisci/lubricin.
- D Introduction (p. 1057): "For NEET, the reader must integrate these".
- E Introduction (p. 1060): "For NEET, the examinable skill is connecting normal physiology to clinical presentation"; E Method heading "Four clinical integration patterns (exam-tested)." (haemarthrosis, PGC-1α etc. are not NCERT).
- Topic 04 (p. 1042): "The calcium thread (a favourite linking question)"; (p. 1043) "which makes them favourite “application” questions".
Fix [NEW]: C intro: "... and synovial joint structure, including the make-up of synovial fluid, is a likely short-answer topic in board-style papers (the book's estimate; NEET asks MCQs only, and this goes beyond NCERT)." C Method: "The full architecture (beyond NCERT):" and "<b>Synovial fluid composition (beyond NCERT).</b>" D intro: "To see the whole picture, the reader must integrate these". E intro: "The skill these questions test is connecting normal physiology to clinical presentation"; heading "<b>Four clinical integration patterns (beyond NCERT).</b>" Topic 04: "(a linking question worth expecting)" and "which makes them likely “application” questions".
Kind: unsupported claim. Source: book. Confidence: certain they are unsupported (C "NEET short-answer" is plainly wrong).

### 11. Fibre-type "switch": Pattern 1 softened, Example E.1 and Practice 3 still absolute  [REPEAT: R2 flag 18 applied to Pattern 1 only]
Where: Additional E, Example E.1 third step (p. 1061); E Practice 3 answer (p. 1063).
Says: "The fibres do <b>not</b> change from one type to the other: ... training does not convert fast-twitch fibres into slow-twitch fibres." and "(The fibres adapt within their type; they do not switch type.)"
Wrong: inconsistent with the corrected Pattern 1 ("does not usually turn") and with the key point ("largely within their type"); endurance training does shift fibres within the fast type (IIx toward IIa).
Fix [NEW]: E.1: "The fibres do <b>not</b> usually change from one main type to the other: ... training does not convert fast-twitch fibres into slow-twitch fibres to any useful extent." Practice 3: "(The fibres adapt largely within their type; they do not switch between slow and fast.)"
Kind: overgeneral / inconsistency. Source: book. Confidence: likely.

### 12. Intercalated discs "fuse" cardiac cells  [NEW]
Where: Topic 01, Core definitions, "Intercalated discs" (p. 1021); Topic 01 MCQ Q2 solution (p. 1025).
Says: "communication junctions unique to cardiac muscle that fuse adjacent cells so a signal to one spreads to all" and "Intercalated discs fuse cardiac cells so they contract as one unit."
Wrong: the cells are joined, not fused (cardiac muscle is not a syncytium, unlike the skeletal fibre the same topic calls a syncytium). NCERT: "communication junctions (intercalated discs) at some fusion points between the cells". Students mix the two.
Fix [NEW]: "communication junctions unique to cardiac muscle that join adjacent cells so a signal to one spreads to all" and "Intercalated discs join cardiac cells so they contract as one unit."
Kind: unclear / misleading. Source: book. Confidence: possible.

### 13. Hyaluronic acid "provides boundary lubrication"  [NEW]
Where: Additional C, Practice 3 answer (p. 1056) and F, Additional topic C item 3 (p. 1064).
Says: "(i) Hyaluronic acid: ... gives synovial fluid its viscosity and provides boundary lubrication between articular surfaces. (ii) Lubricin ... reduces friction".
Wrong: boundary lubrication is lubricin's role; hyaluronic acid gives viscosity (fluid-film lubrication). Beyond NCERT, low stakes.
Fix [NEW]: "gives synovial fluid its viscosity and helps lubricate the joint" (both places).
Kind: biology error (minor). Source: book. Confidence: possible.

### 14. Additional A introduction: "the neuromuscular transmission that begins every contraction"  [NEW]
Where: Additional A, Introduction p. 1 (fixer F2 wording, R2 flag 2).
Wrong: true of skeletal muscle only; heart and smooth muscle contract without a neuromuscular junction.
Fix [NEW]: "Additional topic A sets out the neuromuscular transmission that begins every skeletal-muscle contraction (Topic 02, steps 1 to 3)."
Kind: overgeneral. Source: our wording. Confidence: certain.

### 15. G graded practice Q6: cardiac muscle "controlled by the autonomic nervous system"  [REPEAT: writer 3 item 13, R2 ruled no change]
Where: Additional G, Q6 answer (p. 1070).
Says: "Cardiac muscle is striated (has organized sarcomeres) but involuntary (controlled by the autonomic nervous system)."
Wrong: the heart is myogenic (NCERT: the SA node is the pacemaker); the ANS only adjusts the rate. "Controlled by" invites the wrong idea. Also "organized" is US spelling (chapter uses "organised").
Fix [NEW]: "Cardiac muscle is striated (has organised sarcomeres) but involuntary (it beats on its own; the autonomic nervous system only adjusts its rate)."
Kind: unclear. Source: book. Confidence: possible.

### 16. Topic 01 cheat-sheet aid: cardiac "never tires"  [NEW]
Where: Topic 01, Cheat sheet aids, third line (p. 1026).
Says: "cardiac = “striped rebel, takes no orders, never tires.”"
Wrong: F1 changed every "non-fatigued" to "resistant to fatigue" (R1 flag 7) but left this absolute. (Key points use only the first two aids.)
Fix [NEW]: "cardiac = “striped rebel, takes no orders, hardly tires.”"
Kind: overgeneral (consistency). Source: book. Confidence: possible.

### 17. Topic 02 Exam Relevance: the label printed twice in two consecutive sentences  [NEW]
Where: Topic 02, Concept intuition, first paragraph.
Says: "This is a high-yield slice of the chapter (the book’s estimate from past papers, not official figures). NEET asks the sliding-filament cycle almost every year (the book’s estimate from past papers, not official figures): ..."
Fix [NEW]: "This is a high-yield slice of the chapter. NEET asks the <b>sliding-filament cycle</b> almost every year (the book’s estimate from past papers, not official figures): ..."
Kind: style. Source: our wording. Confidence: certain.

### 18. Spelling inconsistencies  [NEW]
Topic 04 and NCERT write "estrogen"; Additional D writes "Oestrogen deficiency ... oestrogen normally suppresses" (p. 1058). G Q6 "organized". Fix: "Estrogen deficiency ... estrogen normally suppresses"; "organised". Kind: notation. Source: book. Confidence: certain.

### 19. Visible "[New wording ...]" brackets in student text (note; founder decision F2-1 pending)  [NEW as a flag]
A3, B6, C5, D5, E5 (options marker), D (PTH note), E5 note, F E5, G Archetype 3, G Q10. Students will read "[Standard four options in letters, new wording: the book prints no options here.]". Recommend removing all brackets before the store build, keeping the list in new-text-F2.md as the record. Kind: layout. Source: our wording. Confidence: certain they show.

## Earlier flags I believe were applied wrongly or incompletely
- R1 flag 8 (calcium logistics): wording overstates the cardiac share and adds an exam claim: my flag 3.
- R1 flag 19 (skull note): "counted separately" contradicts NCERT: my flag 9.
- R2 flags 1 and 2 (A and B introductions): "the causes of fatigue are new" is false: my flag 4; "every contraction": my flag 14.
- R2 flag 18: applied to Pattern 1 only, not to E.1 and Practice 3: my flag 11.
- R2 flag 23: C introduction labelled, but "CUET/NEET short-answer target" kept: my flag 10.
- R1 flag 7: "never tires" aid left: my flag 16.
- R1 flag 24 / R2: no figure error found; I find two (flags 6, 7), both copied from the book.
All other R1/R2 fixes checked and correct as applied (axial 80 = 22 + 6 + 1 + 26 + 1 + 24; tetany "full circle"; osteoarthritis; synchondrosis; "Bone landmark"; F1 MCQ stems; T03 Q4 note; myoglobin E.1; sclerostin note; clavicle/maxilla table; "five subtypes"; 9 to 10.5 mg/dL; G four rows; trap 8 heading; Archetype 1 (b); A-R fourth options).

## Counts verified
- Per topic 00 to 04: 8 parts; 4 worked examples; 5 practice; 4 MCQ; pitfalls 4/4/4/5/4; pro-tip 1; cheat rows 7/6/6/8/7. MCQ `correct` 1,2,2,1 / 1,2,1,2 / 1,2,1,0 / 3,1,1,2 / 1,2,0,2, all equal to the book's Ans and all the only right option.
- Matches recomputed: T01 P2 Q1 R4 S3; T03 P4 Q1 R2 S3; T04 P3 Q1 R2 S4; CUET order S → Q → T → P → R = (a); G joints (b) A-II B-III C-IV D-I; G Q12 (b) A-III B-I C-II D-IV; Q9 (b); Q11 (b); Q5 (c); lower-limb order (a).
- A-R keys: T00 Ex 4 (a), T01 Ex 4 (a), T02 Ex 4 (a), T03 Ex 4 (a), T04 Ex 4 (a); Practice 5s (a),(c),(a),(a),(a); A3 (a), B6 (a), C5 (a), D5 A false R true, E5 (a), G Archetype 3 (a), Q10 (a); every fourth option is "A false, R true".
- Numbers: 206 = 80 + 126; 80 = 22 + 6 + 1 + 26 + 1 + 24 (region list alone 73); vertebrae 7 + 12 + 5 + 1 + 1 = 26; ribs 7 + 3 + 2 = 12 pairs = 24; carpals 8, tarsals 7; sarcomere = A + 2 half I; Figure 17.3 H-zone 400 − 2 × 175 = 50, gone at 335; Figure 17.2 1000 = 433 + 2 × 283.5. Additional A-G: 28 practice answers in F = 5 + 6 + 6 + 6 + 5.
- Notation: every Ca<sup>2+</sup>, Na<sup>+</sup>, H<sup>+</sup>, P<sub>i</sub>, O<sub>2</sub> is real sub/superscript in the content files; no em dash in content (only in diagram check strings, not shown); no fractions occur; italics only <i>Amoeba</i>, <i>Paramecium</i> (correct).
- Introductions checked against Topics as built: A, B (flag 4, 14), C (correct except the exam line, flag 10), D (correct), E (correct); "five subtypes" correct.
- Key points: 25 + 14 = 39 points; checked against the chapter; only flag 5 (topic 6) needs a change; topic 1 "F the polymer" is fine.

## Figures checked (rendered, against the book page)
17.1 (p. 1016): three panels, labels word for word; flag 7. 17.2 (p. 1023): hierarchy and sarcomere, labels word for word; flag 6; nuclei drawn inside the fibre although labelled "peripheral" (schematic, minor). 17.3 (p. 1030): relaxed/contracted, A-band unchanged, four-step cycle and loop note match. 17.4 (p. 1036): errata applied (ribs leader on the rib arc, humerus on the upper arm, radius/ulna on the forearm); joint classes match. 17.5 (p. 1043): matches, calcium link correct. Captions match the book without "Figure N.".

## Could not check
- The app's own fonts and layout on a device (the renders use the Mac's stand-in fonts); no simulator or emulator run.
- NCERT wording quoted from knowledge of NCERT Class 11 (Locomotion and Movement; Chemical Coordination); no NCERT file to hand.
- Bold placement word by word (checked only where the diff showed a change).
