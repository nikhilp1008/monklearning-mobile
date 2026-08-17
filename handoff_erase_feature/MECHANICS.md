# Mechanics: erase to remove

Every value below is what `demo/erase-feature.html` runs. Where a number matters, the reason is given.

## 1 · The erase surface

A canvas sits over the card's content, matching the card's box exactly (`position:absolute; inset:0`), `pointer-events:none`, and clipped by the card's 14px radius (`overflow:hidden` on the card).

- Backing store is sized to the card rect × `min(2, devicePixelRatio)`, then the context is scaled by the same factor, so stamps are specified in CSS px.
- The canvas paints **card-coloured** paper (`#FFFFFF`), it does not cut holes. Painting paper over ink is what makes the ink disappear, and it works on any platform without masks or blend modes.
- Because the paint colour is the card colour, the card background must stay `#FFFFFF` in erase mode. If the card colour changes (dark mode, a tinted card in Doubts), the brush colour must change with it — read it from the card's computed background rather than hard-coding.

**Native note:** in React Native this is a Skia `Canvas` layered over the row, or an `Animated.View` mask if Skia is unavailable. See §7.

## 2 · The brush

| Value | Setting | Why |
| --- | --- | --- |
| Radius | **27px** | Roughly a thumb contact patch — one pass across a card clears about a third of it. |
| Falloff | radial gradient, opaque to `0.62r`, transparent at `1.0r` | A hard circle leaves visible scallops; the soft ring reads as rubber on paper. |
| Alpha | 1.0 core, 0.97 at 0.62r | Two overlapping passes fully clear; a single light pass leaves a faint ghost, which is what a real eraser does. |
| Stamp spacing | **9px** along the path | Pointer events arrive far apart on fast moves; interpolating every 9px keeps the stroke continuous with no dotted gaps. |

Stroke assembly per `pointermove`: interpolate from the previous point to the current one in `ceil(distance / 9)` steps, stamping at each.

## 3 · Measuring progress

Coverage is measured on a coarse grid, not by reading pixels (no `getImageData` on every move).

- Grid: **10 columns × 4 rows** = 40 cells over the card box.
- Each stamp marks the cell containing its centre.
- `progress = markedCells / 40`.
- **Commit threshold: 0.55.** Below it, release restores; at or above it, release removes.

Why a grid: it rewards *travel* rather than *time*. Scrubbing the same spot for five seconds marks one cell and never commits, which is exactly right — you have not erased the note, you have worn a hole in one word.

Live effect while rubbing: `scale(1 - min(0.035, progress × 0.05))`. Capped so the card never appears to shrink out of the list.

## 4 · Dust

Two particles per emission, emitted on any move longer than 10px, positioned at the contact point ±8px / ±7px.

- Size 2–4.2px, `border-radius:50%`, `rgba(28,26,22,.3)`.
- Animation `dust`: `translate(0,0) scale(1) opacity .8` → `translate(-14px,-9px) scale(.4) opacity 0`, 0.7–1.2s `ease-out`, `forwards`.
- Each node is removed after 1300ms; the container is flushed if it exceeds 18 children. Never leave particles accumulating in the tree.

## 5 · Release

**Restore (progress ≤ 0.55)**
1. Canvas `opacity → 0` over 300ms.
2. After 320ms, `clearRect` the whole canvas and set `opacity` back to 1 (ready for the next attempt).
3. Card transform cleared, dust container hidden.

**Commit (progress > 0.55)**
1. Dust hidden immediately.
2. Card dips: `scale(.965)`, `opacity .55`, 200ms.
3. Next frame, lock the measured height and animate to nothing:
   - `height: h → 0`, `340ms cubic-bezier(.3,.85,.3,1)`
   - `margin-bottom: 0 → -9px` (absorbs the flex `gap:9px`, otherwise a 9px ghost gap remains)
   - `padding-top/bottom → 0`, `opacity → 0`, `transform: scale(.94)`
4. At **collapse + 80ms**, remove the item from the data source and re-render.
5. Show the undo row.

The height animation is what produces the reflow: siblings are laid out by flex, so as the removed row's height goes to zero they translate up continuously. Do not remove the node first and animate afterwards — that is where the jump comes from.

## 6 · Timings, colours, type

