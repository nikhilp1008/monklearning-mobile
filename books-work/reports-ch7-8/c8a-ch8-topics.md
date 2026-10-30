# c8a — Chemistry 11, Chapter 8: the opening section (00) and Topics 01–04

## What was done
`content/textbooks/chem-11-08/topics.ts` is written word for word from pp. 346–380. It is the only file I edited.

## Pages and where each section starts and ends (checked on the page images)
- p. 345: title page. Top of p. 346: contents. Neither is copied.
- **00** Foundations — Introduction, Structural Representation & Classification: pp. 346–352. Subtopic 00 begins under the contents on p. 346. p. 348 is the "CHAPTER 8 · FIGURES" page (Figure 8.1).
- **01** Hybridization & IUPAC Nomenclature: pp. 353–358.
- **02** Isomerism: pp. 359–365. The cheat sheet ends on p. 365.
- **03** Reaction Mechanisms — Fundamental Concepts: pp. 366–373. p. 368 is the FIGURES page (Figure 8.2).
- **04** Purification, Qualitative & Quantitative Analysis: pp. 374–380. p. 380 holds only the last line of the cheat sheet (the memory aids).
- All of these match the brief. The Additional Topics start on p. 381.

## What each topic contains
Every topic has 8 parts: Concept intuition / Key definitions and properties / Key procedures and logical framework / Worked examples / Practice exercises / Crack the MCQ / Common student pitfalls and pro-tips / Cheat sheet.

| n | worked examples | practice items | MCQs | pitfalls | pro-tips | procedures | formula blocks | tables |
|---|---|---|---|---|---|---|---|---|
| 00 | 4 | 5 | 4 | 4 | 1 | 3 | 0 | 2 |
| 01 | 4 | 5 | 4 | 4 | 1 | 2 | 0 | 2 |
| 02 | 4 | 5 | 4 | 4 | 1 | 4 | 1 (DoU) | 1 |
| 03 | 4 | 5 | 4 | 4 | 1 | 4 | 0 | 2 |
| 04 | 4 | 5 | 4 | 4 | 1 | 4 | 2 (R<sub>f</sub>, the estimation formulae) | 2 |

- Topic 00 is `n: '00'`, placed first, with no `extra` flag. Its title is the text after "Subtopic 00: ".
- Kalams are book sentences:
  - 00: "Organic chemistry is, simply, the chemistry of carbon compounds."
  - 01: "There is exactly one correct IUPAC name …"
  - 02: "Isomerism requires an identical molecular formula …"
  - 03: "Get intermediates and reagent types right …" (from Exam Relevance)
  - 04: "A freshly made organic compound is almost never pure …"

## Figure ids used
- `c11-08-fig-8.1`: cited p. 347, drawn p. 348. Placed after the "Structural representations" list in Topic 00.
- `c11-08-fig-8.2`: cited p. 367, drawn p. 368. Placed after the Reactive intermediates table in Topic 03.
- No unnumbered drawings. pp. 346–380 draw no structure or apparatus except these two figures, so there are no `c11-08-00/01…04-d<k>` ids.
- Both figure ids already exist in `lib/diagrams/chemistry-11-08.ts`, and the figure tests pass.

## Errata (resolved) confirmed on the pages
- **ORG codes are gone.** The pages the errata names (chapter pp. 6, 12, 18, 25, 32 = PDF 352, 358, 364, 372, 379) read cleanly. The only gaps left are blank space (e.g. before the Pro-Tip on p. 358). One mid-sentence gap, in Topic 03 Procedure B step 4 on p. 369 ("…do the opposite). [gap] Why: …"), is closed.
- **Source notes are gone from headings** (pp. 354–355).
- **The "values checked" remark is gone** (pp. 376–377). Example values are unchanged.

## Changes from word for word (page, original → replacement)
**Cross-references:**
1. p. 347: "(covered fully in the Isomerism subtopic)" → "(covered fully in the Isomerism topic)".
2. p. 359: "(Subtopic 01)" → "(Topic 01)".
3. p. 357, Topic 01 MCQ Q2 nudge (b): "as Example 2" → "as worked example 2".
4. p. 374: "Those three steps are this subtopic." → "this topic."
- No "Subtopic 00" reference occurs in these pages.

