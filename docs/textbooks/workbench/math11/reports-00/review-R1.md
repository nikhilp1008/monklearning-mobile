# Review R1: Mathematics 11 Chapter 0, Topic 01, Introduction and Sections 1 to 6 (book pp. 10 to 16)

Reviewer 1. File reviewed: `content/textbooks/math-11-00/topic-01.ts` lines 78 to 341 (parts "Introduction" to "Common logarithms: characteristic and mantissa"). Book: Drona_Class11_Mathematics_Master_Reference.pdf, pp. 10 to 16, read from page images (110 dpi). Nothing was edited. Wording marked [NEW] is ours, not the book's.

Verdict in one line: the transcription of pp. 10 to 16 is faithful (no copied-wrong number, sign, exponent or fraction found); the mathematics has 3 real errors in the book (all copied as printed), one wrong chapter number, and a handful of loose statements. All fractions in my share are stacked; the only slashes are inside raised runs.

## Flags, most serious first

### 1. Graph of y = log_a x "hugs the negative side of the y-axis" (false for 0 < a < 1)
- **Where:** Topic 01, part "Logarithms: definition and domain", paragraph "The shape of y = log_a x." Book p. 13.
- **Says now:** "…and it hugs the negative side of the y-axis as x → 0⁺ without ever touching it, because x = 0 is outside the domain."
- **Wrong:** for a > 1, log_a x → −∞ as x → 0⁺ (the curve runs down the negative side); for 0 < a < 1, log_a x → +∞ (it runs up the positive side). The sentence is stated for "every such graph", and the next sentence treats 0 < a < 1.
- **Fix [NEW]:** "…and it hugs the y-axis as x → 0⁺ without ever touching it, because x = 0 is outside the domain (it runs down towards −∞ when a > 1 and up towards +∞ when 0 < a < 1)."
- **Kind:** mathematics error. **Source:** book. **Confidence:** certain.

### 2. "For a > 1 the curve rises, slowly at first and ever more slowly as x grows"
- **Where:** same paragraph, same page.
- **Wrong:** near x = 0 the curve is steepest (slope 1/(x ln a) is largest there), so it rises steeply at first and flattens as x grows. "Slowly at first" is the opposite of the truth; "ever more slowly" is right.
- **Fix [NEW]:** "For a > 1 the curve rises, steeply near x = 0 and ever more slowly as x grows; for 0 < a < 1 it falls instead (steeply near x = 0, then ever more slowly), mirroring the decay of a^x in that case."
- **Kind:** mathematics error. **Source:** book. **Confidence:** certain.

### 3. "Chapter 13" twice (wrong chapter)
- **Where:** Introduction (p. 10): "logarithmic differentiation is a named technique you will need by Chapter 13"; Surds and rationalisation (p. 12): "reappears constantly in limit problems in Chapter 13".
- **Wrong:** in this book Limits and Derivatives is Chapter 12 (`math-11-12-limits.ts`); Chapter 13 is Statistics (`math-11-13-statistics.ts`).
- **Fix:** "…you will need by Chapter 12" and "…in limit problems in Chapter 12" (or, safer against renumbering, "in the chapter on limits and derivatives" both times).
- **Kind:** number error. **Source:** book (copied). **Confidence:** certain.

### 4. "Two immediate identities" lists three
- **Where:** part "The laws of logarithms", paragraph "Two immediate identities, both provable directly from the definition", p. 14. Three identities follow (a^(log_a x) = x, log_a 1 = 0, log_a a = 1) and the next paragraph says "The first says … The second and third are …".
- **Fix [NEW]:** "<b>Three immediate identities</b>, all provable directly from the definition:" and in the next paragraph keep "The first says … The second and third are …".
- **Kind:** unclear or misleading (count). **Source:** book. **Confidence:** certain.

### 5. Bullet on x > 0: "no real number whose logarithm … is the log of zero or of a negative number"
- **Where:** same part as flag 1, third bullet, p. 13.
- **Says now:** "There is no real number whose logarithm (to a positive base) is the log of zero or of a negative number."
- **Wrong:** garbled. The fact is that zero and negative numbers have no real logarithm.
- **Fix [NEW]:** "So zero and the negative numbers have no logarithm to a positive base: there is no real number y with a^y equal to zero or to a negative number."
- **Kind:** unclear or misleading. **Source:** book. **Confidence:** certain.

