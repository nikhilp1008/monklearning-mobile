# MonkLearning — Home screen rebuild notes

Reference file: `home.html` (open in a browser at 390 × 844).
Everything below is the delta from the previous Home design. Content, colours, fonts and layout order are unchanged unless a line says otherwise.

---

## 1. Why the previous build looked worse on device than on the laptop

The design was tuned by eye in a browser where the phone frame is ~390 CSS px wide. A 24px shadow blur is ~6% of that width and reads as a soft hint. On a real device the same value renders at 3× density, roughly 8mm of grey haze, viewed from 30cm. Every fix below is that class of error: correct numbers, wrong scale.

Additional platform factors that made it worse in Expo:

- iOS uses `shadowOffset` / `shadowRadius` / `shadowOpacity`; Android uses `elevation` and adds its own ambient light layer. One CSS `box-shadow` becomes two different, heavier effects.
- Grey shadows under white cards on a cream background produce a muddy halo, not clean lift. Shadow only reads as premium on pure white or on dark.

---

## 2. Elevation — the main change

**Removed** every `box-shadow` / `elevation` from: the two action cards, the stats strip, Today's plan, doubt of the day, note cards, session rows, and the icon tiles inside cards.

**Replaced with** a hairline border:

| Element | Border |
| --- | --- |
| Snap a doubt, Practice unlimited | `1px solid rgba(28,25,20,0.09)` |
| Today's plan, note cards, session rows | `1px solid rgba(28,25,20,0.05)` |
| Doubt of the day (ruled paper) | `1px solid rgba(28,25,20,0.10)` — intentionally stronger, it should read as paper |
| Stats strip | no border; `1px` top + bottom rule at `rgba(28,25,20,0.07)` |

**Shadows remaining in the screen: zero.** The raised centre button that carried the only legitimate shadow was removed (see §6).

Also removed: the radial glow inside the dark Drona card and the amber glow under "Choose a topic". Both rendered as blur artifacts at 3×.

Icon tiles inside cards no longer use a border or shadow — they use the cream fill `#F4F1E9` on the white card. A tonal step, not an outline.

RN note: do not substitute `elevation: 1` for these hairlines. Use `borderWidth: StyleSheet.hairlineWidth * 2` or `1`, and `borderColor` as above. On Android you may want `0.09 → 0.11` if the line disappears; check on a real mid-range device, not the emulator.

---

## 3. Hierarchy

- **Stats row lost its card.** 703 / 47 / 320 sit directly on the page background between two hairlines. It is data, not a component.
- **Card radius normalised to 16** (was ~18–20). The dark Drona hero keeps `20` because it is the hero.
- The dark hero card is now the only dark surface on the screen, so it carries the primary weight alone.

---

## 4. Spacing

Old spacing was near-uniform (inter-card gaps ~24, inner padding ~20), so grouping was invisible on device where only ~2.2 cards are visible at once.

New scale: **8 / 12 / 16 / 24 / 28 / 40**

| Gap | Value |
| --- | --- |
| Screen side margin | 24 (unchanged) |
| Header row → scroll content top | 24 |
| Hero → action card row | 24 |
| Between the two paired action cards | 12 |
| Action row → stats | 28 |
| Stats → Today's plan | 28 |
| Today's plan → doubt of the day | 28 |
| Section headers (Recent notes / Recent sessions) | 40 above, 12 below |
| Card inner padding | 16 (was ~20; it was competing with the outer gaps) |
| Row padding inside Today's plan | 11 vertical |

---

## 5. Header — restructured

**Removed:**
- The MonkLearning logo, top left. The app icon is already on the phone's home screen; repeating it cost a row.
- The greeting subline "You cleared 8 doubts yesterday. One chapter stands between you and 70%." Not actionable, and it pushed the hero below the fold.

**Kept:** the Drona mark inside the "Learn with Drona" card. That is how the teacher is represented and it stays.

