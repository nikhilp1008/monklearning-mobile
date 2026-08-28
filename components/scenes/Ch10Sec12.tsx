/**
 * Ch10 · Section 12 — "Worked example: thermal stress in a clamped copper rod"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,13.12,24.55,35.22,44.61,59.62], hi [0,7.77,18.52,28.84,
 * 29.84,30.84,31.84] — tight gaps land at different beats per language,
 * so every Fade delay below stays ≤ ~0.4s regardless of beat):
 *  0 hook: JEE Main favourite — expansion stitched to elasticity
 *  1 setup: copper rod, clamped, 25°C → 75°C, find the stress
 *  2 given: Y = 1.1×10¹¹ Pa, α = 1.7×10⁻⁵/°C
 *  3 logic: free rod expands by αΔT — walls compress it back by that strain
 *  4 strain = αΔT = 1.7×10⁻⁵ × 50 = 8.5×10⁻⁴
 *  5 σ = YαΔT = 1.1×10¹¹ × 8.5×10⁻⁴ = 9.35×10⁷ Pa
 *  6 takeaway: no length in the formula — short/long rods, identical stress
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl95
 *  b1 | wall1 x350..370 · wall2 x680..700 y140..180 · rod x370..680 y158..168 ·
 *       caption mid x540 bl200
 *  b2 | given mid x540 bl230
 *  b3 | logic mid x540 bl262
 *  b4 | strain mid x540 bl292
 *  b5 | box x330..750 y318..360 · answer mid x540 bl345
 *  b6 | line1 mid x540 bl388 · line2 mid x540 bl415
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
  AMBER_DARK,
  GREEN,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={21} fill={INK} script>
          {t("worked example — thermal stress in a clamped copper rod", "worked example — clamped copper rod ka thermal stress")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={95} size={13} fill={INK} script anchor="middle">
          {t(
            "a JEE Main favourite — expansion stitched to elasticity",
            "JEE Main ka favourite — expansion aur elasticity ek saath"
          )}
        </T>
      </Fade>

      {/* beat 1 — setup: clamped copper rod */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M350 140 h20 v40 h-20 z M350 140 l20 40 M350 160 l20 20 M350 180 l20 -20" stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M680 140 h20 v40 h-20 z M680 140 l20 40 M680 160 l20 20 M680 180 l20 -20" stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M370 158 h310 v10 h-310 z" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.85)}>
        <T x={540} y={200} size={12} fill={INK} script anchor="middle">
          {t("copper rod, clamped — 25°C → 75°C — find σ", "copper rod, clamped — 25°C → 75°C — σ nikaalo")}
        </T>
      </Fade>

      {/* beat 2 — given */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={230} size={13} fill={INK} anchor="middle">
          Y = 1.1×10¹¹ Pa, α = 1.7×10⁻⁵ ⁄ °C
        </T>
      </Fade>

      {/* beat 3 — the logic */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={540} y={262} size={12} fill={INK} script anchor="middle">
          {t(
            "free: rod expands by αΔT — walls compress it back by that strain",
            "free hota to αΔT se expand karta — deewaarein wahi strain wapas dabaati"
          )}
        </T>
      </Fade>

      {/* beat 4 — strain */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <T x={540} y={292} size={13} fill={INK} anchor="middle">
          strain = αΔT = 1.7×10⁻⁵ × 50 = 8.5×10⁻⁴
        </T>
      </Fade>

      {/* beat 5 — the stress */}
      <Draw on={beat >= 5} delay={dl(5, 0.15)} d="M330 318 h420 v42 h-420 z" stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={540} y={345} size={14} fill={GREEN} weight={800} anchor="middle">
          σ = YαΔT = 1.1×10¹¹ × 8.5×10⁻⁴ = 9.35×10⁷ Pa
        </T>
      </Fade>

      {/* beat 6 — takeaway: length-independent */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={388} size={13} fill={AMBER_DARK} script anchor="middle">
          {t("no length in the formula —", "formula mein length hai hi nahi —")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={540} y={415} size={13} fill={AMBER_DARK} script weight={700} anchor="middle">
          {t("short and long rods develop IDENTICAL stress", "chhota aur lamba rod — dono ka stress SAME")}
        </T>
      </Fade>
    </Scene>
  );
}
