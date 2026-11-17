# Textbooks: how the chapters are built (handoff for Biology)

Physics 11, Physics 12, Chemistry 11, Chemistry 12 and Mathematics 11 are finished this way, and Mathematics 12 is
nearly done. Biology 11 and 12 are next. This folder is the method: the briefs every helper read, the founder's
decisions, the progress log and the Android shoot scripts. Read this page first.

## Where things are

- **The books (source):** the Drona Master Reference PDFs, in the API repo (`Raasikh/monk-learning-api`, branch
  `main`, folder `books/master-references-2026-10-15/`): `Drona_Class11_Biology_Master_Reference.pdf` and
  `Drona_Class12_Biology_Master_Reference.pdf`. Every finished subject used this same October set. PDF page number =
  the folio printed at the bottom of the page (each page also prints a small chapter-own number; the errata at the back
  of each book uses that one).
- **The chapters (what you build):** this repo. A chapter is data, no screen code:
  - `content/textbooks/<subject>-<class>-<NN>-<name>.ts` joins topic files in `content/textbooks/<subject>-<class>-<NN>/`.
    Model to copy: `content/textbooks/chem-12-10-biomolecules.ts` and `content/textbooks/chem-12-10/` (Biology is
    closest to Chemistry: names, structures, labelled figures, NEET framing).
  - Figures redrawn as code: `lib/diagrams/<subject>-<class>-<NN>.ts` (kit in `lib/diagrams/kit.ts`).
  - Key points: `lib/revise/keypoints-<subject>-<class>-<NN>.ts`. The Formula sheet builds itself from `formula` blocks.
- **The method:** `workbench/` here. It mirrors the folder it was copied from, so a path in a brief like
  `/Users/nikhi/Developer/monk-books/chem12/briefs/MAC-BRIEF-C12-10.md` is `workbench/chem12/briefs/MAC-BRIEF-C12-10.md`.
  The books' own text dumps, page images, reports and screenshots were left out (10 GB); make your own with
  `pdftotext -layout` and `pdftoppm`.

## Read in this order

1. `workbench/HANDOFF-SECOND-ACCOUNT.md`: the process in nine steps and the rules that keep work from breaking.
2. `workbench/BRIEF-12-07-08.md`: the base brief every writer reads (block system, word for word, parts, exceptions,
   checking, the report).
3. `workbench/chem11/briefs/MAC-BRIEF-C11-01-02.md`, then `workbench/chem12/briefs/MAC-BRIEF-C12-01-02.md` and the
   latest, `MAC-BRIEF-C12-10.md` and `MAC-BRIEF-C12-11.md`: how a subject's notation and layout rules were added. A
   Biology brief starts as a copy of these.
4. `workbench/math11/briefs/MAC-BRIEF-M11-01.md`: the two newest house rules (FRACTIONS, NO EM DASHES), which apply to
   every new subject.
5. The decisions files: `workbench/chem11/DECISIONS-C11.md`, `workbench/chem12/DECISIONS-C12.md`,
   `workbench/math11/DECISIONS-M11.md`, `workbench/math12/DECISIONS-M12.md`. These are Nikhil's calls; follow them.
6. `workbench/chem12/briefs/MAC-REVIEW_BRIEF-C12.md` (and `workbench/math11/briefs/MAC-REVIEW_BRIEF-M11.md`): the expert
   reviewer's brief. A Biology one is a copy with a senior NEET biology teacher as the reviewer.
7. `workbench/PLAN-TEXTBOOKS.md`: the progress log, with every lesson learned on the way.

## The rules that matter most

- **Word for word.** The app carries the book's text exactly. Nothing is summarised, reordered or "improved". Changes
  only where the book cannot work in the app (page pointers like "see above", "Subtopic 03" → "Topic 03", layout text),
  and every change is listed.
- **The book's mistakes are fixed in our copy only**, after the expert reviews, never by changing the book. Nikhil
  decides which fixes go in (so far always "everything, optional included"), and approves every line of wording we
  wrote ourselves before it is committed (`.claude/textbook-review/new-text-*.md` was the list sent to him).
