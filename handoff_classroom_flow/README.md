# MonkLearning · Classroom flow prototype

Open `Classroom Flow Prototype.dc.html` in a browser (keep `support.js` next to it). Fonts load from Google Fonts: Onest (UI), Anek Latin (fallback), Kalam (teacher handwriting).

## Flow
1. **Loading** (portrait, 390×844, #1C1A16) — "Entering your classroom" rises in word by word, an amber light sweeps through it every 4.4s, the chapter name sits under it, the stage caption cycles at the foot (Waking Drona → Setting up the board → Working through the physics → Almost there). Auto-advances after `loadMs` (default 3400ms).
2. **Live class · portrait** — full-bleed ruled board (26px rule grid, red margin at x=28, writing from x=40). Header zone 104px (status + chapter · LIVE · Report · End) and a white bottom dock (teacher wave · pause · Interrupt pill · rotate) with "Hold to interrupt" under it. Both are overlays: tapping the paper slides the header up and the dock down without resizing the board; a 74×19 tab at the bottom edge restores them.
3. **Live class · landscape** (844×390) — the original landscape board: header top-left, thumb rail on the right (wave · Interrupt 46 · label · pause · rotate-to-portrait), edge tab on the right when tucked.
- **End** (either orientation) resets and restarts from Loading.
- Rotate buttons switch orientation; the board keeps the live edge.

## Interactions
- Hold Interrupt (pointerdown → pointerup): pill/button fills #EEA31F, label → "Speaking", mic crossfades to a 3-bar level meter, inset ring pulses, teacher wave quiets to #C7C1B2 and slows.
- Board scroll: 3px indicator on the right fades in while moving; scroll settles to the nearest 26px rule; leaving the live edge shows the "Jump to live" chip (white plate, amber arrow).
- Demo writing: lines marked `data-w` appear every `writeMs` (default 2600ms) and auto-scroll while following live.

## Tokens
ink #1C1A16 · muted #57534B · faint #9C988C · paper #FCFAF4 · amber #EEA31F · deep amber #9A6A12 · red #DD4433 · green #1C9B57 / #157A45 · rule rgba(28,26,22,.055) · margin rule rgba(221,68,51,.32) · hairline rgba(28,26,22,.14)

## Motion
tuck/restore .35s cubic-bezier(.25,.75,.3,1) · hold-to-speak fill .3s cubic-bezier(.3,.8,.3,1) · screen change .45s (landscape rotates in over .55s) · loading shimmer 4.4s · caption dots 2.2s

## Tweaks
`loadMs` (loading duration), `writeMs` (demo writing interval) — on the `data-props` of the script tag.
