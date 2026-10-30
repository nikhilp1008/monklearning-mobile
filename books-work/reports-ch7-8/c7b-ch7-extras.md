# Writer report: Ch 7 Additional topics A–H (pp. 327–344), file content/textbooks/chem-11-07/extras.ts

Everything was read from the page images (PDF pp. 327–344). The text dump was used only for prose; it scrambles every charge and subscript.

## Results
- `npx tsc --noEmit`: **0 errors.** An earlier run failed only on `chem-11-07/topics.ts` (`TOPICS_3_4`), while the topics writer was still editing that file. That writer has since fixed it.
- `npx eslint content/textbooks/chem-11-07/extras.ts`: **clean.**
- **jest** (`content/textbooks lib/revise lib/diagrams`): 1240 passed, 1 failed, 1 skipped.
  - The one failure is in **Chapter 8**, not my chapter: "shows every diagram of the chapter somewhere in its text" (c11-08-fig-8.2 is not yet used).
  - The **Chapter 7 suite passes 11/11.** That includes "draws only figures that exist", since the drawer has already added c11-07-A-d1.
- **Formula card:** I printed the cards with a temporary test (since deleted). The one card ("The two anchor half-reactions") reads correctly: 4 lines, 2 legend lines.
- **Balanced equations:** a script checked all 31 equations on these pages for atoms and charge. All balance, including the errata's As₂S₃ equation (−28 on both sides).

## Page boundaries (differences from the page map)
| Topic | Book pages | Map said |
|---|---|---|
| Shared intro | p. 327 | same |
| A | 327–331 (its practice answer 3 sits at the top of p. 331) | 327–330 |
| B | 331–333 (its practice and answers are on p. 333) | 331–332 |
| C | 333–334 | same |
| D | 335–336 (practice answers on p. 336) | 335 |
| E | 336–338 (answers at the top of p. 338) | 336–337 |
| F | 338–339 | same |
| G Summary Checklist | p. 339 | same |
| H (Addendum P) | 340–344 (p. 344 is only "Gaps This Addendum Closes") | same |

## Topics written (all `extra: true`)
| n | Title | Parts | ex | practice | other |
|---|---|---|---|---|---|
| A | Reading the Standard Electrode Potential Table | Introduction; Method; Worked examples; Practice | 3 | 3 | ladder defgrid (16 rows), proc "The three-question drill", fig c11-07-A-d1 |
| B | Which Species Can Disproportionate? The Three-State Rule | same 4 | 3 | 3 | — |
| C | Combined n-Factors: Salts Oxidised in Two Places | same 4 | 3 | 3 | — |
| D | Iodometry: The Iodine–Thiosulphate Chain | same 4 | 3 | 3 | 1 formula (the anchor half-reactions) |
| E | Inside the Permanganate Titration: Lab Facts the Papers Probe | Introduction; Method — the four facts; Worked examples; Practice | 2 | 3 | — |
| F | High-Electron Half-Reactions | same 4 as A | 2 | 3 | — |
| G | Summary Checklist | Introduction; Summary Checklist | 0 | 0 | 8 numbered questions, word for word, as a `p` list |
| H | What JEE and NEET Actually Ask | The Distribution; The Recurring Archetypes; The Traps; A Graded Practice Set; Gaps This Addendum Closes | 5 | 12 | table (6 rows), 6 traps (`mistakes`) |

- H's 5 worked examples are the archetypes' "Worked example" items.
- These pages have no MCQs, pitfall lists or pro-tips. The book's graded set Q1–Q12 has options and answers, so it is `practice`, as in Ch 1–6.
- Each addendum's "Answers:" paragraph is split by number, and each answer is set with its own question (1:1, none missing).

## Figure ids
- **c11-07-A-d1, p. 329, topic index 4:** "Figure 1: The standard electrode potential ladder".
  - The caption belongs to the diagram, so it is not repeated in the text.
  - The drawer's file has this id with `topic: 4`.
  - Its caption also says "NCERT Table 8.1" (old numbering). That is the drawer's to note.
