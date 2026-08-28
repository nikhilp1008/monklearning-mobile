/**
 * Ch08 · Section 37 — "JEE Advanced: sudden loading and the factor of two"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Diagram (wire + block, static vs max stretch) left, energy-balance
 * cascade right.
 *
 * Beats (en [0, 10.07, 24.32, 25.32, 40.0, 53.65, 71.31]):
 *  0 title only
 *  1 diagram: just-taut wire → static stretch (green) → max stretch (red, 2x)
 *  2 text: at x_max, KE=0 → lost PE = stored elastic energy
 *  3 formula: mgx_max = ½(YA/L)x_max² ⇒ x_max = 2mgL/YA
 *  4 text: static x_st=mgL/YA, so x_max=2x_st
 *  5 boxed hero: x_st=2.0×10⁻⁴m ⇒ x_max=4.0×10⁻⁴m=0.40mm
 *  6 red margin: full weight, whole descent — overshoot doubles, half→heat
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 20, red, ALWAYS ON) cx540 bl64
 *  b1 | rail                | Draw | x250..400 y100
 *  b1 | just-taut wire      | Draw | x325 y100..160
 *  b1 | static ext (green)  | Draw | x325 y160..190
 *  b1 | max ext (red)       | Draw | x325 y190..220
 *  b1 | block               | Draw | x303..347 y220..252
 *  b1 | labels (11)         | T end| x280 bl178 / bl208
 *  b2 | tick/text (14)      | T st | x550..920 bl150
 *  b3 | tick/formula (15)   | T st | x550..865 bl190
 *  b4 | tick/text (14)      | T st | x550..820 bl230
 *  b5 | hero box            | Draw | x540..1030 y265..335
 *  b5 | formula (16)        | T st | x560..976 bl305
 *  b6 | margin bar          | Draw | x60 y370..398
 *  b6 | note (15)           | T st | x76..555 bl390
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("sudden loading doubles the stretch", "sudden loading stretch double kar deti")}
        </T>
      </Fade>

      {/* beat 1 — just-taut, then static, then max stretch */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M250 100 h150" stroke={INK} sw={3} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M325 100 L325 160" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d="M325 160 L325 190" stroke={GREEN} sw={3.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={280} y={178} size={11} fill={GREEN} anchor="end">
          x_static
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2)} d="M325 190 L325 220" stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={280} y={208} size={11} fill={RED} anchor="end">
          {t("x_max=2×", "x_max=2×")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d="M303 220 h44 v32 h-44 z" stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={325} y={241} size={13} fill={INK}>
          m
        </T>
      </Fade>

      {/* beat 2 — the energy balance */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M535 146 h8" stroke={AMBER_DARK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={550} y={150} size={14} fill={AMBER_DARK} script anchor="start">
          {t("at x_max: KE=0 → lost PE = stored elastic energy", "x_max par: KE=0 → lost PE = stored elastic energy")}
        </T>
      </Fade>

      {/* beat 3 — solving for x_max */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M535 186 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={550} y={190} size={15} fill={INK} weight={600} anchor="start">
          mgx_max = ½(YA/L)x_max² ⇒ x_max = 2mgL/YA
        </T>
      </Fade>

      {/* beat 4 — compare with the static case */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M535 226 h8" stroke={GREEN} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={550} y={230} size={14} fill={GREEN} script anchor="start">
          {t("static: x_st=mgL/YA → x_max = 2x_st", "static: x_st=mgL/YA → x_max = 2x_st")}
        </T>
      </Fade>

      {/* beat 5 — the numbers */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.2)}
        d="M552 265 h466 q12 0 12 12 v46 q0 12 -12 12 h-466 q-12 0 -12 -12 v-46 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={560} y={305} size={16} fill={INK} weight={800} anchor="start">
          x_st=2.0×10⁻⁴m ⇒ x_max=4.0×10⁻⁴m=0.40mm
        </T>
      </Fade>

      {/* beat 6 — the physics of the doubling */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M60 370 L60 398" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={390} size={15} fill={RED} script anchor="start">
          {t("full weight, whole descent — overshoot doubles, half→heat", "poora weight, poora descent — overshoot double, aadha→heat")}
        </T>
      </Fade>
    </Scene>
  );
}
