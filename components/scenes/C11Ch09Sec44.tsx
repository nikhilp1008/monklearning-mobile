/**
 * C11 Ch09 · Section 44 — "Key definitions and formulae" (alkyne fact-sheet)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 5.8, 14.85, 25.0, 39.59, 54.27, 70.23, 83.29, 89.94]):
 *  0 heading · 1 CnH2n-2 chip · 2 ethyne C2H2, H-C-C=180° linear · 3 triple
 *  = 1σ+2π+2σ(C-H) · 4 bond energies C≡C>C=C>C-C · 5 lengths shortest ·
 *  6 RED acidity order sp>sp2>sp3 · 7 formula HC≡CH+Na→acetylide · 8
 *  Markovnikov HX/water, Br2/CCl4 test
 *
 * Layout plan — dense list, rows ~32px apart from y120:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} script>
          {t("key definitions and formulae", "key definitions aur formulae")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={92} size={15} fill={INK} weight={700}>
          {t("your alkyne fact-sheet", "aapki alkyne fact-sheet")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <Chip x={462} y={112} w={156} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          CnH2n-2 ({t("one triple bond", "one triple bond")})
        </Chip>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={172} size={14} fill={INK}>
          {t("first member ethyne C2H2; H–C–C angle 180° (linear)", "pehla member ethyne C2H2; H–C–C angle 180° (linear)")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={202} size={14} fill={INK}>
          {t("triple bond = 1 C–C σ (sp–sp) + 2 C–C π + 2 C–H σ", "triple bond = 1 C–C σ (sp–sp) + 2 C–C π + 2 C–H σ")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={232} size={14} fill={INK}>
          C≡C ≈ 823 &gt; C=C ≈ 681 &gt; C–C ≈ 348 kJ/mol
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={262} size={14} fill={INK}>
          {t("lengths: C≡C = 120 < C=C = 133 < C–C = 154 pm (shortest, strongest)", "lengths: C≡C = 120 < C=C = 133 < C–C = 154 pm (sabse chhota, strong)")}
        </T>
      </Fade>

      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 280 L 60 312" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={76} y={296} size={14} fill={RED} script anchor="start">
          {t("acidity: HC≡CH > H2C=CH2 > CH3CH3 (sp > sp² > sp³)", "acidity: HC≡CH > H2C=CH2 > CH3CH3 (sp > sp² > sp³)")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={345} size={15} fill={INK} weight={700}>
          HC≡CH + Na → HC≡C⁻Na⁺ + ½H2
        </T>
      </Fade>

      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={540} y={378} size={14} fill={INK}>
          {t("Markovnikov governs HX & water addition; Br2/CCl4 decolourised", "Markovnikov HX aur water addition govern karta; Br2/CCl4 decolourise")}
        </T>
      </Fade>
    </Scene>
  );
}
