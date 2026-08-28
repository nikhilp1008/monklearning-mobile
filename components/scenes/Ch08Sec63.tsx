/**
 * Ch08 · Section 63 — "Chapter 8 formula recap"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beat 1 and hi beats 1..4 are ~1s apart — short delays there.
 *
 * Whole-chapter formula sweep, one row per subtopic-cluster, 7 rows total.
 *
 * Beats (en [0, 1.0, 13.2, 31.38, 48.02, 68.07, 85.39, 101.1]):
 *  0 title only
 *  1 foundations: σ=F/A, ε=Δx/x (dimensionless), σ=Eε
 *  2 four elastic constants: Y, B (k=1/B), η, ν
 *  3 moduli at work: k=YA/L, series/parallel, Y_eq
 *  4 gas and the constant relations: B_iso/B_adia, Y=2η(1+ν)=3B(1-2ν), 9/Y=1/B+3/η
 *  5 Poisson and energy: ΔV/V, U, u, x_max=2x_static
 *  6 material budget & self-weight: u_res, ΔL_self, ℓ_max
 *  7 applications: δ, h_max, σ=YαΔT, C
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 18, red, ALWAYS ON) cx540 bl60
 *  b1 | tick/tag (11)   | Draw/T | x65..73 y106 · x80 bl110
 *  b1 | formula (13)    | T st   | x80..~350 bl132
 *  b2 | tick/tag (11)   | Draw/T | x65..73 y174 · x80 bl178
 *  b2 | formula (13)    | T st   | x80..~630 bl200
 *  b3 | tick/tag (11)   | Draw/T | x65..73 y242 · x80 bl246
 *  b3 | formula (13)    | T st   | x80..~555 bl268
 *  b4 | tick/tag (11)   | Draw/T | x65..73 y310 · x80 bl314
 *  b4 | formula (13)    | T st   | x80..~410 bl336
 *  b5 | tick/tag (11)   | Draw/T | x65..73 y378 · x80 bl382
 *  b5 | formula (13)    | T st   | x80..~390 bl404
 *  b6 | tick/tag (11)   | Draw/T | x65..73 y446 · x80 bl450
 *  b6 | formula (13)    | T st   | x80..~370 bl472
 *  b7 | tick/tag (11)   | Draw/T | x65..73 y514 · x80 bl518
 *  b7 | formula (13)    | T st   | x80..~460 bl540
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

export default function Ch08Sec63({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={60} size={18} fill={RED} script>
          {t("chapter 8: formula recap", "chapter 8: formula recap")}
        </T>
      </Fade>

      {/* beat 1 — foundations */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M65 106 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={80} y={110} size={11} fill={MUTED} anchor="start">
          {t("foundations", "foundations")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={132} size={13} fill={INK} weight={600} anchor="start">
          σ=F/A, ε=Δx/x (dimensionless), σ=Eε
        </T>
      </Fade>

      {/* beat 2 — four elastic constants */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M65 174 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={178} size={11} fill={MUTED} anchor="start">
          {t("four elastic constants", "four elastic constants")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={80} y={200} size={13} fill={INK} weight={600} anchor="start">
          Y=FL/AΔL, B=-P/(ΔV/V), k=1/B, η=τ/φ, ν=-lateral/longitudinal
        </T>
      </Fade>

      {/* beat 3 — moduli at work */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M65 242 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={246} size={11} fill={MUTED} anchor="start">
          {t("moduli at work", "moduli at work")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={80} y={268} size={13} fill={INK} weight={600} anchor="start">
          k=YA/L, 1/k_eq=Σ1/k_i (series), k_eq=Σk_i (parallel), Y_eq=2Y1Y2/(Y1+Y2)
        </T>
      </Fade>

      {/* beat 4 — gas and the constant relations */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M65 310 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={314} size={11} fill={MUTED} anchor="start">
          {t("gas and the constant relations", "gas aur constant relations")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={80} y={336} size={13} fill={INK} weight={600} anchor="start">
          B_iso=P, B_adia=γP, Y=2η(1+ν)=3B(1-2ν), 9/Y=1/B+3/η
        </T>
      </Fade>

      {/* beat 5 — Poisson and energy */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M65 378 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={80} y={382} size={11} fill={MUTED} anchor="start">
          {t("Poisson and energy", "Poisson aur energy")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={80} y={404} size={13} fill={INK} weight={600} anchor="start">
          ΔV/V=(1-2ν)ε, U=½FΔL, u=½σε=σ²/2Y, x_max=2x_static
        </T>
      </Fade>

      {/* beat 6 — material budget and self-weight */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M65 446 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={80} y={450} size={11} fill={MUTED} anchor="start">
          {t("material budget & self-weight", "material budget & self-weight")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={80} y={472} size={13} fill={INK} weight={600} anchor="start">
          u_res=σy²/2Y, ΔL_self=MgL/2AY, ℓ_max=σ_break/ρg
        </T>
      </Fade>

      {/* beat 7 — applications */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M65 514 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={80} y={518} size={11} fill={MUTED} anchor="start">
          {t("applications", "applications")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={80} y={540} size={13} fill={INK} weight={600} anchor="start">
          δ=WL³/3YIg or /48YIg, h_max=σ_max/ρg, σ=YαΔT, C=πηr⁴θ/2L
        </T>
      </Fade>
    </Scene>
  );
}
