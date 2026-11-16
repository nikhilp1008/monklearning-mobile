# Textbooks plan (agreed with Nikhil, 30 Oct 2026)

Principle: accuracy first. Steps 1–4 (write, expert review, founder approves, fix) stay exactly as they are.
Steps 5–7 (Android display check) change: the lessons from Physics 11, Physics 12 and Chemistry become automatic
checks that run with the tests, so a chapter is not screenshotted and reviewed screen by screen every time.

## A. Finish Chemistry 11 Ch 1–6 (in progress)
1. Final shoot of reading pages + Physics sample (running, Mac kept awake with caffeinate).
2. Light check: pixel-compare old/new, look at ~20 key screens + the 7 changed Physics cards.
3. Founder decisions: duplicate Henderson–Hasselbalch card shown once?; arrow conditions stay beside the arrow?;
   the three diagram compromises (tags "strong acid"/"weak acid", "2s node", * / ** cells).
4. Push Ch 1–6 + the shared display fixes (Physics benefits too). Ch 7–8 stay unpushed.

## B. Build the automatic display checks (one-time, thorough)
Built from every Android finding so far (reports in chem11/work-*/REPORT.md, monk-books/reports-*, memory notes).
1. Font coverage: every character, in the font the app will actually use for it (reading text Onest, maths
   STIX Two Text italic/regular, arrows STIX Two Math, cards STIX), must exist in that font — a missing glyph is
   what made ⇒ ↔ ⇌ tiny and ¹¹ a ditto mark. Reads the real .ttf files.
2. Markup rules: sub inside sup, markup or Unicode sub/superscript letters in plain-text fields, legend lines not
   "symbol = meaning", steps ending mid-sentence ("and", "Then"), answer printed twice, hyphen as minus in maths,
   element symbols in italic, unbalanced brackets, etc. (adds to book-chapters.test).
3. Card fit: measure every formula-card line with the real font widths at the card's real size and width, apply
   the same break rules the app uses, and flag: a piece too wide to fit (Android then breaks it mid-word), a line
   ending on an operator, a number split from its unit, a lone short term, a bracket split.
4. Reading fit: the same for reading pages (Onest + STIX), flagging unbreakable runs wider than the line.
5. Calibrate: run the checks on the pre-fix versions and confirm they catch what the Android reviews found;
   tune until they do. Write down what the checks cannot see (phone-only bugs: faded cards, font substitution
   at runtime, layout animation) — those keep a small device sample.

## C. New per-chapter process (from Physics 12 Ch 9–14 on)
Steps 1–4 unchanged. Step 4 now also runs the automatic display checks; every flag is fixed before shooting.
Step 5: script shoots cards + diagrams (free) + ~10 sample reading pages. Step 6: Claude looks at the flagged
and sample screens only. Full Android review only for a new subject's notation or a change to the drawing code.

## D. Then
1. Physics 12 Ch 9–14 (new brief from BRIEF-12-07-08.md + chapter-specific notation: optics, modern physics,
   semiconductors).
2. Chemistry 11 Ch 7–8 expert review (founder's 4 decisions in chem11/DECISIONS-C11.md), then Ch 9, Ch 10.

## B — built 30 Oct 2026 (all in the app repo, run with `npx jest content/textbooks`)
- `content/textbooks/__tests__/display-fonts.test.tsx` — draws every string of every book chapter exactly as the
  app does (reader look, Formula sheet / Key points STIX look) and checks each character against the real .ttf of
  the font it lands in. Reader: a character Onest lacks must be in Android's Roboto (list saved in
  test-support/android-roboto.json from the emulator); STIX text: must be in STIX. Calibrated on the pre-fix
  version: it flags ⇒ ×1166, ⇌, ↔, ≲ (what the Android reviews saw) and ~30 more (∝ ≪ ≫ ≡ ∥ ⊥ ∴ …).
- `content/textbooks/__tests__/book-rules.test.ts` — plain-text fields plain; minus not hyphen; quotes the right
  way round; brackets closed; worked-example steps not ending mid-sentence; answer not printed twice; no labels
  in the answer box; MCQ right option has no nudge. Found and fixed: a formula missing from Physics 12 Ch 4,
  4 steps cut mid-sentence, a doubled answer.
- `content/textbooks/__tests__/display-fit.test.ts` — measures every card name, formula line (fractions as the
  card draws them), legend and reading line with the real font widths in the app's 390-wide reference units
  (layout is the same on every phone width): no unbreakable piece may be wider than its line.
