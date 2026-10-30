# Writer report: Ch 8 Additional topics A–H (pp. 381–399)

File: `content/textbooks/chem-11-08/extras.ts`

## Checks
- **tsc:** `npx tsc --noEmit` exits 0, with no errors.
- **eslint:** `npx eslint content/textbooks/chem-11-08/extras.ts` exits 0.
- **jest:** `npx jest content/textbooks lib/revise lib/diagrams` was run once.
  - Result: 1 failed, 1250 passed, 1 skipped.
  - The one failure was Ch 8's "shows every diagram somewhere in its text".
  - The parallel Topic writer's `topics.ts` was being filled at that moment, so fig-8.1 and fig-8.2 were not yet placed.
  - A rerun of `book-chapters.test.ts` passed 330 of 330.
- **Formula cards:** I printed them with a throwaway test, which I then deleted. All five cards read right:
  - Specific rotation.
  - Enantiomeric excess (ee).
  - Kjeldahl with back-titration.
  - Dumas with non-STP data.
  - Carius one-liners.
- **Clean-up:** No PNGs were made; I read the page images through the PDF reader. My work folder holds only `ch8.txt`, a dump of the chapter used for the claim checks.

## Boundaries (checked on the page images)
Each topic runs about one page past the page map, because every addendum ends with its practice answers on the next page.

| Topic | Pages | Map gave |
|---|---|---|
| Shared intro | p. 381 | — |
| A | 381–383 | 381–382 |
| B | 383–386 | 383–385 |
| C | 386–388 | 386–387 |
| D | 388–390 | 388–389 |
| E | 390–391 | 390 |
| F | 391–394 | as map |
| G Summary Checklist | 394 | as map |
| H (Addendum P) | 395–399 | as map |

- p. 399 holds only Q12's answer, as the errata's typography note says.
- The book prints no "Answers to Practice" page. Each addendum's "Answers: 1. … 2. … 3." follows its own questions, and each answer is set with its own question.

