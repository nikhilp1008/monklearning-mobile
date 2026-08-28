/**
 * Ch08 · Section 33 — "The Poisson and elastic-energy toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 1..4 are ~1s each — short delays throughout for English.
 *
 * Subtopic-3 recap: every formula from Sec27-32, two columns.
 *
 * Beats (en [0, 1.0, 2.0, 3.0, 4.0, 14.75, 27.98]):
 *  0 title only
 *  1 Poisson's ratio: ν=-(Δr/r)/(ΔL/L), 0≤ν≤0.5
 *  2 volume relation: ΔV/V=(1-2ν)(ΔL/L)
 *  3 elastic energy (3 forms): U=½FΔL=½σε(Vol)=½(YA/L)(ΔL)²
 *  4 energy density: u=½σε=½Yε²=σ²/2Y
 *  5 loading contrast: gradual W=U=½FΔL; sudden x_max=2x_static
 *  6 red margin: every ½ comes from average force building from zero
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b1 | tick/label (13)     | T st | x60..~200 bl155
 *  b1 | formula (15)        | T st | x60..263 bl185
 *  b2 | tick/label (13)     | T st | x60..~210 bl225
 *  b2 | formula (16)        | T st | x60..220 bl255
 *  b3 | tick/label (13)     | T st | x60..~230 bl300
 *  b3 | formula1 (14)       | T st | x60..~360 bl325
 *  b3 | formula2 (14)       | T st | x60..~260 bl347
 *  b4 | tick/label (13)     | T st | x560..~700 bl155
 *  b4 | formula (15)        | T st | x560..725 bl185
 *  b5 | tick/label (13)     | T st | x560..~720 bl225
 *  b5 | formula1 (13)       | T st | x560..677 bl255
 *  b5 | formula2 (13)       | T st | x560..723 bl277
 *  b6 | margin bar          | Draw | x60 y495..523
 *  b6 | note (15)           | T st | x76..~530 bl515
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

export default function Ch08Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("Poisson and energy toolkit", "Poisson aur energy toolkit")}
        </T>
      </Fade>

      {/* beat 1 — Poisson's ratio */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M45 151 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={155} size={13} fill={MUTED} anchor="start">
          {t("Poisson's ratio", "Poisson's ratio")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={60} y={185} size={15} fill={INK} weight={600} anchor="start">
          ν = −(Δr/r)/(ΔL/L), 0≤ν≤0.5
        </T>
      </Fade>

      {/* beat 2 — volume relation */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M45 221 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={60} y={225} size={13} fill={MUTED} anchor="start">
          {t("volume relation", "volume relation")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={60} y={255} size={16} fill={INK} weight={700} anchor="start">
          ΔV/V = (1−2ν)(ΔL/L)
        </T>
      </Fade>

      {/* beat 3 — elastic energy, three forms */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M45 296 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={60} y={300} size={13} fill={MUTED} anchor="start">
          {t("elastic energy (3 forms)", "elastic energy (3 forms)")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={60} y={325} size={14} fill={INK} weight={600} anchor="start">
          U = ½FΔL = ½σε(Volume)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={60} y={347} size={14} fill={INK} weight={600} anchor="start">
          = ½(YA/L)(ΔL)²
        </T>
      </Fade>

      {/* beat 4 — energy density */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M545 151 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={560} y={155} size={13} fill={MUTED} anchor="start">
          {t("energy density", "energy density")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={560} y={185} size={15} fill={INK} weight={600} anchor="start">
          u = ½σε = ½Yε² = σ²/2Y
        </T>
      </Fade>

      {/* beat 5 — loading contrast */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M545 221 h8" stroke={MUTED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={560} y={225} size={13} fill={MUTED} anchor="start">
          {t("loading contrast", "loading contrast")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={560} y={255} size={13} fill={INK} weight={600} anchor="start">
          gradual: W=U=½FΔL
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={560} y={277} size={13} fill={INK} weight={600} anchor="start">
          sudden: x_max = 2x_static
        </T>
      </Fade>

      {/* beat 6 — the unifying one-half */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M60 495 L60 523" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={515} size={15} fill={RED} script anchor="start">
          {t("every ½ comes from the average force, from zero", "har ½ average force se aata hai, zero se")}
        </T>
      </Fade>
    </Scene>
  );
}
