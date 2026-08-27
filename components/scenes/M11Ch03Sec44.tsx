/**
 * M11 Ch03 · Section 44 — "Chapter cheat sheet — golden rules and traps"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: cheat_sheet — final "notes page" of the chapter: one golden rule per subtopic,
 * framed by a red-margin opener (radians-first) and a red-margin closer (final sanity check).
 * No segments (recap type) — board text authored straight from board_content; Hinglish for the
 * six rule rows is hand-written (no segments_hinglish source exists for sections 43-44).
 *
 * Beats (board_reveal_at_english [0, 5.46, 13.74, 21.25, 30.12, 39.42, 53.85, 63.32]):
 *  0 subtitle: fast-recall golden rules
 *  1 row #1 (red-margin, high): angles - convert to radians first, always
 *  2 row #2: functions - magnitude from identity, sign from quadrant
 *  3 row #3: allied angles - odd multiple of 90 swaps to co-function
 *  4 row #4: graphs - divide for period, tan period is π, shift in range
 *  5 row #5: identities - reconstruct from cos(A-B), watch every ±, amplitude √(a²+b²)
 *  6 row #6: equations - factor, back-check, keep n, match family
 *  7 red-margin closer: final sanity check before submitting an answer
 *
 * Layout plan — single numbered column, red circle + 2-line text per row (dense cheat-sheet rows):
 *  b0 | subtitle (14,amber,w700)          | T mid | x300..780  y74..89  (bl 82)
 *  b1 | circle #1 + 2 lines (15,w700)     | row   | cy124  text x90..1000 y118/138
 *  b2 | circle #2 + 2 lines (13,w600)     | row   | cy182  text x90..1000 y176/196
 *  b3 | circle #3 + 2 lines (13,w600)     | row   | cy240  text x90..1000 y234/254
 *  b4 | circle #4 + 2 lines (13,w600)     | row   | cy298  text x90..1000 y292/312
 *  b5 | circle #5 + 2 lines (13,w600)     | row   | cy356  text x90..1000 y350/370
 *  b6 | circle #6 + 2 lines (13,w600)     | row   | cy414  text x90..1000 y408/428
 *  b7 | margin bar (red)                  | Draw  | x60  y460..540
 *  b7 | closer line1 (15,red,w700)        | T st  | x76..990   y480..496 (bl 488)
 *  b7 | closer line2 (13,red)             | T st  | x76..990   y502..518 (bl 510)
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

const ROWS: { cy: number; y1: number; y2: number; size: number; weight: number; en1: string; en2: string; hi1: string; hi2: string }[] = [
  {
    cy: 124,
    y1: 118,
    y2: 138,
    size: 15,
    weight: 700,
    en1: "Angles: any arc / sector / calculus formula assumes radians.",
    en2: "Convert first, always.",
    hi1: "Angles: koi bhi arc / sector / calculus formula radians assume karta hai.",
    hi2: "Pehle convert karo, hamesha.",
  },
  {
    cy: 182,
    y1: 176,
    y2: 196,
    size: 13,
    weight: 600,
    en1: "Functions: magnitude from the identity, sign from the quadrant -",
    en2: "always two steps. Range-check every answer.",
    hi1: "Functions: magnitude identity se, sign quadrant se -",
    hi2: "hamesha do steps. Har answer range-check karo.",
  },
  {
    cy: 240,
    y1: 234,
    y2: 254,
    size: 13,
    weight: 600,
    en1: "Allied angles: odd multiple of 90° ⇒ swap to co-function;",
    en2: "sign from the quadrant via ASTC.",
    hi1: "Allied angles: 90° ka odd multiple ⇒ co-function mein switch;",
    hi2: "sign quadrant se, ASTC ke through.",
  },
  {
    cy: 298,
    y1: 292,
    y2: 312,
    size: 13,
    weight: 600,
    en1: "Graphs: divide (don't multiply) for the period; tangent's",
    en2: "period is π; include the vertical shift in the range.",
    hi1: "Graphs: period ke liye divide karo (multiply nahi); tangent ka",
    hi2: "period π hai; range mein vertical shift include karo.",
  },
  {
    cy: 356,
    y1: 350,
    y2: 370,
    size: 13,
    weight: 600,
    en1: "Identities: reconstruct everything from cos(A−B); watch",
    en2: "every ±; amplitude is √(a²+b²), never a+b.",
    hi1: "Identities: sab kuch cos(A−B) se reconstruct karo; har ± pe",
    hi2: "dhyaan do; amplitude √(a²+b²) hai, a+b kabhi nahi.",
  },
  {
    cy: 414,
    y1: 408,
    y2: 428,
    size: 13,
    weight: 600,
    en1: "Equations: factor (never divide); back-check after squaring;",
    en2: "keep the n; match the right solution family.",
    hi1: "Equations: factor karo (divide nahi); squaring ke baad",
    hi2: "back-check karo; n rakho; sahi solution family match karo.",
  },
];

export default function M11Ch03Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={54} size={18} fill={RED} anchor="middle" script>
          {t("Chapter Cheat Sheet — Golden Rules and Traps", "Chapter Cheat Sheet — Golden Rules aur Traps")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={82} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Fast-recall golden rules", "Fast-recall golden rules")}
        </T>
      </Fade>

      {/* beats 1-6 — six golden-rule rows, one per subtopic */}
      {ROWS.map((row, i) => (
        <Fade key={i} on={beat >= i + 1} delay={dl(i + 1, 0)}>
          <Circle cx={58} cy={row.cy} r={13} fill={RED} />
          <T x={58} y={row.cy + 5} size={13} fill="#FFFEFB" anchor="middle" weight={700}>
            {i + 1}
          </T>
          <T x={90} y={row.y1} size={row.size} fill={INK} anchor="start" weight={row.weight}>
            {t(row.en1, row.hi1)}
          </T>
          <T x={90} y={row.y2} size={row.size} fill={INK} anchor="start" weight={row.weight}>
            {t(row.en2, row.hi2)}
          </T>
        </Fade>
      ))}

      {/* beat 7 — red-margin closer: final sanity check */}
      <Draw on={beat >= 7} d="M 60 460 L 60 540" stroke={RED} sw={3} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={76} y={488} size={15} fill={RED} anchor="start" weight={700}>
          {t("If a final sin or cos exceeds 1 in magnitude, or a period", "Agar final sin ya cos magnitude mein 1 se zyada ho, ya period")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={76} y={510} size={13} fill={RED} anchor="start">
          {t("looks multiplied not divided - stop and recheck.", "multiply lagta ho divide nahi - ruko aur recheck karo.")}
        </T>
      </Fade>
    </Scene>
  );
}