| Token | Value |
| --- | --- |
| Mode enter / exit | tool 220ms ease · page tint 300ms ease · mode line 240ms opacity + 280ms max-height |
| Card nudge on entry | `nudge` 300ms ease, staggered 30ms per card (±2.5px, ±0.5°) |
| Collapse | 340ms `cubic-bezier(.3,.85,.3,1)` |
| Undo window | **5000ms**, then fade 260ms |
| Tool idle | transparent fill, border `rgba(28,26,22,.14)`, label `#57534B`, eraser mark filled `#FCF4E0` with ink stroke |
| Tool active | fill `#1C1A16`, border `#1C1A16`, label `#FCFAF4`, eraser mark filled `#FCFAF4` with paper stroke |
| Page in mode | `#F4F3EF` (draft grey) |
| Card in mode | `#FFFFFF`, border `rgba(28,26,22,.16)`, shadow `0 12px 26px -20px rgba(28,26,22,.55)` |
| Card at rest | `#FFFFFF`, border `rgba(28,26,22,.1)`, shadow `0 10px 22px -18px rgba(28,26,22,.45)` |
| Dust | `rgba(28,26,22,.3)` |
| Mode line + undo copy | Kalam 13px/700, `#57534B`; `UNDO` Anek Latin 11.5px/800, tracking .06em, `#9A6A12`; `DONE` same size in `#1C1A16` |
| Tool pill | Anek Latin 12px/700, padding `5px 12px 5px 9px`, radius 99, `margin-bottom:7px` so it clears the tab underline |

Eraser mark (16×16, 1.6 stroke, round joins) — an angled eraser, filled with the amber wash at rest:

```
M4.8 16.9 12.5 6.6a1.9 1.9 0 0 1 2.7-.4l2.9 2.1a1.9 1.9 0 0 1 .4 2.7L13.4 19H6.7a1.9 1.9 0 0 1-1.9-2.1z   (body, filled)
M9.4 12.2 15.7 16.8                                                                                        (seam)
M13.4 19h4.9                                                                                               (base line)
```

## 7 · React Native mapping

- **Mode state** lives with the Library tab state: `eraseMode: boolean`, forced to `false` whenever the active tab is not `notes` or `doubts`.
- **Gesture:** one `Gesture.Pan()` per row, `enabled={eraseMode}`, with `activeOffsetX/Y` left at 0 (erasing must begin on contact) and `simultaneousWithExternalGesture` **not** set against the scroll view — while the eraser is down the row owns the gesture, which is why the mode exists. Outside erase mode the row has no pan at all, so scrolling and tapping through to the note are untouched.
- **Painting:** `@shopify/react-native-skia` — keep a `SkPath`/point list in a `useSharedValue`, draw circles with a `RadialGradient` shader in a `Canvas` overlaying the row. Fallback without Skia: a grid of ~40 small `Animated.View` paper tiles, each fading in when its cell is marked; visually close at this brush size.
- **Coverage:** same 10×4 grid, kept in a shared value so the worklet can update it without crossing the bridge.
- **Collapse:** animate the row's `height` with Reanimated (`withTiming(0, {duration: 340, easing: Easing.bezier(.3,.85,.3,1)})`) plus `marginBottom: -gap`, then remove from the list on completion via `runOnJS`.
- **Haptics:** `impactAsync(Light)` on entering the mode and on commit. None during the rub — continuous haptics on a drag reads as a malfunction.
- **Undo:** hold the removed item and its index in component state with a 5s timer; clear the timer on unmount and on a second removal (the newest removal owns the row).

## 8 · Edge cases

- **Card taller than the viewport / partially scrolled:** the canvas is sized from the row's own rect, so a partly visible row erases correctly; coverage is over the full row, not the visible part.
- **Second finger:** ignore secondary pointers — only the first `pointerId` drives a rub.
- **Pointer leaves the card:** rubbing continues (the listener is on `window`), which matches a real eraser overshooting the page. Stamps outside the box are clamped to the edge cells.
- **Removal while another card is mid-rub:** not possible — one active rub at a time (`drag` is a single slot).
- **Rapid successive removals:** the undo row always describes the newest removal; the previous one becomes final immediately.
- **Empty list:** exit erase mode automatically and hide the tool until there is at least one card.
- **Reduce Motion:** no dust, no scale-down, collapse replaced by a 200ms opacity fade; the coverage threshold and undo behaviour are unchanged.
- **Accessibility:** the gesture cannot be the only path. Expose a `Remove note` action on the row's accessibility actions menu (VoiceOver / TalkBack), which performs the same removal with the same undo window.
