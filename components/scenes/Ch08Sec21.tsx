/**
 * Ch08 · Section 21 — "The elastic-moduli formula toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: hi beats 1..2 are ~1s each — short delays there.
 *
 * Subtopic-2 recap: every formula from Sec15-19, two columns.
 *
 * Beats (en [0, 7.25, 16.13, 25.0, 39.08, 51.29, 61.7, 78.59]):
 *  0 title only
 *  1 wire as spring: k = YA/L
 *  2 series/parallel: 1/k_eq=Σ1/k_i, k_eq=Σk_i
 *  3 two rods in series: Y_eq = 2Y1Y2/(Y1+Y2)
 *  4 compressibility: k=1/B, ΔV/V=-ΔP/B, Δρ/ρ=+ΔP/B
 *  5 gas bulk modulus: B_iso=P, B_adia=γP, ratio=γ
 *  6 the 4 constants: Y=2η(1+ν)=3B(1-2ν), 9/Y=1/B+3/η
 *  7 red margin: only 2 of 4 independent
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b1 | tick/label (13)     | T st | x60..~180 bl155 (y145..159)
 *  b1 | k=YA/L (18)         | T st | x60..168 bl180 (y166..186)
 *  b2 | tick/label (13)     | T st | x60..~200 bl215 (y205..219)
 *  b2 | formula1 (14)       | T st | x60..~350 bl240 (y229..244)
 *  b2 | formula2 (14)       | T st | x60..~290 bl262 (y251..266)
 *  b3 | tick/label (13)     | T st | x60..~210 bl300 (y290..304)
 *  b3 | Yeq formula (16)    | T st | x60..228 bl325 (y310..330)
 *  b4 | tick/label (13)     | T st | x60..~190 bl365 (y355..369)
 *  b4 | k=1/B (15)          | T st | x60..~130 bl390 (y378..394)
 *  b4 | formula2 (13)       | T st | x60..236 bl412 (y400..416)
 *  b5 | tick/label (13)     | T st | x560..~700 bl155 (y145..159)
 *  b5 | formula1 (15)       | T st | x560..733 bl180 (y168..185)
 *  b5 | formula2 (15)       | T st | x560..~700 bl202 (y190..207)
 *  b6 | tick/label (13)     | T st | x560..~690 bl250 (y240..254)
 *  b6 | formula1 (15)       | T st | x560..725 bl275 (y263..280)
 *  b6 | formula2 (16)       | T st | x560..~700 bl300 (y285..305)
 *  b7 | margin bar          | Draw | x60 y480..508
 *  b7 | note (15)           | T st | x76..472 bl500 (y481..508)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("the elastic-moduli toolkit", "elastic-moduli toolkit")}
        </T>
      </Fade>

      {/* beat 1 — wire as spring */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M45 151 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={155} size={13} fill={MUTED} anchor="start">
          {t("wire as spring", "wire as spring")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={60} y={180} size={18} fill={INK} weight={700} anchor="start">
          k = YA / L
        </T>
      </Fade>

      {/* beat 2 — series / parallel */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M45 211 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={60} y={215} size={13} fill={MUTED} anchor="start">
          {t("series / parallel", "series / parallel")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={60} y={240} size={14} fill={INK} weight={600} anchor="start">
          1/k_eq = Σ1/k_i (series)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={60} y={262} size={14} fill={INK} weight={600} anchor="start">
          k_eq = Σk_i (parallel)
        </T>
      </Fade>

      {/* beat 3 — two rods in series */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M45 296 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={60} y={300} size={13} fill={MUTED} anchor="start">
          {t("two rods, series", "do rods, series")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={60} y={325} size={16} fill={INK} weight={700} anchor="start">
          Y_eq = 2Y₁Y₂ / (Y₁+Y₂)
        </T>
      </Fade>

      {/* beat 4 — compressibility */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M45 361 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={60} y={365} size={13} fill={MUTED} anchor="start">
          {t("compressibility", "compressibility")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={60} y={390} size={15} fill={INK} weight={600} anchor="start">
          k = 1/B
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={60} y={412} size={13} fill={INK} weight={600} anchor="start">
          ΔV/V = −ΔP/B · Δρ/ρ = +ΔP/B
        </T>
      </Fade>

      {/* beat 5 — gas bulk modulus */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M545 151 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={560} y={155} size={13} fill={MUTED} anchor="start">
          {t("gas bulk modulus", "gas bulk modulus")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={560} y={180} size={15} fill={INK} weight={600} anchor="start">
          B_iso = P · B_adia = γP
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={560} y={202} size={15} fill={INK} weight={600} anchor="start">
          B_adia / B_iso = γ
        </T>
      </Fade>

      {/* beat 6 — the four constants */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M545 246 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={560} y={250} size={13} fill={MUTED} anchor="start">
          {t("the four constants", "chaar constants")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={560} y={275} size={15} fill={INK} weight={600} anchor="start">
          Y = 2η(1+ν) = 3B(1−2ν)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={560} y={300} size={16} fill={INK} weight={700} anchor="start">
          9/Y = 1/B + 3/η
        </T>
      </Fade>

      {/* beat 7 — only two are independent */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M60 480 L60 508" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={500} size={15} fill={RED} script anchor="start">
          {t("only 2 of the 4 constants are ever independent", "4 constants mein sirf 2 kabhi independent hote")}
        </T>
      </Fade>
    </Scene>
  );
}
