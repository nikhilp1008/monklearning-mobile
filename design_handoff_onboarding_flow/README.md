# Handoff: MonkLearning onboarding flow (v2)

## Overview
Seven-frame onboarding for the MonkLearning app (JEE / NEET prep). Two photographic welcome screens set the promise, then a phone-first, password-free sign-in (number and OTP on the same screen), a short details form, exam selection with a live syllabus summary, and class selection. There is no sign-up / sign-in fork and no Google/Apple option — a returning number is recognised at the OTP step and goes straight to the home screen.

Flow order:
1. `01 Welcome` — the last study app for JEE and NEET exams
2. `02 A personal teacher` — AI personal teacher, just for you
3. `03a Phone number` — number entry
4. `03b Enter the OTP` — the same screen, OTP revealed below the number
5. `04 Your details` — name, email, verified phone
6. `05 Choose exam` — JEE Main / NEET UG / Both, with live chapter counts
7. `06 Pick year` — Class 11 / Class 12 / Dropper, then "Start learning"

## About the design files
The files in `design/` are **design references authored in HTML** — a prototype that shows the intended look, type, and behaviour. They are not production code to copy. The task is to **recreate these screens in the target codebase's own environment** (React Native / SwiftUI / Kotlin / React web — whatever the app already uses) with its established components, navigation, and state patterns. If no environment exists yet, pick the framework that suits the product and implement the designs there.

`design/Onboarding Final v2.dc.html` is a self-rendering HTML prototype: `support.js` is the small runtime that renders its template plus a logic class. Everything visual is inline-styled in the template; read it as a spec, not as a component library.

## Fidelity
**High fidelity.** Colours, type sizes, weights, radii, spacing, and copy are final. Recreate pixel-for-pixel at a 430 × 932 pt frame (iPhone 14/15 Pro logical size). The two welcome screens use real photography; the rest are pure white.

## Screens / views

### 01 Welcome — "The last study app for JEE and NEET exams."
- **Purpose:** state what the product is; list what is covered.
- **Layout:** full-bleed photograph (`assets/welcome-01-scan-doubt.png`, `object-fit: cover`, `object-position: 56% center`) filling the 430 × 932 frame. A single dark veil sits over the whole image so type reads at the top and bottom while the middle stays clear (the girl and the phone):
  `linear-gradient(180deg, rgba(18,15,10,.72) 0%, rgba(18,15,10,.38) 24%, rgba(18,15,10,.16) 40%, rgba(18,15,10,.52) 62%, rgba(18,15,10,.9) 84%, rgba(18,15,10,.96) 100%)`
- **Status bar:** cream `#FBF9F2`, 15px/700, padding `20px 30px 0`; battery glyphs at 90% opacity.
- **Headline:** 44px / line-height 1.02 / weight 600 / letter-spacing −.035em, colour `#FBF9F2`, `text-shadow: 0 2px 18px rgba(20,17,12,.5)`. "JEE" and "NEET" at weight 800. Padding `26px 34px 0`. Enters with `rise` (see Animations).
- **Spec list (bottom):** six rows, 15px, gap 11px, padding `30px 34px 0`. Label `rgba(251,249,242,.72)`, dotted leader `1px dotted rgba(251,249,242,.35)`, value `#FBF9F2` weight 700:
  - Exams — JEE Main · NEET UG
  - Subjects — Phy · Chem · Maths · Bio
  - Teachers — Drona · Vedha
  - Languages — English · Hinglish
  - Doubts — Unlimited, any hour
  - Practice questions — Unlimited
- **Pagination:** two pills, active `22 × 6px #FBF9F2`, inactive `6 × 6px rgba(251,249,242,.4)`, radius 3px, gap 8px.
- **Button:** full width, height 62px, radius 16px, background `#FBF9F2`, label `#1C1A16` 19px/600 — "Next". Bottom padding 34px.

