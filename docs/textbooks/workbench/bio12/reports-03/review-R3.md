# Biology 12 Ch3 Reproductive Health, review R3 (third reviewer, Opus): whole chapter as it now stands

Share: `content/textbooks/bio-12-03/topics-1-2.ts`, `topics-3-4-extras-a-b.ts`, `extras-c-g.ts`, `lib/diagrams/biology-12-03.ts`, `lib/revise/keypoints-biology-12-03.ts`, including the fixers' wording listed in `new-text-F1.md` and `new-text-F2.md`.
Method: own pass first (every string extracted from the three topic files and diffed sentence by sentence against `bio12.paged.txt` pp. 112 to 161; every sentence not in the book read by hand; MCQ keys checked programmatically against the null-nudge option; every number recomputed; the six figures rendered fresh from the current diagram file through a sucrase loader (no jest) and compared with the page images pp. 115, 117, 122, 124, 130, 136). Only then R1 and R2 were read and each flag marked NEW or REPEAT.
[NEW] = our own proposed wording. Source = book unless stated. Nothing in the repo was edited.

## FLAGS (most serious first)

### 1. [NEW] SERIOUS. The MTP legal rule taught everywhere (one RMP up to 20 weeks) is not NCERT's; NCERT prints one RMP up to 12 weeks, two RMPs from 12 to 24 weeks
- Where: Topic 04 (T34 topic 1): Key concepts "Legal framework in India" bullets (p. 134); 4.3B "one RMP's opinion up to 20 weeks, two for 20-24 weeks"; 4.3D; Pitfall 2 "Confusing the medical-safety figure (12 weeks) with the legal limit (20 and 24 weeks)"; MCQ 2 nudge (c); Pro-Tip; cheat sheet "Legal"; Fig 3.6 ("1 RMP: up to 20 weeks", "2 RMPs"); G Traps row "Confusing medical safety window with legal limit" ("Legal limits: 20 weeks (one RMP), up to 24 weeks for special categories (two RMPs)"); key points [16], [17], [19].
- Says now: "Up to 20 weeks: opinion of one registered medical practitioner (RMP). 20-24 weeks: opinion of two RMPs, for special categories."
- What is wrong: the book follows the 2021 Amendment (true as current law), but the current NCERT text (Reproductive Health, "MTP" section, rationalised edition) says: the "Medical Termination of Pregnancy (Amendment) Act, 2017" lets a pregnancy be terminated within the first 12 weeks on the opinion of one RMP, and between 12 and 24 weeks on the opinion of two RMPs, on the grounds of risk to the woman or substantial foetal abnormality. A NEET student answering "how many RMPs for a 16-week MTP?" from this chapter writes one; NCERT's answer is two. Pitfall 2 also teaches that 12 weeks is only a medical-safety figure, while in NCERT 12 weeks is also the one-RMP legal boundary. None of R1, R2 or the fixers raised NCERT's 12/24 text.
- Fix: keep the book's 2021 framework, add one NCERT note in Topic 04 Key concepts after the legal bullets, and point to it from the pitfall and cheat sheet.
  - Legal framework, new last bullet [NEW]: "• <b>NCERT's version:</b> NCERT describes the law as the MTP (Amendment) Act, 2017, with the older split: up to <b>12 weeks</b> on the opinion of <b>one</b> RMP, and from 12 to <b>24 weeks</b> on the opinion of <b>two</b> RMPs. For an NCERT-based question on how many practitioners are needed, use 12 and 24 weeks; the 20-week one-RMP limit above is the current law (2021)."
  - Pitfall 2 [NEW]: "<b>Confusing the medical-safety figure (12 weeks) with the legal limits.</b> Both exist; quote the right one for the question: NCERT's "relatively safe" answer is the <b>first trimester (~12 weeks)</b>. For the legal rule NCERT gives one RMP up to 12 weeks and two RMPs up to 24 weeks; the current law (2021) gives one RMP up to 20 weeks."
  - Cheat sheet "Legal" note: append [NEW] " NCERT: 1 RMP up to 12 wks, 2 RMPs 12–24 wks."
  - KP [16] and [17]: append [NEW] "NCERT gives the older split: one RMP up to 12 weeks, two RMPs from 12 to 24 weeks."
  - Fig 3.6: leave as the book draws it (founder decision); the note covers it.