### 6. "the same digit string 437 shifted three places to the right of the decimal point"
- **Where:** part "Common logarithms: characteristic and mantissa", paragraph "Why the mantissa is the useful part", p. 16.
- **Wrong:** 43700 to 0.000437 moves the decimal point eight places to the left (the digits 437 are the same, followed by two zeros in one and preceded by three zeros in the other). "Shifted three places to the right of the decimal point" does not describe that move.
- **Fix [NEW]:** "Now take N = 0.000437, which has the same digits 437 but with three zeros between the decimal point and the first non-zero digit: it has k = 3 zeros immediately after the decimal point, so its characteristic is −(3 + 1) = −4, …" (rest unchanged).
- **Kind:** unclear or misleading. **Source:** book. **Confidence:** likely.

### 7. Change of base consequence 1: setting c = b needs b ≠ 1
- **Where:** part "Change of base and its consequences", "1. The reciprocal relation", p. 15. The hypotheses just above say only "a, c > 0, a, c ≠ 1, and b > 0".
- **Says now:** "Setting c = b in the formula: …"
- **Wrong:** c must be ≠ 1 for the formula, so setting c = b is allowed only when b ≠ 1; the conclusion log_a b · log_b a = 1 also needs b ≠ 1 (log_1 a does not exist).
- **Fix [NEW]:** "Setting c = b in the formula (allowed because b > 0 and b ≠ 1):" and after the boxed result add "(valid for a, b > 0 and a, b ≠ 1)".
- **Kind:** mathematics error (missing restriction). **Source:** book. **Confidence:** certain.

### 8. "Surd" example list includes 2 + √3
- **Where:** part "Surds and rationalisation", first paragraph, p. 11.
- **Says now:** "A surd is an irrational root of a rational number: √2, ∛5, 2 + √3 are surds; √4 = 2 is not …"
- **Wrong:** 2 + √3 is not a root of a rational number; it is a sum (a binomial or mixed surd). It contradicts the definition given in the same sentence. (NCERT-level definition: a surd is an irrational root of a rational number; 2 + √3 is called a binomial surd.)
- **Fix [NEW]:** "A <b>surd</b> is an irrational root of a rational number: √2 and ∛5 are surds; √4 = 2 is not, because it simplifies to a rational number. An expression such as 2 + √3, a rational number plus a surd, is called a <b>binomial surd</b>."
- **Kind:** unclear or misleading. **Source:** book. **Confidence:** certain that it is loose; the fix wording is ours.

### 9. Definition of characteristic: "integer part" is the floor, not truncation
- **Where:** part "Common logarithms: characteristic and mantissa", p. 16: "write log₁₀ N as an integer part plus a fractional part" (displayed with "characteristic" and "mantissa" under the two parts).
- **Wrong:** for N < 1, log N is negative (e.g. −3.3595 for 0.000437). The usual "integer part" of −3.3595 is −3, but the book's characteristic is −4. The next sentence (mantissa non-negative even if the characteristic is negative) fixes it in effect, but a student who reads "integer part" as truncation gets the wrong characteristic.
- **Fix [NEW]:** change the lead-in to "write log₁₀ N as a whole number plus a fractional part, where the whole number is the greatest integer not exceeding log₁₀ N:" (display unchanged), and change "(between 0 and 1)" to "(0 ≤ mantissa < 1)".
- **Kind:** unclear or misleading. **Source:** book. **Confidence:** likely.

### 10. "Unless a problem states otherwise, 'log' means base 10 … ln always means base e"
- **Where:** same part, first paragraph, p. 15 to 16.
- **Issue:** true for school logarithm questions, but NCERT Class 11 and 12 calculus (and JEE Advanced calculus papers) often write log x for the natural logarithm. A student who meets "log x" in Limits or Derivatives with this note in mind may take base 10.
- **Fix [NEW]:** add after the sentence: "(In calculus, and in many JEE Advanced questions, log x written without a base can also mean the natural logarithm; the question or its answer options show which is meant, and ln is never ambiguous.)"
- **Kind:** unclear or misleading (exam usefulness). **Source:** book. **Confidence:** possible.

### 11. Scientific notation sentence is unclear
- **Where:** part "Indices and the laws of exponents", last paragraph, p. 11: "comparing two such numbers is just comparing exponents once the mantissa-like part m is close."
- **Wrong:** with 1 ≤ m < 10, a larger exponent always wins no matter what m is; m only matters when the exponents are equal. "Once m is close" is backwards or meaningless. ("mantissa-like part" is also non-standard; it is the significand.)
- **Fix [NEW]:** "…and comparing two such numbers is just comparing the exponents n first (the larger exponent is the larger number), and the parts m only when the exponents are equal."
- **Kind:** unclear or misleading. **Source:** book. **Confidence:** likely.

