/**
 * M11 Ch07 · Section 32 — "Estimating a root, and summing an infinite series"
 * Canvas 1080×620 · safe x36–1044, y30–596. FLAGGED for extra eye-scrutiny.
 * section_type=worked_examples. 7 board_content items, seq1="Example 3"
 * label — title invented, always-on.
 *
 * Beats (en [0, 9.22, 28.25, 53.08, 68.95, 85.42, 107.95]):
 *  0 Example 3 [JEE Main] label — estimate (255)^(1/4)
 *  1 255 = 256(1-1/256), 256=4^4
 *  2 approximation ⇒ ≈3.9961, boxed (HIGH)
 *  3 red-margin: first-order used, quadratic for more precision
 *  4 Example 4 [JEE Adv] label — sum the series
 *  5 match ny and n(n-1)/2!y² ⇒ (n-1)/(2n)=5/6
 *  6 n=-3/2, y=-1/2 ⇒ sum = 2√2, boxed (HIGH)
 *
 * Math hand-verified: 255=256(1-1/256), (255)^(1/4)≈4-1/256≈3.9961;
 * 3rd/(2nd)²=(15/32)/(9/16)=5/6 ⇒ n=-3/2, ny=3/4 ⇒ y=-1/2 ⇒
 * (1-1/2)^(-3/2)=2^(3/2)=2√2.
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={INK} script>
          {t("estimating a root, and summing an infinite series", "root estimate karna, aur ek infinite series ka sum")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 label */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={150} y={100} size={15} fill={AMBER_DARK} script anchor="start">
          Example 3 [JEE Main] — estimate (255)^(1/4)
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={135} size={15} fill={INK} anchor="start">
          255 = 256(1 - 1/256),      256 = 4⁴
        </T>
      </Fade>

      {/* beat 2 — approximation, boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={178} size={14} fill={AMBER_DARK} script anchor="start">
          (255)^(1/4) = 4(1-1/256)^(1/4) ≈ 4(1 - ¼·1/256) = 4-1/256 ≈ 3.9961
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={roundRectD(135, 156, 660, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 3 — red-margin */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 150 222 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={170} y={246} size={15} fill={RED} script anchor="start">
          {t("first-order 1+nx used — keep the quadratic term for more precision", "first-order 1+nx use kiya — zyada precision ke liye quadratic term rakho")}
        </T>
      </Fade>

      {/* beat 4 — Example 4 label */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={296} size={15} fill={AMBER_DARK} script anchor="start">
          Example 4 [JEE Adv] — sum 1 + 3/4 + (3·5)/(4·8) + ⋯
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={332} size={15} fill={INK} script anchor="start">
          ny = 3/4,    n(n-1)/2! y² = 15/32    ⇒    (n-1)/(2n) = 5/6
        </T>
      </Fade>

      {/* beat 6 — solved, boxed */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={150} y={376} size={16} fill={AMBER_DARK} script anchor="start">
          n=-3/2, y=-1/2    ⇒    (1-1/2)^(-3/2) = 2^(3/2) = 2√2
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={roundRectD(135, 354, 560, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />
    </Scene>
  );
}
