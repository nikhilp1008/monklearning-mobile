/**
 * Ch08 · Section 9 — "Young's, bulk, rigidity and Poisson's ratio"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: several beats are compressed to ~1s (en 0,1,2 and 3; hi 3,4,5,6) —
 * short delays there, elements settle near-instantly.
 *
 * Four toolkit cards, 2×2 grid, filled in as the narration names each.
 *
 * Beats (en [0, 1.0, 2.0, 9.68, 21.8, 41.51, 54.82, 66.26]):
 *  0 title + four ticks ("four constants")
 *  1 card 1 (Young's Y): box + formula
 *  2 card 1: description
 *  3 card 2 (Bulk B): box + formula + k=1/B
 *  4 card 2: description
 *  5 card 3 (Rigidity η) + card 4 (Poisson ν): boxes + formulas
 *  6 card 3 + card 4: descriptions
 *  7 red margin note: solids vs liquids/gases
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 26, red, ALWAYS ON) cx540 bl64
 *  b0 | ticks             | Draw | x480..570 y95..105
 *  b1 | card1 box         | Draw | x60..530 y140..260
 *  b1 | "Y = σ/ε" (26)    | T st | x90..194 bl185 (y165..193)
 *  b1 | sub-formula (15)  | T st | x90..255 bl215 (y204..220)
 *  b2 | card1 desc (11)   | T st | x90..277 bl246 (y232..252)
 *  b3 | card2 box         | Draw | x560..1020 y140..260
 *  b3 | "B = −P/(ΔV/V)"   | T st | x590..755 bl185 (y168..192)
 *  b3 | "k = 1/B" (14)    | T st | x590..639 bl210 (y199..214)
 *  b4 | card2 desc (11)   | T st | x590..844 bl242 (y228..248)
 *  b5 | card3 box         | Draw | x60..530 y300..410
 *  b5 | "η = τ/φ" (26)    | T st | x90..181 bl350 (y330..358)
 *  b5 | card4 box         | Draw | x560..1020 y300..410
 *  b5 | "ν = −(Δr/r)/(ΔL/L)"|T st| x590..761 bl350 (y336..356)
 *  b6 | card3 desc (12)   | T st | x90..321 bl386 (y370..392)
 *  b6 | card4 desc (12)   | T st | x590..828 bl384 (y368..390)
 *  b7 | margin bar        | Draw | x60 y450..478
 *  b7 | note (15)         | T st | x76..505 bl470 (y451..478)
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
  AMBER,
  AMBER_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("the four elastic constants", "chaar elastic constants")}
        </T>
      </Fade>

      {/* beat 0 — four ticks */}
      <Draw on={beat >= 0} delay={dl(0, 0.2)} d="M480 95 v10 M510 95 v10 M540 95 v10 M570 95 v10" stroke={AMBER} sw={2} dur={0.3} />

      {/* beat 1 — card 1: Young's modulus */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.1)}
        d="M72 140 h446 q12 0 12 12 v96 q0 12 -12 12 h-446 q-12 0 -12 -12 v-96 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={90} y={185} size={26} fill={INK} weight={800} anchor="start">
          Y = σ / ε
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.75)}>
        <T x={90} y={215} size={15} fill={AMBER_DARK} weight={600} anchor="start">
          = FL / AΔL = MgL / πr²ΔL
        </T>
      </Fade>

      {/* beat 2 — card 1 description */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M80 242 h6" stroke={MUTED} sw={1.6} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={90} y={246} size={11} fill={MUTED} script anchor="start">
          {t("stretching — resists being lengthened", "stretching — lambe hone ka resistance")}
        </T>
      </Fade>

      {/* beat 3 — card 2: Bulk modulus */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.1)}
        d="M572 140 h436 q12 0 12 12 v96 q0 12 -12 12 h-436 q-12 0 -12 -12 v-96 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={590} y={185} size={22} fill={INK} weight={800} anchor="start">
          B = −P / (ΔV/V)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.75)}>
        <T x={590} y={210} size={14} fill={AMBER_DARK} weight={600} anchor="start">
          k = 1/B
        </T>
      </Fade>

      {/* beat 4 — card 2 description */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M580 238 h6" stroke={MUTED} sw={1.6} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={590} y={242} size={11} fill={MUTED} script anchor="start">
          {t("squeezing — isothermal B=P, adiabatic B=γP", "squeezing — isothermal B=P, adiabatic B=γP")}
        </T>
      </Fade>

      {/* beat 5 — card 3: rigidity, card 4: Poisson's ratio */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.1)}
        d="M72 300 h446 q12 0 12 12 v86 q0 12 -12 12 h-446 q-12 0 -12 -12 v-86 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={90} y={350} size={26} fill={INK} weight={800} anchor="start">
          η = τ / φ
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.9)}
        d="M572 300 h436 q12 0 12 12 v86 q0 12 -12 12 h-436 q-12 0 -12 -12 v-86 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={590} y={350} size={18} fill={INK} weight={800} anchor="start">
          ν = −(Δr/r) / (ΔL/L)
        </T>
      </Fade>

      {/* beat 6 — card 3 + card 4 descriptions */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M80 382 h6" stroke={MUTED} sw={1.6} dur={0.2} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={90} y={386} size={12} fill={MUTED} script anchor="start">
          {t("shape-change — shear stress / shear strain", "shape-change — shear stress / shear strain")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.9)} d="M580 380 h6" stroke={MUTED} sw={1.6} dur={0.2} />
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={590} y={384} size={12} fill={MUTED} script anchor="start">
          {t("dimensionless — ≈ 0.2 to 0.4 for metals", "dimensionless — ≈ 0.2 se 0.4 metals ke liye")}
        </T>
      </Fade>

      {/* beat 7 — solids vs liquids/gases */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M60 450 L60 478" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={470} size={15} fill={RED} script anchor="start">
          {t("solids: all three moduli · liquids/gases: only bulk", "solids: teeno moduli · liquids/gases: sirf bulk")}
        </T>
      </Fade>
    </Scene>
  );
}
