# Handoff: MonkLearning profile screen (22C)

## Overview
The profile screen: who the student is, which teacher and language they are learning with, which exam they are preparing for, the legal/account links, a rate-the-app block, and log out. One scrolling screen, no tabs. Teacher and language are the only interactive choices on the page — everything else is navigation.

## About the design files
`design/Profile.dc.html` is a **design reference authored in HTML** — a working prototype of look and behaviour, not production code. `support.js` is the prototype runtime that renders it. The task is to **rebuild this screen in the app's own environment** (React Native / SwiftUI / Kotlin / React web — whatever the app already uses), following its existing component and state patterns. Open the HTML in a browser to see the animations and tap the teacher / language rows.

## Fidelity
**High fidelity.** Colours, type, spacing and motion are final. Frame is 430 × 932 pt (iPhone 14/15 Pro logical size); the whole content area below the status bar scrolls.

## Screen anatomy (top to bottom)

### 1. Status bar + title
- Status bar: `1:26` left, battery/signal glyphs right, 15px / 700, ink `#1C1A16`, padding `20px 30px 0`.
- Back affordance: 40 × 40 circle, `1px solid rgba(28,26,22,.16)`, chevron `‹` 18px. Title "Profile" 26px / 700 / −.03em. Row padding `22px 26px 0`, gap 14px.

### 2. Identity
- Name "Aarav Sharma" 34px / 700 / −.035em / lh 1.05.
- Sub "Class 12 · with **{teacher}** since June" 16px `#5F5A50` (teacher name is dynamic).
- Leader row: "Exam" 15px `#8C867A` + dotted leader `1px dotted rgba(28,26,22,.26)` + "JEE Main" 17px / 700 ink. Rules `1px solid rgba(28,26,22,.14)` above and below, 11px vertical padding.
- No exam year anywhere on this screen.

### 3. YOUR TEACHER — the one piece of theatre on the page
Section label 13px / 800 / ls .13em `#8C867A`. Two full-width rows, gap 10px.

**Unselected row:** radius 20px, `1px solid rgba(28,26,22,.14)`, white, padding `16px 18px`. Name 21px / 700 / −.02em `#8C867A`, trait 15px `#B4AC9B`, right side "choose" 15px / 700 `#B4AC9B`.

**Selected row** — a rotating amber gradient ring around the card plus a soft bloom inside:
- Outer: `position:relative; border-radius:22px; padding:2px; overflow:hidden; background:#FFFFFF` (the 2px padding is what reveals the ring).
- Ring layer: absolutely positioned oversized square (`left:-28%; top:-160%; width:156%; height:420%`) filled with
  `conic-gradient(from 0deg, rgba(238,163,31,0) 0deg, rgba(247,215,121,.35) 70deg, #EEA31F 130deg, rgba(247,215,121,.5) 180deg, rgba(238,163,31,0) 280deg)`
  animated `spin 3.6s linear infinite` (`@keyframes spin{to{transform:rotate(360deg)}}`). It runs continuously while the row is selected.
- Inner face: `border-radius:20px; padding:16px 18px; background-color:#FFFFFF` plus
  `background-image: radial-gradient(130% 180% at 0% 50%, rgba(238,163,31,.26) 0%, rgba(238,163,31,.06) 48%, rgba(255,255,255,0) 78%)`,
  entering with `bloom .55s cubic-bezier(.2,.75,.2,1)` (`@keyframes bloom{from{opacity:0;transform:scale(.985)}to{opacity:1;transform:none}}`).
- Content: name 21px / 700 ink, trait 15px `#5F5A50`, right side "your teacher" in **Kalam 700, 17px, `#8F5E0B`**, entering with `chipIn .4s .18s ease` (`@keyframes chipIn{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:none}}`).
- No avatar, icon or symbol for the teacher — deliberately name + trait only.
- Teachers: **Drona** — "steady, exacting"; **Vedha** — "warm, patient". Default selected: Drona.
- On tap the whole selected row remounts, so the bloom and the "your teacher" line replay; the ring keeps spinning until another teacher is chosen.

### 4. TEACHING LANGUAGE
Same label style. Two pills side by side, gap 10px, height 52px (inner 48px), radius 16px outer / 14px inner.
- Unselected: `1px solid rgba(28,26,22,.14)`, white, 18px / 600 `#5F5A50`.
- Selected: identical ring + bloom construction as the teacher row, but the ring layer is `left:-30%; top:-260%; width:160%; height:640%` and the inner bloom is `radial-gradient(120% 200% at 50% 120%, rgba(238,163,31,.28) 0%, rgba(238,163,31,.07) 55%, rgba(255,255,255,0) 82%)`; label 18px / 700 ink.
- Options: **Hinglish**, **English**. Default: Hinglish.
- Note below, 15px `#8C867A`: "**{teacher}** speaks & teaches in this language. Switch anytime — even mid-class."

### 5. YOUR EXAM
- Label row: an 18 × 2px red rule + "YOUR EXAM" 13px / 800 / ls .13em `#DD4433`; right side "Manage ›" pill, 15px / 700, `1px solid rgba(28,26,22,.18)`, radius 99px, padding `6px 14px`.
- "JEE Main" 26px / 700 / −.03em.
- Subject chips: "Physics", "Chemistry", "Maths" — 15px / 600, background `#F7F4EC`, radius 99px, padding `7px 15px`, gap 8px.

