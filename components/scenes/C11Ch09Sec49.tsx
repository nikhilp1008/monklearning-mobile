/**
 * C11 Ch09 · Section 49 — "The signature reaction: acidity and acetylides"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 9.05, 21.08, 27.22, 32.77, 44.46, 58.79, 71.0, 80.55]):
 *  0 heading · 1 Na/sodamide deprotonate terminal H · 2 formula HC≡CH+Na→
 *  · 3 formula CH3C≡CH+NaNH2→ · 4 alkenes/alkanes don't react · 5 reason:
 *  sp 50% s-character stabilises · 6 ethyne has 2 acidic H's, excess Na →
 *  disodium · 7 formula disodium ethynide · 8 RED order
 *
 * Layout plan — dense list, rows ~30px apart from y120:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} script>
          {t("the signature reaction: acidity and acetylides", "signature reaction: acidity aur acetylides")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={92} size={15} fill={INK} weight={700}>
          {t("acetylides: the terminal-alkyne fingerprint", "acetylides: terminal-alkyne ka fingerprint")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={125} size={14} fill={INK}>
          {t("Na and sodamide are strong bases — they deprotonate the terminal H", "Na aur sodamide strong bases — terminal H ko deprotonate karte")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={158} size={15} fill={INK} weight={700}>
          HC≡CH + Na → HC≡C⁻Na⁺ + ½H2
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={190} size={15} fill={INK} weight={700}>
          CH3C≡CH + NaNH2 → CH3C≡C⁻Na⁺ + NH3
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={224} size={14} fill={INK}>
          {t("alkenes and alkanes do NOT react this way ⇒ distinguishes a terminal alkyne", "alkenes/alkanes aisa react NAHI karte ⇒ terminal alkyne pehchana jaata")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={257} size={14} fill={INK}>
          {t("reason: sp carbon's 50% s-character stabilises the leftover negative charge", "reason: sp carbon ka 50% s-character bache negative charge ko stabilise karta")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={290} size={14} fill={INK}>
          {t("ethyne has two acidic H's; excess Na gives the disodium ethynide", "ethyne ke do acidic H hain; excess Na disodium ethynide deta")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={323} size={14} fill={INK} weight={700}>
          HC≡C⁻Na⁺ + Na → Na⁺⁻C≡C⁻Na⁺ + ½H2
        </T>
      </Fade>

      {/* beat 8 — the acidity order */}
      <Draw on={beat >= 8} delay={dl(8, 0.3)} d="M 60 345 L 60 381" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1)}>
        <T x={76} y={367} size={14} fill={RED} script anchor="start">
          {t("order: HC≡CH > CH3C≡CH > CH3C≡CCH3 (last: no acidic H)", "order: HC≡CH > CH3C≡CH > CH3C≡CCH3 (aakhri: koi acidic H nahi)")}
        </T>
      </Fade>
    </Scene>
  );
}
