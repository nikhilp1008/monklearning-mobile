/**
 * C11 Ch09 · Section 34 — "Adding sulphuric acid and water"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 7.68, 16.64, 24.92, 36.44, 46.51, 54.19]):
 *  0 heading: two more Markovnikov additions · 1 cold H2SO4 → alkyl
 *  hydrogen sulphate · 2 water + H2SO4 → alcohol · 3 proton adds first,
 *  more stable cation, then nucleophile caps · 4 same two-step logic as HX
 *  · 5 both route through more stable carbocation · 6 RED: standard lab
 *  route alkene→alcohol
 *
 * Layout plan — two reaction rows y150 / y230:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED,
  Scene,
} from '@/components/scenes/kit';
import { ReactionArrow } from "./chem-kit";

export default function C11Ch09Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={26} fill={RED} script>
          {t("adding sulphuric acid and water", "sulphuric acid aur paani add karna")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={15} fill={INK} weight={700}>
          {t("two more Markovnikov additions", "do aur Markovnikov additions")}
        </T>
      </Fade>

      {/* beat 1 — cold H2SO4 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={175} y={165} size={16} fill={INK} weight={700} anchor="start">alkene</T>
      </Fade>
      <ReactionArrow on={beat >= 1} delay={dl(1, 1)} x1={280} x2={420} y={160} over={t("cold conc. H2SO4", "cold conc. H2SO4")} color={INK} />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={440} y={165} size={15} fill={INK} weight={700} anchor="start">
          {t("alkyl hydrogen sulphate", "alkyl hydrogen sulphate")}
        </T>
      </Fade>

      {/* beat 2 — water addition */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={175} y={245} size={16} fill={INK} weight={700} anchor="start">alkene</T>
      </Fade>
      <ReactionArrow on={beat >= 2} delay={dl(2, 1)} x1={280} x2={420} y={240} over={t("H2O, little H2SO4", "H2O, thoda H2SO4")} color={INK} />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={440} y={245} size={16} fill={INK} weight={700} anchor="start">
          {t("an alcohol", "ek alcohol")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={300} size={15} fill={INK}>
          {t("proton adds first (more stable cation), then the nucleophile caps it", "pehle proton add hota (stable cation), phir nucleophile cap karta")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={332} size={15} fill={INK}>
          {t("same two-step, carbocation-controlled logic as HX", "HX jaisa hi two-step, carbocation-controlled logic")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={364} size={15} fill={INK}>
          {t("both route through the more stable carbocation, exactly like HX", "dono zyada stable carbocation se route hote, bilkul HX jaise")}
        </T>
      </Fade>

      {/* beat 6 — the payoff */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 390 L 60 426" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={412} size={16} fill={RED} script anchor="start">
          {t("water addition is a standard lab route from alkene to alcohol", "water addition alkene se alcohol tak ka standard lab route hai")}
        </T>
      </Fade>
    </Scene>
  );
}
