/**
 * C11 Ch09 · Section 35 — "Oxidation: Baeyer's test and cleavage"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 7.08, 20.48, 25.51, 32.77, 45.4, 51.63]):
 *  0 heading: two strengths · 1 cold dil. KMnO4 (Baeyer's) → vicinal glycol,
 *  decolourising · 2 formula CH2=CH2 -> CH2(OH)CH2(OH) · 3 2nd unsaturation
 *  test · 4 hot acidic KMnO4/K2Cr2O7 CLEAVES · 5 formula CH3CH=CHCH3 ->
 *  2CH3COOH · 6 RED: =CH→COOH; 2-alkyl C→ketone
 *
 * Layout plan — two rows y150 (mild) / y280 (forcing):
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={26} fill={RED} script>
          {t("oxidation: Baeyer's test and cleavage", "oxidation: Baeyer's test aur cleavage")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={15} fill={INK} weight={700}>
          {t("oxidation comes in two strengths", "oxidation do strengths mein aata hai")}
        </T>
      </Fade>

      {/* beat 1 — mild oxidation */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={135} size={15} fill={INK}>
          {t("cold dil. alkaline KMnO4 (Baeyer's) → a vicinal glycol, purple decolourises", "cold dil. alkaline KMnO4 (Baeyer's) → vicinal glycol, purple decolourise")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={175} size={16} fill={INK} weight={700}>
          CH2=CH2 → CH2(OH)–CH2(OH)  (cold dil. KMnO4)
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={210} size={15} fill={INK}>
          {t("that decolourisation is a second unsaturation test", "yeh decolourisation unsaturation ka doosra test hai")}
        </T>
      </Fade>

      {/* beat 4 — forcing oxidation */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={265} size={15} fill={INK} weight={700}>
          {t("hot acidic KMnO4 or K2Cr2O7 CLEAVES the double bond", "hot acidic KMnO4 ya K2Cr2O7 double bond CLEAVE karta")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={305} size={16} fill={INK} weight={700}>
          CH3CH=CHCH3 → 2 CH3COOH  (hot KMnO4/H⁺)
        </T>
      </Fade>

      {/* beat 6 — the reading rule */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 335 L 60 405" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={355} size={16} fill={RED} script anchor="start">
          {t("a =CH carbon becomes –COOH;", "ek =CH carbon –COOH banta;")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={76} y={387} size={16} fill={RED} script anchor="start">
          {t("a carbon with two alkyls becomes a ketone", "do alkyls wala carbon ketone banta")}
        </T>
      </Fade>
    </Scene>
  );
}
