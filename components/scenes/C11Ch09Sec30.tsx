/**
 * C11 Ch09 · Section 30 — "Making alkenes II: three eliminations"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 9.3, 18.86, 35.5, 48.81, 56.15, 71.77]):
 *  0 heading: 3 more routes, all eliminations · 1 (b) dehydrohalogenation:
 *  R-X + alc. KOH removes HX · 2 H leaves β-carbon, rates I>Br>Cl 3°>2°>1°
 *  · 3 (c) dehalogenation: vicinal dihalide + Zn loses ZnX2 · 4 formula
 *  CH2BrCH2Br + Zn -> CH2=CH2 + ZnBr2 · 5 (d) dehydration: alcohol + conc.
 *  H2SO4 · 6 RED: all four routes remove atoms to unveil C=C
 *
 * Layout plan — 3 labeled rows y130/225/320:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED,
  Scene,
} from '@/components/scenes/kit';
import { ReactionArrow } from "./chem-kit";

export default function C11Ch09Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={24} fill={RED} script>
          {t("making alkenes II: three eliminations", "alkenes banana II: teen eliminations")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={15} fill={INK} weight={700}>
          {t("three more routes — all eliminations", "teen aur routes — sab eliminations")}
        </T>
      </Fade>

      {/* beat 1 — dehydrohalogenation */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={135} size={16} fill={INK} weight={800} anchor="start">
          {t("(b) Dehydrohalogenation", "(b) Dehydrohalogenation")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={540} y={135} size={15} fill={INK}>
          {t("R–X + alcoholic KOH removes one HX", "R–X + alcoholic KOH ek HX nikaal deta")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={168} size={14} fill={INK}>
          {t("H leaves the β-carbon ⇒ β-elimination; rates I>Br>Cl, 3°>2°>1°", "H β-carbon se jaata ⇒ β-elimination; rates I>Br>Cl, 3°>2°>1°")}
        </T>
      </Fade>

      {/* beat 3 — dehalogenation */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={60} y={225} size={16} fill={INK} weight={800} anchor="start">
          {t("(c) Dehalogenation", "(c) Dehalogenation")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={540} y={225} size={15} fill={INK}>
          {t("a vicinal dihalide + Zn loses ZnX2", "vicinal dihalide + Zn se ZnX2 nikal jaata")}
        </T>
      </Fade>

      {/* beat 4 — the concrete equation */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={175} y={270} size={16} fill={INK} weight={700} anchor="start">
          CH2Br–CH2Br
        </T>
      </Fade>
      <ReactionArrow on={beat >= 4} delay={dl(4, 1)} x1={330} x2={430} y={265} over="Zn" color={INK} />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={450} y={270} size={16} fill={INK} weight={700} anchor="start">
          CH2=CH2 + ZnBr2
        </T>
      </Fade>

      {/* beat 5 — dehydration */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={60} y={325} size={16} fill={INK} weight={800} anchor="start">
          {t("(d) Dehydration", "(d) Dehydration")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={325} size={15} fill={INK}>
          {t("alcohol + conc. H2SO4 eliminates water", "alcohol + conc. H2SO4 paani eliminate karta")}
        </T>
      </Fade>

      {/* beat 6 — the pattern */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 360 L 60 396" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={382} size={16} fill={RED} script anchor="start">
          {t("all four routes remove atoms to unveil a C=C", "chaaron routes atoms hata kar C=C ko unveil karte")}
        </T>
      </Fade>
    </Scene>
  );
}
