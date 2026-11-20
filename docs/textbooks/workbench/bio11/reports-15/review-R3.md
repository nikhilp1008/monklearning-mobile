# Biology 11 Ch15 review R3 (third expert review, Opus): whole chapter as it now stands

Scope: content/textbooks/bio-11-15/topics-1-2.ts, topics-3-4-extras-a-c.ts, extras-d-i.ts; lib/diagrams/biology-11-15.ts; lib/revise/keypoints-biology-11-15.ts. Book pp. 886 to 942 (bio11.pdf / bio11.paged.txt).
Method: own pass first. A word-level diff of every string literal of the three topic files against the page text, run topic by topic (figure plates and captions removed), with every difference read; a full read of every block, key point and caption; all seven figures rendered from the draw code (node, not jest) and compared side by side with the plate page images (pp. 890, 892, 894, 900, 902, 907, 910); the ABO table (pp. 891, 893) and Topic 03 pages (pp. 905 to 909) read from the page text; every number, cross and answer key recomputed; every Additional-topic introduction checked against Topics 01 to 04 as built (grep plus read); every [NEW] line in new-text-F1.md and new-text-F2.md checked in place. Only then were review-R1.md and review-R2.md read; each flag below is marked NEW (not raised before) or REPEAT (raised before and not fixed, or fixed wrongly).
[NEW] = our proposed wording. Nothing in the repo was edited.

## Flags, most serious first

### 1. Heparin: the chapter now contradicts itself about what keeps blood fluid in the vessels [NEW]
- Where: (a) Additional I, A Graded Practice Set, Level 4 Q10 answer (extras-d-i.ts, p. 942); (b) Topic 01, Key processes, "The brake: anticoagulants" paragraph (topics-1-2.ts, p. 891); also agreeing with (b): Topic 01 MCQ3 ("Heparin prevents intravascular clotting by"), Topic 04 C ("Natural anticoagulant = heparin"), key point topic 0 #2 ("Heparin, made by basophils and mast cells, keeps uninjured vessels free of clots").
- Says now: (a) "...natural anticoagulants, mainly antithrombin III (helped by heparan sulphate on the vessel lining), keep thrombin in check. Heparin made by basophils and mast cells is not what keeps vessels clear." (b) "Blood naturally contains a little heparin, a fast-acting anticoagulant that prevents clotting inside uninjured vessels ... In the body it works with the plasma protein antithrombin, which inactivates thrombin and factor Xa; it is made by basophils and mast cells."
- What is wrong: (a) flatly denies what (b), MCQ3, Topic 04 and the key point teach; a student meets both. NCERT and the NEET key treat heparin as the natural anticoagulant that prevents intravascular clotting, so (a) also cuts against the exam answer. In (b) the "it" of "it is made by basophils and mast cells" follows "antithrombin", so it reads as antithrombin made by basophils (antithrombin is made by the liver). Both are fixer wording (R1 flag 5, R2 flag 15), added independently.
- Fix: (a) replace the last two sentences of the Q10 answer with [NEW] "Blood stays fluid because the smooth, intact endothelium does not expose tissue factor and because natural anticoagulants keep thrombin in check: antithrombin III in the plasma, helped by heparan sulphate on the vessel lining and by the small amount of heparin released by basophils and mast cells." (keeps R false: the vessel lining does not release heparin). (b) [NEW] "In the body it works with the plasma protein antithrombin, which inactivates thrombin and factor Xa. Heparin itself is made by basophils and mast cells."
- Kind: biology error / internal contradiction. Source: ours (fixer wording). Confidence: certain (contradiction); likely (best wording).

