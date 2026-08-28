/**
 * Ch09 · Section 56 — "Power dissipated goes as r to the fifth" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 1.0, 2.0, 3.0, 7.86, 19.73, 32.95]):
 *  0 title (always-on)
 *  1 text: at terminal velocity, all drag work becomes heat
 *  2 small sphere (r, small heat burst) vs large sphere (2r, big heat burst)
 *  3 formula P = F_v v_t = 6πηr v_t²
 *  4 formula v_t² = (4/81) r⁴(ρ_b−ρ_f)²g²/η²
 *  5 formula (green) P = (8π/27) r⁵(ρ_b−ρ_f)²g²/η ∝ r⁵
 *  6 red-margin note: double the radius, thirty-two times the heating
 *
 * Layout plan:
 *  b2 | small sphere + ticks ×4    | circle+Draw | c(280,280) r20
 *  b2 | "r" (12)                   | T mid  | x280  bl 340
 *  b2 | large sphere + ticks ×8    | circle+Draw | c(700,280) r45
 *  b2 | "2r" (12)                  | T mid  | x700  bl 365
 *  b1 | text (14, script)          | T mid  | x540  bl 114
 *  b3 | formula (17, w700)         | T mid  | x540  bl 395
 *  b4 | formula (14, w700)         | T mid  | x540  bl 423
 *  b5 | formula (16, w800, grn)    | T mid  | x540  bl 453
 *  b6 | margin bar (red)           | Draw   | x460  y472..496
 *  b6 | note (script 14, red)      | T st   | x476.. bl 492
 */

import React from "react";
import { Circle, Line, TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec56({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const smallTicks = Array.from({ length: 4 }, (_, i) => (i * Math.PI) / 2 + Math.PI / 4);
  const bigTicks = Array.from({ length: 8 }, (_, i) => (i * Math.PI) / 4);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={20} fill={RED} script>
          {t("JEE Advanced: heating goes as r to 5", "JEE Advanced: heating goes as r to 5")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("at terminal velocity, all drag work becomes heat", "terminal velocity pe, saara drag work heat ban jaata")}
        </T>
      </Fade>

      {/* beat 2 — small vs large: a dramatic difference in heat */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Circle cx={280} cy={280} r={20} fill={CREAM} stroke={INK} strokeWidth={1.8} />
        {smallTicks.map((a, i) => (
          <Line
            key={i}
            x1={280 + 24 * Math.cos(a)}
            y1={280 + 24 * Math.sin(a)}
            x2={280 + 34 * Math.cos(a)}
            y2={280 + 34 * Math.sin(a)}
            stroke={MUTED}
            strokeWidth={1.6}
          />
        ))}
        <T x={280} y={340} size={12} fill={MUTED} anchor="middle">
          r
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <Circle cx={700} cy={280} r={45} fill={CREAM} stroke={INK} strokeWidth={2.2} />
        {bigTicks.map((a, i) => (
          <Line
            key={i}
            x1={700 + 50 * Math.cos(a)}
            y1={280 + 50 * Math.sin(a)}
            x2={700 + 72 * Math.cos(a)}
            y2={280 + 72 * Math.sin(a)}
            stroke={RED}
            strokeWidth={2.2}
          />
        ))}
        <T x={700} y={365} size={12} fill={MUTED} anchor="middle">
          2r
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={395} size={17} fill={INK} weight={700} anchor="middle">
          P = F<TSpan fontSize={11} dy={4}>v</TSpan>
          <TSpan dy={-4}> v</TSpan>
          <TSpan fontSize={11} dy={4}>t</TSpan>
          <TSpan dy={-4}> = 6πηr v</TSpan>
          <TSpan fontSize={11} dy={4}>t</TSpan>
          <TSpan dy={-4}>²</TSpan>
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={423} size={14} fill={INK} weight={700} anchor="middle">
          v<TSpan fontSize={10} dy={4}>t</TSpan>
          <TSpan dy={-4}>² = (4/81) r⁴(ρ</TSpan>
          <TSpan fontSize={10} dy={4}>b</TSpan>
          <TSpan dy={-4}>−ρ</TSpan>
          <TSpan fontSize={10} dy={4}>f</TSpan>
          <TSpan dy={-4}>)²g²/η²</TSpan>
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={453} size={16} fill={GREEN} weight={800} anchor="middle">
          P = (8π/27) r⁵(ρ<TSpan fontSize={11} dy={4}>b</TSpan>
          <TSpan dy={-4}>−ρ</TSpan>
          <TSpan fontSize={11} dy={4}>f</TSpan>
          <TSpan dy={-4}>)²g²/η ∝ r⁵</TSpan>
        </T>
      </Fade>

      {/* beat 6 */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 460 472 L 460 496" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={476} y={492} size={14} fill={RED} script anchor="start">
          {t("double the radius, thirty-two times the heating", "radius double, heating batees guna")}
        </T>
      </Fade>
    </Scene>
  );
}
