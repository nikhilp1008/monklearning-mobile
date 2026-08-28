/**
 * Ch10 · Section 7 — "Linear, areal, volumetric expansion: the 1-2-3 rule"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.57, 17.83, 18.83, 19.83, 20.83, 21.83] — beats 2-5 only
 * 1s apart, so those Fade delays stay ≤ ~0.3s):
 *  0 hook: length, area, volume — one simple pattern
 *  1 linear: ΔL = α L₀ ΔT (line grows)
 *  2 areal: ΔA = β A₀ ΔT (square grows)
 *  3 volumetric: ΔV = γ V₀ ΔT (cube)
 *  4 payoff: β=2α, γ=3α ⇒ α:β:γ = 1:2:3
 *  5 why: length/area/volume scale as 1st/2nd/3rd powers of a length
 *  6 units: per kelvin = per °C (same magnitude)
 *
 * Layout plan (thirds x=210/540/870, strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl110
 *  b1 | line x150..230(ink)+230..270(red) y195 · labels bl215 · formula mid x210 bl250
 *  b2 | sq small x500..540 y170..210 · sq big x495..555 y160..220 · formula mid x540 bl250
 *  b3 | cube x830..870 y180..220 (+cap) · formula mid x870 bl250
 *  b4 | payoff mid x540 bl320
 *  b5 | why mid x540 bl375
 *  b6 | units mid x540 bl425
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
  INK_LIGHT,
  MUTED,
  GREEN,
  RED,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={23} fill={INK} script>
          {t("linear, areal, volumetric expansion — the 1-2-3 rule", "linear, areal, volumetric expansion — 1-2-3 ka rule")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={110} size={15} fill={INK} script anchor="middle">
          {t(
            "length, area, volume — one simple pattern",
            "length, area, volume — ek simple pattern"
          )}
        </T>
      </Fade>

      {/* beat 1 — linear expansion */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M150 195 h80" stroke={INK} sw={4} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d="M230 195 h40" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={190} y={215} size={11} fill={MUTED}>L₀</T>
        <T x={250} y={215} size={11} fill={RED}>+ΔL</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={210} y={250} size={13} fill={INK} anchor="middle">ΔL = α L₀ ΔT</T>
      </Fade>

      {/* beat 2 — areal expansion */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M500 170 h40 v40 h-40 z" stroke={INK_LIGHT} sw={1.8} dur={0.35} />
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M495 160 h60 v60 h-60 z" stroke={RED} sw={2} dur={0.35} />
      <Fade on={beat >= 2} delay={dl(2, 0.55)}>
        <T x={540} y={250} size={13} fill={INK} anchor="middle">ΔA = β A₀ ΔT</T>
      </Fade>

      {/* beat 3 — volumetric expansion */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.15)}
        d="M830 180 h40 v40 h-40 z M830 180 l12 -12 h40 l-12 12 M870 180 l12 -12 v40 l-12 12"
        stroke={INK_LIGHT}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={870} y={250} size={13} fill={INK} anchor="middle">ΔV = γ V₀ ΔT</T>
      </Fade>

      {/* beat 4 — the payoff: 1:2:3 */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={320} size={20} fill={GREEN} weight={800} anchor="middle">
          β = 2α, γ = 3α  ⇒  α : β : γ = 1 : 2 : 3
        </T>
      </Fade>

      {/* beat 5 — why: powers of a length */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={375} size={13} fill={INK} script anchor="middle">
          {t(
            "why: length, area, volume scale as 1st, 2nd, 3rd powers of a length",
            "wajah: length, area, volume length ki 1st, 2nd, 3rd power jaisi badhti hain"
          )}
        </T>
      </Fade>

      {/* beat 6 — units */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={425} size={13} fill={AMBER_DARK} script anchor="middle">
          {t("unit: per kelvin = per °C (same size step)", "unit: per kelvin = per °C (same size ka step)")}
        </T>
      </Fade>
    </Scene>
  );
}
