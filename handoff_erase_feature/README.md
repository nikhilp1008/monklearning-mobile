# Feature: Erase to remove

A delete gesture for the Library, built out of the app's own metaphor. Instead of a delete button and a confirm dialog, the student picks up an eraser and rubs a card until the writing is gone. Rubbing is reversible until they lift their finger; removing is undoable for five seconds after.

This package documents **only the feature**. The Library screen already exists in the product — nothing here is a redesign of it. `demo/erase-feature.html` is the reference implementation: open it in a browser, tap **Erase**, and rub a card.

## Scope

| | |
| --- | --- |
| **Applies to** | Library → **Notes**, Library → **Doubts** |
| **Never on** | Library → **Sessions** (session backups expire on their own; nothing there is the student's to delete) |
| **Entry point** | An `Erase` pill at the right end of the tab row |
| **Removes** | One card at a time, as many as you like without leaving the mode |
| **Reverses** | Mid-gesture (lift early) and post-removal (Undo, 5s) |

The tool is absent from the tab row on Sessions, and if the student is in erase mode and switches to Sessions, the mode exits with the tab change — no state carries across tabs.

## How it works, in order

1. **Pick up the eraser.** Tapping the `Erase` pill turns it solid ink with a paper-coloured eraser mark, the label reads `Erasing`, and a handwritten line appears under the tabs: *rub any card to erase it* with a `DONE` affordance. The list nudges once (staggered 30ms per card) so it is clear the surface changed.
2. **The page recedes.** The list background goes to a cool draft grey (`#F4F3EF`) while the cards stay pure white — the cards read as the paper, the page as the desk. Card borders and shadows step up very slightly so they sit above the grey.
3. **Rub.** Touching a card starts erasing **at that point**, in whatever direction the finger moves — up, down, sideways, in circles. There is no fixed swipe axis and no minimum distance to begin: the first contact already lifts ink.
4. **Feedback while rubbing.** Ink disappears under the stroke. Graphite dust puffs off the contact point and drifts up-left. The card scales down very slightly (max 3.5%) as more of it clears, so the whole thing feels like it is thinning out.
5. **Commit or return.** Lift with **more than 55% of the card rubbed** and the note is removed. Lift below that and every stroke fades out over 320ms — the writing comes back exactly as it was. Nothing is asked, nothing is confirmed.
6. **Removal and reflow.** The blank card dips to 96.5% and 55% opacity, then collapses its own height to zero over 340ms `cubic-bezier(.3,.85,.3,1)` with its bottom margin pulling in the 9px list gap. The cards below rise into the space rather than snapping into it. The item leaves the data source only after the collapse.
7. **Undo.** A hairline row appears: *erased* + `UNDO`, centred between two rules. Five seconds, then it fades and the removal is final. Undo puts the note back at its original index.
8. **Put the eraser down.** `DONE` or the pill exits the mode: the page tint lifts, the cards settle, the tool returns to its outline state.

## Why this shape

- **The gesture is the confirmation.** 55% coverage is a deliberate amount of work — it cannot be produced by a stray touch, and it does not need a dialog to be safe.
- **Reversible until release.** Every mid-gesture state is undoable by simply not finishing, which is what makes rubbing feel safe enough to be fun.
- **Discoverable by control.** The gesture is unusual, so the entry point is not: a labelled button in the tab row. Once the eraser is down, the mode line says exactly what to do.
- **Multi-delete without multi-select.** Clearing five notes is five rubs in one mode, with no checkboxes, no counts, and no batch confirm.

## Files

| File | What it is |
| --- | --- |
| `demo/erase-feature.html` | Reference implementation — vanilla JS, no build. Tab row + tool + list only. Read the `CFG` object at the top: those numbers are the spec. |
| `MECHANICS.md` | The erase engine: brush, coverage measurement, thresholds, timings, colours, and the React Native mapping. |
| `assets/erase-mode.png` | Still of the mode on a real Library screen (page design shown for context only). |

## Acceptance criteria

- [ ] `Erase` appears on Notes and Doubts, at the right end of the tab row, clear of the tab underline; absent on Sessions.
- [ ] Switching to Sessions while erasing exits the mode.
- [ ] Erasing starts at the first touch point and follows the finger in any direction, including reversals.
- [ ] Ink under the stroke clears with a soft edge; dust appears at the contact point only while moving.
- [ ] Lifting below 55% coverage restores the full card within ~320ms, leaving no visible residue.
- [ ] Lifting above 55% collapses the card's height so neighbours animate into the gap; no layout jump at any point.
- [ ] Undo is available for exactly 5s and restores the note to its original position in the list.
- [ ] Multiple cards can be erased in one session without re-entering the mode.
- [ ] Scrolling the list is unaffected while the eraser is down (see MECHANICS → gesture arbitration).
- [ ] With Reduce Motion on, the dust and the scale-down are dropped; the collapse becomes a 200ms fade.
