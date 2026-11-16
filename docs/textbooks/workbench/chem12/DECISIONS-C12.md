# Chemistry 12 — founder decisions

Same process as Chemistry 11 (chem11/DECISIONS-C11.md items 5–7 apply): work on main in ~/Developer/monk-learning-app, pair by pair; a pair is committed and pushed only after expert review, founder approval of fixes and new wording, the Android check and the founder's "Yes, push".
Standing Chem 11 rules carried over: old NCERT numbering = one note at the first citation (C11 item 17); significant figures = show the book's number and the rounded one (C11 item 18).

## 2026-11-03
1. Ch 2 "Capstone" (pp. 85–88): Topic 04 "Concentration Cells & Reference Tables" = Part A (concentration cells, worked examples, MCQ) + Part B (reference tables) + the Topic Mastery Checklist. Part C's one-page formula sheet is NOT copied (the app's Formula sheet does that job). The "How to use this section" box is not copied either (it describes Part C).

## 2026-11-03, Chapter 1–2 review decisions
2. Ch 1 fixes: "Everything, optional included" (REVIEW-rc1a, REVIEW-rc1b).
3. Ch 2 fixes: "Everything, optional included" (REVIEW-rc2a, REVIEW-rc2b), incl. Kohlrausch's law once on the Formula sheet.
4. Ch 1 Additional A, worked example 1: correct K_H to 2.03 × 10⁹ and 5.07 × 10⁹ Pa (mole fractions ×10⁻⁵; answer stays 60.1%); key point to match.
5. Magnesium: E°(Mg²⁺/Mg) = −2.36 V everywhere, matching Chemistry 11 (table B1 and Ch 2 graded Q9). Mg²⁺ λ° = 106.0.

