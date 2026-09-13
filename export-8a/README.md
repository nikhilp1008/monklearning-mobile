# Monk Learning — Notes & Doubts (final, 8a)

Two static HTML mockups at 402×874, no build step. Open either file in a browser.

- monk-notes.html — Notes list
- monk-doubts.html — Doubts list (photo thumbnails are CSS placeholders; swap the 84×84 div for an <img>)

## Spec
Fonts: Onest (UI), Kalam (title accents) via Google Fonts link in <head>.
Colours: ink #1C1A16, secondary #57534B, muted #8A857A / #9C988C, hairline rgba(28,26,22,.12), amber #EEA31F (nav only).
Header: 28px/700 title, Erase pill on the right.
Search: 44px bare line, hairline underline; placeholder cycles Search your notes/doubts → Physics → Chemistry → Maths → Biology (12s CSS keyframe, .rot).
Notes row: 17px/400 title, then two 12.5px grey lines — "Subject · Date" and "N key points · N formulas · N diagrams". 30px between rows, no rules.
Doubts row: 84px photo (radius 14) + text block, vertically centred; meta line "Subject" left / date right, 15px question clamped to 2 lines. "2 Q" white badge bottom-left of photo for multi-question snaps. 24px between rows.
Nav: white, 64px, four tabs Home · Textbooks · Doubts · Notes; icons 24px 1.6px stroke, grey outline inactive, solid black filled active; 10.5px labels.
