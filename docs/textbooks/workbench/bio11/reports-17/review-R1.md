# Biology 11 Ch 17 expert review R1 (Topics 00-04, Figures 17.1-17.5, key points 0-4)

Scope: content/textbooks/bio-11-17/topics-0-2.ts; Topics 03 and 04 in topics-3-4-extras-a-b.ts; lib/diagrams/biology-11-17.ts (all 5 figures); keypoints topics 0-4 (25 points). Edited nothing; no tsc/jest/git. Book pp. 1013-1046 compared word by word (script diff of book text against app text, then page images of Figures 1-4 and a read of every block).

OVERALL: transcription of Topics 00-04 is faithful (no missing or duplicated sentence, no wrong number, no mis-keyed MCQ, all matching/ordering answers recompute). The accuracy problems are (a) a handful of book errors the writers did not catch or only half-caught (axial 80 never reached in the cheat sheet; "tendon landmark" mislabel; tetany "failure of the calcium signal"; osteoarthritis defined two ways), (b) one real layout slip made in transcription (12 MCQ stems in Topics 00-02 print the options a second time), (c) overgeneral "only/never/whole" statements. Key points are clean apart from three small items. Figures match the book's labels, errata handled; no figure error.

## FLAGS (most serious first). Format: Where | says now | wrong | fix | kind | source | confidence

1. T03 Cheat sheet, "Axial" row; T03 Key structures "Ear ossicles" def; p. 1034/1038.
 Says: "Axial: skull (22; only mandible movable) + ear ossicles (malleus, incus, stapes) + vertebral column (26) + sternum + ribs (12 pairs)." and "Ear ossicles: the three tiny bones of the middle ear ... (counted within the axial skeleton)".
 Wrong: the sum 22 + 3 + 26 + 1 + 24 = 76 (no hyoid, ossicles 3 not 6); a student cannot reach 80. Ossicles are three PER EAR (6). The region list (Section 3) also never states ossicles/hyoid. NCERT: skull 22, hyoid 1, ear ossicles 6, column 26, sternum 1, ribs 24 = 80.
 Fix [NEW] cheat row: "<b>Axial (80):</b> skull 22 (8 cranial + 14 facial; only the mandible is movable) + 6 ear ossicles (malleus, incus, stapes in each ear) + hyoid 1 + vertebral column 26 + sternum 1 + ribs 24 (12 pairs)."
 [NEW] ossicle def: "the tiny bones of the middle ear: malleus, incus and stapes in each ear, six in all (counted within the axial skeleton)."
 [NEW] one sentence at the end of the "Axial skeleton (the central axis):" lead-in or after the ribs bullet: "With the 6 ear ossicles and the hyoid, these make 22 + 6 + 1 + 26 + 1 + 24 = 80."
 Kind: number / unclear. Source: book (and the key point already corrects it). Certain.

2. T04 Key distinctions, "The chapter comes full circle" paragraph (p. 1043).
 Says: "Tetany is a failure of the calcium signal that Topic 02 showed triggers contraction; too little Ca2+ and the muscle mis-fires into spasm."
 Wrong: the Ca2+ signal in Topic 02 is Ca2+ released inside the fibre from the SR. In tetany it is low Ca2+ in the body fluid that makes nerve and muscle membranes over-excitable; the SR signal does not fail. A student reads it as "less Ca2+ released, so weaker contraction", the opposite of spasm.
 Fix [NEW]: "Tetany is the other side of the calcium story Topic 02 told: there, Ca2+ released inside the fibre triggers contraction; in tetany it is the low Ca2+ in the body fluid that makes nerve and muscle membranes over-excitable, so the muscle fires into spasm."
 Kind: biology error / misleading. Source: book. Certain.

3. T00-T02 Crack the MCQ, all 12 stems (T00 Q1-Q4, T01 Q1-Q4, T02 Q1-Q4).
 Says: stem ends with "<b>(a)</b> ... <b>(b)</b> ... <b>(c)</b> ... <b>(d)</b> ..." AND the same four options are in `opts`.
 Wrong: the reader shows the options twice (the model, Ch 14 and Topics 03/04 of this chapter, keep the stem alone). Transcription slip, not an allowed exception.
 Fix: stems become exactly: T00: "Which pair of human cells characteristically shows amoeboid movement?" / "Ciliary movement in humans is best illustrated by:" / "Which statement about movement and locomotion is correct?" / "The structures responsible for amoeboid movement are formed by:". T01: "The structural and functional unit of a myofibril is the:" / "Intercalated discs are characteristic of:" / "The two interconvertible forms of actin are:" / "Which protein of the thin filament covers actin’s active site in a resting muscle?" T02: "According to the sliding filament theory, during contraction:" / "Calcium ions initiate contraction by binding to:" / "The ATP-binding site that powers the power stroke lies on:" / "Relaxation of a skeletal muscle results from:". Keep option labels, nudges and `correct` as they are (1,2,2,1 / 1,2,1,2 / 1,2,1,0 all verified).
 Kind: transcription slip. Source: introduced in transcription. Certain.

