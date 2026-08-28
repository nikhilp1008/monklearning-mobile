/**
 * Ch07 · Section 60 — "Worked example: the geostationary altitude (JEE Main)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 18.19, 27.83, 41.66, 52.49]):
 *  0 title
 *  1 amber: single condition T = 24h = 86400s
 *  2 (continues) one requirement pins everything
 *  3 solve for r formula
 *  4 substitute GM, T²
 *  5 r³ evaluated
 *  6 green box: r ≈ 4.2×10⁷ m, h ≈ 36,000 km
 *  7 red margin: every TV/weather satellite, ~6R
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · problem cx540 bl84
 *  b1 | line cx540 bl130
 *  b3 | line cx540 bl175
 *  b4 | line cx540 bl215
 *  b5 | line cx540 bl255
 *  b6 | green box x280..800 y280..332(bl312)
 *  b7 | bar x66 y440..492 lines bl460/486
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
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec60({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — where must it orbit */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [JEE Main] — the geostationary altitude",
            "Example [JEE Main] — geostationary altitude"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "find the height where a satellite's period matches Earth's spin",
            "wo height dhoondo jahan satellite ka period Earth ke spin se match kare"
          )}
        </T>
      </Fade>

      {/* beat 1 — the single condition */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={540} y={130} size={15} fill={AMBER_DARK} script>
          {t(
            "one condition: T = 24 h = 86400 s",
            "ek condition: T = 24 h = 86400 s"
          )}
        </T>
      </Fade>

      {/* beat 3 — solve for r */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={540} y={175} size={15} fill={INK} weight={700}>
          T² = 4π²r³ ⁄ GM → r = (GM·T² ⁄ 4π²)^(1⁄3)
        </T>
      </Fade>

      {/* beat 4 — substitute */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={540} y={215} size={14} fill={INK} weight={700}>
          GM = 4.0×10¹⁴,  T² = 7.47×10⁹
        </T>
      </Fade>

      {/* beat 5 — r³ */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={540} y={255} size={14} fill={INK} weight={700}>
          r³ = (4.0×10¹⁴)(7.47×10⁹) ⁄ 39.5 = 7.56×10²²
        </T>
      </Fade>

      {/* beat 6 — the answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.5)}
          d="M 292 280 h 496 q 12 0 12 12 v 28 q 0 12 -12 12 h -496 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={540} y={312} size={15} fill={INK} weight={800}>
          r ≈ 4.2×10⁷ m → h ≈ 36,000 km
        </T>
      </Fade>

      {/* beat 7 — the one special altitude */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 440 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={460} size={13} fill={RED} script anchor="start">
          {t(
            "every TV/weather satellite over the equator: this ONE altitude",
            "har TV/weather satellite equator par: yehi EK altitude"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={84} y={486} size={13} fill={RED} script anchor="start">
          {t(
            "≈ 6 Earth-radii up — where period matches the day",
            "≈ 6 Earth-radii upar — jahan period din se match kare"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
