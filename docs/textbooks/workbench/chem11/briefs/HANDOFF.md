# Handoff: Class 11 Chemistry textbooks (cloud session)

This branch (`chem-11`) carries everything a cloud session needs to rebuild the **Class 11 Chemistry**
textbook chapters word for word from the co-founder's Master Reference book, the same way Physics
Class 11 (all 14 chapters) and Physics Class 12 (Ch 1–8) were done. Read this whole file first.

## People and how to work with them

- **Nikhil** (founder) owns product, branding and UI/UX. He is not an engineer: explain everything in
  plain language, no jargon, no file paths in what you tell him unless he asks. Keep design talk deep.
- **Raasikh** (co-founder) owns engineering and wrote the Master Reference books. Nikhil does NOT
  want Raasikh asked to change the books: we fix the book's mistakes in our copy only.
- Commit only on this `chem-11` branch, and push it when a chapter pair is finished so nothing is
  lost. **Never push to `main`, never merge, never release** unless Nikhil says so in words. When he
  does, `books-work/` must NOT go to main (it is a working folder: book PDF, text dumps, briefs).
- Brand rules for anything visual: no black/brown/grey fills, no yellow-tint fills.
- This session is paid by Nikhil's **cloud-session bonus credit**. At each natural pause, check usage
  (`/usage`) and tell Nikhil plainly if the credit looks used up or if work has started counting
  against his weekly plan limit — he asked to be told when the credit runs out.

## The book (NOT in this repo — fetch it, never commit it)

The book is the co-founder's and lives in his repo; this app repo deliberately keeps the books out
(`.gitignore` ignores `Drona_*_Master_Reference.pdf`, and `books-work/.gitignore` ignores `chem11/`,
PDFs and page renders). Fetch it into `books-work/chem11/` for your own use only:

- Repo `Raasikh/monk-learning-api` (NOT `nikhilp1008/monk-learning-api`, which stopped in August),
  branch `books-snapshot-2026-10-15`, file
  `books/master-references-2026-10-15/Drona_Class11_Chemistry_Master_Reference.pdf` (6.6 MB, 510 pages).
  e.g. `gh api -H "Accept: application/vnd.github.raw" "repos/Raasikh/monk-learning-api/contents/books/master-references-2026-10-15/Drona_Class11_Chemistry_Master_Reference.pdf?ref=books-snapshot-2026-10-15" > books-work/chem11/chem11.pdf`
  (or a shallow, sparse `git clone` of that branch). **If you have no access to that repo, stop and
  tell Nikhil in plain words** — do not look for the book anywhere else and do not ask Raasikh.
- Then make `books-work/chem11/chem11.txt` with `pdftotext -layout` (install `poppler-utils` if needed)
  and `errata.txt` from pp. 503–510. PDF page numbers match the printed folio at the page foot.
- The text dump is good for copying prose exactly; BAD for formulas, subscripts, charges, arrows and
  structures (they scramble). Always read formulas, equations, numbers and structures from the page
  image: `pdftoppm -r 110 -f N -l N -png` (or the Read tool on the PDF, `pages: "N-M"`).
- Errata: "Corrections made in this printing" are already in the text; "Remaining known issues" must
  be handled (copy as printed + a short bracketed note from the errata, or redraw a figure correctly)
  and reported. Chapter 10 has an errata entry (p. 509).

Chapters and pages (book → app syllabus title, which is what the app matches on):

| Book chapter | Pages | Addenda (→ "Additional topics") | App catalogue title (key) |
|---|---|---|---|
| 01 Some Basic Concepts of Chemistry | 7–71 | A, B, C, P (59–71) | `chemistry|11|some basic concepts` |
| 02 Structure of Atom | 72–116 | A–D, P (103–116) | `chemistry|11|atomic structure` |
| 03 Classification of Elements and Periodicity | 117–162 | A–C, P (151–162) | `chemistry|11|classification of elements` |
| 04 Chemical Bonding and Molecular Structure | 163–212 | A–E, answers, P (199–212) | `chemistry|11|chemical bonding` |
| 05 Chemical Thermodynamics | 213–250 | A–E, answers, P (239–250) | `chemistry|11|thermodynamics` |
| 06 Equilibrium | 251–294 | A–D, answers, P (284–294) | `chemistry|11|equilibrium` |
| 07 Redox Reactions | 295–344 | A–F, checklist, P (327–344) | `chemistry|11|redox reactions` |
| 08 Organic Chemistry — Some Basic Principles | 345–399 | A–F, checklist, P (381–399) | `chemistry|11|general organic chemistry` |
| 09 Hydrocarbons | 400–455 | A–G, P (439–455) | `chemistry|11|hydrocarbons` |
| 10 The p-Block Elements (Groups 13 and 14) | 456–502 | A–I, P (475–502) | **not in the app's syllabus — ask Nikhil** |

