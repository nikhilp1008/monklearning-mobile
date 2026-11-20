# Biology 12 Chapter 10: new wording from fixer R3 (all 14 flags of review-R3.md applied)

Files: T1 = content/textbooks/bio-12-10/topics-1-3.ts, T2 = topics-4-6-extra-a.ts, T3 = extras-b-f.ts, K = lib/revise/keypoints-biology-12-10.ts, D = lib/diagrams/biology-12-10.ts.

## [NEW] wordings
1. K, Topic 04 `mistake` point, `why`: "Probe single, mutant gives no spot, ELISA both antigen and antibody."
2. T2, Additional A, Method, paragraph after the proc: "This four-step protocol is the indirect layout: a known antigen is coated and the sample’s antibody is what binds. In direct ELISA the sample’s antigen is itself adsorbed to the well in step 1, and the enzyme-linked antibody of step 4 is added straight after blocking. The antigen-trapping (sandwich) format below differs again: the well is coated with a capture antibody."
3. T2, Topic 05, Crack the MCQ multi-statement, statement (iv): "The human protein α-1-antitrypsin, used to treat emphysema, has been made in transgenic sheep." (key (a) unchanged). T2, Topic 05 Practice 4 answer: "α-1-antitrypsin, made in transgenic sheep, for emphysema (also acceptable: Rosie’s α-lactalbumin milk)."
4. T1, Topic 03, Concept intuition, Limiting Conditions: "...would require introducing the functional gene (NCERT describes it as a gene isolated from the marrow cells that make ADA) into cells at an early embryonic stage, so that all future cells inherit the correction."
5. T1, Topic 03, table "Gene therapy vs enzyme replacement therapy", Limitation cell: "Mature lymphocytes die, so the corrected cells must be re-infused periodically; only a correction made at an early embryonic stage would be permanent"
6. T2, Topic 06, Key terms, Indian Patents Bill row: "India’s patent law; the step taken against biopiracy was its second amendment, with provisions on patent terms, emergency provisions and research and development initiatives."
7. K, Topic 03 `remember` 1: question "What was done in the first clinical gene therapy, and why was ADA the target?"; answer now begins "...In 1990 the first clinical gene therapy treated a girl with ADA deficiency..."; file header comment: "the 1990 case is the first clinical gene therapy".
8. T3, Additional C, Practice 4 answer: "2^30 ≈ 1.07 × 10^9-fold (about a billionfold); starting from a single molecule that is about 10^9 copies." (set with <sup>)
9. D, Figure 10.6, panel (3): drawing now shows a cow (horns, four-legged shape with two legs drawn, above) beside the Rosie line and a sheep (below) beside the sheep line. Labels, caption and checks unchanged.
10. T3, Additional E, case 2 (neem): kept the dates and labelled them: "(the European Patent Office first revoked it in 2000 and the revocation was upheld on appeal in 2005; these dates are not in NCERT)."
11. T3, Additional F, Q10 answer, appended: "(The letters here are not the ones used in Archetype 6: read each question’s own label list before matching.)"
12. T1, Topic 01, Why the specificity?: "...not against every pest, and the Cry proteins used in Bt cotton are not known to be toxic to mammals and birds, and spare most non-target insects."
13. T3, Additional D, Practice 3 answer: "Any two, for example retrovirus for ADA-SCID (ADA deficiency) and adenovirus for cystic fibrosis (the CFTR gene, italic). (Liposomes are the third vector in the table, used experimentally, with no established disease example.)"
14. T1, Topic 02, Part B scale sentence: "at present" removed: "(For scale, NCERT’s figures: around 30 recombinant therapeutics are approved for human use worldwide, of which about 12 are marketed in India, humulin being the flagship example; the numbers have grown since.)"

## Printed answer keys, numbers, titles, headings changed
- Topic 05 Practice 4 answer text (old "α-1-antitrypsin made in sheep, used to treat emphysema ...", new in 3 above); the MCQ key (a) unchanged.
- Additional C Practice 4: old "2^30 ≈ 1.07 × 10^9 copies (about 1 billion)", new in 8. Arithmetic rechecked: 2^30 = 1,073,741,824.
- Additional D Practice 3 answer (old three pairs, new in 13).
- Additional F Q10: answer key (a) unchanged; note appended. Labels recomputed: D → C → B + A is right for its own labels.
- No title or heading changed. No MCQ option letter or match key changed.

## Founder decisions / not applied / judgement calls
- Flag 10 (neem dates): the review offered two options; I chose "keep and label" (the dates are shown as not in NCERT). The founder may instead prefer the 2005-only wording ("revoke the patent, a revocation upheld on appeal in 2005 (the date the book gives)").
- Flag 3: the other Topic 05 surfaces (the match item "Treats emphysema (made in sheep)", the table row, cheat sheet "sheep → α-1-antitrypsin", Pitfall 2) are the book's own pairing and the review did not flag them; left as the book words them (consistent with the book's wording kept; the nuance sits in the keyed statement and Practice 4). The founder may want the same "transgenic sheep, experimental" softening in the pairing mnemonics.
- Flag 9: the review allowed cow plus sheep or dropping the animal; cow plus sheep drawn. The cow is a simple body, head, two horns and two legs, so the founder (who owns rendering) should look at it on a device; the diagram layout audit and checks pass.
- Flag 2 and flag 5 and others: no conflict with the book's wording; the book's NCERT sentences were kept and the nuance added beside them.
- Flag 14: "at present" dropped; the cheat-row "(NCERT’s figures, since grown)" was already correct and left.
- Nothing from review-R3.md was left unapplied.

## Tests
- jest book-rules, book-chapters, display-fit with the Biology 12 Chapter 10 filter: all Biology 12 Chapter 10 tests pass; one failure outside this chapter: display-fit "Biology 11 Ch 19 A p: pGlu-His-Trp-Ser-Tyr-Gly-Leu-Arg-Pro-Gly-NH2 is 345 wide on a 342 line" (not a file I may edit; not caused by this work).
- jest lib/diagrams -t "biology.12.10": passed (31 tests).
- jest lib/revise: passed (137 tests).
- eslint on the five changed files: clean.
