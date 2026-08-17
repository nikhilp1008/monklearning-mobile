# Snap It Out — solution screen (6B)

Final design for the doubt screen after a student snaps a page. Snap It Out reads up to **three** questions from one photo; this screen shows one at a time with the full step-by-step working. There is no photo on the screen — the parsed question text replaces it.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Standalone screen. Open in a browser; Q1 / Q2 / Q3 switch and the body scrolls. |
| `solution-screen.css` | The whole component: tokens, grid paper, rail, maths treatment, sticky actions. No dependencies. |
| `solution-screen.js` | Question data (`SNAP_QUESTIONS`) plus `renderSolution(root, questions, startIndex)`. |
| `README.md` | This file. |

Font: **Bricolage Grotesque** (300–800). Nothing else is loaded.

## Structure, top to bottom

1. **Status bar**, then a bare header: back chevron and the word *Solution*. No save action, no subject label.
2. **Question chips** — one per parsed question, so a three-question snap shows Q1 Q2 Q3. Selected chip is solid ink; the rest are outlined. Render exactly as many chips as the parser returned (1, 2 or 3).
3. **The question**, pinned. It is `position: sticky` with an opaque white background and a 1.5px ink rule under it, so it stays readable while the working scrolls beneath.
4. **The working** — a numbered rail. Each step is a squared 28px marker (01, 02, 03…), a bold step title, prose lines, and maths lines.
5. **Final answer** — green tick marker, green label, the result in a soft green wash.
6. **Sticky actions** — *Ask a follow-up* and a flag button, over a white fade so scrolling text never collides with them.

## The maths treatment

This is the part that took the most iterations. Rules:

- A maths line is its **own line**, never inline in a sentence.
- It carries a **faint amber wash** — `rgba(238, 163, 31, .11)` — at weight 600, 17px, 7×12px padding, 6px radius.
- It **hugs its text**: `align-self: flex-start` plus `max-width: 100%`. Without `align-self`, the flex parent stretches it into a full-width bar, which was the earlier mistake.
- The final answer uses the same recipe in green: `rgba(28, 155, 87, .11)` wash, `#14663A` text.

Everything else stays uncoloured. Prose is `#4A463D`, titles are ink.

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| `--ink` | `#1C1A16` | Titles, selected chip, primary button |
| `--ink-70` | `#4A463D` | Prose lines |
| `--ink-50` | `#8A8478` | Unselected chips |
| `--ink-30` | `#B5B0A4` | Step count line |
| `--paper` | `#FFFFFF` | Page |
| `--grid` | `rgba(28,26,22,.04)` | Graph squares |
| `--amber-wash` | `rgba(238,163,31,.11)` | Maths lines |
| `--green` / `--green-ink` / `--green-wash` | `#1C9B57` / `#14663A` / `rgba(28,155,87,.11)` | Final answer |
| `--grid-size` | `26px` | One square of the paper |
| `--rail` | `44px` | Step-number column |

Type: screen title 21/700, step title 19/700, question 16/1.6, prose 16/1.6, maths 17/600, answer 19/700. Nothing below 13px.

## Data shape

```js
{
  id: 'Q1',
  text: 'the parsed question, as plain text',
  steps: [
    { title: 'Convert the time to seconds',
      lines: [ ['text', 'Given the time…'], ['math', 't = 6 min 40 s'] ] }
  ],
  answer: 'd = 400 α'
}
```

`renderSolution(root, questions, startIndex)` builds the chips and the rail, and returns `{ show(i), current() }` so the host can jump between questions.

Maths is plain text with Unicode superscripts (`T⁻³`, `d³`). If the solver returns LaTeX instead, render it with KaTeX inside `.solution__math` — the wash and hugging behaviour still apply, since the class only sets padding, background and alignment.

## Notes for the build

- **Chip count follows the parse.** One question snapped means one chip; do not pad to three.
- **Switching a question resets the scroll** to the top (the renderer already does this) — students expect the question they tapped, not the middle of it.
- **Long questions**: the pinned block is capped by its own content. If a parsed question runs past about six lines, clamp it to four with a *Show full question* tap rather than letting it eat the screen.
- **Failure state** (not in this file): if a question could not be parsed, its chip should still appear, marked, with a retake prompt in the body.

## Accessibility

- Chips are real `<button>`s in a `role="tablist"` with `aria-selected`; the question and steps are ordinary text, so a screen reader gets them in reading order.
- Contrast: prose `#4A463D` on white is 8.9:1; the maths wash keeps ink at full strength; the green answer is 6.4:1.
- Hit targets: chips 38px tall with 20px side padding, actions 54px.