(Check exact page ranges against the PDF; the table is from the contents pages.)
The app's Chemistry shelf currently shows 9 chapters all marked "Being written" — none exist yet.
Keys are lower-case catalogue titles; look at how `CHAPTERS` in `lib/textbooks.ts` keys Physics and
Maths (e.g. Maths' book says "Trigonometric Functions" but the key is the catalogue's "trigonometry").
Verify the exact catalogue titles before registering (the shelf showed: Some Basic Concepts, Atomic
Structure, Classification of Elements, Chemical Bonding, Thermodynamics, Equilibrium, Redox Reactions,
General Organic Chemistry, Hydrocarbons).

### Structure points to raise with Nikhil before writing (he decides; offer a recommendation)

1. Chapter 10 (p-Block) is in the book but not in the app's 9-chapter syllabus: build it or not?
2. Every chapter ends with "Addendum P — What JEE and NEET Actually Ask" — new to Chemistry (Physics
   had no such section). Keep as an Additional topic, or drop?
3. Some chapters carry "Answers to Practice (Addenda …)" and "Summary Checklist" pages after the
   addenda — fold answers into each addendum's practice items (as Physics did) and ask about checklists.
4. Chapter 6's subtopics are printed in the order 01, 04, 05, 02, 03 — Physics 12 Ch 7 had the same
   oddity; renumber in printed order and list every cross-reference you reword.
5. Chapter 8 has a "Subtopic 00" opening section → app `n: '00'`, shown as "Start here" (see
   `isGuide`/`topicMark` in `lib/textbooks.ts`; Physics 12 Ch 3 and Ch 6 are the models).

### Nikhil's decisions (24 Oct 2026, cloud session)

1. Chapter 10 (p-Block, Groups 13 and 14): **build it as a 10th Class 11 chapter** (it needs a new shelf
   entry in `constants/onboarding-chapters.ts` and a catalogue key — do it last, after Ch 1–9).
2. "What JEE and NEET Actually Ask": **keep**, word for word, as the last Additional topic of each chapter
   (lettered after the real addenda; "Addendum P" references reworded to that letter).
3. "Answers to Practice": each answer goes with its own practice question. "Summary Checklist" (Ch 7, 8):
   **keep**, as a short Additional topic just before the exam section.
4. Chapter 6: **number the parts 1–5 in reading order**; reword and list every cross-reference.
5. Chapter 8's Subtopic 00: **"Start here"** (`n: '00'`); Topics 1–4 keep the book's numbers.

The Chemistry brief for Ch 1–2 is `books-work/BRIEF-C11-01-02.md` (it builds on the Physics brief);
`books-work/svg2png.cjs` replaces the Mac's qlmanage for looking at diagrams in the cloud.

## The process (per chapter pair) — exactly as for Physics

1. **Write a brief** for the pair, adapted from `books-work/reference-briefs/BRIEF-12-07-08.md`
   (it is the newest Physics brief and has every rule learned so far). Translate paths: everything
   that says `/Users/nikhi/Developer/monk-books/…` now lives in `books-work/`; the repo is this
   checkout. Delete the parts that are physics-only and add chemistry rules (below).
2. **Builders** (agents in parallel): writers (~25 pages each, one topic file each), one diagram
   agent per chapter (`DIAGRAM_BRIEF-12-07-08.md`), one key-points agent. Model files: Physics 12
   `content/textbooks/phy-12-07/*.ts`, `phy-12-08/*.ts`, `lib/diagrams/physics-12-07.ts`,
   `lib/revise/keypoints-physics-12-07.ts`. New Chemistry files: `content/textbooks/chem-11-0N/…`,
   `content/textbooks/chem-11-0N-<slug>.ts`, `lib/diagrams/chemistry-11-0N.ts` (registered in
   `lib/diagrams/index.ts` under `'chemistry|11|N'`), `lib/revise/keypoints-chemistry-11-0N.ts`
   (registered in `lib/revise/keypoints.ts`), chapter registered in `CHAPTERS`, added to
   `content/textbooks/__tests__/book-chapters.test.ts`, and `OPENS_ON_CHOICE` in
   `lib/chapter-essentials.ts` gets a `'chemistry|11'` entry.
