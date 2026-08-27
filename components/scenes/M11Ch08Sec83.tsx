/**
 * M11 Ch08 · Section 83 — "Telescoping: the traps and the pro-tips"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=tips. Subtopic 8 closer. 5
 * middle items (like Sec55/64/74), stacked list bookended by red banners.
 *
 * Beats (en [0, 6.14, 21.85, 37.38, 48.81, 58.28, 77.4, 86.87]):
 *  0 title (always-on)
 *  1 red top banner: no difference-form
 *  2-4 three neutral insight lines
 *  5-6 two green pro-tip lines
 *  7 red bottom banner: the universal answer shape
 *
 * Layout plan:
 *  b1 | banner x160 y85 w760 h40 (text bl~110)
 *  b2 | text bl150 cx540
 *  b3 | text bl178 cx540
 *  b4 | text bl206 cx540
 *  b5 | text bl238 cx540
 *  b6 | text bl266 cx540
 *  b7 | banner x160 y295 w760 h42 (text bl~321)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch08Sec83({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={INK} anchor="middle" script>
          {t("Telescoping — the traps, and the fast moves", "Telescoping — traps, aur fast moves")}
        </T>
      </Fade>

      {/* beat 1 — top banner: no difference-form */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d={roundRectD(160, 85, 760, 40, 10)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={540} y={110} size={13} fill={RED} anchor="middle" weight={700} script>
          {t("no difference-form: brute-forcing or applying Σn^k to a fraction/surd", "no difference-form: brute-force ya fraction/surd pe Σn^k lagana")}
        </T>
      </Fade>

      {/* beat 2 — endpoint sign */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={150} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("endpoint sign: answer is V_1-V_(n+1), not V_0-V_n — watch off-by-one", "endpoint sign: answer V_1-V_(n+1) hai, V_0-V_n nahi — off-by-one dekho")}
        </T>
      </Fade>

      {/* beat 3 — lost multiplier */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={178} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("lost multiplier: keep the 1/2 or 1/k the split carries", "lost multiplier: split se aane wala 1/2 ya 1/k rakho")}
        </T>
      </Fade>

      {/* beat 4 — V_n divisor */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={206} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("V_n divisor: divide by (number of factors + 1)", "V_n divisor: (factors ki sankhya + 1) se divide karo")}
        </T>
      </Fade>

      {/* beat 5 — pro-tip: the routing rule */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={238} size={14} fill={GREEN_DARK} anchor="middle" weight={700} script>
          {t("pro-tip: fraction → partial fractions; product → V_n; surd → rationalise", "pro-tip: fraction → partial fractions; product → V_n; surd → rationalise")}
        </T>
      </Fade>

      {/* beat 6 — factorials */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={266} size={14} fill={GREEN_DARK} anchor="middle" weight={700}>
          {"factorials → write t_r = f(r+1) - f(r)"}
        </T>
      </Fade>

      {/* beat 7 — bottom banner: the universal shape */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d={roundRectD(160, 295, 760, 42, 10)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={540} y={321} size={14} fill={RED} anchor="middle" weight={700} script>
          {t("the answer is always (first survivor) − (last survivor)", "answer hamesha (first survivor) − (last survivor) hai")}
        </T>
      </Fade>
    </Scene>
  );
}
