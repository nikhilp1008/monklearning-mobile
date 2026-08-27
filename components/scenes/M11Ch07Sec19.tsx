/**
 * M11 Ch07 · Section 19 — "Greatest coefficient, and a numerically
 * greatest term with a tie"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type=worked_examples.
 * 8 board_content items, seq1="Example 1" label — title invented, always-on.
 *
 * Beats (en [0, 8.79, 27.22, 41.9, 65.62, 83.03, 105.9, 123.65]):
 *  0 Example 1 [CBSE] label — greatest coeff in (1+x)^12
 *  1 n=12 even ⇒ 12C6 = 924, boxed (HIGH)
 *  2 Example 2 [JEE Main] label — NGT in (1+4x)^8, x=1/2
 *  3 magnitude ∝ 8Cr·2^r (use |4x|=2, not |x|)
 *  4 ratio formula ⇒ r ≤ 6
 *  5 at r=6, ratio=1 ⇒ T6=T7 tie (HIGH)
 *  6 T6=T7=1792 computed, boxed (HIGH)
 *  7 red-margin HIGH: the |x| vs |4x| trap
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={60} size={21} fill={INK} script>
          {t("greatest coefficient, and a numerically greatest term with a tie", "greatest coefficient, aur ek tie wala numerically greatest term")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 label */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={150} y={100} size={15} fill={AMBER_DARK} anchor="start">
          Example 1 [CBSE] — greatest binomial coeff in (1+x)¹²
        </T>
      </Fade>

      {/* beat 1 — computed, boxed */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={140} size={18} fill={AMBER_DARK} anchor="start">
          n=12 even ⇒ ¹²C₆ = 924
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={roundRectD(135, 118, 320, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 2 — Example 2 label */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={210} size={15} fill={AMBER_DARK} anchor="start">
          Example 2 [JEE Main] — numerically greatest term in (1+4x)⁸, x=1/2
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={150} y={245} size={15} fill={INK} script anchor="start">
          {t("at x=1/2, magnitude ∝ 8Cr · 2^r  (use |4x|=2, not |x|)", "x=1/2 pe, magnitude ∝ 8Cr · 2^r  (|4x|=2 use karo, |x| nahi)")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={278} size={16} fill={INK} script anchor="start">
          T(r+1)/Tr = 2(9-r)/r  ≥  1   ⇒   r ≤ 6
        </T>
      </Fade>

      {/* beat 5 — tie, HIGH */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={312} size={16} fill={AMBER_DARK} anchor="start">
          at r=6: 2(9-6)/6 = 1  ⇒  T₆ = T₇  (tie)
        </T>
      </Fade>

      {/* beat 6 — computed values, boxed */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={150} y={355} size={15} fill={AMBER_DARK} anchor="start">
          T₆ = ⁸C₅(4x)⁵ = 1792,    T₇ = ⁸C₆(4x)⁶ = 1792
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={roundRectD(135, 333, 480, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 7 — red-margin trap */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 150 400 v 62" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={170} y={420} size={15} fill={RED} script anchor="start">
          {t("trap: using |x|=1/2 in the ratio.", "trap: ratio mein |x|=1/2 use karna.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={170} y={452} size={15} fill={RED} script anchor="start">
          {t("the full second part is 4x, so |b/a| = 2", "poora dusra part 4x hai, isliye |b/a| = 2")}
        </T>
      </Fade>
    </Scene>
  );
}
