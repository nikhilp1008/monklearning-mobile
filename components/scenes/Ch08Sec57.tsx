/**
 * Ch08 · Section 57 — "The applications toolkit and reference data"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 1..4 are ~1s each — short delays throughout for English.
 *
 * Subtopic-5 recap: every formula from Sec51-56, two columns.
 *
 * Beats (en [0, 1.0, 2.0, 3.0, 4.0, 15.09, 29.26]):
 *  0 title only
 *  1 beam depression: cantilever δ=WL³/3YIg; supported δ=WL³/48YIg
 *  2 geometrical moment: Ig=bd³/12 (rect), πr⁴/4 (circle); δ∝1/d³
 *  3 mountain ceiling: h_max=σ_max/ρg
 *  4 thermal stress: σ=YαΔT, F=YAαΔT (no L)
 *  5 torsion & Searle: C=πηr⁴θ/2L; Y=MgL/πr²ΔL (Searle)
 *  6 red margin: reference Y — steel≈200, copper≈120, aluminium≈70, rubber≈0.01-0.1 GPa
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b1 | tick/label (13)     | T st | x60..~190 bl155
 *  b1 | formula1 (14)       | T st | x60..~270 bl180
 *  b1 | formula2 (14)       | T st | x60..~280 bl202
 *  b2 | tick/label (13)     | T st | x60..~260 bl242
 *  b2 | formula (14)        | T st | x60..354 bl272
 *  b3 | tick/label (13)     | T st | x60..~220 bl312
 *  b3 | formula (15)        | T st | x60..172 bl342
 *  b4 | tick/label (13)     | T st | x560..~700 bl155
 *  b4 | formula (14)        | T st | x560..721 bl185
 *  b5 | tick/label (13)     | T st | x560..~720 bl225
 *  b5 | formula1 (13)       | T st | x560..631 bl255
 *  b5 | formula2 (13)       | T st | x560..696 bl277
 *  b6 | margin bar          | Draw | x60 y495..523
 *  b6 | note (15)           | T st | x76..~571 bl515
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

export default function Ch08Sec57({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("applications toolkit and reference data", "applications toolkit aur reference data")}
        </T>
      </Fade>

      {/* beat 1 — beam depression */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M45 151 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={155} size={13} fill={MUTED} anchor="start">
          {t("beam depression", "beam depression")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={60} y={180} size={14} fill={INK} weight={600} anchor="start">
          {t("cantilever: δ=WL³/3YIg", "cantilever: δ=WL³/3YIg")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={60} y={202} size={14} fill={INK} weight={600} anchor="start">
          {t("supported: δ=WL³/48YIg", "supported: δ=WL³/48YIg")}
        </T>
      </Fade>

      {/* beat 2 — geometrical moment */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M45 238 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={60} y={242} size={13} fill={MUTED} anchor="start">
          {t("geometrical moment", "geometrical moment")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={60} y={272} size={14} fill={INK} weight={600} anchor="start">
          Ig=bd³/12 (rect), πr⁴/4 (circle); δ∝1/d³
        </T>
      </Fade>

      {/* beat 3 — mountain ceiling */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M45 308 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={60} y={312} size={13} fill={MUTED} anchor="start">
          {t("mountain ceiling", "mountain ceiling")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={60} y={342} size={15} fill={INK} weight={700} anchor="start">
          h_max = σ_max/ρg
        </T>
      </Fade>

      {/* beat 4 — thermal stress */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M545 151 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={560} y={155} size={13} fill={MUTED} anchor="start">
          {t("thermal stress", "thermal stress")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={560} y={185} size={14} fill={INK} weight={600} anchor="start">
          {t("σ=YαΔT, F=YAαΔT (no L)", "σ=YαΔT, F=YAαΔT (L nahi)")}
        </T>
      </Fade>

      {/* beat 5 — torsion and Searle */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M545 221 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={560} y={225} size={13} fill={MUTED} anchor="start">
          {t("torsion & Searle", "torsion & Searle")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={560} y={255} size={13} fill={INK} weight={600} anchor="start">
          C=πηr⁴θ/2L
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={560} y={277} size={13} fill={INK} weight={600} anchor="start">
          {t("Y=MgL/πr²ΔL (Searle)", "Y=MgL/πr²ΔL (Searle)")}
        </T>
      </Fade>

      {/* beat 6 — the order-of-magnitude reference */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M60 495 L60 523" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={515} size={15} fill={RED} script anchor="start">
          {t("Y: steel≈200, copper≈120, aluminium≈70, rubber≈0.01-0.1 GPa", "Y: steel≈200, copper≈120, aluminium≈70, rubber≈0.01-0.1 GPa")}
        </T>
      </Fade>
    </Scene>
  );
}
