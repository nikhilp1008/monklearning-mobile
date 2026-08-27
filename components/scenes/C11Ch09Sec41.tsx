/**
 * C11 Ch09 · Section 41 — "Alkene pitfalls and pro-tips" (closes Alkenes)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 7.68, 15.62, 26.97, 38.91, 49.92, 59.9]):
 *  0 heading · 1 TRAP 1: cis-trans without checking substituents · 2 RED
 *  gate: 2 different groups needed · 3 TRAP 2: peroxide effect on HCl/HI ·
 *  4 TRAP 3: forgetting carbocation rearrangement · 5 pro-tip: ask "can
 *  1,2-shift reach 3°?" · 6 RED TRAP 4: ozonolysis reconstruction rule
 *
 * Layout plan:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, AMBER_DARK, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={27} fill={RED} script>
          {t("alkene pitfalls and pro-tips", "alkene pitfalls aur pro-tips")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={16} fill={INK} weight={700}>
          {t("four traps that cost marks on alkenes", "chaar traps jo alkenes mein marks kaatte")}
        </T>
      </Fade>

      {/* beat 1 — trap 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={135} size={16} fill={AMBER_DARK} weight={800} anchor="start">TRAP 1</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={155} y={135} size={15} fill={INK} anchor="start">
          {t("claiming cis-trans without checking substituents", "substituents check kiye bina cis-trans keh dena")}
        </T>
      </Fade>

      {/* beat 2 — red gate */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 60 152 L 60 184" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={76} y={172} size={15} fill={RED} script anchor="start">
          {t("gate: each C=C carbon needs two different groups", "gate: har C=C carbon pe do alag groups chahiye")}
        </T>
      </Fade>

      {/* beat 3 — trap 2 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={60} y={222} size={16} fill={AMBER_DARK} weight={800} anchor="start">TRAP 2</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={155} y={222} size={15} fill={INK} anchor="start">
          {t("applying the peroxide effect to HCl or HI", "peroxide effect ko HCl ya HI pe apply karna")}
        </T>
      </Fade>

      {/* beat 4 — trap 3 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={60} y={262} size={16} fill={AMBER_DARK} weight={800} anchor="start">TRAP 3</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={155} y={262} size={15} fill={INK} anchor="start">
          {t("forgetting carbocation rearrangement", "carbocation rearrangement bhool jaana")}
        </T>
      </Fade>

      {/* beat 5 — pro-tip */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={297} size={14} fill={AMBER_DARK} script>
          {t("Pro-tip: after the cation, ask “can a 1,2-shift reach a 3°?”", "Pro-tip: cation ke baad poocho “kya 1,2-shift se 3° milega?”")}
        </T>
      </Fade>

      {/* beat 6 — trap 4, red */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 325 L 60 385" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={345} size={16} fill={RED} weight={800} anchor="start">TRAP 4</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={76} y={367} size={14} fill={RED} script anchor="start">
          {t("rebuild by joining carbonyls: ketone = 2 alkyls,", "carbonyls jodo rebuild karne ko: ketone = 2 alkyls,")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={76} y={393} size={14} fill={RED} script anchor="start">
          {t("aldehyde = had an H", "aldehyde = ek H tha")}
        </T>
      </Fade>
    </Scene>
  );
}