### 12. Exam-claim labels (the "(the book’s estimate from past papers, not official figures)" rule)
- **Where checked:** pp. 13 to 16. The writer labelled two: "the number one source of lost marks on logarithm questions in JEE" and "frequently the entire content of a JEE mark" (p. 13). Agreed, both need it.
- **Also needs the label:** p. 15 "One further identity worth proving, because it recurs in JEE Advanced". Fix [NEW]: "…because it recurs in JEE Advanced (the book’s estimate from past papers, not official figures)". Ruling on the other claims: p. 14 "the classic JEE trap" is a characterisation, not a frequency: leave. p. 11 "JEE and NEET both use scientific notation freely": a plain statement of practice, no label (NEET is fine here; this is a physics/chemistry remark). Example tags carry no year (checked in my share: none).
- **Wording nit, p. 13:** "frequently the entire content of a JEE mark" reads oddly. Suggested [NEW]: "it is frequently the entire content of a JEE mark (the book’s estimate from past papers, not official figures)" kept as is is acceptable; if reworded: "it is frequently what a JEE question's mark depends on".
- **Kind:** unclear or misleading. **Source:** book/transcription. **Confidence:** likely.

### 13. Syllabus claim "Class 9–10 revision"
- **Where:** Introduction, p. 10 (book prints "Class 9-10").
- **Issue:** exponents and powers are Class 8 NCERT, real-number laws and surds (radicals) are Class 9 (Number Systems). Class 10 has no indices or surds chapter. Also the sentence says "never gives logarithms a chapter of their own": true as a chapter, but the logarithmic function appears inside the Class 11 Functions chapter and logarithmic differentiation in Class 12.
- **Fix [NEW] (optional):** "(the NCERT syllabus treats indices and surds as earlier-class revision (Classes 8 to 9) and never gives logarithms a chapter of their own)". To check against a printed NCERT.
- **Kind:** unclear or misleading. **Source:** book. **Confidence:** possible.

## What I checked and found correct (no flag)
- **p. 10:** a^n definition; a^(−3) = 1/a³ reasoning; all seven laws (a^m·a^n, a^m/a^n, (a^m)^n, (ab)^n, (a/b)^n with b ≠ 0, a⁰ = 1 for a ≠ 0, a^(−n) = 1/a^n); a^(1/n) = ⁿ√a, a^(p/q) = ᑫ√(a^p) = (ᑫ√a)^p for a > 0. The negative-base trap: (⁶√(−8))² undefined; (−8)^(1/3) = −2; ((−8)²)^(1/6) = 64^(1/6) = 2, "the opposite sign" correct; "no answer, one answer, another answer" correct; the "assume positive base unless the exponent is a plain integer" habit is sound.
- **p. 11:** 2/3 + 1/2 − 1/6 = 4/6 + 3/6 − 1/6 = 6/6 = 1, so the expression is x. (27/8)^(−2/3) = (8/27)^(2/3) = (∛(8/27))² = (2/3)² = 4/9. Surd laws for a, b ≥ 0 and b ≠ 0 in the quotient law. Like surds example 3√2 and 7√2.
- **p. 12:** table of four conjugate pairs (a, a − b, a − b, a² − b all correct). 1/(√5 − √3) = (√5 + √3)/2 ≈ 1.984 (exact 1.98406; 3.968/2 = 1.984; 1/0.504 = 1.984). √50 + √18 − √8 = 5√2 + 3√2 − 2√2 = 6√2; 7.071 + 4.243 − 2.828 = 8.486, 6√2 = 8.4853 (rounding agreement as stated). 1/(1 + √2 + √3): (1 + √2)² − 3 = 3 + 2√2 − 3 = 2√2; then ×√2/√2 gives (√2 + 2 − √6)/4. Numerics: 1/4.14626 = 0.241181 (0.24118), (1.41421 + 2 − 2.44949)/4 = 0.96472/4 = 0.24118. All correct.
- **p. 13:** definition log_a x = y ⟺ a^y = x with a > 0, a ≠ 1, x > 0; the reasons for each restriction (a<0 bullet, a = 1 bullet "no solution unless x = 1, then infinitely many" correct; x > 0 bullet reasoning correct apart from flag 5). Points (1, 0) and (a, 1) correct; mirror image in y = x correct. Domain of log₁₀(x² − 5x + 6): (x − 2)(x − 3) > 0, x < 2 or x > 3, correct.
- **p. 14:** product, quotient, power laws and their derivation; a^(log_a x) = x (x > 0); log_a 1 = 0; log_a a = 1. The caveat log_a(x²) = 2 log_a|x| for x ≠ 0 is correct; "2 log_a x is undefined for x < 0" correct. The (−2)(−3) example correct.
- **p. 15:** change of base derivation; log_8 2 = 1/3 given log_2 8 = 3; log_(a^p)(b^q) = (q/p) log_a b with the three-line proof; log_4 25 = log_(2²)(5²) = (2/2) log_2 5 = m; identity a^(log_b c) = c^(log_b a) and its proof (log_b of each side = log_b c · log_b a) correct and the restriction (b ≠ 1, a, b, c > 0) is stated.
- **p. 15 to 16:** e ≈ 2.71828; characteristic = k − 1 for N ≥ 1 and the 10^(k−1) ≤ N < 10^k proof; characteristic = −(k + 1) for 0 < N < 1 with k zeros after the point (0.0034: k = 2, log = −2.4685, characteristic −3 = −(2 + 1)); the bar form (k+1) with the "not −(k + 1 + mantissa)" remark; 43700 has 5 digits, characteristic 4, log 43700 = 4.64048 (4.6405); 0.000437 has 3 zeros, characteristic −4, log = −3.35952 = 4̄.6405 (same mantissa); digit count = characteristic + 1.

