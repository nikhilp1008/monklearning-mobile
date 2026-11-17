# Biology 11 Chapter 14 (Breathing and Exchange of Gases): third expert review (R3, Opus)

Scope: the whole chapter as it stands after fixers F1 and F2: `content/textbooks/bio-11-14/topics-1-3.ts`, `topics-4-5-extras-a-b.ts`, `extras-c-g.ts`, `lib/diagrams/biology-11-14.ts`, `lib/revise/keypoints-biology-11-14.ts`. Book pp. 821 to 885 (errata p. 1176: typography only for Ch 14).

Method: my own pass first. A word-level diff of every app string against the book text layer for pp. 821 to 842, 843 to 861 and 861 to 885 (every non-equal stretch read); every block read in full; every number, sum, ratio and fraction recomputed; every printed key checked against its question; each Additional topic introduction checked against Topics 01 to 05 as built; every line of new-text-F1.md and new-text-F2.md checked. Figures: the six SVG dumps of 2026-11-16 18:58 (later than the diagram file's last change, 17:28) rendered and set beside the book's figure pages 823, 827, 829, 837, 839, 846; table page 835 viewed as an image. Only then I read review-R1-topics-1-5.md and review-R2-extras-A-G.md and marked each flag NEW or REPEAT.

Legend: [NEW] = our own proposed wording. Source: "book" = printed in the book; "ours" = wording a writer or fixer added.

## Flags, most serious first

### 1. Assertion-reason fourth option still "Both false" in 8 places (one item keyed on it) [NEW for B, C, E, F, G Q7; REPEAT for G Archetype 3 and G Q8]
- Where: `topics-4-5-extras-a-b.ts` Additional B, Practice 5 (p. 861); `extras-c-g.ts` C Practice 4 (p. 864), E Practice 5 (p. 870), F Practice 5 (p. 874), G "The Recurring Archetypes", Archetype 3 approach line and worked representative (p. 877), G Graded Practice Q7 and Q8 (pp. 882 to 883).
- Says now: "<b>(d)</b> Both false" (B, C, E, F, Archetype 3 example); Archetype 3 approach: "(d) both false."; Q7 and Q8: "(d) Both A and R are false." Q8 is keyed (d) "A is false ... R is also false ... Both statements are wrong."
- Wrong: the NEET format (and the house rule) is (d) "A false, R true". Topics 02 to 04 were changed; the Additional topics were not, and R2 #9 actually changed the Archetype 3 example TO "Both false" (applied wrongly). Archetype 3 also teaches students the wrong four-option scheme.
- Fix:
  - B, C, E, F practice and the Archetype 3 example: "<b>(d)</b> A false, R true" (all keyed (a), so no answer changes).
  - Archetype 3 approach line: [NEW] "four answer choices: <b>(a)</b> both true and R explains A; <b>(b)</b> both true but R does not explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true."
  - Q7: "(d) A is false, R is true." (keyed (a), unchanged).
  - Q8 (needs a true R so the key is (d)): [NEW] "Reason (R): The chemosensitive area next to the respiratory rhythm centre is highly sensitive to CO<sub>2</sub> and H<sup>+</sup>." Options as Q7 with "(d) A is false, R is true." Answer [NEW]: "(d): A is false: under normal conditions the urge to breathe is triggered by rising CO<sub>2</sub> (and rising H<sup>+</sup>), not by falling O<sub>2</sub>. R is true: the chemosensitive area beside the rhythm centre is highly sensitive to CO<sub>2</sub> and H<sup>+</sup>, and the role of O<sub>2</sub> in the normal rhythm is quite insignificant."
- Kind: wrong MCQ format. Source: book. Confidence: certain.

### 2. G Q10 note credits NCERT with a vital-capacity range it does not print [REPEAT: R1 #19 / R2 #19 asked for a note; F2 wrote it from memory, founder decision 3]
- Where: `extras-c-g.ts`, G, A Graded Practice Set, Level 6 first item (p. 884), answer.
- Says now: "Note: these values give a VC of 4600 mL, the top of the chapter’s own range (about 4000–4600 mL); NCERT quotes about 3500–4500 mL for an adult."
- Wrong: NCERT (Class 11, Breathing and Exchange of Gases, Respiratory volumes and capacities) gives values only for TV, IRV, ERV and RV and defines IC, EC, FRC, VC and TLC without numbers. "3500–4500 mL" is not an NCERT figure. A false attribution to NCERT is worse than no note.
- Fix: [NEW] "Note: these values give a VC of 4600 mL, the top of the range that the chapter’s volumes give (about 4000–4600 mL)." (or delete the note).
- Kind: false attribution / number. Source: ours (F2). Confidence: likely (from my knowledge of the NCERT text; no NCERT copy in the repo to cite).

### 3. "The four capacities" are five [NEW]
- Where: `topics-1-3.ts`, Topic 02, Key structures, definitions and processes, p before the `formula` block (p. 826); Topic 02 pro-tip (p. 832).
- Says now: "The four <b>capacities</b> are then defined as sums:" followed by IC, EC, FRC, VC, TLC (five). Pro-tip: "Don’t memorise all four capacity formulas as separate facts. ... One picture, not five formulas."
- Wrong: five capacities are listed (as in NCERT); the pro-tip contradicts itself.
- Fix: [NEW] "The five <b>capacities</b> are then defined as sums:"; pro-tip [NEW] "Don’t memorise all five capacity formulas as separate facts."
- Kind: number / transcription of a book error. Source: book. Confidence: certain.

### 4. Topic 04 hyperventilation sentence: fixer tautology, and light-headedness given the wrong cause [NEW; R1 #3 applied with a garbled join]
- Where: `topics-4-5-extras-a-b.ts`, Topic 04, Concept intuition, "Limiting conditions & assumptions" p (p. 844).
- Says now: "Hyperventilation is also why breathing faster than necessary (hyperventilation) makes you light-headed: you blow off so much CO<sub>2</sub> that the chemical “alarm” goes quiet and the drive to breathe briefly fades."
- Wrong: "Hyperventilation is ... why ... (hyperventilation)" is circular (F1 #9 says the sentence was "re-joined"; the join failed). Also the light-headedness comes from the low CO<sub>2</sub> itself (less blood flow to the brain), not from the breathing drive fading; the sentence ties the two.
- Fix: [NEW] "This is also why breathing faster than necessary (hyperventilation) makes you light-headed: you blow off so much CO<sub>2</sub> that blood flow to the brain falls, and the chemical “alarm” goes quiet, so the drive to breathe briefly fades."
- Kind: unclear / biology. Source: ours (join) and book (mechanism). Confidence: certain (tautology), likely (mechanism).

### 5. Additional B: 4 mL "matches" 5 mL "due to rounding" [REPEAT: applied wrongly, R2 #16 last item]
- Where: `topics-4-5-extras-a-b.ts`, B, Method (p. 858); key point topic 6 first point.
- Says now: "This matches the chapter’s figure of approximately 5 mL O<sub>2</sub> per 100 mL blood (slight variation due to rounding and the approximations used)." KP: "close to the chapter’s figure of about 5 mL, the gap coming from rounding and the approximations used."
- Wrong: 4.0 against 5 mL is a 20% gap; rounding cannot make it. It comes from the saturations assumed (95% to 75% = 20 points). 15 × 1.34 × 0.25 = 5.0 mL for a 25-point gap (e.g. 97% to 72%), which is what Example B.1 itself shows (4.7 mL for 25 points).
- Fix: [NEW] "This is a little below the chapter’s figure of about 5 mL O<sub>2</sub> per 100 mL blood; the exact value depends on the saturations taken (a 25-point fall, for example 97% to 72%, gives 15 × 1.34 × 0.25 ≈ 5.0 mL)." KP [NEW] "a little below the chapter’s figure of about 5 mL; the exact value depends on the saturations taken".
- Kind: number / misleading. Source: ours (F2 wording). Confidence: certain.

### 6. G Q11: emphysema placed "in the terminal bronchioles" [NEW]
- Where: `extras-c-g.ts`, G, Graded Practice, Level 6 second item (p. 884), question and answer.
- Says now: "permanently enlarged air spaces in the terminal bronchioles with destruction of alveolar walls"; answer "permanent abnormal inflation of terminal bronchioles/alveolar sacs".
- Wrong: emphysema is permanent enlargement of the air spaces distal to (beyond) the terminal bronchioles; the terminal bronchioles are conducting airway.
- Fix: [NEW] question "A patient has permanently enlarged air spaces beyond the terminal bronchioles, with destruction of alveolar walls." Answer [NEW] "this describes emphysema: permanent enlargement of the air spaces beyond the terminal bronchioles (alveolar ducts and alveoli) with destruction of alveolar walls, reducing the surface area for gas exchange."
- Kind: biology error. Source: book. Confidence: likely.

### 7. G Q5 answer contradicts itself on "any real transport fraction" [NEW]
- Where: `extras-c-g.ts`, G, Level 3 first item (p. 882), answer.
- Says now: "The trap option (d) is an inflated figure far above any real transport fraction (the oxygen carried as oxyhaemoglobin is about 97 %)."
- Wrong: 97% is itself a real transport fraction above 90%; the sentence refutes itself.
- Fix: [NEW] "The trap option (d) is inflated: no form of CO<sub>2</sub> transport comes near 90 % (it is oxygen that is carried about 97 % as oxyhaemoglobin)."
- Kind: unclear / wrong explanation. Source: book. Confidence: certain.

### 8. Shared introduction still says the chapter "leaves out" compliance [REPEAT: R2 2(d) fixed E's own introduction only]
- Where: `topics-4-5-extras-a-b.ts`, Additional A, Introduction p 1 (p. 854).
- Says now: "Additional topic E explains why surfactant matters and why premature babies cannot breathe: the compliance side the chapter leaves out."
- Wrong: Topic 04 says fibrosis is "reducing compliance"; E's own introduction now says so.
- Fix: [NEW] "...: the compliance side the chapter mentions only in passing."
- Kind: false "never covers" claim. Source: book. Confidence: certain.

### 9. Exam-frequency claims left unqualified in the Additional topics [REPEAT for the first two (R2 2(f)); NEW for the rest]
- Where and says now, with fixes:
  - A, Introduction p 1: "the Haldane effect and the chloride shift, both of which NEET asks by name" -> [NEW] "both of which can be asked by name".
  - C, Introduction: "NEET asks both by name" -> [NEW] "Both can be asked by name".
  - B, Introduction: "the calculation method that NEET uses in its higher-difficulty items" -> [NEW] "the calculation method used in higher-difficulty items".
  - A, Introduction p 2: "the calculable or comparative territory that NEET and Boards now require" -> [NEW] "that NEET and Board questions can reach".
  - D, Introduction and kalam: "and it is a standard NEET-trap concept" -> delete, or [NEW] "and it goes beyond the NCERT text". (V/Q is not in NCERT.)
  - E, Introduction: "a classic NEET and CUET topic that builds directly on the chapter’s physics of breathing" -> [NEW] "a topic that builds directly on the chapter’s physics of breathing" (surfactant and IRDS are not NCERT Class 11 content).
  - F, Introduction: "These comparisons are high-yield for NEET’s comparative-physiology questions." -> [NEW] "These comparisons go beyond the NCERT text but help with comparative-physiology questions."
  - G, Archetype 4: "In NEET, these are almost always fully resolvable by recall alone." -> [NEW] "Most can be solved by recall alone."
  - G, Key Things to Master: "NEET questions from this chapter repeatedly test three things, so make sure..." -> [NEW] "Three things are worth being able to state without hesitation:"
- Kind: exam-frequency claim. Source: book. Confidence: likely.

### 10. Topic 04 MCQ 2 nudges call oxygen "irrelevant" to the aortic and carotid receptors [NEW]
- Where: `topics-4-5-extras-a-b.ts`, Topic 04, Crack the MCQ, Q2 (p. 849).
- Says now: (a) "O<sub>2</sub> and temperature": "<b>(a)</b> and <b>(d)</b> introduce irrelevant variables."; (c) "O<sub>2</sub> only": "<b>(c)</b> overstates oxygen’s role."
- Wrong: the key (b) is NCERT's line and stays. But O<sub>2</sub> is not irrelevant to these receptors: the carotid bodies are the body's low-O<sub>2</sub> sensors, which the chapter's own Additional topic F uses ("the carotid bodies sensing low arterial pO2"). The nudge contradicts F.
- Fix: (a) and (d) [NEW] "<b>(a)</b> and <b>(d)</b> bring in temperature and glucose, which these receptors do not track." (c) [NEW] "<b>(c)</b> is too narrow: these receptors can also sense a fall in O<sub>2</sub> (it matters at high altitude), but in normal breathing they respond to CO<sub>2</sub> and H<sup>+</sup>."
- Kind: misleading nudge. Source: book. Confidence: likely.

### 11. Topic 04 venous reserve: deeper breathing does not release the venous reserve [NEW]
- Where: `topics-4-5-extras-a-b.ts`, Topic 04, Mechanisms, "Why the venous oxygen “reserve” matters here" (p. 845).
- Says now: "because the right-shifted dissociation curve and the faster, deeper breathing driven by the CO<sub>2</sub> loop together mobilise that reserve exactly when demand spikes."
- Wrong: the extra extraction comes from the low tissue pO<sub>2</sub> and the right shift; ventilation keeps arterial blood loaded but does not unload more at the tissues.
- Fix: [NEW] "because tissue <i>p</i>O<sub>2</sub> falls lower and the right-shifted dissociation curve releases more, while the faster, deeper breathing driven by the CO<sub>2</sub> loop keeps the arterial blood fully loaded."
- Kind: biology (misleading). Source: book. Confidence: possible.

### 12. Diving mammals: blood "to ... exercising muscles" [NEW]
- Where: `extras-c-g.ts`, F, Method, "Diving mammals" item 2 (p. 872); F Worked example 2 Step 2 third bullet (p. 873); key point topic 10 second point.
- Says now: "Blood flow is shunted away from non-essential tissues (skin, gut) to the brain, heart, and exercising muscles only."; "Blood is shunted exclusively to the brain and heart ... and to exercising muscle when needed."; KP "sends blood to the brain, heart and working muscle".
- Wrong: in the diving response the skeletal muscles are vasoconstricted too and run on their myoglobin store; that is why myoglobin matters (item 3). "Exclusively ... and to exercising muscle" also contradicts itself.
- Fix: Method [NEW] "Blood flow is shunted away from the skin, gut, kidneys and muscles to the brain and heart; the muscles work largely on the O<sub>2</sub> stored in their myoglobin." Example [NEW] "Blood is shunted mainly to the brain and heart (organs most sensitive to hypoxia); the working muscles rely largely on their myoglobin store." KP [NEW] "peripheral vasoconstriction that sends blood mainly to the brain and heart".
- Kind: biology. Source: book (KP repeats it). Confidence: likely.

### 13. E Method still says the lungs "would be impossible to reinflate" [NEW; sibling of R2 #12, which fixed only E.2]
- Where: `extras-c-g.ts`, E, Method, "Surfactant: the physics" p (p. 868).
- Says now: "Without intervention, small alveoli would empty into large ones during expiration, and the lungs would be impossible to reinflate."
- Fix: [NEW] "..., and the lungs would be very hard to reinflate." (matches E.2's "need a far greater opening pressure").
- Kind: overclaim. Source: book. Confidence: certain.

### 14. B: "physiological basis" sentence now sits after the exercise sentence; B.2 "precisely why" [NEW]
- Where: `topics-4-5-extras-a-b.ts`, B, Method, extra-O<sub>2</sub> p (p. 859); B Worked example 2 answer (p. 860).
- Says now: "... more O<sub>2</sub> is unloaded. This is the physiological basis of the Bohr effect."; B.2: "This extra oxygen is precisely why the tissues can meet the surge in metabolic demand during activity."
- Wrong: after F2's insertion, "This" now points at the 15 mL exercise figure, which is mostly the low tissue pO<sub>2</sub>, not the Bohr effect; and a ~2 mL increment is not "precisely why" tissues meet a demand the chapter puts at ~15 mL.
- Fix: put [NEW] "This extra release is the benefit of the Bohr effect." straight after "...giving about 6 mL with the Bohr shift alone." and delete the closing sentence; B.2 [NEW] "This extra oxygen is part of how the tissues meet the surge in metabolic demand during activity."
- Kind: misleading. Source: ours (placement) and book. Confidence: likely.

### 15. B.1 Check (fixer wording) reads backwards [NEW]
- Where: `topics-4-5-extras-a-b.ts`, B Worked example 1, Check step.
- Says now: "The chapter gives approximately 5 mL O<sub>2</sub> per 100 mL; the arterial-venous saturation gap here is 25 points (95% − 70%) rather than 20, hence 4.7 rather than about 4."
- Wrong: "rather than about 4" refers to the Method's 4 mL, not to the 5 mL just named; the reader cannot tell what 4.7 is being compared with.
- Fix: [NEW] "<b>Check.</b> The chapter gives approximately 5 mL O<sub>2</sub> per 100 mL, and 4.7 mL is close to it: the saturation gap here is 25 points (95% − 70%), against 20 points in the Method’s 4 mL. Total O<sub>2</sub> delivery of ~235 mL/min matches resting metabolic demand for oxygen."
- Kind: unclear. Source: ours (F2 #15). Confidence: certain.

### 16. A Practice 4: "before the dead-space air arrives" [NEW]
- Where: `topics-4-5-extras-a-b.ts`, A, Practice item 4 (p. 857), answer.
- Says now: "because each deeper breath delivers proportionally more fresh air past the obstruction before the dead-space air arrives."
- Wrong: the dead-space air arrives first in every breath; the point is that the fixed 150 mL becomes a smaller share.
- Fix: [NEW] "because the fixed dead space (about 150 mL) is then a smaller share of each breath, so more of every breath reaches the alveoli."
- Kind: biology (unclear). Source: book. Confidence: likely.

### 17. A Practice 5: physiological and anatomical dead space "are equal" [NEW]
- Where: `topics-4-5-extras-a-b.ts`, A, Practice 5 answer; same idea in A.2 Check ("which equals the anatomical dead space in a healthy lung").
- Fix: [NEW] "In healthy lungs they are almost equal (the alveolar dead space is very small)." and A.2 [NEW] "which is close to the anatomical dead space in a healthy lung".
- Kind: overgeneral. Source: book. Confidence: possible.

### 18. D: where the hypoxaemia of an embolism comes from; COPD answer mixes hypoxaemia with CO<sub>2</sub> [NEW]
- Where: `extras-c-g.ts`, D Worked example 1 Step 3 (p. 866); D Practice 4 answer (p. 867).
- Says now: Step 3 "If the dead space fraction becomes too large, compensatory mechanisms fail and systemic hypoxaemia ... develops." Practice 4: "Hypoxaemia is worse because it affects both the oxygenation of blood AND the removal of CO<sub>2</sub>."
- Wrong: dead space itself mainly costs CO<sub>2</sub> removal; the hypoxaemia of an embolism comes from the blood diverted to the rest of the lung (low V/Q there), which the chapter's own Practice 5 answer says ("the V/Q inequality elsewhere"). "Hypoxaemia ... removal of CO<sub>2</sub>" mixes two different results.
- Fix: Step 3 [NEW] "This dead-space region is “wasted”: it ventilates but does not oxygenate blood. The blood it should have carried is pushed through the rest of the lung, where perfusion now exceeds ventilation (low V/Q); that poorly oxygenated blood lowers the systemic O<sub>2</sub> (hypoxaemia). The body raises ventilation and cardiac output to compensate." Practice 4 last sentence [NEW] "The combination both lowers blood O<sub>2</sub> (hypoxaemia) and hinders the removal of CO<sub>2</sub>."
- Kind: biology. Source: book. Confidence: possible.

### 19. D: "The book prints 4.5 over 5" inside the student text and key point [NEW]
- Where: `extras-c-g.ts`, D Method first p; KP topic 8 first point.
- Says now: "(The book prints 4.5 over 5, about 0.9; with the 4.2 L/min of Additional topic A the ratio is 0.84, so about 0.8 is used here.)"; KP "the book prints 4.5 over 5 as 0.9".
- Wrong: in the app this text IS the book; the student cannot see any other print. It reads as an editor's note.
- Fix: [NEW] "(Normal V/Q is usually quoted as about 0.8; a ventilation of 4.5 L/min would give 0.9.)" and drop the KP clause.
- Kind: unclear. Source: ours (F2 #21). Confidence: certain.

### 20. Notation: table heads and titles with a plain "pO2", "VT" [REPEAT: R1 #17 applied only to Topic 05]
- Where: `topics-1-3.ts` Topic 03 table head `['Site', 'pO2', 'pCO2']`; `topics-4-5-extras-a-b.ts` A "Standard shortcuts" head `'VT'`, `'f'`, B defgrid title "Condition, and approximate saturation at pO2 = 40 mmHg"; `extras-c-g.ts` D table head "Alveolar pO2", "Alveolar pCO2".
- Wrong: F1 #26 confirms table heads render HTML (Topic 05 uses `'<i>p</i>O<sub>2</sub>'`); these show a plain "pO2" and "VT".
- Fix: `'<i>p</i>O<sub>2</sub>'`, `'<i>p</i>CO<sub>2</sub>'`, `'Alveolar <i>p</i>O<sub>2</sub>'`, `'Alveolar <i>p</i>CO<sub>2</sub>'`, `'<i>V</i><sub>T</sub>'`, `'<i>f</i>'`; the defgrid title the same if that field renders HTML.
- Kind: notation. Source: transcription. Confidence: certain (for the heads).

### 21. Topic 04 "by common sense, the surface area" (fixer wording) [NEW]
- Where: `topics-4-5-extras-a-b.ts`, Topic 04, Mechanisms, "Mapping each disease..." p.
- Says now: "(the pressure gradient, the thickness of the membrane and, by common sense, the surface area)".
- Wrong: Topic 03 does name area ("Anything that thickens this barrier or shrinks its area cuts directly into the exchange rate"); "by common sense" is odd in a textbook.
- Fix: [NEW] "(the pressure gradient, the thickness of the membrane and the surface area)".
- Kind: unclear. Source: ours (F1 #21). Confidence: certain.

### 22. Topic 03 cheat sheet: "5 mL per 100 mL" without "delivered" [NEW]
- Where: `topics-1-3.ts`, Topic 03 Cheat sheet, O<sub>2</sub> and CO<sub>2</sub> transport rows (p. 842).
- Says now: "≈ 5 mL O<sub>2</sub> per 100 mL oxygenated blood"; "≈ 4 mL CO<sub>2</sub> per 100 mL deoxygenated blood".
- Wrong: reads as the content of the blood (which is ~20 mL O<sub>2</sub>); the topic and the Archetype 1 item turn on "delivered".
- Fix: [NEW] "≈ 5 mL O<sub>2</sub> delivered to the tissues per 100 mL oxygenated blood"; "≈ 4 mL CO<sub>2</sub> delivered to the alveoli per 100 mL deoxygenated blood".
- Kind: misleading. Source: book. Confidence: likely.

### 23. Topic 03 pro-tip "Memorise just two numbers" gives four [NEW]
- Where: `topics-1-3.ts`, Topic 03 pro-tip. Fix: [NEW] "Memorise just two pairs of numbers and derive the rest". (The key point already says "two pairs".) Kind: number. Source: book. Confidence: certain.

### 24. Topic 03 MCQ 2 nudge (d): "confuse heme count" [NEW]
- Where: `topics-1-3.ts`, Topic 03 Crack the MCQ Q2, option (d) "6 O<sub>2</sub>".
- Fix: [NEW] "<b>(d)</b> overcounts: haemoglobin has four haem groups, so it carries four O<sub>2</sub>, not six." Kind: unclear nudge. Source: book. Confidence: certain.

### 25. Topic 03 Example 3: option (a) says "smaller", the answer answers "heavier" [NEW; fixer wording R1 #7]
- Where: `topics-1-3.ts`, Topic 03 Worked example 3 (NEET Speed Trap).
- Says now: "(a) is false (CO<sub>2</sub> is the heavier molecule, 44 against 32)".
- Fix: [NEW] "(a) is false (the CO<sub>2</sub> molecule is larger and heavier than O<sub>2</sub>, 44 against 32)". Kind: unclear. Source: ours. Confidence: likely.

### 26. G Archetype 5: "Figure 14.1" means NCERT's, not this chapter's [NEW]
- Where: `extras-c-g.ts`, G Archetype 5 approach.
- Says now: "The diagram in the NCERT textbook (Figure 14.1, the diagrammatic view of the human respiratory system) is the reference."
- Wrong: in the app, Figure 14.1 is the five-steps flow chart; a student will look for the wrong figure.
- Fix: [NEW] "The NCERT textbook’s diagram of the human respiratory system (its own Figure 14.1, not Figure 14.1 of this chapter) is the reference." Kind: unclear. Source: book. Confidence: certain.

### 27. "heme" and "haem" both used [NEW]
- Where: `topics-1-3.ts` Topic 03 ("one at each heme group", MCQ "heme groups", "heme count"), G Q6 answer ("four heme groups"), KP topic 2 ("one at each heme"); Figure 14.4 and its caption use "Haem"/"haem".
- Fix: "haem" throughout, matching "haemoglobin" and the figure. Kind: notation. Source: book. Confidence: certain.

### 28. KP G "Common mistakes" opens with the weighting disclaimer [NEW]
- Where: `lib/revise/keypoints-biology-11-14.ts`, topic 11 second point.
- Says now: "The book’s estimate from past papers, not official figures. Complete rings of cartilage: ..."
- Wrong: the disclaimer belongs to the distribution table (first point), not to a list of wrong options; here it reads as if the traps were estimates.
- Fix: delete the first sentence. Kind: unclear. Source: ours. Confidence: certain.

## Earlier flags I believe were applied wrongly
- R2 #9: Archetype 3 example's option (d) was changed TO "Both false" to match the approach line; both should be "A false, R true" (flag 1).
- R2 #16 (last part): "rounding and the approximations used" does not explain 4 vs 5 mL (flag 5; also KP topic 6).
- R1 #3 / F1 #9: the re-joined sentence is circular, "Hyperventilation is also why ... (hyperventilation)" (flag 4).
- R1 #19 / R2 #19 (VC note): written from memory with an NCERT range NCERT does not print (flag 2).
- R1 #17: italic p applied to Topic 05's table head but not Topic 03's (or D's) (flag 20).
- R2 2(d): fixed E's own introduction but not the matching line in the shared introduction (flag 8).
- R2 2(f) ("can be asked" for "NEET asks by name" / "calculation method NEET uses"): not applied (flag 9).
- R2 #12: E.2 fixed, the Method's "impossible to reinflate" left (flag 13).

All other R1 and R2 items are applied and correct as worded (R1 #1, 2, 5 to 11, 13, 14, 16, 18; R2 #1, 2(a)(b)(c)(e)(g), 3 to 8, 10, 11, 13 to 15, 17, 18, 20).

## Counts verified
- Topics 01 to 05: 5 topics; Topic 02 and 03 each 4 worked examples, 5 practice, 4 MCQs (keys 2,1,1,1 and 2,2,3,1 checked), 4 pitfalls, 1 pro-tip; Topic 04 4 examples, 5 practice, 4 MCQs (3,1,2,2), 4 pitfalls, 1 pro-tip; Topic 05 3 tables (9, 4, 5 rows).
- Additional A to F: 18 worked examples, 30 practice items; G: 6 representative examples, 12 graded items, 2 tables (8 and 10 rows). Totals: 36 worked examples, 57 practice items, 12 MCQs, every printed key checked against its question.
- Arithmetic recomputed, all correct: capacity sums (IC 3000–3500, EC 1500–1600, FRC 2100–2300, VC 4000–4600, TLC 5100–5800; spirogram 3500, 1600, 2300, 4600, 5800); gradients 64 and 5 mmHg; 5 of ~20 mL = a quarter; 15 of 5 mL = 3x; AVR 4200, 13 000, 6800, 3600; A.1 9000/6750/4500 (33% cut); A.2 210/0.05 = 4200, V_T 500, V_D 150; A.3 f_1 12, V_T2 1500, f_2 60, AVR 81 000 (19.3-fold vs 15-fold); A practice 4500, 3000, 600/150; B 20.1, 19.1, 15.1, 4.0; 2.01; B.1 17.8/13.1/4.7 (exact 4.69), 235 mL/min; B.2 15.075/13.065/2.01, 40% and 50%; B.3 4.02/2.14, 46.7% (≈47%), 8/15 = 53%, 15/8 = 1.9; B practice 17.42, 16.9, 19.5, 13.5/20.1 = 67.2%; C 52 − 48 = 4; D 4.2/5 = 0.84; 150/500 = 30%; G Q10 3500/1600/4600/5800.
- Key points: 36 checked against the chapter text (two carry flag 5 and flag 19 wording; flags 12 and 28 also touch KP).
- Additional-topic introductions checked against Topics 01 to 05: A shared intro (flags 8, 9), B (true after R2), C (true), D (true: no V/Q, perfusion or shunt in Topics 01 to 05), E (true after R2), F (true after R2).
- Transcription: the word diff shows no dropped or duplicated sentence beyond the documented exceptions (em dashes, Subtopic/Addendum renames, A–R option letters, stacked fractions, "/" pairs to "and", label moves) and the fixers' listed edits.

## Figures checked (6 figures, 9 cases)
- 14.1 (book p. 823) five steps, step 5 "every cell": matches. 14.2 (p. 827) spirogram, all eight values and four guide levels, bar spans: matches. 14.3 (p. 829) inspiration/expiration, diaphragm, rib, lung, P_lungs vs P_atm pills: matches. 14.4 (p. 837) three cases, all pO2/pCO2 values and arrow directions, four haem sites: matches. 14.5 (p. 839) P50 26.6, tissue 75% at 40, lung ~97% at 104, both shifts with their conditions: matches. 14.6 (p. 846) cerebrum, pons (pneumotaxic), cerebellum, medulla (rhythm centre, chemosensitive area), spinal cord, carotid artery, aortic arch, signal arrow, closing note: matches. All six captions match the book's words. No figure error found.

## What I could not check
- No NCERT copy is in the repo; NCERT statements (flags 2, 9, 10) are from my knowledge of the NCERT text.
- I did not run jest, tsc or the diagram dump (as instructed); the renders are the 2026-11-16 18:58 dumps, newer than the diagram file. Fonts in the qlmanage renders are not the app's.
- No phone or Android look at the chapter (subscripts in table heads, the `<frac>` blocks, the " | " column tables in G).
- Page images were viewed only for the six figure pages and p. 835; other tables (pp. 825, 851–852, 856, 859, 865, 871, 875–876, 880) were checked against the text layer.

## Summary
28 flags: 22 NEW, 6 REPEAT (1, 2, 5, 8, 9, 20; flag 1 is NEW for five places and REPEAT for two). Serious: 7 (flags 1 to 7: the "Both false" A–R option in 8 places with one item keyed on it, the false NCERT VC attribution, "four capacities" listing five, the circular hyperventilation sentence, the 4-vs-5 mL "rounding" excuse, emphysema "in the terminal bronchioles", and the self-contradicting 97% explanation). No figure errors; all arithmetic correct. Overall: the transcription is faithful and the numbers are sound; the remaining problems are book claims the first two reviews did not reach in the Additional topics, A–R option format, and a few fixer wordings that need a second pass.
