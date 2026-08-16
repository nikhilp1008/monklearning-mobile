# Handoff: MonkLearning Mobile App — Clickable Prototype

## Overview
Complete clickable prototype of the MonkLearning student app (JEE/NEET prep with an AI voice teacher, "Drona" / "Vedha"). Covers the full app surface: onboarding, home, teacher-led live classroom, snap-a-doubt, practice, mock tests, progress, lessons, library (notes / doubts / session backups), and profile/account/subscription.

**Target: rebuild in React Native (Expo).** The files here are the design reference.

## About the Design Files
Everything in this bundle is a **design reference created in HTML** — a prototype showing intended look and behavior, **not production code to copy directly**. The task is to recreate these screens and flows in React Native / Expo using its idioms (React Navigation, Reanimated, expo-av / speech, etc.). Do not port the DOM, the string-matching tap router, or the innerHTML screen registry — those are prototype mechanics only.

## Fidelity
**High-fidelity.** Colors, typography, spacing, radii, copy and interactions are final design intent. Recreate the UI pixel-perfectly (portrait screens use a 390×844 pt reference viewport; landscape screens 844×390 pt). All measurements below and in the screen markup are in CSS px ≈ RN dp/pt.

## Files
- `MonkLearning App.dc.html` — **open this in a browser.** The app-only prototype: just the phone screen, no inspector chrome. Tap through it like the real app (Esc = back).
- `prototype-screens.js` — `window.ML_SCREENS`: one HTML string per portrait screen (39 screens). Each screen root carries `data-screen-label="<key>"`. This is the source of truth for every screen's exact layout, styles and copy.
- `topic-screens.js` — adds `08a Chapter selector` and `08b Topic sheet` (the topic-selected state, "08c", is produced by interaction on 08b).
- `landscape-screens.js` — landscape takeover screens: `09 Entering classroom` (landscape override), `09L Entering lesson`, `10L Live classroom`, `19L Lesson landscape`.
- `support.js` — prototype runtime only. Ignore for implementation.

Interaction logic (navigation map, sheet/slide/rotate transition rules, per-screen behaviors) lives in the `<script data-dc-script>` class at the bottom of `MonkLearning App.dc.html` — read it as the behavior spec.

## Screens / Views
Portrait screens are 390×844; landscape (classroom/lesson player) are 844×390 — the phone rotates into them.

### Onboarding
- **01 Welcome** — brand mark, value prop, `Get started` → Auth, `I already have an account` → Sign in.
- **02 Auth / 02b Sign in / 02c Reset password** — phone-first auth, Google/Apple SSO. These three are lateral siblings (segmented slide between them, header pinned).
- **03 OTP** — verify phone, `Edit`, `Resend code`.
- **04 Exam** — pick JEE Main / NEET / Foundation (single-select cards) → Continue.
- **05 Class** — Class 11 / 12 / Dropper. Also teacher pick (Drona/Vedha cards with `▶ Hear the voice` TTS preview; choice persists and renames the teacher across the whole app).

### Home
- **1a Home calm** — greeting, resume card (`Learn this with Drona`), quick actions (Snap a doubt, Practice unlimited), Today's plan row, recent Notes and Session backups with `View all →`, stats (monk score → Progress, doubts solved → Doubts, practised → Practice), avatar → Profile. Bottom tab bar (sticky): **Home · Lessons · Drona · Progress · Library**.
- **07 Plan sheet** — Today's plan bottom sheet.
- **08 Learn sheet** — legacy Learn-with-Drona sheet (kept for reference).
- **08a Chapter selector** — full page (Drona tab): subject-grouped chapter list → tapping a chapter opens 08b.
- **08b Topic sheet** — bottom sheet: two-column equal-width topic card grid, single-select (amber `#FCF4E0` fill, `#EEA31F` 1.6px border, check mark); CTA arms as `Start with <topic>`. Quiet hairline row "Can't find your topic? Just start talking" and a **From your talks** section (saved open-ended contexts) both skip topic choice → classroom.

