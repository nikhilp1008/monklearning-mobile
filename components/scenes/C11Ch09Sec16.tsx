/**
 * C11 Ch09 · Section 16 — "The rest of the reaction map"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 8.19, 20.99, 31.06, 42.92, 51.71, 64.94, 82.77]):
 *  0 heading · 1 combustion (boxed, ΔcH=-890) · 2 incomplete combustion ·
 *  3 controlled oxidation · 4 3° H + KMnO4 · 5 isomerisation · 6 aromatization
 *  · 7 steam reforming + pyrolysis
 *
 * Layout plan — 7-row list, left-aligned x60, rows 32px apart from y130:
 *  b1 | boxed combustion eq  | Draw+T | box x60..760 y110..146 · text bl133
 *  b2..b7 | one line each     | T st   | x60, y 178/210/242/274/306/338
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={26} fill={RED} script>
          {t("the rest of the reaction map", "reaction map ka baaki hissa")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={16} fill={INK} weight={700}>
          {t("beyond substitution — five more reactions", "substitution ke aage — paanch aur reactions")}
        </T>
      </Fade>

      {/* beat 1 — combustion, boxed */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M 60 112 H 780 V 146 H 60 Z" stroke={AMBER_DARK} sw={1.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={70} y={134} size={15} fill={INK} weight={700} anchor="start">
          {t("Combustion: CH4 + 2O2 → CO2 + 2H2O  (ΔcH = −890 kJ/mol)", "Combustion: CH4 + 2O2 → CO2 + 2H2O  (ΔcH = −890 kJ/mol)")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={60} y={178} size={15} fill={INK} anchor="start">
          {t("Incomplete combustion → carbon black or carbon monoxide", "Incomplete combustion → carbon black ya carbon monoxide")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={60} y={210} size={15} fill={INK} anchor="start">
          {t("Controlled oxidation: CH4/Cu, 523K → methanol; /MoOx → methanal", "Controlled oxidation: CH4/Cu, 523K → methanol; /MoOx → methanal")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={60} y={242} size={15} fill={INK} anchor="start">
          {t("Alkanes with a 3° H + KMnO4 → tertiary alcohol", "3° H wale alkanes + KMnO4 → tertiary alcohol")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={60} y={274} size={15} fill={INK} anchor="start">
          {t("Isomerisation: straight chain + anhydrous AlCl3/HCl → branched", "Isomerisation: straight chain + anhydrous AlCl3/HCl → branched")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={60} y={306} size={15} fill={INK} anchor="start">
          {t("Aromatization: C6+ alkane, 773K, oxides → benzene (n-hexane → benzene)", "Aromatization: C6+ alkane, 773K, oxides → benzene (n-hexane → benzene)")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={60} y={338} size={15} fill={INK} anchor="start">
          {t("Steam: CH4 + H2O/Ni, 1273K → CO + H2; pyrolysis cracks higher alkanes", "Steam: CH4 + H2O/Ni, 1273K → CO + H2; pyrolysis higher alkanes crack karta")}
        </T>
      </Fade>
    </Scene>
  );
}
