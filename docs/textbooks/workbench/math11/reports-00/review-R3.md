# Review R3: Mathematics 11 Chapter 0 (Basic Mathematics: Indices, Surds and Logarithms), whole chapter, third review (Opus)

Reviewer 3. Files reviewed as they stand now: `content/textbooks/math-11-00/topic-01.ts`, `content/textbooks/math-11-00/extra-a.ts`, `lib/revise/keypoints-mathematics-11-00.ts`. Book: `/Users/raasikhnaveed/Desktop/dronav1project/book_builds/Drona_Class11_Mathematics_Master_Reference.pdf`, pp. 10 to 24 (PDF page = folio). Nothing in the repo was edited; no tsc, jest or git run. [NEW] marks our own proposed wording.

Method: (1) loaded the three files with sucrase, stripped the markup and ran a word-level diff (difflib on word tokens) of every app string against the book's text layer for pp. 10 to 24, then read every difference; (2) read the page images (80 dpi) for the p. 12 conjugate table, the p. 16 underbrace display and bar notation, the p. 17 rule box, and the p. 21 practice list and printed answers; (3) recomputed every number, equation, fraction and answer key; (4) checked every fixer wording in `new-text-F1.md` (there is no `new-text-F2.md`; F1 covers both reviews); (5) only then read `review-R1.md` and `review-R2.md` and marked each flag NEW or REPEAT.

## Flags, most serious first

### 1. [NEW] The literal tag "[NEW]" is shown to students in seven note blocks
- **Where:** `topic-01.ts`, part "Logarithmic inequalities (the base matters)", the paragraph after the mini-cases (line 376); `extra-a.ts`, the notes in Introduction (l. 43), Nernst (l. 77), decibels (l. 87), half-life (l. 106), limits and derivatives (l. 134), AP/GP (l. 153).
- **Says now:** `<b>[NEW]</b> If the base itself contains x, …`, `<b>[NEW]</b> NEET has no Mathematics paper, …`, and so on.
- **What is wrong:** "[NEW]" is our internal marker for wording the founder must approve. Nothing in `components/textbook/` strips it, so the reader prints "**[NEW]**" in bold at the start of each note. No other chapter in `content/textbooks/` contains "[NEW]"; the house form for an added note is `<b>Note:</b>` (28 uses across the chapters).
- **Fix:** in all seven places replace `<b>[NEW]</b>` with `<b>Note:</b>`. Keep the list of these notes in `new-text-F1.md` for the founder's sign-off. Also change the file comment in `extra-a.ts` ("Wording of ours is marked [NEW].") to "Wording of ours is listed in reports-00/new-text-F1.md."
- **Kind:** transcription slip (process marker left in student text). **Source:** ours (writer 2, copied by the fixer for the Section 8 note). **Confidence:** certain.

