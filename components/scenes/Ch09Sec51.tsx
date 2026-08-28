/**
 * Ch09 · Section 51 — "Deriving terminal velocity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 6.49, 16.13, 23.21, 33.62, 34.62, 35.62, 36.62]):
 *  0 title (always-on)
 *  1 text: list the three forces on a falling sphere of radius r
 *  2 sphere + weight/buoyancy/drag arrows (reuses sec50's force diagram)
 *  3 formula W = (4/3)πr³ρ_b g,  F_B = (4/3)πr³ρ_f g
 *  4 formula F_v = 6πηrv (Stokes)
 *  5 text: at terminal speed, weight equals buoyancy plus drag
 *  6 formula 6πηr v_t = (4/3)πr³(ρ_b−ρ_f)g
 *  7 formula (green) v_t = (2/9) r²(ρ_b−ρ_f)g / η
 *
 * Layout plan:
 *  b2 | sphere + 3 force arrows    | (same geometry as Ch09Sec50 beat 2)
 *  b1 | text (14, script)          | T mid  | x540  bl 114
 *  b3 | formula (13, w700)         | T mid  | x540  bl 420
 *  b4 | formula (15, w700)         | T mid  | x540  bl 448
 *  b5 | text (13, script)          | T mid  | x540  bl 474
 *  b6 | formula (13, w700)         | T mid  | x540  bl 500
 *  b7 | formula (17, w800, grn)    | T mid  | x540  bl 530
 */

import React from "react";
import { Circle, TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("deriving terminal velocity", "terminal velocity derive karte hain")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("list the three forces on a falling sphere of radius r", "radius r ki falling sphere pe teen forces list karo")}
        </T>
      </Fade>

      {/* beat 2 — the three forces */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Circle cx={540} cy={280} r={30} fill={CREAM} stroke={INK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Draw on={beat >= 2} d={arrowD(540, 315, 540, 375)} stroke={INK} sw={2.6} dur={0.5} />
        <T x={540} y={392} size={14} fill={INK} anchor="middle">
          W
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <Draw on={beat >= 2} d={arrowD(515, 245, 515, 210)} stroke={INK} sw={2} dur={0.4} />
        <T x={515} y={198} size={12} fill={INK} anchor="middle">
          F<TSpan fontSize={8} dy={3}>B</TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <Draw on={beat >= 2} d={arrowD(565, 245, 565, 180)} stroke={INK} sw={2.4} dur={0.5} />
        <T x={565} y={168} size={13} fill={INK} anchor="middle">
          F<TSpan fontSize={9} dy={3}>v</TSpan>
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={420} size={13} fill={INK} weight={700} anchor="middle">
          W = (4/3)πr³ρ<TSpan fontSize={9} dy={3}>b</TSpan>
          <TSpan dy={-3}> g,  F</TSpan>
          <TSpan fontSize={9} dy={3}>B</TSpan>
          <TSpan dy={-3}> = (4/3)πr³ρ</TSpan>
          <TSpan fontSize={9} dy={3}>f</TSpan>
          <TSpan dy={-3}> g</TSpan>
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={448} size={15} fill={INK} weight={700} anchor="middle">
          F<TSpan fontSize={10} dy={4}>v</TSpan>
          <TSpan dy={-4}> = 6πηrv  (Stokes)</TSpan>
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={474} size={13} fill={MUTED} script anchor="middle">
          {t("at terminal speed: weight = buoyancy + drag", "terminal speed pe: weight = buoyancy + drag")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={500} size={13} fill={INK} weight={700} anchor="middle">
          6πηr v<TSpan fontSize={9} dy={3}>t</TSpan>
          <TSpan dy={-3}> = (4/3)πr³(ρ</TSpan>
          <TSpan fontSize={9} dy={3}>b</TSpan>
          <TSpan dy={-3}>−ρ</TSpan>
          <TSpan fontSize={9} dy={3}>f</TSpan>
          <TSpan dy={-3}>)g</TSpan>
        </T>
      </Fade>

      {/* beat 7 */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={530} size={17} fill={GREEN} weight={800} anchor="middle">
          v<TSpan fontSize={11} dy={4}>t</TSpan>
          <TSpan dy={-4}> = (2/9) r²(ρ</TSpan>
          <TSpan fontSize={11} dy={4}>b</TSpan>
          <TSpan dy={-4}>−ρ</TSpan>
          <TSpan fontSize={11} dy={4}>f</TSpan>
          <TSpan dy={-4}>)g / η</TSpan>
        </T>
      </Fade>
    </Scene>
  );
}