### 6. Links list
Four rows, 18px / 600 ink, chevron `›` 16px `#B4AC9B`, 15px vertical padding, `1px solid rgba(28,26,22,.12)` above each and below the last: **Personal information · Privacy policy · Terms & conditions · About us**.

### 7. Rate the app
Dark card, margin `30px 26px 0`, radius 30px, padding `30px 22px 24px`, centred.
- Background `radial-gradient(120% 90% at 50% 0%, #2A251C 0%, #1C1A16 62%)`, plus a top glow: 280 × 200 ellipse at `top:-70px`, `radial-gradient(closest-side, rgba(238,163,31,.4), rgba(238,163,31,0))`.
- "INDIA'S FIRST AI TEACHER APP" 13px / 800 / ls .14em `#C9A253`.
- "Give us a rating" 34px / 700 / −.038em `#FBF9F2`.
- "Enjoying MonkLearning so far?" 17px `rgba(251,249,242,.62)`.
- Five stars, 40 × 40, filled with a vertical gradient `#FFE49B → #EEA31F`, `filter: drop-shadow(0 3px 10px rgba(238,163,31,.5))`, gap 8px. (Star path is in the prototype; it is a rounded-corner five-point star, not a sharp-point glyph.)
- Button: full width, 58px, radius 99px, `linear-gradient(180deg,#F5CB60,#EEA31F)`, label "Rate MonkLearning" 19px / 700 ink. Opens the store review sheet.

### 8. Log out
Full width, 54px, radius 16px, white, `1px solid rgba(221,68,51,.4)`, label 18px / 600 `#DD4433`.

## State
```
teacher : 'Drona' | 'Vedha'      // default 'Drona'
language: 'Hinglish' | 'English' // default 'Hinglish'
```
Both persist immediately on tap (no save button) and apply to the next class — including mid-class, per the copy. `teacher` also renders into the identity sub-line and the language note. Everything else on the screen is read-only or navigation.

## Motion
| Name | Definition | Used on |
|---|---|---|
| `spin` | `to { transform: rotate(360deg) }`, 3.6s linear infinite | selected teacher / language ring |
| `bloom` | opacity 0→1, scale .985→1, .55s `cubic-bezier(.2,.75,.2,1)` | selected row inner face |
| `chipIn` | opacity 0→1, translateX −8px→0, .4s ease, delay .18s | "your teacher" line |

Implementation note: the ring is a rotating conic gradient clipped by the parent's `overflow:hidden` and covered by the inner white face — a border-gradient trick. On platforms without conic gradients (older RN), use a rotating gradient image or a `MaskedView` sweep; keep the 3.6s period and the amber ramp.

## Design tokens
| Token | Value |
|---|---|
| ink | `#1C1A16` |
| ink-80 | `#5F5A50` |
| ink-55 | `#8C867A` |
| ink-30 | `#B4AC9B` |
| surface | `#FFFFFF` |
| surface-warm | `#F7F4EC` (subject chips) |
| card-ink | `#1C1A16` on `#2A251C` radial (rating card) |
| amber | `#EEA31F` |
| amber-light | `#F7D779` / `#FFE49B` (star + ring highlights) |
| amber-dark | `#8F5E0B` (Kalam accent, "your teacher") |
| amber-muted | `#C9A253` (label on dark) |
| red | `#DD4433` (YOUR EXAM label, Log out) |
| hairline | `rgba(28,26,22,.12)` rules · `rgba(28,26,22,.14)` borders · `rgba(28,26,22,.18)` pill border |
| leader | `1px dotted rgba(28,26,22,.26)` |

**Type** — Anek Latin 400/500/600/700/800; **Kalam 700** for the handwritten accent ("your teacher") only.
| Role | Size / weight |
|---|---|
| Student name | 34px / 700 / −.035em |
| Screen title | 26px / 700 / −.03em |
| Rating headline | 34px / 700 / −.038em |
| Exam name | 26px / 700 / −.03em |
| Teacher name | 21px / 700 / −.02em |
| Link row | 18px / 600 |
| Button | 18–19px / 600–700 |
| Body / trait / note | 15–17px / 400–600 |
| Section label | 13px / 800 / ls .13em uppercase |

**Geometry** — screen side padding 26px; row radius 20px (22px on the ringed outer); pill radius 99px; card radius 30px; buttons 54–58px tall; section gaps 26–30px; row vertical padding 15–18px.

## Assets
No images. All marks are inline SVG (status-bar glyphs, chevrons, the exam-document icon where used, the five stars). Fonts come from Google Fonts (`Anek Latin`, `Kalam`) — bundle them locally for production. Teacher rows intentionally carry no artwork.

## Files
- `design/Profile.dc.html` — the 22C screen, interactive (tap teacher and language rows).
- `design/support.js` — prototype runtime; not for production.

Related handoff already delivered: `design_handoff_onboarding_flow` (the onboarding screens) — same palette, type and motion vocabulary; reuse those primitives.