## 2026-11-03, how Chapter 3 onward is built
6. One chapter at a time (the founder's Mac was hanging with 14 helpers on two chapters). At most 3 helpers at once; helpers do not run tsc or the whole test suite; the coordinator runs those once.

## Chapter 3 founder decisions (Nov 3)
7. All fixes from rc3a and rc3b applied, optional included, including the new line on sums of rate constants (rc3b flag 8). Reports: reports-03/rc3a.md, rc3b.md.
8. Rate-constant definition in Ex A.1 and Ex C.2: keep the book's answers (1000 s, 96 atm), state the definition in the question, add a step showing the other answer (500 s, 92.2 atm) and when each applies.
9. Molecularity of ester and sucrose hydrolysis: keep "molecularity 2", tag "as NCERT counts it", explain the convention once.
10. NCERT-wording fixes (ozone, "generally", "bimolecular", KClO3 quote marks) applied now from the reviewers' memory; still to check against a printed NCERT, along with the magnesium values.

## Chapter 4 founder decisions (Nov 3)
11. All fixes from rc4a and rc4b applied, optional included. Reports: reports-04/rc4a.md, rc4b.md. Not applied: rc4a flag 34 (Fig 4.2 bond lengths): not in the book and only from memory, so the figure stays as the book's.
12. V³⁺/V²⁺: NCERT's line ("comparatively low", stability of V²⁺) kept as the line to write in an exam, followed by what the numbers show (low only beside Fe, Mn, Co; above Ti and Cr).
13. Energy terms behind E°: one formula card, Additional B's fuller master equation. Topic 04 keeps the same words as a plain sentence.
14. NCERT-wording fixes applied now from the reviewers' memory; still to check against a printed NCERT: Ni hydration reason, conductors, coins, 2.84 BM, La³⁺ 106 pm, iodate in neutral or faintly alkaline, bimolecular etc. La³⁺ radius in the text = 103.2 pm to match Fig 4.3, with a note that NCERT's table starts at 106. MnO₄⁻ with iodide: iodate kept here, Chemistry 11's I₂ question unchanged, one line explains both.

## Coordination Compounds founder decisions (Nov 4)
15. All fixes from rc5a, rc5b, rc5c applied, optional included. Reports: reports-05/rc5a.md, rc5b.md, rc5c.md. One absorbed-light card: Additional C's; Topic 03's card becomes "Spin state criterion" with a plain sentence.
16. Exam citations: kept with the dates removed ("a recent JEE Main paper"); the unconfirmed 2025 formula becomes a general description; percentage shares labelled as an estimate.
17. Spectrochemical memory sentence gets one new word: "If Brothers Could Find Our Hidden Oxen Wandering, Nobody'd Envy No Cunning Cow."
18. A figure inside a worked example now reaches the text Ask Drona reads (lib/textbooks.ts blockText).
19. Chapter forms settled by the coordinator: "essentially always high spin" for tetrahedral; ligand formula order keeps what students meet, with the convention stated once; unidentate/monodentate and didentate/bidentate both kept, with the synonyms once. NCERT-wording fixes applied from reviewers' memory; on the printed-copy list.

## Haloalkanes and Haloarenes founder decisions (Nov 5)
20. All fixes from rc6a, rc6b, rc6c applied, optional included, incl. the Fig 6.2 inset redrawn edge-on. Reports: reports-06/rc6a.md, rc6b.md, rc6c.md, rc6c-addendum.md (the addendum replaces same-numbered fixes in rc6c).
21. SN1 ladder: 3° > 2° > 1° > CH₃X, allyl and benzyl "fast", with one note on the coaching-sheet form "benzyl ≈ allyl > 3°".
22. Iodoform: the errata's sentence added, plus the exam line on alcoholic AgNO₃ on heating.
23. Two questions changed: B.3(b) t-BuOK in DMSO; A.1 names the hydroxide. Answers unchanged.
24. Chapter forms: density "among short-chain haloalkanes…"; racemisation "complete in the ideal case" once with the master sentence in Topic 02; (R)/(S) italic. NCERT-wording and values from reviewers' memory go on the printed-copy list.

## Alcohols, Phenols and Ethers founder decisions (Nov 5)
25. All fixes from rc7a, rc7b, rc7c applied, optional included. Reports: reports-07/rc7a.md, rc7b.md, rc7c.md. The chapter's pKa set: carbonic acid 6.4, ethanol 15.9, phenol 10.0, water 15.7 (Fig 7.3 redrawn to it).
26. Rectified spirit: 95.5% kept everywhere as the exam figure, with one note where it is defined (95.6% by mass, about 97% by volume; the Solutions chapter's "about 95% by volume"). The memory line "wood/grain, 95.5/100, poison/petrol" stays word for word.
27. Methanol antidote: NCERT's reason (ethanol swamps the enzyme of the aldehyde-to-acid step) kept as the board-exam line, then the true mechanism (competition for alcohol dehydrogenase at the first step).
28. "What JEE and NEET Actually Ask" Q9, which repeats the worked example: kept as printed.
29. Coordinator's calls: Additional C's formula card writes R–OH, R–Br, R–Cl so all three lines render as formulas; "a 3° halide only eliminates" keeps NCERT's exam answer with one NCERT-tagged sentence (Topic 03 and Additional D alike).

## Aldehydes, Ketones and Carboxylic Acids founder decisions (Nov 5)
30. All fixes from rc8a, rc8b, rc8c applied, optional included. Reports: reports-08/rc8a.md, rc8b.md, rc8c.md. Boiling-point table's acid row = ethanoic acid (60, 391 K), Fig 8.5 redrawn to it; dipole ≈ 2.3–2.9 D (methanal 2.33, acetone 2.88) in all four places; ethanol pKa 15.9.
31. Butan-1-ol in NCERT's ester puzzle (E.2, G Q9): question kept as printed, answer identifies C from the oxidation clue, plus one sentence that acid dehydration really gives mainly but-2-ene (pointing to Alcohols, Phenols and Ethers).
32. One spelling for the chapter: Tollens’, Fehling’s, Benedict’s, Brady’s; Zn–Hg with an en dash; red-brown Cu₂O. Étard keeps its accent.
33. Memory lines: "Bicarbonate fizzes for acids, not ordinary phenols" (one added word); "Short tail floats, long tail sinks" (backwards) → "Short tail dissolves, long tail floats". Other aids stay word for word with the true scope beside them.
34. Coordinator's calls: no new formula card for the Tollens' equation (rc8c D3); "only methanal is a gas" kept as NCERT's line (rc8c D4); Section 3 of Topic 02 reordered 3A–3D (rc8a flag 25); G's last heading "What the Addenda Add" as in Chapter 7.

## Amines founder decisions (Nov 5)
35. Book 9.4 "Master Revision & Reaction Compendium" (pp. 458–462): kept as Topic 04, an ordinary topic, word for word; its sections 9.4.1–9.4.9 are the parts, tables as real tables.
36. All fixes from rc9a, rc9b, rc9c applied, optional included. Reports: reports-09/rc9a.md, rc9b.md, rc9c.md. Chapter forms (rc9a F1–F4): carbon ledger "halide via nitrile +1" (the carbon enters with KCN); aqueous basicity with both series, pKb "aniline 9.38 > NH₃ 4.75 > aliphatic 3.00–4.22", EDG rule at para with the ortho effect; mustard oil for 1° aliphatic amines; isocyanide R–NC / R–N≡C. Hydrolysis of diazonium above 283 K; nitro spoke via the fluoroborate; leaving group –N(CH₃)₃⁺ (rc9c D2).
37. Nitrous acid with 1° aliphatic amines: NCERT's "alcohol + N₂" kept as the board answer, then the true mixture (propan-2-ol and propene outweigh propan-1-ol).
38. The book's Summary Checklist (pp. 473–474) becomes its own Additional topic E "Summary Checklist" (as Chemistry 11); "What JEE and NEET Actually Ask" becomes F.
39. Hofmann's rule: "the least substituted alkene is usually the major product", with the conjugated exception (2-phenylethyl → styrene) and the corrected reason.
40. Coordinator's calls: B.2's "optically active amine A" left (a sample); Fig 9.6's "+" on the ring-bonded N kept; over-and-under arrow conditions accepted for the Android check.

## Biomolecules (Nov 7)
41. Coordinator's call by precedent (decision 38): the book's Summary Checklist (p. 526) is its own Additional topic E; "What JEE and NEET Actually Ask" is F.
42. Biomolecules (Nov 7, founder): apply every reviewer flag, optional included (rc10a, rc10b, rc10c in reports-10/).
43. Glucose's equilibrium rotation is +52.5° throughout Chapter 10 (NCERT's value), with one note naming the data-book +52.7° (at Topic 01's specific-rotation card and in A's text). A's arithmetic becomes 93x = 33.5, x ≈ 0.36.
44. Topic 02's Devanagari "कमल"/"मलक" is written in Roman letters: "…the same handful of Devanagari aksharas, ka, ma and la, can be strung into “kamal” or “malak”…" (the app's fonts have no Devanagari).
45. The glucose open-chain share is "< 0.5%" everywhere (Fig 10.2 changes from "< 1%").

