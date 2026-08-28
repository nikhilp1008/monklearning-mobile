/**
 * Ch09 · Section 19 — "Wooden block in two liquids" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 4.52, 15.1, 22.87, 23.87, 24.87, 33.4, 44.75]):
 *  0 title (always-on)
 *  1 LEFT: block floats, 75% submerged in water
 *  2 RIGHT: same block, dashed placeholder in a second liquid ("?")
 *  3 formula V_sub/V = ρ_b/ρ_f
 *  4 formula 0.75 = ρ_b/1000 ⇒ ρ_b = 750
 *  5 text: now place it in a liquid of RD 1.2
 *  6 RIGHT block resolves to 62.5% (placeholder dims) + formula
 *  7 red-margin note: denser fluid, smaller fraction submerged
 *
 * Layout plan:
 *  b1 | left water line          | line  | x150..420  y300
 *  b1 | left block (muted, 75%)  | rect   | x260..340  y280..360
 *  b1 | "75%" (13, green)        | T mid  | x300  bl 400
 *  b1 | "water" (12, muted)      | T st   | x160  bl 282
 *  b2 | right water line         | line   | x650..920  y300
 *  b2 | placeholder (dashed)     | rect   | x770..850  y280..360
 *  b2 | "?" (14, muted)          | T mid  | x810  bl 400
 *  b2 | "RD 1.2 liquid" (12)     | T st   | x660  bl 282
 *  b3 | formula (17, w700)       | T mid  | x540  bl 440
 *  b4 | formula (16, w700)       | T mid  | x540  bl 472
 *  b5 | text (14, script)        | T mid  | x540  bl 502
 *  b6 | resolved block (62.5%)   | rect   | x770..850  y270..350
 *  b6 | "62.5%" (13, green)      | T mid  | x810  bl 400
 *  b6 | formula (16, w700, grn)  | T mid  | x540  bl 535
 *  b7 | margin bar (red)         | Draw   | x460  y565..589
 *  b7 | note (script 14, red)    | T st   | x476.. bl 583
 */

import React from "react";
import { Line, Rect, TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("NEET speed trap: two liquids", "NEET speed trap: two liquids")}
        </T>
      </Fade>

      {/* beat 1 — floats at 75% in water */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Line x1={150} y1={300} x2={420} y2={300} stroke={MUTED} strokeWidth={1.6} strokeDasharray="5 4" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Rect x={260} y={280} width={80} height={80} fill={MUTED} stroke={INK} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={300} y={400} size={13} fill={GREEN} anchor="middle">
          75%
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={160} y={282} size={12} fill={MUTED} anchor="start">
          {t("water", "water")}
        </T>
      </Fade>

      {/* beat 2 — the same block, a second liquid, unresolved */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Line x1={650} y1={300} x2={920} y2={300} stroke={MUTED} strokeWidth={1.6} strokeDasharray="5 4" />
      </Fade>
      <Fade on={beat >= 2} dim={beat >= 6} delay={dl(2, 0.6)}>
        <Rect
          x={770}
          y={280}
          width={80}
          height={80}
          fill="none"
          stroke={MUTED}
          strokeWidth={1.8}
          strokeDasharray="6 5"
        />
      </Fade>
      <Fade on={beat >= 2} dim={beat >= 6} delay={dl(2, 1.3)}>
        <T x={810} y={400} size={14} fill={MUTED} anchor="middle">
          ?
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={660} y={282} size={12} fill={MUTED} anchor="start">
          {t("RD 1.2 liquid", "RD 1.2 liquid")}
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={440} size={17} fill={INK} weight={700} anchor="middle">
          V<TSpan fontSize={11} dy={4}>sub</TSpan>
          <TSpan dy={-4}> / V = ρ</TSpan>
          <TSpan fontSize={11} dy={4}>b</TSpan>
          <TSpan dy={-4}> / ρ</TSpan>
          <TSpan fontSize={11} dy={4}>f</TSpan>
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={472} size={16} fill={INK} weight={700} anchor="middle">
          0.75 = ρ<TSpan fontSize={11} dy={4}>b</TSpan>
          <TSpan dy={-4}> / 1000 ⇒ ρ</TSpan>
          <TSpan fontSize={11} dy={4}>b</TSpan>
          <TSpan dy={-4}> = 750</TSpan>
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={502} size={14} fill={MUTED} script anchor="middle">
          {t("now place it in a liquid of RD 1.2", "ab isse RD 1.2 wale liquid mein rakho")}
        </T>
      </Fade>

      {/* beat 6 — resolved */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect x={770} y={270} width={80} height={80} fill={MUTED} stroke={INK} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={810} y={400} size={13} fill={GREEN} anchor="middle">
          62.5%
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={540} y={535} size={16} fill={GREEN} weight={700} anchor="middle">
          V<TSpan fontSize={11} dy={4}>sub</TSpan>
          <TSpan dy={-4}> / V = 750 / 1200 = 0.625</TSpan>
        </T>
      </Fade>

      {/* beat 7 */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 460 565 L 460 589" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={476} y={583} size={14} fill={RED} script anchor="start">
          {t("denser fluid, so a smaller fraction is submerged", "denser fluid mein kam fraction submerge hota")}
        </T>
      </Fade>
    </Scene>
  );
}