- I found no other drawings on pp. 327–344. The ladder table (p. 328) and the H distribution table are tables, and every equation is typeset.

## Errata
- **Remaining known issue (NCERT Table 8.1 / Problem 8.5):** copied as printed everywhere.
  - Where they occur: pp. 327 (×2), 328 (ladder title), 331 (Problem 8.5), 332 (B.1 answer), 339 (checklist 1), 343 (Q5), 344 (Gaps).
  - **Note added once, on p. 327,** right after the sentence with the first citation ("NCERT’s Table 8.1 of standard electrode potentials is a ranking instrument … that gives every value its meaning."): "(In the current NCERT edition redox is Chapter 7, so this table and problem are numbered 7.x; find them by title.)"
  - I put it after that sentence rather than inside it, so the sentence still reads.
- **Fluorine exception (resolved): confirmed on the p. 331 image.** It reads exactly as the errata's "Now" text, from "The other halogens disproportionate in alkali …" through "… in hot alkali all three give the halate. The chlorine case:", then Cl₂ + 2OH⁻ → ClO⁻ + Cl⁻ + H₂O. Copied verbatim.
- **As₂S₃ (Topic 02, p. 312) is not on my pages.**
  - The p. 312 text dump shows the corrected equation with 28 NO and 8H⁺, and it balances (−28 on both sides).
  - I did not check its image; that belongs to the topics writer.
- **Internal codes and the medium-dependence line are in Topics 01–04, not on these pages.** I saw no gaps or codes on pp. 327–344.

## Cross-references
- **Book "7.1"–"7.4" → "Topic 01"–"Topic 04": none.** I checked pp. 327–344 on the dump and the images: there is no "7.x", "§", "Section" or "subtopic" reference.
- **"Addendum P" → "Additional topic H": none in the body.** "Addendum P" appears only in the heading, which became the title.
- **Kept as printed:**
  - "Addendum A/D/E" references (A.1 answer, H archetype 4 and 5, Q11), and "Addenda A, D, and E above". These all precede H in the app, so "above" is still true.
  - "fact 4 above" (E.2) and "the reduction half above" (F.1), both within the same topic.
  - Part title "Gaps This Addendum Closes".

## Every "the chapter covers / never covers" claim, checked against Topics 01–04 (pp. 296–326)
1. **p. 327, shared intro, list of what the chapter gave: TRUE.**
   - Three lenses: Topic 01 cheat sheet.
   - Peroxide and hydride exceptions: Topic 01 rules.
   - Both balancing methods: Topic 02.
   - Four reaction types: Topic 04.
   - Titrations and cells: Topic 03.
2. **p. 327: "Table 8.1 … the chapter uses only in fragments": TRUE.** Topic 03 quotes individual E° values. No table is printed.
3. **p. 327 and p. 335 (D): "the iodometric titration chain … that the chapter never sets up": TRUE.** No iodometry appears in Topics 01–04. Thiosulphate and tetrathionate appear only as oxidation-number exercises in Topic 01.
4. **p. 327: "Nothing here repeats the chapter; every section is a gap closed": FALSE.**
   - B.3 (Cu⁺, E° +0.52 and +0.16, E°cell = +0.36 V, K ≈ 10⁶, "cuprous salts are rare in aqueous solution") repeats Topic 03 Example 4 [JEE Advanced] (pp. 316–317) with the same data and conclusion.
   - B's ceiling test repeats Topic 04's limiting condition (p. 320: "An element already at its maximum (e.g. Mn in MnO₄⁻) … cannot disproportionate").
   - The halogen order F₂ > Cl₂ > Br₂ > I₂ (A.3) and "metals above H liberate H₂" (A.2) are in Topic 04 (p. 321).
   - H Q3 mirrors Topic 03 MCQ Q2 (p. 318).