4. T03 Key structures, def "Tendon/long-bone landmarks" (p. 1034).
 Says: "e.g. the scapular spine projects as the flat acromion process."
 Wrong: not a tendon landmark and not a long bone (the scapula is a flat bone); label does not match content.
 Fix [NEW]: term "Bone landmark"; html "e.g. the spine, a ridge on the back of the scapula, projects as the flat acromion process."
 Kind: biology error / mislabel. Source: book. Certain.

5. T00 Concept intuition, "Limiting conditions" third bullet (p. 1014).
 Says: "Amoeboid and ciliary movements are involuntary and cellular; only muscular movement is the voluntary, large-scale type behind walking, running and most visible body actions."
 Wrong: smooth and cardiac muscle movement is muscular but involuntary (the book itself says so p. 1020).
 Fix [NEW]: "Amoeboid and ciliary movements are <b>involuntary</b> and cellular; of the muscular movements, only skeletal-muscle movement is the voluntary, large-scale type behind walking, running and most visible body actions (smooth and cardiac muscle also move involuntarily)."
 Kind: biology error (overgeneral "only"). Source: book. Certain.

6. T04 Key distinctions, "A name-trap" paragraph (p. 1042).
 Says: "Osteoarthritis = inflammation and erosion of a joint (a type of arthritis)." One paragraph earlier it is "the wear-and-tear form".
 Wrong: internal contradiction; osteoarthritis is degenerative, inflammation is minor.
 Fix [NEW]: "Osteoarthritis = wear and tear of the articular cartilage of a joint (a degenerative type of arthritis)."
 Kind: biology error. Source: book. Likely (certain on the inconsistency).

7. T01 Table "Fatigue" row (p. 1021); cheat/other places that repeat "non-fatigued".
 Says: skeletal "Fatigues quickly"; cardiac "Non-fatigued". Contradicts the same page (red fibres resist fatigue) and overstates cardiac.
 Fix [NEW] cells: skeletal "Fatigues (white fibres tire sooner; red fibres resist fatigue)"; smooth "Slow, sustained" (as printed); cardiac "Resistant to fatigue". The T01 cheat-sheet "non-fatigued" in the cardiac list: "resistant to fatigue". Keep "Practice 1" answer key "fatigue: fast vs non-fatigued" as printed or "tires sooner vs resistant to fatigue".
 Kind: overgeneral. Source: book. Likely. (Key points already say the corrected version.)

8. T02 Mechanisms, "Calcium logistics differ by muscle type" (p. 1029) and Excitation step 4 parenthetical (p. 1028).
 Says: "In skeletal muscle the whole Ca2+ supply is sequestered inside the sarcoplasmic reticulum ... Smooth and cardiac muscle have comparatively little SR"; step 4: "smooth and cardiac muscle, having less SR".
 Wrong: "whole" overgeneral; cardiac SR is well developed, just less extensive than skeletal; cardiac muscle relies on extracellular Ca2+ for trigger.
 Fix [NEW]: "In skeletal muscle the Ca2+ supply is held mainly inside the sarcoplasmic reticulum, bound by the protein calsequestrin, and released on demand. Smooth and cardiac muscle have a less extensive SR, so they draw a major part of their Ca2+ from the extracellular fluid, a contrast NEET likes to test directly." and step 4: "smooth and cardiac muscle, having a less extensive SR, also draw Ca2+ from extracellular fluid".
 Kind: overgeneral. Source: book. Likely.

9. T02 p. 1029 energy footnote and T02 Cheat sheet "Energy" row.
 Says: "Later, about 80% of that lactic acid is reconverted to glycogen in the liver." / "~80% -> glycogen in liver".
 Wrong: not in NCERT; the share varies; recycled via glucose (Cori cycle).
 Fix [NEW] either drop the figure: "Later, much of that lactic acid is carried to the liver and rebuilt into glucose and glycogen." (cheat: "some lactic acid is rebuilt into glycogen in the liver") or keep with a flag: "(the book gives about 80%; this figure is not in NCERT)".
 Kind: number not in NCERT. Source: book. Certain it is non-NCERT; value possible.

