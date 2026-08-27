/**
 * C11 Ch09 · Section 28 — "Physical properties of alkenes"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 10.5, 21.76, 30.98, 39.25, 49.32, 56.75]):
 *  0 heading: physically resemble alkanes · 1 non-polar, weak vdW forces ·
 *  2 phase bar: first 3 gas / ~14 liquid / higher solid · 3 insoluble in
 *  water, soluble in non-polar solvents · 4 BP rises ~20-30K per CH2 (arrow)
 *  · 5 branching lowers surface area · 6 RED: straight chain boils higher
 *
 * Layout plan (mirrors Sec15's phase-bar convention, alkene boundaries):
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={27} fill={RED} script>
          {t("physical properties of alkenes", "alkenes ki physical properties")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={16} fill={INK} weight={700}>
          {t("physically, alkenes resemble alkanes", "physically, alkenes alkanes jaise hain")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={130} size={15} fill={INK}>
          {t("like alkanes: essentially non-polar, weak van der Waals forces", "alkanes jaise: essentially non-polar, weak van der Waals forces")}
        </T>
      </Fade>

      {/* beat 2 — the phase bar */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 150 190 H 300 V 220 H 150 Z" stroke={AMBER_DARK} sw={1.8} dur={0.5} fill={CREAM} />
      <Draw on={beat >= 2} delay={dl(2, 0.7)} d="M 300 190 H 670 V 220 H 300 Z" stroke={AMBER_DARK} sw={1.8} dur={0.6} fill="none" />
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d="M 670 190 H 820 V 220 H 670 Z" stroke={AMBER_DARK} sw={1.8} dur={0.5} fill={CREAM} />
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={225} y={182} size={13} fill={INK} weight={700}>{t("first 3", "pehle 3")}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <T x={485} y={182} size={13} fill={INK} weight={700}>{t("next ~14", "agle ~14")}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <T x={745} y={182} size={13} fill={INK} weight={700}>{t("higher", "higher")}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={225} y={238} size={13} fill={MUTED} script>{t("gas", "gas")}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={485} y={238} size={13} fill={MUTED} script>{t("liquid", "liquid")}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <T x={745} y={238} size={13} fill={MUTED} script>{t("solid", "solid")}</T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={278} size={15} fill={INK}>
          {t("insoluble in water; soluble in non-polar solvents (benzene, pet. ether)", "paani mein insoluble; non-polar solvents mein soluble (benzene, pet. ether)")}
        </T>
      </Fade>

      {/* beat 4 — boiling point rises */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={arrowD(150, 320, 820, 320)} stroke={GREEN} sw={2.2} dur={0.9} />
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={485} y={340} size={14} fill={GREEN} script>
          {t("boiling point rises ~20–30 K per added –CH2–", "boiling point ~20–30 K badhta har –CH2– ke saath")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={375} size={15} fill={INK}>
          {t("branching lowers the surface area for van der Waals contact", "branching van der Waals contact ka surface area kam karti")}
        </T>
      </Fade>

      {/* beat 6 — the rule */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 400 L 60 436" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={422} size={16} fill={RED} script anchor="start">
          {t(
            "a straight-chain alkene boils higher than its branched isomer",
            "straight-chain alkene apne branched isomer se zyada boil karta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
