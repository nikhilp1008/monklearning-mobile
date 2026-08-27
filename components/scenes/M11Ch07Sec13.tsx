/**
 * M11 Ch07 · Section 13 — "A stated term, and the independent term"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type=worked_examples.
 * 7 board_content items, seq1="Example 1" label (not a general title) —
 * title below is invented, always-on; beats 0-6 gate all 7 items.
 *
 * Beats (en [0, 8.11, 20.05, 44.89, 58.37, 80.73, 100.52]):
 *  0 Example 1 [CBSE] label — 6th term of (2x+3/x)⁹
 *  1 6th term ⇒ r=5 (off-by-one)
 *  2 T6 computed = 489888/x, boxed (HIGH)
 *  3 Example 2 [JEE Main] label — term independent of x in (x²-1/x)⁹
 *  4 general term T(r+1) = 9Cr(-1)^r x^(18-3r)
 *  5 solved: r=6 valid, T7 = 84, boxed (HIGH)
 *  6 red-margin: sign trap (-1/x gives -r, not +r)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={60} size={24} fill={INK} script>
          {t("a stated term, and the independent term", "ek stated term, aur independent term")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 label */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={150} y={100} size={15} fill={AMBER_DARK} anchor="start">
          Example 1 [CBSE] — 6th term of (2x + 3/x)⁹
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={135} size={16} fill={INK} script anchor="start">
          {t("6th term ⇒ r = 5  (off-by-one)", "6th term ⇒ r = 5  (off-by-one)")}
        </T>
      </Fade>

      {/* beat 2 — T6 computed, boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={180} size={15} fill={AMBER_DARK} anchor="start">
          T₆ = ⁹C₅(2x)⁴(3/x)⁵ = 126·16x⁴·243/x⁵ = 489888/x
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={roundRectD(135, 158, 590, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 3 — Example 2 label */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={150} y={245} size={15} fill={AMBER_DARK} anchor="start">
          Example 2 [JEE Main] — term independent of x in (x²-1/x)⁹
        </T>
      </Fade>

      {/* beat 4 — general term */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={283} size={16} fill={INK} script anchor="start">
          T(r+1) = 9Cr (-1)^r x^(18-3r)
        </T>
      </Fade>

      {/* beat 5 — solved, boxed */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={328} size={16} fill={AMBER_DARK} anchor="start">
          18-3r=0 ⇒ r=6 (valid) ⇒ T₇ = ⁹C₆(-1)⁶ = 84
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d={roundRectD(135, 306, 500, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 6 — red-margin sign trap */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 150 388 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={170} y={412} size={15} fill={RED} script anchor="start">
          {t("sign trap: -1/x gives -r; writing +r gives r=18 (out of range)", "sign trap: -1/x se -r milta; +r likha toh r=18 (out of range)")}
        </T>
      </Fade>
    </Scene>
  );
}
