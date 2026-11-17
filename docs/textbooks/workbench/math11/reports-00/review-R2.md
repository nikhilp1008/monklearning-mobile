# Review R2: Mathematics 11 Chapter 0 (Basic Mathematics), topic-01.ts Sections 7 to 11 (pp. 16 to 22) and extra-a.ts (Addendum P, pp. 23 to 24)

Reviewer 2. Edited nothing. Book pages read as images (pp. 16 to 24); every number recomputed (python where marked). [NEW] marks our own wording.

## Flags, most serious first

### 1. Section 8 mnemonic is true only when b > 1
- Where: topic-01 "Logarithmic inequalities (the base matters)", paragraph "A one-line mnemonic..." (book p. 17).
- Says now: "multiplying (or dividing) an inequality by log_a b behaves exactly like multiplying by a number that has the same sign as (a − 1). When a > 1, log_a b-type manipulations act like multiplying by a positive number; when 0 < a < 1, they act like multiplying by a negative number".
- Wrong: sign(log_a b) = sign((a − 1)(b − 1)) for a, b > 0, a, b ≠ 1. For 0 < b < 1, log_a b has the OPPOSITE sign (log_2 0.5 = −1 with a = 2 > 1). For b = 1 it is 0 and cannot divide. A student who applies it with b < 1 flips a direction wrongly. The sentence is also vague ("log_a b-type manipulations").
- Fix [NEW], replace the bold sentence and the next one with: "**multiplying (or dividing) an inequality by log_a b, where b > 1, behaves exactly like multiplying by a number that has the same sign as (a − 1).** When a > 1, log_a b (with b > 1) is positive, so the direction is kept; when 0 < a < 1, it is negative, so the direction reverses. (If 0 < b < 1 the sign of log_a b is the opposite, and for b = 1 it is 0, so check b first.) This is the same rule you already know from ordinary inequalities and negative numbers, transplanted into logarithms."
- Kind: mathematics error (over-general rule). Source: the book. Confidence: certain.

### 2. Section 7 "combining ... can be reversed to recover a wider domain" is muddled
- Where: topic-01 "Logarithmic equations", second paragraph (p. 17).
- Says now: "combining two logarithms into one (say, via the product law) is a step that can be reversed to recover a wider domain than the one you started with."
- Wrong: it is the combining itself that WIDENS the domain (log_2(x−1) + log_2(x+1) needs x > 1; log_2(x² − 1) is defined for x > 1 or x < −1). "Can be reversed to recover" says the opposite of the mechanism. The converse (splitting log(x²) into 2 log x narrows the domain and can LOSE a root, the trap of Example 3) is not mentioned.
- Fix [NEW]: "The reason is structural: combining two logarithms into one (say, via the product law) can widen the domain: log₂(x − 1) + log₂(x + 1) needs x > 1, but log₂(x² − 1) is defined for x > 1 and for x < −1. The reverse step, splitting log(x²) into 2 log x, narrows the domain and can lose a root (see the third worked example)." Keep the rest ("Squaring, clearing denominators ... must be discarded"). Use real subscripts/superscripts in the markup.
- Also soften "Extraneous roots are the norm in this topic, not the exception": not every log equation has one (Example 1, practice 9 reject a base, practice 7 one root). Optional [NEW]: "Extraneous roots are common in this topic, so always check."
- Kind: unclear or misleading. Source: the book. Confidence: certain (the sentence); likely (the softening).

