/**
 * C11 Ch09 · Section 68 — "Five substitutions I: nitration and halogenation"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 9.47, 21.85, 30.98, 39.34, 50.69, 59.39]):
 *  0 heading · 1 (a) nitration: conditions · 2 electrophile-forming
 *  equilibrium · 3 net reaction formula · 4 (b) halogenation: conditions ·
 *  5 net reaction formula · 6 RED: always name the electrophile
 *
 * Layout plan — two labeled rows y135-215 / y275-350:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec68({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={25} fill={RED} script>
          {t("five substitutions I: nitration and halogenation", "five substitutions I: nitration aur halogenation")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={94} size={15} fill={INK} weight={700}>
          {t("the mechanism plays out as five named reactions", "mechanism paanch named reactions ke roop mein chalta")}
        </T>
      </Fade>

      {/* beat 1-3 — nitration */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={140} size={16} fill={INK} weight={800} anchor="start">
          {t("(a) Nitration", "(a) Nitration")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={540} y={140} size={14} fill={INK}>
          {t("conc. HNO3 in conc. H2SO4, 323–333 K → nitrobenzene", "conc. HNO3, conc. H2SO4 mein, 323–333 K → nitrobenzene")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={175} size={14} fill={INK}>
          HNO3 + 2 H2SO4 ⇌ NO2⁺ + H3O⁺ + 2 HSO4⁻
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={210} size={15} fill={INK} weight={700}>
          C6H6 + HNO3 → C6H5NO2 + H2O  (conc. H2SO4)
        </T>
      </Fade>

      {/* beat 4-5 — halogenation */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={60} y={280} size={16} fill={INK} weight={800} anchor="start">
          {t("(b) Halogenation", "(b) Halogenation")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={540} y={280} size={14} fill={INK}>
          {t("Cl2 or Br2, with anhydrous FeCl3 or AlCl3", "Cl2 ya Br2, anhydrous FeCl3 ya AlCl3 ke saath")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={315} size={15} fill={INK} weight={700}>
          C6H6 + Cl2 → C6H5Cl + HCl  (anhyd. FeCl3)
        </T>
      </Fade>

      {/* beat 6 — the guardrail */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 400 L 60 460" stroke={RED} sw={3.4} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={422} size={15} fill={RED} weight={700} anchor="start">
          {t("always name the electrophile itself — NO2⁺, Cl⁺", "electrophile ka naam hi lo — NO2⁺, Cl⁺")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={76} y={450} size={14} fill={RED} script anchor="start">
          {t("never the starting reagent, HNO3 or Cl2", "shuruwati reagent nahi, HNO3 ya Cl2 nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