- **Every fraction stacked**, `<frac><num>…</num><den>…</den></frac>`, never `a/b` on one line.
- **No em dashes** (—) in the text: a colon, commas, brackets or a full stop instead. The checks fail on them for
  Mathematics; extend that check to Biology when you start (`content/textbooks/__tests__/book-rules.test.ts`).
- **Accuracy first.** Every number, name, label and answer checked against the page image, never against a text dump.
- One chapter at a time; at most three helpers at once on a 16 GB Mac.

## Wiring a new chapter (each one)

- `lib/textbooks.ts`, `CHAPTERS`: `'biology|11|<catalogue title in lower case>': () => import(...)`. The title must match
  the row the server's `/drona/catalogue` sends (`chapterKey` normalises case and punctuation), or the shelf will not
  open it.
- `lib/chapter-essentials.ts`, `OPENS_ON_CHOICE`: add `'biology|11': [...]` with each finished chapter's index.
- `lib/diagrams/index.ts` and `lib/revise/keypoints.ts`: file the figures and key points under `'biology|11|<n>'`.
- `content/textbooks/test-support/book-list.ts` and `content/textbooks/__tests__/book-chapters.test.ts`: add the
  chapter, so every check runs on it.

## The checks (before any commit)

`npx tsc --noEmit`, `npx eslint` on the changed files, and the full `npx jest`. These matter most:
`content/textbooks/__tests__/display-fonts.test.tsx` (every character exists in the font that draws it),
`book-rules.test.ts` (one-line fractions, em dashes, minus signs, brackets, quotes, answers),
`book-chapters.test.ts` (parts, figures, markup, key points) and `display-fit.test.ts` (nothing too wide for a line).
Commit the chapter's files by name only (the folder often holds other unfinished work).

## Android or iOS for the visual check

- **Content checks work on either**, and the tests above run on any Mac.
- **The look differs.** The reader draws fractions, raised and lowered text and line breaks partly with
  platform-specific code, every fix so far was tuned on Android, Android breaks lines differently, and each phone falls
  back to its own fonts for missing characters (the font test models Android's Roboto). A page right on iPhone can be
  wrong on Android, and most students are on Android.
- So: check content on iOS if that is what you have. A chapter that only adds content (text, figures, key points) and
  passes the checks needs no Android pass of its own: the reader has been checked on Android across 50+ chapters.
- But **any change to a shared reader file** (`components/textbook/markup.tsx`, `components/textbook/*-pilot.tsx`,
  `lib/revise/formula-cards.ts`, `lib/revise/formula-layout.ts`, `lib/diagrams/kit.ts`) can break every subject's
  pages on Android, so it gets an Android check before it is pushed. Run it on your own Mac: an Android emulator from
  Android Studio (free, it runs beside the iOS Simulator), with the shoot scripts below. Look at a few already
  finished chapters too (a Maths fractions page, a Chemistry equations page), not only Biology.
- Anything that looks wrong on iPhone is worth reporting too: nobody has checked the Maths fractions on iOS yet.

## The Android shoot scripts (macOS + adb)

`workbench/drive-c11.py` holds the shared steps (deep links into the app, formula cards, figures, reading pages,
OCR-guided taps); `workbench/drive-m12-13.py` is the latest chapter script built on it; `pages-only-m12.py`,
`cards-only-m12.py` and `reshoot-cards-m12.py` re-shoot parts. They need a running Android emulator with the
development build, `adb reverse tcp:8081 tcp:8081`, and the small macOS tools in `workbench/tools/` built with
`swiftc -O <name>.swift -o <name>` (Vision OCR, image stacking). The shoot manifest comes from a temporary jest test
like `workbench/manifest-helper/manifest.test.ts.txt` (rename to `.ts` inside `content/textbooks/__tests__/`, run,
delete). Screens are compared on the reading area only, because the teacher orb animates. Paths inside the scripts
point at Nikhil's folders; change them for your machine.