- What they cannot see (keep a small device sample for these): Android-only behaviour (layout animation, a card
  stuck faded, the dev overlay), how a fallback glyph LOOKS (only whether one is used), exact break choices
  inside a line (Android's high-quality breaker), diagram drawings (own checks in lib/diagrams).
- The shared renderer rules that removed whole classes for good: readerBreaks (no break after operator / between
  number and unit / after a maths slash), PILOT_MATH (every maths symbol Roboto lacks in STIX Math), reader digits
  in STIX, splitLead, legend "=" before values, table heads through Markup, stacked nuclide prescripts, Δ upright
  in scripts, carousel without layout animation on Android, reader state reset per chapter.

## Progress log
- 2026-10-30: Chem 11 Ch 1–6 Android fixes + checks PUSHED (bf19d8d).
- 2026-10-30: Phy 12 Ch 9–10 built (8 writers, 4 drawers, k910) → all checks pass → 4 expert reviews (reports-0910/REVIEW-*.md)
  → founder: "Everything, optional included" → fixers fx9/fx10 running. Next: show founder new text written by us, then
  Android sample (cards, diagrams, ~10 pages), then push. Then Ch 11–14.
fx9 done: all 49 flags applied; new-text list in its report (saved below).
- 2026-10-30: Phy 12 Ch 9–10 new text approved by founder; Android shoot (85 cards, 31 diagram views, 82 page shots,
  shots-p12-0910/) reviewed by eye in stacks (work-light910/). All 31 diagrams fine. Found and fixed (rules, all books):
  formula cards: "/cos r" bottom lost its r (Ch 9 card 17), prism formula sin(…)/sin(…) garbled (Ch 9 card 34),
  "(…/…)²" lost its brackets (Ch 10 card 19) → lib/revise/formula-layout.ts + power raised in formula-card.tsx;
  reader breaks: "2 | PF", "sin | 30°", "sin² | r", "2t | tan r", "− | (", "/ | √", "10 | 000", "× | 10⁻⁹" →
  readerBreaks in markup.tsx; diagram title "2nt cos r" held together. New checks: display-fit.test.ts (function
  argument + bracket under a power) and components/__tests__/reader-breaks.test.ts. Only those 3 cards changed in
  any book (dump compared before/after). Re-shot on Android (shots-p12-0910-fix, -fix2): all 3 cards right.
  4292 tests pass. Emulator shut. Waiting for founder's go to commit + push Ch 9–10. Then Ch 11–14.
- 2026-10-30: Phy 12 Ch 9–10 PUSHED (c6167a1). Next: Ch 11–14.
- 2026-10-30: Phy 12 Ch 11–12 started (pair by pair; Ch 13–14 after). Brief BRIEF-12-11-12.md (page map, ν vs v,
  Ch 9–10 review lessons). App numbers Ch 11's book sub-topics 00–02 and Ch 12's 01/02a/02b as Topics 01–03.
  Old chapters backed up in old/. Team: writers w11a–c, w12a–e; drawers d11, d12a, d12b; key points k1112.
  Ch 13 pages: T1 816–824, T2 825–832, T3 833–840, T4 841–847, Supp 848 (A 848–851, B 852–854, C 855–857,
  D 858–861, E 862–864). Ch 14: How-to-use + syllabus scope p. 865 (ask founder), T1 866–877, T2 878–889,
  T3 890–901, T4 902–911, Supp 912 (A 912–915, B 916–919, C 920–922, D 923–925, E 926–927, summary 928).
- 2026-10-30: Ch 11–12 built (all 12 agents done, reports in reports-1112/). All checks pass (4379 tests). Expert reviews
  r11a (T01–02), r11b (T03+A–D), r12a (T01–02), r12b (T03+A–F) running. Founder questions to bring with the reviews:
  Ch 12 figure placement (book prints them after cheat sheets), Comprehensive Practice (F's last part or Additional G),
  E.2 table inside a worked example; new text: w11a T01 MCQ Q3 (D) nudge, w12b T03... (see w*.md "NEW TEXT").
- 2026-10-30: Ch 11–12 reviews in (reports-1112/REVIEW-r11a, r11b, r12a, r12b). Founder: "Everything, optional included"
  for both; Ch 12 figures beside the text; Comprehensive Practice → Additional G. Reviewers r11a/r11b/r12a/r12b now
  applying their own flags. Next: collect new text for founder, checks, Android, push.
- 2026-10-30: Ch 11–12 all fixes applied (FIX-*.md), 4379 tests pass. New-text list sent: .claude/textbook-review/new-text-ch11-12.md. Waiting for founder approval, then Android.
- 2026-10-30: Ch 11–12 new text approved by founder. Android shoot (36 cards, 21 diagram views, 92 page shots, shots-p12-1112/)
  reviewed by eye (work-light1112/). All diagrams fine. Fixed as shared rules, with checks: "n(n − 1)/2" factor now goes over the
  bar (also fixes Phy 11 Ch 4 banked road √ formula, Ch 7, Ch 10, Ch 11 and Chem 11 Ch 2 cards — 6 cards changed in all books);
  reader keeps "√V Å", "1240 eV·nm" (compound units), and a long run breaks one word earlier instead of inside a pair
  ("× | 10⁻ⁿ", "Z²/n² | eV"). Re-shot Ch 12 + Phy 11 Ch 4 cards: right. 4387 tests pass. Emulator shut. Main unchanged.
  Waiting for founder's go to push Ch 11–12.
- 2026-10-30: Phy 12 Ch 11–12 PUSHED (b738f8f). Next: Ch 13–14 (page map above; Ch 14 has a 'How to use' + syllabus box to ask the founder about, and errata layout items).
Oct 30: founder chose for Ch 14: keep only the 'Syllabus scope' box as a '00' Start-here opening (like Ch 3), drop the how-to-use text.
- 2026-10-30: Ch 13–14 started. Brief BRIEF-12-13-14.md (page maps, nuclide + semiconductor notation, overline = U+0305,
  figures beside text from the start, Ch 14 '00' = syllabus box only, Ch 14 errata). Old chapters in old/. Team: writers
  w13a–f, w14a–f; drawers d13, d14a, d14b; key points k1314. Reports → reports-1314/.
- 2026-10-30: Ch 13–14 built (all 16 agents, reports-1314/). 4501 tests pass; 35 cards read. Reviews r13a (T01–02), r13b (T03–04 +
  A–E), r14a ('00', T01–02, A–B), r14b (T03–04, C–E) running. Founder questions to bring: missing book answers (Ch 13 T02 practice
  Q1, Q4; Ch 14 A practice 4, C practice 3) — reviewers drafting model answers; D practice 4 primes vs bars; Fig 13.3 extra
  "Light nuclei" view; overline rendering on Android.
- 2026-10-30: Ch 13–14 reviews in (reports-1314/REVIEW-*). Founder: "Everything, optional included" both; D practice 4 primes → bars;
  drop "CBSE" from T03/T04 tags in Ch 14. Coordinator rulings: keep "Four JEE patterns" + add E as NEET sentence; drop "Numbering
  continues…" in both Supplement openings. Fixers r13a/r13b/r14a/r14b applying.
- 2026-10-30: Ch 13–14 all fixes applied (FIX-*.md); 4501 tests pass. New-text list sent: .claude/textbook-review/new-text-ch13-14.md. Waiting for founder approval, then Android (overlines!).
- 2026-10-31: Ch 13–14 Android shoot (shots-p12-1314, 35 cards, 30 diagram views, 77 page shots) reviewed. Found:
  (1) NOT overlines draw per-character bars at glyph height (bar over "·"/"+" low, bars not joined: NAND reads as NOR) →
      engineer agent building continuous group overlines in markup.tsx + formula cards + diagram kit;
  (2) ¹₀n pre-script not stacked (italic n after) → same engineer; (3) "≲ 5 V" break → same engineer;
  (4) numbered list split after "3." by splitProse → FIXED in lib/prose-paragraphs.ts + test.
  Nested sub-in-sup exponentials render fine. Emulator shut while the engineer works (memory); restart for the re-shoot.
- 2026-10-31: Joined overlines built (lib/overline.ts + markup.tsx + formula-card + diagram-card + kit), pre-script ¹₀n stacks, ≲≳ glue,
  list split fixed (prose-paragraphs), tag overline removed + book-rules check. Re-shot (shots-p12-1314-fix): bars correct and joined,
  nesting right, neutron stacked. 4524 tests pass. Emulator shut. Waiting for founder's go to push Ch 13–14.
- 2026-10-31: Phy 12 Ch 13–14 PUSHED (22b0936). PHYSICS CLASS 12 COMPLETE. Next: Chemistry 11 Ch 7–8 (re-register, expert review with DECISIONS-C11.md), then Ch 9, Ch 10.
- 2026-10-31: Chem 11 Ch 7–8 STARTED (founder asked). Re-registered (lib/textbooks.ts catalogue keys 'redox reactions', 'general organic chemistry'; diagrams; keypoints; book-list; OPENS_ON_CHOICE chemistry|11 [0..7]); 4572 tests pass. Mac copies of briefs (chem11/briefs/MAC-*.md, cloud paths translated + Physics 9–14 lessons). Reviews rc7a, rc7b, rc8a, rc8b running. Then Ch 9 Hydrocarbons, Ch 10 p-Block (to build).
- 2026-10-31: Chem 7–8 reviews in (chem11/reports-0708/REVIEW-*). Founder: "Everything, optional included"; IUPAC chain rule:
  keep book + NCERT note; redox heating A–R question: reword Statement I ("only initially"), keep key. Fixers rc7a/rc7b/rc8a/rc8b applying
  (+ DECISIONS 1–4, incl. drawing c11-08-00-d1).
- 2026-10-31: Chem 7–8 all fixes applied (FIX-*.md); 4575 tests pass. New-text list sent (.claude/textbook-review/new-text-chem-ch7-8.md). Waiting for founder approval, then Android.
- 2026-10-31: Chem 7–8 Android check (chem11/shots-0708) reviewed: all fine; one card fix (short last term after × stays with it — Carius + Chem 1 card 19), new check, re-shot right. 4576 tests. Emulator shut. Waiting for founder's go to push Chem 7–8.
- 2026-10-31: Chem 11 Ch 7–8 PUSHED (778a802). Next: Ch 9 Hydrocarbons + Ch 10 p-Block (full build).
- 2026-10-31: Chem 11 Ch 9–10 started. Founder: Ch 10 built + pushed now (shelf row from Raasikh later; key 'chemistry|11|p-block elements');
  Ch 10 = Topics 01–05 (Sections 1–5) + Topic 06 (Sections 6–9) + A–I, J checklist, K exam; Ch 9 '00' Classification opening.
  Brief chem11/briefs/MAC-BRIEF-C11-09-10.md. Team: c9a–f, c10a–e, dc9a, dc9b, dc10, kc910. Reports → chem11/reports-0910/.
  (A stray empty Workflow call was made by mistake — no agents, no cost; told founder.)
- 2026-10-31: Chem 11 Ch 9–10: all 11 writers done (reports in chem11/reports-0910/). Unified Ch 10 extras notation: ⊖ → ° (house, Ch 5) and repeat index n italic (matches c10b/c10c). Waiting on dc9a, dc9b, dc10, kc910, then checks + 4 expert reviews.
  Founder questions to bring: old NCERT exercise numbers in Ch 10 extras (11.23, 11.9, 11.16, Tables 11.2/11.3; p-block dropped from current NCERT 11); 22.4 L (1 atm) in Ch 10 vs 22.7 L in Ch 9; long kalams (Ch 10 T06 ~290 chars, A 155); formula digits in part titles (Na2B4O7·10H2O).
- 2026-10-31: Chem 11 Ch 9–10: 4 reviews in (REVIEW-rc9a/b, rc10a/b); founder: everything incl. optional both chapters, old NCERT = one note, sig figs = show both (DECISIONS 15–18). All fixes applied (FIX-*.md). 2534 tests pass. New-text list: .claude/textbook-review/new-text-chem-ch9-10.md → founder approval, then Android.
- 2026-10-31: Ch 9–10 Android check (shots-0910, -fix, -fix3, -graded; reviewed by eye in work-and0910/). Found and fixed: (1) Ch 10 never opened — registry key 'p-block elements' vs chapterKey()'s 'p block elements' → key fixed + new registry-key test; (2) paragraph split after "(dil.)" broke an equation → dil./conc./alc./anhyd./aq. added to prose-paragraphs ABBREVIATIONS + test (all books); (3) borax anion charges sat directly over B (read as a bar) → moved to the outer corners. Tried Onest tags with STIX Greek runs: Android overlays the runs → reverted to the STIX pills (kit unchanged). Open design question for founder: Onest l vs I (Tl reads TI, Al AI, Cl CI). 2536 tests pass. Emulator shut. Waiting for founder's go to push Chem 11 Ch 9–10.
- 2026-10-31: Chem 11 Ch 9–10 PUSHED 1fe8e87. CHEMISTRY CLASS 11 COMPLETE. Next: Chemistry 12.
- 2026-11-03: CHEMISTRY 12 started, Ch 1–2 first. Book chem12/chem12.pdf (587 pp, 11 chapters; book order 01 Solutions … 10 Biomolecules, 11 p-Block 15–18), errata pp. 584–587. Shelf names (server): Solutions, Electrochemistry, Chemical Kinetics, p-Block Elements (order 4), d-and-f-Block Elements, Coordination Compounds, Haloalkanes & Haloarenes, Alcohols, Phenols & Ethers, Aldehydes, Ketones & Carboxylic Acids, Amines, Biomolecules, Practical Chemistry (order 12, no book chapter). Keys follow shelf names; drawings and key points follow the book's chapter number. OPENS_ON_CHOICE uses shelf position, so p-Block is 3 there, not 10.
  Founder: Ch 2 Capstone = Topic 04 without the one-page formula sheet (chem12/DECISIONS-C12.md). Brief chem12/briefs/MAC-BRIEF-C12-01-02.md. 14 agents running (c1a–f, c2a–e, dc1, dc2, kc12). Reports to chem12/reports-0102/. Uncommitted on main.
- 2026-11-03: Chem 12 Ch 1–2 built (14 agents; 1,753 tests pass; session restarted once mid-build, agents resumed). 4 reviews in (REVIEW-rc1a/b, rc2a/b in chem12/reports-0102). Waiting for founder's decisions.
- 2026-11-03: Chem 12 Ch 1–2 new wording approved; Android check done (shots-0102, -fix; reviewed in work-and0102/). Fixed: degree mark stranded beside a fraction (formula-layout SYMBOL + display-fit test, all books); couples split at the slash and E° split from its bracket (readerBreaks + test, all books); Topic 04 conductivities table → two lists; Fig 1.5 ΔT labels raised. 2698 tests pass. Emulator and server shut. Uncommitted. origin/main has one new Raasikh commit 2f53685 (Support chat, no textbook overlap): show founder before merging. Waiting for founder's go to push. Reminder: emulator app can sign itself out; ask founder to sign in. Metro must be started with preview_start expo-android.
- 2026-11-03: Chem 12 Ch 1–2 PUSHED (c7fa5f6, merged Raasikh's 2f53685). Next: Ch 3–4.
- 2026-11-03: Founder's Mac was hanging with 14 helpers + the emulator: ONE CHAPTER AT A TIME from now on, at most 3 helpers at once, helpers run no tsc or whole test suite (DECISIONS-C12 item 6).
- 2026-11-03: Chem 12 Ch 3 Chemical Kinetics PUSHED df89f34. Reviews reports-03/rc3a.md, rc3b.md; applied lists rc3a-applied.md, rc3b-applied.md; decisions DECISIONS-C12 items 7-10; new wording .claude/textbook-review/new-text-chem12-ch3.md. Android: drive-c12-03.py, drive-fix-c12-03.py, manifest-c12-03.json, shots-03, shots-03-fix. Shared fixes with tests: reader keeps a short bracket, an option letter and a unit whole, prime with its bracket; cards may start a long log on its own line. Still to check against a printed NCERT: ozone not NCERT's, "generally" on slowest-step, "bimolecular" hydrolysis, KClO3 quote marks, magnesium values. Next: Ch 4 d-and-f-Block, one chapter, on the founder's go.
- 2026-11-04: Chem 12 Ch 4 d-and-f-Block PUSHED f57ce91. Reviews reports-04/rc4a.md, rc4b.md; applied lists rc4a-applied.md, rc4b-applied.md; decisions DECISIONS-C12 items 11-14; new wording .claude/textbook-review/new-text-chem12-ch4.md. Android: drive-c12-04.py, drive-fix-c12-04.py, drive-fix2-c12-04.py, manifest-c12-04.json (n: 5, shelf number; LIST_TITLES title 'd-and-f-Block Elements'), shots-04, -fix, -fix2. Shared fix with a test: reader keeps a coefficient with its species. Android lesson: a hyphenated last word in a card title can be cut mid-word ("e|xpression"); reword the title. Printed-NCERT check list grew: new-text-chem12-ch4.md section 6. Next on the founder's go, one chapter at a time: Coordination Compounds (book Ch 5, pp. 196 on, shelf position 6, key 'chemistry|12|coordination compounds', shelf index 5 in OPENS_ON_CHOICE). p-Block is shelf position 4 but book Ch 11, so it comes later or on the founder's word.
- 2026-11-04: Chem 12 Coordination Compounds (book Ch 5, shelf 6) PUSHED aa7abb8. Reviews reports-05/rc5a,b,c.md; applied lists rc5a,b,c-applied.md; decisions DECISIONS-C12 items 15-19; new wording .claude/textbook-review/new-text-chem12-ch5.md (section 7 = printed-NCERT list). Android: drive-c12-05.py, drive-fix-c12-05.py, drive-fix2-c12-05.py, manifest-c12-05.json (n: 6), shots-05, -fix, -fix2. Shared: blockText sends an example's figure to Ask Drona; book-rules check for long unbreakable words (\u200b in chemical names). Chapters longer than 4 topics: 3 reviewers. Next on the founder's go: Haloalkanes and Haloarenes (book Ch 6, pp. 251 on, shelf 7, shelf index 6, key 'chemistry|12|haloalkanes & haloarenes': check chapterKey). Ask about its capstone-type sections. Errata: its Sub-topic 03 D iodoform item is on p. 585.
- 2026-11-05: Chem 12 Haloalkanes and Haloarenes (book Ch 6, shelf 7) PUSHED 23c0794. Reviews reports-06/rc6a,b,c.md + rc6c-addendum; applied lists rc6a,b,c-applied.md; decisions DECISIONS-C12 items 20-24; new wording .claude/textbook-review/new-text-chem12-ch6.md (section 7 = printed-NCERT list, section 8 = added after Android). Android: drive-c12-06.py, drive-fix-c12-06.py, manifest-c12-06.json, shots-06, shots-06-fix. Deep links must use "and", not "&", in the title (the shelf itself is fine). Next on the founder's go: Alcohols, Phenols and Ethers (book Ch 7, p. 311 on, shelf 8, shelf index 7).
- 2026-11-05: Chem 12 Alcohols, Phenols and Ethers (book Ch 7, shelf 8) PUSHED 8f03a3d (merge 17bdfbf with 10 of Raasikh's commits: plan limits Pro 3/day, Max 7/day 90/month; onboarding counts physics 29, chemistry 21; vector hats; capacitor labels; ask-follow-up tsc fix; board lead 2 s — founder approved). Reviews reports-07/rc7a,b,c.md; applied lists rc7a,b,c-applied.md; decisions DECISIONS-C12 items 25-29; new wording .claude/textbook-review/new-text-chem12-ch7.md (section 7 = printed-NCERT list). Android: drive-c12-07.py, drive-fix-c12-07.py, manifest-c12-07.json, shots-07, shots-07-fix; shared reader rule: a coefficient stays with R–/Ar– group formulas. Next on the founder's go: Aldehydes, Ketones and Carboxylic Acids (book Ch 8, p. 367 on, shelf 9, shelf index 8).
- 2026-11-05: Chem 12 Aldehydes, Ketones and Carboxylic Acids (book Ch 8, shelf 9) PUSHED e4e714c. Reviews reports-08/rc8a,b,c.md; applied lists rc8a,b,c-applied.md; decisions DECISIONS-C12 items 30-34; new wording .claude/textbook-review/new-text-chem12-ch8.md (section 7 = printed-NCERT list). Android: drive-c12-08.py, drive-fix-c12-08.py, manifest-c12-08.json, shots-08, shots-08-fix; shared fix: a legend meaning opening on a locant ("3-hydroxybutanal") reads with the dash, not "=". Next on the founder's go: Amines (book Ch 9, p. 426 on, shelf 10, shelf index 9). Left after that: Biomolecules (book Ch 10, shelf 11), p-Block (book Ch 11, shelf 4).
- 2026-11-05: Chem 12 Amines (book Ch 9, shelf 10) PUSHED b11e75f. Topic 04 = the book's Master Revision compendium (decision 35); Summary Checklist its own Additional topic E, JEE/NEET = F (decision 38). Reviews reports-09/rc9a,b,c.md; applied lists rc9a,b,c-applied.md (+ rc9c-applied-addendum.md); decisions DECISIONS-C12 items 35-40; new wording .claude/textbook-review/new-text-chem12-ch9.md (section 7 = printed-NCERT list, section 8 = added after Android). Android: drive-c12-09.py, drive-fix-c12-09.py, drive-fix2-c12-09.py, manifest-c12-09.json, shots-09, shots-09-fix, shots-09-fix2. Shared fixes: a raised run straight after an arrow stays upright (markup.tsx cond); a legend meaning "1° amine" reads with the dash; book-chapters allows a one-part "Summary Checklist". Next on the founder's go: Biomolecules (book Ch 10, p. 478 on, shelf 11, shelf index 10); last: p-Block (book Ch 11, shelf 4, shelf index 3).
- 2026-11-07: Chem 12 Biomolecules (book Ch 10, shelf 11) PUSHED 487a1f4 (merge d30dac6 with Raasikh's 9 commits: live class resilience, offline banner, board converter fixes). Summary Checklist its own Additional topic E, JEE/NEET = F (decision 41). Reviews reports-10/rc10a,b,c.md; applied lists rc10a,b,c-applied.md; decisions DECISIONS-C12 items 42-45 (+52.5° chapter-wide with one note; Devanagari written "kamal/malak"; open chain "< 0.5%"); new wording .claude/textbook-review/new-text-chem12-ch10.md (section 7 = printed-NCERT list). Android: drive-c12-10.py, drive-fix-c12-10.py, manifest-c12-10.json, shots-10, shots-10-fix, shots-10-fix2. Shared fixes: lib/prose-paragraphs no paragraph break after "m.p."/"b.p.", and bullet lists ("<br>• ") split only between items. Last chapter left, on the founder's go: p-Block (book Ch 11, p. 530 on, shelf 4, shelf index 3).
- 2026-11-07: Chem 12 p-Block, Groups 15-18 (book Ch 11, shelf 4) PUSHED 0fb91f8 (no new Raasikh commits). Layout by the Chem 11 p-Block decision (decision 46): Sections 1-6 → Topics 01-06, Sections 7-9 + exam section → Topic 07, supplement Addenda A-H → Additional A-H, its JEE/NEET → I. Reviews reports-11/rc11a,b,c.md; applied lists rc11a,b,c-applied.md; decisions DECISIONS-C12 items 46-49 (everything applied; ClF₃ "bent T-shaped" everywhere; one wording each for ozone +142/+284, SO₂ via nascent hydrogen, Haber −92.2/−46.1); new wording .claude/textbook-review/new-text-chem12-ch11.md (section 6 = printed-NCERT list). Android: drive-c12-11.py, drive-fix-c12-11.py, manifest-c12-11.json, shots-11, shots-11-fix, shots-11-fix2. Shared fix: components/textbook/markup.tsx keeps kJ/J/g/kg with mol⁻¹ on one line. CHEMISTRY 12 COMPLETE (all 11 book chapters).
- 2026-11-07: p-Block JOINED and PUSHED 7f7e27e (decision 50): Class 11 Ch 10 (Groups 13-14) + Class 12 Ch 11 (Groups 15-18) are one chapter on the Class 12 shelf "p-Block Elements" (content/textbooks/chem-12-11-p-block.ts): Topics 01-06 Class 11, 07-13 Class 12, Additional A-K Class 11, L-T Class 12. The Class 11 registry entry is removed (no server row needed, per Raasikh). Android: drive-c12-pblock.py, shots-pblock.
- 2026-11-10: MATHEMATICS 11 started, Chapter 1 Sets. Founder's rule: every fraction stacked (math11/DECISIONS-M11.md 1).
  Reader now draws <frac><num>…</num><den>…</den></frac> (markup.tsx fracRun; Android sample checked, three faults fixed:
  halves too small/touching the rule, lines with fractions touching each other → block line height ×1.18, nested
  fractions → moved off the rule). Formula cards never cut a fraction (formula-layout cutAtSpaces); width checks measure
  them; book-rules fails on a one-line fraction in Maths; 𝕎 𝕋 drawn in STIX Two Math. Maths book's errata are NOT in the
  text: applied from "Should read" (decision 3). Ch 1 = Topics 01–05 (05 from the supplement) + Additional A–M.
  Writers mw1 (T01–02), mw2 (T03–04), mw3 (A–H) running; next mw4 (T05), mw5 (I–M), then diagrams + key points.
  Brief math11/briefs/MAC-BRIEF-M11-01.md. Nothing committed.
- 2026-11-10 (later): the first writers used the AUGUST Maths PDF from the app folder (1094 pp, errata not applied,
  figures only described). Stopped within minutes, nothing written. Now math11/math11.pdf = OCTOBER edition from the
  books snapshot (1260 pp; errata applied as in other books; Figures 1.1–1.9 drawn; adds Ch 00 "Basic Mathematics —
  Indices, Surds and Logarithms", pp. 10–24, no shelf row known: ask the founder). Ch 1 = pp. 25–100. Brief rewritten;
  mw1/mw2/mw3 restarted.
- 2026-11-10: founder said STOP maths (unsure the book is the latest). Writers mw1–3 stopped before writing; stubs empty. Waiting for the founder.
- 2026-11-10: founder's Downloads PDF = math11.pdf byte for byte (md5 b7f81da1…). Founder: restart. mw1–3 restarted.
- 2026-11-10: Ch 1 built: 18 topics (mw1–mw5), 10 figures (md1), 51 key points (mk1), 25 formula cards. △ moved to STIX Math (font check). tsc, eslint, 5588 tests pass. Expert reviews rm1a (T01–03), rm1b (T04–05), rm1c (A–M) running; brief math11/briefs/MAC-REVIEW_BRIEF-M11.md.
- 2026-11-10: reviews in (rm1a 20 flags, rm1b 15, rm1c 17): no wrong numbers or MCQ keys; book's over-general rules, card legends, scope n ≥ 1. Waiting for the founder's decision on fixes.
- 2026-11-10: founder approved Ch 1 new wording; Android check next.
- 2026-11-10: Android check of Ch 1 done (shots math11/shots-01, -fix): fixes: card line breaks (content NBSPs now kept on cards: formula-cards keepTogether GLUE), short intervals held in reading (readerBreaks), ≤ held to its term; shoot script compares the reading area only (the orb animates). Em dashes removed (241). tsc, eslint, 5592 tests pass. No new commits from Raasikh. Waiting for founder's go to commit + push.
- 2026-11-10: Maths 11 Ch 1 PUSHED (0c9ae6f). Next: Ch 2 Relations and Functions (book pp. 101+), same brief + fractions + no em dashes.
- 2026-11-10: Maths 11 Ch 2 Relations and Functions started. Brief math11/briefs/MAC-BRIEF-M11-02.md; founder: range addendum slotted into Topic 03, additional topics keep F–K (DECISIONS-M11 7–9). Files wired (content/textbooks/math-11-02/, diagrams + key points stubs, book-chapters FIRST_EXTRA). Round 1 writers mw21 (T01–02), mw22 (T03 + range), mw23 (T04).
- 2026-11-10: Ch 2 round 1 done: mw21 (T01–02), mw22 (T03 + range slotted), mw23 (T04); reports math11/reports-02/REPORT-mw2*.md; no wrong numbers or MCQ keys. Running: mw24 (F–H), mw25 (I–K), md2 (figures 2.1–2.5, 03-d1, 03-d2; F–K drawings to follow).
- 2026-11-10: Ch 2 all text written (mw21–25; F–H: coordinator added Ex 11's closing remark the writer missed). 12 drawings listed for md2 (2.1–2.5, 03-d1, 03-d2, F/G/H/I/J-d1). Key points mk2 running. No wrong numbers or MCQ keys found by any writer.
- 2026-11-10: key points mk2 done (50 points, 22 formula cards; card notes in REPORT-mk2.md). Reviews rm2a (T01, T02, T04) and rm2b (T03 + range, F–H) started while md2 finishes; rm2c (I–K + key points + cards) after.
- 2026-11-10: md2 done (12 drawings, errata p.1258 panel fixed). Checks: tsc + eslint clean; textbook/diagram/revise tests 2485 pass after one shared fix: ⌊ ⌋ ⌈ ⌉ drawn in STIX Two Math (markup.tsx PILOT_MATH; Onest lacks them). Reviews rm2a (13 flags), rm2b (13 flags) in reports-02; no wrong numbers or MCQ keys. rm2c (I–K) running.
- 2026-11-10: all three reviews in (rm2a 13, rm2b 13, rm2c 19 flags); no wrong numbers or MCQ keys anywhere. Waiting for the founder's decision.
- 2026-11-10: founder: Ch 2 'Everything, optional included' + filled dots on F-d1/H-d1, example numbers reworded to what the reader shows, Mumbai hypothetical, 180/4 ordinary slash exempted in book-rules (DECISIONS-M11 10). Fixers fx2a (T01, T02, T04, diagrams), fx2b (T03, F–H), fx2c (I–K, key points) running.
- 2026-11-10: Ch 2 fixes applied (fx2a, fx2b, fx2c; *-applied.md); founder approved new wording (new-text-math11-ch2.md), book's step numbers kept (I–K renumbering undone), card #11 note kept (DECISIONS-M11 10–11). tsc, eslint, 2485 tests pass. Next: Android check.
- 2026-11-10: Ch 2 Android shoot started: drive-m11-02.py, manifest math11/manifest-m11-02.json (24 cards, 12 drawings, 63 parts), shots math11/shots-02, log shots-02.log. Emulator + Metro were already running from this checkout (founder said free).
- 2026-11-10: Ch 2 Android shots-02 (362) reviewed by eye. Found + fixed as shared reader rules with tests (components/textbook/markup.tsx readerBreaks, components/__tests__/reader-breaks.test.ts): touching brackets ')(' / ')[' joined (a product split '(y − 1) | (5y + 3)'); a glued space after a raised power gets a word joiner too (Android broke 'x⁴ | − 3x²', '(y − 1)² | + 4'). 2487 tests pass. Re-shoot drive-fix-m11-02.py → shots-02-fix.
- 2026-11-10: re-shoot shots-02-fix showed both reader rules made things worse on Android (joining ')(' moved breaks inside brackets; the word joiner after a power did not stop 'x⁴ | −'): both REVERTED, the original breaks (before an operator, between brackets) kept as acceptable. Only shared change left: ⌊ ⌋ ⌈ ⌉ in STIX Two Math (checked on Android, p004). 2485 tests pass. Ready to commit on the founder's go.
- 2026-11-10: Maths 11 Ch 2 PUSHED (b8f7ec4). Next: Ch 3 Trigonometric Functions (book pp. 177+; main Subtopics 01–06, supplement Subtopics 07–08 pp. 243–276, Additional Subtopics 09+ from p. 277, 60 pages), on the founder's go.
- 2026-11-10: Maths 11 Ch 3 Trigonometric Functions started (pp. 177–336, 160 pp). Founder: Topics 01–12 numbered, closing Topic D = Additional D (DECISIONS-M11 12–13). Files wired (11 writer stubs in content/textbooks/math-11-03/), brief MAC-BRIEF-M11-03.md. Writers mw31–mw40 in waves of 3.
- 2026-11-10: Ch 3 T01 (mw31) and T04 (mw33) written; section-heading rule for Topics 01–06 added to the brief (book's names in sentence case, section 8 split). Running: mw32 (T02–03), mw34 (T05).
- 2026-11-10: Ch 3 T02–03 (mw32), T05 (mw34, 11 formula cards) written; ∴ dropped from ans chapter-wide (brief). Running mw35 (T06), mw36 (T07), mw37 (T08).
- 2026-11-10: Ch 3 T06 (mw35, 8 cards) written. Running mw36 (T07), mw37 (T08); starting mw38 (T09–10).
- 2026-11-10: Ch 3 T07 (mw36, 5 cards) written (ends top of p.257). Running mw37 (T08), mw38 (T09–10), mw39 (T11). Left: T12 + D (mw40), diagrams, key points.
- 2026-11-10: Ch 3 T08 (mw37), T09–10 (mw38), T11 (mw39) written. Founder: the pp. 271–276 addendum = Additional topic C (decision 14); moved to extra-c.ts by coordinator. Next: mw40 (T12 + D), diagrams md3a (3.1–3.11), md3b (3.12–3.17 + 09/10/11 drawings + T12/D).
- 2026-11-10: Ch 3 T12 + D (mw40) written: ALL TEXT DONE (T01–12, C, D). Running md3a, md3b; key points mk3 starting.
- 2026-11-10: Ch 3 md3a done (Figs 3.1–3.11). Running md3b (3.12–3.17 + 09/10/11/12 drawings), mk3 (key points + cards), rm3a (review T01–04). Reviews planned: rm3b T05–07, rm3c T08 + C + T09–10, rm3d T11–12 + D.
- 2026-11-10: Ch 3 md3b done (all 21 drawings drawn; diagrams test passes). Running mk3, rm3a (T01–04), rm3b (T05–07).
- 2026-11-10: Ch 3 review rm3a (T01–04) in: 18 flags (reports-03/rm3a.md), no number/key errors in copying; book errors: tan 90° = ∞ in T03 cheat sheet, T02 Ex 6 missing a = −b case. Running mk3, rm3b (T05–07), rm3c (T08, C, T09–10). rm3d (T11–12, D) next.
- 2026-11-10: Ch 3 key points mk3 done (89 points, 64 cards; report REPORT-mk3.md, cards-mk3.txt): gaps (Area formulas, π/|b|) and two near-duplicate card pairs (T05/T07). Running rm3b, rm3c, rm3d (T11–12, D + whole key-points file + duplicates).
- 2026-11-10: Ch 3 review rm3b (T05–07) in: 19 flags (reports-03/rm3b.md); no number/key errors; FIG 3.13 arcs broken by a label (misleading); T05 (J) 'only when π' (tan/cot hold for nπ); T06 Practice 5 final set; NEET line; NCERT §3.5 possibly dropped from rationalised NCERT (founder to confirm). Running rm3c, rm3d.
- 2026-11-10: Ch 3 review rm3c (T08, C, T09–10) in: 31 flags (reports-03/rm3c.md); no number/key errors in copying; Area card proposed; T10 MCQ 2 (C) book error confirmed. Waiting for rm3d.
- 2026-11-10: Ch 3 review rm3d (T11–12, D, all key points, duplicates) in: 23 flags (reports-03/rm3d.md). All four reviews in (rm3a 18, rm3b 19, rm3c 31, rm3d 23); no number/key errors in copying. Waiting for the founder's decision.
- 2026-11-10: founder: Ch 3 everything incl. optional; D Practice 5 option (a); T07 duplicate cards → text; T06 NCERT claim kept, to verify (DECISIONS-M11 15). Fixers: fx3a (T01–04 + all key points), fx3b (T05–07 + diagrams 03b), fx3c (T08, C, T09–10), then fx3d (T11, T12, D + diagram 03a 3.10).
- 2026-11-10: Ch 3 all fixes applied (fx3a–d; *-applied.md). Figs 3.13/3.17 redrawn and checked by eye. Full checks: tsc + eslint clean; 2567 pass, display-fit fails on 9 over-wide Ch 3 pieces (cards 33, 53; T07 chains; T08/T11 word fractions) → fx3e fixing.
- 2026-11-10: Ch 3 display: measure.ts fraction-splitting bug fixed (false alarms gone; 4 real over-wide Ch 3 lines given their own lines; Chem 12 Ch 8 card 6 exempted, fine on Android). 2569 tests pass. Founder approved new wording (new-text-math11-ch3.md). Next: Android.
- 2026-11-10: Ch 3 Android shoot started: drive-m11-03.py, manifest math11/manifest-m11-03.json (64 cards, 21 drawings, 118 parts), 27 sample pages (pages-m11-03.json), shots math11/shots-03. Founder said the emulator is free.
- 2026-11-10: Ch 3 Android shots-03 reviewed (cards, all drawings, sample pages). Found: (1) nested fractions (T12 'tan 2x = (2/3)/(8/9)') overlapping adjacent lines → shared fix: markup.tsx FRAC.leadNested 1.5 for a block with a fraction inside a fraction + test (markup-fractions.test); (2) card 53 broke inside sin(a + …) → content: break before '=', NBSP inside the bracket; (3) uneven gaps in drawing labels with stacked fractions (03b word-by-word placement; 3.4 footnote) → fx3f fixing. Then re-shoot.
- 2026-11-10: fx3f fixed drawing label spacing (03b: stixW real STIX advances inlined as data, runs placed contiguously; 03a: opt-in tight on 9 labels). Diagrams test passes. Re-shoot drive-fix-m11-03.py → shots-03-fix (all cards, all drawings, pages 13, 94, 102).
- 2026-11-10: Ch 3 re-shoot shots-03-fix checked: nested fractions clear, card 53 right, drawing labels evenly spaced. tsc + eslint clean, 2570 tests pass, no new Raasikh commits. Waiting for the founder's go to commit + push.
- 2026-11-10: Maths 11 Ch 3 PUSHED (26c5540). Next on the founder's go: Ch 4 Complex Numbers and Quadratic Equations (book p. 337 on).
- 2026-11-10: Maths 11 Ch 4 Complex Numbers started (pp. 337–413). Layout as Ch 3 (Topics 01–09; DECISIONS-M11 17). Files wired (5 writer stubs), brief MAC-BRIEF-M11-04.md. Writers mw41 (T01–02), mw42 (T03–04), mw43 (T05–06), then mw44 (T07), mw45 (T08–09).
- 2026-11-10: Ch 4 T01–02 (mw41), T03–04 (mw42) written (reports-04); coordinator changed comma legends to brackets. Render risk: conjugate bar over a stacked fraction (T02) to check on Android. Running mw43 (T05–06), mw44 (T07), mw45 (T08–09).
- 2026-11-10: Ch 4 T05–06 (mw43) written; bar-over-fraction handled two ways (T02 kept bars, T06 rewrote as fraction of conjugates) → decide after Android. Running mw44 (T07), mw45 (T08–09), md4 (figs 4.1–4.8).
- 2026-11-10: Ch 4 T07 (mw44, 16 cards) written. Running mw45 (T08–09), md4 (figures).
- 2026-11-10: Ch 4 ALL TEXT WRITTEN (T01–09; mw41–45). T09 full title includes 'Products'; T09 short form (no MCQ/pitfalls). Running md4 (figs 4.1–4.8 + 08-d1, 09-d1), rm4a (review T01–04), mk4 (key points + cards). Next: rm4b (T05–07), rm4c (T08–09 + key points).
- 2026-11-10: Ch 4 md4 done (10 drawings). Founder: sign bands in 4.7/4.8 → + and − signs (decision 18); fx4a applying. Running rm4a, mk4, fx4a.
- 2026-11-10: Ch 4 review rm4a (T01–04) in: 25 flags + 31 NEW nudges/solutions (reports-04/rm4a.md); transcription faithful, all numbers right. Conjugate of a quotient on a card: use the w form (rewrite would be a tautology). CBSE: polar form / quadratics with D < 0 may be dropped from rationalised CBSE (to verify). Running mk4, fx4a, rm4b (T05–07).
- 2026-11-10: fx4a done: Figs 4.7/4.8 show + and − signs above the axis (bands and key removed, frames trimmed), checks verify each sign against the drawn parabola. Running mk4, rm4b.
- 2026-11-10: Ch 4 key points mk4 done (60 points, 61 cards; duplicates De Moivre and cube roots T03/T05, inverse T01/T02). Shared fix: formula-cards italicMaths no longer reads '< ' as a tag (nested italics in card names) + test; lib/revise 136 pass. Running rm4b; next rm4c (T08–09 + key points + duplicates).
- 2026-11-10: Ch 4 review rm4b (T05–07) in: 32 flags + NEW nudges (reports-04/rm4b.md); numbers all right; T05 MCQ 4 had two correct options (ω not said non-real). Waiting for rm4c (T08–09 + key points + duplicates).
- 2026-11-10: all Ch 4 reviews in (rm4a 25, rm4b 32, rm4c ~25 flags + NEW nudges). Founder: everything incl. optional; duplicates one card each (decision 19). Fixers fx4b (T01–04), fx4c (T05–07), fx4d (T08–09 + key points).
- 2026-11-10: Ch 4 fixes applied (fx4b–d + coordinator: arc proviso in cheat row, 'Both roots common' second line); tsc + eslint clean, 2651 tests pass; founder approved new wording (new-text-math11-ch4.md). Android shoot drive-m11-04.py → shots-04 (58 cards, 10 drawings, 31 pages incl. conjugate-bar pages).
- 2026-11-10: Ch 4 Android shots-04 reviewed. Found + fixed as shared reader rules with tests: (1) a fraction whose halves carry conjugate bars was cut apart (z̄₁/z̄₂ read z̄₁z̄₂) → markup atomsOf keeps a frac whole, bars its halves separately (markup-fractions.test); (2) subscripts under a bar clipped (z̄₁z̄₂ product) → overRun paddingBottom OVER_ROOM (overline.test). Content: T05 RE_BAR → 'z̄ = re^{−iθ} for z = re^{iθ}' (rm4b 18) + legends. Re-shoot drive-fix-m11-04.py → shots-04-fix.
- 2026-11-10: Ch 4 barred runs: Android cut everything below a bar run's baseline (subscripts, z tail) whatever the margin layout; fixed by ending the run's View on the baseline and moving the Text down with a transform (overRun). shots-04-fix4 checked. tsc + eslint clean, 2654 tests pass, no new Raasikh commits.
- 2026-11-10: Maths 11 Ch 4 PUSHED (3863a5e). Next on the founder's go: Ch 5 Linear Inequalities (book p. 414 on).
- 2026-11-10/11: Maths 11 Ch 5 Linear Inequalities and Ch 6 Permutations and Combinations written together (founder: two chapters at a time, 3 helpers max): 8 writers, 2 drawing, 2 key-point helpers, 6 reviewers, 7 fixers, 2 Android shoots + re-shoots checked by screenshot helpers. Reader gained <binom> (stacked binomial), bracketed-denominator drop, modulus-bar glue, no paragraph split at a factorial. Ch 1–4 were opening in the old reader (OPENS_ON_CHOICE), fixed c1b6171.
- 2026-11-11: Maths 11 Ch 5 (e6e9f33) and Ch 6 (a5fea1f) PUSHED, on top of Raasikh's Android package rename (79973ea, e101cb2; founder approved the rebase). Next: Ch 7 Binomial Theorem + Ch 8 Sequences and Series.
- 2026-11-11/12: Maths 11 Ch 7 Binomial Theorem (555cec6) and Ch 8 Sequences and Series (8311d4c) PUSHED together: 10 writers, 2 drawing, 2 key-point helpers, 6 reviewers, 6 fixers + 2 display fixers, Android shoots and re-shoots (ch 8 cards turned by hand where the script failed). Next: Ch 9 + Ch 10.
- 2026-11-12/13: Maths 11 Ch 9 Straight Lines (70ef191) and Ch 10 Conic Sections (08cb2d3) PUSHED together. Next: Ch 11 + Ch 12.
