/**
 * Ch09 · Section 16 — "Buoyancy in accelerating frames"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0]):
 *  0 title (always-on)
 *  1 text: when the fluid accelerates, replace g with g_eff
 *  2 diagram: a lift cabin, a floating object inside, acceleration arrow "a"
 *  3 formula: F_B = ρ_f V_sub g_eff
 *  4 text: lift up g_eff=g+a · lift down g_eff=g−a
 *  5 red-margin note: free fall — g_eff = 0, buoyancy vanishes
 *  6 text (green): everything else in floatation stays the same
 *
 * Layout plan:
 *  b1 | text (15, script)        | T mid  | x540  bl 114
 *  b2 | lift cabin                | Draw   | x420..660  y150..400
 *  b2 | water line + object       | Draw   | x470..610  y320 · rect x520..560 y300..340
 *  b2 | accel arrow "a"           | Draw+T | x690  y270..370 · label x705 bl 310
 *  b3 | formula (18, w700)        | T mid  | x540  bl 440
 *  b4 | text (14, script)         | T mid  | x540  bl 474
 *  b5 | margin bar (red)          | Draw   | x460  y496..520
 *  b5 | note (script 14, red)     | T st   | x476.. bl 514
 *  b6 | text (14, script, green)  | T mid  | x540  bl 552
 */

import React from "react";
import { Line, Rect, TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("buoyancy in accelerating frames", "accelerating frames mein buoyancy")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={15} fill={MUTED} script anchor="middle">
          {t("fluid accelerates ⇒ replace g with g_eff", "fluid accelerate karta ⇒ g ki jagah g_eff")}
        </T>
      </Fade>

      {/* beat 2 — the lift, the floating object, and the acceleration */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 420 150 H 660 V 400 H 420 Z" stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Line x1={470} y1={320} x2={610} y2={320} stroke={MUTED} strokeWidth={1.6} strokeDasharray="5 4" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <Rect x={520} y={300} width={40} height={40} fill={CREAM} stroke={INK} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <Draw on={beat >= 2} d={arrowD(690, 370, 690, 270)} stroke={INK} sw={2.6} dur={0.5} />
        <T x={705} y={314} size={14} fill={INK} anchor="start">
          a
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={440} size={18} fill={INK} weight={700} anchor="middle">
          F<TSpan fontSize={12} dy={4}>B</TSpan>
          <TSpan dy={-4}> = ρ</TSpan>
          <TSpan fontSize={12} dy={4}>f</TSpan>
          <TSpan dy={-4}> V</TSpan>
          <TSpan fontSize={12} dy={4}>sub</TSpan>
          <TSpan dy={-4}> g</TSpan>
          <TSpan fontSize={12} dy={4}>eff</TSpan>
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={474} size={14} fill={MUTED} script anchor="middle">
          {t("lift up: g_eff = g+a  ·  lift down: g_eff = g−a", "lift up: g_eff = g+a  ·  lift down: g_eff = g−a")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 460 496 L 460 520" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={476} y={514} size={14} fill={RED} script anchor="start">
          {t("free fall: g_eff = 0 — buoyancy vanishes", "free fall: g_eff = 0 — buoyancy gayab")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={552} size={14} fill={GREEN} script anchor="middle">
          {t("everything else in floatation stays the same", "floatation mein baaki sab kuch same rehta")}
        </T>
      </Fade>
    </Scene>
  );
}
