# Biology 11 Ch 16, R3 fixes: new text and decisions

All 23 flags of review-R3.md applied (flag 23 optional kalams, 22a and 22b included). Files: topics-1-3.ts (T), topic-4-extras-a-f.ts (E), extras-g-j.ts (G), lib/diagrams/biology-11-16.ts, lib/revise/keypoints-biology-11-16.ts. Units keep the non-breaking space the files already use.

## [NEW] wordings (as in the review, applied verbatim)
1. T Topic 02, Concept intuition, Limiting conditions: "Second, “the kidney turns ammonia into urea” is wrong for mammals: by the time blood reaches the kidney, most of the ammonia has already been converted to urea in the <b>liver</b>. The kidney excretes the urea (and secretes a little ammonia into the urine to help keep the blood’s pH steady); the liver makes it. If the liver fails, it is <b>ammonia</b> (not urea) that dangerously builds up in the blood."
   "only" lines: Topic 02 CUET example "the kidney <b>excretes</b> the already-formed urea"; pitfall 1 "The kidney excretes urea; it does not make it."; cheat sheet Conversion site "ammonia → urea in the <b>liver</b> (the kidney excretes the urea)."; G Question 10 answer "The <b>kidney</b> ... it excretes urea that has already been synthesised in the liver." (the review's longer J Q10 wording was not used: the answer line is a bullet that begins "The kidney does not convert ammonia to urea; it excretes urea..." so only "only" was dropped).
2. G Method 3, Desert mammals: "(about 1,200 mOsm/L, the NCERT figure; kangaroo rats reach about 5,000–6,000 mOsm/L, a value not in NCERT)".
3. E A, Introduction: "It says in outline that the loop’s salt pumping builds the gradient and the vasa recta preserves it, but it does not set out how each one works step by step, or how urea recycling, which passively reinforces the gradient, works."
4. E Introduction: "The chapter develops renin’s part in the RAAS (Topic 04), but it mentions erythropoietin and the kidney’s activation of vitamin D only in passing, and it does not develop the kidney’s full endocrine portfolio." Method step 1: the repeated sentence deleted (review's primary option).
5. G H table PCT cell: "...NCERT gives 70–80% of electrolytes and water, a higher estimate that does not add up with the 25%, 5% and 3% below; give 70–80% in an NCERT-based question..."
6. E B Worked example 2: solution "→ GFR is kept up (the feedback can no longer lower it)."; ans "Renin release increases and the afferent arteriole dilates, so GFR is kept up rather than lowered; the sustained effect is reduced medullary concentrating ability."
7. T Topic 03 "Step two": "(the NCERT figure; exactly 99% of 180 L would leave 1.8 L, so the 99% is a rounded value)".
8. Key point G2 (topic 10): "(kangaroo rats about 5,000–6,000 mOsm/L, a figure not in NCERT)". Also the header comment in keypoints file (lines ~92) still describes the old 4,000 to 8,000 figures; comment only, left (not student-facing).
9. G Practice 3 answer: "The Malpighian tubules produce a watery fluid (roughly isosmotic to the haemolymph) that is modified in the hindgut..."
10. Key point J1: q "What question shapes does the book list for this chapter, and how should you use its topic weighting?"; a starts "The book’s topic shares are its estimate from past papers, not official figures, so treat it as a guide to what to revise first, not a tally."
11. E Topic 04 dialysis: "It is selective diffusion down concentration gradients across a membrane, run outside the body."
12. Figure 16.3: juxtamedullary dot now on the dashed cortex–medulla line at the base of the lowest pyramid, loop a long U running into that pyramid to near its apex (constant JLOOP); cortical loop shortened to barely cross the dashed line; new built-in check (loop reaches at least half way into the pyramid). Not viewed on a render (no app); passes the diagram layout checks.
13. G J Question 10 stem: "A patient is found to have elevated blood ammonia and low blood urea levels. Which organ’s failure best explains this finding, and why does it produce this specific pattern?" Key (c) unchanged.
14. T Topic 03 Step 3: "In the PCT, the DCT and the collecting duct the tubule actively adds H<sup>+</sup>, K<sup>+</sup> and NH<sub>3</sub> ..."
15. G H Example 2: "Above the threshold concentration the PCT’s SGLT transporters begin to saturate and cannot keep up → excess glucose spills into the urine (glycosuria)."
16. G Example 2: "With a steeper gradient, more water can be drawn osmotically out of the collecting duct, so a much smaller volume of highly concentrated urine is produced with minimal water loss."
17. E B Introduction: "These appear in higher-difficulty NEET questions (...)".
18. E Method, integrated axis: "Together they maintain blood pressure and GFR, oxygen delivery and mineral homeostasis."
19. G J Introduction: "Question patterns of the kind NEET uses, each with a fully worked example, followed by a graded practice set. The shares and frequencies below are the book’s estimate from past papers, not official figures." (J's kalam already lacked the label.)
20. G Archetype 5: "(which runs alongside them)".
21. T Topic 02 mnemonic gloss: "(Cooks = Cortex, Prepare = PCT, Delicious = DCT; “Dishes” only completes the phrase. The renal corpuscle is in the cortex too.)"
22a. Figure 16.5 label: "Descending limb", "water out,", "almost impermeable", "to salt" (check string updated to match). Applied although the book label is defensible.
22b. Figure 16.6 caption 2 (ADH): "(2) ADH: when body fluids are too concentrated or volume falls, the hypothalamus / posterior pituitary releases ADH, which acts on the collecting duct (water reabsorption), which aids BP recovery." The figure's boxes are unchanged.
23. Kalams: C "ADH puts aquaporin-2 into the apical membrane; no AQP2, no water reabsorption."; G "Freshwater animals fight water coming in; marine bony fish fight water going out."; H "The PCT takes the bulk; the later segments fine-tune."

## Printed answer keys, numbers, titles, headings changed
None. No MCQ key, count, number or heading changed (only the G Q10 stem lost "with chronic liver failure"; key (c) still the only correct option). The urine-volume sentence keeps 1–1.5 L; 1.8 L remains only as the arithmetic of exactly 99%.

## Founder decisions and conflicts
- Kangaroo-rat 5,000–6,000 mOsm/L kept as a labelled non-NCERT figure (reviewer agrees); alternative is to reduce to "several times the human maximum".
- Flag 1: kept the book's NCERT-consistent point that urea is made in the liver; added the nuance (kidney secretes a little NH3) beside it rather than dropping wording.
- Flag 22a departs from the book's printed figure label ("impermeable to salt") to match the text ("almost impermeable"); revert if the founder prefers the plate verbatim.
- Flag 12 redraws the book's crude figure; please eyeball it on a device.
- keypoints comment block (top of file) still mentions 4,000–8,000; harmless.

## Not applied
Nothing skipped.

## Tests
book-rules / book-chapters / display-fit (-t filter): 3 suites passed, 27 tests. lib/diagrams -t "biology.11.16": passed, 28 tests. lib/revise: 137 passed. eslint on the changed files: clean (no output).
