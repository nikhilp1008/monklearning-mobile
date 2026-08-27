/**
 * C11 Ch09 · Section 37 — "but-1-ene + HBr, with and without peroxide" (CBSE)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 11.43, 22.27, 37.72, 44.46, 48.9, 56.15]):
 *  0 heading · 1 but-1-ene unsymmetrical · 2 (i) without peroxide:
 *  Markovnikov · 3 formula → CH3CH2CHBrCH3 · 4 product: 2-bromobutane ·
 *  5 (ii) with peroxide: Br to terminal · 6 RED: 1-bromobutane
 *
 * Layout plan — two labeled rows y230 (i) / y340 (ii):
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, GREEN, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={22} fill={RED} script>
          {t("but-1-ene + HBr, with and without peroxide", "but-1-ene + HBr, peroxide ke saath aur bina")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={14} fill={INK} weight={700}>[CBSE]</T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={125} size={15} fill={INK}>
          {t("but-1-ene, CH3CH2CH=CH2, is an unsymmetrical alkene", "but-1-ene, CH3CH2CH=CH2, ek unsymmetrical alkene hai")}
        </T>
      </Fade>

      {/* beat 2-4 — without peroxide */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={60} y={190} size={16} fill={INK} weight={800} anchor="start">
          {t("(i) Without peroxide", "(i) Peroxide ke bina")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={540} y={190} size={15} fill={INK}>
          {t("Markovnikov: H to terminal CH2, Br to C2", "Markovnikov: H terminal CH2 pe, Br C2 pe")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={225} size={16} fill={INK} weight={700}>
          CH3CH2CH=CH2 + HBr → CH3CH2CHBr–CH3
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={258} size={16} fill={GREEN} weight={700}>
          {t("product: 2-bromobutane (Markovnikov)", "product: 2-bromobutane (Markovnikov)")}
        </T>
      </Fade>

      {/* beat 5 — with peroxide */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={60} y={320} size={16} fill={INK} weight={800} anchor="start">
          {t("(ii) With peroxide (Kharasch)", "(ii) Peroxide ke saath (Kharasch)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={320} size={15} fill={INK}>
          {t("Br adds to the terminal carbon instead", "Br terminal carbon pe add hota hai")}
        </T>
      </Fade>

      {/* beat 6 — the answer */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 350 L 60 386" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={372} size={16} fill={RED} weight={700} anchor="start">
          {t("product: 1-bromobutane (anti-Markovnikov)", "product: 1-bromobutane (anti-Markovnikov)")}
        </T>
      </Fade>
    </Scene>
  );
}