10. T01 Practice 3 (p. 1024).
 Says: "Name the protein that (i) stores no calcium but masks actin's active site"; answer "troponin-tropomyosin".
 Wrong: asks for one protein, answer is two; "stores no calcium" is a muddled hint (troponin binds Ca2+).
 Fix [NEW] q: "[NEET] Name (i) the pair of thin-filament proteins that mask actin’s active site (they do not store calcium) and (ii) the structure that does store calcium in a muscle fibre."
 Kind: unclear/misleading. Source: book. Likely.

11. T03 Joints, class 2 example and "Two special terms" (p. 1035).
 Says: "a temporary synchondrosis that ossifies after puberty"; "a synchondrosis is a temporary cartilaginous joint present only in children until puberty (the growth plates)".
 Wrong: growth plates close at about 16-25 y; some synchondroses (first rib-sternum) are permanent.
 Fix [NEW]: "a temporary synchondrosis that ossifies when growth ends" and "a synchondrosis is a cartilaginous joint of hyaline cartilage; in the growth plates of children it is temporary and ossifies when growth ends."
 Kind: biology error (overgeneral). Source: book. Likely.

12. T03 MCQ Q4 / Ex 1(ii) / cheat sheet, sternum-rib joint "cartilaginous" (pp. 1036, 1038).
 Wrong: only rib 1 meets the sternum at a purely cartilaginous joint; ribs 2-7 also have small synovial joints. Key (c) is still the only defensible option and the standard NEET answer: keep it.
 Fix [NEW] add to Q4 solution: "(Strictly, the costal cartilages of ribs 2 to 7 also meet the sternum at small synovial joints; cartilaginous is the answer wanted here.)"
 Kind: overgeneral (note only). Source: book. Likely.

13. T00 Ex 3, reasoning bullet (b) (p. 1017).
 Says: "(b) human body cells do not locomote by flagella (the sperm flagellum is a special case ...)". Self-contradicting: sperm is a human cell that moves by a flagellum.
 Fix [NEW]: "(b) flagella drive sperm, not crawling cells; the sperm flagellum is a special case of cell motility, not “amoeboid”."
 Kind: misleading. Source: book. Likely.

14. T00 Mechanisms, amoeboid paragraph, last sentence (p. 1015).
 Says: "Amoeboid movement and the body's cellular defence are, mechanically, one and the same process."
 Wrong: overstated (crawling to the site and engulfing share pseudopodial machinery; the defence also includes antibodies, complement, etc.).
 Fix [NEW]: "Amoeboid crawling and phagocytosis use the same pseudopodial machinery of the cytoskeleton."
 Kind: overgeneral. Source: book. Likely.

15. T00 Practice 5 (p. 1017): "A: All movements are not locomotion." Ambiguous (reads as "no movement is locomotion").
 Fix [NEW]: "A: Not all movements are locomotion."
 Kind: unclear. Source: book. Likely.

16. Practice A-R items without options: T00 5, T01 5, T02 5 print none, while T03 5 and T04 5 (writer 2) add the four standard options as [NEW]. Make consistent: add to T00-T02 Practice 5 the same sentence: "Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true." (answers unchanged: all three are "A true, R true, R explains A", except T01 Practice 5 = A true, R false: option (c)). Kind: consistency. Source: transcription choice. Certain.

17. Unlabelled exam-frequency claims (T00 Exam Relevance "reliably tested"; T01 "perennial NEET favourite", p. 1024 "the single most-tested discrimination on this topic", p. 1025 "The number-one error", "resolve almost every NEET/CUET muscle-type MCQ"; T02 "highest-yield slice", "perennial", "Expect at least one assertion-reason", "(the most-tested table)", pro-tip "almost every NEET/CUET sequencing item"; T03 "reliably asks", "high-scoring"; T03 and T04 pro-tip/pitfall superlatives "The most-tested swap", "Pound-for-pound", "increasingly"). Writers labelled only the numeric/"almost every year" ones. Recommend the same label after each remaining one: " (the book's estimate from past papers, not official figures)" or soften ("a common NEET theme", "a frequent trap"). Kind: unsupported claim. Source: book. Certain they are unsupported; policy is the founder's.

18. T03 Key structures "Bone and cartilage" para (p. 1034): "red marrow (in the heads of long bones)" (adult red marrow is also in flat bones, vertebrae, ribs, sternum) and "the only cells it contains, the chondrocytes" (chondroblasts too). Fix [NEW]: "red marrow (in the ends of long bones and in flat bones)" and "its matrix produced and maintained by its cells, the chondrocytes". Kind: overgeneral. Source: book. Possible-likely.

