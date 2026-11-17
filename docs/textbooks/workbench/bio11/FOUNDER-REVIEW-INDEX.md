# Biology Class 11, Chapters 1-14: what Nikhil needs to approve

State (2026-11-17): ALL of Biology Class 11 (chapters 1 to 19) and Class 12 (chapters 1 to 13) are written, drawn, key-pointed, expert-reviewed twice and fixed; wired into the shelf. Chapters 1 to 14 of Class 11 were pushed first (e9caa34). Below: the earlier note.

State (2026-11-16): all 14 chapters written, drawn, key-pointed, expert-reviewed and fixed in the worktree
wt-biology-textbooks. NOTHING IS COMMITTED OR PUSHED. Checks green: tsc, eslint, full jest (7,280 tests).

## Where the new wording is
Every chapter has `reports-NN/new-text-F1.md` (topics + figures) and `new-text-F2.md` (Additional topics + key points)
listing each wording WE wrote (marked [NEW]), with file, topic, block and exact text. Chapter 1 has
`new-text-b11-01-F1.md` and `-F2.md`. Review reports (what was wrong and why) are in the same folders.

## Decisions waiting on the founder (all also listed inside the new-text files)
- Ch 2: Additional A title "Replaced" -> "Split"; G13 key changed to (a); F title "NCERT Example Index" (now has non-NCERT names).
- Ch 4: confirm NCERT's Chondrichthyes notochord line; Reptilia heart errata applied to Master Revision row; F title.
- Ch 5: F title "All Addenda Combined"; Fabaceae/Leguminosae naming; calciferous glands note (Ch 7) needs a zoology check.
- Ch 7: calciferous glands wording; "Young form" label for cockroach; parotid-only salivary example.
- Ch 9: D.4 (b) key kept (NEET idiom) with phytosterol note; Topic 0 #4 reworded question.
- Ch 11: Topic 04 "NCERT values" bullet (C3/C4 optimum temperature, CO2 and light saturation) written from memory: verify or drop; D temperature wording; Portulaca line in D.
- Ch 12: Additional D title now "Respiration in Plants: The Alternative Oxidase Pathway" (departs from book heading).
- Ch 13: phytochrome chain left as text, figure b11-13-D-d1 not drawn; ABI sentence kept (delete if unwanted).
- Ch 14: G Q10 VC note and "2-3 questions" -> "Lower" (delete if unwanted); topic 7/10 cite choice.
- Book-wide: "[NEET]/[CUET]/[CBSE]" tags on practice items are difficulty tags, not "asked in" claims.

## Still to do before any push
1. Founder sign-off on all [NEW] wording above.
2. Android emulator pass: shared reader change in components/textbook/markup.tsx (U+2640, U+2642, U+26A5, U+25A1 now routed to STIX Two Math), plus U+0332 underline on G in floral formulae, plus sample chapters.
3. Wire chapters 2-14 into the shelf (`CHAPTERS` in lib/textbooks.ts and OPENS_ON_CHOICE) only after sign-off; check catalogue names against the live /drona/catalogue. Only Ch 1 is wired now.
4. Biology 11 Chapters 15-19 and Biology 12 (13 chapters) not started.

## Added 2026-11-17: Class 11 chapters 15 to 19 and all of Class 12
- Same layout: every chapter has `new-text-F1.md` and `new-text-F2.md` (our new wording, with file, topic, block and exact text, plus founder decisions) and `review-R1.md` / `review-R2.md`.
  Class 11 chapters 15 to 19: docs/textbooks/workbench/bio11/reports-15 .. reports-19.
  Class 12 chapters 1 to 13: docs/textbooks/workbench/bio12/reports-01 .. reports-13 (briefs and DECISIONS-B12.md next to them; DECISIONS-B12 items 4 to 17 are coordinator layout calls awaiting the founder).
- Wired into the shelf: lib/textbooks.ts keys 'biology|11|...' (19 chapters) and 'biology|12|...' (13 chapters); lib/chapter-essentials.ts OPENS_ON_CHOICE. The shelf keys come from the catalogue names copied into constants/onboarding-chapters.ts on 2026-10-15; re-check against the live chapters table before a store build.
- Still not done: the Android emulator pass for the shared-reader change (components/textbook/markup.tsx routes U+2640, U+2642, U+26A5 and U+25A1 to STIX Two Math) and a phone look at one chapter per subject area; Nikhil's sign-off on all [NEW] wording and the founder decisions listed in the new-text files.