### Classroom
- **09 Entering classroom** — dark (#16130E) landscape loading beat with the animated protractor brand mark; auto-advances to the live classroom after ~6.5s (or tap).
- **10L Live classroom** — landscape: whiteboard writes itself line-by-line (typewriter engine) with follow-scroll, live caption strip, chrome (top bar + right control dock) auto-hides after ~4.2s and toggles on board tap, `Raise hand` → listening overlay, pause, report-a-mistake right drawer with toast, `End` → summary.
- **11 Session summary** — recap, `Save board to notes`, `Go to dashboard`.
- (Portrait live-session variants **10 / 10b / 10c / 10d** exist in `prototype-screens.js` as reference; superseded by 10L.)

### Snap a doubt
- **12 Snap capture** — camera UI; shutter/gallery → **13 Snap solved** — solution card, `Snap the next one`, `Ask a follow-up` → classroom, `Report a mistake`.

### Practice & Mock
- **14 Practice unanswered / 14b revealed** — MCQ; picking an option reveals answer + `Go deeper with Drona →`. **14c Chapter focus** — sheet to scope practice.
- **15 Mock locked / 15a ready / 15b in-test / 15c palette / 16 paused** — mock test flow; in-test has a live countdown clock, question palette sheet, `Save & exit`.

### Progress
- **17 Progress** — monk score, strengths/weak areas, `Practice this`, `Revise with Drona`, `Start timed drill`.
- **26 Report sheet** — report-a-mistake bottom sheet (reason chips, `Send report`).

### Lessons
- **18 Lessons** — chapter list with progress; → **09L Entering lesson** (dark loading beat, auto-advance ~3.4s) → **19L Lesson landscape** — recorded lesson player: IG-style segment progress bar (80s per segment), play/pause, CC toggle, Topics right drawer (jump between segments), follow-scroll board. (Portrait **19 / 19b** kept as reference.)

### Library
- **20 Notes / 21 Doubts / 22 Sessions** — lateral tabs (Notes · Doubts · Sessions, pinned header, content slides). Detail screens: **20b Note detail** (`Talk to Drona about this →`), **21b Doubt detail**, **22b Session board** (`Save to notes`).

### Profile
- **23 Profile** → **24 Account** (`Manage →` subscription, `Sign out`) → **25 Subscription**.

## Interactions & Behavior
Navigation map: the `NAV` object in the DC script — `{ text-to-match → destination }` per screen, plus `GLOBAL` tab-bar routes (Home / Lessons / Drona→08a / Progress / Library). `'*'` = tap anywhere. `BACK` = pop history. Esc/back pops a history stack; empty stack lands on Home.

Transition language (see `kindFor`):
- **sheet** (07, 08b, 14c, 15c, 19b, 26): scrim fades in `.28s`, sheet slides up `.38s cubic-bezier(.2,.8,.25,1)`; sheet corners `24px 24px 0 0`.
- **slide**: lateral siblings slide content `±46px, .28s cubic-bezier(.25,.75,.3,1)`; segmented header stays pinned.
- **drill**: content rises `12px → 0, .32s`, cascade max 3 × 40ms.
- **back**: settle from `-7px, .24s ease-out`.
- **swap** (same nav tag): `.12s` fade.
- **rotate**: entering/leaving landscape rotates the phone `±90° + scale .62 → 1`, `.85s` in / `.7s` out.
- Bottom tab bar is sticky with `rgba(252,250,244,.97)` + 10px blur.

Per-screen behavior specs (implement natively): whiteboard typewriter engine (~26ms/char, ~25% double-step) with follow-scroll and jump-to-live chip; caption loop (~48ms/char, pause between loops); auto-hiding classroom chrome; mock countdown (1s tick, hh:mm:ss); topic sheet single-select + CTA arming; teacher choice persisted (localStorage in prototype → AsyncStorage) and swapping "Drona"→"Vedha" everywhere; TTS voice preview (higher pitch female for Vedha, lower male for Drona, en-IN preferred).

## State Management
- `currentScreen` + history stack (React Navigation gives this for free).
- `teacher: 'drona' | 'vedha'` — persisted, app-wide name substitution.
- Per-screen local state: selected topic, selected chapter, mock timer, board write progress, chrome visibility, playing/paused, CC on/off, drawer open.
- No real data fetching in the prototype; all content is static sample data embedded in the screens.

## Design Tokens
Colors:
- Ink `#1C1A16` · body text muted `#57534B` · faint `#9C988C`
- Paper `#FCFAF4` · welcome paper `#FFFEFB` · sand background `#EFE9DA` · card white `#FFFFFF`
- Amber (brand accent) `#EEA31F` · amber tint `#FCF4E0` · amber text `#9A6A12` / `#7A5410`
- Red accent `#DD4433` · success green `#1C9B57` · dark classroom `#16130E`
- Hairlines `rgba(28,26,22,.12)` · ruled-paper lines `rgba(28,26,22,.055)`

Typography:
- Primary: **Anek Latin** (400/500/600/700/800) — all UI.
- **Anek Devanagari** (500/600) — Hindi glyphs.
- **Kalam** (400/700) — handwritten accents (board notes, margin scribbles), often rotated ~-1°.
- Overline labels: 800, 10px, letter-spacing .14em, uppercase. Body 13–14px, titles 17–22px, status bar time 700/14px.

Shape & depth:
- Phone screen radius 28px; cards 13–14px; sheets 24px top corners; buttons/pills 99px (full round).
- Buttons: primary = ink `#1C1A16` fill, `#FCFAF4` text, 700, h 40–52px; secondary = white fill, 1.5px ink border.
- Selected card: `1.6px solid #EEA31F` on `#FCF4E0` + soft amber shadow `0 8px 18px -14px rgba(238,163,31,.8)`; unselected: `1px solid rgba(28,26,22,.12)` on white.
- Ruled-paper motif: `repeating-linear-gradient` hairlines every 41px (welcome) / 26–27px (boards).

Motion: see keyframes in `MonkLearning App.dc.html` `<style>` (mlRise, mlSheetUp, mlSlideInR/L, mlSettle, mlFade, mlToLand/mlToPort, ptTick/ptOuter/… protractor loader, mlWave, mlProg).

## Assets
No image assets — every visual (brand protractor mark, icons, avatars, boards) is inline SVG / CSS inside the screen markup. Fonts load from Google Fonts (Anek Latin, Anek Devanagari, Kalam); bundle them locally in Expo (`expo-font`).
