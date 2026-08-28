/**
 * Ch09 · Section 55 — "Glass sphere in glycerine" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 7.42, 20.48, 28.25, 29.25, 30.25, 31.25]):
 *  0 title (always-on)
 *  1 text: glass sphere r=2.0mm, ρ=2500, in glycerine (1260, η=0.83)
 *  2 sphere + weight/buoyancy/drag arrows (reuses the sec50/51 force diagram)
 *  3 formula v_t = (2/9)r²(ρ_b−ρ_f)g/η ≈ 1.33×10⁻² m/s
 *  4 formula F_v = 6πηrv_t ≈ 4.16×10⁻⁴ N
 *  5 formula W_app = (4/3)πr³(ρ_b−ρ_f)g ≈ 4.16×10⁻⁴ N
 *  6 red-margin note: drag equals apparent weight — the balance confirmed
 *
 * Layout plan:
 *  b2 | sphere + 3 force arrows    | (same geometry as Ch09Sec50/51 beat 2)
 *  b1 | text (13, script)          | T mid  | x540  bl 114
 *  b3 | formula (14, w700)         | T mid  | x540  bl 420
 *  b4 | formula (14, w700)         | T mid  | x540  bl 448
 *  b5 | formula (14, w700)         | T mid  | x540  bl 476
 *  b6 | margin bar (red)           | Draw   | x460  y498..522
 *  b6 | note (script 14, red)      | T st   | x476.. bl 518
 */

import React from "react";
import { Circle, TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec55({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("JEE Main: sphere in glycerine", "JEE Main: sphere in glycerine")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={13} fill={MUTED} script anchor="middle">
          {t("glass sphere r=2.0mm, ρ=2500, in glycerine (1260, η=0.83)", "glass sphere r=2.0mm, ρ=2500, glycerine mein (1260, η=0.83)")}
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
        <T x={540} y={420} size={14} fill={INK} weight={700} anchor="middle">
          v<TSpan fontSize={10} dy={4}>t</TSpan>
          <TSpan dy={-4}> = (2/9)r²(ρ</TSpan>
          <TSpan fontSize={10} dy={4}>b</TSpan>
          <TSpan dy={-4}>−ρ</TSpan>
          <TSpan fontSize={10} dy={4}>f</TSpan>
          <TSpan dy={-4}>)g/η ≈ 1.33×10⁻² m/s</TSpan>
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={448} size={14} fill={INK} weight={700} anchor="middle">
          F<TSpan fontSize={10} dy={4}>v</TSpan>
          <TSpan dy={-4}> = 6πηrv</TSpan>
          <TSpan fontSize={10} dy={4}>t</TSpan>
          <TSpan dy={-4}> ≈ 4.16×10⁻⁴ N</TSpan>
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={476} size={14} fill={INK} weight={700} anchor="middle">
          W<TSpan fontSize={10} dy={4}>app</TSpan>
          <TSpan dy={-4}> = (4/3)πr³(ρ</TSpan>
          <TSpan fontSize={10} dy={4}>b</TSpan>
          <TSpan dy={-4}>−ρ</TSpan>
          <TSpan fontSize={10} dy={4}>f</TSpan>
          <TSpan dy={-4}>)g ≈ 4.16×10⁻⁴ N</TSpan>
        </T>
      </Fade>

      {/* beat 6 */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 460 498 L 460 522" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={476} y={518} size={14} fill={RED} script anchor="start">
          {t("drag equals apparent weight — the balance confirmed", "drag apparent weight ke barabar — balance confirm hota")}
        </T>
      </Fade>
    </Scene>
  );
}
