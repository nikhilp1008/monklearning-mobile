/**
 * Ch10 · Section 47 — "Worked example: a star's temperature and power"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,12.78,19.26,30.01,46.06,57.23] — beats 0-1 exactly 1s
 * apart, so those Fade delays stay ≤ ~0.3s):
 *  0 hook: combines both laws in sequence, astrophysics-flavoured
 *  1 setup: star peaks at 500nm, black body — find T and power per area
 *  2 step 1, Wien: T = b/λ_m
 *  3 substitute: T = 2.9×10⁻³/(500×10⁻⁹) = 5800 K
 *  4 step 2, Stefan per area: E = σT⁴ ≈ 6.4×10⁷ W/m²
 *  5 the pattern: Wien for T, then Stefan for power — two clean steps
 *  6 takeaway: 5800 K is close to the Sun's own surface temperature
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl85
 *  b1 | star x520..560 y100..140 (spikes) · label mid x540 bl175
 *  b2 | step1 mid x540 bl210
 *  b3 | box x330..750 y235..277 · T mid x540 bl262
 *  b4 | box x300..780 y300..342 · E mid x540 bl327
 *  b5 | pattern mid x540 bl370
 *  b6 | takeaway mid x540 bl400
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

export default function Ch10Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={20} fill={INK} script>
          {t("worked example — a star's temperature and power", "worked example — ek taare ka temperature aur power")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("combines both laws in sequence — the astrophysics classic", "dono laws ek saath — astrophysics ka classic sawaal")}
        </T>
      </Fade>

      {/* beat 1 — the setup: the star */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.15)}
        d="M540 100 l6 20 l20 6 l-20 6 l-6 20 l-6 -20 l-20 -6 l20 -6 z"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.55)}>
        <T x={540} y={175} size={12} fill={MUTED} anchor="middle">
          {t("peaks at 500nm, black body — find T and power/area", "500nm par peak, black body — T aur power/area?")}
        </T>
      </Fade>

      {/* beat 2 — step 1, Wien */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={210} size={14} fill={INK} weight={700} anchor="middle">
          {t("step 1 (Wien): T = b/λ_m", "step 1 (Wien): T = b/λ_m")}
        </T>
      </Fade>

      {/* beat 3 — substitute for T */}
      <Draw on={beat >= 3} delay={dl(3, 0.15)} d="M330 235 h420 v42 h-420 z" stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={540} y={262} size={14} fill={AMBER_DARK} weight={800} anchor="middle">
          T = 2.9×10⁻³/(500×10⁻⁹) = 5800 K
        </T>
      </Fade>

      {/* beat 4 — step 2, Stefan per area */}
      <Draw on={beat >= 4} delay={dl(4, 0.15)} d="M300 300 h480 v42 h-480 z" stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={540} y={327} size={14} fill={GREEN} weight={800} anchor="middle">
          E = σT⁴ ≈ 6.4×10⁷ W/m²
        </T>
      </Fade>

      {/* beat 5 — the two-step pattern */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={370} size={12} fill={MUTED} script anchor="middle">
          {t("Wien for T, then Stefan for power — two clean steps", "T ke liye Wien, phir power ke liye Stefan — do saaf steps")}
        </T>
      </Fade>

      {/* beat 6 — takeaway */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={400} size={13} fill={INK} script weight={700} anchor="middle">
          {t(
            "5800 K is close to the Sun's own surface temperature",
            "5800 K Sun ke surface temperature ke bahut kareeb hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