## p-Block, Groups 15–18 (Nov 7)
46. Coordinator's call by the founder's Chemistry 11 p-Block layout (DECISIONS-C11 item 13): Sections 1–6 → Topics 01–06 (the opening paragraph is Topic 01's "Introduction"); Sections 7–9 and the main "What JEE & NEET Actually Ask" → Topic 07 "Worked examples & exam practice"; the supplement's Addenda A–H → Additional topics A–H; its own "What JEE and NEET Actually Ask" → I. Supplement figures 1–9 get ids c12-11-<letter>-d<k>.
47. p-Block (Nov 7, founder): apply every reviewer flag, optional included (rc11a, rc11b, rc11c in reports-11/).
48. ClF₃/BrF₃'s shape is "bent T-shaped" (NCERT's name) everywhere in the chapter, the MCQ option included; Fig 8's short tab "Bent T" stays for width.
49. Coordinator's calls where the reviewers' texts differ: ozone in all three places (Topic 03, D, G) uses rc11a's wording "+142 kJ per mole of O₃ formed, so +284 kJ for the equation as written; NCERT prints +142 kJ mol⁻¹ beside the equation"; SO₂ bleaching uses rc11a's nascent-hydrogen wording in Topic 04 and Topic 07's three places; the Haber line is rc11a's; an empty "Method" heading is dropped and its sub-headings are the parts (B–F; A keeps "Method", which has its own text); ratios use ∶ (U+2236) chapter-wide; element-name cells read name first ("Fluorine (F)").

## One p-Block chapter (Nov 7)
50. Founder, after Raasikh's reply (the catalogue has one p-Block chapter, Class 12 "p-Block Elements", covering Groups 13–18; no Class 11 row will be added): the Class 11 book's Ch 10 (Groups 13–14) and the Class 12 book's Ch 11 (Groups 15–18) are ONE chapter on the Class 12 shelf, Groups 13–14 first. Topics 01–06 Class 11, 07–13 Class 12; Additional A–K Class 11, L–T Class 12 (re-lettered from A–I, with their cross-references). The two "Worked examples & exam practice" and the two "What JEE and NEET Actually Ask" topics carry ": Groups 13 and 14" / ": Groups 15 to 18". No new wording beyond those labels and re-lettered references.
