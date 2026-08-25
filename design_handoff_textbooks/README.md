# Handoff: MonkLearning Textbooks (Subject → Chapter → Reader)

## Overview
A phone-first interactive textbook feature for MonkLearning (JEE/NEET prep, Class 11–12). The student picks a subject, picks a chapter, and reads the chapter in an interactive reader built from a fixed system of content "blocks": concepts, definitions, formulas, tap-to-explore diagrams, step-by-step derivations, swipeable solved examples, attempt-first MCQs, practice cards, common-mistake warnings, pro-tips and a checkpoint snapshot per topic.

The goal of this handoff: **rebuild the three screens in React Native**, driven entirely by chapter-content data files, so new chapters/subjects can be generated from provided textbooks without touching screen code.

## About the Design Files
The files in this bundle are **design references created in HTML** — working prototypes showing intended look and behavior, not production code to copy directly. Your task is to **recreate these designs in React Native** using your project's established patterns and libraries (e.g. Reanimated/Gesture Handler for the swipe cards, a bottom-sheet lib for the topic picker, SVG via react-native-svg). Open the `.dc.html` files in a browser to interact with the real thing.

- `Textbooks Final - Full Flow.dc.html` — **the source of truth.** All three screens wired together (Subjects → Chapters → Reader + topic bottom sheet).
- `Ch1 Sets - Complete Chapter v2.dc.html` — the standalone reader (same reader, kept as reference).
- `ch1-sets-chapter.js` — the complete Chapter 1 (Sets) content in the block schema (`window.CH1SETS`). This is real, editorially finished content; ship it as the first chapter.
- `support.js` — prototype runtime only. Ignore; needed only so the HTML files open in a browser.
- `CONTENT_SPEC.md` — **the authoring spec.** Schema of every block type + authoring rules, so new chapters can be generated from textbook sources into the same shape.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy and interactions are final. Recreate pixel-perfectly. (The phone frame, status bar and the caption above the phone in the HTML are presentation chrome for design review, not part of the app.)

## Screens / Views

### 1. Subjects
- **Purpose:** entry point of the Textbooks feature; pick a subject.
- **Layout:** page title "Textbooks" (Anek Latin 700, 32px, letter-spacing −0.03em), padding 14px 26px 6px. Below: a 2×2 grid of subject tiles, columns 1fr/1fr, fixed row height 212px, gap 14px, padding 18px 26px. Grid is top-aligned; tiles do NOT stretch to fill the screen.
- **Subject tiles** (radius 18px, padding 18px, icon top-left 34px, name bottom-left Anek 700 21px):
  - Physics — bg `#FCF4E0`, border `rgba(238,163,31,.45)`, atom icon stroke `#9A6A12`, nucleus dot `#DD4433`
  - Chemistry — bg `#FBEBE4`, border `rgba(221,68,51,.4)`, flask icon stroke `#A93425`
  - Mathematics — bg `#EAF0EA`, border `rgba(47,107,87,.35)`, sigma icon stroke `#2F6B57`
  - Biology — bg `#EBF0E4`, border `rgba(74,112,48,.35)`, leaf icon stroke `#4A7030`
- Tap feedback: scale(.97), transition 150ms. Each tile opens the Chapters screen for that subject.
- No taglines, no exam toggle, no promo cards. The screen is intentionally sparse.

### 2. Chapters
- **Purpose:** pick a chapter within the subject and class.
- **Header row** (padding 10px 20px 0): back arrow left (44×44 hit target, 16px chevron, ink `#1C1A16`); right: **Class segmented control** — pill track bg `#EFE9DA`, padding 3px, two segments "Class 11" / "Class 12" each 74×30px, Anek 700 13px; sliding thumb 74×30px radius 99 bg `#1C1A16`, thumb slides 0→74px with 280ms cubic-bezier(.3,.8,.3,1); active label `#FFFEFB`, inactive `#9C988C`.
- **Subject name** below (Anek 700 33px, letter-spacing −0.03em, padding 6px 26px 16px). No subtitle/annotation under it.
- **Chapter list:** scrollable, bg `#FFFEFB`, top border `rgba(28,25,20,.12)`. Row: padding 15.5px 26px, bottom border `rgba(28,25,20,.07)`, gap 16; chapter number (Georgia 18px `#C0B8A6`, right-aligned 26px col), title (Anek, 17px), then status:
  - **Available chapter** (currently only Mathematics → Class 11 → "Sets"): weight 700, "READY" badge (mono 9.5px 700 `#9A6A12`, bg `#FCF4E0`, border `rgba(238,163,31,.5)`, radius 99, padding 4px 9px) + chevron `#9A6A12`. Pressed bg `#F6F1E4`. Opens the Reader.
  - **Unavailable chapter:** row opacity .5, weight 500, "SOON" label (mono 9.5px 700 `#C0B8A6`), not tappable.