### 3. Chapter-number clash inside Chapter 0: "Chapter 13" (Topic 01) vs "Chapter 12" (Addendum P)
- Where: Topic 01 Introduction (p. 10, "logarithmic differentiation ... by Chapter 13") and the surds part (p. 12, "limit problems in Chapter 13") [Reviewer 1's range]; extra-a "Mathematics: limits and derivatives" ("from Chapter 12 onward").
- In this book Limits and Derivatives is Chapter 12 (content/textbooks/math-11-12-limits.ts; book p. 1060); Chapter 13 is Statistics. So the Addendum is right and Topic 01 is wrong. (Writer 1 item 4 correct.) Fix in Topic 01: "Chapter 12" in both places; for the first, note that logarithmic differentiation itself is only previewed in Chapter 12 (book Ch 12 says differentiating (1 + x)^(1/x) "requires logarithmic differentiation") and taught in Class 12, so "you will need by Chapter 13" should become "you will meet it from Chapter 12 onward". Kind: number/cross-reference error. Source: the book. Confidence: certain.

### 4. Addendum P, AP/GP question is ill-posed as printed; the book's answer does not answer it
- Where: extra-a "Mathematics: AP/GP problems", the Representative question and its working (p. 24).
- Says now: "show that the terms of the GP form an equation solvable using the laws of this chapter, and state which law is used."
- Wrong: no logarithmic equation arises from the printed data; the printed answer says so ("an ordinary algebraic condition, not yet a logarithmic one") and answers a hypothetical question instead. Writer 2's [NEW] note is correct (checked: (A+5d)² = (A+2d)(A+11d) gives A² + 10Ad + 25d² = A² + 13Ad + 22d², so 3d(d − A) = 0, d = A, terms 3A, 6A, 12A, ratio 2). Ruling: keep the printed question (word for word), keep the note, but add two things to the note:
  - Fix [NEW] (append to the existing note): "As printed, the question asks for a logarithmic equation that its data do not produce; the answer above works a follow-up question instead. In that follow-up, also r ≠ 1 is needed before dividing by log₁₀ r."
- Kind: unclear or misleading. Source: the book. Confidence: certain.

### 5. Addendum P intro: "JEE assumes you recognise them on sight ... with no reminder" and "JEE & NEET"
- Where: extra-a Introduction (p. 23) and title.
- Wrong: over-general (JEE Main questions routinely supply log 2 = 0.3010, log 3 = 0.4771 and pH/ log data); NEET has no Mathematics paper (Writer 2's note is right, ruling: agree). The title's "NEET" is acceptable for pH, Nernst and half-life (all in NEET chemistry/physics); decibel sound level I could not confirm against NEET/NCERT (see "could not check").
- Fix [NEW] (add a second sentence to the existing NEET note, or a short note): "Questions often supply the needed logarithm values (for example log 2 = 0.3010), so recognising where a logarithm is hidden matters more than memorising its values." Kind: unclear or misleading. Source: the book. Confidence: likely.

### 6. Decibel scale "a few tens of units wide" (p. 23)
- Wrong: 10 × 12 orders = 120 units, as Writer 2 says. Ruling: agree with the [NEW] note as written. Confidence: certain. Minor wording improvement: change "so it is about a hundred and twenty units wide, not “a few tens”" to "so it is about 120 units wide, not “a few tens”." Optional.
- Also (possible): "roughly the intensity at a loud rock concert" for 10⁻² W/m² (100 dB): concerts are usually 100 to 120 dB, so "loud" is acceptable. No change.

### 7. Section 11 pro-tip 6: exam-frequency claim, unlabelled
- Where: topic-01 last pro-tip (p. 22): "...used throughout JEE Advanced."
- Wrong: a frequency claim with no source; Decision 5 asks for the estimate label on such claims. Also, the pro-tip says a^(log_a x) = x "underlies the proof of a^(log_b c) = c^(log_b a)"; the proof in Section 5 takes log_b of both sides, so the loose link is acceptable but "throughout" is too strong.
- Fix [NEW]: "...and it underlies the proof of a^(log_b c) = c^(log_b a), an identity JEE Advanced questions return to (the book’s estimate from past papers, not official figures)." (keep the original markup for the powers). Kind: unclear or misleading. Source: the book. Confidence: likely.

### 8. Example 6(b) check: "the digits 789 ..."
- Where: topic-01 Example 6 (b) last step (p. 20): "7.89 × 10⁻³¹ ... thirty 0s and then the digits 789 ...".
- Wrong (small): 2⁻¹⁰⁰ = 7.8886 × 10⁻³¹ (python), so the digits are 788 8..., 789 is the rounded value. The count of zeros (30) is right.
- Fix: "thirty 0s and then the digits 788 ... (7.89 when rounded to three figures)". Kind: number error (minor). Source: the book. Confidence: certain.

### 9. pH example: "Since log 5 ≈ 0.699 ≈ 0.7, it follows that 10^0.7 ≈ 5.01"
- Where: extra-a pH question (p. 23). 10^0.699 = 5.00 and 10^0.7 = 5.0119 (python), so 5.01 does not follow from 0.699; the printed result [H⁺] ≈ 5.0 × 10⁻⁵ M is right (10^−4.3 = 5.012 × 10⁻⁵).
- Fix: "Since log₁₀ 5 ≈ 0.699 ≈ 0.7, it follows that 10^0.7 ≈ 5.0, so [H⁺] ≈ 5.0 × 10⁻⁵ M." Kind: number/unclear. Source: the book. Confidence: certain (minor).

### 10. Logarithmic differentiation sentence, ruling on Writer 2 flag 5
- "a variable base and a variable exponent sitting together have no direct differentiation rule at all" is over-general: x^x = e^(x ln x) and the chain rule give the same derivative (also the two-term rule d/dx x^x = x·x^(x−1) + x^x ln x works with no logarithm taken). Writer 2's [NEW] note is correct; ruling: agree. Optional extra clause: "(the same derivative also comes from treating the base and the exponent one at a time and adding)". Kind: mathematics (over-general). Source: the book. Confidence: certain.

### 11. Practice 1 has no domain; Section 8 omits a variable base
- Practice 1 (p. 21) answer "x" needs x > 0 (for negative x the fractional powers are not real in general). Fix [NEW] on the answer: "x (for x > 0)". Likely, minor.
- Section 8 and practice 8 never show the case where the base contains x (split into base > 1 and 0 < base < 1). Not an error; optional, not requested by the brief. Possible.

### 12. Pitfall 6: "unadorned log means base 10" (p. 16 and echoed in Pitfall 6)
- In calculus (NCERT Class 12 and many JEE solutions) log x means ln x. The book's convention is stated for "an Indian JEE/CBSE context" and Addendum P itself writes "log a, log b, log c" with log₁₀ stated. Fix [NEW] on the pitfall: "Correction: check which symbol a formula actually uses before substituting numbers (in calculus a plain log often means ln, so read the context)." Kind: unclear. Source: the book. Confidence: possible.

### 13. Tags on worked examples
- "JEE Advanced" on Examples 4 and 5 (a six-factor telescoping product; a^(log_b c) = c^(log_b a)) are difficulty tags, not provenance; Example 4 is JEE Main level. No year is given, so the exam-years rule is met. Left as printed. Confidence: possible.

## Transcription (my range): no errors found
Compared Sections 7 to 11 and Addendum P page by page against pp. 16 to 24 images: all sentences, numbers, powers and signs present and in the right place. Differences are only the listed exceptions (em dashes, cross-references reworded to part names, Example 3 keeps "Solution." only there, bar notation by U+0305, bullets from the p. 17 run-together hyphens). Sections' cross-reference names resolve: "Sections 3-7" is "from the definition and domain ... through logarithmic equations" and matches the parts as built. No one-line fractions (slashes remain only inside sup/sub or in "mol/L", "W/m²", "and/or"). No em dashes in the two files.

Addendum P introduction versus Topic 01 as built: no "the chapter never covers X" claim. Topic 01 does cover AP/GP (practice 11), the change of base, log equations and inequalities that Addendum P points to. Cross-chapter: see flag 3.

## Rulings on writer-flagged items
Writer 1 (my range only; items 1, 2, 4, 5, 6, 7, 10 are Reviewer 1's range, but 4 is ruled in flag 3):
- 3 (mnemonic): agree, flag 1, with fix.
- 8 (wider domain sentence): agree it is muddled, flag 2 (it is more than "not wrong in effect").
- 9 (exam claims): the two labels in R1's range are fine; "used throughout JEE Advanced" in my range needs label/soften (flag 7). The tags carry no year: fine.
- Example arithmetic and answers: agree all correct. (Example 2: 1.8572 vs true 1.8573 explained; 12: 2.0333 vs 2.0334.)
- Exceptions: all allowed (em dashes, cross-reference rewording, stacked fractions, slashes in sup/sub, U+0305 bars, bullets from hyphens, bold run-in labels). The one "Section 8 rule box split into three bullets" is fine. No `formula` blocks: agree none to add; Formula sheet will be empty unless the founder wants cards for the log laws (they are in R1's range).
Writer 2 (all seven flags):
1 NEET note: agree. 2 decibel note: agree (flag 6). 3 Nernst note: agree; 1.16 V by addition rule is right; may add that CBSE/NCERT uses 0.059 (not needed). 4 activity/N note: agree. 5 differentiation note: agree (flag 10). 6 AP/GP note: agree (maths checked), plus append in flag 4. 7 base-direction note: agree: base 10 > 1 keeps the direction when taking log; dividing by log₁₀ r keeps it only if r > 1; also r ≠ 1 needed. Boundary correction "p. 23 not 22": agree (confirmed on images: p. 22 ends with the Pro-Tips).
Nernst constant: 8.314 × 298 × 2.303 / 96485 = 0.05914 (with ln 10 exactly 0.05913), "≈ 0.0591" correct. pH, decay law (t/T = 3.32; 2^3.32 = 9.99) and decibel (100 dB) correct.

## Counts verified
Topic 01 range: 8 worked examples, 12 practice items with 12 answers, 7 pitfalls, 6 pro-tips, 3 numbered steps, 3 rule bullets, 2 mini-cases; 0 MCQs, 0 figures (no drawings on pp. 16 to 24). Addendum P: 7 parts, 6 Representative questions (ans '' by design), 0 figures. Key points file: empty stub (see below).

## Numbers recomputed
Ex 1 x = 3; Ex 2 1.8572 (true 1.85733); Ex 3 ±10; Ex 4 ln 8 / ln 2 = 3; Ex 5 64 = 64; Ex 6 31 digits, 2⁻¹⁰⁰ = 7.8886 × 10⁻³¹, 30 zeros; Ex 7 x = 3, −3 rejected; Ex 8 1 < x < 10 and 1.5 < x ≤ 3.5 (boundary log_0.5 4 = −2). Practice: 1 x; 2 (6√3 + 3√5)/7 (denominator 12 − 5 = 7); 3 x < 2 or x > 3; 4 6 + (−3) = 3; 5 −4; 6 12.04 gives 13 digits (2⁴⁰ = 1,099,511,627,776); 7 x² − 9 = 16, x = 5; 8 2 < x < 7/3; 9 x = 5; 10 identity; 11 GP to AP; 12 2.0333 (true 2.0334). Addendum: pH 3, [H⁺] 5.0 × 10⁻⁵; E = 1.1591 V; β = 100 dB; t/T = 3.32; d/dx x^x; 3A, 6A, 12A ratio 2.

## Could not check
- Key points: lib/revise/keypoints-mathematics-11-00.ts is still the stub ("the key-points agent replaces this file"); nothing to review.
- Formula sheet cards: none exist (no `formula` blocks); the temporary card test was not run (no jest allowed).
- Rendering on a phone (the 31-digit string in Example 6; stacked fractions in displays).
- Whether NEET/NCERT covers the decibel scale; whether NCERT's current syllabus treats logarithms (R1's range).
- JEE past-paper frequency claims: no source to verify; no years appear.

## Overall judgement
My range is accurately transcribed and the arithmetic is sound: all eight worked examples, all twelve practice answers and every Addendum P number check out. The real faults are statements, not sums: the Section 8 mnemonic (true only for b > 1), the muddled "wider domain" sentence in Section 7, an unlabelled "throughout JEE Advanced", a chapter-number clash (13 vs 12), an ill-posed AP/GP question, and a few over-general lines in the addendum that Writer 2's [NEW] notes already repair well. After flags 1 to 4 and 7 the range is safe to ship.
