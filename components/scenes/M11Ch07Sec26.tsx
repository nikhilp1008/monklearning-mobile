/**
 * M11 Ch07 · Section 26 — "An integration sum, and the sum of squares"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type=worked_examples.
 * 8 board_content items, seq1="Example 3" label — title invented, always-on.
 *
 * Beats (en [0, 14, 27.39, 51.2, 62.21, 78.85, 99.59, 123.23]):
 *  0 Example 3 [JEE Main] label — C0+C1/2+...+Cn/(n+1) for n=5
 *  1 weights 1/(r+1) are the integration signature
 *  2 formula ⇒ n=5 ⇒ 21/2, boxed (HIGH)
 *  3 Example 4 [JEE Adv] label — prove ΣCr²=(2n)Cn, evaluate n=4
 *  4 multiply (1+x)^n(1+x)^n, compare coeff of x^n
 *  5 coeff of x^n: symmetry argument (HIGH)
 *  6 n=4: 1²+4²+6²+4²+1²=70=8C4, boxed (HIGH)
 *  7 red-margin: sum of squares ≠ square of sum
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={60} size={23} fill={INK} script>
          {t("an integration sum, and the sum of squares", "ek integration sum, aur sum of squares")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 label */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={150} y={100} size={15} fill={AMBER_DARK} script anchor="start">
          Example 3 [JEE Main] — C0 + C1/2 + ⋯ + Cn/(n+1) for n=5
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={135} size={15} fill={INK} script anchor="start">
          {t("weights 1/(r+1) are the integration signature", "weights 1/(r+1) integration ki pehchaan hain")}
        </T>
      </Fade>

      {/* beat 2 — computed, boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={178} size={15} fill={AMBER_DARK} anchor="start">
          ΣCr/(r+1) = (2^(n+1)-1)/(n+1)   →[n=5]→   (2⁶-1)/6 = 63/6 = 21/2
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={roundRectD(135, 156, 640, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 3 — Example 4 label */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={150} y={245} size={15} fill={AMBER_DARK} anchor="start">
          Example 4 [JEE Adv] — prove ΣCr² = (2n)Cn, evaluate at n=4
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={280} size={15} fill={INK} script anchor="start">
          {t("multiply (1+x)^n(1+x)^n = (1+x)^(2n); compare coeff of x^n", "multiply (1+x)^n(1+x)^n = (1+x)^(2n); coeff of x^n compare karo")}
        </T>
      </Fade>

      {/* beat 5 — symmetry argument, HIGH */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={318} size={15} fill={AMBER_DARK} anchor="start">
          {t("coeff of x^n:  Σ Cr·C(n-r) = Σ Cr²  (symmetry)  = (2n)Cn", "coeff of x^n:  Σ Cr·C(n-r) = Σ Cr²  (symmetry)  = (2n)Cn")}
        </T>
      </Fade>

      {/* beat 6 — n=4 computed, boxed */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={150} y={360} size={16} fill={AMBER_DARK} anchor="start">
          n=4:  1²+4²+6²+4²+1² = 70 = ⁸C₄
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={roundRectD(135, 338, 420, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 7 — red-margin */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 150 400 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={170} y={424} size={15} fill={RED} anchor="start">
          {t("sum of squares ≠ square of sum: (2n)Cn, not (2^n)²", "sum of squares ≠ square of sum: (2n)Cn, (2^n)² nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
