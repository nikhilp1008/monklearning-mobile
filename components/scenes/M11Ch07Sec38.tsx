/**
 * M11 Ch07 · Section 38 — "Last two digits, and an integral/fractional
 * part proof"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type=worked_examples.
 * 8 board_content items, seq1="Example 3" label — title invented, always-on.
 *
 * Beats (en [0, 7.42, 27.31, 47.7, 66.56, 83.2, 104.96, 129.79]):
 *  0 Example 3 [JEE Main] label — last two digits of 3^400
 *  1 3^400 = (3^4)^100 = 81^100 = (80+1)^100
 *  2 (80+1)^100 ≡ 1 (mod 100), boxed (HIGH)
 *  3 red-margin HIGH: why every r≥1 term vanishes, last two digits=01
 *  4 Example 4 [JEE Adv] label — (7+4√3)^n=I+f, prove (I+f)(1-f)=1
 *  5 f'=(7-4√3)^n, 7-4√3≈0.072 ⇒ 0<f'<1
 *  6 sum of conjugates is an integer ⇒ f'=1-f
 *  7 (I+f)(1-f) = (49-48)^n = 1, boxed (HIGH)
 *
 * Math hand-verified: 100C1·80=8000≡0(mod100), 80²=6400≡0(mod100), so
 * (80+1)^100≡1; 7-4√3≈0.0718; 7²-(4√3)²=49-48=1.
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={60} size={20} fill={INK} script>
          {t("last two digits, and an integral/fractional part proof", "aakhri do digits, aur ek integral/fractional part proof")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 label */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={150} y={100} size={15} fill={AMBER_DARK} anchor="start">
          Example 3 [JEE Main] — last two digits of 3⁴⁰⁰
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={135} size={16} fill={INK} anchor="start">
          3⁴⁰⁰ = (3⁴)¹⁰⁰ = 81¹⁰⁰ = (80+1)¹⁰⁰
        </T>
      </Fade>

      {/* beat 2 — boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={180} size={15} fill={AMBER_DARK} anchor="start">
          (80+1)¹⁰⁰ = 1 + 100C1·80 + ⋯ ≡ 1   (mod 100)
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={roundRectD(135, 158, 500, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 3 — red-margin */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 150 224 v 56" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={170} y={246} size={14} fill={RED} script anchor="start">
          {t("100·80 ≡ 0 and 80² = 6400 ≡ 0 — every r≥1 term vanishes", "100·80 ≡ 0 aur 80² = 6400 ≡ 0 — har r≥1 term vanish")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={170} y={269} size={14} fill={RED} script anchor="start">
          {t("last two digits = 01", "aakhri do digits = 01")}
        </T>
      </Fade>

      {/* beat 4 — Example 4 label */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={310} size={15} fill={AMBER_DARK} script anchor="start">
          Example 4 [JEE Adv] — (7+4√3)^n=I+f, prove (I+f)(1-f)=1
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={345} size={15} fill={INK} script anchor="start">
          f' = (7-4√3)^n,    7-4√3 ≈ 0.072    ⇒    0 &lt; f' &lt; 1
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={150} y={378} size={15} fill={INK} script anchor="start">
          {t("(7+4√3)^n + (7-4√3)^n = integer   ⇒   f' = 1-f", "(7+4√3)^n + (7-4√3)^n = integer   ⇒   f' = 1-f")}
        </T>
      </Fade>

      {/* beat 7 — boxed final */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={150} y={422} size={17} fill={AMBER_DARK} anchor="start">
          (I+f)(1-f) = (I+f)f' = (7²-48)^n = 1
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.2)} d={roundRectD(135, 400, 480, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />
    </Scene>
  );
}