### 02 A personal teacher — "AI personal teacher, just for you."
- **Purpose:** explain what the teacher does.
- **Layout:** same full-bleed treatment with `assets/welcome-02-ask-doubt.png`, `object-position: center 36%`; veil `linear-gradient(180deg, rgba(18,15,10,.72) 0%, rgba(18,15,10,.34) 20%, rgba(18,15,10,.14) 34%, rgba(18,15,10,.5) 54%, rgba(18,15,10,.9) 76%, rgba(18,15,10,.96) 100%)`.
- **Headline:** 46px, otherwise identical to screen 01. "AI personal teacher" at weight 800; line 2 "just for you."
- **Numbered list (bottom):** five rows in a `28px 1fr` grid, gap 14px, padding 13px 0, hairlines `1px solid rgba(251,249,242,.24)` above the first and under each row. Index 15px/600 amber `#F3C969`. Title 18px/600 `#FBF9F2`; subtitle 15px `rgba(251,249,242,.72)`:
  1. A class you can interrupt — On a real board, in English or Hinglish
  2. Any doubt, photographed — Taught step by step, not just answered
  3. Practice that never runs out — Every next question tuned to your level
  4. Every chapter, already taught — Open a lesson and the board comes alive
  5. One score that moves on proof — Timed silently against the exam's budget
- **Pagination:** second pill active. **Button:** "Get started", same style as screen 01.

### 03a Phone number
- **Background:** pure `#FFFFFF`. Status bar in ink `#1C1A16`.
- **Headline:** 44px/600/−.035em — "What's **your number**?" ("your number" weight 800). Sub 17px `#5F5A50` — "It is your account. No passwords to remember, ever." Padding `52px 34px 0`.
- **Input card:** radius 20px, white, border `1.5px solid #1C1A16`, focus ring `0 0 0 5px rgba(238,163,31,.18)`, padding `20px 24px`. Label "PHONE NUMBER" 13px/700/ls .1em `#8C867A`. Value 30px/600: `+91` in `#8C867A`, digits in ink, caret `2 × 32px #EEA31F` blinking.
- **Recognition line:** 15px, "Already with us" `#8C867A` + dotted leader `1px dotted rgba(28,26,22,.28)` + "Straight to your classroom" ink/700.
- **Keypad:** 3-column grid, gap 10px, keys 56px tall, radius 16px, white with `1px solid rgba(28,26,22,.14)`, digits 24px/600. Bottom-left cell empty; backspace key `#F7F4EC`, glyph `⌫` 20px `#5F5A50`.
- **Button:** height 62px, radius 16px, `#1C1A16` / `#FBF9F2`, 19px/600, label "Send OTP →".

### 03b Enter the OTP (same screen, revealed)
- **Headline:** "Enter **the OTP**." — same scale as 03a.
- **Number recap:** white card, `1px solid rgba(28,26,22,.14)`, radius 20px, padding `16px 24px`; label + `+91 98211 43307` at 24px/600; right-aligned "Change" link 16px/700 `#B97A0F`.
- **Status line:** amber 6px dot + "CODE SENT — ENTER THE SIX DIGITS" 13px/700/ls .1em `#8C867A`. Enters with `rise` (delay .1s).
- **OTP boxes:** six equal boxes, height 66px, radius 18px, white, border `1px solid rgba(28,26,22,.14)`, digit 26px/600. Filled boxes pop in at 50/130/210/290ms. Active box: border `1.5px solid #1C1A16`, ring `0 0 0 4px rgba(238,163,31,.18)`, blinking amber caret. Trailing empty box border `rgba(28,26,22,.12)`.
- **Resend:** right aligned, 16px/700 `#8C867A` — "Resend 0:24".
- **Keypad:** identical to 03a. **Button:** "Verify & continue →".

### 04 Your details
- **Headline:** "Who is **joining the class**?" + sub "Two fields, and your teacher knows what to call you."
- **Fields:** stack, gap 12px, radius 20px, padding `18px 24px`, label pattern as above.
  - FULL NAME — active card (ink border + amber ring), value 22px/500 with blinking caret. Sample: "Aarav Sharma".
  - EMAIL ADDRESS — white, `1px solid rgba(28,26,22,.14)`, placeholder `#B4AC9B` "you@example.com".
  - PHONE NUMBER — `#F7F4EC`, value `+91 98211 43307`, right side "Verified" 15px/700 `#5F5A50` with a checkmark that draws in (`draw`, .5s, delay .2s).
- **Button:** "Continue →".

