/**
 * Ch09 · Section 15 — "Fraction submerged and the iceberg"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 1.0, 2.0, 10.53, 15.74, 22.22, 29.48, 37.5]):
 *  0 title (always-on)
 *  1 text: at floatation, weight = displaced-fluid weight
 *  2 formula: ρ_b V g = ρ_f V_sub g
 *  3 iceberg diagram: ~10% above water, ~90% below (brackets)
 *  4 formula: V_sub/V = ρ_b/ρ_f
 *  5 text: relative density 0.6 ⇒ 60% under
 *  6 red-margin note: ≈90% of an iceberg hides below
 *  7 text (green): fraction is always < 1 for a floater
 *
 * Layout plan:
 *  b1 | text (15, script)       | T mid  | x540  bl 114
 *  b2 | formula (18, w700)      | T mid  | x540  bl 152
 *  b3 | iceberg outline (cream) | Draw   | x480..600  y230..420
 *  b3 | water line (wavy)       | Draw   | x400..680  y250
 *  b3 | above bracket + "~10%"  | Draw+T | x460  y230..250
 *  b3 | below bracket + "~90%"  | Draw+T | x460  y250..420
 *  b4 | formula (16, w700)      | T mid  | x540  bl 450
 *  b5 | text (13, script)       | T mid  | x540  bl 488
 *  b6 | margin bar (red)        | Draw   | x460  y510..534
 *  b6 | note (script 13, red)   | T st   | x476.. bl 528
 *  b7 | text (13, script, grn)  | T mid  | x540  bl 566
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("fraction submerged", "kitna hissa submerged")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={15} fill={MUTED} script anchor="middle">
          {t("at floatation: weight = displaced-fluid weight", "floatation pe: weight = displaced-fluid weight")}
        </T>
      </Fade>

      {/* beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={152} size={18} fill={INK} weight={700} anchor="middle">
          ρ<TSpan fontSize={12} dy={4}>b</TSpan>
          <TSpan dy={-4}> Vg = ρ</TSpan>
          <TSpan fontSize={12} dy={4}>f</TSpan>
          <TSpan dy={-4}> V</TSpan>
          <TSpan fontSize={12} dy={4}>sub</TSpan>
          <TSpan dy={-4}> g</TSpan>
        </T>
      </Fade>

      {/* beat 3 — the iceberg */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0)}
        d="M 540 230 L 580 270 L 600 350 L 585 420 L 495 420 L 480 350 L 500 270 Z"
        stroke={INK}
        sw={2.2}
        fill={CREAM}
        dur={1}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.1)}
        d="M 400 250 q 20 -8 40 0 q 20 8 40 0 q 20 -8 40 0 q 20 8 40 0 q 20 -8 40 0 q 20 8 40 0 q 20 -8 40 0"
        stroke={INK}
        sw={1.6}
        dur={0.8}
      />
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Draw on={beat >= 3} d="M 460 230 H 465 M 460 250 H 465 M 462 230 V 250" stroke={MUTED} sw={1.3} dur={0.4} />
        <T x={452} y={244} size={11} fill={MUTED} anchor="end">
          ~10%
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <Draw on={beat >= 3} d="M 460 250 H 465 M 460 420 H 465 M 462 250 V 420" stroke={MUTED} sw={1.3} dur={0.5} />
        <T x={452} y={339} size={12} fill={MUTED} anchor="end">
          ~90%
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={450} size={16} fill={INK} weight={700} anchor="middle">
          V<TSpan fontSize={11} dy={4}>sub</TSpan>
          <TSpan dy={-4}> / V = ρ</TSpan>
          <TSpan fontSize={11} dy={4}>b</TSpan>
          <TSpan dy={-4}> / ρ</TSpan>
          <TSpan fontSize={11} dy={4}>f</TSpan>
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={488} size={13} fill={MUTED} script anchor="middle">
          {t("relative density 0.6 ⇒ 60% under", "relative density 0.6 ⇒ 60% neeche")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 460 510 L 460 534" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={476} y={528} size={13} fill={RED} script anchor="start">
          {t("≈90% of an iceberg hides below", "≈90% iceberg neeche chupa hota")}
        </T>
      </Fade>

      {/* beat 7 */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={566} size={13} fill={GREEN} script anchor="middle">
          {t("the fraction is always < 1 for a floater", "floater ke liye fraction hamesha < 1 hota")}
        </T>
      </Fade>
    </Scene>
  );
}
