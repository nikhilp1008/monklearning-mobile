/**
 * Ch10 · Section 30 — "Fourier's law and thermal conductivity"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Note: hi reveals have beats 3-4 exactly 1s apart — those Fade delays
 * stay ≤ ~0.3s.
 *
 * Beats (en [0,3.93,13.23,17.24,23.47,33.37,44.8]):
 *  0 intro: the law itself, in steady state
 *  1 Fourier's law: H = dQ/dt = KA(T₁−T₂)/L
 *  2 H = rate of heat flow, unit Watt
 *  3 temperature gradient = (T₁−T₂)/L, unit K/m
 *  4 K = thermal conductivity, W/(m·K), [MLT⁻³θ⁻¹]
 *  5 K high for metals (copper~400, Al~235), low for insulators
 *  6 reminder: holds only in steady state
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | intro mid x540 bl90
 *  b1 | law mid x540 bl135
 *  b2 | note mid x540 bl175
 *  b3 | note mid x540 bl205
 *  b4 | note mid x540 bl235 · dims mid x540 bl260
 *  b5 | box x300..780 y285..335 · values mid x540 bl312
 *  b6 | reminder mid x540 bl360
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
  AMBER_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={23} fill={INK} script>
          {t("fourier's law and thermal conductivity", "fourier's law aur thermal conductivity")}
        </T>
      </Fade>

      {/* beat 0 — intro */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={90} size={13} fill={INK} script anchor="middle">
          {t("the law itself, in steady state", "khud yeh law, steady state mein")}
        </T>
      </Fade>

      {/* beat 1 — the law */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={135} size={22} fill={INK} weight={800} anchor="middle">
          H = KA(T₁−T₂)⁄L
        </T>
      </Fade>

      {/* beat 2 — H is rate of heat flow */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={175} size={13} fill={INK} script anchor="middle">
          {t("H = dQ/dt = rate of heat flow, unit Watt", "H = dQ/dt = heat flow ki rate, unit Watt")}
        </T>
      </Fade>

      {/* beat 3 — the temperature gradient */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={540} y={205} size={13} fill={INK} anchor="middle">
          {t("gradient = (T₁−T₂)/L, unit K/m", "gradient = (T₁−T₂)/L, unit K/m")}
        </T>
      </Fade>

      {/* beat 4 — thermal conductivity K */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <T x={540} y={235} size={13} fill={INK} anchor="middle">
          {t("K = thermal conductivity, W/(m·K)", "K = thermal conductivity, W/(m·K)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={260} size={12} fill={MUTED}>[M L T⁻³ θ⁻¹]</T>
      </Fade>

      {/* beat 5 — the K values */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M300 285 h480 v50 h-480 z" stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.55)}>
        <T x={540} y={306} size={13} fill={AMBER_DARK} weight={700} anchor="middle">
          Cu≈400, Al≈235 W/(m·K)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.85)}>
        <T x={540} y={326} size={11} fill={MUTED} script anchor="middle">
          {t("low for glass, wood, air — the insulators", "glass, wood, air ke liye kam — insulators")}
        </T>
      </Fade>

      {/* beat 6 — the reminder */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={360} size={13} fill={RED} script weight={700} anchor="middle">
          {t("holds only in steady state — temperatures stop changing", "sirf steady state mein chalta — temperature badalna band")}
        </T>
      </Fade>
    </Scene>
  );
}
