# new-text-R3: Biology 12 Chapter 9, fixes for review-R3 (all 14 flags applied)

Files: T13 = content/textbooks/bio-12-09/topics-1-3.ts, T4AB = topic-4-extras-a-b.ts, CD = extras-c-d.ts, DG = lib/diagrams/biology-12-09.ts, KP = lib/revise/keypoints-biology-12-09.ts.

## [NEW] wording
1. T4AB, Additional A, Introduction para 2: "(the Ti plasmid and retroviral vectors are named in Topics 02 and 04 without being developed; lambda, cosmid, BAC, YAC and adenoviral vectors are new)". Corrects the false "only named in Topic 02".
2. T4AB, Additional B, Method (two paragraphs merged into one): "Keep the two ideas apart in your own reasoning: the antibiotic plate is a selection (non-transformants die), while blue-white colour or insertional inactivation is a test applied to the colonies that survived. NCERT calls the chromogenic (blue-white) test and insertional inactivation <b>selectable markers for recombinants</b>, so in a CBSE answer use NCERT's words and keep the mechanism straight." (Flag 10: this replaces the B copy of the caveat; Topic 02 and D Values item 2 keep theirs; KP Additional B point 1 `why` shortened to "...disruption is screening (NCERT calls both selectable markers).")
3. CD, Additional C, neem example: "...on grounds of prior traditional knowledge; the patent was revoked and the revocation upheld on appeal." (no year)
4. Flag 4, restored printed values with one qualifier each:
   - T4AB Electroporation: "field strength about 12-15 kV cm<sup>-1</sup> as this chapter gives it (published protocols run to about 18 kV cm<sup>-1</sup>)". Practice 2: "Electroporation (for E. coli, about 12-15 kV cm<sup>-1</sup> as given here)." Worked example B.2 carries no kV figure in the file (only the method block and Practice 2 did), so there are two places, not three.
   - T4AB YAC table cell: "500 kb - 1.5 Mb (published YACs span about 0.2-2 Mb)". Example A.1: "A YAC could also hold it, but is less stable." Practice 1: "insert size 500 kb-1.5 Mb as given here." Practice 6: "up to 1.5 Mb as given here (published YACs span about 0.2-2 Mb)". KP YAC point: "about 500 kb-1.5 Mb as the chapter gives it (published YACs span about 0.2-2 Mb)".
5. T13, Topic 02 pBR322 paragraph: "The map is schematic. Of the sites drawn, only PstI and PvuI (in amp<sup>R</sup>) and BamHI and SalI (in tet<sup>R</sup>) are used for insertional inactivation in this chapter. EcoRI lies in neither resistance gene; PvuII is drawn on the rop arc, and ClaI and HindIII sit just beside tet<sup>R</sup>, so this drawing should not be used to predict what an insert at those three sites would switch off."
6. T13 Topic 02 MCQ 3 (c) nudge: "<b>(c)</b> is false: restriction endonucleases cut both strands. This is a recurring distractor." T4AB Topic 04 MCQ 3 (d) nudge: "<b>(d)</b> PCR amplifies DNA, not protein: a frequent NEET confusion." (full label kept in Exam Relevance and pitfalls)
7. DG Figure 9.8: caption "...About 30 cycles give roughly a billion copies of the target in the ideal case." Pill: "~30 cycles: about a billion, ideally (2<sup>30</sup> ≈ 10<sup>9</sup>)" and the check string updated to match. The review's wording "about a billion copies in the ideal case" ran outside the frame (layout audit), so the pill is shortened; it still carries the hedge. Founder may prefer a wider pill.
8. T4AB Retroviral paragraph: "This DNA integrates into the host genome as a <b>provirus</b> and is copied with the chromosome at every division." The later sentence now reads "It delivers the gene into the host genome (the provirus can sometimes be silenced, and a random insertion can disrupt a host gene)." (a duplicate "copied with the chromosome" removed)
9. T13 Topic 02 Practice 5 answer: "A circular vector cut at two sites falls into two fragments (n cuts on a circle give n pieces), so it no longer stays one intact carrier and the gene cannot be cloned on it; a usable vector needs a single recognition site for the enzyme you intend to use."
11. CD, D graded Q1 answer (b): "Hind II was the first type II restriction endonuclease characterised (Hamilton Smith, 1970; Nobel Prize 1978 with Arber and Nathans). NCERT calls it simply the first restriction endonuclease, so answer "Hind II." EcoRI is the enzyme most often illustrated, which is why students confuse "famous" with "first.""
12. T13 Topic 01 cheat sheet row 4: "First rDNA, Cohen & Boyer (1972)" (milestones bullet keeps the 1973 note).
13. T4AB Additional A Introduction para 1, inserted before "Each section provides...": "A last Additional topic then sets out what NEET actually asks from this chapter and how to answer each question shape."
14. DG check96 string: "The gel shows three ordinary bands with the target fragment lowest, as the book draws it (the book gives no sizes and no direction of run)".
Also: stale file-top comment in T4AB (said lacZ and vir are upright) corrected to say gene symbols are italic.

## Printed numbers, keys, titles changed (old -> new)
- Electroporation field strength: 12-18 kV/cm -> 12-15 kV/cm (back to the book, p. 516/519), 2 places.
- YAC insert size: "about 200 kb - 2 Mb" / "about 0.2-2 Mb" / "up to about 2 Mb" -> 500 kb-1.5 Mb (book p. 512/515), table, Practice 1, Practice 6, Example A.1 (number removed), KP. Re-checked: BAC 100-300 kb vs 200 kb fragment and "YAC larger than BAC" reasoning still hold (1.5 Mb > 300 kb).
- Neem: "revoked in 2005" -> no year.
- Figure 9.8 caption and pill (hedge wording only).
- No answer key, title or heading was changed. Practice 5 answer count (2 fragments on a circle) recomputed: n cuts on a circle = n pieces.

## Founder decisions / not verified
- Flag 5: the claim that ClaI and HindIII sit "just beside tet<sup>R</sup>" is the reviewer's knowledge of the real plasmid, not read from the book; verify or soften. Also PvuII on the rop arc matches the book's Figure 9.2 per the review.
- Flag 3: the neem facts (revoked, upheld on appeal) are from the review's memory; the book has no date.
- Flag 4: the printed book values are restored, the published-range nuance sits beside them as a [NEW] parenthesis; founder may drop it.
- Flag 10: KP Additional B point 1 `why` shortened, and the B copy merged (flag 2); Topic 02 and D Values copies deliberately kept.
- Flag 6 conflicts with nothing; the long frequency label stays in the Exam Relevance blocks and pitfalls.
- Flag 7: pill uses "ideally" (space limit), caption uses "in the ideal case".
- Nothing was left unapplied. Open item from R3 unchanged: phone render of the 8 figures (esp. Figure 9.3 grey, Figure 9.8 pill) not checked.

## Tests
- book-rules, book-chapters, display-fit (-t Biology 12 Chapter 9 etc.): Biology 12 Ch 9 all pass; 1 failure in display-fit, "Biology 11 Ch 19 A p: pGlu-His-Trp... is 345 wide on a 342 line", not this chapter.
- lib/diagrams -t "biology.12.9": 31 passed, 0 failed (after shortening the pill).
- lib/revise: 137 passed.
- eslint on all changed files: clean.
