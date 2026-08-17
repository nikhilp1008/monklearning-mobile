# Handoff: MonkLearning landscape classroom (final)

## Overview
Two landscape screens for the MonkLearning app (JEE / NEET prep), both built on one idea: **the notebook page *is* the screen**. There is no card, no inset, no drawn board frame — ruled paper runs to all four edges of the display and every control floats over it. On device the only border a student sees is the phone's own.

| Screen | File | Purpose |
| --- | --- | --- |
| 2a Live class | `design/2a-live-class.html` | The live classroom: teacher writes, student watches, student can interrupt |
| 2b Lesson player | `design/2b-lesson-player.html` | A recorded lesson replayed on the same board |

Stills: `assets/2a-live-class.png`, `assets/2b-lesson-player.png` (2×).
Full spec — geometry, tokens, every interaction and state — in `SPEC.md`.

## About the design files
The files in `design/` are **design references authored in HTML**: standalone prototypes that show the intended look, type, rhythm, and behaviour. Open either one directly in a browser; no build step, fonts come from Google Fonts. They are not production code to copy. Recreate these screens in the app's own environment (React Native) with its established components, navigation, and state patterns.

Everything visual is inline-styled, so each element can be read as a spec line. The small `<script>` at the bottom of each file is the interaction model, written plainly so it maps onto RN state without translation.

## Fidelity
**High fidelity.** Colours, type sizes, weights, radii, spacing, copy, and the 26px writing rhythm are final. The frame is **844 × 390 pt** (iPhone 14/15 Pro logical size, landscape). Corners are rounded 28px in the reference so the screens read as a device surface on the page — on device, drop the radius and let the hardware corners do that work.

## The two rules that matter most

**1. Nothing is inset.** Paper, caption line, progress hairline, and the Topics drawer all reach the display edge. When you rebuild, do not wrap the board in a card, a `SafeAreaView` with visible background, or a bordered container — that reintroduces the double-border problem this design exists to fix.

**2. The left gutter is the notch gutter.** In landscape the Dynamic Island sits on the left edge. Writing starts at **56pt**, the red margin rule sits at **44pt**, and the teacher never writes left of it — so the island never covers a formula. It reads as a notebook margin, not as a safe-area workaround. Chrome on the left (chapter chip, back button) starts at 52–56pt for the same reason. Right/bottom insets are not reserved: the right thumb rail sits 12pt from the edge and the bottom edge is owned by the caption line.

## What a student can do

**2a Live class**
- Tap anywhere on the board → chrome tucks away (header slides up, thumb rail slides right). A slim tab appears on the right edge; tapping it brings the chrome back.
- **Hold Interrupt** to speak. The button fills amber, its mic glyph crossfades to live level bars, the teacher's audio wave drops to a slow quiet drift, and the caption line switches to **Listening**. Release and everything returns. There is no confirm step, no "done" button, no modal.
- **CC** toggles the caption line. When it is off the paper runs to the bottom edge.
- Scroll back through the board; a hairline indicator appears only while moving, and a **Jump to live** chip marks the teaching edge. Scrolling settles on the 26px rule rhythm so a written line is never left half-cut.

**2b Lesson player**
- Tap the board → chrome tucks; the dock's slot collapses so **Back to now** drops into its place rather than floating.
- Dock: play/pause · **Topics** · CC. No timestamps anywhere — this is a classroom, not a video player.
- Progress is a hairline on the very bottom edge, one segment per topic: done in quiet ink, current filling in amber.
- **Topics** slides in from the right edge to edge: ✓ done, ● now, ○ upcoming. Tap to jump; the hairline updates.
- The circular **back** button, top left, is the only way out — it is deliberately given a paper plate and a 40pt target because there is no End button on this screen.

## Notes for the rebuild
- Both boards scroll; the live board follows the teacher's writing and only auto-scrolls while the student is at the live edge.
- The caption line and the listening state share one strip and are mutually exclusive — build them as one component with two states, not two overlays.
- Chrome visibility, captions, talking, follow-live, playing, and drawer are the six pieces of state in these screens. Nothing else animates on a timer except the decorative writing indicator.
- Fonts: Anek Latin (UI), Anek Devanagari (Hinglish captions), Kalam (handwriting on the board).
