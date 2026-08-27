/**
 * M11 Ch08 · Section 64 — "AGP: the trap list and the pro-tips"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=tips. Subtopic 6 (AGP) closer.
 * 5 middle items (like Sec55), so a stacked list bookended by red
 * banners instead of forcing a 4+2 grid.
 *
 * Beats (en [0, 4.61, 16.47, 27.73, 40.11, 51.97, 66.82, 77.57]):
 *  0 title (always-on)
 *  1 red top banner: wrong method
 *  2-4 three neutral insight lines
 *  5-6 two green pro-tip lines
 *  7 red bottom banner: recognise the shape
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

export default function M11Ch08Sec64({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={INK} anchor="middle" script>
          {t("AGP — the traps, and the fast moves", "AGP — traps, aur fast moves")}
        </T>
      </Fade>

      {/* beat 1 — top banner: wrong method */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d={roundRectD(160, 85, 760, 40, 10)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={540} y={110} size={13} fill={RED} anchor="middle" weight={700} script>
          {t("wrong method: AP or GP formula alone, or Σ-polynomial", "wrong method: AP ya GP formula akele, ya Σ-polynomial")}
        </T>
      </Fade>

      {/* beat 2 — convergence */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={150} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("convergence: write S_∞ only after checking |r| < 1", "convergence: S_∞ tabhi likho jab |r| < 1 check ho")}
        </T>
      </Fade>

      {/* beat 3 — r=1 case */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={178} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("r=1 means the AGP is a plain AP — use the AP sum, not division", "r=1 par AGP plain AP hai — AP sum use karo, division nahi")}
        </T>
      </Fade>

      {/* beat 4 — don't swap parts */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={206} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("don't swap which factor is the AP part and which is the GP part", "AP part aur GP part swap mat karo")}
        </T>
      </Fade>

      {/* beat 5 — pro-tip: re-derive */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={238} size={14} fill={GREEN_DARK} anchor="middle" weight={700} script>
          {t("pro-tip: re-derive S_n with multiply-by-r every time — faster than the formula", "pro-tip: har baar multiply-by-r se S_n re-derive karo — formula se fast")}
        </T>
      </Fade>

      {/* beat 6 — pro-tip: memorise S_infinity */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={266} size={14} fill={GREEN_DARK} anchor="middle" weight={700}>
          {"for S_∞, memorise a/(1-r) + dr/(1-r)²"}
        </T>
      </Fade>

      {/* beat 7 — bottom banner: recognise the shape */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d={roundRectD(160, 295, 760, 42, 10)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={540} y={321} size={14} fill={RED} anchor="middle" weight={700} script>
          {t("recognise an AGP by shape: (linear in n) × (r^(n-1))", "AGP ko shape se pehchano: (n mein linear) × (r^(n-1))")}
        </T>
      </Fade>
    </Scene>
  );
}