- Kind: biology/legal fact, contradicts NCERT. Source: book (and the fixers' 4.3D sentence repeats the 2021 rule). Confidence: likely (high) on NCERT's wording; certain that the current law is the book's version.

### 2. [NEW] MTP "role in reducing population is insignificant" contradicts NCERT
- Where: Topic 04, Key concepts, "Significance vs. drawbacks" (p. 134).
- Says now: "MTP is <b>not</b> intended as a tool of population control or contraception: its role in reducing population is insignificant; it exists for the health and welfare of the individual."
- What is wrong: NCERT says the opposite: MTP "has a significant role in decreasing the population though it is not meant for that purpose". A statement-selection or A-R item built on NCERT's line would be marked wrong by a student who learnt this one.
- Fix [NEW]: "MTP is <b>not</b> intended as a tool of population control or contraception. NCERT notes that it does have a significant role in decreasing the population, though it is not meant for that purpose; it exists for the health and welfare of the individual."
- Kind: biology error (contradicts NCERT). Source: book. Confidence: likely (high).

### 3. [NEW, earlier fix applied wrongly] "three" 2021 reforms now lists four
- Where: Topic 04, 4.3D (p. 134; R1 flag 11 / F1 item 34).
- Says now: "Among the 2021 reforms were three that matter for exams. The upper limit rose from 20 to 24 weeks ... It also let one practitioner decide up to 20 weeks ... The married-only clause was dropped ... And a confidentiality clause was added ..."
- What is wrong: the fixer inserted the one-practitioner sentence but kept "three"; four reforms follow.
- Fix [NEW]: "Among the 2021 reforms were four that matter for exams."
- Kind: number / fixer slip. Source: ours (F1). Confidence: certain.

### 4. REPEAT (R1 flag 1 fixed incompletely) + [NEW] syphilis: the "AIDS and hepatitis-B are not RTIs" framing survives, and the "systemic pair" leaves out syphilis
- Where: Topic 02 Worked Q2 reasoning (p. 125): "Re-read the stem: it is asking for an STD that is <b>not</b> an RTI." Topic 02 Mechanisms B (p. 123): "An RTI is, by definition, an infection located in the reproductive tract. Most STDs (gonorrhoea, syphilis, genital herpes, chlamydiasis, trichomoniasis) do infect the reproductive organs, so they are RTIs." G Traps row title "STD-but-not-RTI". Diagnostic indicators, cheat sheet, KP [8], [33] ("systemic pair").
- What is wrong: (a) the stem was reworded to "systemic (not sex-organ-confined)" but the reasoning still says "STD that is not an RTI", and Mechanisms B still defines RTI so as to exclude AIDS and hepatitis-B, against the topic's own new line "NCERT uses STI, STD, VD and RTI together". (b) Syphilis is itself a systemic infection (Treponema spreads by the blood; the secondary rash and the tertiary stage, which Additional D's own table lists, are systemic), so "the systemic pair = AIDS and hepatitis-B" and listing syphilis among the sex-organ-only STDs is wrong biology.
- Fix [NEW]:
  - Worked Q2 reasoning: "<b>Reasoning.</b> Re-read the stem: it asks for an STD whose main disease is not confined to the reproductive tract. Gonorrhoea, herpes and chlamydiasis mainly affect the reproductive tract → eliminated. <b>AIDS</b> (HIV) is a systemic infection transmitted sexually."
  - Mechanisms B first two sentences: "Most STDs (gonorrhoea, genital herpes, chlamydiasis, trichomoniasis) mainly affect the reproductive organs. But <b>AIDS and hepatitis-B,</b> though spread through sexual contact (among other routes), are <b>systemic/blood-borne</b> infections that do not stay confined to the sex organs (untreated syphilis also spreads through the body in its later stages)."
  - G Traps row title: "STD not confined to the reproductive tract".
- Kind: internal contradiction / biology. Source: book; residue of the fix. Confidence: certain (residue), certain (syphilis is systemic).

