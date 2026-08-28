/**
 * Ch09 · Section 35 — "Streamline versus turbulent flow"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 9.22, 18.52, 27.48, 31.66, 42.84, 52.82]):
 *  0 title (always-on)
 *  1 text: in steady flow, velocity at a fixed point never changes with time
 *  2 LEFT: 5 parallel streamlines. RIGHT: 2 chaotic turbulent paths
 *  3 text: the tangent to a streamline gives the flow direction
 *  4 red-margin note: two streamlines can never cross
 *  5 text: bundle streamlines into a tube of flow — nothing leaks across
 *  6 text (red): push too hard and order dissolves into turbulence
 *
 * Layout plan:
 *  b2 | streamlines ×5 (ink)     | Draw  | x150..440  y220/260/300/340/380
 *  b2 | "streamline (laminar)"   | T mid  | x300  bl 400
 *  b2 | turbulent paths ×2       | Draw   | x630..930  y200..380
 *  b2 | "turbulent"              | T mid  | x780  bl 400
 *  b1 | text (14, script)        | T mid  | x540  bl 114
 *  b3 | text (14, script)        | T mid  | x540  bl 440
 *  b4 | margin bar (red)         | Draw   | x460  y465..489
 *  b4 | note (script 14, red)    | T st   | x476.. bl 485
 *  b5 | text (14, script)        | T mid  | x540  bl 515
 *  b6 | text (14, script, red)   | T mid  | x540  bl 548
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("streamline versus turbulent flow", "streamline versus turbulent flow")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("steady flow: velocity at a fixed point never changes", "steady flow: fixed point pe velocity kabhi nahi badalta")}
        </T>
      </Fade>

      {/* beat 2 — laminar vs turbulent */}
      {[220, 260, 300, 340, 380].map((y, i) => (
        <Fade key={y} on={beat >= 2} delay={dl(2, 0.2 + i * 0.25)}>
          <Draw on={beat >= 2} d={arrowD(150, y, 440, y)} stroke={INK} sw={2} dur={0.6} />
        </Fade>
      ))}
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={300} y={400} size={13} fill={MUTED} anchor="middle">
          {t("streamline (laminar)", "streamline (laminar)")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Draw
          on={beat >= 2}
          d="M 630 300 Q 660 230 700 290 Q 740 350 780 260 Q 820 320 860 240 Q 900 300 930 270"
          stroke={INK}
          sw={1.8}
          dur={0.9}
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <Draw
          on={beat >= 2}
          d="M 630 340 Q 670 370 710 320 Q 750 280 790 350 Q 830 300 870 360 Q 910 310 930 340"
          stroke={INK}
          sw={1.8}
          dur={0.9}
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.8)}>
        <T x={780} y={400} size={13} fill={MUTED} anchor="middle">
          {t("turbulent", "turbulent")}
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={440} size={14} fill={MUTED} script anchor="middle">
          {t("the tangent to a streamline gives the flow direction", "streamline ka tangent flow direction deta")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 460 465 L 460 489" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={476} y={485} size={14} fill={RED} script anchor="start">
          {t("two streamlines can never cross", "do streamlines kabhi cross nahi hoti")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={515} size={14} fill={MUTED} script anchor="middle">
          {t("bundle streamlines into a tube of flow — nothing leaks across", "streamlines ko tube of flow mein bundle karo — kuch leak nahi hota")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={548} size={14} fill={RED} script anchor="middle">
          {t("push too hard and order dissolves into turbulence", "zyada push karo toh order turbulence mein dissolve ho jaata")}
        </T>
      </Fade>
    </Scene>
  );
}
