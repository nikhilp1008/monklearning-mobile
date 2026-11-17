# Biology 11 Ch 16, reviewer 3 (Opus): the whole chapter as it now stands

Share: content/textbooks/bio-11-16/topics-1-3.ts, topic-4-extras-a-f.ts, extras-g-j.ts; lib/diagrams/biology-11-16.ts; lib/revise/keypoints-biology-11-16.ts. Book pp. 943 to 1011 (bio11.pdf, bio11.paged.txt; errata pp. 1174 to 1176 read for Ch 16).

Method, own pass first: a word-level diff script of every string literal in the three content files against the book text for pp. 945 to 969, 969 to 991 and 991 to 1011 (every difference read and sorted into allowed exception, fixer wording, or slip); every block of the three files and all 40 key points read line by line; page images viewed for the figure plates (pp. 949, 956, 958, 965, 973) and the table pages 954, 995, 996; all six figures (nine cases) rendered from the current diagram file to SVG and PNG outside jest (a scratch copy run under node; all built-in checks pass) and compared with the plates; every number, sum and equation recomputed; every Additional-topic introduction checked against Topics 01 to 04 as built; every item of new-text-F1.md and new-text-F2.md read for correctness. Only then were review-R1.md and review-R2.md read, to mark each flag NEW or REPEAT. Nothing in the repo was edited. [NEW] marks our own proposed wording.

Verdict in one line: the transcription is faithful (no dropped or miscopied book sentence; MCQ keys, counts and arithmetic all right; figures match the plates), and the earlier fixes are almost all in place. What is left is (a) one book error both reviews missed (the kidney does secrete ammonia), and (b) a group of fixer wordings that are themselves wrong or contradict another part of the chapter, mostly in the Additional-topic introductions and the urine-concentration figures.

## Flags, most serious first

### 1. [NEW] Topic 02 says "the kidney removes ammonia" is wrong for mammals; the chapter's own Topic 03 (and NCERT) say the tubule secretes NH3
- Where: topics-1-3.ts, Topic 02, Concept intuition, "Limiting conditions & assumptions" paragraph (p. 954). Related "only" lines: Topic 02 CUET worked example ("the kidney only <b>excretes</b> the already-formed urea"), Topic 02 pitfall 1 ("The kidney only excretes urea."), Topic 02 cheat sheet "Conversion site" ("(kidney only excretes)"), J Question 10 answer ("it only excretes urea that has already been synthesised in the liver").
- Says now: "Second, “the kidney removes ammonia” is wrong for mammals: by the time blood reaches the kidney the ammonia has already been converted to urea in the <b>liver</b>. The kidney excretes the urea; the liver makes it."
- Wrong: NCERT states that the PCT and DCT secrete ammonia (NH3) into the filtrate to keep pH and ionic balance, and this chapter says so itself (Topic 02 Framework B "DCT ... tubular secretion of H+, K+ and NH3/NH4+"; Topic 03 Step 3 and the "Tubular secretion" definition; H's secretion table; D's glutaminase line). A student told that "the kidney removes ammonia" is wrong will reject a true NEET statement. The error the book means is "the kidney makes urea from ammonia".
- Fix [NEW] (Topic 02 paragraph): "Second, “the kidney turns ammonia into urea” is wrong for mammals: by the time blood reaches the kidney, most of the ammonia has already been converted to urea in the <b>liver</b>. The kidney excretes the urea (and secretes a little ammonia into the urine to help keep the blood’s pH steady); the liver makes it. If the liver fails, it is <b>ammonia</b> (not urea) that dangerously builds up in the blood."
- Fix [NEW] (the "only" lines): CUET example "the kidney <b>excretes</b> the already-formed urea" (drop "only"); pitfall 1 "The kidney excretes urea; it does not make it."; cheat sheet "ammonia → urea in the <b>liver</b> (the kidney excretes the urea)"; J Q10 "The <b>kidney</b> does not convert ammonia to urea; it excretes urea that has already been synthesised in the liver."
- Kind: biology error. Source: book (the "only" lines also book). Confidence: certain (for the main sentence).

