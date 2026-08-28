/**
 * Ch10 · Section 45 — "Worked example: net power of a spherical black body"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,14.12,29.39,38.69,48.25] — beats 0-1 exactly 1s apart,
 * so those Fade delays stay ≤ ~0.3s):
 *  0 hook: a clean board numerical on net radiation
 *  1 setup: sphere r=5cm, T=327°C, surroundings=27°C, find net power
 *  2 convert: T=600K, T₀=300K, r=0.05m, e=1 (black body)
 *  3 area: A=4πr²≈3.14×10⁻² m²
 *  4 T⁴−T₀⁴ = 600⁴−300⁴ = 1.215×10¹¹
 *  5 P_net = σA(T⁴−T₀⁴) ≈ 216 W
 *  6 takeaway: convert to kelvin, never drop the T₀⁴ term
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl90
 *  b1 | sphere c(540,150)r35 · label mid x540 bl200
 *  b2 | convert mid x540 bl235
 *  b3 | area mid x540 bl265
 *  b4 | diff mid x540 bl295
 *  b5 | box x380..700 y320..362 · answer mid x540 bl347
 *  b6 | takeaway mid x540 bl390
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
  GREEN,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={19} fill={INK} script>
          {t("worked example — net power of a spherical black body", "worked example — spherical black body ka net power")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={90} size={13} fill={INK} script anchor="middle">
          {t("a clean board numerical on net radiation", "net radiation par ek saaf board numerical")}
        </T>
      </Fade>

      {/* beat 1 — the setup */}
      <Draw on={beat >= 1} delay={dl(1, 0.15)} d="M505 150 A35 35 0 1 1 575 150 A35 35 0 1 1 505 150" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.55)}>
        <T x={540} y={200} size={12} fill={MUTED} anchor="middle">
          {t("r=5cm sphere, 327°C, surroundings 27°C — find net power", "r=5cm sphere, 327°C, surroundings 27°C — net power?")}
        </T>
      </Fade>

      {/* beat 2 — convert to kelvin */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={235} size={12} fill={INK} anchor="middle">
          T=600K, T₀=300K, r=0.05m, e=1
        </T>
      </Fade>

      {/* beat 3 — the area */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={265} size={13} fill={INK} anchor="middle">
          A=4πr² ≈ 3.14×10⁻² m²
        </T>
      </Fade>

      {/* beat 4 — the fourth-power difference */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={295} size={13} fill={INK} anchor="middle">
          T⁴−T₀⁴ = 600⁴−300⁴ = 1.215×10¹¹
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Draw on={beat >= 5} delay={dl(5, 0.15)} d="M380 320 h320 v42 h-320 z" stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={540} y={347} size={15} fill={GREEN} weight={800} anchor="middle">
          P_net = σA(T⁴−T₀⁴) ≈ 216 W
        </T>
      </Fade>

      {/* beat 6 — takeaway */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={390} size={13} fill={AMBER_DARK} script anchor="middle">
          {t(
            "convert to kelvin, and never drop the T₀⁴ term",
            "kelvin mein convert karo, aur T₀⁴ term kabhi mat chhodo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
