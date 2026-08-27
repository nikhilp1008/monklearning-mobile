/**
 * C11 Ch09 · Section 52 — "Kucherov hydration"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 10.41, 20.39, 29.7, 38.91, 50.18, 56.41]):
 *  0 heading: adding water, the carbonyl surprise · 1 need HgSO4/dil.H2SO4/
 *  333K · 2 one water adds (Markovnikov); unstable enol rearranges ·
 *  3 chain: HC≡CH+H2O → [enol] → CH3CHO · 4 ethyne special: aldehyde ·
 *  5 formula (restated) · 6 RED: higher alkynes → ketone, never stop at enol
 *
 * Layout plan — chain row y210:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, AMBER_DARK, GREEN, INK, RED,
  Scene,
} from '@/components/scenes/kit';
import { ReactionArrow } from "./chem-kit";

export default function C11Ch09Sec52({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={26} fill={RED} script>
          {t("Kucherov hydration", "Kucherov hydration")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={15} fill={INK} weight={700}>
          {t("adding water: the carbonyl surprise", "paani add karna: carbonyl surprise")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={135} size={14} fill={INK}>
          {t("alkynes don't react with water alone; need HgSO4 in dil. H2SO4 at 333 K", "alkynes akele paani se react nahi karte; HgSO4, dil. H2SO4, 333 K chahiye")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={170} size={14} fill={INK}>
          {t("one water adds (Markovnikov); the unstable enol rearranges to a carbonyl", "ek paani add hota (Markovnikov); unstable enol carbonyl mein rearrange hota")}
        </T>
      </Fade>

      {/* beat 3 — the chain */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={60} y={225} size={14} fill={INK} weight={700} anchor="start">HC≡CH + H2O</T>
      </Fade>
      <ReactionArrow on={beat >= 3} delay={dl(3, 0.6)} x1={225} x2={330} y={220} over={t("HgSO4, 333K", "HgSO4, 333K")} color={INK} />
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={430} y={225} size={14} fill={AMBER_DARK} weight={700} anchor="middle">
          [CH2=CH–OH]
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={430} y={245} size={11} fill={AMBER_DARK} script>{t("enol (unstable)", "enol (unstable)")}</T>
      </Fade>
      <ReactionArrow on={beat >= 3} delay={dl(3, 2)} x1={520} x2={625} y={220} over={t("tautomerise", "tautomerise")} color={GREEN} />
      <Fade on={beat >= 3} delay={dl(3, 2.7)}>
        <T x={720} y={225} size={16} fill={INK} weight={800} anchor="start">CH3CHO</T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={295} size={15} fill={INK}>
          {t("ethyne is the special case: it gives the aldehyde acetaldehyde", "ethyne special case hai: yeh aldehyde acetaldehyde deta")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={330} size={15} fill={INK} weight={700}>
          HC≡CH + H2O → CH3CHO  (HgSO4, H2SO4, 333 K)
        </T>
      </Fade>

      {/* beat 6 — the guardrail */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 355 L 60 391" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={377} size={15} fill={RED} script anchor="start">
          {t("every higher alkyne gives a KETONE — never stop at the enol", "har higher alkyne KETONE deta — enol pe kabhi mat ruko")}
        </T>
      </Fade>
    </Scene>
  );
}
