/**
 * Ch09 · Section 75 — "Excess pressure inside a soap bubble"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 4.52, 14.85, 23.64, 31.4, 37.8, 38.8, 39.8]):
 *  0 title (always-on)
 *  1 text: cut a bubble of radius R into two hemispheres
 *  2 circle + dashed cut line + tension arrows (pull together) + pressure arrows (push apart)
 *  3 text: surface tension pulls the halves together, over two surfaces
 *  4 formula F_ST = 2×(2πR)S = 4πRS
 *  5 text: the excess pressure pushes them apart over the circle
 *  6 formula ΔPπR² = 4πRS
 *  7 formula (green) ΔP = 4S/R
 *
 * Layout plan:
 *  b2 | circle (bubble cross-sec) | circle | c(540,280) r80
 *  b2 | cut line (dashed)         | line   | x540  y200..360
 *  b2 | tension arrows ×2         | Draw   | (510,220)→(540,220) / (570,220)→(540,220)
 *  b2 | pressure arrows ×2        | Draw   | (500,280)→(460,280) / (580,280)→(620,280)
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | text (13, script)         | T mid  | x540  bl 400
 *  b4 | formula (17, w700)        | T mid  | x540  bl 428
 *  b5 | text (13, script)         | T mid  | x540  bl 456
 *  b6 | formula (17, w700)        | T mid  | x540  bl 484
 *  b7 | formula (20, w800, grn)   | T mid  | x540  bl 516
 */

import React from "react";
import { Circle, Line, TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec75({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("excess pressure in a soap bubble", "soap bubble mein excess pressure")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("cut a bubble of radius R into two hemispheres", "radius R ki bubble ko do hemispheres mein kaato")}
        </T>
      </Fade>

      {/* beat 2 — tension pulls together, pressure pushes apart */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Circle cx={540} cy={280} r={80} fill="none" stroke={INK} strokeWidth={2.4} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Line x1={540} y1={200} x2={540} y2={360} stroke={MUTED} strokeWidth={1.8} strokeDasharray="6 5" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <Draw on={beat >= 2} d={arrowD(510, 220, 540, 220)} stroke={INK} sw={2} dur={0.4} />
        <Draw on={beat >= 2} d={arrowD(570, 220, 540, 220)} stroke={INK} sw={2} dur={0.4} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Draw on={beat >= 2} d={arrowD(500, 280, 460, 280)} stroke={RED} sw={2.2} dur={0.4} />
        <Draw on={beat >= 2} d={arrowD(580, 280, 620, 280)} stroke={RED} sw={2.2} dur={0.4} />
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={400} size={13} fill={MUTED} script anchor="middle">
          {t("surface tension pulls the halves together, over two surfaces", "surface tension halves ko together khinchti, do surfaces pe")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={428} size={17} fill={INK} weight={700} anchor="middle">
          F<TSpan fontSize={11} dy={4}>ST</TSpan>
          <TSpan dy={-4}> = 2×(2πR)S = 4πRS</TSpan>
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={456} size={13} fill={MUTED} script anchor="middle">
          {t("the excess pressure pushes them apart over the circle", "excess pressure circle ke upar unhe apart push karta")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={484} size={17} fill={INK} weight={700} anchor="middle">
          ΔP·πR² = 4πRS
        </T>
      </Fade>

      {/* beat 7 */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={516} size={20} fill={GREEN} weight={800} anchor="middle">
          ΔP = 4S/R
        </T>
      </Fade>
    </Scene>
  );
}