19. T03 (pp. 1034, 1038) "The only freely movable skull bone is the mandible"/"only mandible movable" (and Practice 5 A). Correct for the 22 skull bones; ossicles and hyoid are movable head bones. Optional [NEW] note after the skull bullet: "(the ear ossicles and the hyoid are also movable, but are counted separately)". Kind: overgeneral (note). Possible.

20. T04 p. 1041 "Muscular dystrophy typically appears in childhood" and Fig/cheat "childhood limb weakness -> muscular dystrophy": true of Duchenne only. Fix [NEW]: "Duchenne muscular dystrophy typically appears in childhood". Also p. 1042 "it is tetany, never the other two": drop ", never the other two" ([NEW] "it points to tetany"). Kind: overgeneral. Source: book. Likely.

21. T00 table, T00 row Ciliary cell: "Trachea (sweeps dust/mucus out) ; female reproductive tract" has a stray space before ";" (copied from book; Writer 2 removed the same slip). Fix: "...out); female ...". Kind: transcription nit. Certain.

22. Key points (topics 0-4):
 a. Topic 3 Remember 2 `why`: "The chapter's list of axial parts leaves out the ossicles and the hyoid, which complete the 80." The Section 2 definition (p. 1034) does state them; only the Section 3 region list and the cheat sheet leave them out. Fix [NEW]: "The chapter's region list leaves out the ossicles and the hyoid, which complete the 80." Certain.
 b. Topic 1 Common mistakes, last item "Placing the calcium store in the membrane": not one of the four printed pitfalls (it is MCQ Q1's trap). Either cite p. 1025 MCQ Q1 or replace with the printed fourth pitfall ("Assigning intercalated discs to all striated muscle" is already there; the printed list's first, "Striated => voluntary", is in the Don't mix up point), so keep but re-cite "pp. 1025" as "p. 1025 (Q1 and pitfalls)". Possible (minor).
 c. Topic 4 Don't mix up: "while the blood calcium is usually normal" is true but not in the chapter (header says every fact is from the chapter text). Drop it or accept. Possible.
 Everything else (pages cited, mnemonic lines, nine `say` lines, 5 points per topic, no em dash, <sup> Ca2+) verified.

23. NCERT notes to carry (no fix needed, add if the founder wants): NCERT calls smooth muscle "visceral (unstriped)"; NCERT's simplification "I-band = actin, A-band = myosin" is coarser than the book's (A-band both, I-band thin only): keep the book, NEET keys follow either; skull count NCERT 22 + hyoid + ossicles (some texts say 29); NCERT does not mention troponin subunits TpC/TpI/TpT, titin, calsequestrin, creatine phosphate, 80% lactate, motor-unit recruitment/summation (all labelled beyond NCERT in intent); troponin is a skeletal/cardiac regulator, smooth muscle uses calmodulin (the book's "Ca2+ binds troponin" is skeletal only).

24. Figures (checked from the drawing code against the book page images of Figs 1-4 and the text of Fig 5; the jest dump was not run). All labels match the book word for word (dashes to colons by house rule); errata applied correctly: "ribs" leader lands on rib 1/2 arcs (computed 116, 160), "humerus" leader on the upper-arm line (94, 150), "radius / ulna" on the forearm (222, 226). Recomputed: axial 22 + 6 + 1 + 26 + 1 + 24 = 80; 80 + 126 = 206; relaxed H-zone 400 - 2 x 175 = 50, gone at 335 (overlap 15); I-band each side 117 then 84.5, A-band 166 unchanged; sarcomere Z-Z 1000 = A 433 + I 283.5 x 2. No figure error. Notes only: (i) Fig 17.2 proportions (A-band 43% of the sarcomere, I-bands wide) are the book's schematic and are not realistic (A about two thirds); (ii) 3 rib arcs a side for 12 pairs (declared schematic); (iii) in 17.3 step 4 repeats step 1's head as the book does; (iv) cilia row: ovum floats about 44 px above the cilia tips (schematic as in the book).

## RULINGS on writer-flagged items (writer 1; writer 2 for Topics 03-04)
W1:
- p. 1014 "only muscular movement is the voluntary": AGREE, fix = flag 5.
- p. 1017/1018 "Locomotion never involves muscles" needs "in humans": DISAGREE. As written it is simply false (locomotion often involves muscles), so the distractor is sound and the nudge "human locomotion is muscular" is right. Optional nudge [NEW]: "(d) is false: most locomotion, human locomotion included, is muscular."
- p. 1017 "All movements are not locomotion": AGREE, flag 15.
- Unlabelled frequency/superlative claims: AGREE, flag 17.
- p. 1021 table fatigue cells: AGREE, flag 7. Cardiac "Wall of the heart only", "unique to cardiac": fine.
- p. 1025 Practice 3: AGREE, flag 10.
- p. 1029 "about 80%", "regenerated rapidly from creatine phosphate": AGREE (flag 9; creatine phosphate is correct physiology, only beyond NCERT).
- p. 1029 "whole Ca2+ supply" / "little SR": AGREE, flag 8. Migratory-bird flight muscles: correct, beyond NCERT, keep.
- p. 1028 "about six actin filaments": correct for vertebrate muscle, keep. p. 1029 step 6 order: keep (matches NCERT's simplified account).
- Exceptions taken: all ALLOWED (em dash replacements, Topic 2 -> Topic 02, "sub-topic" -> "topic", the two "(the book's estimate ...)" labels, bullets one per line, Example/Q labels dropped, options kept as (a)-(d), nudge merges, null nudges). NOT allowed: duplicated MCQ options in stems (flag 3). Null nudges T01 Q2 (a)(b), Q3 (c)(d), T02 Q3 (a)(c)(d): acceptable (book gives none; solution covers).
W2 (Topics 03-04):
- axial 80 / ossicles / hyoid: AGREE (flag 1; arithmetic 80 and 126 verified).
- "Tendon/long-bone landmarks": AGREE (flag 4).
- sternum-rib "cartilaginous": AGREE as a caution, keep key (flag 12).
- synchondrosis "after puberty / only in children": AGREE (flag 11).
- "only mandible": acceptable, optional note (flag 19). chondrocytes / red marrow: AGREE minor (flag 18).
- tetany "never the other two", "failure of the calcium signal": AGREE (flags 2, 20). Osteoarthritis "inflammation": AGREE (flag 6). Dystrophy "childhood": AGREE (flag 20).
- Added standard A-R options for the four options-less practice items: ALLOWED; make T00-T02 match (flag 16).
- Exceptions: all allowed (cross-reference renames "this final section" -> "final topic", "Topic 2" -> "Topic 02", "Addendum" -> "Additional topic"). Fourth A-R option: book prints "A false, R true" correctly in Topics 00-04 (Ex 4 of every topic checked).
- For reviewer 2 (intro claims), confirmed against the topics as built: Topic 02 does teach the motor unit, all-or-none, grading by recruitment and rate, summation (p. 1029-1030), fatigue/lactic acid/oxygen debt, ACh release and the sarcolemmal action potential (steps 2-3); Topic 04 (p. 1041 definition) says antibodies attack the ACh receptors; Topic 03 covers synovial cavity, synovial fluid, articular cartilage, ligaments. So "never covers/only touched on" claims about graded response, NMJ and synovial architecture in the Additional intros are false or overstated; tetanus, curare, ossification/epiphyseal plate, myosin-ATPase fibre typing are the true gaps. Reviewer 2 gives the exact replacements.

## COUNTS verified
Per topic (00/01/02/03/04): 8 parts; 4 worked examples (CBSE, CUET, NEET, NEET High-Difficulty A-R); 5 practice; 4 MCQ; pitfalls 4/4/4/5/4; 1 pro-tip; cheat rows 7/6/6/8/7 plus the mnemonic in `aids` (matches the book's bullets). MCQ `correct` 1,2,2,1 / 1,2,1,2 / 1,2,1,0 / 3,1,1,2 / 1,2,0,2 (all = book "Ans"). Matching answers recomputed: T01 P2 Q1 R4 S3; T03 P4 Q1 R2 S3; T04 P3 Q1 R2 S4. CUET order S>Q>T>P>R = (a). Rib split 7 + 3 + 2 = 12; column 7 + 12 + 5 + 1 + 1 = 26; wrist 8, ankle 7; appendicular 126 = 4 + 60 + 2 + 60; 206. Sarcomere = 1 A-band + 2 half I-bands. Figures 5 (ids 17.1-17.5, at the book's positions). Key points 25 (5 a topic: 2 remember, mixup, mistake, shortcut), nine `say` lines. No em dash in the three content files; no italics except Amoeba, Paramecium.

## NOT CHECKED
Rendered SVGs of our figures (jest dump is forbidden here; judged from the drawing code and the book's page images); bold/italic placement beyond the words; Additional topics A to G (not my share); table-cell bold; the display-fonts test.
