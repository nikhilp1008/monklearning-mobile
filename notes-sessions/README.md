# Notes & Sessions — the class board as a page

What comes back from a live one-on-one class with Drona. The class runs in landscape on a board; this is the portrait page the student reads afterwards.

**Note** — saved by the student, kept for good.
**Session** — the class they forgot to save. It holds for seven days and then deletes itself. Saving it turns it into a note, in place.

Same page, same content, same components. Four things differ, listed below.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Both screens side by side. Open in a browser; chips jump, paragraphs highlight, Save to notes flips the session live. |
| `board-page.css` | The whole page: ruled paper, header, clock strip, section chips, derivation rail, maths, worked problem, questions, save bar. |
| `board-page.js` | `TORQUE_BOARD` sample content + `renderBoard(root, board, { mode, daysLeft, onSave })`. |
| `README.md` | This file. |

Fonts: **Bricolage Grotesque** for everything, **Kalam** for the two handwritten touches (the class takeaway and the student's own questions).

## What differs between a note and a session

1. **The kicker.** A note has none — the topic starts the page. A session reads `SESSION · DELETES IN 7 DAYS` in red, and switches to `SAVED TO YOUR NOTES` in green once saved.
2. **The clock strip.** Sessions only: a big number and one line of plain speech, marked with a coloured left rule. Notes skip it entirely, so the topic sits closer to the content.
3. **The action bar.** Sessions carry a single full-width **Save to notes**; after saving it becomes **Talk to Drona about this**. Notes have no bar at all — the page scrolls to its own end.
4. **The header.** No dates, no durations, no "one-on-one class", no edit action on either. Topic and subject only. Dates belong to the list the student came from.

## The page, top to bottom

Status bar → back chevron (+ kicker on sessions) → topic and subject → clock strip (sessions) → section chips → scrolling body → save bar (sessions).

The body is a **section list**, and the chips are built from whatever sections exist. A class that produced only theory shows two sections; a problem-heavy class shows three worked examples. Nothing renders empty.

Section kinds shipped in `board-page.js`:

| Block | Renders as |
| --- | --- |
| `text` | Prose. `markable: true` makes it tap-to-highlight. |
| `hand` | Kalam line in red — the takeaway the teacher underlined. |
| `steps` | Numbered rail: round marker, step title, prose and maths lines. |
| `svg` | A drawn figure, full width, with a `caption` block beneath it. |
| `problem` | Question, working lines, green tick and answer. |
| `qa` | The student's own questions in Kalam with the answer under each. |
| `foot` | Small closing line, e.g. the highlight hint. |

## Rules that matter

- **One formula per line.** Every maths line is its own element with `align-self: flex-start`, so the amber wash hugs the formula instead of stretching into a bar. Never pack two expressions on one line with spaces.
- **The wash is quiet.** Amber at 11% for maths, green at 11% for answers. Nothing else on the page is coloured except the Kalam accents.
- **Ruled paper, 34px.** The rhythm matches the prose line-height so text sits on the lines rather than fighting them.
- **Highlighting survives saving.** A student can highlight inside a session; those marks carry over when it becomes a note.

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| `--ink` / `--ink-70` / `--ink-50` / `--ink-30` | `#1C1A16` / `#4A463D` / `#8A8478` / `#B5B0A4` | Titles / prose / quiet copy / hints |
| `--paper` | `#FFFFFF` | Page |
| `--rule` | `rgba(28,26,22,.055)` | Ruled lines |
| `--amber` / `--amber-wash` / `--amber-mark` | `#B08420` / `rgba(238,163,31,.11)` / `rgba(238,163,31,.28)` | Section labels / maths / highlighter |
| `--red` | `#DD4433` | Handwriting, delete countdown |
| `--green` / `--green-ink` / `--green-wash` | `#1C9B57` / `#14663A` / `rgba(28,155,87,.11)` | Answers, saved state |
| `--line-height` / `--gutter` / `--rail` | `34px` / `24px` / `40px` | Paper rhythm, side padding, step column |

Type: topic 29/700, step title 18/700, prose 16/1.62, maths 17/600, result 19/700, chips 13/700. Nothing below 13px; every tap target is at least 34px, actions 54px.

## Still to design

- The **class dismissal screen** that offers Save to notes the moment a class ends — the moment that decides whether something becomes a note or a session.
- **Day 6 nudge**: a session about to expire should say so somewhere the student will see it, not only on this page.
- **Landscape → portrait capture**: how a wide board splits into these sections is a pipeline question; this page assumes it arrives already sectioned.
- **Edit and delete** for notes, if the product wants them later. Deliberately absent here.

## Accessibility

- Chips are real buttons in a `role="tablist"` with `aria-selected`; the diagram carries a descriptive `aria-label`.
- Contrast: prose 8.9:1, quiet copy 4.6:1, green answer 6.4:1 — all on white.
- Highlighting is a plain click toggle on the paragraph, so keyboard and screen-reader users can reach it with a tab stop if the host adds one.
