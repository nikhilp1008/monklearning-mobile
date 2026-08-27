/**
 * C11 Ch09 · Section 15 — "Physical properties of alkanes"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 7.51, 17.49, 28.59, 42.5, 52.57, 64.09]):
 *  0 heading: non-polar, weak forces · 1 C/H electronegativity ≈ same, no
 *  charge separation · 2 held by weak van der Waals forces · 3 phase bar:
 *  C1-C4 gas / C5-C17 liquid / C18+ solid · 4 boiling point rises with chain
 *  length (green arrow) · 5 …but falls with branching · 6 RED: insoluble in
 *  water, soluble in non-polar solvents
 *
 * Layout plan:
 *  b1 | electronegativity line | T mid | y130
 *  b2 | van der Waals line     | T mid | y160
 *  b3 | phase bar (3 segments) | Draw+T| x150..820 y220..250, labels y210/268
 *  b4 | rising arrow + label   | Draw+T| x150..820 y305 · label y325
 *  b5 | branching line         | T mid | y360
 *  b6 | margin bar + red note  | Draw+T| bar x60 y400..440 · text bl420
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={27} fill={RED} script>
          {t("physical properties of alkanes", "alkanes ki physical properties")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={16} fill={INK} weight={700}>
          {t("non-polar molecules, weak forces", "non-polar molecules, weak forces")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={130} size={15} fill={INK}>
          {t("C and H differ little in electronegativity ⇒ ~no charge separation", "C aur H ki electronegativity lagbhag same ⇒ charge separation nahi")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={160} size={15} fill={INK}>
          {t("held only by weak van der Waals (dispersion) forces", "sirf weak van der Waals (dispersion) forces se juda hai")}
        </T>
      </Fade>

      {/* beat 3 — the phase bar */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d="M 150 220 H 320 V 250 H 150 Z" stroke={AMBER_DARK} sw={1.8} dur={0.5} fill={CREAM} />
      <Draw on={beat >= 3} delay={dl(3, 0.7)} d="M 320 220 H 670 V 250 H 320 Z" stroke={AMBER_DARK} sw={1.8} dur={0.6} fill="none" />
      <Draw on={beat >= 3} delay={dl(3, 1.1)} d="M 670 220 H 820 V 250 H 670 Z" stroke={AMBER_DARK} sw={1.8} dur={0.5} fill={CREAM} />
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <T x={235} y={212} size={13} fill={INK} weight={700}>C1–C4</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={495} y={212} size={13} fill={INK} weight={700}>C5–C17</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <T x={745} y={212} size={13} fill={INK} weight={700}>C18+</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={235} y={268} size={13} fill={MUTED} script>{t("gas", "gas")}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={495} y={268} size={13} fill={MUTED} script>{t("liquid", "liquid")}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.8)}>
        <T x={745} y={268} size={13} fill={MUTED} script>{t("solid", "solid")}</T>
      </Fade>

      {/* beat 4 — boiling point rises */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={arrowD(150, 305, 820, 305)} stroke={GREEN} sw={2.2} dur={0.9} />
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={485} y={325} size={14} fill={GREEN} script>
          {t("boiling point rises with chain length", "chain length ke saath boiling point badhta hai")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={360} size={15} fill={INK}>
          {t("…but falls with branching (more spherical, less contact area)", "…par branching se girta hai (zyada spherical, kam contact area)")}
        </T>
      </Fade>

      {/* beat 6 — solubility */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 400 L 60 440" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={420} size={16} fill={RED} script anchor="start">
          {t(
            "insoluble in water, soluble in non-polar solvents — like dissolves like",
            "paani mein insoluble, non-polar solvents mein soluble — like dissolves like"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
