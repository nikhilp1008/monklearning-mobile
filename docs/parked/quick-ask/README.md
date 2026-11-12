# Quick ask — parked (9 Nov 2026)

Ask was a fifth item at the right end of the bottom nav bar: the student's teacher orb with the label "Ask", meant for holding to talk to the teacher about anything, from any tab.

Nikhil and Raasikh put it on hold. Next to Snap and Solve, Practice and the class, it was one more way in, and it would confuse new students. The app should simplify what it already offers first.

It is **not in the app**. This folder keeps it so it can come back.

## What is here

- `tab-bar.with-ask.tsx.txt`: `components/tab-bar.tsx` exactly as it was with Ask in it. It is named `.txt` so the app's type check and bundler skip it. To bring Ask back, copy these parts into `components/tab-bar.tsx`:
  - `AskItem`
  - the "Coming soon" note (`soon` state, `showSoon`, `SOON_MS`)
  - the `askDivider` and the `AskItem` line inside the bar
  - the `ask*` and `soon*` styles
  - their imports (`TeacherOrbPoster`, `useTeacherId`, `hapticKey`, `FadeIn`/`FadeOut`, `AccessibilityInfo`)

## What it did, as built

- On every tab, at the right end of the bar after a thin hairline. It was on Home only at first, but that made the bar change width between tabs.
- The icon was the student's own teacher's orb, which followed teacher changes through `useTeacherId`. The label "Ask" was styled like the tab labels.
- The server side was never wired. Tapping or holding Ask showed "Coming soon / Ask <teacher> anything, from anywhere." above it for 2.8 seconds.

## The full design (never built)

The design was worked out in the "Quick ask on Home" artifact pages:
- hold to talk
- the bar turning into the Practice-style ask bar
- a hint line above it
- a voice-only answer that leaves the page still
- a light white blur and the follow-up board when the teacher writes
- the first-time tip and the edge cases

The parts it relied on are still in the app (`components/ask-follow-up.tsx`, `components/teacher-orb-poster.tsx`).