- Rows animate in with a 26ms stagger (fadeUp 320ms).
- Chapter titles per subject/class are listed in the prototype's `chapters()` data (standard NCERT chapter lists).

### 3. Reader (Chapter 1 · Sets)
- **Purpose:** read one topic at a time; each topic is self-contained (no scroll-through into the next topic).
- **Top bar** (padding 6px 20px 10px, bottom border `rgba(28,25,20,.1)`): back to Chapters (44×44), chapter title "Sets" (Anek 700 15px) over "Chapter 01 · Mathematics" (12px 700 `#9C988C`), right: scroll percentage (mono 11px 700 `#9C988C`). A 2px amber `#EEA31F` progress line sits on the bar's bottom edge, width = scroll % of the current topic.
- **Content scroll area:** bg `#FFFEFB`, horizontal padding 24px. Topic header: "TOPIC 02 / 05" kicker (mono 10px 700 `#9C988C`, letter-spacing .12em) + topic title (Anek 700 25px), bottom border. Then the topic's blocks, vertical gap 20px. Block-by-block visual spec: see `CONTENT_SPEC.md` (it documents both data shape and rendering for all block types).
- **Topic change animation:** content slides in 320ms cubic-bezier(.2,.7,.3,1) — from the right when moving forward, from the left when moving back; scroll resets to top; progress resets to 0.
- **Bottom navigation pill** (floating, full-width inside 16px margins, bg `#FFFFFF`, border `rgba(28,25,20,.12)`, radius 99, padding 6px 8px, shadow 0 8px 26px rgba(28,26,22,.12)):
  - Left: "Topics" button (list icon + label, Anek 700 13.5px) — opens the topic sheet.
  - Center: prev-topic chevron (44×40) · current position pill "2/5" (bg `#F6F1E4`, radius 99, min-width 64, Anek 700 14.5px, the "/5" part `#9C988C` weight 600; tapping it also opens the sheet) · next-topic chevron. Chevrons disabled at ends (stroke `#D8D2C2` vs `#1C1A16`).
  - Right: an 86px spacer keeps the center group optically centered against the Topics button.
- **Topic sheet** (half-screen bottom sheet): dim overlay rgba(28,26,22,.3) fade 200ms; sheet bg `#FFFEFB`, top radius 22, slides up 280ms cubic-bezier(.2,.7,.3,1), grabber 40×4px. Header "IN THIS CHAPTER · SETS" (mono 10px 700 `#9C988C`). Rows: topic number (Georgia 16px) + title (15.5px); current topic: bg `#F6F1E4`, number `#9A6A12`, weight 700, right label "READING" (mono 9.5px `#9A6A12`). Tap a row → jump to that topic, close sheet.

## Interactions & Behavior
- **Card carousels** (solved examples, MCQs, practice): horizontal swipe, card width 306px, gap 12px (step 318px), drag follows finger; release beyond ±60px advances/retreats one card, otherwise springs back (340ms cubic-bezier(.22,.85,.3,1)); rubber-band resistance ×0.3 past the ends. Inactive cards: opacity .55, scale .98. Dot indicators below (8px): current `#1C1A16`, solved/revealed `#EEA31F`, rest `rgba(28,25,20,.18)`. "← SWIPE" hint (mono 9.5px `#C0B8A6`) shows only on the first card when more exist.
- **MCQ (attempt-first):** tapping a wrong option marks it ✗ (red border `rgba(221,68,51,.5)`) and shows a "NOT QUITE. HERE'S THE TRAP" nudge card specific to that option; the student keeps trying. The correct option locks the question (✓, ink border, bg `#F6F1E4`) and reveals the "SOLVED ✓" solution card. No score is kept anywhere.
- **Practice cards:** question + "Check answer" ghost pill button (36px, border `rgba(28,25,20,.22)`); tap reveals the answer panel (bg `#F6F1E4`).
- **Derivation:** each step row is an accordion; tap toggles the "why" explanation under that step (only one open at a time; open row bg `#FAF8F2`, chevron rotates 180°).
- **Diagrams:** interactive SVG/nested-box figures with chip selectors below (30px pill chips, mono 10.5px; selected: bg `#1C1A16` fg `#FFFEFB`); each selection re-highlights the figure (250ms transitions) and swaps the caption below. Six diagram kinds exist — see CONTENT_SPEC.md.
- **Exam hook:** collapsed accordion at the top of topic 1 only ("WHY THIS MATTERS IN THE EXAM"); tap to expand.
- **Screen transitions:** forward = slide in from right, back = slide in from left (260ms cubic-bezier(.2,.7,.3,1)).
- Reveals (nudge/solution/answer/why) animate with fadeUp 200–220ms.
- All tap targets ≥ 44px on at least one axis.

