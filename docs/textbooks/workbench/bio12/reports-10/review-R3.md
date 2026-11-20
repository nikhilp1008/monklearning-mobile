# Biology 12 Chapter 10, review R3 (third expert review, whole chapter)

Share: `content/textbooks/bio-12-10/topics-1-3.ts`, `topics-4-6-extra-a.ts`, `extras-b-f.ts` (Topics 01 to 06 and Additional topics A to F), `lib/diagrams/biology-12-10.ts` (7 figures), `lib/revise/keypoints-biology-12-10.ts` (42 points), against the book pp. 534 to 599, as the chapter stands after fixers F1 and F2. Nothing in the repo was edited; no tsc, jest or git was run.

Method, in this order. (1) My own pass first: a word-level 4-gram diff of every app string against the page-tagged book text, in both directions and page by page; then a line-by-line reading of the three topic files, the key points and the diagram code; page images rendered for the seven figure pages (538, 540, 546, 553, 559, 565, 571) and compared with the drawing code and captions; every number, power and arithmetic step recomputed; every printed key checked against its own question; every Additional-topic introduction checked against the Topics as built; and every [NEW] wording listed in `new-text-F1.md` and `new-text-F2.md` read for correctness, plainness and overclaiming. (2) Only then did I read `review-R1.md` and `review-R2.md`, and mark each flag below NEW or REPEAT.

Transcription verdict: faithful. In the app-to-book direction every unmatched run of words is either an allowed liberty (part headings, em dashes written as colons, "Topic" for "sub-topic", figure ids, options in letters, no exam years) or a wording listed in the two new-text files. In the book-to-app direction nothing is dropped except the contents box, the running heads and page numbers, the sentences the fixers deliberately replaced, and the figure-page label clouds, which the redrawn figures carry in their own labels. The flags below are therefore mostly (a) fixes applied in one place and not in its twin, (b) two fixer wordings that are themselves wrong or unclear, and (c) a few book claims the earlier reviews did not raise.

## Flags, most serious first