5. **p. 327 (A intro): "The chapter taught you to compute E°cell = E°cathode − E°anode from two given values": TRUE** (Topic 03).
6. **p. 327 (A intro): "What it did not give you is … where the zero sits, what a negative value means, and how to read oxidising and reducing strength straight off a list": PARTLY FALSE.**
   - **True part:** the SHE / zero is never mentioned in Topics 01–04.
   - **But reading strength straight off E° values is taught in Topic 03:**
     - Example 2 [NEET Speed Trap] (p. 315): "Most positive E° ⇒ strongest oxidising agent … Most negative E° ⇒ its metal is the strongest reducing agent".
     - MCQ Q2 (p. 318).
     - The Pro-Tip (p. 319).
     - §3B's "activity-series feasibility shortcut: arrange metals by E° (the electrochemical series)" (p. 315).
   - **And in Topic 04 (p. 321),** which defines the reactivity series as "equivalently, by increasing standard reduction potential".
7. **p. 331 (B intro): "The chapter taught you to recognise a disproportionation once the equation is in front of you", i.e. not the forward question: PARTLY FALSE.**
   - Topic 04 §1 (p. 320) and its cheat sheet (p. 326) state the intermediate-state rule and the ceiling.
   - Topic 01's cheat sheet (p. 304) has "Highest O.N. ⇒ oxidant only … intermediate ⇒ can …".
   - Topic 03 Example 4 asks the forward question "Will Cu⁺ disproportionate in aqueous solution?" and proves it with E°cell. That is exactly B.3.
   - Topic 04 practice 5 (p. 324) also asks it.
8. **p. 333 (C): "The chapter defines the n-factor for one species changing one oxidation state": TRUE.**
   - Topic 03 §2 (p. 314) defines it per formula unit.
   - Ferrous oxalate and combined n-factors do not appear in Topics 01–04.
9. **p. 336 (E): "The chapter covers which acid to use (dilute H₂SO₄, never HCl or HNO₃) and the self-indicating endpoint": TRUE** (Topic 03, pp. 313, 315, 318, 319).
10. **p. 336 (E): "none [of the four lab facts] appears in the chapter": TRUE.** Heating, autocatalysis, cold FAS and primary-standard status are all absent. The only trace is Topic 03 MCQ Q4's stem, "A KMnO₄ solution is being standardised" (p. 318), which implies fact 4 without stating it.
11. **p. 338 (F): "the chapter’s ion-electron method": TRUE** (Topic 02).
12. **p. 338 (F): "the acid-medium nitrate reductions from the chapter’s world": PARTLY FALSE.**
    - NO₃⁻ → NO (3 e⁻) is in the chapter, in Topic 02 practice 5 (As₂S₃).
    - NO₃⁻ → NO₂ (1 e⁻, concentrated acid) appears nowhere in Topics 01–04.
13. **p. 341 (H, archetype 5): "the chapter’s exception list": TRUE** (Topic 01 watch-list, p. 304).
14. **p. 344 (H, Gaps): "Three skills … only touched lightly in the main chapter": PARTLY FALSE, and inconsistent with D and E.**
    - "Lightly" fits the E° table.
    - But iodometry is never set up (D's own words), and the permanganate lab conditions do not appear at all (E's own words).
    - Suggested fix: "absent from, or only touched lightly in, the main chapter".

## Suspected errors in the book (copied as printed)
1. **p. 327: the "Nothing here repeats the chapter" sentence and the A and B introductions.** See claims 4, 6 and 7. Suggested fix: soften, e.g. "most of this goes beyond the chapter"; "what it did not give you is the table itself, with its zero…".
2. **p. 332, B.2: "P in H₃PO₄ is +5 (ceiling — oxidant only)" and the answer "HNO₃ and H₃PO₄ are oxidants only".**
   - P(+5) cannot be oxidised further, but H₃PO₄ is practically not an oxidising agent.
   - The correct exam statement is that it cannot act as a reducing agent. H's archetype 2 says "cannot do both", which is right.
   - Suggested fix: "P in H₃PO₄ is +5 (ceiling — cannot be oxidised)" and "HNO₃ is an oxidant only; H₃PO₄ cannot act as a reductant".
