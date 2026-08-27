/**
 * C11 Ch09 · Section 56 — "Hydration regiochemistry and iodoform" (JEE Main)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 9.3, 16.9, 22.7, 36.01, 49.75, 57.34, 63.4]):
 *  0 heading · 1 (i) why ethyne→aldehyde, higher→ketone? · 2 Markovnikov:
 *  OH on more substituted C · 3 ethyne: both C keep H → aldehyde · 4 higher
 *  alkyne: OH-carbon has no H after tautomerisation → ketone · 5 (ii)
 *  but-1-yne hydrates at C2 → butan-2-one · 6 formula · 7 RED: methyl
 *  ketone → positive iodoform
 *
 * Layout plan:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec56({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} script>
          {t("hydration regiochemistry and iodoform", "hydration regiochemistry aur iodoform")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={92} size={14} fill={INK} weight={700}>[JEE Main]</T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={125} size={15} fill={INK} weight={700}>
          {t("(i) why ethyne → aldehyde, but every higher alkyne → ketone?", "(i) ethyne → aldehyde kyun, par har higher alkyne → ketone?")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={160} size={14} fill={INK}>
          {t("Markovnikov puts –OH on the more substituted carbon", "Markovnikov –OH ko zyada substituted carbon pe rakhta")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={193} size={14} fill={INK}>
          {t("in ethyne both carbons keep an H → enol → acetaldehyde (aldehyde)", "ethyne mein dono carbons H rakhte → enol → acetaldehyde (aldehyde)")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={226} size={14} fill={INK}>
          {t("higher alkyne: –OH carbon has no H after tautomerisation → ketone", "higher alkyne: –OH carbon pe tautomerisation ke baad H nahi → ketone")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={270} size={15} fill={INK} weight={700}>
          {t("(ii) but-1-yne hydrates at C2 → butan-2-one", "(ii) but-1-yne C2 pe hydrate hota → butan-2-one")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={305} size={15} fill={INK} weight={700}>
          CH3CH2C≡CH + H2O → CH3CH2COCH3  (Hg²⁺)
        </T>
      </Fade>

      {/* beat 7 — iodoform */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d="M 60 330 L 60 386" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={76} y={350} size={14} fill={RED} script anchor="start">
          {t("butan-2-one has a CH3CO– (methyl ketone) group", "butan-2-one mein CH3CO– (methyl ketone) group hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={76} y={378} size={14} fill={RED} script anchor="start">
          {t("→ positive iodoform test", "→ iodoform test positive")}
        </T>
      </Fade>
    </Scene>
  );
}