### 2. "72 double circulations per minute": each heartbeat does not send blood through the heart twice [NEW]
- Where: Topic 03 Concept intuition "Think about it this way" (p. 905); Topic 03 Key processes (c) first paragraph (p. 908); Topic 03 cheat sheet row "Double circulation: 72 double-circuits/min"; Topic 04 F "72 double-circuits/min" (p. 914).
- Says now: "Because blood passes through the heart twice in every complete circuit, the human heart completes 72 double circulations per minute." / "Each heartbeat drives blood through the heart twice: once through the pulmonary loop ... and once through the systemic loop ... so a 72-beat minute completes 72 double circulations."
- What is wrong: one beat ejects blood into both loops at the same moment (right ventricle to the lungs, left ventricle to the body); it does not carry any blood through the heart twice. A given portion of blood needs about a minute (the blood volume divided by the output, 5 L at 5 L/min) to complete both loops. The sentence teaches that a heartbeat equals a whole double circuit. Some question banks do ask "how many double circulations per minute: 72", so keep the number but correct the reasoning.
- Fix: concept paragraph [NEW] "Because blood passes through the heart twice in every complete circuit, we call it double circulation. Each beat pumps blood into both loops at once, the right ventricle into the pulmonary loop and the left ventricle into the systemic loop, so 72 beats a minute are 72 cardiac cycles (some question banks call them 72 double circulations); any one drop of blood takes about a minute to go round both loops." (c) [NEW] "Each heartbeat pumps blood into both loops at once: the right ventricle into the pulmonary loop (right ventricle → lungs → left atrium) and the left ventricle into the systemic loop (left ventricle → body → right atrium). A 72-beat minute is 72 cardiac cycles; a single drop of blood needs about a minute to complete both loops." Cheat sheet and Topic 04 F: "72 double-circuits/min" → [NEW] "72 beats (cardiac cycles)/min".
- Kind: biology error (misleading). Source: book. Confidence: likely.

