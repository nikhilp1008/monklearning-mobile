# Spec: MonkLearning landscape classroom

Frame **844 × 390 pt**, landscape, iPhone 14/15 Pro logical size. All numbers are points at 1×.

## Palette

| Token | Value | Used for |
| --- | --- | --- |
| ink | `#1C1A16` | body text, primary buttons, formula type |
| ink muted | `#57534B` | secondary text, rail labels |
| ink faint | `#9C988C` | metadata, handwriting annotations |
| ink ghost | `#C0BBAD` / `#C7C1B2` | upcoming topics, quieted wave |
| paper | `#FCFAF4` | floating chrome plates |
| board | `#FFFFFF` | the page itself, caption strip |
| rule | `rgba(28,26,22,.055)` | ruled lines, every 26px |
| margin rule | `rgba(221,68,51,.32)` | the red vertical margin at x = 44 |
| amber | `#EEA31F` | live accents, speaking state, progress fill |
| deep amber | `#9A6A12` | CC marks, small labels on paper |
| amber wash | `#FCF4E0` | CC active pill, diagram fills |
| red | `#DD4433` | handwriting headings, End button |
| green | `#1C9B57` / `#157A45` | live dot, done marks, hand-drawn maths |
| dark chrome | `#211C15` | jump-to-live chip |
| hairline | `rgba(28,26,22,.14)` | 1px borders on floating plates |

## Type

- **Anek Latin** — all UI. 800 for formulas and labels, 700 for chips and titles, 600/400 for body.
- **Anek Devanagari** — Hinglish caption line, 14.5px.
- **Kalam** — the teacher's handwriting: headings 17px, asides 14.5–15px, diagram labels 11–14px, slight rotation (−0.3° to −0.4°).

Board text sizes: heading 17, formula 17 / 15.5, body 13.5, caption 14.5.

## The 26px rhythm (important)

The paper is ruled with `repeating-linear-gradient(transparent 0 26px, rgba(28,26,22,.055) 26px 27px)`.

**Every board text element uses `line-height: 26px` and `margin: 0`**, and diagrams are whole multiples of 26 (156 = 6×26, 130 = 5×26). Board padding is `52` top and bottom (2×26). This is what makes the writing sit *on* the rules instead of drifting between them, and it is why scroll positions never bisect a line. Keep it in RN: line height 26, no paragraph margins, illustration heights on the grid.

Scroll settle: when scrolling stops, `scrollTop` is rounded to the nearest multiple of 26 (smooth).

## Board geometry (both screens)

| Item | Value |
| --- | --- |
| Board | fills the screen: white, ruled, no border, no radius, no inset |
| Board padding | `52` top · `52` bottom (2b: `104`) · `56` left · `116` right (2a, clears the thumb rail) / `40` right (2b) |
| Red margin rule | `x = 44`, width 1.4, full height |
| Scroll indicator | 3px pill, right 6, `rgba(28,26,22,.28)`, fades in only while moving, out after 900ms |
| Caption strip | full width, height 54, white, no border, `box-shadow: 0 -14px 22px -16px rgba(28,26,22,.18)` (a lift, not a line); text inset left 56, right 28, bottom padding 10 |
| Caption content | `CC` mark 9.5/800 deep amber + one Hinglish line, ellipsised, blinking caret |

No fades or scrims anywhere — the notebook is fully visible at every edge.

## 2a Live class

**Header** (top 14, left 56, right 26, gap 12) — amber dot + chapter name 13/700 · `LIVE` 10/800 tracked, green blinking dot · spacer · `Report` 12/700 muted with flag glyph · `End` pill, `#DD4433` fill, white 12/700, radius 99, padding 6/13.

**Thumb rail** (right 12, vertically centred on the screen, not the board): paper plate `rgba(252,250,244,.94)`, 1px hairline, radius 99, padding 13/9, blur 10, gap 12. Contents top → bottom:
1. Teacher audio wave — four 2.5×12 amber bars, `mlWave 1s` staggered 0/.18/.36/.54s
2. 22×1 hairline divider
3. **Interrupt** button — 46×46, ink fill, mic glyph 18px; contains a glow layer, an inset pulse ring (inset 5), and a hidden 3-bar level meter
4. Label `INTERRUPT` 8.5/800 tracked, **width pinned to 54** so the plate cannot resize when the text changes
5. hairline divider · mute 30×30 · `CC` 30×30 (amber wash when on, transparent + faint ink when off)

