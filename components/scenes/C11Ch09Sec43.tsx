/**
 * C11 Ch09 · Section 43 — "s-character sets the acidity"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 7.94, 19.11, 28.5, 39.08, 47.53, 56.15, 66.3]):
 *  0 heading · 1 3-column %s: sp3=1/4, sp2=1/3, sp=1/2 · 2 s orbital hugs
 *  nucleus tighter · 3 more s-character = more electronegative · 4 ethyne
 *  C-H slips off as H+ more readily · 5 only H on triple-bonded C counts ·
 *  6 RED: most-tested idea · 7 terminal alkynes form metal acetylides
 *
 * Layout plan — 3 columns x230/540/850, y150-210:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={27} fill={RED} script>
          {t("s-character sets the acidity", "s-character acidity set karta hai")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={15} fill={INK} weight={700}>
          {t("why the terminal hydrogen is acidic", "terminal hydrogen acidic kyun hai")}
        </T>
      </Fade>

      {/* beat 1 — the three columns */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={230} y={165} size={20} fill={INK} weight={800}>sp³</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={230} y={195} size={15} fill={MUTED} script>{t("¼ s-character", "¼ s-character")}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={540} y={165} size={20} fill={INK} weight={800}>sp²</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={540} y={195} size={15} fill={MUTED} script>{t("⅓ s-character", "⅓ s-character")}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={850} y={165} size={20} fill={RED} weight={800}>sp</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={850} y={195} size={15} fill={RED} script>{t("½ s-character", "½ s-character")}</T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={245} size={15} fill={INK}>
          {t("an s orbital hugs the nucleus more tightly than a p orbital", "s orbital nucleus ko p orbital se zyada kaskar pakadta hai")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={278} size={15} fill={INK}>
          {t("more s-character ⇒ the carbon is more electronegative", "zyada s-character ⇒ carbon zyada electronegative")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={311} size={15} fill={INK}>
          {t("so in ethyne the C–H hydrogen slips off as H⁺ more readily", "isliye ethyne mein C–H hydrogen aasani se H⁺ ban jaata")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={344} size={15} fill={INK}>
          {t("only a hydrogen on a triply-bonded carbon counts as acidic", "sirf triply-bonded carbon wala hydrogen acidic maana jaata")}
        </T>
      </Fade>

      {/* beat 6 — the most-tested idea */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 365 L 60 401" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={387} size={16} fill={RED} script anchor="start">
          {t("more s-character = more acidic terminal H", "zyada s-character = zyada acidic terminal H")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={430} size={15} fill={GREEN} weight={700}>
          {t("terminal alkynes form metal acetylides; alkenes/alkanes do not", "terminal alkynes metal acetylides banate; alkenes/alkanes nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
