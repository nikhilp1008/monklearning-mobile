/**
 * Ch09 · Section 21 — "Tethered cork in an accelerating lift" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 6.49, 19.8, 27.22, 32.85, 43.09, 50.86, 64.51]):
 *  0 title (always-on)
 *  1 text: cork V=100cm³, ρ=250, tied to base; lift up at a=5
 *  2 container + cork + string + three unlabeled force arrows
 *  3 formula g_eff = g + a = 15 m/s²
 *  4 arrows labelled: F_B (up), W (down), T (down, via string)
 *  5 formula ρ_w V g_eff = ρ_b V g_eff + T
 *  6 formula (green) T = Vg_eff(ρ_w−ρ_b) = 1.125 N
 *  7 red-margin note: in free fall g_eff = 0, tension vanishes
 *
 * Layout plan:
 *  b2 | container                | Draw  | x350..550  y200..420
 *  b2 | cork (cream)              | circle | c(450,300) r18
 *  b2 | string                    | line   | x450  y318..420
 *  b2 | buoyancy arrow            | Draw   | (450,280)→(450,235)
 *  b2 | weight arrow              | Draw   | (450,323)→(450,353)
 *  b2 | tension tick on string    | Draw   | (450,395)→(450,415)
 *  b1 | text (13, muted)          | T mid  | x540  bl 110
 *  b3 | formula (15, w700)        | T st   | x610  bl 250
 *  b4 | "F_B" (13)                | T mid  | x450  bl 220
 *  b4 | "W" (12) end               | T end  | x430  bl 368
 *  b4 | "T" (12) start              | T st   | x468  bl 370
 *  b5 | formula (14, w700)        | T st   | x610  bl 290
 *  b6 | formula (14, w800, grn)   | T st   | x610  bl 325
 *  b7 | margin bar (red)          | Draw   | x590  y345..369
 *  b7 | note (script 13, red)     | T st   | x606..~980 bl 363
 */

import React from "react";
import { Circle, Line, TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("JEE Advanced: tethered cork in a lift", "JEE Advanced: tethered cork in a lift")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={110} size={13} fill={MUTED} script anchor="middle">
          {t("cork V=100 cm³, ρ=250, tied to base; lift up at a=5", "cork V=100 cm³, ρ=250, base se bandha; lift up at a=5")}
        </T>
      </Fade>

      {/* beat 2 — the setup and its three forces */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 350 200 V 420 H 550 V 200" stroke={INK} sw={2.2} dur={0.9} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1)}
        d="M 350 200 q 25 -8 50 0 q 25 8 50 0 q 25 -8 50 0 q 25 8 50 0"
        stroke={INK}
        sw={1.6}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <Line x1={450} y1={318} x2={450} y2={420} stroke={INK} strokeWidth={1.6} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <Circle cx={450} cy={300} r={18} fill={CREAM} stroke={INK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <Draw on={beat >= 2} d={arrowD(450, 280, 450, 235)} stroke={INK} sw={2.4} dur={0.4} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <Draw on={beat >= 2} d={arrowD(450, 323, 450, 353)} stroke={INK} sw={2.2} dur={0.4} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.9)}>
        <Draw on={beat >= 2} d={arrowD(450, 395, 450, 415)} stroke={INK} sw={2.2} dur={0.4} />
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={610} y={250} size={15} fill={INK} weight={700} anchor="start">
          g<TSpan fontSize={10} dy={4}>eff</TSpan>
          <TSpan dy={-4}> = g + a = 15 m/s²</TSpan>
        </T>
      </Fade>

      {/* beat 4 — the labels */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={450} y={220} size={13} fill={INK} anchor="middle">
          F<TSpan fontSize={9} dy={3}>B</TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={430} y={368} size={12} fill={INK} anchor="end">
          W
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={468} y={370} size={12} fill={INK} anchor="start">
          T
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={610} y={290} size={14} fill={INK} weight={700} anchor="start">
          ρ<TSpan fontSize={10} dy={4}>w</TSpan>
          <TSpan dy={-4}> Vg</TSpan>
          <TSpan fontSize={10} dy={4}>eff</TSpan>
          <TSpan dy={-4}> = ρ</TSpan>
          <TSpan fontSize={10} dy={4}>b</TSpan>
          <TSpan dy={-4}> Vg</TSpan>
          <TSpan fontSize={10} dy={4}>eff</TSpan>
          <TSpan dy={-4}> + T</TSpan>
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={610} y={325} size={14} fill={GREEN} weight={800} anchor="start">
          T = 10⁻⁴×15×750 = 1.125 N
        </T>
      </Fade>

      {/* beat 7 */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 590 345 L 590 369" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={606} y={363} size={13} fill={RED} script anchor="start">
          {t("in free fall g_eff = 0 — the tension vanishes", "free fall mein g_eff = 0 — tension gayab")}
        </T>
      </Fade>
    </Scene>
  );
}