**1. Key point, Topic 04, kind `mistake`, the `why` line (`lib/revise/keypoints-biology-12-10.ts` line 258; book p. 561).**
- Says now: `why: 'Probe single, mutant dark, ELISA both antigen and antibody.'`
- What is wrong: it states the opposite of the fact and of the answer directly above it. A clone carrying the mutated gene gives NO spot, because the probe cannot hybridise; "mutant dark" is exactly the error the point's own answer ("That the mutated gene lights up: the mutated clone gives no spot") and Topic 04's Pitfall 4 warn against. In test mode the `why` line is the last thing the student reads, so this teaches the trap.
- Fix [NEW]: `why: 'Probe single, mutant gives no spot, ELISA both antigen and antibody.'`
- Kind: biology error (key point). Source: ours (introduced by the key-point writer, not in the book). Confidence: certain. NEW (neither R1 nor R2 raised it; R2 did not read topic 3's points, R1 says the key points for topics 0 to 5 were checked).

**2. Additional topic A, the fixer's new sentence makes indirect ELISA and sandwich ELISA the same format (`topics-4-6-extra-a.ts`, Additional A, Method, the paragraph after the `proc`; book pp. 574 to 576; the wording is F2's, from R2 flag 4).**
- Says now: "This four-step protocol is the indirect (or sandwich) layout. In direct ELISA the sample's antigen is itself adsorbed to the well in step 1, and the enzyme-linked antibody of step 4 is added straight after blocking."
- What is wrong: the same topic, three paragraphs later, defines the sandwich format as the one in which "the well is coated with a capture antibody (not antigen)". Indirect ELISA coats the antigen and detects the patient's antibody; the sandwich coats an antibody and traps the antigen. Calling the four-step protocol "the indirect (or sandwich) layout" contradicts the page below it, and a student who learns the equation will answer the antigen-trapping question wrongly.
- Fix [NEW]: "This four-step protocol is the indirect layout: a known antigen is coated and the sample's antibody is what binds. In direct ELISA the sample's antigen is itself adsorbed to the well in step 1, and the enzyme-linked antibody of step 4 is added straight after blocking. The antigen-trapping (sandwich) format below differs again: the well is coated with a capture antibody."
- Kind: biology error / unclear. Source: ours (the fixer's [NEW] wording). Confidence: certain. NEW (R2 proposed the sentence; nobody checked it against the sandwich paragraph).

**3. The α-1-antitrypsin claim was softened in Additional F but not in Topic 05, where the same claim is keyed (`topics-4-6-extra-a.ts`, Topic 05, NEET high-difficulty multi-statement, statement (iv); also Topic 05 Practice item 4; book pp. 564, 566).**
- Says now: Topic 05 multi-statement "(iv) α-1-antitrypsin produced in sheep is used to treat emphysema", keyed (a) "(i), (ii) and (iv)"; Practice 4 answer "α-1-antitrypsin made in sheep, used to treat emphysema".
- What is wrong: this is the claim R2 flag 1 ruled dubious and F2 fixed in Additional F Q9 ("The human protein α-1 antitrypsin, used to treat emphysema, has been made in transgenic animals"). Sheep-milk AAT was experimental; the medicine in clinical use is plasma-derived. In Topic 05 the claim is part of a keyed correct option, so a student who knows the fact can defeat the key. The chapter now says two different things about the same fact in two places.
- Fix [NEW]: statement (iv) "The human protein α-1-antitrypsin, used to treat emphysema, has been made in transgenic sheep." Key (a) and the step line unchanged. Practice 4 answer [NEW]: "α-1-antitrypsin, made in transgenic sheep, for emphysema (also acceptable: Rosie's α-lactalbumin milk)."
- Kind: wrong-MCQ-answer risk / biology. Source: book, carried through. Confidence: likely. REPEAT (R2 flag 1; fixed only in its own share, F2's note says the Topic 05 items belong to the other fixer, and F1 did not pick them up).

**4. Topic 03 Limiting Conditions: the NCERT parenthesis now sits on the wrong clause (`topics-1-3.ts`, Topic 03, Concept intuition, Limiting Conditions; book p. 550; wording from F1, R1 flag 6).**
- Says now: "A truly permanent cure would require introducing the functional gene into cells at an early embryonic stage (NCERT: a gene isolated from the marrow cells that make ADA), so that all future cells inherit the correction."
- What is wrong: the parenthesis describes where the gene comes from, but it is attached to the clause about where it goes, so it reads as if NCERT said the correction is made in marrow cells at an embryonic stage. R1's objection was precisely that the old text turned "isolated from" into "introduced into"; the fix keeps the ambiguity in a new shape. Part B of the same topic states it correctly and does not mention the marrow at all, so the two passages still do not agree.
- Fix [NEW]: "A truly permanent cure would require introducing the functional gene (NCERT describes it as a gene isolated from the marrow cells that make ADA) into cells at an early embryonic stage, so that all future cells inherit the correction."
- Kind: unclear or misleading. Source: ours (fixer wording). Confidence: likely. REPEAT (R1 flag 6, fixed wrongly).

**5. Topic 03 contrast table, the Limitation cell (`topics-1-3.ts`, Topic 03, "Gene therapy vs enzyme replacement therapy" table; book p. 551).**
- Says now: Gene therapy, Limitation: "Mature lymphocytes die → periodic re-infusion until embryonic-stage correction".
- What is wrong: "until embryonic-stage correction" presents embryonic correction as a later step in this patient's treatment. It is a hypothetical route for a future case, not something the 1990 patient waits for; the body of the topic says it as a conditional ("If the functional gene ... were introduced"). As printed, the cell asserts a treatment that does not exist.
- Fix [NEW]: "Mature lymphocytes die, so the corrected cells must be re-infused periodically; only a correction made at an early embryonic stage would be permanent".
- Kind: unclear or misleading. Source: book, kept in transcription. Confidence: likely. NEW.

**6. Topic 06 Key terms, the Indian Patents Bill row (`topics-4-6-extra-a.ts`, Topic 06, Key terms table; book p. 569; wording from F1, R1 flag 2).**
- Says now: "Indian Patents Bill: The legislative step India took (its second amendment); it has provisions on patent terms, emergency provisions and research and development initiatives."
- What is wrong: a Bill does not have "its second amendment"; what NCERT means is India's second amendment of its patent law, and the body text of the same topic now says that properly ("the second amendment of the Indian Patents Bill, now the Patents (Amendment) Act 2002"). The table row, read alone, is not a sentence a student can reproduce in an answer.
- Fix [NEW]: "Indian Patents Bill: India's patent law; the step taken against biopiracy was its second amendment, with provisions on patent terms, emergency provisions and research and development initiatives."
- Kind: unclear (nomenclature of the instrument). Source: ours (fixer wording). Confidence: likely. REPEAT (R1 flag 2, fixed in the body, left awkward in the table).

**7. Key point, Topic 03, `remember` 1: "the first human gene therapy" was not brought in line with the Topic (`keypoints-biology-12-10.ts` lines 182 to 183 and the file header line 41; book p. 550).**
- Says now: question "What was done in the first human gene therapy...", answer "In 1990 the first human gene therapy treated a girl with ADA deficiency...".
- What is wrong: F1 changed the chapter text to NCERT's "the first clinical gene therapy" (Topic 03 Concept, worked question 1, MCQ 1). The key points still say "the first human gene therapy". Not false, but the student meets two names for the same event, and the key points are the revision surface.
- Fix [NEW]: question "What was done in the first clinical gene therapy, and why was ADA the target?"; answer "In 1990 the first clinical gene therapy treated a girl with ADA deficiency...". Header line 41 [NEW]: "the 1990 case is the first clinical gene therapy".
- Kind: transcription / consistency. Source: ours. Confidence: certain that the two surfaces now differ. REPEAT (R1 flag 11, not propagated).

**8. Additional topic C, Practice 4: an amplification factor answered as a number of copies (`extras-b-f.ts`, Additional C, Practice item 4; book p. 583).**
- Says now: question "If a PCR reaction has 30 cycles, what is the theoretical amplification factor?"; answer "2^30 ≈ 1.07 × 10^9 copies (about 1 billion)".
- What is wrong: the factor is a multiplier (2^30-fold), not a count of copies; copies depend on how many template molecules you started with. The topic's own Method paragraph says it correctly ("the theoretical amplification factor is 2^30 ≈ 10^9-fold"), and Worked example C.3 correctly says "copies" because it starts from one molecule. The arithmetic (2^30 = 1,073,741,824) is right.
- Fix [NEW]: "2^30 ≈ 1.07 × 10^9-fold (about a billionfold); starting from a single molecule that is about 10^9 copies."
- Kind: number / unclear. Source: book. Confidence: certain. NEW.

**9. Figure 10.6: one sheep drawing still carries both named animals (`lib/diagrams/biology-12-10.ts`, `draw106`, use 3; book p. 565).**
- Says now: the text block reads "Rosie (cow, 1997): milk with human α-lactalbumin; sheep: α-1-antitrypsin for emphysema" (F1's split, R1 flag 28), but the only animal drawn beside it is the sheep shape, which now sits next to Rosie's line.
- What is wrong: the label split was applied, the drawing was not, so the picture still says Rosie is a sheep. Rendered at reading size the sheep is the first thing beside the words "Rosie (cow, 1997)". The book's own figure draws a cow head with a milk pail there.
- Fix [NEW]: draw the cow shape beside the Rosie line and keep the sheep beside the α-1-antitrypsin line (two small animals in the panel), or, if only one shape fits, drop the animal from this panel and leave the text. No caption change.
- Kind: figure error. Source: ours. Confidence: likely. REPEAT (R1 flag 28, applied only to the label).

**10. Additional topic E: the neem revocation dates are the reviewer's, not the book's or NCERT's, and now read as established (`extras-b-f.ts`, Additional E, Method, case 2; book p. 587; wording from F2, R2 flag 7).**
- Says now: "led the European Patent Office to revoke the patent (first in 2000, and the revocation was upheld on appeal in 2005)".
- What is wrong: the brief for this chapter says to add no new dates, and F2's own founder-decision list marks these as taken from the reviewer's recollection. As printed they are indistinguishable from the book's facts, and a student could be marked wrong for repeating them.
- Fix [NEW], if the founder does not want the new dates: "led the European Patent Office to revoke the patent, a revocation upheld on appeal in 2005 (the date the book gives)." Otherwise keep and label: "(the European Patent Office first revoked it in 2000 and the revocation was upheld on appeal in 2005; these dates are not in NCERT)."
- Kind: exam usefulness / unverified date. Source: ours (fixer wording). Confidence: possible on the dates themselves; certain that they are new to the chapter. REPEAT (R2 flag 7; it is the founder's call, listed in F2's decisions, and is still open).

**11. Additional topic F, Archetype 6 and Level 4 Q10 use opposite label sets (`extras-b-f.ts`, Additional F; book pp. 593 and 596).**
- Says now: Archetype 6 lists "A = Insulin, B = Free C-peptide, C = Cell peptidases, D = Proinsulin" and answers "the correct option is the one that reads D → C → A + B"; Q10 lists "A = Free C-peptide; B = Insulin; C = cell peptidases; D = Proinsulin" and answers "(a) D → C → B + A".
- What is wrong: each is internally right (I checked both against their own label lists), and the writers flagged it, but two pages apart the same figure is lettered two ways with no word to the student. The fixer's pointer was added only to Archetype 6.
- Fix [NEW], one clause on Q10's answer: "(the letters here are not the ones used in Archetype 6: read each question's own label list before matching)."
- Kind: unclear. Source: book. Confidence: likely. REPEAT in substance (R2 flag 18 judged it "not an error"; I agree it is not an error, but the student needs the warning on both items).

**12. Topic 01 "Why the specificity?" still ends on an absolute about mammals and birds (`topics-1-3.ts`, Topic 01, Key processes, after Step 5; book p. 537; wording from F1, R1 flag 10).**
- Says now: "...hence Bt cotton is effective only against certain taxa (bollworm and the like), not against every pest, and is not toxic to mammals and birds, and spares most non-target insects."
- What is wrong: the insect half was properly hedged ("most non-target insects"), the vertebrate half was left flat. The defensible statement is that Cry proteins of the kind used in Bt cotton have no known toxicity to mammals and birds at the levels they occur in the crop, not that they are not toxic as a general fact.
- Fix [NEW]: "...and the Cry proteins used in Bt cotton are not known to be toxic to mammals and birds, and spare most non-target insects."
- Kind: overgeneral claim. Source: book, partly fixed. Confidence: likely. REPEAT (R1 flag 10, applied to the first half of the sentence only).

**13. Additional topic D, Practice 3, the answer gives three pairs for a question that asks two (`extras-b-f.ts`, Additional D, Practice item 3; book p. 585).**
- Says now: question "Name two vectors used in gene therapy and one disease treated with each"; answer "Retrovirus: ADA-SCID (ADA deficiency); Adenovirus: cystic fibrosis (CFTR gene); Liposome: experimental muscle/gene therapy."
- What is wrong: the third pair is not an answer to the question, and "experimental muscle/gene therapy" is not a disease. A marker reading the answer key cannot tell what earns the marks.
- Fix [NEW]: "Any two, for example retrovirus for ADA-SCID (ADA deficiency) and adenovirus for cystic fibrosis (the CFTR gene). (Liposomes are the third vector in the table, used experimentally, with no established disease example.)"
- Kind: unclear / practice answer. Source: book. Confidence: certain. NEW.

**14. Topic 02 cheat sheet and Part B still carry NCERT's counts without saying when they were counted (`topics-1-3.ts`, Topic 02, Part B and cheat sheet; book p. 545; wording from F1, R1 flag 20).**
- Says now: "(For scale, NCERT's figures: at present around 30 recombinant therapeutics are approved for human use worldwide, of which about 12 are marketed in India: humulin being the flagship example; the numbers have grown since.)" and the cheat row "(NCERT's figures, since grown)".
- What is wrong: this is now correct and labelled, and I would keep it. I flag it only because "at present" sits inside a sentence that then says the numbers have grown, which reads as a contradiction in a cheat sheet a student skims.
- Fix [NEW]: drop the two words "at present": "(For scale, NCERT's figures: around 30 recombinant therapeutics are approved for human use worldwide, of which about 12 are marketed in India, humulin being the flagship example; the numbers have grown since.)"
- Kind: unclear (minor). Source: ours. Confidence: likely. NEW (R1 flag 20 asked for the label, which was added; this is the leftover "at present").

## Earlier flags I believe were applied wrongly

- R2 flag 4 (ELISA formats): applied with wording that equates indirect and sandwich ELISA. See flag 2 above. This is the one earlier fix I would call wrong rather than incomplete.
- R1 flag 6 (marrow cells): the parenthesis was moved into a clause where it says something NCERT does not say. See flag 4.
- R1 flag 28 (Rosie and the sheep): the fix was made in the label, not in the drawing, so the figure still shows a sheep beside Rosie. See flag 9.
- R2 flag 1 (transgenic sheep and AAT): correct in itself, but applied only in Additional F, leaving Topic 05's keyed statement with the claim R2 called dubious. See flag 3.

Everything else I checked in `new-text-F1.md` and `new-text-F2.md` is correct, plain and does not overclaim: the EST frequency labels, the Bt spectrum sentence from the errata, the "midgut of the susceptible larva", the 1983-route qualifications in Topic 02 and in the key points, the GEAC Approval/Appraisal note (consistent in Topic 06, Additional F and the key points), the "chapter lists ... whether a claim is granted depends on national law" rewrite of the biopatent MCQ, the "three fronts (the book's own framing, not NCERT's terms)" label, the Nagoya "where that country requires it, on mutually agreed terms" qualification, the Chapter 9 PCR-range note, the 10 to 30 per cent row, the one-cell-stage qualification in Additional B, the Herman nudge, and the Figure 10.7 redraw (GEAC now stands apart from the biopiracy chain, which fixes R1 flag 1; I checked the new caption against p. 571 and against Topic 06's own statement that GEAC does not deal with patents).

## Counts verified

- Structure: Topics 01 to 06 have 8 parts each; 12 topics in the chapter array (Topics 01 to 06 = 0 to 5, Additional A to E = 6 to 10, F = 11), matching the diagram and key-point `topic` indexes.
- Blocks: 32 MCQ blocks (Topic 01 four, Topics 02 four, Topic 03 six, Topic 04 six, Topic 05 six, Topic 06 six), 46 worked/example blocks, 7 figure blocks and no eighth, 19 tables. Practice: five items in each of Topics 01 to 06; six in A, six in B, seven in C, six in D, six in E, twelve in F (2 + 4 + 3 + 3).
- Keys recomputed from the questions themselves, not from the earlier reviews: Topic 01 b, d, c, b; Topic 02 c, b, b, b; Topic 03 c, b, c, b, b, a; Topic 04 b, b, d, b, b, c; Topic 05 c, b, b, d, b, b; Topic 06 a, b, c, b, a, d. Every `correct` index agrees with its stated option and each keyed option is the only correct one.
- Match keys: Topic 01 A-2 B-1 C-4 D-3; Topic 02 A-2 B-4 C-1 D-3; Topic 03 A-2 B-1 C-4 D-3; Topic 04 A-2 B-3 C-1 D-4; Topic 05 A-2 B-1 C-4 D-3; Topic 06 A-2 B-4 C-1 D-3; A.2 P-iii Q-ii R-iv S-i; B Practice 2 P-ii Q-i R-iii; C.1 P-ii Q-iii R-i; D.2 P-ii Q-i R-iii; E.2 P-i Q-ii R-iii. All correct.
- Assertion-reason: seven items in the chapter, every one with the four standard options and the fourth "A false, R true"; no "both false" option anywhere. All keyed (a), and in each the reason does explain the assertion.
- Multi-statement items: all keyed options checked statement by statement (Topic 01 (a); Topic 02 (a); Topic 03 (a); Topic 04 (a); Topic 05 (a), subject to flag 3; Topic 06 (a); F Q7 (b), Q8 (a), Q9 (b), Archetype 4 "only (iii)").
- Numbers: 2^25 = 33,554,432 = 3.36 x 10^7; 2^30 = 1,073,741,824 = 1.07 x 10^9 and the "about 10^9-fold" statement; 2005 - 1994 = 11 years; 2.4 g L^-1 for Rosie's α-lactalbumin; about 95 per cent mice; 18 to 25 nucleotide primers; 25 to 35 cycles; 94 to 98, 50 to 65 and 72 °C (with the Chapter 9 note); gestation 19 to 21 days; 10 to 30 per cent of offspring; about 30 and about 12 recombinant therapeutics. All arithmetic correct. No amino-acid count, and therefore no wrong "51", appears anywhere in the chapter; no percentage claims to add to 100 except the Additional F distribution, whose shares were replaced by words.
- Exam years: none remain in the chapter text (the six "NEET 20xx" lines read "a recent NEET paper"). The only years printed are 1983, 1990, 1994, 1997, 2000, 2002, 2005, 2010 and 2014, each tied to a named event; of these, 2000 in Additional E is new to the chapter (flag 10).
- Nomenclature: scientific names italic and correctly formed throughout (*Bacillus thuringiensis*, *Meloidogyne incognita*, *Agrobacterium*, *Escherichia coli*, *Thermus aquaticus*, *Azadirachta indica*, *Curcuma longa*); *cry* gene symbols italic in Topics 01 to 03, the key points and Additional F Q3; *CFTR* italic in Additional D; ADA left upright consistently (the founder decision in F2 is still open); δ-endotoxin, α-lactalbumin, α-1-antitrypsin, β-carotene, Mg^2+, MgCl_2, 5′ → 3′ all correctly set; "g L^-1" follows the house unit rule.
- Additional-topic introductions checked against the Topics as built: the shared introduction's five claims are true as now worded (Topic 04 gives no ELISA wells or steps; Topic 05 names no production method; Topic 04 names no PCR temperatures and gives the Taq mention but no rationale; Topic 03 gives the ex vivo procedure and no in vivo route; Topic 06 gives no patent numbers or conventions). B, C, D and E introductions make no "the chapter never covers X" claim. No false introduction found.
- Key points: 42 points, `topic` indexes 0 to 11 in order, pages cited above each point plausible against the book folios; every question, answer and `why` checked against the chapter text. Two flags only (1 and 7 above); the rest are accurate and are more careful than the book where the book overreaches.

## Figures checked (with pages)

All seven rendered from the book pages and compared with the drawing code and the captions in `lib/diagrams/biology-12-10.ts`:

- Figure 10.1 (p. 538, Topic 01): four panels in the book's order, the label set complete, the activation only in the gut, seven arrowheads, pores highlighted. The *cry* italics asked for in R1 flag 27 are in. No flag.
- Figure 10.2 (p. 540, Topic 01): three steps, the *Agrobacterium* arrow running leftwards into the root cell as on the page, sense and antisense pairing into dsRNA, outcome box. No flag.
- Figure 10.3 (p. 546, Topic 02): both routes, the C-peptide loop and the two S-S bridges on the natural side, two plasmids and two bioreactors on the Lilly side, the join step and HUMULIN. No amino-acid count on the page or in the drawing. No flag.
- Figure 10.4 (p. 553, Topic 03): five numbered steps, the cDNA entering the retrovirus before step 4, the dashed return loop from step 5 to step 1 with "must repeat periodically (not permanent)", and the embryonic-stage note. No flag.
- Figure 10.5 (p. 559, Topic 04): three cases; the probe case says "normal gene: dark spot" and "mutated gene: NO spot", which is the fact the key point in flag 1 contradicts. The colour words of the book ("antibodies (blue) bind antigens (red)") are reworded to shapes, as the diagram report states. No flag.
- Figure 10.6 (p. 565, Topic 05): hub, five uses in the book's order, Rosie and the sheep lines as split by F1 — see flag 9 for the drawing.
- Figure 10.7 (p. 571, Topic 06): the redraw is right: only the Patents Bill box hangs from BIOPIRACY, GEAC stands under its own GM-release box, and the box text now says "foreign company or institution". Caption agrees with the drawing and with Topic 06. No flag.

## What I could not check

- NCERT's own text: the repo has the Master Reference book only, so every statement I label "NCERT" is from my own knowledge of the Class 12 textbook, not from a copy.
- The rendered SVGs of the figures as the app draws them: I compared the book page images with the drawing source (labels, coordinates, arrow and highlight counts) rather than with dumped SVGs, since the brief for this review forbids running jest. Overlap, clipping and font fallback on a device are therefore not covered here, and nor is the Android pass.
- Patent, legal and historical facts in Additional E (patent numbers, filing and revocation years, the TKDL and Nagoya details): checked against my own knowledge only; they are not in NCERT and the founder should rule on the ones F2 added (flag 10).
- Italics and bold as printed on the book pages: the page images were rendered for the seven figure pages only; for the text pages I worked from the page-tagged dump, so an italic that the book prints and the app drops (outside scientific names and gene symbols, which I did check) would not show up.
- Whether Topic 04's and Additional C's PCR temperatures should be made to agree with Chapter 9: a founder decision that F2 left open, not a reviewer's call.

## Overall judgement

As it now stands the chapter is accurate and is, in the places the first two reviews touched, noticeably more careful than the book. The transcription holds in both directions, every key and every number is right, the figures match the pages, the errata are in, and the fixers' new wording is almost all sound. What this third pass adds is a short list of places where a fix was made on one surface and not on its twin (Topic 05's AAT statement against Additional F's, the key points against Topic 03's "clinical", the Figure 10.6 label against the drawing), two fixer sentences that need another look (the indirect/sandwich equation, the marrow-cell parenthesis), and one key-point line that states the opposite of the fact it is meant to fix. None of these is a reason to hold the chapter beyond the time it takes to apply them; the ELISA format sentence and the probe `why` line are the two I would not ship without.

## Summary

14 flags: 6 NEW, 8 REPEAT (4 of them earlier flags applied wrongly or only in part). Serious enough to fix before a build: 4 (flags 1, 2, 3 and 4). The rest are clarity, consistency and one figure detail.