## Transcription check (book page against the app), pp. 10 to 16
No missing or duplicated sentence, no wrong number, sign, exponent, subscript or radicand found. Every paragraph of pp. 10 to 16 is present in order. Specific confirmations: all stacked fractions have the book's numerator and denominator (1/a³; 2/6 and 1/3; the 4/6 + 3/6 − 1/6 chain; 27/8, 8/27, 2/3, 4/9; the rationalisation chains; 3.968/2; 1/0.504; 1/4.14626; 0.96472/4; the m/n, q/p, 1/3, 2/2 of Section 5; the log_c b over log_c a stacks). Slashes kept only inside raised runs: x^(2/3), x^(1/2), x^(1/6), a^(1/n), a^(p/q), (−8)^(2/6), (−8)^(1/3), 64^(1/6), (27/8)^(−2/3) and (8/27)^(2/3) (the outer brackets stack the base fraction; the exponent slash is in the sup). No one-line fraction outside a sup (grep and eye), no ½-type character, no em dash, no ASCII hyphen used as a minus in this range.
- The minus in the shown exponents is U+2212; bar notation on k + 1 and on 4 is drawn with the combining overline after each character, as the writer stated.
- Cross-references: "Section 1/3/4/6" and "Section 7 and 8" correctly map to the named parts; "Example 3 / 6 / 7 / 8 in Section 9" correctly map to the third, sixth, seventh and eighth `ex` blocks of the part "Worked examples" (tags: CBSE/JEE Main, JEE Main, JEE Main: Speed Trap, JEE Advanced, JEE Advanced, JEE Main: Characteristic and Mantissa, JEE Main: Extraneous Root, JEE Main: Inequalities, Both Base Cases; the 3rd is the log(x²) = 2 trap, the 6th the 2¹⁰⁰ digits, the 7th the extraneous root, the 8th the two inequalities).
- Italics: `<i>` is used on maths letters only; the book's italic emphasis words ("question", "definition", "different", "every", "all", "both", "is", "sequence of digits", "not") were dropped to plain by the writer and listed. "Different", "all" (p. 14) and "both" (p. 14) in italic in the book carry real emphasis; restoring is optional and not an error. "Numerical check" and "Proof" labels set bold instead of italic (listed by the writer; fine).
- The U+2212 and NB (no-break) spaces look fine.

