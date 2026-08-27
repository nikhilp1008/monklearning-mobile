/**
 * M11 Ch08 · Section 74 — "Special Series: the traps and the pro-tips"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=tips. Subtopic 7 closer. 5
 * middle items (like Sec55/64), stacked list bookended by red banners.
 *
 * Beats (en [0, 5.55, 19.8, 34.39, 46.68, 59.31, 72.19, 81.92]):
 *  0 title (always-on)
 *  1 red top banner: formula confusion
 *  2-4 three neutral insight lines
 *  5-6 two green pro-tip lines
 *  7 red bottom banner: re-derive if forgotten
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

export default function M11Ch08Sec74({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={INK} anchor="middle" script>
          {t("Special series — the traps, and the fast moves", "Special series — traps, aur fast moves")}
        </T>
      </Fade>

      {/* beat 1 — top banner: formula confusion */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d={roundRectD(160, 85, 760, 40, 10)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={540} y={110} size={13} fill={RED} anchor="middle" weight={700} script>
          {t("formula confusion: swapping the /6 form (Σn²) and the squared form (Σn³)", "formula confusion: /6 form (Σn²) aur squared form (Σn³) swap karna")}
        </T>
      </Fade>

      {/* beat 2 — term recognition */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={150} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("term recognition: find t_n as a polynomial BEFORE summing (expand products)", "term recognition: t_n ko polynomial banao summing se PEHLE (products expand karo)")}
        </T>
      </Fade>

      {/* beat 3 — index range */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={178} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("index range: use Σ(1 to n) - Σ(1 to m-1) when a sum doesn't start at 1", "index range: Σ(1 se n) - Σ(1 se m-1) use karo jab sum 1 se shuru na ho")}
        </T>
      </Fade>

      {/* beat 4 — method of differences trap */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={206} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("method of differences: don't mis-degree t_n from only first differences", "method of differences: sirf first differences se t_n ka degree galat mat karo")}
        </T>
      </Fade>

      {/* beat 5 — pro-tip: the whole game */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={238} size={14} fill={GREEN_DARK} anchor="middle" weight={700} script>
          {t("pro-tip: find t_n → expand to powers of n → apply standard sums", "pro-tip: t_n dhoondo → n ki powers mein expand karo → standard sums lagao")}
        </T>
      </Fade>

      {/* beat 6 — shortcut */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={266} size={14} fill={GREEN_DARK} anchor="middle" weight={700}>
          {"shortcut: Σn³ = (Σn)² — recognise cubes on sight"}
        </T>
      </Fade>

      {/* beat 7 — bottom banner: re-derive if forgotten */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d={roundRectD(160, 295, 760, 42, 10)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={540} y={321} size={14} fill={RED} anchor="middle" weight={700} script>
          {t("forgot Σn²? re-derive in 4 lines from k³-(k-1)³", "Σn² bhool gaye? k³-(k-1)³ se 4 lines mein re-derive karo")}
        </T>
      </Fade>
    </Scene>
  );
}
