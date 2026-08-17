# Snap a doubt — loading state (2C, "full bleed")

Final design for the wait after a student uploads a photo of a question in Monk Learning. The captured page fills the screen, an amber gradient sweeps it top to bottom and lights up each detected line of text as it passes, and the footer names the stage the pipeline is in.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Standalone demo. Open in a browser. Includes three buttons that switch between the CSS auto-cycle, a simulated real pipeline, and a slow answer. |
| `snap-loading.css` | The whole component. Tokens, layout, keyframes, reduced-motion fallback. No dependencies. |
| `snap-loading.html` | The markup fragment on its own, for pasting into the app. |
| `README.md` | This file. |

Fonts: **Anek Latin** (UI) and **Source Serif 4** (the stand-in question text only — the real screen shows a photo, so the serif is not needed in production).

## Layout

Designed at 430 × 932 (iPhone 15 Pro logical size), but everything is either absolutely positioned from an edge or centred, so it scales to any phone. The component fills its container at `100% × 100%`.

Three layers, back to front:

1. **The shot** — the student's photo, `object-fit: cover`, `opacity: .62`. Nothing is cropped away, so the student can still see what they sent.
2. **Scan layer** — the detected-line outlines plus the sweeping gradient.
3. **Scrim** — a top-and-bottom vertical gradient that darkens behind the chrome and the footer while leaving the middle of the photo visible. This is what keeps the copy legible on any photo, dark or bright.

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| `--ink` | `#0B0A09` | Screen background, scrim base |
| `--paper` | `#1E1B16` | Photo placeholder |
| `--cream` | `#F7F5EC` | Stage headline, screen title |
| `--cream-dim` | `#9B958A` | ETA line |
| `--cream-quiet` | `#C9C3B4` | Cancel, close glyph |
| `--amber` | `#EEA31F` | Sweep body, line outlines, dots |
| `--amber-hot` | `#FFD682` | Leading edge of the sweep |

Type: stage headline 31 / 700 / `-.03em`, screen title 19 / 700, ETA 17 / 400, cancel 16 / 600. No size drops below 16px.

## Timing

| Element | Duration | Notes |
| --- | --- | --- |
| Sweep | `--scan-duration: 3s`, linear, loops | Travels `-280px` to `1000px`, i.e. photo height plus its own 280px height, so it enters and exits cleanly. |
| Line outlines | Same 3s cycle | Each one's `animation-delay` should equal `(box.top / photoHeight) * 3s`, so a line lights exactly as the sweep crosses it. Fades to 18% and stays faintly lit — the read is "this has been picked up", not "this is blinking". |
| Stage line | `--stage-hold: 2.4s` each | Fades up 8px, holds, fades out 8px. |
| Dots | 1.4s, staggered 0.18s | |

Five stages × 2.4s = 12s for a full pass, comfortably longer than the ~8s typical solve.

## Copy

One sequence for every doubt, whatever the subject:

1. Reading your photo
2. Understanding the question
3. Working out the method
4. Writing the steps
5. Checking the answer

Rule of thumb: name the move a teacher would be making at that second. "Analysing your image" tells a student nothing.

The ETA line stays fixed: *"Usually about eight seconds. You will get the full working, not just the answer."* It sets the expectation and reminds the student what they are getting, which is what makes the wait tolerable.

## Wiring it to real progress

The CSS-only cycle (`.snap-loading--auto`) is a design reference. In production, drop that class and toggle `.is-active` on one `.snap-loading__stage` from real pipeline events:

- `ocr:done` → stage 2
- `parse:done` → stage 3
- `solve:started` → stage 4
- `render:started` → stage 5

Three rules:

- **Never go backwards.** If an event arrives out of order, keep the later stage.
- **Finish early, cut immediately.** If the answer lands during stage 2, do not walk through the remaining lines. Transition straight to the result.
- **Run long, hold.** After stage 5, stay on it rather than looping back to stage 1 — looping reads as a hang. Past ~20s, swap the ETA line for a reassurance ("Still working. Hard ones take a little longer.").

Also worth wiring: replace the three demo `.snap-loading__line` elements with one per OCR box, positioned as a percentage of the photo, so the scan is genuinely tracking the student's own handwriting.

## Failure and edge cases (to design next, not in this file)

- No text found — offer retake, with the framing tip from the capture screen.
- Photo too blurry — same, but say which.
- Offline mid-solve — hold the shot, queue, tell the student it will finish when they are back.
- More than one question in frame — the capture screen caps at two; the loading screen should show which one is being solved.

## Accessibility

- The root carries `role="status"` and `aria-live="polite"`, so the stage line is announced as it changes. All decorative layers are `aria-hidden`.
- `prefers-reduced-motion: reduce` stops the sweep (parked mid-screen at 50% opacity), stops the dots, and pins the first stage line. Nothing pulses.
- Contrast: cream on the scrimmed base clears 12:1; the dim ETA line clears 4.8:1.

## Native notes

If this ships in React Native rather than a web view: the sweep is one `LinearGradient` translated on a looping `withRepeat(withTiming(...))`; the scrim is two stacked `LinearGradient`s; the stage line is an opacity + translateY pair driven by the same pipeline events listed above. The line outlines are plain views with animated opacity, so no masking or blend modes are required anywhere.