### 5. [NEW] Population figure "over 1 billion by 2000" is labelled NCERT's but NCERT says "close to the billion mark"; Additional C says "about 1 billion"
- Where: Topic 03 Key concepts "Scale (NCERT-illustrative figures)" (p. 128); KP [12] "India's from about 350 million in 1947 to over 1 billion by 2000 (NCERT figures)". Additional C "NCERT figures: ... about 1 billion by 2000".
- What is wrong: NCERT: India's population "reached close to the billion mark by 2000" (and crossed 1.2 billion in May 2011). The two places in the app disagree with each other and the Topic 03 one is labelled NCERT.
- Fix [NEW]: Topic 03 "...India's grew from roughly <b>350 million at independence (1947)</b> to <b>about 1 billion by 2000</b> (NCERT: close to the billion mark)." KP [12]: "...to about 1 billion by 2000 (NCERT figures)".
- Kind: number / attribution. Source: book. Confidence: likely.

### 6. REPEAT (R2 flag 3, fix still partly false) B and D introductions
- B intro (T34 topic 3, p. 141). Says now: "The chapter gives the ART definitions, the blastomere rule and the logic of where each technique acts, but not the full problem-to-technique table in one place." Wrong: Topic 02's ART table has a "Key cue" column that gives the problem for each technique (GIFT: woman who cannot produce ova; ICSI: very low or abnormal sperm; AI/IUI: low count or inability to inseminate), and Figure 3.3 is an "ART decision map ... matched to the problem". Fix [NEW]: "The chapter gives the ART definitions, the blastomere rule, a one-line cue for each technique and the ART decision map (Figure 3.3). This section sets them out as one problem-to-technique table and adds the reasoning behind each choice. A question can be framed this way: given a couple's specific problem, which ART is appropriate? The decision tree rests on the three questions below."
- D Method, PID chain (CG topic 1, p. 148). Says now: "The chapter mentions "blocked fallopian tubes" as a cause of female infertility and notes that untreated STD scarring is often behind it, but does not give the step-by-step PID chain." Wrong in part: Topic 02, Mechanisms A says an undetected STD "may have ascended the tract to cause pelvic inflammatory disease, scar the fallopian tubes (raising the risk of ectopic pregnancy and infertility)": the chain is there in one sentence. Fix [NEW]: "The chapter gives this chain in one sentence (an untreated STD ascends the tract, causes PID and scars the tubes); here it is set out step by step."
- Kind: false "chapter does not cover" claim. Source: book; R2 wording. Confidence: certain.

### 7. [NEW] Additional A Practice 4 answer: "emergency contraception ... has no post-fertilisation effect" is too general
- Where: A Practice 4 answer (p. 141).
- Says now: "If ovulation and fertilisation have already occurred before the pill is taken, emergency contraception cannot prevent the establishment of pregnancy: it has no post-fertilisation effect."
- What is wrong: the same topic lists the copper IUD as emergency contraception, and the copper IUD does act after fertilisation (it can prevent implantation; that is why it works up to 5 days). The statement is true of the levonorgestrel pill only.
- Fix [NEW]: "If ovulation and fertilisation have already occurred before the pill is taken, the emergency pill cannot prevent the establishment of pregnancy: it has no post-fertilisation effect."
- Kind: overgeneral. Source: book. Confidence: likely.

