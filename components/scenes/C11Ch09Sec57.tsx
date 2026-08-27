/**
 * C11 Ch09 · Section 57 — "pKa and choosing a base" (JEE Advanced)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 7.77, 26.11, 40.11, 55.13, 67.93, 80.04, 92.42]):
 *  0 heading · 1 given pKa: ethyne 25, NH3 38, water 16, ethene 44, ethane
 *  50 · 2 (i) lower pKa=stronger acid: ethyne>ethene>ethane · 3 carbanion
 *  stable in highest s-character (sp) · 4 (ii) base works only if conjugate
 *  acid WEAKER · 5 NaNH2: NH3(38)>alkyne(25) → CAN · 6 NaOH: water(16)
 *  <alkyne(25) → CANNOT · 7 RED (iii) use NaNH2/Na, never hydroxide
 *
 * Layout plan:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, GREEN, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec57({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} script>
          {t("pKa and choosing a base", "pKa aur base chunna")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={92} size={14} fill={INK} weight={700}>[JEE Advanced]</T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={128} size={14} fill={INK}>
          {t("given pKa: ethyne ≈25 · NH3 ≈38 · water ≈16 · ethene ≈44 · ethane ≈50", "diya gaya pKa: ethyne ≈25 · NH3 ≈38 · water ≈16 · ethene ≈44 · ethane ≈50")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={165} size={15} fill={INK} weight={700}>
          {t("(i) lower pKa = stronger acid → ethyne > ethene > ethane", "(i) kam pKa = stronger acid → ethyne > ethene > ethane")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={200} size={14} fill={INK}>
          {t("the carbanion is most stable in the highest-s-character orbital (sp)", "carbanion sabse stable hota sabse zyada s-character wale orbital (sp) mein")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={240} size={15} fill={INK} weight={700}>
          {t("(ii) a base works only if its conjugate acid is WEAKER", "(ii) base tabhi kaam karta jab conjugate acid WEAKER ho")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={278} size={14} fill={GREEN} weight={700}>
          NaNH2: NH3 (38) &gt; alkyne (25) → CAN {t("form the acetylide", "acetylide bana sakta")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={313} size={14} fill={RED} weight={700}>
          NaOH: water (16) &lt; alkyne (25) → CANNOT {t("deprotonate", "deprotonate nahi kar sakta")}
        </T>
      </Fade>

      {/* beat 7 — the rule */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d="M 60 335 L 60 371" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={76} y={357} size={15} fill={RED} script anchor="start">
          {t("(iii) make acetylides with NaNH2 or Na — never hydroxide", "(iii) acetylides NaNH2 ya Na se banao — hydroxide se kabhi nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
