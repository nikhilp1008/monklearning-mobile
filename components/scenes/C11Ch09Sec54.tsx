/**
 * C11 Ch09 · Section 54 — "Propyne with sodamide and water" (CBSE)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 12.63, 20.65, 26.79, 31.4, 37.72, 47.53, 52.39]):
 *  0 heading · 1 propyne is a terminal alkyne · 2 (i) terminal C-H acidic,
 *  sodamide removes it · 3 formula → sodium propynide · 4 product: sodium
 *  propynide · 5 (ii) Markovnikov hydration, enol→ketone · 6 formula →
 *  propanone · 7 RED product: propanone (acetone)
 *
 * Layout plan — two labeled rows y190 / y330:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, GREEN, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec54({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={24} fill={RED} script>
          {t("propyne with sodamide and water", "propyne, sodamide aur paani ke saath")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={14} fill={INK} weight={700}>
          [CBSE] Propyne + (i) NaNH2 (ii) {t("water/HgSO4", "paani/HgSO4")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={128} size={15} fill={INK}>
          {t("propyne, CH3C≡CH, is a terminal alkyne", "propyne, CH3C≡CH, ek terminal alkyne hai")}
        </T>
      </Fade>

      {/* beat 2-4 — part (i) */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={60} y={185} size={16} fill={INK} weight={800} anchor="start">(i)</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={540} y={185} size={15} fill={INK}>
          {t("the terminal C–H is acidic; sodamide removes it", "terminal C–H acidic hai; sodamide usse hata deta")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={220} size={15} fill={INK} weight={700}>
          CH3C≡CH + NaNH2 → CH3C≡C⁻Na⁺ + NH3
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={253} size={16} fill={GREEN} weight={700}>
          {t("product: sodium propynide", "product: sodium propynide")}
        </T>
      </Fade>

      {/* beat 5-7 — part (ii) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={60} y={310} size={16} fill={INK} weight={800} anchor="start">(ii)</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={310} size={15} fill={INK}>
          {t("Markovnikov hydration: O to the more substituted C; enol → ketone", "Markovnikov hydration: O zyada substituted C pe; enol → ketone")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={345} size={15} fill={INK} weight={700}>
          CH3C≡CH + H2O → CH3COCH3  (HgSO4, H2SO4, 333 K)
        </T>
      </Fade>

      {/* beat 7 — the answer */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d="M 60 370 L 60 406" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={76} y={392} size={16} fill={RED} weight={700} anchor="start">
          {t("product: propanone (acetone)", "product: propanone (acetone)")}
        </T>
      </Fade>
    </Scene>
  );
}
