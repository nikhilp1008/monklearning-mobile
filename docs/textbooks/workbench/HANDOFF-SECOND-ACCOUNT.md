# Textbooks handoff (10 Nov 2026)

The textbooks work moves from the desktop-app session to a Terminal session on a second Claude account.
Read this first, then PLAN-TEXTBOOKS.md (Progress log, last entries) and the memory notes
(textbooks_word_for_word.md and the others in MEMORY.md). The founder is Nikhil: explain things to him
in plain language, design talk can stay detailed.

## Where things stand
- Physics 11, Physics 12, Chemistry 11, Chemistry 12: complete and pushed (last textbook push 0fb91f8,
  p-Block join 7f7e27e).
- Mathematics 11, Chapter 1 Sets: complete and PUSHED (0c9ae6f, 10 Nov).
- Mathematics 11, Chapter 2 Relations and Functions: complete and PUSHED (b8f7ec4, 10 Nov), brief math11/briefs/MAC-BRIEF-M11-02.md.
- Mathematics 11, Chapter 3 Trigonometric Functions: complete and PUSHED (26c5540, 10 Nov), brief math11/briefs/MAC-BRIEF-M11-03.md (layout: Topics 01–12, Additional C and D; decisions DECISIONS-M11 12–16).
- Mathematics 11, Chapter 4 Complex Numbers and Quadratic Equations: complete and PUSHED (3863a5e, 10 Nov), brief math11/briefs/MAC-BRIEF-M11-04.md (layout: Topics 01–09; decisions DECISIONS-M11 17–20).
- Mathematics 11, Chapters 5 Linear Inequalities (e6e9f33) and 6 Permutations and Combinations (a5fea1f): complete and PUSHED together
  (11 Nov), briefs MAC-BRIEF-M11-05/06.md, decisions 21–28. Founder now runs TWO CHAPTERS AT A TIME, still at most 3 helpers at once.
  Ch 1–6 open on the chapter home (lib/chapter-essentials.ts OPENS_ON_CHOICE 'mathematics|11': index = chapter number; ADD EACH NEW CHAPTER).
  Known issue to fix next: one stacked binomial drawn a line low on Android (Ch 6 Topic 06 MCQ 4 solution, shots-06-fix/p051-12): React Native
  measures that long paragraph a line longer than it draws it; tried lead off, inner lineHeight, textBreakStrategy simple, a <br>: none helped.
  Idea: split long MCQ solutions into short paragraphs as reading pages do (cards-pilot.tsx read()).
  Shoot manifests: generate with the temporary test .claude/m11-manifest/manifest.test.ts (edit the chapter imports), then pages-m11-0N.json
  = parts with fractions/tables/snapshots/MCQs/formulas; drive-m11-0N.py from drive-m11-06.py. A screenshot-checking helper reads every shot.
  Never edit app files while a shoot runs (Metro reloads the app).
- Mathematics 11, Chapters 7 Binomial Theorem (555cec6) and 8 Sequences and Series (8311d4c): complete and PUSHED together (12 Nov),
  briefs MAC-BRIEF-M11-07/08.md, decisions 29–32. The Ch 6 misplaced binomial is FIXED (long MCQ/practice answers split into short
  paragraphs, cards-pilot readLong). Reader fixes this round: subscripted numerators lifted, powered denominators dropped, FRAC.lead 1.25,
  nested halves ≥ 10.5 px, Σ glued to its summand, closing "|" + no-break space joined, "&nbsp;" decoded, empty table cells hidden.
  Known reader limits: a fraction inside a fraction's NUMERATOR draws collapsed on Android (write the single fraction instead); Android
  sometimes measures a long paragraph a line longer than it draws it (split it). Ask before using the emulator (founder may be on it).
  The shoot script fails to turn some MCQ / worked-example cards (Ch 8 p078, p110): capture those by hand (adb tap › at 919, 590).
- Mathematics 11, Chapters 9 Straight Lines (70ef191) and 10 Conic Sections (08cb2d3): complete and PUSHED together (13 Nov), briefs
  MAC-BRIEF-M11-09/10.md, decisions 33–36. Ch 9 has Topic 00 (n '00', the app's "Start here") and the book's Patterns as Additional A–F;
  Ch 10 has Additional A–D (four addenda). Determinants in expanded form. Primes now drawn in STIX (PILOT_MATH). LESSON: tell helpers
  `const NB = '\u00a0'` explicitly; "no &nbsp;" was misread as "no U+00A0" and 7 files had a plain-space NB. Another session had uncommitted
  teacher-orb work (profile, dock, night-sky, teacher-*): never commit it; a one-off "Missing uniform value" crash screen came from it.
- NEXT: Mathematics 11, Chapters 11 Introduction to Three Dimensional Geometry (p. 1009 on) and 12, together, on the founder's go. Earlier note:
  (math11/briefs/MAC-BRIEF-M11-01.md) and everything Ch 1 taught (last Progress log lines): every fraction
  stacked, NO em dashes in the text, content non-breaking spaces kept. Write the Ch 2 brief first and
  show the founder the plan (topics, team of at most 3 helpers at a time) before starting.
- Book: math11/math11.pdf (October edition, 1260 pp; md5 b7f81da1…). Not the August PDF.
  Rules: math11/DECISIONS-M11.md. Briefs: math11/briefs/.
- Open question for the founder: Chapter 00 "Basic Mathematics: Indices, Surds and Logarithms"
  (pp. 10–24) has no shelf row known.

## The process, every chapter (do not skip a step)
1. Writers rebuild the chapter word for word from the book (brief per chapter, like MAC-BRIEF-M11-01.md).
2. Diagram helper draws every figure (lib/diagrams).
3. Key-points helper writes key points and formula cards (lib/revise).
4. Checks: tsc, eslint, `npx jest content/textbooks` (font, rules, fit checks).
5. Expert reviews (subject-teacher briefed, MAC-REVIEW_BRIEF-M11.md), reports in math11/reports-NN.
6. Founder decides on the flags (usually "everything, optional included"). Record in DECISIONS-M11.md.
7. Fixers apply; new wording we wrote is listed in .claude/textbook-review/new-text-*.md for founder approval.
8. Android check on the emulator: cards, diagrams, risky pages (drive-*.py scripts, OCR tool in tools/).
   Fix what is wrong as shared rules with a test, re-shoot.
9. Commit, then PUSH ONLY AFTER THE FOUNDER SAYS GO. Add a Progress log line to PLAN-TEXTBOOKS.md.

## Rules that keep things from breaking
- ONE chapter at a time, at most 3 helpers at once; helpers do not run tsc or the whole test suite
  (the Mac hangs otherwise).
- The app folder (~/Developer/monk-learning-app, branch main) has OTHER uncommitted work from other
  sessions (onboarding, Home, Videos, nav, exam scope…). Never commit it, never revert it, never
  `git add -A` / `git add .` / `git stash` / `git checkout -- .`. Commit textbook files by name only
  (content/textbooks, lib/diagrams, lib/revise, shared renderer files you changed), and show the
  founder the file list before committing.
- Only one session drives the Android emulator at a time. Never open the iOS Simulator.
- If Raasikh has new commits on origin/main, show the founder before merging.
- The books' mistakes are fixed in our copy only; never ask Raasikh to change the books.
