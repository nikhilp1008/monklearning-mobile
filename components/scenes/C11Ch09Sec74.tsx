/**
 * C11 Ch09 · Section 74 — "Nitration of benzene" (CBSE worked)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 12.97, 26.03, 32.6, 38.4, 47.19, 56.23]):
 *  0 heading + tag · 1 conditions · 2 electrophile named · 3 equilibrium
 *  formula · 4 net reaction formula · 5 mechanism note · 6 RED: product =
 *  nitrobenzene
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec74({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={27} fill={RED} script>
          {t("nitration of benzene", "benzene ka nitration")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={14} fill={INK} weight={700}>[CBSE]</T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={135} size={15} fill={INK} weight={700}>
          {t("conditions: conc. HNO3 with conc. H2SO4, 323–333 K", "conditions: conc. HNO3, conc. H2SO4 ke saath, 323–333 K")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={170} size={14} fill={INK}>
          {t("electrophile: the nitronium ion, NO2⁺", "electrophile: nitronium ion, NO2⁺")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={205} size={14} fill={INK}>
          HNO3 + 2 H2SO4 ⇌ NO2⁺ + H3O⁺ + 2 HSO4⁻
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={240} size={15} fill={INK} weight={700}>
          C6H6 + HNO3 → C6H5NO2 + H2O  (conc. H2SO4, 323–333 K)
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={278} size={13} fill={INK} script>
          {t("mechanism: NO2⁺ attacks the ring, then a base removes H⁺", "mechanism: NO2⁺ ring par attack karta, phir base H⁺ hataata")}
        </T>
      </Fade>

      {/* beat 6 — the answer */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 320 L 60 356" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={342} size={17} fill={RED} weight={800} anchor="start">
          {t("product: nitrobenzene", "product: nitrobenzene")}
        </T>
      </Fade>
    </Scene>
  );
}