### 05 Choose exam
- **Headline:** "Select **your exam**." + sub "Pick one. The syllabus below is what we teach for it."
- **Option rows** (stack, gap 10px, radius 20px, padding `16px 22px`, name 22px/700/−.02em on the left, subject tag on the right):
  - Unselected: white, `1.5px solid rgba(28,26,22,.14)`, tag 15px/600/ls .08em `#A39B8B`.
  - Selected: `1.5px solid #EEA31F`, white base plus `linear-gradient(90deg, rgba(238,163,31,.42) 0%, rgba(238,163,31,.2) 48%, rgba(238,163,31,.05) 100%)`, tag 15px/700 `#8F5E0B`. Text stays ink — deliberately no dark fill (the primary button is the only dark surface on the screen).
  - Rows: JEE Main / PCM · NEET UG / PCB · Both / PCMB. No checkmarks — the wash is the selection signal.
- **Syllabus summary (live, changes with the selection):** header "WE TEACH ALL OF <EXAM>" 13px/700/ls .1em `#8C867A` with the exam name in ink; right side count 26px/800 + "chapters" 14px `#8C867A`; hairline `1px solid rgba(28,26,22,.16)` under the header. One row per subject: name 16px `#5F5A50`, dotted leader, count 19px/700 ink, `1px solid rgba(28,26,22,.1)` under each. Footnote 15px `#8C867A`.
- **Button:** "Continue with <exam label> →".

### 06 Pick year
- **Headline:** "Which **year** are you in?" + sub "Same syllabus — only the pace changes."
- **Option rows:** same selected/unselected treatment as screen 05, name only, no tag: Class 11 · Class 12 · Dropper. Default selected: Class 12.
- **Summary:** header "YOUR CLASSROOM", then three leader rows — Exam / <exam label>, Year / <year label>, Chapters taught / <count>. All values follow the exam and year selection.
- **Button:** "Start learning →".

## Interactions & behaviour
- **Welcome 1 → Welcome 2 → phone.** Pagination pills reflect the two welcome screens only.
- **Phone → OTP on one screen.** The OTP block is revealed below the number (slide + fade), the number collapses to a recap card with a "Change" affordance. A number already in the database is recognised here: verify, then go straight to the home screen and skip screens 04–06. New numbers continue to 04.
- **Exam / year selection:** tap a row. The amber wash animates left → right on every tap (`wipe`, 550ms, `cubic-bezier(.2,.75,.2,1)`, background-size 0% → 100%, `background-repeat: no-repeat`) — re-run the animation on each selection, not once on mount. The syllabus summary numbers, the "WE TEACH ALL OF …" label, the footnote, and the CTA label all update in the same tick.
- **Onboarding runs once.** After "Start learning" the user lands on the home screen; returning users never see screens 04–06 again.

### Animations (exact)
| Name | Keyframes | Used on |
|---|---|---|
| `rise` | opacity 0 → 1, translateY 14px → 0 | headlines (.7s ease), OTP reveal (.45s, delays .1s / .16s) |
| `pop` | scale .72 → 1.06 → 1 with fade | OTP digits (.35s, staggered 50/130/210/290ms) |
| `caret` | opacity on/off, steps(1) | text carets, 1.1s infinite |
| `draw` | stroke-dashoffset len → 0 | "Verified" checkmark (.5s, delay .2s) |
| `wipe` | background-size 0% 100% → 100% 100% | selected exam / year row (.55s) |

## State management
```
onboardingStep : 1..7
phone          : string (E.164, +91 default)
otp            : string(6)          // auto-submit on the sixth digit
isReturning    : boolean            // resolved server-side from `phone`
name, email    : string
exam           : 'jee' | 'neet' | 'both'      // default 'jee'
year           : 'class11' | 'class12' | 'dropper'  // default 'class12'
```
Transitions: `Send OTP` → request code, reveal OTP block. Six digits → verify; if `isReturning`, jump to Home; else step 5 (details). `Continue` → exam. Exam row tap → set `exam`, recompute the syllabus summary. `Continue with <exam>` → year. Year row tap → set `year`. `Start learning` → persist profile, go to Home.

Data needed: phone-exists lookup, OTP send/verify, profile write, and the chapter-count table below (ship it as config so it can be updated without a release).

## Syllabus data (live counts)
Source: NTA syllabus unit/chapter counts, checked August 2026. Counts drive the summary block on screens 05 and 06.