**New structure:** one row — greeting on the left, profile avatar on the right, closed by a `1px solid rgba(28,25,20,0.08)` bottom rule. Greeting is `21px / weight 600 / -0.015em`, single line, `ellipsis` on overflow. Avatar 38px.

The greeting was 27px in the first device build and read as a page title rather than a greeting — it was the largest type in the app sitting alone on a line. 21px keeps the warmth without competing with the hero.

Result: roughly 92px of vertical space returned. The hero now starts at ~140px instead of ~232px, so both action cards land on first paint.

**Build note:** make the greeting time-based — morning / afternoon / evening.

---

## 6. Navigation bar — rebuilt

### What was wrong before
1. **Visible seam.** The bar sat on a light grey fill against cream, reading as a strip glued to the bottom.
2. **No bottom scroll inset.** Content was sliced mid-row by the bar ("10 PYQs on proje…").
3. **Icons were not a family** — mixed stroke weights and optical sizes.
4. **Active state was a bold-weight swap**, which is what read as old-school.
5. **The raised centre button** collided with the bar's top edge and crowded its own label, and its height forced the bar taller than it needed to be.

### What it is now
- **Surface:** `#FFFFFF` with a single top hairline `rgba(28,25,20,0.08)`. No grey, no seam.
- **Height:** `56 + bottom safe-area inset`. Read the inset from `useSafeAreaInsets()`; never hardcode 34.
- **Four tabs on four equal columns** — Home, Lessons, Progress, Library. The centre Drona button is gone entirely; Drona is entered from the hero card on Home, which is the larger and better entry point.
- **Icons:** one family, 24px box, `1.75` stroke, `round` cap and join. Filled for active, outline for inactive. Each icon keeps its brand dot — amber `#EEA31F` on the active tab, `#9C988C` elsewhere.
- **Labels:** 10px. Active `weight 800`, colour `#1C1A16`. Inactive `weight 700`, colour `#9C988C` at `opacity 0.5`.
- **Content inset:** the scroll view has `paddingBottom: 130` (bar height + safe area + 24). This is the fix for the sliced row.
- **Fade:** a 32px gradient from the page background to transparent sits above the bar, so content dissolves under it rather than being cut.

### Android / iOS parity
- `tabBarHideOnKeyboard: true` — otherwise a bottom bar rides up with the Android keyboard.
- Android 15 forces edge-to-edge; the bar must sit inside the insets or it overlaps the gesture pill.
- Three-button Android navigation gives a ~48dp inset vs ~24dp for gesture nav. Insets handle both; constants do not.
- Every tab needs `accessibilityRole="tab"` and an `accessibilityLabel`.
- Tap targets here are ~97 × 56, clearing both the 44pt iOS and 48dp Android minimums.

---

## 7. Touch feedback

Every card, tab, avatar and pill is pressable: **`scale 0.98` + `opacity 0.9` over 120ms**. In `home.html` this is the `.pressable` class; in RN use `Pressable` with `style={({pressed}) => ...}` or `react-native-gesture-handler`. This is most of what reads as "other apps feel smooth" — a static screen feels dead regardless of how good the pixels are.

Optional and not in this file: collapse the greeting into a compact header on scroll.

---

## 8. Typography and colour — unchanged

Explicitly reverted to the original values after an earlier pass changed them:

