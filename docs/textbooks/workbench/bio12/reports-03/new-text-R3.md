# new-text-R3: fixes applied for review-R3 (Biology 12 Ch3)
Files: A = topics-3-4-extras-a-b.ts, T = topics-1-2.ts, X = extras-c-g.ts, K = lib/revise/keypoints-biology-12-03.ts. All wording below is [NEW] unless marked.

## [NEW] wording
1. A, Topic 04 Key concepts "Legal framework" new last bullet: "NCERT's version: NCERT describes the law as the MTP (Amendment) Act, 2017, with the older split: up to 12 weeks on the opinion of one RMP, and from 12 to 24 weeks on the opinion of two RMPs. For an NCERT-based question on how many practitioners are needed, use 12 and 24 weeks; the 20-week one-RMP limit above is the current law (2021)."
2. A, Topic 04 Pitfall 2: "Confusing the medical-safety figure (12 weeks) with the legal limits. ... For the legal rule NCERT gives one RMP up to 12 weeks and two RMPs up to 24 weeks; the current law (2021) gives one RMP up to 20 weeks."
3. A, Topic 04 cheat sheet "Legal": appended "NCERT: 1 RMP up to 12 wks, 2 RMPs 12–24 wks."
4. A, Topic 04 Pro-Tip: inserted "(NCERT's own legal split is 1 RMP up to 12 weeks, 2 RMPs 12–24 weeks)"; 4.3D: appended "NCERT states the older split (one RMP up to 12 weeks, two RMPs from 12 to 24 weeks); use it for an NCERT-based question on the number of practitioners."
5. X, G Traps row "Confusing medical safety window...": appended "NCERT gives the older split: one RMP up to 12 weeks, two RMPs from 12 to 24 weeks."
6. K, MTP legal points (three: the 2021 summary, the two-axes point, the stem-axis point): same NCERT split appended; special-categories list now adds "women whose marital status changed during pregnancy".
7. A, Topic 04 "Significance vs. drawbacks": book sentence KEPT, appended "NCERT adds that it does have a significant role in decreasing the population, though it is not meant for that purpose."
8. T, Topic 02 Worked Q2 reasoning: "Re-read the stem: it asks for an STD whose main disease is not confined to the reproductive tract. Gonorrhoea, herpes and chlamydiasis mainly affect the reproductive tract → eliminated. AIDS (HIV) is a systemic infection transmitted sexually."
9. T, Topic 02 Mechanisms B opening: "Most STDs (gonorrhoea, genital herpes, chlamydiasis, trichomoniasis) mainly affect the reproductive organs. But AIDS and hepatitis-B ... (untreated syphilis also spreads through the body in its later stages)."
10. X, G Traps row title: "STD not confined to the reproductive tract".
11. A, Topic 03 Scale: "about 1 billion by 2000 (NCERT: close to the billion mark)"; K: "about 1 billion by 2000 (NCERT figures)".
12. A, Additional B intro: "The chapter gives the ART definitions, the blastomere rule, a one-line cue for each technique and the ART decision map (Figure 3.3). This section sets them out as one problem-to-technique table and adds the reasoning behind each choice."
13. X, Additional D Method: "The chapter gives this chain in one sentence (an untreated STD ascends the tract, causes PID and scars the tubes); here it is set out step by step."
14. A, Additional A Practice 4 answer: "the emergency pill cannot prevent the establishment of pregnancy: it has no post-fertilisation effect."
15. T, Topic 02 Mechanisms E: "(in its ampullary region, at the ampullary–isthmic junction)".
16. X, Additional D table, genital warts male symptom: "Similar growths on the penis or around the anus".
17. T: "a frequent exam trap"; MCQ 3 nudge "a common trap, picked by students who reverse the rule"; Worked Q1 tip "a board answer often gives the “type” a separate mark".
18. T, Topic 02 Concept intuition: "Most other preventive rules for STDs are behavioural:".
19. T, Topic 01 Mechanisms 2: "used alongside barriers to raise their effectiveness; used alone they are much less reliable."
20. K [12]: "Sex-determination ban: the Pre-Natal Diagnostic Techniques Act of 1994 (now called ... PCPNDT, Act), a statutory ban on prenatal sex determination."

## Printed numbers, keys, headings changed (old -> new)
- 4.3D: "three that matter for exams" -> "four".
- G Traps title: "STD-but-not-RTI" -> "STD not confined to the reproductive tract".
- Topic 03 / KP population: "over 1 billion by 2000" -> "about 1 billion by 2000" (the book prints "over 1 billion" on p. 128 and "about 1 billion" on p. 145; now consistent with p. 145).
- Cheat sheet "< 1%" -> "under 1%".
- Three A-R items (Topic 03 P5, Topic 04 P5, Additional A P5): doubled "Choose the correct relation." removed. No MCQ key changed.

## Founder decisions / not applied or adapted
- Flag 1: Fig 3.6 left as the book draws it (per review). NCERT's 12/24-week wording is from the reviewer's knowledge; no NCERT PDF in the repo, so unverified by me. The book's 2021 rule is kept everywhere and the NCERT split sits beside it.
- Flag 2: the book (p. 134) prints "its role in reducing population is insignificant". By the working rule we kept the book's sentence and added NCERT's contrary line beside it, not the reviewer's replacement. Founder to decide whether to drop the book sentence.
- Flag 4: the "systemic pair = AIDS and hepatitis-B" phrase in Diagnostic indicators and KP is the book's wording and was left; the new Mechanisms B and Q2 text notes syphilis spreads later. Not rewritten further.
- Flag 5, 13, 14, 16: these change book wording, applied as flagged (the review asked for them and they are exam-claim/accuracy edits).
- Flag 8: A-R item (Q4) and Additional B Practice 5 left as "ampullary region", per review.
- Flag 7 wording applied; "NCERT" claim in flag 5 also unverified against NCERT.

## Tests
- book-rules/book-chapters/display-fit: Biology 12 Ch3 tests pass; one failure, display-fit "has no piece wider than the page": "Biology 11 Ch 19 A p: pGlu-His-... is 345 wide on a 342 line" (not our chapter; not touched).
- lib/diagrams -t "biology.12.3": 25 passed. lib/revise: 137 passed. eslint on changed files: clean.
