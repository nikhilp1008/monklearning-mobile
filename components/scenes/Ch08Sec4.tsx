/**
 * Ch08 · Section 4 — "Strain: fractional change per unit size"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: English beats 2..6 are ~1s each (compressed narration timing) —
 * elements there use short delays and simply settle near-instantly.
 *
 * Beats (en [0, 6.49, 21.25, 22.25, 23.25, 24.25, 25.25, 26.25]):
 *  0 a dimension bracket — "the change, but compared to what?"
 *  1 THE POINT: a 10 m wire vs a 10 cm wire, both stretched the SAME 1 cm
 *  2 quote: strain = change ÷ original size
 *  3 boxed hero formula: ε = ΔL / L
 *  4 THE DIAGRAM: three icons — longitudinal (dashed vs taller solid),
 *    volume (dashed outer vs solid inner), shear (dashed vs sheared)
 *  5 one-line caption + formula under each icon
 *  6 red margin-bar note: strain is dimensionless
 *  7 closing line — stress = cause/area, strain = effect/size, both ratios
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 24, red, ALWAYS ON) cx540 bl64
 *  b0 | bracket             | Draw | x470..610 y145..155
 *  b0 | label (13)          | T mid| x440..640 bl185 (y168..192)
 *  b1 | long bar "10 m"     | Draw | x100..714 y205..217
 *  b1 | label1 (12)         | T mid| x320..479 bl248 (y232..252)
 *  b1 | short bar "10 cm"   | Draw | x100..174 y275..287
 *  b1 | label2 (12)         | T mid| x210..389 bl318 (y302..322)
 *  b2 | quote (15)          | T mid| x404..676 bl350 (y331..358)
 *  b3 | box                 | Draw | x400..680 y368..438
 *  b3 | "ε = ΔL / L" (32)   | T mid| x~420..660 bl408 (y383..418)
 *  b4 | longitudinal        | Draw | x195..225 y452..502
 *  b4 | volume              | Draw | x511..569 y452..502
 *  b4 | shear               | Draw | x840..920 y452..502
 *  b5 | captions (12)       | T mid| cols x210/540/870 bl518 (y505..522)
 *  b6 | margin bar          | Draw | x60 y538..563
 *  b6 | note (14)           | T st | x76..461 bl556 (y538..563)
 *  b7 | closing (13)        | T mid| x333..747 bl588 (y571..595)
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("strain — the effect, per unit size", "strain — effect, per unit size")}
        </T>
      </Fade>

      {/* beat 0 — a dimension bracket: the change, but compared to what? */}
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.3)}
        d="M470 145 L470 155 M470 150 L610 150 M610 145 L610 155"
        stroke={INK}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 0} delay={dl(0, 1.2)}>
        <T x={540} y={185} size={13} fill={MUTED} script>
          {t("the change — but compared to what?", "change — par kis se compare?")}
        </T>
      </Fade>

      {/* beat 1 — the point: same 1 cm stretch, very different fractions */}
      <Fade on={beat >= 1} delay={0}>
        <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M100 205 h600 v12 h-600 z" stroke={INK} sw={2} dur={0.5} fill={CREAM} />
        <Draw on={beat >= 1} delay={dl(1, 1.1)} d="M700 205 h14 v12 h-14 z" stroke={GREEN} sw={1.6} dur={0.3} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={400} y={248} size={12} fill={GREEN} script>
          {t("10 m + 1 cm → tiny strain", "10 m + 1 cm → strain chota")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={0}>
        <Draw on={beat >= 1} delay={dl(1, 2.4)} d="M100 275 h60 v12 h-60 z" stroke={INK} sw={2} dur={0.4} fill={CREAM} />
        <Draw on={beat >= 1} delay={dl(1, 3)} d="M160 275 h14 v12 h-14 z" stroke={RED} sw={1.6} dur={0.3} fill={RED} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={300} y={318} size={12} fill={RED} script>
          {t("10 cm + 1 cm → HUGE strain", "10 cm + 1 cm → BADA strain")}
        </T>
      </Fade>

      {/* beat 2 — the definition */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={350} size={15} fill={GREEN} script>
          {t("strain = change ÷ original size", "strain = change ÷ original size")}
        </T>
      </Fade>

      {/* beat 3 — the hero formula */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.1)}
        d="M412 368 h256 q12 0 12 12 v46 q0 12 -12 12 h-256 q-12 0 -12 -12 v-46 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={540} y={408} size={30} fill={INK} weight={800}>
          ε = ΔL / L
        </T>
      </Fade>

      {/* beat 4 — three strain types: dashed original vs deformed */}
      <Fade on={beat >= 4} delay={dl(4, 0.05)}>
        <Rect x={195} y={467} width={30} height={35} fill="none" stroke={MUTED} strokeWidth={1.6} strokeDasharray="3 3" />
      </Fade>
      <Fade on={beat >= 4} delay={0}>
        <Draw on={beat >= 4} delay={dl(4, 0.15)} d="M195 452 h30 v50 h-30 z" stroke={GREEN} sw={2} dur={0.4} fill={CREAM} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.25)}>
        <T x={232} y={460} size={10} fill={GREEN} anchor="start">
          ΔL
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.35)}>
        <Rect x={515} y={452} width={50} height={50} fill="none" stroke={MUTED} strokeWidth={1.6} strokeDasharray="3 3" />
      </Fade>
      <Fade on={beat >= 4} delay={0}>
        <Draw on={beat >= 4} delay={dl(4, 0.45)} d="M521 458 h38 v38 h-38 z" stroke={AMBER_DARK} sw={2} dur={0.4} fill={CREAM} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.55)}>
        <Rect x={840} y={462} width={60} height={40} fill="none" stroke={MUTED} strokeWidth={1.6} strokeDasharray="3 3" />
      </Fade>
      <Fade on={beat >= 4} delay={0}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.65)}
          d="M840 502 L840 472 L860 462 L920 462 L920 492 L900 502 Z"
          stroke={RED}
          sw={2}
          dur={0.4}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.75)}>
        <T x={926} y={466} size={10} fill={RED} anchor="start">
          x
        </T>
      </Fade>

      {/* beat 5 — name each, with its formula */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <T x={210} y={518} size={12} fill={GREEN} weight={700}>
          {t("Longitudinal: ε = ΔL / L", "Longitudinal: ε = ΔL / L")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={518} size={12} fill={AMBER_DARK} weight={700}>
          {t("Volume: ε = ΔV / V", "Volume: ε = ΔV / V")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={870} y={518} size={12} fill={RED} weight={700}>
          {t("Shear: φ = x / h (rad)", "Shear: φ = x / h (rad)")}
        </T>
      </Fade>

      {/* beat 6 — dimensionless, no unit (short beat) */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M60 538 L60 563" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={76} y={556} size={14} fill={RED} script anchor="start">
          {t("strain is dimensionless — no unit, never pascals", "strain dimensionless hai — koi unit nahi, pascal bhi nahi")}
        </T>
      </Fade>

      {/* beat 7 — closing line */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={588} size={13} fill={GREEN} script>
          {t("stress = cause/area, strain = effect/size — both are ratios", "stress = cause/area, strain = effect/size — dono ratios hain")}
        </T>
      </Fade>
    </Scene>
  );
}