**Hold-to-speak** (press and hold, release to stop — no confirm, no popup):
- button fill ink → `#EEA31F`, glyph colour → ink, 0.3s `cubic-bezier(.3,.8,.3,1)`
- radial glow layer at `50% 118%` fades in; inset ring pulses `mlPulse 1.5s` (opacity only — nothing scales, nothing leaves the 46px circle)
- mic glyph crossfades out (scale .8) while the 3-bar level meter fades in (scale 1), `mlLevel 1.05s` staggered
- label → `SPEAKING` in deep amber
- teacher wave **keeps moving but changes character**: keyframes swap to `mlIdleWave 2.6s ease-in-out` (amplitude .16 → .34) and colour drops to `#C7C1B2`
- caption strip cross-fades to the **Listening** state: three amber level bars + `Listening` 13.5/700 ink. If CC was off the strip opens for the duration of the hold.
- the Jump-to-live chip is suppressed while holding so bottom centre has one owner

**Tuck / restore:** tap the board → header `translateY(-74)` + fade, rail `translateX(96)` + fade, 0.35s. A 19×74 tab appears flush on the right edge (radius 12 0 0 12, paper plate, deep amber chevron) and restores the chrome. The tab lives *outside* the tappable board so the two taps never fight.

**Jump to live:** dark chip `#211C15`, radius 99, padding 8/16, 12/700, amber ↓, bottom 14, centred; shown only when the student is not at the live edge.

**Writing indicator:** amber 8×14 block, blinking, + `Writing…` in Kalam 12 faint. The reference reveals later lines every 2600ms to simulate live writing — that is prototype dressing, not a feature.

## 2b Lesson player

**Header** (top 14, left 52): circular **back** button 40×40 — paper plate, 1px hairline, blur, shadow `0 14px 30px -20px`, ink chevron 17px — then `Kinematics` 14/700 with `Physics · Class 11` 11.5/600 faint. No End button on this screen, no clock.

**Dock stack** — one bottom-centred column at bottom 18: `Back to now` chip, then a collapsing wrapper (`max-height 64`, `margin-top 12`) holding the dock. Tucking collapses the wrapper so the chip drops into the dock's place instead of hanging in space; the chip is therefore always exactly 12pt above the dock, in both states and at any caption setting.

**Dock:** paper plate, hairline, radius 99, padding 6/14/6/6, blur 10, gap 12 — play/pause 44×44 ink circle · `Topics` 12.5/700 with 13px menu glyph · `CC` 30×30.

**Progress hairline:** flush on the bottom edge of the board, full width, 5 segments, 2.5px, gap 3. Done `rgba(28,26,22,.3)`, current fills amber (`mlProg`), upcoming `rgba(28,26,22,.08)`. Dims to 45% when chrome is tucked. No timestamps.

**Topics drawer:** 272 wide, top-to-bottom flush right, `rgba(252,250,244,.98)`, shadow `-18px 0 40px -24px`, slides `translateX(105% → 0)` 0.35s `cubic-bezier(.25,.75,.3,1)`; scrim `rgba(22,19,14,.3)`. Rows: 12.5px label, current row on `#FCF4E0` with `Now playing` 10/700 deep amber, ✓ green / ● amber / ○ `#C0BBAD`. Footer: `Tap a topic to jump — your progress is saved.` 11/600 faint.

## State model (six flags)

| Flag | Screen | Effect |
| --- | --- | --- |
| `chrome` | both | header + rail/dock visible; edge tab (2a) inverse |
| `captions` | both | 54pt caption strip open |
| `talking` | 2a | hold-to-speak state; forces the strip open, suppresses jump chip |
| `followLive` | both | at the live/now edge; controls the jump chip and auto-scroll |
| `playing` | 2b | play/pause glyph, progress animation |
| `drawer` | 2b | Topics drawer + scrim |

## Motion

| Transition | Duration / curve |
| --- | --- |
| chrome tuck / restore | 0.35s ease (transform) + 0.3s (opacity) |
| caption strip open / close | 0.38s `cubic-bezier(.25,.75,.3,1)` |
| dock slot collapse (2b) | 0.35s `cubic-bezier(.25,.75,.3,1)` |
| hold-to-speak fill | 0.3s `cubic-bezier(.3,.8,.3,1)` |
| glyph crossfade | 0.18s opacity / 0.26s `cubic-bezier(.3,.8,.3,1)` transform |
| drawer | 0.35s `cubic-bezier(.25,.75,.3,1)` |
| scroll indicator | 0.3s fade, auto-hide 900ms |

Keyframes: `mlWave` (audio, scaleY .35→1, 1s), `mlIdleWave` (quiet drift, .16→.34, 2.6s), `mlLevel` (level meter, .4→1, ~1s), `mlPulse` (ring opacity .15→.7, 1.5s), `mlBlink` (carets, 1s steps), `mlProg` (segment fill).

## Touch targets
Interrupt 46, play/pause 44, back 40, edge tab 19×74 (thumb-reachable strip, not a primary control), CC / mute 30 with the surrounding plate padding making the effective target ~44.
