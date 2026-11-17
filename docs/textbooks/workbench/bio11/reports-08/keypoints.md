# Biology Class 11 Chapter 8: keypoints helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-16T23:16:25Z)

I wrote /Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/revise/keypoints-biology-11-08.ts. It has 32 points and no `say` line anywhere. `jest-serial.sh lib/revise` passed (1 suite, 137 tests), and `npx eslint` on the file is clean. I checked that the file has no em dash and no straight apostrophe inside a string. The jest run was before my last edit, a wording change inside the header comment; I re-ran eslint after it but not jest.

**Counts per topic** (`topic` index in brackets)
- Topics 01, 02, 03 and 04 [0 to 3]: 5 each. That is 2 Remember, 1 Don't mix up, 1 Common mistake and 1 Exam shortcut.
- Additional A to E [4 to 8]: 2 Remember each.
- F, What NEET Actually Asks [9]: 1 Remember (the book's estimate of the shares and the six question types) and 1 Common mistake (the ten traps).

**Choices where I departed from the book's words**
- **No memory lines.** The cheat sheets of Topics 01 to 03 print no aids, as you said. The Topic 04 cheat sheet also has `aids: []`, and the Additional topics have no cheat sheet. So every `say` is null and the chapter has no memory lines. The mnemonics that sit in the running text ("MCP are out", "W-P-V", B-H-F, "Capsule is Compact") appear inside answers only. The header says all this.
- **Topic 04 has the full five-point shape.** Its text does have pitfalls and a pro-tip, so "Chemistry-style minimal set" came out as 5 points. If you wanted fewer, drop the Exam shortcut, the Common mistake and the Don't mix up and keep the two Remember points.
- **Ribosomes.**
  - I did not repeat "the only organelle without a membrane" or "the one organelle shared by prokaryotes and eukaryotes". The membrane tiers are given as the book's table has them, with ribosomes and centrioles in the "none" tier, and ribosomes are said to occur in both groups with 70S against 80S.
  - "50S + 30S = 70S" became "a 50S and a 30S subunit", because Svedberg values do not add.
  - Mitochondrial 70S is given as the book and NCERT give it, with the note that animal mitochondrial ribosomes are about 55S. That note is a fact outside the chapter text.
- **Mesosome.** I gave it as the plasma-membrane infolding that raises surface area and enzyme content, and did not assert respiration as its role. "Bacteria respire without mitochondria" is worded as respiration on the plasma membrane and its infoldings.
- **Plasmodesmata and glyoxysomes.** I dropped "plant only" and "the only junction". Glyoxysomes are the peroxisomes of germinating fatty seeds, with no claim that the glyoxylate cycle is unique to them or that they occur in plant cells only.
- **"Every cell is a bag of cytoplasm" and "the one criterion that never fails".** I dropped both. The membrane-bound nucleus and organelles are "the reliable discriminator". The mature red blood cell and the sieve-tube element are noted as eukaryotic cells that lose the nucleus.
- **Envelope order.** The plasma membrane is "innermost" only for the book's three-layer envelope, and the answer notes the Gram-negative outer membrane.
- **Endosymbiosis.** I did not write "all confirmed". Gene transfer explains the reduced mitochondrial genome only.
- **Wall rows and centrioles.** Mycoplasma has no wall, the eukaryotic wall row is cellulose, chitin or none, and the centriole point carries the book's own note about algal and bryophyte gametes.
- **SAT chromosome.** It is "associated with nucleolus formation"; the nucleolus organiser region (NOR) is where the nucleolus forms.
- **Exam shares.** The F shares are "the book's estimate from past papers, not official figures". They carry no years, no "single highest-yield" and no "every session".
- **Topic 01 omissions.** I left out the bacterial appendages (pili, fimbriae) and the Leeuwenhoek date. The flagellum parts appear only in the Topic 03 Common mistake.
- **Page comments.** Most are section-level ranges taken from the paged text dump. I did not check each fact against the page images.

**Not done:** I ran no tsc, no whole jest and no git commands.
