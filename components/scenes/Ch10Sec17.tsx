/**
 * Ch10 · Section 17 — "Latent heat: heat that hides during a phase change"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,3,4,15.01,29.86] — beats 0-3 exactly 1s apart, so
 * those Fade delays stay ≤ ~0.3s):
 *  0 hook: one more twist — source of most exam traps
 *  1 pour heat into ice at 0°C — temp doesn't rise while melting (graph)
 *  2 temp holds steady — surprising!
 *  3 heat's going invisible — breaking the crystal lattice
 *  4 latent heat L: hidden heat at constant T, Q = mL
 *  5 latent heats are large: melt 80 cal/g, boil 540 cal/g
 *  6 why steam burns worse: extra 540 cal/g dumped into skin
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl95
 *  b1 | axes x200..620 y130..210 · curve (rise-plateau-rise) · tick "0°C"
 *  b2 | ring at plateau cx365 cy170 rx95 ry18 · label st x650 bl165
 *  b3 | note mid x540 bl240
 *  b4 | formula mid x540 bl270
 *  b5 | box x300..780 y300..345 · comparison mid x540 bl327
 *  b6 | warning mid x540 bl380
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  ringD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={22} fill={INK} script>
          {t("latent heat — heat that hides during a phase change", "latent heat — phase change mein chhupi heat")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={95} size={13} fill={INK} script anchor="middle">
          {t("one more twist — the source of most exam traps", "ek aur twist — zyaadatar exam traps ki jadd")}
        </T>
      </Fade>

      {/* beat 1 — the plateau graph */}
      <Draw on={beat >= 1} delay={dl(1, 0.15)} d="M200 130 v80 M200 210 h420" stroke={INK_LIGHT} sw={1.6} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d="M200 205 L280 170 L450 170 L600 140" stroke={INK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={185} y={174} size={10} fill={MUTED} anchor="end">0°C</T>
      </Fade>

      {/* beat 2 — temp holds steady */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={ringD(365, 170, 95, 18)} stroke={AMBER} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={650} y={165} size={13} fill={AMBER} script weight={700} anchor="start">
          {t("temp holds steady — surprising!", "temp barabar rehta — hairaan karne wala!")}
        </T>
      </Fade>

      {/* beat 3 — breaking the crystal lattice */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={240} size={13} fill={INK} script anchor="middle">
          {t(
            "heat's going invisible — breaking the crystal lattice",
            "heat invisible ban rahi — crystal lattice tootne mein"
          )}
        </T>
      </Fade>

      {/* beat 4 — latent heat, Q = mL */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={270} size={14} fill={INK} anchor="middle">
          Q = m L  ({t("L = latent heat", "L = latent heat")})
        </T>
      </Fade>

      {/* beat 5 — the numbers are large */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M300 300 h480 v45 h-480 z" stroke={INK_LIGHT} sw={2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.55)}>
        <T x={540} y={327} size={14} fill={INK} weight={700} anchor="middle">
          {t("melt ice: 80 cal/g   ·   boil water: 540 cal/g", "ice pighle: 80 cal/g   ·   paani ubale: 540 cal/g")}
        </T>
      </Fade>

      {/* beat 6 — why steam burns worse */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={380} size={13} fill={RED} script weight={700} anchor="middle">
          {t(
            "steam burn: extra 540 cal/g dumped into skin as it condenses",
            "steam burn: condense hote hue skin mein 540 cal/g extra"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
