/**
 * C11 Ch09 · Section 63 — "Key definitions and formulae" (arene fact-sheet)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 3.36, 10.63, 22.42, 29.14, 38.26, 45.79, 53.62]):
 *  0 heading · 1 CnH2n-6 series, benzene C6H6 · 2 planar hexagon facts ·
 *  3 resonance energy ≈150 · 4 characteristic reaction: EAS · 5 RED
 *  activating o/p-directing groups · 6 halogens exception · 7 deactivating
 *  m-directing groups
 *
 * Layout plan — dense list rows ~30px apart from y110:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec63({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={25} fill={RED} script>
          {t("key definitions and formulae", "key definitions aur formulae")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={90} size={15} fill={INK} weight={700}>
          {t("your arene fact-sheet", "aapki arene fact-sheet")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={122} size={14} fill={INK}>
          {t("benzene series: CnH2n-6 (n≥6); benzene C6H6", "benzene series: CnH2n-6 (n≥6); benzene C6H6")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={154} size={13} fill={INK}>
          {t("planar hexagon, sp², all C–C = 139 pm, all angles 120°, 6 delocalised π", "planar hexagon, sp², sabhi C–C = 139 pm, sabhi angles 120°, 6 delocalised π")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={186} size={14} fill={INK} weight={700}>
          {t("resonance energy ≈ 150 kJ/mol", "resonance energy ≈ 150 kJ/mol")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={218} size={14} fill={INK}>
          {t("characteristic reaction: electrophilic aromatic substitution (EAS)", "characteristic reaction: electrophilic aromatic substitution (EAS)")}
        </T>
      </Fade>

      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 60 236 L 60 268" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={76} y={254} size={13} fill={RED} script anchor="start">
          {t("activating, o/p-directing: –OH, –NH2, –OR, –CH3, –C6H5 (donors)", "activating, o/p-directing: –OH, –NH2, –OR, –CH3, –C6H5 (donors)")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={296} size={13} fill={INK}>
          {t("deactivating, o/p-directing: halogens –F,–Cl,–Br,–I (the exception)", "deactivating, o/p-directing: halogens –F,–Cl,–Br,–I (exception)")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={328} size={13} fill={INK}>
          {t("deactivating, m-directing: –NO2, –CN, –CHO, –COOH, –SO3H (withdrawers)", "deactivating, m-directing: –NO2, –CN, –CHO, –COOH, –SO3H (withdrawers)")}
        </T>
      </Fade>
    </Scene>
  );
}
