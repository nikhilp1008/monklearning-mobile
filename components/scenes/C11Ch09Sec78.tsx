/**
 * C11 Ch09 · Section 78 — "Aromatic pitfalls and pro-tips" (closes Aromatic Hydrocarbons)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 6.57, 14.85, 24.41, 35.58, 45.91, 56.15]):
 *  0 heading · 1 TRAP 1: expecting Br2-water decolourisation · 2 RED
 *  pro-tip: resists Br2/Baeyer's but burns sooty ⇒ aromatic · 3 TRAP 2:
 *  calling halogens activating · 4 pro-tip: rate=induction, orientation=
 *  resonance · 5 TRAP 3: (4n+2) without checking structure · 6 RED TRAP 4:
 *  name the electrophile, not the reagent
 *
 * Layout plan:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, AMBER_DARK, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec78({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={26} fill={RED} script>
          {t("aromatic pitfalls and pro-tips", "aromatic pitfalls aur pro-tips")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={16} fill={INK} weight={700}>
          {t("four traps that cost marks on arenes", "chaar traps jo arenes mein marks kaatte")}
        </T>
      </Fade>

      {/* beat 1 — trap 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={135} size={16} fill={AMBER_DARK} weight={800} anchor="start">TRAP 1</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={155} y={135} size={14} fill={INK} anchor="start">
          {t("expecting benzene to decolourise bromine water", "benzene se bromine water decolourise hone ki ummeed")}
        </T>
      </Fade>

      {/* beat 2 — red pro-tip */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 60 152 L 60 208" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={76} y={172} size={14} fill={RED} script anchor="start">
          {t("resists Br2 water and Baeyer's, but burns sooty", "Br2 water aur Baeyer's resist karta, sooty jalta")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={76} y={200} size={14} fill={RED} script anchor="start">
          ⇒ {t("almost certainly aromatic", "almost certainly aromatic")}
        </T>
      </Fade>

      {/* beat 3 — trap 2 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={60} y={240} size={16} fill={AMBER_DARK} weight={800} anchor="start">TRAP 2</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={155} y={240} size={14} fill={INK} anchor="start">
          {t("calling halogens activating just because o/p-directing", "halogens ko activating keh dena kyunki o/p-directing hain")}
        </T>
      </Fade>

      {/* beat 4 — pro-tip */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={275} size={14} fill={AMBER_DARK} script>
          {t("rate is set by induction (−I), orientation by resonance (+R)", "rate induction (−I) se, orientation resonance (+R) se")}
        </T>
      </Fade>

      {/* beat 5 — trap 3 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={60} y={315} size={16} fill={AMBER_DARK} weight={800} anchor="start">TRAP 3</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={155} y={315} size={14} fill={INK} anchor="start">
          {t("applying (4n+2) without checking the structure first", "structure check kiye bina (4n+2) laga dena")}
        </T>
      </Fade>

      {/* beat 6 — trap 4, red */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 335 L 60 403" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={355} size={16} fill={RED} weight={800} anchor="start">TRAP 4</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={76} y={378} size={14} fill={RED} script anchor="start">
          {t("name the ELECTROPHILE — NO2⁺, Cl⁺, R⁺, RCO⁺", "ELECTROPHILE ka naam lo — NO2⁺, Cl⁺, R⁺, RCO⁺")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={76} y={405} size={14} fill={RED} script anchor="start">
          {t("never the starting reagent", "shuruwati reagent kabhi nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