| Token | Value |
| --- | --- |
| Font | Anek Latin (400/500/600/700/800); Kalam for handwritten accents |
| Greeting | 21px / 600 / -0.015em |
| Card title | 15px / 700 |
| Body | 14px / 1.5 |
| Card caption | 12px / 1.4 |
| Stat number | 20px / 700 / -0.02em |
| Stat caption | 10px / 700 / 0.08em / uppercase |
| Section label | 11px / 800 / 0.14em / uppercase |
| Micro label (Today's plan) | 10px / 800 / 0.14em / uppercase |
| Category tag | 9px / 800 / 0.10–0.12em / uppercase |
| Tab label | 10px / 800 active, 700 inactive |

| Colour | Value |
| --- | --- |
| Page background | `#FFFDF8` |
| Card | `#FFFFFF` |
| Card icon tile | `#F4F1E9` |
| Nav bar | `#FFFFFF` |
| Dark hero / ink | `#16130E` / `#1C1A16` |
| Amber | `#EEA31F` |
| Green | `#1C9B57` / text `#157A45` |
| Red accent | `#DD4433` / text `#C53A2B` |
| Body text | `#1C1A16` |
| Secondary text | `#57534B` |
| Muted text | `#9C988C` |

An intermediate version darkened the page to `#F4F0E5`; that was reverted. The background is now `#FFFDF8` — whiter and less grey than the original `#FCFAF4`.

---

## 9. Checklist for the RN build

1. Strip all `elevation` and `shadow*` props from Home. Add the hairline borders from §2.
2. Apply the spacing scale from §4 exactly.
3. Rebuild the header per §5, time-based greeting.
4. Rebuild the tab bar per §6 — four tabs, white surface, safe-area height, icon dots.
5. `paddingBottom: 130` on the Home scroll view, plus the 32px fade.
6. Wrap every touchable in the §7 press feedback.
7. Verify on a real mid-range Android device, not the emulator — hairlines and blur are where the two platforms diverge most.


---

## 10. Round two — after the first device build

Three problems showed up on the iPhone that did not show in the browser.

### 10.1 Greeting was too large
27px → **21px / weight 600 / -0.015em**. See §5.

### 10.2 Background was too grey
`#FCFAF4` → **`#FFFDF8`**. Whiter, less grey, cards still separate against it. The bottom fade gradient follows the same value.

### 10.3 The Learn with Drona card was dominating

It was carrying three primary cues at once:
1. near-black fill `#16130E`
2. a 20px **700** white title
3. the only amber button on the screen

Any one of those makes an element primary. All three together make it a hole in the page. A fourth factor is perceptual: light text on a dark fill always looks heavier than the same weight on white, which is why "Learn with Drona" felt bolder than "Snap a doubt" even though both were 700.

**Applied to all variants:** title is now **18px / weight 600 / -0.01em** instead of 20px / 700.

**Shipped in `home.html`: variant 3a.** The other three are in the design file and switchable there; their values are below if you want to try them in the app.

| | Surface | Border | Title colour | Body colour | Icon tile | CTA |
| --- | --- | --- | --- | --- | --- | --- |
| **3a Softer ink** *(in the HTML)* | `#241F18` | `1px rgba(255,255,255,0.07)` | `#F6F3EC` | `#B8B2A4` | `rgba(255,255,255,0.07)` | amber `#EEA31F` on `#241a08` |
| **3b Paper + amber rule** | `#FFFFFF` | `1px rgba(28,25,20,0.09)` | `#1C1A16` | `#57534B` | `#F4F1E9` | ink `#1C1A16` on `#FCFAF4` |
| **3c Amber wash** | `#FDF4E2` | `1px rgba(238,163,31,0.34)` | `#1C1A16` | `#6B5A34` | `rgba(238,163,31,0.16)` | ink `#1C1A16` on `#FCFAF4` |
| **3d Board tile** | `#FFFFFF` | `1px rgba(28,25,20,0.09)` | `#1C1A16` | `#57534B` | `#241F18`, 56px, radius 14 | amber `#EEA31F` on `#241a08` |

Notes on each:
- **3a** keeps the original structure, halves the weight. Warm charcoal rather than near-black, plus a hairline so it does not read as a void.
- **3b** is the light version. The amber rule is 3px, inset 18px top and bottom, on the left edge. Highlights by shape and colour rather than mass.
- **3c** has no dark at all. Loudest of the light options; ties the card to the brand rather than to the board.
- **3d** demotes dark to an accent — the board becomes a 56px tile beside the text, and the card stays paper. Closest in family to Snap a doubt and Practice unlimited, so the whole screen reads as one system. Layout differs slightly: icon and text sit in a row, CTA below the full block.

All four keep the same copy, the same 44px CTA height, the same 20px radius and the same 18px padding.
