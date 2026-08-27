/**
 * M11 Ch07 · Section 30 — "Three standard moves: factor, identify, approximate"
 * Canvas 1080×620 · safe x36–1044, y30–596. FLAGGED for extra eye-scrutiny.
 * 8 board_content items, seq1=title. Three labeled "MOVE" blocks stacked.
 *
 * Beats (en [0, 5.8, 28.76, 46.25, 70.57, 91.31, 109.99, 129.88]):
 *  0 title
 *  1 recap: why the series continues for non-integer n
 *  2 MOVE 1 header + explanation: factor out the dominant term
 *  3 MOVE 1 formula, boxed (HIGH)
 *  4 MOVE 2 header + explanation: identify by matching terms
 *  5 MOVE 2 formula, boxed (HIGH)
 *  6 MOVE 3 header + explanation: approximate by truncating
 *  7 red-margin: full proof uses Taylor's theorem
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={INK} script>
          {t("turning the series into technique", "series ko technique mein badalna")}
        </T>
      </Fade>

      {/* beat 1 — recap */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={100} size={14} fill={MUTED} script>
          {t("falling-factorial is defined for any real n; only integers hit (n-n)=0", "falling-factorial har real n ke liye defined; sirf integers (n-n)=0 pe rukte")}
        </T>
      </Fade>

      {/* beat 2 — MOVE 1 */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={150} y={140} size={15} fill={AMBER_DARK} script anchor="start">
          MOVE 1 — FACTOR
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={150} y={165} size={15} fill={INK} script anchor="start">
          {t("factor out the dominant term so the bracket leads with 1", "dominant term nikaalo taaki bracket 1 se shuru ho")}
        </T>
      </Fade>

      {/* beat 3 — MOVE 1 formula, boxed */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={150} y={208} size={16} fill={AMBER_DARK} script anchor="start">
          (a+b)^n = a^n(1+b/a)^n,      |b/a| &lt; 1
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.2)} d={roundRectD(135, 186, 480, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 4 — MOVE 2 */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={150} y={258} size={15} fill={AMBER_DARK} script anchor="start">
          MOVE 2 — IDENTIFY
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={150} y={283} size={15} fill={INK} script anchor="start">
          {t("match its terms to 1, ny, n(n-1)/2! y²", "iske terms match karo 1, ny, n(n-1)/2! y² se")}
        </T>
      </Fade>

      {/* beat 5 — MOVE 2 formula, boxed */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={326} size={16} fill={AMBER_DARK} script anchor="start">
          3rd/(2nd)² = (n-1)/(2n)   ⇒   solve n, then y
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d={roundRectD(135, 304, 480, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 6 — MOVE 3 */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={150} y={376} size={15} fill={AMBER_DARK} script anchor="start">
          MOVE 3 — APPROXIMATE
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={150} y={401} size={15} fill={INK} script anchor="start">
          {t("truncate after 1+nx; keep n(n-1)/2 x² for more precision", "1+nx ke baad truncate karo; zyada precision ke liye n(n-1)/2 x² rakho")}
        </T>
      </Fade>

      {/* beat 7 — red-margin */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 150 435 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={170} y={459} size={14} fill={RED} script anchor="start">
          {t("full proof uses Taylor's theorem: coeff = 1/r! · d^r/dx^r (1+x)^n at x=0", "poora proof Taylor's theorem use karta: coeff = 1/r! · d^r/dx^r (1+x)^n, x=0 pe")}
        </T>
      </Fade>
    </Scene>
  );
}
