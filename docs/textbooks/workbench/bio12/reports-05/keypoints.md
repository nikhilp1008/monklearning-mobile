# Biology Class 12 Chapter 5: keypoints helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-17T00:53:39Z)

DONE: /Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/revise/keypoints-biology-12-05.ts is written (stub replaced; `export const KEY_POINTS: KeyPoint[]` kept).
Checks, run once at the end: `jest-serial.sh lib/revise` passed (137 of 137), `npx eslint` on the file was clean (exit 0). No tsc, whole jest, git or subagents. A grep of the points for em dashes and for only/always/never/every/all found none outside the header comment.

COUNTS (44 points; topic index = position in the chapter, A to F = 6 to 11, G = 12)
- Topics 01 to 06 (indexes 0 to 5): 5 each (2 Remember, 1 Don't mix up, 1 Common mistake, 1 Exam shortcut) = 30.
- Additional A to F (6 to 11): 2 Remember each = 12.
- Additional G (12): 1 Remember + 1 Common mistake = 2.
- `say` lines: 6, one per Topic 01 to 06, each the cheat sheet's first aid with the markup dropped and the label turned into the arrow form. They are on:
  - T01 second Remember: replication crew (Help Topple Single Primers, Police Ligate).
  - T02 shortcut: proof ladder (Great Apes Hunt).
  - T03 mixup: code features (Try Doing Unambiguous, Non-overlapping, Universal Codes Loyally).
  - T04 mixup: ribosome sites (A for Arriving, P for Peptide).
  - T05 first Remember: ZYA = β-gal, Permease, Transacetylase.
  - T06 first Remember: 3 – 30 – 99.9.
  The Additional topics have none.

HOW THE POINTS WERE BUILT
- Each point has a page cite in a `// pp.` comment, `why` and `q`/`a`, and follows the 11-14 and 12-03 files in shape. The header comment lists every place where the book is loose and what the point says instead.
- Page cites are given per part of a topic (definitions, mechanism, worked, practice, pitfalls, cheat sheet). I located them by phrase search in bio12.paged.txt, not by opening every page image, so a few cites are approximate by one page.

WHERE THE BOOK WAS LOOSE OR WRONG (points give the safe version; the book's text is not repeated)
- DNA polymerase "only 5′ → 3′" and "never 3′ → 5′": the points say it extends from a free 3′-OH in the 5′ → 3′ direction, and that its 3′ → 5′ activity is a separate proofreading job. The same applies to G's trap table and graded Q10.
- Chargaff "holds only for double-stranded DNA" (p. 289): given as double-stranded DNA, with double-stranded RNA pairing A with U.
- "RNA was the first genetic material" and "that is precisely why DNA replaced it" (pp. 238, 240, 289): given as the RNA world hypothesis.
- "Degenerate and unambiguous are opposites" (p. 289): the points say they are two separate properties and the code is both.
- Hershey–Chase: the points say "most of the 35S stayed outside", not none.
- RNA polymerase III "makes snRNAs" (pp. 243, 249, 275): flagged as the book's assignment. The spliceosomal snRNAs U1, U2, U4 and U5 are Pol II products; only U6 is Pol III.
- σ starts and ρ ends (pp. 243, 289): given for bacteria, with ρ helping end transcription at many terminators and an intrinsic hairpin at others.
- Ribosome sites (p. 251): the book puts A and P in the large subunit. The point says so and adds that the sites sit between the subunits and that there is an E site.
- "A ribosome never drifts between frames", "translation is one of the most energy-hungry processes" and "the cell cannot use lactose": not repeated (the last is given as "cannot use lactose efficiently").
- Human genome figures (pp. 265 to 271, 279 to 281, 289):
  - Gene count: the book's ~30,000, with a note that current counts of protein-coding genes are nearer 20,000 (my confidence in that note is high).
  - Chromosome 1 = 2968, Y = 231, 1.4 million SNPs: given as the book's figures.
  - G prints "3.2 billion" base pairs against "3 billion" elsewhere: I use about 3 billion (3164.7 million).
  - Chromosome 21 = 281 genes over 48 million bp (Additional topic D practice 1) is the book's own and not in NCERT; I could not verify it. It appears only in the Additional F second Remember, marked as "the book's example".
- "Comparing genes would be uninformative" and "only VNTR carries variation" (pp. 268, 269): not repeated. Points add that identical twins share a profile and that a match shows consistency, not when or how the DNA got there.
- Additional A: "polymerase I removes primers" is given as the book's bacterial picture, eukaryotes using other enzymes. The last practice's "~11 high-energy bonds" is not used.
- Additional B: U6 is not called the only catalyst. Poly-A tailing is given as after the 3′ cut at the end of transcription, not "only after termination".
- Additional C:
  - lacZ is given as the book's 1024 amino acids (the real protein has 1023).
  - 3072 is the codon nucleotides, and the stop codon adds 3 more.
  - The leftover 138 nucleotides are the book's UTR count and include the stop codon.
  - I did not use "a single operator" (E. coli has three operators, O1 to O3).
  - Practice C5(b)'s claim that expression is "higher than in (a)" is not used. I only say the level is lower in glucose, which matches the book's own (a).
- Additional E:
  - Probabilities are given for independent loci.
  - "Essentially certain" and "extremely unlikely" are not repeated. The 1/(1.56 × 10^10) is stacked with the whole product in the denominator.
  - Y-STRs are given as passed on apart from rare mutations.
  - The swapped-children item is given as "child A fits family Y, child B fits family X", because the question never says which family each child is with.
- G: all weightings and the "heaviest", "reliably", "no topic can be skipped" and "three most common traps" claims are not repeated. G Remember says the weighting is the book's estimate from past papers, not official figures, and gives no counts, shares or exam years. G Q8 (two generations of Meselson–Stahl) is repeated as "half hybrid, half light".

RECOMPUTED (all agree with the book)
- Base percentages: C 22 gives A 28; A 30 gives C 20; C 20 gives A 30.
- Meselson–Stahl: 2 generations give 1:1 hybrid to light; 3 generations give 2 hybrid and 6 light duplexes.
- Codons: 1500 nt gives 500 codons and at most 499 amino acids; 153 nt gives 51 codons and 50 amino acids.
- Sequences:
  - Coding 5′–ATGCAGTAC–3′ gives template 3′–TACGTCATG–5′ and mRNA 5′–AUGCAGUAC–3′.
  - Anticodon for GCA is 3′–CGU–5′ = 5′–UGC–3′; for AUG it is 5′–CAU–3′.
  - 5′–AUG GCA UAA–3′ gives 2 amino acids; 5′–AUG CCU UAA–3′ gives 2 amino acids.
- Additional topics A to E:
  - A.3: 1,440,000; 2,880,000; 104.2 → 105 origins; 833 h ≈ 35 days.
  - B: 200 − 50 = 150; 5 introns give 10 broken and 10 formed.
  - C: 3072; 138.
  - D: 11.9, 4.1, 2.9×, 4.4×, 12.9×; 0.27, 1.5 per cent, 94.4 per cent.
  - E: (1/50)^6 = 6.4 × 10^−11; (1/20)^4 = 6.25 × 10^−6; the band-matching examples (child 4 and 7 kb is not excluded; child A fits family Y and child B fits family X).

UNSURE
- The "current counts nearer 20,000" note on the gene count is mine (consensus knowledge, not from the book). Delete it if you want the file strictly the book's figures.
- Memory-line wording: word for word means the aid text with the markup dropped. T06's line keeps "~30,000 genes", the book's loose figure. T01 uses a colon after the mnemonic phrase, as in the 12-02 file.
- I read every part of the chapter text, but I did not open the PDF page images, so bold and italic follow the chapter files as the writers set them. I put gene symbols i, z, y, a, lac and ori in italic per the main brief. The writers' own reports flag that the book prints some of these upright (the z, y, a in the Q&A and pitfalls).
