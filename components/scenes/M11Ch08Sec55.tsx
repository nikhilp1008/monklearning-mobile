/**
 * M11 Ch08 · Section 55 — "AM/GM/HM: the traps and the pro-tips"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=tips. Subtopic 5 (AM-GM-HM)
 * closer. Only 5 middle items (not 4+2), so a simple stacked list
 * bookended by red banners instead of forcing a grid.
 *
 * Beats (en [0, 5.21, 19.37, 35.41, 50.01, 63.66, 78.25, 87.64]):
 *  0 title (always-on)
 *  1 red top banner: direction trap
 *  2-3 two neutral insight lines
 *  4-6 three green pro-tip lines
 *  7 red bottom banner: sanity check
 *
 * Layout plan:
 *  b1 | banner x160 y85 w760 h40 (text bl~110)
 *  b2 | text bl150 cx540
 *  b3 | text bl178 cx540
 *  b4 | text bl210 cx540
 *  b5 | text bl238 cx540
 *  b6 | text bl266 cx540
 *  b7 | banner x160 y295 w760 h42 (text bl~321)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch08Sec55({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={INK} anchor="middle" script>
          {t("Means relationship — the traps, and the fast moves", "Means relationship — traps, aur fast moves")}
        </T>
      </Fade>

      {/* beat 1 — top banner: direction trap */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d={roundRectD(160, 85, 760, 40, 10)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={540} y={110} size={14} fill={RED} anchor="middle" weight={700} script>
          {t("direction trap: writing the chain backwards as H ≥ G ≥ A", "direction trap: chain ulta likhna H ≥ G ≥ A")}
        </T>
      </Fade>

      {/* beat 2 — reality condition */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={150} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("reality: A ≥ G is exactly the real-roots condition for the board quadratic", "reality: A ≥ G hi board quadratic ki real-roots condition hai")}
        </T>
      </Fade>

      {/* beat 3 — centre on A */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={178} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("centre the recovery quadratic on A, not on G", "recovery quadratic ko A pe centre karo, G pe nahi")}
        </T>
      </Fade>

      {/* beat 4 — pro-tip: jump to the quadratic */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={210} size={14} fill={GREEN_DARK} anchor="middle" weight={700} script>
          {t("pro-tip: to find two numbers from means, jump to x²-2Ax+G²=0", "pro-tip: means se numbers nikalne ke liye x²-2Ax+G²=0 pe jump karo")}
        </T>
      </Fade>

      {/* beat 5 — pro-tip: min/max */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={238} size={14} fill={GREEN_DARK} anchor="middle" weight={700} script>
          {t("for min/max of x+k/x-type expressions, AM ≥ GM gives it in one line", "x+k/x-type expressions ke min/max ke liye, AM ≥ GM ek line mein deta hai")}
        </T>
      </Fade>

      {/* beat 6 — equality locates the optimiser */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={266} size={14} fill={GREEN_DARK} anchor="middle" weight={700} script>
          {t("equality a = b always locates the optimiser", "equality a = b hamesha optimiser locate karti hai")}
        </T>
      </Fade>

      {/* beat 7 — bottom banner: sanity check */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d={roundRectD(160, 295, 760, 42, 10)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={540} y={321} size={14} fill={RED} anchor="middle" weight={700} script>
          {t("sanity check: G is the middle term of the GP A,G,H — a fast ordering test", "sanity check: G, GP A,G,H ka middle term hai — fast ordering test")}
        </T>
      </Fade>
    </Scene>
  );
}