### 2. [NEW] Key point "say" line still teaches the claim the chapter softened
- **Where:** `keypoints-mathematics-11-00.ts`, Topic 01 Common mistake "You solve a logarithmic equation and get two roots: do you keep both?" (line 239), and the header comment (lines 32 to 33).
- **Says now:** `say: 'Extraneous roots are the norm in this topic, not the exception.'`
- **What is wrong:** R2 flag 2 softened this in the chapter to "Extraneous roots are common in this topic, so always check." (Examples 1, 2, 4, 5, 6 and practice 4, 5, 6, 12 have no extraneous root.) The key point now repeats the over-general book sentence the chapter no longer prints.
- **Fix:** `say: 'Extraneous roots are common in this topic, so always check.'`, and in the header comment replace "\"Extraneous roots are the norm in this topic, not the exception.\"" with "\"Extraneous roots are common in this topic, so always check.\"" (the header's list of say lines also omits the inequality line "The direction of a logarithmic inequality depends on whether the base is bigger or smaller than 1."; add it).
- **Kind:** unclear or misleading (key point out of step with the text). **Source:** ours (key-points agent; R2 saw only the stub). **Confidence:** certain.

### 3. [NEW, on a fixer addition] The x^x note contradicts itself after the added two-term route
- **Where:** `extra-a.ts`, part "Mathematics: limits and derivatives", the note after the Representative question (line 134). F1 item 26 (R2 flag 10, optional).
- **Says now:** "… So the logarithm is needed either way; what is missing is a rule that handles a variable base and a variable exponent without rewriting the expression first. The same derivative also comes from treating the base and the exponent one at a time and adding: varying the base with the exponent held fixed gives x·x^(x−1) = x^x, varying the exponent with the base held fixed gives x^x ln x, and the sum is x^x(1 + ln x)."
- **What is wrong:** the last sentence presents exactly the kind of direct rule the sentence before it says is missing, so the note contradicts itself. The "one at a time and add" rule is the multivariable chain rule, which Class 11 and 12 never justify; offered bare, a student may try it on expressions where they cannot check it. The maths in it is right (x·x^(x−1) = x^x; x^x ln x; sum x^x(1 + ln x)). Also `x·x` is printed without spaces round the dot (house form " · ").
- **Fix:** delete the last sentence (the F1 founder note already says "Remove item 26 if it is too much"). The note then reads: "[NEW] Writing x^x = e^(x ln x) and using the chain rule gives the same derivative, x^x(ln x + 1), and that route also uses the logarithm. So the logarithm is needed either way; what is missing is a rule that handles a variable base and a variable exponent without rewriting the expression first." Make the same cut in the key point "Is x^x differentiated by the power rule or by the exponential rule?" (line 330): replace "; or vary the base and the exponent one at a time and add" with "" (end the answer at "use the chain rule").
- **Kind:** unclear or misleading. **Source:** ours (fixer). **Confidence:** likely.

### 4. [NEW, on a fixer addition] Unsupported exam-practice claim added to the NEET note
- **Where:** `extra-a.ts`, Introduction, second paragraph (line 43). F1 item 23 (R2 flag 5).
- **Says now:** "Questions often supply the needed logarithm values (for example log 2 = 0.3010), so recognising where a logarithm is hidden matters more than memorising its values."
- **What is wrong:** a claim about how often exam questions supply values, with no source and no estimate label: the house rule treats frequency claims about exams as estimates. NEET chemistry and physics questions do often expect log 2, log 3 and log 5 to be known; the sentence can lead a NEET student not to learn them. It is our wording, not the book's, so it should not add a new unsourced claim.
- **Fix:** delete the sentence. The note ends at "The pH, Nernst equation, decibel and half-life settings are chemistry and physics." If the founder wants the point kept, [NEW]: "Learn log 2 ≈ 0.3010, log 3 ≈ 0.4771 and log 5 ≈ 0.6990 anyway: some questions give them and some do not."
- **Kind:** unclear or misleading (exam claim). **Source:** ours (fixer, from R2's proposal). **Confidence:** likely.

### 5. [NEW] "Double rationalisation" is illustrated by an expression that needs only one conjugate
- **Where:** `topic-01.ts`, part "Surds and rationalisation", paragraph "When three surds sit in the denominator …" (book p. 12).
- **Says now:** "This two-step technique, often called double rationalisation, reappears constantly in limit problems in Chapter 12, where an expression like √(x + 1) − √x in a denominator is cleared the same way."
- **What is wrong:** √(x + 1) − √x is a two-term binomial: one multiplication by its conjugate √(x + 1) + √x clears it (the difference of squares gives (x + 1) − x = 1). It is not the two-pass, three-surd technique the sentence names, so "cleared the same way" is wrong for "this two-step technique". "Constantly" is also an unlabelled frequency word.
- **Fix [NEW]:** "This two-step technique is often called <b>double rationalisation</b>. Its first step, multiplying by a conjugate, reappears in limit problems in Chapter 12, where an expression like √(x + 1) − √x in a denominator is cleared by one multiplication by √(x + 1) + √x."
- **Kind:** mathematics error (wrong illustration). **Source:** book. **Confidence:** likely.

### 6. [NEW, on a fixer addition] "allowed because b > 0 and b ≠ 1" states b ≠ 1 as if it were given
- **Where:** `topic-01.ts`, part "Change of base and its consequences", "1. The reciprocal relation" (F1 item 11, R1 flag 7); and key point "What is the change-of-base formula …" (line 172): "Setting c = b (allowed as b ≠ 1)".
- **Says now:** "Setting c = b in the formula (allowed because b > 0 and b ≠ 1):"
- **What is wrong:** the hypotheses just above give only b > 0. "Allowed because … b ≠ 1" reads as a fact already known; the point R1 made is that the step needs the extra condition b ≠ 1.
- **Fix [NEW]:** "Setting c = b in the formula (this needs b ≠ 1 as well as b > 0, since b becomes the new base):". Key point [NEW]: "Setting c = b (this needs b ≠ 1) gives …".
- **Kind:** unclear or misleading. **Source:** ours (fixer, key-points agent). **Confidence:** likely.

### 7. [NEW] "applying a^(·) and then log_a" describes a^(log_a x) in the wrong order
- **Where:** `topic-01.ts`, part "The laws of logarithms", paragraph after the three identities (book p. 14).
- **Says now:** "The first says applying a^(·) and then log_a (or the reverse) returns the original number, the defining property of inverse functions."
- **What is wrong:** a^(log_a x) = x applies log_a first and then a^(·). "(or the reverse)" rescues the meaning, but the first-named order is the one that does not match the formula printed above it.
- **Fix [NEW]:** "The first says applying log_a and then a^(·) (or the reverse) returns the original number, the defining property of inverse functions."
- **Kind:** unclear or misleading. **Source:** book. **Confidence:** likely (minor).

### 8. [REPEAT, partly fixed] "logarithmic differentiation … you will meet from Chapter 12 onward"
- **Where:** `topic-01.ts`, Introduction (book p. 10, "you will need by Chapter 13"). F1 item 2 (R1 3, R2 3).
- **Says now:** "logarithmic differentiation is a named technique you will meet from Chapter 12 onward."
- **What is wrong:** the chapter number is now right, but this book's Chapter 12 only names the technique in passing (p. 1111: differentiating (1 + x)^(1/x) "requires logarithmic differentiation"); it is taught in NCERT Class 12 (Continuity and Differentiability). R2 noted this; the fix kept only the number.
- **Fix [NEW] (optional):** "logarithmic differentiation is a named technique of calculus (Chapter 12 mentions it; it is taught in Class 12)."
- **Kind:** unclear or misleading. **Source:** book. **Confidence:** possible.

### 9. [REPEAT, open founder item] "revision from earlier classes, Classes 8 and 9"
- **Where:** `topic-01.ts`, Introduction (book p. 10, "Class 9-10 revision"). F1 item 1 (R1 13).
- **What is wrong:** naming the classes is a claim we cannot check here. NCERT's exponents chapters also sit in Class 7 (Exponents and Powers), and the NCERT books for Classes 6 to 8 were replaced from 2024, so the class list is likely to be wrong for some readers.
- **Fix [NEW]:** "(the NCERT syllabus treats indices and surds as revision from earlier classes and never gives logarithms a chapter of their own)".
- **Kind:** unclear or misleading (syllabus claim). **Source:** book, then ours. **Confidence:** possible.

## Earlier flags I believe were applied wrongly or incompletely
- R2 flag 5: the added sentence is an unsourced exam claim (my flag 4).
- R2 flag 10 (optional clause): applied as a full sentence that contradicts the one before it (my flag 3).
- R1 flag 7: the wording "allowed because b > 0 and b ≠ 1" turns the needed condition into an apparent given (my flag 6).
- R2 flag 2 (softening "the norm"): applied in the chapter, not carried to the key points (my flag 2).
- R2 flag 3: the chapter number was fixed, the "only previewed in Chapter 12, taught in Class 12" half was not (my flag 8).
- Writer 2's "[NEW]" note convention was accepted by R2 and copied by F1 into Topic 01: it shows the marker to students (my flag 1).
Every other R1 and R2 flag is applied as proposed and the new wording is correct: the graph of log_a x (both ends, steep near 0), three identities, the x > 0 bullet, the characteristic as the greatest integer not exceeding log N with 0 ≤ mantissa < 1, the 0.000437 sentence, scientific notation, the binomial surd, the Section 7 widen/narrow sentence (log₂(x² − 1) defined for x > 1 and x < −1: checked), the Section 8 mnemonic (sign of log_a b = sign of (a − 1)(b − 1): checked), the variable-base note, "788 …" (2⁻¹⁰⁰ = 7.8886 × 10⁻³¹: checked), practice 1 "(for x > 0)", the two calculus log-means-ln notes, the estimate labels, 10^0.7 ≈ 5.0, the decibel note (0 dB to 120 dB at 1 W/m²), the Nernst note (1.16 V), the half-life note (N nuclei, activity ∝ N), the AP/GP note (3d(d − A) = 0, d = A, 3A, 6A, 12A, ratio 2; r ≠ 1 before dividing by log r).

## Counts verified
- Topic 01: 12 parts; 8 worked examples (tags CBSE / JEE Main; JEE Main; JEE Main: Speed Trap; JEE Advanced ×2; JEE Main: Characteristic and Mantissa; JEE Main: Extraneous Root; JEE Main: Inequalities, Both Base Cases); 12 practice items with 12 answers; 7 pitfalls; 6 pro-tips; 1 table (4 rows, cell by cell against p. 12); 0 MCQs, 0 formula blocks, 0 figures.
- Additional A: 7 parts, 6 Representative questions (ans '' by design), 6 note paragraphs, 0 figures.
- Key points: 27 (Topic 01: 10 Remember, 2 Don't mix up, 3 Common mistakes, 3 Exam shortcuts; A: 5, 1, 1, 2), matching the header; 7 say lines.
- Numbers recomputed, all correct: the exponent chain 2/3 + 1/2 − 1/6 = 1; (27/8)^(−2/3) = 4/9; 1/(√5 − √3) = (√5 + √3)/2 = 1.98406; √50 + √18 − √8 = 6√2 = 8.4853; 1/(1 + √2 + √3) = (√2 + 2 − √6)/4 = 0.241181; domain x < 2 or x > 3; log_8 2 = 1/3; log_4 25 = log_2 5; log 43700 = 4.64048, log 0.000437 = 4̄.6405 (−3.35952); 0.0034 → characteristic −3; Ex 1 x = 3; Ex 2 1.8572 (true 1.857332); Ex 3 ±10; Ex 4 3; Ex 5 64 = 64; Ex 6 2¹⁰⁰ = 1267650600228229401496703205376 (31 digits), −30.10 = −31 + 0.90, 30 zeros; Ex 7 x = 3; Ex 8 1 < x < 10, 1.5 < x ≤ 3.5, log_0.5 4 = −2; practice 2 (6√3 + 3√5)/7, 4 → 3, 5 → −4, 6 → 13 digits (2⁴⁰ = 1,099,511,627,776), 7 → 5, 8 → 2 < x < 7/3, 9 → 5, 10, 11, 12 → 2.0333 (true 2.03342); pH 3 and 5.0 × 10⁻⁵ M (10^−4.3 = 5.012 × 10⁻⁵); RT ln 10/F = 0.05916; E = 1.1591 V; β = 100 dB; t/T = 3.322; d/dx x^x = x^x(ln x + 1); key-point examples (2⁻³ = 1/8, 6.2 × 10⁻³ > 9.1 × 10⁻⁵, log_2 4 = 2 and log_0.5 4 = −2, ln x = log x / log e).
- Transcription: the word diff shows no missing or added book sentence outside the listed exceptions (cross-reference rewording, em dashes, dropped "Problem/Solution/Answer" labels, fixer wording). No wrong number, sign, power, radicand or fraction half found. Fractions: all stacked; slashes only in sup/sub (a^(p/q), (−8)^(1/3), x^(2/3), log_(1/3), t/T) and units (mol/L, W/m²); none nested in a numerator. No em dash in any student string. No "Chapter 13" left.

## Figures checked
None exist: pp. 10 to 24 hold no drawing (seen on the images of pp. 12, 16, 17, 21 and the text layer of the rest; the vector shapes are fraction and radical bars, the p. 12 table rules, the p. 16 underbraces and section rules). No fig ids in the files. The p. 16 underbrace display is now the fixer's plain "(integer part) + (fractional part)" with the names in the next sentence: fine.

## Could not check
- Rendering on a phone (Android or iPhone): long display chains, the 31-digit string in Example 6, nested scripts such as a^(log_b c) and log_(2²), and how the reader shows the seven "[NEW]" notes (flag 1 assumes it prints them, as no code strips them).
- NCERT class claims (flag 9) against printed NCERT books.
- Exam-frequency claims (the estimate-labelled ones): no source.
- Formula sheet: the chapter has no `formula` blocks, so there are no cards (no card test run, as instructed).

## Summary
9 flags: 7 NEW, 2 REPEAT. Serious: 1 (the "[NEW]" marker printed to students in seven notes); medium: 4 (key point "the norm" say line, the self-contradicting x^x note, the unsourced exam claim in the NEET note, the double-rationalisation example); minor: 4. The book's mathematics and every number in the chapter now check out; the remaining faults are in our own added wording and one book illustration.