### 2. REPEAT (R2-5 applied wrongly) G says the human 1,200 mOsm/L is "not in NCERT"; H and the key points say it is NCERT's
- Where: extras-g-j.ts, G, Method, "3. Terrestrial animals", Desert mammals bullet (fixer wording; book p. 992).
- Says now: "Can concentrate urine to several times the human maximum (about 1,200 mOsm/L; kangaroo rats about 5,000–6,000 mOsm/L; these values are not in NCERT) via very long loops of Henle."
- Wrong: "these values" covers the human 1,200 mOsm/L, which is NCERT's (inner medulla about 1200 mOsm/L; urine nearly four times the filtrate's 300). H's key-facts heading in the same file says "the human 1,200 mOsm/L are NCERT’s". The two contradict each other on the screen.
- Fix [NEW]: "<b>Desert mammals:</b> Can concentrate urine to several times the human maximum (about 1,200 mOsm/L, the NCERT figure; kangaroo rats reach about 5,000–6,000 mOsm/L, a value not in NCERT) via very long loops of Henle. Counter-current multiplier is maximally developed. Minimal sweating."
- On founder decision 6 (F2): the kangaroo-rat figure of about 5,000 to 6,000 mOsm/L agrees with the standard physiology value (Schmidt-Nielsen's measurements, about 5,500); keep it, or reduce to "several times the human maximum" if the founder wants no number outside NCERT.
- Kind: unclear/misleading (internal contradiction). Source: introduced by the fix. Confidence: certain.

### 3. REPEAT (R2-2b applied wrongly) A's introduction says the chapter does not set out what the multiplier and exchanger each do; Topic 03 does
- Where: topic-4-extras-a-f.ts, Additional A, Introduction, paragraph 2 (book p. 977).
- Says now: "It does not set out what each does (active pumping creates the gradient, passive exchange preserves it) or how urea recycling works, which passively reinforces the gradient."
- Wrong: Topic 03 as built says exactly this. Practice 5 answer: "The loop actively generates and amplifies the gradient (multiplier) by pumping salt; the vasa recta merely preserves it while removing reabsorbed water (passive exchange)"; Step 4 says the loop "progressively stack[s] salt" and the vasa recta carries water away "without washing out the precious salt gradient"; the Topic 03 mnemonic is "Multiply in the loop, Exchange in the recta". Only the "how urea recycling works" part is true.
- Fix [NEW]: "It says in outline that the loop’s salt pumping builds the gradient and the vasa recta preserves it, but it does not set out how each one works step by step, or how urea recycling, which passively reinforces the gradient, works. All three are tested in NEET High-Difficulty items (the book’s estimate from past papers, not official figures)."
- Kind: false "the chapter does not cover" claim. Source: fixer wording (R2's draft). Confidence: certain.

### 4. REPEAT (R2-2f applied wrongly) E says renin is mentioned in the chapter "in passing" / "in a clause"; Topic 04 develops it at length
- Where: topic-4-extras-a-f.ts, Additional E, Introduction, first sentence, and Method step 1 second sentence (book p. 987).
- Says now: Introduction "The chapter mentions that the kidney secretes erythropoietin and renin and “activates vitamin D” (each in passing), but it does not develop the kidney’s full endocrine portfolio." Step 1 "Renin, erythropoietin and the activation of vitamin D are mentioned in the chapter, each in a clause; the 1α-hydroxylase step, calcitriol’s actions and prostaglandins are additions."
- Wrong: renin has a whole mechanism in Topic 04 (Key definitions, Mechanism 1 RAAS in five steps, a 5-mark worked example, an MCQ, the cheat sheet, Figure 16.6). Only erythropoietin and vitamin D activation are a clause each (Topic 04, "Role of other organs"). The step-1 sentence also repeats the introduction inside a method step about renin.
- Fix [NEW] Introduction: "The chapter develops renin’s part in the RAAS (Topic 04), but it mentions erythropoietin and the kidney’s activation of vitamin D only in passing, and it does not develop the kidney’s full endocrine portfolio."
- Fix Step 1: delete the sentence "Renin, erythropoietin and the activation of vitamin D are mentioned in the chapter, each in a clause; the 1α-hydroxylase step, calcitriol’s actions and prostaglandins are additions." (the introduction now says it). If the founder wants it kept, [NEW]: "Renin’s role is developed in the chapter; erythropoietin and the activation of vitamin D are mentioned there in a clause each; the 1α-hydroxylase step, calcitriol’s actions and prostaglandins are additions."
- Kind: false "the chapter does not cover" claim. Source: fixer wording (R2's draft). Confidence: certain.

### 5. REPEAT (R2-3 wording) H's PCT cell calls NCERT's 70–80% "a different measure"
- Where: extras-g-j.ts, H, Method, "Tubular reabsorption by segment" table, PCT row, Fraction cell (book p. 995).
- Says now: "about 65% of filtered Na+ and water (the usual physiology figure; NCERT’s 70–80% of electrolytes and water is a different measure and does not add up with the 25%, 5% and 3% below); 100% glucose; 100% amino acids".
- Wrong: NCERT's 70–80% is the same kind of figure (the share of the filtered electrolytes and water taken back in the PCT); it is a higher, rounder estimate, not a different measure. Calling it "a different measure" invents a distinction a student may repeat. The key point for H says it correctly ("applies to electrolytes and water and would not fit with 25%").
- Fix [NEW]: "about 65% of filtered Na<sup>+</sup> and water (the usual physiology figure; NCERT gives 70–80% of electrolytes and water, a higher estimate that does not add up with the 25%, 5% and 3% below; give 70–80% in an NCERT-based question); 100% glucose; 100% amino acids"
- Kind: unclear/misleading. Source: fixer wording. Confidence: likely.

### 6. [NEW] B Example 2 (TGF): the answer says GFR is "restored", but nothing in the question lowers it
- Where: topic-4-extras-a-f.ts, Additional B, Worked example 2 "Tubuloglomerular Feedback" (book pp. 980 to 981), solution and `ans`.
- Says now: solution "... → RAAS activates → angiotensin-II constricts the efferent arteriole and aldosterone increases Na+ reabsorption → GFR is maintained or raised toward normal."; ans "Renin release increases; GFR is partially restored by compensatory mechanisms, but the sustained effect is reduced medullary concentrating ability."
- Wrong: blocking NKCC2 makes the macula densa read "low NaCl", so the afferent arteriole dilates and renin rises: TGF can no longer lower GFR, and GFR is kept up (it tends to rise, not fall). "Restored" and "raised toward normal" imply a fall the question never sets up; a student cannot tell which way GFR moves.
- Fix [NEW] solution clause: "→ RAAS activates → angiotensin-II constricts the efferent arteriole and aldosterone increases Na<sup>+</sup> reabsorption → GFR is kept up (the feedback can no longer lower it)."
- Fix [NEW] ans: "Renin release increases and the afferent arteriole dilates, so GFR is kept up rather than lowered; the sustained effect is reduced medullary concentrating ability."
- Kind: unclear/misleading. Source: book. Confidence: likely.

### 7. REPEAT (R1-6 wording) Topic 03's urine-volume sentence gives 1–1.5 L and then "the figures run from about 1 to 1.8 L"
- Where: topics-1-3.ts, Topic 03, Concept intuition, "Step two is the rescue" paragraph (book p. 962).
- Says now: "...leaving only about 1–1.5 litres to leave as urine (a flat 99% of 180 L would leave 1.8 L, so the figures run from about 1 to 1.8 L)."
- Wrong: the bracket undoes the headline: it states 1–1.5 L and then a 1–1.8 L range, which is the inconsistency the fix was meant to remove. (1.5 L of 180 L is 99.17% reabsorbed, so "about 99%" already fits 1.5 L.)
- Fix [NEW]: "...leaving only about 1–1.5 litres to leave as urine (the NCERT figure; exactly 99% of 180 L would leave 1.8 L, so the 99% is a rounded value)."
- Kind: number / unclear. Source: fixer wording. Confidence: certain.

### 8. [NEW] Key point G2 quotes desert-mammal figures the chapter no longer shows
- Where: keypoints-biology-11-16.ts, topic 10 (Additional G), second Remember point (pp. 992 to 994).
- Says now: "Desert mammals have very long loops and concentrate urine to several times the human maximum of about 1,200 mOsm/L (the book’s 4,000–8,000 mOsm/L and the kangaroo rat’s 8,000 are not NCERT’s figures)."
- Wrong: G, H and I as built no longer print 4,000–8,000 or 8,000; G now gives kangaroo rats about 5,000–6,000 mOsm/L. The key point sends the student to numbers they cannot find and that disagree with the chapter.
- Fix [NEW]: "Desert mammals have very long loops and concentrate urine to several times the human maximum of about 1,200 mOsm/L (kangaroo rats about 5,000–6,000 mOsm/L, a figure not in NCERT)."
- Kind: key point out of step with the chapter. Source: ours (key points). Confidence: certain.

### 9. [NEW] G practice 3: Malpighian tubules do not make a "dilute" fluid
- Where: extras-g-j.ts, G, Practice, item 3 answer (book p. 994).
- Says now: "The Malpighian tubules produce dilute fluid that is modified in the hindgut by water reabsorption, leaving dry uric acid crystals."
- Wrong: the primary urine of Malpighian tubules is roughly isosmotic to the haemolymph (water follows secreted K+ and salts), not dilute; the hindgut then reabsorbs water and salts.
- Fix [NEW]: "The Malpighian tubules produce a watery fluid (roughly isosmotic to the haemolymph) that is modified in the hindgut by water reabsorption, leaving dry uric acid crystals."
- Kind: biology error. Source: book. Confidence: likely.

### 10. REPEAT (R2-24 ii applied wrongly) Key point J1: the question repeats itself and the answer says the weighting "gives no counts"
- Where: keypoints-biology-11-16.ts, topic 13 (J), Remember point (pp. 999 to 1003).
- Says now: q "What question shapes does the book list for this chapter, and how should you use the book’s question-shape guide for this chapter?"; a begins "The weighting is the book’s estimate from past papers, not official figures, and gives no counts, so treat it as a guide to what to revise first, not a tally."
- Wrong: the question says "for this chapter" twice; and the book's weighting does give numbers (~35–40%, ~30%, ~20%, ~15%), which J prints, so "gives no counts" is not true of the book (the intent is that the key point gives none).
- Fix [NEW] q: "What question shapes does the book list for this chapter, and how should you use its topic weighting?"
- Fix [NEW] first sentence of a: "The book’s topic shares are its estimate from past papers, not official figures, so treat them as a guide to what to revise first, not a tally."
- Kind: unclear. Source: ours. Confidence: certain.

### 11. REPEAT (R1-12 wording) Dialysis: "the same selective exchange as in the nephron, diffusion down gradients"
- Where: topic-4-extras-a-f.ts, Topic 04, "A short procedure: how dialysis stands in for a failed kidney" (book p. 972).
- Says now: "It is the same selective exchange as in the nephron, diffusion down gradients, borrowed and run outside the body."
- Wrong: the nephron's selective recovery is largely active transport (the chapter says so: PCT "by active transport", the thick limb pumps salt); dialysis is passive diffusion across a membrane. The sentence tells the student the two are the same process.
- Fix [NEW]: "It is selective diffusion down concentration gradients across a membrane, run outside the body."
- Kind: unclear/misleading. Source: fixer wording (the book's "filtration's logic" was also loose). Confidence: likely.

### 12. [NEW] Figure 16.3: the juxtamedullary nephron is drawn like the cortical one
- Where: lib/diagrams/biology-11-16.ts, `draw163` (Figure 16.3, plate p. 958; Topic 02).
- Says now (drawing): the "Juxtamedullary nephron" dot sits on the outer capsule at the lower right (`jdot`, t = 0.6 on the outer bean), with a short zig-zag along the lower edge that stops at the cortex–medulla line; the cortical nephron is the same short zig-zag at the top. The figure check only tests that one dot is high and one low.
- Wrong: a juxtamedullary nephron's corpuscle lies in the inner cortex next to the medulla and its long loop runs deep into a pyramid; that is the whole distinction Topic 02 teaches beside this figure ("long loops plunging deep into the medulla"). As drawn the two nephrons look alike. The book's plate is equally crude, so this is the book's figure, but the redraw need not copy the weakness.
- Fix [NEW] (drawing): put the juxtamedullary corpuscle dot on the dashed cortex–medulla line (near the base of the lowest pyramid) and draw its loop as a long U running down into that pyramid toward the calyx; keep the cortical nephron's dot high in the cortex with a loop that barely crosses the dashed line; extend `check163` to test that the juxtamedullary loop reaches at least half way into a pyramid.
- Kind: figure error (teaching). Source: book figure, kept in the redraw. Confidence: likely.

### 13. [NEW] J Question 10: the stem gives the answer away
- Where: extras-g-j.ts, J, Graded Practice Set, Question 10 (book p. 1010).
- Says now: "A patient with chronic liver failure is found to have elevated blood ammonia and low blood urea levels. Which organ’s failure best explains this finding, and why does it produce this specific pattern?"
- Wrong: the stem names the organ ("liver failure") that the question asks the student to find, so options (a) and (b) cannot tempt anyone and the item tests nothing.
- Fix [NEW]: "A patient is found to have elevated blood ammonia and low blood urea levels. Which organ’s failure best explains this finding, and why does it produce this specific pattern?"
- Kind: unclear (question design). Source: book. Confidence: certain.

### 14. REPEAT (R1-10 wording) Topic 03 Step 3 says the PCT secretes only "to some extent"; H says it has the largest share of H+ secretion
- Where: topics-1-3.ts, Topic 03, Physiological mechanisms, "Step 3: Tubular secretion" (book p. 964).
- Says now: "In the DCT and collecting duct (and also to some extent in the PCT) the tubule actively adds H+, K+ and NH3 to the forming urine (and can reabsorb HCO3−)."
- Wrong: NCERT lists the PCT's selective secretion of H+, ammonia and K+ (and HCO3− absorption) first; H's practice 5 answer, as fixed, says "The PCT (the largest share, by Na+/H+ exchange)". "To some extent" understates it and contradicts H.
- Fix [NEW]: "In the PCT, the DCT and the collecting duct the tubule actively adds H<sup>+</sup>, K<sup>+</sup> and NH<sub>3</sub> to the forming urine (and can reabsorb HCO<sub>3</sub><sup>−</sup>)."
- Kind: unclear / internal inconsistency. Source: fixer wording (book placed it in DCT and CD only). Confidence: likely.

### 15. [NEW] H Example 2: SGLT transporters are not saturated "at the threshold"
- Where: extras-g-j.ts, H, Worked example 2 "Renal Threshold" (book p. 996).
- Says now: "The PCT’s SGLT transporters are saturated at the threshold concentration; above this, the transporters cannot keep up → excess glucose spills into the urine (glycosuria)."
- Wrong: glucose first appears in urine (the threshold, about 180 mg/dL) before the transport maximum is reached, because nephrons saturate at different loads; "saturated at the threshold" overstates it. Minor for NEET.
- Fix [NEW]: "Above the threshold concentration the PCT’s SGLT transporters begin to saturate and cannot keep up → excess glucose spills into the urine (glycosuria)."
- Kind: overgeneral. Source: book. Confidence: possible.

### 16. [NEW] G Example 2: "With more water available to be drawn osmotically"
- Where: extras-g-j.ts, G, Worked example 2 "Desert Mammal vs Human" (book p. 993).
- Says now: "With more water available to be drawn osmotically from the collecting duct, a much smaller volume of highly concentrated urine can be produced with minimal water loss."
- Wrong: the cause is a steeper gradient, not "more water available"; the clause reads as if the animal had more water.
- Fix [NEW]: "With a steeper gradient, more water can be drawn osmotically out of the collecting duct, so a much smaller volume of highly concentrated urine is produced with minimal water loss."
- Kind: unclear. Source: book. Confidence: possible.

### 17. [NEW] B Introduction: "Both appear" after four items
- Where: topic-4-extras-a-f.ts, Additional B, Introduction (fixer wording, R2-2c draft).
- Says now: "It does not give the nature of each peptide, the three targets of angiotensin-II, the channels aldosterone acts on, or tubuloglomerular feedback (TGF), ... Both appear in higher-difficulty NEET questions (the book’s estimate from past papers, not official figures)."
- Wrong: four things are listed, so "Both" does not fit.
- Fix [NEW]: "These appear in higher-difficulty NEET questions (the book’s estimate from past papers, not official figures)."
- Kind: transcription/wording slip. Source: fixer wording. Confidence: certain.

### 18. [NEW] E "integrated axis": the renin arm is about blood pressure, not oxygen or minerals
- Where: topic-4-extras-a-f.ts, Additional E, Method, "The integrated renin-erythropoietin-calcitriol axis" paragraph (book p. 987).
- Says now: "All three work together to maintain oxygen delivery and mineral homeostasis."
- Wrong: renin/angiotensin-II keep blood pressure and GFR, as the same paragraph says.
- Fix [NEW]: "Together they maintain blood pressure and GFR, oxygen delivery and mineral homeostasis."
- Kind: unclear. Source: book. Confidence: likely.

### 19. [NEW] J Introduction: the "estimate" label is attached to the wrong words
- Where: extras-g-j.ts, J, Introduction (fixer wording, R2-18e draft).
- Says now: "Question patterns of the kind NEET uses (the book’s estimate from past papers, not official figures), each with a fully worked example, followed by a graded practice set."
- Wrong: the label reads as if the question patterns were an estimate; it belongs to the shares and frequency claims that follow.
- Fix [NEW]: "Question patterns of the kind NEET uses, each with a fully worked example, followed by a graded practice set. The shares and frequencies below are the book’s estimate from past papers, not official figures."
- Kind: unclear. Source: fixer wording. Confidence: certain.

### 20. [NEW] J Archetype 5: "(which parallels it)" after the plural "loops"
- Where: extras-g-j.ts, J, Archetype 5 "The approach that cracks it" (fixer changed "loop" to "loops").
- Says now: "Medullary structures include the loops of Henle of juxtamedullary nephrons and the vasa recta (which parallels it)."
- Fix [NEW]: "Medullary structures include the loops of Henle of juxtamedullary nephrons and the vasa recta (which runs alongside them)."
- Kind: transcription/wording slip. Source: fixer wording. Confidence: certain.

### 21. REPEAT (R1-15d wording) Topic 02 mnemonic gloss does not explain the mnemonic
- Where: topics-1-3.ts, Topic 02, Cheat sheet `aids` (book p. 961).
- Says now: "<b>Mnemonic: “Cooks Prepare Delicious Dishes” → Cortex: PCT, DCT</b> (loop of Henle is the odd one out, in the <b>medulla</b>). (Cortex: PCT, DCT; “Dishes” is just the end of the phrase.)"
- Wrong: the bracket repeats "Cortex: PCT, DCT" and does not map the words; a student cannot see which word stands for what.
- Fix [NEW] (replace the second bracket): "(Cooks = Cortex, Prepare = PCT, Delicious = DCT; “Dishes” only completes the phrase. The renal corpuscle is in the cortex too.)"
- Kind: unclear. Source: fixer wording. Confidence: certain.

### 22. [NEW] Figure labels against the corrected text (two small points)
- (a) Figure 16.5 (plate p. 965), label "Descending limb / water out, / impermeable / to salt", while Topic 03 Step 2, H and the key points now say "almost impermeable to salts" (NCERT "almost impermeable to electrolytes"). Fix [NEW] label lines: "Descending limb", "water out,", "almost impermeable", "to salt". Kind: figure/text mismatch. Source: book label. Confidence: possible (keeping the book's label is defensible).
- (b) Figure 16.6 case 2 (ADH) shows only "LOW BP / volume" above the hypothalamus box (the header repeated per case is our layout decision), while Topic 04 says ADH answers mainly to concentrated body fluids. Fix [NEW] caption (2): "(2) ADH: when body fluids are too concentrated or volume falls, the hypothalamus / posterior pituitary releases ADH, which acts on the collecting duct (water reabsorption), which aids BP recovery." Kind: figure caption, incomplete. Source: our layout plus the book's column placement. Confidence: possible.

### 23. [NEW] Low, style: three Additional-topic kalams are bland "the chapter states" sentences
- Where: kalam of C ("The chapter states that ADH makes the collecting duct permeable to water, producing concentrated urine."), G ("The chapter mentions osmoregulation as a function shared across animal groups in Topic 01.") and H ("The chapter states the three steps of urine formation and identifies PCT as the major reabsorption site.").
- They are true but are meta sentences, not a line worth remembering. Optional [NEW]: C "ADH puts aquaporin-2 into the apical membrane; no AQP2, no water reabsorption."; G "Freshwater animals fight water coming in; marine bony fish fight water going out."; H "The PCT takes the bulk; the later segments fine-tune."
- Kind: style. Source: ours. Confidence: possible.

## Earlier flags applied wrongly (summary)
- R2-2b (A introduction): new wording denies what Topic 03 states (flag 3).
- R2-2f (E introduction and step 1): new wording puts renin "in passing" (flag 4).
- R2-3 (H PCT cell): "a different measure" (flag 5).
- R2-5 (G desert mammals): "these values are not in NCERT" covers NCERT's own 1,200 (flag 2); key point G2 left on the old book figures (flag 8).
- R2-24 (ii) (key point J1 question): joined into a repeating question (flag 10).
- R1-6 (Topic 03 urine volume): the bracket reopens 1–1.8 L (flag 7).
- R1-10 (Topic 03 Step 3): "to some extent in the PCT" (flag 14).
- R1-12 (dialysis): "the same selective exchange as in the nephron" (flag 11).
- R1-15d (mnemonic note): does not map the words (flag 21).
- R2-2c and R2-18e/18i wordings: small slips (flags 17, 19, 20).
All other R1 (1 to 17) and R2 (1 to 25) flags are applied correctly as far as I can see; the urea-cycle equation as now printed balances (2 NH3 + CO2 + 3 ATP + 2 H2O → urea + 2 ADP + AMP + PPi + 2 Pi: with 3 ATP hydrolyses using 3 H2O and 2 NH3 + CO2 → urea + H2O, the net water is 2 on the left).

## Rulings asked of the founder in F1/F2 (my view)
- "adult land amphibians" (F1 items 11, 14, 20): keep; NCERT's "many terrestrial amphibians" supports the qualifier.
- 1–1.5 L headline (F1 item 23): keep 1–1.5 L, with flag 7's bracket.
- Teaching-order sentence in Topic 01 (F1 item 3): keep; true and useful.
- Kangaroo-rat 5,000–6,000 mOsm/L (F2 decision 6): right to standard physiology; keep with flag 2's wording.
- F table "reabsorption" cells (F2 decision 2): the cells as now written are correct.
- J distribution note (F2 decision 3): fine as is.

## Counts verified
- Blocks per topic (loaded from the files): Topic 01: 8 parts, 1 table (7 rows), 5 examples, 5 practice, 5 MCQs (keys b c d d b, as printed), 4 pitfalls, 1 pro-tip, cheat 10 rows + 1 aid, fig 16.1. Topic 02: 3 defs, 2 procs, 4 examples, 5 practice, 4 MCQs (b d c a), 4 pitfalls, modes table 3 rows, figs 16.2, 16.3, 16.4. Topic 03: 10 defs + 1 formula, 4 examples, 5 practice, 4 MCQs (b c a d), 4 pitfalls, fig 16.5. Topic 04: 4 examples, 5 practice, 4 MCQs (c b b c), 4 pitfalls, 7 cheat rows, fig 16.6. A to H: 2 examples and 6 practice each (16 examples = the book's Example X.n count); tables A 3, F 6, G 6, H 5 + 3 rows; procs B, C, E. I: 8 snapshots, 33 rows. J: 5 archetypes, 5 worked examples, 10 graded questions, 2 tables (4 and 10 rows), 3 drilling points. Key points: 40 (5 each for Topics 01 to 04, 2 each for A to J).
- Every MCQ and worked-example key re-derived and the only correct option; every assertion–reason item's fourth option is "A false, R true".
- Numbers recomputed: 125 × 1440 = 180,000 mL = 180 L; 125 × 60 × 24 ÷ 1000 = 180 L; renal blood flow 1100–1200 of about 5000 mL/min = 22–24%, about <frac>1/5</frac>; (180 − 1.8)/180 = 178.2/180 = 0.99; (180 − 1.5)/180 × 100 = 178.5/180 × 100 = 99.17%; NFP 55 − (30 + 15) = +10 mmHg, 40 − 45 = −5 mmHg, zero at GHP 45; sodium shares 65 + 25 + 5 + 3 = 98% and 70 + 25 + 5 + 3 = 103%; J shares 35–40 + 30 + 20 + 15 = 100–105%; Topics 02 + 03 = 65–70% ("about two-thirds"); angiotensin I decapeptide less two residues = octapeptide; urea ∶ TMAO 2 ∶ 1; seawater about three times marine-teleost osmolarity matches "one-third"; kidney 10–12 × 5–7 × 2–3 cm, 120–170 g; 10<sup>6</sup> nephrons; glucose threshold 180 mg/dL; gradient 300 → 600 → 900 → 1200 mOsm/L (figure scale equal steps).
- Notation: no em dash in any of the five files; no slash fraction outside units; every fraction stacked; ions with real sub/superscripts; every genus name in the content and key points is italic (Planaria, Amoeba, Paramecium, Hydra, Amphioxus); ratios use ∶.

## Figures checked (rendered from the current file, all nine cases; every built-in check passes)
- 16.1 against plate p. 949: five organs in order with the book's functions, "Flame cells", "Antennal gland", the "Increasing complexity" arrow and the note box: match.
- 16.2 against p. 956: right kidney on the viewer's left and slightly lower, renal arteries from the aorta, veins to the IVC, ureters, bladder, urethra: match.
- 16.3 against p. 958: every label present, pyramids apex to the calyces, renal column leader between pyramids, cortex leader in the cortex band: match, except flag 12.
- 16.4 against p. 958 (two cases): water out of the descending limb, salt out of the ascending limb, afferent wider and drawn thicker, efferent narrower, JGA where the afferent arteriole meets the DCT, peritubular capillaries, vasa recta: match.
- 16.5 against p. 965: scale Cortex 300, Outer medulla 600, 900, Inner medulla 1200, duct water-out arrows (ADH), vasa recta flow down then up, "Concentrated urine": match, except flag 22a.
- 16.6 against p. 973 (three cases): every box and arrow label, "ACE (lungs)", dashed ANF inhibition ending at a JGA box (our added box): match, except flag 22b.
- Pages judged to hold no drawing: all other pages of 943 to 1011 (D's enzyme arrows on pp. 984 to 986 are typeset equations), as the diagram report says.

## Could not check
- NCERT's own text is not on this machine: the NCERT statements used (PCT secretes H+, NH3, K+; 70–80% PCT; "almost impermeable" descending limb; 1200 mOsm/L inner medulla; 1–1.5 L) are from memory of the Class 11 text. The kangaroo-rat figure and the Malpighian-fluid point are standard physiology from memory, not looked up.
- jest, tsc and the app were not run (not allowed); figures were rendered by importing a scratch copy of the diagram file under node (only the type import changed) and viewed through qlmanage, without the app's fonts. No phone or Android look.
- Page images were viewed only for the five plates and pp. 954, 995, 996; the rest was compared by the text dump and the word diff.

## Summary
23 flags (22 numbered as content plus one style item), of which 14 are NEW and 9 are REPEAT (an earlier flag fixed in wrong or self-contradicting wording). Serious, a teacher would mark them at once: flags 1 (the kidney does secrete ammonia), 2 (the human 1,200 mOsm/L called non-NCERT, contradicting H), 3 and 4 (two false "the chapter does not cover" introductions written by the fix). Flags 5 to 11 are clear but smaller; 12 to 23 are low. Transcription, answer keys, arithmetic and figures otherwise check.
