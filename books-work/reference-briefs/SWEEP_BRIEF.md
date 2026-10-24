# Android display sweep: what to look for in the screenshots

MonkLearning is a React Native / Expo app for JEE and NEET students. Its Textbooks tab has, for every
Physics Class 12 chapter, a **Formula sheet** (one formula card per page) and **Diagrams** (one diagram
per page, some with chips to switch between cases). The content is correct (expert-reviewed); this sweep
is ONLY about how it **displays on Android**. Most checking so far was on iPhone, and two Android-only
bugs were already found and fixed (lines breaking mid-word on cards; vector arrows over tall letters
clipped in diagrams). Your job: find every remaining display problem in your screenshots.

## Where things are

- Screenshots (1080 × 2400, from the Android emulator):
  `/Users/nikhi/Developer/monk-books/shots/`
  - `k12-cNN-cardKKK.png` — chapter NN, formula card KKK (the screen header says "KKK of TOTAL").
  - `k12-cNN-dgJJ-C.png` — chapter NN, diagram JJ, case C (chip C selected; single-case diagrams have C = 1).
- `manifest.json` (same folder): for each chapter, the card names in order and the diagrams (id, name, chips).
- The repo (read only for you): `/Users/nikhi/Developer/monk-learning-app`. Card text comes from
  `formula` blocks in `content/textbooks/phy-12-NN/*.ts` (built by `lib/revise/formula-cards.ts`);
  diagrams from `lib/diagrams/physics-12-NN.ts` (drawn by `components/revise/diagram-card.tsx`; maths
  text by `components/textbook/markup.tsx`).
- To look closely, crop with `sips -c H W --cropOffset Y X in.png --out out.png` into your own folder
  `/Users/nikhi/Developer/monk-books/work-<you>/`, then open with the Read tool. Look at EVERY screenshot assigned to
  you — at least at half size; zoom into anything that looks off.

## What counts as a problem (report each)

1. **Text broken badly:** a word split mid-word across lines; a line breaking right after an operator
   (=, +, −, /) or between a number and its unit; a fraction or bracket split awkwardly; an arrow "→"
   stranded at a line end.
2. **Clipped or cut-off:** anything cut at the card/page edge, glyph tops/bottoms clipped (vector
   arrows, hats, primes, superscripts, subscripts), a card whose content runs past its bottom, labels
   cut at a diagram's edge.
3. **Missing or wrong glyphs:** boxes (tofu), "?" marks, wrong characters, a symbol that should be
   italic/upright and isn't, raw markup visible ("<sub>", "&amp;"), Unicode subscript letters
   rendered oddly, combining marks (dots, bars, arrows, hats) misplaced.
4. **Reading wrong:** a card whose label/meaning lines look garbled (e.g. "D — 2r is the diameter",
   an unclosed bracket, a meaning cut off mid-phrase), duplicated lines, an empty card, a card title
   that is a sentence fragment.
5. **Diagrams:** labels overlapping lines/other labels/tags; text overlapping the drawing; tags clipped;
   a chip row overflowing; maths text in the wrong place relative to the drawing (misaligned overlay);
   anything unreadably small at phone size; the wrong case shown for the chip selected.
6. **Layout:** odd spacing, large empty gaps, a caption cut off, overlapping UI.

Do NOT report physics/content opinions or things that are merely a style preference; only display
problems a student would notice. If unsure, report it with "possible".

## Your report (final message)

For each problem: screenshot file, what is wrong (one line), severity (high = unreadable/misleading,
medium = clearly broken but readable, low = cosmetic), and — where you can find it — the source:
file + the formula kicker / diagram id + the exact text involved, plus a suggested fix (content change
or likely code cause). Group identical problems (same cause across many cards) into one entry listing
all files. End with: number of screenshots reviewed, and any you could not open.