**Layout and notation:**
5. p. 354, "Nomenclature anatomy": the book stacks labels under braces. I wrote it on one line as "locant-prefix (substituents) · root (C count) · unsaturation (-ane/-ene/-yne) · locant-suffix (principal group)". The "·" separators are mine. Please approve this form.
6. Group dashes: the book mixes a maths minus (−OH, −CH₂−, −O−, −C≡N on pp. 349–351, 360, 363, 367) with en dashes (–COOH, p. 354 on). I used an en dash for every group bond. Real minus signs are kept only for −I/−M and for charges.
7. Hybrid and orbital labels: the book sets sp³, 2s, 2p, s, p in maths italic. I wrote them upright (sp<sup>3</sup>), as the NCERT convention and earlier chapters do.
8. Degree signs: 109.5°, 3°/2°/1° as angles and ranks; temperatures as "78 °C" and "−24 °C".
9. Run-in labels made bold to match the house style, even where the book set them plain or in italics: "Why:", "Board habit:", "Trap:", "Multi-concept link:", "Rigor point/check:", "Concluding note:", "A note on configuration vs. conformation:", "Skeleton:", "Speed method:", and the T00 Ex3/Ex4 bullet labels. Italic used for emphasis is dropped.
10. Atomic number in T02 Ex3: the book prints "(Z = 35)" upright. I wrote <i>Z</i> as a variable.
11. Cheat sheet T04 "Formulae": the book has upright m, w, N, V and Unicode subscripts. I wrote italic variables and normal subscripts.
12. R<sub>f</sub> is written with an upright "f" (a label subscript). The book italicises it.
13. Carbene ":CR₂" is written with a plain colon in the table cell (the book uses a ratio colon). It is not drawn as a Lewis structure.
14. Radicals are written CH<sub>3</sub><sup>•</sup> and Br<sup>•</sup>. The book's "⟶" is written as "→".
15. p. 371: in "CH3-" and "CCl3-" the book typed a hyphen for the charge. Written as CH<sub>3</sub><sup>−</sup> and CCl<sub>3</sub><sup>−</sup>.
16. p. 355: "the ”e” being elided" has a reversed opening quote. Fixed to “e”.
17. **Answers (`ans`):** only bullets that begin with "Answer:" became `ans`, without the label: T01 Ex2 "3."; T02 Ex2 "But-2-ene only." and Ex3 "(E)-1-bromo-2-chloroethene."; T03 Ex2 "Benzyl."; T04 Ex1 and Ex2.
   - T02 Ex4 is the only one with more after the label: its `ans` is "3 stereoisomers — one pair of enantiomers (d and l) plus one meso form."
   - T04 Ex3 has two bold results, handled with the two-results rule: `ans` "%C = 40.0%; %H = 6.67%", with each step ending before its result.
   - T04 Ex4: `ans` "%N = 19.24%", with the last step ending before the result.
   - Bullets with "Name:" (T01 Ex1, Ex3, Ex4) and "Order:" (T03 Ex4) stay as steps. Those examples have `ans: ''`.
18. Memory aids are split at the book's ";" separators. T01's single aid line ("… — and for charged carbon, …") is kept as one string.
19. MCQ closing sentence: T03 Q4 "(No resonance-stabilised option is present here, so the alkyl ordering decides.)" is added once to the end of `solution`.

## Suspected errors in the book (copied as printed; for the reviewer and Nikhil)
1. **p. 350, T00 Ex4:** "The bond-line structure below …", but no structure is printed anywhere. The answer names cyclohex-2-en-1-ol, which assumes the OH carbon is next to the C=C. The question never says so; cyclohex-3-en-1-ol has the same formula C₆H₁₀O. Fix: a drawing (would be `c11-08-00-d1`), or reword to "A cyclohexene ring bears –OH on the carbon adjacent to the double bond".
2. **p. 357, T01 MCQ Q2 nudge (d):** "(d) comes from wrongly treating alternate ring carbons as sp³." That slip gives 3 ring sp² + 1 CHO = 4, not 3. You only get 3 if the carbonyl is also forgotten. Fix: "(d) treats alternate ring carbons as sp³ and forgets the carbonyl carbon".
3. **p. 357, T01 MCQ Q1 nudge (b):** calls "ethanecarboxylic acid" "a substitutive error". The conjunctive "-carboxylic acid" style is a recognised IUPAC form (cyclohexanecarboxylic acid). For an acyclic chain the preferred name is propanoic acid, so the answer stands. Suggest: "(b) uses the -carboxylic acid form, which IUPAC reserves for rings; for an open chain the COOH carbon is counted in the parent chain."
4. **p. 369, T03 "Substitution":** "as when OH⁻ replaces Br⁻ in an alkyl halide". The alkyl halide holds covalent Br, which only leaves as Br⁻. Suggest "replaces Br (which leaves as Br⁻)". Minor.
5. **p. 370, T03 Ex1 Board habit:** "markers are awarded for the reasoning" looks like a typo for "marks are awarded".
6. **p. 377, T04 Ex4:** the rounded working gives 0.0539/0.28 × 100 = 19.25%. The printed 19.24% comes from unrounded values (0.05388 g → 19.243%). Not wrong, but a careful student gets 19.25%. Suggest printing "≈ 19.24%" or the mass as 0.05388 g.
7. **p. 354, T01 Procedure B step 2:** the parent chain is "longest … (and the maximum number of skeletal double/triple bonds, as a later tie-breaker)". This follows the 2013 IUPAC rule. Older NCERT editions give unsaturation priority over length. Worth a reviewer note; not an error.
8. **Topic 03 Ex2 (benzyl as the most stable):** this is the standard NCERT/JEE answer. Noted only because some sources rank tert-butyl ≈ benzyl.