3. **p. 333, C intro: "Miss the second contribution and the answer is off by a factor of three."**
   - This holds only if the oxalate is dropped (n = 1 instead of 3: 2 mL instead of 6 mL).
   - Dropping the iron gives n = 2, off by a factor of 1.5 (4 mL), as C.1's own trap answers show.
   - Suggested fix: "off by a factor of three (or of 1.5)".
4. **p. 338, F: "an 8-electron reduction, the largest single-species drop in the Class 11 repertoire".** It is not unique: SO₄²⁻ → S²⁻/H₂S (+6 → −2) is also 8 e⁻. Suggested fix: "one of the largest".
5. **p. 336, D.3: "Moles of MnO₂ = 6.0/2 = 3.0 mmol = 0.003 × 87 = 0.261 g".** It sets an amount equal to a mass in one chain. Suggested fix: "3.0 mmol; mass = 0.003 × 87 = 0.261 g".
6. **p. 334, practice C3: an assumption is not stated.** The answer needs the KMnO₄ to act with the same n-factor in both reactions, but the question never states the medium. Suggested fix: add "(acidic medium throughout)".
7. **pp. 341–342, H archetype 5 (assertion–reason), low confidence.** The book says O's cap at +2 is due to having no d-orbitals, "not merely its electronegativity". Oxygen shows positive states only with fluorine, the one element more electronegative, so many keys treat electronegativity as part of the reason. For the expert to decide.

**Recomputed: everything else comes out.**
- **Electrode potentials:** all E° gaps in A (+0.32, +0.59, −0.23, ±0.76, 0.25, −0.34, ±0.55, 0.46, 2.36) and H₂O₂ (1.10 V).
- **Cu⁺:** log K = 6.09, K = 1.2 × 10⁶ ≈ 10⁶.
- **Oxidation states:**
  - Cl oxoanions +1, +3, +5, +7, with electron bookkeeping 4 = 4, 8 = 8 and 6 = 6.
  - S₄O₆²⁻ +5, 0, 0, +5 (average +2.5).
  - Brown-ring Fe +1.
  - N oxides +1, +2, +3, +4.
- **n-factors:** FeC₂O₄ 3, Fe₂(C₂O₄)₃ 6, FeSO₄ 1, Fe₂(SO₄)₃ 0.
- **Titration arithmetic:**
  - Volumes: 6.0 mL and 120 mL (×2).
  - Amounts and percentages: 2 mol, 75 mol%, 22.5 g, 3 mol I₂, 13.05% ≈ 13%.
  - Concentrations: 0.16 N (100x = 16), 0.08 M.
  - Archetype figures: 62.5 mL, 0.1264 g.
  - Ratio: 5 : 6.
- **Coefficients:**
  - 4Zn/10OH⁻ difference 6.
  - H⁺ coefficient 4.
  - H₂O coefficient 4 (MnO₄⁻/S²⁻).
  - Cl⁻ − H₂O = 2.
  - Fe²⁺/Cr₂O₇²⁻: 6, 1, 14, 6, 2, 7, so the relations a = x, z = 7b, c = 2z hold.
- **Ladder:** the table's E° values match NCERT.

