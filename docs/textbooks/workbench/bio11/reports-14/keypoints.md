# Biology Class 11 Chapter 14: keypoints helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-16T23:19:06Z)

I wrote `lib/revise/keypoints-biology-11-14.ts`, replacing the stub. It has 36 points and no em dashes. `jest-serial.sh lib/revise` passed (1 suite, 137 tests), and `npx eslint` on the file is clean.

`'biology|11|14'` was already registered in `lib/revise/keypoints.ts`, so I did not touch that file. After the jest run I made two small wording edits and re-ran only eslint, so the final text has not been through jest. I didn't run tsc, the whole jest suite, git or any subagents.

**Layout.** I followed the Chapter 13 shape, not a flat two points per topic.
- **Topic 01 (index 0):** 2 Remember and 1 Don't mix up, because the overview has no pitfalls or Pro-Tip.
- **Topics 02 to 04 (indexes 1 to 3):** 2 Remember, 1 Don't mix up, 1 Common mistakes and 1 Exam shortcuts each.
- **Topic 05 (index 4):** 2 Remember, 1 Common mistakes (the consolidated traps) and 1 Exam shortcuts.
- **Additional A to F (indexes 5 to 10):** 2 Remember each.
- **G (index 11):** 1 Remember and 1 Common mistakes.

Each point has a page cite above it, a `why` line, and `say` where the cheat sheet prints a memory aid. There are four `say` lines: Topic 02's "Pull in (active), let go out (passive).", Topic 03's "Hot, acidic, CO2-rich → oxygen released." (with CO2 plain, since `say` takes no markup), and Topic 04's two ("M before P" and "CO2 is the alarm, not O2"). The header comment lists every book error I avoided.

**Book errors stated safely instead of repeated:**
- **Weighting:** no "highest-weightage unit", "9+" or "14+" counts, or "a third" shares. G says it is the book's estimate from past papers.
- **Right shift of the O2 curve:** low pO2 is not listed as a cause; the causes are high pCO2, low pH, high temperature, and 2,3-BPG in F.
- **Diffusion:** the "Graham" remark is not used. Surface area is added to the rate fraction.
- **CO2 split:** the 70, 20–25 and 7 per cent split is not applied to the 52 mL total in C. The net exchanged is 4 mL per 100 mL.
- **Breathing:** inspiration is not called "never passive", forceful expiration is said to be active, and no breaths-per-minute figure is credited to the chapter.
- **Volumes:** "TV < ERV < RV < IRV" is not given as a law.
- **Rings and bronchioles:** the oesophagus reason for the C-shaped rings and the "respiratory bronchioles" wording are not used.
- **Disorders:** no "fundamentally allergic", "ventilation may be fine" or "only emphysema" claims.
- **Carbon monoxide:** no "250 times" figure.
- **Highlanders:** the red-cell rise is described as a gain on acclimatisation.
- **V/Q:** the normal ratio is given as about 0.8 to 0.9. An asthma attack is low V/Q, not a shunt.
- **Altitude and animals:** 2,3-BPG rises within 1 to 2 days, not "over several weeks". Birds are "one of the most efficient" respiratory systems. The seal's heart rate is not given as a number.
- **Other claims:** no "first breath impossible", no "Hb works harder", and no "single P50 number captures the Bohr effect".

**Things I was unsure of:**
- **Page cites** are my estimates from the writer reports' page ranges, not checked against the book images. Treat the sub-page boundaries within Topics 02 to 04 as approximate.
- **Exercise O2 delivery:** Topic 04's "about 15 mL per 100 mL" (strenuous exercise) and Additional B's roughly 6 mL are never reconciled in the book. I quote 15 mL only in Topic 04 and give B only its Bohr increment of about 2 mL.
- **Haldane share:** the "about half of the 4 mL" figure is the chapter's own estimate, and I labelled it that way.
- **Gestation weeks:** the 24-week and 35-week surfactant figures and the DLCO normal of about 25 are the chapter's values. I did not check them against NCERT.
- **Topic 03 reserve line:** its `why` mentions "the unused 15 mL or so" returning to the lungs. This is 20 − 5 from the chapter's own figures, but it is not printed as such.
- **Topic 05 CO2 sum:** the shortcut says 70 + 20–25 + 7 = 97–102, which is the writer's recomputed note and is slightly loose.