### 3. Additional F Introduction still makes a false "the chapter does not give" claim [REPEAT: R2 flag 3, fixed wrongly]
- Where: extras-d-i.ts, Additional F, Introduction (p. 927).
- Says now: "The chapter names the thoracic duct (into the left subclavian vein) and the right lymphatic duct (into the right subclavian vein) but gives no territory for each, nor the cisterna chyli. This is a direct recall question (the book's estimate from past papers)."
- What is wrong: Topic 02 (p. 900 text, Lymph formation and drainage) says "The bulk of the body's lymph drains through the large thoracic duct into the left subclavian vein, while the right lymphatic duct drains the upper-right quadrant into the right subclavian vein": a territory for each is given in outline. R2's replacement wording is itself false.
- Fix: [NEW] "The chapter names the thoracic duct, which carries the bulk of the lymph into the left subclavian vein, and the right lymphatic duct, which drains the upper-right quadrant into the right subclavian vein, but it does not list the regions each duct drains or name the cisterna chyli. This can come up as a direct recall question (the book's estimate from past papers, not official figures)."
- Kind: false "never covers" claim. Source: ours (fixer wording, from the book's claim). Confidence: certain.

### 4. Assertion-reason fourth option printed as "Both false" in Additional I [REPEAT: R2 flag 14, only the Approach text changed]
- Where: extras-d-i.ts, Additional I: Archetype 3 "What it looks like" and "Approach"; the worked representative (diapedesis) options; Level 4 Q9 and Q10 options (pp. 935, 941, 942). Key point topic 12 #2 "why" says the fourth option is "A false, R true", and Topics 01 to 03 use "A false, R true".
- Says now: "Options: (a) both true, R explains A; (b) both true, R does not explain A; (c) A true, R false; (d) both false." / "(d) Both false" / "(d) Both A and R are false." / Approach: "If A is false, read the options: papers print the fourth as either 'A false, R true' or 'both false', so check R too before you pick."
- What is wrong: the standing rule for the whole job is that the fourth option is "A false, R true", never "both false"; the page still prints "both false" in four places and disagrees with its own key point and with Topics 01 to 03. None of the four keys is (d), so changing the option text changes no answer.
- Fix: Archetype 3 options [NEW] "(d) A false, R true." Approach [NEW] "Always evaluate A first. If A is false, the answer is (d), A false, R true (a few papers print 'both false' instead, so check R too). If A is true, then evaluate R. The reason must be a mechanistic link, not merely another true statement." Representative example (d) [NEW] "A false, R true". Q9 and Q10 (d) [NEW] "A is false but R is true." Keys stay (a), (a), (c).
- Kind: wrong MCQ option / inconsistency. Source: book. Confidence: certain.

### 5. Figure 15.4 caption names colours the drawing does not use [NEW]
- Where: lib/diagrams/biology-11-15.ts, CAP154 (all three cases of b11-15-fig-15.4; plate p. 900, caption p. 899).
- Says now: "... Purkinje fibres. Blue = deoxygenated, red = oxygenated blood."
- What is wrong: the redraw has no blue or red: deoxygenated is a dashed outline and oxygenated a solid one, with a legend that says so (and the RA, RV, LA, LV outlines are marigold in the Vessels case). The caption tells the student to look for colours that are not there. (Figure 15.5's caption names no colour, so it is fine.)
- Fix: [NEW] "... Purkinje fibres. Dashed outline = deoxygenated, solid outline = oxygenated blood." (List with the drawing's other exceptions.)
- Kind: figure error. Source: ours (redraw). Confidence: certain.

### 6. Example E.1 now says its answer twice [NEW; R2 flag 20 applied wrongly]
- Where: extras-d-i.ts, Additional E, Worked example 1 (NEET Level), last step (p. 925).
- Says now: "Offspring genotypes: 50% Dd (Rh<sup>+</sup>), 50% dd (Rh<sup>−</sup>). So 50% of children would be Rh-negative. So <frac>1/2</frac> (50%) of the children would be Rh-negative."
- What is wrong: the fixer added the stacked-fraction sentence without removing the book's sentence, so the same conclusion appears twice in a row.
- Fix: [NEW] "Offspring genotypes: 50% Dd (Rh<sup>+</sup>), 50% dd (Rh<sup>−</sup>). So <frac><num>1</num><den>2</den></frac> (50%) of the children would be Rh-negative."
- Kind: transcription slip (duplication). Source: ours. Confidence: certain.

### 7. Additional B Introduction: "What it gives" reads as the chapter, contradicting the sentence before [NEW]
- Where: topics-3-4-extras-a-c.ts, Additional B, Introduction (p. 918).
- Says now: "What it does not give you is the maturation chain of the main cell lines ... What it gives is the red cell, platelet, granulocyte and monocyte lines; the lymphocyte line is given only as B cells from the marrow and T cells via the thymus."
- What is wrong: both "it"s refer to "the chapter", so the paragraph says the chapter does not give the chains and then that it gives them. The fixer meant this Additional topic.
- Fix: [NEW] "This Additional topic gives the red cell, platelet, granulocyte and monocyte chains; the lymphocyte line appears only as B cells maturing in the marrow and T cells in the thymus."
- Kind: unclear/misleading. Source: ours (fixer wording). Confidence: certain.

### 8. Topic 02 pitfall 2: the exceptions bracket now sits on the arteries [NEW; R1 flag 9 applied wrongly]
- Where: topics-1-2.ts, Topic 02, Common student pitfalls, item 2 (p. 904).
- Says now: "Wrong: many veins have valves (to fight gravity), while arteries have none along their length (the venae cavae and venules are the exceptions). Don't swap."
- What is wrong: the bracket follows "arteries have none", so it reads as if the venae cavae and venules were arteries with valves. "Are the exceptions" also overclaims: the pulmonary veins, the hepatic portal vein and the veins of the brain have no valves either.
- Fix: [NEW] "Wrong: many veins have valves to fight gravity (though not all: the venae cavae, the pulmonary veins and the smallest venules have none), while arteries have none along their length. Don't swap."
- Kind: unclear/misleading. Source: ours. Confidence: certain (placement); likely (list).

### 9. Topic 02 Concept intuition: the added bracket is garbled [NEW]
- Where: topics-1-2.ts, Topic 02, Concept intuition, third paragraph (p. 897).
- Says now: "(The two streams never mix only in complete double circulation, found in crocodiles, birds and mammals.)"
- What is wrong: "never mix only in" can be read as "they mix everywhere except ..." or as nonsense; the intended point (full separation only with four chambers) is lost.
- Fix: [NEW] "(The two streams are kept fully apart only in complete double circulation, found in crocodiles, birds and mammals; in amphibians and most other reptiles they mix a little.)" (Founder decision 2 of new-text-F1 on the kalam still stands.)
- Kind: unclear. Source: ours. Confidence: certain.

### 10. Additional I: a new exam-count claim "3 to 5 questions a year" [NEW; introduced by R2 flag 6]
- Where: extras-d-i.ts, Additional I, The Distribution, paragraph after the table (p. 934).
- Says now: "Read these as relative weights of the zones, not as counts: added together they come to far more than the 3 to 5 questions a year this chapter usually supplies, and the book gives no official figures."
- What is wrong: "3 to 5 questions a year" is a fresh, unsourced exam-frequency claim in our own wording, and it disagrees with the chapter's own Exam Relevance lines (Topic 01 1 to 2, Topic 02 2 to 3, Topic 03 2 to 4, i.e. 5 to 9).
- Fix: [NEW] "Read these as relative weights of the zones, not as counts per paper: added together they come to more questions than one chapter usually supplies, and the book gives no official figures."
- Kind: unsupported exam claim. Source: ours. Confidence: certain.

### 11. Additional I Level 3 Q8: statement (iv) keyed false although "can" makes it true [NEW]
- Where: extras-d-i.ts, Additional I, Graded Practice, Level 3 Q8 (p. 940).
- Says now: "(iv) Rh incompatibility between a Rh<sup>−</sup> mother and Rh<sup>+</sup> foetus can cause erythroblastosis foetalis in the first pregnancy." Answer (a), with (iv) false: "The first pregnancy usually only sensitises the mother ... so the first baby is generally unaffected."
- What is wrong: the answer's own "usually" and "generally" concede that it can happen (for example after an earlier transfusion or miscarriage), so a careful student marks (iv) true and finds no option for (i), (ii), (iii), (iv). Also "a Rh" should be "an Rh".
- Fix: [NEW] "(iv) Rh incompatibility between an Rh<sup>−</sup> mother and an Rh<sup>+</sup> foetus usually causes erythroblastosis foetalis in the first pregnancy." Key stays (a).
- Kind: MCQ ambiguity. Source: book. Confidence: likely.

### 12. Figure 15.7(b): fibrous cap drawn on the wall side of the lipid core [NEW]
- Where: lib/diagrams/biology-11-15.ts, b11-15-fig-15.7 case 1 (plate p. 910).
- Says now (drawing): the "Fibrous cap" is a thick arc outside the "Lipid core" band, between the core and the vessel wall; the narrowed lumen is below the core.
- What is wrong: in an atherosclerotic plaque the fibrous cap covers the lipid core on the lumen side (it separates the core from the blood; its rupture causes thrombosis). The plate's leader is ambiguous (it touches the plaque's outer rim), and the redraw has made the error explicit.
- Fix: draw the fibrous cap as the arc between the lipid core and the narrowed lumen, and point the "Fibrous cap" leader to it.
- Kind: figure error. Source: ours (from an ambiguous plate). Confidence: likely.

### 13. Topic 02: accessory chambers wrongly given to all three classes [NEW]
- Where: topics-1-2.ts, Topic 02, Key processes, paragraph after the comparative table (p. 901).
- Says now: "The hearts of fishes, amphibians and reptiles also carry accessory chambers absent in mammals: a sinus venosus that collects incoming venous blood and a truncus arteriosus that channels blood out; in birds and mammals these have been incorporated into the main chambers and great vessels."
- What is wrong: reptiles have no truncus arteriosus (it is split into the separate aortic arches and the pulmonary trunk), and fishes have a conus or bulbus arteriosus, not a truncus. Only amphibians have a truncus arteriosus.
- Fix: [NEW] "The hearts of fishes, amphibians and most reptiles keep a sinus venosus that collects incoming venous blood, and fishes and amphibians also have an outflow chamber that channels blood out (a conus or bulbus arteriosus in fishes, a truncus arteriosus in amphibians); in birds and mammals these have been incorporated into the main chambers and great vessels."
- Kind: biology error. Source: book. Confidence: likely.

### 14. Topic 01: leukaemia defined as "an abnormal rise in WBCs" [NEW]
- Where: topics-1-2.ts, Topic 01, Key components, leucopenia paragraph (p. 889).
- Says now: "An abnormal rise in WBCs, as in blood cancer, is leukaemia."
- What is wrong: a rise in WBCs is leucocytosis (common in infections); leukaemia is a cancer of the white-cell-forming tissue. As written, a student calls every raised count leukaemia.
- Fix: [NEW] "A cancer of the WBC-forming tissue, usually with a large abnormal rise in WBCs, is leukaemia (an ordinary rise, as in an infection, is leucocytosis)."
- Kind: biology (misleading). Source: book. Confidence: likely.

### 15. Figure 15.6: P and T waves drawn with flat shoulders [NEW]
- Where: lib/diagrams/biology-11-15.ts, b11-15-fig-15.6 (KNOTS and ecg(); plate p. 907).
- Says now (drawing): the trace eases to zero slope at every knot, so the extra knots (0.085, 0.155 s on the P wave; 0.42, 0.52 s on the T wave) give each dome a stepped, notched look. The plate draws smooth single domes.
- What is wrong: a notched P wave is a recognised abnormal sign; a "normal ECG" should not show it.
- Fix: drop the intermediate knots (keep 0.05, 0.12, 0.2 for P and 0.38, 0.47, 0.55 for T) or draw each wave as one half-sine.
- Kind: figure error. Source: ours. Confidence: certain (shape), possible (that students would read it as abnormal).

### 16. "Nerves only modulate/adjust the rate" contradicts "rate and force" [NEW]
- Where: Topic 02 Limiting Conditions bullet 3 (p. 897); Topic 03 Limiting Conditions bullet 2 (p. 905); Topic 03 pitfall 3 (p. 911); Additional I Level 3 Q7 answer (iv) (p. 940); key point topic 2 #4 "the nerves only adjust the rate".
- Says now: "Nerves only modulate the rate; they do not start it." / "Nerves only adjust the rate."
- What is wrong: the same chapter (Topic 03 (b), from NCERT) says sympathetic nerves raise both the rate and the strength of ventricular contraction.
- Fix: [NEW] "Nerves only modulate the rate and force; they do not start it." / "Nerves only adjust the rate and force."
- Kind: overgeneral. Source: book (key point: ours). Confidence: likely.

### 17. Topic 02: "closed ... in annelids and all chordates" [NEW]
- Where: topics-1-2.ts, Topic 02, Open vs closed circulation (p. 901).
- Says now: "In a closed circulatory system, seen in annelids and all chordates (including humans), blood always stays inside..."
- What is wrong: tunicates (urochordates) have an open system. NCERT says "annelids and chordates" without "all".
- Fix: [NEW] "seen in annelids and chordates (including humans; the tunicates are an exception)".
- Kind: overgeneral. Source: book. Confidence: likely (minor, beyond NCERT).

### 18. Additional C Practice 2: answer does not arrange the five items asked [NEW; R2 flag 10 wording]
- Where: topics-3-4-extras-a-c.ts, Additional C, Practice 2 (p. 922).
- Says now: Q "Arrange in correct order: angiotensin I, ACE, angiotensin II, renin, angiotensinogen." A "Angiotensinogen → angiotensin I → angiotensin II → aldosterone (with renin and ACE as the enzymes of the first two steps; angiotensin II also stimulates ADH)."
- What is wrong: the answer brings in aldosterone (not in the list) and leaves renin and ACE unplaced.
- Fix: [NEW] "Angiotensinogen → (renin) → angiotensin I → (ACE) → angiotensin II. Renin and ACE are the enzymes of the two steps; angiotensin II then triggers the release of aldosterone and ADH."
- Kind: answer mismatch. Source: ours (R2 wording). Confidence: likely.

### 19. Additional B kalam still says "pluripotent" without the qualifier [NEW]
- Where: topics-3-4-extras-a-c.ts, Additional B, kalam.
- Says now: "All blood cells arise from a common pluripotent haematopoietic stem cell (HSC) in the red bone marrow."
- What is wrong: the Method now says "the book calls it pluripotent, usually called multipotent"; the kalam (the first line a student sees) keeps the term the Method corrects.
- Fix: [NEW] "All blood cells arise from a common haematopoietic stem cell (HSC) in the red bone marrow." Optional, also in Method: "(HSC; usually called multipotent; some books say pluripotent)" in place of "the book calls it pluripotent", since students do not have "the book".
- Kind: inconsistency. Source: ours. Confidence: likely.

### 20. Additional D Example D.2 says the same thing twice [NEW]
- Where: extras-d-i.ts, Additional D, Example D.2 solution (p. 923).
- Says now: "...the diastolic filling time becomes so short that the ventricle cannot fill adequately before the next beat. SV actually falls slightly at very high rates. The limiting factor is diastolic filling time: at very high rates the ventricle cannot fill adequately, so end-diastolic volume (preload) and stroke volume fall."
- Fix: delete "The limiting factor is diastolic filling time: at very high rates the ventricle cannot fill adequately, so end-diastolic volume (preload) and stroke volume fall." and end the previous sentence [NEW] "SV actually falls slightly at very high rates, because end-diastolic volume (preload) falls."
- Kind: duplication. Source: book. Confidence: certain (low impact).

### 21. Additional E Example E.2: "1 to 2 weeks" for the first anti-D [NEW]
- Where: extras-d-i.ts, Additional E, Example E.2 (p. 926).
- Says now: "it takes 1–2 weeks for the first anti-D antibodies to appear."
- What is wrong: the primary anti-D response is slow and small; detectable anti-D commonly takes weeks to months after a sensitising bleed.
- Fix: [NEW] "it takes weeks, often months, for the first anti-D antibodies to appear."
- Kind: number. Source: book. Confidence: possible.

### 22. Additional F Clinical note and key point: lower-body lymphoedema from thoracic duct block [NEW]
- Where: extras-d-i.ts, Additional F, Clinical note (p. 928); key point topic 9 #2.
- Says now: "Obstruction of the thoracic duct ... leads to chylothorax ... and severe lymphoedema of the lower body."
- What is wrong: thoracic-duct block or injury typically shows as chylothorax (or chylous ascites); lower-limb lymphoedema is not the usual result because of collateral channels.
- Fix: [NEW] "Injury to or obstruction of the thoracic duct (e.g., by tumour or trauma) can cause chylothorax (lymph collecting in the pleural cavity, milky with absorbed dietary fats from the lacteals)." Key point: drop "and lymphoedema of the lower body".
- Kind: biology (overstated). Source: book. Confidence: possible.

### 23. Topic 03: "combined cross-sectional surface area" [NEW]
- Where: topics-3-4-extras-a-c.ts, Topic 03, paragraph after the Normal Values grid (p. 906).
- Fix: [NEW] "because their combined cross-sectional area is the largest of any vessel type". Kind: wording. Source: book. Confidence: certain (minor).

### 24. Key point D #1: "about 20–25 L per minute" vs the page's "~20–26 L/min" [NEW]
- Where: lib/revise/keypoints-biology-11-15.ts, topic 7 #1.
- Fix: [NEW] "giving about 20–26 L per minute". Kind: number consistency. Source: ours. Confidence: certain (minor).

### 25. Figure 15.4 Nodal pathway: "Bundle of His" leader lands on the right bundle branch [NEW]
- Where: lib/diagrams/biology-11-15.ts, b11-15-fig-15.4 case 2 (plate p. 900).
- Says now (drawing): the leader dot sits on the branch inside the right ventricle; the plate points to the septal stem below the AV node.
- Fix: move the leader end to the common stem in the septum, between the AV node and the split. Kind: figure (minor). Source: ours. Confidence: likely.

## Earlier flags I believe were applied wrongly
- R1 flag 5 + R2 flag 15: each fix is defensible alone; together they make Topic 01 (and MCQ3, Topic 04, key point 0 #2) and Additional I Q10 contradict each other; the R1 sentence also has an antecedent slip (flag 1).
- R1 flag 9 (pitfall 2): the bracket was placed after the arteries clause (flag 8).
- R2 flag 3 (F introduction): the replacement "gives no territory for each" is false (flag 3).
- R2 flag 6 (I distribution): the added sentence brings in an unsourced "3 to 5 questions a year" (flag 10).
- R2 flag 14 (assertion-reason): only the Approach text was changed; four "both false" options remain (flag 4).
- R2 flag 20 (E.1): the frac sentence was added beside the book's sentence instead of replacing it (flag 6).
- R2 flag 10 (C practice 2): the new answer includes aldosterone and leaves renin and ACE unplaced (flag 18).

## Checks of the fixers' new wording (new-text-F1.md, new-text-F2.md)
All other [NEW] lines were read in place and are correct and plain: blood as a fluid connective tissue; serum "(mainly fibrinogen, which has been used up)"; tissue thromboplastin and prothrombinase (thrombokinase); haemophilia A "deficient or defective"; Ex 2 O-negative; pro-tip anti-D exception; "No tissue cell"; crocodile qualifications; SA node 70 to 75 with the 90 to 100 note; arteries in the adult and umbilical arteries; veins bullet "(the venae cavae and venules lack them)" (acceptable as examples); octopus closed; comparative table cells; neurogenic hearts; cardiac-cycle three-phase note (checked: steps 1 and 4 together are the joint diastole); hypertension 180 over 120 bracket (founder decision stands); murmur; MCQ2 nudge; Fig 15.2 and 15.3 caption additions; A introductions and kalam (A, C, D, E, G, H correct against Topics 01 to 04; erythropoietin, baroreceptors, renin, ADH, bleeding/clotting time and von Willebrand are indeed absent from Topics 01 to 04); citrate note; factor VI; A practice 2; reticulocyte RNA and mitochondria; macrophage examples; carotid sinus; alcohol and ADH; C.1 sequence; aldosterone "a main regulator"; "tends to fall"; D table 20 to 26 (180 to 200 × 120 to 130 mL = 21.6 to 26 L); D.2 "very high heart rate"; D practice 5 NCERT note; Rh one-gene note; Rhogam; G Class 12 cross-reference; pernicious anaemia cell; H introduction, key distinction, 1% and clotting-time lines; I traps, Q1, Q11 lines. Exceptions are flags 1, 3, 6, 7, 8, 9, 10, 18, 19 above.

## Counts verified
- Topics 01 to 03: 4 worked examples, 5 practice, 4 MCQs, 4 pitfalls, 1 pro-tip each; cheat sheets 7, 8 and 8 rows (+1 aid in T03). Topic 04: Introduction + parts A to H, matching the book.
- MCQ keys recomputed and unique: T01 c, b, b, d; T02 b, c, b, c; T03 c, b, d, b. Worked AR examples: T01 (a), T02 (a), T03 (a). Additional I: representatives (d), (b), (a), (a), (d), (d); graded Q1 (c), Q2 (c), Q3 (d), Q4 (c), Q5 (c), Q6 (b), Q7 (a), Q8 (a) (see flag 11), Q9 (a), Q10 (c), Q11 (c), Q12 (b). A.2 (b), B.1 (b), B practice 2 (b).
- Additional A: 3 examples, 5 practice, factor table 13 rows; B to H: 2 examples, 5 practice each; I: 6 representatives, 12 graded items; tables D 3 rows, E 5, F 2, G 4, H 3 + 2, I 7 + 11.
- Numbers recomputed: 0.55 × 5.0 = 2.75 L, 5.0 − 2.75 = 2.25 L (45%); 70 × 72 = 5040 mL/min ≈ 5 L; 120 − 80 = 40 mmHg; 180 × 120 = 21,600; (21,600 − 5,040)/5,040 = 16,560/5,040 = 3.286, ≈ 329%; 21,600/5,040 = 4.29-fold; 20,000/200 = 100 mL; 180 to 200 × 120 to 130 mL = 21.6 to 26 L/min; Dd × dd = ½ Dd, ½ dd; I<sup>A</sup>I<sup>B</sup> × I<sup>A</sup>i = A, A, AB, B at ¼ each; P(O, Rh<sup>−</sup>) = 0; P(AB, Rh<sup>+</sup>) = ¼ × ½ = ⅛ = 12.5%; RBC:WBC 5,000,000/7,000 ≈ 714 (625 to 917 over the ranges), "~700:1" fair; WBC differential midpoints sum ≈ 100%; 60/72 = 0.83 s ("about 0.8 s"); ECG PR bracket 0.05 to 0.20 s = 0.15 s, inside 0.12 to 0.2 s.
- Blood-group table (pp. 891, 893) cell by cell; Topic 04 B table; Figure 15.3 donor arrows (O to A, B, AB; A to AB; B to AB).
- Key points: 37 (T01 5, T02 5, T03 5, T04 4, A to H 2 each, I 2); every fact checked against the text; issues only in flags 1 (agrees with Topic 01, against I Q10), 16, 22, 24.
- Errata: "Prothrombinase, by contrast, promotes clotting" present (Topic 01); no "antiheparin". SA node 70 to 75 (pp. 898, 903, 904, 913) and 90 to 100 (pp. 906, 908, 924) both kept with the explanatory notes.
- Notation: no `<i>` anywhere (no scientific name occurs); no slash BP or em dash in student strings; fractions stacked in D and E; genotypes plain with superscripts.

## Figures checked (rendered from the draw code, compared with the plate images)
15.1 (p. 890): layers, shares and labels match. 15.2 (p. 892): eight boxes, dashed enzyme arrow, HEPARIN (inhibits) bar, clot retraction/fibrinolysis match; caption note added. 15.3 (p. 894): antigens, antibodies and five arrows match. 15.4 (p. 900): three cases; structures, valves (Pulmonary valve labelled, the brief's exception) and nodal path match; caption colours wrong (flag 5); His leader (flag 25). 15.5 (p. 902): six boxes, six arrows, both circuit captions match. 15.6 (p. 907): axes, wave positions and heights, PR bracket and 0.8 s arrow match; wave shape (flag 15). 15.7 (p. 910): proportions and labels match; fibrous cap side (flag 12).

## Could not check
- The figures were rendered from a copy of the diagram file through node with a local loader (jest not run, as instructed); fonts differ from the app's, so fine spacing is not judged.
- NCERT wording is from memory, not re-read from a copy (heparin as natural anticoagulant; "annelids and chordates"; 70 to 75 per minute).
- No phone or emulator look.

## Summary
25 flags: 23 NEW, 2 REPEAT (flags 3 and 4). Serious: 5 (flags 1 to 5: the heparin contradiction, the "72 double circulations" reasoning, the false F introduction, the "both false" assertion-reason options, and the Figure 15.4 caption colours). Seven earlier fixes were applied wrongly (listed above), most of them in fixer wording rather than the book. The transcription is otherwise faithful and every number recomputes.