## Recomputed and correct
- **IUPAC names against their structures:**
  - 3-hydroxybutanal; but-3-en-2-one; 2-methylbut-3-enoic acid; 2-hydroxybut-3-ynoic acid
  - 2-methylpropan-1-ol; 3-oxobutanoic acid; 4-ethyl-2-methylhexane (locants {2,4} vs {3,5} consistent)
  - propanoic acid; (E)-1-bromo-2-chloroethene; 2-methylbutane; propan-1-ol; but-2-en-1-ol
  - pentan-2-one; but-1-yne (C₄H₆); C₆H₁₀O (10 H)
- **Hybridization counts:**
  - but-3-en-2-one: 3 sp²
  - benzaldehyde: 7 sp²
  - propadiene: 1 sp
  - propyne: sp³, sp, sp
  - all carbons in T01 Ex1, Ex3, Ex4
- **Isomer counts:**
  - C₄H₁₀: 2; C₅H₁₂: 3; C₁₀H₂₂: 75
  - 2,3-dichlorobutane: 3 (one meso); 2,3-dibromopentane: 4; tartaric acid: 3
  - DoU of C₆H₆ = 4; DoU of C₅H₁₂ = 0; the DoU formula itself
  - geometrical isomerism only in but-2-ene and pent-2-ene
  - optical activity only in 2-chlorobutane
- **Rankings:**
  - carbocations and radicals 3° > 2° > 1° > methyl; carbanions the reverse
  - p-methoxybenzyl > benzyl > p-nitrobenzyl
  - C–H length sp < sp² < sp³; electronegativity and acidity sp > sp² > sp³
  - %s-character 25 / 33.3 / 50
  - CCl₃⁻ more stable than CH₃⁻ (−I)
  - first-point-of-difference sets
- **Estimation percentages:**
  - %C 40.0, %H 6.67, %O 53.33 (by difference)
  - Dumas: P_dry 720 mm, V_STP 43.1 mL, N₂ 1.924 × 10⁻³ mol, N 0.0539 g, 19.24% (see error 6)
  - Carius %Cl 35.5% (AgCl = 143.5)
  - Kjeldahl 15%; the 1.4 factor (14 × 100/1000)
- **MCQ answers and nudges:** every `correct` index matches the book's answer. Every nudge was checked against its own option; only errors 2 and 3 above do not fit.
- **"The chapter never covers" claims:** pp. 346–380 make none. (The p. 381 introduction's "never teaches you to write and rank contributing structures" and "polarimetry arithmetic … the chapter omits" belong to the extras writer. From these topics: resonance is used but never taught, and polarimetry is absent, so both claims look true.)

## Where the text dump and the page images disagreed
- **sp labels:** the dump scrambles some into junk letters ("ᵏᵌ3") — T01 Ex2 and pitfall 4, T03 pitfall 2. The page shows small-font sp³/sp², written correctly.
- **Charges and radical dots:** the dump puts them on separate lines (p. 367 tables, T03 examples and MCQs). They were read from the images.
- **Stacked fractions** (p. 375 R<sub>f</sub>, p. 376 estimation formulae, pp. 377–378 working) were read from the images.

## Notes
- **Bold in tables:** the table renderer bolds the first column itself, so I added no `<b>` there. The book's bold in other columns is kept (the T00 classification subdivisions and the T04 method names).
- **Blank first cells:** two rows of T00's classification table and the first header of T03's bond-fission table are empty, as printed.

## Check results
- `npx tsc --noEmit`: exit 0, no errors.
- `npx eslint content/textbooks/chem-11-08/topics.ts`: exit 0, clean.
- `npx jest content/textbooks lib/revise lib/diagrams`: 3 suites passed, 1 skipped; 1250 tests passed, 1 skipped, 0 failed. Figure tests pass too.
- **Formula cards** (temporary test, now deleted) read right. There are three cards:
  - "A useful counting tool — Degree of Unsaturation (DoU)" (label "For CₙHₘOₚN_q", expression DoU = (2n + 2 + q − m)/2, 3 legend lines)
  - "Retardation factor"
  - "Core estimation formulae" (4 lines, 6 legend lines)
- `books-work/work-c8a/` is empty: I rendered no PNGs, and the text dump is deleted.