## State Management
- `screen`: subjects | chapters | reader (+ back-direction flag for transition direction)
- `subject`, `classLevel` (11 | 12)
- Reader: `activeTopic` (index), `scrollPct`, `sheetOpen`
- Per-block interaction state, keyed by `topicIndex-blockIndex` (survives topic switches within a session):
  - `mcq[uid_cardIndex]` → { pick, solved }
  - `practice[uid_cardIndex]` → revealed boolean
  - `derivation[uid]` → open step index | null
  - `diagram[uid]` → selected chip index
  - `carouselPage[uid]` → current card index
  - `hook[uid]` → expanded boolean
- Content loading: reader reads a single chapter-content object (see CONTENT_SPEC.md). In RN, load per-chapter JSON/TS modules; the reader must be 100% content-driven.
- Deliberately **no** persistence of reading progress, no reading-time estimates, no streaks/gamification.

## Design Tokens
Colors:
- Ink `#1C1A16` · body-muted `#4A453D` · secondary `#57534B`
- Gray `#9C988C` · light gray `#C0B8A6` · disabled `#D8D2C2`
- Paper `#FFFEFB` (reader bg) · white `#FFFFFF` (cards) · desk `#EFE9DA` (app/canvas bg) · tint `#F6F1E4` (pressed/selected/answer panels) · faint `#FAF8F2`
- Amber `#EEA31F` (progress, highlights, solved dots) · amber-dark `#9A6A12` (labels on light) · amber wash `rgba(238,163,31,.35)` (Venn shading) · amber tint `#FCF4E0`
- Red `#DD4433` (mistakes ✗, wrong marks) · red-dark `#A93425` · red tint `#FBEBE4`
- Subject greens: math `#EAF0EA`/`#2F6B57`, bio `#EBF0E4`/`#4A7030`
- Borders: `rgba(28,25,20,.06/.07/.1/.12/.14/.18/.22)`

Typography:
- **Anek Latin** (400–800) — all UI and body text. Body 16.5px/1.66; block body 14–15px/1.55–1.6; titles 25–33px 700, letter-spacing −0.02 to −0.03em.
- **Kalam** (400/700) — handwritten voice: think-alouds, pro-tips, snapshot aids.
- **Georgia / serif italic** — all math expressions, formulas, set symbols.
- **ui-monospace / platform mono** — kickers and labels: 9.5–11px, 700, letter-spacing .06–.12em, always uppercase.

Radii: 18 (tiles) · 14 (cards) · 12 (content blocks) · 10–11 (options/panels) · 8 (answer chips) · 99 (pills). Spacing: screen gutter 24–26px; block gap 20px; card padding 14–16px.

Content rules baked into the design: **no em dashes anywhere** (UI or content); no emoji; minimal color, at most the amber/red accents shown.

## Assets
No raster assets. All icons are inline SVG (16px chevrons/back arrows stroke-width 1.8–1.9 round caps; 40px subject icons stroke-width 1.8–1.9) — recreate with react-native-svg. Fonts: Anek Latin + Kalam from Google Fonts.

## Files
- `Textbooks Final - Full Flow.dc.html` — full flow, source of truth
- `Ch1 Sets - Complete Chapter v2.dc.html` — standalone reader reference
- `ch1-sets-chapter.js` — Chapter 1 (Sets) content, block schema
- `CONTENT_SPEC.md` — block system + authoring spec for generating further chapters
- `support.js` — browser runtime for the prototypes (ignore for RN)

Textbook source PDFs are intentionally **not** included; they will be provided separately per subject when generating new chapter content.
