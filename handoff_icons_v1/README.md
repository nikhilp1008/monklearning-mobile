# MonkLearning — home icons v1.0.0

Three production icons for the home launcher rows: **Snap a doubt**, **Practice**, **Milestones**.

| id | label | from | accent marks |
|---|---|---|---|
| `snap-a-doubt` | Snap a doubt | variant 22A | the flash lamp |
| `practice` | Practice | variant 20I | the mark on the current sheet |
| `milestones` | Milestones | variant 22M | the medal face |

## Spec

- **Grid** 24 × 24, artwork inside 2.8–21.2
- **Stroke** 1.9, `stroke-linecap: round`, `stroke-linejoin: round`, `fill: none`
- **Ink** `#1C1A16` — the only ink in the product; do not substitute pure black
- **Accent** `#EEA31F` — exactly one filled accent per icon, always on the meaningful part
- **Chip** 44 × 44, radius 12. Primary row tint `#FDF3DE`, other rows `#F4F1E9`
- **Minimum render size** 20px. Below that the accent loses its clearance and merges into the stroke.

## Two changes made for production

1. **Practice was redrawn at stroke 1.9.** It was designed at 1.75 while the camera and medal were drawn at 1.9. Three weights in one row is visible at 22px, so the set is normalised to 1.9.
2. **Practice's accent moved from (6.4, 15.8) to (7.2, 16.2).** At the heavier stroke the old position left 0.45 grid units between the dot and the sheet's left edge — under a pixel at chip size, so it fused. The new position holds 1.25 units of clearance from the edge, the rule above it and the bottom.

## Files

```
svg/                  three static SVGs, ink + amber baked in
svg-currentcolor/     ink = currentColor, accent = var(--monk-accent, #EEA31F)
sprite/               single-file <symbol> sprite, ids monk-snap-a-doubt etc.
react-native/         MonkIcons.tsx — react-native-svg, props: size, color, accent, strokeWidth
react/                MonkIcons.tsx — plain SVG JSX, same props
icons.json            machine-readable geometry + tokens for codegen
preview.html          size ladder 56 → 16 and the row context, open in a browser
```

## Usage

React Native:

```tsx
import { SnapADoubtIcon, PracticeIcon, MilestonesIcon } from './MonkIcons';

<SnapADoubtIcon size={22} />
<PracticeIcon size={22} />
<MilestonesIcon size={22} />
```

Web sprite:

```html
<svg width="22" height="22" style="color:#1C1A16;--monk-accent:#EEA31F"><use href="#monk-practice"/></svg>
```

## Rules

- One accent per icon. Never add a second amber element, and never recolour the accent to signal state — use the row, not the icon.
- Do not switch the stroke to a filled treatment for an active state; use the chip tint.
- Do not scale below 20px, and do not scale the stroke with the icon — `strokeWidth` stays 1.9 at every size (`vector-effect: non-scaling-stroke` is not needed at these sizes on the 24 grid).
- Keep the ids and labels as written; they match the launcher rows.