## Exceptions to word for word (page, original → what I wrote)
- **p. 327: errata note added** (see Errata).
- **Answer printed twice: the step now ends before the result, which stays in `ans`.**
  - C.1 "… = 3.0/0.5 = 6.0 mL." → "… = 3.0/0.5"
  - C.2 "… = 10/5 = 2." → "… = 10/5"
  - C.3 "… × 100 = 75." → "… × 100"
  - D.1 "… = 0.16 N, and 100x = 16." → "… = 0.16 N"
  - D.2 "… produce 6/2 = 3 mol of I₂." → "… produce 6/2"
  - D.3 "… × 100 ≈ 13%." → "… × 100"
  - F.1 "Difference = 10 − 4 = 6." → "Difference = 10 − 4"
- **Example headings and labels:**
  - "Example A.1 — [NEET Speed Trap] Ranking from the table" → tag "NEET Speed Trap — Ranking from the table" (the Ch 1 style). The same applies to every example; E.1 has no title, so its tag is "JEE Main Statement Level".
  - "Question:", "Reasoning." and "Answer:" labels dropped.
  - Unlabelled remarks after an answer ("The trap answer is …", "Note that …", "Three reactions, …") are kept in `ans`, in the book's order. None carries a run-in label.
- **Practice:**
  - "Practice — Addendum X" → part "Practice".
  - Answer numbers dropped (answers paired with their questions).
  - Graded set: "Q1 (Easy)." → "[Easy]" at the start of `q`; "Answer: (b)." → "(b). …".
- **Added part title "Worked examples"** over each addendum's run of examples. The book has only per-example headings; this follows the Ch 1–3 precedent.
- **G: split into "Introduction" (the lead-in sentence) and "Summary Checklist" (the 8 questions).** The test needs at least 2 parts. Kalam = the lead-in, as printed, ending in a colon.
- **H archetypes:**
  - Each heading → bold `p`.
  - "Worked example:" → `ex` tagged "Worked example", and archetype 5 → "Worked example (assertion–reason)".
  - In each, `q` = the first sentence, the rest = steps, `ans` = ''. The book prints no separate answer line.
- **A ladder table:** 2 columns → `defgrid`. Its heads go in the title: "The ladder (selected values from NCERT Table 8.1, 298 K): Half-reaction (reduction) — E° / V".
- **D formula block:**
  - Kicker "The two anchor half-reactions" (the book's bold lead). The bold lead is not repeated as a `p`.
  - The n(I₂) and n(S₂O₃²⁻) values, printed beside each equation, go on their own `main` lines.
  - The two legend lines ("= n-factor of iodine / of thiosulphate") are mine, written to meet the legend rule.
- **Book italics for emphasis dropped:** "table itself", "can", "recognise", "and" (B.2; checklist 3), "before" (E fact 1), "difference" (F.1), "reduced" (Q3). The drill's italic question leads became bold run-in labels.
- **Layout:** running headers/footers and page numbers dropped; "60 ∘C" → "60 °C".

## Notation choices
- E° is written <i>E</i>° with upright cell/cathode/anode subscripts.
- Generic metals M, X, Y, Z are upright (Nikhil's rule).
- The variables n, N, M, V, K, x and a…z are italic where the book sets them italic. The "relation among a, b, c, x, y, z" in archetype 3's question form is upright, as printed.
- meq subscripts are upright. "meq<sub>I₂ liberated</sub>" uses a Unicode ₂ inside `<sub>`.
- Mohr's salt dots are spaced as printed ("FeSO₄ · (NH₄)₂SO₄ · 6H₂O").
- "∼ 60 °C" is written as printed.
- Ratios "5 : 6" are as printed (in text, not a formula).
- Trap leads keep "Trap 1:" … in bold. **Check on device whether the `mistakes` list also numbers them.**
- The H table keeps the book's bold weights.
- Part titles keep the book's capitals ("The Distribution" etc.), as Ch 1–3 do.

## Unsure / for Nikhil
- The G two-part split and its kalam ending in a colon.
- The defgrid title form for the ladder.
- The kalams:
  - A: "Every tabulated value is a reduction potential…"
  - F: "Most half-reactions you balance move one to six electrons."
  - These are book sentences, but they do not name the topic directly.
