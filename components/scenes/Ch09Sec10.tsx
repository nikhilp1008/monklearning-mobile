/**
 * Ch09 · Section 10 — "Mercury U-tube: the factor of two" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en reveals [0, 8.11, 18.69, 19.69, 20.69, 21.69, 22.69, 23.69, 24.69]):
 *  0 title (always-on)
 *  1 U-tube drawn, mercury at equal baseline, water column outlined + H
 *  2 mercury drops x (left) / rises x (right); "2x" gap marked
 *  3 red-margin note: drop x left, rise x right — difference 2x
 *  4 text: balance pressures at the lower mercury surface
 *  5 formula: P₀ + ρ_w gH = P₀ + ρ_Hg g(2x)
 *  6 formula: 2x = H × (1000/13600) = 1.0 cm
 *  7 formula (green): x = 0.5 cm
 *  8 closing: mercury +0.5 cm right, −0.5 cm left
 *
 * Layout plan:
 *  b1 | left/right tubes         | Draw  | x300..360 / x500..560  y190..350
 *  b1 | bottom connector          | Draw   | x360..500  y340
 *  b1 | mercury baseline (dashed) | line   | y270, both tubes
 *  b1 | water column (cream)      | rect   | x300..360  y210..285
 *  b1 | H bracket + label         | Draw+T | x275..285  bl 247
 *  b2 | mercury fill left (drop)  | rect   | x300..360  y285..350
 *  b2 | mercury fill right (rise) | rect   | x500..560  y255..350
 *  b2 | "2x" ticks + label        | Draw+T | x425..435  y255..285 · label x445 bl273
 *  b3 | margin bar (red)          | Draw   | x460  y363..387
 *  b3 | note (script 14, red)     | T st   | x476.. bl 375
 *  b4 | text (13, muted)          | T st   | x480.. bl 411
 *  b5 | formula (15, w700)        | T st   | x480.. bl 447
 *  b6 | formula (15, w700)        | T st   | x480.. bl 483
 *  b7 | formula (16, w800, green) | T st   | x480.. bl 519
 *  b8 | closing (14, script, grn) | T st   | x480.. bl 555
 */

import React from "react";
import { Line, Rect, TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("JEE Advanced: mercury U-tube", "JEE Advanced: mercury U-tube")}
        </T>
      </Fade>

      {/* beat 1 — the U-tube, mercury level, water poured in */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d="M 300 190 V 350 H 360 V 190" stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d="M 500 190 V 350 H 560 V 190" stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d="M 360 340 H 500" stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Line x1={302} y1={270} x2={358} y2={270} stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 3" />
        <Line x1={502} y1={270} x2={558} y2={270} stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 3" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <Rect x={302} y={210} width={56} height={75} fill={CREAM} />
        <Draw on={beat >= 1} d="M 280 210 H 285 M 280 285 H 285 M 282 210 V 285" stroke={INK} sw={1.4} dur={0.5} />
        <T x={275} y={247} size={12} fill={MUTED} anchor="end">
          H = 13.6 cm
        </T>
      </Fade>

      {/* beat 2 — mercury drops on the left, rises on the right */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Rect x={300} y={285} width={60} height={65} fill={MUTED} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <Rect x={500} y={255} width={60} height={95} fill={MUTED} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <Draw on={beat >= 2} d="M 425 255 H 435 M 425 285 H 435 M 430 255 V 285" stroke={INK} sw={1.4} dur={0.4} />
        <T x={445} y={273} size={13} fill={INK} anchor="start">
          2x
        </T>
      </Fade>

      {/* beat 3 — the key insight */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 460 363 L 460 387" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={476} y={375} size={14} fill={RED} script anchor="start">
          {t("drop x left, rise x right — difference 2x", "left mein x drop, right mein x rise — farak 2x")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={480} y={411} size={13} fill={MUTED} script anchor="start">
          {t("balance pressures at the lower mercury surface", "lower mercury surface pe pressure balance karo")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={480} y={447} size={15} fill={INK} weight={700} anchor="start">
          P₀ + ρ<TSpan fontSize={10} dy={3}>w</TSpan>
          <TSpan dy={-3}> gH = P₀ + ρ</TSpan>
          <TSpan fontSize={10} dy={3}>Hg</TSpan>
          <TSpan dy={-3}> g(2x)</TSpan>
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={480} y={483} size={15} fill={INK} weight={700} anchor="start">
          2x = H × (1000 / 13600) = 1.0 cm
        </T>
      </Fade>

      {/* beat 7 */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={480} y={519} size={16} fill={GREEN} weight={800} anchor="start">
          x = 0.5 cm
        </T>
      </Fade>

      {/* beat 8 */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={480} y={555} size={14} fill={GREEN} script anchor="start">
          {t("mercury: +0.5 cm right, −0.5 cm left", "mercury: +0.5 cm right, −0.5 cm left")}
        </T>
      </Fade>
    </Scene>
  );
}