## Rulings on the writer-flagged items (writer-1.md, my range)
1. p. 13 "hugs the negative side": **agree**, flag 1 above with fix.
2. p. 13 "slowly at first": **agree**, flag 2.
3. p. 17 multiplication by log_a b mnemonic (Section 8, outside my share, reviewer 2): **agree in substance**: true only for b > 1; for 0 < b < 1, log_a b has the sign opposite to (a − 1). Suggested [NEW] for reviewer 2 to confirm: "…multiplying (or dividing) an inequality by log_a b, with b > 1, behaves exactly like multiplying by a number that has the same sign as (a − 1)", and "When a > 1 and b > 1, log_a b-type manipulations act like multiplying by a positive number".
4. "Chapter 13" twice: **agree**, flag 3 (Limits is Chapter 12).
5. "Class 9-10" syllabus claim: **agree it needs checking**; flag 13 with suggested wording.
6. "2 + √3 are surds": **agree**, flag 8.
7. "shifted three places to the right": **agree**, flag 6 (the shift is eight places, so the word "shifted" is not just loose: it is wrong).
8. Section 7 "can be reversed to recover a wider domain" (outside my share): **agree it is muddled**. Combining two logarithms by the product law widens the domain (log(mn) needs only mn > 0, while log m + log n needs both m, n > 0), which is how extraneous roots appear. Suggested [NEW] for reviewer 2: "combining two logarithms into one (say, via the product law) can enlarge the domain: the combined form needs only that the product be positive, while the original needed each factor positive."
9. Exam-claim labels: **agree** with both labels added; one more needed (p. 15 "recurs in JEE Advanced"), flag 12.
10. "setting c = b requires b ≠ 1": **agree**, flag 7 (the writer called it minor; it is a missing restriction on a formula the chapter later relies on, so I rate it certain).

## Exceptions the writer listed, checked (my range)
- Em dashes: none remain on my share; rewrites are faithful (colon, commas, brackets). "The domain restriction: the single most important fact in this chapter" and "Critical caveat: the classic JEE trap" are fine.
- Cross-references reworded to part names: allowed and accurate.
- Fractions stacked and slashes in raised runs: allowed. "characteristic/mantissa", "JEE/CBSE" are words: allowed.
- Roots with raised index and bracketed radicand; ⟹ to ⇒ (the book prints ⟺ and ⟹ in places; app uses ⟺ where the book does: checked); "Class 9–10"; underbrace replaced by subscripts: allowed (the p. 16 display now reads "(integer part)characteristic + (fractional part)mantissa" with the labels as subscripts; acceptable, but a phone reader may find the subscripted words odd; optional alternative [NEW] line: "log₁₀ N = (integer part) + (fractional part), where the integer part is called the characteristic and the fractional part the mantissa," which reads more clearly and loses nothing).
- Bullets as `<br>•` for the Section 3 list: allowed.
- Bar notation: allowed.
- Nested scripts (a^(log_b c), c^(log_b a), log_(a^p), log_(2²)): allowed; they are tiny but legal.

## Counts verified (my share)
- Parts: 7 (Introduction; Indices and the laws of exponents; Surds and rationalisation; Logarithms: definition and domain; The laws of logarithms; Change of base and its consequences; Common logarithms: characteristic and mantissa). The writer's 12-part total matches the topic's 12 `part` blocks.
- Paragraph blocks in these parts: 48; table blocks: 1 (the p. 12 conjugate table, 4 rows, header "Denominator / Multiply by / Result", checked cell by cell); formula blocks: 0 (so no formula cards from my share); figures: 0 (confirmed by eye on pp. 10 to 16: only fraction bars, radical bars, the p. 16 underbrace and section rules); worked examples, practice items, MCQs, pitfalls: none in pp. 10 to 16 (Section 9 onward is reviewer 2's).
- Book errata: no Chapter 0 entry (I did not recheck pp. 1238 to 1260; the writers' two reports agree and nothing in my pages looks like an unfixed erratum).

## Could not check
- The phone rendering (no emulator; none was to be run): the long displays with several stacked fractions, and the p. 12 double-rationalisation chain (four stacks in a row, one `<br><br>` line) may be wider than a phone screen; the disp helper puts each equals on its own line, so it should wrap, but I did not see it.
- The p. 16 "(integer part)characteristic" subscript form on a real phone (see exceptions).
- NCERT page-level claims (flag 13) against a printed NCERT.
- Formula sheet: no `formula` blocks in the chapter, so there are no cards to read.
- I did not read Section 7 onward beyond the cross-references and the p. 16 to 17 overlap (reviewer 2's).

## Overall judgement
For pp. 10 to 16 the app text matches the book almost to the letter and every number, step and example I recomputed is right. The book's mathematics in this range is mostly sound: the laws, the change of base, the characteristic and mantissa rules (including numbers below 1) and the bar notation are correct. The real faults are (a) two false statements about the graph of log_a x (flags 1 and 2), (b) the wrong chapter number for Limits (flag 3), (c) a missing b ≠ 1 restriction on the reciprocal relation (flag 7), and (d) a few loose or muddled sentences (flags 4, 5, 6, 8, 9, 11). None came from the transcription. Fixing flags 1 to 7 removes everything a student could be taught wrongly from these pages.
