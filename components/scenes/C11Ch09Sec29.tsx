/**
 * C11 Ch09 · Section 29 — "Making alkenes I: from alkynes (geometry control)"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 8.28, 20.14, 27.14, 40.79, 47.45, 56.75]):
 *  0 heading · 1 Lindlar's (poisoned Pd) → cis · 2 Na/liq.NH3 → trans ·
 *  3 poisoned ⇒ stops at alkene not alkane · 4 concrete: CH3-C≡C-CH3
 *  --Na/liq.NH3--> trans-but-2-ene · 5 Lindlar⇒syn⇒cis; Na/NH3⇒trans ·
 *  6 RED: reducing system SETS the geometry
 *
 * Layout plan — two reaction rows y150 (Lindlar) / y230 (Na/NH3):
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { ReactionArrow } from "./chem-kit";

export default function C11Ch09Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={23} fill={RED} script>
          {t("making alkenes I: from alkynes (geometry control)", "alkenes banana I: alkynes se (geometry control)")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={15} fill={INK} weight={700}>
          {t("partial reduction of alkynes sets the geometry", "alkynes ka partial reduction geometry set karta hai")}
        </T>
      </Fade>

      {/* beat 1 — Lindlar's -> cis */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={175} y={165} size={16} fill={INK} weight={700} anchor="start">alkyne</T>
      </Fade>
      <ReactionArrow on={beat >= 1} delay={dl(1, 1)} x1={280} x2={430} y={160} over={t("Lindlar's Pd (poisoned)", "Lindlar's Pd (poisoned)")} color={INK} />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={450} y={165} size={17} fill={GREEN} weight={800} anchor="start">
          {t("cis-alkene", "cis-alkene")}
        </T>
      </Fade>

      {/* beat 2 — Na/NH3 -> trans */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={175} y={245} size={16} fill={INK} weight={700} anchor="start">alkyne</T>
      </Fade>
      <ReactionArrow on={beat >= 2} delay={dl(2, 1)} x1={280} x2={430} y={240} over={t("Na / liq. NH3", "Na / liq. NH3")} color={INK} />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={450} y={245} size={17} fill={RED} weight={800} anchor="start">
          {t("trans-alkene", "trans-alkene")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={175} y={195} size={13} fill={MUTED} script anchor="start">
          {t("poisoned ⇒ stops at the alkene, not the alkane", "poisoned ⇒ alkene pe ruk jaata, alkane tak nahi")}
        </T>
      </Fade>

      {/* beat 4 — the concrete example */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={310} size={16} fill={INK} weight={700}>
          CH3–C≡C–CH3 → trans-but-2-ene ({t("Na/liq. NH3", "Na/liq. NH3")})
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={345} size={15} fill={INK}>
          {t("Lindlar ⇒ syn addition ⇒ cis; Na/NH3 ⇒ trans", "Lindlar ⇒ syn addition ⇒ cis; Na/NH3 ⇒ trans")}
        </T>
      </Fade>

      {/* beat 6 — the exam hook */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 370 L 60 406" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={392} size={16} fill={RED} script anchor="start">
          {t("the choice of reducing system SETS the geometry", "reducing system ka choice hi geometry SET karta hai")}
        </T>
      </Fade>
    </Scene>
  );
}