| Exam | Physics | Chemistry | Maths | Biology | Total |
|---|---|---|---|---|---|
| JEE Main | 20 | 20 | 14 | — | **54** |
| NEET UG | 20 | 20 | — | 39 | **79** |
| Both | 20 | 20 | 14 | 39 | **93** |

Footnote strings used per exam:
- JEE Main — "Rotational Motion · Thermodynamics · Electrostatics · Coordination Compounds · Calculus — NTA syllabus, complete."
- NEET UG — "Human Physiology · Genetics · Thermodynamics · Coordination Compounds · Ecology — NTA syllabus, complete."
- Both — "Rotational Motion · Calculus · Human Physiology · Genetics · Coordination Compounds — both syllabi, complete."

Header label per exam: `JEE MAIN`, `NEET UG`, `JEE MAIN + NEET UG`. CTA label per exam: "JEE Main", "NEET UG", "both exams".

## Design tokens
**Colour**
| Token | Value | Use |
|---|---|---|
| ink | `#1C1A16` | text, primary button, active borders |
| ink-80 | `#5F5A50` | body copy |
| ink-55 | `#8C867A` | labels, meta |
| ink-40 | `#A39B8B` | inactive tags |
| ink-30 | `#B4AC9B` | placeholders |
| surface | `#FFFFFF` | all screens after the welcomes |
| surface-warm | `#F7F4EC` | backspace key, verified phone row |
| cream | `#FBF9F2` | type and buttons on photography |
| amber | `#EEA31F` | carets, selection border, focus ring |
| amber-light | `#F3C969` | list indices on photography |
| amber-dark | `#8F5E0B` | selected subject tag |
| link | `#B97A0F` (hover `#8F5E0B`) | "Change" |
| hairline | `rgba(28,26,22,.10 / .14 / .16)` | rules, borders |
| leader | `1px dotted rgba(28,26,22,.28)` (cream: `rgba(251,249,242,.35)`) | leader lines |
| veil | see per-screen gradients | photo legibility |

**Type** — Anek Latin (400/500/600/700/800); Kalam 700 is the brand handwriting accent (not used in this flow).
| Role | Size / weight / tracking |
|---|---|
| Screen headline | 44–46px / 600 with 800 emphasis / −.035em / lh 1.02 |
| Sub copy | 17px / 400 / lh 1.45 |
| Row title | 22px / 700 / −.02em |
| List title | 18px / 600 |
| Body, list sub, spec row | 15–16px / 400–700 |
| Field label | 13px / 700 / ls .1em, uppercase |
| Big number | 26px / 800 / −.03em |
| Field value | 22–30px / 500–600 |
| Button | 19px / 600 |

**Spacing / geometry** — frame 430 × 932; screen side padding 34px (26px for input and option stacks, 20px for the keypad); headline block top 52px; card radius 20px; button radius 16px, height 62px; keypad key 56px / radius 16px; OTP box 66px / radius 18px; device frame radius 44px (prototype only — the real app is edge-to-edge); stack gaps 10–12px; hairline rows 12–13px vertical padding.

## Assets
- `assets/welcome-01-scan-doubt.png` — 648 × 1162. Student scanning an organic-chemistry problem with the app; used full-bleed on welcome screen 01. Supplied by MonkLearning.
- `assets/welcome-02-ask-doubt.png` — 648 × 1162. Student speaking a doubt into the app; used full-bleed on welcome screen 02. Supplied by MonkLearning.
- The same two files are duplicated under `design/uploads/` with their original names so the prototype renders as-is.
- All icons in the flow are inline SVG (status bar glyphs, checkmark). No icon font, no third-party icon set.
- Fonts load from Google Fonts: `Anek+Latin:wght@400;500;600;700;800` and `Kalam:wght@400;700`. Bundle them locally for production.

## Files
- `design/Onboarding Final v2.dc.html` — all seven screens, side by side. Each frame carries a `data-screen-label` matching the names in this README.
- `design/support.js` — prototype runtime (renders the template + logic class). Not for production.
- `design/uploads/` — images at the paths the prototype references.
- `assets/` — the same photographs under descriptive names, for production use.

Open `design/Onboarding Final v2.dc.html` in a browser to see the flow, then implement it in the target codebase.