3. **Expert reviewer** per chapter, briefed as a senior NCERT/JEE/NEET chemistry teacher (adapt
   `REVIEW_BRIEF-12.md`): checks every number, formula, charge, oxidation state, structure, unit,
   answer and MCQ against the page images; rules on builders' flags; writes REVIEW.md with exact fixes.
4. **Nikhil approves** the fixes in plain language (he has always chosen "Everything, optional
   included"; still ask every time, with that as the recommended first option).
5. **Fixer** agent applies them; run `npx tsc --noEmit`, `npx jest`, eslint on changed files.
6. **Android display check — NOT possible in the cloud** (needs the emulator on Nikhil's Mac). When a
   pair is fixed and tests pass, commit + push `chem-11` and tell Nikhil it is ready for the Android
   check back on his Mac (`books-work/reference-briefs/drive.py` and `SWEEP_BRIEF.md` show how that
   check runs; the Mac session handles it).

## House rules (all carried over from Physics; read the brief for the full list)

- Word for word. Exceptions only where the text cannot work in the app (page pointers, "see the figure
  on the next page", layout text, stacked maths inside a sentence). Report every exception.
- Book's mistakes: fix in our copy only after the expert review and Nikhil's approval; report them.
- `ans` holds only the answer — no "Result:" labels; remarks after an answer go in the steps.
- Every MCQ nudge describes its own option; an unexplained wrong option → null nudge + report.
- One-line fractions bracketed; π upright; label subscripts upright, variable subscripts italic.
- Plain-text fields (titles, kalam) carry no tags or Unicode sub/superscripts.
- Check every "the chapter never covers X" claim; state hidden assumptions.
- Cross-references renumbered to app topics and listed.
- Keep vector arrows; list every reworded cross-reference.

### Chemistry-specific (new — decide carefully and write into the brief)

- Chemical formulas: subscripts as `<sub>` (H<sub>2</sub>O), charges as `<sup>` (SO<sub>4</sub><sup>2−</sup>,
  Fe<sup>3+</sup>), element symbols upright (never italic); state symbols (s), (l), (g), (aq) upright.
- Reaction arrows → ⇌ (equilibrium) exactly as printed; conditions over arrows need a house form —
  check how the markup renders (`components/textbook/markup.tsx`) and agree one form for the chapter.
- Organic structures, orbital diagrams, periodic-table trends and energy-level diagrams are **drawn**
  as app diagrams (redrawn in the house "App tags" style with checks), not as images; if a structure
  cannot be drawn faithfully, report it rather than approximate.
- Oxidation numbers, n-factors and equivalent masses: recompute every one.

## State of the app (for context)

- `main` is at `04c68c6` (Physics 11 + 12 Ch 1–8 done; Raasikh's payment changes merged).
- Physics work folder notes live in Nikhil's Mac session; this file replaces them for the cloud.

## Progress (cloud session, stopped 30 Oct 2026 when the cloud credit ran out)

- **Ch 1–6: done** — written, drawn, key points, expert-reviewed, all fixes Nikhil approved applied. Ready for
  the Android check on the Mac. Briefs used: `BRIEF-C11-01-02.md` (with Nikhil's decisions at its end),
  `BRIEF-C11-03-04.md`, `BRIEF-C11-05-06.md`; review brief `REVIEW_BRIEF-C11.md`.
- **Ch 7–8: built but NOT expert-reviewed** (brief `BRIEF-C11-07-08.md`). Text, 8 figures and key points are
  committed and pass tsc/jest/eslint. The builders' reports, with every suspected book error they found, are in
  `books-work/reports-ch7-8/`. Next: expert review of Ch 7 and Ch 8 (one agent each, with
  `REVIEW_BRIEF-C11.md`), Nikhil approves fixes, fixer, checks, then the Android check.
- **Still to do after that:** Ch 9 Hydrocarbons; Ch 10 p-Block (needs a shelf entry in
  `constants/onboarding-chapters.ts` and a catalogue key).
- To work locally: the book is NOT in git — fetch it into `books-work/chem11/` as described above and make the
  text dump; `node books-work/svg2png.cjs` renders diagrams (on the Mac, qlmanage works too).