### 8. [NEW, earlier fix applied wrongly] Topic 02 now gives two fertilisation sites
- Where: Topic 02 Mechanisms E (p. 123): "(at the ampullary–isthmic junction)" (F1 item 19, R1 16a); same topic Worked Q4 A-R ("ampullary region") and its reasoning; Additional B Practice 5 ("ampullary region").
- What is wrong: after the fix one topic says the junction and, two blocks later, the A-R item says the ampullary region; B repeats "ampullary region". Both forms are in circulation (the app's own Chapter 2 uses the junction), but the chapter should use one, or say both.
- Fix [NEW] (Mechanisms E): "(in its ampullary region, at the ampullary–isthmic junction)". Leave the A-R item and B Practice 5 as printed.
- Kind: internal inconsistency. Source: ours (F1). Confidence: certain (inconsistency).

### 9. [NEW] Additional D table: male symptom of genital warts reads "Genital warts"
- Where: D table, Genital warts row, "Key symptom in males" (p. 147).
- Says now: "Genital warts" (the disease name repeated as its own symptom); every other row says "Same" or names a symptom.
- Fix [NEW]: "Similar growths on the penis or around the anus".
- Kind: book slip (cell). Source: book. Confidence: certain.

### 10. [NEW] Doubled "Choose" in three practice A-R items
- Where: Topic 03 Practice 5, Topic 04 Practice 5, Additional A Practice 5.
- Says now: "... Choose the correct relation. Choose: (a) Both true, R explains A. ..."
- Fix [NEW]: delete "Choose the correct relation." so the item ends "... Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true."
- Kind: transcription slip (writers' appended options). Source: ours. Confidence: certain.

### 11. [NEW] KP [12] starts a sentence with lower-case "the"
- Says now: "MTP Act, which legalised abortion: 1971. the Pre-Natal Diagnostic Techniques Act of 1994 (now called ...)".
- Fix [NEW]: "Sex-determination ban: the Pre-Natal Diagnostic Techniques Act of 1994 (now called the Pre-Conception and Pre-Natal Diagnostic Techniques, PCPNDT, Act), a statutory ban on prenatal sex determination." (drops the trailing ": 1994" repetition).
- Kind: fixer slip. Source: ours (F2). Confidence: certain.

### 12. [NEW] KP [16] special categories do not match Topic 04
- Says now: "(survivors of rape or incest, minors, differently abled and other vulnerable women)". Topic 04 now also lists "women whose marital status changed during pregnancy".
- Fix [NEW]: "(survivors of rape or incest, minors, women whose marital status changed during pregnancy, differently abled and other vulnerable women)".
- Kind: inconsistency. Source: ours. Confidence: certain.

### 13. [NEW] Unlabelled exam superlatives left in Topic 02
- "a favourite exam trap" (Topic 02 Limiting conditions); MCQ 3 nudge (a) "the most common trap, picked by students who reverse the rule"; Worked Q1 tip "examiners award the 'type' mark separately".
- Fix [NEW]: "a frequent exam trap"; "a common trap, picked by students who reverse the rule"; "a board answer often gives the 'type' a separate mark".
- Kind: exam-frequency claim. Source: book. Confidence: certain (unlabelled).

### 14. [NEW] "Every other preventive rule for STDs is behavioural" (Topic 02 Concept intuition)
- Wrong: hepatitis-B (and HPV) are also prevented by vaccination. Fix [NEW]: "Most other preventive rules for STDs are behavioural:". Kind: overgeneral. Source: book. Confidence: likely.

### 15. REPEAT (R1 16n, D6 not verified) Cheat sheet "sterilisation failure <b>< 1%</b>"
- The reader's tag regex leaves "< 1%" as text, but its helper `plainOf` (`/<[^>]+>/g`, components/textbook/markup.tsx line 575) would strip "< 1%</b>" as if it were a tag wherever that helper is used (width and bracket checks). Fix [NEW]: "sterilisation failure <b>under 1%</b>". Kind: rendering risk. Source: ours. Confidence: possible.

### 16. [NEW] Low: spermicides "not as a stand-alone method" (Topic 01 Mechanisms 2)
- NCERT says spermicides are "usually used alongside" barriers; they can be (poorly) used alone. Fix [NEW]: "... used alongside barriers to raise their effectiveness; used alone they are much less reliable." Kind: overgeneral. Confidence: possible.

## Earlier flags I believe were applied wrongly or incompletely
- R1 flag 11 (4.3D): the added sentence makes "three" wrong (my flag 3).
- R1 flag 16a (ampullary): creates two sites inside Topic 02 (my flag 8).
- R1 flag 1 (RTI): stem changed but reasoning and Mechanisms B definition kept the "not an RTI" logic (my flag 4).
- R2 flag 3 (B and D intros): replacement wording is still partly false (my flag 6).
- All other F1/F2 wording checked and found correct: the 5-day copper-IUD note, days 10-17 reworded, progestogen wording, viability 24 weeks, life-saving clause, 1971 two-opinion clause, marital-status category, 1921 nudge, exact doubling times 35.0 and 41.1 years, 1.665 vs 1.658, 90.6 and 10.6 million, HPV 6/11 and 16/18, window period, syphilis stages, Saheli twice-weekly start, 9 weeks (63 days), Q6 (iv), Q7 with R changed (key (d) "A false, R true" now right), Q4 (d) note, KP item numbers 1, 2, 8, 9, 10 (checked against F: items 1, 2, 8, 9, 10 are EC, GIFT, copper IUD, ICSI, early embryo).

## Counts verified
- MCQs (16, Topics 01 to 04): every `correct` index equals the option with no nudge and is the right answer (Saheli b; 72 h c; IUD incorrect d; vasectomy a; ICSI c; match A-3 B-1 C-4 D-2 a; uterus c; azoospermia c; WHO c; amniotic fluid b; banning contraceptives d; 1951 c; 45-50 million c; 12 weeks b; rape/contraceptive failure b; 1971 b).
- Worked answers: T01 (c), (b), (a); T02 (c), (b), (a); T03 (b), (b), (c); T04 (a), (c), (a); A (b); B as stated; C Stage 2; E (a); G archetypes (d), (b), (b), (a), (a), (b); graded set c, b, a, c, c, d, d, a. All re-derived and unique.
- Arithmetic recomputed: 100 ln 2 = 69.3; ln 2 / ln 1.02 = 35.0; ln 2 / ln 1.017 = 41.1; 70/1.7 = 41.2; 1.017^30 = 1.6583 (1658 million, 1.66 billion); e^0.51 = 1.6653; 70/2 = 35; 1.02^30 = 1.8114, 50 x 1.811 = 90.6, 90.6 - 80 = 10.6; linear 1 million x 30 = 30 million; 70/2.5 = 28 (C P1 and F3); 70/1.3 = 53.8, 2000 + 54 = 2054; 1.01^30 = 1.3478, 134,780 ≈ 134,800; pills 21 + 7; 60 h and 48 h inside 72 h; 1/5 of pregnancies; WHO 7 April 1948.
- No "both false" A-R option remains anywhere (grep); no exam year anywhere; errata: "azoospermia (no sperm in the semen)", "absence of sperm in semen", "absence of sperm in the ejaculate" present; "no living sperm" nowhere.
- Sentence diff: 322 app sentences not found verbatim in the book; every one read: they are dash/label/heading reformatting, table re-cuts, the labelled exam clauses, or the F1/F2 [NEW] wording. No dropped or altered book sentence found beyond those.
- Key points: 34 points (2 per topic plus mix-ups, mistakes, shortcuts for Topics 01 to 04; 2 each A to F; 2 for G), 4 hooks word for word; all checked against the chapter text.

## Figures checked (fresh render of the current lib/diagrams/biology-12-03.ts; app fonts absent)
- 3.1 (p. 115): 5 groups, 14 methods 3+3+3+3+2, four "Reversible", Surgical "Permanent (surgical)": matches.
- 3.2 (p. 117): (a) testis (sperm produced), epididymis, vas deferens cut and tied, urethra; (b) two ovaries, both tubes cut and tied, uterus, vagina: matches; the added result pills are true.
- 3.3 A and B (p. 122): count box, up to 8 ZIFT to tube, more than 8 IUT to uterus; GIFT/ICSI/AI-IUI notes word for word: matches and agrees with Topic 02 and Addendum B.
- 3.4 (p. 124): steps 1 to 5, 4a/4b, in-vitro bracket over 2 and 3: matches.
- 3.5 (p. 130): chain of five, cross between "Reveals foetal sex" and "Prenatal sex determination", ban "Prevents": matches.
- 3.6 (p. 136): bars and marks 0, 12, 20, 24, 24+; matches the book (see flag 1 for NCERT's 12/24 rule).
- All built-in figure checks pass on the fresh render.

## Could not check
- Not run: jest, tsc, git, the app, Android. Figures rendered without app fonts.
- Page images were viewed only for the six figure pages; text pages and tables were compared against the paged text dump (Topic 02 causes table: the empty female cell in the first row is empty in the book too).
- NCERT's exact MTP wording (flag 1, flag 2) and the "close to the billion mark" line (flag 5) are from my knowledge of the current NCERT text, not re-read from an NCERT PDF (none in the repo).

## Summary
16 flags: 13 NEW (1, 2, 3, 5, 7, 8, 9, 10, 11, 12, 13, 14, 16; flags 3 and 8 are slips created by earlier fixes) and 3 REPEAT (4, 6, 15). Serious: 3 (flag 1 NCERT 12/24-week RMP rule, flag 2 MTP and population, flag 4 syphilis/RTI residue). The transcription is faithful, every MCQ key and number is right, and the figures match the book; the remaining problems are NCERT gaps in the MTP law and population lines, two fixer slips, and partly false "the chapter does not cover" wording.