## Topics written (all `extra: true`)
| n | Title | Parts | ex | practice | other |
|---|---|---|---|---|---|
| A | Writing and Ranking Resonance Structures | 4: Introduction (shared intro + A's intro); Method; Worked examples; Practice | 3 | 3 | — |
| B | Electronic Effects as Ranking Instruments | 7: Introduction; B1 — Inductive effect and acid strength; B2 — Hyperconjugation: count the α-hydrogens; B3 — The electromeric effect has a direction; B4 — One-screen group sorter; Worked examples; Practice | 3 | 3 | 1 table, 1 defgrid |
| C | IUPAC Edge Cases the Papers Use | 7: Introduction; C1–C4 (book headings); Worked examples; Practice | 2 | 3 | — |
| D | Counting Isomers Systematically | 6: Introduction; D1–D3; Worked examples; Practice | 2 | 3 | — |
| E | Polarimetry Arithmetic: Specific Rotation and Enantiomeric Excess | 4: Introduction; Method; Worked examples; Practice | 2 | 3 | 2 formulas |
| F | Estimation Numericals in Their Real Exam Forms | 4: Introduction; Method; Worked examples; Practice | 4 | 3 | 3 formulas, 1 fig |
| G | Summary Checklist | 2: Introduction; Checklist | 0 | 0 | 8 numbered questions as one `p` list |
| H | What JEE and NEET Actually Ask | 4: The Distribution; The Recurring Archetypes; The Traps; A Graded Practice Set | 5 | 12 | defgrid (4 rows), 6 archetypes, 6 traps as `p` |

- **H's worked examples:** each is tagged "Worked example", one per archetype. Archetype 6 prints none.
- **No other block types:** these pages print no MCQs, pitfall lists or pro-tips.
- **Example tags** follow Ch 1–3: "JEE Main Level — Ranking the contributors of acrolein". C.1 and C.2 have no title in the book, so their tags are "JEE Main Level" and "NEET Level".

## Figure ids
- **c11-08-F-d1**, p. 392, diagram `topic` 10: the Kjeldahl back-titration milliequivalent flow chart.
  - The book captions it "Figure 1", so it gets a d-id, not a numbered figure id. The caption belongs to the diagram.
  - The drawer's `lib/diagrams/chemistry-11-08.ts` already has this id.
- No other drawings are on pp. 381–399. The acrolein contributors, the C3 formula and the C4 seniority chain are typeset text. The B2 and B4 tables are tables.

## Cross-references reworded
1. **p. 397, Trap 4:** "in Example F.2" → "in the second worked example of Additional topic F".

Nothing else needed rewording:
- **"Addendum P":** appears only in H's heading, which became the title. There was no body text to change to "Additional topic H".
- **"Subtopic 0N" / "Subtopic 00":** none on pp. 381–399, so there was nothing to change to "Topic 0N" or "the opening section, Foundations".

Kept as printed:
- "Addendum A"–"Addendum F" throughout; "(Addendum D1)" in Q5; "(see D3)" in Q8.
- "Chapter 9", twice.
- **"the chapter’s Procedure A" (Archetype 2, p. 395).** It means Topic 02's Procedure A ("classify the relationship…", p. 361), which matches. However, every topic has its own Procedure A, so the phrase is ambiguous. Suggested fix: "Topic 02’s Procedure A" (Nikhil to decide).

## Exceptions to word for word
1. **Example labels.**
   - "Example X.n — [Level] Title" became `tag` "Level — Title".
   - The "Question:", "Reasoning." and "Answer:" labels are dropped, as in Ch 1.
   - A remark printed after an answer became the example's last step:
     - A.1: "The uncharged structure dominates…"
     - A.2: "The crack for every such question…"
     - D.2: "Identical groups…"
     - E.1: "The two unit conversions…"
     - F.2: "The factor of 2…"
     - F.3: "Two traps…"
   - The final result is cut from the last step so it is not printed twice: E.1, E.2, F.1–F.4.
2. **C.1 prints no "Answer:" line.** Its bold result "2-methyl-6-oxohexanoic acid" is the `ans`, and the step ends "Methyl at C2, oxo at C6:". C.2 has `ans: ''`.
3. **H archetypes.**
   - Each heading is a bold `p`; "What it looks like:" and "The crack:" are `p`s with bold labels.
   - Each "Worked example:" is an `ex` tagged "Worked example".
   - In Archetype 1, "Answer: 2-methyl-6-oxohexanoic acid." is the `ans`, and the trap sentence printed after it is the last step.
   - In Archetype 3, "Answer: 5." is the `ans`.
   - Archetypes 2, 4 and 5 print no "Answer:" line, so they have `ans: ''`. The text before the first full stop is `q` (2) or the whole text is `q` (4, 5), as Ch 3 did.
4. **Labels dropped.**
   - "Practice — Addendum X" became "Practice"; the answers are paired by number.
   - "Q1 (Easy)." became "[Easy]" (and Moderate/Hard likewise), with the "Answer:" labels dropped.
5. **G Summary Checklist (Nikhil to approve).**
   - The test needs at least two parts, so G has "Introduction" (the lead-in sentence) and "Checklist". "Checklist" is my word, taken from the heading.
   - The 8 questions are one `p` with numbered `<br>` lines.
   - The kalam is the lead-in with its colon changed to a full stop. H's kalam is done the same way (Ch 5 precedent).
   - The Ch 7 writer should match whatever is chosen here.
6. **Plain-text fields (Nikhil to approve).**
   - D2 part title: "the 2 to the power n rule" (book: 2ⁿ).
   - D3 part title "…cyclic isomers of C4H7Cl" and D.1 tag "C4H10O, full count".
   - B.3 tag "The −I misfit" (I upright).
   - B2 table head "α-C–H bonds".
7. **Two-column tables became `defgrid`.**
   - B4 is titled "Effect — Groups".
   - H's distribution is titled "Sub-topic — Approximate share of questions"; its bold shares stay bold.
   - The B2 table's blank "Rank" cells are `''`.
8. **Stacked fractions are written on one line, bracketed:**
   - E's and F's formulas.
   - E.1, F.3 and F.4.
   - F practice 3: "(32/233) × (0.466/0.2) × 100".
   - Q6 as printed.
9. **Formula legends are built from the text** (Ch 6 practice). The book's "with *c* the concentration…" and "with *w* the sample mass…" sentences stay as printed after the formulas.

## Notation choices this brief does not settle
- **Effect labels** are italic as printed: +*I*, −*I*, +*E*, −*E*, +*R*/+*M*, ±*M*. The Ch 8 Topic 03 writer should match.
- **α** is italic (α-carbon, α-hydrogens, [α], α_obs). σ, π, p orbital and sp³ are upright.
- **Generic halogen X is upright:** "% X", "halogen X". The book sets it italic.
- **Element symbols upright:** the book's maths-italic "%𝑁" and "%𝑆" (F practice answers) became upright "%N" and "%S".
- **R_f has an upright f** (a label subscript). The book sets it italic.
- **N- locant follows the book**, which is inconsistent: italic in the shared intro ("*N*-substituted"); upright in C2, the checklist and H. One form should be chosen.
- **E practice 2:** the book's "(-) form" became "(−)" with a real minus.
- **Bond dashes are copied as printed:** a minus sign in condensed formulas and group dashes (CH₂=CH−CHO, −COOH), and an en dash in C–H, C–C, keto–enol and C=C–C=O.
- **Upright prefixes:** n-butane, o-/p-, tert-, E/Z and R/S, as printed.
- **Leading charges** are a superscript before the formula: ⁺CH₂−…, ⁻CH₂−NO₂.
- **m with BaSO₄** uses a Unicode subscript digit inside `<sub>` (m<sub>BaSO₄</sub>), because a nested `<sub>` would flatten.
- **Word italics are dropped** (for example *write*, *rank*, *known excess* and *oxo-*), since `<i>` means maths in this app.

## "The chapter covers / never covers" claims, checked against pp. 346–380
1. **TRUE. p. 381: "never teaches you to write and rank contributing structures"; A, p. 381: "never shows you how a student produces resonance structures… or how to decide which contributor matters most".**
   - The chapter only names the resonance effect (Topic 03, p. 367) and mentions the benzyl cation's "multiple resonance structures" (Topic 03 Ex 2, p. 370).
   - It has no contributor-writing or ranking rules.
2. **TRUE. p. 381: "the six structural isomerisms plus stereoisomerism".** See Topic 02's six-type table, p. 360.
3. **TRUE. p. 381: polarimetry "the chapter omits"; E, p. 390: "never quantifies it".** Topic 02 defines d/l, racemic and meso (p. 360) but gives no specific rotation and no ee.
4. **TRUE. B, p. 383: "The chapter defines the four effects and states the carbocation, radical, and carbanion orders"; B3, p. 384: "The chapter defines the electromeric effect as the temporary, reagent-demanded transfer of a π pair".** Both are in Topic 03, pp. 367–368.
5. **PARTLY FALSE. B, p. 383: "What it does not do is show you… ordering acid strengths with the inductive effect, counting hyperconjugation structures, and directing the electromeric effect".**
   - On acid strength, Topic 03 (p. 367) says: "This is why a chlorine two carbons away strengthens an acid less than one adjacent to it". That is the distance rule applied to acid strength.
   - On counting, Topic 03's Procedure B step 2 (p. 369) says "Count the α C–H bonds available for hyperconjugation", and its cheat sheet says "more α C–H = more stable".
   - Only the +E/−E direction split is truly absent.
   - Suggested fix: "What it does not do systematically…".
6. **PARTLY FALSE. D, p. 388: "The chapter teaches you to classify a given pair; exams also ask you to count isomers".** This implies the chapter does not count, but Topic 02 does:
   - It calls DoU "A useful counting tool" and gives the 2ⁿ maximum (p. 361).
   - Example 1 enumerates the chain isomers of C₅H₁₂ (p. 362).
   - Example 4 counts the 2,3-dichlorobutane stereoisomers (3) (p. 363).
   - Practice 5 counts the 2,3-dibromopentane stereoisomers (p. 363).
   - p. 359 has "C₄H₁₀ has just 2 isomers… C₁₀H₂₂ 75".
7. **PARTLY FALSE. F, p. 391: "The chapter gives the estimation formulas in their simplest dress".**
   - Topic 04 Example 4 (p. 377) is already a Dumas problem with the aqueous-tension correction (JEE Advanced).
   - Procedure D (p. 376) already absorbs NH₃ in "a known excess of standard acid".
   - What is genuinely new: the back-titration subtraction and the PV = nRT route (the chapter converts to STP).
8. **FALSE. p. 381: "Nothing here repeats the chapter — these are the gaps it leaves."** These items repeat the chapter:
   - H Q6 (0.287 g AgCl from 0.20 g, 35.5%) is Topic 04 practice 3 with the same data (p. 378).
   - F practice 1 (Kjeldahl fails for nitro/azo/ring N) repeats Topic 04 practice 5 (p. 378).
   - H Q1 and C.2 (propanoic acid vs "ethanecarboxylic acid") repeat a Topic 01 MCQ (p. 357).
   - The oxo- (in chain) / formyl- (off chain) rule is in Topic 01's prefix table (p. 354).
   - The alphabetical tie-break is a Topic 01 MCQ (p. 357).
   - The seniority list is in Topic 01 (p. 354).
   - D.2's 2-methylbut-2-ene is Topic 02 Example 2 (p. 362).
   - Trap 2's 2,3-dichlorobutane is Topic 02 Example 4 (p. 363).
   - The carbanion order is in Topic 03 (p. 368).
   - Suggested fix: "Most of this goes beyond the chapter".
9. **TRUE. H Archetype 2: "the chapter’s Procedure A".** It exists (Topic 02, p. 361) and matches. The ambiguity is noted above.

## Suspected errors in the book (copied as printed)
1. **p. 382, Example A.1, contributor II (most important).**
   - The book says "<sup>+</sup>CH₂−CH=CH−O<sup>−</sup> — charge-separated, but the negative charge rests on oxygen… and every atom keeps its octet."
   - This is false: the terminal CH₂⁺ carbon has only six electrons. Contributor III also has one atom with only six electrons (O⁺). II ranks above III because the electron-deficient atom is carbon rather than oxygen, and the negative charge is on O. The final ranking I > II > III is correct (NCERT 8.17).
   - Fix: delete "and every atom keeps its octet", or write "though the CH₂⁺ carbon has only a sextet".
2. **p. 384, B1: "Two quantitative-seeming rules that are pure induction:".** Four bullets follow: number, distance, electronegativity and alkyl comparison. Fix: "Four".
3. **p. 385, B4 note: "Note the double life of the halogens and of −OH/−NH₂… and resonance wins when both operate".**
   - This is true for −OH and −NH₂.
   - It is false for the halogens: their −I outweighs +R (halobenzenes are deactivated). Resonance only sets the ortho/para orientation.
   - The same sentence ties this to "the directive effects of Chapter 9".
   - Fix: "for −OH/−NH₂ resonance wins; for halogens −I controls reactivity while +R still directs ortho/para".
4. **pp. 395–396, Archetype 2 worked example (hex-4-en-3-ol): "So metamerism is the one isomerism this compound does not show."**
   - It shows no tautomerism either. It is an allylic alcohol, not an enol or keto system.
   - Of the chapter's six structural types it therefore lacks two.
   - Fix: "metamerism (and tautomerism)…" or "the one isomerism among those tested here…".
5. **Old NCERT numbering.**
   - The citations: "NCERT’s section 12.7.6–12.7.7" (p. 381), "NCERT Problem 12.16" and "12.17" (p. 382), "NCERT Problem 12.19" (p. 384).
   - In the current NCERT edition this unit is Chapter 8: sections 8.7.6–8.7.7, Problems 8.16, 8.17 and 8.19. I checked that the problems are these.
   - Copied as printed, with no note added: the brief prescribes a note only for Ch 7.
   - Suggestion: add Ch 7's bracketed note after the first citation. Nikhil to decide.
6. **Minor, p. 389, D.2 title "Which formula gives more isomers?".** Pent-2-ene and 2-methylbut-2-ene have the same formula (C₅H₁₀). Fix: "Which compound".
7. **Minor, p. 386, C intro: "the papers push it at three specific seams".** Four sections follow (C1–C4), though C4 is a recap of the seniority order.
8. **Minor, p. 381, intro: "Dumas-with-corrections" (p. 395 Distribution)** lists Dumas twice ("Kjeldahl, Dumas, Carius, Dumas-with-corrections"). This is wording only; left as printed.

**No MCQ nudge problems:** H's graded set is practice, not MCQ. All of its explanations of wrong options are correct:
- Q4: (a) and (d) do invert halide/amide; (c) does put −NH₂ above >C=O.
- Q1: (d) is the common name.

## Recomputed (everything comes out)
**Resonance and electronic effects**
- A.1: the ranking I > II > III holds (NCERT).
- A.2: (b). An allylic NH₂ has no conjugation; the amide and the enol ether do.
- A practice 3: the C–O bond order is 4/3.
- B1: all four orders hold, including HCOOH > CH₃COOH.
- B2 table: 9/6/3/0.
- B.1: (i) < (ii) < (iii) < (iv).
- B.2: 9 and 0.
- B.3: (a).
- B practice: 1 holds; 2 gives 6 and 3.
- Q2: 6. Q7: (c). Q11: (a).
- B3 +E/−E: as NCERT.

**IUPAC names checked against their structures**
- HOOC−CH(CH₃)−(CH₂)₃−CHO: 2-methyl-6-oxohexanoic acid. The trap 5-formyl-2-methylpentanoic acid is consistent.
- CH₃CH₂CH(CH₃)CONHCH₂CH₃: N-ethyl-2-methylbutanamide.
- CH₃CHBr−CH=CH−CHCl−CH₃: 2-bromo-5-chlorohex-3-ene.
- OHC−CH₂−CH(CH₃)−COOH: 2-methyl-4-oxobutanoic acid.
- CH₃CON(CH₃)₂: N,N-dimethylethanamide.
- {3,4}-hexane: bromo gets 3.
- The seniority chain matches Topic 01's (p. 354).

**Isomer counts**
- C₃H₆BrCl: 5.
- Hepta-2,4-diene: 4. Hexa-2,4-diene: 3.
- C₄H₇Cl cyclic: DoU = (8 + 2 − 7 − 1)/2 = 1, giving 1 + 1 + 4 + 1 = 7. (The 1,2-isomer has two non-equivalent stereocentres, so cis and trans are each an enantiomeric pair.)
- C₄H₁₀O: 4 alcohols + 3 ethers = 7.
- C₃H₈O: 3.
- Pent-2-ene 2 vs 2-methylbut-2-ene 0.
- 2,3-dichlorobutane: 3.
- Archetype 2: C3 of hex-4-en-3-ol is a stereocentre; the C=C shows geometrical isomerism; an ether isomer of C₆H₁₂O exists.

**Polarimetry**
- E.1: 24.6/(0.2 × 2.5) = +49.2°.
- E.2: 1 and 3 mmol, excess 2/4 = 0.5, giving 9.6°.
- E practice 2: ee 0.20, 6.4 × 0.20 = +1.28°.
- Q10: +49.2. Its distractors are 24.6/2.5 = 9.84 and 24.6/0.2 = 123.

**Estimation**
- F.1: 0.5 meq, 7.0 mg, 23.73%.
- F.2: 50 − 30 = 20 meq, 280 mg, 56%.
- F.3: n = 0.92105 × 0.120/(0.0821 × 300) = 4.487 × 10⁻³ mol; 28 × 4.49 × 10⁻³ = 0.1257 g; 15.71%.
- F.4: (80/188)(0.12/0.15) × 100 = 34.04%.
- F practice 2: 40 − 8 = 32 meq, 448 mg, 56%.
- F practice 3: (32/233)(0.466/0.2) × 100 = 32.0%.
- Q6: 35.5%. Q9: 23.7%; its distractors are 47.4 (×2) and 11.85 (÷2).
- Trap 4: the unfactored 25 meq is less than 30 meq, as stated.

**Other**
- Distribution shares: 1/5 + 1/3 + 1/8 + 1/3 = 99%; analysis + isomerism ≈ 2/3.
- Benzene C–C distances: 139, 154 and 134 pm, as NCERT.

## Errata (Ch 8, resolved)
- The ORG codes, heading source notes and "values checked" remarks all sit in the chapter's own pages (its pp. 6–32). None appear on pp. 381–399, and there are no gaps there.
- The typography note ("the Supplement ends with a page that holds only the answer to Q12") matches p. 399.
