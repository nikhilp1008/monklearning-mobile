/**
 * Ch08 · Section 24 — "JEE Main: series wires and stored energy"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 2..7 are ~1s each — short delays throughout for English.
 *
 * Diagram (thin+thick wire in series) left, formula cascade right.
 *
 * Beats (en [0, 8.96, 20.74, 21.74, 22.74, 23.74, 24.74, 25.74]):
 *  0 title only
 *  1 diagram: wire R (top) + wire 2R (bottom), same material, 100 N load
 *  2 text: same F; A1=πR², A2=4A1
 *  3 formula: ΔL1 = FL/A1Y = ... = 6.4×10⁻⁴ m
 *  4 formula: ΔL2 = ΔL1/4 = 1.6×10⁻⁴ m
 *  5 boxed hero: ΔL_total = ΔL1+ΔL2 = 8.0×10⁻⁴ m = 0.80 mm
 *  6 text: same F ⇒ U∝ΔL — thin wire stores 4× energy
 *  7 red margin: weakest link does most work, snaps first
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b1 | rail                | Draw | x100..220 y140
 *  b1 | wire R (thin)       | Draw | x160 y140..210
 *  b1 | label "upper: R"    | T st | x180..~270 bl175
 *  b1 | wire 2R (thick)     | Draw | x160 y210..280
 *  b1 | label "lower: 2R"   | T st | x185..~275 bl250
 *  b1 | load chip + F arrow | Draw | x140..180 y280..340
 *  b2 | tick                | Draw | x405..413 y166
 *  b2 | text (14)           | T st | x420..589 bl170 (y152..178)
 *  b3 | tick                | Draw | x405..413 y206
 *  b3 | formula (13)        | T st | x420..719 bl210 (y201..214)
 *  b4 | tick                | Draw | x405..413 y241
 *  b4 | formula (16)        | T st | x420..612 bl245 (y233..250)
 *  b5 | hero box            | Draw | x420..900 y275..345
 *  b5 | result (18)         | T st | x440..809 bl315 (y296..320)
 *  b6 | tick                | Draw | x405..413 y381
 *  b6 | text (14)           | T st | x420..782 bl385 (y367..392)
 *  b7 | margin bar          | Draw | x60 y420..448
 *  b7 | note (15)           | T st | x76..489 bl440 (y420..447)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("JEE Main: series wires and stored energy", "JEE Main: series wires aur stored energy")}
        </T>
      </Fade>

      {/* beat 1 — thin wire R over thick wire 2R, same load */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M100 140 h120" stroke={INK} sw={3} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M160 140 L160 210" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={180} y={175} size={12} fill={INK} anchor="start">
          {t("upper: R", "upper: R")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={180} y={193} size={9} fill={MUTED} anchor="start">
          {t("thin, stretches more", "patli, zyada khinchti")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d="M156 210 A4 4 0 1 1 155.9 210" stroke={INK} sw={1.6} dur={0.2} fill={INK} />
      <Draw on={beat >= 1} delay={dl(1, 2)} d="M160 210 L160 280" stroke={GREEN} sw={7} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={185} y={250} size={12} fill={GREEN} anchor="start">
          {t("lower: 2R", "lower: 2R")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d="M140 280 h40 v28 h-40 z" stroke={INK} sw={2} dur={0.3} fill={CREAM} />
      <Fade on={beat >= 1} delay={dl(1, 3.3)}>
        <T x={160} y={298} size={10} fill={INK}>
          100 N
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.6)} d={arrowD(160, 308, 160, 340)} stroke={RED} sw={2.2} dur={0.3} />

      {/* beat 2 — same force, different areas */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M405 166 h8" stroke={GREEN} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={420} y={170} size={14} fill={GREEN} script anchor="start">
          {t("same F; A₁=πR², A₂=4A₁", "same F; A₁=πR², A₂=4A₁")}
        </T>
      </Fade>

      {/* beat 3 — thin wire's stretch */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M405 206 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={420} y={210} size={13} fill={INK} weight={600} anchor="start">
          ΔL₁ = 100×1.0 / (7.85e-7)(2.0e11) = 6.4×10⁻⁴ m
        </T>
      </Fade>

      {/* beat 4 — thick wire's stretch */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M405 241 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={420} y={245} size={16} fill={INK} weight={700} anchor="start">
          ΔL₂ = ΔL₁/4 = 1.6×10⁻⁴ m
        </T>
      </Fade>

      {/* beat 5 — the total elongation */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.2)}
        d="M432 275 h456 q12 0 12 12 v46 q0 12 -12 12 h-456 q-12 0 -12 -12 v-46 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={440} y={315} size={18} fill={INK} weight={800} anchor="start">
          ΔL_total = ΔL₁+ΔL₂ = 8.0×10⁻⁴ m = 0.80 mm
        </T>
      </Fade>

      {/* beat 6 — the energy twist */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M405 381 h8" stroke={AMBER_DARK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={420} y={385} size={14} fill={AMBER_DARK} script anchor="start">
          {t("same F ⇒ U∝ΔL — thin wire stores 4× energy", "same F ⇒ U∝ΔL — patli wire 4× energy store karti")}
        </T>
      </Fade>

      {/* beat 7 — the weakest link */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M60 420 L60 448" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={440} size={15} fill={RED} script anchor="start">
          {t("the weakest link does the most work — snaps first", "sabse kamzor link sabse zyada kaam karti — pehle tootti")}
        </T>
      </Fade>
    </Scene>
  );
}
